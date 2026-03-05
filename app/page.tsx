"use client"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const [name, setName] = useState("")
  const [skills, setSkills] = useState("")
  const [job, setJob] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const generateResume = async () => {
    setLoading(true)

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, skills, job }),
    })

    const data = await res.json()
    setResult(data.result)
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dbe5d8] to-[#f3e9dc] p-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl"
      >

        <div className="flex items-center justify-center mb-4">
          <div className="bg-[#a3b18a] text-white p-3 rounded-full text-xl shadow-md">
            🧠
          </div>
        </div>

        <h1 className="text-4xl font-extrabold mb-2 text-center text-[#344e41]">
          AI Resume Builder
        </h1>

        <p className="text-center text-[#588157] mb-8">
          Create professional resume summaries instantly
        </p>

        <input
          className="border border-[#C2B280] bg-[#F5F1E6] text-[#3A5A40] placeholder-[#6B8E6E] focus:border-[#588157] focus:ring-2 focus:ring-[#588157] outline-none p-3 rounded-xl w-full mb-4 transition"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="border border-[#C2B280] bg-[#F5F1E6] text-[#3A5A40] placeholder-[#6B8E6E] focus:border-[#588157] focus:ring-2 focus:ring-[#588157] outline-none p-3 rounded-xl w-full mb-4 transition"
          placeholder="Your Skills"
          rows={3}
          onChange={(e) => setSkills(e.target.value)}
        />

        <textarea
          className="border border-[#C2B280] bg-[#F5F1E6] text-[#3A5A40] placeholder-[#6B8E6E] focus:border-[#588157] focus:ring-2 focus:ring-[#588157] outline-none p-3 rounded-xl w-full mb-4 transition"
          placeholder="Target Job Role"
          rows={2}
          onChange={(e) => setJob(e.target.value)}
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={generateResume}
          className="bg-[#588157] hover:bg-[#3a5a40] text-white font-semibold px-6 py-3 rounded-xl w-full transition duration-300 shadow-md"
        >
          {loading ? "Generating..." : "Generate Resume"}
        </motion.button>

        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 p-5 bg-[#f6f0e8] border border-[#e6dccf] rounded-xl whitespace-pre-wrap text-[#344e41] shadow-inner"
          >
            {result}
          </motion.div>
        )}

      </motion.div>
    </div>
  )
}