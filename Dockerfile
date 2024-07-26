# syntax=docker/dockerfile:1


################################################################################
# Créer une étape pour l'installation des dépendances de production.
# Créer une étape pour la construction de l'application.

# Télécharger les dépendances et les dépendances de développement supplémentaires dans une étape séparée pour profiter de la mise en cache de Docker.
# Exploiter un montage de cache vers /root/.npm pour accélérer les constructions suivantes.
# Exploiter les montages bind vers package.json et package-lock.json pour éviter d'avoir à les copier dans cette couche.

FROM node:20-alpine AS build

WORKDIR /build

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .

RUN npm run build


################################################################################
# Créer une nouvelle étape pour exécuter l'application avec un minimum de dépendances d'exécution
# où les fichiers nécessaires sont copiés depuis l'étape de construction.

FROM nginx:1.27-alpine as final

RUN mkdir /app
COPY --from=build /build/dist/biblianime-client/browser/ /app
COPY nginx.conf /etc/nginx/nginx.conf

USER nginx
EXPOSE 80
