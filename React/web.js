let j=new XMLHttpRequest()
console.log(j);


j.open("GET","https://api.github.com/users")

j.onload=()=>{
    let data=JSON.parse(j.response)
    console.log(data);

    let output=""

    for(user of data){
        output+=`
        <h1>${data.type}</h1>
        `
    }
    document.getElementById("max").innerHTML=output
}

j.send()