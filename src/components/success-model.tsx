import { X } from "lucide-react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 relative">
        <button onClick={onClose} className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full">
          <X className="w-5 h-5 text-gray-500" />
        </button>
        <div className="text-center pt-4">
          <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">Form Submitted</h2>
        </div>
      </div>
    </div>
  )
}

