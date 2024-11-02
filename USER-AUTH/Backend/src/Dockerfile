FROM archlinux:latest

RUN pacman-key --init && \
    pacman -Syu --noconfirm && \
    pacman -S nodejs yarn ts-node --noconfirm


WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app/

EXPOSE 4000

RUN yarn run start

CMD ["yarn","start"]
