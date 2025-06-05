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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKGHFZW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDarZED9bx%2FJbhfgDXGeegBv6%2BrrLecWs%2BgbIfI217P1AiEA%2B8MiqnqCWdWEPMop97EXoW3lXeGm00fLtLPh28qBSbMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNBcXXkxRitGUOk14yrcAwUXtXKAmLFV7zPGpntFA97QZjNY9mYnETKROH5Y%2BhtlDurWtjSpKhMoQDWo8Ol7%2BazS1qkP7rvf32bFNSwwjeWRmOOZXfi%2F8gRprkE0bUQD4%2BZAHS7E7JCmcYZMn7BcAH90htigv4NXzw28v%2BnwlimTGz2xSlpd5f%2BQhPnDgWPb4kpEvs0zwkQNl8S9ILPk%2B1ejwhKo5qQ9jvPauHkWnag3Kkw3u9%2BlYpPEtrPjGpH8orVR7JUkwZl1jyKa0SzQgzoisqQGxKjv8SVjjfHRntDq8aNQ3nPh2Q2QyQWPINS9psEZDiaJ%2Fnzs5%2F3TqbI2DCPDv%2B8rzJRFix2TNwdG3PepPL3y9dXIdHsCqBWt0lQKsu5rpjpof1M1PdyKsD1ndfl%2B%2Fu9TZbS200CfRjn1bC3nkDXtEV1WLtnvI9iRXdLmMhBP8emfll1d8GixVMfaahRR7lJDWeIrXYBhjeivdy2umhZ7bIjAxKy7M8%2B3wEhwl0fwtOWaPLU8Ls0%2FMErkD%2FLsJ2D0dgjAvjTSBQcTC3xK0djXOQ07YMqsrSmd5EQqzHIMIoCL9sv7e0TaseEWYPkTKcYmPcL4Pa68SqvvLUBh%2F7xvhnfU5zPGzYVLjtj0ioSlqNCJtjSxXXvJMKaNhsIGOqUBAWBqFAoaGPJQmi9191DuxYy1rrh1AetSfEX83kV%2B11sSX9gl07%2F3Kl5PH6GXONbzthkjks7I%2FdRhLI5YHix3nS1yCazI%2BzEtgPJiZrEVI1JWXWCUD4NYAqDyEzbWbWVUN4ogE4v2Z6zB6MDgh9g4nmygqE2mBgDn5O25GfsVnZvk0m5%2FKJvlD65D%2BmnSm4%2F7BQEyfvVHAK09bSum8s9uXjNvsafH&X-Amz-Signature=c17e857f23e89c9600a23c485efda667be62911b97940302559007f3cd6b0fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKGHFZW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDarZED9bx%2FJbhfgDXGeegBv6%2BrrLecWs%2BgbIfI217P1AiEA%2B8MiqnqCWdWEPMop97EXoW3lXeGm00fLtLPh28qBSbMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNBcXXkxRitGUOk14yrcAwUXtXKAmLFV7zPGpntFA97QZjNY9mYnETKROH5Y%2BhtlDurWtjSpKhMoQDWo8Ol7%2BazS1qkP7rvf32bFNSwwjeWRmOOZXfi%2F8gRprkE0bUQD4%2BZAHS7E7JCmcYZMn7BcAH90htigv4NXzw28v%2BnwlimTGz2xSlpd5f%2BQhPnDgWPb4kpEvs0zwkQNl8S9ILPk%2B1ejwhKo5qQ9jvPauHkWnag3Kkw3u9%2BlYpPEtrPjGpH8orVR7JUkwZl1jyKa0SzQgzoisqQGxKjv8SVjjfHRntDq8aNQ3nPh2Q2QyQWPINS9psEZDiaJ%2Fnzs5%2F3TqbI2DCPDv%2B8rzJRFix2TNwdG3PepPL3y9dXIdHsCqBWt0lQKsu5rpjpof1M1PdyKsD1ndfl%2B%2Fu9TZbS200CfRjn1bC3nkDXtEV1WLtnvI9iRXdLmMhBP8emfll1d8GixVMfaahRR7lJDWeIrXYBhjeivdy2umhZ7bIjAxKy7M8%2B3wEhwl0fwtOWaPLU8Ls0%2FMErkD%2FLsJ2D0dgjAvjTSBQcTC3xK0djXOQ07YMqsrSmd5EQqzHIMIoCL9sv7e0TaseEWYPkTKcYmPcL4Pa68SqvvLUBh%2F7xvhnfU5zPGzYVLjtj0ioSlqNCJtjSxXXvJMKaNhsIGOqUBAWBqFAoaGPJQmi9191DuxYy1rrh1AetSfEX83kV%2B11sSX9gl07%2F3Kl5PH6GXONbzthkjks7I%2FdRhLI5YHix3nS1yCazI%2BzEtgPJiZrEVI1JWXWCUD4NYAqDyEzbWbWVUN4ogE4v2Z6zB6MDgh9g4nmygqE2mBgDn5O25GfsVnZvk0m5%2FKJvlD65D%2BmnSm4%2F7BQEyfvVHAK09bSum8s9uXjNvsafH&X-Amz-Signature=d2c3b38e18f3194688f2114d64874786de88803861ce0ebc57998793d307fbf7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKGHFZW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDarZED9bx%2FJbhfgDXGeegBv6%2BrrLecWs%2BgbIfI217P1AiEA%2B8MiqnqCWdWEPMop97EXoW3lXeGm00fLtLPh28qBSbMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNBcXXkxRitGUOk14yrcAwUXtXKAmLFV7zPGpntFA97QZjNY9mYnETKROH5Y%2BhtlDurWtjSpKhMoQDWo8Ol7%2BazS1qkP7rvf32bFNSwwjeWRmOOZXfi%2F8gRprkE0bUQD4%2BZAHS7E7JCmcYZMn7BcAH90htigv4NXzw28v%2BnwlimTGz2xSlpd5f%2BQhPnDgWPb4kpEvs0zwkQNl8S9ILPk%2B1ejwhKo5qQ9jvPauHkWnag3Kkw3u9%2BlYpPEtrPjGpH8orVR7JUkwZl1jyKa0SzQgzoisqQGxKjv8SVjjfHRntDq8aNQ3nPh2Q2QyQWPINS9psEZDiaJ%2Fnzs5%2F3TqbI2DCPDv%2B8rzJRFix2TNwdG3PepPL3y9dXIdHsCqBWt0lQKsu5rpjpof1M1PdyKsD1ndfl%2B%2Fu9TZbS200CfRjn1bC3nkDXtEV1WLtnvI9iRXdLmMhBP8emfll1d8GixVMfaahRR7lJDWeIrXYBhjeivdy2umhZ7bIjAxKy7M8%2B3wEhwl0fwtOWaPLU8Ls0%2FMErkD%2FLsJ2D0dgjAvjTSBQcTC3xK0djXOQ07YMqsrSmd5EQqzHIMIoCL9sv7e0TaseEWYPkTKcYmPcL4Pa68SqvvLUBh%2F7xvhnfU5zPGzYVLjtj0ioSlqNCJtjSxXXvJMKaNhsIGOqUBAWBqFAoaGPJQmi9191DuxYy1rrh1AetSfEX83kV%2B11sSX9gl07%2F3Kl5PH6GXONbzthkjks7I%2FdRhLI5YHix3nS1yCazI%2BzEtgPJiZrEVI1JWXWCUD4NYAqDyEzbWbWVUN4ogE4v2Z6zB6MDgh9g4nmygqE2mBgDn5O25GfsVnZvk0m5%2FKJvlD65D%2BmnSm4%2F7BQEyfvVHAK09bSum8s9uXjNvsafH&X-Amz-Signature=1d71a597d5ccd88604e8edd23e828adfc061460cf1f1a944e58b7f93d4f717b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKGHFZW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDarZED9bx%2FJbhfgDXGeegBv6%2BrrLecWs%2BgbIfI217P1AiEA%2B8MiqnqCWdWEPMop97EXoW3lXeGm00fLtLPh28qBSbMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNBcXXkxRitGUOk14yrcAwUXtXKAmLFV7zPGpntFA97QZjNY9mYnETKROH5Y%2BhtlDurWtjSpKhMoQDWo8Ol7%2BazS1qkP7rvf32bFNSwwjeWRmOOZXfi%2F8gRprkE0bUQD4%2BZAHS7E7JCmcYZMn7BcAH90htigv4NXzw28v%2BnwlimTGz2xSlpd5f%2BQhPnDgWPb4kpEvs0zwkQNl8S9ILPk%2B1ejwhKo5qQ9jvPauHkWnag3Kkw3u9%2BlYpPEtrPjGpH8orVR7JUkwZl1jyKa0SzQgzoisqQGxKjv8SVjjfHRntDq8aNQ3nPh2Q2QyQWPINS9psEZDiaJ%2Fnzs5%2F3TqbI2DCPDv%2B8rzJRFix2TNwdG3PepPL3y9dXIdHsCqBWt0lQKsu5rpjpof1M1PdyKsD1ndfl%2B%2Fu9TZbS200CfRjn1bC3nkDXtEV1WLtnvI9iRXdLmMhBP8emfll1d8GixVMfaahRR7lJDWeIrXYBhjeivdy2umhZ7bIjAxKy7M8%2B3wEhwl0fwtOWaPLU8Ls0%2FMErkD%2FLsJ2D0dgjAvjTSBQcTC3xK0djXOQ07YMqsrSmd5EQqzHIMIoCL9sv7e0TaseEWYPkTKcYmPcL4Pa68SqvvLUBh%2F7xvhnfU5zPGzYVLjtj0ioSlqNCJtjSxXXvJMKaNhsIGOqUBAWBqFAoaGPJQmi9191DuxYy1rrh1AetSfEX83kV%2B11sSX9gl07%2F3Kl5PH6GXONbzthkjks7I%2FdRhLI5YHix3nS1yCazI%2BzEtgPJiZrEVI1JWXWCUD4NYAqDyEzbWbWVUN4ogE4v2Z6zB6MDgh9g4nmygqE2mBgDn5O25GfsVnZvk0m5%2FKJvlD65D%2BmnSm4%2F7BQEyfvVHAK09bSum8s9uXjNvsafH&X-Amz-Signature=c6ecbdd7ff798eb2c13c289223f570ea347a67c75ee8dc42ed13a0f6f26268b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKGHFZW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDarZED9bx%2FJbhfgDXGeegBv6%2BrrLecWs%2BgbIfI217P1AiEA%2B8MiqnqCWdWEPMop97EXoW3lXeGm00fLtLPh28qBSbMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNBcXXkxRitGUOk14yrcAwUXtXKAmLFV7zPGpntFA97QZjNY9mYnETKROH5Y%2BhtlDurWtjSpKhMoQDWo8Ol7%2BazS1qkP7rvf32bFNSwwjeWRmOOZXfi%2F8gRprkE0bUQD4%2BZAHS7E7JCmcYZMn7BcAH90htigv4NXzw28v%2BnwlimTGz2xSlpd5f%2BQhPnDgWPb4kpEvs0zwkQNl8S9ILPk%2B1ejwhKo5qQ9jvPauHkWnag3Kkw3u9%2BlYpPEtrPjGpH8orVR7JUkwZl1jyKa0SzQgzoisqQGxKjv8SVjjfHRntDq8aNQ3nPh2Q2QyQWPINS9psEZDiaJ%2Fnzs5%2F3TqbI2DCPDv%2B8rzJRFix2TNwdG3PepPL3y9dXIdHsCqBWt0lQKsu5rpjpof1M1PdyKsD1ndfl%2B%2Fu9TZbS200CfRjn1bC3nkDXtEV1WLtnvI9iRXdLmMhBP8emfll1d8GixVMfaahRR7lJDWeIrXYBhjeivdy2umhZ7bIjAxKy7M8%2B3wEhwl0fwtOWaPLU8Ls0%2FMErkD%2FLsJ2D0dgjAvjTSBQcTC3xK0djXOQ07YMqsrSmd5EQqzHIMIoCL9sv7e0TaseEWYPkTKcYmPcL4Pa68SqvvLUBh%2F7xvhnfU5zPGzYVLjtj0ioSlqNCJtjSxXXvJMKaNhsIGOqUBAWBqFAoaGPJQmi9191DuxYy1rrh1AetSfEX83kV%2B11sSX9gl07%2F3Kl5PH6GXONbzthkjks7I%2FdRhLI5YHix3nS1yCazI%2BzEtgPJiZrEVI1JWXWCUD4NYAqDyEzbWbWVUN4ogE4v2Z6zB6MDgh9g4nmygqE2mBgDn5O25GfsVnZvk0m5%2FKJvlD65D%2BmnSm4%2F7BQEyfvVHAK09bSum8s9uXjNvsafH&X-Amz-Signature=bbf577a43b2a394f4c8ac7f78dc091e789d5186fe2af4eb1b8a85cffeeba7634&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKGHFZW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDarZED9bx%2FJbhfgDXGeegBv6%2BrrLecWs%2BgbIfI217P1AiEA%2B8MiqnqCWdWEPMop97EXoW3lXeGm00fLtLPh28qBSbMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNBcXXkxRitGUOk14yrcAwUXtXKAmLFV7zPGpntFA97QZjNY9mYnETKROH5Y%2BhtlDurWtjSpKhMoQDWo8Ol7%2BazS1qkP7rvf32bFNSwwjeWRmOOZXfi%2F8gRprkE0bUQD4%2BZAHS7E7JCmcYZMn7BcAH90htigv4NXzw28v%2BnwlimTGz2xSlpd5f%2BQhPnDgWPb4kpEvs0zwkQNl8S9ILPk%2B1ejwhKo5qQ9jvPauHkWnag3Kkw3u9%2BlYpPEtrPjGpH8orVR7JUkwZl1jyKa0SzQgzoisqQGxKjv8SVjjfHRntDq8aNQ3nPh2Q2QyQWPINS9psEZDiaJ%2Fnzs5%2F3TqbI2DCPDv%2B8rzJRFix2TNwdG3PepPL3y9dXIdHsCqBWt0lQKsu5rpjpof1M1PdyKsD1ndfl%2B%2Fu9TZbS200CfRjn1bC3nkDXtEV1WLtnvI9iRXdLmMhBP8emfll1d8GixVMfaahRR7lJDWeIrXYBhjeivdy2umhZ7bIjAxKy7M8%2B3wEhwl0fwtOWaPLU8Ls0%2FMErkD%2FLsJ2D0dgjAvjTSBQcTC3xK0djXOQ07YMqsrSmd5EQqzHIMIoCL9sv7e0TaseEWYPkTKcYmPcL4Pa68SqvvLUBh%2F7xvhnfU5zPGzYVLjtj0ioSlqNCJtjSxXXvJMKaNhsIGOqUBAWBqFAoaGPJQmi9191DuxYy1rrh1AetSfEX83kV%2B11sSX9gl07%2F3Kl5PH6GXONbzthkjks7I%2FdRhLI5YHix3nS1yCazI%2BzEtgPJiZrEVI1JWXWCUD4NYAqDyEzbWbWVUN4ogE4v2Z6zB6MDgh9g4nmygqE2mBgDn5O25GfsVnZvk0m5%2FKJvlD65D%2BmnSm4%2F7BQEyfvVHAK09bSum8s9uXjNvsafH&X-Amz-Signature=c2cb3aca7111a980ceb79fea2878cff2da8ee36a17b1a0312617104f506268a8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKGHFZW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDarZED9bx%2FJbhfgDXGeegBv6%2BrrLecWs%2BgbIfI217P1AiEA%2B8MiqnqCWdWEPMop97EXoW3lXeGm00fLtLPh28qBSbMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNBcXXkxRitGUOk14yrcAwUXtXKAmLFV7zPGpntFA97QZjNY9mYnETKROH5Y%2BhtlDurWtjSpKhMoQDWo8Ol7%2BazS1qkP7rvf32bFNSwwjeWRmOOZXfi%2F8gRprkE0bUQD4%2BZAHS7E7JCmcYZMn7BcAH90htigv4NXzw28v%2BnwlimTGz2xSlpd5f%2BQhPnDgWPb4kpEvs0zwkQNl8S9ILPk%2B1ejwhKo5qQ9jvPauHkWnag3Kkw3u9%2BlYpPEtrPjGpH8orVR7JUkwZl1jyKa0SzQgzoisqQGxKjv8SVjjfHRntDq8aNQ3nPh2Q2QyQWPINS9psEZDiaJ%2Fnzs5%2F3TqbI2DCPDv%2B8rzJRFix2TNwdG3PepPL3y9dXIdHsCqBWt0lQKsu5rpjpof1M1PdyKsD1ndfl%2B%2Fu9TZbS200CfRjn1bC3nkDXtEV1WLtnvI9iRXdLmMhBP8emfll1d8GixVMfaahRR7lJDWeIrXYBhjeivdy2umhZ7bIjAxKy7M8%2B3wEhwl0fwtOWaPLU8Ls0%2FMErkD%2FLsJ2D0dgjAvjTSBQcTC3xK0djXOQ07YMqsrSmd5EQqzHIMIoCL9sv7e0TaseEWYPkTKcYmPcL4Pa68SqvvLUBh%2F7xvhnfU5zPGzYVLjtj0ioSlqNCJtjSxXXvJMKaNhsIGOqUBAWBqFAoaGPJQmi9191DuxYy1rrh1AetSfEX83kV%2B11sSX9gl07%2F3Kl5PH6GXONbzthkjks7I%2FdRhLI5YHix3nS1yCazI%2BzEtgPJiZrEVI1JWXWCUD4NYAqDyEzbWbWVUN4ogE4v2Z6zB6MDgh9g4nmygqE2mBgDn5O25GfsVnZvk0m5%2FKJvlD65D%2BmnSm4%2F7BQEyfvVHAK09bSum8s9uXjNvsafH&X-Amz-Signature=88d5d5f555794d1ba75671303e38f01069975cf2b5117cbd303a8fc09ec01a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
