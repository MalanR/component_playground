export function EditTaskForm(editTask, task) {
    const form = document.createElement('form');
    form.className = 'TaskForm';

    let value = task.task; // Local variable to mimic state

    const input = document.createElement('input');
    input.type = 'text';
    input.className = "task-input task-input-margin";
    input.placeholder = 'Update Task';
    input.size = 50;
    input.value = value;

    input.addEventListener('input', (event) => {
        value = event.target.value; // Update the local variable
    });

    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'todo-btn';
    button.textContent = 'Update Task';

    form.appendChild(input);
    form.appendChild(button);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        editTask(value, task.id); // Use the updated value
    });

    return form;
}