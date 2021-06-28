

const https = require('https')

let request = https.get ('https://jsonplaceholder.typicode.com/users', (res) => {
    if (res.statusCode !== 200) {
        console.error( `did not get an ok from the server. code: ${res.statusCode}`);
        res.resume();
        return;
    }
    let data ='';
    res.on('data', (chunk) => {
        data += chunk;
    })
    res.on('close', () => {
        data = JSON.parse(data);
        console.log('retrieved all data');
        console.log(JSON.parse(data));

        for(let i = 0; i < data.length; i++) {
            console.log(data[i].name);
        }
    })

    

});

request.on('error', (err)=> {
    console.error(`encountered an error trying to make arequest: ${err.message}`);
});

