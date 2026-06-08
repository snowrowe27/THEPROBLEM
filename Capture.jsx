/* THE PROBLEM — Email capture. The close, over the seated portrait. */
function Capture({ onNotify }) {
  const { Input, Button, Badge } = window.THEPROBLEMFilmDesignSystem_e8d583;
  const { Mail, ArrowRight } = window;
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
    setDone(true);
  };

  return (
    <section id="notify" style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <img src="/assets/imagery/broner-seated-throne.jpg" alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 22%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-left)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,7,0.9) 0%, rgba(5,5,7,0.35) 50%, rgba(5,5,7,0.65) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--vignette)', pointerEvents: 'none' }} />
      <div className="tp-grain" style={{ position: 'absolute', inset: 0 }} />

      <div className="tp-container" style={{ position: 'relative', zIndex: 3 }}>
        <div style={{ maxWidth: 560 }} className="reveal">
          <Badge variant="blood" dot size="md" style={{ marginBottom: 22 }}>Now in production</Badge>
          <h2 className="tp-heading" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)', letterSpacing: 'var(--tracking-tight)', margin: '0 0 18px' }}>
            The cameras<br />kept rolling.
          </h2>
          <p className="tp-editorial" style={{ fontSize: 'var(--text-lg)', color: 'var(--bone-200)', margin: '0 0 32px', maxWidth: 440 }}>
            Be there when it drops. One email — the day the film is released. Nothing else.
          </p>

          {done ? (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '18px 22px',
              background: 'var(--surface-card)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-sm)', maxWidth: 460,
            }}>
              <span style={{ color: 'var(--gold-500)' }}><Mail size={20} /></span>
              <span style={{ fontFamily: 'var(--font-condensed)', fontWeight: 'var(--fw-medium)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', fontSize: 'var(--text-sm)', color: 'var(--bone-100)' }}>
                You're on the list. We'll be in touch.
              </span>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', gap: 10, alignItems: 'flex-end', flexWrap: 'wrap', maxWidth: 520 }}>
              <Input
                type="email" placeholder="your@email.com" aria-label="Email address"
                iconLeft={<Mail size={18} />} size="lg"
                value={email} onChange={(e) => setEmail(e.target.value)}
                style={{ flex: '1 1 240px' }}
              />
              <Button variant="primary" size="lg" type="submit" iconRight={<ArrowRight size={16} />}>Notify Me</Button>
            </form>
          )}
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 16 }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Capture });
