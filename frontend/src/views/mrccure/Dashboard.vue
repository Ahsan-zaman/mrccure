<template>
    <section id="dashboard-ecommerce">
        <b-row class="match-height">
            <b-col cols="12">
                <b-card v-if="data" no-body class="card-statistics">
                    <b-card-header>
                        <b-card-title>Summary</b-card-title>
                        <b-card-text class="font-small-2 mr-25 mb-0">
                            Updated few seconds ago
                        </b-card-text>
                    </b-card-header>
                    <b-card-body class="statistics-body">
                        <b-row>
                            <b-col
                                v-for="item in data"
                                :key="item.icon"
                                md="4"
                                sm="6"
                                :class="item.customClass"
                            >
                                <b-media no-body>
                                    <b-media-aside class="mr-2">
                                        <b-avatar
                                            size="48"
                                            :variant="item.color"
                                        >
                                            <feather-icon
                                                size="24"
                                                :icon="item.icon"
                                            />
                                        </b-avatar>
                                    </b-media-aside>
                                    <b-media-body class="my-auto">
                                        <h4 class="font-weight-bolder mb-0">
                                            {{ item.title }}
                                        </h4>
                                        <b-card-text class="font-small-3 mb-0">
                                            {{ item.subtitle }}
                                        </b-card-text>
                                    </b-media-body>
                                </b-media>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col cols="12" md="6">
                <b-card v-if="data2" no-body class="card-developer-meetup">
                    <div class="bg-light-primary rounded-top text-center">
                        <b-img
                            :src="
                                require('@/assets/images/illustration/email.svg')
                            "
                            alt="Meeting Pic"
                            height="170"
                        />
                    </div>
                    <b-card-body>
                        <!-- metting header -->
                        <div class="meetup-header d-flex align-items-center">
                            <div class="meetup-day">
                                <h6 class="mb-0">
                                    THU
                                </h6>
                                <h3 class="mb-0">
                                    24
                                </h3>
                            </div>
                            <div class="my-auto">
                                <b-card-title class="mb-25">
                                    Scheduled Apponments
                                </b-card-title>
                                <b-card-text class="mb-0">
                                    List of apponments coming up
                                </b-card-text>
                            </div>
                        </div>
                        <!--/ metting header -->

                        <!-- media -->
                        <b-media
                            v-for="media in data2.mediaData"
                            :key="media.avatar"
                            no-body
                        >
                            <b-media-aside class="mr-1">
                                <b-avatar
                                    rounded
                                    variant="light-primary"
                                    size="34"
                                >
                                    <feather-icon
                                        :icon="media.avatar"
                                        size="18"
                                    />
                                </b-avatar>
                            </b-media-aside>
                            <b-media-body>
                                <h6 class="mb-0">
                                    {{ media.title }}
                                </h6>
                                <small>{{ media.subtitle }}</small>
                            </b-media-body>
                        </b-media>

                        <!-- avatar group -->
                        <b-avatar-group class="mt-2 pt-50" size="34px">
                            <h5 class="align-self-center mb-0 mr-2">
                                Doctor(s):
                            </h5>
                            <b-avatar
                                v-for="avatar in data2.avatars"
                                :key="avatar.avatar"
                                v-b-tooltip.hover.bottom="avatar.fullName"
                                :src="avatar.avatar"
                                class="pull-up"
                            />
                            <h6
                                class="align-self-center cursor-pointer ml-1 mb-0"
                            >
                                +1
                            </h6>
                        </b-avatar-group>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col cols="12" md="6">
                <b-card v-if="data" class="card-transaction" no-body>
                    <b-card-header>
                        <b-card-title>LAB Reports</b-card-title>

                        <b-dropdown
                            variant="link"
                            no-caret
                            class="chart-dropdown"
                            toggle-class="p-0"
                            right
                        >
                            <template #button-content>
                                <feather-icon
                                    icon="MoreVerticalIcon"
                                    size="18"
                                    class="text-body cursor-pointer"
                                />
                            </template>
                            <b-dropdown-item href="#">
                                Last 28 Days
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
                                Last Month
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
                                Last Year
                            </b-dropdown-item>
                        </b-dropdown>
                    </b-card-header>

                    <b-card-body>
                        <div
                            v-for="transaction in data3"
                            :key="transaction.mode"
                            class="transaction-item"
                        >
                            <b-media no-body>
                                <b-media-aside>
                                    <b-avatar
                                        rounded
                                        size="42"
                                        :variant="transaction.avatarVariant"
                                    >
                                        <b-img width="32" :src="transaction.avatar"></b-img>
                                    </b-avatar>
                                </b-media-aside>
                                <b-media-body>
                                    <h6 class="transaction-title">
                                        {{ transaction.mode }}
                                    </h6>
                                    <small>{{ transaction.types }}</small>
                                </b-media-body>
                            </b-media>
                            <div
                                class="font-weight-bolder"
                                :class="
                                    transaction.deduction
                                        ? 'text-danger'
                                        : 'text-success'
                                "
                            >
                                {{ transaction.payment }}
                            </div>
                        </div>
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
    BCardTitle,
    BCardText,
    BCardBody,
    BMedia,
    BMediaAside,
    BAvatar,
    BMediaBody,
    BImg,
    BAvatarGroup,
    BDropdown,
    BDropdownItem,
} from 'bootstrap-vue'

