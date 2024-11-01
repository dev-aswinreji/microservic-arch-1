FROM archlinux:latest

RUN pacman-key --init && \
    pacman -Syu --noconfirm && \
    pacman -S deno --noconfirm && \
    deno upgrade

WORKDIR /app

COPY deno.json deno.lock /app/

RUN deno cache deno.json

COPY . /app/

EXPOSE 4000

CMD ["deno","run","--allow-read","--allow-env","--allow-net","main.ts","preview"]


