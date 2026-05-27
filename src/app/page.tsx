"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Wifi, Smartphone, Server, ShieldCheck, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Business Internet",
    description: "High-speed, reliable connectivity tailored for enterprise operations.",
    icon: Wifi,
    href: "/services/business-internet"
  },
  {
    title: "Cell Phone Services",
    description: "Corporate mobile plans that keep your team connected anywhere.",
    icon: Smartphone,
    href: "/services/cell-phone-services"
  },
  {
    title: "IT Management",
    description: "Comprehensive managed IT services to secure and streamline your tech.",
    icon: Server,
    href: "/services/it-management"
  },
  {
    title: "GPS Tracking",
    description: "Advanced fleet and asset tracking for ultimate visibility.",
    icon: MapPin,
    href: "/services/gps-tracking"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-32 lg:pt-36 lg:pb-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-heading text-foreground mb-6">
              Next-Generation Connectivity for Modern Business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              We simplify technology procurement. From enterprise internet and cell phone services to IT management and GPS tracking—get everything your business needs to thrive.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quote" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto text-md px-8" })}>
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className={buttonVariants({ size: "lg", variant: "outline", className: "w-full sm:w-auto text-md px-8" })}>
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Comprehensive Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We partner with industry-leading carriers to provide you with the best rates and most reliable services available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="block h-full">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-muted-foreground/10 hover:border-primary/50">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-heading">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className={buttonVariants({ variant: "ghost", className: "font-medium" })}>
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Why Choose LifestyleMI?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are more than just a broker. We are your dedicated technology partner, committed to finding the right solutions for your unique operational needs.
              </p>
              <ul className="space-y-4">
                {[
                  "Unbiased recommendations across all major carriers.",
                  "Streamlined procurement and deployment processes.",
                  "Dedicated ongoing support and account management.",
                  "Cost optimization and auditing to save you money."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <ShieldCheck className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-2xl bg-muted/50 border overflow-hidden flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
              <Briefcase className="h-32 w-32 text-primary/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to upgrade your connectivity?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Get a customized quote for your business today. Our experts will analyze your needs and provide the best options available.
          </p>
          <Link href="/quote" className={buttonVariants({ size: "lg", variant: "secondary", className: "text-lg px-10" })}>
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
