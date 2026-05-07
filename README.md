# ARGUS: Adversarial Review & Graph-based Unified Scrutiny

**AI-Powered Tender Evaluation System**

ARGUS is a platform designed to automate tender evaluation using multi-agent adversarial debate (Defense vs. Prosecution vs. Judge) and 4D Temporal Knowledge Graphs. The interface is optimized for defense and high-density environments, offering full audit trails and cryptographic provenance.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (comes with Node.js)

## Getting Started on Your Local Machine

Follow these steps to run the ARGUS application locally:

### 1. Download the Code
You can download the code directly from Google AI Studio by clicking the **Export** button in the top menu and selecting **Download ZIP**, or by exporting it to a GitHub repository and cloning it:
```bash
git clone <your-repository-url>
cd <repository-directory>
```

### 2. Install Dependencies
Once you have the code on your local machine, open your terminal, navigate to the project folder, and run:
```bash
npm install
```

### 3. Run the Development Server
To start the app in development mode, run:
```bash
npm run dev
```
Vite will start a local development server. Check your terminal output for the local URL (typically `http://localhost:5173` or `http://localhost:3000`). Open this URL in your web browser to view the app!

### 4. Build for Production
If you want to build the optimized, production-ready static files:
```bash
npm run build
```
The output will be placed in the `dist` directory. You can preview the production build locally by running:
```bash
npm run preview
```

## Technologies Used
- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **React Router**
- **Recharts** (Performance & Data visualization)
- **Lucide React** (Iconography)
- **Framer Motion / Motion API** (Animations)
