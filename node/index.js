const http= require("http");

http.createServer((req,res)=>{
    res.write("Hello Baccho!")
    res.end()
}).listen(5000,()=>{
    console.log("server started")
})