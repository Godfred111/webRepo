const fs = require('fs')

/*fs.readFile(__dirname+'/files/f1.txt',(err,data)=>{
    if(err)
       console.log(err)
    else
       console.log(data.toString())   
}) */



fs.writeFile(__dirname+'/files/f2.txt','hello',(err)=>{
    if(err)
    console.log(err)
    else
    console.log("File written successfully")
})

if(!fs.existsSync('./assets')){ 
fs.mkdir('./assets', (err)=>{
    if(err)
    console.log(err)
    console.log('folder created')
})
}

if(fs.existsSync(__dirname+'/files/f1.text')){
    fs.unlink(__dirname+'/files/f1.text')
}