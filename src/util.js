export function generateRandomString(length) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return result
}

export function downloadFile(url, fileName) {
  const getLastDotContent = (str) => {
    var matches = str.match(/.*\.(.*)/)
    return matches ? matches[1] : ''
  }
  const link = document.createElement('a')
  document.body.appendChild(link)
  link.href = url
  link.download = fileName || Date.now() + `_${generateRandomString(5)}.${getLastDotContent(url)}`
  link.target = '_blank'
  link.click()
  document.body.removeChild(link)
}
