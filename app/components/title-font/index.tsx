type TitleProps = {
  text: string;
  className?: string; 
};

export default function Title({ text, className = "" }: TitleProps) {
  return (
    <h2
      className={`text-4xl font-italiana sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl ${className}`}
    >
      {text}
    </h2>
  );
}
