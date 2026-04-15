const TARGET_OFFSET_MS = 3 * 24 * 60 * 60 * 1000; 
const targetDate = new Date(Date.now() + TARGET_OFFSET_MS);

const cardElement = document.getElementById('task-card');
const dueDateElement = document.getElementById('due-date-element');
const timeRemainingElement = document.getElementById('time-remaining');
const statusElement = document.getElementById('task-status');
const checkboxToggle = document.getElementById('complete-toggle');
const editBtn = document.getElementById('edit-btn');
const deleteBtn = document.getElementById('delete-btn');

const options = { month: 'short', day: 'numeric', year: 'numeric' };
const formattedDate = targetDate.toLocaleDateString('en-US', options);
dueDateElement.textContent = `Due ${formattedDate}`;
dueDateElement.setAttribute('datetime', targetDate.toISOString());

function updateTimeRemaining() {
  const now = Date.now();
  const diffMs = targetDate.getTime() - now;
  const diffHours = diffMs / (1000 * 60 * 60);
  const diffDays = diffHours / 24;

  let timeText = "";
  
  if (diffHours < 0) {
    timeText = `Overdue by ${Math.abs(Math.round(diffHours))} hours`;
  } else if (diffHours <= 1) {
    timeText = "Due now!";
  } else if (diffHours <= 24) {
    timeText = `Due in ${Math.round(diffHours)} hours`;
  } else if (diffDays <= 2 && diffDays > 1) {
    timeText = "Due tomorrow";
  } else {
    timeText = `Due in ${Math.round(diffDays)} days`;
  }

  if (timeRemainingElement.textContent !== timeText) {
    timeRemainingElement.textContent = timeText;
  }
}

updateTimeRemaining();
setInterval(updateTimeRemaining, 60000);

checkboxToggle.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  
  if (isChecked) {
    cardElement.classList.add('completed');
    statusElement.textContent = 'Done';
  } else {
    cardElement.classList.remove('completed');
    statusElement.textContent = 'Pending';
  }
});

editBtn.addEventListener('click', () => {
  console.log('edit clicked');
});

deleteBtn.addEventListener('click', () => {
  alert('Delete clicked');
});