FROM node:20-alpine

WORKDIR /usr/src/app

# Install vite/react deps (locked if you have package-lock.json)
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm i; fi

# App source will be mounted at runtime for HMR
EXPOSE 3000
CMD ["npm","run","dev","--","--host","0.0.0.0","--port","3000"]
