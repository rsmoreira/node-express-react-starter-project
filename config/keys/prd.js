module.exports = {
    googleClientID : process.env.GOOGLE_CLIENT_ID,
    googleClientSecret : process.env.GOOGLE_CLIENT_SECRET,
    mongoURI : process.env.MONGO_URI,
    cookieKey : process.env.COOKIE_KEY,
    ldapUrl: process.env.LDAP_URL,
    ldapBindDN: process.env.LDAP_BIND_DN,
    ldapBindCredentials: process.env.LDAP_BIND_CREDENTIALS,
    ldapSearchBase: process.env.LDAP_BASE_SEARCH,
    ldapSearchFilter: process.env.LDAP_SEARCH_FILTER
};