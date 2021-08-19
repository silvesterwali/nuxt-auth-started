<template>
  <div class="d-flex" style="min-height: 400px">
    <v-row justify="center" align="center" class="mx-auto align-self-center">
      <v-col cols="12" sm="8" md="5">
        <AuthForm :is-register="true" :loading="loading" :errors="errors" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import AuthForm from '~/components/Forms/Auth/AuthForm.vue'
export default {
  components: {
    AuthForm,
  },
  data() {
    return {
      loading: false,
      errors: null,
    }
  },
}
</script>
