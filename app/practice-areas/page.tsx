import { Metadata } from 'next';
import { PageWrapper } from '@/components/PageWrapper';

const sections = [
  {
    heading: 'Representing Employees',
    items: [
      'Pension & Insurance Claims',
      'Sexual Harassment',
      'Discrimination at Work',
      'Unpaid Overtime or Wages',
      'Restaurant Tip Credit & Overtime',
      'Employment Agreement Review',
      'Severance Agreement Review',
      'Wrongful Termination'
    ]
  },
  {
    heading: 'Representing Unions',
    items: [
      'How We Assist Labor Unions',
      'Duty of Fair Representation Litigation',
      'Collective Bargaining Negotiations',
      'DOL & IRS Audits',
      'Internal Affairs & Lawsuits',
      'Consent Decrees'
    ]
  },
  {
    heading: 'Representing Benefit Plans',
    items: [
      'NYC Pension and ERISA Attorneys',
      'Health & Benefit Plans',
      'Fiduciary Duties & Liabilities',
      'Best Practices',
      'Benefit Claims Litigation',
      'Statutory Compliance (ERISA, PPA, ACA & HIPAA)',
      'Government Audits & Investigations'
    ]
  }
];

export const metadata: Metadata = {
  title: 'Who We Represent | Cary Kane PLLC',
  description: 'Practice areas for employees, unions, and benefit plans at Cary Kane PLLC.'
};

export default function PracticeAreasPage() {
  return (
    <PageWrapper>
      <section className="section">
        <div className="container">
          <h1>Who We Represent</h1>
          <p>{'{PLACEHOLDER}'}</p>
          <div className="grid-3" style={{ marginTop: '1.5rem' }}>
            {sections.map((section) => (
              <article key={section.heading} className="card">
                <h2>{section.heading}</h2>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>
                      {item}: {'{PLACEHOLDER}'}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
