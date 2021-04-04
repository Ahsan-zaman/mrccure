<template>
    <section id="dashboard-ecommerce">
        <b-row class="match-height">
            <b-col cols="12">
                <b-card no-body class="card-statistics">
                    <b-card-body class="statistics-body">
                        <div class="demo-inline-spacing">
                            <b-button variant="primary">
                                Request An Appointment
                            </b-button>
                            <b-button variant="success">
                                Completed Appointment
                            </b-button>
                            <b-button variant="danger">
                                Canceled Appointment
                            </b-button>
                            <b-button variant="warning">
                                No Show Appointment
                            </b-button>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col cols="12">
                <b-card no-body class="card-statistics">
                    <b-card-header>
                        <b-card-title>
                            Your Next Appointments
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
                                        <h5>Select the Clinic</h5>
                                        <b-form-input
                                            id="basicInput"
                                            placeholder="Search"
                                        />
                                    </b-form-group>
                                </b-col>
                                <b-col md="4">
                                    <b-form-group>
                                        <h5>Select Physician</h5>
                                        <v-select
                                            v-model="selected1"
                                            :dir="
                                                $store.state.appConfig.isRTL
                                                    ? 'rtl'
                                                    : 'ltr'
                                            "
                                            :options="books"
                                            placeholder="Search"
                                        >
                                            <template #option="{ title, icon }">
                                                <feather-icon
                                                    :icon="icon"
                                                    size="16"
                                                    class="align-middle mr-50"
                                                />
                                                <span> {{ title }}</span>
                                            </template>
                                        </v-select>
                                    </b-form-group>
                                </b-col>
                                <!-- submit and reset -->
                                <b-col>
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
} from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import vSelect from 'vue-select'

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

        flatPickr,
        vSelect,
    },
    data() {
        return {
            rangeDate: null,
            books: [
                {
                    title: 'Dr. Ahmed',
                    icon: 'UserIcon',
                },
                {
                    title: 'Dr. Ayman',
                    icon: 'UserIcon',
                },
                {
                    title: 'Dr. Badr',
                    icon: 'UserIcon',
                },
                {
                    title: 'Dr. Abdul Hamid',
                    icon: 'UserIcon',
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
