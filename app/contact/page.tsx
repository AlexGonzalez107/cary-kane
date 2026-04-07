import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { PageWrapper } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Contact | Cary Kane PLLC',
  description: 'Contact Cary Kane PLLC in Midtown Manhattan at 212.868.6300.'
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="section">
        <div className="container">
          <h1>Contact</h1>
          <p>Phone: 212.868.6300</p>
          <p>Location: Midtown Manhattan, Herald Square</p>
          <ContactForm />
        </div>
      </section>
    </PageWrapper>
  );
}
