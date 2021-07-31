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

const newDepartment = [
    {
        type: 'input',
        name: 'department',
        message: 'What is the name of the new department?'
    }
]

const newRole = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the new role?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for this role?'
    },
    {
        type: 'input',
        name: 'department_id',
        message: 'What is the id of the department this role belongs too?'
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
    const departments = db.query('SELECT * FROM departments')
    console.table(departments)
    init();
};

function allRoles() {
    const roles = db.query('SELECT * FROM roles')
    console.table(roles)
    init();
};

function allEmployees() {
    const employees = db.query('SELECT * FROM employee')
    console.table(employees)
    init();
};

function addDepartment() {
    
    const departments = db.query('SELECT * FROM departments')
    console.table(departments)
    init();
};

function addRole() {
    
    init();
};



init();