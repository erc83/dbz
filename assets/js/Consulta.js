let personajesData = (async () => {
    const url = "https://erc83.github.io/dbz/dbz.json"
    const res = await fetch(url);
    const data = await res.json();
    return data;
})();
  
export default personajesData;
  