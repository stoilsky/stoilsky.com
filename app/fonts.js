import {Archivo as Sans, Roboto_Mono as Serif} from 'next/font/google'

export const sans = Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
  style: ['normal'],
})

export const serif = Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})
