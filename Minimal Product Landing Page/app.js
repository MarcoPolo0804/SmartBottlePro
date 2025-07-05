// FOR FAQ SECTION ONLY


document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    const arrow = question.querySelector('.arrow');
    const answer = question.querySelector('p');
    
    // Initialize all answers as closed
    answer.style.maxHeight = '0';
    answer.style.paddingTop = '0';
    answer.style.overflow = 'hidden';
    
    // Add click handler to each question
    question.addEventListener('click', function() {
      // Toggle active class on wrapper
      this.classList.toggle('active');
      
      // Toggle answer visibility
      if (this.classList.contains('active')) {
        answer.style.maxHeight = '200px';
        answer.style.paddingTop = '1rem';
      } else {
        answer.style.maxHeight = '0';
        answer.style.paddingTop = '0';
      }
      
      // Toggle arrow rotation if arrow exists
      if (arrow) {
        arrow.classList.toggle('rotated');
      }
    });
  });
});

