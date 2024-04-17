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

export default {
    initStore,
}