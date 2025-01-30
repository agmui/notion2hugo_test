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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SSNDUH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXaRbXpdv2npUN8NKJaMcFPg8Ikwoenf2Ub6naZvvrNwIgRl8Jp2r0f2PtsL3NjgOzt18hPR7Bk9kntBrNq7HzWzIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzFX5MLhmbb2p0S4CrcA0sAhW%2BU0iLGqLvfHJDt%2FWlOnt2F5u1IspPyfdh70nYl5e7PJvkVB4BQ0Kj0Q0EP2WnIcNWuz85WTlC4FnMI9tBP4ekbuJeiS%2BSo0%2F%2BvSgYCbNJOmX5MBOuBhyonJzxzVwYF0IzMXCPvnARkKcGF%2B14fewXGF%2FMD6kDG4Y5I%2BwXYqR%2FGjPaVSLvCC23r%2FfwQNxo%2BjJJtFRT%2FEgD4bRn1SmnUQ6MESnjGZGwXV%2FkP2jfUX7tZc5GMujr59w%2BiilJCopx1IylcSjrflLiBYLZE57jJQFBJO4C5IcextVsdJTkT6Pn1eSh9q0P0bHNAPBvmxcKBxxuqa0a8ppEGdy%2Fwjbm8p3KVkV3Lnxvtzh6OiJS6dOvHF4P1ETGDXrp7PFRtle8m9ssw4Zm09vQLQEp%2BgrWEK4UYFL2u4IwNJFTKsgs6trFPwjVzWI2HRLAdbZ1%2B7qqB6aWSKyfOHPPn4ou0nxwPKpSeMle8T7sfSjsbyLFq29qL6DYrW2f9hbSWJ%2BBreDtznXUU5WPc0a%2FTYAUBhBhAgccViOcJq7pnW4hJ%2B4ndmcHfsm1kCHpzoTackCR%2B8xr52Evb8VCj88Y8OBjHoihZChFdhYmgaHzUy4JGyJT9z%2F0Kw8Bj8N07FCllMLKk7LwGOqUBgBOPQbDDnHlq3zw%2BxGk9RHXZbDtivcMdIsX3svVMX0uiIkaOKOdMPaV0lHPjDoqfrPvxXkSvSgZdn8iAEsvfRVOXM3%2FTJYCPrnUJApMTlPy5g0FGbpld3X7bqN%2F6u1t0nTvqja8TO8Wu84f%2BsDuNglWsOcwC7WMkS0FAN4Iu1MLsiPONpeGMIYbNeBxQ1Al4VVP5%2FUM8StK%2Bg4zRehiXKilexpIO&X-Amz-Signature=2656213bea95635b3cb7da1dd0aadec996ebe63bdf476768d3f6eb57941700b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SSNDUH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXaRbXpdv2npUN8NKJaMcFPg8Ikwoenf2Ub6naZvvrNwIgRl8Jp2r0f2PtsL3NjgOzt18hPR7Bk9kntBrNq7HzWzIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzFX5MLhmbb2p0S4CrcA0sAhW%2BU0iLGqLvfHJDt%2FWlOnt2F5u1IspPyfdh70nYl5e7PJvkVB4BQ0Kj0Q0EP2WnIcNWuz85WTlC4FnMI9tBP4ekbuJeiS%2BSo0%2F%2BvSgYCbNJOmX5MBOuBhyonJzxzVwYF0IzMXCPvnARkKcGF%2B14fewXGF%2FMD6kDG4Y5I%2BwXYqR%2FGjPaVSLvCC23r%2FfwQNxo%2BjJJtFRT%2FEgD4bRn1SmnUQ6MESnjGZGwXV%2FkP2jfUX7tZc5GMujr59w%2BiilJCopx1IylcSjrflLiBYLZE57jJQFBJO4C5IcextVsdJTkT6Pn1eSh9q0P0bHNAPBvmxcKBxxuqa0a8ppEGdy%2Fwjbm8p3KVkV3Lnxvtzh6OiJS6dOvHF4P1ETGDXrp7PFRtle8m9ssw4Zm09vQLQEp%2BgrWEK4UYFL2u4IwNJFTKsgs6trFPwjVzWI2HRLAdbZ1%2B7qqB6aWSKyfOHPPn4ou0nxwPKpSeMle8T7sfSjsbyLFq29qL6DYrW2f9hbSWJ%2BBreDtznXUU5WPc0a%2FTYAUBhBhAgccViOcJq7pnW4hJ%2B4ndmcHfsm1kCHpzoTackCR%2B8xr52Evb8VCj88Y8OBjHoihZChFdhYmgaHzUy4JGyJT9z%2F0Kw8Bj8N07FCllMLKk7LwGOqUBgBOPQbDDnHlq3zw%2BxGk9RHXZbDtivcMdIsX3svVMX0uiIkaOKOdMPaV0lHPjDoqfrPvxXkSvSgZdn8iAEsvfRVOXM3%2FTJYCPrnUJApMTlPy5g0FGbpld3X7bqN%2F6u1t0nTvqja8TO8Wu84f%2BsDuNglWsOcwC7WMkS0FAN4Iu1MLsiPONpeGMIYbNeBxQ1Al4VVP5%2FUM8StK%2Bg4zRehiXKilexpIO&X-Amz-Signature=784ddecc3ba19c6cc9a22f9cc45fac2426c8e9778af459b4cbc3b542124820fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SSNDUH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXaRbXpdv2npUN8NKJaMcFPg8Ikwoenf2Ub6naZvvrNwIgRl8Jp2r0f2PtsL3NjgOzt18hPR7Bk9kntBrNq7HzWzIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzFX5MLhmbb2p0S4CrcA0sAhW%2BU0iLGqLvfHJDt%2FWlOnt2F5u1IspPyfdh70nYl5e7PJvkVB4BQ0Kj0Q0EP2WnIcNWuz85WTlC4FnMI9tBP4ekbuJeiS%2BSo0%2F%2BvSgYCbNJOmX5MBOuBhyonJzxzVwYF0IzMXCPvnARkKcGF%2B14fewXGF%2FMD6kDG4Y5I%2BwXYqR%2FGjPaVSLvCC23r%2FfwQNxo%2BjJJtFRT%2FEgD4bRn1SmnUQ6MESnjGZGwXV%2FkP2jfUX7tZc5GMujr59w%2BiilJCopx1IylcSjrflLiBYLZE57jJQFBJO4C5IcextVsdJTkT6Pn1eSh9q0P0bHNAPBvmxcKBxxuqa0a8ppEGdy%2Fwjbm8p3KVkV3Lnxvtzh6OiJS6dOvHF4P1ETGDXrp7PFRtle8m9ssw4Zm09vQLQEp%2BgrWEK4UYFL2u4IwNJFTKsgs6trFPwjVzWI2HRLAdbZ1%2B7qqB6aWSKyfOHPPn4ou0nxwPKpSeMle8T7sfSjsbyLFq29qL6DYrW2f9hbSWJ%2BBreDtznXUU5WPc0a%2FTYAUBhBhAgccViOcJq7pnW4hJ%2B4ndmcHfsm1kCHpzoTackCR%2B8xr52Evb8VCj88Y8OBjHoihZChFdhYmgaHzUy4JGyJT9z%2F0Kw8Bj8N07FCllMLKk7LwGOqUBgBOPQbDDnHlq3zw%2BxGk9RHXZbDtivcMdIsX3svVMX0uiIkaOKOdMPaV0lHPjDoqfrPvxXkSvSgZdn8iAEsvfRVOXM3%2FTJYCPrnUJApMTlPy5g0FGbpld3X7bqN%2F6u1t0nTvqja8TO8Wu84f%2BsDuNglWsOcwC7WMkS0FAN4Iu1MLsiPONpeGMIYbNeBxQ1Al4VVP5%2FUM8StK%2Bg4zRehiXKilexpIO&X-Amz-Signature=b261a982a9436dcb70e43cc41391f8f7c98715a127c8bf91e8f9c443e5b9a7e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SSNDUH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXaRbXpdv2npUN8NKJaMcFPg8Ikwoenf2Ub6naZvvrNwIgRl8Jp2r0f2PtsL3NjgOzt18hPR7Bk9kntBrNq7HzWzIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzFX5MLhmbb2p0S4CrcA0sAhW%2BU0iLGqLvfHJDt%2FWlOnt2F5u1IspPyfdh70nYl5e7PJvkVB4BQ0Kj0Q0EP2WnIcNWuz85WTlC4FnMI9tBP4ekbuJeiS%2BSo0%2F%2BvSgYCbNJOmX5MBOuBhyonJzxzVwYF0IzMXCPvnARkKcGF%2B14fewXGF%2FMD6kDG4Y5I%2BwXYqR%2FGjPaVSLvCC23r%2FfwQNxo%2BjJJtFRT%2FEgD4bRn1SmnUQ6MESnjGZGwXV%2FkP2jfUX7tZc5GMujr59w%2BiilJCopx1IylcSjrflLiBYLZE57jJQFBJO4C5IcextVsdJTkT6Pn1eSh9q0P0bHNAPBvmxcKBxxuqa0a8ppEGdy%2Fwjbm8p3KVkV3Lnxvtzh6OiJS6dOvHF4P1ETGDXrp7PFRtle8m9ssw4Zm09vQLQEp%2BgrWEK4UYFL2u4IwNJFTKsgs6trFPwjVzWI2HRLAdbZ1%2B7qqB6aWSKyfOHPPn4ou0nxwPKpSeMle8T7sfSjsbyLFq29qL6DYrW2f9hbSWJ%2BBreDtznXUU5WPc0a%2FTYAUBhBhAgccViOcJq7pnW4hJ%2B4ndmcHfsm1kCHpzoTackCR%2B8xr52Evb8VCj88Y8OBjHoihZChFdhYmgaHzUy4JGyJT9z%2F0Kw8Bj8N07FCllMLKk7LwGOqUBgBOPQbDDnHlq3zw%2BxGk9RHXZbDtivcMdIsX3svVMX0uiIkaOKOdMPaV0lHPjDoqfrPvxXkSvSgZdn8iAEsvfRVOXM3%2FTJYCPrnUJApMTlPy5g0FGbpld3X7bqN%2F6u1t0nTvqja8TO8Wu84f%2BsDuNglWsOcwC7WMkS0FAN4Iu1MLsiPONpeGMIYbNeBxQ1Al4VVP5%2FUM8StK%2Bg4zRehiXKilexpIO&X-Amz-Signature=3a082202f79dab5e84d3bb681033ea147801bc304648844bc2b3cd2885f7c6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SSNDUH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXaRbXpdv2npUN8NKJaMcFPg8Ikwoenf2Ub6naZvvrNwIgRl8Jp2r0f2PtsL3NjgOzt18hPR7Bk9kntBrNq7HzWzIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzFX5MLhmbb2p0S4CrcA0sAhW%2BU0iLGqLvfHJDt%2FWlOnt2F5u1IspPyfdh70nYl5e7PJvkVB4BQ0Kj0Q0EP2WnIcNWuz85WTlC4FnMI9tBP4ekbuJeiS%2BSo0%2F%2BvSgYCbNJOmX5MBOuBhyonJzxzVwYF0IzMXCPvnARkKcGF%2B14fewXGF%2FMD6kDG4Y5I%2BwXYqR%2FGjPaVSLvCC23r%2FfwQNxo%2BjJJtFRT%2FEgD4bRn1SmnUQ6MESnjGZGwXV%2FkP2jfUX7tZc5GMujr59w%2BiilJCopx1IylcSjrflLiBYLZE57jJQFBJO4C5IcextVsdJTkT6Pn1eSh9q0P0bHNAPBvmxcKBxxuqa0a8ppEGdy%2Fwjbm8p3KVkV3Lnxvtzh6OiJS6dOvHF4P1ETGDXrp7PFRtle8m9ssw4Zm09vQLQEp%2BgrWEK4UYFL2u4IwNJFTKsgs6trFPwjVzWI2HRLAdbZ1%2B7qqB6aWSKyfOHPPn4ou0nxwPKpSeMle8T7sfSjsbyLFq29qL6DYrW2f9hbSWJ%2BBreDtznXUU5WPc0a%2FTYAUBhBhAgccViOcJq7pnW4hJ%2B4ndmcHfsm1kCHpzoTackCR%2B8xr52Evb8VCj88Y8OBjHoihZChFdhYmgaHzUy4JGyJT9z%2F0Kw8Bj8N07FCllMLKk7LwGOqUBgBOPQbDDnHlq3zw%2BxGk9RHXZbDtivcMdIsX3svVMX0uiIkaOKOdMPaV0lHPjDoqfrPvxXkSvSgZdn8iAEsvfRVOXM3%2FTJYCPrnUJApMTlPy5g0FGbpld3X7bqN%2F6u1t0nTvqja8TO8Wu84f%2BsDuNglWsOcwC7WMkS0FAN4Iu1MLsiPONpeGMIYbNeBxQ1Al4VVP5%2FUM8StK%2Bg4zRehiXKilexpIO&X-Amz-Signature=c06b42d8fc1e0988702671ac9b66b82c2846950a47d71ec436ee8cb46fc821fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SSNDUH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXaRbXpdv2npUN8NKJaMcFPg8Ikwoenf2Ub6naZvvrNwIgRl8Jp2r0f2PtsL3NjgOzt18hPR7Bk9kntBrNq7HzWzIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzFX5MLhmbb2p0S4CrcA0sAhW%2BU0iLGqLvfHJDt%2FWlOnt2F5u1IspPyfdh70nYl5e7PJvkVB4BQ0Kj0Q0EP2WnIcNWuz85WTlC4FnMI9tBP4ekbuJeiS%2BSo0%2F%2BvSgYCbNJOmX5MBOuBhyonJzxzVwYF0IzMXCPvnARkKcGF%2B14fewXGF%2FMD6kDG4Y5I%2BwXYqR%2FGjPaVSLvCC23r%2FfwQNxo%2BjJJtFRT%2FEgD4bRn1SmnUQ6MESnjGZGwXV%2FkP2jfUX7tZc5GMujr59w%2BiilJCopx1IylcSjrflLiBYLZE57jJQFBJO4C5IcextVsdJTkT6Pn1eSh9q0P0bHNAPBvmxcKBxxuqa0a8ppEGdy%2Fwjbm8p3KVkV3Lnxvtzh6OiJS6dOvHF4P1ETGDXrp7PFRtle8m9ssw4Zm09vQLQEp%2BgrWEK4UYFL2u4IwNJFTKsgs6trFPwjVzWI2HRLAdbZ1%2B7qqB6aWSKyfOHPPn4ou0nxwPKpSeMle8T7sfSjsbyLFq29qL6DYrW2f9hbSWJ%2BBreDtznXUU5WPc0a%2FTYAUBhBhAgccViOcJq7pnW4hJ%2B4ndmcHfsm1kCHpzoTackCR%2B8xr52Evb8VCj88Y8OBjHoihZChFdhYmgaHzUy4JGyJT9z%2F0Kw8Bj8N07FCllMLKk7LwGOqUBgBOPQbDDnHlq3zw%2BxGk9RHXZbDtivcMdIsX3svVMX0uiIkaOKOdMPaV0lHPjDoqfrPvxXkSvSgZdn8iAEsvfRVOXM3%2FTJYCPrnUJApMTlPy5g0FGbpld3X7bqN%2F6u1t0nTvqja8TO8Wu84f%2BsDuNglWsOcwC7WMkS0FAN4Iu1MLsiPONpeGMIYbNeBxQ1Al4VVP5%2FUM8StK%2Bg4zRehiXKilexpIO&X-Amz-Signature=2da8ae1c4b33f9d2e8ddceb95d4740e59ffd44f91972436e501ecec2d2a2ebe1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7SSNDUH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXaRbXpdv2npUN8NKJaMcFPg8Ikwoenf2Ub6naZvvrNwIgRl8Jp2r0f2PtsL3NjgOzt18hPR7Bk9kntBrNq7HzWzIqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzFX5MLhmbb2p0S4CrcA0sAhW%2BU0iLGqLvfHJDt%2FWlOnt2F5u1IspPyfdh70nYl5e7PJvkVB4BQ0Kj0Q0EP2WnIcNWuz85WTlC4FnMI9tBP4ekbuJeiS%2BSo0%2F%2BvSgYCbNJOmX5MBOuBhyonJzxzVwYF0IzMXCPvnARkKcGF%2B14fewXGF%2FMD6kDG4Y5I%2BwXYqR%2FGjPaVSLvCC23r%2FfwQNxo%2BjJJtFRT%2FEgD4bRn1SmnUQ6MESnjGZGwXV%2FkP2jfUX7tZc5GMujr59w%2BiilJCopx1IylcSjrflLiBYLZE57jJQFBJO4C5IcextVsdJTkT6Pn1eSh9q0P0bHNAPBvmxcKBxxuqa0a8ppEGdy%2Fwjbm8p3KVkV3Lnxvtzh6OiJS6dOvHF4P1ETGDXrp7PFRtle8m9ssw4Zm09vQLQEp%2BgrWEK4UYFL2u4IwNJFTKsgs6trFPwjVzWI2HRLAdbZ1%2B7qqB6aWSKyfOHPPn4ou0nxwPKpSeMle8T7sfSjsbyLFq29qL6DYrW2f9hbSWJ%2BBreDtznXUU5WPc0a%2FTYAUBhBhAgccViOcJq7pnW4hJ%2B4ndmcHfsm1kCHpzoTackCR%2B8xr52Evb8VCj88Y8OBjHoihZChFdhYmgaHzUy4JGyJT9z%2F0Kw8Bj8N07FCllMLKk7LwGOqUBgBOPQbDDnHlq3zw%2BxGk9RHXZbDtivcMdIsX3svVMX0uiIkaOKOdMPaV0lHPjDoqfrPvxXkSvSgZdn8iAEsvfRVOXM3%2FTJYCPrnUJApMTlPy5g0FGbpld3X7bqN%2F6u1t0nTvqja8TO8Wu84f%2BsDuNglWsOcwC7WMkS0FAN4Iu1MLsiPONpeGMIYbNeBxQ1Al4VVP5%2FUM8StK%2Bg4zRehiXKilexpIO&X-Amz-Signature=407a9b458611f91044a3255c2a3dde1fc9137eccf13dec5822b9eddc0816d09c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
