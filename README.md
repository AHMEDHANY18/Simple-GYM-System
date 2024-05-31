
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


```
