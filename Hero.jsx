/* THE PROBLEM — Hero. The loud gear: wordmark + the $40M hook + count-down. */
function Hero({ onTrailer, onNotify }) {
  const { Wordmark, MoneyCounter, Button } = window.THEPROBLEMFilmDesignSystem_e8d583;
  const { PlaySolid, ArrowDown } = window;

  return (
    <section style={{ position: 'relative', minHeight: '100svh', overflow: 'hidden', display: 'flex' }}>
      {/* full-bleed archival still — clean, dark negative space at left for type */}
      <img src="/assets/imagery/broner-glove-face.jpg" alt="Adrien Broner, head bowed"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '78% 42%' }} />
      {/* protection scrims + vignette + grain */}
      <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-left)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-bottom)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--vignette)', pointerEvents: 'none' }} />
      <div className="tp-grain" style={{ position: 'absolute', inset: 0 }} />

      {/* content */}
      <div className="tp-container" style={{
        position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column',
        justifyContent: 'center', minHeight: '100svh', paddingTop: 72, paddingBottom: 60,
        maxWidth: 'var(--container-max)',
      }}>
        <div style={{ maxWidth: 680 }} className="hero-rise">
          <div className="tp-eyebrow" style={{ marginBottom: 20, color: 'var(--bone-200)' }}>
            Fordom Studio Presents
          </div>

          <div className="hero-mark" style={{ marginBottom: 24 }}>
            <Wordmark size={118} showThe={true} />
          </div>

          {/* the hook — "HOW TO BLOW" over a figure that ticks $40,000,000 → $0 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4, marginBottom: 18 }}>
            <span style={{
              fontFamily: 'var(--font-condensed)', fontWeight: 'var(--fw-light)',
              textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)',
              fontSize: 'clamp(0.9rem, 2vw, 1.25rem)', color: 'var(--bone-100)', lineHeight: 1, whiteSpace: 'nowrap',
            }}>How to blow</span>
            <MoneyCounter from={40000000} to={0} size="md" label={null} duration={2800} delay={9000} />
          </div>
          <p style={{
            fontFamily: 'var(--font-condensed)', fontWeight: 'var(--fw-medium)',
            textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)',
            fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: '0 0 36px',
          }}>Four world titles. Forty million dollars. Gone on camera.</p>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" iconLeft={<PlaySolid size={15} />} onClick={onTrailer}>
              Watch the Trailer
            </Button>
            <Button variant="secondary" size="lg" onClick={onNotify}>Get Notified</Button>
          </div>
        </div>
      </div>

      {/* bottom credit strip */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 3,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 var(--gutter) 22px',
      }}>
        <span style={{
          fontFamily: 'var(--font-condensed)', fontWeight: 'var(--fw-medium)',
          textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)',
          fontSize: 'var(--text-2xs)', color: 'var(--text-muted)',
        }}>Documentary Feature</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)' }} className="scroll-cue">
          <span style={{
            fontFamily: 'var(--font-condensed)', fontWeight: 'var(--fw-medium)',
            textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', fontSize: 'var(--text-2xs)',
          }}>Scroll</span>
          <ArrowDown size={15} />
        </span>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
