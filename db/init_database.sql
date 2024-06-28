\c devops_exam_db;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    last_name VARCHAR(100),
    first_name VARCHAR(100),
    email VARCHAR(100),
    birthdate DATE
);