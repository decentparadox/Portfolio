import { neon } from '@neondatabase/serverless'

const sql = neon(import.meta.env.NEON_DATABASE_URL)

interface Entry {
  name: string
  timestamp: number
  url: string | null
  message: string
  isAnonymous: boolean
  createdAt: number
}

// Sanitize input to prevent XSS
function sanitize(input: string): string {
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// Async function to create a guestbook entry
export async function createEntry(data: URLSearchParams): Promise<void> {
  const name = sanitize(data.get('name')?.trim() ?? '')
  const url = sanitize(data.get('link')?.trim() ?? '')
  const message = sanitize(data.get('message')?.trim() ?? '')
  const anon = data.get('anonymous') === 'on'

  if (
    name &&
    name.length <= 64 &&
    (!url || url.includes('://')) &&
    url.length <= 128 &&
    message.length <= 320
  ) {
    const timestamp = Date.now()
    try {
      await sql`
                INSERT INTO "Guestbook" ("name", "socialLink", "message", "isAnonymous", "createdAt")
                VALUES (${name}, ${url || null}, ${message}, ${anon}, ${timestamp});
            `
      console.log('Entry successfully created.')
    } catch (error) {
      console.error('Error creating entry:', error)
    }
  } else {
    console.error('Invalid data provided for entry creation.')
  }
}

// Fetch all guestbook entries
export async function fetchEntries(): Promise<Entry[]> {
  const result = await sql`
        SELECT * FROM "Guestbook" ORDER BY "Guestbook"."createdAt" DESC;
    `
  return result.map((row: Record<string, any>) => ({
    name: row.name,
    timestamp: row.timestamp,
    url: row.socialLink,
    message: row.message,
    isAnonymous: row.isAnonymous,
    createdAt: row.createdAt,
  }))
}
