# Use Nginx as base image
FROM nginx:alpine

# Copy the HTML, CSS, and JS files into the Nginx server directory
COPY ./index.html /usr/share/nginx/html
COPY ./style.css /usr/share/nginx/html
COPY ./script.js /usr/share/nginx/html
