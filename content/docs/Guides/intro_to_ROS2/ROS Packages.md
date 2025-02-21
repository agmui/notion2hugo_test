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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCIUUUD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW5WCta7vDIDe1Y5Te%2F%2Ft9N1zSacZiklbz7IWOj2Q3LAiA01TYuVrdnIiXhq4RM5v6J7Yi%2F4WA5JX4bqTERaOtDICqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQWMSHOri0p%2B%2FbM8KtwDHKPJSehv%2F19QYMPwnKKj%2Frcwl5xghl5UYDRpsjACcgBZLGYSGHw6xbsFJXLYXg9yZwbUZJ4Sm%2FtwKfTPb3J3ixYBHR25NPLttVZ%2FN3vp%2FnVYdWjkpmH7xBty1A1SAGtZRz0i1Ohlz22OqqvskjH2tcfhQFGs7IgGt4xYkxS27sPKoSY8UmGmpKhFUrtXDpkesQJg3JAcLDIVNwiRJXv4rC5UXLKbVtI9oI92Aw%2BArV%2BEFyNSVnNx3lam8VHToFvYq6nCtNSgEktpeVebSjL%2BTBDZzk1kdAgsXmCtNMrNVQooAZoZFADISxzUvYaXCoCU4%2BuYKj5CGIaZq9wjpIxszCBVePvvfbTF6AoH0xVRk1mR59PHytIDykOJj1MNApgernO6h2vXiUWEoaf4Z%2BA3XiWMgZ3a8DRsxdjYUbLsqvKw3lFoFoCOLd1PmQuoiiK482MaLPFPWkGcB%2BcfsdXGUXtcTAyVgMHeOvLf4UXTWdRhfcLZLH1uXw0zuLFSaBsTpclXwP3toFnTeb1j5%2FNKMs6BnY3GceDDTUnk%2FP6b4QGqLm%2BOOr2zVCFgxC1YkcYI8JJtycPDUyFIHGKIam6sN0sRXxw0UhgV4SylIAioUk1S13q7%2Br%2FL4Kqa0qQwiaHivQY6pgEzlOyzaCEFXhc4msxp1UdwLkzRodBJ%2Bo%2B77J9shqJ7WyQEP1SIV59%2Bu74HNuD6HA5ENi3z%2FNdFnmO7WnZNNm%2FjAsLUoBifFaSetB7BNvUJn86t46YRMvdh%2BCRAO8KQGuxjDX2K1laWhiIrf8zyo5PISofq%2B%2BqJjah34U5a3%2B8%2FE2MEPd3o%2Fk2gg8CbaOpkPay2ogTfGyWOSAhai9cGRKX%2BzzIVrAZd&X-Amz-Signature=53eb6259935efc1a8e95ae5429a98911709398ed1c0b583725297c7fb9b0eaaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCIUUUD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW5WCta7vDIDe1Y5Te%2F%2Ft9N1zSacZiklbz7IWOj2Q3LAiA01TYuVrdnIiXhq4RM5v6J7Yi%2F4WA5JX4bqTERaOtDICqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQWMSHOri0p%2B%2FbM8KtwDHKPJSehv%2F19QYMPwnKKj%2Frcwl5xghl5UYDRpsjACcgBZLGYSGHw6xbsFJXLYXg9yZwbUZJ4Sm%2FtwKfTPb3J3ixYBHR25NPLttVZ%2FN3vp%2FnVYdWjkpmH7xBty1A1SAGtZRz0i1Ohlz22OqqvskjH2tcfhQFGs7IgGt4xYkxS27sPKoSY8UmGmpKhFUrtXDpkesQJg3JAcLDIVNwiRJXv4rC5UXLKbVtI9oI92Aw%2BArV%2BEFyNSVnNx3lam8VHToFvYq6nCtNSgEktpeVebSjL%2BTBDZzk1kdAgsXmCtNMrNVQooAZoZFADISxzUvYaXCoCU4%2BuYKj5CGIaZq9wjpIxszCBVePvvfbTF6AoH0xVRk1mR59PHytIDykOJj1MNApgernO6h2vXiUWEoaf4Z%2BA3XiWMgZ3a8DRsxdjYUbLsqvKw3lFoFoCOLd1PmQuoiiK482MaLPFPWkGcB%2BcfsdXGUXtcTAyVgMHeOvLf4UXTWdRhfcLZLH1uXw0zuLFSaBsTpclXwP3toFnTeb1j5%2FNKMs6BnY3GceDDTUnk%2FP6b4QGqLm%2BOOr2zVCFgxC1YkcYI8JJtycPDUyFIHGKIam6sN0sRXxw0UhgV4SylIAioUk1S13q7%2Br%2FL4Kqa0qQwiaHivQY6pgEzlOyzaCEFXhc4msxp1UdwLkzRodBJ%2Bo%2B77J9shqJ7WyQEP1SIV59%2Bu74HNuD6HA5ENi3z%2FNdFnmO7WnZNNm%2FjAsLUoBifFaSetB7BNvUJn86t46YRMvdh%2BCRAO8KQGuxjDX2K1laWhiIrf8zyo5PISofq%2B%2BqJjah34U5a3%2B8%2FE2MEPd3o%2Fk2gg8CbaOpkPay2ogTfGyWOSAhai9cGRKX%2BzzIVrAZd&X-Amz-Signature=c8f1ff884632b5756d88fd2572913f81a4f65b9641f528711f4e31dc1e4fb9a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCIUUUD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW5WCta7vDIDe1Y5Te%2F%2Ft9N1zSacZiklbz7IWOj2Q3LAiA01TYuVrdnIiXhq4RM5v6J7Yi%2F4WA5JX4bqTERaOtDICqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQWMSHOri0p%2B%2FbM8KtwDHKPJSehv%2F19QYMPwnKKj%2Frcwl5xghl5UYDRpsjACcgBZLGYSGHw6xbsFJXLYXg9yZwbUZJ4Sm%2FtwKfTPb3J3ixYBHR25NPLttVZ%2FN3vp%2FnVYdWjkpmH7xBty1A1SAGtZRz0i1Ohlz22OqqvskjH2tcfhQFGs7IgGt4xYkxS27sPKoSY8UmGmpKhFUrtXDpkesQJg3JAcLDIVNwiRJXv4rC5UXLKbVtI9oI92Aw%2BArV%2BEFyNSVnNx3lam8VHToFvYq6nCtNSgEktpeVebSjL%2BTBDZzk1kdAgsXmCtNMrNVQooAZoZFADISxzUvYaXCoCU4%2BuYKj5CGIaZq9wjpIxszCBVePvvfbTF6AoH0xVRk1mR59PHytIDykOJj1MNApgernO6h2vXiUWEoaf4Z%2BA3XiWMgZ3a8DRsxdjYUbLsqvKw3lFoFoCOLd1PmQuoiiK482MaLPFPWkGcB%2BcfsdXGUXtcTAyVgMHeOvLf4UXTWdRhfcLZLH1uXw0zuLFSaBsTpclXwP3toFnTeb1j5%2FNKMs6BnY3GceDDTUnk%2FP6b4QGqLm%2BOOr2zVCFgxC1YkcYI8JJtycPDUyFIHGKIam6sN0sRXxw0UhgV4SylIAioUk1S13q7%2Br%2FL4Kqa0qQwiaHivQY6pgEzlOyzaCEFXhc4msxp1UdwLkzRodBJ%2Bo%2B77J9shqJ7WyQEP1SIV59%2Bu74HNuD6HA5ENi3z%2FNdFnmO7WnZNNm%2FjAsLUoBifFaSetB7BNvUJn86t46YRMvdh%2BCRAO8KQGuxjDX2K1laWhiIrf8zyo5PISofq%2B%2BqJjah34U5a3%2B8%2FE2MEPd3o%2Fk2gg8CbaOpkPay2ogTfGyWOSAhai9cGRKX%2BzzIVrAZd&X-Amz-Signature=8b4c53c2a86932646b3c3acddfa53ac44f3fc95946faa32ad3ff38b34ab02cb7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCIUUUD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW5WCta7vDIDe1Y5Te%2F%2Ft9N1zSacZiklbz7IWOj2Q3LAiA01TYuVrdnIiXhq4RM5v6J7Yi%2F4WA5JX4bqTERaOtDICqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQWMSHOri0p%2B%2FbM8KtwDHKPJSehv%2F19QYMPwnKKj%2Frcwl5xghl5UYDRpsjACcgBZLGYSGHw6xbsFJXLYXg9yZwbUZJ4Sm%2FtwKfTPb3J3ixYBHR25NPLttVZ%2FN3vp%2FnVYdWjkpmH7xBty1A1SAGtZRz0i1Ohlz22OqqvskjH2tcfhQFGs7IgGt4xYkxS27sPKoSY8UmGmpKhFUrtXDpkesQJg3JAcLDIVNwiRJXv4rC5UXLKbVtI9oI92Aw%2BArV%2BEFyNSVnNx3lam8VHToFvYq6nCtNSgEktpeVebSjL%2BTBDZzk1kdAgsXmCtNMrNVQooAZoZFADISxzUvYaXCoCU4%2BuYKj5CGIaZq9wjpIxszCBVePvvfbTF6AoH0xVRk1mR59PHytIDykOJj1MNApgernO6h2vXiUWEoaf4Z%2BA3XiWMgZ3a8DRsxdjYUbLsqvKw3lFoFoCOLd1PmQuoiiK482MaLPFPWkGcB%2BcfsdXGUXtcTAyVgMHeOvLf4UXTWdRhfcLZLH1uXw0zuLFSaBsTpclXwP3toFnTeb1j5%2FNKMs6BnY3GceDDTUnk%2FP6b4QGqLm%2BOOr2zVCFgxC1YkcYI8JJtycPDUyFIHGKIam6sN0sRXxw0UhgV4SylIAioUk1S13q7%2Br%2FL4Kqa0qQwiaHivQY6pgEzlOyzaCEFXhc4msxp1UdwLkzRodBJ%2Bo%2B77J9shqJ7WyQEP1SIV59%2Bu74HNuD6HA5ENi3z%2FNdFnmO7WnZNNm%2FjAsLUoBifFaSetB7BNvUJn86t46YRMvdh%2BCRAO8KQGuxjDX2K1laWhiIrf8zyo5PISofq%2B%2BqJjah34U5a3%2B8%2FE2MEPd3o%2Fk2gg8CbaOpkPay2ogTfGyWOSAhai9cGRKX%2BzzIVrAZd&X-Amz-Signature=1ae9cab2756fef2e03e60e7c2b0e4b9395f6717010d0f0273173f5a9cb126119&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCIUUUD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW5WCta7vDIDe1Y5Te%2F%2Ft9N1zSacZiklbz7IWOj2Q3LAiA01TYuVrdnIiXhq4RM5v6J7Yi%2F4WA5JX4bqTERaOtDICqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQWMSHOri0p%2B%2FbM8KtwDHKPJSehv%2F19QYMPwnKKj%2Frcwl5xghl5UYDRpsjACcgBZLGYSGHw6xbsFJXLYXg9yZwbUZJ4Sm%2FtwKfTPb3J3ixYBHR25NPLttVZ%2FN3vp%2FnVYdWjkpmH7xBty1A1SAGtZRz0i1Ohlz22OqqvskjH2tcfhQFGs7IgGt4xYkxS27sPKoSY8UmGmpKhFUrtXDpkesQJg3JAcLDIVNwiRJXv4rC5UXLKbVtI9oI92Aw%2BArV%2BEFyNSVnNx3lam8VHToFvYq6nCtNSgEktpeVebSjL%2BTBDZzk1kdAgsXmCtNMrNVQooAZoZFADISxzUvYaXCoCU4%2BuYKj5CGIaZq9wjpIxszCBVePvvfbTF6AoH0xVRk1mR59PHytIDykOJj1MNApgernO6h2vXiUWEoaf4Z%2BA3XiWMgZ3a8DRsxdjYUbLsqvKw3lFoFoCOLd1PmQuoiiK482MaLPFPWkGcB%2BcfsdXGUXtcTAyVgMHeOvLf4UXTWdRhfcLZLH1uXw0zuLFSaBsTpclXwP3toFnTeb1j5%2FNKMs6BnY3GceDDTUnk%2FP6b4QGqLm%2BOOr2zVCFgxC1YkcYI8JJtycPDUyFIHGKIam6sN0sRXxw0UhgV4SylIAioUk1S13q7%2Br%2FL4Kqa0qQwiaHivQY6pgEzlOyzaCEFXhc4msxp1UdwLkzRodBJ%2Bo%2B77J9shqJ7WyQEP1SIV59%2Bu74HNuD6HA5ENi3z%2FNdFnmO7WnZNNm%2FjAsLUoBifFaSetB7BNvUJn86t46YRMvdh%2BCRAO8KQGuxjDX2K1laWhiIrf8zyo5PISofq%2B%2BqJjah34U5a3%2B8%2FE2MEPd3o%2Fk2gg8CbaOpkPay2ogTfGyWOSAhai9cGRKX%2BzzIVrAZd&X-Amz-Signature=210a873fe209b98928d3f71f51c102616e6217bdb66119b3b5e010968b617a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCIUUUD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW5WCta7vDIDe1Y5Te%2F%2Ft9N1zSacZiklbz7IWOj2Q3LAiA01TYuVrdnIiXhq4RM5v6J7Yi%2F4WA5JX4bqTERaOtDICqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQWMSHOri0p%2B%2FbM8KtwDHKPJSehv%2F19QYMPwnKKj%2Frcwl5xghl5UYDRpsjACcgBZLGYSGHw6xbsFJXLYXg9yZwbUZJ4Sm%2FtwKfTPb3J3ixYBHR25NPLttVZ%2FN3vp%2FnVYdWjkpmH7xBty1A1SAGtZRz0i1Ohlz22OqqvskjH2tcfhQFGs7IgGt4xYkxS27sPKoSY8UmGmpKhFUrtXDpkesQJg3JAcLDIVNwiRJXv4rC5UXLKbVtI9oI92Aw%2BArV%2BEFyNSVnNx3lam8VHToFvYq6nCtNSgEktpeVebSjL%2BTBDZzk1kdAgsXmCtNMrNVQooAZoZFADISxzUvYaXCoCU4%2BuYKj5CGIaZq9wjpIxszCBVePvvfbTF6AoH0xVRk1mR59PHytIDykOJj1MNApgernO6h2vXiUWEoaf4Z%2BA3XiWMgZ3a8DRsxdjYUbLsqvKw3lFoFoCOLd1PmQuoiiK482MaLPFPWkGcB%2BcfsdXGUXtcTAyVgMHeOvLf4UXTWdRhfcLZLH1uXw0zuLFSaBsTpclXwP3toFnTeb1j5%2FNKMs6BnY3GceDDTUnk%2FP6b4QGqLm%2BOOr2zVCFgxC1YkcYI8JJtycPDUyFIHGKIam6sN0sRXxw0UhgV4SylIAioUk1S13q7%2Br%2FL4Kqa0qQwiaHivQY6pgEzlOyzaCEFXhc4msxp1UdwLkzRodBJ%2Bo%2B77J9shqJ7WyQEP1SIV59%2Bu74HNuD6HA5ENi3z%2FNdFnmO7WnZNNm%2FjAsLUoBifFaSetB7BNvUJn86t46YRMvdh%2BCRAO8KQGuxjDX2K1laWhiIrf8zyo5PISofq%2B%2BqJjah34U5a3%2B8%2FE2MEPd3o%2Fk2gg8CbaOpkPay2ogTfGyWOSAhai9cGRKX%2BzzIVrAZd&X-Amz-Signature=0f9cd89325aca4eaddaac236d18b6ef83fb344c73a608fa3f74c7940f65d0980&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCIUUUD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW5WCta7vDIDe1Y5Te%2F%2Ft9N1zSacZiklbz7IWOj2Q3LAiA01TYuVrdnIiXhq4RM5v6J7Yi%2F4WA5JX4bqTERaOtDICqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQWMSHOri0p%2B%2FbM8KtwDHKPJSehv%2F19QYMPwnKKj%2Frcwl5xghl5UYDRpsjACcgBZLGYSGHw6xbsFJXLYXg9yZwbUZJ4Sm%2FtwKfTPb3J3ixYBHR25NPLttVZ%2FN3vp%2FnVYdWjkpmH7xBty1A1SAGtZRz0i1Ohlz22OqqvskjH2tcfhQFGs7IgGt4xYkxS27sPKoSY8UmGmpKhFUrtXDpkesQJg3JAcLDIVNwiRJXv4rC5UXLKbVtI9oI92Aw%2BArV%2BEFyNSVnNx3lam8VHToFvYq6nCtNSgEktpeVebSjL%2BTBDZzk1kdAgsXmCtNMrNVQooAZoZFADISxzUvYaXCoCU4%2BuYKj5CGIaZq9wjpIxszCBVePvvfbTF6AoH0xVRk1mR59PHytIDykOJj1MNApgernO6h2vXiUWEoaf4Z%2BA3XiWMgZ3a8DRsxdjYUbLsqvKw3lFoFoCOLd1PmQuoiiK482MaLPFPWkGcB%2BcfsdXGUXtcTAyVgMHeOvLf4UXTWdRhfcLZLH1uXw0zuLFSaBsTpclXwP3toFnTeb1j5%2FNKMs6BnY3GceDDTUnk%2FP6b4QGqLm%2BOOr2zVCFgxC1YkcYI8JJtycPDUyFIHGKIam6sN0sRXxw0UhgV4SylIAioUk1S13q7%2Br%2FL4Kqa0qQwiaHivQY6pgEzlOyzaCEFXhc4msxp1UdwLkzRodBJ%2Bo%2B77J9shqJ7WyQEP1SIV59%2Bu74HNuD6HA5ENi3z%2FNdFnmO7WnZNNm%2FjAsLUoBifFaSetB7BNvUJn86t46YRMvdh%2BCRAO8KQGuxjDX2K1laWhiIrf8zyo5PISofq%2B%2BqJjah34U5a3%2B8%2FE2MEPd3o%2Fk2gg8CbaOpkPay2ogTfGyWOSAhai9cGRKX%2BzzIVrAZd&X-Amz-Signature=dc4d43bcc04fbaff401ce5e9ac6c50ca0cbf5b1d2c28f0c685a561faf5e83342&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
