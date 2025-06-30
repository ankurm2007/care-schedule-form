
# Medical Appointment Form - Zoho Creator Widget

This folder contains the files needed to create a Zoho Creator widget for the medical appointment form.

## Files Included

1. **index.html** - The main HTML file containing the complete appointment form structure
2. **style.css** - All CSS styling for the form and responsive design
3. **script.js** - JavaScript functionality for form validation, submission, and interactions
4. **manifest.json** - The manifest file required by Zoho Creator
5. **README.md** - This instruction file

## How to Create the Zoho Creator Widget

1. **Create a ZIP file** containing all four files:
   - index.html
   - style.css
   - script.js
   - manifest.json

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

## File Structure

- **index.html**: Contains the HTML structure with form fields organized in sections
- **style.css**: Responsive CSS styling with modern design and animations
- **script.js**: Form validation, submission handling, and toast notifications
- **manifest.json**: Zoho Creator widget configuration

## Customization

You can modify the files to:
- **style.css**: Change styling colors, fonts, and layout
- **index.html**: Add or remove form fields, modify structure
- **script.js**: Modify validation rules, change form submission behavior, add API integration
- **manifest.json**: Update widget metadata and configuration

## Form Data Structure

The form collects the following information:
- Personal Information (name, DOB, gender)
- Contact Information (email, phone, address)
- Appointment Details (type, date, time, provider, urgency)
- Medical Information (reason, symptoms, medications, allergies, etc.)

All form data is currently logged to the browser console. In a production environment, you would modify the JavaScript to send this data to your server or Zoho Creator's database.
