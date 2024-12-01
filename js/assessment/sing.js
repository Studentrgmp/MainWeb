let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    let first=document.getElementById("First").value
    let Last=document.getElementById("Last").value
    let Email=document.getElementById("Email").value
    let addres=document.getElementById("addres").value
    let Confirm=document.getElementById("Confirm").value
    let Create=document.getElementById("Create").value
    console.log(first,Last,Email,addres,Create,Confirm);
    e.preventDefault()
})