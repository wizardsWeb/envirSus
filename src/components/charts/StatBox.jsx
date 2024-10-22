import { Box, Typography } from "@mui/material";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  // Custom colors
  const customColors = {
    textPrimary: "black", // Darker light green for primary text
    textSecondary: "#388E3C", // Darker medium green (primary accent)
    accent: "#66BB6A", // Darker light green for subtitle
    accentDark: "#1B5E20", // Darker dark green for increase
  };

  return (
    <Box
      width="100%"
      m="0 30px"
      className="dark:bg-black" // Light mode background is white, dark mode is black
      borderRadius="8px" // Optional: Rounded corners for better aesthetics
      padding="16px" // Optional: Padding for inner content
    >
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: customColors.textPrimary }} // Darker light green for title
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: customColors.accent }}>
          {subtitle} {/* Darker light green for subtitle */}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: customColors.accentDark }} // Darker dark green for increase
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
