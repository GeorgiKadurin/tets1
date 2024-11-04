const request = require('supertest');
const express = require('express');
const app = require('./app'); // если app.js экспортирует app

describe('GET /', function() {
  it('responds with Hello World', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello World', done);
  });
});

