import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'The Firm' },
  { href: '/practice-areas', label: 'Who We Represent' },
  { href: '/attorneys', label: 'Attorneys' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand">
          Cary Kane PLLC
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
