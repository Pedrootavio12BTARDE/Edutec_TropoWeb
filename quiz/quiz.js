function checkAnswer(answer) {
    const correctAnswer = 'predacao';
    const resultElement = document.getElementById('result');
  
    if (answer === correctAnswer) {
      resultElement.textContent = 'Correto! Leões caçam zebras para se alimentar.';
      resultElement.style.color = 'green';
    } else {
      resultElement.textContent = 'Errado! Tente novamente.';
      resultElement.style.color = 'red';
    }
  }
  