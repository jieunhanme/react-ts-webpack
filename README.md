# react-ts-webpack

basic setting of webpack + ts + react

0. npx init -y

1. init webpack
   webpack config 작성시, 자동 완성 적용
   /\*_ @type {import('webpack').Configuration} _/

2. inti react
   https://dev.to/vvkkumar06/react-webpack-5-setup-understand-everything-you-need-to-know-3idp

3. init typescript
   npx tsc --init

4. webpack.config 용도에 맞게 분리ㄴ

5. HMR적용
   devServer > hot automatically true 지만 아래와 같은 문구 떄문에 추가
   [webpack-dev-server] "hot: true" automatically applies HMR plugin, you don't have to add it manually to your webpack configuration.
