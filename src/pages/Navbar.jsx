import React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar({ widgetPos, handlePosChange }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      id="nav"
      style={{
        height: "50px",
        width: "100%",
        backgroundColor: "black",
        display: "flex",
      }}
    >
      <IconButton
        onClick={handleClick}
        size="small"
        alignSelf="flex-start"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <MenuIcon sx={{ width: 32, height: 32, color: "white" }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            pl: 2,
            backgroundColor: "#36454f",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: 14,
              width: 10,
              height: 10,
              bgcolor: "#36454f",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{ color: "white" }}
          value={widgetPos}
          onChange={handlePosChange}
        >
          <FormControlLabel
            value="top"
            control={<Radio />}
            label="Top"
            color="white"
          />
          <FormControlLabel
            value="left"
            control={<Radio />}
            label="Left"
            color="white"
          />
          <FormControlLabel
            value="right"
            control={<Radio />}
            label="Right"
            color="white"
          />
          <FormControlLabel
            value="bottom"
            control={<Radio />}
            label="Bottom"
            color="white"
          />
        </RadioGroup>
      </Menu>
    </div>
  );
}

export default Navbar;
