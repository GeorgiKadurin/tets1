// test/test.js
const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('should return Hello World', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello World', done);
    });
});

