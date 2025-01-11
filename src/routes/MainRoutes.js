// project imports
import CountryComponent from "views/countrycomponent";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../views/dashboard";
import StateComponent from "views/statecomponent";
import CityComponent from "views/citycomponent";
import LanguageComponent from "views/languagecomponent";
import RegionComponent from "views/regioncomponent";
import PhonecodeComponent from "views/phonecodecomponent";
import Countrymethods from "views/countrymethods";
import Statemethods from "views/statemethods";
import Citymethods from "views/citymethods";
import LanguageMethods from "views/languagemethods";
import RegionMethods from "views/regionmethods";
import PhonecodeMethods from "views/phonecodemethods";
import Countrybyregionmethods from "views/countrybyregionmethods";
import PhonecodebyRegionMethods from "views/phonecodebyregionmethods";
import AllCitymethods from "views/allcitymethods";

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/getting-started",
      element: <Dashboard />,
    },
    {
      path: "/country-select",
      element: <CountryComponent />,
    },
    {
      path: "/state-select",
      element: <StateComponent />,
    },
    {
      path: "/city-select",
      element: <CityComponent />,
    },
    {
      path: "/language-select",
      element: <LanguageComponent />,
    },
    {
      path: "/region-select",
      element: <RegionComponent />,
    },
    {
      path: "/phonecode-select",
      element: <PhonecodeComponent />,
    },
    {
      path: "/get-countries",
      element: <Countrymethods />,
    },    
    {
      path: "/get-states",
      element: <Statemethods />,
    },   
    {
      path: "/get-city",
      element: <Citymethods />,
    },   
    {
      path: "/get-languages",
      element: <LanguageMethods />,
    },   
    {
      path: "/get-regions",
      element: <RegionMethods />,
    },  
    {
      path: "/get-phonecodes",
      element: <PhonecodeMethods />,
    },
    {
      path: "/get-countries-by-region",
      element: <Countrybyregionmethods />,
    },
    {
      path: "/get-phonecodes-by-region",
      element: <PhonecodebyRegionMethods />,
    },
    {
      path: "/get-allcities",
      element: <AllCitymethods />,
    }
  ],
};

export default MainRoutes;
