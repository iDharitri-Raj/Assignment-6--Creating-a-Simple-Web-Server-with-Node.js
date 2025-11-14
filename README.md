# Laundry Services Web App

A simple Node.js web application that serves static HTML pages for a laundry service website.  
This project includes a homepage, about page, contact page, and a custom 404 error page.

---

## Project Structure
```
project-folder/
│
├── server.js
├── fileService.js
├── package.json
│
├── public/
│ ├── home.html
│ ├── about.html
│ ├── contact.html
│ ├── 404.html
│ ├── styles.css
│
└── README.md
```

---

## How the Server Works

This project is a simple Node.js web server built using the native `http` module.  
It handles routing, serves HTML files, provides CSS styling, and returns a custom 404 page for invalid routes.

---

## 🚀 Server Functionality (Brief Explanation)

### **Route Handling**
The server checks the incoming request URL and returns the correct page:

- `/` or `/home` → home page  
- `/about` → about page  
- `/contact` → contact page  
- Anything else → custom `404.html`

Each route sends the appropriate HTTP status code:
- **200** for valid pages  
- **404** for unknown routes  

---

The server:

1. Listens on **port 3000**
2. Identifies which page the user wants
3. Loads that file asynchronously
4. Sends the file back with the right HTTP status and content type
5. Shows a custom 404 page for incorrect URLs

This makes the application simple, modular, and easy to maintain.
