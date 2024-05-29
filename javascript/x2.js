document.querySelector("button").onclick=function(){

   
   var p= document.querySelector("#x1").value;
   console.log(p);// value pass  through textbox
   var n= document.querySelector("#x2").value;
   console.log(n);// value pass  through textbox
   var r= document.querySelector("#x3").value;
   console.log(r);// value pass  through textbox
   console.log(typeof p);
   p=Number(p);
   n=Number(n);
   r=Number(r);
   var si= p*r*n/100
   
   console.log(si);
   
   document.querySelector("#p1").innerHTML= (`Invest Amount : ${p}`)
   document.querySelector("#p2").innerHTML= (`Interst Rate : ${si}`)
   document.querySelector("#p3").innerHTML= (`Final Amount : ${p+si}`)
   
   
  
};