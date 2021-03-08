<template>
    <section id="dashboard-ecommerce">
        <b-row class="match-height">
            <b-col cols="12">
                <b-card no-body class="card-statistics">
                    <b-card-header>
                        <b-card-title>
                            {{$route.params.title}}
                        </b-card-title>
                    </b-card-header>
                    <b-card-body class="statistics-body">
                        <b-form @submit.prevent>
                            <b-row>
                                <b-col md="4">
                                    <b-form-group>
                                        <h5>Date Range</h5>
                                        <flat-pickr
                                            class="form-control"
                                            value=""
                                            placeholder="Select"
                                            :config="{ mode: 'range' }"
                                        />
                                    </b-form-group>
                                </b-col>
                                <b-col md="4">
                                    <b-form-group>
                                        <h5>Reports</h5>
                                        <b-form-input
                                            id="basicInput"
                                            placeholder="Search"
                                        />
                                    </b-form-group>
                                </b-col>
                                <!-- submit and reset -->
                                <b-col class="d-flex align-items-end mb-1">
                                    <b-button
                                        type="submit"
                                        variant="primary"
                                        class="mr-1"
                                    >
                                        Search
                                    </b-button>
                                    <b-button
                                        type="reset"
                                        variant="outline-secondary"
                                    >
                                        Clear Filters
                                    </b-button>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col cols="12">
                <b-card no-body class="card-statistics">
                    <b-card-body class="statistics-body">
                        <b-table responsive="sm" :items="items" />
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </section>
</template>

<script>
import {
    BRow,
    BCol,
    BButton,
    BCard,
    BCardBody,
    BCardTitle,
    BCardHeader,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
} from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'

export default {
    components: {
        BRow,
        BCol,
        BButton,
        BCard,
        BCardTitle,
        BCardHeader,
        BCardBody,
        BFormGroup,
        BFormInput,
        BForm,
        BTable,

        flatPickr,
    },
    data() {
        return {
            rangeDate: null,
            items: [
                {
                    '#': 40,
                    report_number: '#123456',
                    actions: 'Pending',
                },
                {
                    '#': 21,
                    report_number: '#123456',
                    actions: 'Ready',
                },
                {
                    '#': 89,
                    report_number: '#123456',
                    actions: 'Out Dated',
                },
            ],
        }
    },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
@import '@core/scss/vue/libs/vue-select.scss';
</style>
