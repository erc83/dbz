let personajesData = (async () => {
    const url = "http://localhost:5502/dbz.json"
    const res = await fetch(url);
    const data = await res.json();
    return data;
})();
  
export default personajesData;
  