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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4RQKAS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDjaM7lOi%2B9eJW2BBtvsNvxKmF9FYzGZ3UXijdMPtxdUQIga32S2SLVIMEAhoNW9QVsfEZu3u6LvSuJvqDmnIsFFNAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIRjJLZ28EaQ7T6X7yrcAxNov7wfN4Rbh9TuIGHEOcUtOb6NhDZB%2BFi%2BF21XmJ8rzVsDK4QTe0pLXUoCg%2B5ReSaJzbhQzPeI%2B9fBLD6EYE3FJkJ04QDVhbVW%2BCnVBFdyYrbFIXnL92eYPIFw1Nv6kIOY6pb7IfBM3BAhh9NroirTaZ0JdYgQPlB7tGp3lEngboMmfHTJljeYfl%2FY8vcl3VAcqWvWGS6T1cN9YzmpOBAtcH0r%2B42ltmF%2FUwlxjl%2FZxXEC%2F%2BaM3HP49ZgLRUwojm76BuNImTs4VQjwMwPu0DC9qpYRGgkJuM1yQQcDAuCUnNCMTiZsFOBzGgok2CjnAw9phZNzdrv8AW4dQsAeWHT%2BL1NQ9rzo6ylRtP6nisp%2B%2BCmWivwZvOLU6PVdbSfL%2BPRNMAwqWcNbAL4MgRPGs9tnhoQrRRspSE0NLXgfIhZX6HFarI%2FhmOs%2FA4Jcpfdapw4InFwEjUGIIBEE34y1ACDdly0b%2FntSvYvGr3vJsP8w9txF2rmvQPOh4BUViq1zXNOSncS%2BJWyt%2Fz5Xjmu6A9ucGLjsKLM2bWjHq%2BKQj3yKl1k%2FKHpulK85yGG2JV42I8pJ6Z%2FL0kfH4JdURm9WXq4leXrssSJx9typ7jcuqGoyLONaCxEZUoRMFCrVMI3qvL0GOqUB4wxHvrX2az32zDcCjTsz9%2FZblOsRAl5CD2A4piIV97tEmV5UwcLtvwSnrANDLY0U%2FE5%2FoesknC3x%2B80dyHSNZ9a2aHCx7HlrIqdhd0gz1bGbmy2sVC2Zq5yPcxqfXKfieXl04beWcBo7etWO0Elfl%2F%2Bp97yW6ejwWVG%2F8Jkr%2FVksNxwffaoLxDrmHksScujGx%2FRD%2FxWQQ2vhE8CMGvi%2FqTfwOtBz&X-Amz-Signature=dbf7c4a9d4ed020c3c587438bc7b1733ca5830a471a521c207d8c17ec14f5035&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4RQKAS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDjaM7lOi%2B9eJW2BBtvsNvxKmF9FYzGZ3UXijdMPtxdUQIga32S2SLVIMEAhoNW9QVsfEZu3u6LvSuJvqDmnIsFFNAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIRjJLZ28EaQ7T6X7yrcAxNov7wfN4Rbh9TuIGHEOcUtOb6NhDZB%2BFi%2BF21XmJ8rzVsDK4QTe0pLXUoCg%2B5ReSaJzbhQzPeI%2B9fBLD6EYE3FJkJ04QDVhbVW%2BCnVBFdyYrbFIXnL92eYPIFw1Nv6kIOY6pb7IfBM3BAhh9NroirTaZ0JdYgQPlB7tGp3lEngboMmfHTJljeYfl%2FY8vcl3VAcqWvWGS6T1cN9YzmpOBAtcH0r%2B42ltmF%2FUwlxjl%2FZxXEC%2F%2BaM3HP49ZgLRUwojm76BuNImTs4VQjwMwPu0DC9qpYRGgkJuM1yQQcDAuCUnNCMTiZsFOBzGgok2CjnAw9phZNzdrv8AW4dQsAeWHT%2BL1NQ9rzo6ylRtP6nisp%2B%2BCmWivwZvOLU6PVdbSfL%2BPRNMAwqWcNbAL4MgRPGs9tnhoQrRRspSE0NLXgfIhZX6HFarI%2FhmOs%2FA4Jcpfdapw4InFwEjUGIIBEE34y1ACDdly0b%2FntSvYvGr3vJsP8w9txF2rmvQPOh4BUViq1zXNOSncS%2BJWyt%2Fz5Xjmu6A9ucGLjsKLM2bWjHq%2BKQj3yKl1k%2FKHpulK85yGG2JV42I8pJ6Z%2FL0kfH4JdURm9WXq4leXrssSJx9typ7jcuqGoyLONaCxEZUoRMFCrVMI3qvL0GOqUB4wxHvrX2az32zDcCjTsz9%2FZblOsRAl5CD2A4piIV97tEmV5UwcLtvwSnrANDLY0U%2FE5%2FoesknC3x%2B80dyHSNZ9a2aHCx7HlrIqdhd0gz1bGbmy2sVC2Zq5yPcxqfXKfieXl04beWcBo7etWO0Elfl%2F%2Bp97yW6ejwWVG%2F8Jkr%2FVksNxwffaoLxDrmHksScujGx%2FRD%2FxWQQ2vhE8CMGvi%2FqTfwOtBz&X-Amz-Signature=cff2f1b818276dd019ec8e942b326a203d1206bd963ce18df8e016ddcb21385d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4RQKAS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDjaM7lOi%2B9eJW2BBtvsNvxKmF9FYzGZ3UXijdMPtxdUQIga32S2SLVIMEAhoNW9QVsfEZu3u6LvSuJvqDmnIsFFNAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIRjJLZ28EaQ7T6X7yrcAxNov7wfN4Rbh9TuIGHEOcUtOb6NhDZB%2BFi%2BF21XmJ8rzVsDK4QTe0pLXUoCg%2B5ReSaJzbhQzPeI%2B9fBLD6EYE3FJkJ04QDVhbVW%2BCnVBFdyYrbFIXnL92eYPIFw1Nv6kIOY6pb7IfBM3BAhh9NroirTaZ0JdYgQPlB7tGp3lEngboMmfHTJljeYfl%2FY8vcl3VAcqWvWGS6T1cN9YzmpOBAtcH0r%2B42ltmF%2FUwlxjl%2FZxXEC%2F%2BaM3HP49ZgLRUwojm76BuNImTs4VQjwMwPu0DC9qpYRGgkJuM1yQQcDAuCUnNCMTiZsFOBzGgok2CjnAw9phZNzdrv8AW4dQsAeWHT%2BL1NQ9rzo6ylRtP6nisp%2B%2BCmWivwZvOLU6PVdbSfL%2BPRNMAwqWcNbAL4MgRPGs9tnhoQrRRspSE0NLXgfIhZX6HFarI%2FhmOs%2FA4Jcpfdapw4InFwEjUGIIBEE34y1ACDdly0b%2FntSvYvGr3vJsP8w9txF2rmvQPOh4BUViq1zXNOSncS%2BJWyt%2Fz5Xjmu6A9ucGLjsKLM2bWjHq%2BKQj3yKl1k%2FKHpulK85yGG2JV42I8pJ6Z%2FL0kfH4JdURm9WXq4leXrssSJx9typ7jcuqGoyLONaCxEZUoRMFCrVMI3qvL0GOqUB4wxHvrX2az32zDcCjTsz9%2FZblOsRAl5CD2A4piIV97tEmV5UwcLtvwSnrANDLY0U%2FE5%2FoesknC3x%2B80dyHSNZ9a2aHCx7HlrIqdhd0gz1bGbmy2sVC2Zq5yPcxqfXKfieXl04beWcBo7etWO0Elfl%2F%2Bp97yW6ejwWVG%2F8Jkr%2FVksNxwffaoLxDrmHksScujGx%2FRD%2FxWQQ2vhE8CMGvi%2FqTfwOtBz&X-Amz-Signature=65d0667a114d08ba2b22182bc7db7628d7e429816da9637c8dc9ad413737a86b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4RQKAS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDjaM7lOi%2B9eJW2BBtvsNvxKmF9FYzGZ3UXijdMPtxdUQIga32S2SLVIMEAhoNW9QVsfEZu3u6LvSuJvqDmnIsFFNAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIRjJLZ28EaQ7T6X7yrcAxNov7wfN4Rbh9TuIGHEOcUtOb6NhDZB%2BFi%2BF21XmJ8rzVsDK4QTe0pLXUoCg%2B5ReSaJzbhQzPeI%2B9fBLD6EYE3FJkJ04QDVhbVW%2BCnVBFdyYrbFIXnL92eYPIFw1Nv6kIOY6pb7IfBM3BAhh9NroirTaZ0JdYgQPlB7tGp3lEngboMmfHTJljeYfl%2FY8vcl3VAcqWvWGS6T1cN9YzmpOBAtcH0r%2B42ltmF%2FUwlxjl%2FZxXEC%2F%2BaM3HP49ZgLRUwojm76BuNImTs4VQjwMwPu0DC9qpYRGgkJuM1yQQcDAuCUnNCMTiZsFOBzGgok2CjnAw9phZNzdrv8AW4dQsAeWHT%2BL1NQ9rzo6ylRtP6nisp%2B%2BCmWivwZvOLU6PVdbSfL%2BPRNMAwqWcNbAL4MgRPGs9tnhoQrRRspSE0NLXgfIhZX6HFarI%2FhmOs%2FA4Jcpfdapw4InFwEjUGIIBEE34y1ACDdly0b%2FntSvYvGr3vJsP8w9txF2rmvQPOh4BUViq1zXNOSncS%2BJWyt%2Fz5Xjmu6A9ucGLjsKLM2bWjHq%2BKQj3yKl1k%2FKHpulK85yGG2JV42I8pJ6Z%2FL0kfH4JdURm9WXq4leXrssSJx9typ7jcuqGoyLONaCxEZUoRMFCrVMI3qvL0GOqUB4wxHvrX2az32zDcCjTsz9%2FZblOsRAl5CD2A4piIV97tEmV5UwcLtvwSnrANDLY0U%2FE5%2FoesknC3x%2B80dyHSNZ9a2aHCx7HlrIqdhd0gz1bGbmy2sVC2Zq5yPcxqfXKfieXl04beWcBo7etWO0Elfl%2F%2Bp97yW6ejwWVG%2F8Jkr%2FVksNxwffaoLxDrmHksScujGx%2FRD%2FxWQQ2vhE8CMGvi%2FqTfwOtBz&X-Amz-Signature=5f86d72df9bc3ebc9e32974a88d69c00d6c272f03d5c0b666b6a2ff869777e88&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4RQKAS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDjaM7lOi%2B9eJW2BBtvsNvxKmF9FYzGZ3UXijdMPtxdUQIga32S2SLVIMEAhoNW9QVsfEZu3u6LvSuJvqDmnIsFFNAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIRjJLZ28EaQ7T6X7yrcAxNov7wfN4Rbh9TuIGHEOcUtOb6NhDZB%2BFi%2BF21XmJ8rzVsDK4QTe0pLXUoCg%2B5ReSaJzbhQzPeI%2B9fBLD6EYE3FJkJ04QDVhbVW%2BCnVBFdyYrbFIXnL92eYPIFw1Nv6kIOY6pb7IfBM3BAhh9NroirTaZ0JdYgQPlB7tGp3lEngboMmfHTJljeYfl%2FY8vcl3VAcqWvWGS6T1cN9YzmpOBAtcH0r%2B42ltmF%2FUwlxjl%2FZxXEC%2F%2BaM3HP49ZgLRUwojm76BuNImTs4VQjwMwPu0DC9qpYRGgkJuM1yQQcDAuCUnNCMTiZsFOBzGgok2CjnAw9phZNzdrv8AW4dQsAeWHT%2BL1NQ9rzo6ylRtP6nisp%2B%2BCmWivwZvOLU6PVdbSfL%2BPRNMAwqWcNbAL4MgRPGs9tnhoQrRRspSE0NLXgfIhZX6HFarI%2FhmOs%2FA4Jcpfdapw4InFwEjUGIIBEE34y1ACDdly0b%2FntSvYvGr3vJsP8w9txF2rmvQPOh4BUViq1zXNOSncS%2BJWyt%2Fz5Xjmu6A9ucGLjsKLM2bWjHq%2BKQj3yKl1k%2FKHpulK85yGG2JV42I8pJ6Z%2FL0kfH4JdURm9WXq4leXrssSJx9typ7jcuqGoyLONaCxEZUoRMFCrVMI3qvL0GOqUB4wxHvrX2az32zDcCjTsz9%2FZblOsRAl5CD2A4piIV97tEmV5UwcLtvwSnrANDLY0U%2FE5%2FoesknC3x%2B80dyHSNZ9a2aHCx7HlrIqdhd0gz1bGbmy2sVC2Zq5yPcxqfXKfieXl04beWcBo7etWO0Elfl%2F%2Bp97yW6ejwWVG%2F8Jkr%2FVksNxwffaoLxDrmHksScujGx%2FRD%2FxWQQ2vhE8CMGvi%2FqTfwOtBz&X-Amz-Signature=495a16a401d292bf3a8153482ce46528f7abad0ce73a5f677d0d44cde31de7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4RQKAS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDjaM7lOi%2B9eJW2BBtvsNvxKmF9FYzGZ3UXijdMPtxdUQIga32S2SLVIMEAhoNW9QVsfEZu3u6LvSuJvqDmnIsFFNAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIRjJLZ28EaQ7T6X7yrcAxNov7wfN4Rbh9TuIGHEOcUtOb6NhDZB%2BFi%2BF21XmJ8rzVsDK4QTe0pLXUoCg%2B5ReSaJzbhQzPeI%2B9fBLD6EYE3FJkJ04QDVhbVW%2BCnVBFdyYrbFIXnL92eYPIFw1Nv6kIOY6pb7IfBM3BAhh9NroirTaZ0JdYgQPlB7tGp3lEngboMmfHTJljeYfl%2FY8vcl3VAcqWvWGS6T1cN9YzmpOBAtcH0r%2B42ltmF%2FUwlxjl%2FZxXEC%2F%2BaM3HP49ZgLRUwojm76BuNImTs4VQjwMwPu0DC9qpYRGgkJuM1yQQcDAuCUnNCMTiZsFOBzGgok2CjnAw9phZNzdrv8AW4dQsAeWHT%2BL1NQ9rzo6ylRtP6nisp%2B%2BCmWivwZvOLU6PVdbSfL%2BPRNMAwqWcNbAL4MgRPGs9tnhoQrRRspSE0NLXgfIhZX6HFarI%2FhmOs%2FA4Jcpfdapw4InFwEjUGIIBEE34y1ACDdly0b%2FntSvYvGr3vJsP8w9txF2rmvQPOh4BUViq1zXNOSncS%2BJWyt%2Fz5Xjmu6A9ucGLjsKLM2bWjHq%2BKQj3yKl1k%2FKHpulK85yGG2JV42I8pJ6Z%2FL0kfH4JdURm9WXq4leXrssSJx9typ7jcuqGoyLONaCxEZUoRMFCrVMI3qvL0GOqUB4wxHvrX2az32zDcCjTsz9%2FZblOsRAl5CD2A4piIV97tEmV5UwcLtvwSnrANDLY0U%2FE5%2FoesknC3x%2B80dyHSNZ9a2aHCx7HlrIqdhd0gz1bGbmy2sVC2Zq5yPcxqfXKfieXl04beWcBo7etWO0Elfl%2F%2Bp97yW6ejwWVG%2F8Jkr%2FVksNxwffaoLxDrmHksScujGx%2FRD%2FxWQQ2vhE8CMGvi%2FqTfwOtBz&X-Amz-Signature=7a7a848c0231635eb167699bcd389130b08a1085edc398aa3525347d50645e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4RQKAS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDjaM7lOi%2B9eJW2BBtvsNvxKmF9FYzGZ3UXijdMPtxdUQIga32S2SLVIMEAhoNW9QVsfEZu3u6LvSuJvqDmnIsFFNAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIRjJLZ28EaQ7T6X7yrcAxNov7wfN4Rbh9TuIGHEOcUtOb6NhDZB%2BFi%2BF21XmJ8rzVsDK4QTe0pLXUoCg%2B5ReSaJzbhQzPeI%2B9fBLD6EYE3FJkJ04QDVhbVW%2BCnVBFdyYrbFIXnL92eYPIFw1Nv6kIOY6pb7IfBM3BAhh9NroirTaZ0JdYgQPlB7tGp3lEngboMmfHTJljeYfl%2FY8vcl3VAcqWvWGS6T1cN9YzmpOBAtcH0r%2B42ltmF%2FUwlxjl%2FZxXEC%2F%2BaM3HP49ZgLRUwojm76BuNImTs4VQjwMwPu0DC9qpYRGgkJuM1yQQcDAuCUnNCMTiZsFOBzGgok2CjnAw9phZNzdrv8AW4dQsAeWHT%2BL1NQ9rzo6ylRtP6nisp%2B%2BCmWivwZvOLU6PVdbSfL%2BPRNMAwqWcNbAL4MgRPGs9tnhoQrRRspSE0NLXgfIhZX6HFarI%2FhmOs%2FA4Jcpfdapw4InFwEjUGIIBEE34y1ACDdly0b%2FntSvYvGr3vJsP8w9txF2rmvQPOh4BUViq1zXNOSncS%2BJWyt%2Fz5Xjmu6A9ucGLjsKLM2bWjHq%2BKQj3yKl1k%2FKHpulK85yGG2JV42I8pJ6Z%2FL0kfH4JdURm9WXq4leXrssSJx9typ7jcuqGoyLONaCxEZUoRMFCrVMI3qvL0GOqUB4wxHvrX2az32zDcCjTsz9%2FZblOsRAl5CD2A4piIV97tEmV5UwcLtvwSnrANDLY0U%2FE5%2FoesknC3x%2B80dyHSNZ9a2aHCx7HlrIqdhd0gz1bGbmy2sVC2Zq5yPcxqfXKfieXl04beWcBo7etWO0Elfl%2F%2Bp97yW6ejwWVG%2F8Jkr%2FVksNxwffaoLxDrmHksScujGx%2FRD%2FxWQQ2vhE8CMGvi%2FqTfwOtBz&X-Amz-Signature=df9a4a327109bd7d0b5271ca306b7c618f00074246f196b22375a07951598afc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
