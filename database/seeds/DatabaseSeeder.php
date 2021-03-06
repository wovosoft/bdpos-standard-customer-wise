<?php

use Database\Factories\BrandFactory;
use Database\Factories\CategoryFactory;
use Database\Factories\CustomerFactory;
use Database\Factories\EmployeeFactory;
use Database\Factories\ExpenseCategoryFactory;
use Database\Factories\ProductFactory;
use Database\Factories\SupplierFactory;
use Database\Factories\UnitFactory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Wovosoft\LaravelPermissions\Models\Permissions;
use Wovosoft\LaravelPermissions\Models\Roles;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            SettingsSeeder::class,
            LanguageSeeder::class
        ]);
        $permissions = config("laravel-permissions.default_permissions");
        $roles = config("laravel-permissions.default_roles");


        foreach ($permissions as $permission) {
            Permissions::query()->firstOrCreate(
                [
                    "name" => $permission["name"]
                ],
                [
                    "description" => $permission["description"]
                ]
            );
        }

        $this->command->info('Default Permissions added.');
        $count_create = 10;
        foreach ($roles as $role) {
            $role = Roles::query()->firstOrCreate($role);

            if ($role->name == 'Super Admin') {
                // assign all permissions
                $role->syncPermissions(Permissions::all());
                $this->command->info('Super Admin granted all the permissions');
            } else {
                // for others by default only read access
                $role->syncPermissions(Permissions::query()->where('name', 'LIKE', 'view_%')->get());
            }

            // create one user for each role
            $this->createUser($role);
        }

        // Reset cached roles and permissions
        $this->command->info("\nWe are flushing the new records from database to the cache.\n");
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $this->command->warn('All done Role & Permissions created :)');

        $units = [
            'kg' => 'kilogram',
            'cm' => 'centimeter',
            'gm' => 'gram',
            'qty' => 'Quantity'
        ];
        foreach ($units as $key => $value) {
            UnitFactory::new()->create(['name' => $key, 'description' => $value]);
        }

//        CategoryFactory::new()->count($count_create)->create();
//        BrandFactory::new()->count($count_create)->create();
//        ProductFactory::new()->count(20)->create();
//        SupplierFactory::new()->count($count_create)->create();
//        CustomerFactory::new()->count($count_create)->create();
//        EmployeeFactory::new()->count($count_create)->create();
//        ExpenseCategoryFactory::new()->count($count_create)->create();


        refreshLanguages();
        refreshCachedSettings();
    }

    private function createUser($role)
    {
        if ($role->name == 'Super Admin') {
            $user = \Database\Factories\UserFactory::new()->create([
                "name" => "Super Admin",
                "email" => "superadmin@gmail.com",
                "password" => Hash::make("superadmin123456789")
            ]);
            $user->assignRole($role->name);
        } else {
            $user = \Database\Factories\UserFactory::new()->create();
            $user->assignRole($role->name);
        }
    }
}
