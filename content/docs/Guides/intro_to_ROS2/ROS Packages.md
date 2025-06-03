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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OT6GSLB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQChZoDTwASaSRhhV%2BslvfMe752yNAAs0%2BNqqAPCK6eE6AIgVuh2%2Filzx3hgmJh2EiiJ2x8vqKmRhrPR156GkgFe%2Bekq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHfqr%2FvbQYRePWB6qircA3Fb1BHw075gvamYIKjJ%2FRanta7AeBZqj%2FHh1bP4MWfydsjqO%2FUyBRpo0BsSTLds1LpTCfuMrpPzydYdkBBrDbqzr9tYZFiZp%2F0bcf%2BhYYF3Zn5pZKsthYdKm8JKSUHKa5MqgN6LHN4GkjsbZv3VVyvFU1OkV%2B0nHd0lH4QPI77v7WBqd%2BVD7AAFUGJ3%2BnfnHyb5sK2fhiJOmCyGay0QRyEGwVmG5f5DB8MYSOBAsEymmCLI4REi0LiPWWrxnwPuF7%2FBY7Ro1YMpkbRxEBX8M%2FCYaclq6tuaTsRWEwo410d2eBJp5FWadhIWBw6bb84oAf3FROLtgV8O2MAm15gFqtR8AfP8a40iY63CrWhjfMdAW12vFJ5D1TXLi4b1UZ1XjUdtdO%2BXgvcZgoJEwZhi4t%2BEzbQtI5C0ObP%2FZZjhm9RrfAxbOHRdk8CxJB8iCjQz750l%2Bhnj9PzIEL6PBWyryshEjNbgGqTDMe2bFcKhWlcfpOlFDeQ%2FxhXE36q1ROt729mNqIc2DHQHdVGblORBUfs29mrvF6mW%2BNAED5TuyEM41Py3Wqsmx8WUwLWpO7o%2BtjZTYAnGJvMzN0Klc6acNBv8NrR97rc%2FGx4KXiiLUw1IWsgauYrjukPS0GRqMMGF%2FcEGOqUBkzGvoS0DkIQYtTKkNYSsKMBoNdKt63o01KdijcCPcJ0ngHUyz0MxJXJ1uibJxLwqYMm0kACka1sDDF1uGfCmm4DGos3vNxZkNtU5502eln3VPlaFSBlrnRKFSU2Vf%2FbYn6DqwA6r2I28bcHH50HY0trzIk%2BYWJ1FDM%2BwTzLXKZTzrjTghsxIY6Dcs2%2Fwawx0GmeHC8J72Y5VHAZTO2y2b7xcZpD6&X-Amz-Signature=c0340eb07674d038986087be5c6c18933e98bb3de49e49f4063be47023516fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OT6GSLB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQChZoDTwASaSRhhV%2BslvfMe752yNAAs0%2BNqqAPCK6eE6AIgVuh2%2Filzx3hgmJh2EiiJ2x8vqKmRhrPR156GkgFe%2Bekq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHfqr%2FvbQYRePWB6qircA3Fb1BHw075gvamYIKjJ%2FRanta7AeBZqj%2FHh1bP4MWfydsjqO%2FUyBRpo0BsSTLds1LpTCfuMrpPzydYdkBBrDbqzr9tYZFiZp%2F0bcf%2BhYYF3Zn5pZKsthYdKm8JKSUHKa5MqgN6LHN4GkjsbZv3VVyvFU1OkV%2B0nHd0lH4QPI77v7WBqd%2BVD7AAFUGJ3%2BnfnHyb5sK2fhiJOmCyGay0QRyEGwVmG5f5DB8MYSOBAsEymmCLI4REi0LiPWWrxnwPuF7%2FBY7Ro1YMpkbRxEBX8M%2FCYaclq6tuaTsRWEwo410d2eBJp5FWadhIWBw6bb84oAf3FROLtgV8O2MAm15gFqtR8AfP8a40iY63CrWhjfMdAW12vFJ5D1TXLi4b1UZ1XjUdtdO%2BXgvcZgoJEwZhi4t%2BEzbQtI5C0ObP%2FZZjhm9RrfAxbOHRdk8CxJB8iCjQz750l%2Bhnj9PzIEL6PBWyryshEjNbgGqTDMe2bFcKhWlcfpOlFDeQ%2FxhXE36q1ROt729mNqIc2DHQHdVGblORBUfs29mrvF6mW%2BNAED5TuyEM41Py3Wqsmx8WUwLWpO7o%2BtjZTYAnGJvMzN0Klc6acNBv8NrR97rc%2FGx4KXiiLUw1IWsgauYrjukPS0GRqMMGF%2FcEGOqUBkzGvoS0DkIQYtTKkNYSsKMBoNdKt63o01KdijcCPcJ0ngHUyz0MxJXJ1uibJxLwqYMm0kACka1sDDF1uGfCmm4DGos3vNxZkNtU5502eln3VPlaFSBlrnRKFSU2Vf%2FbYn6DqwA6r2I28bcHH50HY0trzIk%2BYWJ1FDM%2BwTzLXKZTzrjTghsxIY6Dcs2%2Fwawx0GmeHC8J72Y5VHAZTO2y2b7xcZpD6&X-Amz-Signature=24bb28cf1e2a9cfeea4896acab01336e394db9c47b5f49bf8f0d61513ebeaf60&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OT6GSLB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQChZoDTwASaSRhhV%2BslvfMe752yNAAs0%2BNqqAPCK6eE6AIgVuh2%2Filzx3hgmJh2EiiJ2x8vqKmRhrPR156GkgFe%2Bekq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHfqr%2FvbQYRePWB6qircA3Fb1BHw075gvamYIKjJ%2FRanta7AeBZqj%2FHh1bP4MWfydsjqO%2FUyBRpo0BsSTLds1LpTCfuMrpPzydYdkBBrDbqzr9tYZFiZp%2F0bcf%2BhYYF3Zn5pZKsthYdKm8JKSUHKa5MqgN6LHN4GkjsbZv3VVyvFU1OkV%2B0nHd0lH4QPI77v7WBqd%2BVD7AAFUGJ3%2BnfnHyb5sK2fhiJOmCyGay0QRyEGwVmG5f5DB8MYSOBAsEymmCLI4REi0LiPWWrxnwPuF7%2FBY7Ro1YMpkbRxEBX8M%2FCYaclq6tuaTsRWEwo410d2eBJp5FWadhIWBw6bb84oAf3FROLtgV8O2MAm15gFqtR8AfP8a40iY63CrWhjfMdAW12vFJ5D1TXLi4b1UZ1XjUdtdO%2BXgvcZgoJEwZhi4t%2BEzbQtI5C0ObP%2FZZjhm9RrfAxbOHRdk8CxJB8iCjQz750l%2Bhnj9PzIEL6PBWyryshEjNbgGqTDMe2bFcKhWlcfpOlFDeQ%2FxhXE36q1ROt729mNqIc2DHQHdVGblORBUfs29mrvF6mW%2BNAED5TuyEM41Py3Wqsmx8WUwLWpO7o%2BtjZTYAnGJvMzN0Klc6acNBv8NrR97rc%2FGx4KXiiLUw1IWsgauYrjukPS0GRqMMGF%2FcEGOqUBkzGvoS0DkIQYtTKkNYSsKMBoNdKt63o01KdijcCPcJ0ngHUyz0MxJXJ1uibJxLwqYMm0kACka1sDDF1uGfCmm4DGos3vNxZkNtU5502eln3VPlaFSBlrnRKFSU2Vf%2FbYn6DqwA6r2I28bcHH50HY0trzIk%2BYWJ1FDM%2BwTzLXKZTzrjTghsxIY6Dcs2%2Fwawx0GmeHC8J72Y5VHAZTO2y2b7xcZpD6&X-Amz-Signature=718e4ea6b070cd0112316a057c578c5d381e6c12b82596d4204771b6a3972e54&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OT6GSLB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQChZoDTwASaSRhhV%2BslvfMe752yNAAs0%2BNqqAPCK6eE6AIgVuh2%2Filzx3hgmJh2EiiJ2x8vqKmRhrPR156GkgFe%2Bekq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHfqr%2FvbQYRePWB6qircA3Fb1BHw075gvamYIKjJ%2FRanta7AeBZqj%2FHh1bP4MWfydsjqO%2FUyBRpo0BsSTLds1LpTCfuMrpPzydYdkBBrDbqzr9tYZFiZp%2F0bcf%2BhYYF3Zn5pZKsthYdKm8JKSUHKa5MqgN6LHN4GkjsbZv3VVyvFU1OkV%2B0nHd0lH4QPI77v7WBqd%2BVD7AAFUGJ3%2BnfnHyb5sK2fhiJOmCyGay0QRyEGwVmG5f5DB8MYSOBAsEymmCLI4REi0LiPWWrxnwPuF7%2FBY7Ro1YMpkbRxEBX8M%2FCYaclq6tuaTsRWEwo410d2eBJp5FWadhIWBw6bb84oAf3FROLtgV8O2MAm15gFqtR8AfP8a40iY63CrWhjfMdAW12vFJ5D1TXLi4b1UZ1XjUdtdO%2BXgvcZgoJEwZhi4t%2BEzbQtI5C0ObP%2FZZjhm9RrfAxbOHRdk8CxJB8iCjQz750l%2Bhnj9PzIEL6PBWyryshEjNbgGqTDMe2bFcKhWlcfpOlFDeQ%2FxhXE36q1ROt729mNqIc2DHQHdVGblORBUfs29mrvF6mW%2BNAED5TuyEM41Py3Wqsmx8WUwLWpO7o%2BtjZTYAnGJvMzN0Klc6acNBv8NrR97rc%2FGx4KXiiLUw1IWsgauYrjukPS0GRqMMGF%2FcEGOqUBkzGvoS0DkIQYtTKkNYSsKMBoNdKt63o01KdijcCPcJ0ngHUyz0MxJXJ1uibJxLwqYMm0kACka1sDDF1uGfCmm4DGos3vNxZkNtU5502eln3VPlaFSBlrnRKFSU2Vf%2FbYn6DqwA6r2I28bcHH50HY0trzIk%2BYWJ1FDM%2BwTzLXKZTzrjTghsxIY6Dcs2%2Fwawx0GmeHC8J72Y5VHAZTO2y2b7xcZpD6&X-Amz-Signature=0cf1d1ba733f6c83436c4bf8bc4084de3e0f3ff19fd8884fc037dc6f41df172b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OT6GSLB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQChZoDTwASaSRhhV%2BslvfMe752yNAAs0%2BNqqAPCK6eE6AIgVuh2%2Filzx3hgmJh2EiiJ2x8vqKmRhrPR156GkgFe%2Bekq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHfqr%2FvbQYRePWB6qircA3Fb1BHw075gvamYIKjJ%2FRanta7AeBZqj%2FHh1bP4MWfydsjqO%2FUyBRpo0BsSTLds1LpTCfuMrpPzydYdkBBrDbqzr9tYZFiZp%2F0bcf%2BhYYF3Zn5pZKsthYdKm8JKSUHKa5MqgN6LHN4GkjsbZv3VVyvFU1OkV%2B0nHd0lH4QPI77v7WBqd%2BVD7AAFUGJ3%2BnfnHyb5sK2fhiJOmCyGay0QRyEGwVmG5f5DB8MYSOBAsEymmCLI4REi0LiPWWrxnwPuF7%2FBY7Ro1YMpkbRxEBX8M%2FCYaclq6tuaTsRWEwo410d2eBJp5FWadhIWBw6bb84oAf3FROLtgV8O2MAm15gFqtR8AfP8a40iY63CrWhjfMdAW12vFJ5D1TXLi4b1UZ1XjUdtdO%2BXgvcZgoJEwZhi4t%2BEzbQtI5C0ObP%2FZZjhm9RrfAxbOHRdk8CxJB8iCjQz750l%2Bhnj9PzIEL6PBWyryshEjNbgGqTDMe2bFcKhWlcfpOlFDeQ%2FxhXE36q1ROt729mNqIc2DHQHdVGblORBUfs29mrvF6mW%2BNAED5TuyEM41Py3Wqsmx8WUwLWpO7o%2BtjZTYAnGJvMzN0Klc6acNBv8NrR97rc%2FGx4KXiiLUw1IWsgauYrjukPS0GRqMMGF%2FcEGOqUBkzGvoS0DkIQYtTKkNYSsKMBoNdKt63o01KdijcCPcJ0ngHUyz0MxJXJ1uibJxLwqYMm0kACka1sDDF1uGfCmm4DGos3vNxZkNtU5502eln3VPlaFSBlrnRKFSU2Vf%2FbYn6DqwA6r2I28bcHH50HY0trzIk%2BYWJ1FDM%2BwTzLXKZTzrjTghsxIY6Dcs2%2Fwawx0GmeHC8J72Y5VHAZTO2y2b7xcZpD6&X-Amz-Signature=c3e131d675df6c5e1f96f08e28cd922e60659f45ea57fcd34f7e3b6d53d2fea4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OT6GSLB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQChZoDTwASaSRhhV%2BslvfMe752yNAAs0%2BNqqAPCK6eE6AIgVuh2%2Filzx3hgmJh2EiiJ2x8vqKmRhrPR156GkgFe%2Bekq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHfqr%2FvbQYRePWB6qircA3Fb1BHw075gvamYIKjJ%2FRanta7AeBZqj%2FHh1bP4MWfydsjqO%2FUyBRpo0BsSTLds1LpTCfuMrpPzydYdkBBrDbqzr9tYZFiZp%2F0bcf%2BhYYF3Zn5pZKsthYdKm8JKSUHKa5MqgN6LHN4GkjsbZv3VVyvFU1OkV%2B0nHd0lH4QPI77v7WBqd%2BVD7AAFUGJ3%2BnfnHyb5sK2fhiJOmCyGay0QRyEGwVmG5f5DB8MYSOBAsEymmCLI4REi0LiPWWrxnwPuF7%2FBY7Ro1YMpkbRxEBX8M%2FCYaclq6tuaTsRWEwo410d2eBJp5FWadhIWBw6bb84oAf3FROLtgV8O2MAm15gFqtR8AfP8a40iY63CrWhjfMdAW12vFJ5D1TXLi4b1UZ1XjUdtdO%2BXgvcZgoJEwZhi4t%2BEzbQtI5C0ObP%2FZZjhm9RrfAxbOHRdk8CxJB8iCjQz750l%2Bhnj9PzIEL6PBWyryshEjNbgGqTDMe2bFcKhWlcfpOlFDeQ%2FxhXE36q1ROt729mNqIc2DHQHdVGblORBUfs29mrvF6mW%2BNAED5TuyEM41Py3Wqsmx8WUwLWpO7o%2BtjZTYAnGJvMzN0Klc6acNBv8NrR97rc%2FGx4KXiiLUw1IWsgauYrjukPS0GRqMMGF%2FcEGOqUBkzGvoS0DkIQYtTKkNYSsKMBoNdKt63o01KdijcCPcJ0ngHUyz0MxJXJ1uibJxLwqYMm0kACka1sDDF1uGfCmm4DGos3vNxZkNtU5502eln3VPlaFSBlrnRKFSU2Vf%2FbYn6DqwA6r2I28bcHH50HY0trzIk%2BYWJ1FDM%2BwTzLXKZTzrjTghsxIY6Dcs2%2Fwawx0GmeHC8J72Y5VHAZTO2y2b7xcZpD6&X-Amz-Signature=dca8d50e1bca8d10e8a33d1007db46b73fa000fade78212991d6f22f4799a2b0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OT6GSLB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQChZoDTwASaSRhhV%2BslvfMe752yNAAs0%2BNqqAPCK6eE6AIgVuh2%2Filzx3hgmJh2EiiJ2x8vqKmRhrPR156GkgFe%2Bekq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHfqr%2FvbQYRePWB6qircA3Fb1BHw075gvamYIKjJ%2FRanta7AeBZqj%2FHh1bP4MWfydsjqO%2FUyBRpo0BsSTLds1LpTCfuMrpPzydYdkBBrDbqzr9tYZFiZp%2F0bcf%2BhYYF3Zn5pZKsthYdKm8JKSUHKa5MqgN6LHN4GkjsbZv3VVyvFU1OkV%2B0nHd0lH4QPI77v7WBqd%2BVD7AAFUGJ3%2BnfnHyb5sK2fhiJOmCyGay0QRyEGwVmG5f5DB8MYSOBAsEymmCLI4REi0LiPWWrxnwPuF7%2FBY7Ro1YMpkbRxEBX8M%2FCYaclq6tuaTsRWEwo410d2eBJp5FWadhIWBw6bb84oAf3FROLtgV8O2MAm15gFqtR8AfP8a40iY63CrWhjfMdAW12vFJ5D1TXLi4b1UZ1XjUdtdO%2BXgvcZgoJEwZhi4t%2BEzbQtI5C0ObP%2FZZjhm9RrfAxbOHRdk8CxJB8iCjQz750l%2Bhnj9PzIEL6PBWyryshEjNbgGqTDMe2bFcKhWlcfpOlFDeQ%2FxhXE36q1ROt729mNqIc2DHQHdVGblORBUfs29mrvF6mW%2BNAED5TuyEM41Py3Wqsmx8WUwLWpO7o%2BtjZTYAnGJvMzN0Klc6acNBv8NrR97rc%2FGx4KXiiLUw1IWsgauYrjukPS0GRqMMGF%2FcEGOqUBkzGvoS0DkIQYtTKkNYSsKMBoNdKt63o01KdijcCPcJ0ngHUyz0MxJXJ1uibJxLwqYMm0kACka1sDDF1uGfCmm4DGos3vNxZkNtU5502eln3VPlaFSBlrnRKFSU2Vf%2FbYn6DqwA6r2I28bcHH50HY0trzIk%2BYWJ1FDM%2BwTzLXKZTzrjTghsxIY6Dcs2%2Fwawx0GmeHC8J72Y5VHAZTO2y2b7xcZpD6&X-Amz-Signature=1c0b5a3b075eb22af865cc630c66523ceb54a034fe1c4f22333d8540a3795ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
