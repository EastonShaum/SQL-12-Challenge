const inquirer = require('inquirer')
const db = require('./db/connection');
//const routes = require('./routes');


const options = [
    {
        type: 'list',
        name: 'initOptions',
        message: 'Which would you like to view?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Quit']
    }
]

function init(){
    inquirer.prompt(options).then(res => {
        console.log(res)
        switch(res.initOptions) {
            case ('View All Departments'): 
                allDepartments();
                break;
            case ('View All Roles'):
                allRoles();
                break;
            case ('View All Employees'):
                allEmployees();
                break;
            case ('Add a Department'):
                addDepartment();
                break;
            case ('Add a Role'):
                addRole();
                break;
            case ('Quit'):
                break;
        }
    })
};

function allDepartments() {
    const departments = db.query()
    console.table(departments)
    init();
};

function allRoles() {
    const roles = db.query()
    console.table(roles)
    init();
};

function allEmployees() {
    const employees = db.query()
    console.table(employees)
    init();
};

function addDepartment() {
    
    init();
};

function addRole() {
    
    init();
};



init();