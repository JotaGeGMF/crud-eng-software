const email = document.getElementById("email_input")
const password = document.getElementById("password_input")
const submitBtn = document.getElementById("submit_btn")
const form = document.getElementById("login-form")

form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    
    const email_value = email.value;
    const password_value = password.value;

    try {
        const resposta = await fetch("http://localhost:3000/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email_value, password_value }),
        })

        const resultado = await resposta.json()

        if(resposta.ok){
            alert(resultado.mensagem)
        }else{
            alert(resultado.erro)
        }
    } catch (erro) {
       console.error("Erro ao fazer login:", erro); 
       alert("Erro")
    }
})