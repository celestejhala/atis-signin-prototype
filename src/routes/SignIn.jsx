import { useState } from 'react'
import Logo from '../components/Logo.jsx'
import Button from '../components/Button.jsx'
import Tooltip from '../components/Tooltip.jsx'
import SupportFooter from '../components/SupportFooter.jsx'

function MicrosoftMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <rect x="1" y="1" width="7.6" height="7.6" fill="#F25022" />
      <rect x="9.4" y="1" width="7.6" height="7.6" fill="#7FBA00" />
      <rect x="1" y="9.4" width="7.6" height="7.6" fill="#00A4EF" />
      <rect x="9.4" y="9.4" width="7.6" height="7.6" fill="#FFB900" />
    </svg>
  )
}

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 01-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4" />
      <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 009 18z" fill="#34A853" />
      <path d="M3.97 10.72A5.4 5.4 0 013.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 000 9c0 1.45.35 2.83.96 4.05l3.01-2.33z" fill="#FBBC05" />
      <path d="M9 3.58c1.32 0 2.5.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 00.96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z" fill="#EA4335" />
    </svg>
  )
}

// Non-functional fields — this is a visual-only prototype.
function Field({ label, type = 'text', trailing }) {
  return (
    <label className="block">
      <span className="text-[13px] text-slate">{label}</span>
      <div className="mt-1 flex items-center border-b border-slate/60 focus-within:border-ink">
        <input
          type={type}
          className="w-full bg-transparent py-2 text-[15px] text-ink outline-none placeholder:text-muted"
          autoComplete="off"
        />
        {trailing}
      </div>
    </label>
  )
}

export default function SignIn() {
  const [showPw, setShowPw] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_minmax(380px,40%)]">
        {/* ---------- Left: the form ---------- */}
        <section className="flex flex-col px-6 py-8 sm:px-12">
          <div className="mx-auto my-auto w-full max-w-md">
            <Logo />
            <h1 className="font-display mt-9 text-3xl text-ink sm:text-4xl">
              Sign in to ATIS
            </h1>

            {/* SSO providers (visual only) */}
            <div className="mt-7 space-y-3">
              <Button variant="outline" type="button">
                <MicrosoftMark />
                Continue with Microsoft
              </Button>
              <Button variant="outline" type="button">
                <GoogleMark />
                Continue with Google
              </Button>
            </div>

            <div className="my-6 flex items-center gap-4 text-[12px] text-muted">
              <span className="h-px flex-1 bg-line" />
              Or continue with email
              <span className="h-px flex-1 bg-line" />
            </div>

            {/* Email / password (visual only) */}
            <div className="space-y-5">
              <Field label="Email address" type="email" />
              <Field
                label="Password"
                type={showPw ? 'text' : 'password'}
                trailing={
                  <button
                    type="button"
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPw((v) => !v)}
                    className="px-1 text-slate hover:text-ink"
                  >
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M1.5 10S4.5 4.5 10 4.5 18.5 10 18.5 10 15.5 15.5 10 15.5 1.5 10 1.5 10z" stroke="currentColor" strokeWidth="1.3" />
                      <circle cx="10" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </button>
                }
              />

              <div className="flex items-center justify-between text-[13px]">
                <label className="flex cursor-pointer items-center gap-2 text-slate">
                  <input type="checkbox" className="h-4 w-4 rounded border-line accent-black" />
                  Remember me
                </label>
                <button type="button" className="font-medium text-ink underline underline-offset-2 hover:no-underline">
                  Forgot password?
                </button>
              </div>

              <Button type="button">Sign in</Button>
            </div>

            {/* New to ATIS */}
            <div className="my-6 flex items-center gap-4 text-[12px] text-muted">
              <span className="h-px flex-1 bg-line" />
              New to ATIS
              <span className="h-px flex-1 bg-line" />
            </div>

            <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[14px] text-slate">
              <button type="button" className="font-medium text-ink underline underline-offset-2 hover:no-underline">
                Create an account
              </button>
              <span className="text-muted">or</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                Join an existing org
                <Tooltip label="How to join an existing organization">
                  <p>
                    If an organization is already in ATIS, ask the
                    organization&rsquo;s admin to add you as a team member. Once
                    added, you&rsquo;ll receive an email to create a new account
                    or join with an existing one.
                  </p>
                  <p className="mt-3">
                    Not sure who to contact? Get in touch with ATIS Support at{' '}
                    <a
                      href="mailto:atissupport@travelalberta.com?subject=ATIS Support Request"
                      className="font-medium underline underline-offset-2"
                    >
                      atissupport@travelalberta.com
                    </a>{' '}
                    or 1-833-270-4232.
                  </p>
                </Tooltip>
              </span>
            </p>

            <div className="mt-10">
              <SupportFooter />
            </div>
          </div>
        </section>

        {/* ---------- Right: "what changed" guidance ---------- */}
        <aside className="flex flex-col bg-teal-100 px-6 py-8 sm:px-10 lg:px-12">
          <div className="my-auto max-w-md">
            <h2 className="font-display text-2xl leading-snug text-ink">
              As of November 5, 2025, sign-in has changed. Your old ATIS
              password no longer works.
            </h2>

            <div className="mt-7">
              <h3 className="font-display text-lg text-ink">
                First time signing in since the update?
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate">
                Use the email connected to your existing ATIS account with one of
                the options below. We&rsquo;ll automatically link your existing
                listings.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-xl text-ink">How to Sign-in:</h3>

              <div className="mt-4 space-y-5 text-[14px] leading-relaxed text-slate">
                <div className="border-b border-teal-200 pb-5">
                  <p className="font-semibold text-ink">
                    Google or Microsoft email (Gmail, Outlook, Office 365):
                  </p>
                  <p className="mt-1">
                    Select &ldquo;Continue with Google&rdquo; or &ldquo;Continue
                    with Microsoft.&rdquo;
                  </p>
                </div>

                <div className="border-b border-teal-200 pb-5">
                  <p className="font-semibold text-ink">
                    Already use the Multimedia Library or Grant Management Tool:
                  </p>
                  <p className="mt-1">
                    Sign in with that same email and password. If it&rsquo;s a
                    Google or Microsoft email address, select &ldquo;Continue
                    with Google&rdquo; or &ldquo;Continue with Microsoft.&rdquo;
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-ink">
                    Prefer email and password:
                  </p>
                  <p className="mt-1">
                    Select &ldquo;Create an account&rdquo; and set a new
                    password.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 flex items-start gap-2 text-[13px] text-slate">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                <path d="M8 7.2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="8" cy="4.8" r="0.9" fill="currentColor" />
              </svg>
              <span>
                Learn more about your{' '}
                <a
                  href="https://industry.travelalberta.com/travel-alberta-passport"
                  className="font-medium text-ink underline underline-offset-2"
                >
                  Travel Alberta Passport.
                </a>
              </span>
            </p>
          </div>

          <div className="mt-10 flex gap-5 text-[12px] text-muted">
            <a href="https://industry.travelalberta.com/resources/atis/atis-terms-service" className="hover:underline">
              Terms of Service
            </a>
            <a href="https://industry.travelalberta.com/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </aside>
      </div>
    </div>
  )
}
