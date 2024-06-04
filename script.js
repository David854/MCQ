document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('quiz-form').addEventListener('submit', function(e) {
        e.preventDefault();
        submitQuiz();
    });

    document.getElementById('restart-button').addEventListener('click', function() {
        restartQuiz();
    });
});

function submitQuiz() {
    const answers = {
        q1: 'c',
        q2: 'c',
        q3: 'b',
        q4: 'b',
        q5: 'd',
    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let i = 1; i <= totalQuestions; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === answers[`q${i}`]) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your score is ${score} out of ${totalQuestions}.`;
}

function restartQuiz() {
    const form = document.getElementById('quiz-form');
    form.reset();
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
}
