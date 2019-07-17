const localStorageKey = 'todos';

const firstTimeData = {
  resources: {
    't1': { title: 'Add a todo by typing into the input bar above and pressing enter' },
    't2': { title: 'Remove a todo by clicking its "×" icon to the right' },
    't3': { title: 'Save or clear your list using the buttons at the top right' }
  },
  ids: ['t1', 't2', 't3']
};

export const fetchTodos = () => {
  const str = localStorage.getItem(localStorageKey);

  if (!str) {
    return firstTimeData
  }

  const { resources, ids } = JSON.parse(str);

  return { resources, ids };
};

export const saveTodos = ({ resources, ids }) => {
  return new Promise(res => {
    setTimeout(() => {
      localStorage.setItem(localStorageKey, JSON.stringify({ resources, ids }));
      res('ok');
    }, 800)
  })
};
