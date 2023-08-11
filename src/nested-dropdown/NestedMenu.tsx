import React from "react";

import { MenuItemData } from "./MenuItemData";
import { IconMenuItem } from "./IconMenuItem";
import { NestedMenuItem } from "./NestedMenuItem";

/**
 * Create a JSX element with nested elements creating a nested menu.
 * Every menu item should have a uid provided
 */
export default function NestedMenu({
  type,
  items,
  isOpen,
  handleClose,
}: {
  type?: "vertical" | "horizontal" | "mini";
  items: MenuItemData[];
  isOpen: boolean;
  handleClose: () => void;
}) {
  return items.map((item) => {
    const {
      leftIcon,
      rightIcon,
      label,
      children: items,
      callback,
      sx,
      disabled,
    } = item;

    if (items && items.length > 0) {
      // Recurse deeper
      return (
        <NestedMenuItem
          key={label}
          type={type}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          label={type === "mini" ? "" : label}
          parentMenuOpen={isOpen}
          sx={sx}
          disabled={disabled}
        >
          {/* Call this function to nest more items */}
          {NestedMenu({
            handleClose,
            isOpen,
            items,
          })}
        </NestedMenuItem>
      );
    } else {
      // No children elements, return MenuItem
      return (
        <IconMenuItem
          key={label}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          label={type === "mini" ? "" : label}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            handleClose();
            callback && callback(event, item);
          }}
          sx={sx}
          disabled={disabled}
        />
      );
    }
  });
}
