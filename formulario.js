const formulario = document.getElementById('formulario');
const input = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9]{4,16}$/, // Letras, numeros
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^[a-zA-Z0-9]+{15,20}$/, // 15 a 20 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10}$/ // 7 a 14 numeros.
}