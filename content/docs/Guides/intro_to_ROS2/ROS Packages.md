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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6IOVFM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBQYeR0ORN5eGtfmrO5KyBVUewz6WDyiGrzUa1yrfO4OAiAqSzTZ3pu5TYJSuJtbqRXbSaXKtAFyQwMywYY3ISFt9ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMox6wD4NV78GbD%2BwIKtwDjRIqy0Fi%2FAd6aY%2FdL4Qm%2FWp8%2Bf3eRCK%2Bgt8tOtvrol7aigQ29sdXY6fqaBser91ZP4fxsnlMQrCsITVSWnMK09PTp%2B7sRWOj%2Fg9z8LVX5uAMIHdqBo3mdbEYFugItmLF0YYLs3xueNqgczED7V5%2FYSE8eCh9xM8rMwbmNdZdWA8joWFa7X2zxnd0gyN1xmCqJGT69VV27kMe0d8irDv3sjeQ%2B4DXM9lKKeida2OfnevtmIlFxMQ5iqhfX3jRswlvSyEh1It7B3u7wh%2BodT3lfTQtTwPxv8hdQ4MGHhJxjhhHUlrkFJCNxWuURuqS1elzgSAe5AZ1EYE4staZ6zMBdVOWZxkucbnDdemYdt3KGKxdgk2ThHZIq7ZHwVlHQuDuFvaOO1AnjhEX1Q%2F%2BZdHKrUpcllxaHHwm9zZ5xa20wwl5Lv2kmelPbpO1syQGVZ4b0MsDfOKrLxbDbNjP6r1R5Bd87yAGrbDANc%2FyxlH0qZ%2FtQ5Qt3p8CNPsRkLAg0P2fcybQMEfeA3l95p%2BHadRKIw2Ddy3t1kjAkcF2D4qLryDnepmrAxhJQ6cP5GPbl0N5j9oXZPGl7Hxb67jqzWKJTY2uUn5SvMDZOpm45pPQhyzcmj6EWGW04JB4LLswwb%2BGvQY6pgG8XEsQss5y3i4H%2FoeAbW5wRh%2BWXiaFnjNvBD1i9XNjsL%2BrFR6cOVNCM7w4S1KTggOBuqtWiUUv0PaCBJGHvuRvTt%2FBKZZuU4YXIf34ywgB%2BgvV0iKo2ZVMPu2vcPt9vIjIu1KF4aKLNllLqm6zxS5JmCj%2BM1oSGz4t0HTZ%2FQF%2FIXMuNaoICczswvkq2b8Zyr4T2iJoq5hy4hZPY3py8bNLNVQFoEZb&X-Amz-Signature=705093522b5b053aa98db434b31b71abf20c7a55d22453ea1b33fda4b7038534&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6IOVFM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBQYeR0ORN5eGtfmrO5KyBVUewz6WDyiGrzUa1yrfO4OAiAqSzTZ3pu5TYJSuJtbqRXbSaXKtAFyQwMywYY3ISFt9ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMox6wD4NV78GbD%2BwIKtwDjRIqy0Fi%2FAd6aY%2FdL4Qm%2FWp8%2Bf3eRCK%2Bgt8tOtvrol7aigQ29sdXY6fqaBser91ZP4fxsnlMQrCsITVSWnMK09PTp%2B7sRWOj%2Fg9z8LVX5uAMIHdqBo3mdbEYFugItmLF0YYLs3xueNqgczED7V5%2FYSE8eCh9xM8rMwbmNdZdWA8joWFa7X2zxnd0gyN1xmCqJGT69VV27kMe0d8irDv3sjeQ%2B4DXM9lKKeida2OfnevtmIlFxMQ5iqhfX3jRswlvSyEh1It7B3u7wh%2BodT3lfTQtTwPxv8hdQ4MGHhJxjhhHUlrkFJCNxWuURuqS1elzgSAe5AZ1EYE4staZ6zMBdVOWZxkucbnDdemYdt3KGKxdgk2ThHZIq7ZHwVlHQuDuFvaOO1AnjhEX1Q%2F%2BZdHKrUpcllxaHHwm9zZ5xa20wwl5Lv2kmelPbpO1syQGVZ4b0MsDfOKrLxbDbNjP6r1R5Bd87yAGrbDANc%2FyxlH0qZ%2FtQ5Qt3p8CNPsRkLAg0P2fcybQMEfeA3l95p%2BHadRKIw2Ddy3t1kjAkcF2D4qLryDnepmrAxhJQ6cP5GPbl0N5j9oXZPGl7Hxb67jqzWKJTY2uUn5SvMDZOpm45pPQhyzcmj6EWGW04JB4LLswwb%2BGvQY6pgG8XEsQss5y3i4H%2FoeAbW5wRh%2BWXiaFnjNvBD1i9XNjsL%2BrFR6cOVNCM7w4S1KTggOBuqtWiUUv0PaCBJGHvuRvTt%2FBKZZuU4YXIf34ywgB%2BgvV0iKo2ZVMPu2vcPt9vIjIu1KF4aKLNllLqm6zxS5JmCj%2BM1oSGz4t0HTZ%2FQF%2FIXMuNaoICczswvkq2b8Zyr4T2iJoq5hy4hZPY3py8bNLNVQFoEZb&X-Amz-Signature=5671897249f9f988bfc5211043c9744f19e98b94021e0efdf7808cc7a3b8ac8e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6IOVFM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBQYeR0ORN5eGtfmrO5KyBVUewz6WDyiGrzUa1yrfO4OAiAqSzTZ3pu5TYJSuJtbqRXbSaXKtAFyQwMywYY3ISFt9ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMox6wD4NV78GbD%2BwIKtwDjRIqy0Fi%2FAd6aY%2FdL4Qm%2FWp8%2Bf3eRCK%2Bgt8tOtvrol7aigQ29sdXY6fqaBser91ZP4fxsnlMQrCsITVSWnMK09PTp%2B7sRWOj%2Fg9z8LVX5uAMIHdqBo3mdbEYFugItmLF0YYLs3xueNqgczED7V5%2FYSE8eCh9xM8rMwbmNdZdWA8joWFa7X2zxnd0gyN1xmCqJGT69VV27kMe0d8irDv3sjeQ%2B4DXM9lKKeida2OfnevtmIlFxMQ5iqhfX3jRswlvSyEh1It7B3u7wh%2BodT3lfTQtTwPxv8hdQ4MGHhJxjhhHUlrkFJCNxWuURuqS1elzgSAe5AZ1EYE4staZ6zMBdVOWZxkucbnDdemYdt3KGKxdgk2ThHZIq7ZHwVlHQuDuFvaOO1AnjhEX1Q%2F%2BZdHKrUpcllxaHHwm9zZ5xa20wwl5Lv2kmelPbpO1syQGVZ4b0MsDfOKrLxbDbNjP6r1R5Bd87yAGrbDANc%2FyxlH0qZ%2FtQ5Qt3p8CNPsRkLAg0P2fcybQMEfeA3l95p%2BHadRKIw2Ddy3t1kjAkcF2D4qLryDnepmrAxhJQ6cP5GPbl0N5j9oXZPGl7Hxb67jqzWKJTY2uUn5SvMDZOpm45pPQhyzcmj6EWGW04JB4LLswwb%2BGvQY6pgG8XEsQss5y3i4H%2FoeAbW5wRh%2BWXiaFnjNvBD1i9XNjsL%2BrFR6cOVNCM7w4S1KTggOBuqtWiUUv0PaCBJGHvuRvTt%2FBKZZuU4YXIf34ywgB%2BgvV0iKo2ZVMPu2vcPt9vIjIu1KF4aKLNllLqm6zxS5JmCj%2BM1oSGz4t0HTZ%2FQF%2FIXMuNaoICczswvkq2b8Zyr4T2iJoq5hy4hZPY3py8bNLNVQFoEZb&X-Amz-Signature=52109640a0b8b76d7c8686dea6bd359abc1091bd0e7c38013f9bf2ccd234a4b3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6IOVFM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBQYeR0ORN5eGtfmrO5KyBVUewz6WDyiGrzUa1yrfO4OAiAqSzTZ3pu5TYJSuJtbqRXbSaXKtAFyQwMywYY3ISFt9ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMox6wD4NV78GbD%2BwIKtwDjRIqy0Fi%2FAd6aY%2FdL4Qm%2FWp8%2Bf3eRCK%2Bgt8tOtvrol7aigQ29sdXY6fqaBser91ZP4fxsnlMQrCsITVSWnMK09PTp%2B7sRWOj%2Fg9z8LVX5uAMIHdqBo3mdbEYFugItmLF0YYLs3xueNqgczED7V5%2FYSE8eCh9xM8rMwbmNdZdWA8joWFa7X2zxnd0gyN1xmCqJGT69VV27kMe0d8irDv3sjeQ%2B4DXM9lKKeida2OfnevtmIlFxMQ5iqhfX3jRswlvSyEh1It7B3u7wh%2BodT3lfTQtTwPxv8hdQ4MGHhJxjhhHUlrkFJCNxWuURuqS1elzgSAe5AZ1EYE4staZ6zMBdVOWZxkucbnDdemYdt3KGKxdgk2ThHZIq7ZHwVlHQuDuFvaOO1AnjhEX1Q%2F%2BZdHKrUpcllxaHHwm9zZ5xa20wwl5Lv2kmelPbpO1syQGVZ4b0MsDfOKrLxbDbNjP6r1R5Bd87yAGrbDANc%2FyxlH0qZ%2FtQ5Qt3p8CNPsRkLAg0P2fcybQMEfeA3l95p%2BHadRKIw2Ddy3t1kjAkcF2D4qLryDnepmrAxhJQ6cP5GPbl0N5j9oXZPGl7Hxb67jqzWKJTY2uUn5SvMDZOpm45pPQhyzcmj6EWGW04JB4LLswwb%2BGvQY6pgG8XEsQss5y3i4H%2FoeAbW5wRh%2BWXiaFnjNvBD1i9XNjsL%2BrFR6cOVNCM7w4S1KTggOBuqtWiUUv0PaCBJGHvuRvTt%2FBKZZuU4YXIf34ywgB%2BgvV0iKo2ZVMPu2vcPt9vIjIu1KF4aKLNllLqm6zxS5JmCj%2BM1oSGz4t0HTZ%2FQF%2FIXMuNaoICczswvkq2b8Zyr4T2iJoq5hy4hZPY3py8bNLNVQFoEZb&X-Amz-Signature=f4f3854031ac118be7c790a41b2301c098e68cbb9e7fa1ebd9ef8ed476d63539&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6IOVFM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBQYeR0ORN5eGtfmrO5KyBVUewz6WDyiGrzUa1yrfO4OAiAqSzTZ3pu5TYJSuJtbqRXbSaXKtAFyQwMywYY3ISFt9ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMox6wD4NV78GbD%2BwIKtwDjRIqy0Fi%2FAd6aY%2FdL4Qm%2FWp8%2Bf3eRCK%2Bgt8tOtvrol7aigQ29sdXY6fqaBser91ZP4fxsnlMQrCsITVSWnMK09PTp%2B7sRWOj%2Fg9z8LVX5uAMIHdqBo3mdbEYFugItmLF0YYLs3xueNqgczED7V5%2FYSE8eCh9xM8rMwbmNdZdWA8joWFa7X2zxnd0gyN1xmCqJGT69VV27kMe0d8irDv3sjeQ%2B4DXM9lKKeida2OfnevtmIlFxMQ5iqhfX3jRswlvSyEh1It7B3u7wh%2BodT3lfTQtTwPxv8hdQ4MGHhJxjhhHUlrkFJCNxWuURuqS1elzgSAe5AZ1EYE4staZ6zMBdVOWZxkucbnDdemYdt3KGKxdgk2ThHZIq7ZHwVlHQuDuFvaOO1AnjhEX1Q%2F%2BZdHKrUpcllxaHHwm9zZ5xa20wwl5Lv2kmelPbpO1syQGVZ4b0MsDfOKrLxbDbNjP6r1R5Bd87yAGrbDANc%2FyxlH0qZ%2FtQ5Qt3p8CNPsRkLAg0P2fcybQMEfeA3l95p%2BHadRKIw2Ddy3t1kjAkcF2D4qLryDnepmrAxhJQ6cP5GPbl0N5j9oXZPGl7Hxb67jqzWKJTY2uUn5SvMDZOpm45pPQhyzcmj6EWGW04JB4LLswwb%2BGvQY6pgG8XEsQss5y3i4H%2FoeAbW5wRh%2BWXiaFnjNvBD1i9XNjsL%2BrFR6cOVNCM7w4S1KTggOBuqtWiUUv0PaCBJGHvuRvTt%2FBKZZuU4YXIf34ywgB%2BgvV0iKo2ZVMPu2vcPt9vIjIu1KF4aKLNllLqm6zxS5JmCj%2BM1oSGz4t0HTZ%2FQF%2FIXMuNaoICczswvkq2b8Zyr4T2iJoq5hy4hZPY3py8bNLNVQFoEZb&X-Amz-Signature=d6be414e32ef60efae5829685b8919f6851ef98c7e194240a3dfd4d8b82b7bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6IOVFM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBQYeR0ORN5eGtfmrO5KyBVUewz6WDyiGrzUa1yrfO4OAiAqSzTZ3pu5TYJSuJtbqRXbSaXKtAFyQwMywYY3ISFt9ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMox6wD4NV78GbD%2BwIKtwDjRIqy0Fi%2FAd6aY%2FdL4Qm%2FWp8%2Bf3eRCK%2Bgt8tOtvrol7aigQ29sdXY6fqaBser91ZP4fxsnlMQrCsITVSWnMK09PTp%2B7sRWOj%2Fg9z8LVX5uAMIHdqBo3mdbEYFugItmLF0YYLs3xueNqgczED7V5%2FYSE8eCh9xM8rMwbmNdZdWA8joWFa7X2zxnd0gyN1xmCqJGT69VV27kMe0d8irDv3sjeQ%2B4DXM9lKKeida2OfnevtmIlFxMQ5iqhfX3jRswlvSyEh1It7B3u7wh%2BodT3lfTQtTwPxv8hdQ4MGHhJxjhhHUlrkFJCNxWuURuqS1elzgSAe5AZ1EYE4staZ6zMBdVOWZxkucbnDdemYdt3KGKxdgk2ThHZIq7ZHwVlHQuDuFvaOO1AnjhEX1Q%2F%2BZdHKrUpcllxaHHwm9zZ5xa20wwl5Lv2kmelPbpO1syQGVZ4b0MsDfOKrLxbDbNjP6r1R5Bd87yAGrbDANc%2FyxlH0qZ%2FtQ5Qt3p8CNPsRkLAg0P2fcybQMEfeA3l95p%2BHadRKIw2Ddy3t1kjAkcF2D4qLryDnepmrAxhJQ6cP5GPbl0N5j9oXZPGl7Hxb67jqzWKJTY2uUn5SvMDZOpm45pPQhyzcmj6EWGW04JB4LLswwb%2BGvQY6pgG8XEsQss5y3i4H%2FoeAbW5wRh%2BWXiaFnjNvBD1i9XNjsL%2BrFR6cOVNCM7w4S1KTggOBuqtWiUUv0PaCBJGHvuRvTt%2FBKZZuU4YXIf34ywgB%2BgvV0iKo2ZVMPu2vcPt9vIjIu1KF4aKLNllLqm6zxS5JmCj%2BM1oSGz4t0HTZ%2FQF%2FIXMuNaoICczswvkq2b8Zyr4T2iJoq5hy4hZPY3py8bNLNVQFoEZb&X-Amz-Signature=29f91632e61fd08296c376e2e607814bf988c7f05ecd64d12a3c9daf7b736030&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6IOVFM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBQYeR0ORN5eGtfmrO5KyBVUewz6WDyiGrzUa1yrfO4OAiAqSzTZ3pu5TYJSuJtbqRXbSaXKtAFyQwMywYY3ISFt9ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMox6wD4NV78GbD%2BwIKtwDjRIqy0Fi%2FAd6aY%2FdL4Qm%2FWp8%2Bf3eRCK%2Bgt8tOtvrol7aigQ29sdXY6fqaBser91ZP4fxsnlMQrCsITVSWnMK09PTp%2B7sRWOj%2Fg9z8LVX5uAMIHdqBo3mdbEYFugItmLF0YYLs3xueNqgczED7V5%2FYSE8eCh9xM8rMwbmNdZdWA8joWFa7X2zxnd0gyN1xmCqJGT69VV27kMe0d8irDv3sjeQ%2B4DXM9lKKeida2OfnevtmIlFxMQ5iqhfX3jRswlvSyEh1It7B3u7wh%2BodT3lfTQtTwPxv8hdQ4MGHhJxjhhHUlrkFJCNxWuURuqS1elzgSAe5AZ1EYE4staZ6zMBdVOWZxkucbnDdemYdt3KGKxdgk2ThHZIq7ZHwVlHQuDuFvaOO1AnjhEX1Q%2F%2BZdHKrUpcllxaHHwm9zZ5xa20wwl5Lv2kmelPbpO1syQGVZ4b0MsDfOKrLxbDbNjP6r1R5Bd87yAGrbDANc%2FyxlH0qZ%2FtQ5Qt3p8CNPsRkLAg0P2fcybQMEfeA3l95p%2BHadRKIw2Ddy3t1kjAkcF2D4qLryDnepmrAxhJQ6cP5GPbl0N5j9oXZPGl7Hxb67jqzWKJTY2uUn5SvMDZOpm45pPQhyzcmj6EWGW04JB4LLswwb%2BGvQY6pgG8XEsQss5y3i4H%2FoeAbW5wRh%2BWXiaFnjNvBD1i9XNjsL%2BrFR6cOVNCM7w4S1KTggOBuqtWiUUv0PaCBJGHvuRvTt%2FBKZZuU4YXIf34ywgB%2BgvV0iKo2ZVMPu2vcPt9vIjIu1KF4aKLNllLqm6zxS5JmCj%2BM1oSGz4t0HTZ%2FQF%2FIXMuNaoICczswvkq2b8Zyr4T2iJoq5hy4hZPY3py8bNLNVQFoEZb&X-Amz-Signature=8456c45d0df589420cc773aa58d4f95f3ff2a56f82fd854f8f6d7e88e449bf38&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
