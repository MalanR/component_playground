import { TaskContainer } from "./components/taskContainer.js";

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('.task-container');
    app.innerHTML = '';
    const taskContainer = TaskContainer(); // Create a new container element
    app.appendChild(taskContainer); // Append the new container
});