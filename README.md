API Testing Framework for Petstore Swagger API
I develop an E2E API testing framework for the Petstore Swagger API. Let's start by analyzing the service and choosing APIs to test.
API Selection
Looking at the Petstore Swagger documentation, I select three APIs with different HTTP methods:

POST /pet - Add a new pet to the store (POST)
GET /pet - Get the added pet (GET)
DELETE /pet/{petId} - Delete a pet (DELETE)

This gives us a good mix of request methods - one for creating resources and one for deleting them.
Framework Selection
I use Playwright for API testing framework since:

You mentioned keeping it consistent with Playwright
It offers excellent API testing capabilities alongside UI testing
It provides built-in reporting features

Page Object Model (Adapted for API)
Similar to the Page Object Model used in UI testing, our API framework uses a "Client Object Model" approach:

API Clients: Encapsulate API endpoints and operations
Models: Represent data structures used in requests and responses

An E2E API testing framework for the Petstore Swagger API built with Playwright and JavaScript.
Features

API Test Automation: Robust tests for Petstore API endpoints
TypeScript Integration: Type-safe API interactions
Reporting: Built-in HTML test reports
Node.js (v14 or higher)
npm (v6 or higher)

Installation

Clone the repository:
git clone https://github.com/Rifaqkhan/Betsson_Api_Task.git

Install dependencies:
npm install
npm install playwright@latest


Running Tests
Run all tests:
bashnpm test
View the HTML report:
bashnpm run test:report
