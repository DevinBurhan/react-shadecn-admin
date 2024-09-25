export const getAccessToken = () => {
  const session = localStorage.getItem('token')
  if (session) return session

  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNzQGdtYWlsLmNvbSIsInN1YiI6IjY2ZjNiMzc0M2ZiM2IwNGQ4YWJhNGJiMyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzI3MjQ3MjYzLCJleHAiOjE3MjczMzM2NjN9.y7ppBrwWt1CWB9gHw6eps0k5agfNghFPiZj1Hrw5WnI'
}
