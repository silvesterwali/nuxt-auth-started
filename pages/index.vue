<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      {{ message }}
    </v-col>
  </v-row>
</template>
<script>
import { welcome } from '~/services/api/'
export default {
  async asyncData() {
    const { data } = await welcome()
    return {
      message: data,
    }
  },
}
</script>
