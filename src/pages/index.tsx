"use client"

import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ActivityDetails } from "../components/activity-details"
import { LocationDetails } from "../components/location-details"
import { SuccessModal } from "../components/success-model"
import type { ActivityFormData, FormStep } from "@/types"
import { FileText, MapPin } from "lucide-react"

const formSchema = z.object({
  activityName: z.string().min(1, "Activity name is required"),
  category: z.string().min(1, "Category is required"),
  customCategory: z.string().optional(),
  description: z.string().min(1, "Description is required"),
  activityType: z.enum(["indoor", "outdoor", "virtual"]),
  locationType: z.enum(["provider", "user"]),
  minMembers: z.number().min(1, "Minimum members must be at least 1"),
  maxMembers: z.number().min(1, "Maximum members must be at least 1"),
  addressLine1: z.string().min(1, "Address is required"),
  addressLine2: z.string().optional(),
  zipCode: z.string().min(1, "ZIP code is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  contactNumber: z.string().min(1, "Contact number is required"),
  contactName: z.string().min(1, "Contact name is required"),
})

export default function CreateActivity() {
  const [currentStep, setCurrentStep] = useState<FormStep>("activity")
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const methods = useForm<ActivityFormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      activityType: "indoor",
      locationType: "provider",
      category: "other",
      minMembers: 1,
      maxMembers: 1,
    },
  })

  const onSubmit = async (data: ActivityFormData) => {
    try {
      console.log("Form submitted with data:", data)
      setShowSuccessModal(true)
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  const handleStepChange = async (step: FormStep) => {
    if (step === "location") {
      const isActivityValid = await methods.trigger([
        "activityName",
        "category",
        "description",
        "activityType",
        "locationType",
        "minMembers",
        "maxMembers",
      ])

      if (isActivityValid) {
        setCurrentStep(step)
      }
    } else {
      setCurrentStep(step)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-5 ml-32 mr-auto">
        <h1 className="font-inter font-bold text-2xl leading-[31.2px] tracking-normal pb-6">Create new Activity</h1>
        <div className="flex gap-8">
          <div className="w-48 shrink-0">
            <div className="space-y-1">
              <button
                type="button"
                className={`w-full flex items-center gap-2 px-4 py-2 text-left rounded-lg transition-colors ${
                  currentStep === "activity" ? "bg-gray-50 text-[#6B6B6B] font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-[#2E2B2B]"
                }`}
                onClick={() => handleStepChange("activity")}
              >
                <FileText className="w-5 h-5" />
                Activity Details
              </button>
              <button
                type="button"
                className={`w-full flex items-center gap-2 px-4 py-2 text-left rounded-lg transition-colors ${
                  currentStep === "location" ? "bg-gray-50 text-[#6B6B6B] font-bold"  : "text-gray-600 hover:bg-gray-50 hover:text-[#2E2B2B]"
                }`}
                onClick={() => handleStepChange("location")}
              >
                <MapPin className="w-5 h-5" />
                Location Details
              </button>
            </div>
          <div className="absolute bottom-[-370px] top-[13rem] left-[360px] w-0.5 bg-gray-200 border-box border-0 border-solid border-gray-200"></div>
          </div>
          <div className="flex-1 max-w-2xl ">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
                {currentStep === "activity" && <ActivityDetails onNext={() => handleStepChange("location")} />}
                {currentStep === "location" && <LocationDetails onPrevious={() => handleStepChange("activity")} />}
              </form>
            </FormProvider>
          </div>
        </div>
      </main>
      <Footer />
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false)
          methods.reset()
          setCurrentStep("activity")
        }}
      />
    </div>
  )
}

