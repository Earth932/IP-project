const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'ชอบกินอะไร',
        choice1: 'ไก่',
        choice2: 'กุ้ง',
        choice3: 'ฟักทอง',
        choice4: 'แตงกวา',
        answer: 2,
    },
    {
        question: 'ชอบกินอะไร',
        choice1: 'หมู',
        choice2: 'วัว',
        choice3: 'กล้วย',
        choice4: 'แตงโม',
        answer: 2,
    },
    {
        question: 'ชอบกินอะไร',
        choice1: 'ปลา',
        choice2: 'ปู',
        choice3: 'องุ่น',
        choice4: 'แอปเปิ้ล',
        answer: 2,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTION = questions.length

startQuestion = () => { 
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if((availableQuestions.length === 0 && score >= MAX_QUESTION/2 ) || questionCounter > MAX_QUESTION) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('../Html/Result1.html')
    }
    else if((availableQuestions.length === 0 && score < MAX_QUESTION/2 ) || questionCounter > MAX_QUESTION) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('../Html/Result3.html')
    }
    questionCounter++
    progressText.innerText = `STEP ${questionCounter} OF ${MAX_QUESTION}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTION)*100}%`

    const questionIndex = Math.floor(Math.random()*availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question   
    
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice'+number]
    })

    availableQuestions.splice(questionIndex, 1)
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startQuestion()