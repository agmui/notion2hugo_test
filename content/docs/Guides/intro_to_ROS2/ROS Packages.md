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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVHDJTW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIA8Eti4iZ%2F7YcoruNYnP06W%2FpjZRYG%2FrRCd3uMVZJNUAAiEAxrQk3uDrc%2BPGKE4taGjs4benzZW5%2Bf%2BJfXrvgGUUAUUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlsBFwQqRhxtAW%2BlircA4ginAgqB6WWIJJYmlqKFrGKe0vK0nUl6pSpqgbiH9wb%2BIGIhJEZ0gW9jMNRP5KdNym6qBs2Jcl%2Fj00slDSuFoDzno%2BCAKHcwHFoe3ICgyTF5Rrx798Mv7xz2Gpq2Ve1yQs4r1oZJ1qTi6b4N3CZ8o%2BtLy1cSo%2B4v%2F0k6QOhagYV9T1W3pg5dugsDHKPUkZ9mvhZd2zSFPFJXlkB4%2FUEFjYGLeudF%2BAyRmW%2FXSJlIYRxzGHjSBJWajVbOLCgModOvT9oQAPXBpO1Vny9zPv1y8ESXgk6hm4tdxRCfl0rwXkIRnelT5eOxlumDG9eI1%2B8BKcUwadQY5QkqcI4kkfHX%2FpphcRHhE2GF%2FmZGUlwja%2FGOSogdRuXknuRqGYDgCQoqK2hbd0vf15hG6ywY5oIeMbAq2vUuFvXM3DYhNU5UPtycWGDYG%2FsSurVmRc86UR9s1%2Bnpx3kOyiimtzVvn3Ax71HtHmQEofQPw497jyngIBUB7jg5bLfwNvTH21CdmS3aQ0EyfCfAQxR7hJh6gVBFgX5arjtcbMTMe5Y1u2Pwj2D33cJUNf2dQnt0bPZVuxX%2FQ2QPhNf6ckYmrqG6LhOExr6xyVWmC%2BYmz89n0L%2BQTPQlUJyKhVr9m3l0u%2FJMMP%2Brb4GOqUBPYRzBbA85WvrxsOQM3n%2BF8Un7Ln1dbLDVYk1V2OuXr291QzNmB8AYzF5oJAOsuXwI6F%2F5FEVO4jzUjVBLQDJdyItEIaby9pJCNtbk9g88RR1o9eMxxu0B6GG8endcQXDd5bY9CrxCRUEL9kQz3L0tV82UtdjDNtZ6Umt13BpVSACm8a8Dj6q9boD%2BdZ5y6cQhT6slFS0GTuYfvEQj4NxjxNBtE%2Fw&X-Amz-Signature=d636991fdf0c1bf0d492e4479ff27f94a430c6b67208a802d48c40e3bff65c05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVHDJTW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIA8Eti4iZ%2F7YcoruNYnP06W%2FpjZRYG%2FrRCd3uMVZJNUAAiEAxrQk3uDrc%2BPGKE4taGjs4benzZW5%2Bf%2BJfXrvgGUUAUUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlsBFwQqRhxtAW%2BlircA4ginAgqB6WWIJJYmlqKFrGKe0vK0nUl6pSpqgbiH9wb%2BIGIhJEZ0gW9jMNRP5KdNym6qBs2Jcl%2Fj00slDSuFoDzno%2BCAKHcwHFoe3ICgyTF5Rrx798Mv7xz2Gpq2Ve1yQs4r1oZJ1qTi6b4N3CZ8o%2BtLy1cSo%2B4v%2F0k6QOhagYV9T1W3pg5dugsDHKPUkZ9mvhZd2zSFPFJXlkB4%2FUEFjYGLeudF%2BAyRmW%2FXSJlIYRxzGHjSBJWajVbOLCgModOvT9oQAPXBpO1Vny9zPv1y8ESXgk6hm4tdxRCfl0rwXkIRnelT5eOxlumDG9eI1%2B8BKcUwadQY5QkqcI4kkfHX%2FpphcRHhE2GF%2FmZGUlwja%2FGOSogdRuXknuRqGYDgCQoqK2hbd0vf15hG6ywY5oIeMbAq2vUuFvXM3DYhNU5UPtycWGDYG%2FsSurVmRc86UR9s1%2Bnpx3kOyiimtzVvn3Ax71HtHmQEofQPw497jyngIBUB7jg5bLfwNvTH21CdmS3aQ0EyfCfAQxR7hJh6gVBFgX5arjtcbMTMe5Y1u2Pwj2D33cJUNf2dQnt0bPZVuxX%2FQ2QPhNf6ckYmrqG6LhOExr6xyVWmC%2BYmz89n0L%2BQTPQlUJyKhVr9m3l0u%2FJMMP%2Brb4GOqUBPYRzBbA85WvrxsOQM3n%2BF8Un7Ln1dbLDVYk1V2OuXr291QzNmB8AYzF5oJAOsuXwI6F%2F5FEVO4jzUjVBLQDJdyItEIaby9pJCNtbk9g88RR1o9eMxxu0B6GG8endcQXDd5bY9CrxCRUEL9kQz3L0tV82UtdjDNtZ6Umt13BpVSACm8a8Dj6q9boD%2BdZ5y6cQhT6slFS0GTuYfvEQj4NxjxNBtE%2Fw&X-Amz-Signature=e7bd548f42fe7f04bc14df3738132052ee86536a0f1d90ec0456b62fef2a62bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVHDJTW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIA8Eti4iZ%2F7YcoruNYnP06W%2FpjZRYG%2FrRCd3uMVZJNUAAiEAxrQk3uDrc%2BPGKE4taGjs4benzZW5%2Bf%2BJfXrvgGUUAUUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlsBFwQqRhxtAW%2BlircA4ginAgqB6WWIJJYmlqKFrGKe0vK0nUl6pSpqgbiH9wb%2BIGIhJEZ0gW9jMNRP5KdNym6qBs2Jcl%2Fj00slDSuFoDzno%2BCAKHcwHFoe3ICgyTF5Rrx798Mv7xz2Gpq2Ve1yQs4r1oZJ1qTi6b4N3CZ8o%2BtLy1cSo%2B4v%2F0k6QOhagYV9T1W3pg5dugsDHKPUkZ9mvhZd2zSFPFJXlkB4%2FUEFjYGLeudF%2BAyRmW%2FXSJlIYRxzGHjSBJWajVbOLCgModOvT9oQAPXBpO1Vny9zPv1y8ESXgk6hm4tdxRCfl0rwXkIRnelT5eOxlumDG9eI1%2B8BKcUwadQY5QkqcI4kkfHX%2FpphcRHhE2GF%2FmZGUlwja%2FGOSogdRuXknuRqGYDgCQoqK2hbd0vf15hG6ywY5oIeMbAq2vUuFvXM3DYhNU5UPtycWGDYG%2FsSurVmRc86UR9s1%2Bnpx3kOyiimtzVvn3Ax71HtHmQEofQPw497jyngIBUB7jg5bLfwNvTH21CdmS3aQ0EyfCfAQxR7hJh6gVBFgX5arjtcbMTMe5Y1u2Pwj2D33cJUNf2dQnt0bPZVuxX%2FQ2QPhNf6ckYmrqG6LhOExr6xyVWmC%2BYmz89n0L%2BQTPQlUJyKhVr9m3l0u%2FJMMP%2Brb4GOqUBPYRzBbA85WvrxsOQM3n%2BF8Un7Ln1dbLDVYk1V2OuXr291QzNmB8AYzF5oJAOsuXwI6F%2F5FEVO4jzUjVBLQDJdyItEIaby9pJCNtbk9g88RR1o9eMxxu0B6GG8endcQXDd5bY9CrxCRUEL9kQz3L0tV82UtdjDNtZ6Umt13BpVSACm8a8Dj6q9boD%2BdZ5y6cQhT6slFS0GTuYfvEQj4NxjxNBtE%2Fw&X-Amz-Signature=8494a9617119c9de1e57530997bcd7a9e42c8f87e50c0372150472433c99fed9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVHDJTW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIA8Eti4iZ%2F7YcoruNYnP06W%2FpjZRYG%2FrRCd3uMVZJNUAAiEAxrQk3uDrc%2BPGKE4taGjs4benzZW5%2Bf%2BJfXrvgGUUAUUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlsBFwQqRhxtAW%2BlircA4ginAgqB6WWIJJYmlqKFrGKe0vK0nUl6pSpqgbiH9wb%2BIGIhJEZ0gW9jMNRP5KdNym6qBs2Jcl%2Fj00slDSuFoDzno%2BCAKHcwHFoe3ICgyTF5Rrx798Mv7xz2Gpq2Ve1yQs4r1oZJ1qTi6b4N3CZ8o%2BtLy1cSo%2B4v%2F0k6QOhagYV9T1W3pg5dugsDHKPUkZ9mvhZd2zSFPFJXlkB4%2FUEFjYGLeudF%2BAyRmW%2FXSJlIYRxzGHjSBJWajVbOLCgModOvT9oQAPXBpO1Vny9zPv1y8ESXgk6hm4tdxRCfl0rwXkIRnelT5eOxlumDG9eI1%2B8BKcUwadQY5QkqcI4kkfHX%2FpphcRHhE2GF%2FmZGUlwja%2FGOSogdRuXknuRqGYDgCQoqK2hbd0vf15hG6ywY5oIeMbAq2vUuFvXM3DYhNU5UPtycWGDYG%2FsSurVmRc86UR9s1%2Bnpx3kOyiimtzVvn3Ax71HtHmQEofQPw497jyngIBUB7jg5bLfwNvTH21CdmS3aQ0EyfCfAQxR7hJh6gVBFgX5arjtcbMTMe5Y1u2Pwj2D33cJUNf2dQnt0bPZVuxX%2FQ2QPhNf6ckYmrqG6LhOExr6xyVWmC%2BYmz89n0L%2BQTPQlUJyKhVr9m3l0u%2FJMMP%2Brb4GOqUBPYRzBbA85WvrxsOQM3n%2BF8Un7Ln1dbLDVYk1V2OuXr291QzNmB8AYzF5oJAOsuXwI6F%2F5FEVO4jzUjVBLQDJdyItEIaby9pJCNtbk9g88RR1o9eMxxu0B6GG8endcQXDd5bY9CrxCRUEL9kQz3L0tV82UtdjDNtZ6Umt13BpVSACm8a8Dj6q9boD%2BdZ5y6cQhT6slFS0GTuYfvEQj4NxjxNBtE%2Fw&X-Amz-Signature=29b5581bd7a87bae7142e30ae54229da3577e593f5d5dfe70ad7664de7b6f0b0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVHDJTW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIA8Eti4iZ%2F7YcoruNYnP06W%2FpjZRYG%2FrRCd3uMVZJNUAAiEAxrQk3uDrc%2BPGKE4taGjs4benzZW5%2Bf%2BJfXrvgGUUAUUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlsBFwQqRhxtAW%2BlircA4ginAgqB6WWIJJYmlqKFrGKe0vK0nUl6pSpqgbiH9wb%2BIGIhJEZ0gW9jMNRP5KdNym6qBs2Jcl%2Fj00slDSuFoDzno%2BCAKHcwHFoe3ICgyTF5Rrx798Mv7xz2Gpq2Ve1yQs4r1oZJ1qTi6b4N3CZ8o%2BtLy1cSo%2B4v%2F0k6QOhagYV9T1W3pg5dugsDHKPUkZ9mvhZd2zSFPFJXlkB4%2FUEFjYGLeudF%2BAyRmW%2FXSJlIYRxzGHjSBJWajVbOLCgModOvT9oQAPXBpO1Vny9zPv1y8ESXgk6hm4tdxRCfl0rwXkIRnelT5eOxlumDG9eI1%2B8BKcUwadQY5QkqcI4kkfHX%2FpphcRHhE2GF%2FmZGUlwja%2FGOSogdRuXknuRqGYDgCQoqK2hbd0vf15hG6ywY5oIeMbAq2vUuFvXM3DYhNU5UPtycWGDYG%2FsSurVmRc86UR9s1%2Bnpx3kOyiimtzVvn3Ax71HtHmQEofQPw497jyngIBUB7jg5bLfwNvTH21CdmS3aQ0EyfCfAQxR7hJh6gVBFgX5arjtcbMTMe5Y1u2Pwj2D33cJUNf2dQnt0bPZVuxX%2FQ2QPhNf6ckYmrqG6LhOExr6xyVWmC%2BYmz89n0L%2BQTPQlUJyKhVr9m3l0u%2FJMMP%2Brb4GOqUBPYRzBbA85WvrxsOQM3n%2BF8Un7Ln1dbLDVYk1V2OuXr291QzNmB8AYzF5oJAOsuXwI6F%2F5FEVO4jzUjVBLQDJdyItEIaby9pJCNtbk9g88RR1o9eMxxu0B6GG8endcQXDd5bY9CrxCRUEL9kQz3L0tV82UtdjDNtZ6Umt13BpVSACm8a8Dj6q9boD%2BdZ5y6cQhT6slFS0GTuYfvEQj4NxjxNBtE%2Fw&X-Amz-Signature=7ade8a7c1e1a1a31c78691438d42402bfdaefec18efa424c094798c1b920e333&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVHDJTW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIA8Eti4iZ%2F7YcoruNYnP06W%2FpjZRYG%2FrRCd3uMVZJNUAAiEAxrQk3uDrc%2BPGKE4taGjs4benzZW5%2Bf%2BJfXrvgGUUAUUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlsBFwQqRhxtAW%2BlircA4ginAgqB6WWIJJYmlqKFrGKe0vK0nUl6pSpqgbiH9wb%2BIGIhJEZ0gW9jMNRP5KdNym6qBs2Jcl%2Fj00slDSuFoDzno%2BCAKHcwHFoe3ICgyTF5Rrx798Mv7xz2Gpq2Ve1yQs4r1oZJ1qTi6b4N3CZ8o%2BtLy1cSo%2B4v%2F0k6QOhagYV9T1W3pg5dugsDHKPUkZ9mvhZd2zSFPFJXlkB4%2FUEFjYGLeudF%2BAyRmW%2FXSJlIYRxzGHjSBJWajVbOLCgModOvT9oQAPXBpO1Vny9zPv1y8ESXgk6hm4tdxRCfl0rwXkIRnelT5eOxlumDG9eI1%2B8BKcUwadQY5QkqcI4kkfHX%2FpphcRHhE2GF%2FmZGUlwja%2FGOSogdRuXknuRqGYDgCQoqK2hbd0vf15hG6ywY5oIeMbAq2vUuFvXM3DYhNU5UPtycWGDYG%2FsSurVmRc86UR9s1%2Bnpx3kOyiimtzVvn3Ax71HtHmQEofQPw497jyngIBUB7jg5bLfwNvTH21CdmS3aQ0EyfCfAQxR7hJh6gVBFgX5arjtcbMTMe5Y1u2Pwj2D33cJUNf2dQnt0bPZVuxX%2FQ2QPhNf6ckYmrqG6LhOExr6xyVWmC%2BYmz89n0L%2BQTPQlUJyKhVr9m3l0u%2FJMMP%2Brb4GOqUBPYRzBbA85WvrxsOQM3n%2BF8Un7Ln1dbLDVYk1V2OuXr291QzNmB8AYzF5oJAOsuXwI6F%2F5FEVO4jzUjVBLQDJdyItEIaby9pJCNtbk9g88RR1o9eMxxu0B6GG8endcQXDd5bY9CrxCRUEL9kQz3L0tV82UtdjDNtZ6Umt13BpVSACm8a8Dj6q9boD%2BdZ5y6cQhT6slFS0GTuYfvEQj4NxjxNBtE%2Fw&X-Amz-Signature=58ccd1c910327446c79112e6662fdb263bd44b2808975d1217f83d443d9dbe3f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVHDJTW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIA8Eti4iZ%2F7YcoruNYnP06W%2FpjZRYG%2FrRCd3uMVZJNUAAiEAxrQk3uDrc%2BPGKE4taGjs4benzZW5%2Bf%2BJfXrvgGUUAUUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlsBFwQqRhxtAW%2BlircA4ginAgqB6WWIJJYmlqKFrGKe0vK0nUl6pSpqgbiH9wb%2BIGIhJEZ0gW9jMNRP5KdNym6qBs2Jcl%2Fj00slDSuFoDzno%2BCAKHcwHFoe3ICgyTF5Rrx798Mv7xz2Gpq2Ve1yQs4r1oZJ1qTi6b4N3CZ8o%2BtLy1cSo%2B4v%2F0k6QOhagYV9T1W3pg5dugsDHKPUkZ9mvhZd2zSFPFJXlkB4%2FUEFjYGLeudF%2BAyRmW%2FXSJlIYRxzGHjSBJWajVbOLCgModOvT9oQAPXBpO1Vny9zPv1y8ESXgk6hm4tdxRCfl0rwXkIRnelT5eOxlumDG9eI1%2B8BKcUwadQY5QkqcI4kkfHX%2FpphcRHhE2GF%2FmZGUlwja%2FGOSogdRuXknuRqGYDgCQoqK2hbd0vf15hG6ywY5oIeMbAq2vUuFvXM3DYhNU5UPtycWGDYG%2FsSurVmRc86UR9s1%2Bnpx3kOyiimtzVvn3Ax71HtHmQEofQPw497jyngIBUB7jg5bLfwNvTH21CdmS3aQ0EyfCfAQxR7hJh6gVBFgX5arjtcbMTMe5Y1u2Pwj2D33cJUNf2dQnt0bPZVuxX%2FQ2QPhNf6ckYmrqG6LhOExr6xyVWmC%2BYmz89n0L%2BQTPQlUJyKhVr9m3l0u%2FJMMP%2Brb4GOqUBPYRzBbA85WvrxsOQM3n%2BF8Un7Ln1dbLDVYk1V2OuXr291QzNmB8AYzF5oJAOsuXwI6F%2F5FEVO4jzUjVBLQDJdyItEIaby9pJCNtbk9g88RR1o9eMxxu0B6GG8endcQXDd5bY9CrxCRUEL9kQz3L0tV82UtdjDNtZ6Umt13BpVSACm8a8Dj6q9boD%2BdZ5y6cQhT6slFS0GTuYfvEQj4NxjxNBtE%2Fw&X-Amz-Signature=3cc204f5a298db58f38fed0eb6c1a0c9f496b3765fcda25bd6a3dce63cfc3849&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
