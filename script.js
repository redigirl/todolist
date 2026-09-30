document.body.innerHTML =`<div>
<h1 id="title">Todo-list</h1>
<input type="text" id="input" placeholder="Enter your task">
<button id="hello-btn">Add Task</button>
<ul id="task-list"></ul>
</div>`

let button=document.getElementById("hello-btn");
button.addEventListener("click",function() {
    let input=document.getElementById("input");
    let task=input.value.trim();
    if(task) {
        let taskList=document.getElementById("task-list");
        let listItem=document.createElement("li");
        let taskText=document.createElement("span");
        taskText.textContent=task;
        let deleteBtn=document.createElement("button");
        deleteBtn.textContent="Delete";
        deleteBtn.addEventListener("click",function() {
            listItem.remove();
        });
        listItem.append(taskText,document.createTextNode("    "),deleteBtn);
        taskList.append(listItem);
        input.value="";
    }
});