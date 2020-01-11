import keyBy from 'lodash/keyBy';
export default async function fetchCars() {
  return keyBy([
    {
      id: 'ea3be38d-3977-4fb9-a425-328abbcb2715',
      name: 'Acura MDX SUV',
      year: '2020',
      model: 'MDX',
      make: 'Acura',
      media: 'https://media.ed.edmunds-media.com/acura/mdx/2020/oem/2020_acura_mdx_4dr-suv_sport-hybrid-sh-awd_fq_oem_2_815.jpg',
      price: '$44,500'

    },
    {
      id: '26536add-5c5b-4ffa-8a73-ee784bc41bed',
      name: 'Audi Q5 SUV',
      year: '2020',
      model: 'Q5 45 TFSI quattro',
      make: 'Audi',
      media: 'https://media.ed.edmunds-media.com/audi/q5/2020/oem/2020_audi_q5_4dr-suv_prestige-45-tfsi-quattro_fq_oem_1_815.jpg',
      price: '$47,700'

    },
    {
      id: '7e5ad798-6a00-4b6c-948d-3f5fe0b72473',
      name: 'Porsche Taycan',
      year: '2020',
      model: 'Taycan Turbo',
      make: 'Porsche',
      media: 'https://media.ed.edmunds-media.com/porsche/taycan/2020/oem/2020_porsche_taycan_sedan_turbo-s_fq_oem_3_815.jpg',
      price: '$150,900'
    },
    {
      id: '90374ff5-70b1-475a-9c8b-1ea9e6ff83d9',
      name: 'Mercedes-Benz GLC-Class',
      year: '2020',
      model: 'GLC',
      make: 'Mercedes Benz',
      media: 'https://media.ed.edmunds-media.com/mercedes-benz/glc-class/2020/oem/2020_mercedes-benz_glc-class_4dr-suv_glc-300-4matic_fq_oem_3_815.jpg',
      price: '$44,500'
    },
      {
          id: 'c1aeaffa-7e1f-483b-aa13-c34b54e318ab',
          name: 'Jaguar F-TYPE R',
          year: '2020',
          model: 'R',
          make: 'Jaguar',
          media: 'https://media.ed.edmunds-media.com/jaguar/f-type/2020/oem/2020_jaguar_f-type_convertible_p380-r-dynamic_fq_oem_1_815.jpg',
          price: '$101,800'
      },
    {
      id: 'c1e3ab10-99a2-44cb-8262-b206eeb63c39',
      name: 'INFINITI QX50',
      year: '2020',
      model: 'QX50',
      make: 'Infiniti',
      media: 'https://media.ed.edmunds-media.com/infiniti/qx50/2019/oem/2019_infiniti_qx50_4dr-suv_essential_fq_oem_4_815.jpg',
      price: '$49,200'
    },
      {
          id: '36a4b78c-4ddb-4795-b849-68e2d7399219',
          name: 'Lexus RX 450hl',
          year: '2020',
          model: 'RX 450hl',
          make: 'Lexus',
          media: 'https://media.ed.edmunds-media.com/lexus/rx-450hl/2020/oem/2020_lexus_rx-450hl_4dr-suv_luxury_fq_oem_2_815.jpg',
          price: '$50,500'
      },
      {
          id: '069d8006-8972-40c6-bee8-c4c001daaa8b',
          name: 'BMW X6',
          year: '2020',
          model: 'X6',
          make: 'BMW',
          media: 'https://media.ed.edmunds-media.com/bmw/x6/2020/oem/2020_bmw_x6_4dr-suv_m50i_fq_oem_3_815.jpg',
          price: '$64,300'
      },
      {
          id: 'f46f18d0-fae6-408c-9502-391db0e928a1',
          name: 'Tesla Model X',
          year: '2020',
          model: 'X',
          make: 'Tesla',
          media: 'https://media.ed.edmunds-media.com/tesla/model-x/2019/oem/2019_tesla_model-x_4dr-suv_performance_fq_oem_9_815.jpg',
          price: '$84,900'
      },
      {
          id: 'ece397a8-6e9a-4b2a-a9e2-162da120a96d',
          name: 'Rolls-Royce Phantom',
          year: '2019',
          model: 'Phantom',
          make: 'Rolls-Royce',
          media: 'https://media.ed.edmunds-media.com/rolls-royce/phantom/2018/oem/2018_rolls-royce_phantom_sedan_base_f_oem_1_815.jpg',
          price: '$450,000'
      }
  ], 'id')
}
