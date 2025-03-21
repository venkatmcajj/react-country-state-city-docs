import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'change-log',
    'getting-started',
    {
      type: 'category',
      label: 'Components',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'components/country-select',
        'components/state-select',
        'components/city-select',
        'components/language-select',
        'components/region-select',
        'components/phonecode-select'
      ],
    },
    {
      type: 'category',
      label: 'Methods',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'methods/getcountries',
        'methods/getstate',
        'methods/getcity',
        'methods/getlanguages',
        'methods/getregions',
        'methods/getphonecodes',
        'methods/getcountriesbyregion',
        'methods/getphonecodesbyregion'
      ],
    },
    {
      type: 'category',
      label: 'Types',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'types/country',
        'types/state',
        'types/city',
        'types/language',
        'types/region',
        'types/phonecode'
      ],
    }
  ]
}
export default sidebars