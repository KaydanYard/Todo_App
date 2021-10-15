var editMode = false;
const lists = JSON.parse(window.localStorage.getItem('lists'));

var currentList = JSON.parse(window.localStorage.getItem('currentList'));

render();

function render() {
  let listsHtml = '<ul class="list-group">';
  let currentClass = 'active';
  lists.forEach((list, idx) => {
    listsHtml += 
      `<li class="list-group-item ${currentClass}" id="list${idx}">
        <button id="list-change-btn" onclick="changeList(${idx})">${list.name}</button>
        <i id="listRemover" class="fa-solid fa-xmark" onclick="removeList(${idx})"></i>
      </li>`;
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
        <button class="" onclick="saveTodo(${idx})">Save</button> 
        <button class="" onclick="removeTodo(${idx})">Delete</button></li>`;
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
  save();
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

function removeList(index) {
  lists.splice(index,1)
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
    currentList.todos = currentList.todos.filter(todo => {
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
  save();
}

function clearTodo() {
  const matches = document.querySelectorAll("#todo");

  for (let i = matches.length-1; i >= 0; i--) {
    console.log(matches[i]);
    let elemID = matches[i].childNodes[0].id;
    let IDNum = elemID[elemID.length-1];
    let elemProps = currentList.todos[IDNum];

    if (elemProps.completed == true) {
      console.log(elemProps);
      currentList.todos.splice(IDNum,1);
    }
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
  window.localStorage.setItem('currentList', JSON.stringify(currentList)); 
  window.localStorage.setItem('lists', JSON.stringify(lists));
}