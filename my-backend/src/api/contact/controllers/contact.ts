import { factories } from '@strapi/strapi';
import { Context } from 'koa';
import nodemailer from 'nodemailer';

const contactController = factories.createCoreController('api::contact.contact', ({ strapi }) => ({
  async create(ctx: Context): Promise<void> {
    // Log the request body for debugging
    console.log(ctx.request.body);
    
    // Destructure data from the request body
    const { email } = ctx.request.body; 
    console.log('Extracted email:', email);

    // Validate that an email is provided and is in a valid format
    if (!email) {
      return ctx.throw(400, 'Email is required.');
    }

   
    // Create a Nodemailer transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'your-email@gmail.com', // Your email
        pass: process.env.SMTP_PASS || 'your-email-password', // Use an app password or your email password
      },
    });

    try {
      // Send mail using Nodemailer
      const info = await transporter.sendMail({
        from: process.env.SMTP_USER || 'your-email@gmail.com', // sender address
        to: email, // Use the provided email address
        subject: 'Thank You for Your Submission',
        text: 'Thank you for contacting us. We appreciate your message and will get back to you soon!',
        html: '<p>Thank you for contacting us. We appreciate your message and will get back to you soon!</p>',
      });

      // Log the message ID (optional)
      console.log('Message sent: %s', info.messageId);

      // Respond with success message
      ctx.send({ message: 'Submission successful and email sent.' });
    } catch (error: any) {
      // Log the error and throw a server error
      console.error('Error sending email:', error.message || error);
      console.error('Stack Trace:', error.stack);
      ctx.throw(500, 'Failed to send thank you email.');
    }
  },
}));

export default contactController;
