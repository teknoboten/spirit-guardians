import PdfPrinter from 'pdfmake';
import { fonts } from '../../../utils/fonts';
import { google } from 'googleapis';
import { Readable } from 'stream'; // Import Readable from stream module

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not allowed' });
  }

  try {
    // Initialize Google Drive API
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    const drive = google.drive({
      version: 'v3',
      auth,
    });
    const printer = new PdfPrinter(fonts);
    const docDefinition = {
      content: [
        { text: 'AWG Sign Up & Waiver', style: 'header' },

        {
          text: 'Participant Information',
          style: 'sectionHeader',
        },
        {
          text: `First Name: ${req.body.firstName}`,
          style: 'field',
        },

        {
          text: `Last Name: ${req.body.lastName}`,
          style: 'field',
        },
        // {
        //   text: `Email: ${req.body.email}`,
        //   style: 'field',
        // },
        {
          text: `Date of Birth: ${req.body.birthDate}`,
          style: 'field',
        },
        {
          text: `Pronouns: ${req.body.pronouns}`,
          style: 'field',
        },
        {
          text: `Address: ${req.body.street}`,
          style: 'field',
        },
        {
          text: `City: ${req.body.city}`,
          style: 'field',
        },

        {
          text: `PHOTO & VIDEO AUTHORIZATION`,
          style: 'sectionHeader',
        },
        {
          text: `I grant Arrow Wood Games personnel permission to take photographs, video and audio recordings of my child and authorize Arrow Wood Games to use recordings for the purpose of publicity, advertising, and promotion. (It's okay to say no, we understand!)`,
          style: 'subheader',
        },

        {
          text: `Parent / Guardian Name: ${req.body.guardianName}`,
          style: 'field',
        },
        {
          text: `Photo Authorization: ${req.body.photoConsent}`,
          style: 'field',
        },

        {
          text: `ARROW WOOD GAMES WAIVER, RELEASE & INDEMNITY`,
          style: 'sectionHeader',
        },
        {
          text: ` I am aware that there are risks associated with the participation in Arrow Wood Games’ programs, including the risk of injury, and I consent to my child’s participation in full awareness of such risks. I acknowledge that it is my responsibility to advise the Arrow Wood Games Staff of any medical or other conditions which may affect my child’s participation in programs and have listed them below. I understand that I am responsible for immediately notifying staff of any changes to the information included in this document. In the event that my child requires medical attention, I consent to my child being transported to the nearest emergency centre, including by ambulance if necessary. I have read this form and understand and accept its terms.`,
          style: 'subheader',
        },

        {
          text: `Parent / Guardian Name: ${req.body.guardianName}`,
          style: 'field',
        },
        {
          text: `Date Signed: ${req.body.dateSigned}`,
          style: 'field',
        },

        {
          image: req.body.signature,
          margin: 6,
        },
      ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          alignment: 'center',
          color: '#4a5568', // Tailwind gray-700
          margin: [0, 0, 0, 20], // top, right, bottom, left
        },
        subheader: {
          fontSize: 13,
          color: '#4a5568',
          margin: [0, 0, 0, 10],
        },
        boldText: {
          bold: true,
          fontSize: 14,
          margin: [0, 0, 0, 10],
        },
        sectionHeader: {
          fontSize: 16,
          bold: true,
          color: '#4a5568',
          margin: [0, 10, 0, 6],
        },
        field: {
          fontSize: 12,
          margin: [0, 0, 0, 4],
        },
      },
    };

    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    let chunks = [];
    pdfDoc.on('data', (chunk) => chunks.push(chunk));
    pdfDoc.on('end', async () => {
      const pdfBuffer = Buffer.concat(chunks);

      // Convert buffer to stream
      const pdfStream = new Readable();
      pdfStream.push(pdfBuffer);
      pdfStream.push(null); // Indicate the end of the stream

      // Upload to Google Drive
      try {
        const response = await drive.files.create({
          requestBody: {
            name: `${req.body.firstName + '-' + req.body.lastName + '' + req.body.dateSigned}`,
            mimeType: 'application/pdf',
            parents: ['1VB6hUdOFZPJ9SAeZI1291264INHqfjkj'],
          },
          media: {
            mimeType: 'application/pdf',
            body: pdfStream,
          },
        });

        console.log('pdf uploaded', response.data);
        res.status(200).json({
          fileId: response.data.id,
          message: 'File uploaded successfully',
        });
      } catch (uploadError) {
        console.error('error uploading PDF', uploadError);
        res.status(500).json({
          error: 'failed to upload PDF',
          details: uploadError.message,
        });
      }
    });

    pdfDoc.end();
  } catch (err) {
    console.error('error setting up PDF generation or google drive', err);
    res.status(500).json({ error: 'server error', details: err.message });
  }
}
