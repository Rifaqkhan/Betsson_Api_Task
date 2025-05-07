const { expect } = require('@playwright/test');

class PetstoreAPI {
  constructor() {
    this.baseUrl = 'https://petstore.swagger.io/v2'; // Replace with the correct base URL for your API
  }

  // Add a pet to the petstore
  async addPet(petData) {
    const response = await fetch(`${this.baseUrl}/pet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petData),
    });
    return response;
  }

  // Get a pet by ID
  async getPetById(petId) {
    const response = await fetch(`${this.baseUrl}/pet/${petId}`, {
      method: 'GET',
    });
    return response;
  }

  // Delete a pet by ID
  async deletePet(petId) {
    const response = await fetch(`${this.baseUrl}/pet/${petId}`, {
      method: 'DELETE',
    });
    return response;
  }
}

module.exports = PetstoreAPI;
