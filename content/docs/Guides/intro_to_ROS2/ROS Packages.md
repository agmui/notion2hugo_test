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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAEHLMT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGceCSoFE6TdKC5Zw%2Bmj8unXRMweLwtXpDMT8JPiE8tgIgMC8pVkpo9hBRXRZmlocrhV8andgbhk%2F5%2F7ylCxkh%2BVQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI3pItXl%2Biq8dJ7sYyrcA%2FHNP4599qU0pSlo5I%2FEhdaagr%2F1rSXPeNtns9qDtJxPIZ94tiZiC%2Fo4ik055vQTlP08QG1TXC8XmVWpDMWpSqUQ4zhX6JOBtL3JJFpnb95onYOrwEQxE8gsAujImcO8fjGpca%2FBvnQxttynBIPJ5kRqm67xU669ktQ6zqe7pTYbCM%2F0Im3mtkvsh83rOeMN0yMpr2AcOVprK5XrzTY0xSxTanCW4OQBLmUYhtQbDUMAj41UQEdg%2BkNm9s07Hc5PYs40xEvUiTksad9pEx%2F6cBPVxunt2XfC%2F14%2BWJBe8XK0gVntC1QwaTuz2WjY5hSCkBXwiq%2FJK5L4XXD9MOThWny8v5jHhzE02qdq8v1up6JkhjMvtQEwxdZw051oO9ILRiBEcDR8xzj678uOqBO0nRUitOtb2w%2FKSnWE9P%2F70gwJXj67OthkJZWQ2V9BPKIrKxPsr9HZXKoJ%2FllXziERFPViWe1B2Rv5JdGW4Rmtpy%2F5%2BW7ps85FB6mMShXf0edOBWl81syJzii5wh6II%2Bx4HhBVNqqazlMNnMmbfLl6mbjXvOE1dpuzByNwwzVromoPzeNGHBwy1FLgLYY80z84mj9nAk1QRXdHtCKbm7AA4nNz7xEkcqc%2BK%2FcavWeEMMecwL8GOqUBKWvA3nn8QA%2BC7M%2B61eSOoW0XZC6SyQgszwl%2BbPzqt%2FlB2Xl5qqmSA6wsICzWeMwb57N3Sl6%2FHYPYazklU9gWAeJagOpSLOb9fshVZW5mneahntzrIGh1tqanfIybP2KjHbDPmTeanApLoVI1WV%2FLHJXb6bOAaQpLzpWRKt4bUzqC25kk3RwSQZFGgpY4Kj12QgKUcAuHsvUP9Ol5xILK94V1vJHL&X-Amz-Signature=c076e4b50215b5caede3eaf850bedc40eafa6ee84238c210588ae30c7689da05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAEHLMT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGceCSoFE6TdKC5Zw%2Bmj8unXRMweLwtXpDMT8JPiE8tgIgMC8pVkpo9hBRXRZmlocrhV8andgbhk%2F5%2F7ylCxkh%2BVQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI3pItXl%2Biq8dJ7sYyrcA%2FHNP4599qU0pSlo5I%2FEhdaagr%2F1rSXPeNtns9qDtJxPIZ94tiZiC%2Fo4ik055vQTlP08QG1TXC8XmVWpDMWpSqUQ4zhX6JOBtL3JJFpnb95onYOrwEQxE8gsAujImcO8fjGpca%2FBvnQxttynBIPJ5kRqm67xU669ktQ6zqe7pTYbCM%2F0Im3mtkvsh83rOeMN0yMpr2AcOVprK5XrzTY0xSxTanCW4OQBLmUYhtQbDUMAj41UQEdg%2BkNm9s07Hc5PYs40xEvUiTksad9pEx%2F6cBPVxunt2XfC%2F14%2BWJBe8XK0gVntC1QwaTuz2WjY5hSCkBXwiq%2FJK5L4XXD9MOThWny8v5jHhzE02qdq8v1up6JkhjMvtQEwxdZw051oO9ILRiBEcDR8xzj678uOqBO0nRUitOtb2w%2FKSnWE9P%2F70gwJXj67OthkJZWQ2V9BPKIrKxPsr9HZXKoJ%2FllXziERFPViWe1B2Rv5JdGW4Rmtpy%2F5%2BW7ps85FB6mMShXf0edOBWl81syJzii5wh6II%2Bx4HhBVNqqazlMNnMmbfLl6mbjXvOE1dpuzByNwwzVromoPzeNGHBwy1FLgLYY80z84mj9nAk1QRXdHtCKbm7AA4nNz7xEkcqc%2BK%2FcavWeEMMecwL8GOqUBKWvA3nn8QA%2BC7M%2B61eSOoW0XZC6SyQgszwl%2BbPzqt%2FlB2Xl5qqmSA6wsICzWeMwb57N3Sl6%2FHYPYazklU9gWAeJagOpSLOb9fshVZW5mneahntzrIGh1tqanfIybP2KjHbDPmTeanApLoVI1WV%2FLHJXb6bOAaQpLzpWRKt4bUzqC25kk3RwSQZFGgpY4Kj12QgKUcAuHsvUP9Ol5xILK94V1vJHL&X-Amz-Signature=01d4ed0680a4122904f3ec4055229e908c2237a4c0807863d79431527e605eda&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAEHLMT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGceCSoFE6TdKC5Zw%2Bmj8unXRMweLwtXpDMT8JPiE8tgIgMC8pVkpo9hBRXRZmlocrhV8andgbhk%2F5%2F7ylCxkh%2BVQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI3pItXl%2Biq8dJ7sYyrcA%2FHNP4599qU0pSlo5I%2FEhdaagr%2F1rSXPeNtns9qDtJxPIZ94tiZiC%2Fo4ik055vQTlP08QG1TXC8XmVWpDMWpSqUQ4zhX6JOBtL3JJFpnb95onYOrwEQxE8gsAujImcO8fjGpca%2FBvnQxttynBIPJ5kRqm67xU669ktQ6zqe7pTYbCM%2F0Im3mtkvsh83rOeMN0yMpr2AcOVprK5XrzTY0xSxTanCW4OQBLmUYhtQbDUMAj41UQEdg%2BkNm9s07Hc5PYs40xEvUiTksad9pEx%2F6cBPVxunt2XfC%2F14%2BWJBe8XK0gVntC1QwaTuz2WjY5hSCkBXwiq%2FJK5L4XXD9MOThWny8v5jHhzE02qdq8v1up6JkhjMvtQEwxdZw051oO9ILRiBEcDR8xzj678uOqBO0nRUitOtb2w%2FKSnWE9P%2F70gwJXj67OthkJZWQ2V9BPKIrKxPsr9HZXKoJ%2FllXziERFPViWe1B2Rv5JdGW4Rmtpy%2F5%2BW7ps85FB6mMShXf0edOBWl81syJzii5wh6II%2Bx4HhBVNqqazlMNnMmbfLl6mbjXvOE1dpuzByNwwzVromoPzeNGHBwy1FLgLYY80z84mj9nAk1QRXdHtCKbm7AA4nNz7xEkcqc%2BK%2FcavWeEMMecwL8GOqUBKWvA3nn8QA%2BC7M%2B61eSOoW0XZC6SyQgszwl%2BbPzqt%2FlB2Xl5qqmSA6wsICzWeMwb57N3Sl6%2FHYPYazklU9gWAeJagOpSLOb9fshVZW5mneahntzrIGh1tqanfIybP2KjHbDPmTeanApLoVI1WV%2FLHJXb6bOAaQpLzpWRKt4bUzqC25kk3RwSQZFGgpY4Kj12QgKUcAuHsvUP9Ol5xILK94V1vJHL&X-Amz-Signature=ff6b560efd2d2b69fe26d2fa2e8eaa72d1a3d59db31af4d85b152ac5ba8bdaa8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAEHLMT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGceCSoFE6TdKC5Zw%2Bmj8unXRMweLwtXpDMT8JPiE8tgIgMC8pVkpo9hBRXRZmlocrhV8andgbhk%2F5%2F7ylCxkh%2BVQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI3pItXl%2Biq8dJ7sYyrcA%2FHNP4599qU0pSlo5I%2FEhdaagr%2F1rSXPeNtns9qDtJxPIZ94tiZiC%2Fo4ik055vQTlP08QG1TXC8XmVWpDMWpSqUQ4zhX6JOBtL3JJFpnb95onYOrwEQxE8gsAujImcO8fjGpca%2FBvnQxttynBIPJ5kRqm67xU669ktQ6zqe7pTYbCM%2F0Im3mtkvsh83rOeMN0yMpr2AcOVprK5XrzTY0xSxTanCW4OQBLmUYhtQbDUMAj41UQEdg%2BkNm9s07Hc5PYs40xEvUiTksad9pEx%2F6cBPVxunt2XfC%2F14%2BWJBe8XK0gVntC1QwaTuz2WjY5hSCkBXwiq%2FJK5L4XXD9MOThWny8v5jHhzE02qdq8v1up6JkhjMvtQEwxdZw051oO9ILRiBEcDR8xzj678uOqBO0nRUitOtb2w%2FKSnWE9P%2F70gwJXj67OthkJZWQ2V9BPKIrKxPsr9HZXKoJ%2FllXziERFPViWe1B2Rv5JdGW4Rmtpy%2F5%2BW7ps85FB6mMShXf0edOBWl81syJzii5wh6II%2Bx4HhBVNqqazlMNnMmbfLl6mbjXvOE1dpuzByNwwzVromoPzeNGHBwy1FLgLYY80z84mj9nAk1QRXdHtCKbm7AA4nNz7xEkcqc%2BK%2FcavWeEMMecwL8GOqUBKWvA3nn8QA%2BC7M%2B61eSOoW0XZC6SyQgszwl%2BbPzqt%2FlB2Xl5qqmSA6wsICzWeMwb57N3Sl6%2FHYPYazklU9gWAeJagOpSLOb9fshVZW5mneahntzrIGh1tqanfIybP2KjHbDPmTeanApLoVI1WV%2FLHJXb6bOAaQpLzpWRKt4bUzqC25kk3RwSQZFGgpY4Kj12QgKUcAuHsvUP9Ol5xILK94V1vJHL&X-Amz-Signature=205782faec899f4cc9bf4c704b5d847acf98366ed764e8e7896ed9750529e56e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAEHLMT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGceCSoFE6TdKC5Zw%2Bmj8unXRMweLwtXpDMT8JPiE8tgIgMC8pVkpo9hBRXRZmlocrhV8andgbhk%2F5%2F7ylCxkh%2BVQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI3pItXl%2Biq8dJ7sYyrcA%2FHNP4599qU0pSlo5I%2FEhdaagr%2F1rSXPeNtns9qDtJxPIZ94tiZiC%2Fo4ik055vQTlP08QG1TXC8XmVWpDMWpSqUQ4zhX6JOBtL3JJFpnb95onYOrwEQxE8gsAujImcO8fjGpca%2FBvnQxttynBIPJ5kRqm67xU669ktQ6zqe7pTYbCM%2F0Im3mtkvsh83rOeMN0yMpr2AcOVprK5XrzTY0xSxTanCW4OQBLmUYhtQbDUMAj41UQEdg%2BkNm9s07Hc5PYs40xEvUiTksad9pEx%2F6cBPVxunt2XfC%2F14%2BWJBe8XK0gVntC1QwaTuz2WjY5hSCkBXwiq%2FJK5L4XXD9MOThWny8v5jHhzE02qdq8v1up6JkhjMvtQEwxdZw051oO9ILRiBEcDR8xzj678uOqBO0nRUitOtb2w%2FKSnWE9P%2F70gwJXj67OthkJZWQ2V9BPKIrKxPsr9HZXKoJ%2FllXziERFPViWe1B2Rv5JdGW4Rmtpy%2F5%2BW7ps85FB6mMShXf0edOBWl81syJzii5wh6II%2Bx4HhBVNqqazlMNnMmbfLl6mbjXvOE1dpuzByNwwzVromoPzeNGHBwy1FLgLYY80z84mj9nAk1QRXdHtCKbm7AA4nNz7xEkcqc%2BK%2FcavWeEMMecwL8GOqUBKWvA3nn8QA%2BC7M%2B61eSOoW0XZC6SyQgszwl%2BbPzqt%2FlB2Xl5qqmSA6wsICzWeMwb57N3Sl6%2FHYPYazklU9gWAeJagOpSLOb9fshVZW5mneahntzrIGh1tqanfIybP2KjHbDPmTeanApLoVI1WV%2FLHJXb6bOAaQpLzpWRKt4bUzqC25kk3RwSQZFGgpY4Kj12QgKUcAuHsvUP9Ol5xILK94V1vJHL&X-Amz-Signature=3553770866084bb51ea9d404066e99294f0c6afad74798e47a81f7c9cbfd353d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAEHLMT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGceCSoFE6TdKC5Zw%2Bmj8unXRMweLwtXpDMT8JPiE8tgIgMC8pVkpo9hBRXRZmlocrhV8andgbhk%2F5%2F7ylCxkh%2BVQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI3pItXl%2Biq8dJ7sYyrcA%2FHNP4599qU0pSlo5I%2FEhdaagr%2F1rSXPeNtns9qDtJxPIZ94tiZiC%2Fo4ik055vQTlP08QG1TXC8XmVWpDMWpSqUQ4zhX6JOBtL3JJFpnb95onYOrwEQxE8gsAujImcO8fjGpca%2FBvnQxttynBIPJ5kRqm67xU669ktQ6zqe7pTYbCM%2F0Im3mtkvsh83rOeMN0yMpr2AcOVprK5XrzTY0xSxTanCW4OQBLmUYhtQbDUMAj41UQEdg%2BkNm9s07Hc5PYs40xEvUiTksad9pEx%2F6cBPVxunt2XfC%2F14%2BWJBe8XK0gVntC1QwaTuz2WjY5hSCkBXwiq%2FJK5L4XXD9MOThWny8v5jHhzE02qdq8v1up6JkhjMvtQEwxdZw051oO9ILRiBEcDR8xzj678uOqBO0nRUitOtb2w%2FKSnWE9P%2F70gwJXj67OthkJZWQ2V9BPKIrKxPsr9HZXKoJ%2FllXziERFPViWe1B2Rv5JdGW4Rmtpy%2F5%2BW7ps85FB6mMShXf0edOBWl81syJzii5wh6II%2Bx4HhBVNqqazlMNnMmbfLl6mbjXvOE1dpuzByNwwzVromoPzeNGHBwy1FLgLYY80z84mj9nAk1QRXdHtCKbm7AA4nNz7xEkcqc%2BK%2FcavWeEMMecwL8GOqUBKWvA3nn8QA%2BC7M%2B61eSOoW0XZC6SyQgszwl%2BbPzqt%2FlB2Xl5qqmSA6wsICzWeMwb57N3Sl6%2FHYPYazklU9gWAeJagOpSLOb9fshVZW5mneahntzrIGh1tqanfIybP2KjHbDPmTeanApLoVI1WV%2FLHJXb6bOAaQpLzpWRKt4bUzqC25kk3RwSQZFGgpY4Kj12QgKUcAuHsvUP9Ol5xILK94V1vJHL&X-Amz-Signature=24985e2af8e8c47e903cddcb0e783bf8d43af87a9926c92a14d81c5864afefc9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAEHLMT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGceCSoFE6TdKC5Zw%2Bmj8unXRMweLwtXpDMT8JPiE8tgIgMC8pVkpo9hBRXRZmlocrhV8andgbhk%2F5%2F7ylCxkh%2BVQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI3pItXl%2Biq8dJ7sYyrcA%2FHNP4599qU0pSlo5I%2FEhdaagr%2F1rSXPeNtns9qDtJxPIZ94tiZiC%2Fo4ik055vQTlP08QG1TXC8XmVWpDMWpSqUQ4zhX6JOBtL3JJFpnb95onYOrwEQxE8gsAujImcO8fjGpca%2FBvnQxttynBIPJ5kRqm67xU669ktQ6zqe7pTYbCM%2F0Im3mtkvsh83rOeMN0yMpr2AcOVprK5XrzTY0xSxTanCW4OQBLmUYhtQbDUMAj41UQEdg%2BkNm9s07Hc5PYs40xEvUiTksad9pEx%2F6cBPVxunt2XfC%2F14%2BWJBe8XK0gVntC1QwaTuz2WjY5hSCkBXwiq%2FJK5L4XXD9MOThWny8v5jHhzE02qdq8v1up6JkhjMvtQEwxdZw051oO9ILRiBEcDR8xzj678uOqBO0nRUitOtb2w%2FKSnWE9P%2F70gwJXj67OthkJZWQ2V9BPKIrKxPsr9HZXKoJ%2FllXziERFPViWe1B2Rv5JdGW4Rmtpy%2F5%2BW7ps85FB6mMShXf0edOBWl81syJzii5wh6II%2Bx4HhBVNqqazlMNnMmbfLl6mbjXvOE1dpuzByNwwzVromoPzeNGHBwy1FLgLYY80z84mj9nAk1QRXdHtCKbm7AA4nNz7xEkcqc%2BK%2FcavWeEMMecwL8GOqUBKWvA3nn8QA%2BC7M%2B61eSOoW0XZC6SyQgszwl%2BbPzqt%2FlB2Xl5qqmSA6wsICzWeMwb57N3Sl6%2FHYPYazklU9gWAeJagOpSLOb9fshVZW5mneahntzrIGh1tqanfIybP2KjHbDPmTeanApLoVI1WV%2FLHJXb6bOAaQpLzpWRKt4bUzqC25kk3RwSQZFGgpY4Kj12QgKUcAuHsvUP9Ol5xILK94V1vJHL&X-Amz-Signature=c617b4ec7a3493ff821400766d16e5dd81ceb0124c034bcab4bd6aa9616b46ad&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
