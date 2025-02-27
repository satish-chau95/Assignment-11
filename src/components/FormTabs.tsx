import { useState } from 'react';
import ActivityDetailsForm from './activity-details';
import LocationDetailsForm from './location-details';
import SuccessModal from './success-model';
import useFormData from '../hooks/useFormData';

const FormTabs = () => {
  const [activeTab, setActiveTab] = useState<'activity' | 'location'>('activity');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { formData, updateActivityDetails, updateLocationDetails, resetFormData } = useFormData();

  const handleNext = (data) => {
    updateActivityDetails(data);
    setActiveTab('location');
  };

  const handleSubmit = (data) => {
    updateLocationDetails(data);
    console.log('Form Data:', { ...formData, locationDetails: data });
    setShowSuccessModal(true);
    resetFormData();
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setActiveTab('activity'); // Reset to the first tab after submission
  };

  return (
    <div>
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 ${activeTab === 'activity' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('activity')}
        >
          Activity Details
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'location' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('location')}
        >
          Location Details
        </button>
      </div>
      {activeTab === 'activity' && <ActivityDetailsForm onNext={handleNext} initialData={formData.activityDetails} />}
      {activeTab === 'location' && <LocationDetailsForm onSubmit={handleSubmit} initialData={formData.locationDetails} />}
      {showSuccessModal && <SuccessModal onClose={closeSuccessModal} />}
    </div>
  );
};

export default FormTabs;