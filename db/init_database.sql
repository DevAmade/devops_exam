\c devops_exam_db;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    last_name VARCHAR(100),
    first_name VARCHAR(100),
    email VARCHAR(100),
    birthdate DATE
);

INSERT INTO users (last_name, first_name, email, birthdate) 
VALUES 
('Vador', 'Dark', 'vador.dark@black-start.empire', '1977-06-25'), 
('Dan', 'Gul', 'gul.dan@legion.horde', '1207-09-12'),
('King', 'Lich', 'arthas.king@citadelle.fleau', '1490-08-02'),
('Kenobi', 'Obi-wan', 'obi-wan.kenobi@naboo.repu', '1960-03-15'),
('Sparrow', 'Jack', 'jack.sparrow@pearl.tortuga', '1367-11-17'),
('Jones', 'Davy', 'davy.jones@flying-dutsh.tortuga', '1478-04-08');