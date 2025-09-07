export interface CardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}
