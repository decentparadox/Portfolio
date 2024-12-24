'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { type FunctionComponent, useCallback, useEffect, useState } from 'react'
import Calendar, {
  type Props as ActivityCalendarProps,
} from 'react-activity-calendar'

// Adopted from https://github.com/grubersjoe/react-github-calendar
// Copyright (c) 2019 Jonathan Gruber, MIT License

interface Props extends Omit<ActivityCalendarProps, 'data' | 'theme'> {
  username: string
}

async function fetchCalendarData(username: string): Promise<ApiResponse> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=2024`,
  )
  const data: ApiResponse | ApiErrorResponse = await response.json()

  if (!response.ok) {
    throw Error(
      `Fetching GitHub contribution data for "${username}" failed: ${
        (data as ApiErrorResponse).error
      }`,
    )
  }

  return data as ApiResponse
}

const GithubCalendar: FunctionComponent<Props> = ({ username, ...props }) => {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = useCallback(() => {
    setLoading(true)
    setError(null)
    fetchCalendarData(username)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [username])

  useEffect(fetchData, [fetchData])

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <img
          src="/static/images/bento/bento-discord-futon.svg"
          alt="Error"
          width={0}
          height={0}
          className="bento-lg:w-48 h-auto w-24"
        />
        <p className="bento-lg:w-64 w-48 text-center text-sm text-muted-foreground">
          This component is down. Please email me!
        </p>
      </div>
    )
  }

  if (loading || !data) {
    return <div className='h-full w-full rounded-lg flex flex-col gap-4'>
            <Skeleton className="h-[90%] w-full rounded-lg" />
            <div className='w-full items-center justify-between hidden md:flex'>
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
  </div>
  }

  return (
    <>
      <div className="m-4 hidden sm:block">
        <Calendar
          data={selectLastNDays(data.contributions, 1000)}
          theme={{
            dark: ['#1A1A1A', '#9B99FF'],
          }}
          colorScheme="dark"
          blockSize={15}
          blockMargin={6}
          blockRadius={4}
          {...props}
          maxLevel={4}
        />
      </div>
      <div className="m-4 sm:hidden">
        <Calendar
          data={selectLastNDays(data.contributions, 1000)}
          theme={{
            dark: ['#1A1A1A', '#9B99FF'],
          }}
          colorScheme="dark"
          blockSize={15}
          blockMargin={6}
          blockRadius={4}
          {...props}
          maxLevel={4}
          hideTotalCount
          hideColorLegend
        />
      </div>
    </>
  )
}

interface Activity {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface ApiResponse {
  total: {
    [year: number]: number
    [year: string]: number
  }
  contributions: Array<Activity>
}

interface ApiErrorResponse {
  error: string
}

const selectLastNDays = (contributions: Activity[], days: number) => {
  const today = new Date()
  const startDate = new Date(today)
  startDate.setDate(today.getDate() - days)

  return contributions.filter((activity) => {
    const activityDate = new Date(activity.date)
    return activityDate >= startDate && activityDate <= today
  })
}

export default GithubCalendar
