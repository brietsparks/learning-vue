import Vue from 'vue';
import { fetchTodos } from '../service';

export const initialState = {
  resources: {},
  ids: [],
  network: {
    isFetching: false,
    isSaving: false,
    error: null
  }
};

export const state = { ...initialState };

export const actionTypes = {
  FETCH_TODOS: 'FETCH_TODOS',
  SAVE_TODOS: 'SAVE_TODOS',
  SET_TODOS: 'SET_TODOS',
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  CHANGE_TODO: 'CHANGE_TODO',
};

const actions = {
  async [actionTypes.FETCH_TODOS](context) {
    context.commit(mutationTypes.SET_IS_FETCHING_TODO, true);

    try {
      const { resources, ids } = await fetchTodos();
      context.commit(mutationTypes.SET_TODOS, { resources, ids });
    } catch (error) {
      context.commit(mutationTypes.SET_ERROR_TODOS, error.message);
    }

    context.commit(mutationTypes.SET_IS_FETCHING_TODO, false);
  },
  [actionTypes.CHANGE_TODO](context, { id, ...changes }) {
    context.commit(mutationTypes.CHANGE_TODO, { id, changes });
  },
  [actionTypes.REMOVE_TODO](context, id) {
    context.commit(mutationTypes.REMOVE_TODO, id);
  },
  [actionTypes.ADD_TODO](context, { id, title }) {
    context.commit(mutationTypes.ADD_TODO, { id, title });
  }
};

const mutationTypes = {
  SET_TODOS: 'SET_TODOS',
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  CHANGE_TODO: 'CHANGE_TODO',
  SET_IS_SAVING_TODO: 'SET_IS_SAVING_TODO',
  SET_IS_FETCHING_TODO: 'SET_IS_FETCHING_TODO',
  SET_ERROR_TODOS: 'SET_ERROR_TODOS',
};

const mutations = {
  [mutationTypes.SET_TODOS](state, { resources, ids }) {
    state.resources = resources;
    state.ids = ids;
  },
  [mutationTypes.SET_IS_FETCHING_TODO](state, isFetching) {
    state.network.isFetching = isFetching;
  },
  [mutationTypes.SET_ERROR_TODOS](state, message) {
    state.network.error = message;
  },
  [mutationTypes.CHANGE_TODO](state, { id, changes }) {
    if (!state.resources[id]) {
      return;
    }

    for (let field in changes) {
      Vue.set(state.resources[id], field, changes[field]);
    }
  },
  [mutationTypes.REMOVE_TODO](state, id) {
    if (state.resources[id]) {
      Vue.delete(state.resources, id);
    }

    state.ids.splice(state.ids.indexOf(id), 1);
  },
  [mutationTypes.ADD_TODO](state, { id, title }) {
    state.resources[id] = { title };
    state.ids.push(id);
  }
};

const getters = {
  todoIds: state => state.ids,
  todo: state => id => state.resources[id],
  isFetchingTodos: state => state.network.isFetching,
  todosError: state => state.network.error
};

export default {
  state,
  actions,
  mutations,
  getters
}
