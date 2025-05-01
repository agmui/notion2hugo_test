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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQ3MINF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDQGllpdA5wihuzG2Dzu%2FtWZYuotXBixpQ5vnf3LpZOAQIhAL%2BHVqUTEWNrUIkg66f3rIV035CDHw%2FPKTcCdkfuw%2FLHKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLs%2BL1cn%2FXqwiTr4Iq3ANzsHYpUYIzQ0TDN4Q9JSUygxrk%2BjVn2PTDuMOZyuoVOjEtJZDjIwY3DNr0BPazj90pti89ISSX2YEFK0zZ5ocsvxcdw5lv%2FApoTpYT4Kux6SLfQ4WxOZ3yW3Uo4RoX5%2FtjYNY0pjYmUZ%2Fjd1l2gDnCLBQIUifmHWFblfjFJuErQ2%2BXEOYOCEpVMWcvJ55dIJ%2Fb5v8SU%2FXyLbjBeQg3ZxOD20buBAMe3wSUwByyxosMjo1Sre1%2FXFeV3R8fp8%2B9F5y7voFW1U0ceBS8j9wx1zPflXyrZdJBLw7YaN46R3ux52AUETob2xXaBKm2%2FuWG7wByu%2B9qT%2F%2F8kktMce6r9jyQBT4YCg6z8V3DJp9LK7pRsljFXMltLGIjGVpBtH%2BiYmBnEwi7%2Ft34LNVeDWboO%2B8ke%2BCG2X5kK6Fbzp4g1PvFLSkCU5Kzm5iIUCMguvpv%2FqBRHqTOYHb52mzPurjALiGzyrWSkH2uo6b7P9HiK8%2Br44uvI6yL1vC3b8wDOC8QGU3VzvIxTYlQmJZHrYKf9xebTyXD7ShZh%2FsiM0l2q7gDiqVAqFPPpakBoXYWOxfMmh5rsgWoUotUG3zJidSSwQAkRAI7tGJq8nhcZhPsUgtku7R%2FiptdfvYoWGVYmDDng8vABjqkAWAO1Lwbbzvnr%2FxmvqcZl9Jv7wQGhBgMSBkMpcUbXIntN6g9PsoiRTN7fijdyI9pS1t%2BstopdIaO5z4xdizCPNVSPb7rwND6ADKySnls82yZ2l%2FRcqBhAHBRP3Ji%2FOLr63Ao806sNtYJR1hpRFjCI0HalH9yPyz%2FnpUKDQYBpxq2cQ0XvWSsSb6NzFeNxy3u0rlKZJht128s4Tu5kDmq2R5mbI6w&X-Amz-Signature=a02f004f1490746c133d58cdd0f806cf12516d3e2213d8d9244a288be9b179fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQ3MINF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDQGllpdA5wihuzG2Dzu%2FtWZYuotXBixpQ5vnf3LpZOAQIhAL%2BHVqUTEWNrUIkg66f3rIV035CDHw%2FPKTcCdkfuw%2FLHKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLs%2BL1cn%2FXqwiTr4Iq3ANzsHYpUYIzQ0TDN4Q9JSUygxrk%2BjVn2PTDuMOZyuoVOjEtJZDjIwY3DNr0BPazj90pti89ISSX2YEFK0zZ5ocsvxcdw5lv%2FApoTpYT4Kux6SLfQ4WxOZ3yW3Uo4RoX5%2FtjYNY0pjYmUZ%2Fjd1l2gDnCLBQIUifmHWFblfjFJuErQ2%2BXEOYOCEpVMWcvJ55dIJ%2Fb5v8SU%2FXyLbjBeQg3ZxOD20buBAMe3wSUwByyxosMjo1Sre1%2FXFeV3R8fp8%2B9F5y7voFW1U0ceBS8j9wx1zPflXyrZdJBLw7YaN46R3ux52AUETob2xXaBKm2%2FuWG7wByu%2B9qT%2F%2F8kktMce6r9jyQBT4YCg6z8V3DJp9LK7pRsljFXMltLGIjGVpBtH%2BiYmBnEwi7%2Ft34LNVeDWboO%2B8ke%2BCG2X5kK6Fbzp4g1PvFLSkCU5Kzm5iIUCMguvpv%2FqBRHqTOYHb52mzPurjALiGzyrWSkH2uo6b7P9HiK8%2Br44uvI6yL1vC3b8wDOC8QGU3VzvIxTYlQmJZHrYKf9xebTyXD7ShZh%2FsiM0l2q7gDiqVAqFPPpakBoXYWOxfMmh5rsgWoUotUG3zJidSSwQAkRAI7tGJq8nhcZhPsUgtku7R%2FiptdfvYoWGVYmDDng8vABjqkAWAO1Lwbbzvnr%2FxmvqcZl9Jv7wQGhBgMSBkMpcUbXIntN6g9PsoiRTN7fijdyI9pS1t%2BstopdIaO5z4xdizCPNVSPb7rwND6ADKySnls82yZ2l%2FRcqBhAHBRP3Ji%2FOLr63Ao806sNtYJR1hpRFjCI0HalH9yPyz%2FnpUKDQYBpxq2cQ0XvWSsSb6NzFeNxy3u0rlKZJht128s4Tu5kDmq2R5mbI6w&X-Amz-Signature=859ed6235ca8bc1d142021445a93dcda334fdb230bd474a3ede9cf3b02de0c13&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQ3MINF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDQGllpdA5wihuzG2Dzu%2FtWZYuotXBixpQ5vnf3LpZOAQIhAL%2BHVqUTEWNrUIkg66f3rIV035CDHw%2FPKTcCdkfuw%2FLHKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLs%2BL1cn%2FXqwiTr4Iq3ANzsHYpUYIzQ0TDN4Q9JSUygxrk%2BjVn2PTDuMOZyuoVOjEtJZDjIwY3DNr0BPazj90pti89ISSX2YEFK0zZ5ocsvxcdw5lv%2FApoTpYT4Kux6SLfQ4WxOZ3yW3Uo4RoX5%2FtjYNY0pjYmUZ%2Fjd1l2gDnCLBQIUifmHWFblfjFJuErQ2%2BXEOYOCEpVMWcvJ55dIJ%2Fb5v8SU%2FXyLbjBeQg3ZxOD20buBAMe3wSUwByyxosMjo1Sre1%2FXFeV3R8fp8%2B9F5y7voFW1U0ceBS8j9wx1zPflXyrZdJBLw7YaN46R3ux52AUETob2xXaBKm2%2FuWG7wByu%2B9qT%2F%2F8kktMce6r9jyQBT4YCg6z8V3DJp9LK7pRsljFXMltLGIjGVpBtH%2BiYmBnEwi7%2Ft34LNVeDWboO%2B8ke%2BCG2X5kK6Fbzp4g1PvFLSkCU5Kzm5iIUCMguvpv%2FqBRHqTOYHb52mzPurjALiGzyrWSkH2uo6b7P9HiK8%2Br44uvI6yL1vC3b8wDOC8QGU3VzvIxTYlQmJZHrYKf9xebTyXD7ShZh%2FsiM0l2q7gDiqVAqFPPpakBoXYWOxfMmh5rsgWoUotUG3zJidSSwQAkRAI7tGJq8nhcZhPsUgtku7R%2FiptdfvYoWGVYmDDng8vABjqkAWAO1Lwbbzvnr%2FxmvqcZl9Jv7wQGhBgMSBkMpcUbXIntN6g9PsoiRTN7fijdyI9pS1t%2BstopdIaO5z4xdizCPNVSPb7rwND6ADKySnls82yZ2l%2FRcqBhAHBRP3Ji%2FOLr63Ao806sNtYJR1hpRFjCI0HalH9yPyz%2FnpUKDQYBpxq2cQ0XvWSsSb6NzFeNxy3u0rlKZJht128s4Tu5kDmq2R5mbI6w&X-Amz-Signature=d608238ca701ff02e2df99363c6c1ad4da37fba250df4f284fa934c27be49354&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQ3MINF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDQGllpdA5wihuzG2Dzu%2FtWZYuotXBixpQ5vnf3LpZOAQIhAL%2BHVqUTEWNrUIkg66f3rIV035CDHw%2FPKTcCdkfuw%2FLHKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLs%2BL1cn%2FXqwiTr4Iq3ANzsHYpUYIzQ0TDN4Q9JSUygxrk%2BjVn2PTDuMOZyuoVOjEtJZDjIwY3DNr0BPazj90pti89ISSX2YEFK0zZ5ocsvxcdw5lv%2FApoTpYT4Kux6SLfQ4WxOZ3yW3Uo4RoX5%2FtjYNY0pjYmUZ%2Fjd1l2gDnCLBQIUifmHWFblfjFJuErQ2%2BXEOYOCEpVMWcvJ55dIJ%2Fb5v8SU%2FXyLbjBeQg3ZxOD20buBAMe3wSUwByyxosMjo1Sre1%2FXFeV3R8fp8%2B9F5y7voFW1U0ceBS8j9wx1zPflXyrZdJBLw7YaN46R3ux52AUETob2xXaBKm2%2FuWG7wByu%2B9qT%2F%2F8kktMce6r9jyQBT4YCg6z8V3DJp9LK7pRsljFXMltLGIjGVpBtH%2BiYmBnEwi7%2Ft34LNVeDWboO%2B8ke%2BCG2X5kK6Fbzp4g1PvFLSkCU5Kzm5iIUCMguvpv%2FqBRHqTOYHb52mzPurjALiGzyrWSkH2uo6b7P9HiK8%2Br44uvI6yL1vC3b8wDOC8QGU3VzvIxTYlQmJZHrYKf9xebTyXD7ShZh%2FsiM0l2q7gDiqVAqFPPpakBoXYWOxfMmh5rsgWoUotUG3zJidSSwQAkRAI7tGJq8nhcZhPsUgtku7R%2FiptdfvYoWGVYmDDng8vABjqkAWAO1Lwbbzvnr%2FxmvqcZl9Jv7wQGhBgMSBkMpcUbXIntN6g9PsoiRTN7fijdyI9pS1t%2BstopdIaO5z4xdizCPNVSPb7rwND6ADKySnls82yZ2l%2FRcqBhAHBRP3Ji%2FOLr63Ao806sNtYJR1hpRFjCI0HalH9yPyz%2FnpUKDQYBpxq2cQ0XvWSsSb6NzFeNxy3u0rlKZJht128s4Tu5kDmq2R5mbI6w&X-Amz-Signature=84c23057b9bd62bcafe326845346bfb6a413a4badeded50518bcf190f0dd7c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQ3MINF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDQGllpdA5wihuzG2Dzu%2FtWZYuotXBixpQ5vnf3LpZOAQIhAL%2BHVqUTEWNrUIkg66f3rIV035CDHw%2FPKTcCdkfuw%2FLHKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLs%2BL1cn%2FXqwiTr4Iq3ANzsHYpUYIzQ0TDN4Q9JSUygxrk%2BjVn2PTDuMOZyuoVOjEtJZDjIwY3DNr0BPazj90pti89ISSX2YEFK0zZ5ocsvxcdw5lv%2FApoTpYT4Kux6SLfQ4WxOZ3yW3Uo4RoX5%2FtjYNY0pjYmUZ%2Fjd1l2gDnCLBQIUifmHWFblfjFJuErQ2%2BXEOYOCEpVMWcvJ55dIJ%2Fb5v8SU%2FXyLbjBeQg3ZxOD20buBAMe3wSUwByyxosMjo1Sre1%2FXFeV3R8fp8%2B9F5y7voFW1U0ceBS8j9wx1zPflXyrZdJBLw7YaN46R3ux52AUETob2xXaBKm2%2FuWG7wByu%2B9qT%2F%2F8kktMce6r9jyQBT4YCg6z8V3DJp9LK7pRsljFXMltLGIjGVpBtH%2BiYmBnEwi7%2Ft34LNVeDWboO%2B8ke%2BCG2X5kK6Fbzp4g1PvFLSkCU5Kzm5iIUCMguvpv%2FqBRHqTOYHb52mzPurjALiGzyrWSkH2uo6b7P9HiK8%2Br44uvI6yL1vC3b8wDOC8QGU3VzvIxTYlQmJZHrYKf9xebTyXD7ShZh%2FsiM0l2q7gDiqVAqFPPpakBoXYWOxfMmh5rsgWoUotUG3zJidSSwQAkRAI7tGJq8nhcZhPsUgtku7R%2FiptdfvYoWGVYmDDng8vABjqkAWAO1Lwbbzvnr%2FxmvqcZl9Jv7wQGhBgMSBkMpcUbXIntN6g9PsoiRTN7fijdyI9pS1t%2BstopdIaO5z4xdizCPNVSPb7rwND6ADKySnls82yZ2l%2FRcqBhAHBRP3Ji%2FOLr63Ao806sNtYJR1hpRFjCI0HalH9yPyz%2FnpUKDQYBpxq2cQ0XvWSsSb6NzFeNxy3u0rlKZJht128s4Tu5kDmq2R5mbI6w&X-Amz-Signature=34afd9463aa2895c91b16da8cc2698a040c1a420bf63f237c5ba493e5b4932d8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQ3MINF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDQGllpdA5wihuzG2Dzu%2FtWZYuotXBixpQ5vnf3LpZOAQIhAL%2BHVqUTEWNrUIkg66f3rIV035CDHw%2FPKTcCdkfuw%2FLHKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLs%2BL1cn%2FXqwiTr4Iq3ANzsHYpUYIzQ0TDN4Q9JSUygxrk%2BjVn2PTDuMOZyuoVOjEtJZDjIwY3DNr0BPazj90pti89ISSX2YEFK0zZ5ocsvxcdw5lv%2FApoTpYT4Kux6SLfQ4WxOZ3yW3Uo4RoX5%2FtjYNY0pjYmUZ%2Fjd1l2gDnCLBQIUifmHWFblfjFJuErQ2%2BXEOYOCEpVMWcvJ55dIJ%2Fb5v8SU%2FXyLbjBeQg3ZxOD20buBAMe3wSUwByyxosMjo1Sre1%2FXFeV3R8fp8%2B9F5y7voFW1U0ceBS8j9wx1zPflXyrZdJBLw7YaN46R3ux52AUETob2xXaBKm2%2FuWG7wByu%2B9qT%2F%2F8kktMce6r9jyQBT4YCg6z8V3DJp9LK7pRsljFXMltLGIjGVpBtH%2BiYmBnEwi7%2Ft34LNVeDWboO%2B8ke%2BCG2X5kK6Fbzp4g1PvFLSkCU5Kzm5iIUCMguvpv%2FqBRHqTOYHb52mzPurjALiGzyrWSkH2uo6b7P9HiK8%2Br44uvI6yL1vC3b8wDOC8QGU3VzvIxTYlQmJZHrYKf9xebTyXD7ShZh%2FsiM0l2q7gDiqVAqFPPpakBoXYWOxfMmh5rsgWoUotUG3zJidSSwQAkRAI7tGJq8nhcZhPsUgtku7R%2FiptdfvYoWGVYmDDng8vABjqkAWAO1Lwbbzvnr%2FxmvqcZl9Jv7wQGhBgMSBkMpcUbXIntN6g9PsoiRTN7fijdyI9pS1t%2BstopdIaO5z4xdizCPNVSPb7rwND6ADKySnls82yZ2l%2FRcqBhAHBRP3Ji%2FOLr63Ao806sNtYJR1hpRFjCI0HalH9yPyz%2FnpUKDQYBpxq2cQ0XvWSsSb6NzFeNxy3u0rlKZJht128s4Tu5kDmq2R5mbI6w&X-Amz-Signature=1be0077fe4f0048ea1803fa6e2853212c708da114da13e3b890f74243b02036f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQ3MINF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDQGllpdA5wihuzG2Dzu%2FtWZYuotXBixpQ5vnf3LpZOAQIhAL%2BHVqUTEWNrUIkg66f3rIV035CDHw%2FPKTcCdkfuw%2FLHKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLs%2BL1cn%2FXqwiTr4Iq3ANzsHYpUYIzQ0TDN4Q9JSUygxrk%2BjVn2PTDuMOZyuoVOjEtJZDjIwY3DNr0BPazj90pti89ISSX2YEFK0zZ5ocsvxcdw5lv%2FApoTpYT4Kux6SLfQ4WxOZ3yW3Uo4RoX5%2FtjYNY0pjYmUZ%2Fjd1l2gDnCLBQIUifmHWFblfjFJuErQ2%2BXEOYOCEpVMWcvJ55dIJ%2Fb5v8SU%2FXyLbjBeQg3ZxOD20buBAMe3wSUwByyxosMjo1Sre1%2FXFeV3R8fp8%2B9F5y7voFW1U0ceBS8j9wx1zPflXyrZdJBLw7YaN46R3ux52AUETob2xXaBKm2%2FuWG7wByu%2B9qT%2F%2F8kktMce6r9jyQBT4YCg6z8V3DJp9LK7pRsljFXMltLGIjGVpBtH%2BiYmBnEwi7%2Ft34LNVeDWboO%2B8ke%2BCG2X5kK6Fbzp4g1PvFLSkCU5Kzm5iIUCMguvpv%2FqBRHqTOYHb52mzPurjALiGzyrWSkH2uo6b7P9HiK8%2Br44uvI6yL1vC3b8wDOC8QGU3VzvIxTYlQmJZHrYKf9xebTyXD7ShZh%2FsiM0l2q7gDiqVAqFPPpakBoXYWOxfMmh5rsgWoUotUG3zJidSSwQAkRAI7tGJq8nhcZhPsUgtku7R%2FiptdfvYoWGVYmDDng8vABjqkAWAO1Lwbbzvnr%2FxmvqcZl9Jv7wQGhBgMSBkMpcUbXIntN6g9PsoiRTN7fijdyI9pS1t%2BstopdIaO5z4xdizCPNVSPb7rwND6ADKySnls82yZ2l%2FRcqBhAHBRP3Ji%2FOLr63Ao806sNtYJR1hpRFjCI0HalH9yPyz%2FnpUKDQYBpxq2cQ0XvWSsSb6NzFeNxy3u0rlKZJht128s4Tu5kDmq2R5mbI6w&X-Amz-Signature=bc66664181f4194b8be4e4cbf411c8a74dbeb066fcdef5cfa1aa6f2f7e1014e7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
