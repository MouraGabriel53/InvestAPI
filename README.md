# 💰 InvestAPI

> An interactive API that provides information about key Brazilian economic rates (Selic, CDI, IPCA) and also offers smart investment advice with an AI assistant called **InvestAI**.

---

<p align="center">
  <a href="#-preview">🔍 Preview</a> •
  <a href="#-features">🚀 Features</a> •
  <a href="#-technologies-used">🛠️ Tech Stack</a> •
  <a href="#-installation">📦 Installation</a> •
  <a href="#-how-it-works">📖 How It Works</a> •
  <a href="#️-license">⚖️ License</a> •
  <a href="#-building">🚧 Building</a>
</p>

---

```bash
git clone https://github.com/MouraGabriel53/InvestAPI.git
```

## 🔍 Preview

```CMD
==================== Welcome | InvestAPI ====================

💰 Select a rate to view the value 💰

[0] - Selic
[1] - CDI
[2] - IPCA
[3] - Ask to InvestAI
[4] - Exit

🔍 Type the number:
-> Answer: 3

😁 Let's get started! What's your name?:
-> Answer: Gabriel

🤓 Type what you want ask to InvestAI:
-> Answer: Where should I invest safely in 2025?

InvestAI thinking... 🤔

🤖 InvestAI answer: Hello Gabriel! I'm InvestAI. For safe investments in 2025, consider...

```

---

## 🚀 Features

✅ Real-time queries for major Brazilian economic rates:

- **SELIC**
- **CDI**
- **IPCA**

🤖 Ask InvestAI (powered by [Gemini API](https://ai.google.dev/)):

- Responds to investment-related questions
- Provides friendly and smart advice
- Uses artificial intelligence to guide beginner investors

🎛️ CLI interface with interactive terminal menus

---

## 🛠️ Technologies Used

- **Node.js**
- **JavaScript (ESModules)**
- **Google GenAI SDK**
- **dotenv**
- **readline-sync**
- **node-fetch**
- **Express (backend API)**
- **Git & GitHub**

---

## 📦 Installation

Install all required dependencies manually:

```bash
npm install dotenv
npm install readline-sync
npm install @google/genai
npm install node-fetch
npm install express
```

## 📖 How It Works

Make sure your package.json is configured like this:

```
{
  "name": "server",
  "version": "1.0.0",
  "description": "Server Backend",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "author": "Your Name",
  "license": "ISC"
}

```
Then, create a .env file in the root directory and add your Gemini API key:

```
GEMINI_API_KEY=your_real_api_key_here
```

## ⚖️ License
[MIT LICENSE](LICENSE)

## 🚧 Building
Currently, the project is under development and may receive frequent updates.

Made with 💚 by Gabriel Moura