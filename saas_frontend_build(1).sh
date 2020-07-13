#!/bin/bash

echo === back to dist folder ===
date=$(date "+%Y-%m-%d-%H-%M")
cd /opt/code/dist/current
tar czvf saas_admin_frontend_$date.tar.gz saas_admin_frontend

codedir=/opt/code/src
cd $codedir
rm -rf saas_frontend

echo === clone code ===
#git clone -b developer_factoryDev git@codehub.devcloud.huaweicloud.com:jhpt00001/saas_frontend.git
git clone -b test-v1.3.0 git@codehub.devcloud.huaweicloud.com:jhpt00001/saas_frontend.git

echo =====================================================================================
echo === build frontend ===
cd $codedir/saas_frontend
cp -r /opt/code/conf/saas_admin_frontend/axios.js $codedir/saas_frontend/src/utils/axios.js
cp -r /opt/code/conf/saas_admin_frontend/index.vue $codedir/saas_frontend/src/components/uploadPhoto/index.vue
cp -r /opt/code/conf/saas_admin_frontend/MultiUpload.vue $codedir/saas_frontend/src/components/upload/MultiUpload.vue
cp -r /opt/code/conf/saas_admin_frontend/SingleUpload.vue $codedir/saas_frontend/src/components/upload/SingleUpload.vue
cp -r /opt/code/conf/saas_admin_frontend/GoodsMultiUpload.vue $codedir/saas_frontend/src/components/upload/GoodsMultiUpload.vue

npm install
cd  /opt/code/src/saas_frontend
npm i qrcodejs2 -s
npm run build

echo === make current version ===
if [ "$(ls /opt/code/dist/|grep $(date +%Y%m%d)|wc -l)" -eq "0" ];then
mkdir -p /opt/code/dist/$(date +%Y%m%d)
cp -r /opt/code/dist/current/* /opt/code/dist/$(date +%Y%m%d)/
cd /opt/code/dist/$(date +%Y%m%d)/ && sudo rm *.tar.gz
rm -rf /opt/code/dist/current
ln -s /opt/code/dist/$(date +%Y%m%d) /opt/code/dist/current
fi

echo === copy to dist folder ===
rm -rf /opt/code/dist/$(date +%Y%m%d)/saas_admin_frontend
mkdir -p /opt/code/dist/$(date +%Y%m%d)/saas_admin_frontend
cp -r /opt/code/src/saas_frontend/dist/* /opt/code/dist/$(date +%Y%m%d)/saas_admin_frontend
