// Webpack imports
import "./analyze_guess.js";
import "./get_random_number.js";
import "./set_ui_min_max";
import "./show_hint.js";
import "./run_web_speech.js";
import "./min_max_input.js";
import getRandomNumber from "./get_random_number.js";
import setUiMinMax from "./set_ui_min_max.js";
import runWebSpeech from "./run_web_speech.js";
import { getMinMax } from "./local_storage_handler.js";
export const [minValue, maxValue] = getMinMax();
export const secretNumber = getRandomNumber(minValue, maxValue);
setUiMinMax(minValue, maxValue);
runWebSpeech();
const reloadButton = document.getElementById("reload-button");
reloadButton.addEventListener("click", () => window.location.reload());
