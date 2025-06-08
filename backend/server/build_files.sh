# build_files.sh

pip install -r requirements.txt
python manage.py collectstatic --noinput

# Apply any outstanding database migrations
python manage.py migrate
