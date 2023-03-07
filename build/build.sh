SRC=/home/ubuntu/uzair-blog
DST=/var/www/e-tech

cd $SRC

sudo yarn build

sudo rm -r $DST/*

sudo cp $SRC/dist/e-tech/* $DST

sudo systemctl restart nginx.service