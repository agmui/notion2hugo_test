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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THH4FIR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJItgcIQafCZUeJ1ju06SA%2BL7rfsfTws%2B4TOqKtOjdWAiBRPQBkf7gcqzMU7zKy3GmI3QpWjb1RMTzEmFOEzY7L0ir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhUGa4j1TsZDd8UMZKtwD6BpRR8b40QtqngD0gFEIO2GD4i9UKAut%2FAo0v2jBh4Bri8UnJzCqJU1PEQDqnEajvlyqTTkCqHEA0RPqW6KuUH%2FIEQ16wih8icGLXtb3UYT7l9jGe0N02zRl%2FOKaRtjyXbhQ%2BEjIDZHWTLJ%2FYmW7urK7QoC%2BdpHqEnroQqyu7dXe1ruJgyAjxAl3EM5yUdxPpMCHTvTWalr93fnWECa9%2FKFLeGhbbnQa6WiBU%2Fdf8Hsq04kNUdNuSWvvhkDiJdGJQ5PJDmthFNXi%2FvrY8mFufdt3syXsJ9KKMWwaidyZv1y2n2rS8NHStflZIe0HfsGraOoHh2AErKADz0dN6VbubhJFNq2KTkw7HdEE3Nj9qDxi1g4DRsk7cr5JALXyyDV7GR%2B8MGBY12FLfninWnQGiRe2gnxMFpPTdOWINQDiUd4VkSyWjWzF3cP5m64LZM5ZOxEnvyYSsf180wst9ETxqPlxcoBdDaZjJDGHrhHX4FaYRy7XVVQK%2BCZA5sj6%2F4%2FhDMY5qkGj0yeUQIr50%2FgPTkihhS%2BfYHuw%2BbWm3VKRN%2BKDGVZqszZaWL%2F5sWqVRwFE6rpqnh23rEhy6tMXR2YZSqs3jUoD0sX%2F7RJEe83NXpDZuM5zmpBTEnOqmcEw7p33vwY6pgFzX%2Fx4gSzUbJlwzieH7IPhsrG17oShlW2FSvXnX7ASj3itZSP2lKPV86HDzJaxGUQINxOivABk35K9n2D8%2BayZeQiQdmKKs0KEtQURn28OEM5oSPxhMgNdLtTs7cmcp%2BBNmSj0kjXXyc3xtdzV5f3ZvD7PDQYoUl8KnGa4x5g7lVUp%2FQXlarfYqg0Omte%2FNyDKq1MJLK07eATuXvIsXI%2BWht3%2F%2FTo6&X-Amz-Signature=8e9bd3c3e2d84cac3dc32ec08f2e1370a8784cb87a07b14d6fa38e7da6503446&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THH4FIR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJItgcIQafCZUeJ1ju06SA%2BL7rfsfTws%2B4TOqKtOjdWAiBRPQBkf7gcqzMU7zKy3GmI3QpWjb1RMTzEmFOEzY7L0ir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhUGa4j1TsZDd8UMZKtwD6BpRR8b40QtqngD0gFEIO2GD4i9UKAut%2FAo0v2jBh4Bri8UnJzCqJU1PEQDqnEajvlyqTTkCqHEA0RPqW6KuUH%2FIEQ16wih8icGLXtb3UYT7l9jGe0N02zRl%2FOKaRtjyXbhQ%2BEjIDZHWTLJ%2FYmW7urK7QoC%2BdpHqEnroQqyu7dXe1ruJgyAjxAl3EM5yUdxPpMCHTvTWalr93fnWECa9%2FKFLeGhbbnQa6WiBU%2Fdf8Hsq04kNUdNuSWvvhkDiJdGJQ5PJDmthFNXi%2FvrY8mFufdt3syXsJ9KKMWwaidyZv1y2n2rS8NHStflZIe0HfsGraOoHh2AErKADz0dN6VbubhJFNq2KTkw7HdEE3Nj9qDxi1g4DRsk7cr5JALXyyDV7GR%2B8MGBY12FLfninWnQGiRe2gnxMFpPTdOWINQDiUd4VkSyWjWzF3cP5m64LZM5ZOxEnvyYSsf180wst9ETxqPlxcoBdDaZjJDGHrhHX4FaYRy7XVVQK%2BCZA5sj6%2F4%2FhDMY5qkGj0yeUQIr50%2FgPTkihhS%2BfYHuw%2BbWm3VKRN%2BKDGVZqszZaWL%2F5sWqVRwFE6rpqnh23rEhy6tMXR2YZSqs3jUoD0sX%2F7RJEe83NXpDZuM5zmpBTEnOqmcEw7p33vwY6pgFzX%2Fx4gSzUbJlwzieH7IPhsrG17oShlW2FSvXnX7ASj3itZSP2lKPV86HDzJaxGUQINxOivABk35K9n2D8%2BayZeQiQdmKKs0KEtQURn28OEM5oSPxhMgNdLtTs7cmcp%2BBNmSj0kjXXyc3xtdzV5f3ZvD7PDQYoUl8KnGa4x5g7lVUp%2FQXlarfYqg0Omte%2FNyDKq1MJLK07eATuXvIsXI%2BWht3%2F%2FTo6&X-Amz-Signature=70718da71e0bfe0f08e26cc27c83a69047a93f1ce9b2985b99051ea3ae2fff24&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THH4FIR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJItgcIQafCZUeJ1ju06SA%2BL7rfsfTws%2B4TOqKtOjdWAiBRPQBkf7gcqzMU7zKy3GmI3QpWjb1RMTzEmFOEzY7L0ir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhUGa4j1TsZDd8UMZKtwD6BpRR8b40QtqngD0gFEIO2GD4i9UKAut%2FAo0v2jBh4Bri8UnJzCqJU1PEQDqnEajvlyqTTkCqHEA0RPqW6KuUH%2FIEQ16wih8icGLXtb3UYT7l9jGe0N02zRl%2FOKaRtjyXbhQ%2BEjIDZHWTLJ%2FYmW7urK7QoC%2BdpHqEnroQqyu7dXe1ruJgyAjxAl3EM5yUdxPpMCHTvTWalr93fnWECa9%2FKFLeGhbbnQa6WiBU%2Fdf8Hsq04kNUdNuSWvvhkDiJdGJQ5PJDmthFNXi%2FvrY8mFufdt3syXsJ9KKMWwaidyZv1y2n2rS8NHStflZIe0HfsGraOoHh2AErKADz0dN6VbubhJFNq2KTkw7HdEE3Nj9qDxi1g4DRsk7cr5JALXyyDV7GR%2B8MGBY12FLfninWnQGiRe2gnxMFpPTdOWINQDiUd4VkSyWjWzF3cP5m64LZM5ZOxEnvyYSsf180wst9ETxqPlxcoBdDaZjJDGHrhHX4FaYRy7XVVQK%2BCZA5sj6%2F4%2FhDMY5qkGj0yeUQIr50%2FgPTkihhS%2BfYHuw%2BbWm3VKRN%2BKDGVZqszZaWL%2F5sWqVRwFE6rpqnh23rEhy6tMXR2YZSqs3jUoD0sX%2F7RJEe83NXpDZuM5zmpBTEnOqmcEw7p33vwY6pgFzX%2Fx4gSzUbJlwzieH7IPhsrG17oShlW2FSvXnX7ASj3itZSP2lKPV86HDzJaxGUQINxOivABk35K9n2D8%2BayZeQiQdmKKs0KEtQURn28OEM5oSPxhMgNdLtTs7cmcp%2BBNmSj0kjXXyc3xtdzV5f3ZvD7PDQYoUl8KnGa4x5g7lVUp%2FQXlarfYqg0Omte%2FNyDKq1MJLK07eATuXvIsXI%2BWht3%2F%2FTo6&X-Amz-Signature=f8e09dbd6422a255f8b8d5591d5bed899fd1d7250769c88552391b9509e3265a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THH4FIR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJItgcIQafCZUeJ1ju06SA%2BL7rfsfTws%2B4TOqKtOjdWAiBRPQBkf7gcqzMU7zKy3GmI3QpWjb1RMTzEmFOEzY7L0ir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhUGa4j1TsZDd8UMZKtwD6BpRR8b40QtqngD0gFEIO2GD4i9UKAut%2FAo0v2jBh4Bri8UnJzCqJU1PEQDqnEajvlyqTTkCqHEA0RPqW6KuUH%2FIEQ16wih8icGLXtb3UYT7l9jGe0N02zRl%2FOKaRtjyXbhQ%2BEjIDZHWTLJ%2FYmW7urK7QoC%2BdpHqEnroQqyu7dXe1ruJgyAjxAl3EM5yUdxPpMCHTvTWalr93fnWECa9%2FKFLeGhbbnQa6WiBU%2Fdf8Hsq04kNUdNuSWvvhkDiJdGJQ5PJDmthFNXi%2FvrY8mFufdt3syXsJ9KKMWwaidyZv1y2n2rS8NHStflZIe0HfsGraOoHh2AErKADz0dN6VbubhJFNq2KTkw7HdEE3Nj9qDxi1g4DRsk7cr5JALXyyDV7GR%2B8MGBY12FLfninWnQGiRe2gnxMFpPTdOWINQDiUd4VkSyWjWzF3cP5m64LZM5ZOxEnvyYSsf180wst9ETxqPlxcoBdDaZjJDGHrhHX4FaYRy7XVVQK%2BCZA5sj6%2F4%2FhDMY5qkGj0yeUQIr50%2FgPTkihhS%2BfYHuw%2BbWm3VKRN%2BKDGVZqszZaWL%2F5sWqVRwFE6rpqnh23rEhy6tMXR2YZSqs3jUoD0sX%2F7RJEe83NXpDZuM5zmpBTEnOqmcEw7p33vwY6pgFzX%2Fx4gSzUbJlwzieH7IPhsrG17oShlW2FSvXnX7ASj3itZSP2lKPV86HDzJaxGUQINxOivABk35K9n2D8%2BayZeQiQdmKKs0KEtQURn28OEM5oSPxhMgNdLtTs7cmcp%2BBNmSj0kjXXyc3xtdzV5f3ZvD7PDQYoUl8KnGa4x5g7lVUp%2FQXlarfYqg0Omte%2FNyDKq1MJLK07eATuXvIsXI%2BWht3%2F%2FTo6&X-Amz-Signature=7a28b2ee8103dca58740ca6f111962ddcaba7008a40338385ddfd4b77ac7ab04&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THH4FIR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJItgcIQafCZUeJ1ju06SA%2BL7rfsfTws%2B4TOqKtOjdWAiBRPQBkf7gcqzMU7zKy3GmI3QpWjb1RMTzEmFOEzY7L0ir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhUGa4j1TsZDd8UMZKtwD6BpRR8b40QtqngD0gFEIO2GD4i9UKAut%2FAo0v2jBh4Bri8UnJzCqJU1PEQDqnEajvlyqTTkCqHEA0RPqW6KuUH%2FIEQ16wih8icGLXtb3UYT7l9jGe0N02zRl%2FOKaRtjyXbhQ%2BEjIDZHWTLJ%2FYmW7urK7QoC%2BdpHqEnroQqyu7dXe1ruJgyAjxAl3EM5yUdxPpMCHTvTWalr93fnWECa9%2FKFLeGhbbnQa6WiBU%2Fdf8Hsq04kNUdNuSWvvhkDiJdGJQ5PJDmthFNXi%2FvrY8mFufdt3syXsJ9KKMWwaidyZv1y2n2rS8NHStflZIe0HfsGraOoHh2AErKADz0dN6VbubhJFNq2KTkw7HdEE3Nj9qDxi1g4DRsk7cr5JALXyyDV7GR%2B8MGBY12FLfninWnQGiRe2gnxMFpPTdOWINQDiUd4VkSyWjWzF3cP5m64LZM5ZOxEnvyYSsf180wst9ETxqPlxcoBdDaZjJDGHrhHX4FaYRy7XVVQK%2BCZA5sj6%2F4%2FhDMY5qkGj0yeUQIr50%2FgPTkihhS%2BfYHuw%2BbWm3VKRN%2BKDGVZqszZaWL%2F5sWqVRwFE6rpqnh23rEhy6tMXR2YZSqs3jUoD0sX%2F7RJEe83NXpDZuM5zmpBTEnOqmcEw7p33vwY6pgFzX%2Fx4gSzUbJlwzieH7IPhsrG17oShlW2FSvXnX7ASj3itZSP2lKPV86HDzJaxGUQINxOivABk35K9n2D8%2BayZeQiQdmKKs0KEtQURn28OEM5oSPxhMgNdLtTs7cmcp%2BBNmSj0kjXXyc3xtdzV5f3ZvD7PDQYoUl8KnGa4x5g7lVUp%2FQXlarfYqg0Omte%2FNyDKq1MJLK07eATuXvIsXI%2BWht3%2F%2FTo6&X-Amz-Signature=5b820a29236fe115641a0696a9789263b05f6c4ff7c997e93039cb14f735f6fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THH4FIR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJItgcIQafCZUeJ1ju06SA%2BL7rfsfTws%2B4TOqKtOjdWAiBRPQBkf7gcqzMU7zKy3GmI3QpWjb1RMTzEmFOEzY7L0ir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhUGa4j1TsZDd8UMZKtwD6BpRR8b40QtqngD0gFEIO2GD4i9UKAut%2FAo0v2jBh4Bri8UnJzCqJU1PEQDqnEajvlyqTTkCqHEA0RPqW6KuUH%2FIEQ16wih8icGLXtb3UYT7l9jGe0N02zRl%2FOKaRtjyXbhQ%2BEjIDZHWTLJ%2FYmW7urK7QoC%2BdpHqEnroQqyu7dXe1ruJgyAjxAl3EM5yUdxPpMCHTvTWalr93fnWECa9%2FKFLeGhbbnQa6WiBU%2Fdf8Hsq04kNUdNuSWvvhkDiJdGJQ5PJDmthFNXi%2FvrY8mFufdt3syXsJ9KKMWwaidyZv1y2n2rS8NHStflZIe0HfsGraOoHh2AErKADz0dN6VbubhJFNq2KTkw7HdEE3Nj9qDxi1g4DRsk7cr5JALXyyDV7GR%2B8MGBY12FLfninWnQGiRe2gnxMFpPTdOWINQDiUd4VkSyWjWzF3cP5m64LZM5ZOxEnvyYSsf180wst9ETxqPlxcoBdDaZjJDGHrhHX4FaYRy7XVVQK%2BCZA5sj6%2F4%2FhDMY5qkGj0yeUQIr50%2FgPTkihhS%2BfYHuw%2BbWm3VKRN%2BKDGVZqszZaWL%2F5sWqVRwFE6rpqnh23rEhy6tMXR2YZSqs3jUoD0sX%2F7RJEe83NXpDZuM5zmpBTEnOqmcEw7p33vwY6pgFzX%2Fx4gSzUbJlwzieH7IPhsrG17oShlW2FSvXnX7ASj3itZSP2lKPV86HDzJaxGUQINxOivABk35K9n2D8%2BayZeQiQdmKKs0KEtQURn28OEM5oSPxhMgNdLtTs7cmcp%2BBNmSj0kjXXyc3xtdzV5f3ZvD7PDQYoUl8KnGa4x5g7lVUp%2FQXlarfYqg0Omte%2FNyDKq1MJLK07eATuXvIsXI%2BWht3%2F%2FTo6&X-Amz-Signature=b2451264efc20545992f899a69538d19fa25d71fd2ffa5eaf9f4e75c06075681&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THH4FIR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJItgcIQafCZUeJ1ju06SA%2BL7rfsfTws%2B4TOqKtOjdWAiBRPQBkf7gcqzMU7zKy3GmI3QpWjb1RMTzEmFOEzY7L0ir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhUGa4j1TsZDd8UMZKtwD6BpRR8b40QtqngD0gFEIO2GD4i9UKAut%2FAo0v2jBh4Bri8UnJzCqJU1PEQDqnEajvlyqTTkCqHEA0RPqW6KuUH%2FIEQ16wih8icGLXtb3UYT7l9jGe0N02zRl%2FOKaRtjyXbhQ%2BEjIDZHWTLJ%2FYmW7urK7QoC%2BdpHqEnroQqyu7dXe1ruJgyAjxAl3EM5yUdxPpMCHTvTWalr93fnWECa9%2FKFLeGhbbnQa6WiBU%2Fdf8Hsq04kNUdNuSWvvhkDiJdGJQ5PJDmthFNXi%2FvrY8mFufdt3syXsJ9KKMWwaidyZv1y2n2rS8NHStflZIe0HfsGraOoHh2AErKADz0dN6VbubhJFNq2KTkw7HdEE3Nj9qDxi1g4DRsk7cr5JALXyyDV7GR%2B8MGBY12FLfninWnQGiRe2gnxMFpPTdOWINQDiUd4VkSyWjWzF3cP5m64LZM5ZOxEnvyYSsf180wst9ETxqPlxcoBdDaZjJDGHrhHX4FaYRy7XVVQK%2BCZA5sj6%2F4%2FhDMY5qkGj0yeUQIr50%2FgPTkihhS%2BfYHuw%2BbWm3VKRN%2BKDGVZqszZaWL%2F5sWqVRwFE6rpqnh23rEhy6tMXR2YZSqs3jUoD0sX%2F7RJEe83NXpDZuM5zmpBTEnOqmcEw7p33vwY6pgFzX%2Fx4gSzUbJlwzieH7IPhsrG17oShlW2FSvXnX7ASj3itZSP2lKPV86HDzJaxGUQINxOivABk35K9n2D8%2BayZeQiQdmKKs0KEtQURn28OEM5oSPxhMgNdLtTs7cmcp%2BBNmSj0kjXXyc3xtdzV5f3ZvD7PDQYoUl8KnGa4x5g7lVUp%2FQXlarfYqg0Omte%2FNyDKq1MJLK07eATuXvIsXI%2BWht3%2F%2FTo6&X-Amz-Signature=7c45b512cbffce446456277a9085ca82c0ff700cbde015955b02430c86ec04a1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
