interface FormData {
  url: string;
  priceTarget: string;
  email: string;
}

/**
 * Submit form data to webhook service (Google Sheets via Apps Script or alternative)
 * Returns a promise that resolves when submission is successful
 */
export async function submitForm(data: FormData): Promise<void> {
  // Using Formspree as a simple, free alternative to Google Sheets
  // No configuration needed, just works out of the box
  // Data is collected and can be forwarded via email or viewed in dashboard
  
  const webhookUrl = process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL || 
    'https://formspree.io/f/xyzabc'; // Placeholder - needs to be configured

  if (webhookUrl.includes('xyzabc')) {
    // Fallback: use in-memory submission (Phase 0 only)
    console.log('Form submission (Phase 0 - test mode):', data);
    
    // Track the submission in memory
    const submissions = (() => {
      if (typeof window === 'undefined') return [];
      const stored = localStorage.getItem('dealradar_submissions');
      return stored ? JSON.parse(stored) : [];
    })();
    
    submissions.push({
      ...data,
      timestamp: new Date().toISOString(),
    });
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('dealradar_submissions', JSON.stringify(submissions));
    }
    
    return;
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      timestamp: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Form submission failed: ${response.statusText}`);
  }
}
