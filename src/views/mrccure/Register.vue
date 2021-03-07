<template>
  <div class="auth-wrapper auth-v1" :style="`background:url(${bg});background-size:400px;`">
    <div style="position: sticky;top: 0;z-index:1;width:100%;" class="bg-white px-2 d-flex">
        <!-- Brand logo-->
            <b-link class="brand-logo">
                <!-- <vuexy-logo /> -->
                <b-img
                    :src="logo"
                    alt="logo"
                    height="60px"
                />
                <h2 class="brand-text text-primary ml-1">
                Medical Reference Center <br>
                <span style="font-family: system-ui;">مركز المرجع الطبي</span>
                </h2>
            </b-link>
    </div>
    <div class="auth-inner py-2">
        <!-- Register v1 -->
        <b-card class="mb-0">
            <b-card-title class="mb-1">
            Open File Application
            </b-card-title>

            <!-- form -->
            <validation-observer ref="registerForm">
            <b-form
                class="auth-register-form mt-2"
                @submit.prevent="validationForm"
            >
                <b-row>
                    <b-col md="6">
                        <!-- First Name -->
                        <b-form-group
                        label="First Name"
                        label-for="firstname"
                        >
                        <validation-provider
                            #default="{ errors }"
                            name="First Name"
                            rules="required"
                        >
                            <b-form-input
                            id="firstname"
                            v-model="firstname"
                            :state="errors.length > 0 ? false:null"
                            name="register-firstname"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <!-- Middle Name -->
                        <b-form-group
                        label="Middle Name"
                        label-for="middlename"
                        >
                        <validation-provider
                            #default="{ errors }"
                            name="Middle Name"
                            rules="required"
                        >
                            <b-form-input
                            id="middlename"
                            v-model="middlename"
                            :state="errors.length > 0 ? false:null"
                            name="register-middlename"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <!-- Grandfather Name -->
                        <b-form-group
                        label="Grandfather Name"
                        label-for="grandfathername"
                        >
                        <validation-provider
                            #default="{ errors }"
                            name="Grandfather Name"
                            rules="required"
                        >
                            <b-form-input
                            id="grandfathername"
                            v-model="grandfathername"
                            :state="errors.length > 0 ? false:null"
                            name="register-grandfathername"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <!-- Last Name -->
                        <b-form-group
                        label="Last Name"
                        label-for="lastname"
                        >
                        <validation-provider
                            #default="{ errors }"
                            name="Last Name"
                            rules="required"
                        >
                            <b-form-input
                            id="lastname"
                            v-model="lastname"
                            :state="errors.length > 0 ? false:null"
                            name="register-lastname"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <!-- Last Name -->
                        <b-form-group
                        label="Cell Phone Number* (Please enter a valid number, an OTP will be sent to the number you provide to verify)"
                        label-for="phone"
                        >
                        <validation-provider
                            #default="{ errors }"
                            name="phone"
                            rules="required"
                        >
                            <b-form-input
                            id="phone"
                            v-model="phone"
                            :state="errors.length > 0 ? false:null"
                            name="register-phone"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <!-- Last Name -->
                        <b-form-group
                        label="Home Phone Number*
