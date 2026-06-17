import { useEffect, useRef, useState } from 'react'

// Info popover triggered by an ⓘ button. Toggles on click; dismisses on
// outside-click or Esc. Anchored to the trigger, repositions on small screens.
export default function Tooltip({ label = 'More information', children }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <span ref={wrapRef} className="relative inline-flex align-middle">
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid h-4 w-4 place-items-center rounded-full text-muted transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
          <path d="M8 7.2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="8" cy="4.8" r="0.9" fill="currentColor" />
        </svg>
      </button>
      {open && (
        <div
          role="tooltip"
          className="absolute bottom-full left-1/2 z-40 mb-2 w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 rounded-lg border border-line bg-white p-4 text-left text-[13px] leading-relaxed text-slate shadow-xl"
        >
          {children}
          <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-line bg-white" />
        </div>
      )}
    </span>
  )
}
