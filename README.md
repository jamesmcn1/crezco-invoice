# Crezco Invoice App!

This is a simple application that allows a user to onboard with Crezco, and create a basic payment invoice with an amount and reference. This application has been created with:

- NextJS
- TailwindCSS
- Prettier
- Jest

## Setup

1.  Clone the repo
2.  Run `npm install` to install files
3.  Add an environment file like so:

```
# .env
HOSTNAME=localhost
PORT=3000
HOST=http://$HOSTNAME:$PORT
CREZCO_PARTNER_CODE=jamesmcnamara
CREZCO_API_KEY=cKJTQJ3T2j9FM5dySUfExkhPCaEg4Nut
```

4.  Run `npm run dev` to run application locally
5.  Run `npm run test` to run unit tests

## To Dos

- Site hosting
- Add more unit tests, and implement Cypress integration testing
- Improve form validation
- Improve Security (Remove NEXT_PUBLIC from CREZCO_API_KEY, CSRF protection etc)
- Improve styling
