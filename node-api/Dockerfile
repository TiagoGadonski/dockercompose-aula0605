FROM node:18-alpine
# Set the working directory
WORKDIR /app


# Copy the application code
COPY ./  /app


# Copy package.json and install dependencies
RUN npm install express
RUN npm install axios


# Command to run the application
CMD ["node", "app.js"]


# Expose the port the app runs on
EXPOSE 3000