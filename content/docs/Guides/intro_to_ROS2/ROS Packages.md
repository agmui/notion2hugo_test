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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSUBC2Z3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvWT7S83CTXIU%2BrEB3AXFfzz%2FbK5Oq7gTaH6uJ9ja95AIgYd0qbB0cLv7tnNNw9K2h16eNog2X7s3GMI7evrdIi1gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMhw2%2BFDbNaWnB%2Bd4ircAxP0VckNupjKi6szC0hoQ7%2BjMrS8psOZtKq9n5sTO3xZ6Ai27ppl2krjfMyJelEAJjELB9vskMzIS9ZRsvjo6ODVft%2FiaB24kWieFCkYhTU%2FizIMdEUqlWdFCP6bDU9CtQQ2lw9fO4klfkYHiqCOgJzDpYA5gJYKGEORAfIe8rM6jBEaHjj7DF0GCMan2tQ8u7SCQAzYiUjUaKow9ZGALPRZry9IdRY%2FRGKEv9GRCz4SxfT0JmJnywlFip%2FvlQxA2Cd7%2BwnmLTkjfIZtJbUNYKZFB1t27uI%2FSKRsTu8k2C2lxbjjeh8RkE8J5FlNj16zlcOBXYd%2FvxS9IvzDyL58tXuZY7f0H%2B9b8YcjL%2B5eRe3y0Et4duUGplr%2B%2FwU9CA6Wvnq%2BO4bqGJj%2FqPJkV6wKar4SphkoBqDDMcSKJJ93e6MyL7hwXk4eRUfVykQNQCDzm98jzL3X6MNWxZrzW2FNGOo23gCgB50ckRVw7bzBBnbJgSsnVjNzEBM4JCT3E7lH1%2BXF2F3prLtm1W6fIIVCDyb0%2FceTTOk%2BC4FC0ZhnbkAsdqBWN9rESOSYXrUGU%2B7in%2BTOIyoNqLsHOnwWviZReaPbEuoKxWFgol9A6qceRTDMucNrfHqlxBCQ2MKnMOmx7MAGOqUB7aS0wZfwO%2BHJgHmYpOVZiafoostE%2FqBjqyRlAsXfPl8hw5nNblUrgRLUOcvzAY%2FwFY9n%2BFb%2BHzMf0zbqaruHFHwMbzvr2VE1k70Pux14%2F76BazfTSkpz42tK4GhEZtOVFk2brCp1X11Pell1fYu%2Ftz2c8Zu0GelVIT4xsf9mjvW25dp8Tp0PrpeMffuNAYQ%2BCs5fp57uKoIJY8SqSX8X7S2n3Yrz&X-Amz-Signature=95b7a5d6ffad07592f183899ac0ce86d013e658f638cba091e67ddb47b623b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSUBC2Z3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvWT7S83CTXIU%2BrEB3AXFfzz%2FbK5Oq7gTaH6uJ9ja95AIgYd0qbB0cLv7tnNNw9K2h16eNog2X7s3GMI7evrdIi1gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMhw2%2BFDbNaWnB%2Bd4ircAxP0VckNupjKi6szC0hoQ7%2BjMrS8psOZtKq9n5sTO3xZ6Ai27ppl2krjfMyJelEAJjELB9vskMzIS9ZRsvjo6ODVft%2FiaB24kWieFCkYhTU%2FizIMdEUqlWdFCP6bDU9CtQQ2lw9fO4klfkYHiqCOgJzDpYA5gJYKGEORAfIe8rM6jBEaHjj7DF0GCMan2tQ8u7SCQAzYiUjUaKow9ZGALPRZry9IdRY%2FRGKEv9GRCz4SxfT0JmJnywlFip%2FvlQxA2Cd7%2BwnmLTkjfIZtJbUNYKZFB1t27uI%2FSKRsTu8k2C2lxbjjeh8RkE8J5FlNj16zlcOBXYd%2FvxS9IvzDyL58tXuZY7f0H%2B9b8YcjL%2B5eRe3y0Et4duUGplr%2B%2FwU9CA6Wvnq%2BO4bqGJj%2FqPJkV6wKar4SphkoBqDDMcSKJJ93e6MyL7hwXk4eRUfVykQNQCDzm98jzL3X6MNWxZrzW2FNGOo23gCgB50ckRVw7bzBBnbJgSsnVjNzEBM4JCT3E7lH1%2BXF2F3prLtm1W6fIIVCDyb0%2FceTTOk%2BC4FC0ZhnbkAsdqBWN9rESOSYXrUGU%2B7in%2BTOIyoNqLsHOnwWviZReaPbEuoKxWFgol9A6qceRTDMucNrfHqlxBCQ2MKnMOmx7MAGOqUB7aS0wZfwO%2BHJgHmYpOVZiafoostE%2FqBjqyRlAsXfPl8hw5nNblUrgRLUOcvzAY%2FwFY9n%2BFb%2BHzMf0zbqaruHFHwMbzvr2VE1k70Pux14%2F76BazfTSkpz42tK4GhEZtOVFk2brCp1X11Pell1fYu%2Ftz2c8Zu0GelVIT4xsf9mjvW25dp8Tp0PrpeMffuNAYQ%2BCs5fp57uKoIJY8SqSX8X7S2n3Yrz&X-Amz-Signature=22a1db011b751a9803a5a8c0df4ecca93d007250523ffe68dfd075616fbfd8d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSUBC2Z3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvWT7S83CTXIU%2BrEB3AXFfzz%2FbK5Oq7gTaH6uJ9ja95AIgYd0qbB0cLv7tnNNw9K2h16eNog2X7s3GMI7evrdIi1gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMhw2%2BFDbNaWnB%2Bd4ircAxP0VckNupjKi6szC0hoQ7%2BjMrS8psOZtKq9n5sTO3xZ6Ai27ppl2krjfMyJelEAJjELB9vskMzIS9ZRsvjo6ODVft%2FiaB24kWieFCkYhTU%2FizIMdEUqlWdFCP6bDU9CtQQ2lw9fO4klfkYHiqCOgJzDpYA5gJYKGEORAfIe8rM6jBEaHjj7DF0GCMan2tQ8u7SCQAzYiUjUaKow9ZGALPRZry9IdRY%2FRGKEv9GRCz4SxfT0JmJnywlFip%2FvlQxA2Cd7%2BwnmLTkjfIZtJbUNYKZFB1t27uI%2FSKRsTu8k2C2lxbjjeh8RkE8J5FlNj16zlcOBXYd%2FvxS9IvzDyL58tXuZY7f0H%2B9b8YcjL%2B5eRe3y0Et4duUGplr%2B%2FwU9CA6Wvnq%2BO4bqGJj%2FqPJkV6wKar4SphkoBqDDMcSKJJ93e6MyL7hwXk4eRUfVykQNQCDzm98jzL3X6MNWxZrzW2FNGOo23gCgB50ckRVw7bzBBnbJgSsnVjNzEBM4JCT3E7lH1%2BXF2F3prLtm1W6fIIVCDyb0%2FceTTOk%2BC4FC0ZhnbkAsdqBWN9rESOSYXrUGU%2B7in%2BTOIyoNqLsHOnwWviZReaPbEuoKxWFgol9A6qceRTDMucNrfHqlxBCQ2MKnMOmx7MAGOqUB7aS0wZfwO%2BHJgHmYpOVZiafoostE%2FqBjqyRlAsXfPl8hw5nNblUrgRLUOcvzAY%2FwFY9n%2BFb%2BHzMf0zbqaruHFHwMbzvr2VE1k70Pux14%2F76BazfTSkpz42tK4GhEZtOVFk2brCp1X11Pell1fYu%2Ftz2c8Zu0GelVIT4xsf9mjvW25dp8Tp0PrpeMffuNAYQ%2BCs5fp57uKoIJY8SqSX8X7S2n3Yrz&X-Amz-Signature=51442f9dbbb94dba3da229e676688853d82a9bd822798a49ab6a07557f8cbb14&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSUBC2Z3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvWT7S83CTXIU%2BrEB3AXFfzz%2FbK5Oq7gTaH6uJ9ja95AIgYd0qbB0cLv7tnNNw9K2h16eNog2X7s3GMI7evrdIi1gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMhw2%2BFDbNaWnB%2Bd4ircAxP0VckNupjKi6szC0hoQ7%2BjMrS8psOZtKq9n5sTO3xZ6Ai27ppl2krjfMyJelEAJjELB9vskMzIS9ZRsvjo6ODVft%2FiaB24kWieFCkYhTU%2FizIMdEUqlWdFCP6bDU9CtQQ2lw9fO4klfkYHiqCOgJzDpYA5gJYKGEORAfIe8rM6jBEaHjj7DF0GCMan2tQ8u7SCQAzYiUjUaKow9ZGALPRZry9IdRY%2FRGKEv9GRCz4SxfT0JmJnywlFip%2FvlQxA2Cd7%2BwnmLTkjfIZtJbUNYKZFB1t27uI%2FSKRsTu8k2C2lxbjjeh8RkE8J5FlNj16zlcOBXYd%2FvxS9IvzDyL58tXuZY7f0H%2B9b8YcjL%2B5eRe3y0Et4duUGplr%2B%2FwU9CA6Wvnq%2BO4bqGJj%2FqPJkV6wKar4SphkoBqDDMcSKJJ93e6MyL7hwXk4eRUfVykQNQCDzm98jzL3X6MNWxZrzW2FNGOo23gCgB50ckRVw7bzBBnbJgSsnVjNzEBM4JCT3E7lH1%2BXF2F3prLtm1W6fIIVCDyb0%2FceTTOk%2BC4FC0ZhnbkAsdqBWN9rESOSYXrUGU%2B7in%2BTOIyoNqLsHOnwWviZReaPbEuoKxWFgol9A6qceRTDMucNrfHqlxBCQ2MKnMOmx7MAGOqUB7aS0wZfwO%2BHJgHmYpOVZiafoostE%2FqBjqyRlAsXfPl8hw5nNblUrgRLUOcvzAY%2FwFY9n%2BFb%2BHzMf0zbqaruHFHwMbzvr2VE1k70Pux14%2F76BazfTSkpz42tK4GhEZtOVFk2brCp1X11Pell1fYu%2Ftz2c8Zu0GelVIT4xsf9mjvW25dp8Tp0PrpeMffuNAYQ%2BCs5fp57uKoIJY8SqSX8X7S2n3Yrz&X-Amz-Signature=b33f5f5cf2d3d280f747c292b72031135f1d5b27438975fc2dd385925dd2c17f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSUBC2Z3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvWT7S83CTXIU%2BrEB3AXFfzz%2FbK5Oq7gTaH6uJ9ja95AIgYd0qbB0cLv7tnNNw9K2h16eNog2X7s3GMI7evrdIi1gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMhw2%2BFDbNaWnB%2Bd4ircAxP0VckNupjKi6szC0hoQ7%2BjMrS8psOZtKq9n5sTO3xZ6Ai27ppl2krjfMyJelEAJjELB9vskMzIS9ZRsvjo6ODVft%2FiaB24kWieFCkYhTU%2FizIMdEUqlWdFCP6bDU9CtQQ2lw9fO4klfkYHiqCOgJzDpYA5gJYKGEORAfIe8rM6jBEaHjj7DF0GCMan2tQ8u7SCQAzYiUjUaKow9ZGALPRZry9IdRY%2FRGKEv9GRCz4SxfT0JmJnywlFip%2FvlQxA2Cd7%2BwnmLTkjfIZtJbUNYKZFB1t27uI%2FSKRsTu8k2C2lxbjjeh8RkE8J5FlNj16zlcOBXYd%2FvxS9IvzDyL58tXuZY7f0H%2B9b8YcjL%2B5eRe3y0Et4duUGplr%2B%2FwU9CA6Wvnq%2BO4bqGJj%2FqPJkV6wKar4SphkoBqDDMcSKJJ93e6MyL7hwXk4eRUfVykQNQCDzm98jzL3X6MNWxZrzW2FNGOo23gCgB50ckRVw7bzBBnbJgSsnVjNzEBM4JCT3E7lH1%2BXF2F3prLtm1W6fIIVCDyb0%2FceTTOk%2BC4FC0ZhnbkAsdqBWN9rESOSYXrUGU%2B7in%2BTOIyoNqLsHOnwWviZReaPbEuoKxWFgol9A6qceRTDMucNrfHqlxBCQ2MKnMOmx7MAGOqUB7aS0wZfwO%2BHJgHmYpOVZiafoostE%2FqBjqyRlAsXfPl8hw5nNblUrgRLUOcvzAY%2FwFY9n%2BFb%2BHzMf0zbqaruHFHwMbzvr2VE1k70Pux14%2F76BazfTSkpz42tK4GhEZtOVFk2brCp1X11Pell1fYu%2Ftz2c8Zu0GelVIT4xsf9mjvW25dp8Tp0PrpeMffuNAYQ%2BCs5fp57uKoIJY8SqSX8X7S2n3Yrz&X-Amz-Signature=4bf0c89ce67f7548cbc07415e8caa00837871181e57147cf9228e36b9c2ccc30&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSUBC2Z3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvWT7S83CTXIU%2BrEB3AXFfzz%2FbK5Oq7gTaH6uJ9ja95AIgYd0qbB0cLv7tnNNw9K2h16eNog2X7s3GMI7evrdIi1gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMhw2%2BFDbNaWnB%2Bd4ircAxP0VckNupjKi6szC0hoQ7%2BjMrS8psOZtKq9n5sTO3xZ6Ai27ppl2krjfMyJelEAJjELB9vskMzIS9ZRsvjo6ODVft%2FiaB24kWieFCkYhTU%2FizIMdEUqlWdFCP6bDU9CtQQ2lw9fO4klfkYHiqCOgJzDpYA5gJYKGEORAfIe8rM6jBEaHjj7DF0GCMan2tQ8u7SCQAzYiUjUaKow9ZGALPRZry9IdRY%2FRGKEv9GRCz4SxfT0JmJnywlFip%2FvlQxA2Cd7%2BwnmLTkjfIZtJbUNYKZFB1t27uI%2FSKRsTu8k2C2lxbjjeh8RkE8J5FlNj16zlcOBXYd%2FvxS9IvzDyL58tXuZY7f0H%2B9b8YcjL%2B5eRe3y0Et4duUGplr%2B%2FwU9CA6Wvnq%2BO4bqGJj%2FqPJkV6wKar4SphkoBqDDMcSKJJ93e6MyL7hwXk4eRUfVykQNQCDzm98jzL3X6MNWxZrzW2FNGOo23gCgB50ckRVw7bzBBnbJgSsnVjNzEBM4JCT3E7lH1%2BXF2F3prLtm1W6fIIVCDyb0%2FceTTOk%2BC4FC0ZhnbkAsdqBWN9rESOSYXrUGU%2B7in%2BTOIyoNqLsHOnwWviZReaPbEuoKxWFgol9A6qceRTDMucNrfHqlxBCQ2MKnMOmx7MAGOqUB7aS0wZfwO%2BHJgHmYpOVZiafoostE%2FqBjqyRlAsXfPl8hw5nNblUrgRLUOcvzAY%2FwFY9n%2BFb%2BHzMf0zbqaruHFHwMbzvr2VE1k70Pux14%2F76BazfTSkpz42tK4GhEZtOVFk2brCp1X11Pell1fYu%2Ftz2c8Zu0GelVIT4xsf9mjvW25dp8Tp0PrpeMffuNAYQ%2BCs5fp57uKoIJY8SqSX8X7S2n3Yrz&X-Amz-Signature=3c28a75efcbebdcb46ebe3ad193826dd2874bb7cd457b3a7c362af6a211afdd3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSUBC2Z3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvWT7S83CTXIU%2BrEB3AXFfzz%2FbK5Oq7gTaH6uJ9ja95AIgYd0qbB0cLv7tnNNw9K2h16eNog2X7s3GMI7evrdIi1gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMhw2%2BFDbNaWnB%2Bd4ircAxP0VckNupjKi6szC0hoQ7%2BjMrS8psOZtKq9n5sTO3xZ6Ai27ppl2krjfMyJelEAJjELB9vskMzIS9ZRsvjo6ODVft%2FiaB24kWieFCkYhTU%2FizIMdEUqlWdFCP6bDU9CtQQ2lw9fO4klfkYHiqCOgJzDpYA5gJYKGEORAfIe8rM6jBEaHjj7DF0GCMan2tQ8u7SCQAzYiUjUaKow9ZGALPRZry9IdRY%2FRGKEv9GRCz4SxfT0JmJnywlFip%2FvlQxA2Cd7%2BwnmLTkjfIZtJbUNYKZFB1t27uI%2FSKRsTu8k2C2lxbjjeh8RkE8J5FlNj16zlcOBXYd%2FvxS9IvzDyL58tXuZY7f0H%2B9b8YcjL%2B5eRe3y0Et4duUGplr%2B%2FwU9CA6Wvnq%2BO4bqGJj%2FqPJkV6wKar4SphkoBqDDMcSKJJ93e6MyL7hwXk4eRUfVykQNQCDzm98jzL3X6MNWxZrzW2FNGOo23gCgB50ckRVw7bzBBnbJgSsnVjNzEBM4JCT3E7lH1%2BXF2F3prLtm1W6fIIVCDyb0%2FceTTOk%2BC4FC0ZhnbkAsdqBWN9rESOSYXrUGU%2B7in%2BTOIyoNqLsHOnwWviZReaPbEuoKxWFgol9A6qceRTDMucNrfHqlxBCQ2MKnMOmx7MAGOqUB7aS0wZfwO%2BHJgHmYpOVZiafoostE%2FqBjqyRlAsXfPl8hw5nNblUrgRLUOcvzAY%2FwFY9n%2BFb%2BHzMf0zbqaruHFHwMbzvr2VE1k70Pux14%2F76BazfTSkpz42tK4GhEZtOVFk2brCp1X11Pell1fYu%2Ftz2c8Zu0GelVIT4xsf9mjvW25dp8Tp0PrpeMffuNAYQ%2BCs5fp57uKoIJY8SqSX8X7S2n3Yrz&X-Amz-Signature=f5e5deeb18782bd2e004af7a87c36911099abfea47409d34af7002d0a2d8d33b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
