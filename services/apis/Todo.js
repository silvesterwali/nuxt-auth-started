/**
 * @copyright 2021
 * sevices endpoint for Todo
 *
 **/
import ApiService from '~/services/ApiServices.js'
// define the api backend endpoint here
const urlEndpoint = `Todo`.toLowerCase()
/**
 * fetchTodos - axios endpoint to get all Todo resources
 *
 **/
export const fetchTodos = async () => {
  return await ApiService.get(`${urlEndpoint}`)
}
/**
 * storeTodo - axios endpoint to store Todo
 *
 * @param {Object} payload
 **/
export const storeTodo = async (payload) => {
  return await ApiService.post(`${urlEndpoint}`, payload)
}
/**
 * fetchTodo - axios endpoint to get specific Todo
 *
 * @param {String} -id
 **/
export const fetchTodo = async (id) => {
  return await ApiService.get(`${urlEndpoint}/${id}`)
}
/**
 * updateTodo - axios endpoint to update specific Todo
 *
 * @param {String} -id
 * @param {Object} -payload
 **/
export const updateTodo = async (id, payload) => {
  return await ApiService.put(`${urlEndpoint}/${id}`, payload)
}
/**
 * destroyTodo - axios endpoint to delete specific Todo
 *
 * @param {String} -id
 **/
export const destroyTodo = async (id) => {
  return await ApiService.delete(`${urlEndpoint}/${id}`)
}
