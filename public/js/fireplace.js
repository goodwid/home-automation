/* globals token */
const statusDisplay = document.getElementById('fireplace-status-display');
const onButton = document.getElementById('fireplace-on');
const offButton = document.getElementById('fireplace-off');
const statusButton = document.getElementById('fireplace-status');
const timerButton = document.getElementById('fireplace-timer');
const timerData = document.getElementById('fireplace-timer-data');

onButton.addEventListener('click', on);
offButton.addEventListener('click', off);
statusButton.addEventListener('click', status);
timerButton.addEventListener('click', timer);

function on() {
  superagent
  .get('/api/fireplace/on')
  // .set('Authorization', `Bearer ${token}`)
  .end((err,res) => {
    if (err) statusDisplay.innerHTML = console.log(err);
    let response = JSON.parse(res.text);
    statusDisplay.innerHTML = response.message;
  });
}

function off() {
  superagent
  .get('/api/fireplace/off')
  // .set('Authorization', `Bearer ${token}`)
  .end((err,res) => {
    if (err) statusDisplay.innerHTML = console.log(err);
    let response = JSON.parse(res.text);
    statusDisplay.innerHTML = response.message;
  });
}

function status() {
  superagent
  .get('/api/fireplace/status')
  // .set('Authorization', `Bearer ${token}`)
  .end((err, res) => {
    if (err) statusDisplay.innerHTML = console.log(err);
    let response = JSON.parse(res.text);
    statusDisplay.innerHTML = `${response.message}<br>${response.timeout}`;
  });
}

function timer(e) {
  let timeout = timerData.value;
  superagent
  .post('/api/fireplace/timer')
  .send({timeout})
  // .set('Authorization', `Bearer ${token}`)
  .end((err, res) => {
    if (err) statusDisplay.innerHTML = console.log(err);
    let response = JSON.parse(res.text);
    statusDisplay.innerHTML = response.message;
  });
}
