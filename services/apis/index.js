import ApiService from '~/services/ApiServices.js'

export const welcome = async () => {
  return await ApiService.get('api')
}
