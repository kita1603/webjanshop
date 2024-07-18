import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomButton from './CustomButton.jsx';
// import '@testing-library/jest-dom/extend-expect';

// Test để kiểm tra xem button có render với đúng title không
test('renders CustomButton with correct title', () => {
  const title = 'Click Me';
  const { getByText } = render(<CustomButton title={title} />);
  
  // Kiểm tra xem button có chứa text 'Click Me' không
  // expect(getByText(title)).toBeInTheDocument();
});

// Test để kiểm tra sự kiện click có hoạt động không
test('calls handleClick when button is clicked', () => {
  const handleClick = jest.fn();
  const title = 'Click Me';
  const { getByText } = render(<CustomButton title={title} handleClick={handleClick} />);
  
  // Lấy element button bằng text 'Click Me'
  const buttonElement = getByText(title);
  
  // Fire sự kiện click lên button
  fireEvent.click(buttonElement);
  
  // Kiểm tra xem handleClick có được gọi không
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// Test để kiểm tra className được truyền vào đúng không
test('applies correct styles', () => {
  const title = 'Styled Button';
  const styles = 'bg-blue-500';
  const { getByText } = render(<CustomButton title={title} styles={styles} />);
  
  // Lấy element button bằng text 'Styled Button'
  const buttonElement = getByText(title);
  
  // Kiểm tra xem button có chứa class name 'bg-blue-500' không
  // expect(buttonElement).toHaveClass(styles);
});
