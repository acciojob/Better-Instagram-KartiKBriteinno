document.addEventListener("DOMContentLoaded", () => {
    const draggables = document.querySelectorAll(".image");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", dragStart);
        draggable.addEventListener("dragover", dragOver);
        draggable.addEventListener("dragenter", dragEnter);
        draggable.addEventListener("dragleave", dragLeave);
        draggable.addEventListener("drop", drop);
        draggable.addEventListener("dragend", dragEnd);
    });

    function dragStart(e) {
        e.dataTransfer.setData("text/plain", e.target.id);
        setTimeout(() => {
            e.target.classList.add("dragging");
        }, 0);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
    }

    function dragLeave(e) {
        e.target.classList.remove("over");
    }

    function drop(e) {
        e.target.classList.remove("over");
        const id = e.dataTransfer.getData("text");
        const draggable = document.getElementById(id);
        const target = e.target;

        // Swap the background images
        const tempBackground = draggable.style.backgroundImage;
        draggable.style.backgroundImage = target.style.backgroundImage;
        target.style.backgroundImage = tempBackground;
    }

    function dragEnd(e) {
        e.target.classList.remove("dragging");
    }
});
