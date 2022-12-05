const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('icpf');
const tel = document.getElementById('telefone');
const estado = document.getElementById('est');
const ms = document.getElementById('ms');

const radio = document.getElementById('frutaIII');
const radioI = document.getElementById("frutaI");
const radioII = document.getElementById("frutaII");
const radioIII = document.getElementById("frutaIII");

const checkbox = document.getElementById('rev3');
const checkboxI = document.getElementById("rev1");
const checkboxII = document.getElementById("rev2");
const checkboxIII = document.getElementById("rev3");

//Validações com eventos.
function checkNome(){
	const name_value = nome.value.trim();

	if(name_value === ''){
		nomeRequiredValidation(nome, ' Campo obrigatório.');
	}
	else{
		nomeSuccessValidation(nome);
	}
}

function checkEmail(){
	const email_value = email.value.trim();

	if(email_value === ''){
		emailRequiredValidation(email, ' Campo obrigatório.');
	}
	else{
		regexemail();
	}
}

function checkCpf(){
	const cpf_value = cpf.value.trim();

	if(cpf_value === ''){
		cpfRequiredValidation(cpf, ' Campo obrigatório.');
	}
	else{
		validcpf(cpf);
		//cpfSuccessValidation(cpf);
	}
}

function checkTel(){
	const tel_value = tel.value.trim();

	if(tel_value === ''){
		telRequiredValidation(tel, ' Campo obrigatório.');
	}
	else{
		telSuccessValidation(tel);
	}
}

function checkEst(){
	const est_value = estado.value;

	if(est_value === ''){
		estRequiredValidation(estado, ' Campo obrigatório.');
	}
	else{
		estSuccessValidation(estado);
	}
}

function checkRadio(){
	if (radioI.checked || radioII.checked || radioIII.checked) {
		radioSuccessValidation(radio);
	} 
	else {
		radioRequiredValidation(radio, ' Campo obrigatório.');
	}
}

function checkCheckbox(){
	if (checkboxI.checked || checkboxII.checked || checkboxIII.checked) {
		checkboxSuccessValidation(checkbox);
	} 
	else {
		checkboxRequiredValidation(checkbox, ' Campo obrigatório.');
	}
}

function checkTextarea(){
	const ms_value = ms.value.trim();

	if(ms_value === ''){
		msRequiredValidation(ms, ' Campo obrigatório.');
	}
	else{
		msSuccessValidation(ms);
	}
}

//Validação geral.
form.addEventListener('submit', () => {

	check();
})

function check(){
	const name_value = nome.value.trim();
	const email_value = email.value.trim();
	const cpf_value = cpf.value.trim();
	const tel_value = tel.value.trim();
	const est_value = estado.value;
	const ms_value = ms.value.trim();

	if(name_value === ''){
		nomeRequiredValidation(nome, ' Campo obrigatório.');
	}
	else{
		nomeSuccessValidation(nome);
	}

	if(email_value === ''){
		emailRequiredValidation(email, ' Campo obrigatório.');
	}

	else{
		emailSuccessValidation(email);
	}

	if(cpf_value === ''){
		cpfRequiredValidation(cpf, ' Campo obrigatório.');
	}
	else{
		cpfSuccessValidation(cpf);
	}

	if(tel_value === ''){
		telRequiredValidation(tel, ' Campo obrigatório.');
	}
	else{
		telSuccessValidation(tel);
	}

	if(est_value === ''){
		estRequiredValidation(estado, ' Campo obrigatório.');
	}
	else{
		estSuccessValidation(estado);
	}

	if (radioI.checked || radioII.checked || radioIII.checked) {
		radioSuccessValidation(radio);
	} 
	else {
		radioRequiredValidation(radio, ' Campo obrigatório.');
	}

	if (checkboxI.checked || checkboxII.checked || checkboxIII.checked) {
		checkboxSuccessValidation(checkbox);
	} 
	else {
		checkboxRequiredValidation(checkbox, ' Campo obrigatório.');
	}

	if(ms_value === ''){
		msRequiredValidation(ms, ' Campo obrigatório.');
	}
	else{
		msSuccessValidation(ms);
	}
}

//Validação --> campo nome.
function nomeRequiredValidation(input, menssage){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');
	
    image[0].src = './images/error-icon.svg';

	small.innerText = menssage;

	valida.className = 'valid-formu required';
}

function nomeSuccessValidation(input){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');
	
    image[0].src = './images/success-icon.svg';

	small.innerText = '';

	valida.className = 'valid success'
}

//Validação --> campo e-mail.
function emailRequiredValidation(input, menssage){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');

    image[1].src = './images/error-icon.svg';

	small.innerText = menssage;

	valida.className = 'valid-formu required';
}

