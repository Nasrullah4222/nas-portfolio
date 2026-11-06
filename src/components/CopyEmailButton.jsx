import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { CONTACT_EMAIL } from "../constants";

const CopyEmailButton = ({ className = "", channelStyle = false }) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      console.error("Unable to copy email address.", error);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={copyToClipboard}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`email-button ${className}`.trim()}
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          className="email-button-content"
          key={copied ? "copied" : "email"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.16 }}
        >
          {channelStyle ? (
            <svg
              className="email-channel-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="m4 7 8 6 8-6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <img
              src={
                copied
                  ? "assets/copy-success-svgrepo-com.svg"
                  : "assets/copy-svgrepo-com.svg"
              }
              alt=""
            />
          )}
          {copied ? "Email Copied!" : "Email"}
          {channelStyle && (
            <img
              src={
                copied
                  ? "assets/copy-success-svgrepo-com.svg"
                  : "assets/copy-svgrepo-com.svg"
              }
              alt=""
              className="email-copy-icon"
            />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
