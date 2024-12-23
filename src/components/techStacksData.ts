import { Astro } from '@/icons/Astro'
import { Docker } from '@/icons/Docker'
import { Drizzle } from '@/icons/Drizzle'
import { Hono } from '@/icons/Hono'
import { NextJs } from '@/icons/NextJs'
import { Prisma } from '@/icons/Prisma'
import { Puppeteer } from '@/icons/Puppeteer'
import { ReactJs } from '@/icons/ReactJs'
import { Swr } from '@/icons/Swr'
import { Tailwindcss } from '@/icons/Tailwind'
import { TypeScript } from '@/icons/TypeScript'
import { Figma } from '@/icons/Figma'
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
    name: 'Figma',
    icon: Figma,
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
    name: 'Docker',
    icon: Docker,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
]

export default techStacks
