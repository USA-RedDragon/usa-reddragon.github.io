![resume screenshot](https://raw.githubusercontent.com/joematthews/resume/master/assets/images/resume_screenshot.png)
# Simple, mobile-friendly, resume project for Jekyll

## Goal
I created this project to provide an easy way for keeping my resume up to date.  

The magic lies in the data files in the _data folder.  I use json to store all of my skills, work history and education including references to links and images.  Then I use the Liquid templating language of Jekyll to enumerate over the json objects to generate the view.

Bootstrap takes care of the visuals.  For my template I use a 24 column grid -- I find that the more columns the better for detailed work.

All CSS is compiled into one file -- including the custom fonts and social media icons; checkout the [assets/main.scss](https://github.com/joematthews/resume/blob/master/assets/main.scss) & [_sass/custom-bootstrap.scss](https://github.com/joematthews/resume/blob/master/_sass/_custom-bootstrap.scss) files to see how it's all put together.

I soon plan to turn this template/project into an offical Jekyll theme gem with blog support.  Look forward to that.  In the meantime please feel free to use this project as a starting point for your Jekyll-based resume.

## Try it yourself
To get this project working locally on you computer you can follow these basic steps.

### Install Git
I highly recommend github's [article](https://help.github.com/articles/set-up-git/) on the subject.

### Install Ruby
Mac OS and most Linux distributions come with Ruby installed.  I highly recommend using [rbenv](https://github.com/rbenv/rbenv) to manage different ruby versions for each project.

For all other methods for installing Ruby, including Windows, check out [this page](https://www.ruby-lang.org/en/documentation/installation/).

### Install Jekyll & the resume project
Installing Jekyll is quite simple once Ruby is up and running.  Jekyll's official [documentation](https://jekyllrb.com/docs/home/) is excellent, but running these commands will get you going:
```bash
git clone https://github.com/joematthews/resume.git
cd resume
gem install jekyll bundler
bundle exec jekyll serve
```
Then, you should be able to see the resume at http://127.0.0.1:4000/resume/.

### Customize these files to make the resume your own
  * Data files located in the [_data](https://github.com/joematthews/resume/tree/master/_data) folder.
  * The config file, [_config.yaml](https://github.com/joematthews/resume/blob/master/_config.yml)
  * The template, [index.html](https://github.com/joematthews/resume/blob/master/index.html)
