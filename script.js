const addbtn = document.querySelector('.btn');
const input = document.querySelector('#taskid');
const items = document.querySelector('.list-item');

addbtn.addEventListener('click', () => {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please add your task first");
        return;
    }

    // Show the task list if it's hidden
    items.style.display = 'flex';

    // Create a new list item
    const listEle = document.createElement("li");

    // Set the HTML content for the new task
    listEle.innerHTML = `
        <img src="undone.png" class="status-icon">
        <span class="task-text">${taskText}</span>
        <span class="delete">&#10006;</span>
    `;

    // Add event to toggle image from undone to done when clicked
    const statusIcon = listEle.querySelector('.status-icon');
    statusIcon.addEventListener('click', () => {
        if (statusIcon.src.includes('undone.png')) {
            statusIcon.src = 'done.png';
        } else {
            statusIcon.src = 'undone.png';
        }
    });

    // event to delete task when clicked on delete button
    const deleteBtn = listEle.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        listEle.remove();
    });

    // Add the task to the list
    items.appendChild(listEle);

    // Clear the input box when task is added to the list
    input.value = "";
});
