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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJWI2BR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGr1kpXF3nFthy3sTXmkpeQZ3GBzQrr3rHqYwN1zCgsnAiBHzeCmLOniQqIV6IlgQ5e5qPtrr2jGxmxqriWQq7TMnCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIX%2FdWYWa8%2Bgzsb8SKtwDtaQyGOddoEOrNxeBaowNTEZTuNgUdwi%2FBLgEd%2BvgZ9ybAjOAu3z38OLaUm9vKvBmSfg8MqGBzY6bN26S914PP1q4WP1VLTC%2F4dvMt8f%2FyQBgEg9ywm6Op9SLMHZbM4K11wkuEA7ht7u2Vjw36E1zSRKiHSsZ9cP2ioK7IduemlGe5m3HPbXCmquQRQhcNrcFDnK7GHWK%2BFUiTa9J6g87CXu%2BiM%2BgIoffEDew0uNuT8wEWMSSjU7UfSngz8GSgERqdE3JtI2NoTC0xHNhjPth8r9AzISvcwCnW5ivkDsTDapaGVTJ12ePDNzNkLsbGrjNxrjSWTxPtMnrKBoal0BRjsnYWJ3dS3bHN2l66HuHWeV2ROJss6ddtfHCBmH93ry2UAT%2Fw7t1XM6nGL9ts6a2BJnp%2F7VENyucWB9tpXF4wWsWPKOQKW%2FE2D9lmtnccOr%2Fc%2BPC9taPQkh4CUWuvuvgqxys6z%2B%2B8nFh5svl7GZzuUUWl2vOcw0l4Xq693eWDikq8zEtrRh41w21pMZcv4uGI%2BIauiTxEYO6Aybcg%2FIJwlbh6d9k3QPQTbu3WT1x2%2FQp6bgH9qpN0NDlLVQ3aKW%2F21%2FpgPpRz3u%2Bd2dC8sbfpbdHxasQ4iagpqjihfowruz5vgY6pgGg9oL6d8X13HeNrQmg67ZJpJvZazjz7wHHk61thmSgH9jIU9Ksp6XNrJYqR8ZjrxgU4qqj430URlDUvzSBGSbFg8%2FFwI3o5n12Vgzs3uml9EYktwgmBTwOtvvTjeOUs9iifik07dDG86VNbeELLjtVPo%2B7e2hgDMIQKQxaYTKLp4KP80z5YrE7C4o6n9rIP%2FitmzcB%2BhlSpUMzm6yyFyjkavS3QPvG&X-Amz-Signature=cff7dd32fdef02b2bf2078cf4e654adb1f617fc7239ba45b2b10f0707576e6a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJWI2BR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGr1kpXF3nFthy3sTXmkpeQZ3GBzQrr3rHqYwN1zCgsnAiBHzeCmLOniQqIV6IlgQ5e5qPtrr2jGxmxqriWQq7TMnCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIX%2FdWYWa8%2Bgzsb8SKtwDtaQyGOddoEOrNxeBaowNTEZTuNgUdwi%2FBLgEd%2BvgZ9ybAjOAu3z38OLaUm9vKvBmSfg8MqGBzY6bN26S914PP1q4WP1VLTC%2F4dvMt8f%2FyQBgEg9ywm6Op9SLMHZbM4K11wkuEA7ht7u2Vjw36E1zSRKiHSsZ9cP2ioK7IduemlGe5m3HPbXCmquQRQhcNrcFDnK7GHWK%2BFUiTa9J6g87CXu%2BiM%2BgIoffEDew0uNuT8wEWMSSjU7UfSngz8GSgERqdE3JtI2NoTC0xHNhjPth8r9AzISvcwCnW5ivkDsTDapaGVTJ12ePDNzNkLsbGrjNxrjSWTxPtMnrKBoal0BRjsnYWJ3dS3bHN2l66HuHWeV2ROJss6ddtfHCBmH93ry2UAT%2Fw7t1XM6nGL9ts6a2BJnp%2F7VENyucWB9tpXF4wWsWPKOQKW%2FE2D9lmtnccOr%2Fc%2BPC9taPQkh4CUWuvuvgqxys6z%2B%2B8nFh5svl7GZzuUUWl2vOcw0l4Xq693eWDikq8zEtrRh41w21pMZcv4uGI%2BIauiTxEYO6Aybcg%2FIJwlbh6d9k3QPQTbu3WT1x2%2FQp6bgH9qpN0NDlLVQ3aKW%2F21%2FpgPpRz3u%2Bd2dC8sbfpbdHxasQ4iagpqjihfowruz5vgY6pgGg9oL6d8X13HeNrQmg67ZJpJvZazjz7wHHk61thmSgH9jIU9Ksp6XNrJYqR8ZjrxgU4qqj430URlDUvzSBGSbFg8%2FFwI3o5n12Vgzs3uml9EYktwgmBTwOtvvTjeOUs9iifik07dDG86VNbeELLjtVPo%2B7e2hgDMIQKQxaYTKLp4KP80z5YrE7C4o6n9rIP%2FitmzcB%2BhlSpUMzm6yyFyjkavS3QPvG&X-Amz-Signature=bc803ebe8628f506cfc9a8f560716cba56423bede2cfaa45c6ef95399d193808&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJWI2BR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGr1kpXF3nFthy3sTXmkpeQZ3GBzQrr3rHqYwN1zCgsnAiBHzeCmLOniQqIV6IlgQ5e5qPtrr2jGxmxqriWQq7TMnCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIX%2FdWYWa8%2Bgzsb8SKtwDtaQyGOddoEOrNxeBaowNTEZTuNgUdwi%2FBLgEd%2BvgZ9ybAjOAu3z38OLaUm9vKvBmSfg8MqGBzY6bN26S914PP1q4WP1VLTC%2F4dvMt8f%2FyQBgEg9ywm6Op9SLMHZbM4K11wkuEA7ht7u2Vjw36E1zSRKiHSsZ9cP2ioK7IduemlGe5m3HPbXCmquQRQhcNrcFDnK7GHWK%2BFUiTa9J6g87CXu%2BiM%2BgIoffEDew0uNuT8wEWMSSjU7UfSngz8GSgERqdE3JtI2NoTC0xHNhjPth8r9AzISvcwCnW5ivkDsTDapaGVTJ12ePDNzNkLsbGrjNxrjSWTxPtMnrKBoal0BRjsnYWJ3dS3bHN2l66HuHWeV2ROJss6ddtfHCBmH93ry2UAT%2Fw7t1XM6nGL9ts6a2BJnp%2F7VENyucWB9tpXF4wWsWPKOQKW%2FE2D9lmtnccOr%2Fc%2BPC9taPQkh4CUWuvuvgqxys6z%2B%2B8nFh5svl7GZzuUUWl2vOcw0l4Xq693eWDikq8zEtrRh41w21pMZcv4uGI%2BIauiTxEYO6Aybcg%2FIJwlbh6d9k3QPQTbu3WT1x2%2FQp6bgH9qpN0NDlLVQ3aKW%2F21%2FpgPpRz3u%2Bd2dC8sbfpbdHxasQ4iagpqjihfowruz5vgY6pgGg9oL6d8X13HeNrQmg67ZJpJvZazjz7wHHk61thmSgH9jIU9Ksp6XNrJYqR8ZjrxgU4qqj430URlDUvzSBGSbFg8%2FFwI3o5n12Vgzs3uml9EYktwgmBTwOtvvTjeOUs9iifik07dDG86VNbeELLjtVPo%2B7e2hgDMIQKQxaYTKLp4KP80z5YrE7C4o6n9rIP%2FitmzcB%2BhlSpUMzm6yyFyjkavS3QPvG&X-Amz-Signature=b626c32a211d0771a9eec952eb3850b9371f6d02cd81a5cc10b7fbf006a575fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJWI2BR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGr1kpXF3nFthy3sTXmkpeQZ3GBzQrr3rHqYwN1zCgsnAiBHzeCmLOniQqIV6IlgQ5e5qPtrr2jGxmxqriWQq7TMnCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIX%2FdWYWa8%2Bgzsb8SKtwDtaQyGOddoEOrNxeBaowNTEZTuNgUdwi%2FBLgEd%2BvgZ9ybAjOAu3z38OLaUm9vKvBmSfg8MqGBzY6bN26S914PP1q4WP1VLTC%2F4dvMt8f%2FyQBgEg9ywm6Op9SLMHZbM4K11wkuEA7ht7u2Vjw36E1zSRKiHSsZ9cP2ioK7IduemlGe5m3HPbXCmquQRQhcNrcFDnK7GHWK%2BFUiTa9J6g87CXu%2BiM%2BgIoffEDew0uNuT8wEWMSSjU7UfSngz8GSgERqdE3JtI2NoTC0xHNhjPth8r9AzISvcwCnW5ivkDsTDapaGVTJ12ePDNzNkLsbGrjNxrjSWTxPtMnrKBoal0BRjsnYWJ3dS3bHN2l66HuHWeV2ROJss6ddtfHCBmH93ry2UAT%2Fw7t1XM6nGL9ts6a2BJnp%2F7VENyucWB9tpXF4wWsWPKOQKW%2FE2D9lmtnccOr%2Fc%2BPC9taPQkh4CUWuvuvgqxys6z%2B%2B8nFh5svl7GZzuUUWl2vOcw0l4Xq693eWDikq8zEtrRh41w21pMZcv4uGI%2BIauiTxEYO6Aybcg%2FIJwlbh6d9k3QPQTbu3WT1x2%2FQp6bgH9qpN0NDlLVQ3aKW%2F21%2FpgPpRz3u%2Bd2dC8sbfpbdHxasQ4iagpqjihfowruz5vgY6pgGg9oL6d8X13HeNrQmg67ZJpJvZazjz7wHHk61thmSgH9jIU9Ksp6XNrJYqR8ZjrxgU4qqj430URlDUvzSBGSbFg8%2FFwI3o5n12Vgzs3uml9EYktwgmBTwOtvvTjeOUs9iifik07dDG86VNbeELLjtVPo%2B7e2hgDMIQKQxaYTKLp4KP80z5YrE7C4o6n9rIP%2FitmzcB%2BhlSpUMzm6yyFyjkavS3QPvG&X-Amz-Signature=d587ec95861e36a2e14b31d5fe7af9b31fd40689c12c9003e0ef12fd8fda3105&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJWI2BR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGr1kpXF3nFthy3sTXmkpeQZ3GBzQrr3rHqYwN1zCgsnAiBHzeCmLOniQqIV6IlgQ5e5qPtrr2jGxmxqriWQq7TMnCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIX%2FdWYWa8%2Bgzsb8SKtwDtaQyGOddoEOrNxeBaowNTEZTuNgUdwi%2FBLgEd%2BvgZ9ybAjOAu3z38OLaUm9vKvBmSfg8MqGBzY6bN26S914PP1q4WP1VLTC%2F4dvMt8f%2FyQBgEg9ywm6Op9SLMHZbM4K11wkuEA7ht7u2Vjw36E1zSRKiHSsZ9cP2ioK7IduemlGe5m3HPbXCmquQRQhcNrcFDnK7GHWK%2BFUiTa9J6g87CXu%2BiM%2BgIoffEDew0uNuT8wEWMSSjU7UfSngz8GSgERqdE3JtI2NoTC0xHNhjPth8r9AzISvcwCnW5ivkDsTDapaGVTJ12ePDNzNkLsbGrjNxrjSWTxPtMnrKBoal0BRjsnYWJ3dS3bHN2l66HuHWeV2ROJss6ddtfHCBmH93ry2UAT%2Fw7t1XM6nGL9ts6a2BJnp%2F7VENyucWB9tpXF4wWsWPKOQKW%2FE2D9lmtnccOr%2Fc%2BPC9taPQkh4CUWuvuvgqxys6z%2B%2B8nFh5svl7GZzuUUWl2vOcw0l4Xq693eWDikq8zEtrRh41w21pMZcv4uGI%2BIauiTxEYO6Aybcg%2FIJwlbh6d9k3QPQTbu3WT1x2%2FQp6bgH9qpN0NDlLVQ3aKW%2F21%2FpgPpRz3u%2Bd2dC8sbfpbdHxasQ4iagpqjihfowruz5vgY6pgGg9oL6d8X13HeNrQmg67ZJpJvZazjz7wHHk61thmSgH9jIU9Ksp6XNrJYqR8ZjrxgU4qqj430URlDUvzSBGSbFg8%2FFwI3o5n12Vgzs3uml9EYktwgmBTwOtvvTjeOUs9iifik07dDG86VNbeELLjtVPo%2B7e2hgDMIQKQxaYTKLp4KP80z5YrE7C4o6n9rIP%2FitmzcB%2BhlSpUMzm6yyFyjkavS3QPvG&X-Amz-Signature=90182f389c6fdb3b9dc1c54acc527cf824a3244bda57954959bf3441fcd89700&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJWI2BR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGr1kpXF3nFthy3sTXmkpeQZ3GBzQrr3rHqYwN1zCgsnAiBHzeCmLOniQqIV6IlgQ5e5qPtrr2jGxmxqriWQq7TMnCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIX%2FdWYWa8%2Bgzsb8SKtwDtaQyGOddoEOrNxeBaowNTEZTuNgUdwi%2FBLgEd%2BvgZ9ybAjOAu3z38OLaUm9vKvBmSfg8MqGBzY6bN26S914PP1q4WP1VLTC%2F4dvMt8f%2FyQBgEg9ywm6Op9SLMHZbM4K11wkuEA7ht7u2Vjw36E1zSRKiHSsZ9cP2ioK7IduemlGe5m3HPbXCmquQRQhcNrcFDnK7GHWK%2BFUiTa9J6g87CXu%2BiM%2BgIoffEDew0uNuT8wEWMSSjU7UfSngz8GSgERqdE3JtI2NoTC0xHNhjPth8r9AzISvcwCnW5ivkDsTDapaGVTJ12ePDNzNkLsbGrjNxrjSWTxPtMnrKBoal0BRjsnYWJ3dS3bHN2l66HuHWeV2ROJss6ddtfHCBmH93ry2UAT%2Fw7t1XM6nGL9ts6a2BJnp%2F7VENyucWB9tpXF4wWsWPKOQKW%2FE2D9lmtnccOr%2Fc%2BPC9taPQkh4CUWuvuvgqxys6z%2B%2B8nFh5svl7GZzuUUWl2vOcw0l4Xq693eWDikq8zEtrRh41w21pMZcv4uGI%2BIauiTxEYO6Aybcg%2FIJwlbh6d9k3QPQTbu3WT1x2%2FQp6bgH9qpN0NDlLVQ3aKW%2F21%2FpgPpRz3u%2Bd2dC8sbfpbdHxasQ4iagpqjihfowruz5vgY6pgGg9oL6d8X13HeNrQmg67ZJpJvZazjz7wHHk61thmSgH9jIU9Ksp6XNrJYqR8ZjrxgU4qqj430URlDUvzSBGSbFg8%2FFwI3o5n12Vgzs3uml9EYktwgmBTwOtvvTjeOUs9iifik07dDG86VNbeELLjtVPo%2B7e2hgDMIQKQxaYTKLp4KP80z5YrE7C4o6n9rIP%2FitmzcB%2BhlSpUMzm6yyFyjkavS3QPvG&X-Amz-Signature=aff0c4d148dfd968f6a1d6ac9e96af9f0c38816f549ac74bcd6a7f3ea701207b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJWI2BR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGr1kpXF3nFthy3sTXmkpeQZ3GBzQrr3rHqYwN1zCgsnAiBHzeCmLOniQqIV6IlgQ5e5qPtrr2jGxmxqriWQq7TMnCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIX%2FdWYWa8%2Bgzsb8SKtwDtaQyGOddoEOrNxeBaowNTEZTuNgUdwi%2FBLgEd%2BvgZ9ybAjOAu3z38OLaUm9vKvBmSfg8MqGBzY6bN26S914PP1q4WP1VLTC%2F4dvMt8f%2FyQBgEg9ywm6Op9SLMHZbM4K11wkuEA7ht7u2Vjw36E1zSRKiHSsZ9cP2ioK7IduemlGe5m3HPbXCmquQRQhcNrcFDnK7GHWK%2BFUiTa9J6g87CXu%2BiM%2BgIoffEDew0uNuT8wEWMSSjU7UfSngz8GSgERqdE3JtI2NoTC0xHNhjPth8r9AzISvcwCnW5ivkDsTDapaGVTJ12ePDNzNkLsbGrjNxrjSWTxPtMnrKBoal0BRjsnYWJ3dS3bHN2l66HuHWeV2ROJss6ddtfHCBmH93ry2UAT%2Fw7t1XM6nGL9ts6a2BJnp%2F7VENyucWB9tpXF4wWsWPKOQKW%2FE2D9lmtnccOr%2Fc%2BPC9taPQkh4CUWuvuvgqxys6z%2B%2B8nFh5svl7GZzuUUWl2vOcw0l4Xq693eWDikq8zEtrRh41w21pMZcv4uGI%2BIauiTxEYO6Aybcg%2FIJwlbh6d9k3QPQTbu3WT1x2%2FQp6bgH9qpN0NDlLVQ3aKW%2F21%2FpgPpRz3u%2Bd2dC8sbfpbdHxasQ4iagpqjihfowruz5vgY6pgGg9oL6d8X13HeNrQmg67ZJpJvZazjz7wHHk61thmSgH9jIU9Ksp6XNrJYqR8ZjrxgU4qqj430URlDUvzSBGSbFg8%2FFwI3o5n12Vgzs3uml9EYktwgmBTwOtvvTjeOUs9iifik07dDG86VNbeELLjtVPo%2B7e2hgDMIQKQxaYTKLp4KP80z5YrE7C4o6n9rIP%2FitmzcB%2BhlSpUMzm6yyFyjkavS3QPvG&X-Amz-Signature=95289f4a28e79169672cb72af85624a0f240b1fc05019a0fc8862c9eb385d9e2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
