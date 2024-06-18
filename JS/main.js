const sections = document.querySelectorAll('[data-section]');
for (let section of sections){
    const response = await fetch(section.dataset.section);
    const mainContent = await response.text();
    section.innerHTML = mainContent;
}
//validaciones
email.addEventListener("blur", function () {
    let email = document.getElementById("email").value;
    let emailPattern = /@gmail\.?/i;
    let emailWarning = document.getElementById("emailWarning");
  
    if (email) {
      if (emailPattern.test(email)) { // si se cumple el patern de la variable que creamos (es @gmail), mostramos esta advertencia
        emailWarning.style.display = "block";
        emailWarning.innerHTML = "The email domain cannot be gmail❗";
      } else {
        emailWarning.style.display = "none";
      }
    } else {
      emailWarning.innerHTML = "Please enter a valid email❗"; // Mostramos este mensaje si el campo está vacío
      emailWarning.style.display = "block"; 
    }
  });
  
  let phone = document.getElementById("phone");
  console.log(phone)
  
  phone.addEventListener("blur", function () {
    let phone = document.getElementById("phone").value;
    let phonePattern = /^[679]\d{8}(\s.*)?$/;
    let phoneWarning = document.getElementById("phoneWarning");
    if(phone){                             //Si el usuario pone algo en el campo de telefono ejecutamos la siguiente validación...
      if (!phonePattern.test(phone) && phone) {
        phoneWarning.style.display = "block";
        phoneWarning.innerHTML = "Phone number must start with 6, 7 or 9 and be 9 digits long. You can add the country extension after the phone number leaving an space between them❗";
      } else {
        phoneWarning.style.display = "none";
      }
    }else{
      phoneWarning.innerHTML = "This field cannot be empty❗";
      phoneWarning.style.display = "block"; // Mostramos este mensaje si el campo está vacío
    }
  });
  
  
  //Añadir un evento on submit al formulario para evitar el envío si hay errores
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    let emailError = emailWarning.style.display === "block";
    let phoneError = phoneWarning.style.display === "block";
  
    if (emailError || phoneError) {
      event.preventDefault();             // Prevenir el envío del formulario si hay errores
      alert("Please fill all the fields correctly❗");
    }
  });