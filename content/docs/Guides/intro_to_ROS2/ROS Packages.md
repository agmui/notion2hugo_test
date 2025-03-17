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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZC5WXM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHKZGkjC%2F8%2Fgkh17F452cvlYT4t0%2Bx1TsvBoZER%2F1BxAiEA79FJiQ9xM2yhekiA4fXMEoRxtrVJcgwVjdjPvfsVP2Mq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJOY0FcNlaiSN4A4xCrcAzd0PlWIBqVhLqKR9xE0gLen42MyHXbxiIlhuTWTFjltDFCf2borXdZTm8R7rYy%2FTt9OmFmRy8bDu1QQWEx%2F%2FwoZ4baz6zZtz7KrMAsQpFZH0W4Dswj9pzQt%2FnyZTm%2BpxL1cnl6nrnjIiTvZSMlgU4CiIMS8kHifSBfw8tsHdmGiHVKa9EGXcHy3RN1beaOd6AlLnNh5UokTbvkZW1TYzU8Z93f0tQkHRkbYS%2FROXTClleNnAatXI8wc8rYxflALTMoCJD%2F0CtrBtCMVYECar5y5%2Be58tXhXrO0sigLo6lQ%2BFXzn7LqSOH7bWbLFyOuag9vyQVM%2FFLw6Juc3vOcuI3gOS7a9PXh2pN1L5qCx9pU9sDl3mIG0zgL%2BQEHR%2BqsT95%2Fg6ltBSy9ch%2BtR166qOcxWJGxWQSnms%2B7V9Ym58H6hmiqTg8OKU49Bm50CcLNos5ltKCudF%2FvAz5ObUkNEpP3cj3g5TupbEAikRn8gHCyqxXGQ8f34V7%2FRMt7vnNzWeyKkd4gX1%2BZV3PcsRXgq4M5pOGdEHTGUmouH9cOZQk2ntSvpLrYGZf6N0g4lhUKHdUlTMTC9h2snzQ3F%2BJgOkvJhZhGtrjY%2BiLmtZA8wCK5XgE7xz2gYRBrsYzO9MI%2Fq4L4GOqUBmtwLUaqJOJTyRoGWuOyceH7%2Fh0K8805xz9SZErZ6L4eAkNSvzAupC4S%2BEErH%2BnHAONh68HUjguSiYe8lrmSs%2F4yzBpSHlpSUp50O2xoyrfZSGgtv%2FM1NXwYGkLpe%2BhmCIErMrwEo7N9Sq5xnFW%2BhdfHvkSxstbGfpklPPVviNx%2BO4dfTGoBrJzYfH2ytPKhE8dU2XRSeYPYN%2F0KppIsXTdl5qfFf&X-Amz-Signature=7135d2b2b1df5a8885fb0139b8cbb0f9f813bf8ca4d6378069569eb222c626cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZC5WXM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHKZGkjC%2F8%2Fgkh17F452cvlYT4t0%2Bx1TsvBoZER%2F1BxAiEA79FJiQ9xM2yhekiA4fXMEoRxtrVJcgwVjdjPvfsVP2Mq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJOY0FcNlaiSN4A4xCrcAzd0PlWIBqVhLqKR9xE0gLen42MyHXbxiIlhuTWTFjltDFCf2borXdZTm8R7rYy%2FTt9OmFmRy8bDu1QQWEx%2F%2FwoZ4baz6zZtz7KrMAsQpFZH0W4Dswj9pzQt%2FnyZTm%2BpxL1cnl6nrnjIiTvZSMlgU4CiIMS8kHifSBfw8tsHdmGiHVKa9EGXcHy3RN1beaOd6AlLnNh5UokTbvkZW1TYzU8Z93f0tQkHRkbYS%2FROXTClleNnAatXI8wc8rYxflALTMoCJD%2F0CtrBtCMVYECar5y5%2Be58tXhXrO0sigLo6lQ%2BFXzn7LqSOH7bWbLFyOuag9vyQVM%2FFLw6Juc3vOcuI3gOS7a9PXh2pN1L5qCx9pU9sDl3mIG0zgL%2BQEHR%2BqsT95%2Fg6ltBSy9ch%2BtR166qOcxWJGxWQSnms%2B7V9Ym58H6hmiqTg8OKU49Bm50CcLNos5ltKCudF%2FvAz5ObUkNEpP3cj3g5TupbEAikRn8gHCyqxXGQ8f34V7%2FRMt7vnNzWeyKkd4gX1%2BZV3PcsRXgq4M5pOGdEHTGUmouH9cOZQk2ntSvpLrYGZf6N0g4lhUKHdUlTMTC9h2snzQ3F%2BJgOkvJhZhGtrjY%2BiLmtZA8wCK5XgE7xz2gYRBrsYzO9MI%2Fq4L4GOqUBmtwLUaqJOJTyRoGWuOyceH7%2Fh0K8805xz9SZErZ6L4eAkNSvzAupC4S%2BEErH%2BnHAONh68HUjguSiYe8lrmSs%2F4yzBpSHlpSUp50O2xoyrfZSGgtv%2FM1NXwYGkLpe%2BhmCIErMrwEo7N9Sq5xnFW%2BhdfHvkSxstbGfpklPPVviNx%2BO4dfTGoBrJzYfH2ytPKhE8dU2XRSeYPYN%2F0KppIsXTdl5qfFf&X-Amz-Signature=0878941f20ab4edd30018ca462bfcfdc5fcbe270b4a21f74a8c1ac99a4d3555f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZC5WXM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHKZGkjC%2F8%2Fgkh17F452cvlYT4t0%2Bx1TsvBoZER%2F1BxAiEA79FJiQ9xM2yhekiA4fXMEoRxtrVJcgwVjdjPvfsVP2Mq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJOY0FcNlaiSN4A4xCrcAzd0PlWIBqVhLqKR9xE0gLen42MyHXbxiIlhuTWTFjltDFCf2borXdZTm8R7rYy%2FTt9OmFmRy8bDu1QQWEx%2F%2FwoZ4baz6zZtz7KrMAsQpFZH0W4Dswj9pzQt%2FnyZTm%2BpxL1cnl6nrnjIiTvZSMlgU4CiIMS8kHifSBfw8tsHdmGiHVKa9EGXcHy3RN1beaOd6AlLnNh5UokTbvkZW1TYzU8Z93f0tQkHRkbYS%2FROXTClleNnAatXI8wc8rYxflALTMoCJD%2F0CtrBtCMVYECar5y5%2Be58tXhXrO0sigLo6lQ%2BFXzn7LqSOH7bWbLFyOuag9vyQVM%2FFLw6Juc3vOcuI3gOS7a9PXh2pN1L5qCx9pU9sDl3mIG0zgL%2BQEHR%2BqsT95%2Fg6ltBSy9ch%2BtR166qOcxWJGxWQSnms%2B7V9Ym58H6hmiqTg8OKU49Bm50CcLNos5ltKCudF%2FvAz5ObUkNEpP3cj3g5TupbEAikRn8gHCyqxXGQ8f34V7%2FRMt7vnNzWeyKkd4gX1%2BZV3PcsRXgq4M5pOGdEHTGUmouH9cOZQk2ntSvpLrYGZf6N0g4lhUKHdUlTMTC9h2snzQ3F%2BJgOkvJhZhGtrjY%2BiLmtZA8wCK5XgE7xz2gYRBrsYzO9MI%2Fq4L4GOqUBmtwLUaqJOJTyRoGWuOyceH7%2Fh0K8805xz9SZErZ6L4eAkNSvzAupC4S%2BEErH%2BnHAONh68HUjguSiYe8lrmSs%2F4yzBpSHlpSUp50O2xoyrfZSGgtv%2FM1NXwYGkLpe%2BhmCIErMrwEo7N9Sq5xnFW%2BhdfHvkSxstbGfpklPPVviNx%2BO4dfTGoBrJzYfH2ytPKhE8dU2XRSeYPYN%2F0KppIsXTdl5qfFf&X-Amz-Signature=a36a9332b0a95eaf6ab753802849c96d166004781e147b99eb974e9b7559022b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZC5WXM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHKZGkjC%2F8%2Fgkh17F452cvlYT4t0%2Bx1TsvBoZER%2F1BxAiEA79FJiQ9xM2yhekiA4fXMEoRxtrVJcgwVjdjPvfsVP2Mq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJOY0FcNlaiSN4A4xCrcAzd0PlWIBqVhLqKR9xE0gLen42MyHXbxiIlhuTWTFjltDFCf2borXdZTm8R7rYy%2FTt9OmFmRy8bDu1QQWEx%2F%2FwoZ4baz6zZtz7KrMAsQpFZH0W4Dswj9pzQt%2FnyZTm%2BpxL1cnl6nrnjIiTvZSMlgU4CiIMS8kHifSBfw8tsHdmGiHVKa9EGXcHy3RN1beaOd6AlLnNh5UokTbvkZW1TYzU8Z93f0tQkHRkbYS%2FROXTClleNnAatXI8wc8rYxflALTMoCJD%2F0CtrBtCMVYECar5y5%2Be58tXhXrO0sigLo6lQ%2BFXzn7LqSOH7bWbLFyOuag9vyQVM%2FFLw6Juc3vOcuI3gOS7a9PXh2pN1L5qCx9pU9sDl3mIG0zgL%2BQEHR%2BqsT95%2Fg6ltBSy9ch%2BtR166qOcxWJGxWQSnms%2B7V9Ym58H6hmiqTg8OKU49Bm50CcLNos5ltKCudF%2FvAz5ObUkNEpP3cj3g5TupbEAikRn8gHCyqxXGQ8f34V7%2FRMt7vnNzWeyKkd4gX1%2BZV3PcsRXgq4M5pOGdEHTGUmouH9cOZQk2ntSvpLrYGZf6N0g4lhUKHdUlTMTC9h2snzQ3F%2BJgOkvJhZhGtrjY%2BiLmtZA8wCK5XgE7xz2gYRBrsYzO9MI%2Fq4L4GOqUBmtwLUaqJOJTyRoGWuOyceH7%2Fh0K8805xz9SZErZ6L4eAkNSvzAupC4S%2BEErH%2BnHAONh68HUjguSiYe8lrmSs%2F4yzBpSHlpSUp50O2xoyrfZSGgtv%2FM1NXwYGkLpe%2BhmCIErMrwEo7N9Sq5xnFW%2BhdfHvkSxstbGfpklPPVviNx%2BO4dfTGoBrJzYfH2ytPKhE8dU2XRSeYPYN%2F0KppIsXTdl5qfFf&X-Amz-Signature=fa08033b078b1850c6587a7e95dd43c38d01c8079021aa04d0f8b677fca60aab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZC5WXM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHKZGkjC%2F8%2Fgkh17F452cvlYT4t0%2Bx1TsvBoZER%2F1BxAiEA79FJiQ9xM2yhekiA4fXMEoRxtrVJcgwVjdjPvfsVP2Mq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJOY0FcNlaiSN4A4xCrcAzd0PlWIBqVhLqKR9xE0gLen42MyHXbxiIlhuTWTFjltDFCf2borXdZTm8R7rYy%2FTt9OmFmRy8bDu1QQWEx%2F%2FwoZ4baz6zZtz7KrMAsQpFZH0W4Dswj9pzQt%2FnyZTm%2BpxL1cnl6nrnjIiTvZSMlgU4CiIMS8kHifSBfw8tsHdmGiHVKa9EGXcHy3RN1beaOd6AlLnNh5UokTbvkZW1TYzU8Z93f0tQkHRkbYS%2FROXTClleNnAatXI8wc8rYxflALTMoCJD%2F0CtrBtCMVYECar5y5%2Be58tXhXrO0sigLo6lQ%2BFXzn7LqSOH7bWbLFyOuag9vyQVM%2FFLw6Juc3vOcuI3gOS7a9PXh2pN1L5qCx9pU9sDl3mIG0zgL%2BQEHR%2BqsT95%2Fg6ltBSy9ch%2BtR166qOcxWJGxWQSnms%2B7V9Ym58H6hmiqTg8OKU49Bm50CcLNos5ltKCudF%2FvAz5ObUkNEpP3cj3g5TupbEAikRn8gHCyqxXGQ8f34V7%2FRMt7vnNzWeyKkd4gX1%2BZV3PcsRXgq4M5pOGdEHTGUmouH9cOZQk2ntSvpLrYGZf6N0g4lhUKHdUlTMTC9h2snzQ3F%2BJgOkvJhZhGtrjY%2BiLmtZA8wCK5XgE7xz2gYRBrsYzO9MI%2Fq4L4GOqUBmtwLUaqJOJTyRoGWuOyceH7%2Fh0K8805xz9SZErZ6L4eAkNSvzAupC4S%2BEErH%2BnHAONh68HUjguSiYe8lrmSs%2F4yzBpSHlpSUp50O2xoyrfZSGgtv%2FM1NXwYGkLpe%2BhmCIErMrwEo7N9Sq5xnFW%2BhdfHvkSxstbGfpklPPVviNx%2BO4dfTGoBrJzYfH2ytPKhE8dU2XRSeYPYN%2F0KppIsXTdl5qfFf&X-Amz-Signature=4cb75672275dc1fb208f86d9ec46b1df2d45af4a8159d636129a07de94272568&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZC5WXM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHKZGkjC%2F8%2Fgkh17F452cvlYT4t0%2Bx1TsvBoZER%2F1BxAiEA79FJiQ9xM2yhekiA4fXMEoRxtrVJcgwVjdjPvfsVP2Mq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJOY0FcNlaiSN4A4xCrcAzd0PlWIBqVhLqKR9xE0gLen42MyHXbxiIlhuTWTFjltDFCf2borXdZTm8R7rYy%2FTt9OmFmRy8bDu1QQWEx%2F%2FwoZ4baz6zZtz7KrMAsQpFZH0W4Dswj9pzQt%2FnyZTm%2BpxL1cnl6nrnjIiTvZSMlgU4CiIMS8kHifSBfw8tsHdmGiHVKa9EGXcHy3RN1beaOd6AlLnNh5UokTbvkZW1TYzU8Z93f0tQkHRkbYS%2FROXTClleNnAatXI8wc8rYxflALTMoCJD%2F0CtrBtCMVYECar5y5%2Be58tXhXrO0sigLo6lQ%2BFXzn7LqSOH7bWbLFyOuag9vyQVM%2FFLw6Juc3vOcuI3gOS7a9PXh2pN1L5qCx9pU9sDl3mIG0zgL%2BQEHR%2BqsT95%2Fg6ltBSy9ch%2BtR166qOcxWJGxWQSnms%2B7V9Ym58H6hmiqTg8OKU49Bm50CcLNos5ltKCudF%2FvAz5ObUkNEpP3cj3g5TupbEAikRn8gHCyqxXGQ8f34V7%2FRMt7vnNzWeyKkd4gX1%2BZV3PcsRXgq4M5pOGdEHTGUmouH9cOZQk2ntSvpLrYGZf6N0g4lhUKHdUlTMTC9h2snzQ3F%2BJgOkvJhZhGtrjY%2BiLmtZA8wCK5XgE7xz2gYRBrsYzO9MI%2Fq4L4GOqUBmtwLUaqJOJTyRoGWuOyceH7%2Fh0K8805xz9SZErZ6L4eAkNSvzAupC4S%2BEErH%2BnHAONh68HUjguSiYe8lrmSs%2F4yzBpSHlpSUp50O2xoyrfZSGgtv%2FM1NXwYGkLpe%2BhmCIErMrwEo7N9Sq5xnFW%2BhdfHvkSxstbGfpklPPVviNx%2BO4dfTGoBrJzYfH2ytPKhE8dU2XRSeYPYN%2F0KppIsXTdl5qfFf&X-Amz-Signature=fe162a22d509ac514fbe832d0f68c7375e3f019a34720f8afdb9a5211df95599&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZC5WXM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHKZGkjC%2F8%2Fgkh17F452cvlYT4t0%2Bx1TsvBoZER%2F1BxAiEA79FJiQ9xM2yhekiA4fXMEoRxtrVJcgwVjdjPvfsVP2Mq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJOY0FcNlaiSN4A4xCrcAzd0PlWIBqVhLqKR9xE0gLen42MyHXbxiIlhuTWTFjltDFCf2borXdZTm8R7rYy%2FTt9OmFmRy8bDu1QQWEx%2F%2FwoZ4baz6zZtz7KrMAsQpFZH0W4Dswj9pzQt%2FnyZTm%2BpxL1cnl6nrnjIiTvZSMlgU4CiIMS8kHifSBfw8tsHdmGiHVKa9EGXcHy3RN1beaOd6AlLnNh5UokTbvkZW1TYzU8Z93f0tQkHRkbYS%2FROXTClleNnAatXI8wc8rYxflALTMoCJD%2F0CtrBtCMVYECar5y5%2Be58tXhXrO0sigLo6lQ%2BFXzn7LqSOH7bWbLFyOuag9vyQVM%2FFLw6Juc3vOcuI3gOS7a9PXh2pN1L5qCx9pU9sDl3mIG0zgL%2BQEHR%2BqsT95%2Fg6ltBSy9ch%2BtR166qOcxWJGxWQSnms%2B7V9Ym58H6hmiqTg8OKU49Bm50CcLNos5ltKCudF%2FvAz5ObUkNEpP3cj3g5TupbEAikRn8gHCyqxXGQ8f34V7%2FRMt7vnNzWeyKkd4gX1%2BZV3PcsRXgq4M5pOGdEHTGUmouH9cOZQk2ntSvpLrYGZf6N0g4lhUKHdUlTMTC9h2snzQ3F%2BJgOkvJhZhGtrjY%2BiLmtZA8wCK5XgE7xz2gYRBrsYzO9MI%2Fq4L4GOqUBmtwLUaqJOJTyRoGWuOyceH7%2Fh0K8805xz9SZErZ6L4eAkNSvzAupC4S%2BEErH%2BnHAONh68HUjguSiYe8lrmSs%2F4yzBpSHlpSUp50O2xoyrfZSGgtv%2FM1NXwYGkLpe%2BhmCIErMrwEo7N9Sq5xnFW%2BhdfHvkSxstbGfpklPPVviNx%2BO4dfTGoBrJzYfH2ytPKhE8dU2XRSeYPYN%2F0KppIsXTdl5qfFf&X-Amz-Signature=25b32b26945a38f91d53449fa2138e2d5b516641d8070da56c544ad00b2a9421&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
