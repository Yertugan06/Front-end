const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    renderTasks();
    taskInput.value = "";
  }
});

const renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.className = `list-group-item d-flex justify-content-between align-items-center ${
      task.completed ? "list-group-item-success" : ""
    }`;

    const taskSpan = document.createElement("span");
    taskSpan.textContent = task.text;
    taskSpan.style.cursor = "pointer";
    if (task.completed) {
      taskSpan.style.textDecoration = "line-through";
    }

    taskSpan.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
  });
};
