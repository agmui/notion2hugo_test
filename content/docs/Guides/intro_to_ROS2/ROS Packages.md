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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFDVKIH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCcKkhpOPRkd8ZURviYd6hdj%2BV3CdDemYypo1VUEaha%2BwIhAKY593IUttJ9LYY504wKfz6U%2FfsvSDtZPnfI%2BAM8L5HkKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwJPUDN4X5H6uEIFAq3ANr8EDDaMA%2Bqm4Ybxdk3nj3VRgoccanL05Q0xfbo6c0DPBk9FmnVfg%2BQiC6%2FIQwU0avwY5vufYtYzQv1RjV93LnOtg7MDXgSSQ8kI8LeDCJLkbSOSLmFR4qmchVlO92wkNPtJJphMNtRJ6vvh%2B6NhHw4CyGh51wMvZQU9TN8HB3Vgbx1dfM%2BBnrQdXpPTqVbJT0JaHEVHOoWbBg7sWWcZYqKrgusfN1h74YTGt%2F5mAJxkaj1%2FNqxr2BwpnU5db3Sw3u94KLuQ35rODY7L%2BhOmcuwuc5VbcsCVaIiusnh1GkxQeoVuIffEwKih4XdreND%2Fpqa%2FtdehAOG0LRz%2F7Oi4UHdmEKgUCm76sJgArsov9fE%2BEtSSRWMZsA4TfEhx3J9KcgZ9pU14tHKEr8ll5SoJyl2Hk4kItrRx0tFRo6icVS2qY3aaUVs0yBuSdMqsON80VdmrNZXKdHl7WZS6WcOG2Tad29bEh4QpQj%2FfoimWTpuq1yKZv0kPpsZXG3h2u%2FjHfyJTlnV67pKRVSyvC9LEyD2dW1BAxImnRkcqskwJHzmP1bBr%2FYHw4rMZMdUoa225fPpxklE1x8YCwERAJ4djcoxh6biXDlo5A9lsynBiQO0ppFbQhqcy6K1PgBlDDkqN2%2FBjqkAbacPQpfEARcWG9etc%2BInWoQO7vZ5BO1gFx%2BVcKLvj47zqwO6VZQTk7ivUWsBdGQ5RF5sFsLk1GVjnDce6vELRriY2Mc6elxhyy2d5CAERW2BKjd%2FbyXHJA9P5uIaiP114AjnqGXNzD%2FcJB7Xic2HtWop7qDhM2vVdC8wqikISIEz5pG5akgSrZ4qB%2BaDS1lTTWyxJLHTcTQ7Xi%2BjfZSy6yZylrd&X-Amz-Signature=3b80225800d20c5bf9764cadbc9a693cdb44a050858162d04064ca0c62dc6196&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFDVKIH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCcKkhpOPRkd8ZURviYd6hdj%2BV3CdDemYypo1VUEaha%2BwIhAKY593IUttJ9LYY504wKfz6U%2FfsvSDtZPnfI%2BAM8L5HkKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwJPUDN4X5H6uEIFAq3ANr8EDDaMA%2Bqm4Ybxdk3nj3VRgoccanL05Q0xfbo6c0DPBk9FmnVfg%2BQiC6%2FIQwU0avwY5vufYtYzQv1RjV93LnOtg7MDXgSSQ8kI8LeDCJLkbSOSLmFR4qmchVlO92wkNPtJJphMNtRJ6vvh%2B6NhHw4CyGh51wMvZQU9TN8HB3Vgbx1dfM%2BBnrQdXpPTqVbJT0JaHEVHOoWbBg7sWWcZYqKrgusfN1h74YTGt%2F5mAJxkaj1%2FNqxr2BwpnU5db3Sw3u94KLuQ35rODY7L%2BhOmcuwuc5VbcsCVaIiusnh1GkxQeoVuIffEwKih4XdreND%2Fpqa%2FtdehAOG0LRz%2F7Oi4UHdmEKgUCm76sJgArsov9fE%2BEtSSRWMZsA4TfEhx3J9KcgZ9pU14tHKEr8ll5SoJyl2Hk4kItrRx0tFRo6icVS2qY3aaUVs0yBuSdMqsON80VdmrNZXKdHl7WZS6WcOG2Tad29bEh4QpQj%2FfoimWTpuq1yKZv0kPpsZXG3h2u%2FjHfyJTlnV67pKRVSyvC9LEyD2dW1BAxImnRkcqskwJHzmP1bBr%2FYHw4rMZMdUoa225fPpxklE1x8YCwERAJ4djcoxh6biXDlo5A9lsynBiQO0ppFbQhqcy6K1PgBlDDkqN2%2FBjqkAbacPQpfEARcWG9etc%2BInWoQO7vZ5BO1gFx%2BVcKLvj47zqwO6VZQTk7ivUWsBdGQ5RF5sFsLk1GVjnDce6vELRriY2Mc6elxhyy2d5CAERW2BKjd%2FbyXHJA9P5uIaiP114AjnqGXNzD%2FcJB7Xic2HtWop7qDhM2vVdC8wqikISIEz5pG5akgSrZ4qB%2BaDS1lTTWyxJLHTcTQ7Xi%2BjfZSy6yZylrd&X-Amz-Signature=2058f9e16f05b1679958f7daf0e0fb44b145f9e1d923cec3c5409aab77c0e8d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFDVKIH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCcKkhpOPRkd8ZURviYd6hdj%2BV3CdDemYypo1VUEaha%2BwIhAKY593IUttJ9LYY504wKfz6U%2FfsvSDtZPnfI%2BAM8L5HkKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwJPUDN4X5H6uEIFAq3ANr8EDDaMA%2Bqm4Ybxdk3nj3VRgoccanL05Q0xfbo6c0DPBk9FmnVfg%2BQiC6%2FIQwU0avwY5vufYtYzQv1RjV93LnOtg7MDXgSSQ8kI8LeDCJLkbSOSLmFR4qmchVlO92wkNPtJJphMNtRJ6vvh%2B6NhHw4CyGh51wMvZQU9TN8HB3Vgbx1dfM%2BBnrQdXpPTqVbJT0JaHEVHOoWbBg7sWWcZYqKrgusfN1h74YTGt%2F5mAJxkaj1%2FNqxr2BwpnU5db3Sw3u94KLuQ35rODY7L%2BhOmcuwuc5VbcsCVaIiusnh1GkxQeoVuIffEwKih4XdreND%2Fpqa%2FtdehAOG0LRz%2F7Oi4UHdmEKgUCm76sJgArsov9fE%2BEtSSRWMZsA4TfEhx3J9KcgZ9pU14tHKEr8ll5SoJyl2Hk4kItrRx0tFRo6icVS2qY3aaUVs0yBuSdMqsON80VdmrNZXKdHl7WZS6WcOG2Tad29bEh4QpQj%2FfoimWTpuq1yKZv0kPpsZXG3h2u%2FjHfyJTlnV67pKRVSyvC9LEyD2dW1BAxImnRkcqskwJHzmP1bBr%2FYHw4rMZMdUoa225fPpxklE1x8YCwERAJ4djcoxh6biXDlo5A9lsynBiQO0ppFbQhqcy6K1PgBlDDkqN2%2FBjqkAbacPQpfEARcWG9etc%2BInWoQO7vZ5BO1gFx%2BVcKLvj47zqwO6VZQTk7ivUWsBdGQ5RF5sFsLk1GVjnDce6vELRriY2Mc6elxhyy2d5CAERW2BKjd%2FbyXHJA9P5uIaiP114AjnqGXNzD%2FcJB7Xic2HtWop7qDhM2vVdC8wqikISIEz5pG5akgSrZ4qB%2BaDS1lTTWyxJLHTcTQ7Xi%2BjfZSy6yZylrd&X-Amz-Signature=00e694d7fee51696c013ab15dae8eee3cec09c1b523aa4f25c809baeab0e64b9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFDVKIH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCcKkhpOPRkd8ZURviYd6hdj%2BV3CdDemYypo1VUEaha%2BwIhAKY593IUttJ9LYY504wKfz6U%2FfsvSDtZPnfI%2BAM8L5HkKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwJPUDN4X5H6uEIFAq3ANr8EDDaMA%2Bqm4Ybxdk3nj3VRgoccanL05Q0xfbo6c0DPBk9FmnVfg%2BQiC6%2FIQwU0avwY5vufYtYzQv1RjV93LnOtg7MDXgSSQ8kI8LeDCJLkbSOSLmFR4qmchVlO92wkNPtJJphMNtRJ6vvh%2B6NhHw4CyGh51wMvZQU9TN8HB3Vgbx1dfM%2BBnrQdXpPTqVbJT0JaHEVHOoWbBg7sWWcZYqKrgusfN1h74YTGt%2F5mAJxkaj1%2FNqxr2BwpnU5db3Sw3u94KLuQ35rODY7L%2BhOmcuwuc5VbcsCVaIiusnh1GkxQeoVuIffEwKih4XdreND%2Fpqa%2FtdehAOG0LRz%2F7Oi4UHdmEKgUCm76sJgArsov9fE%2BEtSSRWMZsA4TfEhx3J9KcgZ9pU14tHKEr8ll5SoJyl2Hk4kItrRx0tFRo6icVS2qY3aaUVs0yBuSdMqsON80VdmrNZXKdHl7WZS6WcOG2Tad29bEh4QpQj%2FfoimWTpuq1yKZv0kPpsZXG3h2u%2FjHfyJTlnV67pKRVSyvC9LEyD2dW1BAxImnRkcqskwJHzmP1bBr%2FYHw4rMZMdUoa225fPpxklE1x8YCwERAJ4djcoxh6biXDlo5A9lsynBiQO0ppFbQhqcy6K1PgBlDDkqN2%2FBjqkAbacPQpfEARcWG9etc%2BInWoQO7vZ5BO1gFx%2BVcKLvj47zqwO6VZQTk7ivUWsBdGQ5RF5sFsLk1GVjnDce6vELRriY2Mc6elxhyy2d5CAERW2BKjd%2FbyXHJA9P5uIaiP114AjnqGXNzD%2FcJB7Xic2HtWop7qDhM2vVdC8wqikISIEz5pG5akgSrZ4qB%2BaDS1lTTWyxJLHTcTQ7Xi%2BjfZSy6yZylrd&X-Amz-Signature=8c728d68672c12b23c1be24b0d24e1a7481e2b8681fa3a359ba3a2245a9100ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFDVKIH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCcKkhpOPRkd8ZURviYd6hdj%2BV3CdDemYypo1VUEaha%2BwIhAKY593IUttJ9LYY504wKfz6U%2FfsvSDtZPnfI%2BAM8L5HkKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwJPUDN4X5H6uEIFAq3ANr8EDDaMA%2Bqm4Ybxdk3nj3VRgoccanL05Q0xfbo6c0DPBk9FmnVfg%2BQiC6%2FIQwU0avwY5vufYtYzQv1RjV93LnOtg7MDXgSSQ8kI8LeDCJLkbSOSLmFR4qmchVlO92wkNPtJJphMNtRJ6vvh%2B6NhHw4CyGh51wMvZQU9TN8HB3Vgbx1dfM%2BBnrQdXpPTqVbJT0JaHEVHOoWbBg7sWWcZYqKrgusfN1h74YTGt%2F5mAJxkaj1%2FNqxr2BwpnU5db3Sw3u94KLuQ35rODY7L%2BhOmcuwuc5VbcsCVaIiusnh1GkxQeoVuIffEwKih4XdreND%2Fpqa%2FtdehAOG0LRz%2F7Oi4UHdmEKgUCm76sJgArsov9fE%2BEtSSRWMZsA4TfEhx3J9KcgZ9pU14tHKEr8ll5SoJyl2Hk4kItrRx0tFRo6icVS2qY3aaUVs0yBuSdMqsON80VdmrNZXKdHl7WZS6WcOG2Tad29bEh4QpQj%2FfoimWTpuq1yKZv0kPpsZXG3h2u%2FjHfyJTlnV67pKRVSyvC9LEyD2dW1BAxImnRkcqskwJHzmP1bBr%2FYHw4rMZMdUoa225fPpxklE1x8YCwERAJ4djcoxh6biXDlo5A9lsynBiQO0ppFbQhqcy6K1PgBlDDkqN2%2FBjqkAbacPQpfEARcWG9etc%2BInWoQO7vZ5BO1gFx%2BVcKLvj47zqwO6VZQTk7ivUWsBdGQ5RF5sFsLk1GVjnDce6vELRriY2Mc6elxhyy2d5CAERW2BKjd%2FbyXHJA9P5uIaiP114AjnqGXNzD%2FcJB7Xic2HtWop7qDhM2vVdC8wqikISIEz5pG5akgSrZ4qB%2BaDS1lTTWyxJLHTcTQ7Xi%2BjfZSy6yZylrd&X-Amz-Signature=a4d9a5ab1037e14d423971175891ee745e9cb2122657aa81ae8b7e38860b6f19&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFDVKIH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCcKkhpOPRkd8ZURviYd6hdj%2BV3CdDemYypo1VUEaha%2BwIhAKY593IUttJ9LYY504wKfz6U%2FfsvSDtZPnfI%2BAM8L5HkKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwJPUDN4X5H6uEIFAq3ANr8EDDaMA%2Bqm4Ybxdk3nj3VRgoccanL05Q0xfbo6c0DPBk9FmnVfg%2BQiC6%2FIQwU0avwY5vufYtYzQv1RjV93LnOtg7MDXgSSQ8kI8LeDCJLkbSOSLmFR4qmchVlO92wkNPtJJphMNtRJ6vvh%2B6NhHw4CyGh51wMvZQU9TN8HB3Vgbx1dfM%2BBnrQdXpPTqVbJT0JaHEVHOoWbBg7sWWcZYqKrgusfN1h74YTGt%2F5mAJxkaj1%2FNqxr2BwpnU5db3Sw3u94KLuQ35rODY7L%2BhOmcuwuc5VbcsCVaIiusnh1GkxQeoVuIffEwKih4XdreND%2Fpqa%2FtdehAOG0LRz%2F7Oi4UHdmEKgUCm76sJgArsov9fE%2BEtSSRWMZsA4TfEhx3J9KcgZ9pU14tHKEr8ll5SoJyl2Hk4kItrRx0tFRo6icVS2qY3aaUVs0yBuSdMqsON80VdmrNZXKdHl7WZS6WcOG2Tad29bEh4QpQj%2FfoimWTpuq1yKZv0kPpsZXG3h2u%2FjHfyJTlnV67pKRVSyvC9LEyD2dW1BAxImnRkcqskwJHzmP1bBr%2FYHw4rMZMdUoa225fPpxklE1x8YCwERAJ4djcoxh6biXDlo5A9lsynBiQO0ppFbQhqcy6K1PgBlDDkqN2%2FBjqkAbacPQpfEARcWG9etc%2BInWoQO7vZ5BO1gFx%2BVcKLvj47zqwO6VZQTk7ivUWsBdGQ5RF5sFsLk1GVjnDce6vELRriY2Mc6elxhyy2d5CAERW2BKjd%2FbyXHJA9P5uIaiP114AjnqGXNzD%2FcJB7Xic2HtWop7qDhM2vVdC8wqikISIEz5pG5akgSrZ4qB%2BaDS1lTTWyxJLHTcTQ7Xi%2BjfZSy6yZylrd&X-Amz-Signature=e490de6b563001075b50c7bf19056de2361f61ba96e17087a21d8bc357ca08f1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFDVKIH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCcKkhpOPRkd8ZURviYd6hdj%2BV3CdDemYypo1VUEaha%2BwIhAKY593IUttJ9LYY504wKfz6U%2FfsvSDtZPnfI%2BAM8L5HkKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwJPUDN4X5H6uEIFAq3ANr8EDDaMA%2Bqm4Ybxdk3nj3VRgoccanL05Q0xfbo6c0DPBk9FmnVfg%2BQiC6%2FIQwU0avwY5vufYtYzQv1RjV93LnOtg7MDXgSSQ8kI8LeDCJLkbSOSLmFR4qmchVlO92wkNPtJJphMNtRJ6vvh%2B6NhHw4CyGh51wMvZQU9TN8HB3Vgbx1dfM%2BBnrQdXpPTqVbJT0JaHEVHOoWbBg7sWWcZYqKrgusfN1h74YTGt%2F5mAJxkaj1%2FNqxr2BwpnU5db3Sw3u94KLuQ35rODY7L%2BhOmcuwuc5VbcsCVaIiusnh1GkxQeoVuIffEwKih4XdreND%2Fpqa%2FtdehAOG0LRz%2F7Oi4UHdmEKgUCm76sJgArsov9fE%2BEtSSRWMZsA4TfEhx3J9KcgZ9pU14tHKEr8ll5SoJyl2Hk4kItrRx0tFRo6icVS2qY3aaUVs0yBuSdMqsON80VdmrNZXKdHl7WZS6WcOG2Tad29bEh4QpQj%2FfoimWTpuq1yKZv0kPpsZXG3h2u%2FjHfyJTlnV67pKRVSyvC9LEyD2dW1BAxImnRkcqskwJHzmP1bBr%2FYHw4rMZMdUoa225fPpxklE1x8YCwERAJ4djcoxh6biXDlo5A9lsynBiQO0ppFbQhqcy6K1PgBlDDkqN2%2FBjqkAbacPQpfEARcWG9etc%2BInWoQO7vZ5BO1gFx%2BVcKLvj47zqwO6VZQTk7ivUWsBdGQ5RF5sFsLk1GVjnDce6vELRriY2Mc6elxhyy2d5CAERW2BKjd%2FbyXHJA9P5uIaiP114AjnqGXNzD%2FcJB7Xic2HtWop7qDhM2vVdC8wqikISIEz5pG5akgSrZ4qB%2BaDS1lTTWyxJLHTcTQ7Xi%2BjfZSy6yZylrd&X-Amz-Signature=28bdfe0c0767674a501a3564a5fd5b917d263d919a5de8e123c99d0c1a987812&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
