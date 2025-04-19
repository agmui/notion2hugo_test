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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRNM3SY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC7B%2BWTKapeeHmW3w9BwJ0HI3qjW4OoZF5eSq%2BMo13EyAIgNFR2d4%2FqQukrF5XGfSE9N670TEgLsUjNIH3WC4RTOG0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRtpln2yNUfvM36BSrcA2we9PM%2Bt3vwy%2Ft%2B%2F3HwTOjWhWay81zJw6UJoeQVruiw%2Fz8jJZjfVb3UEEzglkHhSrw7T1hm5SiO1XF%2F3200EwknIzdM%2FPIdharUlDSZaSEeQODT4eLbYdN6Y2EttNTKBBklpyMOW1glSWJWZw0ebSZOMyWYGpAFW2zbrP%2BMbTEIaUfmizdKqiGt%2B4l2HHKseITcgdKf0W9xpILHZZOg2NM90RUAX0kiTrOmgxV2enrwMb5feNFTiWgZUZcu4auwUNqz2iEryewG0Yq%2BVZn2R2IW3PjH8MksBNSQqdUe9%2ByX6k%2Byheao2e8tZM0WvrL08oIjxy8Flr0jWky0DeYgus%2BTQQdWFGxyjFKDI3lmmjzHeihEnE4Q7ITD08mM7CxdbUQ7MAWAVFyuTT67D21%2FeapwUTg%2FKDR26ym%2F%2Fa4Bpkm64%2FaCcZQQujkBb8lK3ouP1VAJ16ji9GitxA3uGZUi3RtHYUlWn1b3WXQ8oQt0A3D7ku13iNaCwZoXOgnZPuHLul%2FakbuzLQZN4FpcnRbNsDuAADEK%2B7MtEMuOeIsGr2nmzaO2GOeXlXVDd24ffSX%2BmzFq53bJnmn8zBUyEwidXKRCp4L1d0Lkb0Z93dz%2FA%2FVT2EVcpyc8mIuNgObNMJ2fkMAGOqUBW9DDCNByjD75ajnVSn8SmwpRX5NxisynlKK3c2XecIlClOMH4aMpYVHfU136C3iSnKOP%2FHshK9uvMFCAT83AKv65R5O9c%2FpC2Ag3tDdKOD8vmFWz0pPFVu4ZIyCPEr6Hqn%2FK88ymU%2F9HOoCPCZmjnKEJZLvEAvFZiPL0UETbqKM%2BxGCA9TIlP18aUwPiLbPqTdC%2FP2Rmd7sWwV8BXErJXbeQqVn3&X-Amz-Signature=dc05cff6b42df2d9b697cfe2c2ef479a8e232b57b6a9712c6317c4cba64688e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRNM3SY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC7B%2BWTKapeeHmW3w9BwJ0HI3qjW4OoZF5eSq%2BMo13EyAIgNFR2d4%2FqQukrF5XGfSE9N670TEgLsUjNIH3WC4RTOG0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRtpln2yNUfvM36BSrcA2we9PM%2Bt3vwy%2Ft%2B%2F3HwTOjWhWay81zJw6UJoeQVruiw%2Fz8jJZjfVb3UEEzglkHhSrw7T1hm5SiO1XF%2F3200EwknIzdM%2FPIdharUlDSZaSEeQODT4eLbYdN6Y2EttNTKBBklpyMOW1glSWJWZw0ebSZOMyWYGpAFW2zbrP%2BMbTEIaUfmizdKqiGt%2B4l2HHKseITcgdKf0W9xpILHZZOg2NM90RUAX0kiTrOmgxV2enrwMb5feNFTiWgZUZcu4auwUNqz2iEryewG0Yq%2BVZn2R2IW3PjH8MksBNSQqdUe9%2ByX6k%2Byheao2e8tZM0WvrL08oIjxy8Flr0jWky0DeYgus%2BTQQdWFGxyjFKDI3lmmjzHeihEnE4Q7ITD08mM7CxdbUQ7MAWAVFyuTT67D21%2FeapwUTg%2FKDR26ym%2F%2Fa4Bpkm64%2FaCcZQQujkBb8lK3ouP1VAJ16ji9GitxA3uGZUi3RtHYUlWn1b3WXQ8oQt0A3D7ku13iNaCwZoXOgnZPuHLul%2FakbuzLQZN4FpcnRbNsDuAADEK%2B7MtEMuOeIsGr2nmzaO2GOeXlXVDd24ffSX%2BmzFq53bJnmn8zBUyEwidXKRCp4L1d0Lkb0Z93dz%2FA%2FVT2EVcpyc8mIuNgObNMJ2fkMAGOqUBW9DDCNByjD75ajnVSn8SmwpRX5NxisynlKK3c2XecIlClOMH4aMpYVHfU136C3iSnKOP%2FHshK9uvMFCAT83AKv65R5O9c%2FpC2Ag3tDdKOD8vmFWz0pPFVu4ZIyCPEr6Hqn%2FK88ymU%2F9HOoCPCZmjnKEJZLvEAvFZiPL0UETbqKM%2BxGCA9TIlP18aUwPiLbPqTdC%2FP2Rmd7sWwV8BXErJXbeQqVn3&X-Amz-Signature=0e1b05a219aefa2e023f5c0a6190b8c6227cfebaf0b68be037077d6b69e53e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRNM3SY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC7B%2BWTKapeeHmW3w9BwJ0HI3qjW4OoZF5eSq%2BMo13EyAIgNFR2d4%2FqQukrF5XGfSE9N670TEgLsUjNIH3WC4RTOG0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRtpln2yNUfvM36BSrcA2we9PM%2Bt3vwy%2Ft%2B%2F3HwTOjWhWay81zJw6UJoeQVruiw%2Fz8jJZjfVb3UEEzglkHhSrw7T1hm5SiO1XF%2F3200EwknIzdM%2FPIdharUlDSZaSEeQODT4eLbYdN6Y2EttNTKBBklpyMOW1glSWJWZw0ebSZOMyWYGpAFW2zbrP%2BMbTEIaUfmizdKqiGt%2B4l2HHKseITcgdKf0W9xpILHZZOg2NM90RUAX0kiTrOmgxV2enrwMb5feNFTiWgZUZcu4auwUNqz2iEryewG0Yq%2BVZn2R2IW3PjH8MksBNSQqdUe9%2ByX6k%2Byheao2e8tZM0WvrL08oIjxy8Flr0jWky0DeYgus%2BTQQdWFGxyjFKDI3lmmjzHeihEnE4Q7ITD08mM7CxdbUQ7MAWAVFyuTT67D21%2FeapwUTg%2FKDR26ym%2F%2Fa4Bpkm64%2FaCcZQQujkBb8lK3ouP1VAJ16ji9GitxA3uGZUi3RtHYUlWn1b3WXQ8oQt0A3D7ku13iNaCwZoXOgnZPuHLul%2FakbuzLQZN4FpcnRbNsDuAADEK%2B7MtEMuOeIsGr2nmzaO2GOeXlXVDd24ffSX%2BmzFq53bJnmn8zBUyEwidXKRCp4L1d0Lkb0Z93dz%2FA%2FVT2EVcpyc8mIuNgObNMJ2fkMAGOqUBW9DDCNByjD75ajnVSn8SmwpRX5NxisynlKK3c2XecIlClOMH4aMpYVHfU136C3iSnKOP%2FHshK9uvMFCAT83AKv65R5O9c%2FpC2Ag3tDdKOD8vmFWz0pPFVu4ZIyCPEr6Hqn%2FK88ymU%2F9HOoCPCZmjnKEJZLvEAvFZiPL0UETbqKM%2BxGCA9TIlP18aUwPiLbPqTdC%2FP2Rmd7sWwV8BXErJXbeQqVn3&X-Amz-Signature=15c5d4babad531d2979b3868d30974f847be47eff1d18d88389c1640eabcc551&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRNM3SY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC7B%2BWTKapeeHmW3w9BwJ0HI3qjW4OoZF5eSq%2BMo13EyAIgNFR2d4%2FqQukrF5XGfSE9N670TEgLsUjNIH3WC4RTOG0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRtpln2yNUfvM36BSrcA2we9PM%2Bt3vwy%2Ft%2B%2F3HwTOjWhWay81zJw6UJoeQVruiw%2Fz8jJZjfVb3UEEzglkHhSrw7T1hm5SiO1XF%2F3200EwknIzdM%2FPIdharUlDSZaSEeQODT4eLbYdN6Y2EttNTKBBklpyMOW1glSWJWZw0ebSZOMyWYGpAFW2zbrP%2BMbTEIaUfmizdKqiGt%2B4l2HHKseITcgdKf0W9xpILHZZOg2NM90RUAX0kiTrOmgxV2enrwMb5feNFTiWgZUZcu4auwUNqz2iEryewG0Yq%2BVZn2R2IW3PjH8MksBNSQqdUe9%2ByX6k%2Byheao2e8tZM0WvrL08oIjxy8Flr0jWky0DeYgus%2BTQQdWFGxyjFKDI3lmmjzHeihEnE4Q7ITD08mM7CxdbUQ7MAWAVFyuTT67D21%2FeapwUTg%2FKDR26ym%2F%2Fa4Bpkm64%2FaCcZQQujkBb8lK3ouP1VAJ16ji9GitxA3uGZUi3RtHYUlWn1b3WXQ8oQt0A3D7ku13iNaCwZoXOgnZPuHLul%2FakbuzLQZN4FpcnRbNsDuAADEK%2B7MtEMuOeIsGr2nmzaO2GOeXlXVDd24ffSX%2BmzFq53bJnmn8zBUyEwidXKRCp4L1d0Lkb0Z93dz%2FA%2FVT2EVcpyc8mIuNgObNMJ2fkMAGOqUBW9DDCNByjD75ajnVSn8SmwpRX5NxisynlKK3c2XecIlClOMH4aMpYVHfU136C3iSnKOP%2FHshK9uvMFCAT83AKv65R5O9c%2FpC2Ag3tDdKOD8vmFWz0pPFVu4ZIyCPEr6Hqn%2FK88ymU%2F9HOoCPCZmjnKEJZLvEAvFZiPL0UETbqKM%2BxGCA9TIlP18aUwPiLbPqTdC%2FP2Rmd7sWwV8BXErJXbeQqVn3&X-Amz-Signature=6e9b060fbccf69e81d60ea96b9e53db710134643b247364c1940cb4093ff38bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRNM3SY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC7B%2BWTKapeeHmW3w9BwJ0HI3qjW4OoZF5eSq%2BMo13EyAIgNFR2d4%2FqQukrF5XGfSE9N670TEgLsUjNIH3WC4RTOG0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRtpln2yNUfvM36BSrcA2we9PM%2Bt3vwy%2Ft%2B%2F3HwTOjWhWay81zJw6UJoeQVruiw%2Fz8jJZjfVb3UEEzglkHhSrw7T1hm5SiO1XF%2F3200EwknIzdM%2FPIdharUlDSZaSEeQODT4eLbYdN6Y2EttNTKBBklpyMOW1glSWJWZw0ebSZOMyWYGpAFW2zbrP%2BMbTEIaUfmizdKqiGt%2B4l2HHKseITcgdKf0W9xpILHZZOg2NM90RUAX0kiTrOmgxV2enrwMb5feNFTiWgZUZcu4auwUNqz2iEryewG0Yq%2BVZn2R2IW3PjH8MksBNSQqdUe9%2ByX6k%2Byheao2e8tZM0WvrL08oIjxy8Flr0jWky0DeYgus%2BTQQdWFGxyjFKDI3lmmjzHeihEnE4Q7ITD08mM7CxdbUQ7MAWAVFyuTT67D21%2FeapwUTg%2FKDR26ym%2F%2Fa4Bpkm64%2FaCcZQQujkBb8lK3ouP1VAJ16ji9GitxA3uGZUi3RtHYUlWn1b3WXQ8oQt0A3D7ku13iNaCwZoXOgnZPuHLul%2FakbuzLQZN4FpcnRbNsDuAADEK%2B7MtEMuOeIsGr2nmzaO2GOeXlXVDd24ffSX%2BmzFq53bJnmn8zBUyEwidXKRCp4L1d0Lkb0Z93dz%2FA%2FVT2EVcpyc8mIuNgObNMJ2fkMAGOqUBW9DDCNByjD75ajnVSn8SmwpRX5NxisynlKK3c2XecIlClOMH4aMpYVHfU136C3iSnKOP%2FHshK9uvMFCAT83AKv65R5O9c%2FpC2Ag3tDdKOD8vmFWz0pPFVu4ZIyCPEr6Hqn%2FK88ymU%2F9HOoCPCZmjnKEJZLvEAvFZiPL0UETbqKM%2BxGCA9TIlP18aUwPiLbPqTdC%2FP2Rmd7sWwV8BXErJXbeQqVn3&X-Amz-Signature=26fd0b8017a55976ab2783e05d82ce577d2be0e674399636cf90ff95ac271534&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRNM3SY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC7B%2BWTKapeeHmW3w9BwJ0HI3qjW4OoZF5eSq%2BMo13EyAIgNFR2d4%2FqQukrF5XGfSE9N670TEgLsUjNIH3WC4RTOG0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRtpln2yNUfvM36BSrcA2we9PM%2Bt3vwy%2Ft%2B%2F3HwTOjWhWay81zJw6UJoeQVruiw%2Fz8jJZjfVb3UEEzglkHhSrw7T1hm5SiO1XF%2F3200EwknIzdM%2FPIdharUlDSZaSEeQODT4eLbYdN6Y2EttNTKBBklpyMOW1glSWJWZw0ebSZOMyWYGpAFW2zbrP%2BMbTEIaUfmizdKqiGt%2B4l2HHKseITcgdKf0W9xpILHZZOg2NM90RUAX0kiTrOmgxV2enrwMb5feNFTiWgZUZcu4auwUNqz2iEryewG0Yq%2BVZn2R2IW3PjH8MksBNSQqdUe9%2ByX6k%2Byheao2e8tZM0WvrL08oIjxy8Flr0jWky0DeYgus%2BTQQdWFGxyjFKDI3lmmjzHeihEnE4Q7ITD08mM7CxdbUQ7MAWAVFyuTT67D21%2FeapwUTg%2FKDR26ym%2F%2Fa4Bpkm64%2FaCcZQQujkBb8lK3ouP1VAJ16ji9GitxA3uGZUi3RtHYUlWn1b3WXQ8oQt0A3D7ku13iNaCwZoXOgnZPuHLul%2FakbuzLQZN4FpcnRbNsDuAADEK%2B7MtEMuOeIsGr2nmzaO2GOeXlXVDd24ffSX%2BmzFq53bJnmn8zBUyEwidXKRCp4L1d0Lkb0Z93dz%2FA%2FVT2EVcpyc8mIuNgObNMJ2fkMAGOqUBW9DDCNByjD75ajnVSn8SmwpRX5NxisynlKK3c2XecIlClOMH4aMpYVHfU136C3iSnKOP%2FHshK9uvMFCAT83AKv65R5O9c%2FpC2Ag3tDdKOD8vmFWz0pPFVu4ZIyCPEr6Hqn%2FK88ymU%2F9HOoCPCZmjnKEJZLvEAvFZiPL0UETbqKM%2BxGCA9TIlP18aUwPiLbPqTdC%2FP2Rmd7sWwV8BXErJXbeQqVn3&X-Amz-Signature=b477a11ee488ad8b6832339514b5fd871548270809c3baeaf5658b5bf3905f45&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRNM3SY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC7B%2BWTKapeeHmW3w9BwJ0HI3qjW4OoZF5eSq%2BMo13EyAIgNFR2d4%2FqQukrF5XGfSE9N670TEgLsUjNIH3WC4RTOG0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRtpln2yNUfvM36BSrcA2we9PM%2Bt3vwy%2Ft%2B%2F3HwTOjWhWay81zJw6UJoeQVruiw%2Fz8jJZjfVb3UEEzglkHhSrw7T1hm5SiO1XF%2F3200EwknIzdM%2FPIdharUlDSZaSEeQODT4eLbYdN6Y2EttNTKBBklpyMOW1glSWJWZw0ebSZOMyWYGpAFW2zbrP%2BMbTEIaUfmizdKqiGt%2B4l2HHKseITcgdKf0W9xpILHZZOg2NM90RUAX0kiTrOmgxV2enrwMb5feNFTiWgZUZcu4auwUNqz2iEryewG0Yq%2BVZn2R2IW3PjH8MksBNSQqdUe9%2ByX6k%2Byheao2e8tZM0WvrL08oIjxy8Flr0jWky0DeYgus%2BTQQdWFGxyjFKDI3lmmjzHeihEnE4Q7ITD08mM7CxdbUQ7MAWAVFyuTT67D21%2FeapwUTg%2FKDR26ym%2F%2Fa4Bpkm64%2FaCcZQQujkBb8lK3ouP1VAJ16ji9GitxA3uGZUi3RtHYUlWn1b3WXQ8oQt0A3D7ku13iNaCwZoXOgnZPuHLul%2FakbuzLQZN4FpcnRbNsDuAADEK%2B7MtEMuOeIsGr2nmzaO2GOeXlXVDd24ffSX%2BmzFq53bJnmn8zBUyEwidXKRCp4L1d0Lkb0Z93dz%2FA%2FVT2EVcpyc8mIuNgObNMJ2fkMAGOqUBW9DDCNByjD75ajnVSn8SmwpRX5NxisynlKK3c2XecIlClOMH4aMpYVHfU136C3iSnKOP%2FHshK9uvMFCAT83AKv65R5O9c%2FpC2Ag3tDdKOD8vmFWz0pPFVu4ZIyCPEr6Hqn%2FK88ymU%2F9HOoCPCZmjnKEJZLvEAvFZiPL0UETbqKM%2BxGCA9TIlP18aUwPiLbPqTdC%2FP2Rmd7sWwV8BXErJXbeQqVn3&X-Amz-Signature=354e8ff4c8290170222bba9706f9b33c56941388cc4c205346103c5de94e50e6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
