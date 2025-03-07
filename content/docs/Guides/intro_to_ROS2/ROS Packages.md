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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLT2N4Q%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrhzVsnxiaIDZVY60sDs6Pwy%2B53flGn0kYH1YdToPI8gIhANV1rNs8iZ0heRbZNSsqh1bdVtGn2lyVu%2B42%2BWGmV9O6Kv8DCDgQABoMNjM3NDIzMTgzODA1IgzR526r%2FLlSlwxn384q3AMjpMTeA86yPLdrcPv%2FNexwbHgqCvecb28afH5%2BpoNfDMCYT4nK7CX4jTmZ36CpRXkuYuDW%2Fib5gsuuEvseamlzsq2RyT2HOmG84FsDUlQXdp%2FB7VDbU369N5crFr5exiJYyWuUepslviFEUQr5p7mA%2FvmThBBv7I2FJR0A3nknKrDns6mjTY5FWo9%2FhG9EhRv7oFr3KyngM9bvsUSYSiqXV8ttMzw%2FGY9tqx0Ul8yKElmA2tO8iljwhUrzNYuHBsvbsH3A5Gi0eIMOnyHN22mJOI2YlZwNVSkpOZELz%2BNqKhcRmqb22Mx1Akw2vVn35c0nR2e%2BVSQIYFubit1f3diHub8jolbXTGHy5ei98ftNoRIkd5YL3NnEhLOvH24tChG5lpkdR1ABdSonpiyCwnMOBbwgnly3BbKFc%2F6F8Z%2Bma9c5dCneMnbZu6SJHY3KnI4X9dyXGBjBIacqa3arloCZKdfsVLtjs4Ye%2BhEXPeCC8GmTHrTUhHJf96mpHRQrWm1Vc3hG%2BGB0WYM8e0WbTg5%2FeaijW0UZ5WH6C1SArTk6rfmvy2J4ZwhGRmOeMunGnwOrLr%2F2RXjHKNGg9Ujl1tajV4CqWvbJy4ptgUeDDVAeEi5pWgd5q7mTvfUOAzD3yKi%2BBjqkAdCSw8A0G72f489NCawmkMILnf%2FI%2Be3CfYHWrORnTNPWcjWQq1RARMxTnflaVKEbHkLsP5aVoOLZtcD4PjUHzGJLxCiLorRIkXsYxBgtMgK1AvKTWGrc1nhTXd4%2FK%2FD2nIsz9Xcx60hxbQx%2BPMUmXZmc3ClZrapBdJsw6O1Bh9dJA6Zw01ozxShOABTBCqXVYdRIbCZG49k1afpCwa9jf2VMmf9G&X-Amz-Signature=92cced218ccb0dc2b18e9528bb4cd63bb125e88ab94967c61a6817b057031e52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLT2N4Q%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrhzVsnxiaIDZVY60sDs6Pwy%2B53flGn0kYH1YdToPI8gIhANV1rNs8iZ0heRbZNSsqh1bdVtGn2lyVu%2B42%2BWGmV9O6Kv8DCDgQABoMNjM3NDIzMTgzODA1IgzR526r%2FLlSlwxn384q3AMjpMTeA86yPLdrcPv%2FNexwbHgqCvecb28afH5%2BpoNfDMCYT4nK7CX4jTmZ36CpRXkuYuDW%2Fib5gsuuEvseamlzsq2RyT2HOmG84FsDUlQXdp%2FB7VDbU369N5crFr5exiJYyWuUepslviFEUQr5p7mA%2FvmThBBv7I2FJR0A3nknKrDns6mjTY5FWo9%2FhG9EhRv7oFr3KyngM9bvsUSYSiqXV8ttMzw%2FGY9tqx0Ul8yKElmA2tO8iljwhUrzNYuHBsvbsH3A5Gi0eIMOnyHN22mJOI2YlZwNVSkpOZELz%2BNqKhcRmqb22Mx1Akw2vVn35c0nR2e%2BVSQIYFubit1f3diHub8jolbXTGHy5ei98ftNoRIkd5YL3NnEhLOvH24tChG5lpkdR1ABdSonpiyCwnMOBbwgnly3BbKFc%2F6F8Z%2Bma9c5dCneMnbZu6SJHY3KnI4X9dyXGBjBIacqa3arloCZKdfsVLtjs4Ye%2BhEXPeCC8GmTHrTUhHJf96mpHRQrWm1Vc3hG%2BGB0WYM8e0WbTg5%2FeaijW0UZ5WH6C1SArTk6rfmvy2J4ZwhGRmOeMunGnwOrLr%2F2RXjHKNGg9Ujl1tajV4CqWvbJy4ptgUeDDVAeEi5pWgd5q7mTvfUOAzD3yKi%2BBjqkAdCSw8A0G72f489NCawmkMILnf%2FI%2Be3CfYHWrORnTNPWcjWQq1RARMxTnflaVKEbHkLsP5aVoOLZtcD4PjUHzGJLxCiLorRIkXsYxBgtMgK1AvKTWGrc1nhTXd4%2FK%2FD2nIsz9Xcx60hxbQx%2BPMUmXZmc3ClZrapBdJsw6O1Bh9dJA6Zw01ozxShOABTBCqXVYdRIbCZG49k1afpCwa9jf2VMmf9G&X-Amz-Signature=62a6058ed147450991f46bf61081a5b5393da70b31905b663c42ce4b5b4bb7a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLT2N4Q%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrhzVsnxiaIDZVY60sDs6Pwy%2B53flGn0kYH1YdToPI8gIhANV1rNs8iZ0heRbZNSsqh1bdVtGn2lyVu%2B42%2BWGmV9O6Kv8DCDgQABoMNjM3NDIzMTgzODA1IgzR526r%2FLlSlwxn384q3AMjpMTeA86yPLdrcPv%2FNexwbHgqCvecb28afH5%2BpoNfDMCYT4nK7CX4jTmZ36CpRXkuYuDW%2Fib5gsuuEvseamlzsq2RyT2HOmG84FsDUlQXdp%2FB7VDbU369N5crFr5exiJYyWuUepslviFEUQr5p7mA%2FvmThBBv7I2FJR0A3nknKrDns6mjTY5FWo9%2FhG9EhRv7oFr3KyngM9bvsUSYSiqXV8ttMzw%2FGY9tqx0Ul8yKElmA2tO8iljwhUrzNYuHBsvbsH3A5Gi0eIMOnyHN22mJOI2YlZwNVSkpOZELz%2BNqKhcRmqb22Mx1Akw2vVn35c0nR2e%2BVSQIYFubit1f3diHub8jolbXTGHy5ei98ftNoRIkd5YL3NnEhLOvH24tChG5lpkdR1ABdSonpiyCwnMOBbwgnly3BbKFc%2F6F8Z%2Bma9c5dCneMnbZu6SJHY3KnI4X9dyXGBjBIacqa3arloCZKdfsVLtjs4Ye%2BhEXPeCC8GmTHrTUhHJf96mpHRQrWm1Vc3hG%2BGB0WYM8e0WbTg5%2FeaijW0UZ5WH6C1SArTk6rfmvy2J4ZwhGRmOeMunGnwOrLr%2F2RXjHKNGg9Ujl1tajV4CqWvbJy4ptgUeDDVAeEi5pWgd5q7mTvfUOAzD3yKi%2BBjqkAdCSw8A0G72f489NCawmkMILnf%2FI%2Be3CfYHWrORnTNPWcjWQq1RARMxTnflaVKEbHkLsP5aVoOLZtcD4PjUHzGJLxCiLorRIkXsYxBgtMgK1AvKTWGrc1nhTXd4%2FK%2FD2nIsz9Xcx60hxbQx%2BPMUmXZmc3ClZrapBdJsw6O1Bh9dJA6Zw01ozxShOABTBCqXVYdRIbCZG49k1afpCwa9jf2VMmf9G&X-Amz-Signature=e65770137ef347c8fa90d7d7571ebd7ee78848659695db920d8b69a09c1c3a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLT2N4Q%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrhzVsnxiaIDZVY60sDs6Pwy%2B53flGn0kYH1YdToPI8gIhANV1rNs8iZ0heRbZNSsqh1bdVtGn2lyVu%2B42%2BWGmV9O6Kv8DCDgQABoMNjM3NDIzMTgzODA1IgzR526r%2FLlSlwxn384q3AMjpMTeA86yPLdrcPv%2FNexwbHgqCvecb28afH5%2BpoNfDMCYT4nK7CX4jTmZ36CpRXkuYuDW%2Fib5gsuuEvseamlzsq2RyT2HOmG84FsDUlQXdp%2FB7VDbU369N5crFr5exiJYyWuUepslviFEUQr5p7mA%2FvmThBBv7I2FJR0A3nknKrDns6mjTY5FWo9%2FhG9EhRv7oFr3KyngM9bvsUSYSiqXV8ttMzw%2FGY9tqx0Ul8yKElmA2tO8iljwhUrzNYuHBsvbsH3A5Gi0eIMOnyHN22mJOI2YlZwNVSkpOZELz%2BNqKhcRmqb22Mx1Akw2vVn35c0nR2e%2BVSQIYFubit1f3diHub8jolbXTGHy5ei98ftNoRIkd5YL3NnEhLOvH24tChG5lpkdR1ABdSonpiyCwnMOBbwgnly3BbKFc%2F6F8Z%2Bma9c5dCneMnbZu6SJHY3KnI4X9dyXGBjBIacqa3arloCZKdfsVLtjs4Ye%2BhEXPeCC8GmTHrTUhHJf96mpHRQrWm1Vc3hG%2BGB0WYM8e0WbTg5%2FeaijW0UZ5WH6C1SArTk6rfmvy2J4ZwhGRmOeMunGnwOrLr%2F2RXjHKNGg9Ujl1tajV4CqWvbJy4ptgUeDDVAeEi5pWgd5q7mTvfUOAzD3yKi%2BBjqkAdCSw8A0G72f489NCawmkMILnf%2FI%2Be3CfYHWrORnTNPWcjWQq1RARMxTnflaVKEbHkLsP5aVoOLZtcD4PjUHzGJLxCiLorRIkXsYxBgtMgK1AvKTWGrc1nhTXd4%2FK%2FD2nIsz9Xcx60hxbQx%2BPMUmXZmc3ClZrapBdJsw6O1Bh9dJA6Zw01ozxShOABTBCqXVYdRIbCZG49k1afpCwa9jf2VMmf9G&X-Amz-Signature=7d0f3f5d9f11ab2d089657ec059221614323e97304fc8e37f898f155a67d5f27&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLT2N4Q%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrhzVsnxiaIDZVY60sDs6Pwy%2B53flGn0kYH1YdToPI8gIhANV1rNs8iZ0heRbZNSsqh1bdVtGn2lyVu%2B42%2BWGmV9O6Kv8DCDgQABoMNjM3NDIzMTgzODA1IgzR526r%2FLlSlwxn384q3AMjpMTeA86yPLdrcPv%2FNexwbHgqCvecb28afH5%2BpoNfDMCYT4nK7CX4jTmZ36CpRXkuYuDW%2Fib5gsuuEvseamlzsq2RyT2HOmG84FsDUlQXdp%2FB7VDbU369N5crFr5exiJYyWuUepslviFEUQr5p7mA%2FvmThBBv7I2FJR0A3nknKrDns6mjTY5FWo9%2FhG9EhRv7oFr3KyngM9bvsUSYSiqXV8ttMzw%2FGY9tqx0Ul8yKElmA2tO8iljwhUrzNYuHBsvbsH3A5Gi0eIMOnyHN22mJOI2YlZwNVSkpOZELz%2BNqKhcRmqb22Mx1Akw2vVn35c0nR2e%2BVSQIYFubit1f3diHub8jolbXTGHy5ei98ftNoRIkd5YL3NnEhLOvH24tChG5lpkdR1ABdSonpiyCwnMOBbwgnly3BbKFc%2F6F8Z%2Bma9c5dCneMnbZu6SJHY3KnI4X9dyXGBjBIacqa3arloCZKdfsVLtjs4Ye%2BhEXPeCC8GmTHrTUhHJf96mpHRQrWm1Vc3hG%2BGB0WYM8e0WbTg5%2FeaijW0UZ5WH6C1SArTk6rfmvy2J4ZwhGRmOeMunGnwOrLr%2F2RXjHKNGg9Ujl1tajV4CqWvbJy4ptgUeDDVAeEi5pWgd5q7mTvfUOAzD3yKi%2BBjqkAdCSw8A0G72f489NCawmkMILnf%2FI%2Be3CfYHWrORnTNPWcjWQq1RARMxTnflaVKEbHkLsP5aVoOLZtcD4PjUHzGJLxCiLorRIkXsYxBgtMgK1AvKTWGrc1nhTXd4%2FK%2FD2nIsz9Xcx60hxbQx%2BPMUmXZmc3ClZrapBdJsw6O1Bh9dJA6Zw01ozxShOABTBCqXVYdRIbCZG49k1afpCwa9jf2VMmf9G&X-Amz-Signature=c46618bdb1bf028ac7d1ae9b7d87fd713cb2f8c85b3056ec8a1daa8e4a25ae8e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLT2N4Q%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrhzVsnxiaIDZVY60sDs6Pwy%2B53flGn0kYH1YdToPI8gIhANV1rNs8iZ0heRbZNSsqh1bdVtGn2lyVu%2B42%2BWGmV9O6Kv8DCDgQABoMNjM3NDIzMTgzODA1IgzR526r%2FLlSlwxn384q3AMjpMTeA86yPLdrcPv%2FNexwbHgqCvecb28afH5%2BpoNfDMCYT4nK7CX4jTmZ36CpRXkuYuDW%2Fib5gsuuEvseamlzsq2RyT2HOmG84FsDUlQXdp%2FB7VDbU369N5crFr5exiJYyWuUepslviFEUQr5p7mA%2FvmThBBv7I2FJR0A3nknKrDns6mjTY5FWo9%2FhG9EhRv7oFr3KyngM9bvsUSYSiqXV8ttMzw%2FGY9tqx0Ul8yKElmA2tO8iljwhUrzNYuHBsvbsH3A5Gi0eIMOnyHN22mJOI2YlZwNVSkpOZELz%2BNqKhcRmqb22Mx1Akw2vVn35c0nR2e%2BVSQIYFubit1f3diHub8jolbXTGHy5ei98ftNoRIkd5YL3NnEhLOvH24tChG5lpkdR1ABdSonpiyCwnMOBbwgnly3BbKFc%2F6F8Z%2Bma9c5dCneMnbZu6SJHY3KnI4X9dyXGBjBIacqa3arloCZKdfsVLtjs4Ye%2BhEXPeCC8GmTHrTUhHJf96mpHRQrWm1Vc3hG%2BGB0WYM8e0WbTg5%2FeaijW0UZ5WH6C1SArTk6rfmvy2J4ZwhGRmOeMunGnwOrLr%2F2RXjHKNGg9Ujl1tajV4CqWvbJy4ptgUeDDVAeEi5pWgd5q7mTvfUOAzD3yKi%2BBjqkAdCSw8A0G72f489NCawmkMILnf%2FI%2Be3CfYHWrORnTNPWcjWQq1RARMxTnflaVKEbHkLsP5aVoOLZtcD4PjUHzGJLxCiLorRIkXsYxBgtMgK1AvKTWGrc1nhTXd4%2FK%2FD2nIsz9Xcx60hxbQx%2BPMUmXZmc3ClZrapBdJsw6O1Bh9dJA6Zw01ozxShOABTBCqXVYdRIbCZG49k1afpCwa9jf2VMmf9G&X-Amz-Signature=b5f892144e52a7986911c51d0fa848cca97715a6392c10a77458d7fa6eab536d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLT2N4Q%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrhzVsnxiaIDZVY60sDs6Pwy%2B53flGn0kYH1YdToPI8gIhANV1rNs8iZ0heRbZNSsqh1bdVtGn2lyVu%2B42%2BWGmV9O6Kv8DCDgQABoMNjM3NDIzMTgzODA1IgzR526r%2FLlSlwxn384q3AMjpMTeA86yPLdrcPv%2FNexwbHgqCvecb28afH5%2BpoNfDMCYT4nK7CX4jTmZ36CpRXkuYuDW%2Fib5gsuuEvseamlzsq2RyT2HOmG84FsDUlQXdp%2FB7VDbU369N5crFr5exiJYyWuUepslviFEUQr5p7mA%2FvmThBBv7I2FJR0A3nknKrDns6mjTY5FWo9%2FhG9EhRv7oFr3KyngM9bvsUSYSiqXV8ttMzw%2FGY9tqx0Ul8yKElmA2tO8iljwhUrzNYuHBsvbsH3A5Gi0eIMOnyHN22mJOI2YlZwNVSkpOZELz%2BNqKhcRmqb22Mx1Akw2vVn35c0nR2e%2BVSQIYFubit1f3diHub8jolbXTGHy5ei98ftNoRIkd5YL3NnEhLOvH24tChG5lpkdR1ABdSonpiyCwnMOBbwgnly3BbKFc%2F6F8Z%2Bma9c5dCneMnbZu6SJHY3KnI4X9dyXGBjBIacqa3arloCZKdfsVLtjs4Ye%2BhEXPeCC8GmTHrTUhHJf96mpHRQrWm1Vc3hG%2BGB0WYM8e0WbTg5%2FeaijW0UZ5WH6C1SArTk6rfmvy2J4ZwhGRmOeMunGnwOrLr%2F2RXjHKNGg9Ujl1tajV4CqWvbJy4ptgUeDDVAeEi5pWgd5q7mTvfUOAzD3yKi%2BBjqkAdCSw8A0G72f489NCawmkMILnf%2FI%2Be3CfYHWrORnTNPWcjWQq1RARMxTnflaVKEbHkLsP5aVoOLZtcD4PjUHzGJLxCiLorRIkXsYxBgtMgK1AvKTWGrc1nhTXd4%2FK%2FD2nIsz9Xcx60hxbQx%2BPMUmXZmc3ClZrapBdJsw6O1Bh9dJA6Zw01ozxShOABTBCqXVYdRIbCZG49k1afpCwa9jf2VMmf9G&X-Amz-Signature=1b406157a90e7c3f5d833c167b5aef87b84801c7ef26ac45c0ed8e0d0d73742f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
