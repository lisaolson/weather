const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found'
          })
        })
        .end(done);
    });
  });

  describe ('GET /users', () => {
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Lisa',
            age: 24
          });
        })
        .end(done);
    });
  });
});