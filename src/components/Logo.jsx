import logo from '../assets/img/travel-alberta-logo.png'

export default function Logo({ className = '' }) {
  return (
    <img
      src={logo}
      alt="Travel Alberta"
      className={`h-8 w-auto select-none ${className}`}
      draggable="false"
    />
  )
}
