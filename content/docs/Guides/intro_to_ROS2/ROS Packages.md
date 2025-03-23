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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=ad74cf04dcf74b0a29abe65e81d944b3fb8a257d058b407e20c5654851acbf4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=2833ab40d49e0bb00db1c6d351ab661468ff8c8e2cd7cfac6ceff1b311090189&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=127247d36c9c181b5766d0a51a62a0603719a6e4d06ff53f6d1849e89a709cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=6c9666a4fee32a92f181ce1647f018487b2001fa21965855287c778f438d05fe&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=0c8974942f09b792921fbbcc7c66fa36464e8dab2a1ada9f299825b9e4b4f8f2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=ca60d5f23fb7e75d48f7f446a0d89b2796dae687f98dba10666673b4768653a9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=a862ba0bf78f46d198202009bc059f2595de27d733fd538992a267d68650a444&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
