export const validToShowErrorMessage = (code: number) => {
  const codes = [
    40,
    1000
  ]
  return codes.includes(code)
}
