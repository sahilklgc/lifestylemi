import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  message,
}: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Inquiry from {name}</Preview>
      <Tailwind>
        <Body className="bg-[#f3f4f6] font-sans pt-10 pb-10">
          <Container className="bg-white border border-solid border-[#e5e7eb] rounded-2xl mx-auto overflow-hidden shadow-lg max-w-[600px] w-full">
            {/* Header / Brand with Gradient/Color */}
            <Section className="bg-[#0f172a] px-8 py-10 text-center">
              <Text className="text-3xl font-bold text-white tracking-tight m-0 uppercase">
                LIFESTYLEMI
              </Text>
              <Text className="text-[#94a3b8] text-[13px] mt-2 mb-0 uppercase tracking-widest font-semibold">
                Premium Connectivity Solutions
              </Text>
            </Section>

            {/* Main Content Area */}
            <Section className="px-10 py-8">
              <Heading className="text-[#0f172a] text-[24px] font-bold p-0 m-0 mb-6">
                New Contact Inquiry
              </Heading>

              <Text className="text-[#475569] text-[16px] leading-[26px] m-0 mb-8">
                Hello Team,<br />
                You have received a new message via the contact form on your website. Please review the details below.
              </Text>

              {/* Details Card - Using distinct colored blocks for data */}
              <Section className="mb-6">
                {/* Name and Email */}
                <Section className="w-full mb-4">
                  <Row>
                    <Column className="w-[50%] pr-2 align-top">
                      <Section className="bg-[#f8fafc] border-l-4 border-solid border-[#3b82f6] px-5 py-4 rounded-r-lg">
                        <Text className="text-[#64748b] font-bold uppercase tracking-wider text-[11px] m-0 mb-1">
                          Name
                        </Text>
                        <Text className="text-[#0f172a] font-semibold text-[16px] m-0">
                          {name}
                        </Text>
                      </Section>
                    </Column>
                    <Column className="w-[50%] pl-2 align-top">
                      <Section className="bg-[#f8fafc] border-l-4 border-solid border-[#3b82f6] px-5 py-4 rounded-r-lg">
                        <Text className="text-[#64748b] font-bold uppercase tracking-wider text-[11px] m-0 mb-1">
                          Email Address
                        </Text>
                        <Text className="text-[#0f172a] font-semibold text-[16px] m-0">
                          <a href={`mailto:${email}`} className="text-[#3b82f6] no-underline">{email}</a>
                        </Text>
                      </Section>
                    </Column>
                  </Row>
                </Section>

                {/* Message */}
                <Section className="bg-[#f8fafc] border-l-4 border-solid border-[#3b82f6] px-5 py-4 mb-4 rounded-r-lg w-full">
                  <Text className="text-[#64748b] font-bold uppercase tracking-wider text-[11px] m-0 mb-2">
                    Message
                  </Text>
                  <Text className="text-[#334155] text-[15px] leading-[24px] m-0 whitespace-pre-wrap">
                    {message}
                  </Text>
                </Section>
              </Section>
              
            </Section>

            {/* Footer */}
            <Section className="bg-[#f8fafc] border-t border-solid border-[#e5e7eb] px-10 py-6">
              <Text className="text-[#94a3b8] text-[12px] leading-[20px] text-center m-0">
                This email was automatically generated from the Lifestylemi website contact form.
                <br />
                © {new Date().getFullYear()} Lifestylemi. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
