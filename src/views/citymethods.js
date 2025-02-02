import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { GetCountries, GetState, GetCity } from "react-country-state-city";
import { Link } from "react-router-dom";
import CodeBlockWithCopy from "ui-component/codeblockwithcopy";

function Citymethods() {
  const rows = [
    {
      title: "id",
      type: "number",
      description: "A unique identifier that distinguishes each city.",
      example: "52",
    },
    {
      title: "name",
      type: "string",
      description: "Represents the official name of the city.",
      example: "Ashkāsham",
    },
    {
      title: "latitude",
      type: "string",
      description:
        "Refers to the geographical coordinate that specifies the north-south position of a point on the Earth's surface",
      example: "36.68333000",
    },
    {
      title: "longitude",
      type: "string",
      description:
        "Refers to the geographical coordinate that specifies the east-west position of a point on the Earth's surface.",
      example: "71.53333000",
    },
  ];
  const [country, setCountry] = useState(null);
  const [currentState, setcurrentState] = useState(null);
  const [city, setCity] = useState(null);
  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);
  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);
  useEffect(() => {
    if (country)
      GetState(parseInt(country)).then((result) => {
        setStateList(result);
      });
  }, [country]);
  useEffect(() => {
    if (country && currentState)
      GetCity(parseInt(country), parseInt(currentState)).then((result) => {
        setCitiesList(result);
      });
  }, [country, currentState]);

  const thegist = `
    import React, { useState, useEffect } from "react";
    import { GetCountries, GetState, GetCity } from "react-country-state-city";
    
    export default function App() {
      const [country, setCountry] = useState(null);
      const [currentState, setcurrentState] = useState(null);
      const [city, setCity] = useState(null);
      const [countriesList, setCountriesList] = useState([]);
      const [stateList, setStateList] = useState([]);
      const [citiesList, setCitiesList] = useState([]);
      useEffect(() => {
        GetCountries().then((result) => {
          setCountriesList(result);
        });
      }, []);
      useEffect(() => {
        if (country)
          GetState(parseInt(country)).then((result) => {
            setStateList(result);
          });
      }, [country]);
      useEffect(() => {
        if (currentState)
          GetCity(parseInt(country),parseInt(currentState)).then((result) => {
            setCitiesList(result);
          });
      }, [currentState]);

      return (
          <div>
          ...
          </div>
      );
    }
    `;
  const samplegist = `
    import React, { useState, useEffect } from "react";
    import { GetCountries, GetState, GetCity } from "react-country-state-city";
    
    export default function App() {
        ...

        return (
            <div>
                {/* country */}
                ...
                {/* state */}
                ...
                <h3>
                    City
                </h3>
                <select
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                >
                  <option value={""}>-- Select City --</option>
                  {citiesList.map((_city) => (
                    <option key={_city.id} value={_city.id}>
                      {_city.name}
                    </option>
                  ))}
                </select>
            </div>
        );
    }
    `;
  return (
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Breadcrumbs aria-label="breadcrumb" mx={5} mt={5}>
          <Link underline="hover" color="inherit" to="/get-countries">
            Methods
          </Link>
          <Typography sx={{ color: "text.primary" }}>GetCity</Typography>
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
          <Typography variant={"h1"}>
            GetCity
          </Typography>
          <Alert
            severity="info"
            sx={{ mt: 2 }}
            style={{ backgroundColor: "#f0f9ff", color: "#0066cc" }}
          >
            <AlertTitle>
              <Typography variant="subtitle1" fontWeight="bold">
                INFO
              </Typography>
            </AlertTitle>
            <Typography variant="body2">
              The GetCity function in react-country-state-city fetches a list of
              city objects based on given country and state id's. The async
              function returns an array of city objects, each containing details
              such as name, latitude and longitude.
            </Typography>
          </Alert>
          <Typography variant={"h3"} mt={5}>
            The Gist
          </Typography>
          <CodeBlockWithCopy code={thegist} />
          <Typography variant={"h3"} mt={5}>
            Props
          </Typography>
          <Divider sx={{ my: 2 }} />
          {/* countryid */}
          <Typography variant={"h3"} mt={2}>
            countryid
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Type: Number
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Default : Empty
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Required : true
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Description: The id of the selected country object
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* countryid */}
          <Typography variant={"h3"} mt={2}>
            stateid
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Type: Number
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Default : Empty
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Required : true
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Description: The id of the selected state object
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* src */}
          <Typography variant={"h3"} mt={2}>
            src
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Type: String
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Default : Empty
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Required : false
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Description: The relative or absolute URL where the data files are
            hosted. Default is to serve from hosted CDN. e.g.,
            https://venkatmcajj.github.io/react-country-state-city/
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant={"h3"} mt={5}>
            Results
          </Typography>
          <TableContainer
            component={Paper}
            sx={{ mt: 2, border: "1px solid #ddd", borderRadius: 0 }}
          >
            <Table
              sx={{
                "& th, & td": { border: "1px solid #ddd" }, // Add borders to table cells
                "& th": { backgroundColor: "#f8f9fa" }, // Optional: Light background for header
              }}
            >
              <TableHead>
                <TableRow
                  sx={{ backgroundColor: "#f9f9f9", fontWeight: "bold" }}
                >
                  <TableCell>Title</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Example</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.title}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9f9f9", // Alternate row background
                    }}
                  >
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.example}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Divider sx={{ my: 2 }} />
          <Typography variant={"h3"} mt={5}>
            Sample Usage
          </Typography>

          <CodeBlockWithCopy code={samplegist} />
          <Grid
            border={"1px solid gray"}
            borderTop={0}
            borderRadius={2}
            mt={-2}
            pt={3}
          >
            <Grid lg={6} mx={"auto"} mb={1}>
              <Typography variant="h3" mb={2}>
                Country
              </Typography>
              <select
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                style={{ width: "100%", minHeight: 40 }}
              >
                <option value={""}>-- Select Country --</option>
                {countriesList.map((_country) => (
                  <option key={_country.id} value={_country.id}>
                    {_country.name}
                  </option>
                ))}
              </select>
              <Typography variant="h3" mb={2} mt={3}>
                State
              </Typography>
              <select
                onChange={(e) => setcurrentState(e.target.value)}
                value={currentState}
                style={{ width: "100%", minHeight: 40 }}
              >
                <option value={""}>-- Select State --</option>
                {stateList.map((_state) => (
                  <option key={_state.id} value={_state.id}>
                    {_state.name}
                  </option>
                ))}
              </select>
              <Typography variant="h3" mb={2} mt={3}>
                City
              </Typography>
              <select
                onChange={(e) => setCity(e.target.value)}
                value={city}
                style={{ width: "100%", minHeight: 40 }}
              >
                <option value={""}>-- Select City --</option>
                {citiesList.map((_city) => (
                  <option key={_city.id} value={_city.id}>
                    {_city.name}
                  </option>
                ))}
              </select>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />
          <Grid sx={{ display: "flex" }}>
            <Button
              to="/getstate"
              component={Link}
              variant="outlined"
              startIcon={<ArrowLeft />}
            >
              GetState
            </Button>
            <Button
              component={Link}
              sx={{ ml: "auto" }}
              to="/get-languages"
              variant="outlined"
              endIcon={<ArrowRight />}
            >
              GetLanguages
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Citymethods;
