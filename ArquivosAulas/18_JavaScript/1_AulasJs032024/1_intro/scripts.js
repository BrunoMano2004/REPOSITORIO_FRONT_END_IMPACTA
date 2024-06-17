function primeira(num1,num2){
    let res = num1+num2
    console.log(res)
}
function segunda(){
    console.log('Eu sou o tres e Me clickaram')
}
/////////////////////////////////////////////////
//Nao Obstrutivo

//window.onload = function(){
 
        window.document.getElementById('tres').onclick = segunda;//nome fumção

        document.getElementById('quatro').ondblclick = function(){
            primeira(200,300)
        }

        document.getElementById('cinco').onclick = function(){
            num1 = 25
            num2 = 4
            let res = num1 * num2 
            console.log(res)
        }


        //arrow function
        document.getElementById('seis').ondblclick = ()=>{
            num1 = 250
            num2 = 40
            let res = num1 * num2 
            console.log(res)
        }

