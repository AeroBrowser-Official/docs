import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState(null)

  const emojis = ["😊", "🤩", "🤔", "😴"]

  const handleCancel = () => {
    setIsOpen(false)
    setSelectedEmoji(null)
  }

  const handleSend = () => {
    setIsOpen(false)
    setSelectedEmoji(null)
    // Add your send logic here
  }

  return (
    <div className="max-w-xl mx-auto">
      <motion.div
        initial={false}
        animate={{ backgroundColor: isOpen ? "rgba(0, 0, 0, 0.1)" : "transparent" }}
        className="rounded-xl p-6 border border-zinc-800"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-400">Was this helpful?</span>
          <div className="flex gap-1">
            {emojis.map((emoji, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedEmoji(index)
                  setIsOpen(true)
                }}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-lg border ${
                  selectedEmoji === index
                    ? "bg-zinc-800 text-white border-zinc-700"
                    : "border-zinc-700 hover:bg-zinc-800/20"
                }`}
              >
                {emoji}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pt-4">
                <textarea
                  placeholder="Type your feedback here."
                  className="w-full min-h-[100px] p-3 text-sm bg-zinc-800/10 rounded-lg border border-zinc-700 resize-none placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-500 focus:outline-none"
                />
                <div className="flex justify-end gap-2">
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium text-zinc-300 bg-transparent border border-zinc-700 rounded-lg hover:bg-zinc-800"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSend}
                    className="px-4 py-2 text-sm font-medium text-white bg-zinc-800 rounded-lg hover:bg-zinc-700"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
