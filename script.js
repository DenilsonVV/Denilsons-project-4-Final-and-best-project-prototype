let button1=document.querySelector(".N");
let button2=document.querySelector(".N1");
let button3=document.querySelector(".N2");
let button4=document.querySelector(".N3");
let button5=document.querySelector(".L");
let div1=document.querySelector(".questions");
let div2=document.querySelector(".H2");
let div3=document.querySelector(".H3");
let div0=document.querySelector(".title");
let message=document.querySelector(".result");
let pictures1=document.querySelector(".Pictures1");
let pictures2=document.querySelector(".Pictures2");
let pictures3=document.querySelector(".Pictures3");
button1.onclick=function(){
    div1.style.display="block";
    document.body.style.backgroundColor = "lightblue";
   div0.style.display="none";
    button1.style.display="none";
    pictures1.style.display="none";
};
button2.onclick=function(){
let holder1=document.querySelector(".place1").value;
div2.style.display="block";
    document.body.style.backgroundColor = "#ccccff";
   div0.style.display="none";
    button1.style.display="none";
    div1.style.display="none";
    
};
button3.onclick=function(){
let holder2=document.querySelector(".place2").value;
div3.style.display="block";
    document.body.style.backgroundColor ="#e6ffff";
   div0.style.display="none";
    button1.style.display="none";
    div1.style.display="none";
    div2.style.display="none";
    
};

button4.onclick=function(){
let holder3=document.querySelector(".place3").value;
document.body.style.backgroundColor = "#f2f2f2";
   div0.style.display="none";
    button1.style.display="none";
    div1.style.display="none";
    div2.style.display="none";
    div3.style.display="none";
button5.style.display="block";

};
button5.onclick = function() {
    let holder1 = document.querySelector(".place1").value;
    let holder2 = document.querySelector(".place2").value;
    let holder3 = document.querySelector(".place3").value;

    if ((holder1 >= 14 || holder1 <= 60) && (holder2 === "cold" || holder2 === "Cold") && holder3 === "5") {
        pictures1.style.display="block";
        message.innerHTML = "You are"+holder1+" years old, and take " +holder2+" showers. Moreover you also exercise "+holder3+" days a week. This means you are very strong ";
         } 
    else if ((holder1 >= 14 || holder1 <= 60) && (holder2 === "Hot" || holder2 === "hot") && (holder3 >= 0 && holder3 <= 4)) {
        pictures2.style.display = "block";
        message.innerHTML = "Your age is "+holder1+" years old.However you take " +holder2+" showers. Plus you exercise "+holder3+" days a weak. This means you are very weak, at least go to the gym.";       
    }
    else if((holder1>=14 || holder1<=60)&&(holder2=== "cold" || holder2==="cold")&&(holder3>=6 || holder3<=7)){ 
        pictures3.style.display="block";
        message.innerHTML="Your age is "+holder1+" years old.You also take " +holder2+" showers.Then you also exercise "+holder3+" days a week. That is almost the whole week. You may be a sigma male."       ;
    }else if((holder1>=14 || holder1<=60)&&(holder2=== "hot" || holder2==="Hot")&&(holder3===5)){ 
        pictures3.style.display="block";
        message.innerHTML="Your age is "+holder1+" years old.You take " +holder2+" showers.Even though you exercise "+holder3+" days a week.You are strong, but I think you can still be stronger by taking cold showers"       ;}
};
     
 



