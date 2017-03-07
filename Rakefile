require 'rake/clean'
require 'fileutils'

CLOBBER.include('build')

desc "Build the static site"
task :build_site do
  sh %{ bundle exec middleman build --verbose }
end

desc "Start a server for the built site"
task :run_server do   
  sh %{ ruby -run -ehttpd ./build -p4567 }
end

desc "Run the live updating development server"
task :development_server do 
  sh %{ EXECJS_RUNTIME=Node bundle exec middleman server } 
end

desc "Build the site with docker"
task :docker_build do
  sh "docker build -t dev.bambora.com ."
  sh "mkdir -p build"
  sh "docker run -v `pwd`/build:/usr/src/app/build dev.bambora.com static"
end


task :dev => [:dev_server]

task :run => [:build_site, :run_server]

task :static => [:build_site]