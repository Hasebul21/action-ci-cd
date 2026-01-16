const request = require('supertest'); // HTTP assertions
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello, Express!'));

describe('GET /', () => {
    it('should return Hello, Express!', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Hello, Express!');
        expect(res.statusCode).toBe(200);
    });
});
