import { AccountTree, Flag, LocalPhone, LocationCity, Public, Translate } from "@mui/icons-material";

// ==============================|| COMPONENTS MENU ITEMS ||============================== //

const components = {
  id: "components",
  title: "Components",
  type: "group",
  children: [
    {
      id: "country-select",
      title: "Country Select",
      type: "item",
      url: "/country-select",
      icon: Flag,
      breadcrumbs: true,
    },
    {
      id: "state-select",
      title: "State Select",
      type: "item",
      url: "/state-select",
      icon: AccountTree,
      breadcrumbs: true,
    },
    {
      id: "city-select",
      title: "City Select",
      type: "item",
      url: "/city-select",
      icon: LocationCity,
      breadcrumbs: true,
    },
    {
      id: "language-select",
      title: "Language Select",
      type: "item",
      url: "/language-select",
      icon: Translate,
      breadcrumbs: true,
    },
    {
      id: "region-select",
      title: "Region Select",
      type: "item",
      url: "/region-select",
      icon: Public,
      breadcrumbs: true,
    },
    {
      id: "phonecode-select",
      title: "Phonecode Select",
      type: "item",
      url: "/phonecode-select",
      icon: LocalPhone,
      breadcrumbs: true,
    },
  ],
};

export default components;
