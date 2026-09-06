type TitleProps = {
  text: string;
  className?: string;
  eyebrow?: string;
  size?: string;
  as?: "h1" | "h2";
};

const defaultSize = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl";

export default function Title({
  text,
  className = "",
  eyebrow,
  size = defaultSize,
  as: Tag = "h2",
}: TitleProps) {
  return (
    <div>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag className={`font-display ${size} leading-[1.05] ${className}`}>
        {text}
      </Tag>
    </div>
  );
}