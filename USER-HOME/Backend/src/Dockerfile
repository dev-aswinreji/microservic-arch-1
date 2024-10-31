# Use Arch Linux as the base image
FROM archlinux:latest

# Initialize pacman keys, update system, and install Deno
RUN pacman-key --init && \
    pacman -Syu --noconfirm && \
    pacman -S deno --noconfirm && \
    deno upgrade

# Set the working directory
WORKDIR /app

# Copy Deno configuration files and cache dependencies
COPY deno.json deno.lock /app/
RUN deno cache deno.json

# Copy the entire project after caching dependencies
COPY . /app/

# Expose the necessary port
EXPOSE 4000

# Command to run the application, granting necessary permissions
CMD ["deno", "run", "--allow-read", "--allow-env", "--allow-net", "main.ts"]
