class ErrorRepository {
    constructor() {
      this.errors = new Map([
        [404, 'Not Found'],
        [500, 'Internal Server Error'],
        [401, 'Unauthorized'],
        [403, 'Forbidden'],
      ]);
    }
  
    translate(code) {
      return this.errors.get(code) || 'Unknown error';
    }
  }
  
  module.exports = { ErrorRepository };
  