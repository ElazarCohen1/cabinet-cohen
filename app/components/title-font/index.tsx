// app/components/title-font/index.tsx
type TitleProps = {
  text: string;
  className?: string;
  eyebrow?: string;
  size?: string; // ex: "text-5xl sm:text-6xl lg:text-8xl"
};

const defaultSize = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl";

export default function Title({
  text,
  className = "",
  eyebrow,
  size = defaultSize,
}: TitleProps) {
  return (
    <div>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h1 className={`font-display ${size} leading-[1.05] ${className}`}>
        {text}
      </h1>
    </div>
  );
}