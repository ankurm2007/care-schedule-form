
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { AppointmentData } from './AppointmentForm';

interface AppointmentDetailsSectionProps {
  data: AppointmentData;
  updateData: (data: Partial<AppointmentData>) => void;
}

const AppointmentDetailsSection = ({ data, updateData }: AppointmentDetailsSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-gray-800">Appointment Details</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Appointment Type *</Label>
          <Select value={data.appointmentType} onValueChange={(value) => updateData({ appointmentType: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select appointment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general-checkup">General Checkup</SelectItem>
              <SelectItem value="consultation">Consultation</SelectItem>
              <SelectItem value="follow-up">Follow-up Visit</SelectItem>
              <SelectItem value="vaccination">Vaccination</SelectItem>
              <SelectItem value="lab-work">Lab Work</SelectItem>
              <SelectItem value="specialist">Specialist Referral</SelectItem>
              <SelectItem value="urgent-care">Urgent Care</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Preferred Provider</Label>
          <Select value={data.provider} onValueChange={(value) => updateData({ provider: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select provider" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dr-smith">Dr. Smith (Family Medicine)</SelectItem>
              <SelectItem value="dr-johnson">Dr. Johnson (Internal Medicine)</SelectItem>
              <SelectItem value="dr-williams">Dr. Williams (Pediatrics)</SelectItem>
              <SelectItem value="dr-brown">Dr. Brown (Cardiology)</SelectItem>
              <SelectItem value="dr-davis">Dr. Davis (Dermatology)</SelectItem>
              <SelectItem value="no-preference">No Preference</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Preferred Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !data.preferredDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {data.preferredDate ? format(data.preferredDate, "PPP") : "Select preferred date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={data.preferredDate}
                onSelect={(date) => updateData({ preferredDate: date })}
                disabled={(date) => date < new Date()}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <Label>Preferred Time</Label>
          <Select value={data.preferredTime} onValueChange={(value) => updateData({ preferredTime: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select preferred time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12:00 PM - 5:00 PM)</SelectItem>
              <SelectItem value="evening">Evening (5:00 PM - 8:00 PM)</SelectItem>
              <SelectItem value="no-preference">No Preference</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <Label>Urgency Level</Label>
          <Select value={data.urgency} onValueChange={(value) => updateData({ urgency: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select urgency level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="routine">Routine (within 2-4 weeks)</SelectItem>
              <SelectItem value="soon">Soon (within 1-2 weeks)</SelectItem>
              <SelectItem value="urgent">Urgent (within 1-3 days)</SelectItem>
              <SelectItem value="emergency">Emergency (same day)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentDetailsSection;
