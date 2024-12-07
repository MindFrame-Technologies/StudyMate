
function addList() {
    const listName = document.getElementById('list-name').value;
    if (listName === '') return alert('Nome da lista não pode estar vazio!');
    
    let lists = JSON.parse(localStorage.getItem('studyLists')) || [];
    lists.push({ name: listName, tasks: [] });
    localStorage.setItem('studyLists', JSON.stringify(lists));
    
    document.getElementById('list-name').value = ''; 
    renderLists(); 
}

function renderLists() {
    const lists = JSON.parse(localStorage.getItem('studyLists')) || [];
    const listsBody = document.getElementById('lists-body');
    listsBody.innerHTML = ''; 
    
    lists.forEach((list, index) => {
        const row = `
            <tr>
                <td>${list.name}</td>
                <td>
                    <button onclick="selectList(${index})">Ver Tarefas</button>
                    <button onclick="deleteList(${index})">Excluir</button>
                </td>
            </tr>
        `;
        listsBody.innerHTML += row;
    });
}

function deleteList(index) {
    let lists = JSON.parse(localStorage.getItem('studyLists')) || [];
    lists.splice(index, 1);
    localStorage.setItem('studyLists', JSON.stringify(lists));
    renderLists();
}

let selectedListIndex = null;
function selectList(index) {
    selectedListIndex = index;
    renderTasks();
}
function addTask() {
    if (selectedListIndex === null) return alert('Selecione uma lista primeiro!');
    
    const taskName = document.getElementById('task-name').value;
    if (taskName === '') return alert('Nome da tarefa não pode estar vazio!');
    
    let lists = JSON.parse(localStorage.getItem('studyLists')) || [];
    lists[selectedListIndex].tasks.push({ name: taskName, completed: false });
    localStorage.setItem('studyLists', JSON.stringify(lists));
    
    document.getElementById('task-name').value = ''; 
    renderTasks(); 
}

function renderTasks() {
    const lists = JSON.parse(localStorage.getItem('studyLists')) || [];
    const tasks = lists[selectedListIndex].tasks;
    const tasksBody = document.getElementById('tasks-body');
    tasksBody.innerHTML = ''; 
    
    tasks.forEach((task, taskIndex) => {
        const row = `
            <tr>
                <td>${task.name}</td>
                <td>${task.completed ? 'Concluída' : 'Pendente'}</td>
                <td>
                    <button onclick="toggleTask(${taskIndex})">Marcar como ${task.completed ? 'Pendente' : 'Concluída'}</button>
                    <button onclick="deleteTask(${taskIndex})">Excluir</button>
                </td>
            </tr>
        `;
        tasksBody.innerHTML += row;
    });
}

function toggleTask(taskIndex) {
    let lists = JSON.parse(localStorage.getItem('studyLists')) || [];
    lists[selectedListIndex].tasks[taskIndex].completed = !lists[selectedListIndex].tasks[taskIndex].completed;
    localStorage.setItem('studyLists', JSON.stringify(lists));
    renderTasks(); 
}

function deleteTask(taskIndex) {
    let lists = JSON.parse(localStorage.getItem('studyLists')) || [];
    lists[selectedListIndex].tasks.splice(taskIndex, 1);
    localStorage.setItem('studyLists', JSON.stringify(lists));
    renderTasks(); 
}

window.onload = function() {
    renderLists();
}

