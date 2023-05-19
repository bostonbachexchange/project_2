# Piano Lesson Assignment Tracker 

## Deployed Link
Hosted on Render 
https://music-lessons.onrender.com/users/login

![wireframe one](/assets/wireframes/layout.png)

-- Students can keep track of lessons and assignments

--Login Screen
 
  ![wireframe two](/assets/wireframes/login.png)


As a student, see a login screen where you login to the app or click sign up to create a username and password. If you already have a username and password, you can enter your username and password. Signing in will take you to your home page. 
 

 ![wireframe three](/assets/wireframes/sign_up.png)


--Sign Up
As a student, click on the Sign Up link to open the sign up page. The student will create a username and password and then be returned to the Login Page. 

--Main/Home Page
As a student, see that you are signed in. See an option to sign out. 
    See a link to your profile information. Clicking on the Edit Profile link will take you to the Edit Profile Page. 

    As a student, See a link to your assignments. On click, a list of assignments will display. 

![wireframe four](/assets/wireframes/main_page.png)


--Edit Profile Page
Clicking on the edit profile link will show a form to update profile information. Student can input their
     name(required), 
     parent/Gardian(required if over 18), 
     email, 
     phone number, 
     Age(number), 
     Date of Birth, 
     instruments, 
     address, 
     intrest/hobbies, 
     skill-level(number between 1-10)
User returns to home page on submit. 


 ![wireframe five](/assets/wireframes/profile_edit.png)


--Assignments Page
As a Student see a list of all assignments. Student can click ADD or REMOVE to create a new assignment or Delete an assignment. Clicking on an assignment will take you to an assignment show page. Each assignment will show:
    Teacher: Teacher who gave the assignment
    Date: date that the assignment was created.
    Technique: (Excercises, etudes, scales, arpeggios)
    Sight Reading Assignment: 
    Book: books and page number
    Notes/comments:
On Sumbit 

 ![wireframe six](/assets/wireframes/assignments_add.png)
 ![wireframe six](/assets/wireframes/assignments_show.png)
 ![wireframe seven](/assets/wireframes/assignments_edit.png)
 

Goals: 
1. Student can login successfully.
2. Student can see and update profile information.
3. Student can keep track of lesson assignments. Add and Remove assignments. 

Stretch:

complete ERDs for both models AND user model (3 models in total)

![ERD](/assets/ERD/ERD.png)
![Table Routes](/assets/routes/routes_table.png)

at least 15 user stories

at least 8 wireframes

a list of APIs or NPM packages or an overview of the seeded data (which requires 10 documents)

npm
express
dotenv
mongoose
morgan
liquid
liquid express views
method override
bcrypt

NOTE: seeded data does not have to be completely built out in the planning stages, just some indication of an idea of what will be seeded.

assignments 1-12, each containing a major scale, one octave


a routes table demonstrating the full CRUD actions for at least one resource

Name    |   Path                 |   HTTP VERB  |   PURPOSE                           |
Index   |   /assignments         |       GET    |   Displays all assignments          | 
Index   |   /login               |       GET    |   Displays all assign post          | 
New     |   /assignments/new     |       GET    |   Shows new form for new assign entry|
Create  |   /assignments/        |       POST   |   Creates a new assign post          |
Show    |   /assignments/:id     |       GET    |   Shows one specified assign post    |
Edit    |   /assignments/        |       GET    |   Shows edit form for one assign post|
Update  |   /assignments/:id/edit|       PUT    |   Updates a particular assign post   |
Destroy |   /assignments/:id     |       DELETE |   Delete a particular assign post    |

