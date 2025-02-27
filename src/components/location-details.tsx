"use client"

import { useFormContext } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { ActivityFormData } from "@/types"

interface LocationDetailsProps {
  onPrevious: () => void
}

export function LocationDetails({ onPrevious }: LocationDetailsProps) {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<ActivityFormData>()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Location Details</h2>
        <p className="text-sm text-gray-600">Please specify the address for where the activity takes place.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="addressLine1">Address Line 1 <span className="text-red-500">*</span></Label>
          <Input className="rounded-full" id="addressLine1" placeholder="House number and street name" {...register("addressLine1")} />
          {errors.addressLine1 && <p className="text-sm text-red-500">{errors.addressLine1.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="addressLine2">Address Line 2</Label>
          <Input
          className="rounded-full"
            id="addressLine2"
            placeholder="Other information, e.g., building name, landmark, etc."
            {...register("addressLine2")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="zipCode">ZIP Code <span className="text-red-500">*</span></Label>
          <Input className="rounded-full" id="zipCode" placeholder="eg: 123 467" {...register("zipCode")} />
          {errors.zipCode && <p className="text-sm text-red-500">{errors.zipCode.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
            <Input className="rounded-full" id="city" placeholder="Your City" {...register("city")} />
            {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State <span className="text-red-500">*</span></Label>
            <Input className="rounded-full" id="state" placeholder="Your State" {...register("state")} />
            {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <div>
            <h3 className="text-lg font-semibold">Contact details</h3>
            <p className="text-sm text-gray-600">Please provide contact information for this activity.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactNumber">Contact Number <span className="text-red-500">*</span></Label>
              <Input className="rounded-full" id="contactNumber" type="tel" placeholder="Contact Number" {...register("contactNumber")} />
              {errors.contactNumber && <p className="text-sm text-red-500">{errors.contactNumber.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactName">Contact <span className="text-red-500">*</span></Label>
              <Input className="rounded-full" id="contactName" placeholder="Contact Name" {...register("contactName")} />
              {errors.contactName && <p className="text-sm text-red-500">{errors.contactName.message}</p>}
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button type="button" className="w-1/3 h-10 rounded-full text-black bg-[rgba(247,247,247,1)] border border-black" onClick={onPrevious}>
            Previous
          </Button>
          <Button type="submit" className="w-1/3 h-10 rounded-full text-white bg-[rgba(0,29,68,1)] hover:bg-[#222933]" disabled={isSubmitting}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

