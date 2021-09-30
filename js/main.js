const lists = {
  1: {
    name: 'Shopping list',
    todos: [
      {
        text: 'bananas',
        completed: false
      },
      {
        text: '1 lbs ground turkey',
        completed: false
      }
    ]
  },
  2: {
    name: 'Honey do list',
    todos: [
      {
        text: 'bananas',
        completed: false
      },
      {
        text: '1 lbs ground turkey',
        completed: false
      }
    ]
  },
  3: {
    name: '',
    todos: [
      {
        text: '',
        completed: false
      },
      {
        text: '',
        completed: false
      }
    ]
  },
  4: {
    name: '',
    todos: [
      {
        text: '',
        completed: false
      },
      {
        text: '',
        completed: false
      }
    ]
  },
  5: {    
    name: '',
    todos: [
      {
        text: '',
        completed: false
      },
      {
        text: '',
        completed: false
      }
    ]
  },
  6: {
    name: '',
    todos: [
      {
        text: '',
        completed: false
      },
      {
        text: '',
        completed: false
      }
    ]
  },
  7: {
    name: '',
    todos: [
      {
        text: '',
        completed: false
      },
      {
        text: '',
        completed: false
      }
    ]
  },
  8: {
    name: '',
    todos: [
      {
        text: '',
        completed: false
      },
      {
        text: '',
        completed: false
      }
    ]
  },
  9: {
    name: '',
    todos: [
      {
        text: '',
        completed: false
      },
      {
        text: '',
        completed: false
      }
    ]
  },
}

const currentList = lists[0];

function render() {
  let listsHtml = '<ul class="list-group">';
  lists.forEach((list) => {
    listsHtml += `<li class="list-group-item">${list.name}</li>`;
  });
  listsHtml += '</ul>';

  document.getElementById('lists').innerHTML = listsHtml;
  document.getElementById('current-list-name').innerText = currentList.name;

  let todosHtml = '<ul class="list-group-flush">';
  currentList.todos.forEach((list) => {
    todosHtml += `<li class="list-group-item">${todo.text}</li>`;
  });

  document.getElementById('current-list-todos').innerHTML = todosHtml;
}

function addTodo() {
  const text = document.getElementById('todo-add-box').value;
  if (text) {
    currentList.todos.push({
      text: text,
      completed: false
    })
    render();
  }
}

function removeTodo() {
  const text = document.getElementById('todo-remove-box').value;
  if (text) {
    currentList.todos.filter({
      text: text,
      completed: false
    })
    render();
  }
}