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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUT77VBM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDemcK4Y%2BFnRN4YOeRfhs5ivuir2FOiQFCs6uvGpxbBZgIhANUUkC1NkIQrIJV%2B0e%2BGcrW7RttdpldpdWnlPU7VyRs8KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX1Qo1PlTEKmDsKKEq3AN2a9xy3MzvdT0x03SQwDa6YUa2n2g9ioc7rBJtbLJKM5eHDLmKU9E2yyRzjA8q07ALXG9QP4N28lU4cxvKQ4h8cE7TZXzSQGEp3tLYTLQVjIE%2BM6Oa9ZGFGVVw7OnoSOLj9%2BYiGX9sAc%2FfO%2Fu52bZpBts193WNeVu6oPnEcHIXWP%2Bu6HQ6hY%2BCg13QRUbMDAziyiy1GLCuQiV7p26RtvgEDyaTovGO05ihmJv2GWJb0RhBzTtBorzyjlRmopRfrHBXLQcuitcdC%2FrNGDzvUEjx2PMMPzWTX4v1ueUrjPxv22tRKc%2FfY1XrRxUX%2FzTMrPyw1FrA%2FnCmg9m737ecqSEQVz0lQheruug2kb8HfXUJPpWAKV%2BWDdCV34vQKtJ5hm5XfLv9Sq%2Br3602QomMr8LIHeVFQJEamEhgpOrHtr9abrvz6evOEWeYqW0gGI3CL948LUK4lYz0gRdgMZpqLWYoWc78eyJ%2BucJ7Reu9Iud0RX301wGyuqoCP47%2F49onSOtHXe8DB2cSr6pCA8H%2BYFGS39Qm8xUOH8cU5oIN49p1RgkSiYo6U1oN426F9ccn4OBRDGw5%2FLO01JhxDsi116DLqgZmjOYVsWAlcY1%2BJe7CfjrAWiVnV%2FxZzvtt6TDWu4G9BjqkAbjsrhe9LdrzcHo2n85Xy5HFjks6D%2Bi8gLIY7s0qgFd9WoC7HOgB64TiRHNHssueIkgKm9yR6GyCeqshaA2nZ6SWVblIbqdJTCds4U0BLYDFZctGFbPl9B1BtdRZmm81d%2Bh5PCXKHQx2sLYZ0c3CrnRhe5Fx3Pp1Lv4aCq5vsxc9brambqrMX8W7%2BC17xL77bO2dmaO6KBfaGSuVJb%2FG5y%2B1Br4d&X-Amz-Signature=8edc1bb434b5216f21625542034f26416afef1851235e85e86b40404666630e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUT77VBM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDemcK4Y%2BFnRN4YOeRfhs5ivuir2FOiQFCs6uvGpxbBZgIhANUUkC1NkIQrIJV%2B0e%2BGcrW7RttdpldpdWnlPU7VyRs8KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX1Qo1PlTEKmDsKKEq3AN2a9xy3MzvdT0x03SQwDa6YUa2n2g9ioc7rBJtbLJKM5eHDLmKU9E2yyRzjA8q07ALXG9QP4N28lU4cxvKQ4h8cE7TZXzSQGEp3tLYTLQVjIE%2BM6Oa9ZGFGVVw7OnoSOLj9%2BYiGX9sAc%2FfO%2Fu52bZpBts193WNeVu6oPnEcHIXWP%2Bu6HQ6hY%2BCg13QRUbMDAziyiy1GLCuQiV7p26RtvgEDyaTovGO05ihmJv2GWJb0RhBzTtBorzyjlRmopRfrHBXLQcuitcdC%2FrNGDzvUEjx2PMMPzWTX4v1ueUrjPxv22tRKc%2FfY1XrRxUX%2FzTMrPyw1FrA%2FnCmg9m737ecqSEQVz0lQheruug2kb8HfXUJPpWAKV%2BWDdCV34vQKtJ5hm5XfLv9Sq%2Br3602QomMr8LIHeVFQJEamEhgpOrHtr9abrvz6evOEWeYqW0gGI3CL948LUK4lYz0gRdgMZpqLWYoWc78eyJ%2BucJ7Reu9Iud0RX301wGyuqoCP47%2F49onSOtHXe8DB2cSr6pCA8H%2BYFGS39Qm8xUOH8cU5oIN49p1RgkSiYo6U1oN426F9ccn4OBRDGw5%2FLO01JhxDsi116DLqgZmjOYVsWAlcY1%2BJe7CfjrAWiVnV%2FxZzvtt6TDWu4G9BjqkAbjsrhe9LdrzcHo2n85Xy5HFjks6D%2Bi8gLIY7s0qgFd9WoC7HOgB64TiRHNHssueIkgKm9yR6GyCeqshaA2nZ6SWVblIbqdJTCds4U0BLYDFZctGFbPl9B1BtdRZmm81d%2Bh5PCXKHQx2sLYZ0c3CrnRhe5Fx3Pp1Lv4aCq5vsxc9brambqrMX8W7%2BC17xL77bO2dmaO6KBfaGSuVJb%2FG5y%2B1Br4d&X-Amz-Signature=ee9b33e1a80a8a54d53d04f8970f48b88c581ef61ff4a266945cbae918c24b34&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUT77VBM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDemcK4Y%2BFnRN4YOeRfhs5ivuir2FOiQFCs6uvGpxbBZgIhANUUkC1NkIQrIJV%2B0e%2BGcrW7RttdpldpdWnlPU7VyRs8KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX1Qo1PlTEKmDsKKEq3AN2a9xy3MzvdT0x03SQwDa6YUa2n2g9ioc7rBJtbLJKM5eHDLmKU9E2yyRzjA8q07ALXG9QP4N28lU4cxvKQ4h8cE7TZXzSQGEp3tLYTLQVjIE%2BM6Oa9ZGFGVVw7OnoSOLj9%2BYiGX9sAc%2FfO%2Fu52bZpBts193WNeVu6oPnEcHIXWP%2Bu6HQ6hY%2BCg13QRUbMDAziyiy1GLCuQiV7p26RtvgEDyaTovGO05ihmJv2GWJb0RhBzTtBorzyjlRmopRfrHBXLQcuitcdC%2FrNGDzvUEjx2PMMPzWTX4v1ueUrjPxv22tRKc%2FfY1XrRxUX%2FzTMrPyw1FrA%2FnCmg9m737ecqSEQVz0lQheruug2kb8HfXUJPpWAKV%2BWDdCV34vQKtJ5hm5XfLv9Sq%2Br3602QomMr8LIHeVFQJEamEhgpOrHtr9abrvz6evOEWeYqW0gGI3CL948LUK4lYz0gRdgMZpqLWYoWc78eyJ%2BucJ7Reu9Iud0RX301wGyuqoCP47%2F49onSOtHXe8DB2cSr6pCA8H%2BYFGS39Qm8xUOH8cU5oIN49p1RgkSiYo6U1oN426F9ccn4OBRDGw5%2FLO01JhxDsi116DLqgZmjOYVsWAlcY1%2BJe7CfjrAWiVnV%2FxZzvtt6TDWu4G9BjqkAbjsrhe9LdrzcHo2n85Xy5HFjks6D%2Bi8gLIY7s0qgFd9WoC7HOgB64TiRHNHssueIkgKm9yR6GyCeqshaA2nZ6SWVblIbqdJTCds4U0BLYDFZctGFbPl9B1BtdRZmm81d%2Bh5PCXKHQx2sLYZ0c3CrnRhe5Fx3Pp1Lv4aCq5vsxc9brambqrMX8W7%2BC17xL77bO2dmaO6KBfaGSuVJb%2FG5y%2B1Br4d&X-Amz-Signature=0d06706a52135a4529aa458cb62a4b82ade87bf8d433efc1b196c0cae21cc352&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUT77VBM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDemcK4Y%2BFnRN4YOeRfhs5ivuir2FOiQFCs6uvGpxbBZgIhANUUkC1NkIQrIJV%2B0e%2BGcrW7RttdpldpdWnlPU7VyRs8KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX1Qo1PlTEKmDsKKEq3AN2a9xy3MzvdT0x03SQwDa6YUa2n2g9ioc7rBJtbLJKM5eHDLmKU9E2yyRzjA8q07ALXG9QP4N28lU4cxvKQ4h8cE7TZXzSQGEp3tLYTLQVjIE%2BM6Oa9ZGFGVVw7OnoSOLj9%2BYiGX9sAc%2FfO%2Fu52bZpBts193WNeVu6oPnEcHIXWP%2Bu6HQ6hY%2BCg13QRUbMDAziyiy1GLCuQiV7p26RtvgEDyaTovGO05ihmJv2GWJb0RhBzTtBorzyjlRmopRfrHBXLQcuitcdC%2FrNGDzvUEjx2PMMPzWTX4v1ueUrjPxv22tRKc%2FfY1XrRxUX%2FzTMrPyw1FrA%2FnCmg9m737ecqSEQVz0lQheruug2kb8HfXUJPpWAKV%2BWDdCV34vQKtJ5hm5XfLv9Sq%2Br3602QomMr8LIHeVFQJEamEhgpOrHtr9abrvz6evOEWeYqW0gGI3CL948LUK4lYz0gRdgMZpqLWYoWc78eyJ%2BucJ7Reu9Iud0RX301wGyuqoCP47%2F49onSOtHXe8DB2cSr6pCA8H%2BYFGS39Qm8xUOH8cU5oIN49p1RgkSiYo6U1oN426F9ccn4OBRDGw5%2FLO01JhxDsi116DLqgZmjOYVsWAlcY1%2BJe7CfjrAWiVnV%2FxZzvtt6TDWu4G9BjqkAbjsrhe9LdrzcHo2n85Xy5HFjks6D%2Bi8gLIY7s0qgFd9WoC7HOgB64TiRHNHssueIkgKm9yR6GyCeqshaA2nZ6SWVblIbqdJTCds4U0BLYDFZctGFbPl9B1BtdRZmm81d%2Bh5PCXKHQx2sLYZ0c3CrnRhe5Fx3Pp1Lv4aCq5vsxc9brambqrMX8W7%2BC17xL77bO2dmaO6KBfaGSuVJb%2FG5y%2B1Br4d&X-Amz-Signature=a1082dd7210872093ec3786452c60d15d68698ae3b9b5e8b738e37671b1061b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUT77VBM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDemcK4Y%2BFnRN4YOeRfhs5ivuir2FOiQFCs6uvGpxbBZgIhANUUkC1NkIQrIJV%2B0e%2BGcrW7RttdpldpdWnlPU7VyRs8KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX1Qo1PlTEKmDsKKEq3AN2a9xy3MzvdT0x03SQwDa6YUa2n2g9ioc7rBJtbLJKM5eHDLmKU9E2yyRzjA8q07ALXG9QP4N28lU4cxvKQ4h8cE7TZXzSQGEp3tLYTLQVjIE%2BM6Oa9ZGFGVVw7OnoSOLj9%2BYiGX9sAc%2FfO%2Fu52bZpBts193WNeVu6oPnEcHIXWP%2Bu6HQ6hY%2BCg13QRUbMDAziyiy1GLCuQiV7p26RtvgEDyaTovGO05ihmJv2GWJb0RhBzTtBorzyjlRmopRfrHBXLQcuitcdC%2FrNGDzvUEjx2PMMPzWTX4v1ueUrjPxv22tRKc%2FfY1XrRxUX%2FzTMrPyw1FrA%2FnCmg9m737ecqSEQVz0lQheruug2kb8HfXUJPpWAKV%2BWDdCV34vQKtJ5hm5XfLv9Sq%2Br3602QomMr8LIHeVFQJEamEhgpOrHtr9abrvz6evOEWeYqW0gGI3CL948LUK4lYz0gRdgMZpqLWYoWc78eyJ%2BucJ7Reu9Iud0RX301wGyuqoCP47%2F49onSOtHXe8DB2cSr6pCA8H%2BYFGS39Qm8xUOH8cU5oIN49p1RgkSiYo6U1oN426F9ccn4OBRDGw5%2FLO01JhxDsi116DLqgZmjOYVsWAlcY1%2BJe7CfjrAWiVnV%2FxZzvtt6TDWu4G9BjqkAbjsrhe9LdrzcHo2n85Xy5HFjks6D%2Bi8gLIY7s0qgFd9WoC7HOgB64TiRHNHssueIkgKm9yR6GyCeqshaA2nZ6SWVblIbqdJTCds4U0BLYDFZctGFbPl9B1BtdRZmm81d%2Bh5PCXKHQx2sLYZ0c3CrnRhe5Fx3Pp1Lv4aCq5vsxc9brambqrMX8W7%2BC17xL77bO2dmaO6KBfaGSuVJb%2FG5y%2B1Br4d&X-Amz-Signature=835bd48661126a9a463b8ce2a67c65735cb9b77d685e9963fc5ed1863d5be993&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUT77VBM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDemcK4Y%2BFnRN4YOeRfhs5ivuir2FOiQFCs6uvGpxbBZgIhANUUkC1NkIQrIJV%2B0e%2BGcrW7RttdpldpdWnlPU7VyRs8KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX1Qo1PlTEKmDsKKEq3AN2a9xy3MzvdT0x03SQwDa6YUa2n2g9ioc7rBJtbLJKM5eHDLmKU9E2yyRzjA8q07ALXG9QP4N28lU4cxvKQ4h8cE7TZXzSQGEp3tLYTLQVjIE%2BM6Oa9ZGFGVVw7OnoSOLj9%2BYiGX9sAc%2FfO%2Fu52bZpBts193WNeVu6oPnEcHIXWP%2Bu6HQ6hY%2BCg13QRUbMDAziyiy1GLCuQiV7p26RtvgEDyaTovGO05ihmJv2GWJb0RhBzTtBorzyjlRmopRfrHBXLQcuitcdC%2FrNGDzvUEjx2PMMPzWTX4v1ueUrjPxv22tRKc%2FfY1XrRxUX%2FzTMrPyw1FrA%2FnCmg9m737ecqSEQVz0lQheruug2kb8HfXUJPpWAKV%2BWDdCV34vQKtJ5hm5XfLv9Sq%2Br3602QomMr8LIHeVFQJEamEhgpOrHtr9abrvz6evOEWeYqW0gGI3CL948LUK4lYz0gRdgMZpqLWYoWc78eyJ%2BucJ7Reu9Iud0RX301wGyuqoCP47%2F49onSOtHXe8DB2cSr6pCA8H%2BYFGS39Qm8xUOH8cU5oIN49p1RgkSiYo6U1oN426F9ccn4OBRDGw5%2FLO01JhxDsi116DLqgZmjOYVsWAlcY1%2BJe7CfjrAWiVnV%2FxZzvtt6TDWu4G9BjqkAbjsrhe9LdrzcHo2n85Xy5HFjks6D%2Bi8gLIY7s0qgFd9WoC7HOgB64TiRHNHssueIkgKm9yR6GyCeqshaA2nZ6SWVblIbqdJTCds4U0BLYDFZctGFbPl9B1BtdRZmm81d%2Bh5PCXKHQx2sLYZ0c3CrnRhe5Fx3Pp1Lv4aCq5vsxc9brambqrMX8W7%2BC17xL77bO2dmaO6KBfaGSuVJb%2FG5y%2B1Br4d&X-Amz-Signature=a20b6a89f1881273e25b577905685ec836925f27ba911f93d90aa4f3536b57b6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUT77VBM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDemcK4Y%2BFnRN4YOeRfhs5ivuir2FOiQFCs6uvGpxbBZgIhANUUkC1NkIQrIJV%2B0e%2BGcrW7RttdpldpdWnlPU7VyRs8KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX1Qo1PlTEKmDsKKEq3AN2a9xy3MzvdT0x03SQwDa6YUa2n2g9ioc7rBJtbLJKM5eHDLmKU9E2yyRzjA8q07ALXG9QP4N28lU4cxvKQ4h8cE7TZXzSQGEp3tLYTLQVjIE%2BM6Oa9ZGFGVVw7OnoSOLj9%2BYiGX9sAc%2FfO%2Fu52bZpBts193WNeVu6oPnEcHIXWP%2Bu6HQ6hY%2BCg13QRUbMDAziyiy1GLCuQiV7p26RtvgEDyaTovGO05ihmJv2GWJb0RhBzTtBorzyjlRmopRfrHBXLQcuitcdC%2FrNGDzvUEjx2PMMPzWTX4v1ueUrjPxv22tRKc%2FfY1XrRxUX%2FzTMrPyw1FrA%2FnCmg9m737ecqSEQVz0lQheruug2kb8HfXUJPpWAKV%2BWDdCV34vQKtJ5hm5XfLv9Sq%2Br3602QomMr8LIHeVFQJEamEhgpOrHtr9abrvz6evOEWeYqW0gGI3CL948LUK4lYz0gRdgMZpqLWYoWc78eyJ%2BucJ7Reu9Iud0RX301wGyuqoCP47%2F49onSOtHXe8DB2cSr6pCA8H%2BYFGS39Qm8xUOH8cU5oIN49p1RgkSiYo6U1oN426F9ccn4OBRDGw5%2FLO01JhxDsi116DLqgZmjOYVsWAlcY1%2BJe7CfjrAWiVnV%2FxZzvtt6TDWu4G9BjqkAbjsrhe9LdrzcHo2n85Xy5HFjks6D%2Bi8gLIY7s0qgFd9WoC7HOgB64TiRHNHssueIkgKm9yR6GyCeqshaA2nZ6SWVblIbqdJTCds4U0BLYDFZctGFbPl9B1BtdRZmm81d%2Bh5PCXKHQx2sLYZ0c3CrnRhe5Fx3Pp1Lv4aCq5vsxc9brambqrMX8W7%2BC17xL77bO2dmaO6KBfaGSuVJb%2FG5y%2B1Br4d&X-Amz-Signature=63a481c061a5ed189fcc0b26c13dccdd56b985122d18a046ae2fafea403beade&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
