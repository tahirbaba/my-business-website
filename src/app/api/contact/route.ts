import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // SMTP configuration (make sure env variables are set correctly)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.5;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully.' });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Unknown error';
    console.error('Email sending error:', errMsg);
    return NextResponse.json({ error: 'Server error. Email could not be sent.' }, { status: 500 });
  }
}


// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: Request) {
//   const { name, email, message } = await req.json();

//   // Basic validation
//   if (!name || !email || !message) {
//     return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
//   }

//   // Optional: Email format validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
//   }

//   try {
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });
//     const mailOptions = {
//       from: `"${name}" <${process.env.SMTP_USER}>`,
//       to: process.env.SMTP_TO,
//       replyTo: email, // so reply goes to sender
//       subject: `New message from ${name}`,
//       html: `
//         <div style="font-family: sans-serif; font-size: 15px; line-height: 1.5;">
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Message:</strong><br/>${message}</p>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true });
//   } catch (error: any) {
//     console.error('Email sending failed:', error.message);
//     return NextResponse.json({ error: 'Server error. Failed to send email.' }, { status: 500 });
//   }
// }
