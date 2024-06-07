function submitQuiz() {
  const answers = {
    q1: "c",
    q2: "c",
    q3: "b",
    q4: "b",
    q5: "d",
  };

  let score = 0;
  let totalQuestions = Object.keys(answers).length;
  let allQuestionsAnswered = true;

  for (let i = 1; i <= totalQuestions; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer) {
      if (answer.value === answers[`q${i}`]) {
        score++;
      }
    } else {
      allQuestionsAnswered = false;
    }
  }

  if (allQuestionsAnswered) {
    // Redirect to the score page with the score as a query parameter
    window.location.href = `score.html?score=${score}`;
  } else {
    window.alert("Please answer all questions before submitting.");
  }
}

function restartQuiz() {
  const form = document.getElementById("quiz-form");
  form.reset();
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "";
}

document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();
  submitQuiz();
});

document
  .getElementById("restart-button")
  .addEventListener("click", function () {
    restartQuiz();
  });
