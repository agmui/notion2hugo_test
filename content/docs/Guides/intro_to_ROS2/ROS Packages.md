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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M6DULKN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC2jJJ%2B84myfZeToT6Qf1ik9NClm%2Bejm50n1sVkhSQVLAIhANPyuc9QEWAIQC2cbPjqzViPaPnRkFtWDo%2BLZLyEBh1XKv8DCDsQABoMNjM3NDIzMTgzODA1IgyJFRuakfcmv3b%2FuE8q3AOit64lYVeswxaruaZgibokNZJDHI22Y5%2B5zpJ6KAHJf8eyZWJRCrHgJ%2Fy5mSYN4QBzMTyxM2sxCdJIDo5F5TmAWXi28cekSixtwH%2FHTbxekmhmW%2BqrJhI5vAkH6rZB%2FdDrUE18B9SqHFUyUDJDU0%2FYtdvV9W%2BEM5FEQYd3H5BXBqQL%2FpJ4ZTZxv5w4%2Bfx9%2FPz2LsdF%2BxoG5hSWvfjJnuJ113NbXz5CGjsgORgQNZxayUtCRmo971I31CdKNQsUOWsXtkQiB4JZCDwbB%2FcJW7dYMwAS4maB4wL3Z9RF7XoZcMIdRg%2FtNBiACfu9PKLWnbddhw%2FrPzpctmSrxHdM%2FYHjuxB8dU90rAjzbkwusuWPOlQokvLqScGXZ3SYj5gMVLzYyguzzoQ%2BY0Vz1RyQAPUOiUCAxwPTdzHroNp8F6DdVIKvSh09OulaXLnBSLaAF9zIR%2B%2F68TRvu0C0YKOS6z8alqu4fTzXhXrlDA3V4Zr7sUhTR%2FKigDDktFC1qzRM0VM51hT6bVLdIjvAt2sklcjfSSACO6i6MlSkB0ClzunYhKD4U6ep5mmpQrKizHh%2FdGiVELdM144QnEOVDfTNcCul9CdTqjzEOjeZ0GFTvIYMz6LQOFuon6KSHLpbnzDinc%2FBBjqkATf06L716TSO0c0xo6d6Zuk3rJ7H9OFElXeKK%2FSl05Zv65IIMmcVwn%2F2jSKyFUsufS6HEUE6LcYGBzQOYWV%2FL3Yb47DJC2NK%2FyM5%2Fq5rp8PBULUtc%2FOVdl0imuAX9MIU7x%2Bae1qT7dtB7JoTwoBR9%2Fnl6PKnDq4pDY0w%2BmXJk5t0KJYKOU1WTy4ZvFzxzlV%2BcCmZHjd5nfgRagxFYJlVeZDIuN8Z&X-Amz-Signature=3136f741fd46850c89c4a2bbe64ca44b1cda5f644de3bbfe47a8b16c0c0da7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M6DULKN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC2jJJ%2B84myfZeToT6Qf1ik9NClm%2Bejm50n1sVkhSQVLAIhANPyuc9QEWAIQC2cbPjqzViPaPnRkFtWDo%2BLZLyEBh1XKv8DCDsQABoMNjM3NDIzMTgzODA1IgyJFRuakfcmv3b%2FuE8q3AOit64lYVeswxaruaZgibokNZJDHI22Y5%2B5zpJ6KAHJf8eyZWJRCrHgJ%2Fy5mSYN4QBzMTyxM2sxCdJIDo5F5TmAWXi28cekSixtwH%2FHTbxekmhmW%2BqrJhI5vAkH6rZB%2FdDrUE18B9SqHFUyUDJDU0%2FYtdvV9W%2BEM5FEQYd3H5BXBqQL%2FpJ4ZTZxv5w4%2Bfx9%2FPz2LsdF%2BxoG5hSWvfjJnuJ113NbXz5CGjsgORgQNZxayUtCRmo971I31CdKNQsUOWsXtkQiB4JZCDwbB%2FcJW7dYMwAS4maB4wL3Z9RF7XoZcMIdRg%2FtNBiACfu9PKLWnbddhw%2FrPzpctmSrxHdM%2FYHjuxB8dU90rAjzbkwusuWPOlQokvLqScGXZ3SYj5gMVLzYyguzzoQ%2BY0Vz1RyQAPUOiUCAxwPTdzHroNp8F6DdVIKvSh09OulaXLnBSLaAF9zIR%2B%2F68TRvu0C0YKOS6z8alqu4fTzXhXrlDA3V4Zr7sUhTR%2FKigDDktFC1qzRM0VM51hT6bVLdIjvAt2sklcjfSSACO6i6MlSkB0ClzunYhKD4U6ep5mmpQrKizHh%2FdGiVELdM144QnEOVDfTNcCul9CdTqjzEOjeZ0GFTvIYMz6LQOFuon6KSHLpbnzDinc%2FBBjqkATf06L716TSO0c0xo6d6Zuk3rJ7H9OFElXeKK%2FSl05Zv65IIMmcVwn%2F2jSKyFUsufS6HEUE6LcYGBzQOYWV%2FL3Yb47DJC2NK%2FyM5%2Fq5rp8PBULUtc%2FOVdl0imuAX9MIU7x%2Bae1qT7dtB7JoTwoBR9%2Fnl6PKnDq4pDY0w%2BmXJk5t0KJYKOU1WTy4ZvFzxzlV%2BcCmZHjd5nfgRagxFYJlVeZDIuN8Z&X-Amz-Signature=81d005e51e3bdea4f3ed8a45228ddd0fc2e95d2cff1b7a1aac61b9d30f57638d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M6DULKN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC2jJJ%2B84myfZeToT6Qf1ik9NClm%2Bejm50n1sVkhSQVLAIhANPyuc9QEWAIQC2cbPjqzViPaPnRkFtWDo%2BLZLyEBh1XKv8DCDsQABoMNjM3NDIzMTgzODA1IgyJFRuakfcmv3b%2FuE8q3AOit64lYVeswxaruaZgibokNZJDHI22Y5%2B5zpJ6KAHJf8eyZWJRCrHgJ%2Fy5mSYN4QBzMTyxM2sxCdJIDo5F5TmAWXi28cekSixtwH%2FHTbxekmhmW%2BqrJhI5vAkH6rZB%2FdDrUE18B9SqHFUyUDJDU0%2FYtdvV9W%2BEM5FEQYd3H5BXBqQL%2FpJ4ZTZxv5w4%2Bfx9%2FPz2LsdF%2BxoG5hSWvfjJnuJ113NbXz5CGjsgORgQNZxayUtCRmo971I31CdKNQsUOWsXtkQiB4JZCDwbB%2FcJW7dYMwAS4maB4wL3Z9RF7XoZcMIdRg%2FtNBiACfu9PKLWnbddhw%2FrPzpctmSrxHdM%2FYHjuxB8dU90rAjzbkwusuWPOlQokvLqScGXZ3SYj5gMVLzYyguzzoQ%2BY0Vz1RyQAPUOiUCAxwPTdzHroNp8F6DdVIKvSh09OulaXLnBSLaAF9zIR%2B%2F68TRvu0C0YKOS6z8alqu4fTzXhXrlDA3V4Zr7sUhTR%2FKigDDktFC1qzRM0VM51hT6bVLdIjvAt2sklcjfSSACO6i6MlSkB0ClzunYhKD4U6ep5mmpQrKizHh%2FdGiVELdM144QnEOVDfTNcCul9CdTqjzEOjeZ0GFTvIYMz6LQOFuon6KSHLpbnzDinc%2FBBjqkATf06L716TSO0c0xo6d6Zuk3rJ7H9OFElXeKK%2FSl05Zv65IIMmcVwn%2F2jSKyFUsufS6HEUE6LcYGBzQOYWV%2FL3Yb47DJC2NK%2FyM5%2Fq5rp8PBULUtc%2FOVdl0imuAX9MIU7x%2Bae1qT7dtB7JoTwoBR9%2Fnl6PKnDq4pDY0w%2BmXJk5t0KJYKOU1WTy4ZvFzxzlV%2BcCmZHjd5nfgRagxFYJlVeZDIuN8Z&X-Amz-Signature=680ebebd7eb58721f1735193b8afa1d2544bbadaab34ea3b8abcc782c13794ba&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M6DULKN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC2jJJ%2B84myfZeToT6Qf1ik9NClm%2Bejm50n1sVkhSQVLAIhANPyuc9QEWAIQC2cbPjqzViPaPnRkFtWDo%2BLZLyEBh1XKv8DCDsQABoMNjM3NDIzMTgzODA1IgyJFRuakfcmv3b%2FuE8q3AOit64lYVeswxaruaZgibokNZJDHI22Y5%2B5zpJ6KAHJf8eyZWJRCrHgJ%2Fy5mSYN4QBzMTyxM2sxCdJIDo5F5TmAWXi28cekSixtwH%2FHTbxekmhmW%2BqrJhI5vAkH6rZB%2FdDrUE18B9SqHFUyUDJDU0%2FYtdvV9W%2BEM5FEQYd3H5BXBqQL%2FpJ4ZTZxv5w4%2Bfx9%2FPz2LsdF%2BxoG5hSWvfjJnuJ113NbXz5CGjsgORgQNZxayUtCRmo971I31CdKNQsUOWsXtkQiB4JZCDwbB%2FcJW7dYMwAS4maB4wL3Z9RF7XoZcMIdRg%2FtNBiACfu9PKLWnbddhw%2FrPzpctmSrxHdM%2FYHjuxB8dU90rAjzbkwusuWPOlQokvLqScGXZ3SYj5gMVLzYyguzzoQ%2BY0Vz1RyQAPUOiUCAxwPTdzHroNp8F6DdVIKvSh09OulaXLnBSLaAF9zIR%2B%2F68TRvu0C0YKOS6z8alqu4fTzXhXrlDA3V4Zr7sUhTR%2FKigDDktFC1qzRM0VM51hT6bVLdIjvAt2sklcjfSSACO6i6MlSkB0ClzunYhKD4U6ep5mmpQrKizHh%2FdGiVELdM144QnEOVDfTNcCul9CdTqjzEOjeZ0GFTvIYMz6LQOFuon6KSHLpbnzDinc%2FBBjqkATf06L716TSO0c0xo6d6Zuk3rJ7H9OFElXeKK%2FSl05Zv65IIMmcVwn%2F2jSKyFUsufS6HEUE6LcYGBzQOYWV%2FL3Yb47DJC2NK%2FyM5%2Fq5rp8PBULUtc%2FOVdl0imuAX9MIU7x%2Bae1qT7dtB7JoTwoBR9%2Fnl6PKnDq4pDY0w%2BmXJk5t0KJYKOU1WTy4ZvFzxzlV%2BcCmZHjd5nfgRagxFYJlVeZDIuN8Z&X-Amz-Signature=31a76dd83d306d6d1d0e961f54cc35a3b05065c949814ae6e248fb78ee6839b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M6DULKN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC2jJJ%2B84myfZeToT6Qf1ik9NClm%2Bejm50n1sVkhSQVLAIhANPyuc9QEWAIQC2cbPjqzViPaPnRkFtWDo%2BLZLyEBh1XKv8DCDsQABoMNjM3NDIzMTgzODA1IgyJFRuakfcmv3b%2FuE8q3AOit64lYVeswxaruaZgibokNZJDHI22Y5%2B5zpJ6KAHJf8eyZWJRCrHgJ%2Fy5mSYN4QBzMTyxM2sxCdJIDo5F5TmAWXi28cekSixtwH%2FHTbxekmhmW%2BqrJhI5vAkH6rZB%2FdDrUE18B9SqHFUyUDJDU0%2FYtdvV9W%2BEM5FEQYd3H5BXBqQL%2FpJ4ZTZxv5w4%2Bfx9%2FPz2LsdF%2BxoG5hSWvfjJnuJ113NbXz5CGjsgORgQNZxayUtCRmo971I31CdKNQsUOWsXtkQiB4JZCDwbB%2FcJW7dYMwAS4maB4wL3Z9RF7XoZcMIdRg%2FtNBiACfu9PKLWnbddhw%2FrPzpctmSrxHdM%2FYHjuxB8dU90rAjzbkwusuWPOlQokvLqScGXZ3SYj5gMVLzYyguzzoQ%2BY0Vz1RyQAPUOiUCAxwPTdzHroNp8F6DdVIKvSh09OulaXLnBSLaAF9zIR%2B%2F68TRvu0C0YKOS6z8alqu4fTzXhXrlDA3V4Zr7sUhTR%2FKigDDktFC1qzRM0VM51hT6bVLdIjvAt2sklcjfSSACO6i6MlSkB0ClzunYhKD4U6ep5mmpQrKizHh%2FdGiVELdM144QnEOVDfTNcCul9CdTqjzEOjeZ0GFTvIYMz6LQOFuon6KSHLpbnzDinc%2FBBjqkATf06L716TSO0c0xo6d6Zuk3rJ7H9OFElXeKK%2FSl05Zv65IIMmcVwn%2F2jSKyFUsufS6HEUE6LcYGBzQOYWV%2FL3Yb47DJC2NK%2FyM5%2Fq5rp8PBULUtc%2FOVdl0imuAX9MIU7x%2Bae1qT7dtB7JoTwoBR9%2Fnl6PKnDq4pDY0w%2BmXJk5t0KJYKOU1WTy4ZvFzxzlV%2BcCmZHjd5nfgRagxFYJlVeZDIuN8Z&X-Amz-Signature=6027077feedc78b035933c755e61fd083f7991d02da5690e0bba759dc1cfe364&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M6DULKN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC2jJJ%2B84myfZeToT6Qf1ik9NClm%2Bejm50n1sVkhSQVLAIhANPyuc9QEWAIQC2cbPjqzViPaPnRkFtWDo%2BLZLyEBh1XKv8DCDsQABoMNjM3NDIzMTgzODA1IgyJFRuakfcmv3b%2FuE8q3AOit64lYVeswxaruaZgibokNZJDHI22Y5%2B5zpJ6KAHJf8eyZWJRCrHgJ%2Fy5mSYN4QBzMTyxM2sxCdJIDo5F5TmAWXi28cekSixtwH%2FHTbxekmhmW%2BqrJhI5vAkH6rZB%2FdDrUE18B9SqHFUyUDJDU0%2FYtdvV9W%2BEM5FEQYd3H5BXBqQL%2FpJ4ZTZxv5w4%2Bfx9%2FPz2LsdF%2BxoG5hSWvfjJnuJ113NbXz5CGjsgORgQNZxayUtCRmo971I31CdKNQsUOWsXtkQiB4JZCDwbB%2FcJW7dYMwAS4maB4wL3Z9RF7XoZcMIdRg%2FtNBiACfu9PKLWnbddhw%2FrPzpctmSrxHdM%2FYHjuxB8dU90rAjzbkwusuWPOlQokvLqScGXZ3SYj5gMVLzYyguzzoQ%2BY0Vz1RyQAPUOiUCAxwPTdzHroNp8F6DdVIKvSh09OulaXLnBSLaAF9zIR%2B%2F68TRvu0C0YKOS6z8alqu4fTzXhXrlDA3V4Zr7sUhTR%2FKigDDktFC1qzRM0VM51hT6bVLdIjvAt2sklcjfSSACO6i6MlSkB0ClzunYhKD4U6ep5mmpQrKizHh%2FdGiVELdM144QnEOVDfTNcCul9CdTqjzEOjeZ0GFTvIYMz6LQOFuon6KSHLpbnzDinc%2FBBjqkATf06L716TSO0c0xo6d6Zuk3rJ7H9OFElXeKK%2FSl05Zv65IIMmcVwn%2F2jSKyFUsufS6HEUE6LcYGBzQOYWV%2FL3Yb47DJC2NK%2FyM5%2Fq5rp8PBULUtc%2FOVdl0imuAX9MIU7x%2Bae1qT7dtB7JoTwoBR9%2Fnl6PKnDq4pDY0w%2BmXJk5t0KJYKOU1WTy4ZvFzxzlV%2BcCmZHjd5nfgRagxFYJlVeZDIuN8Z&X-Amz-Signature=80686a90dd2e9ece80a5a1c4ea21cb2e564ecbff440784713155186ebb934cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M6DULKN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC2jJJ%2B84myfZeToT6Qf1ik9NClm%2Bejm50n1sVkhSQVLAIhANPyuc9QEWAIQC2cbPjqzViPaPnRkFtWDo%2BLZLyEBh1XKv8DCDsQABoMNjM3NDIzMTgzODA1IgyJFRuakfcmv3b%2FuE8q3AOit64lYVeswxaruaZgibokNZJDHI22Y5%2B5zpJ6KAHJf8eyZWJRCrHgJ%2Fy5mSYN4QBzMTyxM2sxCdJIDo5F5TmAWXi28cekSixtwH%2FHTbxekmhmW%2BqrJhI5vAkH6rZB%2FdDrUE18B9SqHFUyUDJDU0%2FYtdvV9W%2BEM5FEQYd3H5BXBqQL%2FpJ4ZTZxv5w4%2Bfx9%2FPz2LsdF%2BxoG5hSWvfjJnuJ113NbXz5CGjsgORgQNZxayUtCRmo971I31CdKNQsUOWsXtkQiB4JZCDwbB%2FcJW7dYMwAS4maB4wL3Z9RF7XoZcMIdRg%2FtNBiACfu9PKLWnbddhw%2FrPzpctmSrxHdM%2FYHjuxB8dU90rAjzbkwusuWPOlQokvLqScGXZ3SYj5gMVLzYyguzzoQ%2BY0Vz1RyQAPUOiUCAxwPTdzHroNp8F6DdVIKvSh09OulaXLnBSLaAF9zIR%2B%2F68TRvu0C0YKOS6z8alqu4fTzXhXrlDA3V4Zr7sUhTR%2FKigDDktFC1qzRM0VM51hT6bVLdIjvAt2sklcjfSSACO6i6MlSkB0ClzunYhKD4U6ep5mmpQrKizHh%2FdGiVELdM144QnEOVDfTNcCul9CdTqjzEOjeZ0GFTvIYMz6LQOFuon6KSHLpbnzDinc%2FBBjqkATf06L716TSO0c0xo6d6Zuk3rJ7H9OFElXeKK%2FSl05Zv65IIMmcVwn%2F2jSKyFUsufS6HEUE6LcYGBzQOYWV%2FL3Yb47DJC2NK%2FyM5%2Fq5rp8PBULUtc%2FOVdl0imuAX9MIU7x%2Bae1qT7dtB7JoTwoBR9%2Fnl6PKnDq4pDY0w%2BmXJk5t0KJYKOU1WTy4ZvFzxzlV%2BcCmZHjd5nfgRagxFYJlVeZDIuN8Z&X-Amz-Signature=c4df6cb3510bd69fe723f9d25780e8a96c54249c68ea404204b252424fb6b6fe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
