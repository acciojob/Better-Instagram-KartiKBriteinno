// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image');
    let draggedElement = null;

    images.forEach(image => {
        image.addEventListener('dragstart', (e) => {
            draggedElement = e.target;
            e.dataTransfer.setData('text/plain', '');
        });

        image.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        image.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedElement !== e.target) {
                let draggedStyle = window.getComputedStyle(draggedElement);
                let droppedStyle = window.getComputedStyle(e.target);
                let draggedBg = draggedStyle.backgroundImage;
                let droppedBg = droppedStyle.backgroundImage;

                draggedElement.style.backgroundImage = droppedBg;
                e.target.style.backgroundImage = draggedBg;
            }
        });
    });
});