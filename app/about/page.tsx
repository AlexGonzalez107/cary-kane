import { Metadata } from 'next';
import { PageWrapper } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'The Firm | Cary Kane PLLC',
  description: 'About Cary Kane PLLC, a New York City labor and employment law firm.'
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="section">
        <div className="container">
          <h1>The Firm</h1>
          <p>
            Cary Kane PLLC serves clients in Midtown Manhattan and throughout New York City. {'{PLACEHOLDER}'}
          </p>
          <p>
            Our attorneys focus on employee rights, union matters, and benefit plan compliance and
            litigation. {'{PLACEHOLDER}'}
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
