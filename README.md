## Project: Go-Fit (Overview)
    We plan on making a system which will utilize the users inputs and desired goals to create recommendations for
what the user should do for exercise. We will use data sources which will primarily consist of the user’s inputs,
and a database containing exercises that the user can choose from. Using the user’s inputs (such as desired
diet, how much activity they want to do, desired end weight, current weight, height, etc.), the system will set up
an initial recommendation which will adjust over time based on the user’s inputs (step count, type of exercise)
over the course of attempting to achieve that goal. Some of the technologies being used are React.js, TypeScript, JavaScript HTML, CSS, Firebase, Git/Github, and Ionic. In order to collect the data we need, we will have users who are new create a login. Next, they will fill out a survey that asks for their demographics and basic information about them (i.e. age, height, weight, activity level, goals). All of this data will be stored in Firebase. Queries to the database will be made through JavaScript. Some milestone include creating the login page for the user, having the questionnaires be made interactively for the user, and finally making system recommendations on workouts to those users.

## Adding the Android Platform
1) First, install the @capacitor/android package.
- npm install @capacitor/android
2) Then, add the Android platform (remove the ./android file when relaunching).
- npx cap add android
3) To open the project in Android Studio, run:
- npx cap open android