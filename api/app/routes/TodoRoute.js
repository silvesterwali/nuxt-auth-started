/**
 *========================
 *
 * - @copyright 2021
 **/
const router = require('express').Router()

const TodoController = require('../controllers/TodoController')
router.get('/', TodoController.index)
router.post('/', TodoController.store)
router.get('/:id', TodoController.show)
router.put('/:id', TodoController.update)
router.delete('/:id', TodoController.destroy)

module.exports = router
