document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector("#taskInput");
    const addTaskBtn = document.querySelector("#addTaskBtn");
    const taskList = document.querySelector("#taskList");
    const importantTaskList = document.querySelector("#importantTaskList");
    addTaskBtn.addEventListener('click', () => {
        taskInput.value.trim() != "" &&
            (() => {
                const newTask = createTaskElement(taskInput.value, moveToImportant);
                taskList.appendChild(newTask);
            })();
        taskInput.value = "";
    });

    const createTaskElement = (text, moveHandler) => {
        const newTask = document.createElement("li");
        const taskText = document.createTextNode(text);
        const deleteButton = createButton("Удалить", () => deleteTask(newTask));
        const moveToImportantButton = createButton("Важно!", () => moveHandler(newTask));
        newTask.appendChild(taskText);
        newTask.appendChild(deleteButton);
        newTask.appendChild(moveToImportantButton);
        newTask.addEventListener('click', () => {
            newTask.classList.toggle('completed');
        });
        return newTask;
    };
        
    const createButton = (text, clickHandler) => {
        const button = document.createElement("button");
        button.appendChild(document.createTextNode(text));
        button.addEventListener('click', clickHandler);
        return button;
    };

    const moveToImportant = (task) => {
        const importantTask = createTaskElement(task.firstChild.nodeValue, deleteTask);
        importantTaskList.appendChild(importantTask);
        taskList.removeChild(task);
    };

    const deleteTask = (task) => {
        task.parentNode.removeChild(task);
    }
});