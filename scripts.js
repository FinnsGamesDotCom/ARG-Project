// Reveal Clue Button
document.getElementById('revealClue').addEventListener('click', function() {
    document.getElementById('hiddenClue').style.display = 'block';
});

// Puzzle Answer Validation
document.getElementById('submitPuzzle').addEventListener('click', function() {
    const userAnswer = document.getElementById('puzzleAnswer').value;
    const result = document.getElementById('puzzleResult');

    if (userAnswer == '8') {
        result.textContent = 'Correct! Well done.';
        result.style.color = 'green';
    } else {
        result.textContent = 'Incorrect, try again.';
        result.style.color = 'red';
    }
});
