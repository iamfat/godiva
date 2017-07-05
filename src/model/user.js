const Base = require('./driver')

module.exports = class User extends Base {
  get () {
    return this.remote({
      baseURL: 'http://localhost:8180/',
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
    .get('auth')
    .then(res => {
      return Promise.resolve(res.data)
    })
  }
}
