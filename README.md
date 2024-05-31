# Simple GYM System

This project implements a simple GYM System using Express for managing members, trainers, and calculating revenues.

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.

## APIs

### Members

1. **POST /members**: Add a member (must be unique). (هشوف اذا كان اال ID موجود ولا لا )
2. **GET /members**: Get all members and their trainer. (زي الاسايمنت اللي فات)
3. **GET /members/:id**: Get a specific member (if membership expired, return "this member is not allowed to enter the gym").(دا في حاله اذا العضويه بتاعته انتهت ولا لا )
4. **PUT /members/:id**: Update member information (name, membership, trainer id).
5. **DELETE /members/:id**: Soft delete a member.(نعرف نجيبه تاانى عادى)

### Trainers

1. **POST /trainers**: Add a trainer.
2. **GET /trainers**: Get all trainers and their members.
3. **PUT /trainers/:id**: Update trainer information.
4. **DELETE /trainers/:id**: Delete a trainer.
5. **GET /trainers/:id**: Get a specific trainer and their members.

### Statistics

1. **GET /statistics/revenues**: Get all revenues of all members.
2. **GET /statistics/revenues/:trainerId**: Get the revenues of a specific trainer.(لو مثلا المدرب معاه 5 اشخاص فا المفروض اشوف ال5 اشخاص دافعين كام وارجع الملبغ )

## Dependencies

- express

or

# Gym Management System

## Introduction

This Gym Management System is an API for managing gym memberships and trainers. It provides endpoints to add, update, retrieve, and delete members and trainers, calculate revenues, and get information about members and trainers.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `node app.js`.

## Usage

### Endpoints

- **GET**:
  - `/totalRevenue`: Get the total revenue of all active members.
  - `/trainer/:id`: Get the revenue of a specific trainer by ID.
  - `/member`: Get all members and their trainers.
  - `/member/:id`: Get a specific member by ID and check membership status.
  - `/trainer`: Get all trainers and their members.
  - `/trainerAndMember/:id`: Get a specific trainer by ID and their associated members.
- **POST**:
  - `/addmember`: Add a new member. Ensure the member ID is unique.
  - `/addtrainer`: Add a new trainer. Ensure the trainer ID is unique.
- **PUT**:
  - `/member/:id`: Update member information by ID.
  - `/trainerName/:id`: Update trainer name by ID.
- **DELETE**:
  - `/DeleteMember/:id`: Soft delete a member by ID.
  - `/Deletetrainer/:id`: Soft delete a trainer by ID.

## Error Handling

Errors are handled gracefully with appropriate status codes and error messages returned in JSON format.

## Sample Requests and Responses

### GET /totalRevenue

Request:

```bash
GET /totalRevenue

Conclusion
This Gym Management System API simplifies the management of gym memberships and trainers. It provides easy-to-use endpoints for various operations and ensures efficient revenue calculation and member/trainer management.

Feel free to contribute or provide feedback to enhance this system further!


This README provides a comprehensive guide on installation, usage, endpoints, error handling, and sample requests/responses for the Gym Management System API.

i used chatGpt to make README file
```
