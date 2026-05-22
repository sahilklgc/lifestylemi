import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Wifi, Smartphone, Server, MapPin, Briefcase, ShoppingCart, Shield } from "lucide-react";

export const metadata = {
  title: "Our Services | Lifestylemi",
  description: "Explore our comprehensive suite of connectivity, communication, and technology services.",
};

const allServices = [
  {
    title: "Cell Phone Services",
    description: "Corporate mobile plans designed to keep your team connected anywhere, with the best carriers and flexible terms.",
    icon: Smartphone,
    slug: "cell-phone-services"
  },
  {
    title: "Home Internet",
    description: "Reliable, high-speed residential broadband solutions perfect for remote workers and modern households.",
    icon: Wifi,
    slug: "home-internet"
  },
  {
    title: "Business Internet",
    description: "Enterprise-grade connectivity, including fiber and dedicated internet access, ensuring maximum uptime.",
    icon: Server,
    slug: "business-internet"
  },
  {
    title: "GPS Tracking",
    description: "Advanced telematics and fleet tracking for ultimate visibility, safety, and route optimization.",
    icon: MapPin,
    slug: "gps-tracking"
  },
  {
    title: "Project Management",
    description: "Expert oversight for your IT deployments, network upgrades, and technology rollouts.",
    icon: Briefcase,
    slug: "project-management"
  },
  {
    title: "IT Management",
    description: "Comprehensive managed IT services to secure your network, support your staff, and streamline operations.",
    icon: Shield,
    slug: "it-management"
  },
  {
    title: "Procurement Services",
    description: "End-to-end hardware and software sourcing to ensure you get the right tech at the right price.",
    icon: ShoppingCart,
    slug: "procurement-services"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">Our Services</h1>
          <p className="text-xl opacity-90">
            Comprehensive technology and connectivity solutions tailored to your specific business requirements.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group block h-full">
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-muted-foreground/10 hover:border-primary/50 group-hover:-translate-y-1">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-6">{service.description}</CardDescription>
                    <div className="flex items-center text-primary font-medium text-sm">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-6">Not sure what you need?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation. We'll analyze your current setup and recommend the best services for your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote" className={buttonVariants({ size: "lg", className: "px-8" })}>
              Request a Quote
            </Link>
            <Link href="/contact" className={buttonVariants({ size: "lg", variant: "outline", className: "px-8" })}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
