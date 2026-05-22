import { notFound } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Mock database of services
const servicesData: Record<string, { title: string; description: string; benefits: string[]; process: string[] }> = {
  "cell-phone-services": {
    title: "Cell Phone Services",
    description: "Corporate mobile plans designed to keep your team connected anywhere. We negotiate with major carriers to get you the best devices, data plans, and enterprise features.",
    benefits: ["Discounted enterprise rates", "Dedicated account management", "Free device upgrades", "Unified billing across carriers"],
    process: ["Needs Analysis", "Carrier Comparison", "Plan Selection", "Device Deployment", "Ongoing Support"]
  },
  "home-internet": {
    title: "Home Internet",
    description: "Reliable, high-speed residential broadband solutions perfect for remote workers, modern households, and hybrid teams. Keep your remote workforce productive.",
    benefits: ["High-speed fiber & cable options", "No data caps", "Static IP availability", "Priority support for business accounts"],
    process: ["Address Qualification", "Speed Requirement Assessment", "Provider Selection", "Installation Coordination"]
  },
  "business-internet": {
    title: "Business Internet",
    description: "Enterprise-grade connectivity, including dedicated fiber internet access (DIA), ensuring maximum uptime, symmetrical speeds, and SLA guarantees.",
    benefits: ["99.99% Uptime SLAs", "Symmetrical upload/download speeds", "Redundant connection setups", "Managed routers"],
    process: ["Site Survey", "Bandwidth Planning", "Carrier Negotiation", "Contract Signing", "Circuit Delivery"]
  },
  "gps-tracking": {
    title: "GPS Tracking",
    description: "Advanced telematics and fleet tracking for ultimate visibility, safety, and route optimization. Monitor your assets in real-time.",
    benefits: ["Real-time location tracking", "Driver safety monitoring", "Fuel efficiency optimization", "Maintenance alerts"],
    process: ["Fleet Assessment", "Hardware Selection", "Installation", "Software Training", "Ongoing Monitoring"]
  },
  "project-management": {
    title: "Project Management",
    description: "Expert oversight for your IT deployments, network upgrades, and technology rollouts. We ensure your projects finish on time and under budget.",
    benefits: ["Dedicated project managers", "Risk mitigation", "Vendor coordination", "Transparent reporting"],
    process: ["Discovery & Planning", "Resource Allocation", "Execution & Tracking", "Quality Assurance", "Project Handover"]
  },
  "it-management": {
    title: "IT Management",
    description: "Comprehensive managed IT services (MSP) to secure your network, support your staff with helpdesk services, and proactively monitor your infrastructure.",
    benefits: ["24/7 proactive monitoring", "Helpdesk support", "Cybersecurity protection", "Cloud management"],
    process: ["IT Audit", "Strategic Planning", "Onboarding", "Continuous Monitoring", "Quarterly Reviews"]
  },
  "procurement-services": {
    title: "Procurement Services",
    description: "End-to-end hardware and software sourcing to ensure you get the right technology at the right price, delivered exactly when you need it.",
    benefits: ["Volume discounts", "Vendor consolidation", "Lifecycle management", "Hardware leasing options"],
    process: ["Requirements Gathering", "Quoting & Sourcing", "Purchasing", "Delivery & Logistics", "Asset Tracking"]
  }
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const service = servicesData[params.slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Lifestylemi`,
    description: service.description,
  };
}

export default async function ServiceDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const service = servicesData[params.slug];
  
  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link href="/services" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            &larr; Back to all services
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">{service.title}</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step, i) => (
                  <div key={i} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        {i + 1}
                      </div>
                      {i !== service.process.length - 1 && (
                        <div className="w-0.5 h-full bg-border my-2"></div>
                      )}
                    </div>
                    <div className="pb-4 pt-1">
                      <h3 className="text-xl font-semibold">{step}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-6">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Request a personalized quote for {service.title} and see how Lifestylemi can optimize your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/quote?service=${params.slug}`} className={buttonVariants({ size: "lg", className: "px-8" })}>
              Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
