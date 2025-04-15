function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
  
    const span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";
  
    span.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
  
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "task-buttons";
  

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => {
      const newTask = prompt("Edit your task:", span.textContent);
      if (newTask !== null && newTask.trim() !== "") {
        span.textContent = newTask.trim();
      }
    });
  
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
  
    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);
  
    li.appendChild(span);
    li.appendChild(buttonsDiv);
  
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  
