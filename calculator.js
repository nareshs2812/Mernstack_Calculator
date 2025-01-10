var op=""
var FirstNumber=""
var SecondNumber=""

var operator=""
var res=''

function append(number){
        if(operator===""){
                FirstNumber+=number
                document.getElementById("result").value=FirstNumber
        }
        else{
            SecondNumber+=number
            document.getElementById('result').value=SecondNumber
        }

}

function setoperator(op){
    operator=op
    

}

function showresult(){
    switch(operator){
        case '+':
            res= parseInt(FirstNumber)+ parseInt(SecondNumber);
            break
        case '-':
                res=parseInt(FirstNumber)- parseInt(SecondNumber);
                break
        case '*':
                res= parseInt(FirstNumber) * parseInt(SecondNumber);
                break
        case '/':
                res=parseInt(FirstNumber) / parseInt(SecondNumber);
                break
    }  
    document.getElementById('result').value=res
}


function reset(){
    FirstNumber=""
    SecondNumber=""
    document.getElementById("result").value=""
}
function changeBackgroundColor() {
    const colors = ['red', 'black', 'pink', 'yellow', 'green', 'violet', 'whitesmoke'];
    const colorIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorIndex];
}