<template>
    <b-card body-class="p-0" header-class="w-100">
        <template #header>
            <b-row>
                <b-col md="4" sm="12">
                    <h4>{{__('daily_transactions','Daily Transaction')}}</h4>
                </b-col>
                <b-col md="5" sm="12">
                    <b-button size="sm" target="_blank" variant="dark"
                              :href="route('Backend.Reports.IncomeExpense',{date:date,pdf:'html'})">
                        {{__('view','View')}}
                    </b-button>
                    <b-button size="sm" target="_blank" variant="dark"
                              :href="route('Backend.Reports.IncomeExpense',{date:date,pdf:'pdf'})">
                        {{__('export','Export')}}
                    </b-button>
                    <b-button size="sm" target="_blank" variant="dark"
                              :href="route('Backend.Reports.IncomeExpenseGrouped',{date:date,pdf:'pdf'})">
                        Grouped Export
                    </b-button>
                </b-col>
                <b-col md="3" sm="12">
                    <b-input-group size="sm" :prepend="__('date','Date')">
                        <b-input type="date" v-model="date"/>
                    </b-input-group>
                </b-col>
            </b-row>
        </template>
        <b-form-row>
            <b-col md="6" sm="12">
                <b-card
                    class="h-100 border-0"
                    body-class="p-0"
                    header-class="text-center"
                    header-bg-variant="dark"
                    header-text-variant="light"
                    :header="__('transaction.income', 'Income')">
                    <b-tabs card>
                        <b-tab :title="__('transaction.customer_payments', 'Customer Payments')" class="p-2" lazy>
                            <sale-payments :date="date"></sale-payments>
                        </b-tab>
                        <b-tab :title="__('capital_deposit', 'Capital Deposit')" class="p-2" lazy>
                            <capital-deposit :date="date"></capital-deposit>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
            <b-col md="6" sm="12">
                <b-card
                    class="h-100"
                    header-bg-variant="dark"
                    header-text-variant="light"
                    header-class="text-center"
                    body-class="p-0"
                    :header="__('transaction.expense', 'Expense')"
                >
                    <b-tabs card>
                        <b-tab :title="__('daily_expenses', 'Daily Expenses')" class="p-2" lazy>
                            <expenses :date="date"/>
                        </b-tab>
                        <b-tab :title="__('exmployee_salaries', 'Employee Salaries')" class="p-2" lazy>
                            <employee-salaries :date="date"/>
                        </b-tab>
                        <b-tab :title="__('transaction.supplier_payments', 'Supplier Payments')" class="p-2" lazy>
                            <purchase-payments :date="date"/>
                        </b-tab>
                        <b-tab :title="__('capital_withdraw', 'Capital Withdraw')" class="p-2" lazy>
                            <capital-withdraw :date="date"/>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
        </b-form-row>
    </b-card>
</template>
<script>
    import dayjs from "dayjs";
    import Expenses from "@/components/transactions/Expenses";
    import EmployeeSalaries from "@/components/transactions/EmployeeSalaries";
    import PurchasePayments from "@/components/transactions/PurchasePayments";
    import SalePayments from "@/components/transactions/SalePayments";
    import CapitalDeposit from "@/components/transactions/CapitalDeposit";
    import CapitalWithdraw from "@/components/transactions/CapitalWithdraw";

    export default {
        components: {
            Expenses,
            EmployeeSalaries,
            PurchasePayments,
            SalePayments,
            CapitalDeposit,
            CapitalWithdraw
        },
        data() {
            return {
                date: dayjs(new Date()).format("YYYY-MM-DD"),
                currentItem: null,
            };
        },
        methods: {},
    };
</script>

<style scoped>
</style>
