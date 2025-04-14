export function TodoForm(addTodo) {
    const form = document.createElement('form');
    form.className = 'taskForm';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'task-input task-input-margin';
    input.placeholder = "Wahte are we doing today?";
    input.size = 50;
    input.required = true;

    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'todo-btn';
    button.textContent = 'Add Task';

    form.appendChild(input);
    form.appendChild(button);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodo(input.value);
        input.value = '';
    });

    return form;
}