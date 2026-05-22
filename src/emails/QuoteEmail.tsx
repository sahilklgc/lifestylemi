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

interface QuoteEmailProps {
  serviceType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  currentProvider?: string;
  quantity?: string;
  message?: string;
}

export const QuoteEmail = ({
  serviceType,
  firstName,
  lastName,
  email,
  phone,
  company,
  location,
  currentProvider,
  quantity,
  message,
}: QuoteEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Quote Request: {serviceType} for {company}</Preview>
      <Tailwind>
        <Body className="bg-[#f3f4f6] font-sans pt-10 pb-10">
          <Container className="bg-white border border-solid border-[#e5e7eb] rounded-2xl mx-auto overflow-hidden shadow-lg max-w-[600px] w-full">
            {/* Header / Brand */}
            <Section className="bg-[#0f172a] px-8 py-10 text-center">
              <Text className="text-3xl font-bold text-white tracking-tight m-0 uppercase">
                LIFESTYLEMI
              </Text>
              <Text className="text-[#94a3b8] text-[13px] mt-2 mb-0 uppercase tracking-widest font-semibold">
                Premium Connectivity Solutions
              </Text>
            </Section>

            {/* Hero Accent for Service Type */}
            <Section className="bg-[#3b82f6] px-10 py-6 text-center">
              <Text className="text-white/80 text-[12px] font-bold uppercase tracking-widest m-0 mb-1">
                Requested Service
              </Text>
              <Text className="text-white text-[22px] font-bold m-0">
                {serviceType}
              </Text>
            </Section>

            {/* Main Content Area */}
            <Section className="px-10 py-8">
              <Heading className="text-[#0f172a] text-[20px] font-bold p-0 m-0 mb-6 uppercase tracking-wide">
                Client Details
              </Heading>

              {/* 2-Column Grid Rows for details */}
              <Section className="w-full mb-3">
                <Row>
                  <Column className="w-[50%] pr-2 align-top">
                    <Section className="bg-[#f8fafc] border-l-4 border-solid border-[#0f172a] px-5 py-4 rounded-r-lg">
                      <Text className="text-[#64748b] font-bold uppercase tracking-wider text-[10px] m-0 mb-1">Name</Text>
                      <Text className="text-[#0f172a] font-semibold text-[15px] m-0">{firstName} {lastName}</Text>
                    </Section>
                  </Column>
                  <Column className="w-[50%] pl-2 align-top">
                    <Section className="bg-[#f8fafc] border-l-4 border-solid border-[#0f172a] px-5 py-4 rounded-r-lg">
                      <Text className="text-[#64748b] font-bold uppercase tracking-wider text-[10px] m-0 mb-1">Company</Text>
                      <Text className="text-[#0f172a] font-semibold text-[15px] m-0">{company}</Text>
                    </Section>
                  </Column>
                </Row>
              </Section>

              <Section className="w-full mb-3">
                <Row>
                  <Column className="w-[50%] pr-2 align-top">
                    <Section className="bg-[#f8fafc] border-l-4 border-solid border-[#0f172a] px-5 py-4 rounded-r-lg">
                      <Text className="text-[#64748b] font-bold uppercase tracking-wider text-[10px] m-0 mb-1">Email</Text>
                      <Text className="text-[#0f172a] font-semibold text-[15px] m-0">
                        <a href={`mailto:${email}`} className="text-[#3b82f6] no-underline">{email}</a>
                      </Text>
                    </Section>
                  </Column>
                  <Column className="w-[50%] pl-2 align-top">
                    <Section className="bg-[#f8fafc] border-l-4 border-solid border-[#0f172a] px-5 py-4 rounded-r-lg">
                      <Text className="text-[#64748b] font-bold uppercase tracking-wider text-[10px] m-0 mb-1">Phone</Text>
                      <Text className="text-[#0f172a] font-semibold text-[15px] m-0">{phone}</Text>
                    </Section>
                  </Column>
                </Row>
              </Section>

              <Section className="bg-[#f8fafc] border-l-4 border-solid border-[#0f172a] px-5 py-4 mb-8 rounded-r-lg w-full">
                <Text className="text-[#64748b] font-bold uppercase tracking-wider text-[10px] m-0 mb-1">Location</Text>
                <Text className="text-[#0f172a] font-semibold text-[15px] m-0">{location}</Text>
              </Section>

              {/* Additional Details */}
              {(currentProvider || quantity || message) && (
                <>
                  <Heading className="text-[#0f172a] text-[20px] font-bold p-0 m-0 mb-6 uppercase tracking-wide">
                    Additional Information
                  </Heading>

                  {(currentProvider || quantity) && (
                    <Section className="w-full mb-3">
                      <Row>
                        {currentProvider && (
                          <Column className={`align-top w-[50%] ${quantity ? 'pr-2' : ''}`}>
                            <Section className="bg-[#f8fafc] border-l-4 border-solid border-[#cbd5e1] px-5 py-4 rounded-r-lg">
                              <Text className="text-[#64748b] font-bold uppercase tracking-wider text-[10px] m-0 mb-1">Current Provider</Text>
                              <Text className="text-[#0f172a] font-semibold text-[15px] m-0">{currentProvider}</Text>
                            </Section>
                          </Column>
                        )}
                        {quantity && (
                          <Column className={`align-top w-[50%] ${currentProvider ? 'pl-2' : ''}`}>
                            <Section className="bg-[#f8fafc] border-l-4 border-solid border-[#cbd5e1] px-5 py-4 rounded-r-lg">
                              <Text className="text-[#64748b] font-bold uppercase tracking-wider text-[10px] m-0 mb-1">Quantity/Lines</Text>
                              <Text className="text-[#0f172a] font-semibold text-[15px] m-0">{quantity}</Text>
                            </Section>
                          </Column>
                        )}
                      </Row>
                    </Section>
                  )}

                  {message && (
                    <Section className="bg-[#f8fafc] border-l-4 border-solid border-[#cbd5e1] px-5 py-4 mb-3 rounded-r-lg w-full">
                      <Text className="text-[#64748b] font-bold uppercase tracking-wider text-[10px] m-0 mb-2">Message</Text>
                      <Text className="text-[#334155] text-[14px] leading-[22px] m-0 whitespace-pre-wrap">{message}</Text>
                    </Section>
                  )}
                </>
              )}
            </Section>

            {/* Footer */}
            <Section className="bg-[#f8fafc] border-t border-solid border-[#e5e7eb] px-10 py-6">
              <Text className="text-[#94a3b8] text-[12px] leading-[20px] text-center m-0">
                This email was automatically generated from the Lifestylemi website quote form.
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

export default QuoteEmail;
