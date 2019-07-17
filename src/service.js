export const fetchTodos = () => {
  return new Promise(res => {
    setTimeout(() => {
      res({
        resources: {
          't1': { title: 'abc' },
          't2': { title: 'xyz' }
        },
        ids: ['t1', 't2']
      })
    }, 200)
  });
};
