var add = document.getElementById("addToDo");
var input = document.getElementById("inputfield");
var todocontainer = document.getElementById("todoconatiner");

function addtask() {
  if (input.value === "") {
    alert(" Please enter your Task!");
  } else {
    let item_value = input.value;
    let item = document.createElement('div');
    item.classList.add('item');
    let item_content = document.createElement('div');
    item_content.classList.add('content');
    item.appendChild(item_content);
    let input_item = document.createElement('input');
    input_item.classList.add("text");
    input_item.type = 'text';
    input_item.value = item_value;
    input_item.setAttribute('readonly', 'readonly');

    input_item.addEventListener('dblclick', function () {
      input_item.style.textDecoration = 'line-through';
    });
    input_item.addEventListener('click', function () {
      input_item.style.textDecoration = 'none';
    })
    item_content.appendChild(input_item);

    let item_action = document.createElement('div');
    item_action.classList.add('actions');

    let edit_item = document.createElement('button');
    edit_item.classList.add('edit', 'btn', 'btn-success');
    edit_item.type = 'button';
    edit_item.innerText = 'Edit';

    let delete_item = document.createElement('button');
    delete_item.classList.add('delete', 'btn', 'btn-danger', 'fa', 'fa-trash');
    item_action.appendChild(edit_item);
    item_action.appendChild(delete_item);
    item.appendChild(item_action);

    todocontainer.appendChild(item);
    input.value = "";

    edit_item.addEventListener('click', (e) => {
      if (edit_item.innerText.toLowerCase() == "edit") {
        edit_item.innerText = "Save";
        input_item.removeAttribute("readonly");
        input_item.focus();
      } else {
        edit_item.innerText = 'Edit';
        input_item.setAttribute('readonly', 'readonly');
      }
    });
    delete_item.addEventListener('click', (e) => {
      todocontainer.removeChild(item);
    })
  }
}