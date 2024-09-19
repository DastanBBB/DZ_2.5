const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todoList = document.getElementById("todo_list");

const createTodo = () => {
    if (input.value.trim() === "") return alert('Напишите что-то');

    const div = document.createElement("div");
    const text  = document.createElement("h3");
    const buttonsDiv = document.createElement("div");

    div.setAttribute('class', 'block_text');
    text.innerHTML = input.value;
    div.append(text);
    todoList.append(div);

    buttonsDiv.classList.add('buttons_div');
    const editButton = document.createElement('button');
    editButton.innerHTML = 'edit';
    editButton.classList.add('edit_button');

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'delete';
    deleteButton.classList.add('delete_button');

    buttonsDiv.append(editButton);
    buttonsDiv.append(deleteButton);
    div.append(buttonsDiv);

    input.value = "";
    deleteButton.addEventListener('click', () => {
        div.remove();
    });
    editButton.addEventListener('click', () => {
        const newText = prompt('Редактировать', text.innerHTML);
        if (newText !== null && newText.trim() !== "") {
            text.innerHTML = newText;
        }
    });
};

createButton.onclick = () => createTodo();
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') return createTodo();
});