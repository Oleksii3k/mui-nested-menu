import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { SxProps } from "@mui/material";
import React, { forwardRef, RefObject } from "react";

const StyledMenuItem = styled(MenuItem)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "8px",
  paddingRight: "8px",
});

const StyledTypography = styled(Typography)({
  paddingLeft: "8px",
  paddingRight: "8px",
  textAlign: "left",
});

type IconMenuItemProps = {
  MenuItemProps?: MenuItemProps;
  className?: string;
  disabled?: boolean;
  label?: string;
  leftIcon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  ref?: RefObject<HTMLLIElement>;
  rightIcon?: React.ReactNode;
  sx?: SxProps;
};

export const IconMenuItem = forwardRef<HTMLLIElement, IconMenuItemProps>(
  function IconMenuItem(
    { MenuItemProps, className, label, leftIcon, rightIcon, ...props },
    ref
  ) {
    return (
      <StyledMenuItem
        {...MenuItemProps}
        ref={ref}
        className={className}
        {...props}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {leftIcon}
          <StyledTypography variant="body2">{label}</StyledTypography>
        </Box>
        {rightIcon}
      </StyledMenuItem>
    );
  }
);
