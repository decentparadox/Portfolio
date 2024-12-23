import { Astro } from '@/icons/Astro'
import { Docker } from '@/icons/Docker'
import { Drizzle } from '@/icons/Drizzle'
import { Hono } from '@/icons/Hono'
import { Jest } from '@/icons/Jest'
import { Nestjs } from '@/icons/NestJs'
import { NextJs } from '@/icons/NextJs'
import { Nuxtjs } from '@/icons/NuxtJs'
import { Prisma } from '@/icons/Prisma'
import { Puppeteer } from '@/icons/Puppeteer'
import { ReactJs } from '@/icons/ReactJs'
import { Reactquery } from '@/icons/ReactQuery'
import { Swr } from '@/icons/Swr'
import { Tailwindcss } from '@/icons/Tailwind'
import { TypeScript } from '@/icons/TypeScript'
import { Vuejs } from '@/icons/VueJs'
import type { JSX, SVGProps } from 'react'

type TechStack = {
  name: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  description: string
}

const techStacks: TechStack[] = [
  {
    name: 'TypeScript',
    icon: TypeScript,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'Next',
    icon: NextJs,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'React Native',
    icon: ReactJs,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'React Query',
    icon: Reactquery,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'Tailwind',
    icon: Tailwindcss,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'SWR',
    icon: Swr,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'Puppeteer',
    icon: Puppeteer,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'Jest',
    icon: Jest,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'Prisma',
    icon: Prisma,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'Drizzle',
    icon: Drizzle,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'Nest',
    icon: Nestjs,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'Hono',
    icon: Hono,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'Astro',
    icon: Astro,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'Vue',
    icon: Vuejs,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'Nuxt',
    icon: Nuxtjs,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'Docker',
    icon: Docker,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
]

export default techStacks
