import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'

}
const state = {
    todos: [
        new Todo('Learn Vue.js'),
        new Todo('Learn Vuex'),
        new Todo('Learn Vue Router')
    ],
    filter: Filters.All
}


const initStore = () => {
    console.log(state)
    console.log('InitStore')
}

const loadStore = () => {
    throw new Error('Not implemented')

}


const getTodos = () => {
    throw new Error('Not implemented')

}
/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    throw new Error('Not implemented')
}

const toggleTodo = (id) => {
    throw new Error('Not implemented')
}
const deleteTodo = (id) => {
    throw new Error('Not implemented')
}

const deleteCompleted = () => {
    throw new Error('Not implemented')
}
const setFilter = (filter = Filters.All) => {
    throw new Error('Not implemented')
}

const getCurrentFilter = () => {
    throw new Error('Not implemented')
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,

}