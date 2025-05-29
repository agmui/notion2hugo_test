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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOZCUKF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOaFOJ4hxu4oXobkFU4w9AiS5zoa90Uu226yutR%2FU1NAiApJi5Yow9d%2FfxeGt8DC4xqREw4Yykhv0k6VnVMmBSqTyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqI5C5ePbYqMOKppDKtwDeFX%2BQ3zDnwHYww9oNPDMKwrnswUCeFcQRhndhiGMm60UuAq6HKZGBeYy58Knh2gnvvqHtupJS2ee2HfN5EilZ62CFgBfcdtPhbcf8loXxEhW0s8QXz3UhCkODkbHNXfIDADX8jxi43pakTUjrHdDrXspR9yCFDWRUgzqeZ4s75%2FYi2J5k6JS8zDcJ4P7f%2BO9G6UTmmXKBeSPQjhgemS%2BqbJowb4SLvdpMXK6Z80S94EQgBL8yXMKfRoXf%2BcOB2T2huKyQplx8GF6mPm5LrvMGBOIcukH6f0M7xZ0gBosiPHF0qSZkg5LOH%2F7WVk3zQi1zKca6BECl0pmarTt8HDqasJzh9LBuf%2B4TV8Br4YLhVf27P33WkY37k6c9xLzwHRQ0GtTOzVhia4b%2F06CEGbpiKJA2zVK66mOVnxBn0%2FguKpthUpvZAJnw5wh3dxLevmCzvl0pMNPUUnprs7vCeHGEAQcKZs13Bqm6JMcJv9mk0KAC6KjIs8iXBYFf4dMVY7HJDm%2B11mtrqZ0RC4JPSHoHbUZdtHXrawK0DlFChzY7q8UMhPb24hpY1l4qD33wffcKE0XlpiJCW5Xz7gvqgbLx%2Bj7EXHrfgeEDEMv8x%2BHXZDIj%2FeU5Os67ddObgQwv6%2FfwQY6pgEF2S1t2bo5644bvcPaMaZJaZ5oRaeW7yezpt9n79iWYDVMgrdHvv%2BAx1RKEWMgp6v1iWwbGnWy%2F7x2HIkO8mBd8isz7nVxtbRzysTj%2BYMlnuBcvJAS42q4C2LZpdQ8MdAXErgYoRipNPSLmcqf9AJAWmFXnZ0a%2FFCTN%2F9Puxv5Ky4nOsVqcTeZjL8RQGD%2FRtBeYjLI6vg8sx37WTW4eT%2BOAGGxz4%2B4&X-Amz-Signature=636d5746a5450cfd9e744b24d3320926399793f1753717e3592b9c8cd60f573a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOZCUKF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOaFOJ4hxu4oXobkFU4w9AiS5zoa90Uu226yutR%2FU1NAiApJi5Yow9d%2FfxeGt8DC4xqREw4Yykhv0k6VnVMmBSqTyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqI5C5ePbYqMOKppDKtwDeFX%2BQ3zDnwHYww9oNPDMKwrnswUCeFcQRhndhiGMm60UuAq6HKZGBeYy58Knh2gnvvqHtupJS2ee2HfN5EilZ62CFgBfcdtPhbcf8loXxEhW0s8QXz3UhCkODkbHNXfIDADX8jxi43pakTUjrHdDrXspR9yCFDWRUgzqeZ4s75%2FYi2J5k6JS8zDcJ4P7f%2BO9G6UTmmXKBeSPQjhgemS%2BqbJowb4SLvdpMXK6Z80S94EQgBL8yXMKfRoXf%2BcOB2T2huKyQplx8GF6mPm5LrvMGBOIcukH6f0M7xZ0gBosiPHF0qSZkg5LOH%2F7WVk3zQi1zKca6BECl0pmarTt8HDqasJzh9LBuf%2B4TV8Br4YLhVf27P33WkY37k6c9xLzwHRQ0GtTOzVhia4b%2F06CEGbpiKJA2zVK66mOVnxBn0%2FguKpthUpvZAJnw5wh3dxLevmCzvl0pMNPUUnprs7vCeHGEAQcKZs13Bqm6JMcJv9mk0KAC6KjIs8iXBYFf4dMVY7HJDm%2B11mtrqZ0RC4JPSHoHbUZdtHXrawK0DlFChzY7q8UMhPb24hpY1l4qD33wffcKE0XlpiJCW5Xz7gvqgbLx%2Bj7EXHrfgeEDEMv8x%2BHXZDIj%2FeU5Os67ddObgQwv6%2FfwQY6pgEF2S1t2bo5644bvcPaMaZJaZ5oRaeW7yezpt9n79iWYDVMgrdHvv%2BAx1RKEWMgp6v1iWwbGnWy%2F7x2HIkO8mBd8isz7nVxtbRzysTj%2BYMlnuBcvJAS42q4C2LZpdQ8MdAXErgYoRipNPSLmcqf9AJAWmFXnZ0a%2FFCTN%2F9Puxv5Ky4nOsVqcTeZjL8RQGD%2FRtBeYjLI6vg8sx37WTW4eT%2BOAGGxz4%2B4&X-Amz-Signature=ba4cf05e6e5b9691d2ba39df6accc3853ff7f26096193f468216bef9cfa9fbc6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOZCUKF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOaFOJ4hxu4oXobkFU4w9AiS5zoa90Uu226yutR%2FU1NAiApJi5Yow9d%2FfxeGt8DC4xqREw4Yykhv0k6VnVMmBSqTyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqI5C5ePbYqMOKppDKtwDeFX%2BQ3zDnwHYww9oNPDMKwrnswUCeFcQRhndhiGMm60UuAq6HKZGBeYy58Knh2gnvvqHtupJS2ee2HfN5EilZ62CFgBfcdtPhbcf8loXxEhW0s8QXz3UhCkODkbHNXfIDADX8jxi43pakTUjrHdDrXspR9yCFDWRUgzqeZ4s75%2FYi2J5k6JS8zDcJ4P7f%2BO9G6UTmmXKBeSPQjhgemS%2BqbJowb4SLvdpMXK6Z80S94EQgBL8yXMKfRoXf%2BcOB2T2huKyQplx8GF6mPm5LrvMGBOIcukH6f0M7xZ0gBosiPHF0qSZkg5LOH%2F7WVk3zQi1zKca6BECl0pmarTt8HDqasJzh9LBuf%2B4TV8Br4YLhVf27P33WkY37k6c9xLzwHRQ0GtTOzVhia4b%2F06CEGbpiKJA2zVK66mOVnxBn0%2FguKpthUpvZAJnw5wh3dxLevmCzvl0pMNPUUnprs7vCeHGEAQcKZs13Bqm6JMcJv9mk0KAC6KjIs8iXBYFf4dMVY7HJDm%2B11mtrqZ0RC4JPSHoHbUZdtHXrawK0DlFChzY7q8UMhPb24hpY1l4qD33wffcKE0XlpiJCW5Xz7gvqgbLx%2Bj7EXHrfgeEDEMv8x%2BHXZDIj%2FeU5Os67ddObgQwv6%2FfwQY6pgEF2S1t2bo5644bvcPaMaZJaZ5oRaeW7yezpt9n79iWYDVMgrdHvv%2BAx1RKEWMgp6v1iWwbGnWy%2F7x2HIkO8mBd8isz7nVxtbRzysTj%2BYMlnuBcvJAS42q4C2LZpdQ8MdAXErgYoRipNPSLmcqf9AJAWmFXnZ0a%2FFCTN%2F9Puxv5Ky4nOsVqcTeZjL8RQGD%2FRtBeYjLI6vg8sx37WTW4eT%2BOAGGxz4%2B4&X-Amz-Signature=65c468b0bb555522941a84163846f51acd8faab2d0be47d1fc8ab92eb3ca6207&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOZCUKF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOaFOJ4hxu4oXobkFU4w9AiS5zoa90Uu226yutR%2FU1NAiApJi5Yow9d%2FfxeGt8DC4xqREw4Yykhv0k6VnVMmBSqTyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqI5C5ePbYqMOKppDKtwDeFX%2BQ3zDnwHYww9oNPDMKwrnswUCeFcQRhndhiGMm60UuAq6HKZGBeYy58Knh2gnvvqHtupJS2ee2HfN5EilZ62CFgBfcdtPhbcf8loXxEhW0s8QXz3UhCkODkbHNXfIDADX8jxi43pakTUjrHdDrXspR9yCFDWRUgzqeZ4s75%2FYi2J5k6JS8zDcJ4P7f%2BO9G6UTmmXKBeSPQjhgemS%2BqbJowb4SLvdpMXK6Z80S94EQgBL8yXMKfRoXf%2BcOB2T2huKyQplx8GF6mPm5LrvMGBOIcukH6f0M7xZ0gBosiPHF0qSZkg5LOH%2F7WVk3zQi1zKca6BECl0pmarTt8HDqasJzh9LBuf%2B4TV8Br4YLhVf27P33WkY37k6c9xLzwHRQ0GtTOzVhia4b%2F06CEGbpiKJA2zVK66mOVnxBn0%2FguKpthUpvZAJnw5wh3dxLevmCzvl0pMNPUUnprs7vCeHGEAQcKZs13Bqm6JMcJv9mk0KAC6KjIs8iXBYFf4dMVY7HJDm%2B11mtrqZ0RC4JPSHoHbUZdtHXrawK0DlFChzY7q8UMhPb24hpY1l4qD33wffcKE0XlpiJCW5Xz7gvqgbLx%2Bj7EXHrfgeEDEMv8x%2BHXZDIj%2FeU5Os67ddObgQwv6%2FfwQY6pgEF2S1t2bo5644bvcPaMaZJaZ5oRaeW7yezpt9n79iWYDVMgrdHvv%2BAx1RKEWMgp6v1iWwbGnWy%2F7x2HIkO8mBd8isz7nVxtbRzysTj%2BYMlnuBcvJAS42q4C2LZpdQ8MdAXErgYoRipNPSLmcqf9AJAWmFXnZ0a%2FFCTN%2F9Puxv5Ky4nOsVqcTeZjL8RQGD%2FRtBeYjLI6vg8sx37WTW4eT%2BOAGGxz4%2B4&X-Amz-Signature=b82c75db324614f27b325c9ae74f435a10ae3c4a32604f84a052f5c5e8f3eb2d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOZCUKF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOaFOJ4hxu4oXobkFU4w9AiS5zoa90Uu226yutR%2FU1NAiApJi5Yow9d%2FfxeGt8DC4xqREw4Yykhv0k6VnVMmBSqTyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqI5C5ePbYqMOKppDKtwDeFX%2BQ3zDnwHYww9oNPDMKwrnswUCeFcQRhndhiGMm60UuAq6HKZGBeYy58Knh2gnvvqHtupJS2ee2HfN5EilZ62CFgBfcdtPhbcf8loXxEhW0s8QXz3UhCkODkbHNXfIDADX8jxi43pakTUjrHdDrXspR9yCFDWRUgzqeZ4s75%2FYi2J5k6JS8zDcJ4P7f%2BO9G6UTmmXKBeSPQjhgemS%2BqbJowb4SLvdpMXK6Z80S94EQgBL8yXMKfRoXf%2BcOB2T2huKyQplx8GF6mPm5LrvMGBOIcukH6f0M7xZ0gBosiPHF0qSZkg5LOH%2F7WVk3zQi1zKca6BECl0pmarTt8HDqasJzh9LBuf%2B4TV8Br4YLhVf27P33WkY37k6c9xLzwHRQ0GtTOzVhia4b%2F06CEGbpiKJA2zVK66mOVnxBn0%2FguKpthUpvZAJnw5wh3dxLevmCzvl0pMNPUUnprs7vCeHGEAQcKZs13Bqm6JMcJv9mk0KAC6KjIs8iXBYFf4dMVY7HJDm%2B11mtrqZ0RC4JPSHoHbUZdtHXrawK0DlFChzY7q8UMhPb24hpY1l4qD33wffcKE0XlpiJCW5Xz7gvqgbLx%2Bj7EXHrfgeEDEMv8x%2BHXZDIj%2FeU5Os67ddObgQwv6%2FfwQY6pgEF2S1t2bo5644bvcPaMaZJaZ5oRaeW7yezpt9n79iWYDVMgrdHvv%2BAx1RKEWMgp6v1iWwbGnWy%2F7x2HIkO8mBd8isz7nVxtbRzysTj%2BYMlnuBcvJAS42q4C2LZpdQ8MdAXErgYoRipNPSLmcqf9AJAWmFXnZ0a%2FFCTN%2F9Puxv5Ky4nOsVqcTeZjL8RQGD%2FRtBeYjLI6vg8sx37WTW4eT%2BOAGGxz4%2B4&X-Amz-Signature=467d5612f6abb2c12e3c9a2ca3655f1ecb719fbdff63d721fe4a40be7083a3ed&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOZCUKF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOaFOJ4hxu4oXobkFU4w9AiS5zoa90Uu226yutR%2FU1NAiApJi5Yow9d%2FfxeGt8DC4xqREw4Yykhv0k6VnVMmBSqTyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqI5C5ePbYqMOKppDKtwDeFX%2BQ3zDnwHYww9oNPDMKwrnswUCeFcQRhndhiGMm60UuAq6HKZGBeYy58Knh2gnvvqHtupJS2ee2HfN5EilZ62CFgBfcdtPhbcf8loXxEhW0s8QXz3UhCkODkbHNXfIDADX8jxi43pakTUjrHdDrXspR9yCFDWRUgzqeZ4s75%2FYi2J5k6JS8zDcJ4P7f%2BO9G6UTmmXKBeSPQjhgemS%2BqbJowb4SLvdpMXK6Z80S94EQgBL8yXMKfRoXf%2BcOB2T2huKyQplx8GF6mPm5LrvMGBOIcukH6f0M7xZ0gBosiPHF0qSZkg5LOH%2F7WVk3zQi1zKca6BECl0pmarTt8HDqasJzh9LBuf%2B4TV8Br4YLhVf27P33WkY37k6c9xLzwHRQ0GtTOzVhia4b%2F06CEGbpiKJA2zVK66mOVnxBn0%2FguKpthUpvZAJnw5wh3dxLevmCzvl0pMNPUUnprs7vCeHGEAQcKZs13Bqm6JMcJv9mk0KAC6KjIs8iXBYFf4dMVY7HJDm%2B11mtrqZ0RC4JPSHoHbUZdtHXrawK0DlFChzY7q8UMhPb24hpY1l4qD33wffcKE0XlpiJCW5Xz7gvqgbLx%2Bj7EXHrfgeEDEMv8x%2BHXZDIj%2FeU5Os67ddObgQwv6%2FfwQY6pgEF2S1t2bo5644bvcPaMaZJaZ5oRaeW7yezpt9n79iWYDVMgrdHvv%2BAx1RKEWMgp6v1iWwbGnWy%2F7x2HIkO8mBd8isz7nVxtbRzysTj%2BYMlnuBcvJAS42q4C2LZpdQ8MdAXErgYoRipNPSLmcqf9AJAWmFXnZ0a%2FFCTN%2F9Puxv5Ky4nOsVqcTeZjL8RQGD%2FRtBeYjLI6vg8sx37WTW4eT%2BOAGGxz4%2B4&X-Amz-Signature=1118e1aa071a3cf0581b91888519aa60f7434d0388f71eb8fe26c93b644f1798&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMOZCUKF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOaFOJ4hxu4oXobkFU4w9AiS5zoa90Uu226yutR%2FU1NAiApJi5Yow9d%2FfxeGt8DC4xqREw4Yykhv0k6VnVMmBSqTyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqI5C5ePbYqMOKppDKtwDeFX%2BQ3zDnwHYww9oNPDMKwrnswUCeFcQRhndhiGMm60UuAq6HKZGBeYy58Knh2gnvvqHtupJS2ee2HfN5EilZ62CFgBfcdtPhbcf8loXxEhW0s8QXz3UhCkODkbHNXfIDADX8jxi43pakTUjrHdDrXspR9yCFDWRUgzqeZ4s75%2FYi2J5k6JS8zDcJ4P7f%2BO9G6UTmmXKBeSPQjhgemS%2BqbJowb4SLvdpMXK6Z80S94EQgBL8yXMKfRoXf%2BcOB2T2huKyQplx8GF6mPm5LrvMGBOIcukH6f0M7xZ0gBosiPHF0qSZkg5LOH%2F7WVk3zQi1zKca6BECl0pmarTt8HDqasJzh9LBuf%2B4TV8Br4YLhVf27P33WkY37k6c9xLzwHRQ0GtTOzVhia4b%2F06CEGbpiKJA2zVK66mOVnxBn0%2FguKpthUpvZAJnw5wh3dxLevmCzvl0pMNPUUnprs7vCeHGEAQcKZs13Bqm6JMcJv9mk0KAC6KjIs8iXBYFf4dMVY7HJDm%2B11mtrqZ0RC4JPSHoHbUZdtHXrawK0DlFChzY7q8UMhPb24hpY1l4qD33wffcKE0XlpiJCW5Xz7gvqgbLx%2Bj7EXHrfgeEDEMv8x%2BHXZDIj%2FeU5Os67ddObgQwv6%2FfwQY6pgEF2S1t2bo5644bvcPaMaZJaZ5oRaeW7yezpt9n79iWYDVMgrdHvv%2BAx1RKEWMgp6v1iWwbGnWy%2F7x2HIkO8mBd8isz7nVxtbRzysTj%2BYMlnuBcvJAS42q4C2LZpdQ8MdAXErgYoRipNPSLmcqf9AJAWmFXnZ0a%2FFCTN%2F9Puxv5Ky4nOsVqcTeZjL8RQGD%2FRtBeYjLI6vg8sx37WTW4eT%2BOAGGxz4%2B4&X-Amz-Signature=808f3c0f4369ee7d6a3751ef4c884d5ba4097e66996cf4a2e7ca277e82dae28f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
