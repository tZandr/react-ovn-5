
type CardProps = {
  title: string;
  children: React.ReactNode;
};

export const Card = ({ title, children }: CardProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};
