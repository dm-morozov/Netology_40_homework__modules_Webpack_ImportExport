// webpack.config.mjs       # Точка входа конфигурации Webpack

import { merge } from "webpack-merge";
import common from "./webpack_merge/webpack.common.mjs";
import dev from "./webpack_merge/webpack.dev.mjs";
import prod from "./webpack_merge/webpack.prod.mjs";

export default function(env) {
    if (env.production) {
        return merge(common, prod);
    } else {
        return merge(common, dev);
    }
}