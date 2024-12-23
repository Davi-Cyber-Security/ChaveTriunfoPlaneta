const button = document.getElementById("button");
const titulo = document.getElementById("titulo");
const body = document.querySelector("body");
const aBox = document.getElementById("aBox");
const darkBox = document.querySelector(".darkBox")
const divBox = document.querySelector(".box-select");

    // function adicion(){
    //     button.classList.toggle("switchOn");        
    //     body.classList.toggle("Ligth");
    //    aBox.classList.toggle("black")
    // }

    // button.addEventListener("click", adicion)



    // Creation of selected content all
    function creatInfo(){
        // button
        const todos = document.querySelector("#todos")
        // father of div
        const infoCreate = document.querySelector(".create-father");
        todos.addEventListener("click", () => {
            infoCreate.classList.toggle("infoTxt")
            
            infoCreate.innerHTML = `<div class="infoCreate">
                <h2 class="subtitulo">Essas são as principais chaves</h2>
                <br>
                
                <div class="ferramentas">
                    <p class="creat">Mencionar Whatsapp: (clique aqui)<a href="https://marketing.topconversa.com.br/" class="openAi">WhatsMencio</a></p>
                </div>
            </div>`;

            const selecione = document.getElementById("selecione");

            selecione.innerHTML = `<div class="card">
                    <img src="img/whats.png" alt="" class="imgs">
                    <p>Produtividade em divulgação no Whatsapp como mencionando todos!</p>
                </div>

                <div class="card">
                    <img src="img/Post Instagram Para Agência de Marketing Digital Preto e Amarelo.png" alt="" class="imgs">
                    <p>Utilização estratégia certas, você vai acabar-se destacando e ficando à frente de sua concorrência!</p>
                </div>

                <div class="centrali">
                    <img src="img/interrogacao.png" alt="" class="imgs">
                    <p>Clique para abrir a segunda!</p>
                    <br>
                    <a href="#indisponivel" style="border: 1px solid white; text-align: center; text-decoration: none; padding: 5px; color: white;" id="indisponivel">Desbloquear</a>
                </div>`;

                const indisponivel = document.getElementById("indisponivel");

        indisponivel.addEventListener("click", () => {
            alert("A última chave está programada para ser desbloqueada somente no dia 07/01/2025 :)")
        })
            
        })
        
    }

    creatInfo()

    const sim = document.getElementById("simm");
    const relacao = document.getElementById("relacao")
    const remove = document.querySelector(".relacao");
    function funcao (){
            localStorage.lgpd = "Sim";

            relacao.classList.add("remove")
            remove.classList.add("remove")
}
if(localStorage.lgpd == "Sim"){
    relacao.classList.add("remove")
    relacao.classList.remove("relacao")
    remove.classList.add("remove")
} else{
relacao.classList.remove("remove")
}

        sim.addEventListener("click", funcao)