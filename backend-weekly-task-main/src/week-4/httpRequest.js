const fetch = require("node-fetch");
async function getUsers() {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await res.json();
        return data.map((user) =>{
            console.log(user.name)
            return user.name;
        })
    }
    getUsers()
