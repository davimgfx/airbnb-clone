import { useEffect, useState } from "react";

export const useMedia = (media: string) : boolean => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    function changeMatch() {
      if (window.matchMedia) {
        const { matches } = window.matchMedia(media);
        setMatch(matches);
      }
    }
    changeMatch();
    window.addEventListener("resize", changeMatch);
    return () => window.removeEventListener("resize", changeMatch);
    
  }, [media]);
  return match;
};
