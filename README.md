# vite支持多页面打包

## 解决的bug
+ 不支持TSX
+ 如何传递和获取动态环境变量

## 环境变量和命令行参数
+ 环境变量
    + process.env.命令行中的key
    + 实例：Build_Dir=v20230214 pnpm run build（Build_Dir是环境变量）
    + 环境变量放在命令的最前方，放在后方会认为的某个命令的参数（其实rails中环境变量也是尽量放在最前方）
+ 命令行变量
    + process.argv获取的是命令行变量
    + 实例：npm run build --page=pages/demo（--pages是参数）
    + 当一个命令包含多个命令时候，参数传递的位置怎么确定