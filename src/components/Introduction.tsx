import { useState, useEffect } from "react";
import sticker1 from "../assets/sticker1.png";
import sticker2 from "../assets/sticker2.png";
import sticker3 from "../assets/sticker3.png";
import sticker4 from "../assets/sticker4.png";
import sticker5 from "../assets/sticker5.png";
export function Introduction() {
  const images = [sticker1, sticker2, sticker3, sticker4, sticker5];

  // Initialize state to track the current index of the displayed image
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      // Stop changing images if it reaches the last image
      return;
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use useEffect to set up a timer to switch images every 3 seconds
  useEffect(() => {
    const timer = setTimeout(nextImage, 3000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [currentIndex]); // Re-run effect when currentIndex changes

  // Define the text content to be typed out
  const textContent =
    "A backend developer with 6 years of experience based in India. Currently, I'm coding at Enboarder. Beyond programming, I love dancing, traveling, and diving into music production. Let's build something amazing together!";

  // Initialize state to track the currently typed characters
  const [typedText, setTypedText] = useState("");

  // Use useEffect to simulate typing effect
  useEffect(() => {
    // If all text has been typed, return
    if (typedText === textContent) return;

    // Timer to simulate typing one character at a time
    const timer = setTimeout(() => {
      setTypedText((prevText) => prevText + textContent[typedText.length]);
    }, 50); // Adjust typing speed as needed

    // Clean up the timer when component unmounts
    return () => clearTimeout(timer);
  }, [typedText]); // Re-run effect when typedText changes

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="base-1 w-60 pt-20">
        <img
          className="rounded-full overflow-hidden shadow object-cover"
          src={images[currentIndex]}
          alt="Mayank Sahai"
        />
      </div>
      <div className="base-1 flex flex-col items-center p-10 h-2/4 min-w-96 max-w-2xl">
        <p className="font-nohemi text-center text-base sm:text-lg md:text-2xl font-semibold pb-2">
          👋 Hi! I'm Mayank Sahai<br></br>(aka CodingMoon),
        </p>
        {/* Text with typing animation */}
        <p className="font-nohemi text-center text-sm sm:text-base md:text-xl">
          {typedText}
        </p>
      </div>
      {/* {currentIndex === images.length - 1 && (
        // TODO button needs to be added
      )} */}
    </div>
  );
}
