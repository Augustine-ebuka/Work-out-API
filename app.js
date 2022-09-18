const check = require("./file2");
const http = require('http');
const readFile = require('fs')
 const os = require('os');
 const path = require('path');
 const _ = require('lodash');
const { resolve } = require("path");
const { reject, result } = require("lodash");
 const info = os.userInfo();
 const eventemitter = require('events');
const { readFileSync, writeFileSync } = require("fs");
 //console.log(info);

 //const oscheck={
 //    name:os.type(),
 //    runtime:os.release(),
 //    totalnum:os.totalmem(),
 //    freemem: os.freemem()

 //}
//// console.log(oscheck)

//const first = readFile('./content/test.txt','utf-8',(err,result)=>{
//    if (err) {
//        console.log(err);
//        return;
//        
//    }
//    console.log(result)
//    return
//})//

//writeFile('./content/csub-content/text.txt','add this one to it',(err,result)=>{
//    if (err) {
//        console.log(err);
//        return
//        
//    }
//    console.log(result);
//    return
//}) 

//server = http.createServer((request, respond)=>{
//if (request.url=='/') {
//    respond.end('welcome to our home page') 
//}
//if (request.url ==='/about') {
//    respond.end('welcome to about page')
//}
//if (request.url === '/contact') {
//    respond.end('welcome to our contact page')
//    
//}
//respond.end('<h1>opps, seeems you entered wrong page');
//respond.end('<a href="/"> home </a>');
//})

//server.listen(5000)

//const family = [1,[2,[3]]]
//const newitem = _.flatten(family);
//console.log(newitem)//
//
//example of an event loop
//console.log('i am the first task');
//readFile('./content/test.txt','utf8',(err,result)=>{
//    if (err) {
//        console.log(err.end());
//        return  
//    }
//    console.log(result);
//    console.log('completed first task');
//})
//console.log('starting the next task');


//const getText = (path)=>{
//    return new Promise((resolve,reject) => {
//        readFile(path,'utf8',(err,data)=>{
//            if (err) {
//                reject(err)
//                
//            }else{
//                resolve(data)
//            }
//        })
//    })
//}
//console.log("hello i am in the world");
//getText('./content/test.txt')
//.then((result)=>console.log(result))
//.catch((err)=>console.log(err))



//start = {
//    som:()=>{
//        console.log('hello wprld');
//    },
//    dem:(name)=>{
//        console.log(`hello ${name}`);
//    }
//}

for (let i = 0; i < 20; i++) {
    writeFileSync('./content/test.txt',`welcome home ${i}\n`, {flag : 'a'})    
}
const server = http.createServer((req,res)=>{
    if (req.url ==='/') {
        const text = readFileSync('./content/test.txt','utf8')
        res.end(text)
    }if (req.url === '/about') {
        res.end('<a href="/">go back back </a>')
        
    }
    res.end(`no page was found <a href="/"> back to home </a>`)
   
})
 server.listen(5000) 
//server.emit('request')
// const customEvent = new eventemitter;
 //customEvent.on('speaker',start.dem)

 //customEvent.emit('speaker'