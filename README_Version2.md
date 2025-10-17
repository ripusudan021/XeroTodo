# XeroTodo 📝

A sleek, minimalistic, and fully functional Todo Web App built with **React** and **Tailwind CSS**. All your tasks are saved in your browser using **Local Storage**, ensuring fast and secure task management.

![Empty state screenshot](https://github.com/ripusudan021/XeroTodo/blob/main/Emptytodo.png)

## 🚀 Features

- ✅ Add, complete, and delete tasks
- 💾 LocalStorage support — tasks persist even after a page reload
- 🌓 Dark theme inspired minimalist UI
- 📊 Real-time task counter
- 🔍 Toggle to show/hide completed tasks
- 💅 Built with Tailwind CSS for rapid UI styling
- ⚛️ Powered by React and modern hooks

## 🛠 Tech Stack

- **React** (with functional components & hooks)
- **Tailwind CSS**
- **Local Storage API**

## 📦 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repo

```bash
git clone https://github.com/ripusudan021/XeroTodo.git
cd XeroTodo
```

> Note: Repository name is `XeroTodo` (case-sensitive).

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

> The app will typically run on `http://localhost:5173` (if using Vite).

## 📁 Folder Structure

```bash
xerotodo/
│
├── public/               # Static assets (images, icons)
├── src/
│   ├── components/       # Reusable components
│   ├── App.jsx           # Main App component
│   ├── index.css         # Tailwind CSS styles
│   └── main.jsx          # Entry point
├── tailwind.config.js    # Tailwind configuration
├── package.json
└── README.md
```

## 🧠 How It Works

- Tasks are stored in the browser using `localStorage`.
- When a task is added, updated, or removed, the local storage is updated in real-time.
- On app load, tasks are fetched from local storage and rendered.

## 📸 Screenshots

Empty state  
![Empty state](https://github.com/ripusudan021/XeroTodo/blob/main/Emptytodo.png)

With tasks  
![With tasks](https://github.com/ripusudan021/XeroTodo/blob/main/WithtaskTodo.png)

## 🌟 Contributing

Feel free to fork this repo, make your changes, and submit a pull request!

---

Made with ❤️ using React + Tailwind