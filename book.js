//select div tag using class
 var blackshad=document.querySelector(".blackshad")
 var popbox=document.querySelector(".popbox")
 var vandaiyar=document.getElementById("pl")

 vandaiyar.addEventListener("click",function(){
  popbox.style.display="block"
  blackshad.style.display="block"
})

//select close button
var vtn=document.getElementById("a")
var bp=document.querySelector(".bp")

function area(event)
{
  event.target.parentElement.remove()
}
//select popvtn
//var popvtn=document.querySelector(".popvtn")
//popvtn.addEventListener(function (event)
//{
  //event.preventDefault()
   //popbox.style.display="none"
  //blackshad.style.display="none"
 // })


//select bp,booktitle,bookauther,hint,popbtn
var bp=document.querySelector(".bp")
var booktitle=document.getElementById("booktitle")
var bookauther=document.getElementById("bookauther")
var hint=document.getElementById("hint")
var popbtn=document.querySelector(".popbtn")

popbtn.addEventListener("click",function(event){

  event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","bp")
  div.innerHTML=`<h1>${booktitle.value}</h1>
  <h5>${bookauther.value}</h5>
  <p>${hint.value}</p>
 <button onclick="area(event)" id="a">Close</button>`
  newnum.append(div)
   popbox.style.display="none"
  blackshad.style.display="none"
})




