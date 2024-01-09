export function shortenIfLong(str: string) {
  if (!str) {
    return ''
  }
  if (str.length > 50) {
    return `${str.slice(0, 50)}...`
  }
  return str
}
