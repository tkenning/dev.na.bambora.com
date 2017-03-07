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

desc "Zip the artifact for Bamboo"
task :zip_artifact do 
  puts "Zipping artifact"
  sh "mkdir -p artifact"
  sh "zip -r artifact/site.zip build/"
end

desc "Deploy build to s3"
task :deploy do 
  sh %{ git symbolic-ref --short HEAD } do |ok, res| 
    if ok 
      if res == "master"
        puts "deploying master to production"
        bucket_name = "dev.beanstream.com"
      else
        puts "Deploying branch #{res}"
        bucket_name = "dev.beanstream.com.branch.#{res}"

        sh %{ aws s3 ls "s3://#{bucket_name}" } do |ok, res| 
          if ok 
            puts res
          end
        end
      end

      puts "syncing to bucket"
      # sh %{ aws s3 sync --delete --exact-timestamps /build s3://#{bucket_name} }
    end
  end
end

desc "Cleanup buckets for deployed feature branches"
task :cleanup_deployed_buckets do
  sh %{ aws s3api list-buckets --query 'Buckets[].Name' } do |ok, res|
    if ! ok 
      puts "Cannot access aws s3api"
    else 
      puts "res"
      # TODO: 
    end
  end
end

desc "a test task. Delete me."
task :test_task do
  puts "This is a test rake task"
end

task :dev => [:dev_server]

task :run => [:build_site, :run_server]

task :static => [:build_site]

task :bamboo => [:docker_build, :zip_artifact, :deploy]

task :test => [:test_task]