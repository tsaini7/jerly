//Cambiar fondo Nav

window.onscroll = function() {
  cambiarFondoNavbar();
};

function cambiarFondoNavbar() {
  const navbar = document.querySelector("#navbar2");
  const scrollPos = window.scrollY;

  console.log(navbar);

  if (scrollPos > 30) { // Cambia 100 al desplazamiento deseado en píxeles
    navbar.style.backgroundColor = "white"; // Cambia "blue" al color que desees
  } else {
    navbar.style.backgroundColor = "rgba(208, 208, 206, 0.8)"; // Color de fondo predeterminado
  }
}


var typed2 = new Typed('#element', {
strings: ['JERLY SECURITY', 'DAMOS PROTECCIÓN A TU MUNDO'],
typeSpeed: 30,
backSpeed: 10,
fadeOut: true,
loop: true
});

