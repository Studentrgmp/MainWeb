let table=document.createElement("table")

// first row

let tr100=document.createElement("tr")
let th101=document.createElement("th")
th101.style.color="red";
th101.style.fontSize="20px"
th101.style.background="yellow"
let th102=document.createElement("th")
th102.style.color="red";
th102.style.fontSize="20px"
th102.style.background="yellow"
let th103=document.createElement("th")
th103.style.color="red";
th103.style.fontSize="20px"
th103.style.background="yellow"

// second row

let tr200=document.createElement("tr")
let td201=document.createElement("td")
td201.style.color="yellow"
td201.style.background="blue";
td201.style.paddingLeft="25px"
let td202=document.createElement("td")
td202.style.color="yellow"
td202.style.background="blue";
td202.style.paddingLeft="20px"
let td203=document.createElement("td")
td203.style.color="yellow"
td203.style.background="blue";


//third row

let tr300=document.createElement("tr")
let td301=document.createElement("td")
td301.style.color="yellow"
td301.style.background="blue";
td301.style.paddingLeft="25px"

let td302=document.createElement("td")
td302.style.color="yellow"
td302.style.background="blue";
td302.style.paddingLeft="20px"
let td303=document.createElement("td")
td303.style.color="yellow"
td303.style.background="blue";


//4th row

let tr400=document.createElement("tr")
let td401=document.createElement("td")
td401.style.color="yellow"
td401.style.background="blue";
td401.style.paddingLeft="25px"

let td402=document.createElement("td")
td402.style.color="yellow"
td402.style.background="blue";
td402.style.paddingLeft="20px"
let td403=document.createElement("td")
td403.style.color="yellow"
td403.style.background="blue";

table.border="5px"
table.style.border="5px solid black"
table.cellPadding="10px"
table.cellSpacing="5px"
table.style.marginLeft="550px"
table.style.marginTop="100px"


th101.innerHTML="Sl_No"
th102.innerHTML="Name"
th103.innerHTML="Reg"
tr100.append(th101,th102,th103)
tr100.style.padding="5px"

td201.innerText="1"
td202.innerText="ABC"
td203.innerText="456CS"
tr200.append(td201,td202,td203)

td301.innerText="2"
td302.innerText="XYZ"
td303.innerText="461EC"
tr300.append(td301,td302,td303)

td401.innerText="3"
td402.innerText="MLN"
td403.innerText="461ME"
tr400.append(td401,td402,td403)


table.append(tr100,tr200,tr300,tr400)
document.body.append(table)