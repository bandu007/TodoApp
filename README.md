#Title: Todo App Version 2 
Description: This is a complete full stack application where the front end and backend has been integrated successfully. It is not possible to download this and simply run it without modifications. 

Dependencies: 
Backend Dependencies- You require the modules of node.js , nodemon ,express and dotenv to be installed to go ahead and run it 
Front End Dependencies- You require the react Vite and Tailwind CSS modules to be installed in order to run this 

Running the program: You will require a Visual studio code, you will need to open this folder in the software. 
Post that you will need to simply remote the origin command { origin : https://todoapp-frontweb.netlify.app/} in CORs for the backend main index.js .
Please change the URL = 'http://localhost:8000/Todolist' on the App.jsx in the front end. You will require the a .env with the environment variables of the MongoDB server. 
Else it will not run. The front end may work but backend integration will fail. 

Challenges faced: 
1. React in this course was not taught to me properly so I had to 1st reunderstand the whole thing.
2. The Usecontext in react has been used in a very unusual way which created confusion for me, so had to clarity the doubts.
3. Implementing the APIs came with errors like in create task the initial task being grabbed was undefined, so had to modify the code.
4. Once this was done updating the properties of the tasks between frontend and backend was challenging.
5. Once this was done , the ID generation and searching by ID was different, the ID generated at front end was different from backend.
6. The schema had to be updated throughly in order to accomodate the ID from the react front end.
7. Once this was done searching based on the ID was the challenge, backend code had to be rewritten to accomodate this.
8. Once this was done it was asked for us to deploy the backend on render.com
9. Figuring out the correct way to deploy on render.com was challenging the server would not deploy at all.
10. Once Netlify was deployed we saw that the front end was not loading at all, we had to make the front end load.
11. Then we got a 404 not found, initially it was thought that CORs module was the issue but this was not the issue.
12. The URL change did not work, figuring out the correct URL change both for front end and back end was challenging.
