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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3XLFWQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVGTbzdN0W90yia4j7FD8cDeKcAewJBDA4zm5TNBOsAIhANy0yJBaqFBxwmebmuEM3NCwykk9vXD4nmNAZ8nrhWeTKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6RxRaNRK66qjs4EEq3ANYu9VIWGP5cqV32qqV2qkBFH%2Fd5tMZ27muywO4TgnbsUoP50ZcW7Rq4mXcpzBl9K3OkelxCy%2F7VVyE5r0Sgf1q1q6XgzBHLB%2BjyNCWS4IikV03F2TdfFjHIDrkbnuh3%2B1QYZJ2iIqvnwhTuNX7la2xJ68crIsEZbyhw0V7PsG8XI%2FAR4K%2F3iXFeAPVmjbQMks0KC460tUi7w4RBskmKqGk0WYnj90aSboTuJxVXYcmUqIu%2BKYn3ZmAnqsfgwmLbsYS9nfSZ6TUbl5jypdek0FiO%2Fu0ut7j7DPl7NKSW3dqvCFJTkzl5fLY%2BwHadnPIyhK0ykhje%2FQ8vrPm9j9Apf3KKtEEnI2pzmsEJ%2FINaHghw6DsN1hrGj6eLomtwW97%2BX9rpBl5JiQgIJIgOREbrfiqioDk2RZY1xQeAg5WNNLBHpg5cyh0xUwdHSmVR308uArMDBx9haGRtPqeKaR%2F%2Bv253bs1a6aRTe%2B%2FV16DVqmsd0U4WyzrINrdNlGXQUyXKX%2BPkN15IvZMqDQnpHZ3R6YBHQWdOb1CjvYCjbf7MzsHisy6%2BrTSXs1mL1E0n3fSQfMbFGh30tCxiEYUg2QdPRmcnCBb9rPPLlng9rztAKOz1bMzPtKBlyoB9FWfHTCe9LDEBjqkAdir86yXSnew1qaqdJn2lYZr2TCWQ5nKEQaIO8jojawYusV7PuhCRUb4TNBSr647ea5bQwwkZbc62n3OI0mGEX7X6NAuSJrWNWGqdqANSKZ8xqSk6wkXJzH4jCQrYPWE%2B4YktaE7YNGi4t7exknLaESibOD4ro0XvFmMvQPHIiMOLp5x2OHYfQOdSL%2BEwW2vf8XP9%2Fd5%2BGBSdEtoE%2FiA%2BueriR8d&X-Amz-Signature=3b08eb5f750aedf44386ea1bffbeb5f9750d8766db6a0fed43cc6bb1d1f66f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3XLFWQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVGTbzdN0W90yia4j7FD8cDeKcAewJBDA4zm5TNBOsAIhANy0yJBaqFBxwmebmuEM3NCwykk9vXD4nmNAZ8nrhWeTKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6RxRaNRK66qjs4EEq3ANYu9VIWGP5cqV32qqV2qkBFH%2Fd5tMZ27muywO4TgnbsUoP50ZcW7Rq4mXcpzBl9K3OkelxCy%2F7VVyE5r0Sgf1q1q6XgzBHLB%2BjyNCWS4IikV03F2TdfFjHIDrkbnuh3%2B1QYZJ2iIqvnwhTuNX7la2xJ68crIsEZbyhw0V7PsG8XI%2FAR4K%2F3iXFeAPVmjbQMks0KC460tUi7w4RBskmKqGk0WYnj90aSboTuJxVXYcmUqIu%2BKYn3ZmAnqsfgwmLbsYS9nfSZ6TUbl5jypdek0FiO%2Fu0ut7j7DPl7NKSW3dqvCFJTkzl5fLY%2BwHadnPIyhK0ykhje%2FQ8vrPm9j9Apf3KKtEEnI2pzmsEJ%2FINaHghw6DsN1hrGj6eLomtwW97%2BX9rpBl5JiQgIJIgOREbrfiqioDk2RZY1xQeAg5WNNLBHpg5cyh0xUwdHSmVR308uArMDBx9haGRtPqeKaR%2F%2Bv253bs1a6aRTe%2B%2FV16DVqmsd0U4WyzrINrdNlGXQUyXKX%2BPkN15IvZMqDQnpHZ3R6YBHQWdOb1CjvYCjbf7MzsHisy6%2BrTSXs1mL1E0n3fSQfMbFGh30tCxiEYUg2QdPRmcnCBb9rPPLlng9rztAKOz1bMzPtKBlyoB9FWfHTCe9LDEBjqkAdir86yXSnew1qaqdJn2lYZr2TCWQ5nKEQaIO8jojawYusV7PuhCRUb4TNBSr647ea5bQwwkZbc62n3OI0mGEX7X6NAuSJrWNWGqdqANSKZ8xqSk6wkXJzH4jCQrYPWE%2B4YktaE7YNGi4t7exknLaESibOD4ro0XvFmMvQPHIiMOLp5x2OHYfQOdSL%2BEwW2vf8XP9%2Fd5%2BGBSdEtoE%2FiA%2BueriR8d&X-Amz-Signature=bc78c85b3fb4ae5a3bca02d67dccc30048bd3eec9f88612c1dc03ba43cf4eb84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3XLFWQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVGTbzdN0W90yia4j7FD8cDeKcAewJBDA4zm5TNBOsAIhANy0yJBaqFBxwmebmuEM3NCwykk9vXD4nmNAZ8nrhWeTKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6RxRaNRK66qjs4EEq3ANYu9VIWGP5cqV32qqV2qkBFH%2Fd5tMZ27muywO4TgnbsUoP50ZcW7Rq4mXcpzBl9K3OkelxCy%2F7VVyE5r0Sgf1q1q6XgzBHLB%2BjyNCWS4IikV03F2TdfFjHIDrkbnuh3%2B1QYZJ2iIqvnwhTuNX7la2xJ68crIsEZbyhw0V7PsG8XI%2FAR4K%2F3iXFeAPVmjbQMks0KC460tUi7w4RBskmKqGk0WYnj90aSboTuJxVXYcmUqIu%2BKYn3ZmAnqsfgwmLbsYS9nfSZ6TUbl5jypdek0FiO%2Fu0ut7j7DPl7NKSW3dqvCFJTkzl5fLY%2BwHadnPIyhK0ykhje%2FQ8vrPm9j9Apf3KKtEEnI2pzmsEJ%2FINaHghw6DsN1hrGj6eLomtwW97%2BX9rpBl5JiQgIJIgOREbrfiqioDk2RZY1xQeAg5WNNLBHpg5cyh0xUwdHSmVR308uArMDBx9haGRtPqeKaR%2F%2Bv253bs1a6aRTe%2B%2FV16DVqmsd0U4WyzrINrdNlGXQUyXKX%2BPkN15IvZMqDQnpHZ3R6YBHQWdOb1CjvYCjbf7MzsHisy6%2BrTSXs1mL1E0n3fSQfMbFGh30tCxiEYUg2QdPRmcnCBb9rPPLlng9rztAKOz1bMzPtKBlyoB9FWfHTCe9LDEBjqkAdir86yXSnew1qaqdJn2lYZr2TCWQ5nKEQaIO8jojawYusV7PuhCRUb4TNBSr647ea5bQwwkZbc62n3OI0mGEX7X6NAuSJrWNWGqdqANSKZ8xqSk6wkXJzH4jCQrYPWE%2B4YktaE7YNGi4t7exknLaESibOD4ro0XvFmMvQPHIiMOLp5x2OHYfQOdSL%2BEwW2vf8XP9%2Fd5%2BGBSdEtoE%2FiA%2BueriR8d&X-Amz-Signature=86114a0c20efe7e8488fe0ec06db1fe1c681f7f3ae880a0b9b983937a8bda8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3XLFWQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVGTbzdN0W90yia4j7FD8cDeKcAewJBDA4zm5TNBOsAIhANy0yJBaqFBxwmebmuEM3NCwykk9vXD4nmNAZ8nrhWeTKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6RxRaNRK66qjs4EEq3ANYu9VIWGP5cqV32qqV2qkBFH%2Fd5tMZ27muywO4TgnbsUoP50ZcW7Rq4mXcpzBl9K3OkelxCy%2F7VVyE5r0Sgf1q1q6XgzBHLB%2BjyNCWS4IikV03F2TdfFjHIDrkbnuh3%2B1QYZJ2iIqvnwhTuNX7la2xJ68crIsEZbyhw0V7PsG8XI%2FAR4K%2F3iXFeAPVmjbQMks0KC460tUi7w4RBskmKqGk0WYnj90aSboTuJxVXYcmUqIu%2BKYn3ZmAnqsfgwmLbsYS9nfSZ6TUbl5jypdek0FiO%2Fu0ut7j7DPl7NKSW3dqvCFJTkzl5fLY%2BwHadnPIyhK0ykhje%2FQ8vrPm9j9Apf3KKtEEnI2pzmsEJ%2FINaHghw6DsN1hrGj6eLomtwW97%2BX9rpBl5JiQgIJIgOREbrfiqioDk2RZY1xQeAg5WNNLBHpg5cyh0xUwdHSmVR308uArMDBx9haGRtPqeKaR%2F%2Bv253bs1a6aRTe%2B%2FV16DVqmsd0U4WyzrINrdNlGXQUyXKX%2BPkN15IvZMqDQnpHZ3R6YBHQWdOb1CjvYCjbf7MzsHisy6%2BrTSXs1mL1E0n3fSQfMbFGh30tCxiEYUg2QdPRmcnCBb9rPPLlng9rztAKOz1bMzPtKBlyoB9FWfHTCe9LDEBjqkAdir86yXSnew1qaqdJn2lYZr2TCWQ5nKEQaIO8jojawYusV7PuhCRUb4TNBSr647ea5bQwwkZbc62n3OI0mGEX7X6NAuSJrWNWGqdqANSKZ8xqSk6wkXJzH4jCQrYPWE%2B4YktaE7YNGi4t7exknLaESibOD4ro0XvFmMvQPHIiMOLp5x2OHYfQOdSL%2BEwW2vf8XP9%2Fd5%2BGBSdEtoE%2FiA%2BueriR8d&X-Amz-Signature=c90e747196befaf7f0c511f710bca093ba64f3f3c743df1ed83d615aeef65038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3XLFWQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVGTbzdN0W90yia4j7FD8cDeKcAewJBDA4zm5TNBOsAIhANy0yJBaqFBxwmebmuEM3NCwykk9vXD4nmNAZ8nrhWeTKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6RxRaNRK66qjs4EEq3ANYu9VIWGP5cqV32qqV2qkBFH%2Fd5tMZ27muywO4TgnbsUoP50ZcW7Rq4mXcpzBl9K3OkelxCy%2F7VVyE5r0Sgf1q1q6XgzBHLB%2BjyNCWS4IikV03F2TdfFjHIDrkbnuh3%2B1QYZJ2iIqvnwhTuNX7la2xJ68crIsEZbyhw0V7PsG8XI%2FAR4K%2F3iXFeAPVmjbQMks0KC460tUi7w4RBskmKqGk0WYnj90aSboTuJxVXYcmUqIu%2BKYn3ZmAnqsfgwmLbsYS9nfSZ6TUbl5jypdek0FiO%2Fu0ut7j7DPl7NKSW3dqvCFJTkzl5fLY%2BwHadnPIyhK0ykhje%2FQ8vrPm9j9Apf3KKtEEnI2pzmsEJ%2FINaHghw6DsN1hrGj6eLomtwW97%2BX9rpBl5JiQgIJIgOREbrfiqioDk2RZY1xQeAg5WNNLBHpg5cyh0xUwdHSmVR308uArMDBx9haGRtPqeKaR%2F%2Bv253bs1a6aRTe%2B%2FV16DVqmsd0U4WyzrINrdNlGXQUyXKX%2BPkN15IvZMqDQnpHZ3R6YBHQWdOb1CjvYCjbf7MzsHisy6%2BrTSXs1mL1E0n3fSQfMbFGh30tCxiEYUg2QdPRmcnCBb9rPPLlng9rztAKOz1bMzPtKBlyoB9FWfHTCe9LDEBjqkAdir86yXSnew1qaqdJn2lYZr2TCWQ5nKEQaIO8jojawYusV7PuhCRUb4TNBSr647ea5bQwwkZbc62n3OI0mGEX7X6NAuSJrWNWGqdqANSKZ8xqSk6wkXJzH4jCQrYPWE%2B4YktaE7YNGi4t7exknLaESibOD4ro0XvFmMvQPHIiMOLp5x2OHYfQOdSL%2BEwW2vf8XP9%2Fd5%2BGBSdEtoE%2FiA%2BueriR8d&X-Amz-Signature=bf8da3136de8434c9a486de7d596e80f20db6a3ce93ed9e7c3dfcf5f3cbcbbf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3XLFWQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVGTbzdN0W90yia4j7FD8cDeKcAewJBDA4zm5TNBOsAIhANy0yJBaqFBxwmebmuEM3NCwykk9vXD4nmNAZ8nrhWeTKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6RxRaNRK66qjs4EEq3ANYu9VIWGP5cqV32qqV2qkBFH%2Fd5tMZ27muywO4TgnbsUoP50ZcW7Rq4mXcpzBl9K3OkelxCy%2F7VVyE5r0Sgf1q1q6XgzBHLB%2BjyNCWS4IikV03F2TdfFjHIDrkbnuh3%2B1QYZJ2iIqvnwhTuNX7la2xJ68crIsEZbyhw0V7PsG8XI%2FAR4K%2F3iXFeAPVmjbQMks0KC460tUi7w4RBskmKqGk0WYnj90aSboTuJxVXYcmUqIu%2BKYn3ZmAnqsfgwmLbsYS9nfSZ6TUbl5jypdek0FiO%2Fu0ut7j7DPl7NKSW3dqvCFJTkzl5fLY%2BwHadnPIyhK0ykhje%2FQ8vrPm9j9Apf3KKtEEnI2pzmsEJ%2FINaHghw6DsN1hrGj6eLomtwW97%2BX9rpBl5JiQgIJIgOREbrfiqioDk2RZY1xQeAg5WNNLBHpg5cyh0xUwdHSmVR308uArMDBx9haGRtPqeKaR%2F%2Bv253bs1a6aRTe%2B%2FV16DVqmsd0U4WyzrINrdNlGXQUyXKX%2BPkN15IvZMqDQnpHZ3R6YBHQWdOb1CjvYCjbf7MzsHisy6%2BrTSXs1mL1E0n3fSQfMbFGh30tCxiEYUg2QdPRmcnCBb9rPPLlng9rztAKOz1bMzPtKBlyoB9FWfHTCe9LDEBjqkAdir86yXSnew1qaqdJn2lYZr2TCWQ5nKEQaIO8jojawYusV7PuhCRUb4TNBSr647ea5bQwwkZbc62n3OI0mGEX7X6NAuSJrWNWGqdqANSKZ8xqSk6wkXJzH4jCQrYPWE%2B4YktaE7YNGi4t7exknLaESibOD4ro0XvFmMvQPHIiMOLp5x2OHYfQOdSL%2BEwW2vf8XP9%2Fd5%2BGBSdEtoE%2FiA%2BueriR8d&X-Amz-Signature=b6b5b5459f208ee7874251c025497ef6454ebcaa8dc68a4d95aa9ae1ab4ef5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3XLFWQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVGTbzdN0W90yia4j7FD8cDeKcAewJBDA4zm5TNBOsAIhANy0yJBaqFBxwmebmuEM3NCwykk9vXD4nmNAZ8nrhWeTKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6RxRaNRK66qjs4EEq3ANYu9VIWGP5cqV32qqV2qkBFH%2Fd5tMZ27muywO4TgnbsUoP50ZcW7Rq4mXcpzBl9K3OkelxCy%2F7VVyE5r0Sgf1q1q6XgzBHLB%2BjyNCWS4IikV03F2TdfFjHIDrkbnuh3%2B1QYZJ2iIqvnwhTuNX7la2xJ68crIsEZbyhw0V7PsG8XI%2FAR4K%2F3iXFeAPVmjbQMks0KC460tUi7w4RBskmKqGk0WYnj90aSboTuJxVXYcmUqIu%2BKYn3ZmAnqsfgwmLbsYS9nfSZ6TUbl5jypdek0FiO%2Fu0ut7j7DPl7NKSW3dqvCFJTkzl5fLY%2BwHadnPIyhK0ykhje%2FQ8vrPm9j9Apf3KKtEEnI2pzmsEJ%2FINaHghw6DsN1hrGj6eLomtwW97%2BX9rpBl5JiQgIJIgOREbrfiqioDk2RZY1xQeAg5WNNLBHpg5cyh0xUwdHSmVR308uArMDBx9haGRtPqeKaR%2F%2Bv253bs1a6aRTe%2B%2FV16DVqmsd0U4WyzrINrdNlGXQUyXKX%2BPkN15IvZMqDQnpHZ3R6YBHQWdOb1CjvYCjbf7MzsHisy6%2BrTSXs1mL1E0n3fSQfMbFGh30tCxiEYUg2QdPRmcnCBb9rPPLlng9rztAKOz1bMzPtKBlyoB9FWfHTCe9LDEBjqkAdir86yXSnew1qaqdJn2lYZr2TCWQ5nKEQaIO8jojawYusV7PuhCRUb4TNBSr647ea5bQwwkZbc62n3OI0mGEX7X6NAuSJrWNWGqdqANSKZ8xqSk6wkXJzH4jCQrYPWE%2B4YktaE7YNGi4t7exknLaESibOD4ro0XvFmMvQPHIiMOLp5x2OHYfQOdSL%2BEwW2vf8XP9%2Fd5%2BGBSdEtoE%2FiA%2BueriR8d&X-Amz-Signature=e474d17c83966c11d4f85e7353bc9107b84f84a7b99fb863f7289727d577e95f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
