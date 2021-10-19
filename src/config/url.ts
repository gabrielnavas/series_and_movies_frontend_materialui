export const getUrls = () => ({
  pages: {
    register: 'register',
    login: 'login'
  },
  api: {
    url: process.env.API_URL || 'http://localhost:5000'
  }
})
