const { ErrorRepository } = require('../app');

describe('ErrorRepository', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
  });

  test('should return correct description for known error codes', () => {
    expect(errorRepo.translate(404)).toBe('Not Found');
    expect(errorRepo.translate(500)).toBe('Internal Server Error');
    expect(errorRepo.translate(401)).toBe('Unauthorized');
    expect(errorRepo.translate(403)).toBe('Forbidden');
  });

  test('should return "Unknown error" for unknown error codes', () => {
    expect(errorRepo.translate(123)).toBe('Unknown error');
    expect(errorRepo.translate(999)).toBe('Unknown error');
  });
});
