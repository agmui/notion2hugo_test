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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVPVW4PJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCfCnLqlTbV8tt4bvma8%2BWFCnLndswBedcrWA2ou0wKkwIhAMUFrQOMdwW6MH2QxFoxTjnq45jom5AiQ2qR8J3Zct60KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9eJi0yIz4a9lkIogq3APF7CGjCJ4SDyOTorkV%2BtuIflDwECE2dukVUXME3L2BzR8Loem0wYstPhypEF5DFpMGQ0%2BYCU8s%2Bx%2FCIvn2SM9Q3cJgXOTY7Vv4oCKr2tQeMgjKW86Em1i4BQZOJaYIoJxb%2FUwvFMt6CG0S%2FxWC1XnPit3ZEIRaRDpgprgmf7TIpXS%2BCw7jZDimaYa4qG40APrBc6q4SVna%2FXdCZUYZMqsMQcJk1Yp%2FGLnTcwjysFpZ%2BfIPq59E0%2FYNGe4gH86y%2FKO%2BhX0x7RH9wYGdd8XimEerhu%2F5v2Pdf0WjX2eHnGADlDFSGYSoZwMJCeSTG8oCMoI2ZK7R24IkmBWFDluZd6ZjDkyS9d7DqfvRLFRUHTjsDEHbV1J2Eof02eP6rj1DqYLj8oaDpTw%2B4%2BywqyUqM12B6SHiFslDi1s9TMlL4bEC5zizvqhwgLVimJpk51JMSUQr2oX0wPUSkouZiWql%2FCLWYvVRrXvwcaw907kbtc8dE4lqB0gEpEBHLoVG2%2FS%2BYexlFSmdEwyM6FdMvH02PuMWFOxmXcGXo2XGJXTD3Cg2jVDg8F3v6TD%2FHKp5VYd8320q%2F1YyO0iCC2%2BmBu3%2FJu39Ucc4vkNHae7yb2Wo9tpHTXKHgoSJRR9B5wdWqDDF6qK%2FBjqkAdyjL0wjphu7IeIz%2FHnr9BJOWbCDn4FXPA5zWVkR%2BNL3wgzeOsVxg4JljFBgAN5u2hYnmEVwbbKhxemNA3teSAkqEJnLBP%2Fgj1kPZ9wLM2lTJPm6cgcj89LEzCKMpMV4BaT5dC72298T5yO193WVuJBeL%2BvrkO3wnuCX8ZEh%2BtAE2uWi3Tlg47B5zIYJmqplua6%2FpkSKW6YWsdGgiwyLrQeCp14d&X-Amz-Signature=c070a7af527cbac32c3c02ae319f91e16fd679244fe2bc155afe8d4070839c45&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVPVW4PJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCfCnLqlTbV8tt4bvma8%2BWFCnLndswBedcrWA2ou0wKkwIhAMUFrQOMdwW6MH2QxFoxTjnq45jom5AiQ2qR8J3Zct60KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9eJi0yIz4a9lkIogq3APF7CGjCJ4SDyOTorkV%2BtuIflDwECE2dukVUXME3L2BzR8Loem0wYstPhypEF5DFpMGQ0%2BYCU8s%2Bx%2FCIvn2SM9Q3cJgXOTY7Vv4oCKr2tQeMgjKW86Em1i4BQZOJaYIoJxb%2FUwvFMt6CG0S%2FxWC1XnPit3ZEIRaRDpgprgmf7TIpXS%2BCw7jZDimaYa4qG40APrBc6q4SVna%2FXdCZUYZMqsMQcJk1Yp%2FGLnTcwjysFpZ%2BfIPq59E0%2FYNGe4gH86y%2FKO%2BhX0x7RH9wYGdd8XimEerhu%2F5v2Pdf0WjX2eHnGADlDFSGYSoZwMJCeSTG8oCMoI2ZK7R24IkmBWFDluZd6ZjDkyS9d7DqfvRLFRUHTjsDEHbV1J2Eof02eP6rj1DqYLj8oaDpTw%2B4%2BywqyUqM12B6SHiFslDi1s9TMlL4bEC5zizvqhwgLVimJpk51JMSUQr2oX0wPUSkouZiWql%2FCLWYvVRrXvwcaw907kbtc8dE4lqB0gEpEBHLoVG2%2FS%2BYexlFSmdEwyM6FdMvH02PuMWFOxmXcGXo2XGJXTD3Cg2jVDg8F3v6TD%2FHKp5VYd8320q%2F1YyO0iCC2%2BmBu3%2FJu39Ucc4vkNHae7yb2Wo9tpHTXKHgoSJRR9B5wdWqDDF6qK%2FBjqkAdyjL0wjphu7IeIz%2FHnr9BJOWbCDn4FXPA5zWVkR%2BNL3wgzeOsVxg4JljFBgAN5u2hYnmEVwbbKhxemNA3teSAkqEJnLBP%2Fgj1kPZ9wLM2lTJPm6cgcj89LEzCKMpMV4BaT5dC72298T5yO193WVuJBeL%2BvrkO3wnuCX8ZEh%2BtAE2uWi3Tlg47B5zIYJmqplua6%2FpkSKW6YWsdGgiwyLrQeCp14d&X-Amz-Signature=24cc09978abe1f64ad8e9d6fe870593f605b70d8c954a010634ad294adb80f25&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVPVW4PJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCfCnLqlTbV8tt4bvma8%2BWFCnLndswBedcrWA2ou0wKkwIhAMUFrQOMdwW6MH2QxFoxTjnq45jom5AiQ2qR8J3Zct60KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9eJi0yIz4a9lkIogq3APF7CGjCJ4SDyOTorkV%2BtuIflDwECE2dukVUXME3L2BzR8Loem0wYstPhypEF5DFpMGQ0%2BYCU8s%2Bx%2FCIvn2SM9Q3cJgXOTY7Vv4oCKr2tQeMgjKW86Em1i4BQZOJaYIoJxb%2FUwvFMt6CG0S%2FxWC1XnPit3ZEIRaRDpgprgmf7TIpXS%2BCw7jZDimaYa4qG40APrBc6q4SVna%2FXdCZUYZMqsMQcJk1Yp%2FGLnTcwjysFpZ%2BfIPq59E0%2FYNGe4gH86y%2FKO%2BhX0x7RH9wYGdd8XimEerhu%2F5v2Pdf0WjX2eHnGADlDFSGYSoZwMJCeSTG8oCMoI2ZK7R24IkmBWFDluZd6ZjDkyS9d7DqfvRLFRUHTjsDEHbV1J2Eof02eP6rj1DqYLj8oaDpTw%2B4%2BywqyUqM12B6SHiFslDi1s9TMlL4bEC5zizvqhwgLVimJpk51JMSUQr2oX0wPUSkouZiWql%2FCLWYvVRrXvwcaw907kbtc8dE4lqB0gEpEBHLoVG2%2FS%2BYexlFSmdEwyM6FdMvH02PuMWFOxmXcGXo2XGJXTD3Cg2jVDg8F3v6TD%2FHKp5VYd8320q%2F1YyO0iCC2%2BmBu3%2FJu39Ucc4vkNHae7yb2Wo9tpHTXKHgoSJRR9B5wdWqDDF6qK%2FBjqkAdyjL0wjphu7IeIz%2FHnr9BJOWbCDn4FXPA5zWVkR%2BNL3wgzeOsVxg4JljFBgAN5u2hYnmEVwbbKhxemNA3teSAkqEJnLBP%2Fgj1kPZ9wLM2lTJPm6cgcj89LEzCKMpMV4BaT5dC72298T5yO193WVuJBeL%2BvrkO3wnuCX8ZEh%2BtAE2uWi3Tlg47B5zIYJmqplua6%2FpkSKW6YWsdGgiwyLrQeCp14d&X-Amz-Signature=e041a93fb204d395dba8da02a34b575a7635096e00dc8c2c7af6dbbe115b65ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVPVW4PJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCfCnLqlTbV8tt4bvma8%2BWFCnLndswBedcrWA2ou0wKkwIhAMUFrQOMdwW6MH2QxFoxTjnq45jom5AiQ2qR8J3Zct60KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9eJi0yIz4a9lkIogq3APF7CGjCJ4SDyOTorkV%2BtuIflDwECE2dukVUXME3L2BzR8Loem0wYstPhypEF5DFpMGQ0%2BYCU8s%2Bx%2FCIvn2SM9Q3cJgXOTY7Vv4oCKr2tQeMgjKW86Em1i4BQZOJaYIoJxb%2FUwvFMt6CG0S%2FxWC1XnPit3ZEIRaRDpgprgmf7TIpXS%2BCw7jZDimaYa4qG40APrBc6q4SVna%2FXdCZUYZMqsMQcJk1Yp%2FGLnTcwjysFpZ%2BfIPq59E0%2FYNGe4gH86y%2FKO%2BhX0x7RH9wYGdd8XimEerhu%2F5v2Pdf0WjX2eHnGADlDFSGYSoZwMJCeSTG8oCMoI2ZK7R24IkmBWFDluZd6ZjDkyS9d7DqfvRLFRUHTjsDEHbV1J2Eof02eP6rj1DqYLj8oaDpTw%2B4%2BywqyUqM12B6SHiFslDi1s9TMlL4bEC5zizvqhwgLVimJpk51JMSUQr2oX0wPUSkouZiWql%2FCLWYvVRrXvwcaw907kbtc8dE4lqB0gEpEBHLoVG2%2FS%2BYexlFSmdEwyM6FdMvH02PuMWFOxmXcGXo2XGJXTD3Cg2jVDg8F3v6TD%2FHKp5VYd8320q%2F1YyO0iCC2%2BmBu3%2FJu39Ucc4vkNHae7yb2Wo9tpHTXKHgoSJRR9B5wdWqDDF6qK%2FBjqkAdyjL0wjphu7IeIz%2FHnr9BJOWbCDn4FXPA5zWVkR%2BNL3wgzeOsVxg4JljFBgAN5u2hYnmEVwbbKhxemNA3teSAkqEJnLBP%2Fgj1kPZ9wLM2lTJPm6cgcj89LEzCKMpMV4BaT5dC72298T5yO193WVuJBeL%2BvrkO3wnuCX8ZEh%2BtAE2uWi3Tlg47B5zIYJmqplua6%2FpkSKW6YWsdGgiwyLrQeCp14d&X-Amz-Signature=aa7464b36ae11c1a47d41b8fbeeec3ff653ebd89d91e3418a0d87f273357a098&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVPVW4PJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCfCnLqlTbV8tt4bvma8%2BWFCnLndswBedcrWA2ou0wKkwIhAMUFrQOMdwW6MH2QxFoxTjnq45jom5AiQ2qR8J3Zct60KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9eJi0yIz4a9lkIogq3APF7CGjCJ4SDyOTorkV%2BtuIflDwECE2dukVUXME3L2BzR8Loem0wYstPhypEF5DFpMGQ0%2BYCU8s%2Bx%2FCIvn2SM9Q3cJgXOTY7Vv4oCKr2tQeMgjKW86Em1i4BQZOJaYIoJxb%2FUwvFMt6CG0S%2FxWC1XnPit3ZEIRaRDpgprgmf7TIpXS%2BCw7jZDimaYa4qG40APrBc6q4SVna%2FXdCZUYZMqsMQcJk1Yp%2FGLnTcwjysFpZ%2BfIPq59E0%2FYNGe4gH86y%2FKO%2BhX0x7RH9wYGdd8XimEerhu%2F5v2Pdf0WjX2eHnGADlDFSGYSoZwMJCeSTG8oCMoI2ZK7R24IkmBWFDluZd6ZjDkyS9d7DqfvRLFRUHTjsDEHbV1J2Eof02eP6rj1DqYLj8oaDpTw%2B4%2BywqyUqM12B6SHiFslDi1s9TMlL4bEC5zizvqhwgLVimJpk51JMSUQr2oX0wPUSkouZiWql%2FCLWYvVRrXvwcaw907kbtc8dE4lqB0gEpEBHLoVG2%2FS%2BYexlFSmdEwyM6FdMvH02PuMWFOxmXcGXo2XGJXTD3Cg2jVDg8F3v6TD%2FHKp5VYd8320q%2F1YyO0iCC2%2BmBu3%2FJu39Ucc4vkNHae7yb2Wo9tpHTXKHgoSJRR9B5wdWqDDF6qK%2FBjqkAdyjL0wjphu7IeIz%2FHnr9BJOWbCDn4FXPA5zWVkR%2BNL3wgzeOsVxg4JljFBgAN5u2hYnmEVwbbKhxemNA3teSAkqEJnLBP%2Fgj1kPZ9wLM2lTJPm6cgcj89LEzCKMpMV4BaT5dC72298T5yO193WVuJBeL%2BvrkO3wnuCX8ZEh%2BtAE2uWi3Tlg47B5zIYJmqplua6%2FpkSKW6YWsdGgiwyLrQeCp14d&X-Amz-Signature=14b4d92978526c9695c419a751e9eb7cb04690e85c73a1d24a15bb034cf7ef1a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVPVW4PJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCfCnLqlTbV8tt4bvma8%2BWFCnLndswBedcrWA2ou0wKkwIhAMUFrQOMdwW6MH2QxFoxTjnq45jom5AiQ2qR8J3Zct60KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9eJi0yIz4a9lkIogq3APF7CGjCJ4SDyOTorkV%2BtuIflDwECE2dukVUXME3L2BzR8Loem0wYstPhypEF5DFpMGQ0%2BYCU8s%2Bx%2FCIvn2SM9Q3cJgXOTY7Vv4oCKr2tQeMgjKW86Em1i4BQZOJaYIoJxb%2FUwvFMt6CG0S%2FxWC1XnPit3ZEIRaRDpgprgmf7TIpXS%2BCw7jZDimaYa4qG40APrBc6q4SVna%2FXdCZUYZMqsMQcJk1Yp%2FGLnTcwjysFpZ%2BfIPq59E0%2FYNGe4gH86y%2FKO%2BhX0x7RH9wYGdd8XimEerhu%2F5v2Pdf0WjX2eHnGADlDFSGYSoZwMJCeSTG8oCMoI2ZK7R24IkmBWFDluZd6ZjDkyS9d7DqfvRLFRUHTjsDEHbV1J2Eof02eP6rj1DqYLj8oaDpTw%2B4%2BywqyUqM12B6SHiFslDi1s9TMlL4bEC5zizvqhwgLVimJpk51JMSUQr2oX0wPUSkouZiWql%2FCLWYvVRrXvwcaw907kbtc8dE4lqB0gEpEBHLoVG2%2FS%2BYexlFSmdEwyM6FdMvH02PuMWFOxmXcGXo2XGJXTD3Cg2jVDg8F3v6TD%2FHKp5VYd8320q%2F1YyO0iCC2%2BmBu3%2FJu39Ucc4vkNHae7yb2Wo9tpHTXKHgoSJRR9B5wdWqDDF6qK%2FBjqkAdyjL0wjphu7IeIz%2FHnr9BJOWbCDn4FXPA5zWVkR%2BNL3wgzeOsVxg4JljFBgAN5u2hYnmEVwbbKhxemNA3teSAkqEJnLBP%2Fgj1kPZ9wLM2lTJPm6cgcj89LEzCKMpMV4BaT5dC72298T5yO193WVuJBeL%2BvrkO3wnuCX8ZEh%2BtAE2uWi3Tlg47B5zIYJmqplua6%2FpkSKW6YWsdGgiwyLrQeCp14d&X-Amz-Signature=8d50c0d292decf7713118f466956b4648660cc42d57b3f20e849bf1dd6ec2735&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVPVW4PJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCfCnLqlTbV8tt4bvma8%2BWFCnLndswBedcrWA2ou0wKkwIhAMUFrQOMdwW6MH2QxFoxTjnq45jom5AiQ2qR8J3Zct60KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9eJi0yIz4a9lkIogq3APF7CGjCJ4SDyOTorkV%2BtuIflDwECE2dukVUXME3L2BzR8Loem0wYstPhypEF5DFpMGQ0%2BYCU8s%2Bx%2FCIvn2SM9Q3cJgXOTY7Vv4oCKr2tQeMgjKW86Em1i4BQZOJaYIoJxb%2FUwvFMt6CG0S%2FxWC1XnPit3ZEIRaRDpgprgmf7TIpXS%2BCw7jZDimaYa4qG40APrBc6q4SVna%2FXdCZUYZMqsMQcJk1Yp%2FGLnTcwjysFpZ%2BfIPq59E0%2FYNGe4gH86y%2FKO%2BhX0x7RH9wYGdd8XimEerhu%2F5v2Pdf0WjX2eHnGADlDFSGYSoZwMJCeSTG8oCMoI2ZK7R24IkmBWFDluZd6ZjDkyS9d7DqfvRLFRUHTjsDEHbV1J2Eof02eP6rj1DqYLj8oaDpTw%2B4%2BywqyUqM12B6SHiFslDi1s9TMlL4bEC5zizvqhwgLVimJpk51JMSUQr2oX0wPUSkouZiWql%2FCLWYvVRrXvwcaw907kbtc8dE4lqB0gEpEBHLoVG2%2FS%2BYexlFSmdEwyM6FdMvH02PuMWFOxmXcGXo2XGJXTD3Cg2jVDg8F3v6TD%2FHKp5VYd8320q%2F1YyO0iCC2%2BmBu3%2FJu39Ucc4vkNHae7yb2Wo9tpHTXKHgoSJRR9B5wdWqDDF6qK%2FBjqkAdyjL0wjphu7IeIz%2FHnr9BJOWbCDn4FXPA5zWVkR%2BNL3wgzeOsVxg4JljFBgAN5u2hYnmEVwbbKhxemNA3teSAkqEJnLBP%2Fgj1kPZ9wLM2lTJPm6cgcj89LEzCKMpMV4BaT5dC72298T5yO193WVuJBeL%2BvrkO3wnuCX8ZEh%2BtAE2uWi3Tlg47B5zIYJmqplua6%2FpkSKW6YWsdGgiwyLrQeCp14d&X-Amz-Signature=ace907f484e94dfade823d9114bff63c04639249e73915ab83ab2242967e9012&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
