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
    loadStore();
    console.log('InitStore')
}

const loadStore = () => {
    if (!localStorage.getItem('state')) return;

    const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state))
}


const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos] // return a copy of the array
        case Filters.Completed:
            return state.todos.filter(todo => todo.done)
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done)
        default:
            throw new Error(`Option ${filter} is not valid`)
    }
}
/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) {
        throw new Error('Description is required')
    }

    state.todos.push(new Todo(description))
    saveStateToLocalStorage();
}

const toggleTodo = (id) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === id) {
            todo.done = !todo.done;
        }
        return todo;
    });
    saveStateToLocalStorage();
}
const deleteTodo = (id) => {
    state.todos = state.todos.filter(todo => todo.id !== id); // return a new array without the element with the id
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
    saveStateToLocalStorage();
}
const setFilter = (filter = Filters.All) => {
    state.filter = filter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,

}