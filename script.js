document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('todo-list');
    const timeDisplay = document.getElementById('demo');
    const showTimeBtn = document.getElementById('show-time');
    const hideTimeBtn = document.getElementById('hide-time');

    form.addEventListener('submit', addTask);
    showTimeBtn.addEventListener('click', showCurrentTime);
    hideTimeBtn.addEventListener('click', hideTime);

    function addTask(e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            taskItem.style.color = 'red';

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.addEventListener('click', function() {
                taskItem.remove();
                messageItem.remove();
            });

            taskItem.appendChild(deleteBtn);
            taskList.appendChild(taskItem);

            const messageItem = document.createElement('li');
            messageItem.textContent = `You added a new task: "${taskText}"`;
            taskList.appendChild(messageItem);

            taskInput.value = '';
        }
    }

    function showCurrentTime() {
        const currentTime = new Date();
        timeDisplay.textContent = currentTime;
        
        // Show the hide button after displaying time
        hideTimeBtn.style.display = 'inline-block';
    }

    function hideTime() {
        // Hide the time display
        timeDisplay.textContent = '';
        
        // Hide the hide button again
        hideTimeBtn.style.display = 'none';
    }
});
