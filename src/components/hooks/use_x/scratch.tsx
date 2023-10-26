export const getSummat = (url: string): { name: string; id: number } => {
  return { name: "ade", id: 12 };
};
const obj = getSummat("google.com");
console.log(JSON.stringify(obj, null, 2));
