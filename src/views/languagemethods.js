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
import { GetLanguages } from "react-country-state-city";
import { Link } from "react-router-dom";
import CodeBlockWithCopy from "ui-component/codeblockwithcopy";

function LanguageMethods() {
  const rows = [
    {
      title: "code",
      type: "string",
      description: "Refers to the standardized identifier assigned to a language, typically in the form of a two- or three-letter code.",
      example: "ab",
    },
    {
      title: "name",
      type: "string",
      description: "Refers to the full name of the language in English",
      example: "Abkhazian",
    },
    {
      title: "native",
      type: "string",
      description:
        "Refers to the full name of the language in its native form",
      example: "Аҧсуа",
    }
  ];
  const [language, setLanguage] = useState(null);
  const [languageList, setLanguageList] = useState([]);
  useEffect(() => {
    GetLanguages().then((result) => {
      setLanguageList(result);
    });
  }, []);
  const thegist = `
    import React, { useState, useEffect } from "react";
    import { GetLanguages } from "react-country-state-city";
    
    export default function App() {
      const [language, setLanguage] = useState(null);
      const [languageList, setLanguageList] = useState([]);
      useEffect(() => {
        GetLanguages().then((result) => {
          setLanguageList(result);
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
    import { GetLanguages } from "react-country-state-city";
    
    export default function App() {
        ...

        return (
            <div>
                <h3>
                    Language
                </h3>
                <select
                  onChange={(e) => setLanguage(e.target.value)}
                  value={language}>
                  <option value={""}>-- Select Language --</option>
                  {languageList.map((_lan) => (
                    <option key={_lan.name} value={_lan.name}>
                        {_lan.name}
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
            GetLanguages
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
            GetLanguages
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
              The GetLanguages function in react-country-state-city fetches a
              list of language objects. The async function returns an array of
              language objects, each containing details such as name, code, and
              native.
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
                Language
              </Typography>
              <select
                onChange={(e) => setLanguage(e.target.value)}
                value={language}
                style={{width:'100%',minHeight:40}}
              >
                <option value={""}>-- Select Language --</option>
                {languageList.map((_lan) => (
                  <option key={_lan.name} value={_lan.name}>
                    {_lan.name}
                  </option>
                ))}
              </select>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 2 }} />
          <Grid sx={{display:'flex'}}>
            <Button to="/get-city" component={Link} variant="outlined" startIcon={<ArrowLeft />}>GetCity</Button>
            <Button  component={Link} sx={{ml:'auto'}} to="/getregion" variant="outlined"  endIcon={<ArrowRight />}>GetRegions</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LanguageMethods;
