DELETE FROM employee;
DELETE FROM role;
DELETE FROM department;




INSERT INTO department (name)
VALUES ('Managment'),
        ('Engineering'),
        ('Inventing'),
        ('Builders');

INSERT INTO role (title, salary, department_id)
VALUES ('CEO', 1000000, 1),
        ('Co-President', 999999, 1),
        ('Lead Engineer', 250000, 2),
        ('Idea Maker', 2000000, 3),
        ('Builder', 150000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jeff', 'Bezos', 1, 1),
        ('Steven', 'Trabajos', 2, 1),
        ('Jefe', 'Kisses', 2, 1),
        ('Andrew', 'Jones', 2, 1),
        ('Josh', 'Jones', 3, 1),
        ('Patty', 'Jones', 3, 1),
        ('Ashlan', 'Smith', 3, 1),
        ('George', 'Smith', 4, 1),
        ('Nick', 'Smith', 4, 1),
        ('Rodger', 'Smith', 5, 1),
        ('Blake', 'Smith', 5, 1),
        ('Brian', 'Smith', 5, 1);