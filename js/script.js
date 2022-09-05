// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// EVENTLISTENERS
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deletCheck);
filterOption.addEventListener('click', filterTodo);



// FUNCTIONS
function addTodo(event) {
    event.preventDefault();
    //cteate todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create todo LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // create checkbutton
    const checkItem = document.createElement('button');
    checkItem.innerHTML = '<i class="fa fa-check"></i>';
    checkItem.classList.add('check-btn');
    todoDiv.appendChild(checkItem);
    // create trashbutton
    const trashItem = document.createElement('button');
    trashItem.innerHTML = '<i class="fa fa-trash"></i>';
    trashItem.classList.add('trash-btn');
    todoDiv.appendChild(trashItem);
    // append to list
    todoList.appendChild(todoDiv);
    // clear todoinput value
    todoInput.value = "";
}

function deletCheck(e) {

    const Item = e.target;
    // delet Item
    if (Item.classList[0] === 'trash-btn') {
        const Itemtodo = Item.parentElement;
        // Animation
        Itemtodo.classList.add("fall");
        Itemtodo.addEventListener("transitionend", function() {
            Itemtodo.remove();
        });
        console.log(fall);


    }
    // check Item

    if (Item.classList[0] === "check-btn") {
        const Itemtodo = Item.parentElement;
        Itemtodo.classList.toggle("completed");

    }
}

function filterTodo(e) {
    const todoes = todoList.childNodes;
    todoes.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }

    })

}