import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
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
      <Preview>New Quote Request from {firstName} at {company}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Quote Request</Heading>
          <Text style={text}>
            You have received a new quote request from the Lifestylemi website.
          </Text>
          <Hr style={hr} />
          
          <Section style={section}>
            <Text style={heading2}>Contact Details</Text>
            <Text style={text}><strong>Name:</strong> {firstName} {lastName}</Text>
            <Text style={text}><strong>Email:</strong> {email}</Text>
            <Text style={text}><strong>Phone:</strong> {phone}</Text>
            <Text style={text}><strong>Company:</strong> {company}</Text>
            <Text style={text}><strong>Location:</strong> {location}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={heading2}>Request Details</Text>
            <Text style={text}><strong>Service Requested:</strong> {serviceType}</Text>
            {currentProvider && <Text style={text}><strong>Current Provider:</strong> {currentProvider}</Text>}
            {quantity && <Text style={text}><strong>Quantity/Lines:</strong> {quantity}</Text>}
            {message && (
              <>
                <Text style={text}><strong>Additional Message:</strong></Text>
                <Text style={paragraph}>{message}</Text>
              </>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles for React Email
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  borderRadius: '8px',
  border: '1px solid #eaeaea',
  maxWidth: '600px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.4',
  margin: '0 0 20px',
};

const heading2 = {
  color: '#555',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 10px',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '1.4',
  margin: '0 0 10px',
};

const paragraph = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '1.6',
  backgroundColor: '#f9f9f9',
  padding: '12px',
  borderRadius: '4px',
  margin: '10px 0 0',
};

const section = {
  padding: '10px 0',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

export default QuoteEmail;
