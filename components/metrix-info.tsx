// components/MetricsInfo.tsx
import useIsMobile from "@/hooks/useIsMobile";

interface MetricsInfoProps {
  title: string;
  value: string;
  description: string;
  titleColor?: string; // Optional prop for text color
  desktop?: boolean;
  lastChild?: boolean;
  percentage?: number;
}

const MetricsInfo = ({
  title,
  value,
  description,
  titleColor = "inherit",
  desktop = false,
  percentage,
  lastChild,
}: MetricsInfoProps) => {
  const isMobile = useIsMobile();

  const lastCh = !isMobile && lastChild;

  return (
    <div className="matrix-text-wrapper w-64">
      <div className="text-6xl font-bold text-white mb-4">{percentage}</div>
      <div
        className="text-xl font-medium mb-0"
        style={{ color: desktop ? "#fff" : titleColor }}
      >
        {title}
      </div>
      <div
        className="text-2xl font-semibold mb-0"
        style={{ color: desktop ? "#fff" : titleColor }}
      >
        {value}
      </div>
      <div
        className="matrix-last-text text-sm opacity-90 mb-4"
        style={{ color: desktop ? "#fff" : titleColor }}
      >
        {description}
      </div>
    </div>
  );
};

export default MetricsInfo;
