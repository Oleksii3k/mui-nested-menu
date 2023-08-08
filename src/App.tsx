import ImportExportRoundedIcon from "@mui/icons-material/ImportExportRounded";
import NewIcon from "@mui/icons-material/InsertDriveFileOutlined";
import SaveAsIcon from "@mui/icons-material/SaveOutlined";
import SaveIcon from "@mui/icons-material/SaveRounded";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Fragment, MouseEvent } from "react";

import { NestedDropdown } from "./nested-dropdown/NestedDropdown";
import { MenuItemData } from "./nested-dropdown/MenuItemData";

const menuItemsData: MenuItemData = {
  children: [
    {
      leftIcon: <NewIcon />,
      label: "New",
      callback: (event: MouseEvent<HTMLElement>, item: MenuItemData) =>
        console.log("New clicked", event, item),
    },
    {
      leftIcon: <SaveIcon />,
      label: "Save",
      callback: (event: MouseEvent<HTMLElement>, item: MenuItemData) =>
        console.log("Save clicked", event, item),
    },
    {
      leftIcon: <SaveAsIcon />,
      label: "Save As",
      children: [
        {
          rightIcon: <SaveAsIcon />,
          label: "Option 1",
          callback: (event: MouseEvent<HTMLElement>, item: MenuItemData) =>
            console.log("Save As > Option 1 clicked", event, item),
        },
        {
          leftIcon: <SaveAsIcon />,
          label: "Option 2",
          disabled: true,
          callback: (event: MouseEvent<HTMLElement>, item: MenuItemData) =>
            console.log("Save As > Option 2 clicked", event, item),
        },
      ],
    },
    {
      label: "Export",
      leftIcon: <ImportExportRoundedIcon />,
      // rightIcon: <ImportExportRoundedIcon />,
      children: [
        {
          label: "File Type 1",
          children: [
            {
              label: "Option 1",
              rightIcon: <SaveAsIcon />,
              sx: { color: "#FF0000" },
              callback: (event: MouseEvent<HTMLElement>, item: MenuItemData) =>
                console.log("Export > FT1 > O1 clicked", event, item),
            },
            {
              label: "Option 2",
              leftIcon: <SaveAsIcon />,
              callback: (event: MouseEvent<HTMLElement>, item: MenuItemData) =>
                console.log("Export > FT1 > O2 clicked", event, item),
            },
          ],
        },
        {
          label: "File Type 2",
          callback: (event: MouseEvent<HTMLElement>, item: MenuItemData) =>
            console.log("Export > FT2 clicked", event, item),
        },
      ],
    },
  ],
  label: "File",
};
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { CssBaseline } from "@mui/material";
export default function App() {
  return (
    <Fragment>
      <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
        <CssBaseline />
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
            sx: { m: 3 },
          }}
        />
        <NestedDropdown
          showOnHover={false}
          onClick={() => console.log("Clicked")}
          menuItemsData={menuItemsData}
          MenuProps={{
            elevation: 3,
          }}
          ButtonProps={{ variant: "contained", sx: { m: 3 } }}
        />
      </ThemeProvider>
    </Fragment>
  );
}
