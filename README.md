# Serverless lerna monorepo example
## Motivation
Using [Serverless](https://serverless.com/framework/docs/) with Javascript mono repos usually requires no hoist options. [serverless-plugin-monorepo](https://github.com/Butterwire/serverless-plugin-monorepo) solves this problem when a mono repo uses [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/). It should be a preferred way to use Serverless with a mono repo, if there is no limitation which package manager (yarn or npm) to select.

But there might be cases when yarn can't be used. The project addresses such needs by utilising modified [serverless-plugin-monorepo](https://github.com/Butterwire/serverless-plugin-monorepo) as a local plugin.

## Usage
1. Clone the project and modify in/add to code to packages folder.
2. Copy  ```.serverless_plugins/serverless-monorepo-lerna-plugin.js``` and update ```serverless.yml``` to have plugin and globs as shown in ```lambda-function-a``` or ```lambda-function-b```. Add depndendencies: ```npm i shelljs lerna --save-dev``` (assuming serverless added as a development dependency or global package).

