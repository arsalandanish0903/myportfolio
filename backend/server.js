const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get("/" ,(req, res) => {
    res.send("Server start")
})

const transportar = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "arsalandanish0903@gmail.com",
        pass: "qcucldbblvddltbx"
    },
})
app.post("/api/send-email", (req, res) => {
    const { name, email, message } = req.body

    const mailOption = {
        from: email,
        to: "arsalandanish0903@gmail.com",
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    transportar.sendMail(mailOption, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ message: "Failed to send email" });
        } else {
            console.log("Email sent:", info.response);
            res.status(200).json({ message: "Email sent successfully" });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})