export async function detectAdBlock() {
  let adBlockEnabled = false;
  const googleAdUrl =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  const request = new Request(googleAdUrl, {
    method: "GET",
  });
  try {
    await fetch(request).catch((_) => (adBlockEnabled = true));
  } catch (e) {
    adBlockEnabled = true;
  }
  return adBlockEnabled;
}
