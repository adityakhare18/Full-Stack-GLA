function sum(){

    return new Promise((resolve, reject) => {
        let person = {
            name : "hell",
            age:24,
            sal:10000
        }
        if(person.name == "hell"){
            resolve(person)
        }
        else{
            reject("not match")
        }
    })
}




// p.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })
// console.log(sum())

// sum().then((res)=>{
//     console.log(res) 
//     res.education = "Btech"
//     return res;
// }).then((newr)=>{
//     console.log(newr)

// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("always run")
// })

let p = new Promise((resolve,reject)=>{
    resolve("hello")
})

async function prom(){
    try{
        let out = await p;
        console.log(out)
    }catch(error){
        console.log(error);
        
    }
}