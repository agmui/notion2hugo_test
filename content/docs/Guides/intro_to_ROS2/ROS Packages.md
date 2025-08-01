---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVNFUYL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhJ2Nvq%2Bi35WIvWiI8lTkEZjw1nwWssw7gKlwJJBn%2FaAiEAsefxDKA2lcfHCaGsa2Hrmk8IONX5GIcPtYvaZL44mnsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMripfpzaglUqfj2ZSrcA8BF4XyNcvLxj6YcXbUiCVI59E2qM5964YjUBYncUICSa%2BlfGLObSygmuB%2Bri%2F3Hof%2FwKUHTLhaAQJestheo%2BrprKfZQEwIKqHL2g5qLmm4Qhc99iKZO3vZHGPja%2FK11x0epekwYezHyyl5LRhK%2BxGjw0DV2k5PumFZ0fzTw2VBq1VLIXuFrn24%2F7HC3nyuGf%2FrubDZof0B3XfJMXJir8xalgWLL2sJ2OnaIZsOrbdWl8XEepnrAIoHBqHj8CnH1bpty38QdBlW7wRoecXavQDX61kq7VVSRyDI6%2BptBRmxkINhbZ0xcacX%2BtnS%2BDNIqp1Qxx5CdmUSO0w85gAU9PGXAuISc5oHAOp0Em69lHOS%2Fy4G%2BUgHhXhngJgCUMj3xED8wZZXNRRHrWcbh%2F4u%2BavS8gWzpsFD7VeuQDDj1wHf650nb1J44EYvuQU5jFkBkYqdBWB%2FQNTjxZFM%2B%2FcJKmGTwqOlNiF2hMye%2BlcBo84LSFbrFRxb5eRibP5AAy%2FUus7ijfKhiD8ZUuyE2XlcURQfbeYKDN2aHQmxt%2F4FQLxPgUiD8mC8dCyzCk%2FIkjHA%2FXSq%2B3eMTapi76tTrpD1VAOJbL3eHTsLWt5hkX2S6GtpdiynOblu5pP2FcOShMOabscQGOqUBS5mpaOx0%2FY0r0xjdAfnkKqYvcgM0dch6DI3kVWzZnxtP5oYZGHrZtaUvOrE1HQWTZLuwpCmQ0XzQZIznN7cVSo%2BKNZcSf21hxNRiEjzwRy9xtYgJpv3zWHbyyaztNwKWS%2BDsD2grSb6sVVqKtP9yu5s2a1jr0D00IH3VKfOMU8P1Ptz3sFcfGTEINFz7I%2BhBG2xewS2jku9aRcXWl4Xcdu31onsV&X-Amz-Signature=c4f902e2741c7873b979e579686b331f5f2b2c992aadf99adc60c83613da2214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVNFUYL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhJ2Nvq%2Bi35WIvWiI8lTkEZjw1nwWssw7gKlwJJBn%2FaAiEAsefxDKA2lcfHCaGsa2Hrmk8IONX5GIcPtYvaZL44mnsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMripfpzaglUqfj2ZSrcA8BF4XyNcvLxj6YcXbUiCVI59E2qM5964YjUBYncUICSa%2BlfGLObSygmuB%2Bri%2F3Hof%2FwKUHTLhaAQJestheo%2BrprKfZQEwIKqHL2g5qLmm4Qhc99iKZO3vZHGPja%2FK11x0epekwYezHyyl5LRhK%2BxGjw0DV2k5PumFZ0fzTw2VBq1VLIXuFrn24%2F7HC3nyuGf%2FrubDZof0B3XfJMXJir8xalgWLL2sJ2OnaIZsOrbdWl8XEepnrAIoHBqHj8CnH1bpty38QdBlW7wRoecXavQDX61kq7VVSRyDI6%2BptBRmxkINhbZ0xcacX%2BtnS%2BDNIqp1Qxx5CdmUSO0w85gAU9PGXAuISc5oHAOp0Em69lHOS%2Fy4G%2BUgHhXhngJgCUMj3xED8wZZXNRRHrWcbh%2F4u%2BavS8gWzpsFD7VeuQDDj1wHf650nb1J44EYvuQU5jFkBkYqdBWB%2FQNTjxZFM%2B%2FcJKmGTwqOlNiF2hMye%2BlcBo84LSFbrFRxb5eRibP5AAy%2FUus7ijfKhiD8ZUuyE2XlcURQfbeYKDN2aHQmxt%2F4FQLxPgUiD8mC8dCyzCk%2FIkjHA%2FXSq%2B3eMTapi76tTrpD1VAOJbL3eHTsLWt5hkX2S6GtpdiynOblu5pP2FcOShMOabscQGOqUBS5mpaOx0%2FY0r0xjdAfnkKqYvcgM0dch6DI3kVWzZnxtP5oYZGHrZtaUvOrE1HQWTZLuwpCmQ0XzQZIznN7cVSo%2BKNZcSf21hxNRiEjzwRy9xtYgJpv3zWHbyyaztNwKWS%2BDsD2grSb6sVVqKtP9yu5s2a1jr0D00IH3VKfOMU8P1Ptz3sFcfGTEINFz7I%2BhBG2xewS2jku9aRcXWl4Xcdu31onsV&X-Amz-Signature=1f3bf4a9e5006521e55b3ed2aeb1aef6172bcab5993c1025c6b91c2af4e02be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVNFUYL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhJ2Nvq%2Bi35WIvWiI8lTkEZjw1nwWssw7gKlwJJBn%2FaAiEAsefxDKA2lcfHCaGsa2Hrmk8IONX5GIcPtYvaZL44mnsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMripfpzaglUqfj2ZSrcA8BF4XyNcvLxj6YcXbUiCVI59E2qM5964YjUBYncUICSa%2BlfGLObSygmuB%2Bri%2F3Hof%2FwKUHTLhaAQJestheo%2BrprKfZQEwIKqHL2g5qLmm4Qhc99iKZO3vZHGPja%2FK11x0epekwYezHyyl5LRhK%2BxGjw0DV2k5PumFZ0fzTw2VBq1VLIXuFrn24%2F7HC3nyuGf%2FrubDZof0B3XfJMXJir8xalgWLL2sJ2OnaIZsOrbdWl8XEepnrAIoHBqHj8CnH1bpty38QdBlW7wRoecXavQDX61kq7VVSRyDI6%2BptBRmxkINhbZ0xcacX%2BtnS%2BDNIqp1Qxx5CdmUSO0w85gAU9PGXAuISc5oHAOp0Em69lHOS%2Fy4G%2BUgHhXhngJgCUMj3xED8wZZXNRRHrWcbh%2F4u%2BavS8gWzpsFD7VeuQDDj1wHf650nb1J44EYvuQU5jFkBkYqdBWB%2FQNTjxZFM%2B%2FcJKmGTwqOlNiF2hMye%2BlcBo84LSFbrFRxb5eRibP5AAy%2FUus7ijfKhiD8ZUuyE2XlcURQfbeYKDN2aHQmxt%2F4FQLxPgUiD8mC8dCyzCk%2FIkjHA%2FXSq%2B3eMTapi76tTrpD1VAOJbL3eHTsLWt5hkX2S6GtpdiynOblu5pP2FcOShMOabscQGOqUBS5mpaOx0%2FY0r0xjdAfnkKqYvcgM0dch6DI3kVWzZnxtP5oYZGHrZtaUvOrE1HQWTZLuwpCmQ0XzQZIznN7cVSo%2BKNZcSf21hxNRiEjzwRy9xtYgJpv3zWHbyyaztNwKWS%2BDsD2grSb6sVVqKtP9yu5s2a1jr0D00IH3VKfOMU8P1Ptz3sFcfGTEINFz7I%2BhBG2xewS2jku9aRcXWl4Xcdu31onsV&X-Amz-Signature=6129eb90f663e81881ee73a75eeb59658661257ae7c465ce0d562cd833437327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVNFUYL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhJ2Nvq%2Bi35WIvWiI8lTkEZjw1nwWssw7gKlwJJBn%2FaAiEAsefxDKA2lcfHCaGsa2Hrmk8IONX5GIcPtYvaZL44mnsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMripfpzaglUqfj2ZSrcA8BF4XyNcvLxj6YcXbUiCVI59E2qM5964YjUBYncUICSa%2BlfGLObSygmuB%2Bri%2F3Hof%2FwKUHTLhaAQJestheo%2BrprKfZQEwIKqHL2g5qLmm4Qhc99iKZO3vZHGPja%2FK11x0epekwYezHyyl5LRhK%2BxGjw0DV2k5PumFZ0fzTw2VBq1VLIXuFrn24%2F7HC3nyuGf%2FrubDZof0B3XfJMXJir8xalgWLL2sJ2OnaIZsOrbdWl8XEepnrAIoHBqHj8CnH1bpty38QdBlW7wRoecXavQDX61kq7VVSRyDI6%2BptBRmxkINhbZ0xcacX%2BtnS%2BDNIqp1Qxx5CdmUSO0w85gAU9PGXAuISc5oHAOp0Em69lHOS%2Fy4G%2BUgHhXhngJgCUMj3xED8wZZXNRRHrWcbh%2F4u%2BavS8gWzpsFD7VeuQDDj1wHf650nb1J44EYvuQU5jFkBkYqdBWB%2FQNTjxZFM%2B%2FcJKmGTwqOlNiF2hMye%2BlcBo84LSFbrFRxb5eRibP5AAy%2FUus7ijfKhiD8ZUuyE2XlcURQfbeYKDN2aHQmxt%2F4FQLxPgUiD8mC8dCyzCk%2FIkjHA%2FXSq%2B3eMTapi76tTrpD1VAOJbL3eHTsLWt5hkX2S6GtpdiynOblu5pP2FcOShMOabscQGOqUBS5mpaOx0%2FY0r0xjdAfnkKqYvcgM0dch6DI3kVWzZnxtP5oYZGHrZtaUvOrE1HQWTZLuwpCmQ0XzQZIznN7cVSo%2BKNZcSf21hxNRiEjzwRy9xtYgJpv3zWHbyyaztNwKWS%2BDsD2grSb6sVVqKtP9yu5s2a1jr0D00IH3VKfOMU8P1Ptz3sFcfGTEINFz7I%2BhBG2xewS2jku9aRcXWl4Xcdu31onsV&X-Amz-Signature=ef7c96f338bf805ed4ead7bd1d9da0b0edb6e8e8034cc4e9458ee432ec4f8389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVNFUYL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhJ2Nvq%2Bi35WIvWiI8lTkEZjw1nwWssw7gKlwJJBn%2FaAiEAsefxDKA2lcfHCaGsa2Hrmk8IONX5GIcPtYvaZL44mnsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMripfpzaglUqfj2ZSrcA8BF4XyNcvLxj6YcXbUiCVI59E2qM5964YjUBYncUICSa%2BlfGLObSygmuB%2Bri%2F3Hof%2FwKUHTLhaAQJestheo%2BrprKfZQEwIKqHL2g5qLmm4Qhc99iKZO3vZHGPja%2FK11x0epekwYezHyyl5LRhK%2BxGjw0DV2k5PumFZ0fzTw2VBq1VLIXuFrn24%2F7HC3nyuGf%2FrubDZof0B3XfJMXJir8xalgWLL2sJ2OnaIZsOrbdWl8XEepnrAIoHBqHj8CnH1bpty38QdBlW7wRoecXavQDX61kq7VVSRyDI6%2BptBRmxkINhbZ0xcacX%2BtnS%2BDNIqp1Qxx5CdmUSO0w85gAU9PGXAuISc5oHAOp0Em69lHOS%2Fy4G%2BUgHhXhngJgCUMj3xED8wZZXNRRHrWcbh%2F4u%2BavS8gWzpsFD7VeuQDDj1wHf650nb1J44EYvuQU5jFkBkYqdBWB%2FQNTjxZFM%2B%2FcJKmGTwqOlNiF2hMye%2BlcBo84LSFbrFRxb5eRibP5AAy%2FUus7ijfKhiD8ZUuyE2XlcURQfbeYKDN2aHQmxt%2F4FQLxPgUiD8mC8dCyzCk%2FIkjHA%2FXSq%2B3eMTapi76tTrpD1VAOJbL3eHTsLWt5hkX2S6GtpdiynOblu5pP2FcOShMOabscQGOqUBS5mpaOx0%2FY0r0xjdAfnkKqYvcgM0dch6DI3kVWzZnxtP5oYZGHrZtaUvOrE1HQWTZLuwpCmQ0XzQZIznN7cVSo%2BKNZcSf21hxNRiEjzwRy9xtYgJpv3zWHbyyaztNwKWS%2BDsD2grSb6sVVqKtP9yu5s2a1jr0D00IH3VKfOMU8P1Ptz3sFcfGTEINFz7I%2BhBG2xewS2jku9aRcXWl4Xcdu31onsV&X-Amz-Signature=3c15780b414bed01ff4f22909386dba48228af98b3ae6eb5b2ff5f8519718961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVNFUYL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhJ2Nvq%2Bi35WIvWiI8lTkEZjw1nwWssw7gKlwJJBn%2FaAiEAsefxDKA2lcfHCaGsa2Hrmk8IONX5GIcPtYvaZL44mnsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMripfpzaglUqfj2ZSrcA8BF4XyNcvLxj6YcXbUiCVI59E2qM5964YjUBYncUICSa%2BlfGLObSygmuB%2Bri%2F3Hof%2FwKUHTLhaAQJestheo%2BrprKfZQEwIKqHL2g5qLmm4Qhc99iKZO3vZHGPja%2FK11x0epekwYezHyyl5LRhK%2BxGjw0DV2k5PumFZ0fzTw2VBq1VLIXuFrn24%2F7HC3nyuGf%2FrubDZof0B3XfJMXJir8xalgWLL2sJ2OnaIZsOrbdWl8XEepnrAIoHBqHj8CnH1bpty38QdBlW7wRoecXavQDX61kq7VVSRyDI6%2BptBRmxkINhbZ0xcacX%2BtnS%2BDNIqp1Qxx5CdmUSO0w85gAU9PGXAuISc5oHAOp0Em69lHOS%2Fy4G%2BUgHhXhngJgCUMj3xED8wZZXNRRHrWcbh%2F4u%2BavS8gWzpsFD7VeuQDDj1wHf650nb1J44EYvuQU5jFkBkYqdBWB%2FQNTjxZFM%2B%2FcJKmGTwqOlNiF2hMye%2BlcBo84LSFbrFRxb5eRibP5AAy%2FUus7ijfKhiD8ZUuyE2XlcURQfbeYKDN2aHQmxt%2F4FQLxPgUiD8mC8dCyzCk%2FIkjHA%2FXSq%2B3eMTapi76tTrpD1VAOJbL3eHTsLWt5hkX2S6GtpdiynOblu5pP2FcOShMOabscQGOqUBS5mpaOx0%2FY0r0xjdAfnkKqYvcgM0dch6DI3kVWzZnxtP5oYZGHrZtaUvOrE1HQWTZLuwpCmQ0XzQZIznN7cVSo%2BKNZcSf21hxNRiEjzwRy9xtYgJpv3zWHbyyaztNwKWS%2BDsD2grSb6sVVqKtP9yu5s2a1jr0D00IH3VKfOMU8P1Ptz3sFcfGTEINFz7I%2BhBG2xewS2jku9aRcXWl4Xcdu31onsV&X-Amz-Signature=6cd3aa9a359de9f3edabde48ec7ed89aa8ddebcfb0fb1a3122d3126a8220f765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVNFUYL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhJ2Nvq%2Bi35WIvWiI8lTkEZjw1nwWssw7gKlwJJBn%2FaAiEAsefxDKA2lcfHCaGsa2Hrmk8IONX5GIcPtYvaZL44mnsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMripfpzaglUqfj2ZSrcA8BF4XyNcvLxj6YcXbUiCVI59E2qM5964YjUBYncUICSa%2BlfGLObSygmuB%2Bri%2F3Hof%2FwKUHTLhaAQJestheo%2BrprKfZQEwIKqHL2g5qLmm4Qhc99iKZO3vZHGPja%2FK11x0epekwYezHyyl5LRhK%2BxGjw0DV2k5PumFZ0fzTw2VBq1VLIXuFrn24%2F7HC3nyuGf%2FrubDZof0B3XfJMXJir8xalgWLL2sJ2OnaIZsOrbdWl8XEepnrAIoHBqHj8CnH1bpty38QdBlW7wRoecXavQDX61kq7VVSRyDI6%2BptBRmxkINhbZ0xcacX%2BtnS%2BDNIqp1Qxx5CdmUSO0w85gAU9PGXAuISc5oHAOp0Em69lHOS%2Fy4G%2BUgHhXhngJgCUMj3xED8wZZXNRRHrWcbh%2F4u%2BavS8gWzpsFD7VeuQDDj1wHf650nb1J44EYvuQU5jFkBkYqdBWB%2FQNTjxZFM%2B%2FcJKmGTwqOlNiF2hMye%2BlcBo84LSFbrFRxb5eRibP5AAy%2FUus7ijfKhiD8ZUuyE2XlcURQfbeYKDN2aHQmxt%2F4FQLxPgUiD8mC8dCyzCk%2FIkjHA%2FXSq%2B3eMTapi76tTrpD1VAOJbL3eHTsLWt5hkX2S6GtpdiynOblu5pP2FcOShMOabscQGOqUBS5mpaOx0%2FY0r0xjdAfnkKqYvcgM0dch6DI3kVWzZnxtP5oYZGHrZtaUvOrE1HQWTZLuwpCmQ0XzQZIznN7cVSo%2BKNZcSf21hxNRiEjzwRy9xtYgJpv3zWHbyyaztNwKWS%2BDsD2grSb6sVVqKtP9yu5s2a1jr0D00IH3VKfOMU8P1Ptz3sFcfGTEINFz7I%2BhBG2xewS2jku9aRcXWl4Xcdu31onsV&X-Amz-Signature=8558735a4784940959503480b18eef2f91d9c3a215484e8d82ec9851c58dbcd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
