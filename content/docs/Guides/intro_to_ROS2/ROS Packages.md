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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPTSJS4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCzZExmotdhMgJnzhAEBSl1FkqR17ST%2BacFrlh7JcSVFQIhAPuI48brpqq3Sa1BMBXeuMD1Oj2RO85TVWPnAHACqU6bKv8DCDAQABoMNjM3NDIzMTgzODA1Igygv%2FSmmtruTo%2Bn%2BsUq3AOat6zUNO0IwxQcSag5DtjZ3qHxPUvYNbm68nRLJayVZHVvkX22l57siRJBWKv8vj6wjD1msWN3rQJun6oOPo9cymUBVLJiEuAWvc8rsGaN%2FaDRX2x9N5dyHUMBTudS4Tan%2F0gcMp4rOO0AkcBb4f3vfRzjiCUy2LemIXTjYDr692a423JMefm6CJhgp6lMyUFWbQu75O7kVAdlxQIEBPp4wYlSggbcVf4kCjtA7DkVb%2BrXWme46kBtmbDc5I0QcJ9X1UjKNFlyBXPLGn4zqTQ3J%2BTzcO46IrboUHEl0Kfc2YiR1FypLZAijO%2F5Rb%2Bc%2FqY%2BI35fooDAkaFPR1nVeLPFOgJ5uezcphUMAIdjTLbs%2FmWwnbu4VUHfsy3R2KpzY8G90VvZwg4%2BY320FlSVT6Wh5QCOfSsWFkB8tx0fHZMSQC6jPHAYeZtUFPCH8RmQG1KK5N6w0pnxmiFk8V7%2BgJYIo42tryZEZAB8cyo4AwTLD6heAyY1s39OgSxPk6CE8LaQmfTEakWxsl1W5GsJWuiaR4hThJjwBk1TpLWp%2F3DYy6aXl%2FQKgUI6pMsTkKijYd%2F6ByXQ6z8UNHK8DMvD1M%2B0YicQBPh6JbSDyE0Sz15zmdmbIUOxfbuHX86XSjDS3szBBjqkAUCSnkDYD5EN9%2BPdFEeL1VjwgeE0awRyCB%2BhgxSxj1Ajgj4cEjaT8Y%2FGOoPHYw%2FY0w44e4RY1PgcETc1OvWuH0IGqX2drXW8qF%2FVCv2fTlKNXd5mMPcFnhXpGoMSEc7i0i%2Faz5i9J1hiKmlPYOt4Tdi4LyglnIPvg6yhYr19HtjpsPzqFgvVOxU3PhlCdkm2OtzMqq73zCakpjZxaBxTJoZJ5d5t&X-Amz-Signature=8c030c588ddc0161b9c4b469b099498b45f828510c17f59c39625ab22639496d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPTSJS4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCzZExmotdhMgJnzhAEBSl1FkqR17ST%2BacFrlh7JcSVFQIhAPuI48brpqq3Sa1BMBXeuMD1Oj2RO85TVWPnAHACqU6bKv8DCDAQABoMNjM3NDIzMTgzODA1Igygv%2FSmmtruTo%2Bn%2BsUq3AOat6zUNO0IwxQcSag5DtjZ3qHxPUvYNbm68nRLJayVZHVvkX22l57siRJBWKv8vj6wjD1msWN3rQJun6oOPo9cymUBVLJiEuAWvc8rsGaN%2FaDRX2x9N5dyHUMBTudS4Tan%2F0gcMp4rOO0AkcBb4f3vfRzjiCUy2LemIXTjYDr692a423JMefm6CJhgp6lMyUFWbQu75O7kVAdlxQIEBPp4wYlSggbcVf4kCjtA7DkVb%2BrXWme46kBtmbDc5I0QcJ9X1UjKNFlyBXPLGn4zqTQ3J%2BTzcO46IrboUHEl0Kfc2YiR1FypLZAijO%2F5Rb%2Bc%2FqY%2BI35fooDAkaFPR1nVeLPFOgJ5uezcphUMAIdjTLbs%2FmWwnbu4VUHfsy3R2KpzY8G90VvZwg4%2BY320FlSVT6Wh5QCOfSsWFkB8tx0fHZMSQC6jPHAYeZtUFPCH8RmQG1KK5N6w0pnxmiFk8V7%2BgJYIo42tryZEZAB8cyo4AwTLD6heAyY1s39OgSxPk6CE8LaQmfTEakWxsl1W5GsJWuiaR4hThJjwBk1TpLWp%2F3DYy6aXl%2FQKgUI6pMsTkKijYd%2F6ByXQ6z8UNHK8DMvD1M%2B0YicQBPh6JbSDyE0Sz15zmdmbIUOxfbuHX86XSjDS3szBBjqkAUCSnkDYD5EN9%2BPdFEeL1VjwgeE0awRyCB%2BhgxSxj1Ajgj4cEjaT8Y%2FGOoPHYw%2FY0w44e4RY1PgcETc1OvWuH0IGqX2drXW8qF%2FVCv2fTlKNXd5mMPcFnhXpGoMSEc7i0i%2Faz5i9J1hiKmlPYOt4Tdi4LyglnIPvg6yhYr19HtjpsPzqFgvVOxU3PhlCdkm2OtzMqq73zCakpjZxaBxTJoZJ5d5t&X-Amz-Signature=b44a67a021ad6d3a4171f2e96413f8f88e0dd47cd4ad376e5e7c1052987d4005&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPTSJS4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCzZExmotdhMgJnzhAEBSl1FkqR17ST%2BacFrlh7JcSVFQIhAPuI48brpqq3Sa1BMBXeuMD1Oj2RO85TVWPnAHACqU6bKv8DCDAQABoMNjM3NDIzMTgzODA1Igygv%2FSmmtruTo%2Bn%2BsUq3AOat6zUNO0IwxQcSag5DtjZ3qHxPUvYNbm68nRLJayVZHVvkX22l57siRJBWKv8vj6wjD1msWN3rQJun6oOPo9cymUBVLJiEuAWvc8rsGaN%2FaDRX2x9N5dyHUMBTudS4Tan%2F0gcMp4rOO0AkcBb4f3vfRzjiCUy2LemIXTjYDr692a423JMefm6CJhgp6lMyUFWbQu75O7kVAdlxQIEBPp4wYlSggbcVf4kCjtA7DkVb%2BrXWme46kBtmbDc5I0QcJ9X1UjKNFlyBXPLGn4zqTQ3J%2BTzcO46IrboUHEl0Kfc2YiR1FypLZAijO%2F5Rb%2Bc%2FqY%2BI35fooDAkaFPR1nVeLPFOgJ5uezcphUMAIdjTLbs%2FmWwnbu4VUHfsy3R2KpzY8G90VvZwg4%2BY320FlSVT6Wh5QCOfSsWFkB8tx0fHZMSQC6jPHAYeZtUFPCH8RmQG1KK5N6w0pnxmiFk8V7%2BgJYIo42tryZEZAB8cyo4AwTLD6heAyY1s39OgSxPk6CE8LaQmfTEakWxsl1W5GsJWuiaR4hThJjwBk1TpLWp%2F3DYy6aXl%2FQKgUI6pMsTkKijYd%2F6ByXQ6z8UNHK8DMvD1M%2B0YicQBPh6JbSDyE0Sz15zmdmbIUOxfbuHX86XSjDS3szBBjqkAUCSnkDYD5EN9%2BPdFEeL1VjwgeE0awRyCB%2BhgxSxj1Ajgj4cEjaT8Y%2FGOoPHYw%2FY0w44e4RY1PgcETc1OvWuH0IGqX2drXW8qF%2FVCv2fTlKNXd5mMPcFnhXpGoMSEc7i0i%2Faz5i9J1hiKmlPYOt4Tdi4LyglnIPvg6yhYr19HtjpsPzqFgvVOxU3PhlCdkm2OtzMqq73zCakpjZxaBxTJoZJ5d5t&X-Amz-Signature=4fe5cc5083ed76b3dbe6880fe7cb31bd5fa0751a2099d400e2717fe13519d205&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPTSJS4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCzZExmotdhMgJnzhAEBSl1FkqR17ST%2BacFrlh7JcSVFQIhAPuI48brpqq3Sa1BMBXeuMD1Oj2RO85TVWPnAHACqU6bKv8DCDAQABoMNjM3NDIzMTgzODA1Igygv%2FSmmtruTo%2Bn%2BsUq3AOat6zUNO0IwxQcSag5DtjZ3qHxPUvYNbm68nRLJayVZHVvkX22l57siRJBWKv8vj6wjD1msWN3rQJun6oOPo9cymUBVLJiEuAWvc8rsGaN%2FaDRX2x9N5dyHUMBTudS4Tan%2F0gcMp4rOO0AkcBb4f3vfRzjiCUy2LemIXTjYDr692a423JMefm6CJhgp6lMyUFWbQu75O7kVAdlxQIEBPp4wYlSggbcVf4kCjtA7DkVb%2BrXWme46kBtmbDc5I0QcJ9X1UjKNFlyBXPLGn4zqTQ3J%2BTzcO46IrboUHEl0Kfc2YiR1FypLZAijO%2F5Rb%2Bc%2FqY%2BI35fooDAkaFPR1nVeLPFOgJ5uezcphUMAIdjTLbs%2FmWwnbu4VUHfsy3R2KpzY8G90VvZwg4%2BY320FlSVT6Wh5QCOfSsWFkB8tx0fHZMSQC6jPHAYeZtUFPCH8RmQG1KK5N6w0pnxmiFk8V7%2BgJYIo42tryZEZAB8cyo4AwTLD6heAyY1s39OgSxPk6CE8LaQmfTEakWxsl1W5GsJWuiaR4hThJjwBk1TpLWp%2F3DYy6aXl%2FQKgUI6pMsTkKijYd%2F6ByXQ6z8UNHK8DMvD1M%2B0YicQBPh6JbSDyE0Sz15zmdmbIUOxfbuHX86XSjDS3szBBjqkAUCSnkDYD5EN9%2BPdFEeL1VjwgeE0awRyCB%2BhgxSxj1Ajgj4cEjaT8Y%2FGOoPHYw%2FY0w44e4RY1PgcETc1OvWuH0IGqX2drXW8qF%2FVCv2fTlKNXd5mMPcFnhXpGoMSEc7i0i%2Faz5i9J1hiKmlPYOt4Tdi4LyglnIPvg6yhYr19HtjpsPzqFgvVOxU3PhlCdkm2OtzMqq73zCakpjZxaBxTJoZJ5d5t&X-Amz-Signature=0699a170816e01e7193a653689789750e8e169d9ce0b9d95807a2df2a3cf418d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPTSJS4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCzZExmotdhMgJnzhAEBSl1FkqR17ST%2BacFrlh7JcSVFQIhAPuI48brpqq3Sa1BMBXeuMD1Oj2RO85TVWPnAHACqU6bKv8DCDAQABoMNjM3NDIzMTgzODA1Igygv%2FSmmtruTo%2Bn%2BsUq3AOat6zUNO0IwxQcSag5DtjZ3qHxPUvYNbm68nRLJayVZHVvkX22l57siRJBWKv8vj6wjD1msWN3rQJun6oOPo9cymUBVLJiEuAWvc8rsGaN%2FaDRX2x9N5dyHUMBTudS4Tan%2F0gcMp4rOO0AkcBb4f3vfRzjiCUy2LemIXTjYDr692a423JMefm6CJhgp6lMyUFWbQu75O7kVAdlxQIEBPp4wYlSggbcVf4kCjtA7DkVb%2BrXWme46kBtmbDc5I0QcJ9X1UjKNFlyBXPLGn4zqTQ3J%2BTzcO46IrboUHEl0Kfc2YiR1FypLZAijO%2F5Rb%2Bc%2FqY%2BI35fooDAkaFPR1nVeLPFOgJ5uezcphUMAIdjTLbs%2FmWwnbu4VUHfsy3R2KpzY8G90VvZwg4%2BY320FlSVT6Wh5QCOfSsWFkB8tx0fHZMSQC6jPHAYeZtUFPCH8RmQG1KK5N6w0pnxmiFk8V7%2BgJYIo42tryZEZAB8cyo4AwTLD6heAyY1s39OgSxPk6CE8LaQmfTEakWxsl1W5GsJWuiaR4hThJjwBk1TpLWp%2F3DYy6aXl%2FQKgUI6pMsTkKijYd%2F6ByXQ6z8UNHK8DMvD1M%2B0YicQBPh6JbSDyE0Sz15zmdmbIUOxfbuHX86XSjDS3szBBjqkAUCSnkDYD5EN9%2BPdFEeL1VjwgeE0awRyCB%2BhgxSxj1Ajgj4cEjaT8Y%2FGOoPHYw%2FY0w44e4RY1PgcETc1OvWuH0IGqX2drXW8qF%2FVCv2fTlKNXd5mMPcFnhXpGoMSEc7i0i%2Faz5i9J1hiKmlPYOt4Tdi4LyglnIPvg6yhYr19HtjpsPzqFgvVOxU3PhlCdkm2OtzMqq73zCakpjZxaBxTJoZJ5d5t&X-Amz-Signature=81b494d5c6adf329aa860ce191b0ff84de7a3510971582c02db8e7900c72229a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPTSJS4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCzZExmotdhMgJnzhAEBSl1FkqR17ST%2BacFrlh7JcSVFQIhAPuI48brpqq3Sa1BMBXeuMD1Oj2RO85TVWPnAHACqU6bKv8DCDAQABoMNjM3NDIzMTgzODA1Igygv%2FSmmtruTo%2Bn%2BsUq3AOat6zUNO0IwxQcSag5DtjZ3qHxPUvYNbm68nRLJayVZHVvkX22l57siRJBWKv8vj6wjD1msWN3rQJun6oOPo9cymUBVLJiEuAWvc8rsGaN%2FaDRX2x9N5dyHUMBTudS4Tan%2F0gcMp4rOO0AkcBb4f3vfRzjiCUy2LemIXTjYDr692a423JMefm6CJhgp6lMyUFWbQu75O7kVAdlxQIEBPp4wYlSggbcVf4kCjtA7DkVb%2BrXWme46kBtmbDc5I0QcJ9X1UjKNFlyBXPLGn4zqTQ3J%2BTzcO46IrboUHEl0Kfc2YiR1FypLZAijO%2F5Rb%2Bc%2FqY%2BI35fooDAkaFPR1nVeLPFOgJ5uezcphUMAIdjTLbs%2FmWwnbu4VUHfsy3R2KpzY8G90VvZwg4%2BY320FlSVT6Wh5QCOfSsWFkB8tx0fHZMSQC6jPHAYeZtUFPCH8RmQG1KK5N6w0pnxmiFk8V7%2BgJYIo42tryZEZAB8cyo4AwTLD6heAyY1s39OgSxPk6CE8LaQmfTEakWxsl1W5GsJWuiaR4hThJjwBk1TpLWp%2F3DYy6aXl%2FQKgUI6pMsTkKijYd%2F6ByXQ6z8UNHK8DMvD1M%2B0YicQBPh6JbSDyE0Sz15zmdmbIUOxfbuHX86XSjDS3szBBjqkAUCSnkDYD5EN9%2BPdFEeL1VjwgeE0awRyCB%2BhgxSxj1Ajgj4cEjaT8Y%2FGOoPHYw%2FY0w44e4RY1PgcETc1OvWuH0IGqX2drXW8qF%2FVCv2fTlKNXd5mMPcFnhXpGoMSEc7i0i%2Faz5i9J1hiKmlPYOt4Tdi4LyglnIPvg6yhYr19HtjpsPzqFgvVOxU3PhlCdkm2OtzMqq73zCakpjZxaBxTJoZJ5d5t&X-Amz-Signature=60493e777e684c247e4aba8cc9be4c193551cc5690f61dd7ce61573e7d464c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPTSJS4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCzZExmotdhMgJnzhAEBSl1FkqR17ST%2BacFrlh7JcSVFQIhAPuI48brpqq3Sa1BMBXeuMD1Oj2RO85TVWPnAHACqU6bKv8DCDAQABoMNjM3NDIzMTgzODA1Igygv%2FSmmtruTo%2Bn%2BsUq3AOat6zUNO0IwxQcSag5DtjZ3qHxPUvYNbm68nRLJayVZHVvkX22l57siRJBWKv8vj6wjD1msWN3rQJun6oOPo9cymUBVLJiEuAWvc8rsGaN%2FaDRX2x9N5dyHUMBTudS4Tan%2F0gcMp4rOO0AkcBb4f3vfRzjiCUy2LemIXTjYDr692a423JMefm6CJhgp6lMyUFWbQu75O7kVAdlxQIEBPp4wYlSggbcVf4kCjtA7DkVb%2BrXWme46kBtmbDc5I0QcJ9X1UjKNFlyBXPLGn4zqTQ3J%2BTzcO46IrboUHEl0Kfc2YiR1FypLZAijO%2F5Rb%2Bc%2FqY%2BI35fooDAkaFPR1nVeLPFOgJ5uezcphUMAIdjTLbs%2FmWwnbu4VUHfsy3R2KpzY8G90VvZwg4%2BY320FlSVT6Wh5QCOfSsWFkB8tx0fHZMSQC6jPHAYeZtUFPCH8RmQG1KK5N6w0pnxmiFk8V7%2BgJYIo42tryZEZAB8cyo4AwTLD6heAyY1s39OgSxPk6CE8LaQmfTEakWxsl1W5GsJWuiaR4hThJjwBk1TpLWp%2F3DYy6aXl%2FQKgUI6pMsTkKijYd%2F6ByXQ6z8UNHK8DMvD1M%2B0YicQBPh6JbSDyE0Sz15zmdmbIUOxfbuHX86XSjDS3szBBjqkAUCSnkDYD5EN9%2BPdFEeL1VjwgeE0awRyCB%2BhgxSxj1Ajgj4cEjaT8Y%2FGOoPHYw%2FY0w44e4RY1PgcETc1OvWuH0IGqX2drXW8qF%2FVCv2fTlKNXd5mMPcFnhXpGoMSEc7i0i%2Faz5i9J1hiKmlPYOt4Tdi4LyglnIPvg6yhYr19HtjpsPzqFgvVOxU3PhlCdkm2OtzMqq73zCakpjZxaBxTJoZJ5d5t&X-Amz-Signature=fd74c43fc74c8263814bbc30b3cb2fcb762cfe106adc79cd1393e1f3c5ef9c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
