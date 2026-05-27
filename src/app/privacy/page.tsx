import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | LifestyleMI",
  description: "Learn how LifestyleMI collects, uses, and protects your personal information.",
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

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Effective Date: {currentDate} &nbsp;|&nbsp; Last Updated: {currentDate}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground leading-relaxed mb-10 text-base border-l-4 border-primary pl-4 bg-muted/50 py-3 rounded-r-md">
            LifestyleMI (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
            protecting your privacy. This Privacy Policy describes what personal information we collect
            when you visit{" "}
            <span className="font-medium text-foreground">www.lifestylemi.com</span> (the
            &ldquo;Site&rdquo;), how we use and protect it, and the choices available to you. By
            using the Site you acknowledge you have read and understood this policy.
          </p>

          {/* 1 */}
          <Section number="1" title="Scope of This Policy">
            <p>
              This policy applies to all visitors and users of the Site, regardless of location.
              It covers personal information collected through:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Our Contact Us form</li>
              <li>Automatic server-side logging when you browse the Site</li>
              <li>Cookies and similar technologies (see Section 6)</li>
            </ul>
            <p>
              It does not apply to information collected offline or through channels other than the
              Site.
            </p>
          </Section>

          {/* 2 */}
          <Section number="2" title="Information We Collect">
            <p className="font-medium text-foreground">A. Information You Provide</p>
            <p>
              We only collect the information you voluntarily submit through our Contact Us form.
              This may include:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Full name (required)</li>
              <li>Email address (required)</li>
              <li>Phone number (optional)</li>
              <li>Product or service of interest (required)</li>
              <li>Message content (required)</li>
            </ul>
            <p>
              We do not create user accounts, collect payment or financial information, or require
              you to register to browse the Site.
            </p>

            <p className="font-medium text-foreground mt-6">B. Information Collected Automatically</p>
            <p>
              When you visit the Site, our web server and hosting infrastructure automatically
              record certain technical information, including:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring URL (the page that linked you to our Site)</li>
              <li>Pages visited and time spent on each page</li>
              <li>Date and time of your request</li>
              <li>HTTP status codes and response sizes</li>
            </ul>
            <p>
              This information is collected in standard server access logs. It is used exclusively
              for security monitoring, diagnosing technical issues, and understanding aggregate
              traffic patterns. It is not used to build individual behavioral profiles or linked to
              any personally identifiable information unless required to investigate a security
              incident.
            </p>

            <p className="font-medium text-foreground mt-6">C. Information We Do Not Collect</p>
            <p>We do not collect:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Payment card or financial account information</li>
              <li>Government-issued identification numbers</li>
              <li>Biometric data</li>
              <li>Precise geolocation data</li>
              <li>Information from social media profiles</li>
            </ul>
          </Section>

          {/* 3 */}
          <Section number="3" title="Legal Basis for Processing (GDPR)">
            <p>
              If you are located in the European Economic Area (EEA), United Kingdom, or
              Switzerland, we process your personal information under the following legal bases
              as defined by the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <span className="font-medium text-foreground">Legitimate interests</span> &mdash; to
                respond to your inquiry, maintain the security and proper operation of the Site,
                and keep records of communications for our legitimate business purposes.
              </li>
              <li>
                <span className="font-medium text-foreground">Consent</span> &mdash; for non-essential
                cookies, which you may withdraw at any time via our cookie preference banner.
              </li>
              <li>
                <span className="font-medium text-foreground">Legal obligation</span> &mdash; where
                we are required to retain or disclose information by applicable law.
              </li>
            </ul>
            <p>
              If you are not in one of the regions listed above, applicable local law governs
              our processing. See Section 17 (Governing Law) for details.
            </p>
          </Section>

          {/* 4 */}
          <Section number="4" title="How We Use Your Information">
            <p>Information collected through the Contact Us form is used solely to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Respond to your product and service inquiries</li>
              <li>Provide relevant information about LifestyleMI offerings</li>
              <li>Follow up on prior communications at your request</li>
              <li>Maintain internal records of customer interactions</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
            <p>
              Automatically collected technical data (server logs) is used to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Monitor and maintain Site security and performance</li>
              <li>Diagnose technical errors</li>
              <li>Understand aggregate, anonymous traffic patterns</li>
            </ul>
            <p>
              We will not use your information for automated decision-making or profiling that
              produces legal or similarly significant effects.
            </p>
          </Section>

          {/* 5 */}
          <Section number="5" title="How We Share Your Information">
            <p>
              We do not sell, rent, trade, or otherwise transfer your personal information to
              third parties for their own marketing or advertising purposes &mdash; ever.
            </p>
            <p>We may share your information only in the following limited circumstances:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <span className="font-medium text-foreground">Service providers</span> &mdash; trusted
                vendors who assist us in operating the Site (e.g., web hosting, email delivery).
                These providers are contractually prohibited from using your data for any purpose
                other than performing services on our behalf.
              </li>
              <li>
                <span className="font-medium text-foreground">Legal requirements</span> &mdash; when
                we believe disclosure is required by law, court order, or governmental authority,
                or to protect the rights, property, or safety of LifestyleMI, our users, or the
                public.
              </li>
              <li>
                <span className="font-medium text-foreground">Business transfers</span> &mdash; in
                connection with a merger, acquisition, or sale of all or substantially all of our
                assets, in which case the successor entity would be bound by the terms of this
                policy or required to obtain your consent if they intend to use your data in a
                materially different way.
              </li>
            </ul>
          </Section>

          {/* 6 */}
          <Section number="6" title="Browser Storage and Tracking Technologies">
            <p>
              Our Site does not set first-party HTTP cookies. We use browser{" "}
              <span className="font-medium text-foreground">local storage</span> for one purpose
              only:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <span className="font-medium text-foreground">Consent preference</span> &mdash; a
                single local storage entry (<span className="font-mono text-xs">cookie_consent</span>)
                records whether you accepted or declined our cookie banner, so we do not prompt
                you again on every visit.
              </li>
            </ul>
            <p>
              We do not use advertising cookies, behavioral tracking cookies, analytics cookies,
              or third-party retargeting technologies of any kind.
            </p>
            <p>
              Google Fonts (used for typography) may set cookies on Google&rsquo;s own domains
              when your browser fetches font files, but no such cookies are set on the
              lifestylemi.com domain. For a full inventory of what is stored on your device and
              how to manage it, please read our{" "}
              <Link
                href="/cookie-policy"
                className="text-primary font-medium hover:text-primary/80 underline underline-offset-2"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </Section>

          {/* 7 */}
          <Section number="7" title="Third-Party Services">
            <p>
              Our Site integrates a limited number of third-party services. Each third party
              has its own privacy practices, which we encourage you to review:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <span className="font-medium text-foreground">Google Fonts</span> &mdash; our Site
                loads typefaces hosted by Google. When your browser requests a font file, Google
                may process your IP address. This is a functional service used solely for
                typography and does not involve advertising or behavioral tracking. See
                Google&rsquo;s Privacy Policy for details.
              </li>
              <li>
                <span className="font-medium text-foreground">Web hosting provider</span> &mdash;
                our hosting infrastructure processes the server log data described in Section 2(B).
                Hosting providers are bound by data processing agreements that restrict their use
                of this data.
              </li>
            </ul>
            <p>
              We do not currently use third-party analytics platforms, advertising networks, or
              social media tracking pixels. If this changes, this policy will be updated before
              any such services are deployed.
            </p>
          </Section>

          {/* 8 */}
          <Section number="8" title="Do Not Track">
            <p>
              Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) signal. Because there is
              no universally accepted standard for how websites should respond to DNT signals, our
              Site does not currently alter its data collection practices in response to DNT signals.
              Our data collection practices are described fully in this policy regardless of
              whether a DNT signal is detected.
            </p>
          </Section>

          {/* 9 */}
          <Section number="9" title="Data Retention">
            <p>We retain your personal information only as long as necessary for the purposes described in this policy:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <span className="font-medium text-foreground">Contact form submissions</span>
                &mdash; retained for up to <span className="font-medium text-foreground">24 months</span> from
                the date of submission to allow us to respond to your inquiry and maintain records
                of customer interactions. After this period, submissions are deleted or
                de-identified unless a longer retention period is required by law.
              </li>
              <li>
                <span className="font-medium text-foreground">Server access logs</span> &mdash;
                retained for up to <span className="font-medium text-foreground">90 days</span>,
                after which they are automatically purged.
              </li>
              <li>
                <span className="font-medium text-foreground">Cookie consent records</span>
                &mdash; retained for up to <span className="font-medium text-foreground">13 months</span> to
                honor your stated preferences.
              </li>
            </ul>
            <p>
              You may request deletion of your contact form submission at any time (see Section 11).
            </p>
          </Section>

          {/* 10 */}
          <Section number="10" title="Data Security">
            <p>
              We implement reasonable and appropriate technical and organizational safeguards to
              protect your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>TLS/HTTPS encryption for all data transmitted between your browser and the Site</li>
              <li>Access controls that restrict who within our organization can access contact form data</li>
              <li>Regular review of security practices</li>
            </ul>
            <p>
              However, no method of transmission over the internet or method of electronic storage
              is 100% secure. We cannot guarantee absolute security, and any transmission of
              personal information is at your own risk. We will notify affected individuals and
              relevant authorities of a data breach as required by applicable law.
            </p>
          </Section>

          {/* 11 */}
          <Section number="11" title="Your Privacy Rights">
            <p>
              Depending on your location, you may have the following rights regarding your personal
              information:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <span className="font-medium text-foreground">Access</span> &mdash; request a copy
                of the personal information we hold about you.
              </li>
              <li>
                <span className="font-medium text-foreground">Correction</span> &mdash; request that
                we correct inaccurate or incomplete information.
              </li>
              <li>
                <span className="font-medium text-foreground">Deletion</span> &mdash; request that we
                delete your personal information, subject to legal obligations that require us to
                retain it.
              </li>
              <li>
                <span className="font-medium text-foreground">Restriction</span> &mdash; request that
                we restrict processing of your information in certain circumstances.
              </li>
              <li>
                <span className="font-medium text-foreground">Portability</span> &mdash; request a
                structured, machine-readable copy of the information you provided to us.
              </li>
              <li>
                <span className="font-medium text-foreground">Objection</span> &mdash; object to
                processing based on our legitimate interests.
              </li>
              <li>
                <span className="font-medium text-foreground">Withdraw consent</span> &mdash; where
                processing is based on your consent (e.g., non-essential cookies), withdraw that
                consent at any time without affecting the lawfulness of prior processing.
              </li>
              <li>
                <span className="font-medium text-foreground">Lodge a complaint</span> &mdash; if
                you are located in the EEA, UK, or Switzerland and believe we have processed your
                personal information in violation of applicable law, you have the right to lodge a
                complaint with your local Data Protection Authority (DPA). In the EU, you can find
                your national DPA at{" "}
                <span className="font-mono text-xs">edpb.europa.eu/about-edpb/board/members</span>.
                UK residents may contact the Information Commissioner&rsquo;s Office (ICO) at{" "}
                <span className="font-mono text-xs">ico.org.uk</span>. We encourage you to
                contact us first so we can try to resolve your concern directly.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us via our{" "}
              <Link
                href="/contact"
                className="text-primary font-medium hover:text-primary/80 underline underline-offset-2"
              >
                Contact Us page
              </Link>
              . We will respond within the timeframe required by applicable law (generally within
              30&ndash;45 days). We may ask you to verify your identity before fulfilling a request.
              We will not discriminate against you for exercising any of these rights.
            </p>
          </Section>

          {/* 12 */}
          <Section number="12" title="California Residents — CCPA/CPRA">
            <p>
              If you are a California resident, the California Consumer Privacy Act (CCPA) as
              amended by the California Privacy Rights Act (CPRA) grants you additional rights.
              Under those laws:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <span className="font-medium text-foreground">We do not sell or share your personal information</span>{" "}
                as those terms are defined by the CCPA/CPRA. You therefore do not need to opt out
                of a sale or sharing of your data.
              </li>
              <li>
                You have the right to know what categories of personal information we collect, use,
                disclose, and retain.
              </li>
              <li>
                You have the right to request deletion of your personal information, subject to
                certain exceptions.
              </li>
              <li>
                You have the right to correct inaccurate personal information.
              </li>
              <li>
                You have the right to limit our use of sensitive personal information (we do not
                collect sensitive personal information as defined by the CPRA).
              </li>
              <li>
                You have the right to non-discrimination for exercising your CCPA rights.
              </li>
            </ul>
            <p>
              Categories of personal information we collect from California residents are described
              in Section 2. To submit a verifiable consumer request, use our{" "}
              <Link
                href="/contact"
                className="text-primary font-medium hover:text-primary/80 underline underline-offset-2"
              >
                Contact Us page
              </Link>{" "}
              and identify your request as a California privacy rights request. We will respond
              within 45 days as required by law.
            </p>
          </Section>

          {/* 13 */}
          <Section number="13" title="Children's Privacy">
            <p>
              The Site is intended for general audiences and is not directed to children. We do
              not knowingly collect personal information from:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Children under 13 years of age (COPPA, United States)</li>
              <li>Children under 16 years of age (GDPR, European Economic Area)</li>
            </ul>
            <p>
              If you believe a child has submitted personal information through the Site without
              appropriate parental or guardian consent, please contact us immediately and we will
              take steps to delete the information as promptly as possible. Parents or guardians
              wishing to review or delete information submitted by a child may contact us via our{" "}
              <Link
                href="/contact"
                className="text-primary font-medium hover:text-primary/80 underline underline-offset-2"
              >
                Contact Us page
              </Link>
              .
            </p>
          </Section>

          {/* 14 */}
          <Section number="14" title="Links to Third-Party Websites">
            <p>
              The Site may contain links to external websites or resources not operated by
              LifestyleMI. These links are provided for your convenience only. We have no
              control over and assume no responsibility for the content, privacy policies, or
              practices of any third-party sites. We encourage you to review the privacy policy
              of every site you visit.
            </p>
          </Section>

          {/* 15 */}
          <Section number="15" title="International Visitors">
            <p>
              The Site is operated in the United States. If you access the Site from outside the
              United States, your information may be transferred to, stored, and processed in the
              United States, where data protection laws may differ from those in your country.
              By using the Site, you consent to the transfer of your information to the United
              States in accordance with this policy.
            </p>
            <p>
              Where required by applicable law (e.g., GDPR), we rely on appropriate safeguards
              for such transfers, including standard contractual clauses or other lawful transfer
              mechanisms.
            </p>
          </Section>

          {/* 16 */}
          <Section number="16" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, applicable law, or Site features. Material changes will be indicated by
              a new &ldquo;Last Updated&rdquo; date at the top of this page. For significant
              changes that affect how we use information you have already provided, we will make
              reasonable efforts to notify you (e.g., by posting a prominent notice on the Site).
            </p>
            <p>
              Your continued use of the Site after any changes are posted constitutes your
              acceptance of the updated policy. We encourage you to review this page periodically.
              Prior versions of this policy are available upon request.
            </p>
          </Section>

          {/* 17 */}
          <Section number="17" title="Governing Law">
            <p>
              This Privacy Policy is governed by and construed in accordance with the laws of the
              State of Michigan and applicable federal law of the United States, without regard to
              conflict-of-law principles. Any dispute arising under this policy shall be subject
              to the exclusive jurisdiction of the state and federal courts located in Michigan.
            </p>
          </Section>

          {/* 18 */}
          <Section number="18" title="Contact">
            <p>
              If you have questions, concerns, or requests related to this Privacy Policy &mdash;
              including exercising any of your privacy rights &mdash; please contact us via our{" "}
              <Link
                href="/contact"
                className="text-primary font-medium hover:text-primary/80 underline underline-offset-2"
              >
                Contact Us page
              </Link>
              . Please include &ldquo;Privacy Policy Request&rdquo; in the subject or message so
              we can route your inquiry to the right person.
            </p>
            <p>
              We take privacy inquiries seriously and will respond as promptly as possible, and in
              any case within the timeframe required by applicable law.
            </p>
          </Section>
        </div>
      </article>
    </div>
  );
}
