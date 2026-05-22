"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  serviceType: z.string().min(1, "Please select a service type"),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  company: z.string().min(2, "Company name is required"),
  location: z.string().min(2, "Location is required"),
  currentProvider: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().optional(),
});

export default function QuotePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      location: "",
      currentProvider: "",
      quantity: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Failed to submit quote request");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen pt-24 pb-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-20 w-20 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold font-heading mb-4">Quote Request Sent!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for reaching out. One of our connectivity experts will review your details and contact you within 24 business hours.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pt-16 pb-20 bg-muted/10">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold font-heading mb-4">Request a Free Quote</h1>
          <p className="text-lg text-muted-foreground">
            Fill out the form below with your requirements, and our team will prepare a tailored solution and pricing estimate for your business.
          </p>
        </div>

        <div className="bg-background rounded-xl shadow-sm border p-6 md:p-8">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-2">
              <Label>Service Type *</Label>
              <Controller
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cell-phone-services">Cell Phone Services</SelectItem>
                      <SelectItem value="home-internet">Home Internet</SelectItem>
                      <SelectItem value="business-internet">Business Internet</SelectItem>
                      <SelectItem value="gps-tracking">GPS Tracking</SelectItem>
                      <SelectItem value="project-management">Project Management</SelectItem>
                      <SelectItem value="it-management">IT Management</SelectItem>
                      <SelectItem value="procurement-services">Procurement Services</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {form.formState.errors.serviceType && (
                <p className="text-sm text-destructive">{form.formState.errors.serviceType.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" placeholder="John" {...form.register("firstName")} />
                {form.formState.errors.firstName && (
                  <p className="text-sm text-destructive">{form.formState.errors.firstName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" placeholder="Doe" {...form.register("lastName")} />
                {form.formState.errors.lastName && (
                  <p className="text-sm text-destructive">{form.formState.errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input id="email" placeholder="john@company.com" type="email" {...form.register("email")} />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" placeholder="(555) 123-4567" type="tel" {...form.register("phone")} />
                {form.formState.errors.phone && (
                  <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input id="company" placeholder="Acme Corp" {...form.register("company")} />
                {form.formState.errors.company && (
                  <p className="text-sm text-destructive">{form.formState.errors.company.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">City, State / Zip Code *</Label>
                <Input id="location" placeholder="New York, NY 10001" {...form.register("location")} />
                {form.formState.errors.location && (
                  <p className="text-sm text-destructive">{form.formState.errors.location.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="currentProvider">Current Provider (Optional)</Label>
                <Input id="currentProvider" placeholder="AT&T, Comcast, etc." {...form.register("currentProvider")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Number of Lines/Locations (Optional)</Label>
                <Input id="quantity" placeholder="e.g. 50 lines, 3 locations" {...form.register("quantity")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Details (Optional)</Label>
              <Textarea 
                id="message"
                placeholder="Tell us a bit more about your current challenges or specific needs..." 
                className="min-h-[120px]"
                {...form.register("message")} 
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-lg" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Submitting..." : "Submit Quote Request"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
