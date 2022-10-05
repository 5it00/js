let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign='center';
let names=["khitam","salim","abdelrhaman","wadi"];
let age =[20,21,22,23];
  function elements(names,age){

    //create elements

let diver= document.createElement('div');
let head = document.createElement('h2');
let paragraph = document.createElement('p');
let img = document.createElement('img');
//add contect
let header=document.createTextNode(names);
let paragrapher=document.createTextNode(age);
img.src='approved.png';
//add to main 
head.appendChild(header);
paragraph.appendChild(paragrapher);
diver.appendChild(header);
diver.appendChild(paragraph);
diver.appendChild(img);
container.appendChild(diver);
//style
diver.style.width='200px';
img.style.width='100%';
diver.style.backgroundColor='black';
diver.style.color="white";
diver.style.padding='10px';
diver.style.margin="10px";
diver.style.display='inline-block';
  }
for(let i = 0; i<4;i++){
  elements(names[i],age[i]);
}
  
let dollar = document.getElementById('money');
let pal = document.getElementById('money2');


    //3.57
 dollar.onkeyup =function(){
  pal.value= dollar.value *3.55;
    }
  
    let be= document.getElementById('before');
    let af= document.getElementById('after');
    let inn = document.getElementById('inside');
    let pa=document.getElementById('para');
    let div = document.getElementById('box');
    
                   
                    
   be.onclick= function(){
    div.before(pa);
   }
   af.onclick= function(){
    div.after(pa);
   }
   inn.onclick= function(){
    div.append(pa);
   }
   let classs=document.getElementById('hey');
classs.onclick=function(){
    classs.classList.add("okadd");
}
classs.oncontextmenu=function(){
    classs.classList.remove("okadd");
}
let closer= document.getElementById('close');
let opener= document.getElementById('open');
let all= document.querySelector('.all');
closer.onclick= function(){
  all.classList.add('hide');
  this.classList.add('hide');
  opener.classList.remove('hide');
}
opener.onclick= function(){
 opener.classList.add('hide');
 all.classList.remove('hide');
  closer.classList.remove('hide');
}
let focuse=document.getElementById('focuse');
let input=document.getElementById('input');
window.onload=function(){
  input.focus();

if(sessionStorage.length>0){
    input.value=sessionStorage.getItem('text');
  }
    input.onkeyup =function(){
    sessionStorage.setItem('text',input.value);
  }
}
focuse.onclick=function(){
  focuse.style.background='yellow';
}
let settimy = setTimeout(function(){
  console.log("hey");
  
}, 2000);
let timy = setInterval(() => {
  console.log("heyeihdkjehckjnskjcnksnlk");
}, 2000);
clearInterval(timy);

//location.assign('https://www.youtube.com/watch?v=i7LkGLYeiks&list=PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE&index=68');
//location.replace('https://nouvil.net/courses/javascript/lesson/javascript-events/');


if(localStorage.length>0){
  document.body.style.background=localStorage.getItem('colors');
}
 function setcolors(colors){
  localStorage.setItem('colors',colors);
document.body.style.background=colors;

 }