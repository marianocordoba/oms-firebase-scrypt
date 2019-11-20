# Firebase Scrypt

[![Open Microservice Specification Version](https://img.shields.io/badge/Open%20Microservice-1.0-blue)](https://openmicroservices.org) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen)](https://opensource.org/licenses/MIT)

When you export accounts from Firebase, their passwords are encrypted using a modified version of the scrypt algorithm. This service can be used to validate passwords of accounts exported from Firebase.

## Usage

You will need the hash parameters from Firebase. Go to Firebase Console > Authentication and click the menu on the top right corner of the users list, then click on **Password hash parameters**

### Actions

- hash

  **Storyscript:**

  ``` coffee
  hashed = firebase-scrypt hash memCost:14 rounds:8 saltSeparator:"yoursaltseparator" signerKey:"yoursignerkey" salt="randomsalt" password="verysecurepassword"
  ```

  **Output**:

  ```
  GWWlYtpW8fgd
  ```