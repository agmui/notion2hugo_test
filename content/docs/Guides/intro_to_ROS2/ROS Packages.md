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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLPR7YE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0TpBqC13%2Bd02ESy%2FS6b2JKY6cPTEvnNJD4POjy23aMAiBelX0lWPV4%2BxXI%2FwiIxxo3SyW3OF9Y4ECZqQ011oVgeir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgQtOI%2FPlMucrGfr2KtwDsvgFsoO1psILhRFOlIKbgbLpBqfzI3NR8GV1%2Bw8IPz0MWsxS3dF51DHNC0Fd9aK4yxvw6GTSBp2Cj1C6ZFewlXJnvjGIPknyhs%2B%2FNUQ0HMKUSoP1DpAGCzkZ9st8ctOtcbjFa%2F6k350rXtrjq%2Fccpsuqft6Wain4GSWalwK%2FlGgMq6ZuiQzD9dxfXFomHHLtHbICyT4%2B0u%2BhZY3RIAOYvYIupWelbidH10MPUWJ0wu3Pu9U7sOF2ugNsGzHpHcNjzuDDu96%2F2drRk7YJbiIa5asVTwp6N9Okf%2FwqpbW5cY0KN4BjwYzWxoplHbS0gwDZL6lNVQXdaXT1z0png0heFLAeji9g3Zn9ek7kgswPJQKkXfsY125MkaV9XxGIi8oifJ1FL2tXoeTX03YSL1vz9lAZZKwX6roxbom5504F570Xj0hfEc6leIqQnyrlxg17kXA9XmS%2BUGCnOexui4MmyGwx1Qn550IbSctu9K34wHv%2F67l4ahguPAtCLWPM5BVWFW7xwyeT9bdxZjZH8FMx5yD%2F3IxBtFLZIMxhqX5j5EEgTmFf5tI%2FcLzGamD2XYvHpYAGLseGwLEe19ppwBi%2B7UDMMhHquaYm%2BBSM%2FlayIFlI%2FtcoMgb6t4wUIakw6qu5vQY6pgHPYSeQ249KIzrrrD4j%2F4eE5eo2geZ7Bh6PaQuAdVL0RhSfbgLeLobFR7phFb3mxJ3j4d5a150tmcjx1BQLXOCsXVVL7FjGme4kAvlrG2njaCYt%2FfRdsPtx5nr0xwQdSxeNjknAu2xSaQFD1UHFBLm%2BFnY0wbzM8PuySmpV335zbAxoF2STOFdE0QwumEYv%2FCcilOWK5OTCdAF4pI2yhZgWSFxEN5Bk&X-Amz-Signature=8bcfe513dcb834bba7e906b70e0fa15a7b1c4e4b62bdd53bfae1f0ac80af8da1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLPR7YE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0TpBqC13%2Bd02ESy%2FS6b2JKY6cPTEvnNJD4POjy23aMAiBelX0lWPV4%2BxXI%2FwiIxxo3SyW3OF9Y4ECZqQ011oVgeir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgQtOI%2FPlMucrGfr2KtwDsvgFsoO1psILhRFOlIKbgbLpBqfzI3NR8GV1%2Bw8IPz0MWsxS3dF51DHNC0Fd9aK4yxvw6GTSBp2Cj1C6ZFewlXJnvjGIPknyhs%2B%2FNUQ0HMKUSoP1DpAGCzkZ9st8ctOtcbjFa%2F6k350rXtrjq%2Fccpsuqft6Wain4GSWalwK%2FlGgMq6ZuiQzD9dxfXFomHHLtHbICyT4%2B0u%2BhZY3RIAOYvYIupWelbidH10MPUWJ0wu3Pu9U7sOF2ugNsGzHpHcNjzuDDu96%2F2drRk7YJbiIa5asVTwp6N9Okf%2FwqpbW5cY0KN4BjwYzWxoplHbS0gwDZL6lNVQXdaXT1z0png0heFLAeji9g3Zn9ek7kgswPJQKkXfsY125MkaV9XxGIi8oifJ1FL2tXoeTX03YSL1vz9lAZZKwX6roxbom5504F570Xj0hfEc6leIqQnyrlxg17kXA9XmS%2BUGCnOexui4MmyGwx1Qn550IbSctu9K34wHv%2F67l4ahguPAtCLWPM5BVWFW7xwyeT9bdxZjZH8FMx5yD%2F3IxBtFLZIMxhqX5j5EEgTmFf5tI%2FcLzGamD2XYvHpYAGLseGwLEe19ppwBi%2B7UDMMhHquaYm%2BBSM%2FlayIFlI%2FtcoMgb6t4wUIakw6qu5vQY6pgHPYSeQ249KIzrrrD4j%2F4eE5eo2geZ7Bh6PaQuAdVL0RhSfbgLeLobFR7phFb3mxJ3j4d5a150tmcjx1BQLXOCsXVVL7FjGme4kAvlrG2njaCYt%2FfRdsPtx5nr0xwQdSxeNjknAu2xSaQFD1UHFBLm%2BFnY0wbzM8PuySmpV335zbAxoF2STOFdE0QwumEYv%2FCcilOWK5OTCdAF4pI2yhZgWSFxEN5Bk&X-Amz-Signature=740aebc21b232d547d1e0c5459ba1293358df58c76f2cb50edc8d4512ea53c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLPR7YE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0TpBqC13%2Bd02ESy%2FS6b2JKY6cPTEvnNJD4POjy23aMAiBelX0lWPV4%2BxXI%2FwiIxxo3SyW3OF9Y4ECZqQ011oVgeir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgQtOI%2FPlMucrGfr2KtwDsvgFsoO1psILhRFOlIKbgbLpBqfzI3NR8GV1%2Bw8IPz0MWsxS3dF51DHNC0Fd9aK4yxvw6GTSBp2Cj1C6ZFewlXJnvjGIPknyhs%2B%2FNUQ0HMKUSoP1DpAGCzkZ9st8ctOtcbjFa%2F6k350rXtrjq%2Fccpsuqft6Wain4GSWalwK%2FlGgMq6ZuiQzD9dxfXFomHHLtHbICyT4%2B0u%2BhZY3RIAOYvYIupWelbidH10MPUWJ0wu3Pu9U7sOF2ugNsGzHpHcNjzuDDu96%2F2drRk7YJbiIa5asVTwp6N9Okf%2FwqpbW5cY0KN4BjwYzWxoplHbS0gwDZL6lNVQXdaXT1z0png0heFLAeji9g3Zn9ek7kgswPJQKkXfsY125MkaV9XxGIi8oifJ1FL2tXoeTX03YSL1vz9lAZZKwX6roxbom5504F570Xj0hfEc6leIqQnyrlxg17kXA9XmS%2BUGCnOexui4MmyGwx1Qn550IbSctu9K34wHv%2F67l4ahguPAtCLWPM5BVWFW7xwyeT9bdxZjZH8FMx5yD%2F3IxBtFLZIMxhqX5j5EEgTmFf5tI%2FcLzGamD2XYvHpYAGLseGwLEe19ppwBi%2B7UDMMhHquaYm%2BBSM%2FlayIFlI%2FtcoMgb6t4wUIakw6qu5vQY6pgHPYSeQ249KIzrrrD4j%2F4eE5eo2geZ7Bh6PaQuAdVL0RhSfbgLeLobFR7phFb3mxJ3j4d5a150tmcjx1BQLXOCsXVVL7FjGme4kAvlrG2njaCYt%2FfRdsPtx5nr0xwQdSxeNjknAu2xSaQFD1UHFBLm%2BFnY0wbzM8PuySmpV335zbAxoF2STOFdE0QwumEYv%2FCcilOWK5OTCdAF4pI2yhZgWSFxEN5Bk&X-Amz-Signature=cabd85b4c5a9d903e1fa65fd7fcb23f3c4664832bc2a01efb00fd144595ca55d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLPR7YE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0TpBqC13%2Bd02ESy%2FS6b2JKY6cPTEvnNJD4POjy23aMAiBelX0lWPV4%2BxXI%2FwiIxxo3SyW3OF9Y4ECZqQ011oVgeir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgQtOI%2FPlMucrGfr2KtwDsvgFsoO1psILhRFOlIKbgbLpBqfzI3NR8GV1%2Bw8IPz0MWsxS3dF51DHNC0Fd9aK4yxvw6GTSBp2Cj1C6ZFewlXJnvjGIPknyhs%2B%2FNUQ0HMKUSoP1DpAGCzkZ9st8ctOtcbjFa%2F6k350rXtrjq%2Fccpsuqft6Wain4GSWalwK%2FlGgMq6ZuiQzD9dxfXFomHHLtHbICyT4%2B0u%2BhZY3RIAOYvYIupWelbidH10MPUWJ0wu3Pu9U7sOF2ugNsGzHpHcNjzuDDu96%2F2drRk7YJbiIa5asVTwp6N9Okf%2FwqpbW5cY0KN4BjwYzWxoplHbS0gwDZL6lNVQXdaXT1z0png0heFLAeji9g3Zn9ek7kgswPJQKkXfsY125MkaV9XxGIi8oifJ1FL2tXoeTX03YSL1vz9lAZZKwX6roxbom5504F570Xj0hfEc6leIqQnyrlxg17kXA9XmS%2BUGCnOexui4MmyGwx1Qn550IbSctu9K34wHv%2F67l4ahguPAtCLWPM5BVWFW7xwyeT9bdxZjZH8FMx5yD%2F3IxBtFLZIMxhqX5j5EEgTmFf5tI%2FcLzGamD2XYvHpYAGLseGwLEe19ppwBi%2B7UDMMhHquaYm%2BBSM%2FlayIFlI%2FtcoMgb6t4wUIakw6qu5vQY6pgHPYSeQ249KIzrrrD4j%2F4eE5eo2geZ7Bh6PaQuAdVL0RhSfbgLeLobFR7phFb3mxJ3j4d5a150tmcjx1BQLXOCsXVVL7FjGme4kAvlrG2njaCYt%2FfRdsPtx5nr0xwQdSxeNjknAu2xSaQFD1UHFBLm%2BFnY0wbzM8PuySmpV335zbAxoF2STOFdE0QwumEYv%2FCcilOWK5OTCdAF4pI2yhZgWSFxEN5Bk&X-Amz-Signature=37732dee3d00349e8defdd198ac3b8cd0e2b9dba6f0a9252af2ca959d96e15df&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLPR7YE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0TpBqC13%2Bd02ESy%2FS6b2JKY6cPTEvnNJD4POjy23aMAiBelX0lWPV4%2BxXI%2FwiIxxo3SyW3OF9Y4ECZqQ011oVgeir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgQtOI%2FPlMucrGfr2KtwDsvgFsoO1psILhRFOlIKbgbLpBqfzI3NR8GV1%2Bw8IPz0MWsxS3dF51DHNC0Fd9aK4yxvw6GTSBp2Cj1C6ZFewlXJnvjGIPknyhs%2B%2FNUQ0HMKUSoP1DpAGCzkZ9st8ctOtcbjFa%2F6k350rXtrjq%2Fccpsuqft6Wain4GSWalwK%2FlGgMq6ZuiQzD9dxfXFomHHLtHbICyT4%2B0u%2BhZY3RIAOYvYIupWelbidH10MPUWJ0wu3Pu9U7sOF2ugNsGzHpHcNjzuDDu96%2F2drRk7YJbiIa5asVTwp6N9Okf%2FwqpbW5cY0KN4BjwYzWxoplHbS0gwDZL6lNVQXdaXT1z0png0heFLAeji9g3Zn9ek7kgswPJQKkXfsY125MkaV9XxGIi8oifJ1FL2tXoeTX03YSL1vz9lAZZKwX6roxbom5504F570Xj0hfEc6leIqQnyrlxg17kXA9XmS%2BUGCnOexui4MmyGwx1Qn550IbSctu9K34wHv%2F67l4ahguPAtCLWPM5BVWFW7xwyeT9bdxZjZH8FMx5yD%2F3IxBtFLZIMxhqX5j5EEgTmFf5tI%2FcLzGamD2XYvHpYAGLseGwLEe19ppwBi%2B7UDMMhHquaYm%2BBSM%2FlayIFlI%2FtcoMgb6t4wUIakw6qu5vQY6pgHPYSeQ249KIzrrrD4j%2F4eE5eo2geZ7Bh6PaQuAdVL0RhSfbgLeLobFR7phFb3mxJ3j4d5a150tmcjx1BQLXOCsXVVL7FjGme4kAvlrG2njaCYt%2FfRdsPtx5nr0xwQdSxeNjknAu2xSaQFD1UHFBLm%2BFnY0wbzM8PuySmpV335zbAxoF2STOFdE0QwumEYv%2FCcilOWK5OTCdAF4pI2yhZgWSFxEN5Bk&X-Amz-Signature=b21e092c7742d7a5194b7f5cea148ec7df5a2c4be63da1dd7d663c6f06f06078&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLPR7YE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0TpBqC13%2Bd02ESy%2FS6b2JKY6cPTEvnNJD4POjy23aMAiBelX0lWPV4%2BxXI%2FwiIxxo3SyW3OF9Y4ECZqQ011oVgeir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgQtOI%2FPlMucrGfr2KtwDsvgFsoO1psILhRFOlIKbgbLpBqfzI3NR8GV1%2Bw8IPz0MWsxS3dF51DHNC0Fd9aK4yxvw6GTSBp2Cj1C6ZFewlXJnvjGIPknyhs%2B%2FNUQ0HMKUSoP1DpAGCzkZ9st8ctOtcbjFa%2F6k350rXtrjq%2Fccpsuqft6Wain4GSWalwK%2FlGgMq6ZuiQzD9dxfXFomHHLtHbICyT4%2B0u%2BhZY3RIAOYvYIupWelbidH10MPUWJ0wu3Pu9U7sOF2ugNsGzHpHcNjzuDDu96%2F2drRk7YJbiIa5asVTwp6N9Okf%2FwqpbW5cY0KN4BjwYzWxoplHbS0gwDZL6lNVQXdaXT1z0png0heFLAeji9g3Zn9ek7kgswPJQKkXfsY125MkaV9XxGIi8oifJ1FL2tXoeTX03YSL1vz9lAZZKwX6roxbom5504F570Xj0hfEc6leIqQnyrlxg17kXA9XmS%2BUGCnOexui4MmyGwx1Qn550IbSctu9K34wHv%2F67l4ahguPAtCLWPM5BVWFW7xwyeT9bdxZjZH8FMx5yD%2F3IxBtFLZIMxhqX5j5EEgTmFf5tI%2FcLzGamD2XYvHpYAGLseGwLEe19ppwBi%2B7UDMMhHquaYm%2BBSM%2FlayIFlI%2FtcoMgb6t4wUIakw6qu5vQY6pgHPYSeQ249KIzrrrD4j%2F4eE5eo2geZ7Bh6PaQuAdVL0RhSfbgLeLobFR7phFb3mxJ3j4d5a150tmcjx1BQLXOCsXVVL7FjGme4kAvlrG2njaCYt%2FfRdsPtx5nr0xwQdSxeNjknAu2xSaQFD1UHFBLm%2BFnY0wbzM8PuySmpV335zbAxoF2STOFdE0QwumEYv%2FCcilOWK5OTCdAF4pI2yhZgWSFxEN5Bk&X-Amz-Signature=e67c6928f54005d1c9001959637aaffc211acdcf578ea086171401163b99bae6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STLPR7YE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0TpBqC13%2Bd02ESy%2FS6b2JKY6cPTEvnNJD4POjy23aMAiBelX0lWPV4%2BxXI%2FwiIxxo3SyW3OF9Y4ECZqQ011oVgeir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgQtOI%2FPlMucrGfr2KtwDsvgFsoO1psILhRFOlIKbgbLpBqfzI3NR8GV1%2Bw8IPz0MWsxS3dF51DHNC0Fd9aK4yxvw6GTSBp2Cj1C6ZFewlXJnvjGIPknyhs%2B%2FNUQ0HMKUSoP1DpAGCzkZ9st8ctOtcbjFa%2F6k350rXtrjq%2Fccpsuqft6Wain4GSWalwK%2FlGgMq6ZuiQzD9dxfXFomHHLtHbICyT4%2B0u%2BhZY3RIAOYvYIupWelbidH10MPUWJ0wu3Pu9U7sOF2ugNsGzHpHcNjzuDDu96%2F2drRk7YJbiIa5asVTwp6N9Okf%2FwqpbW5cY0KN4BjwYzWxoplHbS0gwDZL6lNVQXdaXT1z0png0heFLAeji9g3Zn9ek7kgswPJQKkXfsY125MkaV9XxGIi8oifJ1FL2tXoeTX03YSL1vz9lAZZKwX6roxbom5504F570Xj0hfEc6leIqQnyrlxg17kXA9XmS%2BUGCnOexui4MmyGwx1Qn550IbSctu9K34wHv%2F67l4ahguPAtCLWPM5BVWFW7xwyeT9bdxZjZH8FMx5yD%2F3IxBtFLZIMxhqX5j5EEgTmFf5tI%2FcLzGamD2XYvHpYAGLseGwLEe19ppwBi%2B7UDMMhHquaYm%2BBSM%2FlayIFlI%2FtcoMgb6t4wUIakw6qu5vQY6pgHPYSeQ249KIzrrrD4j%2F4eE5eo2geZ7Bh6PaQuAdVL0RhSfbgLeLobFR7phFb3mxJ3j4d5a150tmcjx1BQLXOCsXVVL7FjGme4kAvlrG2njaCYt%2FfRdsPtx5nr0xwQdSxeNjknAu2xSaQFD1UHFBLm%2BFnY0wbzM8PuySmpV335zbAxoF2STOFdE0QwumEYv%2FCcilOWK5OTCdAF4pI2yhZgWSFxEN5Bk&X-Amz-Signature=4a4f6dae65da5b4b1803de4be48b0cd56cb7d42d90a7702cc49fe3a9e10114bc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
