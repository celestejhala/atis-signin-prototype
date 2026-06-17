import logo from '../assets/img/travel-alberta-logo.png'

export default function Logo({ className = '' }) {
  return (
    <img
      src={logo}
      alt="Travel Alberta"
      className={`h-auto w-40 select-none ${className}`}
      draggable="false"
    />
  )
}
