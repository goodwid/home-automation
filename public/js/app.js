var token = localStorage.token;
if (!token) window.location = 'login.html';

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
  localStorage.removeItem('token');
  window.location = 'login.html';
});
