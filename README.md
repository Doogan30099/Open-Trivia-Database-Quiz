# Open Trivia Database Quiz App

A fun and interactive React quiz application that uses the Open Trivia Database API to challenge users with multiple-choice questions across various categories and difficulty levels.

## Features

- Select your name, quiz category, and difficulty
- Answer 10 multiple-choice questions
- Instant feedback and score tracking
- View your results at the end of the quiz
- Responsive and modern UI

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Doogan30099/Open-Trivia-Database-Quiz.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Open-Trivia-Database-Quiz
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

## Usage

1. Enter your name on the home page.
2. Select a quiz category and difficulty.
3. Click "Start Quiz" to begin.
4. Answer each question by selecting an option.
5. After the last question, view your results and score.

## Project Structure

```
Open-Trivia-Database-Quiz/
├── public/
├── src/
│   ├── assets/
│   │   ├── components/
│   │   │   ├── HomePage.jsx
│   │   │   ├── QuizQuestions.jsx
│   │   │   ├── QuizResults.jsx
│   │   ├── images/
│   │   │   └── QuizBackgroundPic.jpg
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── package.json
├── README.md
```

## API Reference

- [Open Trivia Database API](https://opentdb.com/api_config.php)

## Customization

- You can add more features, such as high score tracking, question timers, or themed backgrounds by editing the React components and CSS files.

## License

This project is open source and available under the MIT License.

---

Enjoy playing and learning with the Open Trivia Database Quiz App!
