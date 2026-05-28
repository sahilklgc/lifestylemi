import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-xl font-bold tracking-tight">
                LifestyleMI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Professional business services for communication, connectivity, and technology. Empowering your business to thrive.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 font-heading">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services/business-internet" className="hover:text-primary transition-colors">Business Internet</Link></li>
              <li><Link href="/services/cell-phone-services" className="hover:text-primary transition-colors">Cell Phone Services</Link></li>
              <li><Link href="/services/it-management" className="hover:text-primary transition-colors">IT Management</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">All Services &rarr;</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 font-heading">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>7310 Woodward Ave #500, Detroit, MI 48202</li>
              <li>info@lifestylemi.com</li>
              <li>(248) 252-5958</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LifestyleMI. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
