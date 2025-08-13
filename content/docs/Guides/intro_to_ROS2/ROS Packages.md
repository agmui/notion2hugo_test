---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627OWUQJ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxZi06GD3AVz5sbY%2FjNpgcljIcZ522PXPTb8U9bxBc3wIhAJqdzBHf1iU0BJg5gHQJsawNSAo2QkOBfNHZY%2Fy2sl%2B%2BKv8DCC8QABoMNjM3NDIzMTgzODA1Igz28JNb%2BLUFWidl%2F84q3AMvvGL6qipNCYT0k7khZtfNW%2BQ5z3oyu45grHjyJ%2BXHMP1TTVMYjQ4G9%2FMUOV3ZeRciyDWWLgcMByFDzsN2sCOgMhwYqscDcWpu9ZiiIJn0yG3H7Xgj3jdW7%2FnCusKfFFBHsrKxTwVXdU774T32CiXlBmOzIXI2%2F2xrA2NoNHHwE8DzOkwHbleo9czFoSdf5V31chYRRsyCBIyEEAeh%2B%2B2DC80YHhM3TEu7S2u6f2Fz8IoaCaXB3bfRNX8jWKpdMWXrPU%2BZj5OvjZyUzrcSLlyfJRAG5oRzo%2BxFUS9LwMQ7Qphe2bVMTPE2%2BK7Yn4Mr%2BN72crVywK0HSvy894MZanJXCHpD9wVhL%2FMwguWR4%2F5VVRRdDPfnsdIdfv1zm3e0eomCKyge7Rz1JNZCn%2BBGDUL3BxqlrQaVCKtnWyRAXhx%2FCydu47tRpy7X%2B7axArW1%2FaIOORzxXjXsiy4f%2F4MTSSq0TxgD3QHvu%2FxBnkRpIEI51OIQClrqnEUKSOUAJ1sdCcgchTymacFMrnuRvi%2FpYojRY%2FFjAcuLJLkc5Xk7rx8LHOWD2%2F8nm5PVnshGkNuE%2FkMQSR%2F3T3cbR8O%2Bn965QUoUVkxiK1sWYgE2Dyya8HsWOor71JQ3KvE%2BLPnTsTCDsvLEBjqkATsUofv8R5TgE6iC9lO9M7OaJuJYKOaZxbn%2BGbB37wpaPBsevHUilPKilFdalkRrX8KLkHybwx%2F%2BoJHFmD%2FjiL5p4NF9ZqgSw4Yzjau2w0SMJJ7WTTmv7843V7DGVV2pSMiS5DI1BNziqdPnCl8%2BIEC8chI3Jb8H2urnD2d7GMZlQWUPAASWhDqMnaJmsNK1lZcPSr1yUesKYCvYumPgp29%2BssOR&X-Amz-Signature=a0f130564df25489c692702783f47793162fd28288cd96158d31c1e02e795880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627OWUQJ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxZi06GD3AVz5sbY%2FjNpgcljIcZ522PXPTb8U9bxBc3wIhAJqdzBHf1iU0BJg5gHQJsawNSAo2QkOBfNHZY%2Fy2sl%2B%2BKv8DCC8QABoMNjM3NDIzMTgzODA1Igz28JNb%2BLUFWidl%2F84q3AMvvGL6qipNCYT0k7khZtfNW%2BQ5z3oyu45grHjyJ%2BXHMP1TTVMYjQ4G9%2FMUOV3ZeRciyDWWLgcMByFDzsN2sCOgMhwYqscDcWpu9ZiiIJn0yG3H7Xgj3jdW7%2FnCusKfFFBHsrKxTwVXdU774T32CiXlBmOzIXI2%2F2xrA2NoNHHwE8DzOkwHbleo9czFoSdf5V31chYRRsyCBIyEEAeh%2B%2B2DC80YHhM3TEu7S2u6f2Fz8IoaCaXB3bfRNX8jWKpdMWXrPU%2BZj5OvjZyUzrcSLlyfJRAG5oRzo%2BxFUS9LwMQ7Qphe2bVMTPE2%2BK7Yn4Mr%2BN72crVywK0HSvy894MZanJXCHpD9wVhL%2FMwguWR4%2F5VVRRdDPfnsdIdfv1zm3e0eomCKyge7Rz1JNZCn%2BBGDUL3BxqlrQaVCKtnWyRAXhx%2FCydu47tRpy7X%2B7axArW1%2FaIOORzxXjXsiy4f%2F4MTSSq0TxgD3QHvu%2FxBnkRpIEI51OIQClrqnEUKSOUAJ1sdCcgchTymacFMrnuRvi%2FpYojRY%2FFjAcuLJLkc5Xk7rx8LHOWD2%2F8nm5PVnshGkNuE%2FkMQSR%2F3T3cbR8O%2Bn965QUoUVkxiK1sWYgE2Dyya8HsWOor71JQ3KvE%2BLPnTsTCDsvLEBjqkATsUofv8R5TgE6iC9lO9M7OaJuJYKOaZxbn%2BGbB37wpaPBsevHUilPKilFdalkRrX8KLkHybwx%2F%2BoJHFmD%2FjiL5p4NF9ZqgSw4Yzjau2w0SMJJ7WTTmv7843V7DGVV2pSMiS5DI1BNziqdPnCl8%2BIEC8chI3Jb8H2urnD2d7GMZlQWUPAASWhDqMnaJmsNK1lZcPSr1yUesKYCvYumPgp29%2BssOR&X-Amz-Signature=0e4d9dc8a5c0ec101f18da1b37ceda3cbfc988f1a87a97718983a8bbe6ce059b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627OWUQJ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxZi06GD3AVz5sbY%2FjNpgcljIcZ522PXPTb8U9bxBc3wIhAJqdzBHf1iU0BJg5gHQJsawNSAo2QkOBfNHZY%2Fy2sl%2B%2BKv8DCC8QABoMNjM3NDIzMTgzODA1Igz28JNb%2BLUFWidl%2F84q3AMvvGL6qipNCYT0k7khZtfNW%2BQ5z3oyu45grHjyJ%2BXHMP1TTVMYjQ4G9%2FMUOV3ZeRciyDWWLgcMByFDzsN2sCOgMhwYqscDcWpu9ZiiIJn0yG3H7Xgj3jdW7%2FnCusKfFFBHsrKxTwVXdU774T32CiXlBmOzIXI2%2F2xrA2NoNHHwE8DzOkwHbleo9czFoSdf5V31chYRRsyCBIyEEAeh%2B%2B2DC80YHhM3TEu7S2u6f2Fz8IoaCaXB3bfRNX8jWKpdMWXrPU%2BZj5OvjZyUzrcSLlyfJRAG5oRzo%2BxFUS9LwMQ7Qphe2bVMTPE2%2BK7Yn4Mr%2BN72crVywK0HSvy894MZanJXCHpD9wVhL%2FMwguWR4%2F5VVRRdDPfnsdIdfv1zm3e0eomCKyge7Rz1JNZCn%2BBGDUL3BxqlrQaVCKtnWyRAXhx%2FCydu47tRpy7X%2B7axArW1%2FaIOORzxXjXsiy4f%2F4MTSSq0TxgD3QHvu%2FxBnkRpIEI51OIQClrqnEUKSOUAJ1sdCcgchTymacFMrnuRvi%2FpYojRY%2FFjAcuLJLkc5Xk7rx8LHOWD2%2F8nm5PVnshGkNuE%2FkMQSR%2F3T3cbR8O%2Bn965QUoUVkxiK1sWYgE2Dyya8HsWOor71JQ3KvE%2BLPnTsTCDsvLEBjqkATsUofv8R5TgE6iC9lO9M7OaJuJYKOaZxbn%2BGbB37wpaPBsevHUilPKilFdalkRrX8KLkHybwx%2F%2BoJHFmD%2FjiL5p4NF9ZqgSw4Yzjau2w0SMJJ7WTTmv7843V7DGVV2pSMiS5DI1BNziqdPnCl8%2BIEC8chI3Jb8H2urnD2d7GMZlQWUPAASWhDqMnaJmsNK1lZcPSr1yUesKYCvYumPgp29%2BssOR&X-Amz-Signature=be02dabac38f85f39161f4d90fe7126f2d72bbc3174d6a088bdd47d479cbb97b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627OWUQJ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxZi06GD3AVz5sbY%2FjNpgcljIcZ522PXPTb8U9bxBc3wIhAJqdzBHf1iU0BJg5gHQJsawNSAo2QkOBfNHZY%2Fy2sl%2B%2BKv8DCC8QABoMNjM3NDIzMTgzODA1Igz28JNb%2BLUFWidl%2F84q3AMvvGL6qipNCYT0k7khZtfNW%2BQ5z3oyu45grHjyJ%2BXHMP1TTVMYjQ4G9%2FMUOV3ZeRciyDWWLgcMByFDzsN2sCOgMhwYqscDcWpu9ZiiIJn0yG3H7Xgj3jdW7%2FnCusKfFFBHsrKxTwVXdU774T32CiXlBmOzIXI2%2F2xrA2NoNHHwE8DzOkwHbleo9czFoSdf5V31chYRRsyCBIyEEAeh%2B%2B2DC80YHhM3TEu7S2u6f2Fz8IoaCaXB3bfRNX8jWKpdMWXrPU%2BZj5OvjZyUzrcSLlyfJRAG5oRzo%2BxFUS9LwMQ7Qphe2bVMTPE2%2BK7Yn4Mr%2BN72crVywK0HSvy894MZanJXCHpD9wVhL%2FMwguWR4%2F5VVRRdDPfnsdIdfv1zm3e0eomCKyge7Rz1JNZCn%2BBGDUL3BxqlrQaVCKtnWyRAXhx%2FCydu47tRpy7X%2B7axArW1%2FaIOORzxXjXsiy4f%2F4MTSSq0TxgD3QHvu%2FxBnkRpIEI51OIQClrqnEUKSOUAJ1sdCcgchTymacFMrnuRvi%2FpYojRY%2FFjAcuLJLkc5Xk7rx8LHOWD2%2F8nm5PVnshGkNuE%2FkMQSR%2F3T3cbR8O%2Bn965QUoUVkxiK1sWYgE2Dyya8HsWOor71JQ3KvE%2BLPnTsTCDsvLEBjqkATsUofv8R5TgE6iC9lO9M7OaJuJYKOaZxbn%2BGbB37wpaPBsevHUilPKilFdalkRrX8KLkHybwx%2F%2BoJHFmD%2FjiL5p4NF9ZqgSw4Yzjau2w0SMJJ7WTTmv7843V7DGVV2pSMiS5DI1BNziqdPnCl8%2BIEC8chI3Jb8H2urnD2d7GMZlQWUPAASWhDqMnaJmsNK1lZcPSr1yUesKYCvYumPgp29%2BssOR&X-Amz-Signature=8f2fd27a974775a2e7cb6c4ae63e64ea731bb2babf2393c41fa8861c83950988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627OWUQJ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxZi06GD3AVz5sbY%2FjNpgcljIcZ522PXPTb8U9bxBc3wIhAJqdzBHf1iU0BJg5gHQJsawNSAo2QkOBfNHZY%2Fy2sl%2B%2BKv8DCC8QABoMNjM3NDIzMTgzODA1Igz28JNb%2BLUFWidl%2F84q3AMvvGL6qipNCYT0k7khZtfNW%2BQ5z3oyu45grHjyJ%2BXHMP1TTVMYjQ4G9%2FMUOV3ZeRciyDWWLgcMByFDzsN2sCOgMhwYqscDcWpu9ZiiIJn0yG3H7Xgj3jdW7%2FnCusKfFFBHsrKxTwVXdU774T32CiXlBmOzIXI2%2F2xrA2NoNHHwE8DzOkwHbleo9czFoSdf5V31chYRRsyCBIyEEAeh%2B%2B2DC80YHhM3TEu7S2u6f2Fz8IoaCaXB3bfRNX8jWKpdMWXrPU%2BZj5OvjZyUzrcSLlyfJRAG5oRzo%2BxFUS9LwMQ7Qphe2bVMTPE2%2BK7Yn4Mr%2BN72crVywK0HSvy894MZanJXCHpD9wVhL%2FMwguWR4%2F5VVRRdDPfnsdIdfv1zm3e0eomCKyge7Rz1JNZCn%2BBGDUL3BxqlrQaVCKtnWyRAXhx%2FCydu47tRpy7X%2B7axArW1%2FaIOORzxXjXsiy4f%2F4MTSSq0TxgD3QHvu%2FxBnkRpIEI51OIQClrqnEUKSOUAJ1sdCcgchTymacFMrnuRvi%2FpYojRY%2FFjAcuLJLkc5Xk7rx8LHOWD2%2F8nm5PVnshGkNuE%2FkMQSR%2F3T3cbR8O%2Bn965QUoUVkxiK1sWYgE2Dyya8HsWOor71JQ3KvE%2BLPnTsTCDsvLEBjqkATsUofv8R5TgE6iC9lO9M7OaJuJYKOaZxbn%2BGbB37wpaPBsevHUilPKilFdalkRrX8KLkHybwx%2F%2BoJHFmD%2FjiL5p4NF9ZqgSw4Yzjau2w0SMJJ7WTTmv7843V7DGVV2pSMiS5DI1BNziqdPnCl8%2BIEC8chI3Jb8H2urnD2d7GMZlQWUPAASWhDqMnaJmsNK1lZcPSr1yUesKYCvYumPgp29%2BssOR&X-Amz-Signature=89bf861687eeaef6b4337a2723d2099ae9eb99709da1e9c89c6809fb0379f816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627OWUQJ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxZi06GD3AVz5sbY%2FjNpgcljIcZ522PXPTb8U9bxBc3wIhAJqdzBHf1iU0BJg5gHQJsawNSAo2QkOBfNHZY%2Fy2sl%2B%2BKv8DCC8QABoMNjM3NDIzMTgzODA1Igz28JNb%2BLUFWidl%2F84q3AMvvGL6qipNCYT0k7khZtfNW%2BQ5z3oyu45grHjyJ%2BXHMP1TTVMYjQ4G9%2FMUOV3ZeRciyDWWLgcMByFDzsN2sCOgMhwYqscDcWpu9ZiiIJn0yG3H7Xgj3jdW7%2FnCusKfFFBHsrKxTwVXdU774T32CiXlBmOzIXI2%2F2xrA2NoNHHwE8DzOkwHbleo9czFoSdf5V31chYRRsyCBIyEEAeh%2B%2B2DC80YHhM3TEu7S2u6f2Fz8IoaCaXB3bfRNX8jWKpdMWXrPU%2BZj5OvjZyUzrcSLlyfJRAG5oRzo%2BxFUS9LwMQ7Qphe2bVMTPE2%2BK7Yn4Mr%2BN72crVywK0HSvy894MZanJXCHpD9wVhL%2FMwguWR4%2F5VVRRdDPfnsdIdfv1zm3e0eomCKyge7Rz1JNZCn%2BBGDUL3BxqlrQaVCKtnWyRAXhx%2FCydu47tRpy7X%2B7axArW1%2FaIOORzxXjXsiy4f%2F4MTSSq0TxgD3QHvu%2FxBnkRpIEI51OIQClrqnEUKSOUAJ1sdCcgchTymacFMrnuRvi%2FpYojRY%2FFjAcuLJLkc5Xk7rx8LHOWD2%2F8nm5PVnshGkNuE%2FkMQSR%2F3T3cbR8O%2Bn965QUoUVkxiK1sWYgE2Dyya8HsWOor71JQ3KvE%2BLPnTsTCDsvLEBjqkATsUofv8R5TgE6iC9lO9M7OaJuJYKOaZxbn%2BGbB37wpaPBsevHUilPKilFdalkRrX8KLkHybwx%2F%2BoJHFmD%2FjiL5p4NF9ZqgSw4Yzjau2w0SMJJ7WTTmv7843V7DGVV2pSMiS5DI1BNziqdPnCl8%2BIEC8chI3Jb8H2urnD2d7GMZlQWUPAASWhDqMnaJmsNK1lZcPSr1yUesKYCvYumPgp29%2BssOR&X-Amz-Signature=d83312b5cff465c4e8f3ee98d77dd1a66d957dfd353068823718678dd8e519bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627OWUQJ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxZi06GD3AVz5sbY%2FjNpgcljIcZ522PXPTb8U9bxBc3wIhAJqdzBHf1iU0BJg5gHQJsawNSAo2QkOBfNHZY%2Fy2sl%2B%2BKv8DCC8QABoMNjM3NDIzMTgzODA1Igz28JNb%2BLUFWidl%2F84q3AMvvGL6qipNCYT0k7khZtfNW%2BQ5z3oyu45grHjyJ%2BXHMP1TTVMYjQ4G9%2FMUOV3ZeRciyDWWLgcMByFDzsN2sCOgMhwYqscDcWpu9ZiiIJn0yG3H7Xgj3jdW7%2FnCusKfFFBHsrKxTwVXdU774T32CiXlBmOzIXI2%2F2xrA2NoNHHwE8DzOkwHbleo9czFoSdf5V31chYRRsyCBIyEEAeh%2B%2B2DC80YHhM3TEu7S2u6f2Fz8IoaCaXB3bfRNX8jWKpdMWXrPU%2BZj5OvjZyUzrcSLlyfJRAG5oRzo%2BxFUS9LwMQ7Qphe2bVMTPE2%2BK7Yn4Mr%2BN72crVywK0HSvy894MZanJXCHpD9wVhL%2FMwguWR4%2F5VVRRdDPfnsdIdfv1zm3e0eomCKyge7Rz1JNZCn%2BBGDUL3BxqlrQaVCKtnWyRAXhx%2FCydu47tRpy7X%2B7axArW1%2FaIOORzxXjXsiy4f%2F4MTSSq0TxgD3QHvu%2FxBnkRpIEI51OIQClrqnEUKSOUAJ1sdCcgchTymacFMrnuRvi%2FpYojRY%2FFjAcuLJLkc5Xk7rx8LHOWD2%2F8nm5PVnshGkNuE%2FkMQSR%2F3T3cbR8O%2Bn965QUoUVkxiK1sWYgE2Dyya8HsWOor71JQ3KvE%2BLPnTsTCDsvLEBjqkATsUofv8R5TgE6iC9lO9M7OaJuJYKOaZxbn%2BGbB37wpaPBsevHUilPKilFdalkRrX8KLkHybwx%2F%2BoJHFmD%2FjiL5p4NF9ZqgSw4Yzjau2w0SMJJ7WTTmv7843V7DGVV2pSMiS5DI1BNziqdPnCl8%2BIEC8chI3Jb8H2urnD2d7GMZlQWUPAASWhDqMnaJmsNK1lZcPSr1yUesKYCvYumPgp29%2BssOR&X-Amz-Signature=5e291ed944cfa803d62f61f3cb2d1ad9147a5c765ef2ba6de492fd4f2c323b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
