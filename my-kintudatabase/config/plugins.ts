export default ({ env }: { env: (key: string) => string }) => ({
    // Other plugin configurations...
  
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
  