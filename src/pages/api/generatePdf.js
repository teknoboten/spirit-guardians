import PdfPrinter from 'pdfmake';
import { fonts } from '../../../utils/fonts'; // Define fonts (see below for example)

export default async (req, res) => {
  if (req.method === 'POST') {
    const printer = new PdfPrinter(fonts);
    const docDefinition = {
      content: [
        { text: 'Form Submission', style: 'header' },
        `First Name: ${req.body.firstName}`,
        `Last Name: ${req.body.lastName}`,
        `Email: ${req.body.email}`,
        // Add other form fields as needed
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        // Other styles as needed
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
