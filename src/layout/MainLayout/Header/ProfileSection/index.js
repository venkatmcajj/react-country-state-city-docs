import { useRef } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Chip, Grid, Typography } from "@mui/material";

// assets
import { IconBrandGithub, IconUserCheck } from "@tabler/icons";

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
  const theme = useTheme();
  const anchorRef = useRef(null);
  return (
    <>
      <Chip
        sx={{
          height: "48px",
          alignItems: "center",
          borderRadius: "27px",
          transition: "all .2s ease-in-out",
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            "& svg": {
              stroke: theme.palette.primary.light,
            },
          },
          "& .MuiChip-label": {
            lineHeight: 0,
          },
        }}
        label={
          <Grid container alignItems={"center"}>
            <Typography sx={{ mr: 1 }}> Venkatesh </Typography>
            <IconUserCheck
              stroke={1.5}
              size="1.5rem"
              color={theme.palette.primary.main}
            />
          </Grid>
        }
        variant="outlined"
        ref={anchorRef}
        aria-haspopup="true"
        onClick={()=>window.open("https://github.com/venkatmcajj","_blank")}
        color="primary"
      />
      <Chip
        sx={{
          height: "48px",
          alignItems: "center",
          borderRadius: "27px",
          transition: "all .2s ease-in-out",
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            "& svg": {
              stroke: theme.palette.primary.light,
            },
          },
          "& .MuiChip-label": {
            lineHeight: 0,
          },
        }}
        label={
          <Grid container alignItems={"center"}>
            <Typography sx={{ mr: 1 }}> Github </Typography>
            <IconBrandGithub
              stroke={1.5}
              size="1.5rem"
              color={theme.palette.primary.main}
            />
          </Grid>
        }
        variant="outlined"
        ref={anchorRef}
        aria-haspopup="true"
        onClick={()=>window.open("https://github.com/venkatmcajj/react-country-state-city.git","_blank")}
        color="primary"
      />
    </>
  );
};

export default ProfileSection;
