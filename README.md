# SizzleRegistration

Sizzle Registration System - The Registration System with Sizzle!

Sizzle Registration System is a web app geared towards institues of higher culinary learning that require an efficient and easy-to-use way for students to register for courses and administrators to add and drop courses.

- Tech Used -

HTML, CSS, Pure.CSS, MySQL, Node.js, Express, Sequelize, Mocha, Chai, and Nightmare.


- NPM Modules Needed -

body-parser
chai
express
mocha
mysql2
nightmare
sequelize


- To Test -

From the main folder, run: npm test


- To Use App - 

Go to: https://safe-waters-50303.herokuapp.com/index and follow the instructions below.


![Sizzle Registration Process](public/assets/images/Capture1.png)

- Student Functionality -

The student button leads to a login page that will check if a student is registered with the system's database.

![Sizzle Registration Process](public/assets/images/Capture2.png)

If they are not, the system informs the user that their email or password is invalid and they can click the "New Student" button to register with the system. If they are already in the system, the login passes the user off to a page with all of the current courses available to sign up for. This is done by clicking the checkbox to the left of the course description and clicking the "Register" button.

![Sizzle Registration Process](public/assets/images/Capture3.png)

THe next page the user sees after registering for courses is a list of the courses they just signed up for. This page gives the user the ability to drop a course, should they want to, by selecting the course's checkbox and clicking the "Drop Course" button.

![Sizzle Registration Process](public/assets/images/Capture4.png)

- Administrator Functionality -

The "Admin" button on the home page leads to a login page, similar to that of the student login. We decided to exclude the "New Admin" functionality because an institution using this kind of system would likely input a new administrator's information manually into the database. This would keep someone with bad intentions from creating and destroying courses, as admins are able to do.

![Sizzle Registration Process](public/assets/images/Capture5.png)

For now, if you want to log in as an administrator, use the email: abc@abc.com and the password: 123. This will take the user to a page filled with the currently available courses and the ability to delete a course or create a new one and add it to the database. To delete a course, select the checkboxes of the courses you want to get rid of and click the "Delete Course" button.

![Sizzle Registration Process](public/assets/images/Capture6.png)

Clicking the "Create New Course" button takes you to a form that, when filled out and submitted, will add a new course to the database.

![Sizzle Registration Process](public/assets/images/Capture7.png)


And that is all there is to it!


Goals for future development:

1. Create a login that can't be bypassed by just typing in the correct page URL.

2. Add the ability for the system to check for date, time, and building conflicts for courses.

3. Add the ability for the system to check if the student is dropping the course within the timeframe required for a refund or if they are too late to drop a course at all.

4. Add a payment system to the process.

5. Make the delete course functionality do a soft delete so that there is a record of the transaction in the database.


Thanks for visiting and happy registration!