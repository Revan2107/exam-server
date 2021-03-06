const express = require('express');
const app = express();

let counter = 0

app.get('/campaign/:ID', async (req, res)=>{
    counter++
    const message = !!(counter % 10 && counter !== 0)

    setTimeout(()=>{
        const status = message ? 200 : 500

        console.log(status, message, counter, req.params['ID'].toString())

        res.status(status)
        res.json({
            message: message
        });
    }, 1000);
});

app.listen(80, ()=>{
    console.log('Server listening on port 80');
});