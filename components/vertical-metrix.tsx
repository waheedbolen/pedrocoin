import useIsMobile from "@/hooks/useIsMobile";

interface VerticalMetricsProps {
  percentage: number;
  children: React.ReactNode;
  lastChild?: boolean;
}

export function VerticalMetrics({
  percentage,
  lastChild,
  children,
}: VerticalMetricsProps) {
  const isMobile = useIsMobile();

  const div_height = !isMobile ? 400 : 700;

  const height = Math.round((percentage / 50) * div_height);
  const lastCh = !isMobile && lastChild;
  return (
    <div
      className="metrix-container relative w-64 overflow-hidden"
      style={{
        height: !isMobile ? "300px" : height,
        width: !isMobile ? "24rem" : "21rem",
        background: lastCh
          ? "linear-gradient(to top, #41ce84 0%, #ffffff 100%)"
          : "linear-gradient(to top, #999999 0%, #ffffff 100%)",
      }}
    >
      <div className="absolute top-0 left-0 w-full p-6 text-[#41CE84] md:hidden">
        <div
          style={!lastCh ? { color: "#41CE84" } : { color: "#fff" }}
          className="text-6xl font-bold mb-4 text-[#41CE84]"
        >
          {percentage}%
        </div>
        {children}
      </div>
    </div>
  );
}
