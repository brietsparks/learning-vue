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
