const name  ='yoshi'
console.log(name)

const greet  = (name)=>{
    console.log(name)
}

greet('yoshi 2')
greet('yoshi3')

console.log("This is your directory :" ,__dirname)
console.log(" the file you're working in :" ,__filename)

//console.log(global)

global.setTimeout(() => {
    console.log('I love you')
}, 5000);