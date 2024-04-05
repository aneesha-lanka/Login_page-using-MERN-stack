const mongoose = require('mongoose');
const db = process.env.DATABASE;
mongoose.connect(db, {
    useNewUrlParser: true,
}).then(()=>{
    console.log("Connection Successful");
}).catch((e)=>{
    console.log(e);
})