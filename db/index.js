const db = require('./connection');

class Db {
    constructor(db){
        this.db = db
    }
    findAllDepartments(){
        return this.db.promise().query('SELECT * FROM department');
    }
    findAllRoles(){
        return this.db.promise().query('SELECT * FROM role');
    }
    findAllEmployees(){
        return this.db.promise().query('SELECT * FROM employee');
    }


    addDepartments(departmentName){
        console.log('1.0')
        return this.db.promise().query('INSERT INTO department (name) VALUES ?', [departmentName])
    }
}

module.exports =  new Db(db);