import ApiService from '~/services/ApiServices.js'
export * from '~/services/apis/Todo.js'

export const welcome = async () => {
  return await ApiService.get('api')
}
