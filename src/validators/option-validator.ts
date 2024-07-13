// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950
// bg-red-800 border-red-800
// bg-green-800 border-green-800
// bg-yellow-500 border-yellow-500

import { PRODUCT_PRICES } from '@/config/products'

export const COLORS = [
  { label: 'Black', value: 'black', tw: 'zinc-900' },
  {
    label: 'Blue',
    value: 'blue',
    tw: 'blue-950',
  },
  { label: 'Rose', value: 'rose', tw: 'rose-950' },
  { label: 'Red', value: 'red', tw: 'red-800' },
  { label: 'Green', value: 'green', tw: 'green-800' },
  { label: 'Yellow', value: 'yellow', tw: 'yellow-500' },

] as const

export const MODELS = {
  name: 'models',
  options: [
    {
      label: 'T shirt',
      value: 'tshirt',
    },
    {
      label: 'Oversized T shirt ',
      value: 'oversizedTshirt',
    },
    {
      label: 'Pants',
      value: 'pants',
    },
    {
      label: 'Cargos',
      value: 'cargos',
    },
    {
      label: 'Varsity',
      value: 'varsity',
    },
    {
      label: 'Jacket',
      value: 'jacket',
    },
  ],
} as const

export const MATERIALS = {
  name: 'material',
  options: [
    {
      label: 'Synthetic',
      value: 'synthetic',
      description: 'Best for sports',
      price: PRODUCT_PRICES.material.synthetic,
    },
    {
      label: 'Cotton',
      value: 'cotton',
      description: 'Very light,soft and breathable',
      price: PRODUCT_PRICES.material.cotton,
    },
  ],
} as const

