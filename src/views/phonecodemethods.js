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
import { GetPhonecodes } from "react-country-state-city";
import { Link } from "react-router-dom";
import CodeBlockWithCopy from "ui-component/codeblockwithcopy";

function PhonecodeMethods() {
  const rows = [
    {
      title: "id",
      type: "string",
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
      title: "phone_code",
      type: "number",
      description:
        "Refers to the international dialing code associated with that country",
      example: "93",
    },
    {
      title: "region",
      type: "string",
      description:
        "Refers to the broader geographical area or part of the world where the country is located",
      example: "Asia",
    },
  ];
  const [phonecode, setPhonecode] = useState(null);
  const [phoncodeList, setPhonecodeList] = useState([]);
  useEffect(() => {
    GetPhonecodes().then((result) => {
      setPhonecodeList(result);
    });
  }, []);
  const thegist = `
    import React, { useState, useEffect } from "react";
    import { GetPhonecodes } from "react-country-state-city";
    
    export default function App() {
      const [phonecode, setPhonecode] = useState(null);
      const [phoncodeList, setPhonecodeList] = useState([]);
      useEffect(() => {
        GetPhonecodes().then((result) => {
          setPhonecodeList(result);
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
    import { GetPhonecodes } from "react-country-state-city";
    
    export default function App() {
        ...

        return (
            <div>
                <h3>
                    Phonecode
                </h3>
                <select
                  onChange={(e) => setPhonecode(e.target.value)}
                  value={phonecode}>
                  <option value={""}>-- Select Phonecode --</option>
                  {phoneCodeList.map((_code) => (
                    <option key={_code.id} value={_code.phone_code}>
                        +{_code.phone_code}
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
          <Typography sx={{ color: "text.primary" }}>GetPhonecodes</Typography>
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
          <Typography variant={"h1"}>GetPhonecodes</Typography>
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
              The GetPhonecodes function from the react-country-state-city
              package is used to retrieve a list of phone codes for countries.
              This async function typically returns an array of objects
              containing country names and their corresponding international
              dialing codes (phone codes). It helps to easily access and display
              phone codes for different countries in applications.
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
                Phonecode
              </Typography>
              <select
                onChange={(e) => setPhonecode(e.target.value)}
                value={phonecode}
                style={{ width: "100%", minHeight: 40 }}
              >
                <option value={""}>-- Select Phonecode --</option>
                {phoncodeList.map((_code) => (
                  <option key={_code.id} value={_code.phone_code}>
                    +{_code.phone_code}
                  </option>
                ))}
              </select>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />
          <Grid sx={{ display: "flex" }}>
            <Button
              to="/get-regions"
              component={Link}
              variant="outlined"
              startIcon={<ArrowLeft />}
            >
              GetLanguages
            </Button>
            <Button
              component={Link}
              sx={{ ml: "auto" }}
              to="/get-countries-by-region"
              variant="outlined"
              endIcon={<ArrowRight />}
            >
              GetCountriesByRegion
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PhonecodeMethods;
