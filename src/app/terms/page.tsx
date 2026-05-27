import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | LifestyleMI",
  description: "Read the Terms of Service for using the LifestyleMI website and services.",
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

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">
            Effective Date: {currentDate} &nbsp;|&nbsp; Last Updated: {currentDate}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground leading-relaxed mb-10 text-base border-l-4 border-primary pl-4 bg-muted/50 py-3 rounded-r-md">
            Welcome to LifestyleMI. These Terms of Service (&ldquo;Terms&rdquo;) govern your
            access to and use of the LifestyleMI website at{" "}
            <span className="font-medium text-foreground">www.lifestylemi.com</span> (the
            &ldquo;Site&rdquo;) and any related services we provide. By accessing or using our
            Site, you agree to be bound by these Terms. If you do not agree to these Terms,
            please do not use the Site.
          </p>

          {/* 1 */}
          <Section number="1" title="Our Services">
            <p>
              LifestyleMI acts as an independent technology advisor and procurement partner. We
              assist businesses in sourcing, negotiating, and deploying telecommunications,
              internet, and IT services from third-party service providers and carriers.
            </p>
            <p>
              While we strive to provide accurate recommendations and secure the best rates,
              the actual delivery of telecommunications or IT services is performed by the
              respective third-party providers. Your use of those third-party services will be
              governed by separate agreements between you and the providers.
            </p>
          </Section>

          {/* 2 */}
          <Section number="2" title="Use of the Site">
            <p>
              You may use the Site only for lawful purposes and in accordance with these Terms.
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Use the Site in any way that violates applicable federal, state, or local laws.</li>
              <li>Attempt to gain unauthorized access to, interfere with, or disrupt any parts of the Site or the servers on which it is stored.</li>
              <li>Use any robot, spider, or other automatic device to scrape or monitor the Site without our prior written consent.</li>
              <li>Transmit any malicious code, viruses, or harmful material through our Contact Us forms.</li>
            </ul>
          </Section>

          {/* 3 */}
          <Section number="3" title="Intellectual Property Rights">
            <p>
              The Site and its entire contents, features, and functionality (including but not
              limited to all information, text, displays, images, video, audio, and the design
              and arrangement thereof) are owned by LifestyleMI, its licensors, or other
              providers of such material and are protected by United States and international
              copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p>
              You are permitted to use the Site for your legitimate business purposes. You must
              not reproduce, distribute, modify, create derivative works of, publicly display,
              or commercially exploit any of the material on our Site without prior written
              consent from LifestyleMI.
            </p>
          </Section>

          {/* 4 */}
          <Section number="4" title="Third-Party Links and Providers">
            <p>
              Our Site may contain links to third-party websites or services that are not owned
              or controlled by LifestyleMI. We have no control over, and assume no responsibility
              for, the content, privacy policies, or practices of any third-party websites or
              services.
            </p>
            <p>
              Any recommendations we make regarding third-party technology providers are based
              on our industry expertise. However, we do not warrant the performance, reliability,
              or uptime of any third-party carrier or IT provider.
            </p>
          </Section>

          {/* 5 */}
          <Section number="5" title="Disclaimer of Warranties">
            <p>
              YOUR USE OF THE SITE IS AT YOUR OWN RISK. THE SITE AND ITS CONTENT ARE PROVIDED
              ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT ANY
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. LIFESTYLEMI DISCLAIMS ALL
              WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that the Site will be uninterrupted, error-free, completely
              secure, or free of viruses.
            </p>
          </Section>

          {/* 6 */}
          <Section number="6" title="Limitation of Liability">
            <p>
              TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL LIFESTYLEMI, ITS AFFILIATES,
              OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE
              LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
              CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SITE.
            </p>
            <p>
              This includes any direct, indirect, special, incidental, consequential, or punitive
              damages, including but not limited to, personal injury, pain and suffering, emotional
              distress, loss of revenue, loss of profits, loss of business, loss of data, and whether
              caused by tort (including negligence), breach of contract, or otherwise.
            </p>
          </Section>

          {/* 7 */}
          <Section number="7" title="Indemnification">
            <p>
              You agree to defend, indemnify, and hold harmless LifestyleMI and its affiliates,
              officers, directors, employees, contractors, and agents from and against any
              claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees
              (including reasonable attorneys&rsquo; fees) arising out of or relating to your
              violation of these Terms or your use of the Site.
            </p>
          </Section>

          {/* 8 */}
          <Section number="8" title="Privacy">
            <p>
              All information we collect on this Site is subject to our{" "}
              <Link
                href="/privacy"
                className="text-primary font-medium hover:text-primary/80 underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              . By using the Site, you consent to all actions taken by us with respect to your
              information in compliance with the Privacy Policy.
            </p>
          </Section>

          {/* 9 */}
          <Section number="9" title="Governing Law and Jurisdiction">
            <p>
              All matters relating to the Site and these Terms, and any dispute or claim arising
              therefrom or related thereto, shall be governed by and construed in accordance with
              the internal laws of the State of Michigan without giving effect to any choice or
              conflict of law provision or rule.
            </p>
            <p>
              Any legal suit, action, or proceeding arising out of, or related to, these Terms or
              the Site shall be instituted exclusively in the federal or state courts located in
              Michigan.
            </p>
          </Section>

          {/* 10 */}
          <Section number="10" title="Changes to the Terms">
            <p>
              We may revise and update these Terms of Service from time to time in our sole
              discretion. All changes are effective immediately when we post them. Your continued
              use of the Site following the posting of revised Terms means that you accept and
              agree to the changes.
            </p>
          </Section>

          {/* 11 */}
          <Section number="11" title="Contact Us">
            <p>
              If you have any questions or comments about these Terms of Service, please contact
              us via our{" "}
              <Link
                href="/contact"
                className="text-primary font-medium hover:text-primary/80 underline underline-offset-2"
              >
                Contact Us page
              </Link>
              .
            </p>
          </Section>
        </div>
      </article>
    </div>
  );
}
