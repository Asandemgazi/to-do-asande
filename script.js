// JavaScript code for managing the To-Do list

// Selecting elements
const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to create a new task item
function createTaskItem(taskText) {
    const li = document.createElement("li");
    const taskTextElement = document.createElement("span");
    const deleteButton = document.createElement("button");

    taskTextElement.textContent = taskText;
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    li.appendChild(taskTextElement);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Add event listener to delete button
    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    // Add event listener to mark task as completed
    taskTextElement.addEventListener("click", () => {
        taskTextElement.classList.toggle("completed");
    });
}

// Event listener for adding a new task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        createTaskItem(taskText);
        taskInput.value = "";
    }
});

// Event listener for adding a new task when pressing Enter
taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTaskButton.click();
    }
});