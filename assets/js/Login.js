const code=new URL(window.location.href).searchParams.get('code');
const options={method:'POST',                                              headers: {
                                                  'Code': code
                                              }};
fetch('http://3221-2a00-a040-199-845d-282f-98ad-2b9d-5e5e.ngrok.io/test',options)
.then(response=>response.text())
.then(data=>{document.getElementById('code_display').innerHTML='<strong>Redirecting...</strong>';
             if (data=='No Access') {
                                  window.location.href = "/noaccess.html";
             } else {
                 var storage = window.sessionStorage;
                 sessionStorage.setItem('token', data);
                                  window.location.href = "/dashboard.html";
             }
})
.catch(error=>{console.error('Error:',error);});