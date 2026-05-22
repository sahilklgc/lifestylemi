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
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Inquiry</Heading>
          <Text style={text}>
            Someone has reached out via the contact form on your website.
          </Text>
          <Hr style={hr} />
          
          <Section style={section}>
            <Text style={text}><strong>Name:</strong> {name}</Text>
            <Text style={text}><strong>Email:</strong> {email}</Text>
            <Text style={text}><strong>Message:</strong></Text>
            <Text style={paragraph}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

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

export default ContactEmail;
