"use client"

import { useFormContext } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { ActivityFormData } from "@/types"

interface ActivityDetailsProps {
  onNext: () => void
}

export function ActivityDetails({ onNext }: ActivityDetailsProps) {
  const {
    register,
    watch,
    formState: { errors },
    trigger,
  } = useFormContext<ActivityFormData>()

  const category = watch("category")

  const handleNext = async () => {
    const fieldsToValidate = [
      "activityName",
      "category",
      "description",
      "activityType",
      "locationType",
      "minMembers",
      "maxMembers",
    ]

    const isStepValid = await trigger(fieldsToValidate)

    if (isStepValid) {
      onNext()
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Activity Details</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="activityName">Activity Name <span className="text-red-500">*</span></Label>
          <Input className="rounded-full" id="activityName" placeholder="Eg: Cooking Class in Palo Alto" {...register("activityName")} />
          {errors.activityName && <p className="text-sm text-red-500">{errors.activityName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label>Select the best category to describe your activity <span className="text-red-500">*</span></Label>
          <RadioGroup defaultValue="other" {...register("category")}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="adventure" id="adventure" />
              <Label htmlFor="adventure">Adventure & Games</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="creative" id="creative" />
              <Label htmlFor="creative">Creative Expression</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="food" id="food" />
              <Label htmlFor="food">Food & Drinks</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="learning" id="learning" />
              <Label htmlFor="learning">Learning & Development</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sports" id="sports" />
              <Label htmlFor="sports">Sports and Fitness</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="volunteering" id="volunteering" />
              <Label htmlFor="volunteering">Volunteering</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
          {category === "other" && (
            <Input placeholder="Specify the category" {...register("customCategory")} className="rounded-full mt-2" />
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">About the Activity <span className="text-red-500">*</span></Label>
          <Textarea
            id="description"
            placeholder="Activity Description"
            className="min-h-[100px]"
            {...register("description")}
          />
          {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
        </div>

        <div className="space-y-2">
          <Label>Please select the activity type <span className="text-red-500">*</span></Label>
          <RadioGroup defaultValue="indoor" {...register("activityType")}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="indoor" id="indoor" />
              <Label htmlFor="indoor">Indoor</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="outdoor" id="outdoor" />
              <Label htmlFor="outdoor">Outdoor</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="virtual" id="virtual" />
              <Label htmlFor="virtual">Virtual</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Please select the type of location <span className="text-red-500">*</span></Label>
          <RadioGroup defaultValue="provider" {...register("locationType")}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="provider" id="provider" />
              <Label htmlFor="provider">Provider Location</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="user" id="user" />
              <Label htmlFor="user">User Location</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
        <Label>How many members can take part in the activity?</Label>
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="minMembers">Minimum Members</Label>
            <Input
            className="rounded-full"
              id="minMembers"
              type="number"
              min="1"
              defaultValue="1"
              {...register("minMembers", {
                valueAsNumber: true,
                min: 1,
              })}
            />
            {errors.minMembers && <p className="text-sm text-red-500">{errors.minMembers.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="maxMembers">Maximum Members</Label>
            <Input
              className="rounded-full"
              id="maxMembers"
              type="number"
              min="1"
              defaultValue="1"
              {...register("maxMembers", {
                valueAsNumber: true,
                min: 1,
              })}
            />
            {errors.maxMembers && <p className="text-sm text-red-500">{errors.maxMembers.message}</p>}
          </div>
        </div>
        </div> 
        <Button type="button" onClick={handleNext} className="w-1/3 h-10 rounded-full text-white bg-[rgba(0,29,68,1)] hover:bg-[#222933]">
          Save and Continue
        </Button>
      </div>
    </div>
  )
}

