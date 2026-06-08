/* THE PROBLEM — site icon set (Lucide-style, 1.75px stroke, currentColor) */
const Icon = ({ d, size = 18, fill = 'none', stroke = 'currentColor', sw = 1.75, children, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke}
    strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {d ? <path d={d} /> : children}
  </svg>
);

const PlaySolid = ({ size = 16, ...r }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...r}><path d="M7 4.5v15l13-7.5z" /></svg>
);
const Mail = (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m3.5 6.5 8.5 6 8.5-6" /></Icon>;
const ArrowRight = (p) => <Icon d="M5 12h14M13 6l6 6-6 6" {...p} />;
const ArrowDown = (p) => <Icon d="M12 5v14M6 13l6 6 6-6" {...p} />;
const Volume = (p) => <Icon {...p}><path d="M11 5 6 9H3v6h3l5 4z" /><path d="M16 9a4 4 0 0 1 0 6" /><path d="M19 6a8 8 0 0 1 0 12" /></Icon>;
const X = (p) => <Icon d="M6 6l12 12M18 6L6 18" {...p} />;
const Instagram = (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></Icon>;
const XSocial = (p) => <Icon d="M4 4l16 16M20 4 4 20" {...p} />;
const Youtube = (p) => <Icon {...p}><rect x="2.5" y="6" width="19" height="12" rx="3.5" /><path d="M10 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" /></Icon>;

Object.assign(window, { Icon, PlaySolid, Mail, ArrowRight, ArrowDown, Volume, X, Instagram, XSocial, Youtube });
