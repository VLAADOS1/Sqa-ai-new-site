function send(action, payload = {}) {
  const data = JSON.stringify({ action, ...payload });
  Telegram.WebApp?.sendData(data);
}
