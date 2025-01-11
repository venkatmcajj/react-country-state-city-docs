import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import {Link} from 'react-router-dom';
import React, { useState } from "react";
import { CitySelect, CountrySelect, StateSelect } from "react-country-state-city";
import CodeBlockWithCopy from "ui-component/codeblockwithcopy";

function CityComponent() {
  const [country, setCountry] = useState(null);
  const [currentState, setCurrentState] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  const thegist = `
    import React, { useState } from "react";
    import { CountrySelect, StateSelect, CitySelect } from "react-country-state-city";
    import "react-country-state-city/dist/react-country-state-city.css";
    
    export default function App() {
      const [country, setCountry] = useState(null);
      const [currentState, setCurrentState] = useState(null);
      const [currentCity, setCurrentCity] = useState(null);

      return (
        <div>
          //country
          ....
          //state
          ....
          //city
          <h6>City</h6>
          <CitySelect
            countryid={country?.id}
            stateid={currentState?.id}
            containerClassName="form-group"
            inputClassName=""
            onChange={(_city) => setCurrentCity(_city)}
            onTextChange={(_txt) => console.log(_txt)}
            defaultValue={currentCity}
            placeHolder="Select City"
          />
        </div>
      );
    }
  `;
  return (
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Breadcrumbs aria-label="breadcrumb" mx={5} mt={5}>
          <Link underline="hover" color="inherit" to="/">
            Components
          </Link>
          <Typography sx={{ color: "text.primary" }}>City Select</Typography>
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
            The Gist
          </Typography>
          <CodeBlockWithCopy code={thegist} />
          <Grid
            border={"1px solid gray"}
            borderTop={0}
            borderRadius={2}
            mt={-2}
            pt={3}
          >
            <Grid lg={6} mx={"auto"} mb={1}>
              <Typography variant="h3" mb={3}>
                Country
              </Typography>
              <CountrySelect
                containerClassName="form-group"
                inputClassName=""
                onChange={(_country) => setCountry(_country)}
                onTextChange={(_txt) => console.log(_txt)}
                defaultValue={country}
                placeHolder="Select Country"
              />
            </Grid>
            <Grid lg={6} mx={"auto"} mb={1}>
              <Typography variant="h3" mb={3}>
                State
              </Typography>
              <StateSelect
                countryid={country?.id}
                containerClassName="form-group"
                inputClassName=""
                onChange={(_state) => setCurrentState(_state)}
                onTextChange={(_txt) => console.log(_txt)}
                defaultValue={currentState}
                placeHolder="Select State"
              />
            </Grid>
            <Grid lg={6} mx={"auto"} mb={1}>
              <Typography variant="h3" mb={3}>
                City
              </Typography>
              <CitySelect
                countryid={country?.id}
                stateid={currentState?.id}
                containerClassName="form-group"
                inputClassName=""
                onChange={(_city) => setCurrentCity(_city)}
                onTextChange={(_txt) => console.log(_txt)}
                defaultValue={currentCity}
                placeHolder="Select City"
              />
            </Grid>
          </Grid>
          <Typography variant={"h1"} mt={5}>
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

          {/* stateid */}
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

          {/* defaultValue */}
          <Typography variant={"h3"} mt={2}>
            defaultValue
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Type: City
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Default : null
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Required : false
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Description: The current value: a city object
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* containerClassName */}
          <Typography variant={"h3"} mt={2}>
            containerClassName
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
            Description: styles for a container
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* inputClassName */}
          <Typography variant={"h3"} mt={2}>
            inputClassName
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
            Description: styles for a input box
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* onChange */}
          <Typography variant={"h3"} mt={2}>
            onChange
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Type: function
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
            Description: The current value: a country object.The argument is the
            country object
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* onTextChange */}
          <Typography variant={"h3"} mt={2}>
            onTextChange
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Type: function
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
            Description: A callback fired when the input text changes.
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* placeHolder */}
          <Typography variant={"h3"} mt={2}>
            placeHolder
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
            Description: Placeholder text displayed in empty input
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Grid sx={{display:'flex'}}>
            <Button component={Link} to="/state-select" variant="outlined" startIcon={<ArrowLeft />}>State Select</Button>
            <Button component={Link} sx={{ml:'auto'}} to="/language-select" variant="outlined"  endIcon={<ArrowRight />}>Language Select</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CityComponent;
