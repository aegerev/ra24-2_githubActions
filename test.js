const request = require('supertest');


describe('GET /', () => {
  it('should return "Hello World"', async () => {
    const app = await import ('./index');
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});