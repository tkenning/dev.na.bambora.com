# Developer Portal for North America

## Contents

* [Build the site](#build-the-site)
* [Branching and merging](#branching-and-merging)
* [Editing the docs](#editing-the-docs)
* [Making non-documentation changes to the site](#making-non-documentation-changes-to-the-site)

## Build the site

### Docker

The simplest way to get set up is to use the included Dockerfile (must install docker first).

```shell
git clone https://github.com/bambora/dev.na.bambora.com.git
cd dev.na.bambora.com
docker build -t devbamboracom .

# For windows:
docker run -v $pwd/source/:/usr/src/app/source -p 4567:4567 devbamboracom

# For linux:
docker run -v `pwd`/source:/usr/src/app/source -p 4567:4567 devbamboracom
```

You can now see the docs at <http://localhost:4567>.

*Note: if you're using the Docker setup on Windows or OSX, the docs will be
available at the output of `docker-machine ip <machine-name>` (port: 4567) instead of `localhost:4567`.*

### Run locally

Alternatively, you can build and run the site locally. You're going to need: 

* **Linux , OS X, windows**.
* **Ruby, version 1.9.3 or newer**
* **Node.js**
* **Bundler** — If Ruby is already installed, but the `bundle` command doesn't work, just run `gem install bundler` in a terminal.


```shell
git clone https://github.com/bambora/dev.na.bambora.com.git
cd dev.na.bambora.com
bundle install
```

To start the preview web server:

```shell
EXECJS_RUNTIME=Node bundle exec middleman server
```

If you want to build the static site files only then run:

```shell
bundle exec rake static
```

If you want to run the static site in a standalone simple web server run:

```shell
bundle exec rake run
```

## Editing the docs

There are two main ways to make changes to the documentation.


### Through you web browser

Every page of the developer portal has an 'Edit this page' button in the top right corner. Clicking this will prompt you to create or sign in to a Github account and fork the developer portal repository. You will then be taken to the markdown version of the page you wish to edit. After making your changes, click propose file changes and then create a pull request against the master branch of the repository. Your changes will be reviewed and merged into the developer portal.


### Through a git branch

Larger changes to the documentation should be made locally on a branch of the repository. See the [Branching and merging](#branching-and-merging) section for details on the branching strategy of the repository. The documentation lives in the `source/docs/` folder of the repository.


### Markdown and YAML

The documentation pages on the site are written in [YAML](https://learnxinyminutes.com/docs/yaml/) and [Markdown](http://commonmark.org/help/). YAML is used to define frontmatter configuration for each page (e.g. specifying it's template) and Markdown is used to write the actual documentation.

You can define and import sub-pages in top level pages to separate content. Just add an `includes` key to the frontmatter of a page:

```yaml
includes:
  - web/checkout
  - web/hosted_fields
  - web/my_new_topic
```

You will need to add the actual file to the `source/includes/` directory and prefix it with an underscore, but make sure to leave that our when adding it in the includes section.

*Note* that in preview mode in GitHub it will look a bit wonky with the code samples. That is because we render the markdown using a tool called Slate and it is not built into GitHub.

The markdown parser also supports tables formatted like so:

```markdown
| header 1 | header 2 |
| -------- | -------- |
| cell 1   | cell 2   |
| cell 3   | cell 4   |
```

The spec template uses a tool called [Slate](https://github.com/tripit/slate) to render tabs on the right of the page to display code samples in different languages. You might want to learn about [editing Slate markdown](https://github.com/tripit/slate/wiki/Markdown-Syntax).

## Branching and merging

The site is auto-deployed on pushes to the master branch that build successfully. Changes should first be made and tested on a dedicated development team branch, then pushed to the staging branch, and only staging should ever be pushed to master.

Any branch pushed to the github repo will attempt to build and, if successful, will deploy to an internally accessible s3 bucket with the name dev.beanstream.com.#{branch_name}. These buckets will periodically be deleted but will be recreated if need be when the branch is pushed again (development team base branches will never be deleted).

When development team branches are pushed, Bamboo will try and merge in the master branch before building them and, if successful, will commit the merge back to the development team branch. 


## Making non-documentation changes to the site

With a little more effort, larger changes (e.g. adding a new template, changing css styling) can be made to the developer portal.
