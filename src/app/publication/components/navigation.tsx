import { use, useContext, useEffect, useState } from "react";
import { PublicationContext } from "../publication";

type Props = {
  beggining: number;
  end: number;
};

function Navigation({ beggining, end }: Props) {
  const { toggleNext, togglePrevious, sortedPosts } =
    useContext(PublicationContext);

  const [length, setLength] = useState(0);

  useEffect(() => {
    setLength(sortedPosts?.length || 0);
  }, [sortedPosts]);

  const handleNext = () => {
    if (end < length) {
      toggleNext && toggleNext();
    }
  };

  const handlePrevious = () => {
    if (beggining > 0) {
      togglePrevious && togglePrevious();
    }
  };

  return (
    <div className="flex justify-between items-center gap-5 p-5">
      <div className="w-[50%] flex flex-col items-start">
        <button
          className={`border-2 border-blue-950 rounded-md p-1 cursor-pointer duration-200 hover:bg-blue-950 hover:text-white ${
            beggining === 0 ? "hidden" : ""
          }`}
          onClick={handlePrevious}
        >
          Anterior
        </button>
      </div>
      <div className="w-[50%] flex flex-col items-end">
        <button
          className={`border-2 border-blue-950 rounded-md p-1 cursor-pointer duration-200 hover:bg-blue-950 hover:text-white ${
            end > length ? "hidden" : ""
          }`}
          onClick={handleNext}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Navigation;
