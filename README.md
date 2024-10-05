# EcoArtisan-AI

**EcoArtisan-AI** is a web application that leverages OpenAI's language model to generate innovative and sustainable business ideas. Designed for entrepreneurs and eco-conscious individuals, this application aims to inspire creative solutions that align with environmental sustainability.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **User-Friendly Interface**: A clean and intuitive interface allows users to enter prompts and receive generated ideas effortlessly.
- **AI-Powered Idea Generation**: Utilizes OpenAI's language model to produce unique and relevant business ideas based on user input.
- **Responsive Design**: The application is responsive and works well on various devices, including desktops and mobile phones.

## Technologies Used

- **Frontend**: React
- **Backend**: Flask
- **AI Model**: OpenAI's GPT-3 (text-davinci-003)
- **Styling**: CSS
- **Environment Variables**: dotenv for managing sensitive data

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12 or later)
- [Python](https://www.python.org/) (v3.6 or later)
- [pip](https://pip.pypa.io/en/stable/) (Python package installer)
- [OpenAI API Key](https://beta.openai.com/signup/) (sign up for an API key)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecoartisan-ai.git
2. Navigate to the project directory:
   ```bash
   cd ecoartisan-ai
3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
4. Set up environment variables by creating a `.env` file in the root directory and adding your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key
5. Navigate to the frontend directory:
   ```bash
   cd frontend
6. Install the frontend dependencies:
   ```bash
   npm install
7. Start the backend server:
   ```bash
   python app.py
8. In another terminal, start the frontend development server:
   ```bash
   npm start

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Enter your prompt in the input field and click the "Generate Idea" button.
3. The generated idea will be displayed below the input field.

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, please create an issue or submit a pull request.


## Acknowledgments

- Thanks to the open-source community for the libraries and resources that made this project possible.
