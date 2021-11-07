var url_string = window.location.href;
var url = new URL(url_string);
var code = url.searchParams.get("code");

document.getElementById('code_display').innerHTML = code;

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://discord.com/api/v8/oauth2/token", true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send(JSON.stringify({
        'client_id': 881830919680454676,
        'client_secret': 'CmeqYgSeQlgZLYwj95hf4hQmbNWL4wbf',
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': 'http://localhost:8000/after_login.html'
}));