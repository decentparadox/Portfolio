import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    budget: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <div className="font-mono">
      <div className="flex items-center justify-between pb-4 font-krypton opacity-75">
        <h2 className="">(Contact)</h2>
        <a href="/guestbook" className="text-right">
          (Sign my guestbook)
        </a>
      </div>
      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        <div className="md:w-1/3">
          <h2 className="mb-4 text-lg">
            Let's unlock together the next level of possibilities! Reach out.
          </h2>
          <div className="mb-6">
            <h3 className="mb-2 font-krypton text-sm text-accent">
              SOCIAL MEDIA
            </h3>
            <p className="text-xs">TWITTER - INSTAGRAM - GITHUB - TWITCH</p>
          </div>
          <div>
            <h3 className="mb-2 font-krypton text-sm text-accent">
              GET IN TOUCH
            </h3>
            <p className="text-xs">HELLO@DECENTPARADOX.TECH</p>
          </div>
          <div className="mt-4">
            <h3 className="mb-2 font-krypton text-sm text-accent">LOCATION</h3>
            <p className="text-xs">BANGALORE - INDIA</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 font-mono md:w-2/3">
          <div className="flex gap-6">
            <div className="w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b bg-transparent pb-1"
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border-b bg-transparent pb-1"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-1/2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b bg-transparent pb-1"
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="budget"
                placeholder="Budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full border-b bg-transparent pb-1"
              />
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border-b bg-transparent pb-1"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 font-krypton text-lg uppercase text-accent transition-colors hover:text-gray-100"
            >
              Submit
              <div className="fill-accent">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 100">
                  <path d="M70.4,58.9L70.1,57l-0.2-0.9c0,0,0,0,0,0l-0.2-0.9c-18.7,3.4-27.6,13.4-31.9,22.7V3h-0.9H35h-0.9v75.3c-4.2-9.7-13.2-20.2-31.9-23.2L1.9,57L1.7,58c0,0,0,0,0,0l-0.1,0.9c28.7,4.5,32.2,27.6,32.5,35.3c-0.1,1.7,0,2.7,0,2.8l0.9-0.1v0l0.5,0l2.4,0.1c0,0,0-0.6,0-1.5v-2.5C38.4,84.4,42.5,63.9,70.4,58.9z"></path>
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
