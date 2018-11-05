const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'test'
})

connection.query('SELECT * FROM user', (error, results, fields) => {
    if(error) throw error;
    //连接成功
    console.log(results.forEach(element => {
        // if(element){
            console.log(element)
        // }
    }));
    //结束会话
    connection.end();

})