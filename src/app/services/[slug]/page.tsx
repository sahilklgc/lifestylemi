import { notFound } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

// Robust, professional database of services with expanded filler information
const servicesData: Record<string, { title: string; shortDescription: string; overview: string; features: { title: string; desc: string }[]; benefits: string[]; process: { title: string; desc: string }[] }> = {
  "cell-phone-services": {
    title: "Corporate Cell Phone Services",
    shortDescription: "Enterprise-grade mobile plans designed to keep your remote teams connected anywhere.",
    overview: "Managing corporate mobile plans across multiple carriers is a logistical headache. We streamline the entire process by negotiating bulk rates, standardizing device deployments, and providing a single point of contact for all your cellular needs. Whether your team needs the latest smartphones, rugged devices for the field, or international roaming packages, we ensure everyone stays connected securely.",
    features: [
      { title: "Aggregated Billing", desc: "Consolidate all carrier invoices into one simplified monthly statement." },
      { title: "Device Lifecycle", desc: "From procurement and staging to end-of-life recycling, we handle it all." },
      { title: "Cost Optimization", desc: "Continuous auditing to ensure you never overpay for unused data or lines." }
    ],
    benefits: [
      "Discounted enterprise tier pricing",
      "Dedicated account management",
      "Zero-touch MDM enrollment",
      "Unified billing across all major carriers"
    ],
    process: [
      { title: "Needs Analysis", desc: "We audit your current usage and identify cost-saving opportunities." },
      { title: "Plan Selection", desc: "We negotiate with Tier 1 carriers to secure the best possible rates." },
      { title: "Deployment", desc: "Devices arrive fully configured and ready for immediate use by your team." },
      { title: "Ongoing Support", desc: "24/7 dedicated support for troubleshooting, replacements, and upgrades." }
    ]
  },
  "home-internet": {
    title: "Home Internet for Remote Work",
    shortDescription: "Reliable, high-speed residential broadband solutions perfect for modern hybrid teams.",
    overview: "In a remote-first world, residential internet is now critical business infrastructure. We provide high-speed, reliable home internet solutions tailored specifically for your remote workforce, ensuring they have the bandwidth and stability required for seamless video conferencing, large file transfers, and uninterrupted productivity.",
    features: [
      { title: "High-Speed Fiber", desc: "Access to lightning-fast fiber optic networks in supported residential areas." },
      { title: "Business Support", desc: "Priority routing for business accounts to minimize residential downtime." },
      { title: "No Data Caps", desc: "Unlimited data plans to support constant connectivity without overage fees." }
    ],
    benefits: [
      "Subsidized corporate billing options",
      "Static IP availability for secure access",
      "Seamless VPN and firewall integration",
      "Dedicated troubleshooting desk"
    ],
    process: [
      { title: "Address Qualification", desc: "We verify the best available providers at your employee's specific address." },
      { title: "Requirement Assessment", desc: "Matching the speed and reliability needs to the employee's role." },
      { title: "Installation Coordination", desc: "We schedule and manage the entire installation process with the ISP." },
      { title: "Connection Verification", desc: "Testing speeds and latency to ensure enterprise standards are met." }
    ]
  },
  "business-internet": {
    title: "Enterprise Business Internet",
    shortDescription: "Dedicated fiber internet access (DIA) ensuring maximum uptime and symmetrical speeds.",
    overview: "Your office operations depend on an unbreakable connection. We specialize in sourcing and deploying enterprise-grade Dedicated Internet Access (DIA) that guarantees bandwidth and uptime through strict Service Level Agreements (SLAs). From redundant backup circuits to advanced routing, we architect networks that never go down.",
    features: [
      { title: "Symmetrical Speeds", desc: "Equal upload and download speeds, crucial for cloud applications and VoIP." },
      { title: "Guaranteed Uptime", desc: "Financially backed SLAs offering up to 99.999% guaranteed network availability." },
      { title: "Failover Redundancy", desc: "Secondary backup connections (4G/5G or secondary fiber) for total peace of mind." }
    ],
    benefits: [
      "Direct cloud connectivity (AWS, Azure)",
      "Proactive outage notifications",
      "Managed edge routing and security",
      "Scalable bandwidth on demand"
    ],
    process: [
      { title: "Site Survey", desc: "Evaluating building fiber entry points and telecom room readiness." },
      { title: "Carrier Negotiation", desc: "Leveraging our relationships to get wholesale pricing from top ISPs." },
      { title: "Circuit Delivery", desc: "Managing the complex provisioning and construction process." },
      { title: "Network Turn-up", desc: "Final testing, router configuration, and live traffic cutover." }
    ]
  },
  "gps-tracking": {
    title: "Fleet GPS & Telematics",
    shortDescription: "Advanced tracking for ultimate visibility, driver safety, and route optimization.",
    overview: "Take complete control of your mobile assets with our state-of-the-art GPS tracking and telematics solutions. We help businesses reduce fuel costs, improve driver safety, and optimize routing through real-time data insights. Whether you have 5 vans or 500 trucks, our platform scales to give you actionable intelligence.",
    features: [
      { title: "Real-Time Tracking", desc: "Live map views with sub-second location updates and historical playback." },
      { title: "Driver Behavior", desc: "Monitor harsh braking, rapid acceleration, and speeding to improve safety." },
      { title: "Maintenance Alerts", desc: "Automated reminders based on engine diagnostics and mileage milestones." }
    ],
    benefits: [
      "Significant reduction in fuel costs",
      "Lower insurance premiums through safety data",
      "Improved dispatching efficiency",
      "Theft recovery and unauthorized use alerts"
    ],
    process: [
      { title: "Fleet Assessment", desc: "Understanding your vehicle types, use cases, and specific tracking goals." },
      { title: "Hardware Selection", desc: "Choosing between OBD-II plug-and-play or hardwired tracker devices." },
      { title: "Installation", desc: "Coordinating professional installation without disrupting your operations." },
      { title: "Software Training", desc: "Comprehensive onboarding for your dispatchers and fleet managers." }
    ]
  },
  "project-management": {
    title: "IT Project Management",
    shortDescription: "Expert oversight for your technology rollouts, ensuring they finish on time and under budget.",
    overview: "Complex IT projects often fail due to poor planning and scope creep. Our certified project managers step in to oversee your most critical technology deployments—from full office network build-outs to massive software migrations. We align vendors, manage risks, and maintain strict schedules so you can focus on your core business.",
    features: [
      { title: "Vendor Coordination", desc: "We act as the single liaison between your team and multiple tech vendors." },
      { title: "Risk Mitigation", desc: "Identifying potential roadblocks early and developing contingency plans." },
      { title: "Transparent Reporting", desc: "Weekly status updates, budget tracking, and clear milestone visibility." }
    ],
    benefits: [
      "Projects delivered on schedule",
      "Strict adherence to defined budgets",
      "Minimal disruption to daily operations",
      "Clear documentation and knowledge transfer"
    ],
    process: [
      { title: "Discovery & Planning", desc: "Defining the scope, deliverables, and success criteria for the project." },
      { title: "Resource Allocation", desc: "Assembling the right internal and external talent for the job." },
      { title: "Execution & Tracking", desc: "Managing the day-to-day tasks, sprints, and vendor deliverables." },
      { title: "Quality Assurance", desc: "Final testing, user acceptance, and complete project documentation." }
    ]
  },
  "it-management": {
    title: "Managed IT Services",
    shortDescription: "Comprehensive support to secure your network and proactively monitor your infrastructure.",
    overview: "Stop reacting to IT crises and start preventing them. Our Managed IT Services act as your outsourced IT department, providing 24/7 proactive monitoring, rapid helpdesk support, and robust cybersecurity defenses. We ensure your technology runs silently and efficiently in the background.",
    features: [
      { title: "Proactive Monitoring", desc: "Detecting and resolving network anomalies before they cause downtime." },
      { title: "Helpdesk Support", desc: "Fast, friendly remote and on-site support for your employees' daily tech issues." },
      { title: "Cybersecurity", desc: "Advanced endpoint protection, firewall management, and zero-trust security." }
    ],
    benefits: [
      "Predictable, flat-rate monthly IT costs",
      "Enterprise-grade security for SMBs",
      "Strategic IT roadmapping (vCIO services)",
      "Minimized downtime and data loss risk"
    ],
    process: [
      { title: "Complete IT Audit", desc: "A deep dive into your current network infrastructure and security posture." },
      { title: "Strategic Remediation", desc: "Fixing immediate vulnerabilities and bringing systems up to standard." },
      { title: "Seamless Onboarding", desc: "Deploying our management agents and introducing our helpdesk to your team." },
      { title: "Continuous Optimization", desc: "Quarterly business reviews to align technology with your growth goals." }
    ]
  },
  "procurement-services": {
    title: "Technology Procurement",
    shortDescription: "End-to-end hardware and software sourcing to get you the right technology at the best price.",
    overview: "Sourcing enterprise hardware and negotiating software licenses takes time and industry leverage. We act as your purchasing arm, utilizing our deep vendor relationships to secure aggressive volume discounts on laptops, servers, networking gear, and SaaS subscriptions. We handle the logistics so you don't have to.",
    features: [
      { title: "Hardware Sourcing", desc: "From executive laptops to complex data center server configurations." },
      { title: "Software Licensing", desc: "Managing and optimizing Microsoft 365, Google Workspace, and specialized SaaS." },
      { title: "Logistics Management", desc: "Warehousing, custom imaging, and staggered deployment shipping." }
    ],
    benefits: [
      "Significant volume discounts",
      "Consolidated vendor management",
      "Flexible financing and leasing options",
      "Simplified asset lifecycle tracking"
    ],
    process: [
      { title: "Requirements Gathering", desc: "Understanding the exact specifications and compliance needs for your gear." },
      { title: "Quoting & Sourcing", desc: "Bidding out to multiple distributors to guarantee the lowest price." },
      { title: "Purchasing & Staging", desc: "Receiving inventory and pre-configuring devices before shipment." },
      { title: "Delivery & Tracking", desc: "Secure shipping and entering devices into your asset management system." }
    ]
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
    title: `${service.title} | LifestyleMI`,
    description: service.shortDescription,
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
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <Link href="/services" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-10 transition-colors text-sm font-semibold tracking-wide uppercase">
            &larr; Back to services
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-6 tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl font-medium">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Overview & Features Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold font-heading mb-6 text-foreground">Service Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.overview}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.features.map((feature, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Process */}
      <section className="py-24 bg-muted/30 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Key Benefits */}
            <div>
              <h2 className="text-3xl font-bold font-heading mb-8 text-foreground">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center bg-background p-5 rounded-xl border border-border/50 shadow-sm">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                    <span className="text-foreground text-lg font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Our Process */}
            <div>
              <h2 className="text-3xl font-bold font-heading mb-8 text-foreground">How It Works</h2>
              <div className="space-y-0">
                {service.process.map((step, i) => (
                  <div key={i} className="flex relative">
                    {/* Vertical line connecting steps */}
                    {i !== service.process.length - 1 && (
                      <div className="absolute top-12 left-6 w-0.5 h-full bg-border -z-10" />
                    )}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0 shadow-sm ring-4 ring-background">
                      {i + 1}
                    </div>
                    <div className="ml-6 pb-10">
                      <h3 className="text-xl font-bold mb-2 pt-2 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-extrabold font-heading mb-6">Ready to get started?</h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Contact us today to discuss how our {service.title} can optimize your business connectivity.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg", className: "px-10 py-6 text-lg font-bold" })}>
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
