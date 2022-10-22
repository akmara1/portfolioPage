let button = document.getElementById("button");
// document.body.append(button);
let count = 0;

button.addEventListener("click",function(){
    count+=1
    if(count==5 || count%10==0){
        button.style.backgroundColor="red"
        button.style.fontWeight = "bold"
        button.style.width = '200px';
        button.style.height = '70px';
        button.style.fontSize = '50px';
    }else{
        button.style.backgroundColor = "green"
        button.style.fontWeight = "normal"
        button.style.width = '120px';
        button.style.height = '40px';
        button.style.fontSize = '30px';
    }
    button.innerText = count;
    button.style.textAlign = center;
    button.style.backgroundColor = "green";
});



