export const getUrls = () => ({
  pages: {
    register: 'register',
    login: 'login',
    main: 'main'
  },
  api: {
    url: process.env.API_URL || 'http://localhost:5000'
  }
})
