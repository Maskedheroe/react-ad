
export const getUrlParam = (name: string) => {
  const query = window.location.search.substring(1)
  const paramArr = query.split("&")
  for (const key in paramArr) {
    const pair = paramArr[key].split("=")
    if (pair[0] === name) {
      return pair[1]
    }
  }
  return false
}
