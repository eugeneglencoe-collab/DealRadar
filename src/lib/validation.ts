export function validateUrl(url: string): boolean {
  if (!url.trim()) return false;
  
  try {
    const parsedUrl = new URL(url);
    // Only allow http and https
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      return false;
    }
    // Block localhost and private IPs
    const hostname = parsedUrl.hostname;
    if (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      hostname.startsWith('172.')
    ) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export function validatePrice(price: string): boolean {
  if (!price.trim()) return false;
  
  const parsed = parseFloat(price);
  if (isNaN(parsed) || parsed < 0 || parsed > 1000000) {
    return false;
  }
  
  return true;
}

export function validateEmail(email: string): boolean {
  if (!email.trim()) return false;
  
  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