export default {
    components: {
        BRow,
        BCol,
        BCard,
        BCardHeader,
        BCardTitle,
        BCardText,
        BCardBody,
        BMedia,
        BMediaAside,
        BAvatar,
        BMediaBody,
        BImg,
        BAvatarGroup,
        BDropdown,
        BDropdownItem,
    },
    data() {
        return {
            data: [
                {
                    icon: 'CalendarIcon',
                    color: 'light-primary',
                    title: '5',
                    subtitle: 'Completed Appointment(s)',
                    customClass: 'mb-2 mb-xl-0',
                },
                {
                    icon: 'AlertCircleIcon',
                    color: 'light-danger',
                    title: '1',
                    subtitle: 'Canceled Appointment',
                    customClass: 'mb-2 mb-xl-0',
                },
                {
                    icon: 'PlusCircleIcon',
                    color: 'light-info',
                    title: '6',
                    subtitle: 'Total Appointment',
                    customClass: 'mb-2 mb-sm-0',
                },
            ],
            data2: {
                mediaData: [
                    {
                        avatar: 'CalendarIcon',
                        title: 'Sat, Mar 25, 2021',
                        subtitle: '10:30 AM to 11:00 AM',
                    },
                    {
                        avatar: 'MapPinIcon',
                        title: 'Medical Reference Center',
                        subtitle: 'Hira Road - Elite beach center, Jeddah',
                    },
                ],
                avatars: [
                    {
                        avatar: '/img/avatar-s-9.397f0acd.jpg',
                        fullName: 'Billy Hopkins',
                    },
                    {
                        avatar: '/img/avatar-s-8.d6c23222.jpg',
                        fullName: 'Brandon Miles',
                    },
                ],
            },
            data3: [
                {
                    mode: 'CT scan',
                    types: 'The Neurosurgery Clinic',
                    avatar: 'http://mrccure.com/images/icons/brain_1.png',
                    avatarVariant: 'light-primary',
                    payment: 'Pending',
                    deduction: true,
                },
                {
                    mode: 'Lipid blood test',
                    types: 'The Cardiology Clinic',
                    avatar: 'http://mrccure.com/images/icons/heartbeat.png',
                    avatarVariant: 'light-danger',
                    payment: 'Pending',
                    deduction: true,
                },
                {
                    mode: 'Chest X-ray',
                    types: 'Plastic Surgery',
                    avatar: 'http://mrccure.com/images/icons/14-512.png',
                    avatarVariant: 'light-danger',
                    payment: 'Ready',
                    deduction: false,
                },
                {
                    mode: 'X-ray',
                    types: 'Radiology',
                    avatar: 'http://mrccure.com/images/icons/scan.png',
                    avatarVariant: 'light-info',
                    payment: 'Ready',
                    deduction: false,
                },
                {
                    mode: 'Bone scan',
                    types: 'Orthopedic',
                    avatar: 'http://mrccure.com/images/icons/knee.png',
                    avatarVariant: 'light-danger',
                    payment: 'Old',
                    deduction: true,
                },
            ],
        }
    },
}
</script>

<style lang="scss">
// @import '@core/scss/vue/pages/dashboard-ecommerce.scss';
// @import '@core/scss/vue/libs/chart-apex.scss';
</style>
