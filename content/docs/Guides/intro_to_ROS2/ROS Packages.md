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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CVQAOCM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEJ0WAACS44vYkJDN4eUnMavEJM4KeajV9ZNB1zqtaAAIgXeIs7L8d%2BfZgIBjRZsoQVVWv0TSbkPi%2FnlJokSz3Om4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLe6ONBcPS6Ipi8pxSrcA1W2280lb82DEMHa5pyIwfGdES1pYlizwLSrCbdzquIU44kPfI56TcmrhnNyymLv%2BXqEWmpYBzYKFEJNkRV6i5jGmqDhiUC5JutF5javxzyqeyu5T%2FRmurBvlDL%2FcIwdL%2FnvFjjV8npy3Eiynt4cdvw903QvFBKroZ93MjHmeNK2YchoRy60xf86FdO%2ByUl2yv7mrNLGkwNGF4C72x1cJg91csa3%2F6Xh%2FtvbWJIK9r7uBSHPhxHFQqjAjUTtZZ1ZISoULgtUgvrhIU1UI8GIIEWJkzSfOF1VNeQQsWAveSXb2rd4rhdciBU9BpTH9Awx0DH6U%2FkJzy%2F6jWkfHBz%2FeCaxB%2B2umiyU4ojudBxb5T8vlOv84v4StA4m7cs9Lq0yrmGM67Veqf%2BGMHMVZHX9ux02BRgnEm9a%2BFCK9NhIEo8up747oH8%2FNIYlWQzm2WX1Lo7dwMWcdVOf1scM9gNtr5Idw5FxqLUwhjX0KXrRhSIEdv0ZfWkLBbQTo49ERwgDkbve4SlcfXidqbCs92qIdaoeir70tO8Au6EQyVQu9Ll6LLpt9xtSOHQhd7W%2F%2FIPXW0zS20TDJYEpx4kQ9a%2F3NT6daLYObKM5thneMbvUP8D9XW87bDgzlYFoFENYMKrfuL0GOqUBlKm35x8ShCtYUIFy1D9xQF8y2SK4Hr80i3y9n3iYi8NxB92a1LMjz6yJpOd8qY0SLidN%2BSriwcqNfDxEoZYx0m48UmQTg92zMU3jP7GBdfcZWnZa1Timd7tEL32hMA4IdOWsdyHHAxSsmTXzN76Ce09hdQ2%2FLyxiZVm4KnWfSUb%2B0iapl5htP9%2FjEJx9rnraeXfg0r%2Bs5sXlfMPIv%2F87YtwyxbZl&X-Amz-Signature=019648d6f51994cbbbf5602fabc36e5cfedbde36c296856f104a1ee57280d4c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CVQAOCM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEJ0WAACS44vYkJDN4eUnMavEJM4KeajV9ZNB1zqtaAAIgXeIs7L8d%2BfZgIBjRZsoQVVWv0TSbkPi%2FnlJokSz3Om4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLe6ONBcPS6Ipi8pxSrcA1W2280lb82DEMHa5pyIwfGdES1pYlizwLSrCbdzquIU44kPfI56TcmrhnNyymLv%2BXqEWmpYBzYKFEJNkRV6i5jGmqDhiUC5JutF5javxzyqeyu5T%2FRmurBvlDL%2FcIwdL%2FnvFjjV8npy3Eiynt4cdvw903QvFBKroZ93MjHmeNK2YchoRy60xf86FdO%2ByUl2yv7mrNLGkwNGF4C72x1cJg91csa3%2F6Xh%2FtvbWJIK9r7uBSHPhxHFQqjAjUTtZZ1ZISoULgtUgvrhIU1UI8GIIEWJkzSfOF1VNeQQsWAveSXb2rd4rhdciBU9BpTH9Awx0DH6U%2FkJzy%2F6jWkfHBz%2FeCaxB%2B2umiyU4ojudBxb5T8vlOv84v4StA4m7cs9Lq0yrmGM67Veqf%2BGMHMVZHX9ux02BRgnEm9a%2BFCK9NhIEo8up747oH8%2FNIYlWQzm2WX1Lo7dwMWcdVOf1scM9gNtr5Idw5FxqLUwhjX0KXrRhSIEdv0ZfWkLBbQTo49ERwgDkbve4SlcfXidqbCs92qIdaoeir70tO8Au6EQyVQu9Ll6LLpt9xtSOHQhd7W%2F%2FIPXW0zS20TDJYEpx4kQ9a%2F3NT6daLYObKM5thneMbvUP8D9XW87bDgzlYFoFENYMKrfuL0GOqUBlKm35x8ShCtYUIFy1D9xQF8y2SK4Hr80i3y9n3iYi8NxB92a1LMjz6yJpOd8qY0SLidN%2BSriwcqNfDxEoZYx0m48UmQTg92zMU3jP7GBdfcZWnZa1Timd7tEL32hMA4IdOWsdyHHAxSsmTXzN76Ce09hdQ2%2FLyxiZVm4KnWfSUb%2B0iapl5htP9%2FjEJx9rnraeXfg0r%2Bs5sXlfMPIv%2F87YtwyxbZl&X-Amz-Signature=acb776cad92b80e5edcb49f8e52788d03243562a1f2eef3cb89ed405f56a665b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CVQAOCM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEJ0WAACS44vYkJDN4eUnMavEJM4KeajV9ZNB1zqtaAAIgXeIs7L8d%2BfZgIBjRZsoQVVWv0TSbkPi%2FnlJokSz3Om4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLe6ONBcPS6Ipi8pxSrcA1W2280lb82DEMHa5pyIwfGdES1pYlizwLSrCbdzquIU44kPfI56TcmrhnNyymLv%2BXqEWmpYBzYKFEJNkRV6i5jGmqDhiUC5JutF5javxzyqeyu5T%2FRmurBvlDL%2FcIwdL%2FnvFjjV8npy3Eiynt4cdvw903QvFBKroZ93MjHmeNK2YchoRy60xf86FdO%2ByUl2yv7mrNLGkwNGF4C72x1cJg91csa3%2F6Xh%2FtvbWJIK9r7uBSHPhxHFQqjAjUTtZZ1ZISoULgtUgvrhIU1UI8GIIEWJkzSfOF1VNeQQsWAveSXb2rd4rhdciBU9BpTH9Awx0DH6U%2FkJzy%2F6jWkfHBz%2FeCaxB%2B2umiyU4ojudBxb5T8vlOv84v4StA4m7cs9Lq0yrmGM67Veqf%2BGMHMVZHX9ux02BRgnEm9a%2BFCK9NhIEo8up747oH8%2FNIYlWQzm2WX1Lo7dwMWcdVOf1scM9gNtr5Idw5FxqLUwhjX0KXrRhSIEdv0ZfWkLBbQTo49ERwgDkbve4SlcfXidqbCs92qIdaoeir70tO8Au6EQyVQu9Ll6LLpt9xtSOHQhd7W%2F%2FIPXW0zS20TDJYEpx4kQ9a%2F3NT6daLYObKM5thneMbvUP8D9XW87bDgzlYFoFENYMKrfuL0GOqUBlKm35x8ShCtYUIFy1D9xQF8y2SK4Hr80i3y9n3iYi8NxB92a1LMjz6yJpOd8qY0SLidN%2BSriwcqNfDxEoZYx0m48UmQTg92zMU3jP7GBdfcZWnZa1Timd7tEL32hMA4IdOWsdyHHAxSsmTXzN76Ce09hdQ2%2FLyxiZVm4KnWfSUb%2B0iapl5htP9%2FjEJx9rnraeXfg0r%2Bs5sXlfMPIv%2F87YtwyxbZl&X-Amz-Signature=d34c7d0eebc49d79e422d31bdda3bd89c1aa24034ec4d816ada2bccae8ae9e30&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CVQAOCM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEJ0WAACS44vYkJDN4eUnMavEJM4KeajV9ZNB1zqtaAAIgXeIs7L8d%2BfZgIBjRZsoQVVWv0TSbkPi%2FnlJokSz3Om4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLe6ONBcPS6Ipi8pxSrcA1W2280lb82DEMHa5pyIwfGdES1pYlizwLSrCbdzquIU44kPfI56TcmrhnNyymLv%2BXqEWmpYBzYKFEJNkRV6i5jGmqDhiUC5JutF5javxzyqeyu5T%2FRmurBvlDL%2FcIwdL%2FnvFjjV8npy3Eiynt4cdvw903QvFBKroZ93MjHmeNK2YchoRy60xf86FdO%2ByUl2yv7mrNLGkwNGF4C72x1cJg91csa3%2F6Xh%2FtvbWJIK9r7uBSHPhxHFQqjAjUTtZZ1ZISoULgtUgvrhIU1UI8GIIEWJkzSfOF1VNeQQsWAveSXb2rd4rhdciBU9BpTH9Awx0DH6U%2FkJzy%2F6jWkfHBz%2FeCaxB%2B2umiyU4ojudBxb5T8vlOv84v4StA4m7cs9Lq0yrmGM67Veqf%2BGMHMVZHX9ux02BRgnEm9a%2BFCK9NhIEo8up747oH8%2FNIYlWQzm2WX1Lo7dwMWcdVOf1scM9gNtr5Idw5FxqLUwhjX0KXrRhSIEdv0ZfWkLBbQTo49ERwgDkbve4SlcfXidqbCs92qIdaoeir70tO8Au6EQyVQu9Ll6LLpt9xtSOHQhd7W%2F%2FIPXW0zS20TDJYEpx4kQ9a%2F3NT6daLYObKM5thneMbvUP8D9XW87bDgzlYFoFENYMKrfuL0GOqUBlKm35x8ShCtYUIFy1D9xQF8y2SK4Hr80i3y9n3iYi8NxB92a1LMjz6yJpOd8qY0SLidN%2BSriwcqNfDxEoZYx0m48UmQTg92zMU3jP7GBdfcZWnZa1Timd7tEL32hMA4IdOWsdyHHAxSsmTXzN76Ce09hdQ2%2FLyxiZVm4KnWfSUb%2B0iapl5htP9%2FjEJx9rnraeXfg0r%2Bs5sXlfMPIv%2F87YtwyxbZl&X-Amz-Signature=cbd50e382678d6d796fd2ee24173638b34ede1b5c4f00b3068e85968c744b044&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CVQAOCM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEJ0WAACS44vYkJDN4eUnMavEJM4KeajV9ZNB1zqtaAAIgXeIs7L8d%2BfZgIBjRZsoQVVWv0TSbkPi%2FnlJokSz3Om4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLe6ONBcPS6Ipi8pxSrcA1W2280lb82DEMHa5pyIwfGdES1pYlizwLSrCbdzquIU44kPfI56TcmrhnNyymLv%2BXqEWmpYBzYKFEJNkRV6i5jGmqDhiUC5JutF5javxzyqeyu5T%2FRmurBvlDL%2FcIwdL%2FnvFjjV8npy3Eiynt4cdvw903QvFBKroZ93MjHmeNK2YchoRy60xf86FdO%2ByUl2yv7mrNLGkwNGF4C72x1cJg91csa3%2F6Xh%2FtvbWJIK9r7uBSHPhxHFQqjAjUTtZZ1ZISoULgtUgvrhIU1UI8GIIEWJkzSfOF1VNeQQsWAveSXb2rd4rhdciBU9BpTH9Awx0DH6U%2FkJzy%2F6jWkfHBz%2FeCaxB%2B2umiyU4ojudBxb5T8vlOv84v4StA4m7cs9Lq0yrmGM67Veqf%2BGMHMVZHX9ux02BRgnEm9a%2BFCK9NhIEo8up747oH8%2FNIYlWQzm2WX1Lo7dwMWcdVOf1scM9gNtr5Idw5FxqLUwhjX0KXrRhSIEdv0ZfWkLBbQTo49ERwgDkbve4SlcfXidqbCs92qIdaoeir70tO8Au6EQyVQu9Ll6LLpt9xtSOHQhd7W%2F%2FIPXW0zS20TDJYEpx4kQ9a%2F3NT6daLYObKM5thneMbvUP8D9XW87bDgzlYFoFENYMKrfuL0GOqUBlKm35x8ShCtYUIFy1D9xQF8y2SK4Hr80i3y9n3iYi8NxB92a1LMjz6yJpOd8qY0SLidN%2BSriwcqNfDxEoZYx0m48UmQTg92zMU3jP7GBdfcZWnZa1Timd7tEL32hMA4IdOWsdyHHAxSsmTXzN76Ce09hdQ2%2FLyxiZVm4KnWfSUb%2B0iapl5htP9%2FjEJx9rnraeXfg0r%2Bs5sXlfMPIv%2F87YtwyxbZl&X-Amz-Signature=d0b6f61b3369dd266e37387717a2a97cfa5942c72be2fac50baaed54e47c6f39&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CVQAOCM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEJ0WAACS44vYkJDN4eUnMavEJM4KeajV9ZNB1zqtaAAIgXeIs7L8d%2BfZgIBjRZsoQVVWv0TSbkPi%2FnlJokSz3Om4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLe6ONBcPS6Ipi8pxSrcA1W2280lb82DEMHa5pyIwfGdES1pYlizwLSrCbdzquIU44kPfI56TcmrhnNyymLv%2BXqEWmpYBzYKFEJNkRV6i5jGmqDhiUC5JutF5javxzyqeyu5T%2FRmurBvlDL%2FcIwdL%2FnvFjjV8npy3Eiynt4cdvw903QvFBKroZ93MjHmeNK2YchoRy60xf86FdO%2ByUl2yv7mrNLGkwNGF4C72x1cJg91csa3%2F6Xh%2FtvbWJIK9r7uBSHPhxHFQqjAjUTtZZ1ZISoULgtUgvrhIU1UI8GIIEWJkzSfOF1VNeQQsWAveSXb2rd4rhdciBU9BpTH9Awx0DH6U%2FkJzy%2F6jWkfHBz%2FeCaxB%2B2umiyU4ojudBxb5T8vlOv84v4StA4m7cs9Lq0yrmGM67Veqf%2BGMHMVZHX9ux02BRgnEm9a%2BFCK9NhIEo8up747oH8%2FNIYlWQzm2WX1Lo7dwMWcdVOf1scM9gNtr5Idw5FxqLUwhjX0KXrRhSIEdv0ZfWkLBbQTo49ERwgDkbve4SlcfXidqbCs92qIdaoeir70tO8Au6EQyVQu9Ll6LLpt9xtSOHQhd7W%2F%2FIPXW0zS20TDJYEpx4kQ9a%2F3NT6daLYObKM5thneMbvUP8D9XW87bDgzlYFoFENYMKrfuL0GOqUBlKm35x8ShCtYUIFy1D9xQF8y2SK4Hr80i3y9n3iYi8NxB92a1LMjz6yJpOd8qY0SLidN%2BSriwcqNfDxEoZYx0m48UmQTg92zMU3jP7GBdfcZWnZa1Timd7tEL32hMA4IdOWsdyHHAxSsmTXzN76Ce09hdQ2%2FLyxiZVm4KnWfSUb%2B0iapl5htP9%2FjEJx9rnraeXfg0r%2Bs5sXlfMPIv%2F87YtwyxbZl&X-Amz-Signature=d4688e6b9e8a3d2bf6c10b8d52659e94382cc13c49d93d740b3fbd2c6e6de9d1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CVQAOCM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEJ0WAACS44vYkJDN4eUnMavEJM4KeajV9ZNB1zqtaAAIgXeIs7L8d%2BfZgIBjRZsoQVVWv0TSbkPi%2FnlJokSz3Om4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLe6ONBcPS6Ipi8pxSrcA1W2280lb82DEMHa5pyIwfGdES1pYlizwLSrCbdzquIU44kPfI56TcmrhnNyymLv%2BXqEWmpYBzYKFEJNkRV6i5jGmqDhiUC5JutF5javxzyqeyu5T%2FRmurBvlDL%2FcIwdL%2FnvFjjV8npy3Eiynt4cdvw903QvFBKroZ93MjHmeNK2YchoRy60xf86FdO%2ByUl2yv7mrNLGkwNGF4C72x1cJg91csa3%2F6Xh%2FtvbWJIK9r7uBSHPhxHFQqjAjUTtZZ1ZISoULgtUgvrhIU1UI8GIIEWJkzSfOF1VNeQQsWAveSXb2rd4rhdciBU9BpTH9Awx0DH6U%2FkJzy%2F6jWkfHBz%2FeCaxB%2B2umiyU4ojudBxb5T8vlOv84v4StA4m7cs9Lq0yrmGM67Veqf%2BGMHMVZHX9ux02BRgnEm9a%2BFCK9NhIEo8up747oH8%2FNIYlWQzm2WX1Lo7dwMWcdVOf1scM9gNtr5Idw5FxqLUwhjX0KXrRhSIEdv0ZfWkLBbQTo49ERwgDkbve4SlcfXidqbCs92qIdaoeir70tO8Au6EQyVQu9Ll6LLpt9xtSOHQhd7W%2F%2FIPXW0zS20TDJYEpx4kQ9a%2F3NT6daLYObKM5thneMbvUP8D9XW87bDgzlYFoFENYMKrfuL0GOqUBlKm35x8ShCtYUIFy1D9xQF8y2SK4Hr80i3y9n3iYi8NxB92a1LMjz6yJpOd8qY0SLidN%2BSriwcqNfDxEoZYx0m48UmQTg92zMU3jP7GBdfcZWnZa1Timd7tEL32hMA4IdOWsdyHHAxSsmTXzN76Ce09hdQ2%2FLyxiZVm4KnWfSUb%2B0iapl5htP9%2FjEJx9rnraeXfg0r%2Bs5sXlfMPIv%2F87YtwyxbZl&X-Amz-Signature=28a9b0ae5052be5d9dffdf880f989af004fdaf59e70bce2d3f7e310a09482563&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
