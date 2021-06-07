const express= require('express');

const app= express();

const fileServerMiddleware=express.static('public');

app.use('/',fileServerMiddleware);

app.listen(3000,function()
    {
    console.log('Express App Started on port 3000');
    }
)