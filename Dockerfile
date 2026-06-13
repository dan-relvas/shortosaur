# Use the official Node.js image as a base
FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN ["npm", "i"]

# Command to run the application
CMD ["node", "src/app.js"]
