'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  message: ''
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [status, setStatus] = useState<string>('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setStatus('Thank you. Your message has been received.');
      setFormData(initialState);
      return;
    }

    setStatus('Please complete all required fields and try again.');
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid" noValidate>
      <div className="form-grid two-col">
        <label>
          Name
          <input
            required
            value={formData.name}
            onChange={(event) => setFormData({ ...formData, name: event.target.value })}
          />
        </label>
        <label>
          Email
          <input
            required
            type="email"
            value={formData.email}
            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
          />
        </label>
      </div>
      <label>
        Phone
        <input
          required
          value={formData.phone}
          onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
        />
      </label>
      <label>
        Message
        <textarea
          required
          value={formData.message}
          onChange={(event) => setFormData({ ...formData, message: event.target.value })}
        />
      </label>
      <button className="button" type="submit">
        Send Message
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
