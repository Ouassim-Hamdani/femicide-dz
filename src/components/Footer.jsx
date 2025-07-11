import { Heart } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-black/40 backdrop-blur-sm py-8 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-purple-200 mb-4">
              "A society that does not protect its women has failed in its most basic duty."
            </p>
            <p className="text-sm text-purple-300">
              Data collected from various sources and feminist organizations. 
              If you have information about unreported cases, please reach out. <br/>
            </p>
            <div className="mt-4 flex justify-center mb-4">
              <Heart className="w-6 h-6 text-pink-400" />
            </div>
            <span className="text-purple-300">Maintened by <a className="text-purple-500" target = "_blank" rel="noreferrer noopener"  href="https://www.linkedin.com/in/ouassim-hamdani/">Ouassim Hamdani</a></span>
          </div>
        </footer>
    );
}