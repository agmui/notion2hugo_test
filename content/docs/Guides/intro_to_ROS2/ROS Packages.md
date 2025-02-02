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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIDGWBS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd1M8gvMre10Wj82wbVmb6basa9t4pMHB47CfGemRTxAiARyMZ%2BHKhFJkyhB%2BeQwnmzF6%2FzcQSLluF%2BY3yQwqbjiCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKuG3wPPRl5SvCgcKtwDxX8wgwT8qZexOkya7oo8VqjGxRYVZVld%2Fs50FwJrTvptjYys9nDCODZNGkHcvAb%2FPtcqSGfwCVzVwYXJHdj75AvRRhiqcT3sW7nJnOB2%2FJihoxXWBB46e%2FhalFMeMmsPUugk76WejR5xQNusxN0uwei8AME%2F7fdTh71WvUIc7YNy2WJAFo5eTbSjSuyOjA578TSLNk7ragaVVe4VAoLduk%2F72%2BeqFJ4mrY6GxHsb%2BmLtd5ld3kYl7%2BelRwVnr2H6L0bZCe%2Fv%2Fwz037DxQ%2F%2Fu67jM%2FhKBemrcputos35bzBFwbtuxb9IZdbY%2BkOWekzYkb8WoHwfIv7nOKxG%2FcccXb%2FiYULEiiBz3%2BBElVzb8EEZFgWSUYqNf3QYnE4czv2tpFvGWzrkh6ecyoVsstvr3i6LV6q6IArx3Piz11RRulvuOpq1rG1eRLS1oJnVC8B3dvbVjGikMZSLwVAUYucw94oU7w44jIepqp%2Frjk1iUiQidHFQCXsMv5DhnYjyWFNQ%2FoDKbBSAMUCPf5hq%2F8%2BziEKy9mtTYiixOBBuQ%2F%2Bhs%2Fw3qb%2BCCBt6OIxGB3zBObHEXqoQZ%2FlaM%2FiPJYZ1FJf%2FhthOa9W%2FgueDyUwhuI1YlBUybajY%2Ft3JmrCcshPcwr8P9vAY6pgEc0N9FKaktShNCcO3HsZQC5czRyNAzx3YDcy7g5HLEl%2F0qrTCNi3AxUmETj6d5A%2FQnqPe3fF1cJHEfSD7j6nailgCMJvcKUNN8s%2F6zz4IQo8%2BC79q6fcmSjXdt%2FY%2FcBuRrfhNB0FEXE29JqvtYp1YflOLdWJHQ4hzEIqLMxg2%2BUPQCHCV%2Fo9fgKnb9%2FK43fi27wZvRCBk67AR%2B3ntml7Aq4Xtm4s3w&X-Amz-Signature=96c058f3fec0090a7d57a84d5d08a9cffcf5526fce71602124f53c25f3feeab2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIDGWBS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd1M8gvMre10Wj82wbVmb6basa9t4pMHB47CfGemRTxAiARyMZ%2BHKhFJkyhB%2BeQwnmzF6%2FzcQSLluF%2BY3yQwqbjiCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKuG3wPPRl5SvCgcKtwDxX8wgwT8qZexOkya7oo8VqjGxRYVZVld%2Fs50FwJrTvptjYys9nDCODZNGkHcvAb%2FPtcqSGfwCVzVwYXJHdj75AvRRhiqcT3sW7nJnOB2%2FJihoxXWBB46e%2FhalFMeMmsPUugk76WejR5xQNusxN0uwei8AME%2F7fdTh71WvUIc7YNy2WJAFo5eTbSjSuyOjA578TSLNk7ragaVVe4VAoLduk%2F72%2BeqFJ4mrY6GxHsb%2BmLtd5ld3kYl7%2BelRwVnr2H6L0bZCe%2Fv%2Fwz037DxQ%2F%2Fu67jM%2FhKBemrcputos35bzBFwbtuxb9IZdbY%2BkOWekzYkb8WoHwfIv7nOKxG%2FcccXb%2FiYULEiiBz3%2BBElVzb8EEZFgWSUYqNf3QYnE4czv2tpFvGWzrkh6ecyoVsstvr3i6LV6q6IArx3Piz11RRulvuOpq1rG1eRLS1oJnVC8B3dvbVjGikMZSLwVAUYucw94oU7w44jIepqp%2Frjk1iUiQidHFQCXsMv5DhnYjyWFNQ%2FoDKbBSAMUCPf5hq%2F8%2BziEKy9mtTYiixOBBuQ%2F%2Bhs%2Fw3qb%2BCCBt6OIxGB3zBObHEXqoQZ%2FlaM%2FiPJYZ1FJf%2FhthOa9W%2FgueDyUwhuI1YlBUybajY%2Ft3JmrCcshPcwr8P9vAY6pgEc0N9FKaktShNCcO3HsZQC5czRyNAzx3YDcy7g5HLEl%2F0qrTCNi3AxUmETj6d5A%2FQnqPe3fF1cJHEfSD7j6nailgCMJvcKUNN8s%2F6zz4IQo8%2BC79q6fcmSjXdt%2FY%2FcBuRrfhNB0FEXE29JqvtYp1YflOLdWJHQ4hzEIqLMxg2%2BUPQCHCV%2Fo9fgKnb9%2FK43fi27wZvRCBk67AR%2B3ntml7Aq4Xtm4s3w&X-Amz-Signature=8e0eb82b2b7436f2c0a2248bc5a15fd11a74d69b0c962a197d9c348dc2c532b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIDGWBS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd1M8gvMre10Wj82wbVmb6basa9t4pMHB47CfGemRTxAiARyMZ%2BHKhFJkyhB%2BeQwnmzF6%2FzcQSLluF%2BY3yQwqbjiCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKuG3wPPRl5SvCgcKtwDxX8wgwT8qZexOkya7oo8VqjGxRYVZVld%2Fs50FwJrTvptjYys9nDCODZNGkHcvAb%2FPtcqSGfwCVzVwYXJHdj75AvRRhiqcT3sW7nJnOB2%2FJihoxXWBB46e%2FhalFMeMmsPUugk76WejR5xQNusxN0uwei8AME%2F7fdTh71WvUIc7YNy2WJAFo5eTbSjSuyOjA578TSLNk7ragaVVe4VAoLduk%2F72%2BeqFJ4mrY6GxHsb%2BmLtd5ld3kYl7%2BelRwVnr2H6L0bZCe%2Fv%2Fwz037DxQ%2F%2Fu67jM%2FhKBemrcputos35bzBFwbtuxb9IZdbY%2BkOWekzYkb8WoHwfIv7nOKxG%2FcccXb%2FiYULEiiBz3%2BBElVzb8EEZFgWSUYqNf3QYnE4czv2tpFvGWzrkh6ecyoVsstvr3i6LV6q6IArx3Piz11RRulvuOpq1rG1eRLS1oJnVC8B3dvbVjGikMZSLwVAUYucw94oU7w44jIepqp%2Frjk1iUiQidHFQCXsMv5DhnYjyWFNQ%2FoDKbBSAMUCPf5hq%2F8%2BziEKy9mtTYiixOBBuQ%2F%2Bhs%2Fw3qb%2BCCBt6OIxGB3zBObHEXqoQZ%2FlaM%2FiPJYZ1FJf%2FhthOa9W%2FgueDyUwhuI1YlBUybajY%2Ft3JmrCcshPcwr8P9vAY6pgEc0N9FKaktShNCcO3HsZQC5czRyNAzx3YDcy7g5HLEl%2F0qrTCNi3AxUmETj6d5A%2FQnqPe3fF1cJHEfSD7j6nailgCMJvcKUNN8s%2F6zz4IQo8%2BC79q6fcmSjXdt%2FY%2FcBuRrfhNB0FEXE29JqvtYp1YflOLdWJHQ4hzEIqLMxg2%2BUPQCHCV%2Fo9fgKnb9%2FK43fi27wZvRCBk67AR%2B3ntml7Aq4Xtm4s3w&X-Amz-Signature=e6e5b771139d4dbb42e7891d5f86985f489c2ddf8aa8a8fec9532e216026eb28&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIDGWBS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd1M8gvMre10Wj82wbVmb6basa9t4pMHB47CfGemRTxAiARyMZ%2BHKhFJkyhB%2BeQwnmzF6%2FzcQSLluF%2BY3yQwqbjiCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKuG3wPPRl5SvCgcKtwDxX8wgwT8qZexOkya7oo8VqjGxRYVZVld%2Fs50FwJrTvptjYys9nDCODZNGkHcvAb%2FPtcqSGfwCVzVwYXJHdj75AvRRhiqcT3sW7nJnOB2%2FJihoxXWBB46e%2FhalFMeMmsPUugk76WejR5xQNusxN0uwei8AME%2F7fdTh71WvUIc7YNy2WJAFo5eTbSjSuyOjA578TSLNk7ragaVVe4VAoLduk%2F72%2BeqFJ4mrY6GxHsb%2BmLtd5ld3kYl7%2BelRwVnr2H6L0bZCe%2Fv%2Fwz037DxQ%2F%2Fu67jM%2FhKBemrcputos35bzBFwbtuxb9IZdbY%2BkOWekzYkb8WoHwfIv7nOKxG%2FcccXb%2FiYULEiiBz3%2BBElVzb8EEZFgWSUYqNf3QYnE4czv2tpFvGWzrkh6ecyoVsstvr3i6LV6q6IArx3Piz11RRulvuOpq1rG1eRLS1oJnVC8B3dvbVjGikMZSLwVAUYucw94oU7w44jIepqp%2Frjk1iUiQidHFQCXsMv5DhnYjyWFNQ%2FoDKbBSAMUCPf5hq%2F8%2BziEKy9mtTYiixOBBuQ%2F%2Bhs%2Fw3qb%2BCCBt6OIxGB3zBObHEXqoQZ%2FlaM%2FiPJYZ1FJf%2FhthOa9W%2FgueDyUwhuI1YlBUybajY%2Ft3JmrCcshPcwr8P9vAY6pgEc0N9FKaktShNCcO3HsZQC5czRyNAzx3YDcy7g5HLEl%2F0qrTCNi3AxUmETj6d5A%2FQnqPe3fF1cJHEfSD7j6nailgCMJvcKUNN8s%2F6zz4IQo8%2BC79q6fcmSjXdt%2FY%2FcBuRrfhNB0FEXE29JqvtYp1YflOLdWJHQ4hzEIqLMxg2%2BUPQCHCV%2Fo9fgKnb9%2FK43fi27wZvRCBk67AR%2B3ntml7Aq4Xtm4s3w&X-Amz-Signature=3024df1aafa706e8a2f9529988aa548487f93d2eeaf4c24b4468ace1f06d1b7d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIDGWBS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd1M8gvMre10Wj82wbVmb6basa9t4pMHB47CfGemRTxAiARyMZ%2BHKhFJkyhB%2BeQwnmzF6%2FzcQSLluF%2BY3yQwqbjiCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKuG3wPPRl5SvCgcKtwDxX8wgwT8qZexOkya7oo8VqjGxRYVZVld%2Fs50FwJrTvptjYys9nDCODZNGkHcvAb%2FPtcqSGfwCVzVwYXJHdj75AvRRhiqcT3sW7nJnOB2%2FJihoxXWBB46e%2FhalFMeMmsPUugk76WejR5xQNusxN0uwei8AME%2F7fdTh71WvUIc7YNy2WJAFo5eTbSjSuyOjA578TSLNk7ragaVVe4VAoLduk%2F72%2BeqFJ4mrY6GxHsb%2BmLtd5ld3kYl7%2BelRwVnr2H6L0bZCe%2Fv%2Fwz037DxQ%2F%2Fu67jM%2FhKBemrcputos35bzBFwbtuxb9IZdbY%2BkOWekzYkb8WoHwfIv7nOKxG%2FcccXb%2FiYULEiiBz3%2BBElVzb8EEZFgWSUYqNf3QYnE4czv2tpFvGWzrkh6ecyoVsstvr3i6LV6q6IArx3Piz11RRulvuOpq1rG1eRLS1oJnVC8B3dvbVjGikMZSLwVAUYucw94oU7w44jIepqp%2Frjk1iUiQidHFQCXsMv5DhnYjyWFNQ%2FoDKbBSAMUCPf5hq%2F8%2BziEKy9mtTYiixOBBuQ%2F%2Bhs%2Fw3qb%2BCCBt6OIxGB3zBObHEXqoQZ%2FlaM%2FiPJYZ1FJf%2FhthOa9W%2FgueDyUwhuI1YlBUybajY%2Ft3JmrCcshPcwr8P9vAY6pgEc0N9FKaktShNCcO3HsZQC5czRyNAzx3YDcy7g5HLEl%2F0qrTCNi3AxUmETj6d5A%2FQnqPe3fF1cJHEfSD7j6nailgCMJvcKUNN8s%2F6zz4IQo8%2BC79q6fcmSjXdt%2FY%2FcBuRrfhNB0FEXE29JqvtYp1YflOLdWJHQ4hzEIqLMxg2%2BUPQCHCV%2Fo9fgKnb9%2FK43fi27wZvRCBk67AR%2B3ntml7Aq4Xtm4s3w&X-Amz-Signature=acbf3b6b66f7d62998fca2529aa7ea5cc9086eb43355b8c379fbf155f7d40850&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIDGWBS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd1M8gvMre10Wj82wbVmb6basa9t4pMHB47CfGemRTxAiARyMZ%2BHKhFJkyhB%2BeQwnmzF6%2FzcQSLluF%2BY3yQwqbjiCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKuG3wPPRl5SvCgcKtwDxX8wgwT8qZexOkya7oo8VqjGxRYVZVld%2Fs50FwJrTvptjYys9nDCODZNGkHcvAb%2FPtcqSGfwCVzVwYXJHdj75AvRRhiqcT3sW7nJnOB2%2FJihoxXWBB46e%2FhalFMeMmsPUugk76WejR5xQNusxN0uwei8AME%2F7fdTh71WvUIc7YNy2WJAFo5eTbSjSuyOjA578TSLNk7ragaVVe4VAoLduk%2F72%2BeqFJ4mrY6GxHsb%2BmLtd5ld3kYl7%2BelRwVnr2H6L0bZCe%2Fv%2Fwz037DxQ%2F%2Fu67jM%2FhKBemrcputos35bzBFwbtuxb9IZdbY%2BkOWekzYkb8WoHwfIv7nOKxG%2FcccXb%2FiYULEiiBz3%2BBElVzb8EEZFgWSUYqNf3QYnE4czv2tpFvGWzrkh6ecyoVsstvr3i6LV6q6IArx3Piz11RRulvuOpq1rG1eRLS1oJnVC8B3dvbVjGikMZSLwVAUYucw94oU7w44jIepqp%2Frjk1iUiQidHFQCXsMv5DhnYjyWFNQ%2FoDKbBSAMUCPf5hq%2F8%2BziEKy9mtTYiixOBBuQ%2F%2Bhs%2Fw3qb%2BCCBt6OIxGB3zBObHEXqoQZ%2FlaM%2FiPJYZ1FJf%2FhthOa9W%2FgueDyUwhuI1YlBUybajY%2Ft3JmrCcshPcwr8P9vAY6pgEc0N9FKaktShNCcO3HsZQC5czRyNAzx3YDcy7g5HLEl%2F0qrTCNi3AxUmETj6d5A%2FQnqPe3fF1cJHEfSD7j6nailgCMJvcKUNN8s%2F6zz4IQo8%2BC79q6fcmSjXdt%2FY%2FcBuRrfhNB0FEXE29JqvtYp1YflOLdWJHQ4hzEIqLMxg2%2BUPQCHCV%2Fo9fgKnb9%2FK43fi27wZvRCBk67AR%2B3ntml7Aq4Xtm4s3w&X-Amz-Signature=50263aeb5e2e0fb2a5aaa5b30536583a0c8dfab149251665b4e731ec04ff549a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFIDGWBS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd1M8gvMre10Wj82wbVmb6basa9t4pMHB47CfGemRTxAiARyMZ%2BHKhFJkyhB%2BeQwnmzF6%2FzcQSLluF%2BY3yQwqbjiCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKuG3wPPRl5SvCgcKtwDxX8wgwT8qZexOkya7oo8VqjGxRYVZVld%2Fs50FwJrTvptjYys9nDCODZNGkHcvAb%2FPtcqSGfwCVzVwYXJHdj75AvRRhiqcT3sW7nJnOB2%2FJihoxXWBB46e%2FhalFMeMmsPUugk76WejR5xQNusxN0uwei8AME%2F7fdTh71WvUIc7YNy2WJAFo5eTbSjSuyOjA578TSLNk7ragaVVe4VAoLduk%2F72%2BeqFJ4mrY6GxHsb%2BmLtd5ld3kYl7%2BelRwVnr2H6L0bZCe%2Fv%2Fwz037DxQ%2F%2Fu67jM%2FhKBemrcputos35bzBFwbtuxb9IZdbY%2BkOWekzYkb8WoHwfIv7nOKxG%2FcccXb%2FiYULEiiBz3%2BBElVzb8EEZFgWSUYqNf3QYnE4czv2tpFvGWzrkh6ecyoVsstvr3i6LV6q6IArx3Piz11RRulvuOpq1rG1eRLS1oJnVC8B3dvbVjGikMZSLwVAUYucw94oU7w44jIepqp%2Frjk1iUiQidHFQCXsMv5DhnYjyWFNQ%2FoDKbBSAMUCPf5hq%2F8%2BziEKy9mtTYiixOBBuQ%2F%2Bhs%2Fw3qb%2BCCBt6OIxGB3zBObHEXqoQZ%2FlaM%2FiPJYZ1FJf%2FhthOa9W%2FgueDyUwhuI1YlBUybajY%2Ft3JmrCcshPcwr8P9vAY6pgEc0N9FKaktShNCcO3HsZQC5czRyNAzx3YDcy7g5HLEl%2F0qrTCNi3AxUmETj6d5A%2FQnqPe3fF1cJHEfSD7j6nailgCMJvcKUNN8s%2F6zz4IQo8%2BC79q6fcmSjXdt%2FY%2FcBuRrfhNB0FEXE29JqvtYp1YflOLdWJHQ4hzEIqLMxg2%2BUPQCHCV%2Fo9fgKnb9%2FK43fi27wZvRCBk67AR%2B3ntml7Aq4Xtm4s3w&X-Amz-Signature=121e5c959ab6763abb09764c86bc8cf7fe7e710004edacfd6ca1b88bc4eb3c02&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
