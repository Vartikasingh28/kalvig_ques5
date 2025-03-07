# Task Manager (To-Do List)

This is a simple **Task Manager** built with **React**, where users can **create, delete, and store tasks** in local storage. The tasks persist even after refreshing the page.

## 🚀 Features
- ✅ **Add Tasks**: Users can create new tasks.
- ❌ **Delete Tasks**: Remove tasks when completed or unnecessary.
- 💾 **Local Storage**: Tasks are saved in `localStorage` to persist data.
- 🎨 **Responsive Design**: Works smoothly on all screen sizes.

## 📂 Project Structure
```
react-task-manager/
│── src/
│   ├── components/
│   │   ├── Todo.js
│   │   ├── TodoDate.js
│   │   ├── TodoForm.js
│   │   ├── TodoList.js
│   │   ├── TodoLocalStorage.js
│   ├── App.js
│   ├── index.js
│   ├── styles/
│   │   ├── Todo.css
│── public/
│── package.json
│── README.md
```

## 🛠️ Installation and Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/Vartikasingh28/kalvig_ques5.git
   cd kalvig_ques5
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the project**
   ```bash
   npm start
   ```
   The app will start at **http://localhost:3000/**.

## 📝 Usage
1. Enter a task in the input field and press **Add**.
2. View all tasks in the list.
3. Click **Delete** to remove a task.
4. Tasks remain saved even after refreshing the page.
5. The application utilizes **React Hooks** such as `useState` and `useEffect` for state management and local storage handling.
