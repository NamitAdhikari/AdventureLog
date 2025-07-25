# Use the official Python slim image as the base image
FROM python:3.10-slim

LABEL Developers="Sean Morley"

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory
WORKDIR /code

# Install system dependencies (Nginx included)
RUN apt-get update \
    && apt-get install -y git postgresql-client gdal-bin libgdal-dev \
    g++ build-essential nginx supervisor wget \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY ./server/requirements.txt /code/
RUN gdal-config --version
RUN pip install -r requirements.txt

# Create necessary directories
RUN mkdir -p /code/static /code/media
# RUN mkdir -p /code/staticfiles /code/media

# Copy the Django project code into the Docker image
COPY ./server /code/

# Copy Nginx configuration
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy Supervisor configuration
COPY ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Collect static files
RUN python3 manage.py collectstatic --noinput --verbosity 2

# Set the entrypoint script
COPY ./entrypoint.sh /code/entrypoint.sh
RUN chmod +x /code/entrypoint.sh

# Expose ports for NGINX and Gunicorn
EXPOSE 80 8000

# Command to start Supervisor (which starts Nginx and Gunicorn)
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
