## JavaScript, NodeJS, Express Weather App

## Instructions

### To run the app locally
1. Install dependencies - it might take a while (!)
    ```
    $ yarn/npm install
    ```    
5. Checkout `http://localhost:3000` :D

## Approach

### Features
With the time given, I have chosen a combination of features and decided on how
the MVP should look like. I then followed the Kanban style of agile development
with Trello board and user stories to keep track of the progress and priority. 

With this MVP, users can:
- get the local weather based on their current city.
- get the weather of the city of their choice by inputing the city name and the clicking the 'Get Weather' button.
- go back to the home page by clicking to the home icon.

### Main frameworks and libraries
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express

### Application architecture
The frontend serves as an interface with the user. I aimed to achieve a simple yet
attracting and user-friendly design. I have used ejs templeting engine to render the application from the server.

The backend makes use of a Node JS framwork, Express JS, to communicate with OpenWeatherApi to get the data 

### Could 



### Future improvements
I'd like to keep expanding this project to hone my existing skills, as well as
to explore new technologies.

Technologies:
- Introduce Redux for better application state management
- Further extract common functionality such as formatDate function
- Use non-relational database such as mongoDB
- Reduce bundle size for production
    - webpack external needs extra config dur to server-side rendering
- Deploy to AWS with server-less architecture using Lambda

Features:
- Edit and delete functionality
- Sorting alphabetically, or by date, as well as pagination
- Ability to write wikis in a markdown format
- Ability to create and switch between different databases

## Authour

Prabesh Shah