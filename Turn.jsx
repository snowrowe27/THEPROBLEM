/* THE PROBLEM — The Turn. Spectacle cools into the human story. */
function Turn() {
  const { Badge } = window.THEPROBLEMFilmDesignSystem_e8d583;

  const frames = [
    { src: '/assets/imagery/victory-belt-crowd.jpg', cap: 'The lights', sub: 'Four divisions. A title in each.' },
    { src: '/assets/imagery/mri-cold.jpg', cap: 'The scans', sub: 'What the cameras never showed.' },
    { src: '/assets/imagery/funeral-church.jpg', cap: 'The cost', sub: 'The people the spotlight burned.' },
  ];

  return (
    <section id="story" style={{ position: 'relative', background: 'var(--bg-page)', backgroundImage: 'var(--gradient-charcoal)' }}>
      <div className="tp-grain" style={{ position: 'absolute', inset: 0 }} />
      <div className="tp-container" style={{ position: 'relative', zIndex: 2, paddingTop: 'clamp(80px,12vh,160px)', paddingBottom: 'clamp(72px,10vh,140px)' }}>

        {/* the turn line */}
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <span className="tp-eyebrow tp-eyebrow--blood reveal">The turn</span>
          <p className="tp-editorial reveal" style={{
            fontSize: 'clamp(1.6rem, 3.6vw, 2.9rem)', lineHeight: 'var(--leading-snug)',
            color: 'var(--bone-100)', margin: '24px 0 0', textWrap: 'balance',
          }}>
            Born into chaos and crowned in lights —
            <em style={{ fontStyle: 'italic', color: 'var(--bone-50)' }}> only to unravel in front of the same cameras that once made him a star.</em>
          </p>
        </div>

        {/* filmstrip: warm → cold → grief */}
        <div className="turn-strip" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(10px,1.4vw,20px)',
          marginTop: 'clamp(48px,7vh,88px)',
        }}>
          {frames.map((f, i) => (
            <figure key={i} className="reveal" style={{ margin: 0, position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }}>
              <img src={f.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: i === 0 ? 'none' : i === 1 ? 'saturate(1.1)' : 'saturate(0.85)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-bottom)' }} />
              <figcaption style={{ position: 'absolute', left: 18, right: 18, bottom: 16, zIndex: 2 }}>
                <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 'var(--fw-bold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', fontSize: 'var(--text-lg)', color: 'var(--bone-50)' }}>{f.cap}</div>
                <div style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 'var(--text-sm)', color: 'var(--bone-200)', marginTop: 4 }}>{f.sub}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* restrained factual anchor */}
        <div className="reveal" style={{
          marginTop: 'clamp(48px,7vh,88px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 'clamp(16px,3vw,40px)', flexWrap: 'wrap', textAlign: 'center',
        }}>
          <Badge variant="gold" size="md">4-Division World Champion</Badge>
          <span style={{
            fontFamily: 'var(--font-condensed)', fontWeight: 'var(--fw-light)',
            textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)',
            fontSize: 'clamp(0.8rem,1.5vw,1rem)', color: 'var(--text-secondary)', maxWidth: 520,
          }}>
            One of only four fighters to win titles at 130, 135, 140 &amp; 147 lbs.
          </span>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Turn });
