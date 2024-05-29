const PASSWORD =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#&\-]).{4,12}$/;
const EMAIL=/^([a-zA-Z0-9]([a-zA-Z0-9_\.]+)?[a-zA-Z0-9])@(([a-zA-Z0-9]([a-zA-Z0-9\-]+)?[a-zA-Z0-9])\.([a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?)$/;
// $("button").click(function(){
//     console.log("buttnclik")
// })
$(document).ready(function(){
    $("span").hide()
    $("button").click(function(){
            // console.log("buttnclik")
            var data1=$("#x1").val();
            var data2=$("#x2").val();
            console.log(data1)
            console.log(data2)
            var result1=EMAIL.test(data1);
            var result2=PASSWORD.test(data2);
            console.log(result1);
            console.log(result2);
            (result1)? "":$("#x1").next().fadeIn(1000);
            (result2)? "":$("#x2").next().fadeIn(1000);
            (result1 && result2)? ($("button").after("<P>Valid</P>")):"";

})
})
