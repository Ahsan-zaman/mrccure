<template>
    <section>
        <b-row class="match-height">
            <b-col cols="12" sm="9" md="10">
                <b-card>
                    <b-row>
                        <!-- User Info: Left col -->
                        <b-col cols="12" xl="6">
                            <div
                                class="d-flex h-100 justify-content-center flex-column"
                            >
                                <!-- User Avatar & Action Buttons -->
                                <small class="mt-25">Doctor</small>
                                <div class="d-flex justify-content-start">
                                    <b-avatar text="AB" size="50px" rounded />
                                    <div class="d-flex flex-column ml-1">
                                        <div class="mb-1">
                                            <h4 class="mb-0">
                                                DR. Abdul Hamid
                                            </h4>
                                            <span class="card-text">
                                                #59876352
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <small class="mt-25">Patient</small>
                                <div class="d-flex justify-content-start">
                                    <b-avatar text="AU" size="50px" rounded />
                                    <div class="d-flex flex-column ml-1">
                                        <div class="mb-1">
                                            <h4 class="mb-0">
                                                Ahmed Usama
                                            </h4>
                                            <span class="card-text">
                                                #123456
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <!-- Right Col: Table -->
                        <b-col cols="12" xl="6">
                            <div
                                class="d-flex flex-column justify-content-center mt-2"
                            >
                                <div class="d-flex align-items-center">
                                    <div class="ml-1">
                                        <small>Age</small>
                                        <h5 class="mb-0">
                                            56 years, 10 months
                                        </h5>
                                    </div>
                                </div>

                                <div class="d-flex align-items-center">
                                    <div class="ml-1">
                                        <small>Gender</small>
                                        <h5 class="mb-0">
                                            Male
                                        </h5>
                                    </div>
                                </div>

                                <div class="d-flex align-items-center">
                                    <div class="ml-1">
                                        <small>Patient Type</small>
                                        <h5 class="mb-0">
                                            CASH
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col cols="12" sm="3" md="2">
                <b-card no-body>
                    <b-card-header class="pt-75 pb-25">
                        <h5 class="mb-0">
                            Visits
                        </h5>
                    </b-card-header>

                    <b-card-body>
                        <ul class="list-unstyled my-1">
                            <li class="d-flex flex-column">
                                <small class="text-muted w-100"
                                    >Total visits</small
                                >
                                <span class="align-middle">00</span>
                            </li>
                            <li class="d-flex flex-column my-25">
                                <small class="text-muted w-100">Date</small>
                                <span class="align-middle">July 22, 2021</span>
                            </li>
                            <li class="d-flex flex-column">
                                <small class="text-muted w-100">Time</small>
                                <span class="align-middle">10:36:08 PM</span>
                            </li>
                        </ul>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="match-height">
            <b-col cols="12" sm="8" md="9">
                <b-card>
                    <b-tabs>
                        <b-tab v-for="tab in tabs" :key="tab" :title="tab">
                            <b-row>
                                <b-col cols="12">
                                    <div class="my-2">
                                        <b-form-radio-group
                                            v-model="v"
                                            :options="options"
                                        />
                                    </div>
                                </b-col>
                                <b-col cols="12">
                                    <b-table responsive="sm" :items="items" />
                                </b-col>
                                <b-col cols="12">
                                    <b-table responsive="sm" :items="items2" />
                                </b-col>
                            </b-row>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
            <b-col cols="12" sm="4" md="3">
                <b-card no-body>
                    <b-card-header class="pt-75 pb-25">
                        <b-card-title>Past History</b-card-title>
                        <b-dropdown
                            variant="link"
                            dropleft
                            no-caret
                            class="chart-dropdown"
                            toggle-class="p-0"
                        >
                            <template #button-content>
                                <feather-icon
                                    icon="MoreVerticalIcon"
                                    size="18"
                                    class="text-body cursor-pointer"
                                />
                            </template>
                            <b-dropdown-item>Add new</b-dropdown-item>
                            <b-dropdown-item>Edit</b-dropdown-item>
                            <b-dropdown-item>Delete</b-dropdown-item>
                        </b-dropdown>
                    </b-card-header>

                    <b-card-body>
                        <ul class="list-unstyled my-1">
                            <li class="d-flex flex-column">
                                <span>No Records</span>
                            </li>
                        </ul>
                    </b-card-body>
                </b-card>
                <b-card no-body>
                    <b-card-header class="pt-75 pb-25">
                        <h5 class="mb-0">
                            Past Surgical History
                        </h5>
                    </b-card-header>

                    <b-card-body>
                        <ul class="list-unstyled my-1">
                            <li class="d-flex flex-column">
                                <span>No Records</span>
                            </li>
                        </ul>
                    </b-card-body>
                </b-card>
                <b-card no-body>
                    <b-card-header class="pt-75 pb-25">
                        <h5 class="mb-0">
                            Family Medical History
                        </h5>
                    </b-card-header>

                    <b-card-body>
                        <ul class="list-unstyled my-1">
                            <li class="d-flex flex-column">
                                <span>No Records</span>
                            </li>
                        </ul>
                    </b-card-body>
                </b-card>
                <b-card no-body>
                    <b-card-header class="pt-75 pb-25">
                        <h5 class="mb-0">
                            Home Medicine
                        </h5>
                    </b-card-header>

                    <b-card-body>
                        <ul class="list-unstyled my-1">
                            <li class="d-flex flex-column">
                                <span>No Records</span>
                            </li>
                        </ul>
                    </b-card-body>
                </b-card>
                <b-card no-body>
                    <b-card-header class="pt-75 pb-25">
                        <h5 class="mb-0">
                            Allergies
                        </h5>
                    </b-card-header>

                    <b-card-body>
                        <ul class="list-unstyled my-1">
                            <li class="d-flex flex-column">
                                <span>No Records</span>
                            </li>
                        </ul>
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
    BCard,
    BCardHeader,
    BCardBody,
    BTable,
    BAvatar,
    BTabs,
    BTab,
    BDropdown,
    BDropdownItem,
    BFormRadioGroup,
} from 'bootstrap-vue'

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BCardHeader,
        BCardBody,
        BTable,
        BAvatar,
        BTabs,
        BTab,
        BDropdown,
        BDropdownItem,
        BFormRadioGroup,
    },
    data() {
        return {
            rangeDate: null,
            selected1: null,
            tabs: [
                'Files',
                'Graphs',
                'Progress Notes',
                'Requests',
                'C/O Doctor',
                'OR Notify',
                'Previous Clinics',
                'Archive',
                'Vaccinations',
                'Reports',
            ],
            items: [
                {
                    code: 'S40.81',
                    favourite: 'Abrasion of shoulder and upper arm',
                },
                {
                    code: 'G36.1',
                    favourite: 'Ac & Subac Haem',
                },
                {
                    code: 'J21.81',
                    favourite: 'Ac bronchiolitis DT other spec organisms',
                },
            ],
            items2: [
                {
                    ser: 'S40.81',
                    code: 'S40.81',
                    deescription: 'Abrasion of shoulder and upper arm',
                    type: 'Diag',
                },
                {
                    ser: 'S40.81',
                    code: 'S40.81',
                    deescription: 'Abrasion of shoulder and upper arm',
                    type: 'Diag',
                },
            ],
            options: [
                { text: 'Complaint & Presnt History', value: 'first' },
                { text: 'Significant Signs & CLinical Exam', value: 'second' },
                { text: 'ICD10 Diagnosis', value: 'third' },
            ],
            v: 'first',
        }
    },
}
</script>
