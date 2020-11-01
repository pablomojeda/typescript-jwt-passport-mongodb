export default{
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/jwttutorial',
        USER: '',
        PASSWORD: '',
    }
}