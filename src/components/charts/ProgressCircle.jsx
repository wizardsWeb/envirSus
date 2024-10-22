import { Box, useTheme } from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const angle = progress * 360;

  // Custom colors
  const customColors = {
    primary: "#4CAF50", // Green
    accent: "#FF5722",  // Deep Orange
    blue: "#2196F3",    // Blue
  };

  return (
    <Box
      sx={{
        background: `radial-gradient(${customColors.primary} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${customColors.blue} ${angle}deg 360deg),
            ${customColors.accent}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
