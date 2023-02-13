const fs =require('fs');


fs.existsSync('demo3.txt')
 (result) =>{
    if(result){
        console.log("this is true")
    }else{
        console.log("not found")
    }
});
