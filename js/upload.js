async function uploadFile(fileOrBlob, name) {
  const endpoints = [
    {
      url: 'https://tmpfiles.org/api/v1/upload',
      field: 'file',
      pick: r => r?.data?.url || r?.url
    },
    {
      url: 'https://uguu.se/upload.php',
      field: 'files[]',
      pick: r => Array.isArray(r) ? r[0]?.url : r?.url
    }
  ];

  for (const ep of endpoints) {
    try {
      console.log(`Uploading to1`);
      const fd = new FormData();
      fd.append(ep.field, fileOrBlob, name);

      const res = await fetch(ep.url, {
        method: 'POST',
        body: fd
      });

      const text = await res.text();
      const data = JSON.parse(text);
      const link = ep.pick(data);
      // сonsole.log(`Upload successful: ${link}`);
      if (link) return link.trim();
    } catch (e) {}
  }

  throw new Error('upload failed');
}
