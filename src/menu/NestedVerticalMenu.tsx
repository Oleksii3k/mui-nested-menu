import ImportExportRoundedIcon from "@mui/icons-material/ImportExportRounded";
import NewIcon from "@mui/icons-material/InsertDriveFileOutlined";
import SaveAsIcon from "@mui/icons-material/SaveOutlined";
import SaveIcon from "@mui/icons-material/SaveRounded";
import { MouseEvent } from "react";

import { MenuItemData } from "../nested-dropdown/MenuItemData";

import { Box, Paper, Stack, Typography } from "@mui/material";
import { nestedMenuItemsFromObject } from "../nested-dropdown/nestedMenuItemsFromObject";
import NestedMenu from "../nested-dropdown/NestedMenu";
export const menuItemsData: MenuItemData = {
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

export default function NestedVerticalMenu() {
  return (
    <>
      <Typography sx={{ m: 1 }}>Nested dropdown menu (vertical)</Typography>

      <Stack direction="row" spacing={3}>
        <Box width={150}>
          <Typography variant="caption">Normal</Typography>
          <Paper>
            {nestedMenuItemsFromObject({
              isOpen: true,
              handleClose: () => {},
              menuItemsData: menuItemsData.children || [],
            })}
          </Paper>
        </Box>
        <Box width={60}>
          <Typography variant="caption">Mini</Typography>
          <Paper>
            {NestedMenu({
              type: "mini",
              isOpen: true,
              handleClose: () => {},
              items: menuItemsData.children || [],
            })}
          </Paper>
        </Box>
      </Stack>
    </>
  );
}
