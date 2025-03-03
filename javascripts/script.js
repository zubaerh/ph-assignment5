const taskCards = document.querySelectorAll('.bg-white.rounded-lg.shadow-md.p-4');

const taskAssignElement = document.getElementById('task-assign');
const completeTaskElement = document.getElementById('complete-task');

const completeTaskButtons = document.querySelectorAll('#complete-task-btn');

// biome-ignore lint/complexity/noForEach: <explanation>
completeTaskButtons.forEach(button => {
    button.addEventListener('click', () => {
        const taskAssignCount = Number.parseInt(taskAssignElement.textContent, 10);
        const completeTaskCount = Number.parseInt(completeTaskElement.textContent, 10);

        if (taskAssignCount > 0) {
            taskAssignElement.textContent = taskAssignCount - 1;
            completeTaskElement.textContent = completeTaskCount + 1;
            button.disabled = true;
            button.classList.add('opacity-30', 'cursor-not-allowed');
            alert("Board update successfully");
            if (Number.parseInt(taskAssignElement.textContent, 10) === 0) {
                alert("Congratulations!!! You have completed all the current tasks.");
            }
            const taskHeading = button.closest('.bg-blue-50').querySelector('h3.text-sm.font-bold').textContent;
            const now = new Date();
            const hours = now.getHours() % 12 || 12;
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
            const formattedTime = `${hours}:${minutes} ${ampm}`;
            addActivity(`You have completed the task ${taskHeading} at ${formattedTime}`);
            
        }
    });
});

const clearHistoryButton = document.getElementById('clear-history');
const activityList = document.getElementById('activity-list');

clearHistoryButton.addEventListener('click', () => {
    activityList.innerHTML = '';
});

function addActivity(message) {
    const activityItem = document.createElement('div');
    activityItem.className = 'bg-blue-50 p-3 rounded-lg text-sm text-gray-700';
    activityItem.textContent = message;
    activityList.appendChild(activityItem);
}

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    
    const dayElement = document.getElementById('date-day');
    const dateElement = document.getElementById('date');
    
    const [weekday, month, day, year] = formattedDate.split(' ');
    dayElement.textContent = `${weekday}`;
    dateElement.textContent = `${month} ${day} ${year}`;
}

updateDateTime();

// Change background color randomly when clicking the theme button
const themeButton = document.getElementById('theme-btn');
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3C13A', '#8D3DAF', '#E91E63', '#00BCD4'];

themeButton.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});









