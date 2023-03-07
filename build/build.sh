SRC=/home/ubuntu/uzair-blog
DST=/var/www/e-tech

cd $SRC

# yarn build

sudo rm -rf $DST/*

cp -rf dist/e-tech/assets /var/www/e-tech/.

sudo cp -rf dist/e-tech/* $DST/.

sudo systemctl restart nginx.service