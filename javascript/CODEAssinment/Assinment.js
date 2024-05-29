const NUMBER = /^[0-9][0-9]$/


$(document).ready(function () {
    $("button").click(function () {
        var data1 = $("#x1").val();
        var data2 = $("#x2").val();
        var data3 = $("#x3").val();

        num1 = Number(data1);
        num2 = Number(data2);
        num3 = Number(data3);
        console.log(num1)
        console.log(num2)
        console.log(num3)

        var result1 = NUMBER.test(num1);
        var result2 = NUMBER.test(num2);
        var result3 = NUMBER.test(num3);

        var finalresult = num1 + num2 + num3;
        console.log(finalresult)
        console.log(result1);
        console.log(result2);
        console.log(result3);

        if (finalresult != 0) {
            if (finalresult < 35) 
                {
                $("button").after("<P> FAIL </P>");
               }
            else  {
                $("button").after("<P> Pass</P>");
            }
        }
        else
        {
            if ( isNaN(result1)  || isNaN(result2) || isNaN(result3) )
                {
                $("button").after("<P>  only number REQURIED </P>");
                }
            else 
               {
                $("button").after("<P> ALL VALUES REQURIED </P>");
               }
        }









    })
})