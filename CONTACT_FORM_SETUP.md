# Contact Form Setup Guide

Your contact form is now functional! Follow these steps to complete the setup:

## 📋 What's Been Implemented

✅ **Functional Contact Form** with validation
✅ **API Route** to handle form submissions
✅ **Email Integration** using Resend API
✅ **Loading States** and user feedback
✅ **Error Handling** and validation
✅ **Success Messages** and form reset
✅ **Responsive Design** with focus states

## 🚀 Setup Instructions

### Step 1: Get a Resend API Key

1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to **API Keys** section
4. Create a new API key
5. Copy the API key (you'll only see it once!)

**Free Plan Includes:**
- 100 emails/day
- 3,000 emails/month
- Perfect for portfolio websites

### Step 2: Configure Environment Variables

1. Open `.env.local` file in your project root
2. Replace the placeholder values:

```env
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=your-actual-email@example.com
```

Example:
```env
RESEND_API_KEY=re_123abc456def789ghi
CONTACT_EMAIL=sunil@example.com
```

### Step 3: Restart Development Server

After updating `.env.local`, restart your dev server:

```bash
# Stop the current server (Ctrl+C)
# Then run:
npm run dev
```

### Step 4: Test the Contact Form

1. Navigate to your website
2. Scroll to the Contact section
3. Fill in the form with test data
4. Click "Send Message"
5. Check your email inbox!

## 📧 How It Works

### User Flow:
1. User fills out the contact form
2. Clicks "Send Message" button
3. Form shows loading state ("Sending...")
4. Form data is sent to `/api/contact`
5. API validates the data
6. Email is sent via Resend to your email
7. Success message is displayed
8. Form is reset automatically

### Email You'll Receive:
- **From:** Portfolio Contact
- **Reply-To:** User's email (so you can reply directly)
- **Subject:** "New Contact Form Submission from [Name]"
- **Body:** Contains the user's name, email, and message

## 🎨 Form Features

### Validation:
- All fields are required
- Email format validation
- Server-side validation for security

### User Experience:
- Loading spinner during submission
- Success message (green) on successful send
- Error message (red) if something goes wrong
- Form disabled during submission
- Auto-clears after 5 seconds
- Focus states for better accessibility

### Security:
- CORS protection
- Input sanitization
- Rate limiting (via Resend)
- Environment variables for sensitive data

## 🔧 Customization

### Change Email Template

Edit `src/app/api/contact/route.js`:

```javascript
html: `
  <!-- Your custom HTML email template -->
  <h2>New Message from ${name}</h2>
  <p>${message}</p>
`
```

### Change Success Message

Edit `src/app/components/Contact.jsx`:

```javascript
setStatus({
  message: 'Your custom success message here!',
  type: 'success'
});
```

### Add More Fields

1. Add to `Contact.jsx` state:
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '', // New field
  message: ''
});
```

2. Add input in JSX:
```jsx
<input 
  type='tel' 
  name='phone'
  value={formData.phone}
  onChange={handleChange}
  placeholder='Phone Number'
/>
```

3. Update API route to handle the new field

## 🔍 Troubleshooting

### "Failed to send message" Error

**Possible Causes:**
1. Invalid or missing Resend API key
2. Wrong email format in `.env.local`
3. Development server not restarted after env changes
4. API key doesn't have send permissions

**Solution:**
- Check `.env.local` file for correct API key
- Verify API key in Resend dashboard
- Restart the dev server
- Check console for detailed error messages

### Email Not Arriving

**Check:**
1. Spam/Junk folder
2. Resend dashboard for email logs
3. Console for any error messages
4. Correct email in `CONTACT_EMAIL`

### Form Not Submitting

**Check:**
1. Browser console for JavaScript errors
2. Network tab for failed API calls
3. All required fields are filled
4. Valid email format entered

## 📱 Testing Tips

### Test Cases:
1. ✅ Submit with valid data
2. ✅ Try empty fields (should show browser validation)
3. ✅ Try invalid email format
4. ✅ Check loading state appears
5. ✅ Verify success message shows
6. ✅ Confirm form clears after success

### Monitor Emails:
- Resend Dashboard: [https://resend.com/emails](https://resend.com/emails)
- See all sent emails, delivery status, and logs
- Free plan includes detailed analytics

## 🎯 Alternative Email Solutions

If you prefer not to use Resend, you can integrate:

### 1. **EmailJS** (No backend needed)
- Free tier: 200 emails/month
- Easy setup with client-side only code

### 2. **SendGrid**
- Free tier: 100 emails/day
- Robust API with good documentation

### 3. **Nodemailer** (SMTP)
- Use your existing email server
- More configuration required

### 4. **Form Services**
- Formspree
- Getform
- Netlify Forms (if using Netlify)

## 📊 Monitoring

### Check Resend Dashboard For:
- Total emails sent
- Delivery rate
- Bounce rate
- Spam complaints
- API usage

### Console Logs:
The API route logs errors to console, check terminal for:
```
Error sending email: [error details]
```

## 🚀 Production Deployment

### Before Deploying:

1. **Environment Variables:**
   - Add `RESEND_API_KEY` to your hosting platform
   - Add `CONTACT_EMAIL` to your hosting platform
   - Never commit `.env.local` to version control

2. **Verify Domain (Recommended):**
   - In Resend dashboard, add your domain
   - Update `from` address in API route:
   ```javascript
   from: 'contact@yourdomain.com'
   ```
   - Better deliverability than using default domain

3. **Test in Production:**
   - Send test email after deployment
   - Check delivery to your inbox

### Platform-Specific Instructions:

**Vercel:**
```bash
vercel env add RESEND_API_KEY
vercel env add CONTACT_EMAIL
```

**Netlify:**
- Go to Site Settings → Environment Variables
- Add both variables

**Others:**
- Consult your hosting provider's documentation
- Look for "Environment Variables" or "Config Vars"

## 📝 Next Steps

1. [ ] Sign up for Resend account
2. [ ] Get API key
3. [ ] Update `.env.local` file
4. [ ] Restart dev server
5. [ ] Test the contact form
6. [ ] Check your email
7. [ ] Deploy to production with env vars

## 💡 Tips

- Keep your API key secure (never commit to Git)
- Monitor your email quota on free plan
- Reply promptly to contact form submissions
- Consider adding honeypot field for spam protection
- Add Google reCAPTCHA for additional security (optional)

## 🆘 Need Help?

If you encounter issues:
1. Check the console for error messages
2. Verify `.env.local` file exists and has correct values
3. Ensure dev server was restarted after env changes
4. Check Resend dashboard for API issues
5. Review the error message displayed to user

---

Your contact form is ready to use! Just add your Resend API key and start receiving messages. 🎉
