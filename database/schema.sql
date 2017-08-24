CREATE DATABASE sizzleRegistrationDb;
USE sizzleRegistrationDb;

CREATE TABLE course
(
   course_id INT AUTO_INCREMENT NOT NULL,
   course_nm VARCHAR(55) NOT NULL,
   course_ds VARCHAR(255) NULL,
   course_days VARCHAR(50) NOT NULL,
   start_dt DATETIME NOT NULL,
   end_dt DATETIME NOT NULL,
   student_id INT NULL,
   administrator_id INT NULL,
   location_id INT NULL,
   PRIMARY KEY (course_id)
);
