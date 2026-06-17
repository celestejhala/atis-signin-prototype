// Solid black primary button matching the live ATIS CTA styling.
// `as` lets the same look render as a <button> or a routed element.
export default function Button({
  as: Comp = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const base =
    'inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-[15px] font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/60 active:scale-[0.99]'
  const variants = {
    primary: 'bg-ink text-white hover:bg-[#1a1a1a] active:bg-black',
    outline:
      'border border-line bg-white text-ink hover:bg-cloud active:bg-[#efefef]',
  }
  return (
    <Comp className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Comp>
  )
}
