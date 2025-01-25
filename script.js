document.addEventListener('DOMContentLoaded', () => {

    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    if(video2 != null){
        const startButton = document.getElementById('start-button');
        const enterButton = document.getElementById('enter-button');
        const MainLogo = document.getElementById('MainLogo');

        // Set video sources
        video1.src = './video1.mp4';
        video2.src = './video2.mp4';

        // Start with video1 muted initially
        video1.classList.add('active');
        video1.muted = true;

        // Hide both videos initially
        video1.style.display = 'none';
        video2.style.display = 'none';

        // Handle video looping
        video1.addEventListener('ended', () => {
            video1.classList.remove('active');
            video2.classList.add('active');
            video2.play();
            video2.muted = false;  // Unmute video2 when it starts playing
        });

        video2.addEventListener('ended', () => {
            video2.classList.remove('active');
            video1.classList.add('active');
            video1.play();
            video1.muted = false;  // Unmute video1 when it starts playing again
        });

        // Click to Start the video sequence
        startButton.addEventListener('click', () => {
            enterButton.style.display = 'block';
            startButton.style.display = 'none'; // Hide start button after click
            video1.classList.add('enter-button-after-start');
            video1.classList.add('enter-button-after-start');
            MainLogo.style.display = 'none'; // Hide start button after click

            video1.style.display = 'block'; // Show video1
            video1.play(); // Start playing video1
            video1.muted = false; // Unmute video1 when it starts playing

        });

        // Click to Enter button action
        enterButton.addEventListener('click', () => {
            // alert('Entering the website!'); // Replace with actual navigation logic if needed
            window.location.href = 'category.html';
        });
    }
});

let homePageDirectory = 'file:///home/pramod/Desktop/darshan/index.html';
function goBack() {
    window.history.back();
}

function goHome() {
    window.location.href = ./index.html;
}
