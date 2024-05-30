import React from 'react';

interface ButtonProps {
  text: string;
  link: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, link, backgroundColor = '#5F6EED', onClick }) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor,
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    cursor: 'pointer',
  };

  return (
    <a href={link} style={buttonStyle} onClick={onClick}>
      {text}
    </a>
  );
};

export default Button;
