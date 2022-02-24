const webpack = require('webpack');
module.exports = function override(config, env) {
  
   
      

    config.resolve.fallback = {
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
        modules: [resolve(process.cwd(), 'src'), 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json'],
        symlinks: false,
        cacheWithContext: false
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    )
}