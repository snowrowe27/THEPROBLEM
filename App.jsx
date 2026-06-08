/* THE PROBLEM — howtoblow40million.com — app shell */

// ▶ PASTE YOUR TRAILER EMBED URL HERE (YouTube/Vimeo "embed" form). Leave '' for the placeholder.
const TRAILER_URL = '';

function App() {
  const { Nav, Hero, Turn, Capture, SiteFooter, TrailerModal } = window;
  const [trailer, setTrailer] = React.useState(false);

  const openTrailer = () => setTrailer(true);
  const goNotify = () => {
    const el = document.getElementById('notify');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: 'smooth' });
  };

  // scroll-reveal
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.18 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <React.Fragment>
      <Nav onTrailer={openTrailer} onNotify={goNotify} />
      <main>
        <Hero onTrailer={openTrailer} onNotify={goNotify} />
        <Turn />
        <Capture onNotify={goNotify} />
      </main>
      <SiteFooter />
      <TrailerModal open={trailer} onClose={() => setTrailer(false)} url={TRAILER_URL} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
