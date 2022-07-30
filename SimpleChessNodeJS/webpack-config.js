module.exports = {
    devtool: 'source-map',
    entry: "./app.tsx",
    mode: "development",
    output: {
        filename: "./app-bundle.js",
        devtoolModuleFilenameTemplate: '[resource-path]'  // removes the webpack:/// prefix
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
        rules: [
            {   // Use ts-loader extension to compile TypeScript files
                test: /\.tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'ts-loader'
                }]
            },
            {   // Use npm extension file-loader to load images.
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[hash:base64]", // default
                                auto: true // default
                            },
                            sourceMap: true
                        }
                    },
                ]
            },
        ]
    }
}