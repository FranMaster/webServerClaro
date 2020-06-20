window.onload = () => {

    document.getElementById('BtnEnviar')
        .addEventListener('click', loguearse);

};


let Saluda = (e) => {
    e.preventDefault();
    alert('Hola Soto');
}


let loguearse = (e) => {
    e.preventDefault();
    let correo = document.getElementById('Email').value;
    let pass = document.getElementById('Pasword').value;
    //AJAX
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.status == 200 && xhr.readyState == 4) {
            alert(xhr.response);
        }
        if (xhr.status != 200 && xhr.readyState == 4) {
            alert(xhr.response);
        }

    }
    xhr.open('POST', '/login', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    alert(correo + ' ' + pass);
    xhr.send(JSON.stringify({ email: correo, password: pass }));


}