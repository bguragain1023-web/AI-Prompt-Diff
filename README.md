# AI Prompt Diff

A side-by-side AI prompt comparison tool that lets you see how differently Claude responds to two prompts. Compare responses, analyse metrics, and understand what makes a prompt more effective.

## Table of contents

1. [Screenshots](#screenshots)
2. [Features](#features)
3. [Techstack](#tech-stack)
4. [Getting Started](#getting-started)
5. [How to Use ](#how-to-use)
6. [Metrics-explained](#metrics-explained)

7. [Eniviroment Variables](#enviroments-variables)
8. [Project Structure](#project-structure)
9. [Author](#author)
10. [License](#license)

## Screenshots

![User Prompt Screenshot](src/assets/prompt.PNG)
![AI Response Screenshot](src/assets/response.PNG)

---

## Features

- **Side-by-side comparison** — run two prompts simultaneously and see both responses
- **Metrics analysis** — compare Length, Clarity, and Response Speed for each prompt
- **Key Differences** — AI-generated summary of the 3 main differences between responses
- **Token count** — see how many tokens each response used
- **Clean dark UI** — built with a dark theme for readability

---

## Tech Stack

**Frontend**

- React (Vite)
- Bootstrap 5
- CSS3

  **Backend**

- Node.js
- Express
- Anthropic API (Claude Sonnet 4.5)

---

## Getting started

### Prerequisites

- Node.js v20+
- Yarn
- Anthropic API key — [get one here](https://console.anthropic.com)

### Installation

1. Clone the repo

```bash
git clone https://github.com/https://github.com/bguragain1023-web/AI-Prompt-Diff
cd AI-prompt-diff
```

2. Install dependencies

```bash
yarn
```

3. Create a `.env` file in the root folder

```
ANTHROPIC_API_KEY=your_api_key_here
```

4. Start the Express server

```bash
node --env-file=.env server.js
```

5. Start the frontend in a new terminal

```bash
yarn dev
```

6. Open your browser at `http://localhost:5173`

---

## How to Use

1. Type or paste a prompt in the **Prompt A** box
2. Type or paste a different prompt in the **Prompt B** box
3. Click **Run Comparison**
4. View both responses side by side
5. Check the metrics and key differences below

---

## Metrics Explained

| Metric      | What it measures                                 |
| ----------- | ------------------------------------------------ |
| **Length**  | Word count of the response                       |
| **Clarity** | Average words per sentence — shorter = clearer   |
| **Speed**   | How long the API took to respond in milliseconds |

---

## Environment Variables

| Variable            | Description            |
| ------------------- | ---------------------- |
| `ANTHROPIC_API_KEY` | Your Anthropic API key |

---

## Project Structure

```
AI-prompt-diff/
.
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── public
├── server.js
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   ├── components
│   │   ├── Compare.jsx
│   │   ├── Detail.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Input.jsx
│   │   ├── Metrics.jsx
│   │   └── Navbar.jsx
│   ├── index.css
│   ├── main.jsx
│   └── utils
│       ├── api.js
│       └── metric.js
├── vite.config.js
└── yarn.lock
```

---

## Author

**Brazesh Guragain**

- GitHub: [@your-username](https://github.com/bguragain1023-web)
- LinkedIn: [your-linkedin](https://linkedin.com/in/brazesh-guragain-32a6661b0/)
- Portfolio: [your-portfolio](https://brazeshguragain.com)

---

## License

MIT License — feel free to use this project as inspiration for your own.
