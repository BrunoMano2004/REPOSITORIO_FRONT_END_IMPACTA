function calculaIdade(){
    let ano,idade;
    ano = window.prompt("Entre com o ano de seu nascimento")//entrada
    idade=2024-ano;
    window.console.log(`A sua idade em 2024 sera ${idade}`)
    //window.document.write(`<p>A sua idade em 2024 sera ${idade}</p>`)
    window.alert(`A sua idade em 2024 sera ${idade}`)
}

  
        window.document.getElementById('um').onclick = calculaIdade;

        document.getElementById('dois').ondblclick = function(){
                calculaIdade()
        }


        document.getElementById('tres').ondblclick = function(){
                let ano,idade;
                ano = window.prompt("Entre com o ano de seu nascimento")//entrada
                idade=2024-ano;
                window.console.log(`A sua idade em 2024 sera ${idade}`)
                //window.document.write(`<p>A sua idade em 2024 sera ${idade}</p>`)
                window.alert(`A sua idade em 2024 sera ${idade}`)
        }
  