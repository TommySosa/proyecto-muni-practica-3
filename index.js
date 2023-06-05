function validateInputs(){
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let confirmpass = document.getElementById('confirmpass').value
    let birthday = document.getElementById('birthday').value
    
    const regex = new RegExp('^[A-Z]+$', 'i');

    //verifica si los campos no están vacios
    firstname == "" || lastname == "" || username == ""  || password == "" || confirmpass  == "" || birthday == "" ? alert('Please complete all required information') : null

    //verifica que los campos firstname y lastname no contenga números
    !regex.test(firstname) || !regex.test(lastname) ? alert('Please dont enter numbers') : null

    //verifica las longitudes máximas y minimas
    firstname.length < 3 || firstname.length > 30 ? alert('The First Name field must be between 3 and 30 characters.') : null
    lastname.length < 3 || lastname.length > 30 ? alert('The Last Name field must be between 3 and 30 characters.') : null
    username.length < 3 || username.length > 30 ? alert('The User Name field must be between 3 and 30 characters.') : null
    password.length < 4 || password.length > 30 ? alert('The Password field must be between 4 and 30 characters.') : null
  
    //verifica si se ingresó la misma contraseña
    confirmpass !== password ? alert('Passwords do not match') : null

    let date = new Date(birthday);

    // Verificar si la fecha es válida
    if (isNaN(date.getTime())) {
      alert("Invalid date");
    }

    // Verificar si la fecha está en el pasado
    let actualDate = new Date();
    if (date > actualDate) {
      alert("Please enter a valid date");
    }    
}
