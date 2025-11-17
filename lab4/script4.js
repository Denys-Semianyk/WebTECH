document.addEventListener('DOMContentLoaded', () => {

    const setupScreen = document.getElementById('setup-screen');
    const gameScreen = document.getElementById('game-screen');
    const startBtn = document.getElementById('start-btn');
    
    const difficultySelect = document.getElementById('difficulty');
    const colorSelect = document.getElementById('color');
    
    const scoreDisplay = document.getElementById('score-display');
    const timerDisplay = document.getElementById('timer-display');
    
    const gameArea = document.getElementById('game-area');
    const target = document.getElementById('target');

    let score = 0;
    let timeLeft = 0;
    let timePerClick = 2; 
    let reactionInterval; 


    startBtn.addEventListener('click', () => {
        const difficulty = difficultySelect.value;
        const color = colorSelect.value;

        if (color === "") {
            alert('Please choose a color to hunt!');
            return;
        }

        if (difficulty === 'easy') {
            timePerClick = 3;
        } else if (difficulty === 'normal') {
            timePerClick = 2;
        } else if (difficulty === 'hard') {
            timePerClick = 1;
        }

        target.style.backgroundColor = color;
        startGame();
    });

    function startGame() {
        setupScreen.style.display = 'none';
        gameScreen.style.display = 'block';

        score = 0;
        scoreDisplay.textContent = score;
        spawnTarget();
    }

    function spawnTarget() {
        clearInterval(reactionInterval);
        
        timeLeft = timePerClick;
        timerDisplay.textContent = timeLeft;

        const areaWidth = gameArea.clientWidth;
        const areaHeight = gameArea.clientHeight;
        
        const targetWidth = target.offsetWidth;
        const targetHeight = target.offsetHeight;

    
        const randomTop = Math.floor(Math.random() * (areaHeight - targetHeight));
        const randomLeft = Math.floor(Math.random() * (areaWidth - targetWidth));

        target.style.top = randomTop + 'px';
        target.style.left = randomLeft + 'px';
        target.style.display = 'block';

        reactionInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                
                gameOver(); 
            }
        }, 1000); 
    }

    
    target.addEventListener('click', () => {
        
        clearInterval(reactionInterval);

        
        score++;
        scoreDisplay.textContent = score;

        
        target.style.display = 'none';
        
        setTimeout(spawnTarget, 200); 
    });

    function gameOver() {

        clearInterval(reactionInterval);


        target.style.display = 'none';


        alert(`Game Over! Your score: ${score}`);

        gameScreen.style.display = 'none';
        setupScreen.style.display = 'block';
    }
});
