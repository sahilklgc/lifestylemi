import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | LifestyleMI",
  description: "Learn about the cookies LifestyleMI uses and how to manage your preferences.",
};

interface SectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

function Section({ number, title, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
        {number}. {title}
      </h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

export default function CookiePolicyPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/30 pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">Cookie Policy</h1>
          <p className="text-xl text-muted-foreground">
            Effective Date: {currentDate} &nbsp;|&nbsp; Last Updated: {currentDate}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground leading-relaxed mb-10 text-base border-l-4 border-primary pl-4 bg-muted/50 py-3 rounded-r-md">
            This Cookie Policy explains what cookies and similar browser storage technologies
            are, how LifestyleMI uses them on this website, and what choices you have. It
            supplements our{" "}
            <Link
              href="/privacy"
              className="text-primary font-medium hover:text-primary/80 underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            , which contains broader information on how we handle your personal data.
          </p>

          {/* 1 */}
          <Section number="1" title="What Are Cookies">
            <p>
              Cookies are small text files placed on your device by a website when you visit it.
              They are sent back to the originating website on each subsequent visit, or to another
              website that recognizes that cookie. Cookies are widely used to make websites work
              efficiently and to provide information to website owners.
            </p>
            <p>Cookies can be:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <span className="font-medium text-foreground">First-party cookies</span> &mdash; set
                directly by the website you are visiting (i.e., lifestylemi.com).
              </li>
              <li>
                <span className="font-medium text-foreground">Third-party cookies</span> &mdash; set
                by a domain other than the one you are visiting, typically via content or services
                embedded in the page.
              </li>
              <li>
                <span className="font-medium text-foreground">Session cookies</span> &mdash; deleted
                automatically when you close your browser.
              </li>
              <li>
                <span className="font-medium text-foreground">Persistent cookies</span> &mdash;
                remain on your device until they expire or you delete them.
              </li>
            </ul>
            <p>
              Cookies are not executable programs. They cannot carry viruses, install malware, or
              access files on your device.
            </p>
          </Section>

          {/* 2 */}
          <Section number="2" title="Other Browser Storage Technologies">
            <p>
              In addition to cookies, websites can use other browser-based storage mechanisms.
              We use one of these on this Site:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <span className="font-medium text-foreground">Local Storage</span> &mdash; similar
                to cookies, but stored in your browser&rsquo;s local storage rather than as an
                HTTP cookie. Local storage data is not automatically sent to the server with each
                request. It persists until explicitly cleared by the website or by you in your
                browser settings.
              </li>
            </ul>
            <p>
              We use local storage (not cookies) to remember your consent preference. See
              Section 4 for details.
            </p>
          </Section>

          {/* 3 */}
          <Section number="3" title="Legal Basis for Using Cookies">
            <p>
              Applicable privacy laws &mdash; including the EU ePrivacy Directive (EU Cookie Law),
              the General Data Protection Regulation (GDPR), and the California Consumer Privacy
              Act (CCPA/CPRA) &mdash; require us to be transparent about what we store on your
              device and to obtain consent before placing non-essential cookies or similar
              technologies.
            </p>
            <p>We rely on the following legal bases:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <span className="font-medium text-foreground">Consent</span> &mdash; for any
                optional or functional storage technologies. You provide consent via the banner
                that appears on your first visit. You may withdraw consent at any time (see
                Section 6).
              </li>
              <li>
                <span className="font-medium text-foreground">Legitimate interests</span> &mdash;
                we store your consent preference so you are not asked again on every visit,
                which is a reasonable operational interest.
              </li>
            </ul>
          </Section>

          {/* 4 */}
          <Section number="4" title="What We Store on Your Device">
            <p>
              We keep our use of cookies and browser storage minimal. Below is a complete and
              accurate inventory of what this Site stores on your device.
            </p>

            {/* First-party cookies */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                First-Party HTTP Cookies
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                We currently set <span className="font-medium text-foreground">no first-party HTTP cookies</span> on
                the lifestylemi.com domain. No cookie files are written to your browser by this
                website.
              </p>
            </div>

            {/* Local Storage */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500"></span>
                Local Storage (First-Party)
              </h3>
              <p className="text-sm mb-3 text-muted-foreground">
                We use one local storage entry to remember your cookie consent choice. This entry
                is strictly necessary for the consent banner to function correctly.
              </p>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-left">
                  <thead className="bg-muted text-xs text-muted-foreground uppercase tracking-wide">
                    <tr>
                      <th className="py-3 px-4">Key</th>
                      <th className="py-3 px-4">Provider</th>
                      <th className="py-3 px-4">Purpose</th>
                      <th className="py-3 px-4">Value</th>
                      <th className="py-3 px-4">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="bg-background divide-y divide-border">
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-foreground">
                        cookie_consent
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">LifestyleMI</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        Stores your cookie consent preference so the banner does not reappear on
                        every visit
                      </td>
                      <td className="py-3 px-4 font-mono text-sm text-muted-foreground">
                        &ldquo;accepted&rdquo; or &ldquo;declined&rdquo;
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        Until cleared (up to 13 months)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Third-party */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary"></span>
                Third-Party Cookies (Google Fonts)
              </h3>
              <p className="text-sm mb-3 text-muted-foreground">
                Our Site loads typefaces from Google Fonts (hosted on{" "}
                <span className="font-mono text-xs">fonts.googleapis.com</span>). When your
                browser requests font files from Google&rsquo;s servers, Google may set cookies
                on the{" "}
                <span className="font-mono text-xs">google.com</span> or{" "}
                <span className="font-mono text-xs">fonts.googleapis.com</span> domain &mdash; not
                on the <span className="font-mono text-xs">lifestylemi.com</span> domain. These
                are managed entirely by Google and are subject to{" "}
                <span className="font-medium text-foreground">Google&rsquo;s own Privacy Policy</span>.
              </p>
              <p className="text-sm text-muted-foreground">
                Modern browsers block third-party cookies from google.com by default in many
                configurations. This service is used solely for typography and does not involve
                advertising or behavioral tracking on our behalf.
              </p>
            </div>

            <p className="text-sm mt-5 text-muted-foreground">
              We do not use advertising cookies, social media tracking pixels, behavioral
              profiling cookies, or analytics cookies of any kind.
            </p>
          </Section>

          {/* 5 */}
          <Section number="5" title="What Happens When You Decline">
            <p>
              If you click <span className="font-medium text-foreground">Decline</span> on the
              consent banner:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                Your choice is saved in local storage (key:{" "}
                <span className="font-mono text-xs">cookie_consent</span>, value:{" "}
                <span className="font-mono text-xs">&ldquo;declined&rdquo;</span>) so the banner
                does not reappear.
              </li>
              <li>
                No additional cookies or storage entries are set by us as a result of your
                visit.
              </li>
              <li>
                You can still browse and use all features of the Site, including submitting an
                inquiry through our Contact Us form.
              </li>
            </ul>
            <p>
              Declining does not affect the loading of Google Fonts, as font files are a
              functional part of the Site&rsquo;s visual design. Google&rsquo;s handling of
              any data associated with font delivery is governed by their own policies.
            </p>
          </Section>

          {/* 6 */}
          <Section number="6" title="Managing and Withdrawing Consent">
            <p>
              You can withdraw or change your consent at any time. Because we use local
              storage rather than cookies for consent preference, the steps differ slightly
              from typical cookie management:
            </p>

            <p className="font-medium text-foreground mt-6">To reset your consent preference (re-show the banner):</p>
            <p>
              Clear the local storage for this site in your browser. On your next visit, the
              consent banner will reappear and you can make a new choice. Steps by browser:
            </p>

            <div className="bg-muted/30 rounded-xl border border-border p-5 mt-4 mb-6">
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="font-medium text-foreground">Chrome:</span>{" "}
                  DevTools (F12) &rarr; Application &rarr; Storage &rarr; Local Storage &rarr;
                  right-click &rarr; Clear; or Settings &rarr; Privacy and Security &rarr; Cookies
                  and other site data &rarr; See all site data and permissions &rarr; search for
                  lifestylemi.com &rarr; Delete
                </li>
                <li>
                  <span className="font-medium text-foreground">Firefox:</span>{" "}
                  Settings &rarr; Privacy &amp; Security &rarr; Cookies and Site Data &rarr; Manage
                  Data &rarr; search for lifestylemi.com &rarr; Remove Selected
                </li>
                <li>
                  <span className="font-medium text-foreground">Safari:</span>{" "}
                  Preferences &rarr; Privacy &rarr; Manage Website Data &rarr; search for
                  lifestylemi.com &rarr; Remove
                </li>
                <li>
                  <span className="font-medium text-foreground">Edge:</span>{" "}
                  Settings &rarr; Cookies and site permissions &rarr; Cookies and data stored
                  &rarr; See all cookies and site data &rarr; search for lifestylemi.com &rarr;
                  Delete
                </li>
              </ul>
            </div>

            <p className="font-medium text-foreground mt-4">To block all cookies and local storage from this Site:</p>
            <p>
              Use your browser&rsquo;s site-level blocking controls (available in all major
              browsers under Privacy or Security settings). Note that blocking all storage
              will cause the consent banner to appear on every visit, as no preference can
              be saved.
            </p>

            <p className="font-medium text-foreground mt-4">To control third-party Google cookies:</p>
            <p>
              Most modern browsers block third-party cookies by default. You can also adjust
              Google&rsquo;s ad and data settings at{" "}
              <span className="font-mono text-xs">myaccount.google.com/data-and-privacy</span>.
            </p>
          </Section>

          {/* 7 */}
          <Section number="7" title="Do Not Track">
            <p>
              Some browsers send a &ldquo;Do Not Track&rdquo; (DNT) signal to websites. Because
              there is no legally recognized standard for how websites must respond to DNT signals,
              we do not currently alter our data practices in response to them. Our storage
              practices are fully described in this policy, regardless of any DNT signal.
            </p>
          </Section>

          {/* 8 */}
          <Section number="8" title="Changes to This Policy">
            <p>
              We may update this Cookie Policy if we add new technologies, third-party services,
              or if applicable law changes. Any updates will be reflected here with a revised
              &ldquo;Last Updated&rdquo; date. If we introduce new cookies or storage mechanisms
              that require your consent, the consent banner will reappear to collect fresh
              consent before those technologies are activated.
            </p>
            <p>
              Prior versions of this policy are available upon request via our{" "}
              <Link
                href="/contact"
                className="text-primary font-medium hover:text-primary/80 underline underline-offset-2"
              >
                Contact Us page
              </Link>
              .
            </p>
          </Section>

          {/* 9 */}
          <Section number="9" title="Contact">
            <p>
              If you have questions about how we use cookies or browser storage, please visit our{" "}
              <Link
                href="/contact"
                className="text-primary font-medium hover:text-primary/80 underline underline-offset-2"
              >
                Contact Us page
              </Link>{" "}
              and include &ldquo;Cookie Policy&rdquo; in your message. You can also review our{" "}
              <Link
                href="/privacy"
                className="text-primary font-medium hover:text-primary/80 underline underline-offset-2"
              >
                Privacy Policy
              </Link>{" "}
              for broader information on how we handle your personal data.
            </p>
          </Section>
        </div>
      </article>
    </div>
  );
}
