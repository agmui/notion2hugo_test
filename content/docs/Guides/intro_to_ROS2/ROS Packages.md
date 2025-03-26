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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRXNXXP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuNI54x4yvqMFas9WQjlCoqRSjeEN%2B5Yg5qLUkVcc06gIhAM4iOOOpCYKL8oPQaQyNQFzLmCiNIfA5IALhOfvP7G2vKv8DCCkQABoMNjM3NDIzMTgzODA1Igz5L81ydgsGWhRPIakq3AMmoCvXpfOnpFsTGqqfdebtFcvRtPLyn9ttSEKXisyxxx1po8XSZQKjqDSTHavu0dXKicVINnswdABerUqXro0zCkUfv%2FHlYK9a6Dbsghz9HAbJvg2t7k8T%2FWoY0FYSIwFYYxSc4N2Fv1rjeynIDiIYFtxqghynolur0Yd%2FYsMgXk%2F9%2BGaTC%2FJp3yiN%2FcmMMh6ce8OkjINP%2FItw9Fokr2XWlnI03Tkuyd5DH7pnJ4v2EyLjAYrz5vQuWQ%2BTRIaktnz6gslGTm4ozry%2BWU%2FAaetLHgpZn2MIm2H426GPFLHNHtGMrdJmHgpRu%2BebRjkLlBf8HkfNB0Jvx6y%2BNGho5u%2F%2BixdZG1NmlL4SIVdD92tTX54kCFFVE10KRYjTf7BVZes5ILIX2mq7b35jpVh5baWgr8wqhv7jMwLjoZSpSjzi4Q1nBH5SJsvXWY7RBF9mKkt6K15ZPBDf4YPGOKNDLF%2Btu7qygE4TudrZnETKt2eVu8FLPqt%2BKGf%2BerchRVwFQU%2FVUHC86StViFqWcAAkfN7pguGi0BznfJGrzI%2BNpVrHwQkvvUv1hBjl4D%2Bg9h8ipkxhUFnGIk6cQ8%2Bmv%2Bmahl%2FS%2BpL0xxDURcOLMiIjyaH2BcH3hHhJ%2FdfshWOnljDz646%2FBjqkAYrk%2FDXtXQizsTCKBe8Sk61Jnr7Cm%2BaMlMImRxK9%2BNY22r1Ox7WhfvxbnK3JEN17x6f5PcDJar6iYUaagstivno7tfQBeLsB7PKbF0fGDqPRljevKkw9FKcxQMHmwbws%2BGVNPg84CDL4RQXnj1XEQWOPnzR6ucx8ym4fNc6OBvhrS4SIfLVUL21UiCI%2Bv%2F6ZrCZLlw%2F%2BByx1tx%2B6K6TneGHDxpCJ&X-Amz-Signature=5028be16cd1c91c5a5286ca0dc1757237bd2085526c8a962bdbb6ee3cce5e41e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRXNXXP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuNI54x4yvqMFas9WQjlCoqRSjeEN%2B5Yg5qLUkVcc06gIhAM4iOOOpCYKL8oPQaQyNQFzLmCiNIfA5IALhOfvP7G2vKv8DCCkQABoMNjM3NDIzMTgzODA1Igz5L81ydgsGWhRPIakq3AMmoCvXpfOnpFsTGqqfdebtFcvRtPLyn9ttSEKXisyxxx1po8XSZQKjqDSTHavu0dXKicVINnswdABerUqXro0zCkUfv%2FHlYK9a6Dbsghz9HAbJvg2t7k8T%2FWoY0FYSIwFYYxSc4N2Fv1rjeynIDiIYFtxqghynolur0Yd%2FYsMgXk%2F9%2BGaTC%2FJp3yiN%2FcmMMh6ce8OkjINP%2FItw9Fokr2XWlnI03Tkuyd5DH7pnJ4v2EyLjAYrz5vQuWQ%2BTRIaktnz6gslGTm4ozry%2BWU%2FAaetLHgpZn2MIm2H426GPFLHNHtGMrdJmHgpRu%2BebRjkLlBf8HkfNB0Jvx6y%2BNGho5u%2F%2BixdZG1NmlL4SIVdD92tTX54kCFFVE10KRYjTf7BVZes5ILIX2mq7b35jpVh5baWgr8wqhv7jMwLjoZSpSjzi4Q1nBH5SJsvXWY7RBF9mKkt6K15ZPBDf4YPGOKNDLF%2Btu7qygE4TudrZnETKt2eVu8FLPqt%2BKGf%2BerchRVwFQU%2FVUHC86StViFqWcAAkfN7pguGi0BznfJGrzI%2BNpVrHwQkvvUv1hBjl4D%2Bg9h8ipkxhUFnGIk6cQ8%2Bmv%2Bmahl%2FS%2BpL0xxDURcOLMiIjyaH2BcH3hHhJ%2FdfshWOnljDz646%2FBjqkAYrk%2FDXtXQizsTCKBe8Sk61Jnr7Cm%2BaMlMImRxK9%2BNY22r1Ox7WhfvxbnK3JEN17x6f5PcDJar6iYUaagstivno7tfQBeLsB7PKbF0fGDqPRljevKkw9FKcxQMHmwbws%2BGVNPg84CDL4RQXnj1XEQWOPnzR6ucx8ym4fNc6OBvhrS4SIfLVUL21UiCI%2Bv%2F6ZrCZLlw%2F%2BByx1tx%2B6K6TneGHDxpCJ&X-Amz-Signature=0305f2f42bfeb8702e660711ca4b9be1cba33488c79e463a35f41b96d2dffa0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRXNXXP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuNI54x4yvqMFas9WQjlCoqRSjeEN%2B5Yg5qLUkVcc06gIhAM4iOOOpCYKL8oPQaQyNQFzLmCiNIfA5IALhOfvP7G2vKv8DCCkQABoMNjM3NDIzMTgzODA1Igz5L81ydgsGWhRPIakq3AMmoCvXpfOnpFsTGqqfdebtFcvRtPLyn9ttSEKXisyxxx1po8XSZQKjqDSTHavu0dXKicVINnswdABerUqXro0zCkUfv%2FHlYK9a6Dbsghz9HAbJvg2t7k8T%2FWoY0FYSIwFYYxSc4N2Fv1rjeynIDiIYFtxqghynolur0Yd%2FYsMgXk%2F9%2BGaTC%2FJp3yiN%2FcmMMh6ce8OkjINP%2FItw9Fokr2XWlnI03Tkuyd5DH7pnJ4v2EyLjAYrz5vQuWQ%2BTRIaktnz6gslGTm4ozry%2BWU%2FAaetLHgpZn2MIm2H426GPFLHNHtGMrdJmHgpRu%2BebRjkLlBf8HkfNB0Jvx6y%2BNGho5u%2F%2BixdZG1NmlL4SIVdD92tTX54kCFFVE10KRYjTf7BVZes5ILIX2mq7b35jpVh5baWgr8wqhv7jMwLjoZSpSjzi4Q1nBH5SJsvXWY7RBF9mKkt6K15ZPBDf4YPGOKNDLF%2Btu7qygE4TudrZnETKt2eVu8FLPqt%2BKGf%2BerchRVwFQU%2FVUHC86StViFqWcAAkfN7pguGi0BznfJGrzI%2BNpVrHwQkvvUv1hBjl4D%2Bg9h8ipkxhUFnGIk6cQ8%2Bmv%2Bmahl%2FS%2BpL0xxDURcOLMiIjyaH2BcH3hHhJ%2FdfshWOnljDz646%2FBjqkAYrk%2FDXtXQizsTCKBe8Sk61Jnr7Cm%2BaMlMImRxK9%2BNY22r1Ox7WhfvxbnK3JEN17x6f5PcDJar6iYUaagstivno7tfQBeLsB7PKbF0fGDqPRljevKkw9FKcxQMHmwbws%2BGVNPg84CDL4RQXnj1XEQWOPnzR6ucx8ym4fNc6OBvhrS4SIfLVUL21UiCI%2Bv%2F6ZrCZLlw%2F%2BByx1tx%2B6K6TneGHDxpCJ&X-Amz-Signature=b670387c4f0098e51cee87f5babe6d21173b47c72106bb46664cd1d8ad353585&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRXNXXP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuNI54x4yvqMFas9WQjlCoqRSjeEN%2B5Yg5qLUkVcc06gIhAM4iOOOpCYKL8oPQaQyNQFzLmCiNIfA5IALhOfvP7G2vKv8DCCkQABoMNjM3NDIzMTgzODA1Igz5L81ydgsGWhRPIakq3AMmoCvXpfOnpFsTGqqfdebtFcvRtPLyn9ttSEKXisyxxx1po8XSZQKjqDSTHavu0dXKicVINnswdABerUqXro0zCkUfv%2FHlYK9a6Dbsghz9HAbJvg2t7k8T%2FWoY0FYSIwFYYxSc4N2Fv1rjeynIDiIYFtxqghynolur0Yd%2FYsMgXk%2F9%2BGaTC%2FJp3yiN%2FcmMMh6ce8OkjINP%2FItw9Fokr2XWlnI03Tkuyd5DH7pnJ4v2EyLjAYrz5vQuWQ%2BTRIaktnz6gslGTm4ozry%2BWU%2FAaetLHgpZn2MIm2H426GPFLHNHtGMrdJmHgpRu%2BebRjkLlBf8HkfNB0Jvx6y%2BNGho5u%2F%2BixdZG1NmlL4SIVdD92tTX54kCFFVE10KRYjTf7BVZes5ILIX2mq7b35jpVh5baWgr8wqhv7jMwLjoZSpSjzi4Q1nBH5SJsvXWY7RBF9mKkt6K15ZPBDf4YPGOKNDLF%2Btu7qygE4TudrZnETKt2eVu8FLPqt%2BKGf%2BerchRVwFQU%2FVUHC86StViFqWcAAkfN7pguGi0BznfJGrzI%2BNpVrHwQkvvUv1hBjl4D%2Bg9h8ipkxhUFnGIk6cQ8%2Bmv%2Bmahl%2FS%2BpL0xxDURcOLMiIjyaH2BcH3hHhJ%2FdfshWOnljDz646%2FBjqkAYrk%2FDXtXQizsTCKBe8Sk61Jnr7Cm%2BaMlMImRxK9%2BNY22r1Ox7WhfvxbnK3JEN17x6f5PcDJar6iYUaagstivno7tfQBeLsB7PKbF0fGDqPRljevKkw9FKcxQMHmwbws%2BGVNPg84CDL4RQXnj1XEQWOPnzR6ucx8ym4fNc6OBvhrS4SIfLVUL21UiCI%2Bv%2F6ZrCZLlw%2F%2BByx1tx%2B6K6TneGHDxpCJ&X-Amz-Signature=8dfea2be8a7615cdc0cbcba56753a1f565ee2765231113f365cd8e392f299428&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRXNXXP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuNI54x4yvqMFas9WQjlCoqRSjeEN%2B5Yg5qLUkVcc06gIhAM4iOOOpCYKL8oPQaQyNQFzLmCiNIfA5IALhOfvP7G2vKv8DCCkQABoMNjM3NDIzMTgzODA1Igz5L81ydgsGWhRPIakq3AMmoCvXpfOnpFsTGqqfdebtFcvRtPLyn9ttSEKXisyxxx1po8XSZQKjqDSTHavu0dXKicVINnswdABerUqXro0zCkUfv%2FHlYK9a6Dbsghz9HAbJvg2t7k8T%2FWoY0FYSIwFYYxSc4N2Fv1rjeynIDiIYFtxqghynolur0Yd%2FYsMgXk%2F9%2BGaTC%2FJp3yiN%2FcmMMh6ce8OkjINP%2FItw9Fokr2XWlnI03Tkuyd5DH7pnJ4v2EyLjAYrz5vQuWQ%2BTRIaktnz6gslGTm4ozry%2BWU%2FAaetLHgpZn2MIm2H426GPFLHNHtGMrdJmHgpRu%2BebRjkLlBf8HkfNB0Jvx6y%2BNGho5u%2F%2BixdZG1NmlL4SIVdD92tTX54kCFFVE10KRYjTf7BVZes5ILIX2mq7b35jpVh5baWgr8wqhv7jMwLjoZSpSjzi4Q1nBH5SJsvXWY7RBF9mKkt6K15ZPBDf4YPGOKNDLF%2Btu7qygE4TudrZnETKt2eVu8FLPqt%2BKGf%2BerchRVwFQU%2FVUHC86StViFqWcAAkfN7pguGi0BznfJGrzI%2BNpVrHwQkvvUv1hBjl4D%2Bg9h8ipkxhUFnGIk6cQ8%2Bmv%2Bmahl%2FS%2BpL0xxDURcOLMiIjyaH2BcH3hHhJ%2FdfshWOnljDz646%2FBjqkAYrk%2FDXtXQizsTCKBe8Sk61Jnr7Cm%2BaMlMImRxK9%2BNY22r1Ox7WhfvxbnK3JEN17x6f5PcDJar6iYUaagstivno7tfQBeLsB7PKbF0fGDqPRljevKkw9FKcxQMHmwbws%2BGVNPg84CDL4RQXnj1XEQWOPnzR6ucx8ym4fNc6OBvhrS4SIfLVUL21UiCI%2Bv%2F6ZrCZLlw%2F%2BByx1tx%2B6K6TneGHDxpCJ&X-Amz-Signature=8efe6251b5ca0f2f3ff6ed21d2f390c6d2c1c847b69c722f15e248156cd933f4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRXNXXP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuNI54x4yvqMFas9WQjlCoqRSjeEN%2B5Yg5qLUkVcc06gIhAM4iOOOpCYKL8oPQaQyNQFzLmCiNIfA5IALhOfvP7G2vKv8DCCkQABoMNjM3NDIzMTgzODA1Igz5L81ydgsGWhRPIakq3AMmoCvXpfOnpFsTGqqfdebtFcvRtPLyn9ttSEKXisyxxx1po8XSZQKjqDSTHavu0dXKicVINnswdABerUqXro0zCkUfv%2FHlYK9a6Dbsghz9HAbJvg2t7k8T%2FWoY0FYSIwFYYxSc4N2Fv1rjeynIDiIYFtxqghynolur0Yd%2FYsMgXk%2F9%2BGaTC%2FJp3yiN%2FcmMMh6ce8OkjINP%2FItw9Fokr2XWlnI03Tkuyd5DH7pnJ4v2EyLjAYrz5vQuWQ%2BTRIaktnz6gslGTm4ozry%2BWU%2FAaetLHgpZn2MIm2H426GPFLHNHtGMrdJmHgpRu%2BebRjkLlBf8HkfNB0Jvx6y%2BNGho5u%2F%2BixdZG1NmlL4SIVdD92tTX54kCFFVE10KRYjTf7BVZes5ILIX2mq7b35jpVh5baWgr8wqhv7jMwLjoZSpSjzi4Q1nBH5SJsvXWY7RBF9mKkt6K15ZPBDf4YPGOKNDLF%2Btu7qygE4TudrZnETKt2eVu8FLPqt%2BKGf%2BerchRVwFQU%2FVUHC86StViFqWcAAkfN7pguGi0BznfJGrzI%2BNpVrHwQkvvUv1hBjl4D%2Bg9h8ipkxhUFnGIk6cQ8%2Bmv%2Bmahl%2FS%2BpL0xxDURcOLMiIjyaH2BcH3hHhJ%2FdfshWOnljDz646%2FBjqkAYrk%2FDXtXQizsTCKBe8Sk61Jnr7Cm%2BaMlMImRxK9%2BNY22r1Ox7WhfvxbnK3JEN17x6f5PcDJar6iYUaagstivno7tfQBeLsB7PKbF0fGDqPRljevKkw9FKcxQMHmwbws%2BGVNPg84CDL4RQXnj1XEQWOPnzR6ucx8ym4fNc6OBvhrS4SIfLVUL21UiCI%2Bv%2F6ZrCZLlw%2F%2BByx1tx%2B6K6TneGHDxpCJ&X-Amz-Signature=c71ea0ad036aabc66ece3c849f53ed702a78d354f7bebe11da0f86b1889540c5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRXNXXP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuNI54x4yvqMFas9WQjlCoqRSjeEN%2B5Yg5qLUkVcc06gIhAM4iOOOpCYKL8oPQaQyNQFzLmCiNIfA5IALhOfvP7G2vKv8DCCkQABoMNjM3NDIzMTgzODA1Igz5L81ydgsGWhRPIakq3AMmoCvXpfOnpFsTGqqfdebtFcvRtPLyn9ttSEKXisyxxx1po8XSZQKjqDSTHavu0dXKicVINnswdABerUqXro0zCkUfv%2FHlYK9a6Dbsghz9HAbJvg2t7k8T%2FWoY0FYSIwFYYxSc4N2Fv1rjeynIDiIYFtxqghynolur0Yd%2FYsMgXk%2F9%2BGaTC%2FJp3yiN%2FcmMMh6ce8OkjINP%2FItw9Fokr2XWlnI03Tkuyd5DH7pnJ4v2EyLjAYrz5vQuWQ%2BTRIaktnz6gslGTm4ozry%2BWU%2FAaetLHgpZn2MIm2H426GPFLHNHtGMrdJmHgpRu%2BebRjkLlBf8HkfNB0Jvx6y%2BNGho5u%2F%2BixdZG1NmlL4SIVdD92tTX54kCFFVE10KRYjTf7BVZes5ILIX2mq7b35jpVh5baWgr8wqhv7jMwLjoZSpSjzi4Q1nBH5SJsvXWY7RBF9mKkt6K15ZPBDf4YPGOKNDLF%2Btu7qygE4TudrZnETKt2eVu8FLPqt%2BKGf%2BerchRVwFQU%2FVUHC86StViFqWcAAkfN7pguGi0BznfJGrzI%2BNpVrHwQkvvUv1hBjl4D%2Bg9h8ipkxhUFnGIk6cQ8%2Bmv%2Bmahl%2FS%2BpL0xxDURcOLMiIjyaH2BcH3hHhJ%2FdfshWOnljDz646%2FBjqkAYrk%2FDXtXQizsTCKBe8Sk61Jnr7Cm%2BaMlMImRxK9%2BNY22r1Ox7WhfvxbnK3JEN17x6f5PcDJar6iYUaagstivno7tfQBeLsB7PKbF0fGDqPRljevKkw9FKcxQMHmwbws%2BGVNPg84CDL4RQXnj1XEQWOPnzR6ucx8ym4fNc6OBvhrS4SIfLVUL21UiCI%2Bv%2F6ZrCZLlw%2F%2BByx1tx%2B6K6TneGHDxpCJ&X-Amz-Signature=2b2fc27ca6b40d5c53599f54a59f0cde59b2c9824ce520e3584053befe26a074&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
