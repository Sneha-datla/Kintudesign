
export default ({ env }: { env: (key: string) => string }) => ({
  // Other plugin configurations...
  email: {
    provider: 'nodemailer', 
       providerOptions: {
        host: env('SMTP_HOST',), // SMTP server address
        port: parseInt(env('SMTP_PORT',), 10), // SMTP port (587 for TLS or 465 for SSL)
      auth: {
        user: env('SMTP_USER'), // Your email account
        pass: env('SMTP_PASS'), // Your email password or API key
      },
      secure: false, // Set to true if you're using port 465
    },
    
  },

  ckeditor: {
    enabled: true,
    config: {
      toolbar: [
        'heading', '|',
        'bold', 'italic', '|',
        'bulletedList', 'numberedList', '|',
        'blockQuote', '|',
        'insertTable', '|',
        'undo', 'redo'
      ],
      // Additional customizations can be added here
    },
  },
 

});

