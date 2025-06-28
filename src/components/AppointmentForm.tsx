
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import PersonalInfoSection from './PersonalInfoSection';
import AppointmentDetailsSection from './AppointmentDetailsSection';
import MedicalInfoSection from './MedicalInfoSection';
import ContactInfoSection from './ContactInfoSection';

export interface AppointmentData {
  // Personal Information
  firstName: string;
  lastName: string;
  dateOfBirth: Date | undefined;
  gender: string;
  
  // Contact Information
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Appointment Details
  appointmentType: string;
  preferredDate: Date | undefined;
  preferredTime: string;
  provider: string;
  urgency: string;
  
  // Medical Information
  reasonForVisit: string;
  symptoms: string;
  medications: string;
  allergies: string;
  medicalHistory: string;
  insurance: string;
  emergencyContact: string;
  emergencyPhone: string;
}

const AppointmentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<AppointmentData>({
    firstName: '',
    lastName: '',
    dateOfBirth: undefined,
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    appointmentType: '',
    preferredDate: undefined,
    preferredTime: '',
    provider: '',
    urgency: 'routine',
    reasonForVisit: '',
    symptoms: '',
    medications: '',
    allergies: '',
    medicalHistory: '',
    insurance: '',
    emergencyContact: '',
    emergencyPhone: '',
  });

  const updateFormData = (section: string, data: Partial<AppointmentData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'appointmentType', 'reasonForVisit'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof AppointmentData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    console.log('Appointment Data:', formData);
    toast({
      title: "Appointment Request Submitted",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PersonalInfoSection 
        data={formData} 
        updateData={(data) => updateFormData('personal', data)} 
      />
      
      <ContactInfoSection 
        data={formData} 
        updateData={(data) => updateFormData('contact', data)} 
      />
      
      <AppointmentDetailsSection 
        data={formData} 
        updateData={(data) => updateFormData('appointment', data)} 
      />
      
      <MedicalInfoSection 
        data={formData} 
        updateData={(data) => updateFormData('medical', data)} 
      />

      <Card>
        <CardContent className="pt-6">
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg"
          >
            Submit Appointment Request
          </Button>
        </CardContent>
      </Card>
    </form>
  );
};

export default AppointmentForm;
