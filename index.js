const inquirer = require('inquirer');
const { findAllDepartments } = require('./db');
require('console.table')
const db = require('./db');
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
    db.findAllDepartments()
    .then(([rows]) => {
        const departments = rows;
        console.table(departments)
    })
    .then(() => init());
};

function allRoles() {
    db.findAllRoles()
    .then(([rows]) => {
        const roles = rows;
        console.table(roles)
    })
    .then(() => init());
};

function allEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        const employees = rows;
        console.table(employees)
    })
    .then(() => init());
};

async function addDepartment() {
     await inquirer.prompt(newDepartment).then(res => {
        
        const newDepartment = [res.department]
        console.log(newDepartment)
        db.addDepartments(newDepartment)
        .then();
    })
    
    
    db.findAllDepartments()
    .then(([rows]) => {
        const departments = rows;
        console.table(departments)
    })
    .then(() => init());
};

function addRole() {
    
    init();
};



init();