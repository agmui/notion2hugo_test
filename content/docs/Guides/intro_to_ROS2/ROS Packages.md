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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36733BV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4WGH%2F5C%2BnpvE3MIV%2F6wrhWfuqtjDWIuqLv%2FsmH9YWcAIhAIxuWquRvFuJWFwwZGRWwo7KdsCygRG%2FN5%2FxYsXZd%2F5LKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuVELfafQpSH2baskq3AOXr2QTphOFvQrmlTCVsO8DZ1L6GcqQhtqpHdVpumuFhjgg7NNgcChkmEVBzF0jy48wudbj5QbA5TtaXS%2FsfX0tEVsJnXAc%2BGjzeUtIQWRfrqXaXx%2FLluHQ7mQwJgWiDCl2J%2BMrWtp%2BKLVsCjZ%2BKl43DGbRk9b%2FlmAlDPQ2VB3lo0xpiXXQeQrPaJxWOtcr7dz%2B41fKPFHOo5yBc9f59pTCWppnLS9FdETD7rJF6eovT1320KFazh1VNjknmMtvHU%2BQq7PZYESATkmfJqSLj4DV73NaSql4cmT%2FioD0nVE8H9osFdDBr2Upwbeykg33witU5OILk4WlzSisN%2FLfBl2ZKO69Z6fuPpiQar8OkoHZ0LAMGpTlBGnpoiK8d%2BChLSYSnaaVknmZJc0mq08wOECdXA3CxsZ8R984CiOPPlZtfmKNEs7e4k04ON%2BRCKR7mMf43eXQ8yDos3MSb4MWZ4vGwXsO%2BM9ZrnsW7AgxDcjyng4A7ATr6BstUpwIUMKlhv9no6ZHqTlZjfGFOC9MObH%2BeIObzv4xANW%2BkCZ4rfl7GisTTvlUVMt277w918Ie%2Biu0u2i4YR3oUmPa9Wxg1FwuwZzfWx%2BFCYMpMLK1KOy23n3q3%2B%2FXD3wKCna3RzDa4pPDBjqkAeoQs%2FR5mIYRBTdGguKw5P1gkvQsoW3YYV76xzBfkdINpjEbX8JHy73fuc4RFgPyHo1Sd3wElgBwez3hOolyIpb5LShl73lS9wAU5lwkrhD9XWvCvJXPWHxTWuMYzUP%2B6nNYvtcg3ely1q2NjqfPgm3p2ohbQU%2BeKyufjbXrXPkalpyQyFcNdvYx3ilyVPPUuLBmoY1rkr3x0DC0wDPV0yy0Fbkb&X-Amz-Signature=125b8dc2dc90c4db8f23cc00057a79e677520fe3a9214dee82ba8b35eff83e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36733BV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4WGH%2F5C%2BnpvE3MIV%2F6wrhWfuqtjDWIuqLv%2FsmH9YWcAIhAIxuWquRvFuJWFwwZGRWwo7KdsCygRG%2FN5%2FxYsXZd%2F5LKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuVELfafQpSH2baskq3AOXr2QTphOFvQrmlTCVsO8DZ1L6GcqQhtqpHdVpumuFhjgg7NNgcChkmEVBzF0jy48wudbj5QbA5TtaXS%2FsfX0tEVsJnXAc%2BGjzeUtIQWRfrqXaXx%2FLluHQ7mQwJgWiDCl2J%2BMrWtp%2BKLVsCjZ%2BKl43DGbRk9b%2FlmAlDPQ2VB3lo0xpiXXQeQrPaJxWOtcr7dz%2B41fKPFHOo5yBc9f59pTCWppnLS9FdETD7rJF6eovT1320KFazh1VNjknmMtvHU%2BQq7PZYESATkmfJqSLj4DV73NaSql4cmT%2FioD0nVE8H9osFdDBr2Upwbeykg33witU5OILk4WlzSisN%2FLfBl2ZKO69Z6fuPpiQar8OkoHZ0LAMGpTlBGnpoiK8d%2BChLSYSnaaVknmZJc0mq08wOECdXA3CxsZ8R984CiOPPlZtfmKNEs7e4k04ON%2BRCKR7mMf43eXQ8yDos3MSb4MWZ4vGwXsO%2BM9ZrnsW7AgxDcjyng4A7ATr6BstUpwIUMKlhv9no6ZHqTlZjfGFOC9MObH%2BeIObzv4xANW%2BkCZ4rfl7GisTTvlUVMt277w918Ie%2Biu0u2i4YR3oUmPa9Wxg1FwuwZzfWx%2BFCYMpMLK1KOy23n3q3%2B%2FXD3wKCna3RzDa4pPDBjqkAeoQs%2FR5mIYRBTdGguKw5P1gkvQsoW3YYV76xzBfkdINpjEbX8JHy73fuc4RFgPyHo1Sd3wElgBwez3hOolyIpb5LShl73lS9wAU5lwkrhD9XWvCvJXPWHxTWuMYzUP%2B6nNYvtcg3ely1q2NjqfPgm3p2ohbQU%2BeKyufjbXrXPkalpyQyFcNdvYx3ilyVPPUuLBmoY1rkr3x0DC0wDPV0yy0Fbkb&X-Amz-Signature=14f9476bf849e45dccdd92ec547ed1b7ca8c8268d7982262904eadc880b9a8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36733BV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4WGH%2F5C%2BnpvE3MIV%2F6wrhWfuqtjDWIuqLv%2FsmH9YWcAIhAIxuWquRvFuJWFwwZGRWwo7KdsCygRG%2FN5%2FxYsXZd%2F5LKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuVELfafQpSH2baskq3AOXr2QTphOFvQrmlTCVsO8DZ1L6GcqQhtqpHdVpumuFhjgg7NNgcChkmEVBzF0jy48wudbj5QbA5TtaXS%2FsfX0tEVsJnXAc%2BGjzeUtIQWRfrqXaXx%2FLluHQ7mQwJgWiDCl2J%2BMrWtp%2BKLVsCjZ%2BKl43DGbRk9b%2FlmAlDPQ2VB3lo0xpiXXQeQrPaJxWOtcr7dz%2B41fKPFHOo5yBc9f59pTCWppnLS9FdETD7rJF6eovT1320KFazh1VNjknmMtvHU%2BQq7PZYESATkmfJqSLj4DV73NaSql4cmT%2FioD0nVE8H9osFdDBr2Upwbeykg33witU5OILk4WlzSisN%2FLfBl2ZKO69Z6fuPpiQar8OkoHZ0LAMGpTlBGnpoiK8d%2BChLSYSnaaVknmZJc0mq08wOECdXA3CxsZ8R984CiOPPlZtfmKNEs7e4k04ON%2BRCKR7mMf43eXQ8yDos3MSb4MWZ4vGwXsO%2BM9ZrnsW7AgxDcjyng4A7ATr6BstUpwIUMKlhv9no6ZHqTlZjfGFOC9MObH%2BeIObzv4xANW%2BkCZ4rfl7GisTTvlUVMt277w918Ie%2Biu0u2i4YR3oUmPa9Wxg1FwuwZzfWx%2BFCYMpMLK1KOy23n3q3%2B%2FXD3wKCna3RzDa4pPDBjqkAeoQs%2FR5mIYRBTdGguKw5P1gkvQsoW3YYV76xzBfkdINpjEbX8JHy73fuc4RFgPyHo1Sd3wElgBwez3hOolyIpb5LShl73lS9wAU5lwkrhD9XWvCvJXPWHxTWuMYzUP%2B6nNYvtcg3ely1q2NjqfPgm3p2ohbQU%2BeKyufjbXrXPkalpyQyFcNdvYx3ilyVPPUuLBmoY1rkr3x0DC0wDPV0yy0Fbkb&X-Amz-Signature=3ec19ec99c29bad52733108dfcf69accf17e77b30ee3c6610b1391fce0e5768e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36733BV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4WGH%2F5C%2BnpvE3MIV%2F6wrhWfuqtjDWIuqLv%2FsmH9YWcAIhAIxuWquRvFuJWFwwZGRWwo7KdsCygRG%2FN5%2FxYsXZd%2F5LKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuVELfafQpSH2baskq3AOXr2QTphOFvQrmlTCVsO8DZ1L6GcqQhtqpHdVpumuFhjgg7NNgcChkmEVBzF0jy48wudbj5QbA5TtaXS%2FsfX0tEVsJnXAc%2BGjzeUtIQWRfrqXaXx%2FLluHQ7mQwJgWiDCl2J%2BMrWtp%2BKLVsCjZ%2BKl43DGbRk9b%2FlmAlDPQ2VB3lo0xpiXXQeQrPaJxWOtcr7dz%2B41fKPFHOo5yBc9f59pTCWppnLS9FdETD7rJF6eovT1320KFazh1VNjknmMtvHU%2BQq7PZYESATkmfJqSLj4DV73NaSql4cmT%2FioD0nVE8H9osFdDBr2Upwbeykg33witU5OILk4WlzSisN%2FLfBl2ZKO69Z6fuPpiQar8OkoHZ0LAMGpTlBGnpoiK8d%2BChLSYSnaaVknmZJc0mq08wOECdXA3CxsZ8R984CiOPPlZtfmKNEs7e4k04ON%2BRCKR7mMf43eXQ8yDos3MSb4MWZ4vGwXsO%2BM9ZrnsW7AgxDcjyng4A7ATr6BstUpwIUMKlhv9no6ZHqTlZjfGFOC9MObH%2BeIObzv4xANW%2BkCZ4rfl7GisTTvlUVMt277w918Ie%2Biu0u2i4YR3oUmPa9Wxg1FwuwZzfWx%2BFCYMpMLK1KOy23n3q3%2B%2FXD3wKCna3RzDa4pPDBjqkAeoQs%2FR5mIYRBTdGguKw5P1gkvQsoW3YYV76xzBfkdINpjEbX8JHy73fuc4RFgPyHo1Sd3wElgBwez3hOolyIpb5LShl73lS9wAU5lwkrhD9XWvCvJXPWHxTWuMYzUP%2B6nNYvtcg3ely1q2NjqfPgm3p2ohbQU%2BeKyufjbXrXPkalpyQyFcNdvYx3ilyVPPUuLBmoY1rkr3x0DC0wDPV0yy0Fbkb&X-Amz-Signature=93736e99bbf241d088376daf9d40f059cbce4cba8d6a47bfd0750565200da25f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36733BV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4WGH%2F5C%2BnpvE3MIV%2F6wrhWfuqtjDWIuqLv%2FsmH9YWcAIhAIxuWquRvFuJWFwwZGRWwo7KdsCygRG%2FN5%2FxYsXZd%2F5LKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuVELfafQpSH2baskq3AOXr2QTphOFvQrmlTCVsO8DZ1L6GcqQhtqpHdVpumuFhjgg7NNgcChkmEVBzF0jy48wudbj5QbA5TtaXS%2FsfX0tEVsJnXAc%2BGjzeUtIQWRfrqXaXx%2FLluHQ7mQwJgWiDCl2J%2BMrWtp%2BKLVsCjZ%2BKl43DGbRk9b%2FlmAlDPQ2VB3lo0xpiXXQeQrPaJxWOtcr7dz%2B41fKPFHOo5yBc9f59pTCWppnLS9FdETD7rJF6eovT1320KFazh1VNjknmMtvHU%2BQq7PZYESATkmfJqSLj4DV73NaSql4cmT%2FioD0nVE8H9osFdDBr2Upwbeykg33witU5OILk4WlzSisN%2FLfBl2ZKO69Z6fuPpiQar8OkoHZ0LAMGpTlBGnpoiK8d%2BChLSYSnaaVknmZJc0mq08wOECdXA3CxsZ8R984CiOPPlZtfmKNEs7e4k04ON%2BRCKR7mMf43eXQ8yDos3MSb4MWZ4vGwXsO%2BM9ZrnsW7AgxDcjyng4A7ATr6BstUpwIUMKlhv9no6ZHqTlZjfGFOC9MObH%2BeIObzv4xANW%2BkCZ4rfl7GisTTvlUVMt277w918Ie%2Biu0u2i4YR3oUmPa9Wxg1FwuwZzfWx%2BFCYMpMLK1KOy23n3q3%2B%2FXD3wKCna3RzDa4pPDBjqkAeoQs%2FR5mIYRBTdGguKw5P1gkvQsoW3YYV76xzBfkdINpjEbX8JHy73fuc4RFgPyHo1Sd3wElgBwez3hOolyIpb5LShl73lS9wAU5lwkrhD9XWvCvJXPWHxTWuMYzUP%2B6nNYvtcg3ely1q2NjqfPgm3p2ohbQU%2BeKyufjbXrXPkalpyQyFcNdvYx3ilyVPPUuLBmoY1rkr3x0DC0wDPV0yy0Fbkb&X-Amz-Signature=46294935a1b41b8208cfa870d57247263a86a1983c0b66a1b93eab5a8b0a27b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36733BV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4WGH%2F5C%2BnpvE3MIV%2F6wrhWfuqtjDWIuqLv%2FsmH9YWcAIhAIxuWquRvFuJWFwwZGRWwo7KdsCygRG%2FN5%2FxYsXZd%2F5LKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuVELfafQpSH2baskq3AOXr2QTphOFvQrmlTCVsO8DZ1L6GcqQhtqpHdVpumuFhjgg7NNgcChkmEVBzF0jy48wudbj5QbA5TtaXS%2FsfX0tEVsJnXAc%2BGjzeUtIQWRfrqXaXx%2FLluHQ7mQwJgWiDCl2J%2BMrWtp%2BKLVsCjZ%2BKl43DGbRk9b%2FlmAlDPQ2VB3lo0xpiXXQeQrPaJxWOtcr7dz%2B41fKPFHOo5yBc9f59pTCWppnLS9FdETD7rJF6eovT1320KFazh1VNjknmMtvHU%2BQq7PZYESATkmfJqSLj4DV73NaSql4cmT%2FioD0nVE8H9osFdDBr2Upwbeykg33witU5OILk4WlzSisN%2FLfBl2ZKO69Z6fuPpiQar8OkoHZ0LAMGpTlBGnpoiK8d%2BChLSYSnaaVknmZJc0mq08wOECdXA3CxsZ8R984CiOPPlZtfmKNEs7e4k04ON%2BRCKR7mMf43eXQ8yDos3MSb4MWZ4vGwXsO%2BM9ZrnsW7AgxDcjyng4A7ATr6BstUpwIUMKlhv9no6ZHqTlZjfGFOC9MObH%2BeIObzv4xANW%2BkCZ4rfl7GisTTvlUVMt277w918Ie%2Biu0u2i4YR3oUmPa9Wxg1FwuwZzfWx%2BFCYMpMLK1KOy23n3q3%2B%2FXD3wKCna3RzDa4pPDBjqkAeoQs%2FR5mIYRBTdGguKw5P1gkvQsoW3YYV76xzBfkdINpjEbX8JHy73fuc4RFgPyHo1Sd3wElgBwez3hOolyIpb5LShl73lS9wAU5lwkrhD9XWvCvJXPWHxTWuMYzUP%2B6nNYvtcg3ely1q2NjqfPgm3p2ohbQU%2BeKyufjbXrXPkalpyQyFcNdvYx3ilyVPPUuLBmoY1rkr3x0DC0wDPV0yy0Fbkb&X-Amz-Signature=f2a37347e25cf60a3a462afe010274c98ed5ac1ac0ab92b5dd9a7e225226c443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36733BV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4WGH%2F5C%2BnpvE3MIV%2F6wrhWfuqtjDWIuqLv%2FsmH9YWcAIhAIxuWquRvFuJWFwwZGRWwo7KdsCygRG%2FN5%2FxYsXZd%2F5LKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuVELfafQpSH2baskq3AOXr2QTphOFvQrmlTCVsO8DZ1L6GcqQhtqpHdVpumuFhjgg7NNgcChkmEVBzF0jy48wudbj5QbA5TtaXS%2FsfX0tEVsJnXAc%2BGjzeUtIQWRfrqXaXx%2FLluHQ7mQwJgWiDCl2J%2BMrWtp%2BKLVsCjZ%2BKl43DGbRk9b%2FlmAlDPQ2VB3lo0xpiXXQeQrPaJxWOtcr7dz%2B41fKPFHOo5yBc9f59pTCWppnLS9FdETD7rJF6eovT1320KFazh1VNjknmMtvHU%2BQq7PZYESATkmfJqSLj4DV73NaSql4cmT%2FioD0nVE8H9osFdDBr2Upwbeykg33witU5OILk4WlzSisN%2FLfBl2ZKO69Z6fuPpiQar8OkoHZ0LAMGpTlBGnpoiK8d%2BChLSYSnaaVknmZJc0mq08wOECdXA3CxsZ8R984CiOPPlZtfmKNEs7e4k04ON%2BRCKR7mMf43eXQ8yDos3MSb4MWZ4vGwXsO%2BM9ZrnsW7AgxDcjyng4A7ATr6BstUpwIUMKlhv9no6ZHqTlZjfGFOC9MObH%2BeIObzv4xANW%2BkCZ4rfl7GisTTvlUVMt277w918Ie%2Biu0u2i4YR3oUmPa9Wxg1FwuwZzfWx%2BFCYMpMLK1KOy23n3q3%2B%2FXD3wKCna3RzDa4pPDBjqkAeoQs%2FR5mIYRBTdGguKw5P1gkvQsoW3YYV76xzBfkdINpjEbX8JHy73fuc4RFgPyHo1Sd3wElgBwez3hOolyIpb5LShl73lS9wAU5lwkrhD9XWvCvJXPWHxTWuMYzUP%2B6nNYvtcg3ely1q2NjqfPgm3p2ohbQU%2BeKyufjbXrXPkalpyQyFcNdvYx3ilyVPPUuLBmoY1rkr3x0DC0wDPV0yy0Fbkb&X-Amz-Signature=2598dfc7412a6c62826f957f7276de371217bd94b4e5cbf2a72815c2ca08789b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
