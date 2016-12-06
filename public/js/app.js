var token = localStorage.token;
if (!token) {
  window.location = 'login.html';
};

const resultDisplay = document.getElementById('result-display');

function on() {
  superagent
    .get('/api/fireplace/on')
    .set('Authorization', `Bearer ${localStorage.token}`)
    .end((err,res) => {
      if (err) resultDisplay.value = console.log(err);
      resultDisplay.innerHTML = res.text;
    });
}

function off() {
  superagent
    .get('/api/fireplace/off')
    .set('Authorization', `Bearer ${localStorage.token}`)
    .end((err,res) => {
      if (err) resultDisplay.value = console.log(err);
      resultDisplay.innerHTML = res.text;
    });
}
