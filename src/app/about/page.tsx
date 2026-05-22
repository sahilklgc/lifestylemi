import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | Lifestylemi",
  description: "Learn more about Lifestylemi, your trusted partner for communication and technology services.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/30 pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">About Lifestylemi</h1>
          <p className="text-xl text-muted-foreground">
            We are dedicated to simplifying technology procurement and connectivity for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Lifestylemi, we understand that navigating the complex world of telecommunications and IT services can be overwhelming. Our mission is to bridge the gap between businesses and top-tier technology providers, ensuring you get the best solutions tailored to your unique needs without the hassle.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We act as your unbiased advocate, leveraging our strong carrier relationships to secure the most competitive rates and reliable services, allowing you to focus on what you do best—running your business.
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 border">
              <h3 className="text-2xl font-semibold font-heading mb-6">Why Trust Us?</h3>
              <ul className="space-y-4">
                {[
                  "Unbiased, vendor-neutral recommendations.",
                  "Deep industry expertise and carrier relationships.",
                  "End-to-end support from procurement to deployment.",
                  "Commitment to optimizing your technology spend."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-6">Ready to work together?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experts analyze your current services and show you how we can improve your connectivity and bottom line.
          </p>
          <Link href="/contact" className={buttonVariants({ size: "lg", className: "px-8" })}>
            Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
