<template>
    <section id="dashboard-ecommerce">
        <b-row class="match-height">
            <b-col cols="12">
                <b-card no-body class="card-statistics">
                    <b-card-header>
                        <b-card-title>
                            Search Doctors
                        </b-card-title>
                    </b-card-header>
                    <b-card-body class="statistics-body">
                        <b-form @submit.prevent>
                            <b-row>
                                <b-col md="6">
                                    <b-form-group>
                                        <h5>By CLinic</h5>
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
                                <b-col md="6">
                                    <b-form-group>
                                        <h5>By Dr. Name</h5>
                                        <b-form-input
                                            id="basicInput"
                                            placeholder="Name"
                                        />
                                    </b-form-group>
                                    <b-form-group>
                                        <h5>By Language</h5>
                                        <v-select
                                            v-model="selected1"
                                            :dir="
                                                $store.state.appConfig.isRTL
                                                    ? 'rtl'
                                                    : 'ltr'
                                            "
                                            :options="langs"
                                            placeholder="Search"
                                        >
                                            <template #option="{ title }">
                                                <span> {{ title }}</span>
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
                    <b-card-header>
                        <b-card-title>
                            No Doctors found
                        </b-card-title>
                    </b-card-header>
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

        vSelect,
    },
    data() {
        return {
            rangeDate: null,
            books: [
                {
                    title: 'MRC Cure',
                    icon: 'HomeIcon',
                },
                {
                    title: 'Medical Reference',
                    icon: 'HomeIcon',
                },
                {
                    title: 'MR Center',
                    icon: 'HomeIcon',
                },
                {
                    title: 'All',
                    icon: 'HomeIcon',
                },
            ],
            langs: [
                {
                    title: 'Arabic',
                },
                {
                    title: 'English',
                },
                {
                    title: 'All',
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
