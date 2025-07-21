// selected share button and share panel
const shareBtn = document.querySelector('.user-info button');
const sharePanel = document.querySelector('.share-panel');

// Toggle the share panel visibility when the share button is clicked and toggle the button's active state
shareBtn.addEventListener('click', function() {
    sharePanel.classList.toggle('active');
    shareBtn.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    // Close the share panel if the click is outside of it
    if (!sharePanel.contains(event.target) && !shareBtn.contains(event.target)) {
        sharePanel.classList.remove('active');
        shareBtn.classList.remove('active');
    }
});