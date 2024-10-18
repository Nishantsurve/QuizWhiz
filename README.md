
# QuizWhiz

A quiz web application built with React.js, HTML, CSS, Javascript and Bootstrap. This app fetches trivia questions from the [Trivia API](https://opentdb.com/) and allows users to participate in a timed quiz. The app also provides a detailed report of the user’s performance after the quiz, with an option to share the score via WhatsApp.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [APIs](#apis)
- [License](#license)
- [!Deploy](#deploy)

## Features

- Interactive quiz interface
- Questions fetched from the Trivia API according to your chosen difficult level,category and type of questions.
- **Responsive design** that adapts to mobile, tablet, and desktop screens
- Timed quizzes
- Submit answers and receive a score report
- **Share your score via WhatsApp** with a single click
- Home, quiz, and results pages
- Error handling and loading indicators

## Technologies Used

- **React.js**: JavaScript library for building user interfaces
- **HTML5**: Markup language for structuring the app
- **CSS3**: Styling the UI
- **Bootstrap**: Frontend framework for a responsive and modern design
- **Trivia API**: Provides questions for the quiz Each Time you Click on Start quiz button it will fetch question according to inputs such as difficulty,category,multiple choice or True or False.
- **WhatsApp Integration**: Share your quiz results with friends

## Deploy 

- See in About Section
- WebSite is deployed on netlify platform 

## Usage

1. **Go to the homepage**: On the homepage, you'll find a Form taking inputs as difficulty,category,multiple choice or True or False,below it is "Start Quiz" button. Click on it to begin the quiz.
   
2. **Answer the questions**: Once the quiz starts, questions will be displayed one by one. For each question, select the answer you think is correct, Timer will be running of 30s make sure to answer within it.

3. **Submit your answer**: After choosing an answer, submit it, and the app will automatically load the next question.

4. **Complete the quiz**: After answering all the questions, you will be redirected to the result screen, where you can see your total score, along with a breakdown of your performance in detail.

5. **Retake Quiz**: if you feel you want to take quiz once again. Click on retake button.

6. **Share your score**: You can easily share your quiz score with friends by clicking the "Share" button on the result screen. This will open WhatsApp, allowing you to send your score directly.

## Screenshots

![Screenshot 1](public/screenshot1.png)
![Screenshot 2](public/screenshot5.png)
![Screenshot 3](public/screenshot4.png)
![Screenshot 4](public/screenshot3.png)
![Screenshot 5](public/screenshot6.png)

## Setup and Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/quiz-web-app.git
   ```

   ```bash
   npm install  
   ```
   
   ```bash
   npm run dev
   ```
   
   ```bash
   npm run start
   ```

## APIs
- https://opentdb.com/api.php


## License

- MIT License

- Copyright (c) 2024 Nishant Surve

- Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

- The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.