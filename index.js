// const express = require("express");
// const bodyParser = require("body-parser");

const e = require("express");

// const app = express();
// const PORT = 3000;

// // Predefined usernames and passwords
// const users = {
//     "john_doe": "secure123",
//     "alice_wonder": "pa$$w0rd",
//     "bob_smith": "qwerty789"
// };

// // Middleware to parse JSON and form data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Login route
// app.post("/login", (req, res) => {
//     const { username, password } = req.body;

//     if (users[username] && users[username] === password) {
//         return res.json({ message: "Login successful", success: true });
//     }

//     res.status(401).json({ message: "Invalid username or password", success: false });
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require("express");
const app = express();

const reqLogs={};

const middleware=(req,res,next)=>{

    const userIp=req.ip;
    if(!reqLogs[userIp]){
        reqLogs[userIp]={count:0,lastRequest:Date.now()};
}

reqLogs[userIp].count +=1;

if(reqLogs[userIp].count>5){
    return res.status(429).json({message:"Too many requests"});
}
 setTimeout(()=>{
        reqLogs[userIp].count=0;
 },30000);
    next();
}

app.use(middleware);
 app.get("/",(req,res)=>{
     res.send("Hello World");
 }
 );

 app.listen(3000,()=>{
        console.log("Server is running on port 3000");
 })