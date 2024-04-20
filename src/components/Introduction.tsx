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
    const timer = setTimeout(nextImage, 2000);

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
    <div className="flex flex-wrap justify-center items-center h-full">
      <div className="base-1 w-1/3">
        <img
          className="rounded-full overflow-hidden shadow object-cover"
          src={images[currentIndex]}
          alt="Description of the image"
        />
      </div>
      <div className="base-1 w-1/3">
        <p className="text-lg font-semibold pb-2">
          👋 Hi there! I'm Mayank Sahai,
        </p>
        {/* Text with typing animation */}
        <p>{typedText}</p>
      </div>
    </div>
  );
}
