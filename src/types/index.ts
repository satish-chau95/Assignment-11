export type ActivityFormData = {
    activityName: string;
    category: string;
    customCategory?: string;
    description: string;
    activityType: "indoor" | "outdoor" | "virtual";
    locationType: "provider" | "user";
    minMembers: number;
    maxMembers: number;
    addressLine1: string;
    addressLine2?: string;
    zipCode: string;
    city: string;
    state: string;
    contactNumber: string;
    contactName: string;
  };
  
  export type FormStep = "activity" | "location";