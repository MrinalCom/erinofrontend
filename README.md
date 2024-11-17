# Contact Management System

A full-stack Contact Management application built with React, Material-UI, Node.js, and MongoDB. This application allows users to perform CRUD operations, including creating, updating, deleting, and viewing contacts, with pagination and sorting features.

---

## Project Description

This project demonstrates a robust implementation of a Contact Management System, showcasing a well-structured frontend and backend architecture.

### Features:

#### Frontend:
- Built with **React** and **Material-UI** for a clean, responsive user interface.
- Includes pagination, sorting, and a dialog-based system for creating and updating contacts.

#### Backend:
- Developed using **Node.js** and **Express** for handling RESTful APIs.
- Utilizes **MongoDB** for storing contact information.
---

## Setup Instructions
--Backend is hosted on server -https://erinobackend.onrender.com
--Frontend is hosted on client -https://erinofrontend.vercel.app/

--

## Challenges Faced
When attempting to make API calls from the React frontend to the Node.js backend, CORS errors occurred, blocking the requests.

Solution:
Configured the cors middleware in the backend to allow requests from the frontend:
