import PdfPrinter from 'pdfmake';
// import { fonts } from '../../../utils/fonts';
import { fonts } from '../../../utils/fonts';

export default async (req, res) => {
  console.log('sign up!!');
};

// export default async (req, res) => {
//   console.log('lets make a PDF!');
//   if (req.method === 'POST') {
//     console.log(req.body);
//     const printer = new PdfPrinter(fonts);
//     const docDefinition = {
//       content: [
//         { text: 'AWG Sign Up & Waiver', style: 'header' },
//         `First Name: ${req.body.firstName}`,
//         `Last Name: ${req.body.lastName}`,
//         `Email: ${req.body.email}`,
//         `Date of Birth: ${req.body.birthDate}`,
//         `Pronouns: ${req.body.pronouns}`,
//         `Address: ${req.body.street}`,
//         `City: ${req.body.city}`,
//         `Guardian Name: ${req.body.guardianName}`,
//         `Date Signed: ${req.body.dateSigned}`,
//         `Photo Consent: ${req.body.photoConsent}`,
//         `Parent / Guardian Signature:`,
//         // {
//         //   image: req.body.signature,
//         //   width: 200, // You can adjust the size as needed
//         // },
//       ],
//       styles: {
//         header: {
//           fontSize: 18,
//           bold: true,
//           margin: [0, 0, 0, 10],
//         },
//         // Other styles as needed
//       },
//     };

//     const pdfDoc = printer.createPdfKitDocument(docDefinition);
//     let chunks = [];
//     pdfDoc.on('data', (chunk) => chunks.push(chunk));
//     pdfDoc.on('end', () => {
//       const result = Buffer.concat(chunks);
//       res.setHeader('Content-Type', 'application/pdf');
//       res.send(result);
//     });
//     pdfDoc.end();
//   } else {
//     res.status(405).end();
//   }
// };
