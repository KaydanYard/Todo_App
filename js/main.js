const lists = [
  {
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
  {
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
  }
]

const currentList = lists[0];

render();

function render() {
  let listsHtml = '<ul class="list-group">';
  let currentClass = 'active';
  lists.forEach((list) => {
    listsHtml += `<li class="list-group-item ${currentClass}">${list.name}</li>`;
    currentClass = '';
  });
  listsHtml += '</ul>';

  console.log(listsHtml);
  document.getElementById('lists').innerHTML = listsHtml;
  document.getElementById('current-list-name').innerText = currentList.name;

  let todosHtml = '<ul class="list-group-flush">';
  currentList.todos.forEach((todo) => {
    todosHtml += `<li class="list-group-item">${todo.text}<button onclick=editTodo()>Edit</button></li>`;
  });
  todosHtml += '</ul>'

  document.getElementById('current-list-todos').innerHTML = todosHtml;
}

function addList() {
  const listadd = document.getElementById('list-add-box').value;
  if (listadd) {
    lists.push({
      name: listadd,
      todos: []
    })
  }    
  render();
}

function removeList() {

}

function addTodo() {
  const textadd = document.getElementById('todo-add-box').value;
  if (textadd) {
    currentList.todos.push({
      text: textadd,
      completed: false
    })
  }    
  render();
}

function removeTodo() {
  const textrem = document.getElementById('todo-remove-box').value;

  if (textrem) {
    currentList.todos.filter({
      text: textrem,
      completed: false
    })
  }    
  render();
}

function editTodo() {
  console.log("Edit Mode");
}