<<<<<<< HEAD
🚀 Full-Stack Online IDE
This project is a full-stack online IDE that allows users to write and execute code in C++, Java, and Python directly from their browser. The frontend is built with React, and the backend is a Dockerized API that compiles and runs the submitted code securely.

📦 Prerequisites
Docker Desktop installed on your system

Node.js and npm installed for running the React frontend



====================================================================
////////////////////////////////////////////////////////////////////
🛠 SETUP INSTRUCTIONS

1. Clone the Repository
   git clone https://github.com/your-username/client-code-compiler.git
   cd client-code-compiler

2. Install Frontend Dependencies
   Navigate to the frontend directory and install the necessary packages:

    cd frontend
    npm install
    
3. Build and Run the Backend Container
    Return to the root directory and use Docker Compose to build and start the backend:

    cd ..
    docker-compose up --build

This command will:

Build the Docker image from the backend/Dockerfile

Install required compilers (g++, javac, python3)

Start the backend server at http://localhost:5000

4. Start the React Frontend
   In a new terminal window, navigate to the frontend directory and start the development server:

    cd frontend
    npm start

The React app will open in your default browser at http://localhost:3000.
//////////////////////////////////////////////////////////////////////////
==========================================================================


_________________________________________________________________________
🧪 Testing the IDE
Once both the backend and frontend are running:

Open your browser and go to http://localhost:3000. (Copy this and paste it into search bar)

Select a programming language from the dropdown.

Enter your code in the editor.

Click the "Run" button to execute the code.
____________________________________________________________________
Sample Code Snippets
Python:

    print("Hello from Python!")
____________________________________________________________________
Java:

    public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Java!");
    }
}
_____________________________________________________________________
C++:

    #include <iostream>
int main() {
    std::cout << "Hello from C++!" << std::endl;
    return 0;
}
______________________________________________________________________

🧠 Project Architecture Overview
Frontend (frontend/):

Built with React.

Provides a user interface for writing and submitting code.

Sends code and selected language to the backend via HTTP POST requests.

Backend (backend/):

Node.js server running inside a Docker container.

Receives code submissions from the frontend.

Compiles and executes code using appropriate compilers/interpreters.

Returns the output or error messages back to the frontend.

By following the steps above, you've set up a local development environment that simulates an online IDE, allowing you to write and run code in multiple languages directly from your browser.
=======
