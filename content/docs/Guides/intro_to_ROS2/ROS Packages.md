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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YKEHZ4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBJbzx2kYl%2FeGlCOQxZFQcq02Ddv5uIyHrxuKXD7VXlHAiA%2BBqmzVy8ZFedr1rfPJC1i4h%2FXbZ8GDcL%2FSPwuyYtxnyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZNw68j1%2BByR1JtqKtwDkPkCsy6%2FVurQ7ecG3da3E4JiiRBhnX%2FqDkx6Z1CnrC2gPVrxWaDoCL0arqxRoUvasO8FTnqg9ERIhBl0p8ihRih7oHyIkFqxy17STi7tJWknPxns7NXGMa2H0I8m0cAZrSVCA9lHgCnCNob5uLpAiBbZ%2FcO9sX2cYoCbA3xz8h6FgJPXP%2B2Hu3L6Jd8RgKpmKyVIRba2uMmyw7mbG1tp15qOmHIiIgHKIYIXii%2BXlCcOOSTksG0EGIYENcfreemSYp%2FmlNa2skOfWXdZxEhTfulgS7P4kaKcObif%2FrORJ2LRIp3toLSudhIpyUDAVvbUTzxSo7TqedJkpkTO8ztgi%2BhAykq%2Bsvk5ZAO0aqzxU8S6cTF6hqKnwHhnCqLUm0zrFjB5erJoEF8SQDRjV0%2Fp0cZz3%2F9IMEcOsUf3mC%2F0QN0OR5o9NFuVLIYKHfrcfBy7MBnHVoiPN0ZlZsOVkaIutNwHEcWf2Kn5UAV5jrPlU7ASSqBzVzj8r%2BmxzIoq5hJ2rEUZDMQfvz%2FFofBJ%2FH8X2v7uSHotLPOhmMAcutbgGNen6Q4QmQuP%2FmnBvH%2BbrR2rDWDuUtmUedTVN5Ac%2Bypi3YCoJy6FU0KqZniHvTRHmhIzify6GSOkijWBPhYwk6GkwAY6pgFpXU%2F795SHtE9sBYkG4DnP4pVLcrO9oJN5CG3f1Pv0E7fKP8JszMVMUMC9R3uHQEVdbLiiI6IFYLBuCuO6EbHyHWLEHxEmUMO17GmmGneASZBSvX2fQiM9IjH35b0eQlgAr5IXqLCZiCnmoue8b9VDIQXTgccPr22l%2FIzX6O80L3%2BTsL5iPr%2BjoCIy6fcnwY%2FYJSlEMqaUY%2Ft3C%2FaE7d3ZN5svQyBg&X-Amz-Signature=de02faba97aaed870590c6345edd1b6ee838e070cb2e8ac2f426f792111be7ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YKEHZ4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBJbzx2kYl%2FeGlCOQxZFQcq02Ddv5uIyHrxuKXD7VXlHAiA%2BBqmzVy8ZFedr1rfPJC1i4h%2FXbZ8GDcL%2FSPwuyYtxnyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZNw68j1%2BByR1JtqKtwDkPkCsy6%2FVurQ7ecG3da3E4JiiRBhnX%2FqDkx6Z1CnrC2gPVrxWaDoCL0arqxRoUvasO8FTnqg9ERIhBl0p8ihRih7oHyIkFqxy17STi7tJWknPxns7NXGMa2H0I8m0cAZrSVCA9lHgCnCNob5uLpAiBbZ%2FcO9sX2cYoCbA3xz8h6FgJPXP%2B2Hu3L6Jd8RgKpmKyVIRba2uMmyw7mbG1tp15qOmHIiIgHKIYIXii%2BXlCcOOSTksG0EGIYENcfreemSYp%2FmlNa2skOfWXdZxEhTfulgS7P4kaKcObif%2FrORJ2LRIp3toLSudhIpyUDAVvbUTzxSo7TqedJkpkTO8ztgi%2BhAykq%2Bsvk5ZAO0aqzxU8S6cTF6hqKnwHhnCqLUm0zrFjB5erJoEF8SQDRjV0%2Fp0cZz3%2F9IMEcOsUf3mC%2F0QN0OR5o9NFuVLIYKHfrcfBy7MBnHVoiPN0ZlZsOVkaIutNwHEcWf2Kn5UAV5jrPlU7ASSqBzVzj8r%2BmxzIoq5hJ2rEUZDMQfvz%2FFofBJ%2FH8X2v7uSHotLPOhmMAcutbgGNen6Q4QmQuP%2FmnBvH%2BbrR2rDWDuUtmUedTVN5Ac%2Bypi3YCoJy6FU0KqZniHvTRHmhIzify6GSOkijWBPhYwk6GkwAY6pgFpXU%2F795SHtE9sBYkG4DnP4pVLcrO9oJN5CG3f1Pv0E7fKP8JszMVMUMC9R3uHQEVdbLiiI6IFYLBuCuO6EbHyHWLEHxEmUMO17GmmGneASZBSvX2fQiM9IjH35b0eQlgAr5IXqLCZiCnmoue8b9VDIQXTgccPr22l%2FIzX6O80L3%2BTsL5iPr%2BjoCIy6fcnwY%2FYJSlEMqaUY%2Ft3C%2FaE7d3ZN5svQyBg&X-Amz-Signature=ec62fef06bb458251c491a89063f150f77b62edfc81626d158f9c7016b10c9c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YKEHZ4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBJbzx2kYl%2FeGlCOQxZFQcq02Ddv5uIyHrxuKXD7VXlHAiA%2BBqmzVy8ZFedr1rfPJC1i4h%2FXbZ8GDcL%2FSPwuyYtxnyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZNw68j1%2BByR1JtqKtwDkPkCsy6%2FVurQ7ecG3da3E4JiiRBhnX%2FqDkx6Z1CnrC2gPVrxWaDoCL0arqxRoUvasO8FTnqg9ERIhBl0p8ihRih7oHyIkFqxy17STi7tJWknPxns7NXGMa2H0I8m0cAZrSVCA9lHgCnCNob5uLpAiBbZ%2FcO9sX2cYoCbA3xz8h6FgJPXP%2B2Hu3L6Jd8RgKpmKyVIRba2uMmyw7mbG1tp15qOmHIiIgHKIYIXii%2BXlCcOOSTksG0EGIYENcfreemSYp%2FmlNa2skOfWXdZxEhTfulgS7P4kaKcObif%2FrORJ2LRIp3toLSudhIpyUDAVvbUTzxSo7TqedJkpkTO8ztgi%2BhAykq%2Bsvk5ZAO0aqzxU8S6cTF6hqKnwHhnCqLUm0zrFjB5erJoEF8SQDRjV0%2Fp0cZz3%2F9IMEcOsUf3mC%2F0QN0OR5o9NFuVLIYKHfrcfBy7MBnHVoiPN0ZlZsOVkaIutNwHEcWf2Kn5UAV5jrPlU7ASSqBzVzj8r%2BmxzIoq5hJ2rEUZDMQfvz%2FFofBJ%2FH8X2v7uSHotLPOhmMAcutbgGNen6Q4QmQuP%2FmnBvH%2BbrR2rDWDuUtmUedTVN5Ac%2Bypi3YCoJy6FU0KqZniHvTRHmhIzify6GSOkijWBPhYwk6GkwAY6pgFpXU%2F795SHtE9sBYkG4DnP4pVLcrO9oJN5CG3f1Pv0E7fKP8JszMVMUMC9R3uHQEVdbLiiI6IFYLBuCuO6EbHyHWLEHxEmUMO17GmmGneASZBSvX2fQiM9IjH35b0eQlgAr5IXqLCZiCnmoue8b9VDIQXTgccPr22l%2FIzX6O80L3%2BTsL5iPr%2BjoCIy6fcnwY%2FYJSlEMqaUY%2Ft3C%2FaE7d3ZN5svQyBg&X-Amz-Signature=6fa293c2f3145fd23b5567d7eeb6f9e2114722bc900a11af87df0bcc48c82aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YKEHZ4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBJbzx2kYl%2FeGlCOQxZFQcq02Ddv5uIyHrxuKXD7VXlHAiA%2BBqmzVy8ZFedr1rfPJC1i4h%2FXbZ8GDcL%2FSPwuyYtxnyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZNw68j1%2BByR1JtqKtwDkPkCsy6%2FVurQ7ecG3da3E4JiiRBhnX%2FqDkx6Z1CnrC2gPVrxWaDoCL0arqxRoUvasO8FTnqg9ERIhBl0p8ihRih7oHyIkFqxy17STi7tJWknPxns7NXGMa2H0I8m0cAZrSVCA9lHgCnCNob5uLpAiBbZ%2FcO9sX2cYoCbA3xz8h6FgJPXP%2B2Hu3L6Jd8RgKpmKyVIRba2uMmyw7mbG1tp15qOmHIiIgHKIYIXii%2BXlCcOOSTksG0EGIYENcfreemSYp%2FmlNa2skOfWXdZxEhTfulgS7P4kaKcObif%2FrORJ2LRIp3toLSudhIpyUDAVvbUTzxSo7TqedJkpkTO8ztgi%2BhAykq%2Bsvk5ZAO0aqzxU8S6cTF6hqKnwHhnCqLUm0zrFjB5erJoEF8SQDRjV0%2Fp0cZz3%2F9IMEcOsUf3mC%2F0QN0OR5o9NFuVLIYKHfrcfBy7MBnHVoiPN0ZlZsOVkaIutNwHEcWf2Kn5UAV5jrPlU7ASSqBzVzj8r%2BmxzIoq5hJ2rEUZDMQfvz%2FFofBJ%2FH8X2v7uSHotLPOhmMAcutbgGNen6Q4QmQuP%2FmnBvH%2BbrR2rDWDuUtmUedTVN5Ac%2Bypi3YCoJy6FU0KqZniHvTRHmhIzify6GSOkijWBPhYwk6GkwAY6pgFpXU%2F795SHtE9sBYkG4DnP4pVLcrO9oJN5CG3f1Pv0E7fKP8JszMVMUMC9R3uHQEVdbLiiI6IFYLBuCuO6EbHyHWLEHxEmUMO17GmmGneASZBSvX2fQiM9IjH35b0eQlgAr5IXqLCZiCnmoue8b9VDIQXTgccPr22l%2FIzX6O80L3%2BTsL5iPr%2BjoCIy6fcnwY%2FYJSlEMqaUY%2Ft3C%2FaE7d3ZN5svQyBg&X-Amz-Signature=6380594c098981464b8948210fa4564002b907b6b405440911a05947d8c3599e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YKEHZ4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBJbzx2kYl%2FeGlCOQxZFQcq02Ddv5uIyHrxuKXD7VXlHAiA%2BBqmzVy8ZFedr1rfPJC1i4h%2FXbZ8GDcL%2FSPwuyYtxnyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZNw68j1%2BByR1JtqKtwDkPkCsy6%2FVurQ7ecG3da3E4JiiRBhnX%2FqDkx6Z1CnrC2gPVrxWaDoCL0arqxRoUvasO8FTnqg9ERIhBl0p8ihRih7oHyIkFqxy17STi7tJWknPxns7NXGMa2H0I8m0cAZrSVCA9lHgCnCNob5uLpAiBbZ%2FcO9sX2cYoCbA3xz8h6FgJPXP%2B2Hu3L6Jd8RgKpmKyVIRba2uMmyw7mbG1tp15qOmHIiIgHKIYIXii%2BXlCcOOSTksG0EGIYENcfreemSYp%2FmlNa2skOfWXdZxEhTfulgS7P4kaKcObif%2FrORJ2LRIp3toLSudhIpyUDAVvbUTzxSo7TqedJkpkTO8ztgi%2BhAykq%2Bsvk5ZAO0aqzxU8S6cTF6hqKnwHhnCqLUm0zrFjB5erJoEF8SQDRjV0%2Fp0cZz3%2F9IMEcOsUf3mC%2F0QN0OR5o9NFuVLIYKHfrcfBy7MBnHVoiPN0ZlZsOVkaIutNwHEcWf2Kn5UAV5jrPlU7ASSqBzVzj8r%2BmxzIoq5hJ2rEUZDMQfvz%2FFofBJ%2FH8X2v7uSHotLPOhmMAcutbgGNen6Q4QmQuP%2FmnBvH%2BbrR2rDWDuUtmUedTVN5Ac%2Bypi3YCoJy6FU0KqZniHvTRHmhIzify6GSOkijWBPhYwk6GkwAY6pgFpXU%2F795SHtE9sBYkG4DnP4pVLcrO9oJN5CG3f1Pv0E7fKP8JszMVMUMC9R3uHQEVdbLiiI6IFYLBuCuO6EbHyHWLEHxEmUMO17GmmGneASZBSvX2fQiM9IjH35b0eQlgAr5IXqLCZiCnmoue8b9VDIQXTgccPr22l%2FIzX6O80L3%2BTsL5iPr%2BjoCIy6fcnwY%2FYJSlEMqaUY%2Ft3C%2FaE7d3ZN5svQyBg&X-Amz-Signature=fffb3b09379257f169c14323f9b9ee4113a3ec400fe2961b26d960024e631eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YKEHZ4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBJbzx2kYl%2FeGlCOQxZFQcq02Ddv5uIyHrxuKXD7VXlHAiA%2BBqmzVy8ZFedr1rfPJC1i4h%2FXbZ8GDcL%2FSPwuyYtxnyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZNw68j1%2BByR1JtqKtwDkPkCsy6%2FVurQ7ecG3da3E4JiiRBhnX%2FqDkx6Z1CnrC2gPVrxWaDoCL0arqxRoUvasO8FTnqg9ERIhBl0p8ihRih7oHyIkFqxy17STi7tJWknPxns7NXGMa2H0I8m0cAZrSVCA9lHgCnCNob5uLpAiBbZ%2FcO9sX2cYoCbA3xz8h6FgJPXP%2B2Hu3L6Jd8RgKpmKyVIRba2uMmyw7mbG1tp15qOmHIiIgHKIYIXii%2BXlCcOOSTksG0EGIYENcfreemSYp%2FmlNa2skOfWXdZxEhTfulgS7P4kaKcObif%2FrORJ2LRIp3toLSudhIpyUDAVvbUTzxSo7TqedJkpkTO8ztgi%2BhAykq%2Bsvk5ZAO0aqzxU8S6cTF6hqKnwHhnCqLUm0zrFjB5erJoEF8SQDRjV0%2Fp0cZz3%2F9IMEcOsUf3mC%2F0QN0OR5o9NFuVLIYKHfrcfBy7MBnHVoiPN0ZlZsOVkaIutNwHEcWf2Kn5UAV5jrPlU7ASSqBzVzj8r%2BmxzIoq5hJ2rEUZDMQfvz%2FFofBJ%2FH8X2v7uSHotLPOhmMAcutbgGNen6Q4QmQuP%2FmnBvH%2BbrR2rDWDuUtmUedTVN5Ac%2Bypi3YCoJy6FU0KqZniHvTRHmhIzify6GSOkijWBPhYwk6GkwAY6pgFpXU%2F795SHtE9sBYkG4DnP4pVLcrO9oJN5CG3f1Pv0E7fKP8JszMVMUMC9R3uHQEVdbLiiI6IFYLBuCuO6EbHyHWLEHxEmUMO17GmmGneASZBSvX2fQiM9IjH35b0eQlgAr5IXqLCZiCnmoue8b9VDIQXTgccPr22l%2FIzX6O80L3%2BTsL5iPr%2BjoCIy6fcnwY%2FYJSlEMqaUY%2Ft3C%2FaE7d3ZN5svQyBg&X-Amz-Signature=14c49cad5befc2dc53d8b06738d5cf024f03b6cf74c006c1722d9b7727b9882b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YKEHZ4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBJbzx2kYl%2FeGlCOQxZFQcq02Ddv5uIyHrxuKXD7VXlHAiA%2BBqmzVy8ZFedr1rfPJC1i4h%2FXbZ8GDcL%2FSPwuyYtxnyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZNw68j1%2BByR1JtqKtwDkPkCsy6%2FVurQ7ecG3da3E4JiiRBhnX%2FqDkx6Z1CnrC2gPVrxWaDoCL0arqxRoUvasO8FTnqg9ERIhBl0p8ihRih7oHyIkFqxy17STi7tJWknPxns7NXGMa2H0I8m0cAZrSVCA9lHgCnCNob5uLpAiBbZ%2FcO9sX2cYoCbA3xz8h6FgJPXP%2B2Hu3L6Jd8RgKpmKyVIRba2uMmyw7mbG1tp15qOmHIiIgHKIYIXii%2BXlCcOOSTksG0EGIYENcfreemSYp%2FmlNa2skOfWXdZxEhTfulgS7P4kaKcObif%2FrORJ2LRIp3toLSudhIpyUDAVvbUTzxSo7TqedJkpkTO8ztgi%2BhAykq%2Bsvk5ZAO0aqzxU8S6cTF6hqKnwHhnCqLUm0zrFjB5erJoEF8SQDRjV0%2Fp0cZz3%2F9IMEcOsUf3mC%2F0QN0OR5o9NFuVLIYKHfrcfBy7MBnHVoiPN0ZlZsOVkaIutNwHEcWf2Kn5UAV5jrPlU7ASSqBzVzj8r%2BmxzIoq5hJ2rEUZDMQfvz%2FFofBJ%2FH8X2v7uSHotLPOhmMAcutbgGNen6Q4QmQuP%2FmnBvH%2BbrR2rDWDuUtmUedTVN5Ac%2Bypi3YCoJy6FU0KqZniHvTRHmhIzify6GSOkijWBPhYwk6GkwAY6pgFpXU%2F795SHtE9sBYkG4DnP4pVLcrO9oJN5CG3f1Pv0E7fKP8JszMVMUMC9R3uHQEVdbLiiI6IFYLBuCuO6EbHyHWLEHxEmUMO17GmmGneASZBSvX2fQiM9IjH35b0eQlgAr5IXqLCZiCnmoue8b9VDIQXTgccPr22l%2FIzX6O80L3%2BTsL5iPr%2BjoCIy6fcnwY%2FYJSlEMqaUY%2Ft3C%2FaE7d3ZN5svQyBg&X-Amz-Signature=184593f89a2904cafbec169988273f83716f7932df63314b7a98e6389fdc29ac&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
