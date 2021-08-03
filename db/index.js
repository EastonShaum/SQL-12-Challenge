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
        
        return this.db.promise().query('INSERT INTO department (name) VALUES ?', [departmentName])
    }

    addRoles(newRole){
        this.db.promise().query('INSERT INTO  role (title, salary, department_id) VALUES ?', [newRole])
    }

    addEmployees(newEmployee){
        this.db.promise().query('INSERT INTO  employee (first_name, last_name , role_id , manager_id) VALUES ?', [newEmployee])
    }
}

module.exports =  new Db(db);