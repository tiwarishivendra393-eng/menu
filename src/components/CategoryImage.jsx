const icons = {
  pizza: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="28" fill="#FED7AA" />
      <path d="M32 8C18 8 8 22 8 34c0 8 6 16 14 20l10-46z" fill="#F97316" />
      <circle cx="24" cy="28" r="3" fill="#DC2626" />
      <circle cx="34" cy="22" r="3" fill="#DC2626" />
      <circle cx="30" cy="36" r="3" fill="#DC2626" />
      <circle cx="40" cy="32" r="2.5" fill="#16A34A" />
    </svg>
  ),
  burgers: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="10" y="14" width="44" height="8" rx="4" fill="#D97706" />
      <rect x="10" y="24" width="44" height="6" rx="3" fill="#78350F" />
      <rect x="10" y="32" width="44" height="8" rx="4" fill="#FBBF24" />
      <rect x="10" y="42" width="44" height="8" rx="4" fill="#D97706" />
      <rect x="14" y="28" width="36" height="3" rx="1.5" fill="#16A34A" />
    </svg>
  ),
  "garlic-bread": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <ellipse cx="32" cy="36" rx="24" ry="14" fill="#FDE68A" />
      <path d="M14 34c8-10 28-10 36 0" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
      <circle cx="22" cy="32" r="2" fill="#F59E0B" />
      <circle cx="32" cy="30" r="2" fill="#F59E0B" />
      <circle cx="42" cy="32" r="2" fill="#F59E0B" />
    </svg>
  ),
  sandwiches: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="12" y="18" width="40" height="8" rx="4" fill="#FDE68A" />
      <rect x="12" y="28" width="40" height="6" rx="3" fill="#16A34A" />
      <rect x="12" y="36" width="40" height="8" rx="4" fill="#FBBF24" />
      <rect x="12" y="46" width="40" height="8" rx="4" fill="#FDE68A" />
    </svg>
  ),
  "grilled-sandwich": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="12" y="20" width="40" height="24" rx="6" fill="#FBBF24" />
      <path d="M18 28h28M18 34h28M18 40h28" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
      <rect x="12" y="20" width="40" height="24" rx="6" stroke="#D97706" strokeWidth="2" />
    </svg>
  ),
  frankie: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <ellipse cx="32" cy="32" rx="22" ry="12" fill="#FDE68A" />
      <rect x="18" y="28" width="28" height="8" rx="4" fill="#F97316" />
      <path d="M12 32h8M44 32h8" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  "bread-pizza": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="14" y="22" width="36" height="24" rx="4" fill="#FDE68A" />
      <circle cx="26" cy="34" r="3" fill="#DC2626" />
      <circle cx="38" cy="32" r="3" fill="#DC2626" />
      <circle cx="32" cy="40" r="2.5" fill="#F97316" />
    </svg>
  ),
  "chocolate-sandwich": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="14" y="20" width="36" height="24" rx="4" fill="#92400E" />
      <rect x="18" y="24" width="28" height="16" rx="2" fill="#78350F" />
      <path d="M18 30h28M18 36h28" stroke="#A16207" strokeWidth="2" />
    </svg>
  ),
  "melting-sandwich": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="12" y="24" width="40" height="20" rx="4" fill="#FBBF24" />
      <path d="M20 36c4 6 8 6 12 0s8-6 12 0" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      <rect x="12" y="20" width="40" height="8" rx="4" fill="#FDE68A" />
    </svg>
  ),
  "chinese-bhel": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <ellipse cx="32" cy="40" rx="20" ry="8" fill="#E5E7EB" />
      <path d="M16 38c6-14 26-14 32 0" fill="#F97316" />
      <circle cx="24" cy="34" r="2" fill="#FBBF24" />
      <circle cx="32" cy="32" r="2" fill="#22C55E" />
      <circle cx="40" cy="34" r="2" fill="#DC2626" />
    </svg>
  ),
  "sev-puri-chat": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="34" r="16" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
      <circle cx="26" cy="32" r="4" fill="#FDE68A" />
      <circle cx="36" cy="30" r="4" fill="#FDE68A" />
      <circle cx="32" cy="38" r="4" fill="#FDE68A" />
      <path d="M20 28c2-4 6-6 12-6" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  "bhel-puri-chat": (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M18 42c4-16 24-16 28 0" fill="#FBBF24" />
      <ellipse cx="32" cy="42" rx="18" ry="6" fill="#E5E7EB" />
      <circle cx="24" cy="36" r="2" fill="#F97316" />
      <circle cx="32" cy="34" r="2" fill="#22C55E" />
      <circle cx="40" cy="36" r="2" fill="#DC2626" />
    </svg>
  ),
}

const defaultIcon = (
  <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <circle cx="32" cy="32" r="24" fill="#FED7AA" />
    <path d="M20 32h24M32 20v24" stroke="#EA580C" strokeWidth="4" strokeLinecap="round" />
  </svg>
)

function CategoryImage({ categoryId, className }) {
  return (
    <div className={className} aria-hidden="true">
      {icons[categoryId] ?? defaultIcon}
    </div>
  )
}

export default CategoryImage
