//console.log("file testing")

//dom event handling via javascript

document.querySelector("button").onclick=function(){

    //console.log("unnamed function called")
   // console.log(document.querySelector("#x1"));
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
   n=n*12
   r=r/12/100
   var emi= p*r*( 1 +r)**n/((1+r)**n-1);
   console.log(emi);
   
   document.querySelector("#p1").innerHTML=Math.round(emi);
   document.querySelector("#p2").innerHTML=p;
   document.querySelector("#p3").innerHTML=emi*p;
   document.querySelector("#p4").innerHTML=(emi*n)-p;
   
  
};