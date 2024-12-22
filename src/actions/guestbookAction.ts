"use server"
import { neon } from '@neondatabase/serverless'

interface GuestbookEntry {
  id: number
  name: string
  link?: string
  message: string
  date: string
  isAnonymous: boolean
}

/**
 * Fetches all entries from the guestbook ordered by date.
 */
export const fetchEntries = async (): Promise<GuestbookEntry[]> => {
  const sql = neon(import.meta.env.NEON_DATABASE_URL)
  const result = await sql`SELECT * FROM guestbook ORDER BY date DESC`
  return result.map((entry: any) => ({
    id: entry.id,
    name: entry.name,
    link: entry.link,
    message: entry.message,
    date: entry.date,
    isAnonymous: entry.is_anonymous,
  }))
}

/**
 * Adds a new entry to the guestbook.
 */
export const addEntry = async (entry: {
  name: string
  link?: string
  message: string
  isAnonymous: boolean
}): Promise<void> => {
  const sql = neon(import.meta.env.NEON_DATABASE_URL)
  await sql`
    INSERT INTO guestbook (name, link, message, is_anonymous)
    VALUES (${entry.name}, ${entry.link || null}, ${entry.message}, ${entry.isAnonymous});
  `
}
