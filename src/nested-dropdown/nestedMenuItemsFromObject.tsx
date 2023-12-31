import React from "react";

import { MenuItemData } from "./MenuItemData";
import { IconMenuItem } from "./IconMenuItem";
import { NestedMenuItem } from "./NestedMenuItem";

export interface nestedMenuItemsFromObjectProps {
  menuItemsData: MenuItemData[];
  isOpen: boolean;
  direction?: "right" | "down";
  handleClose: () => void;
}

/**
 * Create a JSX element with nested elements creating a nested menu.
 * Every menu item should have a uid provided
 */
export function nestedMenuItemsFromObject({
  menuItemsData: items,
  isOpen,
  handleClose,
}: nestedMenuItemsFromObjectProps) {
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
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          label={label}
          parentMenuOpen={isOpen}
          sx={sx}
          disabled={disabled}
        >
          {/* Call this function to nest more items */}
          {nestedMenuItemsFromObject({
            handleClose,
            isOpen,
            menuItemsData: items,
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
          label={label}
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
