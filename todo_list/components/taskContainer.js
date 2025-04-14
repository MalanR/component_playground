import { TodoForm } from './taskForm.js';
import { Task } from './tasks.js';
import { EditTaskForm } from './editTaskForm.js';
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export function TaskContainer() {
    const container = document.querySelector('.task-container');
    container.innerHTML = ''; 

    const taskList = document.createElement('div');

    let tasks = [];

    const addTask = (taskText) => {
        tasks.push({ id: uuidv4(), task: taskText, completed: false, isEditing: false });
        renderTasks();
    };

    const form = TodoForm(addTask); 
    container.appendChild(form); 
    container.appendChild(taskList); 

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskElement = task.isEditing
                ? EditTaskForm(editTask, task)
                : Task(task, toggleComplete, deleteTask, toggleEdit);
            taskList.appendChild(taskElement);
        });
    };

    const toggleComplete = (id) => {
        tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
        renderTasks();
    };

    const deleteTask = (id) => {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    };

    const editTask = (newTask, id) => {
        tasks = tasks.map(task => task.id === id ? { ...task, task: newTask, isEditing: false } : task);
        renderTasks();
    };

    const toggleEdit = (id) => {
        tasks = tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task);
        renderTasks();
    };

    return container;
}
