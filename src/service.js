const localStorageKey = 'todos';

const firstTimeData = {
  resources: {
    't1': { title: 'abc' },
    't2': { title: 'xyz' }
  },
  ids: ['t1', 't2']
};

export const fetchTodos = () => {
  return new Promise(res => {
    setTimeout(() => {
      const str = localStorage.getItem(localStorageKey);

      if (!str) {
        res(firstTimeData)
      }

      const { resources, ids } = JSON.parse(str);

      res({ resources, ids });
    }, 800)
  });
};

export const saveTodos = ({ resources, ids }) => {
  return new Promise(res => {
    setTimeout(() => {
      localStorage.setItem(localStorageKey, JSON.stringify({ resources, ids }));
      res('ok');
    }, 800)
  })
};
