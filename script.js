document.addEventListener('DOMContentLoaded', () => {
    const setupScreen = document.getElementById('setup-screen');
    const gameScreen = document.getElementById('game-screen');
    const playerContainer = document.getElementById('player-container');
    const playerCountSelect = document.getElementById('player-count');
    const startBtn = document.getElementById('start-btn');
    const triggerBtn = document.getElementById('trigger-btn');
    const resetBtn = document.getElementById('reset-btn');
    const statusText = document.getElementById('status-text');

    let numberOfPlayers = 2;
    let playerElements = [];

    // 1. Setup Game: Create player circles
    startBtn.addEventListener('click', () => {
        numberOfPlayers = parseInt(playerCountSelect.value);
        setupScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        createPlayerCircles(numberOfPlayers);
    });

    function createPlayerCircles(count) {
        playerContainer.innerHTML = ''; // Clear previous
        playerElements = [];
        for (let i = 1; i <= count; i++) {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('player-circle');
            playerDiv.innerText = `P${i}`;
            playerDiv.id = `player-${i}`;
            playerContainer.appendChild(playerDiv);
            playerElements.push(playerDiv);
        }
    }

    // 2. Core Logic: Start Countdown and Pick Random Victim
    triggerBtn.addEventListener('click', () => {
        triggerBtn.classList.add('hidden');
        statusText.innerText = "Don't move... ⚡";
        
        // Start tension animation
        playerElements.forEach(el => el.classList.add('flashing'));

        // Phone vibration pattern (creates tension)
        if ('vibrate' in navigator) {
            // Vibrate short bursts
            navigator.vibrate([100, 100, 100, 100, 100, 100, 500]);
        }

        // Countdown delay (e.g., 3 seconds) before selection
        setTimeout(() => {
            selectVictim();
        }, 3000);
    });

    function selectVictim() {
        // Stop flashing
        playerElements.forEach(el => el.classList.remove('flashing'));

        // Pick random number between 0 and (count-1)
        const victimIndex = Math.floor(Math.random() * numberOfPlayers);
        const victim = playerElements[victimIndex];

        // Apply "Shock" effects
        victim.classList.add('shocked');
        statusText.innerText = `PLAYER ${victimIndex + 1} GOT SHOCKED! 😂`;

        // Intense vibration for the victim
        if ('vibrate' in navigator) {
            navigator.vibrate(1000); // 1 second solid vibration
        }

        // Show Reset Button
        resetBtn.classList.remove('hidden');
    }

    // 3. Reset Game
    resetBtn.addEventListener('click', () => {
        resetBtn.classList.add('hidden');
        triggerBtn.classList.remove('hidden');
        statusText.innerText = "Everyone, place your finger on the screen!";
        
        // Remove shocked class from everyone
        playerElements.forEach(el => {
            el.classList.remove('shocked');
        });
    });
});
          
