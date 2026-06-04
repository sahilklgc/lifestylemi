import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement | LifestyleMI",
  description: "Read LifestyleMI's commitment to accessibility and digital inclusion.",
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

export default function AccessibilityPage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">Accessibility Statement</h1>
          <p className="text-xl text-muted-foreground">
            Effective Date: {currentDate} &nbsp;|&nbsp; Last Updated: {currentDate}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground leading-relaxed mb-10 text-base border-l-4 border-primary pl-4 bg-muted/50 py-3 rounded-r-md">
            At LifestyleMI (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), we are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to guarantee we provide equal access to all of our users.
          </p>

          <Section number="1" title="Conformance Status">
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
            </p>
            <p>
              LifestyleMI is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard. We are actively working to increase the accessibility and usability of our website and, in doing so, adhere to many of the available standards and guidelines.
            </p>
          </Section>

          <Section number="2" title="Our Commitment">
            <p>
              We believe that the internet should be available and accessible to anyone, and are committed to providing a website that is accessible to the widest possible audience, regardless of circumstance and ability.
            </p>
            <p>To fulfill this, we aim to adhere as strictly as possible to the World Wide Web Consortium’s (W3C) Web Content Accessibility Guidelines 2.1 (WCAG 2.1) at the AA level.</p>
            <p>
              These guidelines explain how to make web content accessible to people with a wide array of disabilities. Complying with those guidelines helps us ensure that the website is accessible to all people: blind people, people with motor impairments, visual impairment, cognitive disabilities, and more.
            </p>
          </Section>

          <Section number="3" title="Compatibility with Browsers and Assistive Technology">
            <p>
              The LifestyleMI website is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Recent versions of screen readers (such as NVDA, JAWS, and VoiceOver).</li>
              <li>Operating system built-in magnification tools.</li>
              <li>Basic operating system speech recognition software.</li>
              <li>Standard keyboard navigation and alternative input devices.</li>
            </ul>
            <p>
              Our website relies on HTML, CSS, and JavaScript to work properly and in combination with the assistive technologies used by our visitors.
            </p>
          </Section>

          <Section number="4" title="Known Limitations">
            <p>
              Despite our best efforts to ensure accessibility of the LifestyleMI website, there may be some limitations. Below is a description of known limitations. Please contact us if you observe an issue not listed below.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <span className="font-medium text-foreground">Third-Party Content:</span> Some embedded content from third-party sources may not be fully accessible or properly tagged.
              </li>
              <li>
                <span className="font-medium text-foreground">Legacy Documents:</span> Older PDF documents or media might not meet current accessibility standards.
              </li>
            </ul>
          </Section>

          <Section number="5" title="Assessment Approach">
            <p>
              LifestyleMI assesses the accessibility of its website through the following approaches:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Self-evaluation using automated auditing tools.</li>
              <li>Manual testing with keyboard navigation and screen readers.</li>
              <li>Routine reviews during the design and development phases of new features.</li>
            </ul>
          </Section>

          <Section number="6" title="Feedback and Contact">
            <p>
              We welcome your feedback on the accessibility of the LifestyleMI website. Please let us know if you encounter accessibility barriers:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Phone: (248) 252-5958</li>
              <li>E-mail: info@lifestylemi.com</li>
              <li>Visitor Address: 7310 Woodward Ave #500, Detroit, MI 48202</li>
            </ul>
            <p className="mt-4">
              Alternatively, you can reach out directly via our{" "}
              <Link
                href="/contact"
                className="text-primary font-medium hover:text-primary/80 underline underline-offset-2"
              >
                Contact Us page
              </Link>
              . We try to respond to feedback within 2 business days.
            </p>
          </Section>
        </div>
      </article>
    </div>
  );
}
