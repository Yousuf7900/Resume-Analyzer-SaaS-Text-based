const Groq = require('groq-sdk');
require('dotenv').config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const analyzeResume = async (req, res) => {
    const { resumeText } = req.body;

    if (!resumeText) {
        return res.status(400).json({ error: "Resume text is required" });
    }

    try {
        const prompt = `
            You are an expert recruiter. Analyze the resume below and provide:
            1. Resume Score (0-10)
            2. Strengths
            3. Weaknesses
            4. Missing Skills
            5. ATS Keyword Match
            6. Suggested Improvements

            Format your answer as a clean readable text report.

            Resume:
            ${resumeText}
        `;

        const chatCompletion = await groq.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'llama-3.1-8b-instant', 
            temperature: 0.5, 
        });

        const report = chatCompletion.choices[0]?.message?.content;

        if (!report) {
            return res.status(500).json({ error: "AI failed to generate a response." });
        }

        console.log("Analysis Complete via Groq Llama 3 for:", req.body.candidateName || "Candidate");
        res.json({ report });

    } catch (error) {
        console.error("Groq API Error:", error.message);
        res.status(500).json({ error: "Failed to analyze resume" });
    }
};

module.exports = { analyzeResume };