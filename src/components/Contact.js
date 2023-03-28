import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  resize: none;
`;

const Button = styled.button`
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #0077ff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #005bcc;
  }
`;

function Contact() {
  return (
    <Container>
      <div>
        <Title>Contact Me</Title>
        <Form>
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <Textarea placeholder="Message" rows="5" required />
          <Button type="submit">Send</Button>
        </Form>
      </div>
    </Container>
  );
}

export default Contact;
