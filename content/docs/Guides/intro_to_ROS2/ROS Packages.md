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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV732YUP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm6OW0M%2B%2BGqB5QZGHb%2BHgk4ifXf0Fxe38gUTu2Mn63JAIgKPzKvrnMPlMPaPM2rSAqUdFDjgjJF9c3bN1S5IxMUBcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzh60AP4wM02xnSZircA%2BuNSvLB%2BmoH0RprCbZl71SwAQ5om1sLC%2BcniaNkP2HrESJmPUbXGmuAlqKG6ewnbFYGcQUuONJTPk5Ynz6rUg5vkHayHN1KDYYiZiCiMdrFRIttLqO7cSuEWv1OIvx7UhPn0IAec5owd3KaEPb1soEOGKlTAXFu0AKUcRd5l1vBOXGcsQRjfjhlLE7YDaJTbQBl2uEzV15at4iYc5S47WqJn0NgrbEFIg9Z0PSiCBIc9b65t6d8uR8B9tNL8agOpPhLmjVnv1fsQUiFJovUe97pcy4tpmmM066Lc61x47VDmiv2QXJeeEF5nVSbmePTgujcQCPJfw9%2FrBO1OJpqyviy%2B%2FweaH5eQbqjP3d3peEGpjOBOjcENvC6k4NXc2XJPQ9YjG4XXnlb1w%2B5DNsoBGX6qyUvsP%2FJ398SWlbHPXLyFSE08%2BVzDX6OXRpnGhVNzqLPgo99HELCLyDt1s9wi1sHbtf2dYeYza4Bsd3Vd9OSLKsboju37GeygTOHxYdmyH93kMjs%2BiGLj2gM1XcpdU3VgAEx0aMpXGloO1ses%2BZFV%2BfWa%2Bssy81Z4WcIGuwEoV4JI%2FF58LPd1DDaKoq7mUR5GYD5iuAs43gePjtcJApyCtlz6ywM9kcowEgtMLrR%2FcIGOqUB3OxwUewT%2FvTPTXI6n%2FpQA3QIcDCjn3Ef4Gx4RPCjbjRPy2eVU9P1bZ0MgmodH%2BAQO%2FDTZBAoPUbXA4o9Ap%2FyILR22Fq9GB1gMZr5qLaki82KWdVm3u2A%2Bm9XZehDGTsbptkyE3zmkRIoPNIfEJAflgXx351kqBVV9QspS26WB4DWBeBCvzKeR52Lr5CnTgnc9fGrrtqfr%2BLMEVVAH66%2FQTnIbrOA&X-Amz-Signature=193d5029a7287181cade70efa33cb780644a61eeacf77035a550a7b2d1d4bcbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV732YUP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm6OW0M%2B%2BGqB5QZGHb%2BHgk4ifXf0Fxe38gUTu2Mn63JAIgKPzKvrnMPlMPaPM2rSAqUdFDjgjJF9c3bN1S5IxMUBcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzh60AP4wM02xnSZircA%2BuNSvLB%2BmoH0RprCbZl71SwAQ5om1sLC%2BcniaNkP2HrESJmPUbXGmuAlqKG6ewnbFYGcQUuONJTPk5Ynz6rUg5vkHayHN1KDYYiZiCiMdrFRIttLqO7cSuEWv1OIvx7UhPn0IAec5owd3KaEPb1soEOGKlTAXFu0AKUcRd5l1vBOXGcsQRjfjhlLE7YDaJTbQBl2uEzV15at4iYc5S47WqJn0NgrbEFIg9Z0PSiCBIc9b65t6d8uR8B9tNL8agOpPhLmjVnv1fsQUiFJovUe97pcy4tpmmM066Lc61x47VDmiv2QXJeeEF5nVSbmePTgujcQCPJfw9%2FrBO1OJpqyviy%2B%2FweaH5eQbqjP3d3peEGpjOBOjcENvC6k4NXc2XJPQ9YjG4XXnlb1w%2B5DNsoBGX6qyUvsP%2FJ398SWlbHPXLyFSE08%2BVzDX6OXRpnGhVNzqLPgo99HELCLyDt1s9wi1sHbtf2dYeYza4Bsd3Vd9OSLKsboju37GeygTOHxYdmyH93kMjs%2BiGLj2gM1XcpdU3VgAEx0aMpXGloO1ses%2BZFV%2BfWa%2Bssy81Z4WcIGuwEoV4JI%2FF58LPd1DDaKoq7mUR5GYD5iuAs43gePjtcJApyCtlz6ywM9kcowEgtMLrR%2FcIGOqUB3OxwUewT%2FvTPTXI6n%2FpQA3QIcDCjn3Ef4Gx4RPCjbjRPy2eVU9P1bZ0MgmodH%2BAQO%2FDTZBAoPUbXA4o9Ap%2FyILR22Fq9GB1gMZr5qLaki82KWdVm3u2A%2Bm9XZehDGTsbptkyE3zmkRIoPNIfEJAflgXx351kqBVV9QspS26WB4DWBeBCvzKeR52Lr5CnTgnc9fGrrtqfr%2BLMEVVAH66%2FQTnIbrOA&X-Amz-Signature=3e8bb4b1d3701fd79ab1a498f7a18e960bd51e266ddc55232ab6df62cfca3dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV732YUP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm6OW0M%2B%2BGqB5QZGHb%2BHgk4ifXf0Fxe38gUTu2Mn63JAIgKPzKvrnMPlMPaPM2rSAqUdFDjgjJF9c3bN1S5IxMUBcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzh60AP4wM02xnSZircA%2BuNSvLB%2BmoH0RprCbZl71SwAQ5om1sLC%2BcniaNkP2HrESJmPUbXGmuAlqKG6ewnbFYGcQUuONJTPk5Ynz6rUg5vkHayHN1KDYYiZiCiMdrFRIttLqO7cSuEWv1OIvx7UhPn0IAec5owd3KaEPb1soEOGKlTAXFu0AKUcRd5l1vBOXGcsQRjfjhlLE7YDaJTbQBl2uEzV15at4iYc5S47WqJn0NgrbEFIg9Z0PSiCBIc9b65t6d8uR8B9tNL8agOpPhLmjVnv1fsQUiFJovUe97pcy4tpmmM066Lc61x47VDmiv2QXJeeEF5nVSbmePTgujcQCPJfw9%2FrBO1OJpqyviy%2B%2FweaH5eQbqjP3d3peEGpjOBOjcENvC6k4NXc2XJPQ9YjG4XXnlb1w%2B5DNsoBGX6qyUvsP%2FJ398SWlbHPXLyFSE08%2BVzDX6OXRpnGhVNzqLPgo99HELCLyDt1s9wi1sHbtf2dYeYza4Bsd3Vd9OSLKsboju37GeygTOHxYdmyH93kMjs%2BiGLj2gM1XcpdU3VgAEx0aMpXGloO1ses%2BZFV%2BfWa%2Bssy81Z4WcIGuwEoV4JI%2FF58LPd1DDaKoq7mUR5GYD5iuAs43gePjtcJApyCtlz6ywM9kcowEgtMLrR%2FcIGOqUB3OxwUewT%2FvTPTXI6n%2FpQA3QIcDCjn3Ef4Gx4RPCjbjRPy2eVU9P1bZ0MgmodH%2BAQO%2FDTZBAoPUbXA4o9Ap%2FyILR22Fq9GB1gMZr5qLaki82KWdVm3u2A%2Bm9XZehDGTsbptkyE3zmkRIoPNIfEJAflgXx351kqBVV9QspS26WB4DWBeBCvzKeR52Lr5CnTgnc9fGrrtqfr%2BLMEVVAH66%2FQTnIbrOA&X-Amz-Signature=3c10bcd12fccf5e0da8ed3769749aa892694d920bfea706f90e7bccc071d7642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV732YUP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm6OW0M%2B%2BGqB5QZGHb%2BHgk4ifXf0Fxe38gUTu2Mn63JAIgKPzKvrnMPlMPaPM2rSAqUdFDjgjJF9c3bN1S5IxMUBcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzh60AP4wM02xnSZircA%2BuNSvLB%2BmoH0RprCbZl71SwAQ5om1sLC%2BcniaNkP2HrESJmPUbXGmuAlqKG6ewnbFYGcQUuONJTPk5Ynz6rUg5vkHayHN1KDYYiZiCiMdrFRIttLqO7cSuEWv1OIvx7UhPn0IAec5owd3KaEPb1soEOGKlTAXFu0AKUcRd5l1vBOXGcsQRjfjhlLE7YDaJTbQBl2uEzV15at4iYc5S47WqJn0NgrbEFIg9Z0PSiCBIc9b65t6d8uR8B9tNL8agOpPhLmjVnv1fsQUiFJovUe97pcy4tpmmM066Lc61x47VDmiv2QXJeeEF5nVSbmePTgujcQCPJfw9%2FrBO1OJpqyviy%2B%2FweaH5eQbqjP3d3peEGpjOBOjcENvC6k4NXc2XJPQ9YjG4XXnlb1w%2B5DNsoBGX6qyUvsP%2FJ398SWlbHPXLyFSE08%2BVzDX6OXRpnGhVNzqLPgo99HELCLyDt1s9wi1sHbtf2dYeYza4Bsd3Vd9OSLKsboju37GeygTOHxYdmyH93kMjs%2BiGLj2gM1XcpdU3VgAEx0aMpXGloO1ses%2BZFV%2BfWa%2Bssy81Z4WcIGuwEoV4JI%2FF58LPd1DDaKoq7mUR5GYD5iuAs43gePjtcJApyCtlz6ywM9kcowEgtMLrR%2FcIGOqUB3OxwUewT%2FvTPTXI6n%2FpQA3QIcDCjn3Ef4Gx4RPCjbjRPy2eVU9P1bZ0MgmodH%2BAQO%2FDTZBAoPUbXA4o9Ap%2FyILR22Fq9GB1gMZr5qLaki82KWdVm3u2A%2Bm9XZehDGTsbptkyE3zmkRIoPNIfEJAflgXx351kqBVV9QspS26WB4DWBeBCvzKeR52Lr5CnTgnc9fGrrtqfr%2BLMEVVAH66%2FQTnIbrOA&X-Amz-Signature=02b02a30d93b689c710102733a581c591f9175fef253b761e31ed95f43d5888a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV732YUP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm6OW0M%2B%2BGqB5QZGHb%2BHgk4ifXf0Fxe38gUTu2Mn63JAIgKPzKvrnMPlMPaPM2rSAqUdFDjgjJF9c3bN1S5IxMUBcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzh60AP4wM02xnSZircA%2BuNSvLB%2BmoH0RprCbZl71SwAQ5om1sLC%2BcniaNkP2HrESJmPUbXGmuAlqKG6ewnbFYGcQUuONJTPk5Ynz6rUg5vkHayHN1KDYYiZiCiMdrFRIttLqO7cSuEWv1OIvx7UhPn0IAec5owd3KaEPb1soEOGKlTAXFu0AKUcRd5l1vBOXGcsQRjfjhlLE7YDaJTbQBl2uEzV15at4iYc5S47WqJn0NgrbEFIg9Z0PSiCBIc9b65t6d8uR8B9tNL8agOpPhLmjVnv1fsQUiFJovUe97pcy4tpmmM066Lc61x47VDmiv2QXJeeEF5nVSbmePTgujcQCPJfw9%2FrBO1OJpqyviy%2B%2FweaH5eQbqjP3d3peEGpjOBOjcENvC6k4NXc2XJPQ9YjG4XXnlb1w%2B5DNsoBGX6qyUvsP%2FJ398SWlbHPXLyFSE08%2BVzDX6OXRpnGhVNzqLPgo99HELCLyDt1s9wi1sHbtf2dYeYza4Bsd3Vd9OSLKsboju37GeygTOHxYdmyH93kMjs%2BiGLj2gM1XcpdU3VgAEx0aMpXGloO1ses%2BZFV%2BfWa%2Bssy81Z4WcIGuwEoV4JI%2FF58LPd1DDaKoq7mUR5GYD5iuAs43gePjtcJApyCtlz6ywM9kcowEgtMLrR%2FcIGOqUB3OxwUewT%2FvTPTXI6n%2FpQA3QIcDCjn3Ef4Gx4RPCjbjRPy2eVU9P1bZ0MgmodH%2BAQO%2FDTZBAoPUbXA4o9Ap%2FyILR22Fq9GB1gMZr5qLaki82KWdVm3u2A%2Bm9XZehDGTsbptkyE3zmkRIoPNIfEJAflgXx351kqBVV9QspS26WB4DWBeBCvzKeR52Lr5CnTgnc9fGrrtqfr%2BLMEVVAH66%2FQTnIbrOA&X-Amz-Signature=fbe4fe05b9c436e8037a5189734cbecfc8cfcedbe74ade22e524767e7f246be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV732YUP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm6OW0M%2B%2BGqB5QZGHb%2BHgk4ifXf0Fxe38gUTu2Mn63JAIgKPzKvrnMPlMPaPM2rSAqUdFDjgjJF9c3bN1S5IxMUBcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzh60AP4wM02xnSZircA%2BuNSvLB%2BmoH0RprCbZl71SwAQ5om1sLC%2BcniaNkP2HrESJmPUbXGmuAlqKG6ewnbFYGcQUuONJTPk5Ynz6rUg5vkHayHN1KDYYiZiCiMdrFRIttLqO7cSuEWv1OIvx7UhPn0IAec5owd3KaEPb1soEOGKlTAXFu0AKUcRd5l1vBOXGcsQRjfjhlLE7YDaJTbQBl2uEzV15at4iYc5S47WqJn0NgrbEFIg9Z0PSiCBIc9b65t6d8uR8B9tNL8agOpPhLmjVnv1fsQUiFJovUe97pcy4tpmmM066Lc61x47VDmiv2QXJeeEF5nVSbmePTgujcQCPJfw9%2FrBO1OJpqyviy%2B%2FweaH5eQbqjP3d3peEGpjOBOjcENvC6k4NXc2XJPQ9YjG4XXnlb1w%2B5DNsoBGX6qyUvsP%2FJ398SWlbHPXLyFSE08%2BVzDX6OXRpnGhVNzqLPgo99HELCLyDt1s9wi1sHbtf2dYeYza4Bsd3Vd9OSLKsboju37GeygTOHxYdmyH93kMjs%2BiGLj2gM1XcpdU3VgAEx0aMpXGloO1ses%2BZFV%2BfWa%2Bssy81Z4WcIGuwEoV4JI%2FF58LPd1DDaKoq7mUR5GYD5iuAs43gePjtcJApyCtlz6ywM9kcowEgtMLrR%2FcIGOqUB3OxwUewT%2FvTPTXI6n%2FpQA3QIcDCjn3Ef4Gx4RPCjbjRPy2eVU9P1bZ0MgmodH%2BAQO%2FDTZBAoPUbXA4o9Ap%2FyILR22Fq9GB1gMZr5qLaki82KWdVm3u2A%2Bm9XZehDGTsbptkyE3zmkRIoPNIfEJAflgXx351kqBVV9QspS26WB4DWBeBCvzKeR52Lr5CnTgnc9fGrrtqfr%2BLMEVVAH66%2FQTnIbrOA&X-Amz-Signature=6a41bd3de9bdcd17039ab65bfbd7f205c01145fa2cf349170b48973b69765942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV732YUP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm6OW0M%2B%2BGqB5QZGHb%2BHgk4ifXf0Fxe38gUTu2Mn63JAIgKPzKvrnMPlMPaPM2rSAqUdFDjgjJF9c3bN1S5IxMUBcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzh60AP4wM02xnSZircA%2BuNSvLB%2BmoH0RprCbZl71SwAQ5om1sLC%2BcniaNkP2HrESJmPUbXGmuAlqKG6ewnbFYGcQUuONJTPk5Ynz6rUg5vkHayHN1KDYYiZiCiMdrFRIttLqO7cSuEWv1OIvx7UhPn0IAec5owd3KaEPb1soEOGKlTAXFu0AKUcRd5l1vBOXGcsQRjfjhlLE7YDaJTbQBl2uEzV15at4iYc5S47WqJn0NgrbEFIg9Z0PSiCBIc9b65t6d8uR8B9tNL8agOpPhLmjVnv1fsQUiFJovUe97pcy4tpmmM066Lc61x47VDmiv2QXJeeEF5nVSbmePTgujcQCPJfw9%2FrBO1OJpqyviy%2B%2FweaH5eQbqjP3d3peEGpjOBOjcENvC6k4NXc2XJPQ9YjG4XXnlb1w%2B5DNsoBGX6qyUvsP%2FJ398SWlbHPXLyFSE08%2BVzDX6OXRpnGhVNzqLPgo99HELCLyDt1s9wi1sHbtf2dYeYza4Bsd3Vd9OSLKsboju37GeygTOHxYdmyH93kMjs%2BiGLj2gM1XcpdU3VgAEx0aMpXGloO1ses%2BZFV%2BfWa%2Bssy81Z4WcIGuwEoV4JI%2FF58LPd1DDaKoq7mUR5GYD5iuAs43gePjtcJApyCtlz6ywM9kcowEgtMLrR%2FcIGOqUB3OxwUewT%2FvTPTXI6n%2FpQA3QIcDCjn3Ef4Gx4RPCjbjRPy2eVU9P1bZ0MgmodH%2BAQO%2FDTZBAoPUbXA4o9Ap%2FyILR22Fq9GB1gMZr5qLaki82KWdVm3u2A%2Bm9XZehDGTsbptkyE3zmkRIoPNIfEJAflgXx351kqBVV9QspS26WB4DWBeBCvzKeR52Lr5CnTgnc9fGrrtqfr%2BLMEVVAH66%2FQTnIbrOA&X-Amz-Signature=0217303e63aa2e0a09516dbf5283b011c48dd2aecd678910debf5ee14c2fc9c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
