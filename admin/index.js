const express = require('express');
const cors = require('cors');
require('./db/config');
// Load Model Heare...

const User = require('./db/User');
const Product = require('./db/Product');

const app = express();

app.use(express.json());
app.use(cors());

app.post("/registerd", async (req, resp)=>{

    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
});


app.post("/login", async (req, resp)=> {
    console.log(req.body);
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select('-password');
        user ? resp.send(user) : resp.send({result: 'No User Found'})
    }else{
        resp.send({result: 'No User Found'});
    }
});

app.post("/add-product", async (req, resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
});


app.listen(5000)