
# Medical Appointment Form - Zoho Creator Widget

This folder contains the files needed to create a Zoho Creator widget for the medical appointment form.

## Files Included

1. **appointment-form.html** - The main HTML file containing the complete appointment form
2. **plugin-manifest.json** - The manifest file required by Zoho Creator
3. **README.md** - This instruction file

## How to Create the Zoho Creator Widget

1. **Create a ZIP file** containing both files:
   - appointment-form.html
   - plugin-manifest.json

2. **Upload to Zoho Creator**:
   - Go to your Zoho Creator application
   - Navigate to the page where you want to add the widget
   - Click on "Add Widget" or "Custom Widget"
   - Upload the ZIP file

3. **Widget Features**:
   - Fully responsive design that works on desktop and mobile
   - Form validation for required fields
   - Toast notifications for success/error messages
   - Professional styling that matches modern web standards
   - All form data logged to console (can be modified to send to your backend)

## Customization

You can modify the HTML file to:
- Change styling colors and fonts
- Add or remove form fields
- Modify validation rules
- Change the form submission behavior
- Add integration with your backend API

## Form Data Structure

The form collects the following information:
- Personal Information (name, DOB, gender)
- Contact Information (email, phone, address)
- Appointment Details (type, date, time, provider, urgency)
- Medical Information (reason, symptoms, medications, allergies, etc.)

All form data is currently logged to the browser console. In a production environment, you would modify the JavaScript to send this data to your server or Zoho Creator's database.
