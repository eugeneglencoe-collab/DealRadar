import { validateUrl, validatePrice, validateEmail } from '@/lib/validation';

describe('Validation', () => {
  describe('validateUrl', () => {
    it('should accept valid URLs', () => {
      expect(validateUrl('https://example.com')).toBe(true);
      expect(validateUrl('https://amazon.fr/product')).toBe(true);
      expect(validateUrl('http://example.com')).toBe(true);
    });

    it('should reject invalid URLs', () => {
      expect(validateUrl('')).toBe(false);
      expect(validateUrl('not a url')).toBe(false);
      expect(validateUrl('ftp://example.com')).toBe(false);
    });

    it('should reject localhost and private IPs', () => {
      expect(validateUrl('http://localhost:3000')).toBe(false);
      expect(validateUrl('http://127.0.0.1')).toBe(false);
      expect(validateUrl('http://192.168.1.1')).toBe(false);
      expect(validateUrl('http://10.0.0.1')).toBe(false);
      expect(validateUrl('http://172.16.0.1')).toBe(false);
    });
  });

  describe('validatePrice', () => {
    it('should accept valid prices', () => {
      expect(validatePrice('750')).toBe(true);
      expect(validatePrice('750.50')).toBe(true);
      expect(validatePrice('0')).toBe(true);
      expect(validatePrice('0.01')).toBe(true);
      expect(validatePrice('999999.99')).toBe(true);
    });

    it('should reject invalid prices', () => {
      expect(validatePrice('')).toBe(false);
      expect(validatePrice('-50')).toBe(false);
      expect(validatePrice('abc')).toBe(false);
      expect(validatePrice('1000001')).toBe(false);
    });
  });

  describe('validateEmail', () => {
    it('should accept valid emails', () => {
      expect(validateEmail('user@example.com')).toBe(true);
      expect(validateEmail('test.user@example.co.uk')).toBe(true);
      expect(validateEmail('user+tag@example.com')).toBe(true);
    });

    it('should reject invalid emails', () => {
      expect(validateEmail('')).toBe(false);
      expect(validateEmail('notanemail')).toBe(false);
      expect(validateEmail('user@')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
      expect(validateEmail('user @example.com')).toBe(false);
    });
  });
});
