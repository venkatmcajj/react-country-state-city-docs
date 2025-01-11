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
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { PhonecodeSelect } from "react-country-state-city";
import CodeBlockWithCopy from "ui-component/codeblockwithcopy";

function PhonecodeComponent() {
  const [phonecode, setPhonecode] = useState(null);
  const thegist = `
    import React, { useState } from "react";
    import { PhonecodeSelect } from "react-country-state-city";
    import "react-country-state-city/dist/react-country-state-city.css";
    
    export default function App() {
      const [phonecode, setPhonecode] = useState(null);

      return (
        <div>
          <h6>Phonecode</h6>
          <PhonecodeSelect
            containerClassName="form-group"
            inputClassName=""
            onChange={(_code) => setPhonecode(_code)}
            onTextChange={(_txt) => console.log(_txt)}
            defaultValue={phonecode}
            placeHolder="Select Phone Code"
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
          <Typography sx={{ color: "text.primary" }}>
            Phonecode Select
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
                Phonecode
              </Typography>
              <PhonecodeSelect
                containerClassName="form-group"
                inputClassName=""
                onChange={(_code) => setPhonecode(_code)}
                onTextChange={(_txt) => console.log(_txt)}
                defaultValue={phonecode}
                placeHolder="Select Phone Code"
              />
            </Grid>
          </Grid>
          <Typography variant={"h1"} mt={5}>
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

          {/* region */}
          <Typography variant={"h3"} mt={2}>
            region //regionid
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
            Required : false
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Description: The region prop is used to filter and display only the
            countries that belong to a specific region.
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* showFlag */}
          <Typography variant={"h3"} mt={2}>
            showFlag
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Type: Boolean
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Default : true
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Required : false
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Description: Flags are displayed when true and not displayed when
            false. default is true.
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* defaultValue */}
          <Typography variant={"h3"} mt={2}>
            defaultValue
          </Typography>
          <Box sx={{ height: 16 }} />
          <Typography variant={"label"} mt={2}>
            Type: Phonecode
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
            Description: The current value: a phonecode object
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

          <Grid sx={{ display: "flex" }}>
            <Button
              to="/region-select"
              component={Link}
              variant="outlined"
              startIcon={<ArrowLeft />}
            >
              Region Select
            </Button>
            <Button
              component={Link}
              sx={{ ml: "auto" }}
              to="/get-countries"
              variant="outlined"
              endIcon={<ArrowRight />}
            >
              Methods
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PhonecodeComponent;
