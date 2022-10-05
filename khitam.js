let name = "khitam";
let age = 22;
console.log(`my name is ${name} and my age is ${age}`);
let no = 9 ;
console.log(++no);
console.log(no);
console.log(no++);
console.log(no);
console.log(+'99');

console.log(Number('99'));
console.log(parseInt('99 khitam'));
console.log(parseInt('khitam 99'));
console.log(Number.isNaN('8-l') );
console.log(Math.ceil (8.9));
let names= "khitam salim wadi";
console.log(names.repeat(6));
console.log(names.length);
console.log(names.slice(12));
console.log(names.indexOf('i'));
console.log(names.indexOf("a",6));
console.log(names.lastIndexOf('m'));
console.log(names.slice(7));
console.log(names.split('',8));
console.log(names.startsWith('k',0));
console.log(names.startsWith('m'));
console.log(names.startsWith('s',7));
console.log(names.endsWith('i',9));
for( let i = 0 ; i< 10 ;i++){
    console.log('khitam  '+i);
}
let cars = ['honda','marcides','kia'];
let models = [2020, 2021, 2022];
let colors =['black','red','yellow'];
for(let i = 0 ; i< cars.length; i++){
    console.log(`cars ${cars[i]}`);
    for(let y = 0 ;y<models.length;y++){
        console.log(`moodels ${models[y]}`);
        for(let e = 0 ; e<colors.length; e++){
            console.log(`   colors be like ${colors[e]}`)
        }
 
   }
   console.log('____________________________________________________');
}
/*let ages = prompt ('what is ur age????');
let result = ages >18? "hello sweety"
:ages == 18? "yes welcome"
:"you such a baby go out !";
console.log (result);

let role =prompt ("write ur role ??????????????????????????") ;
switch (role){
    case 'admin': console.log ("helllllllllllo");
    breake;
    case "modrator": console.log ("heyyyyyyyyyyyyyyyyyyyyyyilllllllo");
    
    default:console.log ("ok picasssssso liked it");
}*/
let hey = ['khtoom ', 'khitam', 'end', 'nihi','sara', 'alaa','ali', 1,2,33,444,4555,'noor','abed'];
for(let i = 0; i<hey.length;i++){
    if(hey[i] !='nihi'){
    continue;}
    
    console.log(hey[i]);
}
function khitam ( number , number2){
let multi = number*number2;
console.log(multi);
}
khitam(199,88);
console.log('****************************************************************');
function  khtoom( days){
let age = days*365;
return age;
}
 let day = khtoom(22);

function khtooom(hours){
    let age = hours *24;
 
   return age;
}
let ok = khtooom (day);
console.log(ok);
////////////////////////////////////////////////////////////////////////
now();
 function now(){
    console.log('jello');
 }
//////////////////////////////////////////////////

 let nonv = function(){
   console.log('oklallklwkdpok');
 }
 nonv();
//var situation u can call it outer 
 for(var i = 0 ; i<19900; i++){

 }
 console.log(i);
 //let stauation u cant 
 for(let p = 0 ; p<10; p++){
    console.log(p);
}

//function auto calling remove name and put it in prantheses
(function (){
    console.log("hi im auto calling ");
})();
//excrsie
console.log(x());
function x(){
    function y(){return 1}
    return y();
    function y (){
        return 0
    }
}
//arrow function
let op =_=>{
    return "khitamn";
}
console.log (op());
//object
let one ={
    name: 'khitamabedd' ,
    lastname: 'wadi',
    age :22,
    two:{
phone:09097778998,
phone2:9999999999999,

    },
house:{
onenote :'zaid ',
onw:'gaza',

},
happines :[ "22",'33','44'],
active : false,
 fun : function (){
    return "khitam salim abedelrhaman wadi ";
 },
 condtion : function (){

 
 if(one.active==true){
    return "allowed ";

 }else{

    return "OUT111111111111";
 }}

};
console.log(one.condtion());
console.log(one['condtion']());
///
 let dom = document.getElementById('dom');
 dom.innerText="<h1>palestine is free</h1>";
 console.log(dom);
 //document.body.innerHTML=` <h1> hey</h1>`;
 let thiscountainer = document.createElement('div');
 let coun= document.createElement('head');
 let img = document.createElement('img');
  
 let text= document.createTextNode("hey my name is hala");
 coun.appendChild(text);

 thiscountainer.appendChild(coun);
 thiscountainer.appendChild(img);
 document.body.appendChild(thiscountainer)
 console.log(thiscountainer);
 