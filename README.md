# Environmental Awareness Web Application

## Project Overview
This project is an interactive web application aimed at promoting environmental awareness. The site includes multiple pages dedicated to climate change, recycling tips, and ways to reduce the environmental footprint. The project showcases various JavaScript functionalities, including DOM manipulation, event handling, local storage for user preferences, and a filter system for environmental quotes.

## Key Features

### 1. User Authentication (Login/Logout)
- A simple login/logout system allows users to authenticate themselves.
- User information (such as username) is stored in **local storage** to maintain the session across page reloads.
- The navigation bar dynamically changes to include or exclude the "Login" option based on the user's session status.

### 2. Light/Dark Mode
- Users can toggle between Day and Night themes by clicking a button.
- The selected theme is stored in **local storage** so that the user’s preference persists even after refreshing the page or closing the browser.

### 3. Filtering Quotes
- Users can filter environmental quotes by category (Water, Carbon, Trees, Energy, Recycle).
- The selected filter is saved in **local storage** to maintain the filter settings when the user returns to the page.

### 4. Interactive Multi-Step Form
- A multi-step form is included on the contact page, allowing users to navigate between steps using "Next" and "Back" buttons.
- Input validation ensures that all required fields are filled before proceeding to the next step.

## Local Storage Implementation
- **User Authentication**: The login/logout status of the user is saved in local storage, allowing the application to keep the user logged in even after a page reload.
- **Theme Preference**: When users select either Day or Night theme, the selected theme is saved in local storage and reapplied when the user returns to the site.
- **Filter Settings**: The selected quote filter (e.g., Water, Carbon) is saved in local storage and automatically reapplied when the user revisits the page.

## Project Structure
- `index.html`: The homepage of the application.
- `recycling.html`: A page dedicated to recycling tips.
- `climate-change.html`: A page discussing climate change, including filtering environmental quotes.
- `contact.html`: A contact page with a multi-step form.
- `styles.css`: The stylesheet controlling the layout and design of the application.
- `js/theme-switcher.js`: Handles the logic for toggling between Day and Night themes.
- `js/multi-step.js`: Handles the multi-step form logic.
- `js/keyboard-event.js`: Implements keyboard shortcuts and event handling.
- `js/random-quote.js`: Displays a random environmental quote on the page.
- `js/play-sound.js`: Handles sound effects on button click events.

## How to Run
1. Clone the repository from GitHub.
2. Open `index.html` in any web browser to explore the application.

## Future Improvements
- Add more environmental quotes and categories.
- Improve validation for form inputs and add more interactivity across pages.
- Implement user authentication with a real backend instead of local storage.

## Author
- **Marlen Amanbaev** - Lead Developer and Project Manager
