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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCOQN4B%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUFnGHtqqBU9tkigRhqqf9piBTlIX0s3yYNX4fGoaKXAiBV6DeVpFY5Knsb8H9YuxNog%2Fm75PTPD8hrLiEodah7ZCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH0kgFacSXG8vpm2sKtwD0RRTtkzNY9Qb8hgklve5TJOy8efr7DqIauFHBnGg4xKMeVyfaQU8KmbSyPxBETX2cwUcLfm40rB3z3jG2zfjM8KikVtv2FILYC0IzpQlQpoGBbLC3F2%2B4Ps6rV3QaeQx4lS6LmRZ9EuFaGslNeKf1kEQiHLTS13dU%2Fldsdj6bwSrBhR2E3f6wUSMw%2FUwlwYN4frFJowCiaOuAIGPUysfqmKtWKZiDF4h%2B2oLD2Jl6STyk1Judenq5E48mSlGmB419zpipgYPpJLSgYQqF79TXmzHCqI9Wpp2WB%2F2uwglsdPxity3QLlWA9bLmPhyIIH%2Br4kG0M%2BWPQwTX2eQSaV9K8UQ1GjIiw5cDHfspsgx%2BLHNTAJrpdRFIdOMML4tNph6SljdquziZheGqXZ3i73nhgvJ55%2B7tya8lSu7uDA7Yd9C%2BjDnmAvZ53U4U0b3Q66Iiye%2FIGLhyUQ4m8elPn1ZKP2Githi9MMHF%2BJslL3b3NeTumpLRAzBwl%2BR5gTIH6oJqKRp7wmSyBoOs1PEWUvOuz4LGYQF8WlnmlcnyEIRmrY40f5ti3yUsQJkDig6NOG5D45RjR046uAy409Y70tjhbdK3djaRJVvHco5ymO8GawvxOSWHztSr%2BQ0Fagwx%2FSAwwY6pgGHVxUMMN9fM3ZZTyHtajSFr4O1xe7T8MmzgSPcP9eINPpVCureQyePg02JT107l40RVz0axKOaqAc1F%2F9KsVXDr8qDoGijnG%2FUsVdb2ubsFhwWx25GwhYn1zXcQBdiMqb2oBPegRLZZnsB0hqPo%2FiqJmxDxdosIfyyEh77EweQBKqz0Ara5%2BmE8Y%2Fx4pfeAIdIn0IL3AdaH3bGvxlrk6io8NEU7fNS&X-Amz-Signature=d6baf6750892a33a90295bc9a1e7649eb8b81fbff9811a40b278be0a66a7ad25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCOQN4B%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUFnGHtqqBU9tkigRhqqf9piBTlIX0s3yYNX4fGoaKXAiBV6DeVpFY5Knsb8H9YuxNog%2Fm75PTPD8hrLiEodah7ZCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH0kgFacSXG8vpm2sKtwD0RRTtkzNY9Qb8hgklve5TJOy8efr7DqIauFHBnGg4xKMeVyfaQU8KmbSyPxBETX2cwUcLfm40rB3z3jG2zfjM8KikVtv2FILYC0IzpQlQpoGBbLC3F2%2B4Ps6rV3QaeQx4lS6LmRZ9EuFaGslNeKf1kEQiHLTS13dU%2Fldsdj6bwSrBhR2E3f6wUSMw%2FUwlwYN4frFJowCiaOuAIGPUysfqmKtWKZiDF4h%2B2oLD2Jl6STyk1Judenq5E48mSlGmB419zpipgYPpJLSgYQqF79TXmzHCqI9Wpp2WB%2F2uwglsdPxity3QLlWA9bLmPhyIIH%2Br4kG0M%2BWPQwTX2eQSaV9K8UQ1GjIiw5cDHfspsgx%2BLHNTAJrpdRFIdOMML4tNph6SljdquziZheGqXZ3i73nhgvJ55%2B7tya8lSu7uDA7Yd9C%2BjDnmAvZ53U4U0b3Q66Iiye%2FIGLhyUQ4m8elPn1ZKP2Githi9MMHF%2BJslL3b3NeTumpLRAzBwl%2BR5gTIH6oJqKRp7wmSyBoOs1PEWUvOuz4LGYQF8WlnmlcnyEIRmrY40f5ti3yUsQJkDig6NOG5D45RjR046uAy409Y70tjhbdK3djaRJVvHco5ymO8GawvxOSWHztSr%2BQ0Fagwx%2FSAwwY6pgGHVxUMMN9fM3ZZTyHtajSFr4O1xe7T8MmzgSPcP9eINPpVCureQyePg02JT107l40RVz0axKOaqAc1F%2F9KsVXDr8qDoGijnG%2FUsVdb2ubsFhwWx25GwhYn1zXcQBdiMqb2oBPegRLZZnsB0hqPo%2FiqJmxDxdosIfyyEh77EweQBKqz0Ara5%2BmE8Y%2Fx4pfeAIdIn0IL3AdaH3bGvxlrk6io8NEU7fNS&X-Amz-Signature=bdb692c127f5eac8c5a1257e7c74822a8ce8b34a853997eb737fa0dd58d27315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCOQN4B%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUFnGHtqqBU9tkigRhqqf9piBTlIX0s3yYNX4fGoaKXAiBV6DeVpFY5Knsb8H9YuxNog%2Fm75PTPD8hrLiEodah7ZCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH0kgFacSXG8vpm2sKtwD0RRTtkzNY9Qb8hgklve5TJOy8efr7DqIauFHBnGg4xKMeVyfaQU8KmbSyPxBETX2cwUcLfm40rB3z3jG2zfjM8KikVtv2FILYC0IzpQlQpoGBbLC3F2%2B4Ps6rV3QaeQx4lS6LmRZ9EuFaGslNeKf1kEQiHLTS13dU%2Fldsdj6bwSrBhR2E3f6wUSMw%2FUwlwYN4frFJowCiaOuAIGPUysfqmKtWKZiDF4h%2B2oLD2Jl6STyk1Judenq5E48mSlGmB419zpipgYPpJLSgYQqF79TXmzHCqI9Wpp2WB%2F2uwglsdPxity3QLlWA9bLmPhyIIH%2Br4kG0M%2BWPQwTX2eQSaV9K8UQ1GjIiw5cDHfspsgx%2BLHNTAJrpdRFIdOMML4tNph6SljdquziZheGqXZ3i73nhgvJ55%2B7tya8lSu7uDA7Yd9C%2BjDnmAvZ53U4U0b3Q66Iiye%2FIGLhyUQ4m8elPn1ZKP2Githi9MMHF%2BJslL3b3NeTumpLRAzBwl%2BR5gTIH6oJqKRp7wmSyBoOs1PEWUvOuz4LGYQF8WlnmlcnyEIRmrY40f5ti3yUsQJkDig6NOG5D45RjR046uAy409Y70tjhbdK3djaRJVvHco5ymO8GawvxOSWHztSr%2BQ0Fagwx%2FSAwwY6pgGHVxUMMN9fM3ZZTyHtajSFr4O1xe7T8MmzgSPcP9eINPpVCureQyePg02JT107l40RVz0axKOaqAc1F%2F9KsVXDr8qDoGijnG%2FUsVdb2ubsFhwWx25GwhYn1zXcQBdiMqb2oBPegRLZZnsB0hqPo%2FiqJmxDxdosIfyyEh77EweQBKqz0Ara5%2BmE8Y%2Fx4pfeAIdIn0IL3AdaH3bGvxlrk6io8NEU7fNS&X-Amz-Signature=32839d39f9e166b507fcf54393fb496d985f0799a0130ece9ef4203066650c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCOQN4B%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUFnGHtqqBU9tkigRhqqf9piBTlIX0s3yYNX4fGoaKXAiBV6DeVpFY5Knsb8H9YuxNog%2Fm75PTPD8hrLiEodah7ZCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH0kgFacSXG8vpm2sKtwD0RRTtkzNY9Qb8hgklve5TJOy8efr7DqIauFHBnGg4xKMeVyfaQU8KmbSyPxBETX2cwUcLfm40rB3z3jG2zfjM8KikVtv2FILYC0IzpQlQpoGBbLC3F2%2B4Ps6rV3QaeQx4lS6LmRZ9EuFaGslNeKf1kEQiHLTS13dU%2Fldsdj6bwSrBhR2E3f6wUSMw%2FUwlwYN4frFJowCiaOuAIGPUysfqmKtWKZiDF4h%2B2oLD2Jl6STyk1Judenq5E48mSlGmB419zpipgYPpJLSgYQqF79TXmzHCqI9Wpp2WB%2F2uwglsdPxity3QLlWA9bLmPhyIIH%2Br4kG0M%2BWPQwTX2eQSaV9K8UQ1GjIiw5cDHfspsgx%2BLHNTAJrpdRFIdOMML4tNph6SljdquziZheGqXZ3i73nhgvJ55%2B7tya8lSu7uDA7Yd9C%2BjDnmAvZ53U4U0b3Q66Iiye%2FIGLhyUQ4m8elPn1ZKP2Githi9MMHF%2BJslL3b3NeTumpLRAzBwl%2BR5gTIH6oJqKRp7wmSyBoOs1PEWUvOuz4LGYQF8WlnmlcnyEIRmrY40f5ti3yUsQJkDig6NOG5D45RjR046uAy409Y70tjhbdK3djaRJVvHco5ymO8GawvxOSWHztSr%2BQ0Fagwx%2FSAwwY6pgGHVxUMMN9fM3ZZTyHtajSFr4O1xe7T8MmzgSPcP9eINPpVCureQyePg02JT107l40RVz0axKOaqAc1F%2F9KsVXDr8qDoGijnG%2FUsVdb2ubsFhwWx25GwhYn1zXcQBdiMqb2oBPegRLZZnsB0hqPo%2FiqJmxDxdosIfyyEh77EweQBKqz0Ara5%2BmE8Y%2Fx4pfeAIdIn0IL3AdaH3bGvxlrk6io8NEU7fNS&X-Amz-Signature=2ae0770b52335c000eabf19559655a02bb520c781724e1bc7ccac1323738e7b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCOQN4B%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUFnGHtqqBU9tkigRhqqf9piBTlIX0s3yYNX4fGoaKXAiBV6DeVpFY5Knsb8H9YuxNog%2Fm75PTPD8hrLiEodah7ZCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH0kgFacSXG8vpm2sKtwD0RRTtkzNY9Qb8hgklve5TJOy8efr7DqIauFHBnGg4xKMeVyfaQU8KmbSyPxBETX2cwUcLfm40rB3z3jG2zfjM8KikVtv2FILYC0IzpQlQpoGBbLC3F2%2B4Ps6rV3QaeQx4lS6LmRZ9EuFaGslNeKf1kEQiHLTS13dU%2Fldsdj6bwSrBhR2E3f6wUSMw%2FUwlwYN4frFJowCiaOuAIGPUysfqmKtWKZiDF4h%2B2oLD2Jl6STyk1Judenq5E48mSlGmB419zpipgYPpJLSgYQqF79TXmzHCqI9Wpp2WB%2F2uwglsdPxity3QLlWA9bLmPhyIIH%2Br4kG0M%2BWPQwTX2eQSaV9K8UQ1GjIiw5cDHfspsgx%2BLHNTAJrpdRFIdOMML4tNph6SljdquziZheGqXZ3i73nhgvJ55%2B7tya8lSu7uDA7Yd9C%2BjDnmAvZ53U4U0b3Q66Iiye%2FIGLhyUQ4m8elPn1ZKP2Githi9MMHF%2BJslL3b3NeTumpLRAzBwl%2BR5gTIH6oJqKRp7wmSyBoOs1PEWUvOuz4LGYQF8WlnmlcnyEIRmrY40f5ti3yUsQJkDig6NOG5D45RjR046uAy409Y70tjhbdK3djaRJVvHco5ymO8GawvxOSWHztSr%2BQ0Fagwx%2FSAwwY6pgGHVxUMMN9fM3ZZTyHtajSFr4O1xe7T8MmzgSPcP9eINPpVCureQyePg02JT107l40RVz0axKOaqAc1F%2F9KsVXDr8qDoGijnG%2FUsVdb2ubsFhwWx25GwhYn1zXcQBdiMqb2oBPegRLZZnsB0hqPo%2FiqJmxDxdosIfyyEh77EweQBKqz0Ara5%2BmE8Y%2Fx4pfeAIdIn0IL3AdaH3bGvxlrk6io8NEU7fNS&X-Amz-Signature=dbb655a12b3dad6939df23b5dba51ecfd2e31d98edf3b4083dcfd7a440904c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCOQN4B%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUFnGHtqqBU9tkigRhqqf9piBTlIX0s3yYNX4fGoaKXAiBV6DeVpFY5Knsb8H9YuxNog%2Fm75PTPD8hrLiEodah7ZCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH0kgFacSXG8vpm2sKtwD0RRTtkzNY9Qb8hgklve5TJOy8efr7DqIauFHBnGg4xKMeVyfaQU8KmbSyPxBETX2cwUcLfm40rB3z3jG2zfjM8KikVtv2FILYC0IzpQlQpoGBbLC3F2%2B4Ps6rV3QaeQx4lS6LmRZ9EuFaGslNeKf1kEQiHLTS13dU%2Fldsdj6bwSrBhR2E3f6wUSMw%2FUwlwYN4frFJowCiaOuAIGPUysfqmKtWKZiDF4h%2B2oLD2Jl6STyk1Judenq5E48mSlGmB419zpipgYPpJLSgYQqF79TXmzHCqI9Wpp2WB%2F2uwglsdPxity3QLlWA9bLmPhyIIH%2Br4kG0M%2BWPQwTX2eQSaV9K8UQ1GjIiw5cDHfspsgx%2BLHNTAJrpdRFIdOMML4tNph6SljdquziZheGqXZ3i73nhgvJ55%2B7tya8lSu7uDA7Yd9C%2BjDnmAvZ53U4U0b3Q66Iiye%2FIGLhyUQ4m8elPn1ZKP2Githi9MMHF%2BJslL3b3NeTumpLRAzBwl%2BR5gTIH6oJqKRp7wmSyBoOs1PEWUvOuz4LGYQF8WlnmlcnyEIRmrY40f5ti3yUsQJkDig6NOG5D45RjR046uAy409Y70tjhbdK3djaRJVvHco5ymO8GawvxOSWHztSr%2BQ0Fagwx%2FSAwwY6pgGHVxUMMN9fM3ZZTyHtajSFr4O1xe7T8MmzgSPcP9eINPpVCureQyePg02JT107l40RVz0axKOaqAc1F%2F9KsVXDr8qDoGijnG%2FUsVdb2ubsFhwWx25GwhYn1zXcQBdiMqb2oBPegRLZZnsB0hqPo%2FiqJmxDxdosIfyyEh77EweQBKqz0Ara5%2BmE8Y%2Fx4pfeAIdIn0IL3AdaH3bGvxlrk6io8NEU7fNS&X-Amz-Signature=956c7263267df701933f32f7b7b1827bc0fd4188f3eb716f0044c7b26ea70bb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCOQN4B%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUFnGHtqqBU9tkigRhqqf9piBTlIX0s3yYNX4fGoaKXAiBV6DeVpFY5Knsb8H9YuxNog%2Fm75PTPD8hrLiEodah7ZCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH0kgFacSXG8vpm2sKtwD0RRTtkzNY9Qb8hgklve5TJOy8efr7DqIauFHBnGg4xKMeVyfaQU8KmbSyPxBETX2cwUcLfm40rB3z3jG2zfjM8KikVtv2FILYC0IzpQlQpoGBbLC3F2%2B4Ps6rV3QaeQx4lS6LmRZ9EuFaGslNeKf1kEQiHLTS13dU%2Fldsdj6bwSrBhR2E3f6wUSMw%2FUwlwYN4frFJowCiaOuAIGPUysfqmKtWKZiDF4h%2B2oLD2Jl6STyk1Judenq5E48mSlGmB419zpipgYPpJLSgYQqF79TXmzHCqI9Wpp2WB%2F2uwglsdPxity3QLlWA9bLmPhyIIH%2Br4kG0M%2BWPQwTX2eQSaV9K8UQ1GjIiw5cDHfspsgx%2BLHNTAJrpdRFIdOMML4tNph6SljdquziZheGqXZ3i73nhgvJ55%2B7tya8lSu7uDA7Yd9C%2BjDnmAvZ53U4U0b3Q66Iiye%2FIGLhyUQ4m8elPn1ZKP2Githi9MMHF%2BJslL3b3NeTumpLRAzBwl%2BR5gTIH6oJqKRp7wmSyBoOs1PEWUvOuz4LGYQF8WlnmlcnyEIRmrY40f5ti3yUsQJkDig6NOG5D45RjR046uAy409Y70tjhbdK3djaRJVvHco5ymO8GawvxOSWHztSr%2BQ0Fagwx%2FSAwwY6pgGHVxUMMN9fM3ZZTyHtajSFr4O1xe7T8MmzgSPcP9eINPpVCureQyePg02JT107l40RVz0axKOaqAc1F%2F9KsVXDr8qDoGijnG%2FUsVdb2ubsFhwWx25GwhYn1zXcQBdiMqb2oBPegRLZZnsB0hqPo%2FiqJmxDxdosIfyyEh77EweQBKqz0Ara5%2BmE8Y%2Fx4pfeAIdIn0IL3AdaH3bGvxlrk6io8NEU7fNS&X-Amz-Signature=aaa848e569ac3af29971fdcc0036207041017a5480e7bb71ddc37f43d9c19e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
