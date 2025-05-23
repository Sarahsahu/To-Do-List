const addbtn = document.querySelector('.btn');
const input = document.querySelector('#taskid');
const items = document.querySelector('.list-item');

addbtn.addEventListener('click', () => {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please add your task first");
        return;
    }
    
    items.style.display = 'flex';
    
    const listEle = document.createElement("li");

    listEle.innerHTML = `
        <img src="undone.png" class="status-icon">
        <span class="task-text">${taskText}</span>
        <span class="delete">&#10006;</span>
    `;

    const statusIcon = listEle.querySelector('.status-icon');
    statusIcon.addEventListener('click', () => {
        if (statusIcon.src.includes('undone.png')) {
            statusIcon.src = 'done.png';
        } else {
            statusIcon.src = 'undone.png';
        }
    });

 
    const deleteBtn = listEle.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        listEle.remove();
    });
    
    items.appendChild(listEle);

    input.value = "";
});
