import { setClient } from '~/services/ApiServices.js'

export default ({ app, store }) => {
  setClient(app.$axios)
}
