function render() {
  let listsHtml = '<div class="list-group">';
  lists.forEach((list) => {
    listsHtml += `<a class="list-group-item">${list.name}</li>`;
  });
  listsHtml += '</div>';

  document.getElementById('lists').innerHTML = listsHtml;
  document.getElementById('current-list-name').innerText = currentList.name;

  let todosHtml = ''
}