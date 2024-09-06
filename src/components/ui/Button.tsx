import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-primary text-primary-foreground ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