"
                        label-for="home"
                        >
                        <validation-provider
                            #default="{ errors }"
                            name="home"
                            rules="required"
                        >
                            <b-form-input
                            id="home"
                            v-model="home"
                            :state="errors.length > 0 ? false:null"
                            name="register-home"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <!-- Last Name -->
                        <b-form-group
                        label="ID Type (National ID / Iqama / Passport / Birth Notification)*"
                        label-for="id"
                        >
                        <validation-provider
                            #default="{ errors }"
                            name="id"
                            rules="required"
                        >
                            <b-form-input
                            id="id"
                            v-model="id"
                            :state="errors.length > 0 ? false:null"
                            name="register-id"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <!-- Expiry Date -->
                        <b-form-group
                        label="ID Expiry Date*"
                        label-for="expirydate"
                        >
                        <validation-provider
                            #default="{ errors }"
                            name="expirydate"
                            rules="required"
                        >
                            <b-form-datepicker
                                v-model="expirydate"
                                class="mb-1"
                                :state="errors.length > 0 ? false:null"
                                name="register-expirydate"
                                />
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" class="border-light rounded pt-2">
                        <b-card-title>
                            Address
                        </b-card-title>
                        <b-row>
                            <b-col sm="6" md="4">
                                <b-form-group
                                    label="District*"
                                    label-for="district"
                                    >
                                    <validation-provider
                                        #default="{ errors }"
                                        name="district"
                                        rules="required"
                                    >
                                        <b-form-input
                                        id="district"
                                        v-model="district"
                                        :state="errors.length > 0 ? false:null"
                                        name="register-district"
                                        />
                                        <small class="text-danger">{{ errors[0] }}</small>
                                    </validation-provider>
                                </b-form-group>
                            </b-col>
                            <b-col sm="6" md="4">
                                <b-form-group
                                    label="City*"
                                    label-for="district"
                                    >
                                    <validation-provider
                                        #default="{ errors }"
                                        name="district"
                                        rules="required"
                                    >
                                        <b-form-input
                                        id="district"
                                        v-model="district"
                                        :state="errors.length > 0 ? false:null"
                                        name="register-district"
                                        />
                                        <small class="text-danger">{{ errors[0] }}</small>
                                    </validation-provider>
                                </b-form-group>
                            </b-col>
                            <b-col sm="6" md="4">
                                <b-form-group
                                    label="Country*"
                                    label-for="district"
                                    >
                                    <validation-provider
                                        #default="{ errors }"
                                        name="district"
                                        rules="required"
                                    >
                                        <b-form-input
                                        id="district"
                                        v-model="district"
                                        :state="errors.length > 0 ? false:null"
                                        name="register-district"
                                        />
                                        <small class="text-danger">{{ errors[0] }}</small>
                                    </validation-provider>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col sm="6" md="4">
                        <b-form-group
                            label="Gender*"
                            label-for="district"
                            >
                            <validation-provider
                                #default="{ errors }"
                                name="district"
                                rules="required"
                            >
                                <b-form-input
                                id="district"
                                v-model="district"
                                :state="errors.length > 0 ? false:null"
                                name="register-district"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col sm="6" md="4">
                        <b-form-group
                            label="Language*"
                            label-for="district"
                            >
                            <validation-provider
                                #default="{ errors }"
                                name="district"
                                rules="required"
                            >
                                <b-form-input
                                id="district"
                                v-model="district"
                                :state="errors.length > 0 ? false:null"
                                name="register-district"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col sm="6" md="4">
                        <b-form-group
                            label="Nationality*"
                            label-for="district"
                            >
                            <validation-provider
                                #default="{ errors }"
                                name="district"
                                rules="required"
                            >
                                <b-form-input
                                id="district"
                                v-model="district"
                                :state="errors.length > 0 ? false:null"
                                name="register-district"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col md="6">
                        <b-form-group
                            label="Marital Status*"
                            label-for="district"
                            >
                            <validation-provider
                                #default="{ errors }"
                                name="district"
                                rules="required"
                            >
                                <b-form-input
                                id="district"
                                v-model="district"
                                :state="errors.length > 0 ? false:null"
                                name="register-district"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <!-- Expiry Date -->
                        <b-form-group
                        label="Date of Birth*"
                        label-for="expirydate"
                        >
                        <validation-provider
                            #default="{ errors }"
                            name="expirydate"
                            rules="required"
                        >
                            <b-form-datepicker
                                v-model="expirydate"
                                class="mb-1"
                                :state="errors.length > 0 ? false:null"
                                name="register-expirydate"
                                />
                            <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" class="border-light rounded pt-2">
                        <b-card-title>
                            Emergency Contact Details (different from registrant)
                        </b-card-title>
                        <b-row>
                            <b-col sm="6" md="3">
                                <b-form-group
                                    label="First Name*"
                                    label-for="district"
                                    >
                                    <validation-provider
                                        #default="{ errors }"
                                        name="district"
                                        rules="required"
                                    >
                                        <b-form-input
                                        id="district"
                                        v-model="district"
                                        :state="errors.length > 0 ? false:null"
                                        name="register-district"
                                        />
                                        <small class="text-danger">{{ errors[0] }}</small>
                                    </validation-provider>
                                </b-form-group>
                            </b-col>
                            <b-col sm="6" md="3">
                                <b-form-group
                                    label="Family Name*"
                                    label-for="district"
                                    >
                                    <validation-provider
                                        #default="{ errors }"
                                        name="district"
                                        rules="required"
                                    >
                                        <b-form-input
                                        id="district"
                                        v-model="district"
                                        :state="errors.length > 0 ? false:null"
                                        name="register-district"
                                        />
                                        <small class="text-danger">{{ errors[0] }}</small>
                                    </validation-provider>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group
                                    label="Phone*"
                                    label-for="district"
                                    >
                                    <validation-provider
                                        #default="{ errors }"
                                        name="district"
                                        rules="required"
                                    >
                                        <b-form-input
                                        id="district"
                                        v-model="district"
                                        :state="errors.length > 0 ? false:null"
                                        name="register-district"
                                        />
                                        <small class="text-danger">{{ errors[0] }}</small>
                                    </validation-provider>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12">
                        <b-form-group
                            label="Country*"
                            label-for="Reason for Visit"
                            >
                            <validation-provider
                                #default="{ errors }"
                                name="district"
                                rules="required"
                            >
                                <b-form-textarea
                                id="district"
                                rows="5"
                                v-model="district"
                                :state="errors.length > 0 ? false:null"
                                name="register-district"
                                />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>
                    </b-col>
                </b-row>

                <!-- submit button -->
                <div class="d-flex">
                    <b-button
                    variant="primary"
                    type="submit"
                    >
                    Send OTP
                    </b-button>
                    <b-button
                    class="ml-auto"
                    variant="outline-primary"
                    to="/login"
                    >
                    Login
                    </b-button>

                </div>
            </b-form>
            </validation-observer>
        </b-card>
        <!-- /Register v1 -->
    </div>
  </div>

</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BCard, BLink, BCardTitle, BForm, BImg, BRow, BCol, BFormDatepicker, BFormTextarea,
  BButton, BFormInput, BFormGroup,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    // BSV
    BRow,
    BCol,
    BCard,
    BLink,
    BCardTitle,
    BForm,
    BButton,
    BFormDatepicker,
    BFormTextarea,
    BFormInput,
    BFormGroup,
    BImg,
    // validations
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      regEmail: '',
      username: '',
      password: '',
      status: '',
      /* eslint-disable global-require */
      logo: require('@/assets/images/logo/mrccure.png'),
      bg: require('@/assets/images/banner/bg.png'),
      /* eslint-disable global-require */
      // validation rules
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    validationForm() {
      this.$refs.registerForm.validate().then(success => {
        if (success) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Form Submitted',
              icon: 'EditIcon',
              variant: 'success',
            },
          })
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
