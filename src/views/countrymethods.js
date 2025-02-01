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
import { GetCountries } from "react-country-state-city";
import { Link } from "react-router-dom";
import CodeBlockWithCopy from "ui-component/codeblockwithcopy";

function Countrymethods() {
  const rows = [
    {
      title: "id",
      type: "number",
      description: "A unique identifier that distinguishes each country.",
      example: "1",
    },
    {
      title: "name",
      type: "string",
      description: "Represents the official name of the country.",
      example: "Afghanistan",
    },
    {
      title: "iso3",
      type: "string",
      description:
        "Refers to the three-letter ISO 3166-1 alpha-3 code for the country",
      example: "AFG",
    },
    {
      title: "iso2",
      type: "string",
      description:
        "Refers to the two-letter ISO 3166-1 alpha-2 code for the country",
      example: "AF",
    },
    {
      title: "numeric_code",
      type: "string",
      description:
        "A three-digit numeric ISO 3166-1 code assigned to the country",
      example: "004",
    },
    {
      title: "phone_code",
      type: "number",
      description:
        "Refers to the international dialing code associated with that country",
      example: "93",
    },
    {
      title: "capital",
      type: "string",
      description:
        "Refers to the city or town that serves as the administrative and political center of the country",
      example: "Kabul",
    },
    {
      title: "currency",
      type: "string",
      description:
        "refers to the official monetary system used for transactions within that country",
      example: "AFN",
    },
    {
      title: "currency_name",
      type: "string",
      description:
        "Refers to the full name of the official currency used in that country",
      example: "Afghan afghani",
    },
    {
      title: "currency_symol",
      type: "string",
      description:
        "Refers to the graphical symbol or sign used to represent the country's currency",
      example: "؋",
    },
    {
      title: "native",
      type: "string",
      description:
        "Refers to the name of the country in its own native language.",
      example: "افغانستان",
    },
    {
      title: "region",
      type: "string",
      description:
        "Refers to the broader geographical area or part of the world where the country is located",
      example: "Asia",
    },
    {
      title: "subregion",
      type: "string",
      description:
        "Refers to a smaller, more specific geographical area within a region",
      example: "Southern Asia",
    },
    {
      title: "emoji",
      type: "string",
      description:
        "Refers to the flag or symbol used to visually represent that country",
      example: "🇦🇫",
    },
    {
      title: "tld",
      type: "string",
      description:
        "Refers to the suffix at the end of a country's internet domain name.",
      example: ".af",
    },
    {
      title: "latitude",
      type: "string",
      description:
        "Refers to the geographical coordinate that specifies the north-south position of a point on the Earth's surface",
      example: "33.00000000",
    },
    {
      title: "longitude",
      type: "string",
      description:
        "Refers to the geographical coordinate that specifies the east-west position of a point on the Earth's surface.",
      example: "65.00000000",
    },
    {
      title: "hasStates",
      type: "boolean",
      description:
        "Indicates whether the country contains any states.",
      example: true,
    }
  ];
  const [country, setCountry] = useState(null);
  const [countriesList, setCountriesList] = useState([]);
  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);
  const thegist = `
    import React, { useState, useEffect } from "react";
    import { GetCountries } from "react-country-state-city";
    
    export default function App() {
        const [countriesList, setCountriesList] = useState([]);
        useEffect(() => {
            GetCountries().then((result) => {
                setCountriesList(result);
            });
        }, []);

        return (
            <div>
            ...
            </div>
        );
    }
    `;
  const samplegist = `
    import React, { useState, useEffect } from "react";
    import { GetCountries } from "react-country-state-city";
    
    export default function App() {
        ...

        return (
            <div>
                <h3>
                    Country
                </h3>
                <select
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}>
                    <option value={""}>-- Select Country --</option>
                    {countriesList.map((_country) => (
                        <option key={country.id} value={country.id}>
                            {country.name}
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
          <Typography sx={{ color: "text.primary" }}>
            GetCountries
          </Typography>
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
            GetCountries
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
              The GetCountries function in react-country-state-city fetches a
              list of country objects. The async function returns an array of
              country objects, each containing details such as name, code, and
              region.
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
                style={{width:'100%',minHeight:40}}
              >
                <option value={""}>-- Select Country --</option>
                {countriesList.map((_country) => (
                  <option key={_country.id} value={_country.id}>
                    {_country.name}
                  </option>
                ))}
              </select>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 2 }} />
          <Grid sx={{display:'flex'}}>
            <Button to="/phonecode-select" component={Link} variant="outlined" startIcon={<ArrowLeft />}>Phonecode Select</Button>
            <Button  component={Link} sx={{ml:'auto'}} to="/get-states" variant="outlined"  endIcon={<ArrowRight />}>GetState</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Countrymethods;
