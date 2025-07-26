let addTaskBtn = document.querySelector("#add");
let taskInput = document.querySelector("#text");
let listContainer = document.querySelector("#list-container");
let container = document.querySelector(".container");

addTaskBtn.onclick = () => {
  addTask();
};

function addTask() {
  if (taskInput.value.trim() === "") {
    alert("You need to write something first..");
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    taskInput.value = "";
    saveData();
    adjustContainerHeight();
  }
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
    adjustContainerHeight();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
  adjustContainerHeight();
}

function adjustContainerHeight() {
  const itemCount = listContainer.querySelectorAll("li").length;
  const baseHeight = 200;
  const extraHeight = 45 * itemCount;
  container.style.height = `${baseHeight + extraHeight}px`;
}

showData();
