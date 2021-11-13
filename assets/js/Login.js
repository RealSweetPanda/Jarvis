const code=new URL(window.location.href).searchParams.get('code');
document.getElementById('code_display').innerHTML=code;
const options={method:'POST',                                              headers: {
                                                  'Code': code
                                              }}
fetch('https://a566-2a00-a040-199-845d-282f-98ad-2b9d-5e5e.ngrok.io/test',options)
    .then(respond=>respond.text)
    .then(data=>{document.getElementById('code_display').innerHTML='k';}).catch(error=>{console.error('Error:',error);});
