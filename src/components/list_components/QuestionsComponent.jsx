import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the multiple-choice question and answer list
const QuestionContainer = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 16px;
  margin: 16px auto;
  max-width: 400px;
`;

const QuestionText = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`;

const AnswerList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AnswerItem = styled.li`
  margin: 8px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin: 16px auto;
  display: block;
`;

function QuestionsComponent() {
  const [selectedOptions, setSelectedOptions] = useState(Array(5).fill(null));

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'New York', 'Milan'],
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Earth', 'Jupiter'],
    },
    {
      question: 'What is the largest mammal on Earth?',
      options: ['Blue Whale', 'Elephant', 'Giraffe', 'Hippopotamus'],
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: ['William Shakespeare', 'Jane Austen', 'F. Scott Fitzgerald', 'George Orwell'],
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Fe', 'Cu'],
    },
  ];

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[questionIndex] = optionIndex;
    setSelectedOptions(updatedOptions);
  };

  return (
    <div>
      {questions.map((q, questionIndex) => (
        <QuestionContainer key={questionIndex}>
          <QuestionText>{q.question}</QuestionText>
          <AnswerList>
            {q.options.map((option, optionIndex) => (
              <AnswerItem
                key={optionIndex}
                onClick={() => handleOptionSelect(questionIndex, optionIndex)}
                style={{
                  backgroundColor:
                    selectedOptions[questionIndex] === optionIndex ? '#4CAF50' : 'transparent',
                  color:
                    selectedOptions[questionIndex] === optionIndex ? 'white' : 'inherit',
                }}
              >
                {option}
              </AnswerItem>
            ))}
          </AnswerList>
        </QuestionContainer>
      ))}
      <a href="/result"><SubmitButton>Submit</SubmitButton></a>
    </div>
  );
}

export default QuestionsComponent;
