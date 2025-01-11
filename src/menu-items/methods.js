import { AccountTree, Flag, LocalPhone, LocationCity, Public, Translate } from "@mui/icons-material";

// ==============================|| COMPONENTS MENU ITEMS ||============================== //

const methods = {
  id: "methods",
  title: "Methods",
  type: "group",
  children: [
    {
      id: "get-countries",
      title: "GetCountries",
      type: "item",
      url: "/get-countries",
      icon: Flag,
      breadcrumbs: true,
    },
    {
      id: "get-states",
      title: "GetState",
      type: "item",
      url: "/get-states",
      icon: AccountTree,
      breadcrumbs: true,
    },
    {
      id: "get-city",
      title: "GetCity",
      type: "item",
      url: "/get-city",
      icon: LocationCity,
      breadcrumbs: true,
    },
    {
      id: "get-languages",
      title: "GetLanguages",
      type: "item",
      url: "/get-languages",
      icon: Translate,
      breadcrumbs: true,
    },
    {
      id: "get-regions",
      title: "GetRegions",
      type: "item",
      url: "/get-regions",
      icon: Public,
      breadcrumbs: true,
    },
    {
      id: "get-phonecodes",
      title: "GetPhonecodes",
      type: "item",
      url: "/get-phonecodes",
      icon: LocalPhone,
      breadcrumbs: true,
    },
    {
      id: "get-countries-by-region",
      title: "GetCountriesByRegion",
      type: "item",
      url: "/get-countries-by-region",
      icon: Flag,
      breadcrumbs: true,
    },
    {
      id: "get-phonecodes-by-region",
      title: "GetPhonecodesByRegion",
      type: "item",
      url: "/get-phonecodes-by-region",
      icon: LocalPhone,
      breadcrumbs: true,
    },
    {
      id: "get-allcities",
      title: "GetAllCities",
      type: "item",
      url: "/get-allcities",
      icon: LocationCity,
      breadcrumbs: true,
    },
  ],
};

export default methods;
