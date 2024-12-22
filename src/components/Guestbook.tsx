'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { fetchEntries, addEntry } from '@/actions/guestbookAction'

interface GuestbookEntry {
  id: number
  name: string
  link?: string
  message: string
  date: string
  isAnonymous: boolean
}

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [formData, setFormData] = useState({
    name: '',
    link: '',
    message: '',
    isAnonymous: false,
  })

  useEffect(() => {
    loadEntries()
  }, [])

  const loadEntries = async () => {
    try {
      const data = await fetchEntries()
      setEntries(data)
    } catch (error) {
      console.error('Error loading entries:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await addEntry(formData)
      // Refresh entries and reset the form
      loadEntries()
      setFormData({ name: '', link: '', message: '', isAnonymous: false })
    } catch (error) {
      console.error('Error adding entry:', error)
    }
  }

  const convertToIST = (date: string): string => {
    const dateObj = new Date(date)
    return dateObj.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata',
    })
  }

  return (
    <div className="min-h-screen font-mono text-white">
      <h1 className="mb-8 font-krypton text-4xl font-bold">Guestbook</h1>

      <Card className="mb-8 border-zinc-700 bg-zinc-800">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="border-zinc-600 bg-zinc-700 text-white placeholder:text-zinc-400"
            />
            <Input
              placeholder="Link to web/social media presence"
              value={formData.link}
              onChange={(e) =>
                setFormData({ ...formData, link: e.target.value })
              }
              className="border-zinc-600 bg-zinc-700 text-white placeholder:text-zinc-400"
            />
            <Textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="min-h-[120px] border-zinc-600 bg-zinc-700 text-white placeholder:text-zinc-400"
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="anonymous"
                checked={formData.isAnonymous}
                onChange={(e) =>
                  setFormData({ ...formData, isAnonymous: e.target.checked })
                }
                className="mr-2"
              />
              <label htmlFor="anonymous" className="text-sm text-zinc-400">
                Post anonymously
              </label>
            </div>
            <Button
              type="submit"
              className="bg-zinc-700 text-white hover:bg-zinc-600"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="border border-b-0 border-l-0 border-r-0 border-t-2 py-4"
          >
            <div className="mb-2 flex items-start justify-between">
              <span
                className={`text-lg ${
                  entry.link ? 'text-accent' : 'text-white'
                }`}
              >
                {entry.link ? (
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entry.isAnonymous ? 'Anonymous' : entry.name}
                  </a>
                ) : entry.isAnonymous ? (
                  'Anonymous'
                ) : (
                  entry.name
                )}
              </span>
              <span className="text-zinc-400">{convertToIST(entry.date)}</span>
            </div>
            <p className="text-zinc-300">{entry.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
