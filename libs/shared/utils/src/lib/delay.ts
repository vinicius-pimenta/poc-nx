export function delay(value: number) {
  console.log("teste")
  return new Promise(resolve => setTimeout(resolve, value));
}
