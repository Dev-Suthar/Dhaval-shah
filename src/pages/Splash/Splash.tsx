import { useEffect, useState } from "react";
import pageBg from "../../assets/images/pageBg.png";
import companyLogo from "../../assets/images/companyLogo.png";

interface SplashScreenProps {
  onComplete?: () => void;
  duration?: number;
}

const SplashScreen = ({ onComplete, duration = 2500 }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (onComplete) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [onComplete, duration]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center z-50"
      style={{
        backgroundImage: `url(${pageBg})`,
      }}
    >
      <div className="text-center animate-fade-in px-4">
        <img
          src={companyLogo}
          alt="Marzi Logo"
          className="w-[223px] h-[89px] md:w-[223px] md:h-[89px] sm:w-[180px] sm:h-[72px] w-[140px] h-[56px] mx-auto object-contain"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
