module.exports = {
  mode: 'none',
  entry: {
    index: './src/index.ts',
    client: './src/client.ts',
    host: './src/host.ts'
  },
  output: {
    libraryTarget: 'umd',
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
        options: {}
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
