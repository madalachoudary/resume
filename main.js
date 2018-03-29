//ajax call(XMLHTTpRequest)initiation
function loadjson(file,callback)
{
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true)
xhr.onreadystatechange=function()
{
  if(xhr.readyState ===4 && xhr.status == "200")
  {
    callback(xhr.responseText);
  }
}
xhr.send();
}
//function calling
loadjson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  basics(data.basics);
  education(data.education);
})
// for main div class calling
// var main=document.queryselector('.main');
// for main div id calling
 var main=document.getElementById("main");

var left=document.createElement("div");
// add class name to element
left.classList.add("left");
// add id to element
// left.setAttribute("id","left");
// adding text to div
// adding text to div
left.textContent="Profile Details:"
left.appendChild(document.createElement("HR"));
// appending to main div
main.appendChild(left);
 function basics(leftside){
   var image=document.createElement("img");
   image.src=leftside.photo;
   left.appendChild(image);
var name=document.createElement("h1");
name.textContent=leftside.name;
left.appendChild(name);
var email=document.createElement("h2");
email.textContent=leftside.email;
name.appendChild(email);
var ph=document.createElement("p");
ph.textContent=leftside.phone;
email.appendChild(ph);
console.log(left);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
// education div start
var edu=document.createElement("div");
edu.classList.add("edu1")
edu.textContent="Education Details:";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);
function education(Educa)
{
  for(i in Educa){
    var e1=document.createElement("div");
    e1.classListadd("edu2");
    e1.textContent=Educa[i].course;
 var ul=document.createElement("ul");
 for(j in Educa[i].college){
   var li=document.createElement("li");
   li.textContenT=Educa[i].college[j];
   ul.appendChild(li);
   edu.appendChild(e1)
 }
  }
}
