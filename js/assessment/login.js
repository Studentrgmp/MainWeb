let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    let first=document.getElementById("username").value
    let pass=document.getElementById("Password").value
    console.log(first,pass);
    // e.preventDefault()
})
localStorage.clear()
function myfunc(event){
    var username=document.getElementById("username").value
    var pass=document.getElementById("Password").value
    localStorage.setItem("User-Name",username)
    localStorage.setItem("pass",pass)
}
myfunc()