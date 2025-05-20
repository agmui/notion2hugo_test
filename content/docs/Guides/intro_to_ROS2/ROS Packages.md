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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFFQQKF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChfekC3NXj7H6da01WVlRIa2y%2FgqnChVSYXIZ3JLt86wIgWnu%2BnWZrIQWs9uoXCpDixzdScNgr75YZlfmmgVKUgDQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETaB%2F%2BvNtE%2Fqg2YVyrcAwiWAb0Y%2FdqvsXvQ%2FlfLVT3GhrkVLlXKnM6AXifLmp1aZ1eXH%2B4Y9LcoMdMt4L58BHN98O268EJVipPH41QIqr885G5dzEvM5nm36HfQNG901BgkizXcbqYoI%2FcmtQoyGPCaVIDA%2BmsaQzIsdV%2FiyotV1BEapnVfnVTWQdge%2FfBRXOp2X89GUbTa6kmjpqrRPEY75SZkg3esh0WwSNdz0mFb%2FTpAtMt%2Bsz5cXzVXuowZx%2BysUM8m4O0azpZyBQYTr%2FChWvNM45j3ESmaycLh1FsGHxI4j8AOzYtnXGn8KptZJ6HSo4t0SSWVPBR31nXqgrmmQtsaciXEgSZXAAwRCvf%2BPWfwtZrvXvYZKHiI6pktARl7qHHLwXmFjelZsQIW48SoqpFMPWyDMVITvxM5U%2BAAYCAliDsGSdZ8wDN%2F80AHAUG6pF9ycCfpK67RhdmjOs%2BT9AD7z%2F4hP0FcWSlPu5ss%2FNU9Aki4nRGPmJqFzFnSwnpwj5OhmzOpiS0e%2BgAu1FZnRv5JEul%2BMC8OQhazbaHOfXxUDOseY5M2u8QXBvdP%2BQZobCPS1h4RTDaTaaEOI%2B6Sx%2F8PFaJ%2BdVm33e9JaNOIGbH%2B%2BWCMF2ow2H21pM5etGWyNTH1iBOVd7piMJiTscEGOqUB%2F2PKcORLO%2BdCHxBxTSE%2FGJiTo3cVCcTygdIUesZH%2BBroRLBDU49Lg%2BtT2M6SSEDR%2F58wnNcDytksPJm3nxMqSlM7xhJ5%2BuIQlHL6xtArvN8a%2FeXjO99d7%2Fp9XpqlAjnDVRxJ6unZbKAk04%2BNYxbU28buzWpx7bDUuPbv2pR5pHeXlLn4r%2B8fSNVXmIUnc2iY11OIuRxAHAZTb9UoYsx0sBtd%2B25x&X-Amz-Signature=b9fde611f5b2db66bf9cd31cc7621eeaaf70e4ff4a58c53e47cb01bccc0e3868&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFFQQKF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChfekC3NXj7H6da01WVlRIa2y%2FgqnChVSYXIZ3JLt86wIgWnu%2BnWZrIQWs9uoXCpDixzdScNgr75YZlfmmgVKUgDQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETaB%2F%2BvNtE%2Fqg2YVyrcAwiWAb0Y%2FdqvsXvQ%2FlfLVT3GhrkVLlXKnM6AXifLmp1aZ1eXH%2B4Y9LcoMdMt4L58BHN98O268EJVipPH41QIqr885G5dzEvM5nm36HfQNG901BgkizXcbqYoI%2FcmtQoyGPCaVIDA%2BmsaQzIsdV%2FiyotV1BEapnVfnVTWQdge%2FfBRXOp2X89GUbTa6kmjpqrRPEY75SZkg3esh0WwSNdz0mFb%2FTpAtMt%2Bsz5cXzVXuowZx%2BysUM8m4O0azpZyBQYTr%2FChWvNM45j3ESmaycLh1FsGHxI4j8AOzYtnXGn8KptZJ6HSo4t0SSWVPBR31nXqgrmmQtsaciXEgSZXAAwRCvf%2BPWfwtZrvXvYZKHiI6pktARl7qHHLwXmFjelZsQIW48SoqpFMPWyDMVITvxM5U%2BAAYCAliDsGSdZ8wDN%2F80AHAUG6pF9ycCfpK67RhdmjOs%2BT9AD7z%2F4hP0FcWSlPu5ss%2FNU9Aki4nRGPmJqFzFnSwnpwj5OhmzOpiS0e%2BgAu1FZnRv5JEul%2BMC8OQhazbaHOfXxUDOseY5M2u8QXBvdP%2BQZobCPS1h4RTDaTaaEOI%2B6Sx%2F8PFaJ%2BdVm33e9JaNOIGbH%2B%2BWCMF2ow2H21pM5etGWyNTH1iBOVd7piMJiTscEGOqUB%2F2PKcORLO%2BdCHxBxTSE%2FGJiTo3cVCcTygdIUesZH%2BBroRLBDU49Lg%2BtT2M6SSEDR%2F58wnNcDytksPJm3nxMqSlM7xhJ5%2BuIQlHL6xtArvN8a%2FeXjO99d7%2Fp9XpqlAjnDVRxJ6unZbKAk04%2BNYxbU28buzWpx7bDUuPbv2pR5pHeXlLn4r%2B8fSNVXmIUnc2iY11OIuRxAHAZTb9UoYsx0sBtd%2B25x&X-Amz-Signature=87c5cbb12c692ec5039bb5ba267c005b9a9c772be61df2c5c9680fc4a6508a81&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFFQQKF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChfekC3NXj7H6da01WVlRIa2y%2FgqnChVSYXIZ3JLt86wIgWnu%2BnWZrIQWs9uoXCpDixzdScNgr75YZlfmmgVKUgDQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETaB%2F%2BvNtE%2Fqg2YVyrcAwiWAb0Y%2FdqvsXvQ%2FlfLVT3GhrkVLlXKnM6AXifLmp1aZ1eXH%2B4Y9LcoMdMt4L58BHN98O268EJVipPH41QIqr885G5dzEvM5nm36HfQNG901BgkizXcbqYoI%2FcmtQoyGPCaVIDA%2BmsaQzIsdV%2FiyotV1BEapnVfnVTWQdge%2FfBRXOp2X89GUbTa6kmjpqrRPEY75SZkg3esh0WwSNdz0mFb%2FTpAtMt%2Bsz5cXzVXuowZx%2BysUM8m4O0azpZyBQYTr%2FChWvNM45j3ESmaycLh1FsGHxI4j8AOzYtnXGn8KptZJ6HSo4t0SSWVPBR31nXqgrmmQtsaciXEgSZXAAwRCvf%2BPWfwtZrvXvYZKHiI6pktARl7qHHLwXmFjelZsQIW48SoqpFMPWyDMVITvxM5U%2BAAYCAliDsGSdZ8wDN%2F80AHAUG6pF9ycCfpK67RhdmjOs%2BT9AD7z%2F4hP0FcWSlPu5ss%2FNU9Aki4nRGPmJqFzFnSwnpwj5OhmzOpiS0e%2BgAu1FZnRv5JEul%2BMC8OQhazbaHOfXxUDOseY5M2u8QXBvdP%2BQZobCPS1h4RTDaTaaEOI%2B6Sx%2F8PFaJ%2BdVm33e9JaNOIGbH%2B%2BWCMF2ow2H21pM5etGWyNTH1iBOVd7piMJiTscEGOqUB%2F2PKcORLO%2BdCHxBxTSE%2FGJiTo3cVCcTygdIUesZH%2BBroRLBDU49Lg%2BtT2M6SSEDR%2F58wnNcDytksPJm3nxMqSlM7xhJ5%2BuIQlHL6xtArvN8a%2FeXjO99d7%2Fp9XpqlAjnDVRxJ6unZbKAk04%2BNYxbU28buzWpx7bDUuPbv2pR5pHeXlLn4r%2B8fSNVXmIUnc2iY11OIuRxAHAZTb9UoYsx0sBtd%2B25x&X-Amz-Signature=a6365d4d299fbe7b064bba5565b0064b48cea90ea469cf77a23d04c728538591&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFFQQKF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChfekC3NXj7H6da01WVlRIa2y%2FgqnChVSYXIZ3JLt86wIgWnu%2BnWZrIQWs9uoXCpDixzdScNgr75YZlfmmgVKUgDQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETaB%2F%2BvNtE%2Fqg2YVyrcAwiWAb0Y%2FdqvsXvQ%2FlfLVT3GhrkVLlXKnM6AXifLmp1aZ1eXH%2B4Y9LcoMdMt4L58BHN98O268EJVipPH41QIqr885G5dzEvM5nm36HfQNG901BgkizXcbqYoI%2FcmtQoyGPCaVIDA%2BmsaQzIsdV%2FiyotV1BEapnVfnVTWQdge%2FfBRXOp2X89GUbTa6kmjpqrRPEY75SZkg3esh0WwSNdz0mFb%2FTpAtMt%2Bsz5cXzVXuowZx%2BysUM8m4O0azpZyBQYTr%2FChWvNM45j3ESmaycLh1FsGHxI4j8AOzYtnXGn8KptZJ6HSo4t0SSWVPBR31nXqgrmmQtsaciXEgSZXAAwRCvf%2BPWfwtZrvXvYZKHiI6pktARl7qHHLwXmFjelZsQIW48SoqpFMPWyDMVITvxM5U%2BAAYCAliDsGSdZ8wDN%2F80AHAUG6pF9ycCfpK67RhdmjOs%2BT9AD7z%2F4hP0FcWSlPu5ss%2FNU9Aki4nRGPmJqFzFnSwnpwj5OhmzOpiS0e%2BgAu1FZnRv5JEul%2BMC8OQhazbaHOfXxUDOseY5M2u8QXBvdP%2BQZobCPS1h4RTDaTaaEOI%2B6Sx%2F8PFaJ%2BdVm33e9JaNOIGbH%2B%2BWCMF2ow2H21pM5etGWyNTH1iBOVd7piMJiTscEGOqUB%2F2PKcORLO%2BdCHxBxTSE%2FGJiTo3cVCcTygdIUesZH%2BBroRLBDU49Lg%2BtT2M6SSEDR%2F58wnNcDytksPJm3nxMqSlM7xhJ5%2BuIQlHL6xtArvN8a%2FeXjO99d7%2Fp9XpqlAjnDVRxJ6unZbKAk04%2BNYxbU28buzWpx7bDUuPbv2pR5pHeXlLn4r%2B8fSNVXmIUnc2iY11OIuRxAHAZTb9UoYsx0sBtd%2B25x&X-Amz-Signature=955e280ac9d5b58d54e1aa8bab594d369b0b19d9864e03692ad1156018bbbf58&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFFQQKF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChfekC3NXj7H6da01WVlRIa2y%2FgqnChVSYXIZ3JLt86wIgWnu%2BnWZrIQWs9uoXCpDixzdScNgr75YZlfmmgVKUgDQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETaB%2F%2BvNtE%2Fqg2YVyrcAwiWAb0Y%2FdqvsXvQ%2FlfLVT3GhrkVLlXKnM6AXifLmp1aZ1eXH%2B4Y9LcoMdMt4L58BHN98O268EJVipPH41QIqr885G5dzEvM5nm36HfQNG901BgkizXcbqYoI%2FcmtQoyGPCaVIDA%2BmsaQzIsdV%2FiyotV1BEapnVfnVTWQdge%2FfBRXOp2X89GUbTa6kmjpqrRPEY75SZkg3esh0WwSNdz0mFb%2FTpAtMt%2Bsz5cXzVXuowZx%2BysUM8m4O0azpZyBQYTr%2FChWvNM45j3ESmaycLh1FsGHxI4j8AOzYtnXGn8KptZJ6HSo4t0SSWVPBR31nXqgrmmQtsaciXEgSZXAAwRCvf%2BPWfwtZrvXvYZKHiI6pktARl7qHHLwXmFjelZsQIW48SoqpFMPWyDMVITvxM5U%2BAAYCAliDsGSdZ8wDN%2F80AHAUG6pF9ycCfpK67RhdmjOs%2BT9AD7z%2F4hP0FcWSlPu5ss%2FNU9Aki4nRGPmJqFzFnSwnpwj5OhmzOpiS0e%2BgAu1FZnRv5JEul%2BMC8OQhazbaHOfXxUDOseY5M2u8QXBvdP%2BQZobCPS1h4RTDaTaaEOI%2B6Sx%2F8PFaJ%2BdVm33e9JaNOIGbH%2B%2BWCMF2ow2H21pM5etGWyNTH1iBOVd7piMJiTscEGOqUB%2F2PKcORLO%2BdCHxBxTSE%2FGJiTo3cVCcTygdIUesZH%2BBroRLBDU49Lg%2BtT2M6SSEDR%2F58wnNcDytksPJm3nxMqSlM7xhJ5%2BuIQlHL6xtArvN8a%2FeXjO99d7%2Fp9XpqlAjnDVRxJ6unZbKAk04%2BNYxbU28buzWpx7bDUuPbv2pR5pHeXlLn4r%2B8fSNVXmIUnc2iY11OIuRxAHAZTb9UoYsx0sBtd%2B25x&X-Amz-Signature=2fd781b9f8701a22d4e8bdf871a3389ea221fad7ce5c330d63d88d725217473d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFFQQKF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChfekC3NXj7H6da01WVlRIa2y%2FgqnChVSYXIZ3JLt86wIgWnu%2BnWZrIQWs9uoXCpDixzdScNgr75YZlfmmgVKUgDQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETaB%2F%2BvNtE%2Fqg2YVyrcAwiWAb0Y%2FdqvsXvQ%2FlfLVT3GhrkVLlXKnM6AXifLmp1aZ1eXH%2B4Y9LcoMdMt4L58BHN98O268EJVipPH41QIqr885G5dzEvM5nm36HfQNG901BgkizXcbqYoI%2FcmtQoyGPCaVIDA%2BmsaQzIsdV%2FiyotV1BEapnVfnVTWQdge%2FfBRXOp2X89GUbTa6kmjpqrRPEY75SZkg3esh0WwSNdz0mFb%2FTpAtMt%2Bsz5cXzVXuowZx%2BysUM8m4O0azpZyBQYTr%2FChWvNM45j3ESmaycLh1FsGHxI4j8AOzYtnXGn8KptZJ6HSo4t0SSWVPBR31nXqgrmmQtsaciXEgSZXAAwRCvf%2BPWfwtZrvXvYZKHiI6pktARl7qHHLwXmFjelZsQIW48SoqpFMPWyDMVITvxM5U%2BAAYCAliDsGSdZ8wDN%2F80AHAUG6pF9ycCfpK67RhdmjOs%2BT9AD7z%2F4hP0FcWSlPu5ss%2FNU9Aki4nRGPmJqFzFnSwnpwj5OhmzOpiS0e%2BgAu1FZnRv5JEul%2BMC8OQhazbaHOfXxUDOseY5M2u8QXBvdP%2BQZobCPS1h4RTDaTaaEOI%2B6Sx%2F8PFaJ%2BdVm33e9JaNOIGbH%2B%2BWCMF2ow2H21pM5etGWyNTH1iBOVd7piMJiTscEGOqUB%2F2PKcORLO%2BdCHxBxTSE%2FGJiTo3cVCcTygdIUesZH%2BBroRLBDU49Lg%2BtT2M6SSEDR%2F58wnNcDytksPJm3nxMqSlM7xhJ5%2BuIQlHL6xtArvN8a%2FeXjO99d7%2Fp9XpqlAjnDVRxJ6unZbKAk04%2BNYxbU28buzWpx7bDUuPbv2pR5pHeXlLn4r%2B8fSNVXmIUnc2iY11OIuRxAHAZTb9UoYsx0sBtd%2B25x&X-Amz-Signature=2f6410ff521c09f8f8ab1450772d0b2a22118e4d0d8e9894a52b9abbaaa096b6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFFQQKF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChfekC3NXj7H6da01WVlRIa2y%2FgqnChVSYXIZ3JLt86wIgWnu%2BnWZrIQWs9uoXCpDixzdScNgr75YZlfmmgVKUgDQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETaB%2F%2BvNtE%2Fqg2YVyrcAwiWAb0Y%2FdqvsXvQ%2FlfLVT3GhrkVLlXKnM6AXifLmp1aZ1eXH%2B4Y9LcoMdMt4L58BHN98O268EJVipPH41QIqr885G5dzEvM5nm36HfQNG901BgkizXcbqYoI%2FcmtQoyGPCaVIDA%2BmsaQzIsdV%2FiyotV1BEapnVfnVTWQdge%2FfBRXOp2X89GUbTa6kmjpqrRPEY75SZkg3esh0WwSNdz0mFb%2FTpAtMt%2Bsz5cXzVXuowZx%2BysUM8m4O0azpZyBQYTr%2FChWvNM45j3ESmaycLh1FsGHxI4j8AOzYtnXGn8KptZJ6HSo4t0SSWVPBR31nXqgrmmQtsaciXEgSZXAAwRCvf%2BPWfwtZrvXvYZKHiI6pktARl7qHHLwXmFjelZsQIW48SoqpFMPWyDMVITvxM5U%2BAAYCAliDsGSdZ8wDN%2F80AHAUG6pF9ycCfpK67RhdmjOs%2BT9AD7z%2F4hP0FcWSlPu5ss%2FNU9Aki4nRGPmJqFzFnSwnpwj5OhmzOpiS0e%2BgAu1FZnRv5JEul%2BMC8OQhazbaHOfXxUDOseY5M2u8QXBvdP%2BQZobCPS1h4RTDaTaaEOI%2B6Sx%2F8PFaJ%2BdVm33e9JaNOIGbH%2B%2BWCMF2ow2H21pM5etGWyNTH1iBOVd7piMJiTscEGOqUB%2F2PKcORLO%2BdCHxBxTSE%2FGJiTo3cVCcTygdIUesZH%2BBroRLBDU49Lg%2BtT2M6SSEDR%2F58wnNcDytksPJm3nxMqSlM7xhJ5%2BuIQlHL6xtArvN8a%2FeXjO99d7%2Fp9XpqlAjnDVRxJ6unZbKAk04%2BNYxbU28buzWpx7bDUuPbv2pR5pHeXlLn4r%2B8fSNVXmIUnc2iY11OIuRxAHAZTb9UoYsx0sBtd%2B25x&X-Amz-Signature=430d8fbc0077077836dbd1994bb137e8667fbb33dd86c11cc5b53960c13e7112&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
