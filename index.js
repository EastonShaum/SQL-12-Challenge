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
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Quit']
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

const newEmployee = [
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the first name of the new Employee?'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the last name of the new Employee?'
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'What is the Employee\'s role id number?'
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'What is the Employee\'s manager id number?'
    }
]

function init(){
    inquirer.prompt(options).then(res => {
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
            case ('Add an Employee'):
                addEmployee();
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
        const newDepartment = []
        newDepartment.push([res.department])
        
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

async function addRole() {
    await inquirer.prompt(newRole).then(res => {
       const newRole = []
       newRole.push([res.title, res.salary, res.department_id])
       
       db.addRoles(newRole)
   })
   
   
   db.findAllRoles()
   .then(([rows]) => {
       const roles = rows;
       console.table(roles)
   })
   .then(() => init());
};

async function addEmployee() {
    await inquirer.prompt(newEmployee).then(res => {
       const newEmployee = []
       newEmployee.push([res.first_name, res.last_name, res.role_id, res.manager_id])
       
       db.addEmployees(newEmployee)
   })
   
   
   db.findAllEmployees()
   .then(([rows]) => {
       const employees = rows;
       console.table(employees)
   })
   .then(() => init());
};



init();