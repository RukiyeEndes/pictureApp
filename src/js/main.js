window.onload = function () {
    var s = true;
    document.getElementById("btn").onclick = function () {
        if (s) {
            document.getElementById("btn").disabled = true;
            document.querySelector("#btn > input").value="Resimleri Getirdim";
            fetch("https://picsum.photos/v2/list?page=1&limit=10%27").then(function (response) {

                return response.json();

            }).then(function (users) {

                var output = [];
                var dizi = [];
                var links = [];
                var texteklenen;

                users.forEach(function (user) {
                    dizi.push(output = `${user.download_url}`);
                    links.push(output = `${user.url}`);
                })

                if(dizi!=null)
                {                    
                    for (var i = 1; i < dizi.length+1; i++) {
                        texteklenen=document.createElement("li");
                        document.getElementById("listeyap").appendChild(texteklenen);
                        console.log(dizi[i - 1]);
                        $("section ul li:nth-child(" + i + ")").append("<a target='_blank' cursor=pointer href="+links[i-1]+"><img src=" + dizi[i - 1] + "" + " width=100% height=100%></a>");
    
                    }
                }
               
            })
            s=false;
        }
    }
}