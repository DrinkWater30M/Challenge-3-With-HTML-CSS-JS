function main(){
    const icons = document.querySelectorAll(".faq .question-icon img");
    const questions = document.querySelectorAll(".faq .question-icon .question");
    const answers = document.querySelectorAll(".faq .answer");

    var stateQuestion = 1;
    questions.forEach(function(question, index){
        question.addEventListener('click', function(){
            if(stateQuestion !== index){
                //delete all active
                questions.forEach(function(question){
                    question.classList.remove('active');
                });
                answers.forEach(function(answer){
                    answer.classList.remove('active');
                });
                icons.forEach(function(icon){
                    icon.classList.remove('active');
                });
                stateQuestion = index;
            }

            //add active in button
            questions[index].classList.toggle('active');
            answers[index].classList.toggle('active');

            //rotate icon
            icons[index].classList.toggle('active');

            //
        })     
    })
}

main();