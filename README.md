# syndesis.io website

## Building

### Prerequisites
* Install NodeJS
* Install `yarn`: `curl -o- -L https://yarnpkg.com/install.sh | bash`
  * macOS and Homebrew users: `brew install yarn`
* Add yarn's binary directory to your path in your `.bashrc` or `.bash_profile`: `export PATH=${PATH}:$(yarn global bin)`
* Install `gulp` globally: `yarn global add gulp-cli`
* Install `hugo` (see http://gohugo.io/overview/installing/)
* Run `yarn`

### Previewing
Run `gulp` and open your browser at http://localhost:1313.

### Building
Run `gulp build` to build site into `docs` directory, which GitHub will serve from.

## Publishing
`gulp build && git add -A . && git push`
