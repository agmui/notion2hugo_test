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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKSDWDG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaPBtQFCKB0%2F1m%2BzA3RkIyJPNwopA5OaRBtdJihWPEXwIgfCJLwoqn2vN1Iabz0LuDwfnT7QaRSfEuJhGQjywneG8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMrDDUtqgoLAf66XUyrcAzLFjMUl03%2BmYqYUsk3XdXibVBXcA935iBylK5bSpZJ%2FCBvXrlsp7ofNuMz%2BrFtFTYkTz4kv%2Bp0%2BT1r%2BseMAeONNcDMkzbLpJ5uUIiR1A1XXzG9ESuVdBylstE%2B7OIeoJ2kg9FhUPuMMv6BcVzd%2Fkcl7ROTI9bR%2F7N6Job%2BQgblwR%2FKgsnVyDjBLxiz%2BLYob03YuasIwCLu%2FAmgeJGqAoP4NFFEORYpecaB%2F3WfnDxnPWYAcgtCrdAW9QygP6KNGpCa0ENqRinHzD%2B%2FcHX9Lt2TvvD79UlUR%2FJHV8ak1xWUQECp7R1ITappiwryM5IP%2BJKtKssLDnwyOSH%2B0nFDcPuAkjtC0CEkLC41typJRqkuzTmy8QCsr8b1TezjOUOvEeoBbnn11Y8z%2BhWYeQ1Q5%2Fek6jQpF0n%2FtRlvJz9FZHt1QgrBCOSuZ%2B4ARHw8foSuu%2B5dwxhtUVX7au0YgXNdzwwGBMNrdBClOhF%2BfUtMpPr2OyhoDiAJsW%2F7lg4mpCkG765fbOPAf0RZbbOvmMp1nWmB6UGUHNA2jnndcKDDYxsqOOR8GmGnFLmZ9Xj7aW0PLlSOEkhbCd1UwnVmssH3M7O8ZOerEba4oRaIa5jORh0kysJMEctvJi1iW2fg8MKyc78AGOqUBl0b0RfiCGy8Qwh0JIGHxfxRrd7sWw642IBKo1pPSASEHyJ8NKmGmn%2Fp0mh6Y1JcSYiiG2VK6C%2FU3XxASg6Kwm51F2m3NiM0r%2FFbVskLqLzG4cFa9xKq33LUDshPXvz943ItLFEYd26%2Fx%2B75GGFErkxKrPITjA0ZmCXnjdO1NpSBwRTh3xRtpgCLJrcl59AtIEt1NSBFrOeJ4hhrB57o6kP6xuLtD&X-Amz-Signature=aa592b5bc2e9afc595e2be5ddeef82955cef8ed4671e209cee1440298d460123&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKSDWDG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaPBtQFCKB0%2F1m%2BzA3RkIyJPNwopA5OaRBtdJihWPEXwIgfCJLwoqn2vN1Iabz0LuDwfnT7QaRSfEuJhGQjywneG8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMrDDUtqgoLAf66XUyrcAzLFjMUl03%2BmYqYUsk3XdXibVBXcA935iBylK5bSpZJ%2FCBvXrlsp7ofNuMz%2BrFtFTYkTz4kv%2Bp0%2BT1r%2BseMAeONNcDMkzbLpJ5uUIiR1A1XXzG9ESuVdBylstE%2B7OIeoJ2kg9FhUPuMMv6BcVzd%2Fkcl7ROTI9bR%2F7N6Job%2BQgblwR%2FKgsnVyDjBLxiz%2BLYob03YuasIwCLu%2FAmgeJGqAoP4NFFEORYpecaB%2F3WfnDxnPWYAcgtCrdAW9QygP6KNGpCa0ENqRinHzD%2B%2FcHX9Lt2TvvD79UlUR%2FJHV8ak1xWUQECp7R1ITappiwryM5IP%2BJKtKssLDnwyOSH%2B0nFDcPuAkjtC0CEkLC41typJRqkuzTmy8QCsr8b1TezjOUOvEeoBbnn11Y8z%2BhWYeQ1Q5%2Fek6jQpF0n%2FtRlvJz9FZHt1QgrBCOSuZ%2B4ARHw8foSuu%2B5dwxhtUVX7au0YgXNdzwwGBMNrdBClOhF%2BfUtMpPr2OyhoDiAJsW%2F7lg4mpCkG765fbOPAf0RZbbOvmMp1nWmB6UGUHNA2jnndcKDDYxsqOOR8GmGnFLmZ9Xj7aW0PLlSOEkhbCd1UwnVmssH3M7O8ZOerEba4oRaIa5jORh0kysJMEctvJi1iW2fg8MKyc78AGOqUBl0b0RfiCGy8Qwh0JIGHxfxRrd7sWw642IBKo1pPSASEHyJ8NKmGmn%2Fp0mh6Y1JcSYiiG2VK6C%2FU3XxASg6Kwm51F2m3NiM0r%2FFbVskLqLzG4cFa9xKq33LUDshPXvz943ItLFEYd26%2Fx%2B75GGFErkxKrPITjA0ZmCXnjdO1NpSBwRTh3xRtpgCLJrcl59AtIEt1NSBFrOeJ4hhrB57o6kP6xuLtD&X-Amz-Signature=01a74a44ec04c28d52ba17514e76182a983b9221074e6b1db13b371761f5aef6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKSDWDG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaPBtQFCKB0%2F1m%2BzA3RkIyJPNwopA5OaRBtdJihWPEXwIgfCJLwoqn2vN1Iabz0LuDwfnT7QaRSfEuJhGQjywneG8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMrDDUtqgoLAf66XUyrcAzLFjMUl03%2BmYqYUsk3XdXibVBXcA935iBylK5bSpZJ%2FCBvXrlsp7ofNuMz%2BrFtFTYkTz4kv%2Bp0%2BT1r%2BseMAeONNcDMkzbLpJ5uUIiR1A1XXzG9ESuVdBylstE%2B7OIeoJ2kg9FhUPuMMv6BcVzd%2Fkcl7ROTI9bR%2F7N6Job%2BQgblwR%2FKgsnVyDjBLxiz%2BLYob03YuasIwCLu%2FAmgeJGqAoP4NFFEORYpecaB%2F3WfnDxnPWYAcgtCrdAW9QygP6KNGpCa0ENqRinHzD%2B%2FcHX9Lt2TvvD79UlUR%2FJHV8ak1xWUQECp7R1ITappiwryM5IP%2BJKtKssLDnwyOSH%2B0nFDcPuAkjtC0CEkLC41typJRqkuzTmy8QCsr8b1TezjOUOvEeoBbnn11Y8z%2BhWYeQ1Q5%2Fek6jQpF0n%2FtRlvJz9FZHt1QgrBCOSuZ%2B4ARHw8foSuu%2B5dwxhtUVX7au0YgXNdzwwGBMNrdBClOhF%2BfUtMpPr2OyhoDiAJsW%2F7lg4mpCkG765fbOPAf0RZbbOvmMp1nWmB6UGUHNA2jnndcKDDYxsqOOR8GmGnFLmZ9Xj7aW0PLlSOEkhbCd1UwnVmssH3M7O8ZOerEba4oRaIa5jORh0kysJMEctvJi1iW2fg8MKyc78AGOqUBl0b0RfiCGy8Qwh0JIGHxfxRrd7sWw642IBKo1pPSASEHyJ8NKmGmn%2Fp0mh6Y1JcSYiiG2VK6C%2FU3XxASg6Kwm51F2m3NiM0r%2FFbVskLqLzG4cFa9xKq33LUDshPXvz943ItLFEYd26%2Fx%2B75GGFErkxKrPITjA0ZmCXnjdO1NpSBwRTh3xRtpgCLJrcl59AtIEt1NSBFrOeJ4hhrB57o6kP6xuLtD&X-Amz-Signature=a8a325bef8da72dbc30e50c48a44e302650fcd654f7264536f984f4f1fb807ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKSDWDG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaPBtQFCKB0%2F1m%2BzA3RkIyJPNwopA5OaRBtdJihWPEXwIgfCJLwoqn2vN1Iabz0LuDwfnT7QaRSfEuJhGQjywneG8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMrDDUtqgoLAf66XUyrcAzLFjMUl03%2BmYqYUsk3XdXibVBXcA935iBylK5bSpZJ%2FCBvXrlsp7ofNuMz%2BrFtFTYkTz4kv%2Bp0%2BT1r%2BseMAeONNcDMkzbLpJ5uUIiR1A1XXzG9ESuVdBylstE%2B7OIeoJ2kg9FhUPuMMv6BcVzd%2Fkcl7ROTI9bR%2F7N6Job%2BQgblwR%2FKgsnVyDjBLxiz%2BLYob03YuasIwCLu%2FAmgeJGqAoP4NFFEORYpecaB%2F3WfnDxnPWYAcgtCrdAW9QygP6KNGpCa0ENqRinHzD%2B%2FcHX9Lt2TvvD79UlUR%2FJHV8ak1xWUQECp7R1ITappiwryM5IP%2BJKtKssLDnwyOSH%2B0nFDcPuAkjtC0CEkLC41typJRqkuzTmy8QCsr8b1TezjOUOvEeoBbnn11Y8z%2BhWYeQ1Q5%2Fek6jQpF0n%2FtRlvJz9FZHt1QgrBCOSuZ%2B4ARHw8foSuu%2B5dwxhtUVX7au0YgXNdzwwGBMNrdBClOhF%2BfUtMpPr2OyhoDiAJsW%2F7lg4mpCkG765fbOPAf0RZbbOvmMp1nWmB6UGUHNA2jnndcKDDYxsqOOR8GmGnFLmZ9Xj7aW0PLlSOEkhbCd1UwnVmssH3M7O8ZOerEba4oRaIa5jORh0kysJMEctvJi1iW2fg8MKyc78AGOqUBl0b0RfiCGy8Qwh0JIGHxfxRrd7sWw642IBKo1pPSASEHyJ8NKmGmn%2Fp0mh6Y1JcSYiiG2VK6C%2FU3XxASg6Kwm51F2m3NiM0r%2FFbVskLqLzG4cFa9xKq33LUDshPXvz943ItLFEYd26%2Fx%2B75GGFErkxKrPITjA0ZmCXnjdO1NpSBwRTh3xRtpgCLJrcl59AtIEt1NSBFrOeJ4hhrB57o6kP6xuLtD&X-Amz-Signature=71c3ab0abb698d5548470946eb5bb38182215d636944bcdfa78d5de6bc27a082&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKSDWDG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaPBtQFCKB0%2F1m%2BzA3RkIyJPNwopA5OaRBtdJihWPEXwIgfCJLwoqn2vN1Iabz0LuDwfnT7QaRSfEuJhGQjywneG8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMrDDUtqgoLAf66XUyrcAzLFjMUl03%2BmYqYUsk3XdXibVBXcA935iBylK5bSpZJ%2FCBvXrlsp7ofNuMz%2BrFtFTYkTz4kv%2Bp0%2BT1r%2BseMAeONNcDMkzbLpJ5uUIiR1A1XXzG9ESuVdBylstE%2B7OIeoJ2kg9FhUPuMMv6BcVzd%2Fkcl7ROTI9bR%2F7N6Job%2BQgblwR%2FKgsnVyDjBLxiz%2BLYob03YuasIwCLu%2FAmgeJGqAoP4NFFEORYpecaB%2F3WfnDxnPWYAcgtCrdAW9QygP6KNGpCa0ENqRinHzD%2B%2FcHX9Lt2TvvD79UlUR%2FJHV8ak1xWUQECp7R1ITappiwryM5IP%2BJKtKssLDnwyOSH%2B0nFDcPuAkjtC0CEkLC41typJRqkuzTmy8QCsr8b1TezjOUOvEeoBbnn11Y8z%2BhWYeQ1Q5%2Fek6jQpF0n%2FtRlvJz9FZHt1QgrBCOSuZ%2B4ARHw8foSuu%2B5dwxhtUVX7au0YgXNdzwwGBMNrdBClOhF%2BfUtMpPr2OyhoDiAJsW%2F7lg4mpCkG765fbOPAf0RZbbOvmMp1nWmB6UGUHNA2jnndcKDDYxsqOOR8GmGnFLmZ9Xj7aW0PLlSOEkhbCd1UwnVmssH3M7O8ZOerEba4oRaIa5jORh0kysJMEctvJi1iW2fg8MKyc78AGOqUBl0b0RfiCGy8Qwh0JIGHxfxRrd7sWw642IBKo1pPSASEHyJ8NKmGmn%2Fp0mh6Y1JcSYiiG2VK6C%2FU3XxASg6Kwm51F2m3NiM0r%2FFbVskLqLzG4cFa9xKq33LUDshPXvz943ItLFEYd26%2Fx%2B75GGFErkxKrPITjA0ZmCXnjdO1NpSBwRTh3xRtpgCLJrcl59AtIEt1NSBFrOeJ4hhrB57o6kP6xuLtD&X-Amz-Signature=825522415deed4c5b7f56e734dffa09b180b73839d632311232cc5edbbac9f75&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKSDWDG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaPBtQFCKB0%2F1m%2BzA3RkIyJPNwopA5OaRBtdJihWPEXwIgfCJLwoqn2vN1Iabz0LuDwfnT7QaRSfEuJhGQjywneG8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMrDDUtqgoLAf66XUyrcAzLFjMUl03%2BmYqYUsk3XdXibVBXcA935iBylK5bSpZJ%2FCBvXrlsp7ofNuMz%2BrFtFTYkTz4kv%2Bp0%2BT1r%2BseMAeONNcDMkzbLpJ5uUIiR1A1XXzG9ESuVdBylstE%2B7OIeoJ2kg9FhUPuMMv6BcVzd%2Fkcl7ROTI9bR%2F7N6Job%2BQgblwR%2FKgsnVyDjBLxiz%2BLYob03YuasIwCLu%2FAmgeJGqAoP4NFFEORYpecaB%2F3WfnDxnPWYAcgtCrdAW9QygP6KNGpCa0ENqRinHzD%2B%2FcHX9Lt2TvvD79UlUR%2FJHV8ak1xWUQECp7R1ITappiwryM5IP%2BJKtKssLDnwyOSH%2B0nFDcPuAkjtC0CEkLC41typJRqkuzTmy8QCsr8b1TezjOUOvEeoBbnn11Y8z%2BhWYeQ1Q5%2Fek6jQpF0n%2FtRlvJz9FZHt1QgrBCOSuZ%2B4ARHw8foSuu%2B5dwxhtUVX7au0YgXNdzwwGBMNrdBClOhF%2BfUtMpPr2OyhoDiAJsW%2F7lg4mpCkG765fbOPAf0RZbbOvmMp1nWmB6UGUHNA2jnndcKDDYxsqOOR8GmGnFLmZ9Xj7aW0PLlSOEkhbCd1UwnVmssH3M7O8ZOerEba4oRaIa5jORh0kysJMEctvJi1iW2fg8MKyc78AGOqUBl0b0RfiCGy8Qwh0JIGHxfxRrd7sWw642IBKo1pPSASEHyJ8NKmGmn%2Fp0mh6Y1JcSYiiG2VK6C%2FU3XxASg6Kwm51F2m3NiM0r%2FFbVskLqLzG4cFa9xKq33LUDshPXvz943ItLFEYd26%2Fx%2B75GGFErkxKrPITjA0ZmCXnjdO1NpSBwRTh3xRtpgCLJrcl59AtIEt1NSBFrOeJ4hhrB57o6kP6xuLtD&X-Amz-Signature=3e0bfd2bbc8089206924fb62f9fa9156c91500be17ba9d2c44702fc727d7d794&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKSDWDG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaPBtQFCKB0%2F1m%2BzA3RkIyJPNwopA5OaRBtdJihWPEXwIgfCJLwoqn2vN1Iabz0LuDwfnT7QaRSfEuJhGQjywneG8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMrDDUtqgoLAf66XUyrcAzLFjMUl03%2BmYqYUsk3XdXibVBXcA935iBylK5bSpZJ%2FCBvXrlsp7ofNuMz%2BrFtFTYkTz4kv%2Bp0%2BT1r%2BseMAeONNcDMkzbLpJ5uUIiR1A1XXzG9ESuVdBylstE%2B7OIeoJ2kg9FhUPuMMv6BcVzd%2Fkcl7ROTI9bR%2F7N6Job%2BQgblwR%2FKgsnVyDjBLxiz%2BLYob03YuasIwCLu%2FAmgeJGqAoP4NFFEORYpecaB%2F3WfnDxnPWYAcgtCrdAW9QygP6KNGpCa0ENqRinHzD%2B%2FcHX9Lt2TvvD79UlUR%2FJHV8ak1xWUQECp7R1ITappiwryM5IP%2BJKtKssLDnwyOSH%2B0nFDcPuAkjtC0CEkLC41typJRqkuzTmy8QCsr8b1TezjOUOvEeoBbnn11Y8z%2BhWYeQ1Q5%2Fek6jQpF0n%2FtRlvJz9FZHt1QgrBCOSuZ%2B4ARHw8foSuu%2B5dwxhtUVX7au0YgXNdzwwGBMNrdBClOhF%2BfUtMpPr2OyhoDiAJsW%2F7lg4mpCkG765fbOPAf0RZbbOvmMp1nWmB6UGUHNA2jnndcKDDYxsqOOR8GmGnFLmZ9Xj7aW0PLlSOEkhbCd1UwnVmssH3M7O8ZOerEba4oRaIa5jORh0kysJMEctvJi1iW2fg8MKyc78AGOqUBl0b0RfiCGy8Qwh0JIGHxfxRrd7sWw642IBKo1pPSASEHyJ8NKmGmn%2Fp0mh6Y1JcSYiiG2VK6C%2FU3XxASg6Kwm51F2m3NiM0r%2FFbVskLqLzG4cFa9xKq33LUDshPXvz943ItLFEYd26%2Fx%2B75GGFErkxKrPITjA0ZmCXnjdO1NpSBwRTh3xRtpgCLJrcl59AtIEt1NSBFrOeJ4hhrB57o6kP6xuLtD&X-Amz-Signature=e5b7dc54e689a28f92afd70b6d35cc642afa5e133c1898089d5828a351b9c82a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
