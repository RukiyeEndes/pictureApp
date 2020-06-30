
window.onload = function(){
    document.getElementById("btn").onclick=function(){
        fetch("https://picsum.photos/v2/list?page=1&limit=10%27").then(function(response){

            return response.json();

        }).then(function(users){
            
            var output = [];
            var dizi =[];
            
            users.forEach(function(user){
                dizi.push(output = `${user.download_url}`)
            })  

            for(var i=1;i<16;i++){
                console.log(dizi[i-1]);
                $( "section ul li:nth-child("+i+")" ).append("<img src="+dizi[i-1]+""+" width=100% height=100%>");
            
            }
        })
    }
}