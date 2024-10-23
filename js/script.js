let currentPage = 0;
const diaryPages = document.querySelectorAll('.diary-page'); // Select all diary pages
const welcomeScreen = document.getElementById('welcomeScreen'); // Welcome screen element
const openButton = document.getElementById('openButton'); // Open diary button
const bookContainer = document.getElementById('bookContainer'); // Diary book container

// Function to hide welcome screen and show the open diary button
function startDiary() {
    welcomeScreen.style.display = 'none';
    openButton.style.display = 'block';
    triggerConfetti();
}

// Function to open the diary and hide the "Open Diary" button
function openBook() {
    openButton.style.display = 'none';
    bookContainer.style.display = 'block';
    updatePage(); // Ensure the correct page is displayed when opening the book
}

// Go to the next page
function nextPage() {
    currentPage++; // Increment page index
    if (currentPage >= diaryPages.length) {
        currentPage = 0; // Loop back to the first page if it's the last page
    }
    updatePage(); // Update the page display
}

// Go to the previous page
function previousPage() {
    currentPage--; // Decrement page index
    if (currentPage < 0) {
        currentPage = diaryPages.length - 1; // Loop back to the last page if it's the first page
    }
    updatePage(); // Update the page display
}

// Update the displayed diary page
function updatePage() {
    diaryPages.forEach((page, index) => {
        // Only the current page should be active
        if (index === currentPage) {
            page.classList.add('active'); // Show current page
        } else {
            page.classList.remove('active'); // Hide other pages
        }
    });
}
window.addEventListener('load', function() {
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Attempt to play music once the page loads
    const playPromise = backgroundMusic.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Music starts playing
            console.log('Music is playing');
        }).catch((error) => {
            console.log('Autoplay was prevented. User interaction needed.');
        });
    }

    // Optionally unmute after load
    backgroundMusic.muted = false; // Unmute after the page load if muted
});

// Initial call to update the page
updatePage();

// Play or Pause background music


// Trigger confetti for fun
function triggerConfetti() {
    const end = Date.now() + 3 * 1000;
    const colors = ['#bb0000', '#ffffff', '#e91e63'];

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
