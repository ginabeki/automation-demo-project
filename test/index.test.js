'use strict';

const request = require('supertest');
const app = require('../index');

describe('API Tests', () => {
  test('GET / should return hello message', async () => {
    const response = await request(app).get('/');
    expect(response.body.message).toBe('Hello Github Actions!');
    expect(response.statusCode).toBe(200);
  });
});