# People Contribution Files

A simple web app to create and manage contribution files with associated people and their contribution amounts. Built with HTML, Bootstrap 5, and Firebase Firestore.

---

## Features

- Create new contribution files with a name and date.
- View a list of all contribution files sorted by date.
- See the total number of contributors and total amount contributed per file.
- Select a file to manage people contributions (name and amount).
- Add new people and their contribution amounts to a selected file.
- Delete contribution files (with confirmation).
- Real-time data sync with Firestore.

---

## Technology Stack

- **Frontend:** HTML, CSS (Bootstrap 5), JavaScript
- **Backend/Database:** Firebase Firestore (No server required)
- **Hosting:** Any static file host or Firebase Hosting (optional)

---

## Setup Instructions

1. **Clone or download the project files.**

2. **Configure Firebase:**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore database (in test mode or with appropriate rules).
   - Get your Firebase config object from Project Settings.
   - Replace the `firebaseConfig` object in the HTML file with your own Firebase config credentials.

3. **Run the app:**

   - Simply open the `index.html` file in a modern web browser.
   - Alternatively, serve it via a local web server (like `live-server` or VSCode Live Server) for best results.

---

## Usage

- Use the **Create New File** form to add a new contribution file by specifying a file name and date.
- The **Existing Files** list shows all contribution files with the date, total people count, and total contributed amount.
- Click on a file name to view and manage people contributions for that file.
- Add people by entering their name and amount, then clicking **Add**.
- Delete any file by clicking the red **Delete** button next to it (this action cannot be undone).
- Data updates live thanks to Firestore’s real-time sync.

---

## Notes

- Amounts are handled as decimals and displayed with two decimal places.
- Date inputs and displays use local timezone formatting.
- All data is stored and synced using Firestore, so internet access is required.
- Make sure your Firestore security rules are appropriate before using in production.

---

## Future Improvements

- Edit or remove individual people contributions.
- Edit existing file details (name or date).
- Add authentication and user roles for secured access.
- Export file data as CSV or PDF.
- Improve UI/UX with animations and validations.

---

## License

This project is open source and free to use.

---

## Contact

Created by [Your Name]. Feel free to reach out with feedback or questions.

---

