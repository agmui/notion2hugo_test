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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPYOX4I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzGUByhW8CfjhQR3zqfRhVN%2FSc3%2FCmWtyzGoZuj%2FMVVwIhALPstYH%2BL4Hg7UKtKk60bAfW%2Bbws8djDvtgGdWgFTvUoKv8DCDMQABoMNjM3NDIzMTgzODA1IgyH0MaQUXl8S%2FnehzIq3AMbP%2Bl32XsmS3DEh%2FXijpPMXf9kUu25uGeYLHyNM1hqneskmHZpLi9vkAXvV7RY5PHbvBSxSuqGwxaPDVKGNSFyMjjADsqm5WL4SUsqcoll4ctWIBs7J8tTMvO5paFdj4x83%2Be6d0y%2FIKyZUAGGrfXR%2FAKGohmUHjCSPSbghyxo78KPzw3QfnG2Rq4xfG0pYGOkOfp4NsqzK8AUk1dDUB7gtwYDlVpcSfsTtjiG8c2NiGVwuJZ%2B1daMHRxB%2F0e4PawkPBd%2Fz9Hw4avNSGGT6UMAkziHLlgyS74%2FyBa80TbyhTpx9Vp0Gd97mmW7M4%2FbKDrWeDe1fly2BAOrsyI%2FphIeV%2Bf5U9p7dLhLyaaeoWEEbFjGGochHk1PuO7EIjR%2Fz6dgecwUhwuvys9S9JM8SwEg%2FFiJ2BXrpMTP%2FNSh9F%2B4PPVE6HoNmnLCWeupTY2Rs3ce5iA2TTuoMQxRD4s6E5MZAsfB6XLtrJW%2FkSH6j0eYFtGVqqBeQmgh0uuYDOX7Qd7mJqmQYn0WqP02JVaeDM5ikTnoMcx8lNyPJimSyG8nrkSTgTFYKjzsjh1x4prhZkQypjKNu56CdEot5wXrU1%2FJEZCy7ruUF2Sf5lxnNw4GcIwiuOmeWApO5Jko5zCV3vK9BjqkAdD%2BxQfxRHcb76fg9lDq8GOJfq39kLUpoR3wcXk35YxBijCsLSq10WIY28srQev2NA3UMmErQWhUqt4tgWFxs12QU73yNTHKlP3I3UNNIOWNp1xZLxXxbZ2wL%2Bwof1CP6ol6RYBLdYUgSdA%2Bv19wBfRA4e5H6L5SYt1ZxqM0ylCUjYW7Gs4D2OrxPwiRav937LeQML7K6WX3uFP2AjiPx7VL3cFo&X-Amz-Signature=fbb382e9dd563376b4f72629ab17e7178a6e1cb54e3ef138db608e4b0c7c087f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPYOX4I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzGUByhW8CfjhQR3zqfRhVN%2FSc3%2FCmWtyzGoZuj%2FMVVwIhALPstYH%2BL4Hg7UKtKk60bAfW%2Bbws8djDvtgGdWgFTvUoKv8DCDMQABoMNjM3NDIzMTgzODA1IgyH0MaQUXl8S%2FnehzIq3AMbP%2Bl32XsmS3DEh%2FXijpPMXf9kUu25uGeYLHyNM1hqneskmHZpLi9vkAXvV7RY5PHbvBSxSuqGwxaPDVKGNSFyMjjADsqm5WL4SUsqcoll4ctWIBs7J8tTMvO5paFdj4x83%2Be6d0y%2FIKyZUAGGrfXR%2FAKGohmUHjCSPSbghyxo78KPzw3QfnG2Rq4xfG0pYGOkOfp4NsqzK8AUk1dDUB7gtwYDlVpcSfsTtjiG8c2NiGVwuJZ%2B1daMHRxB%2F0e4PawkPBd%2Fz9Hw4avNSGGT6UMAkziHLlgyS74%2FyBa80TbyhTpx9Vp0Gd97mmW7M4%2FbKDrWeDe1fly2BAOrsyI%2FphIeV%2Bf5U9p7dLhLyaaeoWEEbFjGGochHk1PuO7EIjR%2Fz6dgecwUhwuvys9S9JM8SwEg%2FFiJ2BXrpMTP%2FNSh9F%2B4PPVE6HoNmnLCWeupTY2Rs3ce5iA2TTuoMQxRD4s6E5MZAsfB6XLtrJW%2FkSH6j0eYFtGVqqBeQmgh0uuYDOX7Qd7mJqmQYn0WqP02JVaeDM5ikTnoMcx8lNyPJimSyG8nrkSTgTFYKjzsjh1x4prhZkQypjKNu56CdEot5wXrU1%2FJEZCy7ruUF2Sf5lxnNw4GcIwiuOmeWApO5Jko5zCV3vK9BjqkAdD%2BxQfxRHcb76fg9lDq8GOJfq39kLUpoR3wcXk35YxBijCsLSq10WIY28srQev2NA3UMmErQWhUqt4tgWFxs12QU73yNTHKlP3I3UNNIOWNp1xZLxXxbZ2wL%2Bwof1CP6ol6RYBLdYUgSdA%2Bv19wBfRA4e5H6L5SYt1ZxqM0ylCUjYW7Gs4D2OrxPwiRav937LeQML7K6WX3uFP2AjiPx7VL3cFo&X-Amz-Signature=05fa38e6900753027ac4d4c6367a3e9153c4a6d7715896f978613e4b09909310&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPYOX4I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzGUByhW8CfjhQR3zqfRhVN%2FSc3%2FCmWtyzGoZuj%2FMVVwIhALPstYH%2BL4Hg7UKtKk60bAfW%2Bbws8djDvtgGdWgFTvUoKv8DCDMQABoMNjM3NDIzMTgzODA1IgyH0MaQUXl8S%2FnehzIq3AMbP%2Bl32XsmS3DEh%2FXijpPMXf9kUu25uGeYLHyNM1hqneskmHZpLi9vkAXvV7RY5PHbvBSxSuqGwxaPDVKGNSFyMjjADsqm5WL4SUsqcoll4ctWIBs7J8tTMvO5paFdj4x83%2Be6d0y%2FIKyZUAGGrfXR%2FAKGohmUHjCSPSbghyxo78KPzw3QfnG2Rq4xfG0pYGOkOfp4NsqzK8AUk1dDUB7gtwYDlVpcSfsTtjiG8c2NiGVwuJZ%2B1daMHRxB%2F0e4PawkPBd%2Fz9Hw4avNSGGT6UMAkziHLlgyS74%2FyBa80TbyhTpx9Vp0Gd97mmW7M4%2FbKDrWeDe1fly2BAOrsyI%2FphIeV%2Bf5U9p7dLhLyaaeoWEEbFjGGochHk1PuO7EIjR%2Fz6dgecwUhwuvys9S9JM8SwEg%2FFiJ2BXrpMTP%2FNSh9F%2B4PPVE6HoNmnLCWeupTY2Rs3ce5iA2TTuoMQxRD4s6E5MZAsfB6XLtrJW%2FkSH6j0eYFtGVqqBeQmgh0uuYDOX7Qd7mJqmQYn0WqP02JVaeDM5ikTnoMcx8lNyPJimSyG8nrkSTgTFYKjzsjh1x4prhZkQypjKNu56CdEot5wXrU1%2FJEZCy7ruUF2Sf5lxnNw4GcIwiuOmeWApO5Jko5zCV3vK9BjqkAdD%2BxQfxRHcb76fg9lDq8GOJfq39kLUpoR3wcXk35YxBijCsLSq10WIY28srQev2NA3UMmErQWhUqt4tgWFxs12QU73yNTHKlP3I3UNNIOWNp1xZLxXxbZ2wL%2Bwof1CP6ol6RYBLdYUgSdA%2Bv19wBfRA4e5H6L5SYt1ZxqM0ylCUjYW7Gs4D2OrxPwiRav937LeQML7K6WX3uFP2AjiPx7VL3cFo&X-Amz-Signature=0378b08878115cf7867f6e018f2ece8fe8a0f9c8fc429c38838db07075a272ce&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPYOX4I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzGUByhW8CfjhQR3zqfRhVN%2FSc3%2FCmWtyzGoZuj%2FMVVwIhALPstYH%2BL4Hg7UKtKk60bAfW%2Bbws8djDvtgGdWgFTvUoKv8DCDMQABoMNjM3NDIzMTgzODA1IgyH0MaQUXl8S%2FnehzIq3AMbP%2Bl32XsmS3DEh%2FXijpPMXf9kUu25uGeYLHyNM1hqneskmHZpLi9vkAXvV7RY5PHbvBSxSuqGwxaPDVKGNSFyMjjADsqm5WL4SUsqcoll4ctWIBs7J8tTMvO5paFdj4x83%2Be6d0y%2FIKyZUAGGrfXR%2FAKGohmUHjCSPSbghyxo78KPzw3QfnG2Rq4xfG0pYGOkOfp4NsqzK8AUk1dDUB7gtwYDlVpcSfsTtjiG8c2NiGVwuJZ%2B1daMHRxB%2F0e4PawkPBd%2Fz9Hw4avNSGGT6UMAkziHLlgyS74%2FyBa80TbyhTpx9Vp0Gd97mmW7M4%2FbKDrWeDe1fly2BAOrsyI%2FphIeV%2Bf5U9p7dLhLyaaeoWEEbFjGGochHk1PuO7EIjR%2Fz6dgecwUhwuvys9S9JM8SwEg%2FFiJ2BXrpMTP%2FNSh9F%2B4PPVE6HoNmnLCWeupTY2Rs3ce5iA2TTuoMQxRD4s6E5MZAsfB6XLtrJW%2FkSH6j0eYFtGVqqBeQmgh0uuYDOX7Qd7mJqmQYn0WqP02JVaeDM5ikTnoMcx8lNyPJimSyG8nrkSTgTFYKjzsjh1x4prhZkQypjKNu56CdEot5wXrU1%2FJEZCy7ruUF2Sf5lxnNw4GcIwiuOmeWApO5Jko5zCV3vK9BjqkAdD%2BxQfxRHcb76fg9lDq8GOJfq39kLUpoR3wcXk35YxBijCsLSq10WIY28srQev2NA3UMmErQWhUqt4tgWFxs12QU73yNTHKlP3I3UNNIOWNp1xZLxXxbZ2wL%2Bwof1CP6ol6RYBLdYUgSdA%2Bv19wBfRA4e5H6L5SYt1ZxqM0ylCUjYW7Gs4D2OrxPwiRav937LeQML7K6WX3uFP2AjiPx7VL3cFo&X-Amz-Signature=806ffbb288be6386f80b0bc74b3eb60a327e505bd46f8181c433f4e1f3480af5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPYOX4I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzGUByhW8CfjhQR3zqfRhVN%2FSc3%2FCmWtyzGoZuj%2FMVVwIhALPstYH%2BL4Hg7UKtKk60bAfW%2Bbws8djDvtgGdWgFTvUoKv8DCDMQABoMNjM3NDIzMTgzODA1IgyH0MaQUXl8S%2FnehzIq3AMbP%2Bl32XsmS3DEh%2FXijpPMXf9kUu25uGeYLHyNM1hqneskmHZpLi9vkAXvV7RY5PHbvBSxSuqGwxaPDVKGNSFyMjjADsqm5WL4SUsqcoll4ctWIBs7J8tTMvO5paFdj4x83%2Be6d0y%2FIKyZUAGGrfXR%2FAKGohmUHjCSPSbghyxo78KPzw3QfnG2Rq4xfG0pYGOkOfp4NsqzK8AUk1dDUB7gtwYDlVpcSfsTtjiG8c2NiGVwuJZ%2B1daMHRxB%2F0e4PawkPBd%2Fz9Hw4avNSGGT6UMAkziHLlgyS74%2FyBa80TbyhTpx9Vp0Gd97mmW7M4%2FbKDrWeDe1fly2BAOrsyI%2FphIeV%2Bf5U9p7dLhLyaaeoWEEbFjGGochHk1PuO7EIjR%2Fz6dgecwUhwuvys9S9JM8SwEg%2FFiJ2BXrpMTP%2FNSh9F%2B4PPVE6HoNmnLCWeupTY2Rs3ce5iA2TTuoMQxRD4s6E5MZAsfB6XLtrJW%2FkSH6j0eYFtGVqqBeQmgh0uuYDOX7Qd7mJqmQYn0WqP02JVaeDM5ikTnoMcx8lNyPJimSyG8nrkSTgTFYKjzsjh1x4prhZkQypjKNu56CdEot5wXrU1%2FJEZCy7ruUF2Sf5lxnNw4GcIwiuOmeWApO5Jko5zCV3vK9BjqkAdD%2BxQfxRHcb76fg9lDq8GOJfq39kLUpoR3wcXk35YxBijCsLSq10WIY28srQev2NA3UMmErQWhUqt4tgWFxs12QU73yNTHKlP3I3UNNIOWNp1xZLxXxbZ2wL%2Bwof1CP6ol6RYBLdYUgSdA%2Bv19wBfRA4e5H6L5SYt1ZxqM0ylCUjYW7Gs4D2OrxPwiRav937LeQML7K6WX3uFP2AjiPx7VL3cFo&X-Amz-Signature=4fb1e3ec71af2b6f37c12dda2092fc74141ec2e9b72668f3dd25ecaa91d67dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPYOX4I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzGUByhW8CfjhQR3zqfRhVN%2FSc3%2FCmWtyzGoZuj%2FMVVwIhALPstYH%2BL4Hg7UKtKk60bAfW%2Bbws8djDvtgGdWgFTvUoKv8DCDMQABoMNjM3NDIzMTgzODA1IgyH0MaQUXl8S%2FnehzIq3AMbP%2Bl32XsmS3DEh%2FXijpPMXf9kUu25uGeYLHyNM1hqneskmHZpLi9vkAXvV7RY5PHbvBSxSuqGwxaPDVKGNSFyMjjADsqm5WL4SUsqcoll4ctWIBs7J8tTMvO5paFdj4x83%2Be6d0y%2FIKyZUAGGrfXR%2FAKGohmUHjCSPSbghyxo78KPzw3QfnG2Rq4xfG0pYGOkOfp4NsqzK8AUk1dDUB7gtwYDlVpcSfsTtjiG8c2NiGVwuJZ%2B1daMHRxB%2F0e4PawkPBd%2Fz9Hw4avNSGGT6UMAkziHLlgyS74%2FyBa80TbyhTpx9Vp0Gd97mmW7M4%2FbKDrWeDe1fly2BAOrsyI%2FphIeV%2Bf5U9p7dLhLyaaeoWEEbFjGGochHk1PuO7EIjR%2Fz6dgecwUhwuvys9S9JM8SwEg%2FFiJ2BXrpMTP%2FNSh9F%2B4PPVE6HoNmnLCWeupTY2Rs3ce5iA2TTuoMQxRD4s6E5MZAsfB6XLtrJW%2FkSH6j0eYFtGVqqBeQmgh0uuYDOX7Qd7mJqmQYn0WqP02JVaeDM5ikTnoMcx8lNyPJimSyG8nrkSTgTFYKjzsjh1x4prhZkQypjKNu56CdEot5wXrU1%2FJEZCy7ruUF2Sf5lxnNw4GcIwiuOmeWApO5Jko5zCV3vK9BjqkAdD%2BxQfxRHcb76fg9lDq8GOJfq39kLUpoR3wcXk35YxBijCsLSq10WIY28srQev2NA3UMmErQWhUqt4tgWFxs12QU73yNTHKlP3I3UNNIOWNp1xZLxXxbZ2wL%2Bwof1CP6ol6RYBLdYUgSdA%2Bv19wBfRA4e5H6L5SYt1ZxqM0ylCUjYW7Gs4D2OrxPwiRav937LeQML7K6WX3uFP2AjiPx7VL3cFo&X-Amz-Signature=7aa8503b4a51177b772ada6f502db7167db196c36557843c7c7d8b0e3a253189&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPYOX4I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzGUByhW8CfjhQR3zqfRhVN%2FSc3%2FCmWtyzGoZuj%2FMVVwIhALPstYH%2BL4Hg7UKtKk60bAfW%2Bbws8djDvtgGdWgFTvUoKv8DCDMQABoMNjM3NDIzMTgzODA1IgyH0MaQUXl8S%2FnehzIq3AMbP%2Bl32XsmS3DEh%2FXijpPMXf9kUu25uGeYLHyNM1hqneskmHZpLi9vkAXvV7RY5PHbvBSxSuqGwxaPDVKGNSFyMjjADsqm5WL4SUsqcoll4ctWIBs7J8tTMvO5paFdj4x83%2Be6d0y%2FIKyZUAGGrfXR%2FAKGohmUHjCSPSbghyxo78KPzw3QfnG2Rq4xfG0pYGOkOfp4NsqzK8AUk1dDUB7gtwYDlVpcSfsTtjiG8c2NiGVwuJZ%2B1daMHRxB%2F0e4PawkPBd%2Fz9Hw4avNSGGT6UMAkziHLlgyS74%2FyBa80TbyhTpx9Vp0Gd97mmW7M4%2FbKDrWeDe1fly2BAOrsyI%2FphIeV%2Bf5U9p7dLhLyaaeoWEEbFjGGochHk1PuO7EIjR%2Fz6dgecwUhwuvys9S9JM8SwEg%2FFiJ2BXrpMTP%2FNSh9F%2B4PPVE6HoNmnLCWeupTY2Rs3ce5iA2TTuoMQxRD4s6E5MZAsfB6XLtrJW%2FkSH6j0eYFtGVqqBeQmgh0uuYDOX7Qd7mJqmQYn0WqP02JVaeDM5ikTnoMcx8lNyPJimSyG8nrkSTgTFYKjzsjh1x4prhZkQypjKNu56CdEot5wXrU1%2FJEZCy7ruUF2Sf5lxnNw4GcIwiuOmeWApO5Jko5zCV3vK9BjqkAdD%2BxQfxRHcb76fg9lDq8GOJfq39kLUpoR3wcXk35YxBijCsLSq10WIY28srQev2NA3UMmErQWhUqt4tgWFxs12QU73yNTHKlP3I3UNNIOWNp1xZLxXxbZ2wL%2Bwof1CP6ol6RYBLdYUgSdA%2Bv19wBfRA4e5H6L5SYt1ZxqM0ylCUjYW7Gs4D2OrxPwiRav937LeQML7K6WX3uFP2AjiPx7VL3cFo&X-Amz-Signature=c088d629391f4d05f30b16c96a733a5f071912cc0f0fe80d18f0fc100e717d52&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
