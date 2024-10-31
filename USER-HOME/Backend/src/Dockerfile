
FROM archlinux:latest

RUN pacman-key --init && \
    pacman -Syu --noconfirm && \
    pacman -S deno --noconfirm

WORKDIR /app

COPY deno.json ./app

RUN deno install 

RUN deno run dev 

CMD ["deno","preview"]
