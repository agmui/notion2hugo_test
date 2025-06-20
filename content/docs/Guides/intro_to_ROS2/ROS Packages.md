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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXTDDNC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuQpume4E5d1yR7sHRrGhxYuuYl9%2BdbwA7C6ZUgxV3uAiEA7OHyntBs31%2Bk9Hcg7Vm2U7sb9I%2FCFghN4XCXNCKz1vIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINt3JYD%2F6WR4p5GBircA4we31s2IDCIUd3RDRBQVCo68kmgm%2F2gU6hWlV%2B6Tmdg1kKkLiKBvbTq%2FLb2ctvKmIzFELWMX0QDs50%2BH6GKRtCcA5b2EtpgbT1BWDeS3CkMQqXZsfvRA3cdUYW5W86hiUfiWKxm6PO21dy%2FWFHUjUjUCI7GrJXLNE3y5qWUqdr7TKwXRsyDQRfV1PkxSm04Y4mRaq%2BMU3x0a4Ffw3TZImPmN6bF6rLAXMsccox3asMeOg8S02cSw96rDbi%2F1%2FYHSbmKiiJlY8%2FUbR25vqwgjpQfQ67ax56o4ET2UdnySsOE4VuKXY34zBbVS3gbGoMRNW2tPCbg4Nqc4MXqEcj0S29n2T1ZH6K7WdQwvPw8O%2B%2FGuA1xFyHIkGdbO9O1x6%2BLdAE%2BpY5wDsMIwx5ndbG7RdTV%2BcOv4SH22Z3aB1mUQvIb2vsjkOGwTTsG2OlZyZ2r0SapjnscQyklD6OvP0qhwcwESozocdD5cQIlpQhDK%2B9mYsJJa7VEr888PvovcsupRiN4LTKUxR74OG7ttMZLmq630ULzjjQUSpckCngBllko%2B6JFjFvOWJD%2FCleKtH4xHhZG%2F6Lj8sdc6YND7CPrJ5MhBF8e3wsx0DYY%2BsXVL5%2Bn0PwNhfCWpvfmJqjWMIqy1sIGOqUBIvY7PWQK%2FJk%2FqqLsm6PBZ92s4ypX2HzyQZ995exdFeYaDfmEjQUe3pBnEiNbqx3oJouB%2BF%2B%2BqYew4rvvYKTfVq%2FJjZKqqt%2BXgTJhWQjstg5jnpsURyFwskP%2FBeoMOQ%2FIPF0JS8sfp8pTt1K5BKV6bhGbktY01etFr4GpBMuK6y3LVtOhsjQLYkV7CfHse5iG40fG95EMlTze4ojHHZF%2FJkHztW4J&X-Amz-Signature=4104d67b59d035637993135f5e2a2d8d6dba2e69c693a39dab95757cc084ec2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXTDDNC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuQpume4E5d1yR7sHRrGhxYuuYl9%2BdbwA7C6ZUgxV3uAiEA7OHyntBs31%2Bk9Hcg7Vm2U7sb9I%2FCFghN4XCXNCKz1vIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINt3JYD%2F6WR4p5GBircA4we31s2IDCIUd3RDRBQVCo68kmgm%2F2gU6hWlV%2B6Tmdg1kKkLiKBvbTq%2FLb2ctvKmIzFELWMX0QDs50%2BH6GKRtCcA5b2EtpgbT1BWDeS3CkMQqXZsfvRA3cdUYW5W86hiUfiWKxm6PO21dy%2FWFHUjUjUCI7GrJXLNE3y5qWUqdr7TKwXRsyDQRfV1PkxSm04Y4mRaq%2BMU3x0a4Ffw3TZImPmN6bF6rLAXMsccox3asMeOg8S02cSw96rDbi%2F1%2FYHSbmKiiJlY8%2FUbR25vqwgjpQfQ67ax56o4ET2UdnySsOE4VuKXY34zBbVS3gbGoMRNW2tPCbg4Nqc4MXqEcj0S29n2T1ZH6K7WdQwvPw8O%2B%2FGuA1xFyHIkGdbO9O1x6%2BLdAE%2BpY5wDsMIwx5ndbG7RdTV%2BcOv4SH22Z3aB1mUQvIb2vsjkOGwTTsG2OlZyZ2r0SapjnscQyklD6OvP0qhwcwESozocdD5cQIlpQhDK%2B9mYsJJa7VEr888PvovcsupRiN4LTKUxR74OG7ttMZLmq630ULzjjQUSpckCngBllko%2B6JFjFvOWJD%2FCleKtH4xHhZG%2F6Lj8sdc6YND7CPrJ5MhBF8e3wsx0DYY%2BsXVL5%2Bn0PwNhfCWpvfmJqjWMIqy1sIGOqUBIvY7PWQK%2FJk%2FqqLsm6PBZ92s4ypX2HzyQZ995exdFeYaDfmEjQUe3pBnEiNbqx3oJouB%2BF%2B%2BqYew4rvvYKTfVq%2FJjZKqqt%2BXgTJhWQjstg5jnpsURyFwskP%2FBeoMOQ%2FIPF0JS8sfp8pTt1K5BKV6bhGbktY01etFr4GpBMuK6y3LVtOhsjQLYkV7CfHse5iG40fG95EMlTze4ojHHZF%2FJkHztW4J&X-Amz-Signature=2ea19f714fce52f30d10a282c8f58e5ab66ddc91a2e727d74cc0fadb73ef51fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXTDDNC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuQpume4E5d1yR7sHRrGhxYuuYl9%2BdbwA7C6ZUgxV3uAiEA7OHyntBs31%2Bk9Hcg7Vm2U7sb9I%2FCFghN4XCXNCKz1vIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINt3JYD%2F6WR4p5GBircA4we31s2IDCIUd3RDRBQVCo68kmgm%2F2gU6hWlV%2B6Tmdg1kKkLiKBvbTq%2FLb2ctvKmIzFELWMX0QDs50%2BH6GKRtCcA5b2EtpgbT1BWDeS3CkMQqXZsfvRA3cdUYW5W86hiUfiWKxm6PO21dy%2FWFHUjUjUCI7GrJXLNE3y5qWUqdr7TKwXRsyDQRfV1PkxSm04Y4mRaq%2BMU3x0a4Ffw3TZImPmN6bF6rLAXMsccox3asMeOg8S02cSw96rDbi%2F1%2FYHSbmKiiJlY8%2FUbR25vqwgjpQfQ67ax56o4ET2UdnySsOE4VuKXY34zBbVS3gbGoMRNW2tPCbg4Nqc4MXqEcj0S29n2T1ZH6K7WdQwvPw8O%2B%2FGuA1xFyHIkGdbO9O1x6%2BLdAE%2BpY5wDsMIwx5ndbG7RdTV%2BcOv4SH22Z3aB1mUQvIb2vsjkOGwTTsG2OlZyZ2r0SapjnscQyklD6OvP0qhwcwESozocdD5cQIlpQhDK%2B9mYsJJa7VEr888PvovcsupRiN4LTKUxR74OG7ttMZLmq630ULzjjQUSpckCngBllko%2B6JFjFvOWJD%2FCleKtH4xHhZG%2F6Lj8sdc6YND7CPrJ5MhBF8e3wsx0DYY%2BsXVL5%2Bn0PwNhfCWpvfmJqjWMIqy1sIGOqUBIvY7PWQK%2FJk%2FqqLsm6PBZ92s4ypX2HzyQZ995exdFeYaDfmEjQUe3pBnEiNbqx3oJouB%2BF%2B%2BqYew4rvvYKTfVq%2FJjZKqqt%2BXgTJhWQjstg5jnpsURyFwskP%2FBeoMOQ%2FIPF0JS8sfp8pTt1K5BKV6bhGbktY01etFr4GpBMuK6y3LVtOhsjQLYkV7CfHse5iG40fG95EMlTze4ojHHZF%2FJkHztW4J&X-Amz-Signature=4200e08b6d398188244e113cc9df201fd453cd1af08d51cbe683654e0d85b4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXTDDNC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuQpume4E5d1yR7sHRrGhxYuuYl9%2BdbwA7C6ZUgxV3uAiEA7OHyntBs31%2Bk9Hcg7Vm2U7sb9I%2FCFghN4XCXNCKz1vIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINt3JYD%2F6WR4p5GBircA4we31s2IDCIUd3RDRBQVCo68kmgm%2F2gU6hWlV%2B6Tmdg1kKkLiKBvbTq%2FLb2ctvKmIzFELWMX0QDs50%2BH6GKRtCcA5b2EtpgbT1BWDeS3CkMQqXZsfvRA3cdUYW5W86hiUfiWKxm6PO21dy%2FWFHUjUjUCI7GrJXLNE3y5qWUqdr7TKwXRsyDQRfV1PkxSm04Y4mRaq%2BMU3x0a4Ffw3TZImPmN6bF6rLAXMsccox3asMeOg8S02cSw96rDbi%2F1%2FYHSbmKiiJlY8%2FUbR25vqwgjpQfQ67ax56o4ET2UdnySsOE4VuKXY34zBbVS3gbGoMRNW2tPCbg4Nqc4MXqEcj0S29n2T1ZH6K7WdQwvPw8O%2B%2FGuA1xFyHIkGdbO9O1x6%2BLdAE%2BpY5wDsMIwx5ndbG7RdTV%2BcOv4SH22Z3aB1mUQvIb2vsjkOGwTTsG2OlZyZ2r0SapjnscQyklD6OvP0qhwcwESozocdD5cQIlpQhDK%2B9mYsJJa7VEr888PvovcsupRiN4LTKUxR74OG7ttMZLmq630ULzjjQUSpckCngBllko%2B6JFjFvOWJD%2FCleKtH4xHhZG%2F6Lj8sdc6YND7CPrJ5MhBF8e3wsx0DYY%2BsXVL5%2Bn0PwNhfCWpvfmJqjWMIqy1sIGOqUBIvY7PWQK%2FJk%2FqqLsm6PBZ92s4ypX2HzyQZ995exdFeYaDfmEjQUe3pBnEiNbqx3oJouB%2BF%2B%2BqYew4rvvYKTfVq%2FJjZKqqt%2BXgTJhWQjstg5jnpsURyFwskP%2FBeoMOQ%2FIPF0JS8sfp8pTt1K5BKV6bhGbktY01etFr4GpBMuK6y3LVtOhsjQLYkV7CfHse5iG40fG95EMlTze4ojHHZF%2FJkHztW4J&X-Amz-Signature=61d487e795ad92070edfdd84d930016e093f390a11ccf600428413e1e4f09a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXTDDNC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuQpume4E5d1yR7sHRrGhxYuuYl9%2BdbwA7C6ZUgxV3uAiEA7OHyntBs31%2Bk9Hcg7Vm2U7sb9I%2FCFghN4XCXNCKz1vIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINt3JYD%2F6WR4p5GBircA4we31s2IDCIUd3RDRBQVCo68kmgm%2F2gU6hWlV%2B6Tmdg1kKkLiKBvbTq%2FLb2ctvKmIzFELWMX0QDs50%2BH6GKRtCcA5b2EtpgbT1BWDeS3CkMQqXZsfvRA3cdUYW5W86hiUfiWKxm6PO21dy%2FWFHUjUjUCI7GrJXLNE3y5qWUqdr7TKwXRsyDQRfV1PkxSm04Y4mRaq%2BMU3x0a4Ffw3TZImPmN6bF6rLAXMsccox3asMeOg8S02cSw96rDbi%2F1%2FYHSbmKiiJlY8%2FUbR25vqwgjpQfQ67ax56o4ET2UdnySsOE4VuKXY34zBbVS3gbGoMRNW2tPCbg4Nqc4MXqEcj0S29n2T1ZH6K7WdQwvPw8O%2B%2FGuA1xFyHIkGdbO9O1x6%2BLdAE%2BpY5wDsMIwx5ndbG7RdTV%2BcOv4SH22Z3aB1mUQvIb2vsjkOGwTTsG2OlZyZ2r0SapjnscQyklD6OvP0qhwcwESozocdD5cQIlpQhDK%2B9mYsJJa7VEr888PvovcsupRiN4LTKUxR74OG7ttMZLmq630ULzjjQUSpckCngBllko%2B6JFjFvOWJD%2FCleKtH4xHhZG%2F6Lj8sdc6YND7CPrJ5MhBF8e3wsx0DYY%2BsXVL5%2Bn0PwNhfCWpvfmJqjWMIqy1sIGOqUBIvY7PWQK%2FJk%2FqqLsm6PBZ92s4ypX2HzyQZ995exdFeYaDfmEjQUe3pBnEiNbqx3oJouB%2BF%2B%2BqYew4rvvYKTfVq%2FJjZKqqt%2BXgTJhWQjstg5jnpsURyFwskP%2FBeoMOQ%2FIPF0JS8sfp8pTt1K5BKV6bhGbktY01etFr4GpBMuK6y3LVtOhsjQLYkV7CfHse5iG40fG95EMlTze4ojHHZF%2FJkHztW4J&X-Amz-Signature=e1f295c2ef6062e9b77908daa9c4fd3d007b61929cadd39dc41e7e708b57c8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXTDDNC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuQpume4E5d1yR7sHRrGhxYuuYl9%2BdbwA7C6ZUgxV3uAiEA7OHyntBs31%2Bk9Hcg7Vm2U7sb9I%2FCFghN4XCXNCKz1vIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINt3JYD%2F6WR4p5GBircA4we31s2IDCIUd3RDRBQVCo68kmgm%2F2gU6hWlV%2B6Tmdg1kKkLiKBvbTq%2FLb2ctvKmIzFELWMX0QDs50%2BH6GKRtCcA5b2EtpgbT1BWDeS3CkMQqXZsfvRA3cdUYW5W86hiUfiWKxm6PO21dy%2FWFHUjUjUCI7GrJXLNE3y5qWUqdr7TKwXRsyDQRfV1PkxSm04Y4mRaq%2BMU3x0a4Ffw3TZImPmN6bF6rLAXMsccox3asMeOg8S02cSw96rDbi%2F1%2FYHSbmKiiJlY8%2FUbR25vqwgjpQfQ67ax56o4ET2UdnySsOE4VuKXY34zBbVS3gbGoMRNW2tPCbg4Nqc4MXqEcj0S29n2T1ZH6K7WdQwvPw8O%2B%2FGuA1xFyHIkGdbO9O1x6%2BLdAE%2BpY5wDsMIwx5ndbG7RdTV%2BcOv4SH22Z3aB1mUQvIb2vsjkOGwTTsG2OlZyZ2r0SapjnscQyklD6OvP0qhwcwESozocdD5cQIlpQhDK%2B9mYsJJa7VEr888PvovcsupRiN4LTKUxR74OG7ttMZLmq630ULzjjQUSpckCngBllko%2B6JFjFvOWJD%2FCleKtH4xHhZG%2F6Lj8sdc6YND7CPrJ5MhBF8e3wsx0DYY%2BsXVL5%2Bn0PwNhfCWpvfmJqjWMIqy1sIGOqUBIvY7PWQK%2FJk%2FqqLsm6PBZ92s4ypX2HzyQZ995exdFeYaDfmEjQUe3pBnEiNbqx3oJouB%2BF%2B%2BqYew4rvvYKTfVq%2FJjZKqqt%2BXgTJhWQjstg5jnpsURyFwskP%2FBeoMOQ%2FIPF0JS8sfp8pTt1K5BKV6bhGbktY01etFr4GpBMuK6y3LVtOhsjQLYkV7CfHse5iG40fG95EMlTze4ojHHZF%2FJkHztW4J&X-Amz-Signature=ce1c769c498a355911818fe869b0b35253fb72110dfafb98e03d11c253ccdbd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXTDDNC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuQpume4E5d1yR7sHRrGhxYuuYl9%2BdbwA7C6ZUgxV3uAiEA7OHyntBs31%2Bk9Hcg7Vm2U7sb9I%2FCFghN4XCXNCKz1vIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINt3JYD%2F6WR4p5GBircA4we31s2IDCIUd3RDRBQVCo68kmgm%2F2gU6hWlV%2B6Tmdg1kKkLiKBvbTq%2FLb2ctvKmIzFELWMX0QDs50%2BH6GKRtCcA5b2EtpgbT1BWDeS3CkMQqXZsfvRA3cdUYW5W86hiUfiWKxm6PO21dy%2FWFHUjUjUCI7GrJXLNE3y5qWUqdr7TKwXRsyDQRfV1PkxSm04Y4mRaq%2BMU3x0a4Ffw3TZImPmN6bF6rLAXMsccox3asMeOg8S02cSw96rDbi%2F1%2FYHSbmKiiJlY8%2FUbR25vqwgjpQfQ67ax56o4ET2UdnySsOE4VuKXY34zBbVS3gbGoMRNW2tPCbg4Nqc4MXqEcj0S29n2T1ZH6K7WdQwvPw8O%2B%2FGuA1xFyHIkGdbO9O1x6%2BLdAE%2BpY5wDsMIwx5ndbG7RdTV%2BcOv4SH22Z3aB1mUQvIb2vsjkOGwTTsG2OlZyZ2r0SapjnscQyklD6OvP0qhwcwESozocdD5cQIlpQhDK%2B9mYsJJa7VEr888PvovcsupRiN4LTKUxR74OG7ttMZLmq630ULzjjQUSpckCngBllko%2B6JFjFvOWJD%2FCleKtH4xHhZG%2F6Lj8sdc6YND7CPrJ5MhBF8e3wsx0DYY%2BsXVL5%2Bn0PwNhfCWpvfmJqjWMIqy1sIGOqUBIvY7PWQK%2FJk%2FqqLsm6PBZ92s4ypX2HzyQZ995exdFeYaDfmEjQUe3pBnEiNbqx3oJouB%2BF%2B%2BqYew4rvvYKTfVq%2FJjZKqqt%2BXgTJhWQjstg5jnpsURyFwskP%2FBeoMOQ%2FIPF0JS8sfp8pTt1K5BKV6bhGbktY01etFr4GpBMuK6y3LVtOhsjQLYkV7CfHse5iG40fG95EMlTze4ojHHZF%2FJkHztW4J&X-Amz-Signature=086821f0febf168c1a8b8061f2af609a3baf00012ff74a2f0f58deede91635ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
