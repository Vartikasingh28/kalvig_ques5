# React To-Do List App

## Overview
This is a simple To-Do List application built using React. Users can add and delete tasks, and tasks persist between sessions using localStorage.

## Features
- Add tasks
- Delete tasks
- Tasks persist using localStorage
- Uses React functional components and hooks (`useState`, `useEffect`)
- Styled using CSS

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Steps to Set Up the Project

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/react-todo-app.git
   ```
   Replace `your-username` with your GitHub username.

2. **Navigate into the project directory:**
   ```sh
   cd react-todo-app
   ```

3. **Install dependencies:**
   ```sh
   npm install
   ```
   Or, if using Yarn:
   ```sh
   yarn install
   ```

4. **Start the development server:**
   ```sh
   npm start
   ```
   Or, if using Yarn:
   ```sh
   yarn start
   ```
   The app should open automatically in your browser at `http://localhost:3000/`.

## Project Structure
```
react-todo-app/
│-- public/
│-- src/
│   │-- components/
│   │   │-- TodoForm.js
│   │   │-- TodoList.js
│   │   │-- TodoItem.js
│   │-- App.js
│   │-- index.js
│   │-- styles.css
│-- package.json
│-- README.md
```

## Deployment
To deploy your React app to GitHub Pages:
1. Install `gh-pages`:
   ```sh
   npm install gh-pages --save-dev
   ```
2. Add the following to `package.json`:
   ```json
   "homepage": "https://your-username.github.io/react-todo-app",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run the deployment command:
   ```sh
   npm run deploy
   ```
