/* THE PROBLEM — site footer */
function SiteFooter() {
  const { Instagram, XSocial, Youtube } = window;
  const socials = [
    { Icon: Instagram, label: 'Instagram' },
    { Icon: XSocial, label: 'X' },
    { Icon: Youtube, label: 'YouTube' },
  ];
  return (
    <footer style={{ background: 'var(--bg-letterbox)', borderTop: '1px solid var(--border-hairline)' }}>
      <div className="tp-container" style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="footer-grid" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <div className="tp-wordmark" style={{ fontSize: 40 }}>
              <span className="tp-the">The</span>Problem
            </div>
            <p style={{
              fontFamily: 'var(--font-condensed)', fontWeight: 'var(--fw-light)',
              textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)',
              fontSize: 'var(--text-2xs)', color: 'var(--text-muted)', marginTop: 14,
            }}>A Fordom Studio Production &nbsp;·&nbsp; The story of Adrien Broner</p>
          </div>

          <div style={{ display: 'flex', gap: 14 }}>
            {socials.map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="social-btn" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 42, height: 42, borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--border-soft)', color: 'var(--text-secondary)',
                transition: 'color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
              }}><Icon size={18} /></a>
            ))}
          </div>
        </div>

        <hr className="tp-rule" style={{ margin: '32px 0 22px' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-condensed)', fontWeight: 'var(--fw-medium)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>
            NR &nbsp;·&nbsp; Documentary Feature &nbsp;·&nbsp; Q2 2025
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-2xs)', color: 'var(--ink-500)' }}>
            © 2026 Fordom Studio. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { SiteFooter });
