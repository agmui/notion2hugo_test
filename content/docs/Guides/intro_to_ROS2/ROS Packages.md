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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRUVLMU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDhk5qByeZIY4Ybw5Iw3FitjN6WmQG4bWq%2FU314AM0B0AiBK8z06AXDutITZEeg507LZEvGrQn%2BtVfGZ7fldTcFOciqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzxyoqtRVqJkXHP2yKtwDL6PRXd9fDwJ%2BBt%2Fcw6sKyj0qrU7UPdebmLsaIojts9NlQBvPrMoYlQLJJ0QMGWOG8QSpybZsQk7O0sCN2ZYYCzrLKYLZ4hJdOLdm0nheIN8oY86hJ1m5e3JkUBE5ZP3VqxP9pJQ2TQ2pxRM0tOOOqNxCs%2FVkBV02hxoyo5fkkEfB5iWaG9nIK2qYOzyno9wPMLHOeoGrfEkvr3FSdA%2FaaLjbiIMKOUZj4fPQB3CYjjj07JgIL7bRgaTAkcJ%2BqyYO9bVCQqGYQHvgbfoT%2BycpA24FRNCvPZKm5QfWMn07qwFBKFa51JC3hTICVXwKiCdtCuEMZ7iLplGX5j%2BkQLvnTMNRb4r4ivTl3dRv9kl0OYENbnuAiZQnQIsA2I5I%2ByQYZvYogDMStvKZlDVT0C3kTOO0f2PARoIoon6AuezShcD9Thc40duXBsRE%2FvA229EXmJNJIBYc7eDyjlCve0Adm1rAc%2B%2BTY%2BMJjJlrhmlVhqk3TSFaCx0M1%2BI7DfA6cFWNAAVxBjwq7QoOEYqMBBK63gYFwqmE%2FSj1ZbxDziNvnrM%2FXF%2FgaARfXc69rLL%2FU7Y2OD9Ww%2B4msivYDZ0gogrkV7E3SDoSgEulbLGJCK6APE5IE78IvdKwbdll0aEw6cK%2FwQY6pgFY6xZXXengJOCsSmy0ykNI%2FEs%2FHMx4GZ7Abr5F1bvU%2BL8TcWNH%2F2gv9o%2FPyOS%2FD8oU9arn9L5m0zcR30gflVXsZ4U%2FOxaoEbJkhzhiWrFm5z4MPpkCZylEazeR8rr18mbEgrFJNQEszHQpyTktG7CpNPVkH9ERyw5%2FSvay0vquJmUZRmVqezqqMxVBbJ5MjL%2F%2FD9lIPku%2BW%2F%2B0ADzG07ZUoqlCQwsh&X-Amz-Signature=a3e2cc3e92b26d85a854d8dab3c165fef22b2d53e61520b4ff3fa02e0026d818&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRUVLMU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDhk5qByeZIY4Ybw5Iw3FitjN6WmQG4bWq%2FU314AM0B0AiBK8z06AXDutITZEeg507LZEvGrQn%2BtVfGZ7fldTcFOciqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzxyoqtRVqJkXHP2yKtwDL6PRXd9fDwJ%2BBt%2Fcw6sKyj0qrU7UPdebmLsaIojts9NlQBvPrMoYlQLJJ0QMGWOG8QSpybZsQk7O0sCN2ZYYCzrLKYLZ4hJdOLdm0nheIN8oY86hJ1m5e3JkUBE5ZP3VqxP9pJQ2TQ2pxRM0tOOOqNxCs%2FVkBV02hxoyo5fkkEfB5iWaG9nIK2qYOzyno9wPMLHOeoGrfEkvr3FSdA%2FaaLjbiIMKOUZj4fPQB3CYjjj07JgIL7bRgaTAkcJ%2BqyYO9bVCQqGYQHvgbfoT%2BycpA24FRNCvPZKm5QfWMn07qwFBKFa51JC3hTICVXwKiCdtCuEMZ7iLplGX5j%2BkQLvnTMNRb4r4ivTl3dRv9kl0OYENbnuAiZQnQIsA2I5I%2ByQYZvYogDMStvKZlDVT0C3kTOO0f2PARoIoon6AuezShcD9Thc40duXBsRE%2FvA229EXmJNJIBYc7eDyjlCve0Adm1rAc%2B%2BTY%2BMJjJlrhmlVhqk3TSFaCx0M1%2BI7DfA6cFWNAAVxBjwq7QoOEYqMBBK63gYFwqmE%2FSj1ZbxDziNvnrM%2FXF%2FgaARfXc69rLL%2FU7Y2OD9Ww%2B4msivYDZ0gogrkV7E3SDoSgEulbLGJCK6APE5IE78IvdKwbdll0aEw6cK%2FwQY6pgFY6xZXXengJOCsSmy0ykNI%2FEs%2FHMx4GZ7Abr5F1bvU%2BL8TcWNH%2F2gv9o%2FPyOS%2FD8oU9arn9L5m0zcR30gflVXsZ4U%2FOxaoEbJkhzhiWrFm5z4MPpkCZylEazeR8rr18mbEgrFJNQEszHQpyTktG7CpNPVkH9ERyw5%2FSvay0vquJmUZRmVqezqqMxVBbJ5MjL%2F%2FD9lIPku%2BW%2F%2B0ADzG07ZUoqlCQwsh&X-Amz-Signature=9d5aa1bc3119ba42fec7a8f24a10cbfcd2eb2d60b244bf73630aee0a620436b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRUVLMU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDhk5qByeZIY4Ybw5Iw3FitjN6WmQG4bWq%2FU314AM0B0AiBK8z06AXDutITZEeg507LZEvGrQn%2BtVfGZ7fldTcFOciqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzxyoqtRVqJkXHP2yKtwDL6PRXd9fDwJ%2BBt%2Fcw6sKyj0qrU7UPdebmLsaIojts9NlQBvPrMoYlQLJJ0QMGWOG8QSpybZsQk7O0sCN2ZYYCzrLKYLZ4hJdOLdm0nheIN8oY86hJ1m5e3JkUBE5ZP3VqxP9pJQ2TQ2pxRM0tOOOqNxCs%2FVkBV02hxoyo5fkkEfB5iWaG9nIK2qYOzyno9wPMLHOeoGrfEkvr3FSdA%2FaaLjbiIMKOUZj4fPQB3CYjjj07JgIL7bRgaTAkcJ%2BqyYO9bVCQqGYQHvgbfoT%2BycpA24FRNCvPZKm5QfWMn07qwFBKFa51JC3hTICVXwKiCdtCuEMZ7iLplGX5j%2BkQLvnTMNRb4r4ivTl3dRv9kl0OYENbnuAiZQnQIsA2I5I%2ByQYZvYogDMStvKZlDVT0C3kTOO0f2PARoIoon6AuezShcD9Thc40duXBsRE%2FvA229EXmJNJIBYc7eDyjlCve0Adm1rAc%2B%2BTY%2BMJjJlrhmlVhqk3TSFaCx0M1%2BI7DfA6cFWNAAVxBjwq7QoOEYqMBBK63gYFwqmE%2FSj1ZbxDziNvnrM%2FXF%2FgaARfXc69rLL%2FU7Y2OD9Ww%2B4msivYDZ0gogrkV7E3SDoSgEulbLGJCK6APE5IE78IvdKwbdll0aEw6cK%2FwQY6pgFY6xZXXengJOCsSmy0ykNI%2FEs%2FHMx4GZ7Abr5F1bvU%2BL8TcWNH%2F2gv9o%2FPyOS%2FD8oU9arn9L5m0zcR30gflVXsZ4U%2FOxaoEbJkhzhiWrFm5z4MPpkCZylEazeR8rr18mbEgrFJNQEszHQpyTktG7CpNPVkH9ERyw5%2FSvay0vquJmUZRmVqezqqMxVBbJ5MjL%2F%2FD9lIPku%2BW%2F%2B0ADzG07ZUoqlCQwsh&X-Amz-Signature=ac8afa35a4dce76d7f2a761cd589c8687105c53b44fe770d6cb9dd505826012a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRUVLMU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDhk5qByeZIY4Ybw5Iw3FitjN6WmQG4bWq%2FU314AM0B0AiBK8z06AXDutITZEeg507LZEvGrQn%2BtVfGZ7fldTcFOciqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzxyoqtRVqJkXHP2yKtwDL6PRXd9fDwJ%2BBt%2Fcw6sKyj0qrU7UPdebmLsaIojts9NlQBvPrMoYlQLJJ0QMGWOG8QSpybZsQk7O0sCN2ZYYCzrLKYLZ4hJdOLdm0nheIN8oY86hJ1m5e3JkUBE5ZP3VqxP9pJQ2TQ2pxRM0tOOOqNxCs%2FVkBV02hxoyo5fkkEfB5iWaG9nIK2qYOzyno9wPMLHOeoGrfEkvr3FSdA%2FaaLjbiIMKOUZj4fPQB3CYjjj07JgIL7bRgaTAkcJ%2BqyYO9bVCQqGYQHvgbfoT%2BycpA24FRNCvPZKm5QfWMn07qwFBKFa51JC3hTICVXwKiCdtCuEMZ7iLplGX5j%2BkQLvnTMNRb4r4ivTl3dRv9kl0OYENbnuAiZQnQIsA2I5I%2ByQYZvYogDMStvKZlDVT0C3kTOO0f2PARoIoon6AuezShcD9Thc40duXBsRE%2FvA229EXmJNJIBYc7eDyjlCve0Adm1rAc%2B%2BTY%2BMJjJlrhmlVhqk3TSFaCx0M1%2BI7DfA6cFWNAAVxBjwq7QoOEYqMBBK63gYFwqmE%2FSj1ZbxDziNvnrM%2FXF%2FgaARfXc69rLL%2FU7Y2OD9Ww%2B4msivYDZ0gogrkV7E3SDoSgEulbLGJCK6APE5IE78IvdKwbdll0aEw6cK%2FwQY6pgFY6xZXXengJOCsSmy0ykNI%2FEs%2FHMx4GZ7Abr5F1bvU%2BL8TcWNH%2F2gv9o%2FPyOS%2FD8oU9arn9L5m0zcR30gflVXsZ4U%2FOxaoEbJkhzhiWrFm5z4MPpkCZylEazeR8rr18mbEgrFJNQEszHQpyTktG7CpNPVkH9ERyw5%2FSvay0vquJmUZRmVqezqqMxVBbJ5MjL%2F%2FD9lIPku%2BW%2F%2B0ADzG07ZUoqlCQwsh&X-Amz-Signature=f8e2dca6b6173ff08b47236ca5c2a53c463e23273d4b572a3dffbe7569eef28f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRUVLMU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDhk5qByeZIY4Ybw5Iw3FitjN6WmQG4bWq%2FU314AM0B0AiBK8z06AXDutITZEeg507LZEvGrQn%2BtVfGZ7fldTcFOciqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzxyoqtRVqJkXHP2yKtwDL6PRXd9fDwJ%2BBt%2Fcw6sKyj0qrU7UPdebmLsaIojts9NlQBvPrMoYlQLJJ0QMGWOG8QSpybZsQk7O0sCN2ZYYCzrLKYLZ4hJdOLdm0nheIN8oY86hJ1m5e3JkUBE5ZP3VqxP9pJQ2TQ2pxRM0tOOOqNxCs%2FVkBV02hxoyo5fkkEfB5iWaG9nIK2qYOzyno9wPMLHOeoGrfEkvr3FSdA%2FaaLjbiIMKOUZj4fPQB3CYjjj07JgIL7bRgaTAkcJ%2BqyYO9bVCQqGYQHvgbfoT%2BycpA24FRNCvPZKm5QfWMn07qwFBKFa51JC3hTICVXwKiCdtCuEMZ7iLplGX5j%2BkQLvnTMNRb4r4ivTl3dRv9kl0OYENbnuAiZQnQIsA2I5I%2ByQYZvYogDMStvKZlDVT0C3kTOO0f2PARoIoon6AuezShcD9Thc40duXBsRE%2FvA229EXmJNJIBYc7eDyjlCve0Adm1rAc%2B%2BTY%2BMJjJlrhmlVhqk3TSFaCx0M1%2BI7DfA6cFWNAAVxBjwq7QoOEYqMBBK63gYFwqmE%2FSj1ZbxDziNvnrM%2FXF%2FgaARfXc69rLL%2FU7Y2OD9Ww%2B4msivYDZ0gogrkV7E3SDoSgEulbLGJCK6APE5IE78IvdKwbdll0aEw6cK%2FwQY6pgFY6xZXXengJOCsSmy0ykNI%2FEs%2FHMx4GZ7Abr5F1bvU%2BL8TcWNH%2F2gv9o%2FPyOS%2FD8oU9arn9L5m0zcR30gflVXsZ4U%2FOxaoEbJkhzhiWrFm5z4MPpkCZylEazeR8rr18mbEgrFJNQEszHQpyTktG7CpNPVkH9ERyw5%2FSvay0vquJmUZRmVqezqqMxVBbJ5MjL%2F%2FD9lIPku%2BW%2F%2B0ADzG07ZUoqlCQwsh&X-Amz-Signature=84adde20fbf0d72eeb28f40537daefd7ea4f04520520c238621c553c86409fb5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRUVLMU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDhk5qByeZIY4Ybw5Iw3FitjN6WmQG4bWq%2FU314AM0B0AiBK8z06AXDutITZEeg507LZEvGrQn%2BtVfGZ7fldTcFOciqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzxyoqtRVqJkXHP2yKtwDL6PRXd9fDwJ%2BBt%2Fcw6sKyj0qrU7UPdebmLsaIojts9NlQBvPrMoYlQLJJ0QMGWOG8QSpybZsQk7O0sCN2ZYYCzrLKYLZ4hJdOLdm0nheIN8oY86hJ1m5e3JkUBE5ZP3VqxP9pJQ2TQ2pxRM0tOOOqNxCs%2FVkBV02hxoyo5fkkEfB5iWaG9nIK2qYOzyno9wPMLHOeoGrfEkvr3FSdA%2FaaLjbiIMKOUZj4fPQB3CYjjj07JgIL7bRgaTAkcJ%2BqyYO9bVCQqGYQHvgbfoT%2BycpA24FRNCvPZKm5QfWMn07qwFBKFa51JC3hTICVXwKiCdtCuEMZ7iLplGX5j%2BkQLvnTMNRb4r4ivTl3dRv9kl0OYENbnuAiZQnQIsA2I5I%2ByQYZvYogDMStvKZlDVT0C3kTOO0f2PARoIoon6AuezShcD9Thc40duXBsRE%2FvA229EXmJNJIBYc7eDyjlCve0Adm1rAc%2B%2BTY%2BMJjJlrhmlVhqk3TSFaCx0M1%2BI7DfA6cFWNAAVxBjwq7QoOEYqMBBK63gYFwqmE%2FSj1ZbxDziNvnrM%2FXF%2FgaARfXc69rLL%2FU7Y2OD9Ww%2B4msivYDZ0gogrkV7E3SDoSgEulbLGJCK6APE5IE78IvdKwbdll0aEw6cK%2FwQY6pgFY6xZXXengJOCsSmy0ykNI%2FEs%2FHMx4GZ7Abr5F1bvU%2BL8TcWNH%2F2gv9o%2FPyOS%2FD8oU9arn9L5m0zcR30gflVXsZ4U%2FOxaoEbJkhzhiWrFm5z4MPpkCZylEazeR8rr18mbEgrFJNQEszHQpyTktG7CpNPVkH9ERyw5%2FSvay0vquJmUZRmVqezqqMxVBbJ5MjL%2F%2FD9lIPku%2BW%2F%2B0ADzG07ZUoqlCQwsh&X-Amz-Signature=569d886e594379e7696ab6366a8466253ec5068ff155accda6d6b53ce635a6cc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRUVLMU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDhk5qByeZIY4Ybw5Iw3FitjN6WmQG4bWq%2FU314AM0B0AiBK8z06AXDutITZEeg507LZEvGrQn%2BtVfGZ7fldTcFOciqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzxyoqtRVqJkXHP2yKtwDL6PRXd9fDwJ%2BBt%2Fcw6sKyj0qrU7UPdebmLsaIojts9NlQBvPrMoYlQLJJ0QMGWOG8QSpybZsQk7O0sCN2ZYYCzrLKYLZ4hJdOLdm0nheIN8oY86hJ1m5e3JkUBE5ZP3VqxP9pJQ2TQ2pxRM0tOOOqNxCs%2FVkBV02hxoyo5fkkEfB5iWaG9nIK2qYOzyno9wPMLHOeoGrfEkvr3FSdA%2FaaLjbiIMKOUZj4fPQB3CYjjj07JgIL7bRgaTAkcJ%2BqyYO9bVCQqGYQHvgbfoT%2BycpA24FRNCvPZKm5QfWMn07qwFBKFa51JC3hTICVXwKiCdtCuEMZ7iLplGX5j%2BkQLvnTMNRb4r4ivTl3dRv9kl0OYENbnuAiZQnQIsA2I5I%2ByQYZvYogDMStvKZlDVT0C3kTOO0f2PARoIoon6AuezShcD9Thc40duXBsRE%2FvA229EXmJNJIBYc7eDyjlCve0Adm1rAc%2B%2BTY%2BMJjJlrhmlVhqk3TSFaCx0M1%2BI7DfA6cFWNAAVxBjwq7QoOEYqMBBK63gYFwqmE%2FSj1ZbxDziNvnrM%2FXF%2FgaARfXc69rLL%2FU7Y2OD9Ww%2B4msivYDZ0gogrkV7E3SDoSgEulbLGJCK6APE5IE78IvdKwbdll0aEw6cK%2FwQY6pgFY6xZXXengJOCsSmy0ykNI%2FEs%2FHMx4GZ7Abr5F1bvU%2BL8TcWNH%2F2gv9o%2FPyOS%2FD8oU9arn9L5m0zcR30gflVXsZ4U%2FOxaoEbJkhzhiWrFm5z4MPpkCZylEazeR8rr18mbEgrFJNQEszHQpyTktG7CpNPVkH9ERyw5%2FSvay0vquJmUZRmVqezqqMxVBbJ5MjL%2F%2FD9lIPku%2BW%2F%2B0ADzG07ZUoqlCQwsh&X-Amz-Signature=59a96c235ede16492f9279f7e55fbdd012150f852d5cc4c7d5da2b4ede1c725d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
