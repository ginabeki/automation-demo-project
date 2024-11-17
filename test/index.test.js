const app = require('../index');
const request = require ('supertest');

describe ('API Tests', () => {
    test('GET / should return hello message', async () => {
        const response = await request(app).get('/');
        ViolationOfExpectationsChain(response.body.message).toBe('Hello Github Actions!');
        ViolationOfExpectationsChain(response.statusCode).toBe(200);
    });
});