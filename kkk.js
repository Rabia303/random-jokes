var url="https://icanhazdadjoke.com"
var btn=document.getElementById("btn")
var result=document.getElementById("result")

btn.addEventListener("click" ,() =>{
abc()
})

var abc=async () =>{
    result.innerHTML="loading...."
    var response = await fetch(url,{
        headers:{
            Accept:"application/json",
            "User-Agent":"learning app",
        },
    })
    var data=await response.json()
    result.innerHTML=data.joke;
}
abc()