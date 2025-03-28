import path from 'path';

export default {
  entry: './view/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), './view/dist'),
    publicPath: '', // Asegura que las rutas sean relativas
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
    
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  mode: 'development',
};