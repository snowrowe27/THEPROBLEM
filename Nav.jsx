/* THE PROBLEM — sticky site header */
function Nav({ onTrailer, onNotify }) {
  const { Button } = window.THEPROBLEMFilmDesignSystem_e8d583;
  const { PlaySolid } = window;
  const [solid, setSolid] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 56, behavior: 'smooth' });
  };

  const link = {
    fontFamily: 'var(--font-condensed)', fontWeight: 'var(--fw-medium)',
    textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)',
    fontSize: 'var(--text-2xs)', color: 'var(--text-secondary)',
    cursor: 'pointer', transition: 'color var(--dur-fast) var(--ease-out)',
  };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 'var(--z-sticky)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 var(--gutter)', height: 64,
      background: solid ? 'rgba(8,9,11,0.72)' : 'transparent',
      backdropFilter: solid ? 'var(--blur-glass)' : 'none',
      WebkitBackdropFilter: solid ? 'var(--blur-glass)' : 'none',
      borderBottom: `1px solid ${solid ? 'var(--border-hairline)' : 'transparent'}`,
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    }}>
      {/* small wordmark lockup */}
      <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ display: 'flex', alignItems: 'baseline', gap: 7, cursor: 'pointer' }}>
        <span style={{
          fontFamily: 'var(--font-condensed)', fontWeight: 300, fontSize: 'var(--text-2xs)',
          letterSpacing: 'var(--tracking-widest)', color: 'var(--bone-200)', textTransform: 'uppercase',
        }}>The</span>
        <span className="tp-wordmark" style={{ fontSize: 22 }}>Problem</span>
      </div>

      <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <span style={link} className="nav-link" onClick={() => scrollToId('story')}>The Story</span>
        <span style={link} className="nav-link" onClick={onTrailer}>Trailer</span>
        <Button variant="primary" size="sm" iconRight={<window.ArrowRight size={14} />} onClick={onNotify}>Get Notified</Button>
      </nav>
    </header>
  );
}
Object.assign(window, { Nav });
