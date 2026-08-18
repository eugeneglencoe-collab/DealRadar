'use client';

import { useState } from 'react';
import { validateUrl, validatePrice, validateEmail } from '@/lib/validation';
import { submitForm } from '@/lib/submit';

interface UrlFormProps {
  onSubmitted: () => void;
}

export function UrlForm({ onSubmitted }: UrlFormProps) {
  const [formData, setFormData] = useState({
    url: '',
    priceTarget: '',
    email: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field on change
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');
    setErrors({});

    // Validation
    const newErrors: Record<string, string> = {};

    if (!formData.url.trim()) {
      newErrors.url = 'L\'URL est requise';
    } else if (!validateUrl(formData.url)) {
      newErrors.url = 'Veuillez entrer une URL valide (https://...)';
    }

    if (!formData.priceTarget.trim()) {
      newErrors.priceTarget = 'Le prix cible est requis';
    } else if (!validatePrice(formData.priceTarget)) {
      newErrors.priceTarget = 'Veuillez entrer un prix valide (ex: 750.00)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'e-mail est requis';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse e-mail valide';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit
    setLoading(true);
    try {
      await submitForm(formData);
      onSubmitted();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Une erreur s\'est produite. Veuillez réessayer.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="url" className="block text-sm font-semibold text-gray-900 mb-2">
          URL du produit
        </label>
        <input
          type="url"
          id="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="https://example.com/produit"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.url ? 'border-red-500' : 'border-gray-300'
          }`}
          disabled={loading}
        />
        {errors.url && (
          <p className="text-red-600 text-sm mt-1">{errors.url}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="priceTarget"
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          Prix cible (€)
        </label>
        <input
          type="number"
          id="priceTarget"
          name="priceTarget"
          value={formData.priceTarget}
          onChange={handleChange}
          placeholder="750.00"
          step="0.01"
          min="0"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.priceTarget ? 'border-red-500' : 'border-gray-300'
          }`}
          disabled={loading}
        />
        {errors.priceTarget && (
          <p className="text-red-600 text-sm mt-1">{errors.priceTarget}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="vous@example.com"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          disabled={loading}
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm">{submitError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
      >
        {loading ? 'Envoi en cours...' : 'Soumettre'}
      </button>
    </form>
  );
}
