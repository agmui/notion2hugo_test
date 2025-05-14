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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AC3KEK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2B78qwcVwKeBEQQE7PDttuXlAxnX4bdvpMe7ZRe0JXkAiEA7x7srOQV2WZ2D8nDro7J8UQMJgN5SFSUg6Sca9hxGIMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAwol71jDSRv1fElGSrcA9BVjpV8rjI5EqBAsIKYFf28ceAsk50OAluj3By5J4jZmuFR5ayw7JHOcy0hk6F6Ue%2FAbRqAmEmyAMx0NvdNidoQQAcHAR%2FIWJbqqjndoXSM9QAfpoJQVeO9wI3o1ljth9mBqFcaD8AXgdgY%2FzgwdTo6ACaHHlOr3qT9v5SoTHRAk1UM5B4fwLFO1%2Fobm72WupVnV8DTxI2QFOwsNjiDh%2FVNHur1xo%2BXboIb4GOaZdmKa5gW399PyJKN4CDProfXU433qh9HiQGx8B7JJ2TB9H4Cb%2B8v%2F2MaMMlZdeOl1CUEU%2Fh7Ze3efaij%2Bpc87%2BjxUygJvNBeCWGo%2FCtkXYKmTRcOQ7yKspp8P2T9Tmjz5UR2Wcfl6eM1EF69gdBDq9nPtztRLWOTSlrEQsaCGRTYdqdffv0L0jQDlHUgxB20Vvl%2FXsHyDp4GtvRpiAmBuHueDIeXOFTa%2BLbTV4kaOFOBrx59Ie0XGMldRw2u8K2l3GVKomULZ05XFNwL9zZfCU9YJSDAr8Y%2Fh3wwd2hx8WYEzFf69EFoAGeeuEOawNjWg8cep%2F5EzAKyUNZjVnAZj7gbDwv4PamJcOmDtATPeLJ3No6zIq5jNF%2BIqSz%2BSW8kwxpDuHtSQpr%2BTKgqAK%2BRMJOhksEGOqUBpQxjUB9pTbyu06FHsq1fC%2Fv06OKO%2FFmDgyaMaqmNkLEhf9GnAsoSLSVsreBHiNYatYKs2Tp91k9Uc%2Fw9cbTXyEzEzJWGpqp4WzD8sMYHK0V%2B1ouGzHpR0xGkOnpc0FdXCeawJQVPWHOFmC0dlkdc1Hv00A9wiFCqyWu%2FF0t8Rd7tURN%2BencDjYuIAqpeuP8U7tlMZNYJeiJwy2ju7rtcEqaZ4lEj&X-Amz-Signature=4ec46a450717034774e0f76833930644a21fb8a23aae89432afa8253c929b282&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AC3KEK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2B78qwcVwKeBEQQE7PDttuXlAxnX4bdvpMe7ZRe0JXkAiEA7x7srOQV2WZ2D8nDro7J8UQMJgN5SFSUg6Sca9hxGIMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAwol71jDSRv1fElGSrcA9BVjpV8rjI5EqBAsIKYFf28ceAsk50OAluj3By5J4jZmuFR5ayw7JHOcy0hk6F6Ue%2FAbRqAmEmyAMx0NvdNidoQQAcHAR%2FIWJbqqjndoXSM9QAfpoJQVeO9wI3o1ljth9mBqFcaD8AXgdgY%2FzgwdTo6ACaHHlOr3qT9v5SoTHRAk1UM5B4fwLFO1%2Fobm72WupVnV8DTxI2QFOwsNjiDh%2FVNHur1xo%2BXboIb4GOaZdmKa5gW399PyJKN4CDProfXU433qh9HiQGx8B7JJ2TB9H4Cb%2B8v%2F2MaMMlZdeOl1CUEU%2Fh7Ze3efaij%2Bpc87%2BjxUygJvNBeCWGo%2FCtkXYKmTRcOQ7yKspp8P2T9Tmjz5UR2Wcfl6eM1EF69gdBDq9nPtztRLWOTSlrEQsaCGRTYdqdffv0L0jQDlHUgxB20Vvl%2FXsHyDp4GtvRpiAmBuHueDIeXOFTa%2BLbTV4kaOFOBrx59Ie0XGMldRw2u8K2l3GVKomULZ05XFNwL9zZfCU9YJSDAr8Y%2Fh3wwd2hx8WYEzFf69EFoAGeeuEOawNjWg8cep%2F5EzAKyUNZjVnAZj7gbDwv4PamJcOmDtATPeLJ3No6zIq5jNF%2BIqSz%2BSW8kwxpDuHtSQpr%2BTKgqAK%2BRMJOhksEGOqUBpQxjUB9pTbyu06FHsq1fC%2Fv06OKO%2FFmDgyaMaqmNkLEhf9GnAsoSLSVsreBHiNYatYKs2Tp91k9Uc%2Fw9cbTXyEzEzJWGpqp4WzD8sMYHK0V%2B1ouGzHpR0xGkOnpc0FdXCeawJQVPWHOFmC0dlkdc1Hv00A9wiFCqyWu%2FF0t8Rd7tURN%2BencDjYuIAqpeuP8U7tlMZNYJeiJwy2ju7rtcEqaZ4lEj&X-Amz-Signature=5b185616a7a661aef7de04e327807a43cdc774fdd989064ba796bf6fa8c7f228&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AC3KEK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2B78qwcVwKeBEQQE7PDttuXlAxnX4bdvpMe7ZRe0JXkAiEA7x7srOQV2WZ2D8nDro7J8UQMJgN5SFSUg6Sca9hxGIMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAwol71jDSRv1fElGSrcA9BVjpV8rjI5EqBAsIKYFf28ceAsk50OAluj3By5J4jZmuFR5ayw7JHOcy0hk6F6Ue%2FAbRqAmEmyAMx0NvdNidoQQAcHAR%2FIWJbqqjndoXSM9QAfpoJQVeO9wI3o1ljth9mBqFcaD8AXgdgY%2FzgwdTo6ACaHHlOr3qT9v5SoTHRAk1UM5B4fwLFO1%2Fobm72WupVnV8DTxI2QFOwsNjiDh%2FVNHur1xo%2BXboIb4GOaZdmKa5gW399PyJKN4CDProfXU433qh9HiQGx8B7JJ2TB9H4Cb%2B8v%2F2MaMMlZdeOl1CUEU%2Fh7Ze3efaij%2Bpc87%2BjxUygJvNBeCWGo%2FCtkXYKmTRcOQ7yKspp8P2T9Tmjz5UR2Wcfl6eM1EF69gdBDq9nPtztRLWOTSlrEQsaCGRTYdqdffv0L0jQDlHUgxB20Vvl%2FXsHyDp4GtvRpiAmBuHueDIeXOFTa%2BLbTV4kaOFOBrx59Ie0XGMldRw2u8K2l3GVKomULZ05XFNwL9zZfCU9YJSDAr8Y%2Fh3wwd2hx8WYEzFf69EFoAGeeuEOawNjWg8cep%2F5EzAKyUNZjVnAZj7gbDwv4PamJcOmDtATPeLJ3No6zIq5jNF%2BIqSz%2BSW8kwxpDuHtSQpr%2BTKgqAK%2BRMJOhksEGOqUBpQxjUB9pTbyu06FHsq1fC%2Fv06OKO%2FFmDgyaMaqmNkLEhf9GnAsoSLSVsreBHiNYatYKs2Tp91k9Uc%2Fw9cbTXyEzEzJWGpqp4WzD8sMYHK0V%2B1ouGzHpR0xGkOnpc0FdXCeawJQVPWHOFmC0dlkdc1Hv00A9wiFCqyWu%2FF0t8Rd7tURN%2BencDjYuIAqpeuP8U7tlMZNYJeiJwy2ju7rtcEqaZ4lEj&X-Amz-Signature=ddb545b7108b2623cfeceb3866da34acaa78e7575092da754398286c7bb84ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AC3KEK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2B78qwcVwKeBEQQE7PDttuXlAxnX4bdvpMe7ZRe0JXkAiEA7x7srOQV2WZ2D8nDro7J8UQMJgN5SFSUg6Sca9hxGIMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAwol71jDSRv1fElGSrcA9BVjpV8rjI5EqBAsIKYFf28ceAsk50OAluj3By5J4jZmuFR5ayw7JHOcy0hk6F6Ue%2FAbRqAmEmyAMx0NvdNidoQQAcHAR%2FIWJbqqjndoXSM9QAfpoJQVeO9wI3o1ljth9mBqFcaD8AXgdgY%2FzgwdTo6ACaHHlOr3qT9v5SoTHRAk1UM5B4fwLFO1%2Fobm72WupVnV8DTxI2QFOwsNjiDh%2FVNHur1xo%2BXboIb4GOaZdmKa5gW399PyJKN4CDProfXU433qh9HiQGx8B7JJ2TB9H4Cb%2B8v%2F2MaMMlZdeOl1CUEU%2Fh7Ze3efaij%2Bpc87%2BjxUygJvNBeCWGo%2FCtkXYKmTRcOQ7yKspp8P2T9Tmjz5UR2Wcfl6eM1EF69gdBDq9nPtztRLWOTSlrEQsaCGRTYdqdffv0L0jQDlHUgxB20Vvl%2FXsHyDp4GtvRpiAmBuHueDIeXOFTa%2BLbTV4kaOFOBrx59Ie0XGMldRw2u8K2l3GVKomULZ05XFNwL9zZfCU9YJSDAr8Y%2Fh3wwd2hx8WYEzFf69EFoAGeeuEOawNjWg8cep%2F5EzAKyUNZjVnAZj7gbDwv4PamJcOmDtATPeLJ3No6zIq5jNF%2BIqSz%2BSW8kwxpDuHtSQpr%2BTKgqAK%2BRMJOhksEGOqUBpQxjUB9pTbyu06FHsq1fC%2Fv06OKO%2FFmDgyaMaqmNkLEhf9GnAsoSLSVsreBHiNYatYKs2Tp91k9Uc%2Fw9cbTXyEzEzJWGpqp4WzD8sMYHK0V%2B1ouGzHpR0xGkOnpc0FdXCeawJQVPWHOFmC0dlkdc1Hv00A9wiFCqyWu%2FF0t8Rd7tURN%2BencDjYuIAqpeuP8U7tlMZNYJeiJwy2ju7rtcEqaZ4lEj&X-Amz-Signature=ac8fd5849aab1c14491e623897dd50775a5e5d7283dd623c09e21b2c31126e62&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AC3KEK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2B78qwcVwKeBEQQE7PDttuXlAxnX4bdvpMe7ZRe0JXkAiEA7x7srOQV2WZ2D8nDro7J8UQMJgN5SFSUg6Sca9hxGIMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAwol71jDSRv1fElGSrcA9BVjpV8rjI5EqBAsIKYFf28ceAsk50OAluj3By5J4jZmuFR5ayw7JHOcy0hk6F6Ue%2FAbRqAmEmyAMx0NvdNidoQQAcHAR%2FIWJbqqjndoXSM9QAfpoJQVeO9wI3o1ljth9mBqFcaD8AXgdgY%2FzgwdTo6ACaHHlOr3qT9v5SoTHRAk1UM5B4fwLFO1%2Fobm72WupVnV8DTxI2QFOwsNjiDh%2FVNHur1xo%2BXboIb4GOaZdmKa5gW399PyJKN4CDProfXU433qh9HiQGx8B7JJ2TB9H4Cb%2B8v%2F2MaMMlZdeOl1CUEU%2Fh7Ze3efaij%2Bpc87%2BjxUygJvNBeCWGo%2FCtkXYKmTRcOQ7yKspp8P2T9Tmjz5UR2Wcfl6eM1EF69gdBDq9nPtztRLWOTSlrEQsaCGRTYdqdffv0L0jQDlHUgxB20Vvl%2FXsHyDp4GtvRpiAmBuHueDIeXOFTa%2BLbTV4kaOFOBrx59Ie0XGMldRw2u8K2l3GVKomULZ05XFNwL9zZfCU9YJSDAr8Y%2Fh3wwd2hx8WYEzFf69EFoAGeeuEOawNjWg8cep%2F5EzAKyUNZjVnAZj7gbDwv4PamJcOmDtATPeLJ3No6zIq5jNF%2BIqSz%2BSW8kwxpDuHtSQpr%2BTKgqAK%2BRMJOhksEGOqUBpQxjUB9pTbyu06FHsq1fC%2Fv06OKO%2FFmDgyaMaqmNkLEhf9GnAsoSLSVsreBHiNYatYKs2Tp91k9Uc%2Fw9cbTXyEzEzJWGpqp4WzD8sMYHK0V%2B1ouGzHpR0xGkOnpc0FdXCeawJQVPWHOFmC0dlkdc1Hv00A9wiFCqyWu%2FF0t8Rd7tURN%2BencDjYuIAqpeuP8U7tlMZNYJeiJwy2ju7rtcEqaZ4lEj&X-Amz-Signature=7b8d2dbc2f8f3ce5145979246c62832e661915cc4a701cb54e6b096582a09fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AC3KEK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2B78qwcVwKeBEQQE7PDttuXlAxnX4bdvpMe7ZRe0JXkAiEA7x7srOQV2WZ2D8nDro7J8UQMJgN5SFSUg6Sca9hxGIMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAwol71jDSRv1fElGSrcA9BVjpV8rjI5EqBAsIKYFf28ceAsk50OAluj3By5J4jZmuFR5ayw7JHOcy0hk6F6Ue%2FAbRqAmEmyAMx0NvdNidoQQAcHAR%2FIWJbqqjndoXSM9QAfpoJQVeO9wI3o1ljth9mBqFcaD8AXgdgY%2FzgwdTo6ACaHHlOr3qT9v5SoTHRAk1UM5B4fwLFO1%2Fobm72WupVnV8DTxI2QFOwsNjiDh%2FVNHur1xo%2BXboIb4GOaZdmKa5gW399PyJKN4CDProfXU433qh9HiQGx8B7JJ2TB9H4Cb%2B8v%2F2MaMMlZdeOl1CUEU%2Fh7Ze3efaij%2Bpc87%2BjxUygJvNBeCWGo%2FCtkXYKmTRcOQ7yKspp8P2T9Tmjz5UR2Wcfl6eM1EF69gdBDq9nPtztRLWOTSlrEQsaCGRTYdqdffv0L0jQDlHUgxB20Vvl%2FXsHyDp4GtvRpiAmBuHueDIeXOFTa%2BLbTV4kaOFOBrx59Ie0XGMldRw2u8K2l3GVKomULZ05XFNwL9zZfCU9YJSDAr8Y%2Fh3wwd2hx8WYEzFf69EFoAGeeuEOawNjWg8cep%2F5EzAKyUNZjVnAZj7gbDwv4PamJcOmDtATPeLJ3No6zIq5jNF%2BIqSz%2BSW8kwxpDuHtSQpr%2BTKgqAK%2BRMJOhksEGOqUBpQxjUB9pTbyu06FHsq1fC%2Fv06OKO%2FFmDgyaMaqmNkLEhf9GnAsoSLSVsreBHiNYatYKs2Tp91k9Uc%2Fw9cbTXyEzEzJWGpqp4WzD8sMYHK0V%2B1ouGzHpR0xGkOnpc0FdXCeawJQVPWHOFmC0dlkdc1Hv00A9wiFCqyWu%2FF0t8Rd7tURN%2BencDjYuIAqpeuP8U7tlMZNYJeiJwy2ju7rtcEqaZ4lEj&X-Amz-Signature=f96b552c91757bc33f6660ff65a4da2b40709e683287e3d442f5b4fd2b4746ae&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AC3KEK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIF%2B78qwcVwKeBEQQE7PDttuXlAxnX4bdvpMe7ZRe0JXkAiEA7x7srOQV2WZ2D8nDro7J8UQMJgN5SFSUg6Sca9hxGIMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAwol71jDSRv1fElGSrcA9BVjpV8rjI5EqBAsIKYFf28ceAsk50OAluj3By5J4jZmuFR5ayw7JHOcy0hk6F6Ue%2FAbRqAmEmyAMx0NvdNidoQQAcHAR%2FIWJbqqjndoXSM9QAfpoJQVeO9wI3o1ljth9mBqFcaD8AXgdgY%2FzgwdTo6ACaHHlOr3qT9v5SoTHRAk1UM5B4fwLFO1%2Fobm72WupVnV8DTxI2QFOwsNjiDh%2FVNHur1xo%2BXboIb4GOaZdmKa5gW399PyJKN4CDProfXU433qh9HiQGx8B7JJ2TB9H4Cb%2B8v%2F2MaMMlZdeOl1CUEU%2Fh7Ze3efaij%2Bpc87%2BjxUygJvNBeCWGo%2FCtkXYKmTRcOQ7yKspp8P2T9Tmjz5UR2Wcfl6eM1EF69gdBDq9nPtztRLWOTSlrEQsaCGRTYdqdffv0L0jQDlHUgxB20Vvl%2FXsHyDp4GtvRpiAmBuHueDIeXOFTa%2BLbTV4kaOFOBrx59Ie0XGMldRw2u8K2l3GVKomULZ05XFNwL9zZfCU9YJSDAr8Y%2Fh3wwd2hx8WYEzFf69EFoAGeeuEOawNjWg8cep%2F5EzAKyUNZjVnAZj7gbDwv4PamJcOmDtATPeLJ3No6zIq5jNF%2BIqSz%2BSW8kwxpDuHtSQpr%2BTKgqAK%2BRMJOhksEGOqUBpQxjUB9pTbyu06FHsq1fC%2Fv06OKO%2FFmDgyaMaqmNkLEhf9GnAsoSLSVsreBHiNYatYKs2Tp91k9Uc%2Fw9cbTXyEzEzJWGpqp4WzD8sMYHK0V%2B1ouGzHpR0xGkOnpc0FdXCeawJQVPWHOFmC0dlkdc1Hv00A9wiFCqyWu%2FF0t8Rd7tURN%2BencDjYuIAqpeuP8U7tlMZNYJeiJwy2ju7rtcEqaZ4lEj&X-Amz-Signature=218d29bc952fdac339abf7986e7b78ca75d6282ed78eb8623263c420717e40c7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
