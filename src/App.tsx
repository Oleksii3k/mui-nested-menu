import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Fragment } from "react";

import { NestedDropdown } from "./nested-dropdown/NestedDropdown";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { CssBaseline, Typography } from "@mui/material";
import SzhsinMenu from "./menu/SzhsinMenu";
import NestedHorizontalMenu from "./menu/NestedHorizontalMenu";
import NestedVerticalMenu, { menuItemsData } from "./menu/NestedVerticalMenu";
export default function App() {
  return (
    <Fragment>
      <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
        <CssBaseline />
        <Typography sx={{ m: 1 }}>Nested dropdown button</Typography>

        <NestedDropdown
          showOnHover={false}
          onClick={() => console.log("Clicked")}
          menuItemsData={menuItemsData}
          MenuProps={{
            elevation: 3,
          }}
          ButtonProps={{ variant: "contained", sx: { m: 1 } }}
        />
        <NestedDropdown
          showOnHover={true}
          onClick={() => console.log("Clicked")}
          menuItemsData={menuItemsData}
          MenuProps={{
            elevation: 3,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
          }}
          ButtonProps={{
            variant: "text",
            endIcon: <ArrowRightIcon />,
            sx: { m: 1 },
          }}
        />

        <NestedVerticalMenu />
        <NestedHorizontalMenu />

        <Typography sx={{ m: 1 }}>Szhsin Menu</Typography>
        <SzhsinMenu />
      </ThemeProvider>
    </Fragment>
  );
}
