import NewIcon from "@mui/icons-material/InsertDriveFileOutlined";
import SaveAsIcon from "@mui/icons-material/SaveOutlined";
import SaveIcon from "@mui/icons-material/SaveRounded";
import { MouseEvent } from "react";

import { Paper, Stack, Typography } from "@mui/material";
import { MenuItemData } from "../nested-dropdown/MenuItemData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NestedMenu from "../nested-dropdown/NestedMenu";

const horizontalMenuItemsData: MenuItemData = {
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
      // leftIcon: <SaveAsIcon />,
      label: "Save As",
      rightIcon: <KeyboardArrowDownIcon />,
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
      // leftIcon: <ImportExportRoundedIcon />,
      rightIcon: <KeyboardArrowDownIcon />,
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
export default function NestedHorizontalMenu() {
  return (
    <>
      <Typography sx={{ m: 1 }}>Nested dropdown menu (horizontal)</Typography>
      <Paper square sx={{ p: 1 }}>
        <Stack direction="row" spacing={1}>
          {NestedMenu({
            type: "horizontal",
            isOpen: true,
            handleClose: () => {},
            items: horizontalMenuItemsData.children || [],
          })}
        </Stack>
      </Paper>
    </>
  );
}
