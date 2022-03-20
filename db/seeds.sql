INSERT INTO departments 
(dept_name)
VALUES
('Research & Development'),
('Marketing'),
('Sales'),
('Shipping & Receiving'),
('Accounting'),
('Production'),
('Management');

INSERT INTO roles 
(title, dept_id, salary)
VALUES
('Chief Executive Officer', 7, 500000),
('Chief Financial Officer', 7, 450000),
('VP of Marketing', 7, 350000),
('VP of Sales', 7, 275000),
('VP of R & D', 7, 450000),
('VP of Operations', 7, 250000),
('Accountant', 5, 80000),
('Salesperson', 3, 50000),
('Shipper/Receiver', 4, 30000),
('Technician', 6, 45000),
('Designer', 2, 65000),
('Engineer', 1, 125000),
('Manager', 7, 80000);

INSERT INTO employees
(first_name, last_name, role_id, manager_id)
VALUES
('Jon', 'Columbo', 12, 'Guy Lombardo'),
('Gus', 'Bricker', 9, 'Pepito Gonsales'),
('Surinam', 'Patel', 1, 'Jazz'),
('Groot', '', 6, 'The Emperor');