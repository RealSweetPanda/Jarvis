storage = window.sessionStorage;
let data = storage.getItem('token');
document.getElementById('token').innerHTML=data;