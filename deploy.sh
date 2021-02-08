#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.codelib.store' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:BanlistWhut/BanlistWhut.github.io.git master
echo '推送到 github 成功...'

git push -f git@gitee.com:yan_tuo/BanlistWhut.github.io.git master
echo '推送到 gitee 成功...'

echo '等待3秒...'
sleep 3
echo '进入 /Volumes/myshare/var/www/html 文件夹...'
cd /Volumes/myshare/var/www/html
echo '开始删除原文件...'
# 删除原文件
rm -rf ./BanlistWhut.github.io
echo '删除源文件成功...'
# 拉取新文件
echo '开始拉取新文件...'
git clone https://18064077967:jrlove1987@gitee.com/yan_tuo/BanlistWhut.github.io.git
echo '拉取完成...'

# 重启nginx
echo '开始重启nginx...'
nginx -s reload
echo '重启nginx成功...'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
