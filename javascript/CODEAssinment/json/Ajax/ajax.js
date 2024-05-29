document.querySelector("button").addEventListener("click", function () {
    //alert("")
    var xmlhttp = new XMLHttpRequest();
    console.log(xmlhttp);
    console.log(xmlhttp.readyState);

    xmlhttp.onreadystatechange = function () {
        // console.log(xmlhttp.readyState, xmlhttp.status);
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
            var ans = JSON.parse(xmlhttp.responseText);
            console.log(ans);
            ans.forEach(function (item) {
                console.log(item)
                var div = document.createElement("div");// structure manupulation for the create iteam elemnt
                console.log(div);
                var imgtag = document.createElement("img");
                console.log(imgtag);
                var ptag = document.createElement("p");
                console.log(ptag);
                var h2tag = document.createElement("h2");
                console.log(h2tag);
                   //dom manupulation for the create iteam
                h2tag.innerText = item.price;
                ptag.innerHTML = item.title;
                imgtag.src = item.image
                //bootstrap methods
                div.className="col-3"
                imgtag.className="img-fluid"
                div.append(imgtag);
                div.append(h2tag);
                div.append(ptag);
                document.querySelector(".row").append(div);
             

            });

        }
    }
    xmlhttp.open("GET", "https://fakestoreapi.com/products")
    //1 request has been set up server side
    xmlhttp.send();


})
