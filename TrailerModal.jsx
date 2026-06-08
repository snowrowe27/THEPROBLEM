/* THE PROBLEM — trailer lightbox. Drop a YouTube/Vimeo embed URL in TRAILER_URL. */
function TrailerModal({ open, onClose, url }) {
  const { X, PlaySolid } = window;
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 'var(--z-modal)',
      background: 'rgba(3,3,4,0.92)', backdropFilter: 'var(--blur-glass)', WebkitBackdropFilter: 'var(--blur-glass)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--gutter)',
      animation: 'tp-fade var(--dur-base) var(--ease-out)',
    }}>
      <button onClick={onClose} aria-label="Close" style={{
        position: 'absolute', top: 22, right: 24, width: 44, height: 44, borderRadius: 'var(--radius-xs)',
        background: 'transparent', border: '1px solid var(--border-soft)', color: 'var(--bone-100)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
      }}><X size={20} /></button>

      <div onClick={(e) => e.stopPropagation()} style={{
        width: 'min(1120px, 100%)', aspectRatio: '16 / 9', background: '#000',
        border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-sm)', overflow: 'hidden',
        boxShadow: 'var(--shadow-card)', position: 'relative',
      }}>
        {url ? (
          <iframe src={url} title="THE PROBLEM — Trailer" allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen style={{ width: '100%', height: '100%', border: 0 }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0 }}>
            <img src="/assets/imagery/broner-glove-face.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-bottom)' }} />
            <div className="tp-grain" style={{ position: 'absolute', inset: 0 }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, zIndex: 2 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 78, height: 78, borderRadius: '50%', border: '1.5px solid var(--border-strong)', color: 'var(--bone-50)' }}>
                <PlaySolid size={30} />
              </span>
              <span style={{ fontFamily: 'var(--font-condensed)', fontWeight: 'var(--fw-medium)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                Trailer dropping soon
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
Object.assign(window, { TrailerModal });
