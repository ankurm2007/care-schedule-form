
import AppointmentForm from "@/components/AppointmentForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Schedule Your Appointment
          </h1>
          <p className="text-lg text-gray-600">
            Complete the form below to book your medical appointment
          </p>
        </div>
        <AppointmentForm />
      </div>
    </div>
  );
};

export default Index;
