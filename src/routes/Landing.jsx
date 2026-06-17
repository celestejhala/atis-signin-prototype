import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo.jsx'
import Button from '../components/Button.jsx'
import SupportFooter from '../components/SupportFooter.jsx'
import photoBike from '../assets/img/photo-bike.jpg'
import photoClimbing from '../assets/img/photo-climbing.jpg'

export default function Landing() {
  const navigate = useNavigate()
  const [orgOpen, setOrgOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Live layout: fixed-width left column, flexible teal column, full height */}
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[26rem_1fr] lg:grid-cols-[36rem_1fr]">
        {/* ---------- Left: sign-in intro ---------- */}
        <section className="flex flex-col px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
          <div className="w-full max-w-md">
            <Logo className="lg:w-44" />

            <h1 className="font-display mt-8 text-4xl text-ink sm:text-5xl lg:mt-12">
              Meet the new
              <br />
              ATIS sign-in
            </h1>

            <p className="mt-5 text-[15px] leading-relaxed text-slate lg:text-base">
              ATIS (Alberta Tourism Information Service) is evolving as Travel
              Alberta introduces a new sign-in system (SSO). Use one account to
              access all our digital services; it&rsquo;s easier, safer, and
              more connected.{' '}
              <a
                href="https://industry.travelalberta.com/travel-alberta-passport"
                className="font-medium text-ink underline underline-offset-2"
              >
                Learn more about your Travel Alberta Passport.
              </a>
            </p>

            <div className="mt-8 max-w-md">
              <Button onClick={() => navigate('/signin')}>
                Sign in or create account
              </Button>

              {/* Accordion: joining an existing org */}
              <div className="mt-4 rounded-lg border border-line bg-cloud/60">
                <button
                  type="button"
                  aria-expanded={orgOpen}
                  aria-controls="org-panel"
                  onClick={() => setOrgOpen((v) => !v)}
                  className="flex w-full items-center gap-2 px-4 py-3 text-left text-[14px] font-medium text-ink"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 text-slate"
                  >
                    <circle cx="9" cy="9" r="7.25" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M9 8v4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="9" cy="5.4" r="1" fill="currentColor" />
                  </svg>
                  Are you joining an existing org?
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className={`ml-auto shrink-0 text-slate transition-transform ${orgOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {/* Animated disclosure: grid 0fr->1fr smoothly grows height
                    downward without shifting content above the trigger.
                    `inert` when collapsed keeps hidden links out of tab/AT. */}
                <div
                  id="org-panel"
                  role="region"
                  aria-label="Joining an existing org"
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    orgOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                  {...(orgOpen ? {} : { inert: '' })}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-3 border-t border-line px-4 pb-4 pt-3 text-[13px] leading-relaxed text-slate">
                      <p>
                        In order to access listings already in ATIS, you&rsquo;ll
                        need to request an invitation.
                      </p>
                      <p>
                        Ask the organization&rsquo;s admin to add you as a team
                        member by accessing &ldquo;My Account &gt; Organization
                        Details &gt; Manage Team Members&rdquo;. Once added,
                        you&rsquo;ll receive an email to create a new account or
                        join with an existing one.
                      </p>
                      <p>
                        Not sure who to contact? Get in touch with ATIS Support
                        at{' '}
                        <a
                          href="mailto:atissupport@travelalberta.com?subject=ATIS Support Request"
                          className="font-medium text-ink underline underline-offset-2"
                        >
                          atissupport@travelalberta.com
                        </a>{' '}
                        or{' '}
                        <a
                          href="tel:18332704232"
                          className="font-medium text-ink underline underline-offset-2"
                        >
                          1-833-270-4232
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-10">
            <SupportFooter />
          </div>
        </section>

        {/* ---------- Right: marketing column ---------- */}
        <section className="flex flex-col bg-teal-100 px-6 py-10 sm:px-10 lg:px-12 lg:py-16">
          <div className="w-full max-w-2xl">
            {/* Wide landscape photo + tall portrait photo, matching the live grid */}
            <div className="grid grid-cols-[1fr_33%] items-start gap-3">
              <img
                src={photoBike}
                alt="Cyclist preparing for a ride"
                className="aspect-[1.7] w-full rounded-lg object-cover"
                loading="lazy"
              />
              <img
                src={photoClimbing}
                alt="Climber with rope"
                className="aspect-[0.85] w-full rounded-lg object-cover"
                loading="lazy"
              />
            </div>

            <h2 className="font-display mt-8 text-3xl text-ink">
              Help travellers find you
            </h2>

            <div className="mt-4 max-w-md space-y-4 text-[15px] leading-relaxed text-slate">
              <p>
                ATIS is a free service that drives traffic to your website or
                social accounts and customers to your doorstep. Create your
                tourism listing and get seen by millions of annual visitors on
                travelalberta.com and partner websites.
              </p>
              <p>
                Your listing helps travellers discover your offerings when
                planning their trip &mdash; whether they visit travelalberta.com,
                search the web, or ask their favourite AI assistant.
              </p>
              <p>
                Create or update your business listing today. It&rsquo;s free
                and easy to get started.
              </p>
              <p>
                Not sure if ATIS is right for you?{' '}
                <a
                  href="https://industry.travelalberta.com/programs-and-services/list-your-business-atis"
                  className="font-medium text-ink underline underline-offset-2"
                >
                  Learn more about ATIS and how it works.
                </a>
              </p>
            </div>
          </div>

          <div className="mt-auto flex gap-5 pt-10 text-[12px] text-muted">
            <a href="https://industry.travelalberta.com/resources/atis/atis-terms-service" className="hover:underline">
              Terms of Service
            </a>
            <a href="https://industry.travelalberta.com/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
