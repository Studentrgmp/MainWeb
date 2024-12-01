        // // window is a gobal onj which accepts only an goobal var,funv.methods.
        // console.log(window);

        // // this keywords points to the windows obj as well as it stores the address of window
        // console.log(this);
        // console.log(window===this);

        // //y var is gobal
        // a=100
        // console.log(a);
        // console.log(window.a);
        // console.log(window);

        // let b=200
        // console.log(window.b);
        // console.log(window);

        // const c=300
        // console.log(window.c);
        // console.log(window);

        // //obj methods

        // // Freeze
        // let objfree={
        //     id:1,
        //     comName:"Tcs"
        // }
        // console.log(Object.freeze(objfree));
        // console.log(Object.isFrozen(objfree));

        // console.log(objfree.EmpSal=500);
        // console.log(objfree);

        // //seal

        // let SealObj={
        //     id:5,
        //     EmpName:"abc"
        // }

        // console.log(SealObj);
        // console.log(Object.seal(SealObj));
        // console.log(Object.isSealed(SealObj))

        // console.log(SealObj.SalEmp=500);
        // console.log(SealObj);
        // console.log(SealObj.EmpName="ABC");
        // console.log(SealObj);

        // // assign

        // let A={
        //     id:2,
        //     Pin:5645
        // }
        // let B={
        //     id:3,
        //     Code:"red"
        // }
        // let C={
        //     id:0,
        //     place:"Ind"
        // }
        // let d=Object.assign(A,B,C)
        // // console.log(d);

        // console.log(Object.assign(A,B,C));

        // // // Const obj 
        // // const D={
        // //     id:5,
        // //     EmpName:"Name"
        // // }
        // // console.log(D);
        // // console.log(D.Sal=500);
        // // console.log(D);

        // // console.log(D.Sal=600,D.EmpName="abc");
        // // console.log(D);

        // // const E={
        // //     id:7,
        // //     pin:456
        // // }
        // // const F={
        // //     id:10,
        // //     code:"yellow"
        // // }
        // // console.log(Object.assign(D,E,F));
        
        // let keys=Object.keys(d)
        // console.log(keys);

        // //obj to array

        // let obj={
        //     team:"India",
        //     captain:"SKY"
        // }
        // console.log(obj);
        // console.log("before");
        // console.log(Object.entries(obj));
        
        // let math=Math;
        // console.log(math);

        // console.log(math.ceil(100.1));
        // console.log(math.floor(100.9));

        // //OTP

        // let rad=math.ceil(math.random()*10000)
        // console.log(rad);

        // let st=math.ceil(math.random()*100000).toString(30);
        // console.log(st);

        // console.log(math.min(100,300));
        // console.log(math.max(100,296));

        // console.log(math.pow(2,3));
        // console.log(math.cbrt(8));

        // console.log(math.sqrt(16));
        // console.log(math.SQRT2);

        let a=Object.create({})//null
        console.log(a);
        a.id=100
        a.name='abc'
        console.log(a);

        let date=new Date;
        console.log(date,typeof date);

        console.log(date.getDate());
        console.log(date.getDay());
        console.log(date.getFullYear());
        console.log(date.getHours());
        console.log(date.getMinutes());
        console.log(date.getMonth());
        console.log(date.getSeconds());
        console.log(date.getTime());
        console.log(date.getTimezoneOffset());


        //year.monyh,date,hrs,min,sec
        let date1=new Date(2024,3,35,14,31,10);
        console.log(date1);

        console.log(date.toISOString());
        console.log(date.toDateString());
        console.log(date.toLocaleDateString());
        console.log(date.toJSON());

        //setTimeout
        setTimeout(() => {
            console.log("first");
        }, 3000);
        setTimeout(() => {
            console.log("second");
        }, 2000);
        setTimeout(() => {
            console.log("third");
        }, 1000);

        //setInterval
        setInterval(() => {
            console.log("hello");
        }, 1000);