
function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = navigator.appName;
  let version = navigator.appVersion;

  if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Edge") === -1 && userAgent.indexOf("OPR") === -1) {
    browserName = "Chrome";
    version = userAgent.match(/Chrome\/([\d.]+)/)[1];
  } else if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Firefox";
    version = userAgent.match(/Firefox\/([\d.]+)/)[1];
  } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
    browserName = "Safari";
    version = userAgent.match(/Version\/([\d.]+)/)[1];
  } else if (userAgent.indexOf("Edge") > -1 || userAgent.indexOf("Edg") > -1) {
    browserName = "Edge";
    version = userAgent.match(/Edg\/([\d.]+)/)[1];
  } else if (userAgent.indexOf("OPR") > -1 || userAgent.indexOf("Opera") > -1) {
    browserName = "Opera";
    version = userAgent.match(/(OPR|Opera)\/([\d.]+)/)[2];
  }

  const message = "You are using " + browserName + " version " + version;
  document.getElementById("browser-info").textContent = message;
}

getBrowserInfo();
