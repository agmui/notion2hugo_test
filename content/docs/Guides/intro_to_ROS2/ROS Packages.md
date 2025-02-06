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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIMZPNU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIQDGILWdzJVpkycQNGmIUS%2BfpvFMXNfcqngXVgmr7TQHvAIfLbu95Wjn9CejknSlLrK%2BzF92X0KQTdZLCum2m2ILFir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMo%2FpI1TJZw2f6wIghKtwDnnrUzunkGiE%2FP6NSJEOBhLg0cvHNXgerM6GIYHF12MU1VuTYuNhcgpmAYpo8LybQ8dY3ht%2FA525FGrswN6%2FJLzE5lJqtBqiveNU1Dd31mPf1zCr1tQoDOim1erwcNqm69i4PTQX6xldwYjHrHZbT7F466UAxLhDsg%2FNRWjg08wK514LEW9i%2BRgjf0KkMqRf6on3EKdL%2Fs5sKPje%2F9zdgPO7WV25O0cQjlgDhmdoshbv%2BaRAOpb5dAsMbOMGP0HwRQsIVP9kbqSpDcot7fR%2B%2Fdf80z5bv%2B8XcElwmOhfqPJMGqabVleHLGRLVCE3T%2BOtEIvrJxDRfI8syFnZAzqWJ9k3W0egDXBDZObTcms28BqHqOq6D5EfiJYlQu9oeVKccs1lJayezz08YO5%2F9w1NHJjpKDHFh9O07fvN0ZIoKjV1u9pj7I0VjO1ycDXYSfktKo32DwjML9xk%2B7aRJmxuk74pLvvnYBUQP0xgcInCAYQRESFlBkt54sIYbtReniwWa9DC01hXY4efAFXV7ozM86jmgK%2F53gPIBsERpkK3tkcl2VcEE%2BiP4gyWr2fcHd1qaqxjDzJHdC8B9U5uxxKvaJkb%2BVg6ndwbd7riKmca04SyNs16WUmX63MaDMgYws%2ByPvQY6pgEU7AE5PurbvBnzE3GU1uJbYYiIsqYH1HaJg5VPeqCSjnEDkN0k1ebnoVEBP92ENTCSRpP9cjUZe%2Btmj7nRCON%2BZvV807rnfshsmcwTapwxZ%2BcbmNKVIDbHjpjtQ9KCNlWv4LYeokElXqrxFyAsxowgeXHLuVyceoVsmPAy4UDU4mb6ztaL9p1IQmARPAECmv%2FfE2wHjH3qGyUOhgKvaqpwHM91NjUZ&X-Amz-Signature=fb1e9f63596f099a52582614b54a5795bc2a7c5a4d9469f9b49127fd1f62c630&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIMZPNU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIQDGILWdzJVpkycQNGmIUS%2BfpvFMXNfcqngXVgmr7TQHvAIfLbu95Wjn9CejknSlLrK%2BzF92X0KQTdZLCum2m2ILFir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMo%2FpI1TJZw2f6wIghKtwDnnrUzunkGiE%2FP6NSJEOBhLg0cvHNXgerM6GIYHF12MU1VuTYuNhcgpmAYpo8LybQ8dY3ht%2FA525FGrswN6%2FJLzE5lJqtBqiveNU1Dd31mPf1zCr1tQoDOim1erwcNqm69i4PTQX6xldwYjHrHZbT7F466UAxLhDsg%2FNRWjg08wK514LEW9i%2BRgjf0KkMqRf6on3EKdL%2Fs5sKPje%2F9zdgPO7WV25O0cQjlgDhmdoshbv%2BaRAOpb5dAsMbOMGP0HwRQsIVP9kbqSpDcot7fR%2B%2Fdf80z5bv%2B8XcElwmOhfqPJMGqabVleHLGRLVCE3T%2BOtEIvrJxDRfI8syFnZAzqWJ9k3W0egDXBDZObTcms28BqHqOq6D5EfiJYlQu9oeVKccs1lJayezz08YO5%2F9w1NHJjpKDHFh9O07fvN0ZIoKjV1u9pj7I0VjO1ycDXYSfktKo32DwjML9xk%2B7aRJmxuk74pLvvnYBUQP0xgcInCAYQRESFlBkt54sIYbtReniwWa9DC01hXY4efAFXV7ozM86jmgK%2F53gPIBsERpkK3tkcl2VcEE%2BiP4gyWr2fcHd1qaqxjDzJHdC8B9U5uxxKvaJkb%2BVg6ndwbd7riKmca04SyNs16WUmX63MaDMgYws%2ByPvQY6pgEU7AE5PurbvBnzE3GU1uJbYYiIsqYH1HaJg5VPeqCSjnEDkN0k1ebnoVEBP92ENTCSRpP9cjUZe%2Btmj7nRCON%2BZvV807rnfshsmcwTapwxZ%2BcbmNKVIDbHjpjtQ9KCNlWv4LYeokElXqrxFyAsxowgeXHLuVyceoVsmPAy4UDU4mb6ztaL9p1IQmARPAECmv%2FfE2wHjH3qGyUOhgKvaqpwHM91NjUZ&X-Amz-Signature=970df0b777fd0a92fc7601567a4575371fbec6c20e28e98826bfe9555ef39748&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIMZPNU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIQDGILWdzJVpkycQNGmIUS%2BfpvFMXNfcqngXVgmr7TQHvAIfLbu95Wjn9CejknSlLrK%2BzF92X0KQTdZLCum2m2ILFir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMo%2FpI1TJZw2f6wIghKtwDnnrUzunkGiE%2FP6NSJEOBhLg0cvHNXgerM6GIYHF12MU1VuTYuNhcgpmAYpo8LybQ8dY3ht%2FA525FGrswN6%2FJLzE5lJqtBqiveNU1Dd31mPf1zCr1tQoDOim1erwcNqm69i4PTQX6xldwYjHrHZbT7F466UAxLhDsg%2FNRWjg08wK514LEW9i%2BRgjf0KkMqRf6on3EKdL%2Fs5sKPje%2F9zdgPO7WV25O0cQjlgDhmdoshbv%2BaRAOpb5dAsMbOMGP0HwRQsIVP9kbqSpDcot7fR%2B%2Fdf80z5bv%2B8XcElwmOhfqPJMGqabVleHLGRLVCE3T%2BOtEIvrJxDRfI8syFnZAzqWJ9k3W0egDXBDZObTcms28BqHqOq6D5EfiJYlQu9oeVKccs1lJayezz08YO5%2F9w1NHJjpKDHFh9O07fvN0ZIoKjV1u9pj7I0VjO1ycDXYSfktKo32DwjML9xk%2B7aRJmxuk74pLvvnYBUQP0xgcInCAYQRESFlBkt54sIYbtReniwWa9DC01hXY4efAFXV7ozM86jmgK%2F53gPIBsERpkK3tkcl2VcEE%2BiP4gyWr2fcHd1qaqxjDzJHdC8B9U5uxxKvaJkb%2BVg6ndwbd7riKmca04SyNs16WUmX63MaDMgYws%2ByPvQY6pgEU7AE5PurbvBnzE3GU1uJbYYiIsqYH1HaJg5VPeqCSjnEDkN0k1ebnoVEBP92ENTCSRpP9cjUZe%2Btmj7nRCON%2BZvV807rnfshsmcwTapwxZ%2BcbmNKVIDbHjpjtQ9KCNlWv4LYeokElXqrxFyAsxowgeXHLuVyceoVsmPAy4UDU4mb6ztaL9p1IQmARPAECmv%2FfE2wHjH3qGyUOhgKvaqpwHM91NjUZ&X-Amz-Signature=6af3a1e9b4c134794d204e62b27aca97b2bdce5316f853040105621c4770cbba&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIMZPNU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIQDGILWdzJVpkycQNGmIUS%2BfpvFMXNfcqngXVgmr7TQHvAIfLbu95Wjn9CejknSlLrK%2BzF92X0KQTdZLCum2m2ILFir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMo%2FpI1TJZw2f6wIghKtwDnnrUzunkGiE%2FP6NSJEOBhLg0cvHNXgerM6GIYHF12MU1VuTYuNhcgpmAYpo8LybQ8dY3ht%2FA525FGrswN6%2FJLzE5lJqtBqiveNU1Dd31mPf1zCr1tQoDOim1erwcNqm69i4PTQX6xldwYjHrHZbT7F466UAxLhDsg%2FNRWjg08wK514LEW9i%2BRgjf0KkMqRf6on3EKdL%2Fs5sKPje%2F9zdgPO7WV25O0cQjlgDhmdoshbv%2BaRAOpb5dAsMbOMGP0HwRQsIVP9kbqSpDcot7fR%2B%2Fdf80z5bv%2B8XcElwmOhfqPJMGqabVleHLGRLVCE3T%2BOtEIvrJxDRfI8syFnZAzqWJ9k3W0egDXBDZObTcms28BqHqOq6D5EfiJYlQu9oeVKccs1lJayezz08YO5%2F9w1NHJjpKDHFh9O07fvN0ZIoKjV1u9pj7I0VjO1ycDXYSfktKo32DwjML9xk%2B7aRJmxuk74pLvvnYBUQP0xgcInCAYQRESFlBkt54sIYbtReniwWa9DC01hXY4efAFXV7ozM86jmgK%2F53gPIBsERpkK3tkcl2VcEE%2BiP4gyWr2fcHd1qaqxjDzJHdC8B9U5uxxKvaJkb%2BVg6ndwbd7riKmca04SyNs16WUmX63MaDMgYws%2ByPvQY6pgEU7AE5PurbvBnzE3GU1uJbYYiIsqYH1HaJg5VPeqCSjnEDkN0k1ebnoVEBP92ENTCSRpP9cjUZe%2Btmj7nRCON%2BZvV807rnfshsmcwTapwxZ%2BcbmNKVIDbHjpjtQ9KCNlWv4LYeokElXqrxFyAsxowgeXHLuVyceoVsmPAy4UDU4mb6ztaL9p1IQmARPAECmv%2FfE2wHjH3qGyUOhgKvaqpwHM91NjUZ&X-Amz-Signature=1956b515bdfab02d4787de480e6a0eddd63ca19bd5d0221d9916e05e8a1c74b8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIMZPNU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIQDGILWdzJVpkycQNGmIUS%2BfpvFMXNfcqngXVgmr7TQHvAIfLbu95Wjn9CejknSlLrK%2BzF92X0KQTdZLCum2m2ILFir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMo%2FpI1TJZw2f6wIghKtwDnnrUzunkGiE%2FP6NSJEOBhLg0cvHNXgerM6GIYHF12MU1VuTYuNhcgpmAYpo8LybQ8dY3ht%2FA525FGrswN6%2FJLzE5lJqtBqiveNU1Dd31mPf1zCr1tQoDOim1erwcNqm69i4PTQX6xldwYjHrHZbT7F466UAxLhDsg%2FNRWjg08wK514LEW9i%2BRgjf0KkMqRf6on3EKdL%2Fs5sKPje%2F9zdgPO7WV25O0cQjlgDhmdoshbv%2BaRAOpb5dAsMbOMGP0HwRQsIVP9kbqSpDcot7fR%2B%2Fdf80z5bv%2B8XcElwmOhfqPJMGqabVleHLGRLVCE3T%2BOtEIvrJxDRfI8syFnZAzqWJ9k3W0egDXBDZObTcms28BqHqOq6D5EfiJYlQu9oeVKccs1lJayezz08YO5%2F9w1NHJjpKDHFh9O07fvN0ZIoKjV1u9pj7I0VjO1ycDXYSfktKo32DwjML9xk%2B7aRJmxuk74pLvvnYBUQP0xgcInCAYQRESFlBkt54sIYbtReniwWa9DC01hXY4efAFXV7ozM86jmgK%2F53gPIBsERpkK3tkcl2VcEE%2BiP4gyWr2fcHd1qaqxjDzJHdC8B9U5uxxKvaJkb%2BVg6ndwbd7riKmca04SyNs16WUmX63MaDMgYws%2ByPvQY6pgEU7AE5PurbvBnzE3GU1uJbYYiIsqYH1HaJg5VPeqCSjnEDkN0k1ebnoVEBP92ENTCSRpP9cjUZe%2Btmj7nRCON%2BZvV807rnfshsmcwTapwxZ%2BcbmNKVIDbHjpjtQ9KCNlWv4LYeokElXqrxFyAsxowgeXHLuVyceoVsmPAy4UDU4mb6ztaL9p1IQmARPAECmv%2FfE2wHjH3qGyUOhgKvaqpwHM91NjUZ&X-Amz-Signature=4ca54f248a3b84b2f72bbbb768e779ab97ff589422ef098ec2b2732b62069fee&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIMZPNU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIQDGILWdzJVpkycQNGmIUS%2BfpvFMXNfcqngXVgmr7TQHvAIfLbu95Wjn9CejknSlLrK%2BzF92X0KQTdZLCum2m2ILFir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMo%2FpI1TJZw2f6wIghKtwDnnrUzunkGiE%2FP6NSJEOBhLg0cvHNXgerM6GIYHF12MU1VuTYuNhcgpmAYpo8LybQ8dY3ht%2FA525FGrswN6%2FJLzE5lJqtBqiveNU1Dd31mPf1zCr1tQoDOim1erwcNqm69i4PTQX6xldwYjHrHZbT7F466UAxLhDsg%2FNRWjg08wK514LEW9i%2BRgjf0KkMqRf6on3EKdL%2Fs5sKPje%2F9zdgPO7WV25O0cQjlgDhmdoshbv%2BaRAOpb5dAsMbOMGP0HwRQsIVP9kbqSpDcot7fR%2B%2Fdf80z5bv%2B8XcElwmOhfqPJMGqabVleHLGRLVCE3T%2BOtEIvrJxDRfI8syFnZAzqWJ9k3W0egDXBDZObTcms28BqHqOq6D5EfiJYlQu9oeVKccs1lJayezz08YO5%2F9w1NHJjpKDHFh9O07fvN0ZIoKjV1u9pj7I0VjO1ycDXYSfktKo32DwjML9xk%2B7aRJmxuk74pLvvnYBUQP0xgcInCAYQRESFlBkt54sIYbtReniwWa9DC01hXY4efAFXV7ozM86jmgK%2F53gPIBsERpkK3tkcl2VcEE%2BiP4gyWr2fcHd1qaqxjDzJHdC8B9U5uxxKvaJkb%2BVg6ndwbd7riKmca04SyNs16WUmX63MaDMgYws%2ByPvQY6pgEU7AE5PurbvBnzE3GU1uJbYYiIsqYH1HaJg5VPeqCSjnEDkN0k1ebnoVEBP92ENTCSRpP9cjUZe%2Btmj7nRCON%2BZvV807rnfshsmcwTapwxZ%2BcbmNKVIDbHjpjtQ9KCNlWv4LYeokElXqrxFyAsxowgeXHLuVyceoVsmPAy4UDU4mb6ztaL9p1IQmARPAECmv%2FfE2wHjH3qGyUOhgKvaqpwHM91NjUZ&X-Amz-Signature=f238d06aab5d1beca7f25fe8b1491f6a7513f9d51ceec97789c373bd8616a62c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIMZPNU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIQDGILWdzJVpkycQNGmIUS%2BfpvFMXNfcqngXVgmr7TQHvAIfLbu95Wjn9CejknSlLrK%2BzF92X0KQTdZLCum2m2ILFir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMo%2FpI1TJZw2f6wIghKtwDnnrUzunkGiE%2FP6NSJEOBhLg0cvHNXgerM6GIYHF12MU1VuTYuNhcgpmAYpo8LybQ8dY3ht%2FA525FGrswN6%2FJLzE5lJqtBqiveNU1Dd31mPf1zCr1tQoDOim1erwcNqm69i4PTQX6xldwYjHrHZbT7F466UAxLhDsg%2FNRWjg08wK514LEW9i%2BRgjf0KkMqRf6on3EKdL%2Fs5sKPje%2F9zdgPO7WV25O0cQjlgDhmdoshbv%2BaRAOpb5dAsMbOMGP0HwRQsIVP9kbqSpDcot7fR%2B%2Fdf80z5bv%2B8XcElwmOhfqPJMGqabVleHLGRLVCE3T%2BOtEIvrJxDRfI8syFnZAzqWJ9k3W0egDXBDZObTcms28BqHqOq6D5EfiJYlQu9oeVKccs1lJayezz08YO5%2F9w1NHJjpKDHFh9O07fvN0ZIoKjV1u9pj7I0VjO1ycDXYSfktKo32DwjML9xk%2B7aRJmxuk74pLvvnYBUQP0xgcInCAYQRESFlBkt54sIYbtReniwWa9DC01hXY4efAFXV7ozM86jmgK%2F53gPIBsERpkK3tkcl2VcEE%2BiP4gyWr2fcHd1qaqxjDzJHdC8B9U5uxxKvaJkb%2BVg6ndwbd7riKmca04SyNs16WUmX63MaDMgYws%2ByPvQY6pgEU7AE5PurbvBnzE3GU1uJbYYiIsqYH1HaJg5VPeqCSjnEDkN0k1ebnoVEBP92ENTCSRpP9cjUZe%2Btmj7nRCON%2BZvV807rnfshsmcwTapwxZ%2BcbmNKVIDbHjpjtQ9KCNlWv4LYeokElXqrxFyAsxowgeXHLuVyceoVsmPAy4UDU4mb6ztaL9p1IQmARPAECmv%2FfE2wHjH3qGyUOhgKvaqpwHM91NjUZ&X-Amz-Signature=5ece2a1150be2728075205b4e36e66bca48d40e1b5fffe4b987f17235f0934a0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
