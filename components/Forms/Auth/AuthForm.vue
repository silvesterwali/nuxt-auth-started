<template>
  <v-card :loading="loading" min-height="300" elevation="1">
    <v-form ref="authForm" @submit.prevent="sendCredential">
      <v-card-title class="headline">
        {{ isRegister ? 'Register' : 'Login' }}
      </v-card-title>
      <v-card-text>
        <template v-if="isRegister">
          <v-text-field
            v-model="credential.name"
            :rules="[(v) => !!v || 'Name is Required']"
            label="Name"
            dense
          />
        </template>
        <v-text-field
          v-model="credential.email"
          type="email"
          label="Email"
          :rules="[
            (v) => !!v || 'Email is required',
            (v) => /.+@.+/.test(v) || 'Email is not valid',
          ]"
          dense
        />
        <v-text-field
          v-model="credential.password"
          label="Password"
          dense
          :rules="[(v) => !!v || 'Password is required']"
          :type="showPass ? 'text' : 'password'"
          :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append="showPass = !showPass"
        />
        <template v-if="isRegister">
          <v-text-field
            v-model="credential.password_confirmation"
            label="Password Confirmation"
            dense
            :rules="[
              (v) => !!v || 'Password confirmation is required',
              passwordMatch,
            ]"
            :type="showPassConf ? 'text' : 'password'"
            :append-icon="showPassConf ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="showPassConf = !showPassConf"
          />
        </template>
      </v-card-text>
      <v-card-actions class="pt-0 pb-1">
        <v-spacer />
        <v-btn
          class="float-right"
          type="submit"
          color="primary"
          tile
          :loading="loading"
        >
          Submit
        </v-btn>
      </v-card-actions>
      <v-card-actions class="pt-0">
        <span v-if="isRegister">
          Already have account ? &#8287;<a href="/login" rel="Login"> Login </a>
        </span>
        <span v-else>
          Don't have account ? &#8287;<a href="/register" rel="register">
            Register
          </a>
        </span>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  props: {
    // loading indicator
    loading: {
      type: Boolean,
      default: false,
    },
    // to make diffent between login and register
    isRegister: {
      type: Boolean,
      default: true,
    },
    // passing the error form backend
    errors: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      credential: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      showPass: false,
      showPassConf: false,
    }
  },
  computed: {
    passwordMatch() {
      if (this.credential === null) {
        return false
      }
      if (this.credential.password !== this.credential.password_confirmation) {
        return 'Password not match'
      }
      return null
    },
  },
  methods: {
    sendCredential() {
      if (this.$refs.authForm.validate()) {
        this.$emit('submit', this.credential)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
