<template>
    <section id="dashboard-ecommerce">
        <b-row class="match-height">
            <b-col cols="12">
                <b-card no-body class="card-statistics">
                    <b-card-header>
                        <b-card-title>
                            Out Patients List
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
                                        <h5>By Doctor</h5>
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
                                <b-col md="4">
                                    <b-form-group>
                                        <h5>By Patient</h5>
                                        <v-select
                                            v-model="selected1"
                                            :dir="
                                                $store.state.appConfig.isRTL
                                                    ? 'rtl'
                                                    : 'ltr'
                                            "
                                            :options="patients"
                                            placeholder="Search"
                                        >
                                            <template
                                                #option="{ title, icon, id }"
                                            >
                                                <div
                                                    class="d-flex align-items-center"
                                                >
                                                    <b-avatar
                                                        size="18"
                                                        :src="icon"
                                                        :text="icon"
                                                        variant="primary"
                                                    />
                                                    <strong class="mx-2">
                                                        {{ id }}</strong
                                                    >
                                                    <span class="text-right">
                                                        {{ title }}</span
                                                    >
                                                </div>
                                            </template>
                                        </v-select>
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
                        <b-table
                            ref="refUserListTable"
                            class="position-relative"
                            :items="items"
                            responsive
                            :fields="tableColumns"
                            primary-key="id"
                            show-empty
                            empty-text="No patients found"
                        >
                            <!-- Column: User -->
                            <template #cell(patient_file_no)="data">
                                <b-link
                                    :to="{
                                        name: 'patient-record',
                                        params: { id: data.item.patient_file_no },
                                    }"
                                    class="font-weight-bold d-block text-nowrap"
                                >
                                    {{ data.item.patient_file_no }}
                                </b-link>
                            </template>
                        </b-table>
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
    BForm,
    BTable,
    BAvatar,
    BLink,
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
        BForm,
        BTable,
        BAvatar,
        BLink,

        flatPickr,
        vSelect,
    },
    data() {
        return {
            rangeDate: null,
            selected1: null,
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
            patients: [
                {
                    id: '1234',
                    title: 'Ahmed Usama',
                    icon: 'AU',
                },
                {
                    id: '1234',
                    title: 'Ayman L',
                    icon: 'AL',
                },
                {
                    id: '1234',
                    title: 'Badr R.',
                    icon: 'BR',
                },
                {
                    id: '1234',
                    title: 'Abdul Hamid',
                    icon: 'AH',
                },
            ],
            items: [
                {
                    serial_no: 1,
                    patient_file_no: '#123456',
                    patient_name: 'Ahmed Usama',
                    service_name: 'Consultation',
                    sequence: 'W1',
                    come_in: true,
                    invoice: 12,
                    invoice_date: new Date().toLocaleDateString(),
                    time: '10:00:08PM',
                },
                {
                    serial_no: 1,
                    patient_file_no: '#5469875',
                    patient_name: 'Abdul Hamid',
                    service_name: 'Consultation',
                    sequence: 'W1',
                    come_in: false,
                    invoice: 9,
                    invoice_date: new Date().toLocaleDateString(),
                    time: '06:00:08PM',
                },
            ],
            tableColumns: [
                { key: 'serial_no', sortable: true },
                { key: 'patient_file_no', sortable: true },
                { key: 'patient_name', sortable: true },
                { key: 'service_name', sortable: true },
                { key: 'sequence', sortable: true },
                { key: 'come_in' },
                { key: 'invoice', sortable: true },
                { key: 'invoice_date', sortable: true },
                { key: 'time', sortable: true },
            ],
        }
    },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
@import '@core/scss/vue/libs/vue-select.scss';
</style>
