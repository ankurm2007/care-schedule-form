
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AppointmentData } from './AppointmentForm';

interface MedicalInfoSectionProps {
  data: AppointmentData;
  updateData: (data: Partial<AppointmentData>) => void;
}

const MedicalInfoSection = ({ data, updateData }: MedicalInfoSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-gray-800">Medical Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="reasonForVisit">Reason for Visit * </Label>
          <Textarea
            id="reasonForVisit"
            value={data.reasonForVisit}
            onChange={(e) => updateData({ reasonForVisit: e.target.value })}
            placeholder="Please describe the main reason for your appointment..."
            className="min-h-[80px]"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="symptoms">Current Symptoms</Label>
          <Textarea
            id="symptoms"
            value={data.symptoms}
            onChange={(e) => updateData({ symptoms: e.target.value })}
            placeholder="Describe any symptoms you're experiencing..."
            className="min-h-[80px]"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="medications">Current Medications</Label>
            <Textarea
              id="medications"
              value={data.medications}
              onChange={(e) => updateData({ medications: e.target.value })}
              placeholder="List any medications you're currently taking..."
              className="min-h-[80px]"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="allergies">Known Allergies</Label>
            <Textarea
              id="allergies"
              value={data.allergies}
              onChange={(e) => updateData({ allergies: e.target.value })}
              placeholder="List any known allergies..."
              className="min-h-[80px]"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="medicalHistory">Relevant Medical History</Label>
          <Textarea
            id="medicalHistory"
            value={data.medicalHistory}
            onChange={(e) => updateData({ medicalHistory: e.target.value })}
            placeholder="Include any relevant medical conditions, surgeries, or family history..."
            className="min-h-[80px]"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="insurance">Insurance Provider</Label>
            <Input
              id="insurance"
              value={data.insurance}
              onChange={(e) => updateData({ insurance: e.target.value })}
              placeholder="Your insurance provider"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
            <Input
              id="emergencyContact"
              value={data.emergencyContact}
              onChange={(e) => updateData({ emergencyContact: e.target.value })}
              placeholder="Emergency contact full name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
            <Input
              id="emergencyPhone"
              type="tel"
              value={data.emergencyPhone}
              onChange={(e) => updateData({ emergencyPhone: e.target.value })}
              placeholder="(555) 123-4567"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicalInfoSection;
