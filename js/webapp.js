function send(action, payload = {}) {
  const out =
    action && action !== 'null'
      ? { action, ...payload }
      : { ...payload };

  Telegram.WebApp?.sendData(JSON.stringify(out));
}
