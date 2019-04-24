DROP DATABASE IF EXISTS sequelize_passport;
CREATE DATABASE sequelize_passport;
USE sequelize_passport;

CREATE TABLE beers
(
    id INT(10)
    AUTO_INCREMENT PRIMARY KEY,
    beer_name VARCHAR
    (240) NOT NULL,
    brewery VARCHAR
    (240) NOT NULL,
    beer_type VARCHAR
    (240) NOT NULL,
    prof VARCHAR
    (5)
);