const { assert, expect } = require('chai');
const supertest = require('supertest');
const app = require('../src/server');

const request = supertest(app);

describe('GET /health', () => {
  it('Should return Ok in response with status 200', async () => {
    const response = await request.get('/health');
    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal('Ok');

    assert.equal(response.status, 200);
    assert.equal(response.body.status, 'Ok');
  });

  it('Should return 404', async () => {
    const response = await request.get('/random');
    expect(response.status).to.equal(404);
  });
});
