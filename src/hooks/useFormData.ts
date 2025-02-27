import { useState } from 'react';

// Define the types for the form data
interface ActivityDetails {
  activityName: string;
  category: string;
  description: string;
  activityType: string;
  locationType: string;
  minMembers: number;
  maxMembers: number;
}

interface LocationDetails {
  addressLine1: string;
  addressLine2: string;
  zipCode: string;
  city: string;
  state: string;
  contactNumber: string;
  contactName: string;
}

interface FormData {
  activityDetails: ActivityDetails;
  locationDetails: LocationDetails;
}

// Initial state for the form data
const initialFormData: FormData = {
  activityDetails: {
    activityName: '',
    category: '',
    description: '',
    activityType: '',
    locationType: '',
    minMembers: 0,
    maxMembers: 0,
  },
  locationDetails: {
    addressLine1: '',
    addressLine2: '',
    zipCode: '',
    city: '',
    state: '',
    contactNumber: '',
    contactName: '',
  },
};

// Custom hook to manage form data
const useFormData = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // Update activity details
  const updateActivityDetails = (data: Partial<ActivityDetails>) => {
    setFormData((prev) => ({
      ...prev,
      activityDetails: { ...prev.activityDetails, ...data },
    }));
  };

  // Update location details
  const updateLocationDetails = (data: Partial<LocationDetails>) => {
    setFormData((prev) => ({
      ...prev,
      locationDetails: { ...prev.locationDetails, ...data },
    }));
  };

  // Reset form data to initial state
  const resetFormData = () => {
    setFormData(initialFormData);
  };

  return {
    formData,
    updateActivityDetails,
    updateLocationDetails,
    resetFormData,
  };
};

export default useFormData;