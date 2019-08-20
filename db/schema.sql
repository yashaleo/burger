CREATE DATABASE burgers;
USE burgers;

-- Create the table burgers.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOL DEFAULT FALSE,
  PRIMARY KEY(id)
);