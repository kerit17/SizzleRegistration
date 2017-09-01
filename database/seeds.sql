INSERT INTO Locations (loc_nm, loc_ds, room_no, createdAt, updatedAt) 
VALUES ('Main Kitchen Lab 1', 'Main Kitchen Lab 1', '100', current_date(), current_date());

INSERT INTO Administrators (fst_nm, lst_nm, email, password, createdAt, updatedAt) VALUES ('Francis', 'Link', 'abc@abc.com', '123', current_date(), current_date());

INSERT INTO Courses (crs_nm, crs_ds, crs_dys, crs_str_dt, crs_stp_dt, crs_str_tm, crs_end_tm, LocationId, createdAt, updatedAt)
VALUES ('Cullinary 101: Intro to Sautéing Poultry', 'This course builds the foundation of cooking poultry using the sauté method. Here you will discover the origins of sauté and why it is used to prepare various meats for consumption.', 'M W', '2017-10-02 17:30', '2017-10-16 21:30', '17:30', '21:30', 1, current_date(), current_date()),
('Restaurant Management 203: Front of House', 'This course is focused on providing each student with an understanding of the importance of an organized Front-of-House and even puts the student in the position caring for their own example.', 'M W', '2017-10-02 17:30', '2017-10-16 21:30',  '17:30', '21:30', 1, current_date(), current_date()),
('Culinary 205: Health Code Regulations', 'This course helps the student to familiarize themselves with government regulations regarding public health and safety in the restaurant environment.', 'M W', '2017-10-02 17:30', '2017-10-16 21:30', '17:30', '21:30', 1, current_date(), current_date());