
const discoverNewDiv = document.getElementById('discover-new-div');

discoverNewDiv.addEventListener('click', function(){
    window.location.href = "https://ayeshasareen-dev.github.io/A5-Dev-Board-main/blog.html";
});

const buttons = document.querySelectorAll('.completed-btn');
const activityLog = document.getElementById('activity-log');
const tasksToDo = document.getElementById('tasks-to-do');
const tasksCompleted = document.getElementById('tasks-completed');


let clickedButtons = 0;

buttons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
            
        alert("Board updated successfully");
        button.disabled = true;
        clickedButtons = clickedButtons + 1;
        console.log(clickedButtons);
        if(clickedButtons === 6){
            alert("Congrats!!! You have completed all the current tasks");
        }
        tasksToDo.innerText = (parseInt(tasksToDo.innerText) - 1);
        tasksCompleted.innerText = (parseInt(tasksCompleted.innerText) + 1);
        const cardHeading = event.target.parentNode.parentNode.querySelector('.heading').innerText;
        const time = formatTime(new Date());
        const div = document.createElement('div');
        div.classList.add('bg-slate-100', 'p-4', 'rounded-2xl', 'activity-log-card');
        div.innerHTML = `<p>You have Completed the ${cardHeading} at ${time}</p>`;
        activityLog.appendChild(div);
        
        
    });
});

// handling clear history
const clearHistory = document.getElementById('clear-history');
clearHistory.addEventListener('click', function(){
    const cards = document.querySelectorAll('.activity-log-card');
    
    cards.forEach((card) => {
        card.remove();
    });
    buttons.forEach((button) => {
        button.disabled = false;
    })
    tasksToDo.innerText = '06';
    tasksCompleted.innerText = '23';
    clickedButtons = 0;
})

function toggleText(element){
    element.classList.toggle('line-clamp-2');
}

formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hours + ':' + minutes + ':' + seconds + ' ' + ampm;

}
