
alert("olá, tudo certo?");
var escolha = confirm("você poderia digitar seu nome por gentileza?");
if(escolha){
    
    do{
        var estarcerto = false;
        nome = prompt("Dite seu nome");
        if(nome === null)
        {
            alert("ops você não colocou nada... \n tente novamente");
        }else{
            estarcerto = true;
        }
    }while(!estarcerto)
    alert(`seje muito bem vindo ${nome}`)
}else{
    alert("Tudo bem entao...")
    nome = "Visitante"
    alert(`ok então,\nirei te chamar de ${nome}`)
}
document.getElementById("nome") = document.createTextNode("nome.value")