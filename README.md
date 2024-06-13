# contact-manager-app

This application is a backend service for managing contacts. It allows the following operations:

Get all contacts for a given user (getContacts function in controllers/contactController.js).
Create a new contact (createContact function in controllers/contactController.js).
Getting the details of a specific contact (getContact function in controllers/contactController.js).
Updating a specific contact (updateContact function in controllers/contactController.js).
Deleting a specific contact (deleteContact function in controllers/contactController.js).
All these operations are protected by authentication using a token that is validated by the middleware validateToken from middleware/validateTokenHandler.js.

The application is built on Node.js and Express.js technologies, the data is stored in MongoDB database using Mongoose


