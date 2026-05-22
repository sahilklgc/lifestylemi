import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmail } from "@/emails/ContactEmail";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");
  try {
    const data = await request.json();

    // Server-side processing
    console.log("Processing contact inquiry from:", data.name);

    const { data: emailResponse, error } = await resend.emails.send({
      from: "Lifestylemi <onboarding@resend.dev>", // Using testing email by default
      to: ["lakeshoreglobalcorporation@gmail.com"], // Replace with your actual email to receive leads
      subject: `New Contact Inquiry from ${data.name}`,
      react: ContactEmail({ ...data }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send email." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Contact form received successfully.", data: emailResponse },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
