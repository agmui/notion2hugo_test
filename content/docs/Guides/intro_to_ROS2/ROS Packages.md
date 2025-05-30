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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJLUBJ7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbRb6LezmYmEYnycrAYeG%2BIlZVMM6ecuV%2FGIHKoev67gIgDFzAREEDLXp8saAZtzejZ2NpAckm1nxSy%2BGmE%2F%2FJAvcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdohmcKHC%2BhiFHuOyrcA9U9MlvQL0UPFE6IP5J7mIyXXyy3%2F6iAF5WBtr8nPA0g3iFhXaeXaQk5L0%2FS4riRKI0uJihNPiSC3KJGoOEFI455j6M4GKnTuZCqhdpXzG4lq1PaLyQ%2B3xLRdm1JpFyjA9PtNmHGKv1yU8EMUAwsrNhyXEvsz4zNwjU0HsVBOFoWxqfut4rfzlhrDrSUYSMAzBw5%2B%2F5uC8spVN1rKao8AwD%2FDJNG6wosSWgCamfw0jWv2cH7%2BL1STcXNxpRpYdBjSEplqVCsttvXEsWuQSgj3H2Ch7FDWOFRK5iYL7sQB%2BIITR%2FnfPIfl45MRMcP0An02G%2FqNV%2F5Ajid71HA7FOITKW2IETyP0ZgM%2BuRSYRjiE23bg1cg6lMpQl7zTwXfdtyoinzD5xhWIWqMbr6LNW7CaX98xQ6ke63uQXGBdYr23OG2nwvO%2BrG9DKHUGl6s8LDJmRlLejMjXDF0L8gj9Vx1%2BqYu7uY8VJ8XZi9B1uGdLWr85xnRv7oPFyA72FTO66iosu1bFmLASFk7AyLTrUqaSpPa3a20cgU2lA%2BWZn%2FGCxj8o1oi3t1LXznh2zMW61hgVDWCxrmznVb%2FKOyRqCsbRHYkkzDMi5RjpI3Q1vi%2FOnhUuwE2f9dWTPyI1WTMO6O5sEGOqUBHAUtSs1UYYem2sFpylUl6qaxW8llnQIoN0bCGla%2BTgLfFVB6pUZj%2ForNxzI9MndnQIhd90uvmTWFlysYE07XEXv2CcIhVbYpXBcV%2FPcLEWeUk1%2Fzv9kKaAow9qW9NtnsBcq1xAe2P9UXIxkzBOJpWom4TBFBmIcJqxHSfB4ySGeQunBygf0ArMOop2tU5aU%2BvxFYPQaIQOElE6OLpeync3dchb4E&X-Amz-Signature=54bbcdbf6a0e5c3ae7bdab415f189de3e8328cd4ac922065123a9a3ce5d4f8ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJLUBJ7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbRb6LezmYmEYnycrAYeG%2BIlZVMM6ecuV%2FGIHKoev67gIgDFzAREEDLXp8saAZtzejZ2NpAckm1nxSy%2BGmE%2F%2FJAvcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdohmcKHC%2BhiFHuOyrcA9U9MlvQL0UPFE6IP5J7mIyXXyy3%2F6iAF5WBtr8nPA0g3iFhXaeXaQk5L0%2FS4riRKI0uJihNPiSC3KJGoOEFI455j6M4GKnTuZCqhdpXzG4lq1PaLyQ%2B3xLRdm1JpFyjA9PtNmHGKv1yU8EMUAwsrNhyXEvsz4zNwjU0HsVBOFoWxqfut4rfzlhrDrSUYSMAzBw5%2B%2F5uC8spVN1rKao8AwD%2FDJNG6wosSWgCamfw0jWv2cH7%2BL1STcXNxpRpYdBjSEplqVCsttvXEsWuQSgj3H2Ch7FDWOFRK5iYL7sQB%2BIITR%2FnfPIfl45MRMcP0An02G%2FqNV%2F5Ajid71HA7FOITKW2IETyP0ZgM%2BuRSYRjiE23bg1cg6lMpQl7zTwXfdtyoinzD5xhWIWqMbr6LNW7CaX98xQ6ke63uQXGBdYr23OG2nwvO%2BrG9DKHUGl6s8LDJmRlLejMjXDF0L8gj9Vx1%2BqYu7uY8VJ8XZi9B1uGdLWr85xnRv7oPFyA72FTO66iosu1bFmLASFk7AyLTrUqaSpPa3a20cgU2lA%2BWZn%2FGCxj8o1oi3t1LXznh2zMW61hgVDWCxrmznVb%2FKOyRqCsbRHYkkzDMi5RjpI3Q1vi%2FOnhUuwE2f9dWTPyI1WTMO6O5sEGOqUBHAUtSs1UYYem2sFpylUl6qaxW8llnQIoN0bCGla%2BTgLfFVB6pUZj%2ForNxzI9MndnQIhd90uvmTWFlysYE07XEXv2CcIhVbYpXBcV%2FPcLEWeUk1%2Fzv9kKaAow9qW9NtnsBcq1xAe2P9UXIxkzBOJpWom4TBFBmIcJqxHSfB4ySGeQunBygf0ArMOop2tU5aU%2BvxFYPQaIQOElE6OLpeync3dchb4E&X-Amz-Signature=5a9f9c8f1541548190f0b5ed913915dbe1920c2b4d2b360b0cae4de3f2a792b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJLUBJ7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbRb6LezmYmEYnycrAYeG%2BIlZVMM6ecuV%2FGIHKoev67gIgDFzAREEDLXp8saAZtzejZ2NpAckm1nxSy%2BGmE%2F%2FJAvcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdohmcKHC%2BhiFHuOyrcA9U9MlvQL0UPFE6IP5J7mIyXXyy3%2F6iAF5WBtr8nPA0g3iFhXaeXaQk5L0%2FS4riRKI0uJihNPiSC3KJGoOEFI455j6M4GKnTuZCqhdpXzG4lq1PaLyQ%2B3xLRdm1JpFyjA9PtNmHGKv1yU8EMUAwsrNhyXEvsz4zNwjU0HsVBOFoWxqfut4rfzlhrDrSUYSMAzBw5%2B%2F5uC8spVN1rKao8AwD%2FDJNG6wosSWgCamfw0jWv2cH7%2BL1STcXNxpRpYdBjSEplqVCsttvXEsWuQSgj3H2Ch7FDWOFRK5iYL7sQB%2BIITR%2FnfPIfl45MRMcP0An02G%2FqNV%2F5Ajid71HA7FOITKW2IETyP0ZgM%2BuRSYRjiE23bg1cg6lMpQl7zTwXfdtyoinzD5xhWIWqMbr6LNW7CaX98xQ6ke63uQXGBdYr23OG2nwvO%2BrG9DKHUGl6s8LDJmRlLejMjXDF0L8gj9Vx1%2BqYu7uY8VJ8XZi9B1uGdLWr85xnRv7oPFyA72FTO66iosu1bFmLASFk7AyLTrUqaSpPa3a20cgU2lA%2BWZn%2FGCxj8o1oi3t1LXznh2zMW61hgVDWCxrmznVb%2FKOyRqCsbRHYkkzDMi5RjpI3Q1vi%2FOnhUuwE2f9dWTPyI1WTMO6O5sEGOqUBHAUtSs1UYYem2sFpylUl6qaxW8llnQIoN0bCGla%2BTgLfFVB6pUZj%2ForNxzI9MndnQIhd90uvmTWFlysYE07XEXv2CcIhVbYpXBcV%2FPcLEWeUk1%2Fzv9kKaAow9qW9NtnsBcq1xAe2P9UXIxkzBOJpWom4TBFBmIcJqxHSfB4ySGeQunBygf0ArMOop2tU5aU%2BvxFYPQaIQOElE6OLpeync3dchb4E&X-Amz-Signature=9e14741d188416e765cdf60024053d4ad86e8875e73ba21e2e9043cafcd25e46&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJLUBJ7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbRb6LezmYmEYnycrAYeG%2BIlZVMM6ecuV%2FGIHKoev67gIgDFzAREEDLXp8saAZtzejZ2NpAckm1nxSy%2BGmE%2F%2FJAvcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdohmcKHC%2BhiFHuOyrcA9U9MlvQL0UPFE6IP5J7mIyXXyy3%2F6iAF5WBtr8nPA0g3iFhXaeXaQk5L0%2FS4riRKI0uJihNPiSC3KJGoOEFI455j6M4GKnTuZCqhdpXzG4lq1PaLyQ%2B3xLRdm1JpFyjA9PtNmHGKv1yU8EMUAwsrNhyXEvsz4zNwjU0HsVBOFoWxqfut4rfzlhrDrSUYSMAzBw5%2B%2F5uC8spVN1rKao8AwD%2FDJNG6wosSWgCamfw0jWv2cH7%2BL1STcXNxpRpYdBjSEplqVCsttvXEsWuQSgj3H2Ch7FDWOFRK5iYL7sQB%2BIITR%2FnfPIfl45MRMcP0An02G%2FqNV%2F5Ajid71HA7FOITKW2IETyP0ZgM%2BuRSYRjiE23bg1cg6lMpQl7zTwXfdtyoinzD5xhWIWqMbr6LNW7CaX98xQ6ke63uQXGBdYr23OG2nwvO%2BrG9DKHUGl6s8LDJmRlLejMjXDF0L8gj9Vx1%2BqYu7uY8VJ8XZi9B1uGdLWr85xnRv7oPFyA72FTO66iosu1bFmLASFk7AyLTrUqaSpPa3a20cgU2lA%2BWZn%2FGCxj8o1oi3t1LXznh2zMW61hgVDWCxrmznVb%2FKOyRqCsbRHYkkzDMi5RjpI3Q1vi%2FOnhUuwE2f9dWTPyI1WTMO6O5sEGOqUBHAUtSs1UYYem2sFpylUl6qaxW8llnQIoN0bCGla%2BTgLfFVB6pUZj%2ForNxzI9MndnQIhd90uvmTWFlysYE07XEXv2CcIhVbYpXBcV%2FPcLEWeUk1%2Fzv9kKaAow9qW9NtnsBcq1xAe2P9UXIxkzBOJpWom4TBFBmIcJqxHSfB4ySGeQunBygf0ArMOop2tU5aU%2BvxFYPQaIQOElE6OLpeync3dchb4E&X-Amz-Signature=923819cbdd0632efad078653efaf9dc7229d6667016b4fec924defbdcb2da973&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJLUBJ7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbRb6LezmYmEYnycrAYeG%2BIlZVMM6ecuV%2FGIHKoev67gIgDFzAREEDLXp8saAZtzejZ2NpAckm1nxSy%2BGmE%2F%2FJAvcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdohmcKHC%2BhiFHuOyrcA9U9MlvQL0UPFE6IP5J7mIyXXyy3%2F6iAF5WBtr8nPA0g3iFhXaeXaQk5L0%2FS4riRKI0uJihNPiSC3KJGoOEFI455j6M4GKnTuZCqhdpXzG4lq1PaLyQ%2B3xLRdm1JpFyjA9PtNmHGKv1yU8EMUAwsrNhyXEvsz4zNwjU0HsVBOFoWxqfut4rfzlhrDrSUYSMAzBw5%2B%2F5uC8spVN1rKao8AwD%2FDJNG6wosSWgCamfw0jWv2cH7%2BL1STcXNxpRpYdBjSEplqVCsttvXEsWuQSgj3H2Ch7FDWOFRK5iYL7sQB%2BIITR%2FnfPIfl45MRMcP0An02G%2FqNV%2F5Ajid71HA7FOITKW2IETyP0ZgM%2BuRSYRjiE23bg1cg6lMpQl7zTwXfdtyoinzD5xhWIWqMbr6LNW7CaX98xQ6ke63uQXGBdYr23OG2nwvO%2BrG9DKHUGl6s8LDJmRlLejMjXDF0L8gj9Vx1%2BqYu7uY8VJ8XZi9B1uGdLWr85xnRv7oPFyA72FTO66iosu1bFmLASFk7AyLTrUqaSpPa3a20cgU2lA%2BWZn%2FGCxj8o1oi3t1LXznh2zMW61hgVDWCxrmznVb%2FKOyRqCsbRHYkkzDMi5RjpI3Q1vi%2FOnhUuwE2f9dWTPyI1WTMO6O5sEGOqUBHAUtSs1UYYem2sFpylUl6qaxW8llnQIoN0bCGla%2BTgLfFVB6pUZj%2ForNxzI9MndnQIhd90uvmTWFlysYE07XEXv2CcIhVbYpXBcV%2FPcLEWeUk1%2Fzv9kKaAow9qW9NtnsBcq1xAe2P9UXIxkzBOJpWom4TBFBmIcJqxHSfB4ySGeQunBygf0ArMOop2tU5aU%2BvxFYPQaIQOElE6OLpeync3dchb4E&X-Amz-Signature=c8da634f794fe8233af5a02f7a61a3bb8e8bf2a1f2d3cd511413514438ce6098&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJLUBJ7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbRb6LezmYmEYnycrAYeG%2BIlZVMM6ecuV%2FGIHKoev67gIgDFzAREEDLXp8saAZtzejZ2NpAckm1nxSy%2BGmE%2F%2FJAvcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdohmcKHC%2BhiFHuOyrcA9U9MlvQL0UPFE6IP5J7mIyXXyy3%2F6iAF5WBtr8nPA0g3iFhXaeXaQk5L0%2FS4riRKI0uJihNPiSC3KJGoOEFI455j6M4GKnTuZCqhdpXzG4lq1PaLyQ%2B3xLRdm1JpFyjA9PtNmHGKv1yU8EMUAwsrNhyXEvsz4zNwjU0HsVBOFoWxqfut4rfzlhrDrSUYSMAzBw5%2B%2F5uC8spVN1rKao8AwD%2FDJNG6wosSWgCamfw0jWv2cH7%2BL1STcXNxpRpYdBjSEplqVCsttvXEsWuQSgj3H2Ch7FDWOFRK5iYL7sQB%2BIITR%2FnfPIfl45MRMcP0An02G%2FqNV%2F5Ajid71HA7FOITKW2IETyP0ZgM%2BuRSYRjiE23bg1cg6lMpQl7zTwXfdtyoinzD5xhWIWqMbr6LNW7CaX98xQ6ke63uQXGBdYr23OG2nwvO%2BrG9DKHUGl6s8LDJmRlLejMjXDF0L8gj9Vx1%2BqYu7uY8VJ8XZi9B1uGdLWr85xnRv7oPFyA72FTO66iosu1bFmLASFk7AyLTrUqaSpPa3a20cgU2lA%2BWZn%2FGCxj8o1oi3t1LXznh2zMW61hgVDWCxrmznVb%2FKOyRqCsbRHYkkzDMi5RjpI3Q1vi%2FOnhUuwE2f9dWTPyI1WTMO6O5sEGOqUBHAUtSs1UYYem2sFpylUl6qaxW8llnQIoN0bCGla%2BTgLfFVB6pUZj%2ForNxzI9MndnQIhd90uvmTWFlysYE07XEXv2CcIhVbYpXBcV%2FPcLEWeUk1%2Fzv9kKaAow9qW9NtnsBcq1xAe2P9UXIxkzBOJpWom4TBFBmIcJqxHSfB4ySGeQunBygf0ArMOop2tU5aU%2BvxFYPQaIQOElE6OLpeync3dchb4E&X-Amz-Signature=9e8e27774fbb2640b52974f83aa3005098b104dfd6d9a8421552549bd767e79b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJLUBJ7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbRb6LezmYmEYnycrAYeG%2BIlZVMM6ecuV%2FGIHKoev67gIgDFzAREEDLXp8saAZtzejZ2NpAckm1nxSy%2BGmE%2F%2FJAvcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdohmcKHC%2BhiFHuOyrcA9U9MlvQL0UPFE6IP5J7mIyXXyy3%2F6iAF5WBtr8nPA0g3iFhXaeXaQk5L0%2FS4riRKI0uJihNPiSC3KJGoOEFI455j6M4GKnTuZCqhdpXzG4lq1PaLyQ%2B3xLRdm1JpFyjA9PtNmHGKv1yU8EMUAwsrNhyXEvsz4zNwjU0HsVBOFoWxqfut4rfzlhrDrSUYSMAzBw5%2B%2F5uC8spVN1rKao8AwD%2FDJNG6wosSWgCamfw0jWv2cH7%2BL1STcXNxpRpYdBjSEplqVCsttvXEsWuQSgj3H2Ch7FDWOFRK5iYL7sQB%2BIITR%2FnfPIfl45MRMcP0An02G%2FqNV%2F5Ajid71HA7FOITKW2IETyP0ZgM%2BuRSYRjiE23bg1cg6lMpQl7zTwXfdtyoinzD5xhWIWqMbr6LNW7CaX98xQ6ke63uQXGBdYr23OG2nwvO%2BrG9DKHUGl6s8LDJmRlLejMjXDF0L8gj9Vx1%2BqYu7uY8VJ8XZi9B1uGdLWr85xnRv7oPFyA72FTO66iosu1bFmLASFk7AyLTrUqaSpPa3a20cgU2lA%2BWZn%2FGCxj8o1oi3t1LXznh2zMW61hgVDWCxrmznVb%2FKOyRqCsbRHYkkzDMi5RjpI3Q1vi%2FOnhUuwE2f9dWTPyI1WTMO6O5sEGOqUBHAUtSs1UYYem2sFpylUl6qaxW8llnQIoN0bCGla%2BTgLfFVB6pUZj%2ForNxzI9MndnQIhd90uvmTWFlysYE07XEXv2CcIhVbYpXBcV%2FPcLEWeUk1%2Fzv9kKaAow9qW9NtnsBcq1xAe2P9UXIxkzBOJpWom4TBFBmIcJqxHSfB4ySGeQunBygf0ArMOop2tU5aU%2BvxFYPQaIQOElE6OLpeync3dchb4E&X-Amz-Signature=7df289f11993f49fc3dba76092ef9a9d6d2ca9ec6c4ccb760fd0ff0b918bc086&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
