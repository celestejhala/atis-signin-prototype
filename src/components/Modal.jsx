import { useEffect } from 'react'

// Centered dialog over a dimmed backdrop. Closes on Esc, backdrop click, or ✕.
export default function Modal({ open, onClose, title, children, footer }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-full text-slate transition hover:bg-cloud"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
        <div className="px-7 pb-7 pt-8 text-center">
          <h2 className="font-display text-xl text-ink">{title}</h2>
          <div className="mt-4 space-y-4 text-[14px] leading-relaxed text-slate">
            {children}
          </div>
        </div>
        {footer && <div className="px-7 pb-7">{footer}</div>}
      </div>
    </div>
  )
}
