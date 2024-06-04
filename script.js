function submitQuiz() {
    const answers = {
        q1: 'c',
        q2: 'c',
        q3: 'b',
        q4: 'b',
        q5: 'd',
    };

    let score = 0;
    let totalQuestions = 5;

    for (let i = 1; i <= totalQuestions; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === answers[`q${i}`]) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your score is ${score} out of ${totalQuestions}.`;
}