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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPM75O7X%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDVP6TIPnl1UC%2BLZDcqWhFHxhg0j7s1mSEHsFPOsRtyFQIhAIRZnuuHvXubGoA%2FvdVKS8y6aIAKFrxiUoqX9TFBOxy4Kv8DCHcQABoMNjM3NDIzMTgzODA1Igy0ysj%2BYKmOEs9%2BaPIq3APE3bXOmT%2FHD4dzWrBxRwgZflGLHtiqV17EipfXD8tWcQJ1PUlOZOx3cvW3F7VjS6XCV6RKsKj0lhPWUrOKCh6b1t%2FTyAw8c1xoWHe13Ac7UfFyM9LjEJNh9Wxfw2i5nRX%2FbFS%2BLaF5YLIUoB%2BSRJK1ot8OhXxID69i2qlSxTmNmlPtq%2FGvWLeo437S2Xg4OxYiPyISLxdyObEe6xKNTI32UF%2BRKdKsfSK3T%2B6480HVD3ZfyzYkwxi8on2%2FhY7riRW%2FJD5n4gBt3L7%2FdeMMKqL80vNfb7tHWiNerLm8QHX1T8urNCUYceTJeg%2BzqwDUV3RYPHeSplw3IY52HP8XD%2FfL19IN5gT6PrWqM1t2G4e0SIBivCfAy63Oymjg3MbfPNvBJ1GvLZUTs5ynvMiW%2FtU0iK3nYj6YtSFdyDnOCHYBR52gwZc61HzADBV5%2BfOTnOXvHKHrmseEeybKzGVjsvMHpbXRpitMLMSzpm3sBWXKjAc6dOhNKvd5OTXeJ3OaDhqFqY48ZBqVY2U5zmlGFGPqoOboNMPKewTETWXeao6uxIa15c3cLsOTH%2ByzhYedaun%2B5exKWjICldcO4vsNiE9R2HtT5VbT695CholuvVNjidsPhdEiQxHxcZmjsjDLneu%2BBjqkAehd10fxcUqHpphEiH9X4Nq5uSLU0mUjpLQRbLG5LYPwlYc741QwUAy9iqHHTLhz4LjUsAVpBbDGDI7bb80Q%2Bm6k3PMJjHnNP2OXGAAGSr%2FKpy9Lj%2Ft8TniQBxIbB4RY1jaqRatMGt04upVSXO9BKPPDM4vHW39KNtO3t5R05owcxw8o4tHfpt2IWIQY4qXDAAzDAIYh8hzUBGvcLZ8TIKKp5961&X-Amz-Signature=af912b75a50c67d7b1927c1ac911b9c5e49c8bbca26b0e35e01aeb5882a59420&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPM75O7X%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDVP6TIPnl1UC%2BLZDcqWhFHxhg0j7s1mSEHsFPOsRtyFQIhAIRZnuuHvXubGoA%2FvdVKS8y6aIAKFrxiUoqX9TFBOxy4Kv8DCHcQABoMNjM3NDIzMTgzODA1Igy0ysj%2BYKmOEs9%2BaPIq3APE3bXOmT%2FHD4dzWrBxRwgZflGLHtiqV17EipfXD8tWcQJ1PUlOZOx3cvW3F7VjS6XCV6RKsKj0lhPWUrOKCh6b1t%2FTyAw8c1xoWHe13Ac7UfFyM9LjEJNh9Wxfw2i5nRX%2FbFS%2BLaF5YLIUoB%2BSRJK1ot8OhXxID69i2qlSxTmNmlPtq%2FGvWLeo437S2Xg4OxYiPyISLxdyObEe6xKNTI32UF%2BRKdKsfSK3T%2B6480HVD3ZfyzYkwxi8on2%2FhY7riRW%2FJD5n4gBt3L7%2FdeMMKqL80vNfb7tHWiNerLm8QHX1T8urNCUYceTJeg%2BzqwDUV3RYPHeSplw3IY52HP8XD%2FfL19IN5gT6PrWqM1t2G4e0SIBivCfAy63Oymjg3MbfPNvBJ1GvLZUTs5ynvMiW%2FtU0iK3nYj6YtSFdyDnOCHYBR52gwZc61HzADBV5%2BfOTnOXvHKHrmseEeybKzGVjsvMHpbXRpitMLMSzpm3sBWXKjAc6dOhNKvd5OTXeJ3OaDhqFqY48ZBqVY2U5zmlGFGPqoOboNMPKewTETWXeao6uxIa15c3cLsOTH%2ByzhYedaun%2B5exKWjICldcO4vsNiE9R2HtT5VbT695CholuvVNjidsPhdEiQxHxcZmjsjDLneu%2BBjqkAehd10fxcUqHpphEiH9X4Nq5uSLU0mUjpLQRbLG5LYPwlYc741QwUAy9iqHHTLhz4LjUsAVpBbDGDI7bb80Q%2Bm6k3PMJjHnNP2OXGAAGSr%2FKpy9Lj%2Ft8TniQBxIbB4RY1jaqRatMGt04upVSXO9BKPPDM4vHW39KNtO3t5R05owcxw8o4tHfpt2IWIQY4qXDAAzDAIYh8hzUBGvcLZ8TIKKp5961&X-Amz-Signature=8023a18fb11ddee77edfd079f164066a2323e05934fc109d8d81db68e7a5ceae&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPM75O7X%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDVP6TIPnl1UC%2BLZDcqWhFHxhg0j7s1mSEHsFPOsRtyFQIhAIRZnuuHvXubGoA%2FvdVKS8y6aIAKFrxiUoqX9TFBOxy4Kv8DCHcQABoMNjM3NDIzMTgzODA1Igy0ysj%2BYKmOEs9%2BaPIq3APE3bXOmT%2FHD4dzWrBxRwgZflGLHtiqV17EipfXD8tWcQJ1PUlOZOx3cvW3F7VjS6XCV6RKsKj0lhPWUrOKCh6b1t%2FTyAw8c1xoWHe13Ac7UfFyM9LjEJNh9Wxfw2i5nRX%2FbFS%2BLaF5YLIUoB%2BSRJK1ot8OhXxID69i2qlSxTmNmlPtq%2FGvWLeo437S2Xg4OxYiPyISLxdyObEe6xKNTI32UF%2BRKdKsfSK3T%2B6480HVD3ZfyzYkwxi8on2%2FhY7riRW%2FJD5n4gBt3L7%2FdeMMKqL80vNfb7tHWiNerLm8QHX1T8urNCUYceTJeg%2BzqwDUV3RYPHeSplw3IY52HP8XD%2FfL19IN5gT6PrWqM1t2G4e0SIBivCfAy63Oymjg3MbfPNvBJ1GvLZUTs5ynvMiW%2FtU0iK3nYj6YtSFdyDnOCHYBR52gwZc61HzADBV5%2BfOTnOXvHKHrmseEeybKzGVjsvMHpbXRpitMLMSzpm3sBWXKjAc6dOhNKvd5OTXeJ3OaDhqFqY48ZBqVY2U5zmlGFGPqoOboNMPKewTETWXeao6uxIa15c3cLsOTH%2ByzhYedaun%2B5exKWjICldcO4vsNiE9R2HtT5VbT695CholuvVNjidsPhdEiQxHxcZmjsjDLneu%2BBjqkAehd10fxcUqHpphEiH9X4Nq5uSLU0mUjpLQRbLG5LYPwlYc741QwUAy9iqHHTLhz4LjUsAVpBbDGDI7bb80Q%2Bm6k3PMJjHnNP2OXGAAGSr%2FKpy9Lj%2Ft8TniQBxIbB4RY1jaqRatMGt04upVSXO9BKPPDM4vHW39KNtO3t5R05owcxw8o4tHfpt2IWIQY4qXDAAzDAIYh8hzUBGvcLZ8TIKKp5961&X-Amz-Signature=693d7c9794f95548d90b2fa2c64786e17ff2e7bd96b17281e7dce1d95b4a8926&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPM75O7X%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDVP6TIPnl1UC%2BLZDcqWhFHxhg0j7s1mSEHsFPOsRtyFQIhAIRZnuuHvXubGoA%2FvdVKS8y6aIAKFrxiUoqX9TFBOxy4Kv8DCHcQABoMNjM3NDIzMTgzODA1Igy0ysj%2BYKmOEs9%2BaPIq3APE3bXOmT%2FHD4dzWrBxRwgZflGLHtiqV17EipfXD8tWcQJ1PUlOZOx3cvW3F7VjS6XCV6RKsKj0lhPWUrOKCh6b1t%2FTyAw8c1xoWHe13Ac7UfFyM9LjEJNh9Wxfw2i5nRX%2FbFS%2BLaF5YLIUoB%2BSRJK1ot8OhXxID69i2qlSxTmNmlPtq%2FGvWLeo437S2Xg4OxYiPyISLxdyObEe6xKNTI32UF%2BRKdKsfSK3T%2B6480HVD3ZfyzYkwxi8on2%2FhY7riRW%2FJD5n4gBt3L7%2FdeMMKqL80vNfb7tHWiNerLm8QHX1T8urNCUYceTJeg%2BzqwDUV3RYPHeSplw3IY52HP8XD%2FfL19IN5gT6PrWqM1t2G4e0SIBivCfAy63Oymjg3MbfPNvBJ1GvLZUTs5ynvMiW%2FtU0iK3nYj6YtSFdyDnOCHYBR52gwZc61HzADBV5%2BfOTnOXvHKHrmseEeybKzGVjsvMHpbXRpitMLMSzpm3sBWXKjAc6dOhNKvd5OTXeJ3OaDhqFqY48ZBqVY2U5zmlGFGPqoOboNMPKewTETWXeao6uxIa15c3cLsOTH%2ByzhYedaun%2B5exKWjICldcO4vsNiE9R2HtT5VbT695CholuvVNjidsPhdEiQxHxcZmjsjDLneu%2BBjqkAehd10fxcUqHpphEiH9X4Nq5uSLU0mUjpLQRbLG5LYPwlYc741QwUAy9iqHHTLhz4LjUsAVpBbDGDI7bb80Q%2Bm6k3PMJjHnNP2OXGAAGSr%2FKpy9Lj%2Ft8TniQBxIbB4RY1jaqRatMGt04upVSXO9BKPPDM4vHW39KNtO3t5R05owcxw8o4tHfpt2IWIQY4qXDAAzDAIYh8hzUBGvcLZ8TIKKp5961&X-Amz-Signature=402ba120c61efb698124c791fd6ad887c8b0b04b89b4df7a49ab8759c96f5cef&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPM75O7X%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDVP6TIPnl1UC%2BLZDcqWhFHxhg0j7s1mSEHsFPOsRtyFQIhAIRZnuuHvXubGoA%2FvdVKS8y6aIAKFrxiUoqX9TFBOxy4Kv8DCHcQABoMNjM3NDIzMTgzODA1Igy0ysj%2BYKmOEs9%2BaPIq3APE3bXOmT%2FHD4dzWrBxRwgZflGLHtiqV17EipfXD8tWcQJ1PUlOZOx3cvW3F7VjS6XCV6RKsKj0lhPWUrOKCh6b1t%2FTyAw8c1xoWHe13Ac7UfFyM9LjEJNh9Wxfw2i5nRX%2FbFS%2BLaF5YLIUoB%2BSRJK1ot8OhXxID69i2qlSxTmNmlPtq%2FGvWLeo437S2Xg4OxYiPyISLxdyObEe6xKNTI32UF%2BRKdKsfSK3T%2B6480HVD3ZfyzYkwxi8on2%2FhY7riRW%2FJD5n4gBt3L7%2FdeMMKqL80vNfb7tHWiNerLm8QHX1T8urNCUYceTJeg%2BzqwDUV3RYPHeSplw3IY52HP8XD%2FfL19IN5gT6PrWqM1t2G4e0SIBivCfAy63Oymjg3MbfPNvBJ1GvLZUTs5ynvMiW%2FtU0iK3nYj6YtSFdyDnOCHYBR52gwZc61HzADBV5%2BfOTnOXvHKHrmseEeybKzGVjsvMHpbXRpitMLMSzpm3sBWXKjAc6dOhNKvd5OTXeJ3OaDhqFqY48ZBqVY2U5zmlGFGPqoOboNMPKewTETWXeao6uxIa15c3cLsOTH%2ByzhYedaun%2B5exKWjICldcO4vsNiE9R2HtT5VbT695CholuvVNjidsPhdEiQxHxcZmjsjDLneu%2BBjqkAehd10fxcUqHpphEiH9X4Nq5uSLU0mUjpLQRbLG5LYPwlYc741QwUAy9iqHHTLhz4LjUsAVpBbDGDI7bb80Q%2Bm6k3PMJjHnNP2OXGAAGSr%2FKpy9Lj%2Ft8TniQBxIbB4RY1jaqRatMGt04upVSXO9BKPPDM4vHW39KNtO3t5R05owcxw8o4tHfpt2IWIQY4qXDAAzDAIYh8hzUBGvcLZ8TIKKp5961&X-Amz-Signature=8c5f63ecfe3a7aaf0d30cc00820304bc1244c45fcd0048ae4f1ec8396f37800a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPM75O7X%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDVP6TIPnl1UC%2BLZDcqWhFHxhg0j7s1mSEHsFPOsRtyFQIhAIRZnuuHvXubGoA%2FvdVKS8y6aIAKFrxiUoqX9TFBOxy4Kv8DCHcQABoMNjM3NDIzMTgzODA1Igy0ysj%2BYKmOEs9%2BaPIq3APE3bXOmT%2FHD4dzWrBxRwgZflGLHtiqV17EipfXD8tWcQJ1PUlOZOx3cvW3F7VjS6XCV6RKsKj0lhPWUrOKCh6b1t%2FTyAw8c1xoWHe13Ac7UfFyM9LjEJNh9Wxfw2i5nRX%2FbFS%2BLaF5YLIUoB%2BSRJK1ot8OhXxID69i2qlSxTmNmlPtq%2FGvWLeo437S2Xg4OxYiPyISLxdyObEe6xKNTI32UF%2BRKdKsfSK3T%2B6480HVD3ZfyzYkwxi8on2%2FhY7riRW%2FJD5n4gBt3L7%2FdeMMKqL80vNfb7tHWiNerLm8QHX1T8urNCUYceTJeg%2BzqwDUV3RYPHeSplw3IY52HP8XD%2FfL19IN5gT6PrWqM1t2G4e0SIBivCfAy63Oymjg3MbfPNvBJ1GvLZUTs5ynvMiW%2FtU0iK3nYj6YtSFdyDnOCHYBR52gwZc61HzADBV5%2BfOTnOXvHKHrmseEeybKzGVjsvMHpbXRpitMLMSzpm3sBWXKjAc6dOhNKvd5OTXeJ3OaDhqFqY48ZBqVY2U5zmlGFGPqoOboNMPKewTETWXeao6uxIa15c3cLsOTH%2ByzhYedaun%2B5exKWjICldcO4vsNiE9R2HtT5VbT695CholuvVNjidsPhdEiQxHxcZmjsjDLneu%2BBjqkAehd10fxcUqHpphEiH9X4Nq5uSLU0mUjpLQRbLG5LYPwlYc741QwUAy9iqHHTLhz4LjUsAVpBbDGDI7bb80Q%2Bm6k3PMJjHnNP2OXGAAGSr%2FKpy9Lj%2Ft8TniQBxIbB4RY1jaqRatMGt04upVSXO9BKPPDM4vHW39KNtO3t5R05owcxw8o4tHfpt2IWIQY4qXDAAzDAIYh8hzUBGvcLZ8TIKKp5961&X-Amz-Signature=c3eb428ab697f6fcf4f7fad8f4b76ce5442d32f6d930250ba8586b1316304ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPM75O7X%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDVP6TIPnl1UC%2BLZDcqWhFHxhg0j7s1mSEHsFPOsRtyFQIhAIRZnuuHvXubGoA%2FvdVKS8y6aIAKFrxiUoqX9TFBOxy4Kv8DCHcQABoMNjM3NDIzMTgzODA1Igy0ysj%2BYKmOEs9%2BaPIq3APE3bXOmT%2FHD4dzWrBxRwgZflGLHtiqV17EipfXD8tWcQJ1PUlOZOx3cvW3F7VjS6XCV6RKsKj0lhPWUrOKCh6b1t%2FTyAw8c1xoWHe13Ac7UfFyM9LjEJNh9Wxfw2i5nRX%2FbFS%2BLaF5YLIUoB%2BSRJK1ot8OhXxID69i2qlSxTmNmlPtq%2FGvWLeo437S2Xg4OxYiPyISLxdyObEe6xKNTI32UF%2BRKdKsfSK3T%2B6480HVD3ZfyzYkwxi8on2%2FhY7riRW%2FJD5n4gBt3L7%2FdeMMKqL80vNfb7tHWiNerLm8QHX1T8urNCUYceTJeg%2BzqwDUV3RYPHeSplw3IY52HP8XD%2FfL19IN5gT6PrWqM1t2G4e0SIBivCfAy63Oymjg3MbfPNvBJ1GvLZUTs5ynvMiW%2FtU0iK3nYj6YtSFdyDnOCHYBR52gwZc61HzADBV5%2BfOTnOXvHKHrmseEeybKzGVjsvMHpbXRpitMLMSzpm3sBWXKjAc6dOhNKvd5OTXeJ3OaDhqFqY48ZBqVY2U5zmlGFGPqoOboNMPKewTETWXeao6uxIa15c3cLsOTH%2ByzhYedaun%2B5exKWjICldcO4vsNiE9R2HtT5VbT695CholuvVNjidsPhdEiQxHxcZmjsjDLneu%2BBjqkAehd10fxcUqHpphEiH9X4Nq5uSLU0mUjpLQRbLG5LYPwlYc741QwUAy9iqHHTLhz4LjUsAVpBbDGDI7bb80Q%2Bm6k3PMJjHnNP2OXGAAGSr%2FKpy9Lj%2Ft8TniQBxIbB4RY1jaqRatMGt04upVSXO9BKPPDM4vHW39KNtO3t5R05owcxw8o4tHfpt2IWIQY4qXDAAzDAIYh8hzUBGvcLZ8TIKKp5961&X-Amz-Signature=9114d9985a1d71e984e9903a6af8422e02c1b2725b3f358a6dacfc2e607ce35b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
