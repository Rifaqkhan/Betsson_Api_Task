const { test, expect } = require('@playwright/test');
const PetstoreAPI = require('../pages/PetstoreAPI');

test.describe('Petstore API Tests', () => {
  let api;

  test.beforeEach(async () => {
    api = new PetstoreAPI();  // Initialize the API helper (no need for page argument)
  });

  // Test 1: Add a new pet successfully
  test('Add a new pet successfully', async () => {
    const petData = {
      id: 1234,
      name: 'Doggie',
      photoUrls: ['https://example.com/dog.jpg'],
      status: 'available',
    };

    const response = await api.addPet(petData);

    expect(response.status).toBe(200);  // 200 OK for successful creation
    const responseBody = await response.json();
    expect(responseBody.id).toBe(petData.id);
    expect(responseBody.name).toBe(petData.name);
    expect(responseBody.status).toBe(petData.status);
  });

  // Test 2: Get a pet by valid ID
  test('Get a pet by valid ID', async () => {
    const petId = 1234;  // ID of the pet we added earlier

    const response = await api.getPetById(petId);
    expect(response.status).toBe(200);  // Should return 200 for valid pet ID

    const pet = await response.json();
    expect(pet.id).toBe(petId);
    expect(pet.name).toBe('Doggie');
  });

  // Test 3: Get pet by ID and verify data matches the added pet
  test('Get pet by ID and verify the data', async () => {
    const petData = {
      id: 1237,
      name: 'Fluffy',
      photoUrls: ['https://example.com/fluffy.jpg'],
      status: 'available',
    };

    // First, add the pet
    const addResponse = await api.addPet(petData);
    expect(addResponse.status).toBe(200);  // Confirm the pet was added

    // Now, retrieve the pet and validate the data
    const getResponse = await api.getPetById(petData.id);
    expect(getResponse.status).toBe(200);  // Should return 200 for valid pet ID

    const pet = await getResponse.json();
    expect(pet.id).toBe(petData.id);
    expect(pet.name).toBe(petData.name);
    expect(pet.status).toBe(petData.status);
  });

  // Test 4: Delete the pet and verify it was deleted
  test('Delete a pet successfully', async () => {
    const petData = {
      id: 1238,
      name: 'Bunny',
      photoUrls: ['https://example.com/bunny.jpg'],
      status: 'available',
    };

    // Add a pet to the system first
    const addResponse = await api.addPet(petData);
    expect(addResponse.status).toBe(200);  // Confirm the pet was added

    // Now, delete the pet
    const deleteResponse = await api.deletePet(petData.id);
    expect(deleteResponse.status).toBe(200);  // Expecting 200 OK for successful deletion

    // Attempt to get the deleted pet, which should return 404
    const getResponse = await api.deletePet(petData.id);
    expect(getResponse.status).toBe(404);  // Should return 404 for non-existent pet
  });
});
