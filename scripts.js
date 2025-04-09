// This will randomly reveal the hidden link after a few seconds
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function() {
        const hiddenLink = document.getElementById('hidden-link');
        hiddenLink.classList.add('active');
    }, 5000);  // Reveals the link after 5 seconds (you can adjust this)
});

// For extra mystery, you can make clicking on placeholders trigger something
const placeholders = document.querySelectorAll('.placeholder-item');

placeholders.forEach((placeholder, index) => {
    placeholder.addEventListener('click', function () {
        alert(`You clicked on Placeholder ${index + 1}! Is this clue important?`);
        // Optionally, reveal hidden messages or links here
    });
});
