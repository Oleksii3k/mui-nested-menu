import Button, { ButtonProps } from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import { forwardRef, useState } from "react";

import { MenuItemData } from "./MenuItemData";
import { nestedMenuItemsFromObject } from "./nestedMenuItemsFromObject";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
interface NestedDropdownProps {
  menuItemsData?: MenuItemData;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ButtonProps?: Partial<ButtonProps>;
  MenuProps?: Partial<MenuProps>;
  showOnHover?: boolean;
}

export const NestedDropdown = forwardRef<
  HTMLDivElement | null,
  NestedDropdownProps
>(function NestedDropdown(props, ref) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const {
    menuItemsData: data,
    onClick,
    ButtonProps,
    MenuProps,
    showOnHover,
    ...rest
  } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    onClick && onClick(e);
  };
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (showOnHover) {
      setAnchorEl(e.currentTarget);
    }
  };
  const handleClose = () => setAnchorEl(null);

  const menuItems = nestedMenuItemsFromObject({
    handleClose,
    isOpen: open,
    menuItemsData: data?.children ?? [],
  });

  return (
    <div ref={ref} {...rest}>
      <Button
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        {...ButtonProps}
      >
        {data?.label ?? "Menu"}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        {...MenuProps}
      >
        {menuItems}
      </Menu>
    </div>
  );
});
