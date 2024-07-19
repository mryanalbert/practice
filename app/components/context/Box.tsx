import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const { primary, secondary } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: primary.main, color: primary.text }}>
      Theme context
    </div>
  );
};
