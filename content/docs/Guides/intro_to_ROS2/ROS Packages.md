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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6UFU7R%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIC350fBSzBvUjThKXYEdBwpK2Zxh6W6WHmy%2FXSRnRVhmAiA2%2FWTVa%2F2TgL2SflNCXFa9lwC8NpusyYRV2mIdZGyoUiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKIE4DVGMT8PSU0ksKtwDaUfdlXnRFL8%2FZTZKwsV9vmxrbOlF2sbK7YzeGz8grb%2F5xnYZ0xShmjm9PEtyTtPZ5zn0sNUFkcNGQ0QjCsKf2%2Fsj6odzbfYrxDsmvIU2f6KXcg1jIBQu%2B0c0apl1VHzAko%2FS6UiLSJQbyLHGZQ4HU837tKDCKft0ogbHWewM%2Fy0FNvXwOzXgHisa8XTNKYzqT%2FVjstn0%2Fs8Mg16fBNSiY7BhZ7TBW2wnSCy5jjDEpIy%2BL2K5s2%2FtxJ6wLYIg1tNqxmgsBJ52cioE3Vo6SIVyk8gw8IPzkYPjKx9S%2FpH2Fp5MUfvrPrDEeRgUzd7H2oFiZ6G5%2FsN7AOsa9LUq5ILPJFor%2FYo7dLw4a9JDYwsqvqml8mplGEDo4UksNLfXw7NPOvxXI6znPpdrzisnA7LSMPFAJGiK%2BMbkKCyCC82LkJb4nQAnO865kliteV6J7e0D2VwQ2DjFChgL6z9GuGrfeXxippNU1HxcM69ZNJT1GZSfR%2FupC%2F6jlXsianU7Q%2Fjo7vOSkxbvnhCFxh7ZMLkJZgo1stpUASrowWn2SgceoRra%2FWcWMfxLyVBcguw0rnUN8IeLnGM%2BzEJszDKnJFTwmvWpdjnwpbV86FU2z4k%2FUupgNXJfgK9SH20aGYgwqfjcvwY6pgEzk5Gs6%2FXakwl6lH0rm23eIDOlM4O0odBK6JXLcESvCvNbFNjpBLI0Gmxf4nmvOuLbGrFXw8oVj%2F3bgn9h4hi%2By%2BX4f8wt%2BQtri%2BHTwM3OH1ZAhZ7LA2Ks8djhStCn%2FEjCXJclM8j%2FuLgKxAPXe6zt%2BVf6pv%2FC0S716XKiysrGmjxDZrc0%2FLp%2FbTbtEp32ECiADMrWZyown%2FP18kmfjDCXo4s40B3X&X-Amz-Signature=cb71ffae1c6305b8b1446e3449bc2a54fff108b90950de566e00ffe2fdf7627c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6UFU7R%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIC350fBSzBvUjThKXYEdBwpK2Zxh6W6WHmy%2FXSRnRVhmAiA2%2FWTVa%2F2TgL2SflNCXFa9lwC8NpusyYRV2mIdZGyoUiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKIE4DVGMT8PSU0ksKtwDaUfdlXnRFL8%2FZTZKwsV9vmxrbOlF2sbK7YzeGz8grb%2F5xnYZ0xShmjm9PEtyTtPZ5zn0sNUFkcNGQ0QjCsKf2%2Fsj6odzbfYrxDsmvIU2f6KXcg1jIBQu%2B0c0apl1VHzAko%2FS6UiLSJQbyLHGZQ4HU837tKDCKft0ogbHWewM%2Fy0FNvXwOzXgHisa8XTNKYzqT%2FVjstn0%2Fs8Mg16fBNSiY7BhZ7TBW2wnSCy5jjDEpIy%2BL2K5s2%2FtxJ6wLYIg1tNqxmgsBJ52cioE3Vo6SIVyk8gw8IPzkYPjKx9S%2FpH2Fp5MUfvrPrDEeRgUzd7H2oFiZ6G5%2FsN7AOsa9LUq5ILPJFor%2FYo7dLw4a9JDYwsqvqml8mplGEDo4UksNLfXw7NPOvxXI6znPpdrzisnA7LSMPFAJGiK%2BMbkKCyCC82LkJb4nQAnO865kliteV6J7e0D2VwQ2DjFChgL6z9GuGrfeXxippNU1HxcM69ZNJT1GZSfR%2FupC%2F6jlXsianU7Q%2Fjo7vOSkxbvnhCFxh7ZMLkJZgo1stpUASrowWn2SgceoRra%2FWcWMfxLyVBcguw0rnUN8IeLnGM%2BzEJszDKnJFTwmvWpdjnwpbV86FU2z4k%2FUupgNXJfgK9SH20aGYgwqfjcvwY6pgEzk5Gs6%2FXakwl6lH0rm23eIDOlM4O0odBK6JXLcESvCvNbFNjpBLI0Gmxf4nmvOuLbGrFXw8oVj%2F3bgn9h4hi%2By%2BX4f8wt%2BQtri%2BHTwM3OH1ZAhZ7LA2Ks8djhStCn%2FEjCXJclM8j%2FuLgKxAPXe6zt%2BVf6pv%2FC0S716XKiysrGmjxDZrc0%2FLp%2FbTbtEp32ECiADMrWZyown%2FP18kmfjDCXo4s40B3X&X-Amz-Signature=c965d407e68c5da781c1280d90cf78e98f90e5de84b5c092d83f8e442c292526&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6UFU7R%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIC350fBSzBvUjThKXYEdBwpK2Zxh6W6WHmy%2FXSRnRVhmAiA2%2FWTVa%2F2TgL2SflNCXFa9lwC8NpusyYRV2mIdZGyoUiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKIE4DVGMT8PSU0ksKtwDaUfdlXnRFL8%2FZTZKwsV9vmxrbOlF2sbK7YzeGz8grb%2F5xnYZ0xShmjm9PEtyTtPZ5zn0sNUFkcNGQ0QjCsKf2%2Fsj6odzbfYrxDsmvIU2f6KXcg1jIBQu%2B0c0apl1VHzAko%2FS6UiLSJQbyLHGZQ4HU837tKDCKft0ogbHWewM%2Fy0FNvXwOzXgHisa8XTNKYzqT%2FVjstn0%2Fs8Mg16fBNSiY7BhZ7TBW2wnSCy5jjDEpIy%2BL2K5s2%2FtxJ6wLYIg1tNqxmgsBJ52cioE3Vo6SIVyk8gw8IPzkYPjKx9S%2FpH2Fp5MUfvrPrDEeRgUzd7H2oFiZ6G5%2FsN7AOsa9LUq5ILPJFor%2FYo7dLw4a9JDYwsqvqml8mplGEDo4UksNLfXw7NPOvxXI6znPpdrzisnA7LSMPFAJGiK%2BMbkKCyCC82LkJb4nQAnO865kliteV6J7e0D2VwQ2DjFChgL6z9GuGrfeXxippNU1HxcM69ZNJT1GZSfR%2FupC%2F6jlXsianU7Q%2Fjo7vOSkxbvnhCFxh7ZMLkJZgo1stpUASrowWn2SgceoRra%2FWcWMfxLyVBcguw0rnUN8IeLnGM%2BzEJszDKnJFTwmvWpdjnwpbV86FU2z4k%2FUupgNXJfgK9SH20aGYgwqfjcvwY6pgEzk5Gs6%2FXakwl6lH0rm23eIDOlM4O0odBK6JXLcESvCvNbFNjpBLI0Gmxf4nmvOuLbGrFXw8oVj%2F3bgn9h4hi%2By%2BX4f8wt%2BQtri%2BHTwM3OH1ZAhZ7LA2Ks8djhStCn%2FEjCXJclM8j%2FuLgKxAPXe6zt%2BVf6pv%2FC0S716XKiysrGmjxDZrc0%2FLp%2FbTbtEp32ECiADMrWZyown%2FP18kmfjDCXo4s40B3X&X-Amz-Signature=25db0e0adb432eac6dd6e93f5f162973a00cffbca6cabd1645cc2b02f08dd35a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6UFU7R%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIC350fBSzBvUjThKXYEdBwpK2Zxh6W6WHmy%2FXSRnRVhmAiA2%2FWTVa%2F2TgL2SflNCXFa9lwC8NpusyYRV2mIdZGyoUiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKIE4DVGMT8PSU0ksKtwDaUfdlXnRFL8%2FZTZKwsV9vmxrbOlF2sbK7YzeGz8grb%2F5xnYZ0xShmjm9PEtyTtPZ5zn0sNUFkcNGQ0QjCsKf2%2Fsj6odzbfYrxDsmvIU2f6KXcg1jIBQu%2B0c0apl1VHzAko%2FS6UiLSJQbyLHGZQ4HU837tKDCKft0ogbHWewM%2Fy0FNvXwOzXgHisa8XTNKYzqT%2FVjstn0%2Fs8Mg16fBNSiY7BhZ7TBW2wnSCy5jjDEpIy%2BL2K5s2%2FtxJ6wLYIg1tNqxmgsBJ52cioE3Vo6SIVyk8gw8IPzkYPjKx9S%2FpH2Fp5MUfvrPrDEeRgUzd7H2oFiZ6G5%2FsN7AOsa9LUq5ILPJFor%2FYo7dLw4a9JDYwsqvqml8mplGEDo4UksNLfXw7NPOvxXI6znPpdrzisnA7LSMPFAJGiK%2BMbkKCyCC82LkJb4nQAnO865kliteV6J7e0D2VwQ2DjFChgL6z9GuGrfeXxippNU1HxcM69ZNJT1GZSfR%2FupC%2F6jlXsianU7Q%2Fjo7vOSkxbvnhCFxh7ZMLkJZgo1stpUASrowWn2SgceoRra%2FWcWMfxLyVBcguw0rnUN8IeLnGM%2BzEJszDKnJFTwmvWpdjnwpbV86FU2z4k%2FUupgNXJfgK9SH20aGYgwqfjcvwY6pgEzk5Gs6%2FXakwl6lH0rm23eIDOlM4O0odBK6JXLcESvCvNbFNjpBLI0Gmxf4nmvOuLbGrFXw8oVj%2F3bgn9h4hi%2By%2BX4f8wt%2BQtri%2BHTwM3OH1ZAhZ7LA2Ks8djhStCn%2FEjCXJclM8j%2FuLgKxAPXe6zt%2BVf6pv%2FC0S716XKiysrGmjxDZrc0%2FLp%2FbTbtEp32ECiADMrWZyown%2FP18kmfjDCXo4s40B3X&X-Amz-Signature=91678b052f5fa219efa6cf1480a95fd0e1233e150f96e6c35601e0865475ab42&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6UFU7R%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIC350fBSzBvUjThKXYEdBwpK2Zxh6W6WHmy%2FXSRnRVhmAiA2%2FWTVa%2F2TgL2SflNCXFa9lwC8NpusyYRV2mIdZGyoUiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKIE4DVGMT8PSU0ksKtwDaUfdlXnRFL8%2FZTZKwsV9vmxrbOlF2sbK7YzeGz8grb%2F5xnYZ0xShmjm9PEtyTtPZ5zn0sNUFkcNGQ0QjCsKf2%2Fsj6odzbfYrxDsmvIU2f6KXcg1jIBQu%2B0c0apl1VHzAko%2FS6UiLSJQbyLHGZQ4HU837tKDCKft0ogbHWewM%2Fy0FNvXwOzXgHisa8XTNKYzqT%2FVjstn0%2Fs8Mg16fBNSiY7BhZ7TBW2wnSCy5jjDEpIy%2BL2K5s2%2FtxJ6wLYIg1tNqxmgsBJ52cioE3Vo6SIVyk8gw8IPzkYPjKx9S%2FpH2Fp5MUfvrPrDEeRgUzd7H2oFiZ6G5%2FsN7AOsa9LUq5ILPJFor%2FYo7dLw4a9JDYwsqvqml8mplGEDo4UksNLfXw7NPOvxXI6znPpdrzisnA7LSMPFAJGiK%2BMbkKCyCC82LkJb4nQAnO865kliteV6J7e0D2VwQ2DjFChgL6z9GuGrfeXxippNU1HxcM69ZNJT1GZSfR%2FupC%2F6jlXsianU7Q%2Fjo7vOSkxbvnhCFxh7ZMLkJZgo1stpUASrowWn2SgceoRra%2FWcWMfxLyVBcguw0rnUN8IeLnGM%2BzEJszDKnJFTwmvWpdjnwpbV86FU2z4k%2FUupgNXJfgK9SH20aGYgwqfjcvwY6pgEzk5Gs6%2FXakwl6lH0rm23eIDOlM4O0odBK6JXLcESvCvNbFNjpBLI0Gmxf4nmvOuLbGrFXw8oVj%2F3bgn9h4hi%2By%2BX4f8wt%2BQtri%2BHTwM3OH1ZAhZ7LA2Ks8djhStCn%2FEjCXJclM8j%2FuLgKxAPXe6zt%2BVf6pv%2FC0S716XKiysrGmjxDZrc0%2FLp%2FbTbtEp32ECiADMrWZyown%2FP18kmfjDCXo4s40B3X&X-Amz-Signature=232071d578320a2bfc8435c214afa8daa9badd0f330dfa7673e7d6a54e6f70d2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6UFU7R%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIC350fBSzBvUjThKXYEdBwpK2Zxh6W6WHmy%2FXSRnRVhmAiA2%2FWTVa%2F2TgL2SflNCXFa9lwC8NpusyYRV2mIdZGyoUiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKIE4DVGMT8PSU0ksKtwDaUfdlXnRFL8%2FZTZKwsV9vmxrbOlF2sbK7YzeGz8grb%2F5xnYZ0xShmjm9PEtyTtPZ5zn0sNUFkcNGQ0QjCsKf2%2Fsj6odzbfYrxDsmvIU2f6KXcg1jIBQu%2B0c0apl1VHzAko%2FS6UiLSJQbyLHGZQ4HU837tKDCKft0ogbHWewM%2Fy0FNvXwOzXgHisa8XTNKYzqT%2FVjstn0%2Fs8Mg16fBNSiY7BhZ7TBW2wnSCy5jjDEpIy%2BL2K5s2%2FtxJ6wLYIg1tNqxmgsBJ52cioE3Vo6SIVyk8gw8IPzkYPjKx9S%2FpH2Fp5MUfvrPrDEeRgUzd7H2oFiZ6G5%2FsN7AOsa9LUq5ILPJFor%2FYo7dLw4a9JDYwsqvqml8mplGEDo4UksNLfXw7NPOvxXI6znPpdrzisnA7LSMPFAJGiK%2BMbkKCyCC82LkJb4nQAnO865kliteV6J7e0D2VwQ2DjFChgL6z9GuGrfeXxippNU1HxcM69ZNJT1GZSfR%2FupC%2F6jlXsianU7Q%2Fjo7vOSkxbvnhCFxh7ZMLkJZgo1stpUASrowWn2SgceoRra%2FWcWMfxLyVBcguw0rnUN8IeLnGM%2BzEJszDKnJFTwmvWpdjnwpbV86FU2z4k%2FUupgNXJfgK9SH20aGYgwqfjcvwY6pgEzk5Gs6%2FXakwl6lH0rm23eIDOlM4O0odBK6JXLcESvCvNbFNjpBLI0Gmxf4nmvOuLbGrFXw8oVj%2F3bgn9h4hi%2By%2BX4f8wt%2BQtri%2BHTwM3OH1ZAhZ7LA2Ks8djhStCn%2FEjCXJclM8j%2FuLgKxAPXe6zt%2BVf6pv%2FC0S716XKiysrGmjxDZrc0%2FLp%2FbTbtEp32ECiADMrWZyown%2FP18kmfjDCXo4s40B3X&X-Amz-Signature=265d1c46a316d95dabcf65bf5fab81df4fa5113e8693775954e67feb19eb70fb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6UFU7R%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIC350fBSzBvUjThKXYEdBwpK2Zxh6W6WHmy%2FXSRnRVhmAiA2%2FWTVa%2F2TgL2SflNCXFa9lwC8NpusyYRV2mIdZGyoUiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKIE4DVGMT8PSU0ksKtwDaUfdlXnRFL8%2FZTZKwsV9vmxrbOlF2sbK7YzeGz8grb%2F5xnYZ0xShmjm9PEtyTtPZ5zn0sNUFkcNGQ0QjCsKf2%2Fsj6odzbfYrxDsmvIU2f6KXcg1jIBQu%2B0c0apl1VHzAko%2FS6UiLSJQbyLHGZQ4HU837tKDCKft0ogbHWewM%2Fy0FNvXwOzXgHisa8XTNKYzqT%2FVjstn0%2Fs8Mg16fBNSiY7BhZ7TBW2wnSCy5jjDEpIy%2BL2K5s2%2FtxJ6wLYIg1tNqxmgsBJ52cioE3Vo6SIVyk8gw8IPzkYPjKx9S%2FpH2Fp5MUfvrPrDEeRgUzd7H2oFiZ6G5%2FsN7AOsa9LUq5ILPJFor%2FYo7dLw4a9JDYwsqvqml8mplGEDo4UksNLfXw7NPOvxXI6znPpdrzisnA7LSMPFAJGiK%2BMbkKCyCC82LkJb4nQAnO865kliteV6J7e0D2VwQ2DjFChgL6z9GuGrfeXxippNU1HxcM69ZNJT1GZSfR%2FupC%2F6jlXsianU7Q%2Fjo7vOSkxbvnhCFxh7ZMLkJZgo1stpUASrowWn2SgceoRra%2FWcWMfxLyVBcguw0rnUN8IeLnGM%2BzEJszDKnJFTwmvWpdjnwpbV86FU2z4k%2FUupgNXJfgK9SH20aGYgwqfjcvwY6pgEzk5Gs6%2FXakwl6lH0rm23eIDOlM4O0odBK6JXLcESvCvNbFNjpBLI0Gmxf4nmvOuLbGrFXw8oVj%2F3bgn9h4hi%2By%2BX4f8wt%2BQtri%2BHTwM3OH1ZAhZ7LA2Ks8djhStCn%2FEjCXJclM8j%2FuLgKxAPXe6zt%2BVf6pv%2FC0S716XKiysrGmjxDZrc0%2FLp%2FbTbtEp32ECiADMrWZyown%2FP18kmfjDCXo4s40B3X&X-Amz-Signature=6974a308234d0853208f22f50579c6583170481ce2f5eab7f40b60339acb510b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
