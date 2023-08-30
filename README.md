# Rate Our Service App (React)

This project serves as an ongoing endeavor to improve and refine my understanding of the [React UI Library](https://reactjs.org/), particularly for novice developers interested in exploring the foundational aspects of React.

The objectives behind this project are the development and implementation of several key aspects of React:

- Components: The building blocks of any React app, understanding how to create and utilize components is essential.
- JSX: Enhance the understanding of JSX, a syntax extension for Javascript, used in React to describe what the UI should look like.
- Props: Delving into both proptypes and defaultprops, this project aims to shed light on how to accurately typecheck the props for a component.
- State: Both component and root level states will be explored comprehensively, as managing and understanding state is integral to any React app.
- Simple Styling: Getting hands-on with basic CSS to bring our React components to life.
- Event Handling: Getting a grasp on how to make your React app interactive and responsive to user input.
- Lists and keys: Understanding how to create lists in React and assign 'keys' to list items to make them uniquely identifiable.
- Forms: Exploring how to take user input in React by building forms.
- Context API: A more advanced feature of React, the Context API allows for a more dynamic approach to state management, enabling you to share state across multiple components without the need for prop drilling.
- HTTP Requests: Learn the basics of how to interact with a server from your React application, using HTTP requests to fetch, create, update, and delete data.

This Rate Our Service App serves as a practical application of these React fundamentals. The goal is to create an interactive user experience where individuals can evaluate our service quality. Users will have the ability to rate the service using diverse metrics, submit their reviews where they can share their thoughts, and view collective feedback from other users.

While this is primarily a beginner project, its development process is designed to be dynamic and incremental. As my knowledge and skills in React continue to expand, I will actively update the app with new features to incorporate more advanced concepts.

## Latest Changes

This project now utilizes the JSON Server package for local data storage. Data is stored in the *db.json* file within the project. The implementation also employs the *concurrently* package to enable simultaneous operation of the app and the dummy JSON server.

Running the App: To run the application and the dummy JSON server simultaneously, use the following command:

```
npm run dev
```

## Instructions to Download and Run the Project

**Prerequisites:** Make sure that you have Node.js and npm installed on your local machine. If you do not have these, you can download and install them from [here](https://nodejs.org/en/download/).

**Step 1:** Open your terminal (Mac & Linux) or Command Prompt (Windows).

**Step 2:** Navigate to the directory where you want to clone this project.

```
cd /path/to/your/directory
```

**Step 3:** Now, clone the project to your local machine using the following command:

```
git clone https://github.com/yourusername/yourrepository.git
```

*Replace `yourusername` and `yourrepository` with your GitHub username and repository name respectively.*

**Step 4:** After cloning, navigate into the project directory:

```
cd yourrepository
```

**Step 5:** Install the project dependencies. Type the following command and press enter.

```
npm install
```

**Step 6:** Now that all the dependencies have been installed, you can run the project using the following command:

```
npm start
```

Note: `npm start` runs the app in development mode. The app will automatically reload if you make changes to the code. To view the app, open [http://localhost:3000](http://localhost:3000) in your browser window.

**Additional Note:** In case of any errors during installation or running the app, make sure to check error log for more details. It may happen due to various reasons: missing dependencies, port already in use, etc.

If you encounter an error stating that the local host is already in use, you have the option of either freeing up port 3000 or changing the ports. If you would like to run the app on a different port, modify the `start` script in your `package.json` file like so:

```
"scripts": {
  "start": "set PORT=5000 && react-scripts start"
}
```

In the above snippet, the app has been configured to run on port 5000.

Once you've successfully started the application, you're all set to explore this React project.
