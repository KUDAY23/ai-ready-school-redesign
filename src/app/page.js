import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductOverview from '@/components/ProductOverview';

export const metadata = {
  title: 'AI Ready School | The Complete AI Ecosystem for K-12',
  description: 'Everything a school needs to lead the AI era. Personalised AI companions, teaching agents, and secure local infrastructure.',
};

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ProductOverview />
      
      {/* Simple Footer Placeholder */}
      <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '2rem 0', textAlign: 'center', marginTop: '4rem' }}>
        <div className="container" style={{ color: '#a1a1aa' }}>
          <p>© {new Date().getFullYear()} AI Ready School. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
