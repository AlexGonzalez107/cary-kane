import { Metadata } from 'next';
import { PageWrapper } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Attorneys | Cary Kane PLLC',
  description: 'Attorney profiles at Cary Kane PLLC.'
};

export default function AttorneysPage() {
  return (
    <PageWrapper>
      <section className="section">
        <div className="container">
          <h1>Attorneys</h1>
          <div className="grid-3">
            <article className="card">
              <h2>Cary Kane</h2>
              <p>{'{PLACEHOLDER}'}</p>
            </article>
            <article className="card">
              <h2>Attorney Profile</h2>
              <p>{'{PLACEHOLDER}'}</p>
            </article>
            <article className="card">
              <h2>Attorney Profile</h2>
              <p>{'{PLACEHOLDER}'}</p>
            </article>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
