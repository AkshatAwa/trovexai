import React, { useState } from 'react';
import './faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is AI driven roleplay simulation?',
      answer: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius vel saepe placeat excepturi explicabo quia similique maxime reprehenderit, quibusdam molestiae omnis aspernatur voluptates rerum?"
     ],
    },
    {
      question: 'How does Trovex provide real-time feedback and guidance?',
      answer: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius vel saepe placeat excepturi explicabo quia similique maxime reprehenderit, quibusdam molestiae omnis aspernatur voluptates rerum?',
      ],
    },
    {
      question: 'How does Trovex help track and measure sales team performance?',
      answer: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius vel saepe placeat excepturi explicabo quia similique maxime reprehenderit, quibusdam molestiae omnis aspernatur voluptates rerum?'
      ],
    },
    {
      question: 'How does Trovex reduce time to productivity for new hires?',
      answer: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius vel saepe placeat excepturi explicabo quia similique maxime reprehenderit, quibusdam molestiae omnis aspernatur voluptates rerum?',
      ],
    },
    {
      question: 'Can you assist us in developing the initial AI simulations?',
      answer: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius vel saepe placeat excepturi explicabo quia similique maxime reprehenderit, quibusdam molestiae omnis aspernatur voluptates rerum?',
      ],
    },
  ];

  return (
    <div className="faq">
        <div className="faqhead">
            <h1 className="faq-title">FAQ</h1>
            <p className="faq-subtitle">Questions you may have</p>
        </div>
      <ul className="accordion">
        {faqData.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              name="accordion"
              id={`faq${index}`}
              checked={activeIndex === index}
              onChange={() => toggleAccordion(index)}
            />
            <label htmlFor={`faq${index}`}>
              {item.question}
              <div className={`plus-wrapper ${activeIndex === index ? 'rotate' : ''}`}>
                <span className="plus">+</span>
              </div>
            </label>
            <div className={`content ${activeIndex === index ? 'show' : ''}`}>
              {item.answer.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
