async function uploadFile(fileOrBlob, name) {
  const endpoints = [
    {
      url: 'https://tmpfiles.org/api/v1/upload',
      field: 'file',            // ← строго file
      parse: async (res) => {   // ← plain-text
        const text = await res.text();
        return text.trim();     // https://tmpfiles.org/xxxx/your.png
      }
    },
    {
      url: 'https://uguu.se/upload.php',
      field: 'files[]',
      parse: (res) => res.json().then(j => j?.files?.[0]?.url)
    }
  ];

  for (const ep of endpoints) {
    const fd = new FormData();
    fd.append(ep.field, fileOrBlob, name);

    const res = await fetch(ep.url, { method: 'POST', body: fd });

    /* ---------- Debug ---------- */
    logStep(`uploadFile → ${ep.url} status`, res.status);
    /* --------------------------- */

    if (!res.ok) {
      const body = await res.text();
      logStep('uploadFile server reply (error)', body);
      // пробуем следующий endpoint
      continue;
    }

    const link = await ep.parse(res);
    if (link) return link;
  }
  throw new Error('upload failed');
}
