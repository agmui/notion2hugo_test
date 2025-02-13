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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF462CY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTT%2Fxh%2FSbJ7Z%2F9oHR0MryCP3ae2ycAiUQGBnYN91tZHQIhAI7HtpBZfZ8iBm1sDXXSCeY%2Bgr7DCEm8F9B5YmVjR6r0KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8hmdEjBYY%2BPPhLDEq3AOBpA1D%2B95TabU7f3Hk850ExCNtEM0D5Dli3u3XiaNHwq3OQwMmCWqWSi0KU7dNPcHkbZaRojeXJb9eTOYgUp50zJqyUdKYcR8RSUm8oocE9dIh9gJDZ1nDETCGDOgHStJAOnct6aMrFhDZf1QYvNUge5OV98gsIa07YZwOPdfjN3jZmRZL2m05sOlYjHW4s7FOU2%2F%2BL8nq9A34MTJINsG%2BBZagNFFXkYJHvWTIiW2K39VtLhtkfJ7Bzr9nr3VfwkhqIhfHGwbyrLeitmCRlHSxz%2B9kO%2FKXasivq1HVxeDmyNsjjFHG%2Ftj7Ca7rmXogAhCXXZdqjpYMb9YIennASfHtnmFRA8ULS5KbMmVeu4fLHpK6aIA8zrerRNGi30twezcDi4IIfOyU22MfACOYg35n%2Fz5HUlryH6VDOv4yFmHUU86bhAQ2lSxL5xZdLquweoLW%2BT7TYFDLzgUTMIpxvg7T%2Fte%2BMVTjKSy4ud25RT7cml%2FNjsIIOTdFJKhgbZDLMx2S33XCDtQWexSkcPUdaCb3Lh4vuAnpbzs3jdBXLQY9hZmjR1nyuhkTkNK3pKjrPcMUrcdkizGuChDquJQOHSxVpZBE2eJ8PgLrrE65qskHhFUFhRUi9N79B27mDDD5jra9BjqkAd5l4aYdruDGXlOcyMfWtgnXeeKBI86e66ya%2BlG97WPFPi9twgTOoTALPpTVBcik3CwcIuUzHbnrM3%2Fo3A0Y%2BJfmriq6kjAFf79t4sFqKBh3QYRrzhqcRRkUu%2BTQl4QDt%2Fwy4LKQjtLMojNVj668by0KuOFJdUyO8%2FqUC7pgNkfjz4EpWc0Tv2vyXy11xYBCuVvnFUyny8N%2FlyxUMYqENzuBjES9&X-Amz-Signature=4fd6a91e3d9931dc0a423fbceaabb3fc1a7af19f52ec3de4e024dd6bb1dbdbeb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF462CY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTT%2Fxh%2FSbJ7Z%2F9oHR0MryCP3ae2ycAiUQGBnYN91tZHQIhAI7HtpBZfZ8iBm1sDXXSCeY%2Bgr7DCEm8F9B5YmVjR6r0KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8hmdEjBYY%2BPPhLDEq3AOBpA1D%2B95TabU7f3Hk850ExCNtEM0D5Dli3u3XiaNHwq3OQwMmCWqWSi0KU7dNPcHkbZaRojeXJb9eTOYgUp50zJqyUdKYcR8RSUm8oocE9dIh9gJDZ1nDETCGDOgHStJAOnct6aMrFhDZf1QYvNUge5OV98gsIa07YZwOPdfjN3jZmRZL2m05sOlYjHW4s7FOU2%2F%2BL8nq9A34MTJINsG%2BBZagNFFXkYJHvWTIiW2K39VtLhtkfJ7Bzr9nr3VfwkhqIhfHGwbyrLeitmCRlHSxz%2B9kO%2FKXasivq1HVxeDmyNsjjFHG%2Ftj7Ca7rmXogAhCXXZdqjpYMb9YIennASfHtnmFRA8ULS5KbMmVeu4fLHpK6aIA8zrerRNGi30twezcDi4IIfOyU22MfACOYg35n%2Fz5HUlryH6VDOv4yFmHUU86bhAQ2lSxL5xZdLquweoLW%2BT7TYFDLzgUTMIpxvg7T%2Fte%2BMVTjKSy4ud25RT7cml%2FNjsIIOTdFJKhgbZDLMx2S33XCDtQWexSkcPUdaCb3Lh4vuAnpbzs3jdBXLQY9hZmjR1nyuhkTkNK3pKjrPcMUrcdkizGuChDquJQOHSxVpZBE2eJ8PgLrrE65qskHhFUFhRUi9N79B27mDDD5jra9BjqkAd5l4aYdruDGXlOcyMfWtgnXeeKBI86e66ya%2BlG97WPFPi9twgTOoTALPpTVBcik3CwcIuUzHbnrM3%2Fo3A0Y%2BJfmriq6kjAFf79t4sFqKBh3QYRrzhqcRRkUu%2BTQl4QDt%2Fwy4LKQjtLMojNVj668by0KuOFJdUyO8%2FqUC7pgNkfjz4EpWc0Tv2vyXy11xYBCuVvnFUyny8N%2FlyxUMYqENzuBjES9&X-Amz-Signature=9e63bd376999315c6d42c594c0d461c3814fdfa7c44d7324cd94486bcacc98da&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF462CY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTT%2Fxh%2FSbJ7Z%2F9oHR0MryCP3ae2ycAiUQGBnYN91tZHQIhAI7HtpBZfZ8iBm1sDXXSCeY%2Bgr7DCEm8F9B5YmVjR6r0KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8hmdEjBYY%2BPPhLDEq3AOBpA1D%2B95TabU7f3Hk850ExCNtEM0D5Dli3u3XiaNHwq3OQwMmCWqWSi0KU7dNPcHkbZaRojeXJb9eTOYgUp50zJqyUdKYcR8RSUm8oocE9dIh9gJDZ1nDETCGDOgHStJAOnct6aMrFhDZf1QYvNUge5OV98gsIa07YZwOPdfjN3jZmRZL2m05sOlYjHW4s7FOU2%2F%2BL8nq9A34MTJINsG%2BBZagNFFXkYJHvWTIiW2K39VtLhtkfJ7Bzr9nr3VfwkhqIhfHGwbyrLeitmCRlHSxz%2B9kO%2FKXasivq1HVxeDmyNsjjFHG%2Ftj7Ca7rmXogAhCXXZdqjpYMb9YIennASfHtnmFRA8ULS5KbMmVeu4fLHpK6aIA8zrerRNGi30twezcDi4IIfOyU22MfACOYg35n%2Fz5HUlryH6VDOv4yFmHUU86bhAQ2lSxL5xZdLquweoLW%2BT7TYFDLzgUTMIpxvg7T%2Fte%2BMVTjKSy4ud25RT7cml%2FNjsIIOTdFJKhgbZDLMx2S33XCDtQWexSkcPUdaCb3Lh4vuAnpbzs3jdBXLQY9hZmjR1nyuhkTkNK3pKjrPcMUrcdkizGuChDquJQOHSxVpZBE2eJ8PgLrrE65qskHhFUFhRUi9N79B27mDDD5jra9BjqkAd5l4aYdruDGXlOcyMfWtgnXeeKBI86e66ya%2BlG97WPFPi9twgTOoTALPpTVBcik3CwcIuUzHbnrM3%2Fo3A0Y%2BJfmriq6kjAFf79t4sFqKBh3QYRrzhqcRRkUu%2BTQl4QDt%2Fwy4LKQjtLMojNVj668by0KuOFJdUyO8%2FqUC7pgNkfjz4EpWc0Tv2vyXy11xYBCuVvnFUyny8N%2FlyxUMYqENzuBjES9&X-Amz-Signature=1fa10848a0757162e8c85c3c14a3e01a872a81f90b8d8718fc300bf83a02c4cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF462CY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTT%2Fxh%2FSbJ7Z%2F9oHR0MryCP3ae2ycAiUQGBnYN91tZHQIhAI7HtpBZfZ8iBm1sDXXSCeY%2Bgr7DCEm8F9B5YmVjR6r0KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8hmdEjBYY%2BPPhLDEq3AOBpA1D%2B95TabU7f3Hk850ExCNtEM0D5Dli3u3XiaNHwq3OQwMmCWqWSi0KU7dNPcHkbZaRojeXJb9eTOYgUp50zJqyUdKYcR8RSUm8oocE9dIh9gJDZ1nDETCGDOgHStJAOnct6aMrFhDZf1QYvNUge5OV98gsIa07YZwOPdfjN3jZmRZL2m05sOlYjHW4s7FOU2%2F%2BL8nq9A34MTJINsG%2BBZagNFFXkYJHvWTIiW2K39VtLhtkfJ7Bzr9nr3VfwkhqIhfHGwbyrLeitmCRlHSxz%2B9kO%2FKXasivq1HVxeDmyNsjjFHG%2Ftj7Ca7rmXogAhCXXZdqjpYMb9YIennASfHtnmFRA8ULS5KbMmVeu4fLHpK6aIA8zrerRNGi30twezcDi4IIfOyU22MfACOYg35n%2Fz5HUlryH6VDOv4yFmHUU86bhAQ2lSxL5xZdLquweoLW%2BT7TYFDLzgUTMIpxvg7T%2Fte%2BMVTjKSy4ud25RT7cml%2FNjsIIOTdFJKhgbZDLMx2S33XCDtQWexSkcPUdaCb3Lh4vuAnpbzs3jdBXLQY9hZmjR1nyuhkTkNK3pKjrPcMUrcdkizGuChDquJQOHSxVpZBE2eJ8PgLrrE65qskHhFUFhRUi9N79B27mDDD5jra9BjqkAd5l4aYdruDGXlOcyMfWtgnXeeKBI86e66ya%2BlG97WPFPi9twgTOoTALPpTVBcik3CwcIuUzHbnrM3%2Fo3A0Y%2BJfmriq6kjAFf79t4sFqKBh3QYRrzhqcRRkUu%2BTQl4QDt%2Fwy4LKQjtLMojNVj668by0KuOFJdUyO8%2FqUC7pgNkfjz4EpWc0Tv2vyXy11xYBCuVvnFUyny8N%2FlyxUMYqENzuBjES9&X-Amz-Signature=8af5b52f84565b6646219a94d5a1ee5ce7db9054d9c4cd110b148299fc60b6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF462CY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTT%2Fxh%2FSbJ7Z%2F9oHR0MryCP3ae2ycAiUQGBnYN91tZHQIhAI7HtpBZfZ8iBm1sDXXSCeY%2Bgr7DCEm8F9B5YmVjR6r0KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8hmdEjBYY%2BPPhLDEq3AOBpA1D%2B95TabU7f3Hk850ExCNtEM0D5Dli3u3XiaNHwq3OQwMmCWqWSi0KU7dNPcHkbZaRojeXJb9eTOYgUp50zJqyUdKYcR8RSUm8oocE9dIh9gJDZ1nDETCGDOgHStJAOnct6aMrFhDZf1QYvNUge5OV98gsIa07YZwOPdfjN3jZmRZL2m05sOlYjHW4s7FOU2%2F%2BL8nq9A34MTJINsG%2BBZagNFFXkYJHvWTIiW2K39VtLhtkfJ7Bzr9nr3VfwkhqIhfHGwbyrLeitmCRlHSxz%2B9kO%2FKXasivq1HVxeDmyNsjjFHG%2Ftj7Ca7rmXogAhCXXZdqjpYMb9YIennASfHtnmFRA8ULS5KbMmVeu4fLHpK6aIA8zrerRNGi30twezcDi4IIfOyU22MfACOYg35n%2Fz5HUlryH6VDOv4yFmHUU86bhAQ2lSxL5xZdLquweoLW%2BT7TYFDLzgUTMIpxvg7T%2Fte%2BMVTjKSy4ud25RT7cml%2FNjsIIOTdFJKhgbZDLMx2S33XCDtQWexSkcPUdaCb3Lh4vuAnpbzs3jdBXLQY9hZmjR1nyuhkTkNK3pKjrPcMUrcdkizGuChDquJQOHSxVpZBE2eJ8PgLrrE65qskHhFUFhRUi9N79B27mDDD5jra9BjqkAd5l4aYdruDGXlOcyMfWtgnXeeKBI86e66ya%2BlG97WPFPi9twgTOoTALPpTVBcik3CwcIuUzHbnrM3%2Fo3A0Y%2BJfmriq6kjAFf79t4sFqKBh3QYRrzhqcRRkUu%2BTQl4QDt%2Fwy4LKQjtLMojNVj668by0KuOFJdUyO8%2FqUC7pgNkfjz4EpWc0Tv2vyXy11xYBCuVvnFUyny8N%2FlyxUMYqENzuBjES9&X-Amz-Signature=ba7c34cb5470a174664720646a5190e27db8922c35acf5802b87effc32945a84&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF462CY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTT%2Fxh%2FSbJ7Z%2F9oHR0MryCP3ae2ycAiUQGBnYN91tZHQIhAI7HtpBZfZ8iBm1sDXXSCeY%2Bgr7DCEm8F9B5YmVjR6r0KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8hmdEjBYY%2BPPhLDEq3AOBpA1D%2B95TabU7f3Hk850ExCNtEM0D5Dli3u3XiaNHwq3OQwMmCWqWSi0KU7dNPcHkbZaRojeXJb9eTOYgUp50zJqyUdKYcR8RSUm8oocE9dIh9gJDZ1nDETCGDOgHStJAOnct6aMrFhDZf1QYvNUge5OV98gsIa07YZwOPdfjN3jZmRZL2m05sOlYjHW4s7FOU2%2F%2BL8nq9A34MTJINsG%2BBZagNFFXkYJHvWTIiW2K39VtLhtkfJ7Bzr9nr3VfwkhqIhfHGwbyrLeitmCRlHSxz%2B9kO%2FKXasivq1HVxeDmyNsjjFHG%2Ftj7Ca7rmXogAhCXXZdqjpYMb9YIennASfHtnmFRA8ULS5KbMmVeu4fLHpK6aIA8zrerRNGi30twezcDi4IIfOyU22MfACOYg35n%2Fz5HUlryH6VDOv4yFmHUU86bhAQ2lSxL5xZdLquweoLW%2BT7TYFDLzgUTMIpxvg7T%2Fte%2BMVTjKSy4ud25RT7cml%2FNjsIIOTdFJKhgbZDLMx2S33XCDtQWexSkcPUdaCb3Lh4vuAnpbzs3jdBXLQY9hZmjR1nyuhkTkNK3pKjrPcMUrcdkizGuChDquJQOHSxVpZBE2eJ8PgLrrE65qskHhFUFhRUi9N79B27mDDD5jra9BjqkAd5l4aYdruDGXlOcyMfWtgnXeeKBI86e66ya%2BlG97WPFPi9twgTOoTALPpTVBcik3CwcIuUzHbnrM3%2Fo3A0Y%2BJfmriq6kjAFf79t4sFqKBh3QYRrzhqcRRkUu%2BTQl4QDt%2Fwy4LKQjtLMojNVj668by0KuOFJdUyO8%2FqUC7pgNkfjz4EpWc0Tv2vyXy11xYBCuVvnFUyny8N%2FlyxUMYqENzuBjES9&X-Amz-Signature=3b742f52800a36b2f353dc53608273ea7ba4be8225f9b6d121c079e451ef5075&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF462CY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTT%2Fxh%2FSbJ7Z%2F9oHR0MryCP3ae2ycAiUQGBnYN91tZHQIhAI7HtpBZfZ8iBm1sDXXSCeY%2Bgr7DCEm8F9B5YmVjR6r0KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8hmdEjBYY%2BPPhLDEq3AOBpA1D%2B95TabU7f3Hk850ExCNtEM0D5Dli3u3XiaNHwq3OQwMmCWqWSi0KU7dNPcHkbZaRojeXJb9eTOYgUp50zJqyUdKYcR8RSUm8oocE9dIh9gJDZ1nDETCGDOgHStJAOnct6aMrFhDZf1QYvNUge5OV98gsIa07YZwOPdfjN3jZmRZL2m05sOlYjHW4s7FOU2%2F%2BL8nq9A34MTJINsG%2BBZagNFFXkYJHvWTIiW2K39VtLhtkfJ7Bzr9nr3VfwkhqIhfHGwbyrLeitmCRlHSxz%2B9kO%2FKXasivq1HVxeDmyNsjjFHG%2Ftj7Ca7rmXogAhCXXZdqjpYMb9YIennASfHtnmFRA8ULS5KbMmVeu4fLHpK6aIA8zrerRNGi30twezcDi4IIfOyU22MfACOYg35n%2Fz5HUlryH6VDOv4yFmHUU86bhAQ2lSxL5xZdLquweoLW%2BT7TYFDLzgUTMIpxvg7T%2Fte%2BMVTjKSy4ud25RT7cml%2FNjsIIOTdFJKhgbZDLMx2S33XCDtQWexSkcPUdaCb3Lh4vuAnpbzs3jdBXLQY9hZmjR1nyuhkTkNK3pKjrPcMUrcdkizGuChDquJQOHSxVpZBE2eJ8PgLrrE65qskHhFUFhRUi9N79B27mDDD5jra9BjqkAd5l4aYdruDGXlOcyMfWtgnXeeKBI86e66ya%2BlG97WPFPi9twgTOoTALPpTVBcik3CwcIuUzHbnrM3%2Fo3A0Y%2BJfmriq6kjAFf79t4sFqKBh3QYRrzhqcRRkUu%2BTQl4QDt%2Fwy4LKQjtLMojNVj668by0KuOFJdUyO8%2FqUC7pgNkfjz4EpWc0Tv2vyXy11xYBCuVvnFUyny8N%2FlyxUMYqENzuBjES9&X-Amz-Signature=d8a0d89f9d6638bb51a2ffb15e7e649f0ab32551e490d9e7934cf85e67243279&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
