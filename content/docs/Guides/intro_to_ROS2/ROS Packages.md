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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQXKCMS%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDkx%2BbvHZH3TL7WVYLwjlnngAu5WpT5hnxM8viPeBNqoAiEA4qBf5X7u8diPAqMivdH8EOBxilT7%2BAPo7hyX7VhpY6gq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDIAW%2FWIJHYOLGziFByrcA1VA1HUs6j5usGMHHK2AFcsFgwrNfm2jgdRg2X4g3HMNC8nxnFtpOQjvimJYcjQxAzl%2BGnVvAcKQPcXVnQj5crTxUIMlVFgRMNJKSx0L663fxjVF3n7zyPrNUeZePUCwQDyRW7YT1K%2FILDa8LC2hJdQjWIsmWYg%2FrakdM5xZ%2FaVNtZ2z%2FYMHqVIdS1gY3gcHmeCsPJkcl1o4zIS9Vp119gTZHiTejSRR9LzPeOrsdLZ%2F%2FS0vWDwaDeLqhi%2F%2Bmabpz3ddkHcYAiVJG5Luile9cK2SlDQjDY4qlLgjF%2Fe3OAALaxqTkLT3O4bRw7wck5VjFmqwMuePIlAOU4RJxEhUdeXitVtPaMT0sZZwqfnW7Bem6t%2FmNmLOjQAc72pZEG9rNz%2B%2BOpVkSkJ%2FLmPI9EbMh9QesJbX%2BkrNhOnwpPI9waqIIzkCaRt7BmOYbYS2nKWBQpAwfwR4e1DLARd7wjrprGqMDb%2BswNJdkj6vqq4n2RSn5R0%2BzxEGGaa0o391FvNQBky1HfxDCf7SCED%2FGF%2F1UZ7GMvWh6E9hfi8wJaxHSCEARao6tGGIPtf2mk3fWq0w5YOaahvK92B4fA8YCaFX%2FSvVTCGgLDQV9ZBgzhaJwFRCkVFpT3vneKiUGhJfMJvV5r4GOqUBWwv1o2Z2vKnLKeIB2ERkU%2Faj8YD3zg76AyD9XBRPsUgImjzLW2h1BvUvdceT%2F9mMlWAM4ZFqCHXt3b3tRoqqqhuVZ0XyN5%2FnsUmSqtb4Rrox6ChTn%2FFi3WfgRsoveyQtKyU28ebhNZjPnwQ11ad%2FiqFB2vAMdX3%2BZopwkrTofVjy3nmjs3o9E2kprW6YOPM%2BuyWNSArnb2CRTh7H0p1M7PVyvetE&X-Amz-Signature=090042fd7000f7a1e5fcbed3948dfbdb5c3cffcd1e1c5eee842b3da3a0326f55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQXKCMS%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDkx%2BbvHZH3TL7WVYLwjlnngAu5WpT5hnxM8viPeBNqoAiEA4qBf5X7u8diPAqMivdH8EOBxilT7%2BAPo7hyX7VhpY6gq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDIAW%2FWIJHYOLGziFByrcA1VA1HUs6j5usGMHHK2AFcsFgwrNfm2jgdRg2X4g3HMNC8nxnFtpOQjvimJYcjQxAzl%2BGnVvAcKQPcXVnQj5crTxUIMlVFgRMNJKSx0L663fxjVF3n7zyPrNUeZePUCwQDyRW7YT1K%2FILDa8LC2hJdQjWIsmWYg%2FrakdM5xZ%2FaVNtZ2z%2FYMHqVIdS1gY3gcHmeCsPJkcl1o4zIS9Vp119gTZHiTejSRR9LzPeOrsdLZ%2F%2FS0vWDwaDeLqhi%2F%2Bmabpz3ddkHcYAiVJG5Luile9cK2SlDQjDY4qlLgjF%2Fe3OAALaxqTkLT3O4bRw7wck5VjFmqwMuePIlAOU4RJxEhUdeXitVtPaMT0sZZwqfnW7Bem6t%2FmNmLOjQAc72pZEG9rNz%2B%2BOpVkSkJ%2FLmPI9EbMh9QesJbX%2BkrNhOnwpPI9waqIIzkCaRt7BmOYbYS2nKWBQpAwfwR4e1DLARd7wjrprGqMDb%2BswNJdkj6vqq4n2RSn5R0%2BzxEGGaa0o391FvNQBky1HfxDCf7SCED%2FGF%2F1UZ7GMvWh6E9hfi8wJaxHSCEARao6tGGIPtf2mk3fWq0w5YOaahvK92B4fA8YCaFX%2FSvVTCGgLDQV9ZBgzhaJwFRCkVFpT3vneKiUGhJfMJvV5r4GOqUBWwv1o2Z2vKnLKeIB2ERkU%2Faj8YD3zg76AyD9XBRPsUgImjzLW2h1BvUvdceT%2F9mMlWAM4ZFqCHXt3b3tRoqqqhuVZ0XyN5%2FnsUmSqtb4Rrox6ChTn%2FFi3WfgRsoveyQtKyU28ebhNZjPnwQ11ad%2FiqFB2vAMdX3%2BZopwkrTofVjy3nmjs3o9E2kprW6YOPM%2BuyWNSArnb2CRTh7H0p1M7PVyvetE&X-Amz-Signature=9ad866d7ad4a32eab314a3d7973c869e40cc7801f7ddea4759d308c2654741a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQXKCMS%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDkx%2BbvHZH3TL7WVYLwjlnngAu5WpT5hnxM8viPeBNqoAiEA4qBf5X7u8diPAqMivdH8EOBxilT7%2BAPo7hyX7VhpY6gq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDIAW%2FWIJHYOLGziFByrcA1VA1HUs6j5usGMHHK2AFcsFgwrNfm2jgdRg2X4g3HMNC8nxnFtpOQjvimJYcjQxAzl%2BGnVvAcKQPcXVnQj5crTxUIMlVFgRMNJKSx0L663fxjVF3n7zyPrNUeZePUCwQDyRW7YT1K%2FILDa8LC2hJdQjWIsmWYg%2FrakdM5xZ%2FaVNtZ2z%2FYMHqVIdS1gY3gcHmeCsPJkcl1o4zIS9Vp119gTZHiTejSRR9LzPeOrsdLZ%2F%2FS0vWDwaDeLqhi%2F%2Bmabpz3ddkHcYAiVJG5Luile9cK2SlDQjDY4qlLgjF%2Fe3OAALaxqTkLT3O4bRw7wck5VjFmqwMuePIlAOU4RJxEhUdeXitVtPaMT0sZZwqfnW7Bem6t%2FmNmLOjQAc72pZEG9rNz%2B%2BOpVkSkJ%2FLmPI9EbMh9QesJbX%2BkrNhOnwpPI9waqIIzkCaRt7BmOYbYS2nKWBQpAwfwR4e1DLARd7wjrprGqMDb%2BswNJdkj6vqq4n2RSn5R0%2BzxEGGaa0o391FvNQBky1HfxDCf7SCED%2FGF%2F1UZ7GMvWh6E9hfi8wJaxHSCEARao6tGGIPtf2mk3fWq0w5YOaahvK92B4fA8YCaFX%2FSvVTCGgLDQV9ZBgzhaJwFRCkVFpT3vneKiUGhJfMJvV5r4GOqUBWwv1o2Z2vKnLKeIB2ERkU%2Faj8YD3zg76AyD9XBRPsUgImjzLW2h1BvUvdceT%2F9mMlWAM4ZFqCHXt3b3tRoqqqhuVZ0XyN5%2FnsUmSqtb4Rrox6ChTn%2FFi3WfgRsoveyQtKyU28ebhNZjPnwQ11ad%2FiqFB2vAMdX3%2BZopwkrTofVjy3nmjs3o9E2kprW6YOPM%2BuyWNSArnb2CRTh7H0p1M7PVyvetE&X-Amz-Signature=ffdeec952bcbb36a771fefbb4ee9808b01dc0183edea7fbe62a81eb027375ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQXKCMS%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDkx%2BbvHZH3TL7WVYLwjlnngAu5WpT5hnxM8viPeBNqoAiEA4qBf5X7u8diPAqMivdH8EOBxilT7%2BAPo7hyX7VhpY6gq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDIAW%2FWIJHYOLGziFByrcA1VA1HUs6j5usGMHHK2AFcsFgwrNfm2jgdRg2X4g3HMNC8nxnFtpOQjvimJYcjQxAzl%2BGnVvAcKQPcXVnQj5crTxUIMlVFgRMNJKSx0L663fxjVF3n7zyPrNUeZePUCwQDyRW7YT1K%2FILDa8LC2hJdQjWIsmWYg%2FrakdM5xZ%2FaVNtZ2z%2FYMHqVIdS1gY3gcHmeCsPJkcl1o4zIS9Vp119gTZHiTejSRR9LzPeOrsdLZ%2F%2FS0vWDwaDeLqhi%2F%2Bmabpz3ddkHcYAiVJG5Luile9cK2SlDQjDY4qlLgjF%2Fe3OAALaxqTkLT3O4bRw7wck5VjFmqwMuePIlAOU4RJxEhUdeXitVtPaMT0sZZwqfnW7Bem6t%2FmNmLOjQAc72pZEG9rNz%2B%2BOpVkSkJ%2FLmPI9EbMh9QesJbX%2BkrNhOnwpPI9waqIIzkCaRt7BmOYbYS2nKWBQpAwfwR4e1DLARd7wjrprGqMDb%2BswNJdkj6vqq4n2RSn5R0%2BzxEGGaa0o391FvNQBky1HfxDCf7SCED%2FGF%2F1UZ7GMvWh6E9hfi8wJaxHSCEARao6tGGIPtf2mk3fWq0w5YOaahvK92B4fA8YCaFX%2FSvVTCGgLDQV9ZBgzhaJwFRCkVFpT3vneKiUGhJfMJvV5r4GOqUBWwv1o2Z2vKnLKeIB2ERkU%2Faj8YD3zg76AyD9XBRPsUgImjzLW2h1BvUvdceT%2F9mMlWAM4ZFqCHXt3b3tRoqqqhuVZ0XyN5%2FnsUmSqtb4Rrox6ChTn%2FFi3WfgRsoveyQtKyU28ebhNZjPnwQ11ad%2FiqFB2vAMdX3%2BZopwkrTofVjy3nmjs3o9E2kprW6YOPM%2BuyWNSArnb2CRTh7H0p1M7PVyvetE&X-Amz-Signature=8f965f0bbf92112933868212ca762d152fc8dd03ba176456dbd54f26a46e2f07&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQXKCMS%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDkx%2BbvHZH3TL7WVYLwjlnngAu5WpT5hnxM8viPeBNqoAiEA4qBf5X7u8diPAqMivdH8EOBxilT7%2BAPo7hyX7VhpY6gq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDIAW%2FWIJHYOLGziFByrcA1VA1HUs6j5usGMHHK2AFcsFgwrNfm2jgdRg2X4g3HMNC8nxnFtpOQjvimJYcjQxAzl%2BGnVvAcKQPcXVnQj5crTxUIMlVFgRMNJKSx0L663fxjVF3n7zyPrNUeZePUCwQDyRW7YT1K%2FILDa8LC2hJdQjWIsmWYg%2FrakdM5xZ%2FaVNtZ2z%2FYMHqVIdS1gY3gcHmeCsPJkcl1o4zIS9Vp119gTZHiTejSRR9LzPeOrsdLZ%2F%2FS0vWDwaDeLqhi%2F%2Bmabpz3ddkHcYAiVJG5Luile9cK2SlDQjDY4qlLgjF%2Fe3OAALaxqTkLT3O4bRw7wck5VjFmqwMuePIlAOU4RJxEhUdeXitVtPaMT0sZZwqfnW7Bem6t%2FmNmLOjQAc72pZEG9rNz%2B%2BOpVkSkJ%2FLmPI9EbMh9QesJbX%2BkrNhOnwpPI9waqIIzkCaRt7BmOYbYS2nKWBQpAwfwR4e1DLARd7wjrprGqMDb%2BswNJdkj6vqq4n2RSn5R0%2BzxEGGaa0o391FvNQBky1HfxDCf7SCED%2FGF%2F1UZ7GMvWh6E9hfi8wJaxHSCEARao6tGGIPtf2mk3fWq0w5YOaahvK92B4fA8YCaFX%2FSvVTCGgLDQV9ZBgzhaJwFRCkVFpT3vneKiUGhJfMJvV5r4GOqUBWwv1o2Z2vKnLKeIB2ERkU%2Faj8YD3zg76AyD9XBRPsUgImjzLW2h1BvUvdceT%2F9mMlWAM4ZFqCHXt3b3tRoqqqhuVZ0XyN5%2FnsUmSqtb4Rrox6ChTn%2FFi3WfgRsoveyQtKyU28ebhNZjPnwQ11ad%2FiqFB2vAMdX3%2BZopwkrTofVjy3nmjs3o9E2kprW6YOPM%2BuyWNSArnb2CRTh7H0p1M7PVyvetE&X-Amz-Signature=72775d7f0be7f984611edaed7a56e663e4627deaa2f3ab805567e452c1ae9904&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQXKCMS%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDkx%2BbvHZH3TL7WVYLwjlnngAu5WpT5hnxM8viPeBNqoAiEA4qBf5X7u8diPAqMivdH8EOBxilT7%2BAPo7hyX7VhpY6gq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDIAW%2FWIJHYOLGziFByrcA1VA1HUs6j5usGMHHK2AFcsFgwrNfm2jgdRg2X4g3HMNC8nxnFtpOQjvimJYcjQxAzl%2BGnVvAcKQPcXVnQj5crTxUIMlVFgRMNJKSx0L663fxjVF3n7zyPrNUeZePUCwQDyRW7YT1K%2FILDa8LC2hJdQjWIsmWYg%2FrakdM5xZ%2FaVNtZ2z%2FYMHqVIdS1gY3gcHmeCsPJkcl1o4zIS9Vp119gTZHiTejSRR9LzPeOrsdLZ%2F%2FS0vWDwaDeLqhi%2F%2Bmabpz3ddkHcYAiVJG5Luile9cK2SlDQjDY4qlLgjF%2Fe3OAALaxqTkLT3O4bRw7wck5VjFmqwMuePIlAOU4RJxEhUdeXitVtPaMT0sZZwqfnW7Bem6t%2FmNmLOjQAc72pZEG9rNz%2B%2BOpVkSkJ%2FLmPI9EbMh9QesJbX%2BkrNhOnwpPI9waqIIzkCaRt7BmOYbYS2nKWBQpAwfwR4e1DLARd7wjrprGqMDb%2BswNJdkj6vqq4n2RSn5R0%2BzxEGGaa0o391FvNQBky1HfxDCf7SCED%2FGF%2F1UZ7GMvWh6E9hfi8wJaxHSCEARao6tGGIPtf2mk3fWq0w5YOaahvK92B4fA8YCaFX%2FSvVTCGgLDQV9ZBgzhaJwFRCkVFpT3vneKiUGhJfMJvV5r4GOqUBWwv1o2Z2vKnLKeIB2ERkU%2Faj8YD3zg76AyD9XBRPsUgImjzLW2h1BvUvdceT%2F9mMlWAM4ZFqCHXt3b3tRoqqqhuVZ0XyN5%2FnsUmSqtb4Rrox6ChTn%2FFi3WfgRsoveyQtKyU28ebhNZjPnwQ11ad%2FiqFB2vAMdX3%2BZopwkrTofVjy3nmjs3o9E2kprW6YOPM%2BuyWNSArnb2CRTh7H0p1M7PVyvetE&X-Amz-Signature=8c9af6e4750e34bac788baf2bdbd8695a3d698525baf0bc7e705be652cf54672&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQXKCMS%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDkx%2BbvHZH3TL7WVYLwjlnngAu5WpT5hnxM8viPeBNqoAiEA4qBf5X7u8diPAqMivdH8EOBxilT7%2BAPo7hyX7VhpY6gq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDIAW%2FWIJHYOLGziFByrcA1VA1HUs6j5usGMHHK2AFcsFgwrNfm2jgdRg2X4g3HMNC8nxnFtpOQjvimJYcjQxAzl%2BGnVvAcKQPcXVnQj5crTxUIMlVFgRMNJKSx0L663fxjVF3n7zyPrNUeZePUCwQDyRW7YT1K%2FILDa8LC2hJdQjWIsmWYg%2FrakdM5xZ%2FaVNtZ2z%2FYMHqVIdS1gY3gcHmeCsPJkcl1o4zIS9Vp119gTZHiTejSRR9LzPeOrsdLZ%2F%2FS0vWDwaDeLqhi%2F%2Bmabpz3ddkHcYAiVJG5Luile9cK2SlDQjDY4qlLgjF%2Fe3OAALaxqTkLT3O4bRw7wck5VjFmqwMuePIlAOU4RJxEhUdeXitVtPaMT0sZZwqfnW7Bem6t%2FmNmLOjQAc72pZEG9rNz%2B%2BOpVkSkJ%2FLmPI9EbMh9QesJbX%2BkrNhOnwpPI9waqIIzkCaRt7BmOYbYS2nKWBQpAwfwR4e1DLARd7wjrprGqMDb%2BswNJdkj6vqq4n2RSn5R0%2BzxEGGaa0o391FvNQBky1HfxDCf7SCED%2FGF%2F1UZ7GMvWh6E9hfi8wJaxHSCEARao6tGGIPtf2mk3fWq0w5YOaahvK92B4fA8YCaFX%2FSvVTCGgLDQV9ZBgzhaJwFRCkVFpT3vneKiUGhJfMJvV5r4GOqUBWwv1o2Z2vKnLKeIB2ERkU%2Faj8YD3zg76AyD9XBRPsUgImjzLW2h1BvUvdceT%2F9mMlWAM4ZFqCHXt3b3tRoqqqhuVZ0XyN5%2FnsUmSqtb4Rrox6ChTn%2FFi3WfgRsoveyQtKyU28ebhNZjPnwQ11ad%2FiqFB2vAMdX3%2BZopwkrTofVjy3nmjs3o9E2kprW6YOPM%2BuyWNSArnb2CRTh7H0p1M7PVyvetE&X-Amz-Signature=b85f0beffaee4d62658682850cfcd6b11c1ff94e5b36e38bcfbf00c9c58e8185&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
