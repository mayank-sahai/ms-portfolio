import CDvol1 from "../assets/CDvol1.png";
export function Music() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pt-32">
      <p className="font-nohemi text-center text-base sm:text-lg md:text-2xl font-semibold pb-2">I make beats under the name MynkBeats! 🎧</p>
      <p className="font-nohemi text-center text-base sm:text-lg md:text-2xl font-semibold pb-2">Just started learning but do checkout my album</p>
      <p className="font-nohemi text-center text-base sm:text-lg md:text-2xl font-semibold pb-2 italic">Chaotic Disparity Vol.1 🔥</p>
      </div>
      
      <div className="pt-10">
        <iframe
          className="rounded-xl"
          src="https://open.spotify.com/embed/artist/5JW4GnMriNzlqMweRSIyRU?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
