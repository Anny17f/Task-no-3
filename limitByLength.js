function limitByLength(inputString) {
  if (inputString.length <= 100) {
      return inputString;
  } else {
      return inputString.slice(0, 100) + "...";
  }
}

const longString = "Virtually every malicious attack starts with a DNS query. However, bad things can't reach your device if they don't resolve. Control D for Organizations allows you to enforce complex DNS policies on fleets of devices in literally minutes. There are personal accounts for power users too! .";
const result = limitByLength(longString);
console.log(result);
