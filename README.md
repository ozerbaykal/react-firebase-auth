# Firebase Authentication and Realtime Todo List Project

This project demonstrates the integration of Firebase's authentication and real-time database features with React. The application includes user authentication and a real-time to-do list, managed with Redux Toolkit for state management. The primary goal of this project is to utilize Firebase's functionality while employing modern React practices.

## Screenshots 🖼️

### Video GIF

### Homepage

### SettingsPage

## Features

1. Authentication System:
   - User registration with email and password.
   - User login functionality.
   - Password reset via email.
   - Persistent authentication state management.
2. Realtime Todo List:

   - Users can add, edit, and delete tasks in their personal to-do list.
   - The to-do list is stored in Firebase Realtime Database.
   - Real-time updates ensure tasks are instantly synced across devices.

3. State Management :

- Managed with Redux Toolkit for cleaner and scalable state management.

4. Notifications:

- React-hot-toast is used for elegant notifications (e.g., success, error, info).

5. UI Enhancements:

- Basic styling with Tailwind CSS.
  Accessibility-focused components from @headlessui/react.

## **Project Setup**

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/ozerbaykal/react-firebase-auth.git
   cd react-firebase-auth
   ```
2. Install dependencies:

```
npm install

```

3. Create a Firebase project:

- Go to the Firebase Console.[FireBase Console](https://console.firebase.google.com/)
- Create a new project.
- Enable Email/Password Authentication in the - Authentication section.
- Create a Realtime Database and configure its rules for authenticated users.

4. Add Firebase configuration:

- Create a .env file in the root directory and add your Firebase project credentials:

```env
VITE_REACT_APP_API_KEY=<Your_API_Key>
VITE_REACT_APP_AUTH_DOMAIN=<Your_Auth_Domain>
VITE_REACT_APP_PROJECT_ID=<Your_Project_ID>
VITE_REACT_APP_STORAGE_BUCKET=<Your_Storage_Bucket>
VITE_REACT_APP_MESSAGING_SENDER_ID=<Your_Messaging_Sender_ID>
VITE_REACT_APP_APP_ID=<Your_App_ID>
```

5. Run the development server:

```
npm run dev

```

## Technologies Used

- Frontend: React, Tailwind CSS, @headlessui/react
- State Management: Redux Toolkit
- Notifications: React-hot-toast
- Backend: Firebase (Authentication, Realtime Database)

## Limitations

- Minimal design as the focus is on Firebase's functionality.
- To-do lists are private to each user, with no sharing/collaboration features.

# Future Enhancements

- Add categories or tags for tasks.
- Implement Firestore for advanced query capabilities.
- Enhance UI/UX with improved Tailwind components.
- Add social login options (e.g., Google, Facebook).

## Contributing

Contributions are welcome! Please open an issue first to discuss what you would like to change.

- 1.Fork the project
- 2.Create your feature branch (git checkout -b feature/NewFeature)
- 3.Commit your changes (git commit -m 'Add new feature')
- 4.Push to the branch (git push origin feature/NewFeature)
- 5.Open a Pull Request

## Contact 📬

**Özer BAYKAL**  
Email: [baykalozer87@gmail.com](mailto:baykalozer87@gmail.com)  
Project Link: [Movie App on GitHub](https://github.com/ozerbaykal/react-firebase-auth)
