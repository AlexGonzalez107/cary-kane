import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { PageWrapper } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Home | Cary Kane PLLC',
  description:
    'New York City Labor & Employment Lawyers for Working People. Contact Cary Kane PLLC at 212.868.6300.'
};

export default function HomePage() {
  return (
    <PageWrapper>
      <section className="hero">
        <div className="container">
          <h1>New York City Labor &amp; Employment Lawyers for Working People</h1>
          <p>If Your Rights are Violated, Our Lawyers are here to Help You. 212.868.6300</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <article className="card">
            <h2>Representing Employees</h2>
            <p>{'{PLACEHOLDER}'}</p>
          </article>
          <article className="card">
            <h2>Representing Unions</h2>
            <p>{'{PLACEHOLDER}'}</p>
          </article>
          <article className="card">
            <h2>Representing Benefit Plans</h2>
            <p>{'{PLACEHOLDER}'}</p>
          </article>
        </div>
      </section>

      <section className="section" style={{ background: '#f9f6f5' }}>
        <div className="container">
          <h2>About Cary Kane PLLC</h2>
          <p>
            Cary Kane PLLC is a Midtown Manhattan law firm focused on labor and employment matters for
            working people, labor unions, and benefit plans. {'{PLACEHOLDER}'}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Contact Us</h2>
          <ContactForm />
        </div>
      </section>
    </PageWrapper>
  );
}
