# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build project-03`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t project-03`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system project-03 && \
          adduser --system -G project-03 project-03

COPY dist/apps/project-03 project-03
RUN chown -R project-03:project-03 .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm --prefix project-03 --omit=dev -f install

CMD [ "node", "project-03" ]
