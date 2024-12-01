// let obj={
//     id:1,
//     name:"abc"
// }
// console.log(obj);
// console.log({}==[]);

// //add 

// console.log(obj.age=20);
// console.log(obj);

// // fetch
// console.log(obj.id);
// console.log(obj["name"]);

// //delete
// console.log(delete obj.name);
// console.log(obj);

// //update
// console.log(obj.age=200);
// console.log(obj);

// // nested
// let myobj={
//     id:1,
//     mobile:{
//         color:"black",
//         price:11000,
//         name:"LG"
//     }
// }
// console.log(myobj);
// console.log(myobj["mobile"]["price"]);
// console.log(myobj.mobile.name);
// console.log();

// let obj=new Object();
// console.log(typeof obj);

// let ob={};
// let obj1=Object.create(ob,{
//     value:2
// })
// console.log(obj1);

        // let obj={
        //     team:"India",
        //     captain:"SKY"
        // }
        // console.log(obj);
        // console.log("before");
        // console.log(Object.entries(obj));

        let A={
            id:2,
            Pin:5645
        }
        let B={
            id:3,
            Code:"red"
        }
        let C={
            id:0,
            place:"Ind"
        }
        let d=Object.assign(A,B,C)
        // console.log(d);

        console.log(Object.assign(A,B,C));