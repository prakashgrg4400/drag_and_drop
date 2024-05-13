const item = document.querySelector(".item");
item.addEventListener("dragstart", handleDragStart);
function handleDragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
  console.log("Drag start");
}

// item.addEventListener("drag", handleDrag);
// item.addEventListener("dragend", handleDragEnd);

// function handleDragEnd(event) {
//   console.log("drag end");
// }
// function handleDrag(event) {
//   console.log("drag");
// }

const boxes = document.querySelectorAll(".box");
// console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("dragenter", handleDragEnter);
  box.addEventListener("dragover", handleDragOver);
  box.addEventListener("dragleave", handleDragLeave);
  box.addEventListener("drop", handleDrop);
});
function handleDragEnter(event) {
  event.preventDefault();
  event.target.classList.add("drag-over");
  //   console.log("Drag enter");
}
function handleDragOver(event) {
  event.preventDefault();
  event.target.classList.add("drag-over");
  //   console.log("Drag over");
}
function handleDragLeave(event) {
  //   console.log("Drag leave");
  event.target.classList.remove("drag-over");
}
function handleDrop(event) {
  //   console.log("Drag drop");
  const newTarget = event.dataTransfer.getData("text");
  event.target.append(document.getElementById(newTarget));
  event.target.classList.remove("drag-over");
}
