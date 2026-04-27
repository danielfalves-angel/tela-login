// Example starter JavaScript for disabling form submissions if there are invalid fields(() => {
'use strict'

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('#login')// seleciona todos os form com o id de login

// Loop over them and prevent submission
Array.from(forms).forEach(form => {// essa linha transforma o forms em um array e percorre ele com o forEach
    form.addEventListener('submit', event => {// executa um evento quando ouve um submit
        if (!form.checkValidity()) {//verifica se o formulário é valido
            event.preventDefault()
            event.stopPropagation()
        }

        



        form.classList.add('was-validated')
    }, false)//finaliza o addEventListners
});