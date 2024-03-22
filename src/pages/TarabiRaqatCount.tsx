import { useMemo, useState } from "react";
import { FaMicrophone, FaPause, FaPlay, FaStop } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa6";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function TarabiRaqatCount() {
  const [rakatDetector, setRakatDetector] = useState<number>(0);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  useMemo(() => {
    const text = "Assalamu Alaikum Wa Rahmatullah";
    const salams = transcript.match(new RegExp(text, "gi"));
    if (salams && salams.length % 2 === 0) {
      setRakatDetector(salams.length / 2);
    }
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div className="min-h-[50vh]">
      <div className="text-center text-lg uppercase mt-16 text-gray-500">
        tarabi raqat detector
      </div>
      <div className="bg-black/20 border w-[80%] h-[12rem] rounded-lg mx-auto grid place-content-center text-[11rem] relative mt-8 text-yellow-400">
        {rakatDetector}
        <span className="absolute text-sm right-5 bottom-2 border p-2 rounded-full">
          {listening ? (
            <FaMicrophone className="text-xl animate-pulse" />
          ) : (
            <FaMicrophoneSlash className="text-xl " />
          )}
        </span>
      </div>
      <div className="bg-green-800/20 border border-green-800 py-5 mt-2 w-[80%] mx-auto rounded-lg grid place-items-center grid-cols-2">
        {listening ? (
          <button onClick={() => SpeechRecognition.stopListening()}>
            <FaPause className="text-2xl" />
          </button>
        ) : (
          <button
            onClick={() =>
              SpeechRecognition.startListening({ continuous: true })
            }
          >
            <FaPlay className="text-2xl" />
          </button>
        )}
        <button onClick={() => resetTranscript()}>
          <FaStop className="text-2xl" />
        </button>
      </div>

      <p>{transcript}</p>
    </div>
  );
}
