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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAA2C7CM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBM18iQbZN7ZryEBNE4S17iIBl1c4y1OdCfGMljmEvpEAiEAo90bndmtb4oXu7wA35l%2FBeYWnQIUFvBXXer0l6CNXrgqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCetuEqeXYS0YrqxRSrcA9Qw7bNjDPRq6PBi5td57Hb8BoiOrxk2F2bC0GXoW%2Bvv6ajg3%2FUr3ewRiTK3GU4mGn7ndyHu5mBqVlscp2Y3zJiIvhnXgpbwsV00BoOSJlsHfESJndFmlVWFTFQC3JTKpIXKJufj%2F63vpwq0YAY63aOHxlnwkhusTigUUlr7AjJclqqkdYHGBy8XWuaRvBFHUiiW0g0gsmzXpAo4lD8SQxh7tyNdPhokcYlwsKzJ%2FZ386vxDk7ezaSkXW8F%2BCQ7xpoGghAHS9whRobtoI66sxvtnIfHbW8HSmXKdiZqU2UwP8XqSj9R8fkuWkJ7%2Bc7oc%2FpAaw7Q4xM%2FPm3pl2Axrfou0y%2FfG6HgExVwPIkDt%2FFsIA4efoFQY41AAY%2BaRd7lgVXeHciOW4A7nNgN%2Bz%2BPZ1I1v%2BbGgM9A5d5gUzfjNIIwrlmHOFuFJYcV%2Frgse5l9Frra3ei9wisaMMhtJ9F0fVv7%2FuiLbt2yXRDdqS8%2F59zP5%2FM1AUqRKhEKKTCuZ0T6IpQxlrtM4rsAMfXY7grvrF%2BGXs2O4zMh0E7udjwPEx97GXbdFPsjeT%2Bixov%2BNOzlafjQ6mzxWqxGpDUhW1CTbceW%2BxrQMF%2BAx%2FeFU5TheyWV%2BBsho94EkB5MvdW71MIuhpMAGOqUBdUjtQozePojfceXnuWrLpGrADPTugWOIIYX4u%2B9JYibM96bFMeN%2FufSVyizusRQpX2Cqnxrlh8J7t6OWCeJriQHrDoxBCHyV0O8DShlJ3rh%2Fq8eh7hK%2FnCAct4B%2BO5%2FeNwvoYYGtHQtaGfwAynH0tSdeVHN9Hh9UWuEvcA98Ptf0JRZ5ZYHr6bacReItrWbtKK7LS%2FFbQXb9fDZrtsizFAVPSHJK&X-Amz-Signature=41142e1dc14788232d96d38e052b36fe9ea0e9b764248dedd736e550652241c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAA2C7CM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBM18iQbZN7ZryEBNE4S17iIBl1c4y1OdCfGMljmEvpEAiEAo90bndmtb4oXu7wA35l%2FBeYWnQIUFvBXXer0l6CNXrgqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCetuEqeXYS0YrqxRSrcA9Qw7bNjDPRq6PBi5td57Hb8BoiOrxk2F2bC0GXoW%2Bvv6ajg3%2FUr3ewRiTK3GU4mGn7ndyHu5mBqVlscp2Y3zJiIvhnXgpbwsV00BoOSJlsHfESJndFmlVWFTFQC3JTKpIXKJufj%2F63vpwq0YAY63aOHxlnwkhusTigUUlr7AjJclqqkdYHGBy8XWuaRvBFHUiiW0g0gsmzXpAo4lD8SQxh7tyNdPhokcYlwsKzJ%2FZ386vxDk7ezaSkXW8F%2BCQ7xpoGghAHS9whRobtoI66sxvtnIfHbW8HSmXKdiZqU2UwP8XqSj9R8fkuWkJ7%2Bc7oc%2FpAaw7Q4xM%2FPm3pl2Axrfou0y%2FfG6HgExVwPIkDt%2FFsIA4efoFQY41AAY%2BaRd7lgVXeHciOW4A7nNgN%2Bz%2BPZ1I1v%2BbGgM9A5d5gUzfjNIIwrlmHOFuFJYcV%2Frgse5l9Frra3ei9wisaMMhtJ9F0fVv7%2FuiLbt2yXRDdqS8%2F59zP5%2FM1AUqRKhEKKTCuZ0T6IpQxlrtM4rsAMfXY7grvrF%2BGXs2O4zMh0E7udjwPEx97GXbdFPsjeT%2Bixov%2BNOzlafjQ6mzxWqxGpDUhW1CTbceW%2BxrQMF%2BAx%2FeFU5TheyWV%2BBsho94EkB5MvdW71MIuhpMAGOqUBdUjtQozePojfceXnuWrLpGrADPTugWOIIYX4u%2B9JYibM96bFMeN%2FufSVyizusRQpX2Cqnxrlh8J7t6OWCeJriQHrDoxBCHyV0O8DShlJ3rh%2Fq8eh7hK%2FnCAct4B%2BO5%2FeNwvoYYGtHQtaGfwAynH0tSdeVHN9Hh9UWuEvcA98Ptf0JRZ5ZYHr6bacReItrWbtKK7LS%2FFbQXb9fDZrtsizFAVPSHJK&X-Amz-Signature=edb88beeef4b9a0068fe027b946a9580983689b2b72ec8a8bf58e2c49f00cfca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAA2C7CM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBM18iQbZN7ZryEBNE4S17iIBl1c4y1OdCfGMljmEvpEAiEAo90bndmtb4oXu7wA35l%2FBeYWnQIUFvBXXer0l6CNXrgqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCetuEqeXYS0YrqxRSrcA9Qw7bNjDPRq6PBi5td57Hb8BoiOrxk2F2bC0GXoW%2Bvv6ajg3%2FUr3ewRiTK3GU4mGn7ndyHu5mBqVlscp2Y3zJiIvhnXgpbwsV00BoOSJlsHfESJndFmlVWFTFQC3JTKpIXKJufj%2F63vpwq0YAY63aOHxlnwkhusTigUUlr7AjJclqqkdYHGBy8XWuaRvBFHUiiW0g0gsmzXpAo4lD8SQxh7tyNdPhokcYlwsKzJ%2FZ386vxDk7ezaSkXW8F%2BCQ7xpoGghAHS9whRobtoI66sxvtnIfHbW8HSmXKdiZqU2UwP8XqSj9R8fkuWkJ7%2Bc7oc%2FpAaw7Q4xM%2FPm3pl2Axrfou0y%2FfG6HgExVwPIkDt%2FFsIA4efoFQY41AAY%2BaRd7lgVXeHciOW4A7nNgN%2Bz%2BPZ1I1v%2BbGgM9A5d5gUzfjNIIwrlmHOFuFJYcV%2Frgse5l9Frra3ei9wisaMMhtJ9F0fVv7%2FuiLbt2yXRDdqS8%2F59zP5%2FM1AUqRKhEKKTCuZ0T6IpQxlrtM4rsAMfXY7grvrF%2BGXs2O4zMh0E7udjwPEx97GXbdFPsjeT%2Bixov%2BNOzlafjQ6mzxWqxGpDUhW1CTbceW%2BxrQMF%2BAx%2FeFU5TheyWV%2BBsho94EkB5MvdW71MIuhpMAGOqUBdUjtQozePojfceXnuWrLpGrADPTugWOIIYX4u%2B9JYibM96bFMeN%2FufSVyizusRQpX2Cqnxrlh8J7t6OWCeJriQHrDoxBCHyV0O8DShlJ3rh%2Fq8eh7hK%2FnCAct4B%2BO5%2FeNwvoYYGtHQtaGfwAynH0tSdeVHN9Hh9UWuEvcA98Ptf0JRZ5ZYHr6bacReItrWbtKK7LS%2FFbQXb9fDZrtsizFAVPSHJK&X-Amz-Signature=f9608734768e4aed6389c33942367d62bd35053dc089d8f8746c0fc69170bdc8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAA2C7CM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBM18iQbZN7ZryEBNE4S17iIBl1c4y1OdCfGMljmEvpEAiEAo90bndmtb4oXu7wA35l%2FBeYWnQIUFvBXXer0l6CNXrgqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCetuEqeXYS0YrqxRSrcA9Qw7bNjDPRq6PBi5td57Hb8BoiOrxk2F2bC0GXoW%2Bvv6ajg3%2FUr3ewRiTK3GU4mGn7ndyHu5mBqVlscp2Y3zJiIvhnXgpbwsV00BoOSJlsHfESJndFmlVWFTFQC3JTKpIXKJufj%2F63vpwq0YAY63aOHxlnwkhusTigUUlr7AjJclqqkdYHGBy8XWuaRvBFHUiiW0g0gsmzXpAo4lD8SQxh7tyNdPhokcYlwsKzJ%2FZ386vxDk7ezaSkXW8F%2BCQ7xpoGghAHS9whRobtoI66sxvtnIfHbW8HSmXKdiZqU2UwP8XqSj9R8fkuWkJ7%2Bc7oc%2FpAaw7Q4xM%2FPm3pl2Axrfou0y%2FfG6HgExVwPIkDt%2FFsIA4efoFQY41AAY%2BaRd7lgVXeHciOW4A7nNgN%2Bz%2BPZ1I1v%2BbGgM9A5d5gUzfjNIIwrlmHOFuFJYcV%2Frgse5l9Frra3ei9wisaMMhtJ9F0fVv7%2FuiLbt2yXRDdqS8%2F59zP5%2FM1AUqRKhEKKTCuZ0T6IpQxlrtM4rsAMfXY7grvrF%2BGXs2O4zMh0E7udjwPEx97GXbdFPsjeT%2Bixov%2BNOzlafjQ6mzxWqxGpDUhW1CTbceW%2BxrQMF%2BAx%2FeFU5TheyWV%2BBsho94EkB5MvdW71MIuhpMAGOqUBdUjtQozePojfceXnuWrLpGrADPTugWOIIYX4u%2B9JYibM96bFMeN%2FufSVyizusRQpX2Cqnxrlh8J7t6OWCeJriQHrDoxBCHyV0O8DShlJ3rh%2Fq8eh7hK%2FnCAct4B%2BO5%2FeNwvoYYGtHQtaGfwAynH0tSdeVHN9Hh9UWuEvcA98Ptf0JRZ5ZYHr6bacReItrWbtKK7LS%2FFbQXb9fDZrtsizFAVPSHJK&X-Amz-Signature=a6c937b58a4565485dc4610c4d06623986152a6b4344ed454f104e17a1d92124&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAA2C7CM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBM18iQbZN7ZryEBNE4S17iIBl1c4y1OdCfGMljmEvpEAiEAo90bndmtb4oXu7wA35l%2FBeYWnQIUFvBXXer0l6CNXrgqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCetuEqeXYS0YrqxRSrcA9Qw7bNjDPRq6PBi5td57Hb8BoiOrxk2F2bC0GXoW%2Bvv6ajg3%2FUr3ewRiTK3GU4mGn7ndyHu5mBqVlscp2Y3zJiIvhnXgpbwsV00BoOSJlsHfESJndFmlVWFTFQC3JTKpIXKJufj%2F63vpwq0YAY63aOHxlnwkhusTigUUlr7AjJclqqkdYHGBy8XWuaRvBFHUiiW0g0gsmzXpAo4lD8SQxh7tyNdPhokcYlwsKzJ%2FZ386vxDk7ezaSkXW8F%2BCQ7xpoGghAHS9whRobtoI66sxvtnIfHbW8HSmXKdiZqU2UwP8XqSj9R8fkuWkJ7%2Bc7oc%2FpAaw7Q4xM%2FPm3pl2Axrfou0y%2FfG6HgExVwPIkDt%2FFsIA4efoFQY41AAY%2BaRd7lgVXeHciOW4A7nNgN%2Bz%2BPZ1I1v%2BbGgM9A5d5gUzfjNIIwrlmHOFuFJYcV%2Frgse5l9Frra3ei9wisaMMhtJ9F0fVv7%2FuiLbt2yXRDdqS8%2F59zP5%2FM1AUqRKhEKKTCuZ0T6IpQxlrtM4rsAMfXY7grvrF%2BGXs2O4zMh0E7udjwPEx97GXbdFPsjeT%2Bixov%2BNOzlafjQ6mzxWqxGpDUhW1CTbceW%2BxrQMF%2BAx%2FeFU5TheyWV%2BBsho94EkB5MvdW71MIuhpMAGOqUBdUjtQozePojfceXnuWrLpGrADPTugWOIIYX4u%2B9JYibM96bFMeN%2FufSVyizusRQpX2Cqnxrlh8J7t6OWCeJriQHrDoxBCHyV0O8DShlJ3rh%2Fq8eh7hK%2FnCAct4B%2BO5%2FeNwvoYYGtHQtaGfwAynH0tSdeVHN9Hh9UWuEvcA98Ptf0JRZ5ZYHr6bacReItrWbtKK7LS%2FFbQXb9fDZrtsizFAVPSHJK&X-Amz-Signature=c7f80892db36f4ffe3f1b5182b8ee82d7f3b49b87bad4eb3585cbfdd7ad8cc6a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAA2C7CM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBM18iQbZN7ZryEBNE4S17iIBl1c4y1OdCfGMljmEvpEAiEAo90bndmtb4oXu7wA35l%2FBeYWnQIUFvBXXer0l6CNXrgqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCetuEqeXYS0YrqxRSrcA9Qw7bNjDPRq6PBi5td57Hb8BoiOrxk2F2bC0GXoW%2Bvv6ajg3%2FUr3ewRiTK3GU4mGn7ndyHu5mBqVlscp2Y3zJiIvhnXgpbwsV00BoOSJlsHfESJndFmlVWFTFQC3JTKpIXKJufj%2F63vpwq0YAY63aOHxlnwkhusTigUUlr7AjJclqqkdYHGBy8XWuaRvBFHUiiW0g0gsmzXpAo4lD8SQxh7tyNdPhokcYlwsKzJ%2FZ386vxDk7ezaSkXW8F%2BCQ7xpoGghAHS9whRobtoI66sxvtnIfHbW8HSmXKdiZqU2UwP8XqSj9R8fkuWkJ7%2Bc7oc%2FpAaw7Q4xM%2FPm3pl2Axrfou0y%2FfG6HgExVwPIkDt%2FFsIA4efoFQY41AAY%2BaRd7lgVXeHciOW4A7nNgN%2Bz%2BPZ1I1v%2BbGgM9A5d5gUzfjNIIwrlmHOFuFJYcV%2Frgse5l9Frra3ei9wisaMMhtJ9F0fVv7%2FuiLbt2yXRDdqS8%2F59zP5%2FM1AUqRKhEKKTCuZ0T6IpQxlrtM4rsAMfXY7grvrF%2BGXs2O4zMh0E7udjwPEx97GXbdFPsjeT%2Bixov%2BNOzlafjQ6mzxWqxGpDUhW1CTbceW%2BxrQMF%2BAx%2FeFU5TheyWV%2BBsho94EkB5MvdW71MIuhpMAGOqUBdUjtQozePojfceXnuWrLpGrADPTugWOIIYX4u%2B9JYibM96bFMeN%2FufSVyizusRQpX2Cqnxrlh8J7t6OWCeJriQHrDoxBCHyV0O8DShlJ3rh%2Fq8eh7hK%2FnCAct4B%2BO5%2FeNwvoYYGtHQtaGfwAynH0tSdeVHN9Hh9UWuEvcA98Ptf0JRZ5ZYHr6bacReItrWbtKK7LS%2FFbQXb9fDZrtsizFAVPSHJK&X-Amz-Signature=52e67d4dd73dfc708c0b3d5cca58a0a56ff79d05e31f6aa4f8e2e086bd967729&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAA2C7CM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBM18iQbZN7ZryEBNE4S17iIBl1c4y1OdCfGMljmEvpEAiEAo90bndmtb4oXu7wA35l%2FBeYWnQIUFvBXXer0l6CNXrgqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCetuEqeXYS0YrqxRSrcA9Qw7bNjDPRq6PBi5td57Hb8BoiOrxk2F2bC0GXoW%2Bvv6ajg3%2FUr3ewRiTK3GU4mGn7ndyHu5mBqVlscp2Y3zJiIvhnXgpbwsV00BoOSJlsHfESJndFmlVWFTFQC3JTKpIXKJufj%2F63vpwq0YAY63aOHxlnwkhusTigUUlr7AjJclqqkdYHGBy8XWuaRvBFHUiiW0g0gsmzXpAo4lD8SQxh7tyNdPhokcYlwsKzJ%2FZ386vxDk7ezaSkXW8F%2BCQ7xpoGghAHS9whRobtoI66sxvtnIfHbW8HSmXKdiZqU2UwP8XqSj9R8fkuWkJ7%2Bc7oc%2FpAaw7Q4xM%2FPm3pl2Axrfou0y%2FfG6HgExVwPIkDt%2FFsIA4efoFQY41AAY%2BaRd7lgVXeHciOW4A7nNgN%2Bz%2BPZ1I1v%2BbGgM9A5d5gUzfjNIIwrlmHOFuFJYcV%2Frgse5l9Frra3ei9wisaMMhtJ9F0fVv7%2FuiLbt2yXRDdqS8%2F59zP5%2FM1AUqRKhEKKTCuZ0T6IpQxlrtM4rsAMfXY7grvrF%2BGXs2O4zMh0E7udjwPEx97GXbdFPsjeT%2Bixov%2BNOzlafjQ6mzxWqxGpDUhW1CTbceW%2BxrQMF%2BAx%2FeFU5TheyWV%2BBsho94EkB5MvdW71MIuhpMAGOqUBdUjtQozePojfceXnuWrLpGrADPTugWOIIYX4u%2B9JYibM96bFMeN%2FufSVyizusRQpX2Cqnxrlh8J7t6OWCeJriQHrDoxBCHyV0O8DShlJ3rh%2Fq8eh7hK%2FnCAct4B%2BO5%2FeNwvoYYGtHQtaGfwAynH0tSdeVHN9Hh9UWuEvcA98Ptf0JRZ5ZYHr6bacReItrWbtKK7LS%2FFbQXb9fDZrtsizFAVPSHJK&X-Amz-Signature=dd32e8e53ccca19a4ead9b77413e185a47c67a871f0dd1e564fa8853d79c9aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
