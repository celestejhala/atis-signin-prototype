// Shared support line used on both screens.
export default function SupportFooter() {
  return (
    <div className="text-[13px] text-slate">
      <p className="mb-1 text-muted">For support</p>
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-medium">
        <a href="tel:18332704232" className="hover:underline">
          1-833-270-4232
        </a>
        <span className="text-line">·</span>
        <a
          href="mailto:atissupport@travelalberta.com?subject=ATIS Support Request"
          className="inline-flex items-center gap-1 hover:underline"
        >
          Email
          <span aria-hidden="true">→</span>
        </a>
      </p>
    </div>
  )
}
