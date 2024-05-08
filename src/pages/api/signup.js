import PdfPrinter from 'pdfmake';
import { fonts } from '../../../utils/fonts';

export default async (req, res) => {
  console.log('lets make a PDF!');
  if (req.method === 'POST') {
    console.log(req.body);
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
    pdfDoc.on('end', () => {
      const result = Buffer.concat(chunks);
      res.setHeader('Content-Type', 'application/pdf');
      res.send(result);
    });
    pdfDoc.end();
  } else {
    res.status(405).end();
  }
};
