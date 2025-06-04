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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKJQYWN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCxdnQAT3Rrv0tFxqGB8MSvcTfHilFvH1LPCvmJ%2FU1uYAIhALb7ok6mp0b%2B0N1kFFGM68EiJ4tHmsAR7mGLExwAi7HsKv8DCDQQABoMNjM3NDIzMTgzODA1IgwOpKPQVoLGC9o9ddkq3ANqiSO8HHlPUkf2X5hzumVuaR4F6EkiQV3%2FIvAP%2BnDXmyuz%2F9WcB0xvPpjdxKnKVdtgHHpyEBhnEkdLs2kXphZiJpKI0U3022FpqrHNAq6VKQeIMwzi2Z4YI4I5eOPAbqMj4PxUoqDfHdTT1zkOmlog0mJFdXw5szu%2FLM%2BOYan7%2F9wSM9qy26WyRGN%2F6%2BU3gBB5%2FjvlH%2Bny8Ql05Kowyaqv9kMpdRN%2BSZvDc3trkBEEql5D58SuFPb4SYNsy1fNZqen%2FlToBpq3gsFGAVC4IGI6XOSF%2FhfWHXGLMaOBadK8zGjhSGbm%2F04X2TGbxQxhvyoj4n1I5oYEC4nnXSXsdzgdpugG1oSjSzrqRWCCWGEoqZ4nZIKFCyXx0kgIsyLXy2HJQj1G74b8zaOVKYEsCpIwGM0bERp4S7PZ%2BTHLFiBEhrKQCn%2FR49i8W%2F8lEH%2FQIfaTO%2FCI2pWWfjp%2BfHoCIJsUziopueFdBfEHk5yyL7s4ALZwMHfhDYJM1skIZaRzMKZ5jKk4SEuQrH791jPZxrKPyCZUs4HhUYvtZSy2kBwmw7NR9H5PXn%2B1367CQ9sM8XD8JqRydw09Ja0eYb02eG50l3JkVgzm%2BMLxhaw%2B4MotkMuPQ1QRFG0kyFhQjzD3rYLCBjqkAU%2F1GKyH00ay0yqq4X6aKrFadq%2F0Nd82Ouyfg4FYVIbz1L5SXFJm1vqZFIuBpooN6KUtgiL1k9PGqTLls1l4eW%2BOfS3mfv%2FPck5%2FH1DCbzwE3dQWIHHxb13LKRe83HP1cLWQ0P%2BRsYQL32FbagpYCWOZkz8nmHqUr1VKDSRbGQeRELvXB4K%2Bu2Rl08GkqpRDxLzM0J3PYxi0VZ1y9EM6n7oJSpnc&X-Amz-Signature=4cbc25f842a5cede0774b21c1d60a5052dc123354bda3dd308e619f463681716&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKJQYWN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCxdnQAT3Rrv0tFxqGB8MSvcTfHilFvH1LPCvmJ%2FU1uYAIhALb7ok6mp0b%2B0N1kFFGM68EiJ4tHmsAR7mGLExwAi7HsKv8DCDQQABoMNjM3NDIzMTgzODA1IgwOpKPQVoLGC9o9ddkq3ANqiSO8HHlPUkf2X5hzumVuaR4F6EkiQV3%2FIvAP%2BnDXmyuz%2F9WcB0xvPpjdxKnKVdtgHHpyEBhnEkdLs2kXphZiJpKI0U3022FpqrHNAq6VKQeIMwzi2Z4YI4I5eOPAbqMj4PxUoqDfHdTT1zkOmlog0mJFdXw5szu%2FLM%2BOYan7%2F9wSM9qy26WyRGN%2F6%2BU3gBB5%2FjvlH%2Bny8Ql05Kowyaqv9kMpdRN%2BSZvDc3trkBEEql5D58SuFPb4SYNsy1fNZqen%2FlToBpq3gsFGAVC4IGI6XOSF%2FhfWHXGLMaOBadK8zGjhSGbm%2F04X2TGbxQxhvyoj4n1I5oYEC4nnXSXsdzgdpugG1oSjSzrqRWCCWGEoqZ4nZIKFCyXx0kgIsyLXy2HJQj1G74b8zaOVKYEsCpIwGM0bERp4S7PZ%2BTHLFiBEhrKQCn%2FR49i8W%2F8lEH%2FQIfaTO%2FCI2pWWfjp%2BfHoCIJsUziopueFdBfEHk5yyL7s4ALZwMHfhDYJM1skIZaRzMKZ5jKk4SEuQrH791jPZxrKPyCZUs4HhUYvtZSy2kBwmw7NR9H5PXn%2B1367CQ9sM8XD8JqRydw09Ja0eYb02eG50l3JkVgzm%2BMLxhaw%2B4MotkMuPQ1QRFG0kyFhQjzD3rYLCBjqkAU%2F1GKyH00ay0yqq4X6aKrFadq%2F0Nd82Ouyfg4FYVIbz1L5SXFJm1vqZFIuBpooN6KUtgiL1k9PGqTLls1l4eW%2BOfS3mfv%2FPck5%2FH1DCbzwE3dQWIHHxb13LKRe83HP1cLWQ0P%2BRsYQL32FbagpYCWOZkz8nmHqUr1VKDSRbGQeRELvXB4K%2Bu2Rl08GkqpRDxLzM0J3PYxi0VZ1y9EM6n7oJSpnc&X-Amz-Signature=ccb1104fe36397d89f7d9dd73a994d2b5a47748f204a31de46cf71e928fbd513&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKJQYWN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCxdnQAT3Rrv0tFxqGB8MSvcTfHilFvH1LPCvmJ%2FU1uYAIhALb7ok6mp0b%2B0N1kFFGM68EiJ4tHmsAR7mGLExwAi7HsKv8DCDQQABoMNjM3NDIzMTgzODA1IgwOpKPQVoLGC9o9ddkq3ANqiSO8HHlPUkf2X5hzumVuaR4F6EkiQV3%2FIvAP%2BnDXmyuz%2F9WcB0xvPpjdxKnKVdtgHHpyEBhnEkdLs2kXphZiJpKI0U3022FpqrHNAq6VKQeIMwzi2Z4YI4I5eOPAbqMj4PxUoqDfHdTT1zkOmlog0mJFdXw5szu%2FLM%2BOYan7%2F9wSM9qy26WyRGN%2F6%2BU3gBB5%2FjvlH%2Bny8Ql05Kowyaqv9kMpdRN%2BSZvDc3trkBEEql5D58SuFPb4SYNsy1fNZqen%2FlToBpq3gsFGAVC4IGI6XOSF%2FhfWHXGLMaOBadK8zGjhSGbm%2F04X2TGbxQxhvyoj4n1I5oYEC4nnXSXsdzgdpugG1oSjSzrqRWCCWGEoqZ4nZIKFCyXx0kgIsyLXy2HJQj1G74b8zaOVKYEsCpIwGM0bERp4S7PZ%2BTHLFiBEhrKQCn%2FR49i8W%2F8lEH%2FQIfaTO%2FCI2pWWfjp%2BfHoCIJsUziopueFdBfEHk5yyL7s4ALZwMHfhDYJM1skIZaRzMKZ5jKk4SEuQrH791jPZxrKPyCZUs4HhUYvtZSy2kBwmw7NR9H5PXn%2B1367CQ9sM8XD8JqRydw09Ja0eYb02eG50l3JkVgzm%2BMLxhaw%2B4MotkMuPQ1QRFG0kyFhQjzD3rYLCBjqkAU%2F1GKyH00ay0yqq4X6aKrFadq%2F0Nd82Ouyfg4FYVIbz1L5SXFJm1vqZFIuBpooN6KUtgiL1k9PGqTLls1l4eW%2BOfS3mfv%2FPck5%2FH1DCbzwE3dQWIHHxb13LKRe83HP1cLWQ0P%2BRsYQL32FbagpYCWOZkz8nmHqUr1VKDSRbGQeRELvXB4K%2Bu2Rl08GkqpRDxLzM0J3PYxi0VZ1y9EM6n7oJSpnc&X-Amz-Signature=0bf6d60fca5565fd85ed1a30e18368f39b197937084084077ffab4198174c30e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKJQYWN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCxdnQAT3Rrv0tFxqGB8MSvcTfHilFvH1LPCvmJ%2FU1uYAIhALb7ok6mp0b%2B0N1kFFGM68EiJ4tHmsAR7mGLExwAi7HsKv8DCDQQABoMNjM3NDIzMTgzODA1IgwOpKPQVoLGC9o9ddkq3ANqiSO8HHlPUkf2X5hzumVuaR4F6EkiQV3%2FIvAP%2BnDXmyuz%2F9WcB0xvPpjdxKnKVdtgHHpyEBhnEkdLs2kXphZiJpKI0U3022FpqrHNAq6VKQeIMwzi2Z4YI4I5eOPAbqMj4PxUoqDfHdTT1zkOmlog0mJFdXw5szu%2FLM%2BOYan7%2F9wSM9qy26WyRGN%2F6%2BU3gBB5%2FjvlH%2Bny8Ql05Kowyaqv9kMpdRN%2BSZvDc3trkBEEql5D58SuFPb4SYNsy1fNZqen%2FlToBpq3gsFGAVC4IGI6XOSF%2FhfWHXGLMaOBadK8zGjhSGbm%2F04X2TGbxQxhvyoj4n1I5oYEC4nnXSXsdzgdpugG1oSjSzrqRWCCWGEoqZ4nZIKFCyXx0kgIsyLXy2HJQj1G74b8zaOVKYEsCpIwGM0bERp4S7PZ%2BTHLFiBEhrKQCn%2FR49i8W%2F8lEH%2FQIfaTO%2FCI2pWWfjp%2BfHoCIJsUziopueFdBfEHk5yyL7s4ALZwMHfhDYJM1skIZaRzMKZ5jKk4SEuQrH791jPZxrKPyCZUs4HhUYvtZSy2kBwmw7NR9H5PXn%2B1367CQ9sM8XD8JqRydw09Ja0eYb02eG50l3JkVgzm%2BMLxhaw%2B4MotkMuPQ1QRFG0kyFhQjzD3rYLCBjqkAU%2F1GKyH00ay0yqq4X6aKrFadq%2F0Nd82Ouyfg4FYVIbz1L5SXFJm1vqZFIuBpooN6KUtgiL1k9PGqTLls1l4eW%2BOfS3mfv%2FPck5%2FH1DCbzwE3dQWIHHxb13LKRe83HP1cLWQ0P%2BRsYQL32FbagpYCWOZkz8nmHqUr1VKDSRbGQeRELvXB4K%2Bu2Rl08GkqpRDxLzM0J3PYxi0VZ1y9EM6n7oJSpnc&X-Amz-Signature=1dbc92279321eb80a25a82cc1a85da45ca1a1277041b780c4d7df391f1cb258d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKJQYWN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCxdnQAT3Rrv0tFxqGB8MSvcTfHilFvH1LPCvmJ%2FU1uYAIhALb7ok6mp0b%2B0N1kFFGM68EiJ4tHmsAR7mGLExwAi7HsKv8DCDQQABoMNjM3NDIzMTgzODA1IgwOpKPQVoLGC9o9ddkq3ANqiSO8HHlPUkf2X5hzumVuaR4F6EkiQV3%2FIvAP%2BnDXmyuz%2F9WcB0xvPpjdxKnKVdtgHHpyEBhnEkdLs2kXphZiJpKI0U3022FpqrHNAq6VKQeIMwzi2Z4YI4I5eOPAbqMj4PxUoqDfHdTT1zkOmlog0mJFdXw5szu%2FLM%2BOYan7%2F9wSM9qy26WyRGN%2F6%2BU3gBB5%2FjvlH%2Bny8Ql05Kowyaqv9kMpdRN%2BSZvDc3trkBEEql5D58SuFPb4SYNsy1fNZqen%2FlToBpq3gsFGAVC4IGI6XOSF%2FhfWHXGLMaOBadK8zGjhSGbm%2F04X2TGbxQxhvyoj4n1I5oYEC4nnXSXsdzgdpugG1oSjSzrqRWCCWGEoqZ4nZIKFCyXx0kgIsyLXy2HJQj1G74b8zaOVKYEsCpIwGM0bERp4S7PZ%2BTHLFiBEhrKQCn%2FR49i8W%2F8lEH%2FQIfaTO%2FCI2pWWfjp%2BfHoCIJsUziopueFdBfEHk5yyL7s4ALZwMHfhDYJM1skIZaRzMKZ5jKk4SEuQrH791jPZxrKPyCZUs4HhUYvtZSy2kBwmw7NR9H5PXn%2B1367CQ9sM8XD8JqRydw09Ja0eYb02eG50l3JkVgzm%2BMLxhaw%2B4MotkMuPQ1QRFG0kyFhQjzD3rYLCBjqkAU%2F1GKyH00ay0yqq4X6aKrFadq%2F0Nd82Ouyfg4FYVIbz1L5SXFJm1vqZFIuBpooN6KUtgiL1k9PGqTLls1l4eW%2BOfS3mfv%2FPck5%2FH1DCbzwE3dQWIHHxb13LKRe83HP1cLWQ0P%2BRsYQL32FbagpYCWOZkz8nmHqUr1VKDSRbGQeRELvXB4K%2Bu2Rl08GkqpRDxLzM0J3PYxi0VZ1y9EM6n7oJSpnc&X-Amz-Signature=97e2a454e75694d54d63b140dcb9ab9499e961752e4d9d8dedb28f839101c131&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKJQYWN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCxdnQAT3Rrv0tFxqGB8MSvcTfHilFvH1LPCvmJ%2FU1uYAIhALb7ok6mp0b%2B0N1kFFGM68EiJ4tHmsAR7mGLExwAi7HsKv8DCDQQABoMNjM3NDIzMTgzODA1IgwOpKPQVoLGC9o9ddkq3ANqiSO8HHlPUkf2X5hzumVuaR4F6EkiQV3%2FIvAP%2BnDXmyuz%2F9WcB0xvPpjdxKnKVdtgHHpyEBhnEkdLs2kXphZiJpKI0U3022FpqrHNAq6VKQeIMwzi2Z4YI4I5eOPAbqMj4PxUoqDfHdTT1zkOmlog0mJFdXw5szu%2FLM%2BOYan7%2F9wSM9qy26WyRGN%2F6%2BU3gBB5%2FjvlH%2Bny8Ql05Kowyaqv9kMpdRN%2BSZvDc3trkBEEql5D58SuFPb4SYNsy1fNZqen%2FlToBpq3gsFGAVC4IGI6XOSF%2FhfWHXGLMaOBadK8zGjhSGbm%2F04X2TGbxQxhvyoj4n1I5oYEC4nnXSXsdzgdpugG1oSjSzrqRWCCWGEoqZ4nZIKFCyXx0kgIsyLXy2HJQj1G74b8zaOVKYEsCpIwGM0bERp4S7PZ%2BTHLFiBEhrKQCn%2FR49i8W%2F8lEH%2FQIfaTO%2FCI2pWWfjp%2BfHoCIJsUziopueFdBfEHk5yyL7s4ALZwMHfhDYJM1skIZaRzMKZ5jKk4SEuQrH791jPZxrKPyCZUs4HhUYvtZSy2kBwmw7NR9H5PXn%2B1367CQ9sM8XD8JqRydw09Ja0eYb02eG50l3JkVgzm%2BMLxhaw%2B4MotkMuPQ1QRFG0kyFhQjzD3rYLCBjqkAU%2F1GKyH00ay0yqq4X6aKrFadq%2F0Nd82Ouyfg4FYVIbz1L5SXFJm1vqZFIuBpooN6KUtgiL1k9PGqTLls1l4eW%2BOfS3mfv%2FPck5%2FH1DCbzwE3dQWIHHxb13LKRe83HP1cLWQ0P%2BRsYQL32FbagpYCWOZkz8nmHqUr1VKDSRbGQeRELvXB4K%2Bu2Rl08GkqpRDxLzM0J3PYxi0VZ1y9EM6n7oJSpnc&X-Amz-Signature=aa8c8b2a9584bf1551fc76e5450f5d8db98a1d993217027e06de6b0fb1a34e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKJQYWN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCxdnQAT3Rrv0tFxqGB8MSvcTfHilFvH1LPCvmJ%2FU1uYAIhALb7ok6mp0b%2B0N1kFFGM68EiJ4tHmsAR7mGLExwAi7HsKv8DCDQQABoMNjM3NDIzMTgzODA1IgwOpKPQVoLGC9o9ddkq3ANqiSO8HHlPUkf2X5hzumVuaR4F6EkiQV3%2FIvAP%2BnDXmyuz%2F9WcB0xvPpjdxKnKVdtgHHpyEBhnEkdLs2kXphZiJpKI0U3022FpqrHNAq6VKQeIMwzi2Z4YI4I5eOPAbqMj4PxUoqDfHdTT1zkOmlog0mJFdXw5szu%2FLM%2BOYan7%2F9wSM9qy26WyRGN%2F6%2BU3gBB5%2FjvlH%2Bny8Ql05Kowyaqv9kMpdRN%2BSZvDc3trkBEEql5D58SuFPb4SYNsy1fNZqen%2FlToBpq3gsFGAVC4IGI6XOSF%2FhfWHXGLMaOBadK8zGjhSGbm%2F04X2TGbxQxhvyoj4n1I5oYEC4nnXSXsdzgdpugG1oSjSzrqRWCCWGEoqZ4nZIKFCyXx0kgIsyLXy2HJQj1G74b8zaOVKYEsCpIwGM0bERp4S7PZ%2BTHLFiBEhrKQCn%2FR49i8W%2F8lEH%2FQIfaTO%2FCI2pWWfjp%2BfHoCIJsUziopueFdBfEHk5yyL7s4ALZwMHfhDYJM1skIZaRzMKZ5jKk4SEuQrH791jPZxrKPyCZUs4HhUYvtZSy2kBwmw7NR9H5PXn%2B1367CQ9sM8XD8JqRydw09Ja0eYb02eG50l3JkVgzm%2BMLxhaw%2B4MotkMuPQ1QRFG0kyFhQjzD3rYLCBjqkAU%2F1GKyH00ay0yqq4X6aKrFadq%2F0Nd82Ouyfg4FYVIbz1L5SXFJm1vqZFIuBpooN6KUtgiL1k9PGqTLls1l4eW%2BOfS3mfv%2FPck5%2FH1DCbzwE3dQWIHHxb13LKRe83HP1cLWQ0P%2BRsYQL32FbagpYCWOZkz8nmHqUr1VKDSRbGQeRELvXB4K%2Bu2Rl08GkqpRDxLzM0J3PYxi0VZ1y9EM6n7oJSpnc&X-Amz-Signature=2d8ff6fcea5832bfb6483a90fce9120ff6ea42579f70429e95baaf1419e2c59c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
