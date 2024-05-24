// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image');
    let draggedElement = null;

    images.forEach(image => {
        image.addEventListener('dragstart', (e) => {
            draggedElement = e.target;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', draggedElement.innerHTML);
        });

        image.addEventListener('dragover', (e) => {
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'move';
            return false;
        });

        image.addEventListener('drop', (e) => {
            if (e.stopPropagation) {
                e.stopPropagation(); // Stops some browsers from redirecting.
            }

            if (draggedElement !== e.target) {
                let draggedBg = window.getComputedStyle(draggedElement).backgroundImage;
                let droppedBg = window.getComputedStyle(e.target).backgroundImage;

                draggedElement.style.backgroundImage = droppedBg;
                e.target.style.backgroundImage = draggedBg;
            }

            return false;
        });

        image.addEventListener('dragend', (e) => {
            e.dataTransfer.clearData();
        });
    });
});
