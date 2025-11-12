const nome = document.getElementById("cadastro-nome_input")
const email = document.getElementById("cadastro-email_input")
const password = document.getElementById("cadastro-password_input")
const cadastroBtn = document.getElementById("cadastro_btn")
const form = document.getElementById("form")

form.addEventListener("submit",async(e)=>{
    e.preventDefault()

    const nome_value = nome.value;
    const email_value = email.value;
    const password_value = password.value;
     

    const dados = {nome_value,email_value, password_value}

    try {
        const resposta = await fetch("http://localhost:3000/cadastro",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados),
        })

        const resultado = await resposta.json();
        alert(resultado.mensagem);
        form.reset();
    } catch (error) {
        console.error("Erro:", erro);
        alert("Erro ao cadastrar usuário.");
    }
})