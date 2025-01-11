import { ArrowRight, CheckCircle } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import CodeBlockWithCopy from "ui-component/codeblockwithcopy";

function Dashboard() {
  return (
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Breadcrumbs aria-label="breadcrumb" mx={5} mt={5}>
          <Link underline="hover" color="inherit" to="/">
            Home
          </Link>
          <Typography sx={{ color: "text.primary" }}>Get Started</Typography>
        </Breadcrumbs>
        <Grid
          component={Paper}
          item
          xs={12}
          md={12}
          margin={5}
          mr={2}
          mt={2}
          padding={5}
          height={"100%"}
        >
          <Alert
            severity="success"
            style={{ backgroundColor: "#f0f9ff", color: "#0066cc" }}
          >
            <AlertTitle>
              <Typography variant="h3" fontWeight="bold">
                Description
              </Typography>
            </AlertTitle>
            <Typography variant="body2">
              A lightweight and easy-to-use React library that provides a
              comprehensive list of regions or continents, countries, states,
              cities and languages for creating dynamic and searchable
              dropdowns. Ideal for building forms and input fields that require
              accurate and up-to-date geographical selections, with seamless
              integration for improved user experience.
            </Typography>
          </Alert>
          <Typography variant={"h1"} mt={5}>
            Installation
          </Typography>
          <Typography variant={"subtitle1"} mt={5}>
            With npm:
          </Typography>
          <CodeBlockWithCopy code={"npm install react-country-state-city"} />
          <Typography variant={"subtitle1"} mt={5}>
            With yarn:
          </Typography>
          <CodeBlockWithCopy code={"yarn add react-country-state-city"} />
          <Typography variant={"h1"} mt={5}>
            Usage
          </Typography>
          <CodeBlockWithCopy
            code={`import { CountrySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";`}
          />
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <Typography variant={"h1"} mt={5}>
                Features
              </Typography>
            }
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckCircle fontSize="12" />
              </ListItemIcon>
              <ListItemText primary="Easy to set up for real, you can make it work in less than 1minute!" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckCircle fontSize="12" />
              </ListItemIcon>
              <ListItemText primary="Super easy to customize" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckCircle fontSize="12" />
              </ListItemIcon>
              <ListItemText primary="Can also use it in your own custom UI." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckCircle fontSize="12" />
              </ListItemIcon>
              <ListItemText primary="Autosuggest: a list of matching countries is displayed when the input text changes." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckCircle fontSize="12" />
              </ListItemIcon>
              <ListItemText primary="Country data is provided, State data is provided based on given country id, City data is provided based on given country id and state id." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckCircle fontSize="12" />
              </ListItemIcon>
              <ListItemText primary="Country flag icons." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckCircle fontSize="12" />
              </ListItemIcon>
              <ListItemText primary="onChange and onTextChange callbacks." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckCircle fontSize="12" />
              </ListItemIcon>
              <ListItemText primary="Language dropdown to list and search all languages in English and native too." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckCircle fontSize="12" />
              </ListItemIcon>
              <ListItemText primary="Regions or Continents dropdown to list and search all the regions from the world." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckCircle fontSize="12" />
              </ListItemIcon>
              <ListItemText primary="Phonecode dropdown to list and search all the codes based on country name or phone codes." />
            </ListItem>
          </List>
          <Alert
            severity="info"
            sx={{ mt: 5 }}
            style={{ backgroundColor: "#f0f9ff", color: "#0066cc" }}
          >
            <AlertTitle>
              <Typography variant="subtitle1" fontWeight="bold">
                Data
              </Typography>
            </AlertTitle>
            <Typography variant="body2">
              By default, the control will load the github hosted data files.
              Alternatively, you can
              <Link
                to="https://github.com/venkatmcajj/react-country-state-city/tree/master/data"
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: 5, marginRight: 5 }}
              >
                download the data
              </Link>
              json file and host it yourself. Simply download the JSON files,
              and supply the src property to each control to tell it where to
              download from.
            </Typography>
          </Alert>

          <Divider sx={{ my: 2 }} />
          <Typography variant={"h3"} mt={5} mb={2}>
            Demo Project
          </Typography>
          <Typography variant={"p"} mt={5}>
            <a
              href="https://venkatmcajj.github.io/react-country-state-city/example"
              target="_blank"
              rel="noreferrer"
            >              
              A demo is worth a thousand words
            </a>
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant={"h3"} mt={5} mb={2}>
            Contribute
          </Typography>
          <Typography
            variant={"p"}
            mt={5}

          >
            Show your ❤️ and support by giving a ⭐. Any suggestions are
            welcome!&nbsp;
            <a href="mailto:venkatmcajj@gmail.com" target="_blank" rel="noreferrer">
              venkatmcajj@gmail.com
            </a>
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant={"h3"} mt={5} mb={2}>
            Financial Contributors
          </Typography>
          <Typography
            variant={"p"}
            href="https://venkatmcajj.github.io/react-country-state-city/example"
            mt={5}
          >
            Buy me a cup of coffee,
            <br /><br/>
            Binance Smart Chain or Ethereum -
            0x7C6Bfb7f240f6028Fd2a0039924826eD8B879635
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant={"h3"} mt={5} mb={2}>
            License
          </Typography>
          <Typography
            variant={"p"}
            href="https://venkatmcajj.github.io/react-country-state-city/example"
            mt={5}
          >
            Licensed under MIT
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Grid sx={{ display: "flex" }}>
            <Button
              component={Link}
              sx={{ ml: "auto" }}
              to="/country-select"
              variant="outlined"
              endIcon={<ArrowRight />}
            >
              Country Select
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
