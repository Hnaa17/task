const axios = require('axios');
let http = require('http');

axios.get('https://jsonplaceholder.typicode.com/users')
.then(res => {
    console.log('Status Code: ', res.status);
    const users = res.data;
    // console.log(users);
    objIndex = users.findIndex((obj => obj.id == 1))
    users[objIndex].email = "farhanaachmad@gmail.com";
    http.createServer(function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        for(user of users) {
            res.write(`email: ${user.email}`);
        }
        res.end();
    }).listen(8080);


})

.catch(err => {
    console.log('Error: ', err.message);
});

console.log("server running on http://localhost:8080");