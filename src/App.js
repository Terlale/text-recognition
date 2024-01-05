import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  padding: 10px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  background-color: #008cba;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const App = () => {
  const [text, setText] = useState('');

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'tr';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Container>
      <Title>Yazıyı Seslendir</Title>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        cols="30"
        rows="10"
      ></Textarea>
      <Button onClick={speakText}>Qulaq as</Button>
    </Container>
  );
};

export default App;