//RegEx --> validação e-mail.
function regexemail(){
	const email_value = email.value;

	var reemail = /^[\w._-]+@[\w._-]+\.[\w]/i;	

	if(reemail.test(email_value)){
		emailSuccessValidation(email);
	}
	else{
		emailRequiredValidation(email, 'Informe um e-mail válido.');
	}
}
/*
//2ª validação --> E-mail.
function emailValidation(input, menssage){
	const email_value = email.value.trim();
	if(email_value.indexOf('@')==-1 || email_value.indexOf('.')==-1){	
		const valida = input.parentElement;
		const small = valida.querySelector('small');
		var image = document.getElementsByTagName('img');

		image[1].src = './images/error-icon.svg';

		small.innerText = menssage;

		valida.className = 'valid-formu required';
	}
}*/

function emailSuccessValidation(input){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');

    image[1].src = './images/success-icon.svg';

	small.innerText = '';

	valida.className = 'valid success'
}

//Validação --> campo cpf.
function cpfRequiredValidation(input, menssage){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');

    image[2].src = './images/error-icon.svg';

	small.innerText = menssage;

	valida.className = 'valid-formu required';
}

function cpfSuccessValidation(input){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');

    image[2].src = './images/success-icon.svg';

	small.innerText = '';

	valida.className = 'valid success'
}

function validcpf(cpf){
	const cpf_value = cpf.value;
	var cpfn = cpf_value.replace(/[^\d]+/g,'');
	let somaI = 0, somaII = 0, mult = 10, resultI = 0, resultII = 0;

	for(var i = 0; i < 9; i++){
		somaI += cpfn[i] * mult;

		mult--;
	}

	resultI = (somaI*10) % 11;

	mult = 11;

	for(i = 0; i < 10; i++){
		somaII += cpfn[i] * mult;

		mult--;
	}

	resultII = (somaII*10) % 11;

	if(resultI == 10){
		resultI = 0;
	}
	if(resultII == 10){
		resultI = 0;
	}

	if(resultI == cpfn[9] && resultII == cpfn[10]){
		cpfSuccessValidation(cpf);
	}
	else{
		cpfRequiredValidation(cpf, 'Informe um CPF válido.');
	}
}

//Validação --> campo telefone.
function telRequiredValidation(input, menssage){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');

    image[3].src = './images/error-icon.svg';

	small.innerText = menssage;

	valida.className = 'valid-formu required';
}

function telSuccessValidation(input){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');

    image[3].src = './images/success-icon.svg';

	small.innerText = '';

	valida.className = 'valid success'
}

//Validação --> selecione estado.
function estRequiredValidation(input, menssage){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');

    image[4].src = './images/error-icon.svg';

	small.innerText = menssage;

	valida.className = 'valid-formu required';
}

function estSuccessValidation(input){
	const select = document.getElementsByTagName('select');
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');

    image[4].src = './images/success-icon.svg';
	image[4].style.visibility = 'visible';

	select[0].style.border = "2px solid #4eca64"

	small.innerText = '';

	valida.className = 'valid success'
}

//Validação --> fruta.
function radioRequiredValidation(input, menssage){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');
    image[5].src = './images/error-icon.svg';
	image[5].style.visibility = 'visible';

	small.innerText = menssage;

	valida.className = 'valid-formu required';
}

function radioSuccessValidation(input){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');

    image[5].src = './images/success-icon.svg';
	image[5].style.visibility = 'visible';

	small.innerText = '';

	valida.className = 'valid success'
}

//Validação --> revista de interesse.
function checkboxRequiredValidation(input, menssage){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');
    image[6].src = './images/error-icon.svg';
	image[6].style.visibility = 'visible';

	small.innerText = menssage;

	valida.className = 'valid-formu required';
}

function checkboxSuccessValidation(input){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');

    image[6].src = './images/success-icon.svg';
	image[6].style.visibility = 'visible';

	small.innerText = '';

	valida.className = 'valid success'
}

//Validação --> campo de mensagem.
function msSuccessValidation(input){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');
    image[7].src = './images/success-icon.svg';

	small.innerText = '';

	valida.className = 'valid success'
}

function msRequiredValidation(input, menssage){
	const valida = input.parentElement;
	const small = valida.querySelector('small');
	var image = document.getElementsByTagName('img');
    image[7].src = './images/error-icon.svg';

	small.innerText = menssage;

	valida.className = 'valid-formu required';
}

//Máscara --> CPF.
const cpfMask = (cpf) => {
	let cpflength = cpf.value.length;

	if(cpflength === 3 || cpflength === 7){
		cpf.value += '.';
	}
	else if(cpflength === 11){
		cpf.value += '-';
	}
} 

//Máscara --> Telefone.
const telMask = (telefone) => {
	let tellength = telefone.value.length;
	
	if(tellength === 2){
		telefone.value += ')';
		telefone.value-1;
		telefone.value = '(' + telefone.value;
	}
	else if(tellength === 9){
		telefone.value += '-';
	}
}

//Dark/Light mode.
const mode = document.getElementById('mode');

mode.addEventListener('change', () => {
	var element = document.body;
	var form = document.getElementById('form').classList;
	var submit = document.getElementById('btId').classList;

	element.classList.toggle('light-mode');
	form.toggle('form-light');
	submit.toggle('submit-light');
})