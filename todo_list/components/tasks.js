export function Task(task, toggleComplete, deleteTask, toggleEdit){
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.style.height = "2em";
    taskDiv.style.maxWidth = "40em";

    const taskText = document.createElement('p');
    taskText.textContent = task.task;
    if (task.comnpleted){
        taskText.classList.add('completed');
    }

    taskText.addEventListener('click', () => toggleComplete(task.id));

    const iconsDiv = document.createElement('div');
    iconsDiv.className = 'task-icons';

    const editButton = document.createElement('button');
    editButton.textContent = '✏️';
    editButton.style.color = 'yellow';
    editButton.addEventListener('click', ()=> toggleEdit(task.id));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.style.color = 'red';
    deleteButton.addEventListener('click', ()=> deleteTask(task.id));

    iconsDiv.appendChild(editButton);
    iconsDiv.appendChild(deleteButton);

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(iconsDiv);

    return taskDiv;
}