import Image from 'next/image';
import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-start text-center  lg:px-44">
      <div className="lg:mb-48 md:mb-52 sm:mb-40 mb-32"> {/* Added max-width and w-full for responsiveness */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Let’s Get in Touch</h1>
        <p className="text-sm md:text-lg">
          Have an exciting project or just want to chat? I’m always open to new ideas and collaborations.
          Feel free to reach out anytime!
        </p>
        <div className="space-y-4">
          <p className="text-lg md:text-2x2">
            <strong>Email:</strong> <a href="mailto:adarshharindran112@gmail.com" className="underline hover:text-blue-400">adarshharindran112@gmail.com</a>
          </p>
          <p className="text-lg md:text-2x2 flex lg:justify-start">
            {/* LinkedIn icon */}
            <a href='https://www.linkedin.com/in/adarsh-pv-070696215/'>
              <Image 
                className='w-10' 
                src="/images/linkedin-icon.png" 
                width={30} 
                height={30} 
                alt="LinkedIn"
              />
            </a>
            {/* GitHub icon */}
            <a href='https://github.com/adarsh-pv'>
              <Image 
                className='w-12 ml-2' 
                src="/images/github-icon.ico" 
                width={40} 
                height={40} 
                alt="GitHub"
              />
            </a>
            {/* Medium icon */}
            <a href='https://medium.com/@adarshharindran'>
              <Image 
                className='w-11 ml-2' 
                src="/images/medium-icon.webp" 
                width={40} 
                height={40} 
                alt="Medium"
              />
            </a> 
          </p>
          <p className="text-lg md:text-2x2">
            <strong>Phone:</strong> <a href="tel:+917025651710" className="underline hover:text-blue-400">+91 70256 51710</a>
          </p>
        </div>
        <p className="mt-8 text-sm md:text-lg">Looking forward to hearing from you! 🚀</p>
      </div>
    </div>
  );
}

export default Contact;
