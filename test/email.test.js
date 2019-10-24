'use strict';

const mock = require('egg-mock');

describe('test/email.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/email-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, email')
      .expect(200);
  });
});
