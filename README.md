# Wallet App

This is a webapp which shows wallet details.

## Tech Stack

**Client:** React, Redux, Vite, ReactQuery, Material Ui

## Run Locally

Clone the project

```bash
  git clone https://github.com/SubhasishSarkar/walletapp.git
```

Go to the project directory

```bash
  cd walletapp
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Start json-server

```bash
  json-server --watch ./src/data/db.json
```

## Features

-   Responsive web designe
-   Dark Mode enabled

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

`VITE_API_BASE_URL=http://localhost:3000`

localhost:3000 is the default url for json-server. If your json-server runs in different port change the env variable accordingly.
