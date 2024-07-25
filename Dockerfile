# syntax=docker/dockerfile:1


################################################################################
# Créer une étape pour l'installation des dépendances de production.

FROM node:20-alpine AS deps

WORKDIR /usr/src/app

# Télécharger les dépendances dans une étape séparée pour profiter de la mise en cache de Docker.
# Exploiter un montage de cache vers /root/.npm pour accélérer les constructions suivantes.
# Exploiter les montages bind vers package.json et package-lock.json pour éviter d'avoir à les copier dans cette couche.

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev


################################################################################
# Créer une étape pour la construction de l'application.

FROM deps AS build

# Téléchargez les dépendances de développement supplémentaires avant de construire, 
# car certains projets nécessitent l'installation de « devDependencies » pour construire. 
# Si vous n'en avez pas besoin, supprimez cette étape.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

# Copiez le reste des fichiers sources dans l'image.
COPY . .

# Exécuter le script de construction.
RUN npm run build


################################################################################
# Créer une nouvelle étape pour exécuter l'application avec un minimum de dépendances d'exécution
# où les fichiers nécessaires sont copiés depuis l'étape de construction.

FROM nginx:1.27-alpine as final

# Exécutez l'application en tant qu'utilisateur non root.
USER root

COPY --from=build /usr/src/app/dist/biblianime-client/browser/ /usr/share/nginx/html/

# Expose the port that the application listens on.
EXPOSE 80
