var editMode = false;
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
        text: 'Meat',
        completed: false
      },
      {
        text: 'Chicken',
        completed: false
      }
    ]
  }
]

var currentList = lists[0];

render();


function render() {
  let listsHtml = '<ul class="list-group">';
  let currentClass = 'active';
  lists.forEach((list, idx) => {
    listsHtml += `<li class="list-group-item ${currentClass}"><button onclick="changeList(${idx})">${list.name}</button></li>`;
    currentClass = '';
  });
  listsHtml += '</ul>';

  console.log(listsHtml);
  document.getElementById('lists').innerHTML = listsHtml;
  document.getElementById('current-list-name').innerText = currentList.name;
  
  let todosHtml = '<ul class="list-group-flush">';

  if (editMode == true) {
    currentList.todos.forEach((todo, idx) => {
      todosHtml += 
        `<li class="list-group-item" id="todoId${idx}">
        <input id="todo-input-box${idx}" type="text" value="${todo.text}"></input>
        <button onclick="saveTodo(${idx})">Save</button> 
        <button onclick="removeTodo(${idx})">Delete</button></li>`;
    });
    todosHtml += '</ul>'
  } else {
    currentList.todos.forEach((todo, idx) => {
      todosHtml +=
        `<li class="list-group-item" id="todo"><input type="checkbox" class="todo-checkbox" id="todoCheckbox${idx}" onclick="onCheck(${idx})"></input>
        <p class="todo-text" id="todoText${idx}">${todo.text}</p>
        </li>`;
    });
    todosHtml += '</ul>'
  }
  
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
  const listrem = document.getElementById('list-remove-box').value;
  if (listrem) {
    lists.filter(list => {
     return list != listrem;
    })
  }    
  render();
}

function changeList(index) {
  currentList = lists[index];
  render();
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

function saveTodo(index) {
  editMode = false;
  const textsave = document.getElementById('todo-input-box' + index).value;
  if (textsave) {
    currentList.todos[index].text = textsave;
  }    
  render();
  // Use the todo-add-box and modify the main.js to use it in the input box
}

function removeTodo(index) {
  const textrem = document.getElementById('todo-input-box' + index).value;

  if (textrem) {
    currentList.todos = currentList.todos.filter( todo => {
     return todo.text != textrem;
    })
  }    
  render();
}

function onCheck(index) {
  let todoChecker = document.getElementById("todoCheckbox" + index);
  if (todoChecker.checked) {
    currentList.todos[index].completed = true;
  } else {
    currentList.todos[index].completed = false;
  }
}

function clearTodo() {
  if (document.getElementById("todo").checked == true) {
    currentList.todos = currentList.todos.filter( todo => {
      return todo.text != textrem;
     })
  }
  render();
}

function editTodo() {
  if (editMode == false) {
    editMode = true;
  } else {
    editMode = false;
  }
  render();
}

function save() {
  localStorage.setItem('currentList', JSON.stringify(currentList)); 
  localStorage.setItem('lists', JSON.stringify(lists));
} 