module.exports = {
  entry: __dirname + "/src/test.js", //ビルドするファイル
  output: {
    path: __dirname + "/dist", //ビルドしたファイルを吐き出す場所
    filename: "bundle.js", //ビルドした後のファイル名
  },
  module: {
    loaders: [
      // {
      //   test: ビルド対象のファイルを指定
      //   includes: ビルド対象に含めるファイルを指定
      //   exclude: ビルド対象に除外するファイルを指定
      //   loader: loaderを指定
      //   query: loader に渡したいクエリパラメータを指定
      // },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        //loaderに渡したいクエリパラメータを指定します
        query: {
          presets: ["es2015", "stage-0"],
        },
      },
    ],
  },
};
