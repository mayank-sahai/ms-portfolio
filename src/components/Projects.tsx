import inprogresSticker from "../assets/inprogress.png";
export function Projects() {
    
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="base-1 w-60 pt-20">
          <img
            className="rounded-full overflow-hidden shadow object-cover"
            src={inprogresSticker}
            alt="In progress"
          />
        </div>
        <div className="base-1 flex flex-col items-center p-10 h-2/4 min-w-96 max-w-2xl">
          <p className="font-nohemi text-center text-base sm:text-lg md:text-2xl font-semibold pb-2">
            Work in Progress 🏗️
          </p>
        </div>
      </div>
    );
  }