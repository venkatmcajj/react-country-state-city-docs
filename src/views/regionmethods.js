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
import { GetRegions } from "react-country-state-city";
import { Link } from "react-router-dom";
import CodeBlockWithCopy from "ui-component/codeblockwithcopy";

function RegionMethods() {
  const rows = [
    {
      title: "id",
      type: "string",
      description: "A unique identifier that distinguishes each region.",
      example: "111",
    },
    {
      title: "name",
      type: "string",
      description: "Refers to the full name of the region",
      example: "Asia",
    },    
    {
      title: "hasCountries",
      type: "boolean",
      description:
        "Indicates whether the region contains any countries.",
      example: true,
    }
  ];
  const [region, setRegion] = useState(null);
  const [regionList, setRegionList] = useState([]);
  useEffect(() => {
    GetRegions().then((result) => {
      setRegionList(result);
    });
  }, []);
  const thegist = `
    import React, { useState, useEffect } from "react";
    import { GetRegions } from "react-country-state-city";
    
    export default function App() {
      const [region, setRegion] = useState(null);
      const [regionList, setRegionList] = useState([]);
      useEffect(() => {
        GetRegions().then((result) => {
          setRegionList(result);
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
    import { GetRegions } from "react-country-state-city";
    
    export default function App() {
        ...

        return (
            <div>
                <h3>
                    Region
                </h3>
                <select
                  onChange={(e) => setRegion(e.target.value)}
                  value={region}>
                  <option value={""}>-- Select Region --</option>
                  {regionList.map((_region) => (
                    <option key={_region.id} value={_region.name}>
                        {_region.name}
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
            GetRegions
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
            GetRegions
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
              The GetRegions function in react-country-state-city fetches a
              list of region objects. The async function returns an array of
              region objects, each containing details such as name and unique id.
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
                Region
              </Typography>
              <select
                onChange={(e) => setRegion(e.target.value)}
                value={region}
                style={{width:'100%',minHeight:40}}
              >
                <option value={""}>-- Select Region --</option>
                {regionList.map((_region) => (
                  <option key={_region.id} value={_region.name}>
                    {_region.name}
                  </option>
                ))}
              </select>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 2 }} />
          <Grid sx={{display:'flex'}}>
            <Button to="/get-languages" component={Link} variant="outlined" startIcon={<ArrowLeft />}>GetLanguages</Button>
            <Button  component={Link} sx={{ml:'auto'}} to="/get-phonecodes" variant="outlined"  endIcon={<ArrowRight />}>GetPhonecodes</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RegionMethods;
