//adiciona um evento quando DOM estiver completamente carregado

    //seleciona o formulário na dom
    const form = document.querySelector ('form');

    //adicionar um evento de submit
    document.addEventListener('DomContentLoaded', ()=>{
    form.addEventListener('submit', async(event) =>{
        //previnir que a página recarregue ao enviar o form
        //event.preventDefault();


        //coletar o valor dos campos do inputs do formulario
        const textValue = document.getElementById('text').value;
        const emailValue = document.getElementById('email').value;
        
        //criar um objeto com os dados do formulário
        const formData = {
            text: textValue,
            email: emailValue,
        };

        //exibe os dados coletados no console
        console.log('Dados coletados', formData);

        //utilizar a fetch api para enviar os dados para o servidor
        //utilizando o metodo post
            const response = await fetch('http://www.api.com/cadastro',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
         body: JSON.stringify(formData),
        })
    });
});