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

desc "Deploy build to s3"
task :deploy do
  new_bucket = false 
  branch = `git symbolic-ref --short HEAD` 
  if branch == "master"
    puts "deploying master to production..."
    bucket_name = "dev.beanstream.com"
  else
    puts "Deploying branch #{branch}..."
    bucket_name = "dev.beanstream.com.branch.#{branch}"

    if `aws s3 ls "s3://#{bucket_name}" 2>&1 | grep -q 'NoSuchBucket'`
      puts "Bucket doesn't exist, creating bucket...'"
      new_bucket = true 
      sh %{ aws s3 mb "s3://#{bucket_name}" }
    end
  end
  
  puts "syncing to bucket"
  sh %{ aws s3 sync --delete --exact-timestamps /build s3://#{bucket_name} }

  if new_bucket
    puts "Enabling static website and adding policy to new bucket..."
    file = File.open("s3-bucket-policy.json", "rb")
    policy = file.read
    file.close
    sh %{ aws s3 website "s3://#{bucket_name}" --index-document index.html }
    sh %{ aws s3api put-bucket-policy --bucket "#{bucket_name}" --policy "#{policy}"}
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

task :dev => [:dev_server]

task :run => [:build_site, :run_server]

task :static => [:build_site]

task :bamboo => [:build_site, :deploy]