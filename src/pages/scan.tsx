// Material UI Components
import WebcamWControls from "@components/WebcamWControls";
import { Stack, Typography } from "@mui/material";

// Types
import { RecycLensPage } from "@utils/types/common";

// Page
const Scan: RecycLensPage = () => {
  return (
    <Stack>
      <Typography variant="body1" className="p-4">
        Point your camera at an object to learn what you should do with it.
      </Typography>
      <WebcamWControls />
    </Stack>
  );
};

Scan.appBar = { title: "Scan trash", backGoesTo: "/" };

export default Scan;
