# Money Transfer and Savings App Documentation

## Introduction

This documentation provides an overview of the Money Transfer and Savings App, a mobile application built on top of the Paystack API using React Native as the development framework and Firebase as the backend. The app aims to facilitate money transfers between users and help them manage their savings effectively. It employs Tailwind CSS for styling to ensure a consistent and visually appealing user experience.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Features

- **Money Transfer:** Users can transfer money securely to other users within the app using Paystack API for processing payments.

- **Savings Management:** The app provides tools to set savings goals, track progress, and manage savings effectively.

- **User Authentication:** Users can sign up and log in securely using Firebase Authentication.

- **Account Balances:** Users can view their account balances and transaction history.

- **Notifications:** Users receive notifications for successful transactions, account updates, and savings milestones.

## Tech Stack

The Money Transfer and Savings App is built using the following tech stack:

- **React Native:** A popular cross-platform mobile app development framework.

- **Firebase:** A cloud-based platform for authentication, database, and storage.

- **Paystack API:** A payment gateway API for processing transactions.

- **Tailwind CSS:** A utility-first CSS framework for consistent and responsive styling.

## Installation

To install and run the app on your local machine, follow these steps:

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Navigate to the project directory:

```bash
cd money-transfer-savings-app
```

3. Install dependencies:

```bash
npm install
```

4. Run the app on a connected device or emulator:

```bash
npx react-native run-android   # For Android
npx react-native run-ios       # For iOS
```

## Configuration

Before running the app, you need to configure the Firebase and Paystack API credentials. Follow these steps:

### Firebase Configuration

1. Create a Firebase project at [https://firebase.google.com/](https://firebase.google.com/) and obtain the project credentials.

2. Update the Firebase configuration in the `src/firebase/config.js` file:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

export default firebaseConfig;
```

### Paystack API Configuration

1. Sign up for a Paystack account at [https://paystack.com/](https://paystack.com/) and obtain the API key.

2. Update the Paystack API key in the `src/utils/paystack.js` file:

```javascript
const PAYSTACK_API_KEY = "YOUR_PAYSTACK_API_KEY";

export default PAYSTACK_API_KEY;
```

## Usage

Once the app is installed and configured, you can use it to perform the following tasks:

- **Money Transfer:** Log in or sign up to access the dashboard. Initiate a money transfer by providing recipient details and amount. Confirm the transfer using Paystack payment processing.

- **Savings Management:** Set savings goals, track progress, and view savings history in the savings section.

- **Account Balances:** Check your account balance and transaction history in the account section.

## Contributing

We welcome contributions to the Money Transfer and Savings App. If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

The Money Transfer and Savings App is licensed under the [MIT License](LICENSE).

---

Thank you for using our Money Transfer and Savings App! If you have any questions or need further assistance, please feel free to contact us. Happy banking!