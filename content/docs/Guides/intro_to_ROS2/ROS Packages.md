---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEYU2JT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCrDwNCwH9OCvHj9rnIr%2BbE3sVvdghIi2m9XdIyGvGDBQIgbuS%2BHKx21vlwiCfNbtv8XMh59QOLtzrPgXafhzXwJGYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAHQkCOQsEC%2F7Bg9ZircA%2F%2FB0OfxJncdDyvj289brsSuC8SbsLGoJYbAIIYuItFV04sq1wsy88jKW28LOyPZTA35lHQvE7JdzdJKLVzjKjg7rQddERa2CuYy65EqiWDAhigSAQPU%2B3oIKM3xeyOvsP4wd5IBgoy6MSQBSiL%2Fb%2FIFCTn2lVdxn2lpgsmw6tNv8Xh23%2BSQIMfe6Jaxx%2Baf%2BWnSV5NjNQH6ZDqL8KSHkmaLnQewWAKW2Q3WP%2FpCWxqul%2FhWbq9XAH9%2B0kh4yZZT9Iq14eFqY3hvthK0FCnIbGBDpC2Sh3RAFKV3eqv0%2BLcgCnX34RqZH538qau%2BBT%2FsZbSuV1qz1zf%2FaKjc4StFmPsGeFJjuIZKqdLnZuTwYiwwMxCBCizxoTu0VZfiOHy0ediaTa1T8Y80do0vc%2FLudRBqSGMTGYxR5hsFz2R4jWk0YoAwdQYcIvHm%2BsSkqTlv85v3AZ6PYdNwd2mBYzn2ezphNqR2q7RJRbXFkEj4POquecy7o7MfCSgvW5PyaEXATwKb36D63SRoJjbKEC70LNn4F5f88fh6EKhc%2B7X8hhfhISWgiEHsvDLFhbCO4w%2FEWYPcmhuRnBgKkHvdt9pOKL6awkufofunpuQcP0TRxZjKlzvUPKByOyX%2FCg6fMOmFg8IGOqUBSct1MqJwaQE2nfVVtUmUitMbDp%2BDdQ2cjcsRX2gk%2Fi2RFz%2BkMI6UjWWENnWtv0x4FVziLnxEzj4f6eNC5MusSL19AvqU7oEk%2ByWDprvEQAr3Dhr53HdSHsx%2FaEioM3%2FlEqicUN7uIhJ1JNL7WKtnm3R4IgT6fAGpe7j%2FHGH7muQdmr0hvhVAr9gmBTbdf2s7oUUHIhGGqSpi5WZMvcBdPWkcS65u&X-Amz-Signature=a882a421149c4e48f253306ab348f4608fe2f8224db17fa0ce02fee73f508a36&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEYU2JT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCrDwNCwH9OCvHj9rnIr%2BbE3sVvdghIi2m9XdIyGvGDBQIgbuS%2BHKx21vlwiCfNbtv8XMh59QOLtzrPgXafhzXwJGYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAHQkCOQsEC%2F7Bg9ZircA%2F%2FB0OfxJncdDyvj289brsSuC8SbsLGoJYbAIIYuItFV04sq1wsy88jKW28LOyPZTA35lHQvE7JdzdJKLVzjKjg7rQddERa2CuYy65EqiWDAhigSAQPU%2B3oIKM3xeyOvsP4wd5IBgoy6MSQBSiL%2Fb%2FIFCTn2lVdxn2lpgsmw6tNv8Xh23%2BSQIMfe6Jaxx%2Baf%2BWnSV5NjNQH6ZDqL8KSHkmaLnQewWAKW2Q3WP%2FpCWxqul%2FhWbq9XAH9%2B0kh4yZZT9Iq14eFqY3hvthK0FCnIbGBDpC2Sh3RAFKV3eqv0%2BLcgCnX34RqZH538qau%2BBT%2FsZbSuV1qz1zf%2FaKjc4StFmPsGeFJjuIZKqdLnZuTwYiwwMxCBCizxoTu0VZfiOHy0ediaTa1T8Y80do0vc%2FLudRBqSGMTGYxR5hsFz2R4jWk0YoAwdQYcIvHm%2BsSkqTlv85v3AZ6PYdNwd2mBYzn2ezphNqR2q7RJRbXFkEj4POquecy7o7MfCSgvW5PyaEXATwKb36D63SRoJjbKEC70LNn4F5f88fh6EKhc%2B7X8hhfhISWgiEHsvDLFhbCO4w%2FEWYPcmhuRnBgKkHvdt9pOKL6awkufofunpuQcP0TRxZjKlzvUPKByOyX%2FCg6fMOmFg8IGOqUBSct1MqJwaQE2nfVVtUmUitMbDp%2BDdQ2cjcsRX2gk%2Fi2RFz%2BkMI6UjWWENnWtv0x4FVziLnxEzj4f6eNC5MusSL19AvqU7oEk%2ByWDprvEQAr3Dhr53HdSHsx%2FaEioM3%2FlEqicUN7uIhJ1JNL7WKtnm3R4IgT6fAGpe7j%2FHGH7muQdmr0hvhVAr9gmBTbdf2s7oUUHIhGGqSpi5WZMvcBdPWkcS65u&X-Amz-Signature=0bfc319477e8940c1ed111d1c09e38b752b1323521c31201291511dbfa2b1ccd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEYU2JT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCrDwNCwH9OCvHj9rnIr%2BbE3sVvdghIi2m9XdIyGvGDBQIgbuS%2BHKx21vlwiCfNbtv8XMh59QOLtzrPgXafhzXwJGYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAHQkCOQsEC%2F7Bg9ZircA%2F%2FB0OfxJncdDyvj289brsSuC8SbsLGoJYbAIIYuItFV04sq1wsy88jKW28LOyPZTA35lHQvE7JdzdJKLVzjKjg7rQddERa2CuYy65EqiWDAhigSAQPU%2B3oIKM3xeyOvsP4wd5IBgoy6MSQBSiL%2Fb%2FIFCTn2lVdxn2lpgsmw6tNv8Xh23%2BSQIMfe6Jaxx%2Baf%2BWnSV5NjNQH6ZDqL8KSHkmaLnQewWAKW2Q3WP%2FpCWxqul%2FhWbq9XAH9%2B0kh4yZZT9Iq14eFqY3hvthK0FCnIbGBDpC2Sh3RAFKV3eqv0%2BLcgCnX34RqZH538qau%2BBT%2FsZbSuV1qz1zf%2FaKjc4StFmPsGeFJjuIZKqdLnZuTwYiwwMxCBCizxoTu0VZfiOHy0ediaTa1T8Y80do0vc%2FLudRBqSGMTGYxR5hsFz2R4jWk0YoAwdQYcIvHm%2BsSkqTlv85v3AZ6PYdNwd2mBYzn2ezphNqR2q7RJRbXFkEj4POquecy7o7MfCSgvW5PyaEXATwKb36D63SRoJjbKEC70LNn4F5f88fh6EKhc%2B7X8hhfhISWgiEHsvDLFhbCO4w%2FEWYPcmhuRnBgKkHvdt9pOKL6awkufofunpuQcP0TRxZjKlzvUPKByOyX%2FCg6fMOmFg8IGOqUBSct1MqJwaQE2nfVVtUmUitMbDp%2BDdQ2cjcsRX2gk%2Fi2RFz%2BkMI6UjWWENnWtv0x4FVziLnxEzj4f6eNC5MusSL19AvqU7oEk%2ByWDprvEQAr3Dhr53HdSHsx%2FaEioM3%2FlEqicUN7uIhJ1JNL7WKtnm3R4IgT6fAGpe7j%2FHGH7muQdmr0hvhVAr9gmBTbdf2s7oUUHIhGGqSpi5WZMvcBdPWkcS65u&X-Amz-Signature=b74e3b50919ea0b5d2a54a804a0bc9712559360db966506a77edb16d09473a36&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEYU2JT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCrDwNCwH9OCvHj9rnIr%2BbE3sVvdghIi2m9XdIyGvGDBQIgbuS%2BHKx21vlwiCfNbtv8XMh59QOLtzrPgXafhzXwJGYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAHQkCOQsEC%2F7Bg9ZircA%2F%2FB0OfxJncdDyvj289brsSuC8SbsLGoJYbAIIYuItFV04sq1wsy88jKW28LOyPZTA35lHQvE7JdzdJKLVzjKjg7rQddERa2CuYy65EqiWDAhigSAQPU%2B3oIKM3xeyOvsP4wd5IBgoy6MSQBSiL%2Fb%2FIFCTn2lVdxn2lpgsmw6tNv8Xh23%2BSQIMfe6Jaxx%2Baf%2BWnSV5NjNQH6ZDqL8KSHkmaLnQewWAKW2Q3WP%2FpCWxqul%2FhWbq9XAH9%2B0kh4yZZT9Iq14eFqY3hvthK0FCnIbGBDpC2Sh3RAFKV3eqv0%2BLcgCnX34RqZH538qau%2BBT%2FsZbSuV1qz1zf%2FaKjc4StFmPsGeFJjuIZKqdLnZuTwYiwwMxCBCizxoTu0VZfiOHy0ediaTa1T8Y80do0vc%2FLudRBqSGMTGYxR5hsFz2R4jWk0YoAwdQYcIvHm%2BsSkqTlv85v3AZ6PYdNwd2mBYzn2ezphNqR2q7RJRbXFkEj4POquecy7o7MfCSgvW5PyaEXATwKb36D63SRoJjbKEC70LNn4F5f88fh6EKhc%2B7X8hhfhISWgiEHsvDLFhbCO4w%2FEWYPcmhuRnBgKkHvdt9pOKL6awkufofunpuQcP0TRxZjKlzvUPKByOyX%2FCg6fMOmFg8IGOqUBSct1MqJwaQE2nfVVtUmUitMbDp%2BDdQ2cjcsRX2gk%2Fi2RFz%2BkMI6UjWWENnWtv0x4FVziLnxEzj4f6eNC5MusSL19AvqU7oEk%2ByWDprvEQAr3Dhr53HdSHsx%2FaEioM3%2FlEqicUN7uIhJ1JNL7WKtnm3R4IgT6fAGpe7j%2FHGH7muQdmr0hvhVAr9gmBTbdf2s7oUUHIhGGqSpi5WZMvcBdPWkcS65u&X-Amz-Signature=938a91abb7b24a60c06d44e481a361faab65e5e8a18c3f90745de797033b37f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEYU2JT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCrDwNCwH9OCvHj9rnIr%2BbE3sVvdghIi2m9XdIyGvGDBQIgbuS%2BHKx21vlwiCfNbtv8XMh59QOLtzrPgXafhzXwJGYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAHQkCOQsEC%2F7Bg9ZircA%2F%2FB0OfxJncdDyvj289brsSuC8SbsLGoJYbAIIYuItFV04sq1wsy88jKW28LOyPZTA35lHQvE7JdzdJKLVzjKjg7rQddERa2CuYy65EqiWDAhigSAQPU%2B3oIKM3xeyOvsP4wd5IBgoy6MSQBSiL%2Fb%2FIFCTn2lVdxn2lpgsmw6tNv8Xh23%2BSQIMfe6Jaxx%2Baf%2BWnSV5NjNQH6ZDqL8KSHkmaLnQewWAKW2Q3WP%2FpCWxqul%2FhWbq9XAH9%2B0kh4yZZT9Iq14eFqY3hvthK0FCnIbGBDpC2Sh3RAFKV3eqv0%2BLcgCnX34RqZH538qau%2BBT%2FsZbSuV1qz1zf%2FaKjc4StFmPsGeFJjuIZKqdLnZuTwYiwwMxCBCizxoTu0VZfiOHy0ediaTa1T8Y80do0vc%2FLudRBqSGMTGYxR5hsFz2R4jWk0YoAwdQYcIvHm%2BsSkqTlv85v3AZ6PYdNwd2mBYzn2ezphNqR2q7RJRbXFkEj4POquecy7o7MfCSgvW5PyaEXATwKb36D63SRoJjbKEC70LNn4F5f88fh6EKhc%2B7X8hhfhISWgiEHsvDLFhbCO4w%2FEWYPcmhuRnBgKkHvdt9pOKL6awkufofunpuQcP0TRxZjKlzvUPKByOyX%2FCg6fMOmFg8IGOqUBSct1MqJwaQE2nfVVtUmUitMbDp%2BDdQ2cjcsRX2gk%2Fi2RFz%2BkMI6UjWWENnWtv0x4FVziLnxEzj4f6eNC5MusSL19AvqU7oEk%2ByWDprvEQAr3Dhr53HdSHsx%2FaEioM3%2FlEqicUN7uIhJ1JNL7WKtnm3R4IgT6fAGpe7j%2FHGH7muQdmr0hvhVAr9gmBTbdf2s7oUUHIhGGqSpi5WZMvcBdPWkcS65u&X-Amz-Signature=7e7395b7f59c0f5b26c9c729635caa25929abf7e01d7baef9bdb4c71fc594bea&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEYU2JT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCrDwNCwH9OCvHj9rnIr%2BbE3sVvdghIi2m9XdIyGvGDBQIgbuS%2BHKx21vlwiCfNbtv8XMh59QOLtzrPgXafhzXwJGYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAHQkCOQsEC%2F7Bg9ZircA%2F%2FB0OfxJncdDyvj289brsSuC8SbsLGoJYbAIIYuItFV04sq1wsy88jKW28LOyPZTA35lHQvE7JdzdJKLVzjKjg7rQddERa2CuYy65EqiWDAhigSAQPU%2B3oIKM3xeyOvsP4wd5IBgoy6MSQBSiL%2Fb%2FIFCTn2lVdxn2lpgsmw6tNv8Xh23%2BSQIMfe6Jaxx%2Baf%2BWnSV5NjNQH6ZDqL8KSHkmaLnQewWAKW2Q3WP%2FpCWxqul%2FhWbq9XAH9%2B0kh4yZZT9Iq14eFqY3hvthK0FCnIbGBDpC2Sh3RAFKV3eqv0%2BLcgCnX34RqZH538qau%2BBT%2FsZbSuV1qz1zf%2FaKjc4StFmPsGeFJjuIZKqdLnZuTwYiwwMxCBCizxoTu0VZfiOHy0ediaTa1T8Y80do0vc%2FLudRBqSGMTGYxR5hsFz2R4jWk0YoAwdQYcIvHm%2BsSkqTlv85v3AZ6PYdNwd2mBYzn2ezphNqR2q7RJRbXFkEj4POquecy7o7MfCSgvW5PyaEXATwKb36D63SRoJjbKEC70LNn4F5f88fh6EKhc%2B7X8hhfhISWgiEHsvDLFhbCO4w%2FEWYPcmhuRnBgKkHvdt9pOKL6awkufofunpuQcP0TRxZjKlzvUPKByOyX%2FCg6fMOmFg8IGOqUBSct1MqJwaQE2nfVVtUmUitMbDp%2BDdQ2cjcsRX2gk%2Fi2RFz%2BkMI6UjWWENnWtv0x4FVziLnxEzj4f6eNC5MusSL19AvqU7oEk%2ByWDprvEQAr3Dhr53HdSHsx%2FaEioM3%2FlEqicUN7uIhJ1JNL7WKtnm3R4IgT6fAGpe7j%2FHGH7muQdmr0hvhVAr9gmBTbdf2s7oUUHIhGGqSpi5WZMvcBdPWkcS65u&X-Amz-Signature=1d3f561be85cd89bd4a506d4e8cc283df1795359c7ba872dabe94ebe24e036aa&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEYU2JT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCrDwNCwH9OCvHj9rnIr%2BbE3sVvdghIi2m9XdIyGvGDBQIgbuS%2BHKx21vlwiCfNbtv8XMh59QOLtzrPgXafhzXwJGYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAHQkCOQsEC%2F7Bg9ZircA%2F%2FB0OfxJncdDyvj289brsSuC8SbsLGoJYbAIIYuItFV04sq1wsy88jKW28LOyPZTA35lHQvE7JdzdJKLVzjKjg7rQddERa2CuYy65EqiWDAhigSAQPU%2B3oIKM3xeyOvsP4wd5IBgoy6MSQBSiL%2Fb%2FIFCTn2lVdxn2lpgsmw6tNv8Xh23%2BSQIMfe6Jaxx%2Baf%2BWnSV5NjNQH6ZDqL8KSHkmaLnQewWAKW2Q3WP%2FpCWxqul%2FhWbq9XAH9%2B0kh4yZZT9Iq14eFqY3hvthK0FCnIbGBDpC2Sh3RAFKV3eqv0%2BLcgCnX34RqZH538qau%2BBT%2FsZbSuV1qz1zf%2FaKjc4StFmPsGeFJjuIZKqdLnZuTwYiwwMxCBCizxoTu0VZfiOHy0ediaTa1T8Y80do0vc%2FLudRBqSGMTGYxR5hsFz2R4jWk0YoAwdQYcIvHm%2BsSkqTlv85v3AZ6PYdNwd2mBYzn2ezphNqR2q7RJRbXFkEj4POquecy7o7MfCSgvW5PyaEXATwKb36D63SRoJjbKEC70LNn4F5f88fh6EKhc%2B7X8hhfhISWgiEHsvDLFhbCO4w%2FEWYPcmhuRnBgKkHvdt9pOKL6awkufofunpuQcP0TRxZjKlzvUPKByOyX%2FCg6fMOmFg8IGOqUBSct1MqJwaQE2nfVVtUmUitMbDp%2BDdQ2cjcsRX2gk%2Fi2RFz%2BkMI6UjWWENnWtv0x4FVziLnxEzj4f6eNC5MusSL19AvqU7oEk%2ByWDprvEQAr3Dhr53HdSHsx%2FaEioM3%2FlEqicUN7uIhJ1JNL7WKtnm3R4IgT6fAGpe7j%2FHGH7muQdmr0hvhVAr9gmBTbdf2s7oUUHIhGGqSpi5WZMvcBdPWkcS65u&X-Amz-Signature=9d9a1def7235eb1c1e87a0298b468c0b72c4e4653f47ddc7038a4abd5cd0ef1e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
