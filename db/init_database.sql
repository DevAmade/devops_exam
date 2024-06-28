\c devops_exam_db;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    last_name VARCHAR(100),
    first_name VARCHAR(100),
    email VARCHAR(100),
    birthdate DATE
);

INSERT INTO users (last_name, first_name, email, birthdate)
VALUES ("Vador", "Dark", "vador.dark@black-start.empire", "12/09/1207"),
       ("D'an", "Gul", "gul.d'an@legion.horde", "12/09/1207"),
       ("King", "Lich", "arthas.king@citadelle.fleau", "02/08/1490"),
       ("Kenobi", "Obi-wan", "obi-wan.kenobi@naboo.repu", "15/03/1960"),
       ("Sparrow", "Jack", "jack.sparrow@pearl.tortuga", "12/09/1207"),
       ("Jones", "Davy", "davy.jones@flying-dutsh.tortuga", "08/04/1478");