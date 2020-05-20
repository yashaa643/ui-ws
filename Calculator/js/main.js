let input = document.querySelector("#input");
let table = document.querySelector("#table");
console.log("js is loaded");
input.addEventListener('keyup', (event) => {
    
    
    if (event.keyCode === 13) {
        num = event.target.value;
        num = Number.parseInt(num);
        let str = "";
        let i=1;
        for(i=1;i<=10;i++){
            str+=`${num} * ${i} = ${num*i} <br>`;
            table.innerHTML = str;
        }       

    }

}
)

function compute(ope){
    switch(ope){
        case '+' :
            return `${num1} + ${num2} = ${num1+num2}`;
            break;

        case '-' :
            return `${num1} - ${num2} = ${num1-num2}`;
            break;

        case '*' :
            return `${num1} * ${num2} = ${num1*num2}`;
            break;
        
        case '/' :
            return `${num1} / ${num2} = ${num1/num2}`;
            break;
        
        case '++' :
            return `${num1}++ = ${num1+1}`;
            break;     

        case '--' :
            return `${num1}-- = ${num1-1}`;
            break; 
            
        default :
            return null;
            break;
    }
}

let num1 = document.getElementById("num1").value;
num1 = Number.parseInt(num1);
let num2 = document.getElementById("num2").value;
num2 = Number.parseInt(num2);

document.getElementById("addBtn").addEventListener("click", (event)=>{
    num1 = document.getElementById("num1").value;
    num1 = Number.parseInt(num1);
    num2 = document.getElementById("num2").value;
    num2 = Number.parseInt(num2);
    document.getElementById("res").innerHTML = compute("+");
  }); 

  document.getElementById("subBtn").addEventListener("click", (event)=>{
    num1 = document.getElementById("num1").value;
    num1 = Number.parseInt(num1);
    num2 = document.getElementById("num2").value;
    num2 = Number.parseInt(num2);
    document.getElementById("res").innerHTML = compute("-");
  });

  document.getElementById("mulBtn").addEventListener("click", (event)=>{
    num1 = document.getElementById("num1").value;
    num1 = Number.parseInt(num1);
    num2 = document.getElementById("num2").value;
    num2 = Number.parseInt(num2);
    document.getElementById("res").innerHTML = compute("*");
  });

  document.getElementById("divBtn").addEventListener("click", (event)=>{
    num1 = document.getElementById("num1").value;
    num1 = Number.parseInt(num1);
    num2 = document.getElementById("num2").value;
    num2 = Number.parseInt(num2);
    document.getElementById("res").innerHTML = compute("/");
  });

  document.getElementById("incBtn").addEventListener("click", (event)=>{
    num1 = document.getElementById("num1").value;
    num1 = Number.parseInt(num1);
    num2 = document.getElementById("num2").value;
    num2 = Number.parseInt(num2);
    document.getElementById("res").innerHTML = compute("++");
  });

  document.getElementById("decBtn").addEventListener("click", (event)=>{
    num1 = document.getElementById("num1").value;
    num1 = Number.parseInt(num1);
    num2 = document.getElementById("num2").value;
    num2 = Number.parseInt(num2);
    document.getElementById("res").innerHTML = compute("--");
  });

  let calculateEmi = document.querySelector("#calculateEMI");




document.querySelector("#calEMI").addEventListener('click', (event) => {
    event.preventDefault();
    let amount = Number(document.querySelector("#amount").value);
    let time = Number(document.querySelector("#time").value);
    let rate = Number(document.querySelector("#rate").value);

    rate = (rate / (12 * 100));
  
    let v = Math.pow(rate + 1, time);

    let emi = (amount * (rate * v)) / (v - 1)

    document.querySelector("#emiRes").innerHTML = `Your EMI is ${emi.toFixed(2)}`;
})
