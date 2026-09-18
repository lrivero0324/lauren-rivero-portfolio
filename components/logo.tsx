export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-serif text-[1.7rem] leading-none tracking-[-0.14em] ${className}`}
    >
      <span>L</span>
      <span className="text-accent">R</span>
    </span>
  );
}
