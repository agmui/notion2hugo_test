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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C4FUZZG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDWBjFr3DBwuqX8AirQmGpIjIm3%2FrDh5Mc%2Bi4q3UQo4WQIgXrHzfdy5GgZekfoPh%2FPEAw%2BqrqBWLpQ6v8pfk1ZjoEgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJIET%2FdCscHCWWYf1SrcA76qLL4FYVpiQACsRvvjqyjZb0lDGg%2FC%2FBzAcsBxhq6YEVdjRJ%2BCzcnMoLgbaYULSl%2Fe%2Bh2S2h3RuiSzaG1DBxitqNlZaaDnXO5eCGjBcS%2FM%2FIlR%2B36fs0VwgW81M9qgpxeiS%2BmsUusntP6Q2boN5Y5QUYgUbKUCrYBgHHA8Ncx7Gq5CJCBwcjk%2B49xcg92DeraVpv0%2BWMgLuHIRElV5eKRZJp0lzeP%2FLlaClPFBDYc17ohcjc0OfczTrD9jojxAHmxhGADs3Gn4pWDjALkJ9UnmfL6PhuhGpJBA9qvO6apQlr%2BfNrJVn5Z3xwIc4EonTLjznlbOayF%2BEebPsHMAGj7%2BLvet6PFpwA%2Ft7RsAGfGLYyJ2yCXZFywpzeO69pvDdGq1mLcUBM%2BglvptXW6vBeFGNgB4Ok%2BOaucYhQO8feOCF1iegh6af6hIH7pSScDM0ugVcRN0zAq0bT%2BPAQuBRUQtH72PVx3GQtxMpg3ZvGC45ssVLI2yasrAc3xhSa1doNILovGfgYeJ17rSe%2BVQhzVTAZ6E2Zk%2Bp844Fyz3yjkiVRJwawfWiTwB4XE%2B8uMulaKcJiBclqWZq8ZHM%2B2vxzfm5wu1yKHd1rBVg%2BtBjsjxuXtH4t4BiUxk0kkBMIzFzcEGOqUBSCk5TD%2FE58ezDs6Hgi%2BCIIClkxeWiWFN6LX3iueYu8%2BasdhsDJi9FACpo5GJ%2FGlm5Ar%2BGX%2BFGiqeXQQZWZ1%2F0DiezSRoSrrkELhZv%2Fy2dUtFiwaswPEWbyCA9wIqHSX6x%2B%2FmD60CaLUEmBrHi2C45B5jiHH8%2BtuH6DoqbngWBSOvEcVHqofy3Nc5EgdfSu5SaPple%2BWCtkjvrbcADaqe09x9Vo13&X-Amz-Signature=deb5f8c7159f42b26dda9ea0c6dba22286b44982bc789c1e8d84df170720e766&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C4FUZZG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDWBjFr3DBwuqX8AirQmGpIjIm3%2FrDh5Mc%2Bi4q3UQo4WQIgXrHzfdy5GgZekfoPh%2FPEAw%2BqrqBWLpQ6v8pfk1ZjoEgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJIET%2FdCscHCWWYf1SrcA76qLL4FYVpiQACsRvvjqyjZb0lDGg%2FC%2FBzAcsBxhq6YEVdjRJ%2BCzcnMoLgbaYULSl%2Fe%2Bh2S2h3RuiSzaG1DBxitqNlZaaDnXO5eCGjBcS%2FM%2FIlR%2B36fs0VwgW81M9qgpxeiS%2BmsUusntP6Q2boN5Y5QUYgUbKUCrYBgHHA8Ncx7Gq5CJCBwcjk%2B49xcg92DeraVpv0%2BWMgLuHIRElV5eKRZJp0lzeP%2FLlaClPFBDYc17ohcjc0OfczTrD9jojxAHmxhGADs3Gn4pWDjALkJ9UnmfL6PhuhGpJBA9qvO6apQlr%2BfNrJVn5Z3xwIc4EonTLjznlbOayF%2BEebPsHMAGj7%2BLvet6PFpwA%2Ft7RsAGfGLYyJ2yCXZFywpzeO69pvDdGq1mLcUBM%2BglvptXW6vBeFGNgB4Ok%2BOaucYhQO8feOCF1iegh6af6hIH7pSScDM0ugVcRN0zAq0bT%2BPAQuBRUQtH72PVx3GQtxMpg3ZvGC45ssVLI2yasrAc3xhSa1doNILovGfgYeJ17rSe%2BVQhzVTAZ6E2Zk%2Bp844Fyz3yjkiVRJwawfWiTwB4XE%2B8uMulaKcJiBclqWZq8ZHM%2B2vxzfm5wu1yKHd1rBVg%2BtBjsjxuXtH4t4BiUxk0kkBMIzFzcEGOqUBSCk5TD%2FE58ezDs6Hgi%2BCIIClkxeWiWFN6LX3iueYu8%2BasdhsDJi9FACpo5GJ%2FGlm5Ar%2BGX%2BFGiqeXQQZWZ1%2F0DiezSRoSrrkELhZv%2Fy2dUtFiwaswPEWbyCA9wIqHSX6x%2B%2FmD60CaLUEmBrHi2C45B5jiHH8%2BtuH6DoqbngWBSOvEcVHqofy3Nc5EgdfSu5SaPple%2BWCtkjvrbcADaqe09x9Vo13&X-Amz-Signature=f41737c98134c8bbf09345a2d6b422c39523d1b5ab322286e080ae19e3c0e5f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C4FUZZG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDWBjFr3DBwuqX8AirQmGpIjIm3%2FrDh5Mc%2Bi4q3UQo4WQIgXrHzfdy5GgZekfoPh%2FPEAw%2BqrqBWLpQ6v8pfk1ZjoEgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJIET%2FdCscHCWWYf1SrcA76qLL4FYVpiQACsRvvjqyjZb0lDGg%2FC%2FBzAcsBxhq6YEVdjRJ%2BCzcnMoLgbaYULSl%2Fe%2Bh2S2h3RuiSzaG1DBxitqNlZaaDnXO5eCGjBcS%2FM%2FIlR%2B36fs0VwgW81M9qgpxeiS%2BmsUusntP6Q2boN5Y5QUYgUbKUCrYBgHHA8Ncx7Gq5CJCBwcjk%2B49xcg92DeraVpv0%2BWMgLuHIRElV5eKRZJp0lzeP%2FLlaClPFBDYc17ohcjc0OfczTrD9jojxAHmxhGADs3Gn4pWDjALkJ9UnmfL6PhuhGpJBA9qvO6apQlr%2BfNrJVn5Z3xwIc4EonTLjznlbOayF%2BEebPsHMAGj7%2BLvet6PFpwA%2Ft7RsAGfGLYyJ2yCXZFywpzeO69pvDdGq1mLcUBM%2BglvptXW6vBeFGNgB4Ok%2BOaucYhQO8feOCF1iegh6af6hIH7pSScDM0ugVcRN0zAq0bT%2BPAQuBRUQtH72PVx3GQtxMpg3ZvGC45ssVLI2yasrAc3xhSa1doNILovGfgYeJ17rSe%2BVQhzVTAZ6E2Zk%2Bp844Fyz3yjkiVRJwawfWiTwB4XE%2B8uMulaKcJiBclqWZq8ZHM%2B2vxzfm5wu1yKHd1rBVg%2BtBjsjxuXtH4t4BiUxk0kkBMIzFzcEGOqUBSCk5TD%2FE58ezDs6Hgi%2BCIIClkxeWiWFN6LX3iueYu8%2BasdhsDJi9FACpo5GJ%2FGlm5Ar%2BGX%2BFGiqeXQQZWZ1%2F0DiezSRoSrrkELhZv%2Fy2dUtFiwaswPEWbyCA9wIqHSX6x%2B%2FmD60CaLUEmBrHi2C45B5jiHH8%2BtuH6DoqbngWBSOvEcVHqofy3Nc5EgdfSu5SaPple%2BWCtkjvrbcADaqe09x9Vo13&X-Amz-Signature=f5320defb432341097ad3d8ac11361ec23d1b907614309d78ee18495a0163494&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C4FUZZG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDWBjFr3DBwuqX8AirQmGpIjIm3%2FrDh5Mc%2Bi4q3UQo4WQIgXrHzfdy5GgZekfoPh%2FPEAw%2BqrqBWLpQ6v8pfk1ZjoEgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJIET%2FdCscHCWWYf1SrcA76qLL4FYVpiQACsRvvjqyjZb0lDGg%2FC%2FBzAcsBxhq6YEVdjRJ%2BCzcnMoLgbaYULSl%2Fe%2Bh2S2h3RuiSzaG1DBxitqNlZaaDnXO5eCGjBcS%2FM%2FIlR%2B36fs0VwgW81M9qgpxeiS%2BmsUusntP6Q2boN5Y5QUYgUbKUCrYBgHHA8Ncx7Gq5CJCBwcjk%2B49xcg92DeraVpv0%2BWMgLuHIRElV5eKRZJp0lzeP%2FLlaClPFBDYc17ohcjc0OfczTrD9jojxAHmxhGADs3Gn4pWDjALkJ9UnmfL6PhuhGpJBA9qvO6apQlr%2BfNrJVn5Z3xwIc4EonTLjznlbOayF%2BEebPsHMAGj7%2BLvet6PFpwA%2Ft7RsAGfGLYyJ2yCXZFywpzeO69pvDdGq1mLcUBM%2BglvptXW6vBeFGNgB4Ok%2BOaucYhQO8feOCF1iegh6af6hIH7pSScDM0ugVcRN0zAq0bT%2BPAQuBRUQtH72PVx3GQtxMpg3ZvGC45ssVLI2yasrAc3xhSa1doNILovGfgYeJ17rSe%2BVQhzVTAZ6E2Zk%2Bp844Fyz3yjkiVRJwawfWiTwB4XE%2B8uMulaKcJiBclqWZq8ZHM%2B2vxzfm5wu1yKHd1rBVg%2BtBjsjxuXtH4t4BiUxk0kkBMIzFzcEGOqUBSCk5TD%2FE58ezDs6Hgi%2BCIIClkxeWiWFN6LX3iueYu8%2BasdhsDJi9FACpo5GJ%2FGlm5Ar%2BGX%2BFGiqeXQQZWZ1%2F0DiezSRoSrrkELhZv%2Fy2dUtFiwaswPEWbyCA9wIqHSX6x%2B%2FmD60CaLUEmBrHi2C45B5jiHH8%2BtuH6DoqbngWBSOvEcVHqofy3Nc5EgdfSu5SaPple%2BWCtkjvrbcADaqe09x9Vo13&X-Amz-Signature=389f93c0fa43128236e0c472e8c1532631586f5e60ff57ae10d1b7e4e7d767e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C4FUZZG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDWBjFr3DBwuqX8AirQmGpIjIm3%2FrDh5Mc%2Bi4q3UQo4WQIgXrHzfdy5GgZekfoPh%2FPEAw%2BqrqBWLpQ6v8pfk1ZjoEgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJIET%2FdCscHCWWYf1SrcA76qLL4FYVpiQACsRvvjqyjZb0lDGg%2FC%2FBzAcsBxhq6YEVdjRJ%2BCzcnMoLgbaYULSl%2Fe%2Bh2S2h3RuiSzaG1DBxitqNlZaaDnXO5eCGjBcS%2FM%2FIlR%2B36fs0VwgW81M9qgpxeiS%2BmsUusntP6Q2boN5Y5QUYgUbKUCrYBgHHA8Ncx7Gq5CJCBwcjk%2B49xcg92DeraVpv0%2BWMgLuHIRElV5eKRZJp0lzeP%2FLlaClPFBDYc17ohcjc0OfczTrD9jojxAHmxhGADs3Gn4pWDjALkJ9UnmfL6PhuhGpJBA9qvO6apQlr%2BfNrJVn5Z3xwIc4EonTLjznlbOayF%2BEebPsHMAGj7%2BLvet6PFpwA%2Ft7RsAGfGLYyJ2yCXZFywpzeO69pvDdGq1mLcUBM%2BglvptXW6vBeFGNgB4Ok%2BOaucYhQO8feOCF1iegh6af6hIH7pSScDM0ugVcRN0zAq0bT%2BPAQuBRUQtH72PVx3GQtxMpg3ZvGC45ssVLI2yasrAc3xhSa1doNILovGfgYeJ17rSe%2BVQhzVTAZ6E2Zk%2Bp844Fyz3yjkiVRJwawfWiTwB4XE%2B8uMulaKcJiBclqWZq8ZHM%2B2vxzfm5wu1yKHd1rBVg%2BtBjsjxuXtH4t4BiUxk0kkBMIzFzcEGOqUBSCk5TD%2FE58ezDs6Hgi%2BCIIClkxeWiWFN6LX3iueYu8%2BasdhsDJi9FACpo5GJ%2FGlm5Ar%2BGX%2BFGiqeXQQZWZ1%2F0DiezSRoSrrkELhZv%2Fy2dUtFiwaswPEWbyCA9wIqHSX6x%2B%2FmD60CaLUEmBrHi2C45B5jiHH8%2BtuH6DoqbngWBSOvEcVHqofy3Nc5EgdfSu5SaPple%2BWCtkjvrbcADaqe09x9Vo13&X-Amz-Signature=5a9df15a7ad117393334cfd8480909a991d3b930d66681ca22e1fdb84b608d01&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C4FUZZG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDWBjFr3DBwuqX8AirQmGpIjIm3%2FrDh5Mc%2Bi4q3UQo4WQIgXrHzfdy5GgZekfoPh%2FPEAw%2BqrqBWLpQ6v8pfk1ZjoEgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJIET%2FdCscHCWWYf1SrcA76qLL4FYVpiQACsRvvjqyjZb0lDGg%2FC%2FBzAcsBxhq6YEVdjRJ%2BCzcnMoLgbaYULSl%2Fe%2Bh2S2h3RuiSzaG1DBxitqNlZaaDnXO5eCGjBcS%2FM%2FIlR%2B36fs0VwgW81M9qgpxeiS%2BmsUusntP6Q2boN5Y5QUYgUbKUCrYBgHHA8Ncx7Gq5CJCBwcjk%2B49xcg92DeraVpv0%2BWMgLuHIRElV5eKRZJp0lzeP%2FLlaClPFBDYc17ohcjc0OfczTrD9jojxAHmxhGADs3Gn4pWDjALkJ9UnmfL6PhuhGpJBA9qvO6apQlr%2BfNrJVn5Z3xwIc4EonTLjznlbOayF%2BEebPsHMAGj7%2BLvet6PFpwA%2Ft7RsAGfGLYyJ2yCXZFywpzeO69pvDdGq1mLcUBM%2BglvptXW6vBeFGNgB4Ok%2BOaucYhQO8feOCF1iegh6af6hIH7pSScDM0ugVcRN0zAq0bT%2BPAQuBRUQtH72PVx3GQtxMpg3ZvGC45ssVLI2yasrAc3xhSa1doNILovGfgYeJ17rSe%2BVQhzVTAZ6E2Zk%2Bp844Fyz3yjkiVRJwawfWiTwB4XE%2B8uMulaKcJiBclqWZq8ZHM%2B2vxzfm5wu1yKHd1rBVg%2BtBjsjxuXtH4t4BiUxk0kkBMIzFzcEGOqUBSCk5TD%2FE58ezDs6Hgi%2BCIIClkxeWiWFN6LX3iueYu8%2BasdhsDJi9FACpo5GJ%2FGlm5Ar%2BGX%2BFGiqeXQQZWZ1%2F0DiezSRoSrrkELhZv%2Fy2dUtFiwaswPEWbyCA9wIqHSX6x%2B%2FmD60CaLUEmBrHi2C45B5jiHH8%2BtuH6DoqbngWBSOvEcVHqofy3Nc5EgdfSu5SaPple%2BWCtkjvrbcADaqe09x9Vo13&X-Amz-Signature=cdd81e9070fe1239abd0c7c6b28468a2c480cb0530eb56a1009d5145b4aebaf4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C4FUZZG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDWBjFr3DBwuqX8AirQmGpIjIm3%2FrDh5Mc%2Bi4q3UQo4WQIgXrHzfdy5GgZekfoPh%2FPEAw%2BqrqBWLpQ6v8pfk1ZjoEgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJIET%2FdCscHCWWYf1SrcA76qLL4FYVpiQACsRvvjqyjZb0lDGg%2FC%2FBzAcsBxhq6YEVdjRJ%2BCzcnMoLgbaYULSl%2Fe%2Bh2S2h3RuiSzaG1DBxitqNlZaaDnXO5eCGjBcS%2FM%2FIlR%2B36fs0VwgW81M9qgpxeiS%2BmsUusntP6Q2boN5Y5QUYgUbKUCrYBgHHA8Ncx7Gq5CJCBwcjk%2B49xcg92DeraVpv0%2BWMgLuHIRElV5eKRZJp0lzeP%2FLlaClPFBDYc17ohcjc0OfczTrD9jojxAHmxhGADs3Gn4pWDjALkJ9UnmfL6PhuhGpJBA9qvO6apQlr%2BfNrJVn5Z3xwIc4EonTLjznlbOayF%2BEebPsHMAGj7%2BLvet6PFpwA%2Ft7RsAGfGLYyJ2yCXZFywpzeO69pvDdGq1mLcUBM%2BglvptXW6vBeFGNgB4Ok%2BOaucYhQO8feOCF1iegh6af6hIH7pSScDM0ugVcRN0zAq0bT%2BPAQuBRUQtH72PVx3GQtxMpg3ZvGC45ssVLI2yasrAc3xhSa1doNILovGfgYeJ17rSe%2BVQhzVTAZ6E2Zk%2Bp844Fyz3yjkiVRJwawfWiTwB4XE%2B8uMulaKcJiBclqWZq8ZHM%2B2vxzfm5wu1yKHd1rBVg%2BtBjsjxuXtH4t4BiUxk0kkBMIzFzcEGOqUBSCk5TD%2FE58ezDs6Hgi%2BCIIClkxeWiWFN6LX3iueYu8%2BasdhsDJi9FACpo5GJ%2FGlm5Ar%2BGX%2BFGiqeXQQZWZ1%2F0DiezSRoSrrkELhZv%2Fy2dUtFiwaswPEWbyCA9wIqHSX6x%2B%2FmD60CaLUEmBrHi2C45B5jiHH8%2BtuH6DoqbngWBSOvEcVHqofy3Nc5EgdfSu5SaPple%2BWCtkjvrbcADaqe09x9Vo13&X-Amz-Signature=6e86b05521ccc63fce91e5f6680fdab6ca5d65f937d35a709f63795b0913d03f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
