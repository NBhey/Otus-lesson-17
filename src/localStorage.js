
export default function saveList(input) {
  localStorage.setItem('list', JSON.stringify(input))
}

export function getItem(){
  const data = localStorage.getItem('list');
  if(data === null) return []; 
  return JSON.parse(data);
}