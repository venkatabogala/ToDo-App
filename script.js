// Select the element
const newTask = document.querySelector('#new-task');
const addTaskBtn = document.querySelector('#add-btn');
const taskList = document.querySelector('#task-list');

/*<ul id="task-list"   class="list-group">
<li class="task-container list-group-item"> <span>task #1</span> <button class="btn btn-danger">x</button></li>
<li class="task-container list-group-item"> <span>task #2</span> <button class="btn btn-danger">x</button></li>
<li class="task-container list-group-item"> <span>task #3</span> <button class="btn btn-danger">x</button></li>
</ul> */

/*const handleDeleteTask = (element) => {   //Reusable(global)
    element.remove()
}*/

const handleAddTask = () => {
    /*const handleDeleteTask = () => {
        newTaskLi.remove()
    }*/
    
// Create new elements
const newTaskLi = document.createElement('li');
const newTaskSpan = document.createElement('span');
const newTaskDeleteBtn = document.createElement('button');

// Use appendChild to build the hierarchy
taskList.appendChild(newTaskLi);
newTaskLi.appendChild(newTaskSpan);
newTaskLi.appendChild(newTaskDeleteBtn);

// Add classes to the newly created elements
newTaskLi.classList.add('task-container', 'list-group-item');
newTaskDeleteBtn.classList.add('btn', 'btn-danger');

//Add content to the newly created elements
newTaskDeleteBtn.textContent = 'x';
newTaskSpan.textContent = newTask.value;

// Add event to the delete button

/*newTaskDeleteBtn.addEventListener('click', () => { //which element needs to be deleted(passing the element)
    handleDeleteTask(newTaskLi) 
})
The button will disappear after this action but the addEventListener will remain in the memory
so we need to remove the eventListener*/

const _deleteTask = () => {
    newTaskDeleteBtn.removeEventListener('click', _deleteTask)
    newTaskLi.remove() 
}
newTaskDeleteBtn.addEventListener('click', _deleteTask)
     
}

// Add event to the add button
addTaskBtn.addEventListener('click', handleAddTask)

newTask.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        handleAddTask()
    }
})







