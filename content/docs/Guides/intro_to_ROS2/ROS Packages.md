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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KGXD7E5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi6vAb9pUNiu%2Bqpqa3yvjxHsrsf33vOM7zcosIsYb9uAiEAh0PHuWr7ltv0usNgU5Sv8p04A9KiuMP4Gq8%2BibTOmTEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLi2kMdDCHG5YNahqCrcAwCDlByBn0cvNIoB%2BL3TM62Qg7hO00N0g%2BOJEsAze48acReMhiEvkEgJmxB2cgqr1hfWbVFrP4qzNsN1Vq3gePw%2FUhYMg9FoN2HrlmCP4T5PqdNbxmzTdvGVqfXiNcOtcfGUAPQN5LaHAjY%2BvtaqPeQYO%2FPNagyV1SG8T5FBcLg%2Fe4BVpe1uCrEw5UzRvCDa%2B4AFGz1RTUa9ffIEXVjT6dfM4Mf3wEOh3Jc4TIZB221LtM88D6YAMGaHt8mTM9Ccb2DyOJ3INpoBxnA0MI%2FJsREUEanNWPeOTKzQpBn0UO0gRHMyN%2Bh52tBP8r%2BDudUyZTxxsX45OSvR8%2BYTbQ%2BRDfoFWJVALAUk8zBpCUzWFC2GXZcKuurhWjs2rpHxWI2OMWtDIVSQeWbpiCSx2oPpHRtva6WSdUU6Wdwb85rnke3EH%2F2cGTwqAt0dy5yNBfpBJ%2BOE1NJvygiRuvFVZ7Csl3NuivQWl%2B1qcOq8iHefpyeABaPl7C5vtdFx9TfJUDniJMT8wpcx%2FcxDiyqpTY3isr8q0vnA6EXaKpwrAvRBh3h6y%2FSy6r%2FLJy4nfgryjsHvqegJcEvwcs%2Bm4moaaDQm7eUntFGY0VfsvuWTNW4Jo3swp%2B2C1ZfQgpd4ZXt5MN3DkMMGOqUBvRs69LAvxwQRdGDvbR6PtKiU9mGfex3QfBvmMuXiXYrQCLlZ1SGVuWiese%2B2643tyhHoIyjNquGTYqDmcCHV8S5srOqUX%2FQUQyCGuRtLQmeAGpcAXQ19GQt5B7S6qGXPEAZYh3YEI36T7Jlby24HiKLA2%2BkZf2ti%2F7PQTsLa%2BqVG9MTOzAfXgAHEeawWNzN1AjxVI7Pp2Ram3LV3gpniyxMDpDX9&X-Amz-Signature=fd214eb2f83c9ff17b6a8f4653ec52fff5e86aa2852da4a9ab90f6b345b03bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KGXD7E5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi6vAb9pUNiu%2Bqpqa3yvjxHsrsf33vOM7zcosIsYb9uAiEAh0PHuWr7ltv0usNgU5Sv8p04A9KiuMP4Gq8%2BibTOmTEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLi2kMdDCHG5YNahqCrcAwCDlByBn0cvNIoB%2BL3TM62Qg7hO00N0g%2BOJEsAze48acReMhiEvkEgJmxB2cgqr1hfWbVFrP4qzNsN1Vq3gePw%2FUhYMg9FoN2HrlmCP4T5PqdNbxmzTdvGVqfXiNcOtcfGUAPQN5LaHAjY%2BvtaqPeQYO%2FPNagyV1SG8T5FBcLg%2Fe4BVpe1uCrEw5UzRvCDa%2B4AFGz1RTUa9ffIEXVjT6dfM4Mf3wEOh3Jc4TIZB221LtM88D6YAMGaHt8mTM9Ccb2DyOJ3INpoBxnA0MI%2FJsREUEanNWPeOTKzQpBn0UO0gRHMyN%2Bh52tBP8r%2BDudUyZTxxsX45OSvR8%2BYTbQ%2BRDfoFWJVALAUk8zBpCUzWFC2GXZcKuurhWjs2rpHxWI2OMWtDIVSQeWbpiCSx2oPpHRtva6WSdUU6Wdwb85rnke3EH%2F2cGTwqAt0dy5yNBfpBJ%2BOE1NJvygiRuvFVZ7Csl3NuivQWl%2B1qcOq8iHefpyeABaPl7C5vtdFx9TfJUDniJMT8wpcx%2FcxDiyqpTY3isr8q0vnA6EXaKpwrAvRBh3h6y%2FSy6r%2FLJy4nfgryjsHvqegJcEvwcs%2Bm4moaaDQm7eUntFGY0VfsvuWTNW4Jo3swp%2B2C1ZfQgpd4ZXt5MN3DkMMGOqUBvRs69LAvxwQRdGDvbR6PtKiU9mGfex3QfBvmMuXiXYrQCLlZ1SGVuWiese%2B2643tyhHoIyjNquGTYqDmcCHV8S5srOqUX%2FQUQyCGuRtLQmeAGpcAXQ19GQt5B7S6qGXPEAZYh3YEI36T7Jlby24HiKLA2%2BkZf2ti%2F7PQTsLa%2BqVG9MTOzAfXgAHEeawWNzN1AjxVI7Pp2Ram3LV3gpniyxMDpDX9&X-Amz-Signature=67d4691a1ae7365d220c24e6da5f6ffc644cce3e85188cf03621370e459261d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KGXD7E5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi6vAb9pUNiu%2Bqpqa3yvjxHsrsf33vOM7zcosIsYb9uAiEAh0PHuWr7ltv0usNgU5Sv8p04A9KiuMP4Gq8%2BibTOmTEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLi2kMdDCHG5YNahqCrcAwCDlByBn0cvNIoB%2BL3TM62Qg7hO00N0g%2BOJEsAze48acReMhiEvkEgJmxB2cgqr1hfWbVFrP4qzNsN1Vq3gePw%2FUhYMg9FoN2HrlmCP4T5PqdNbxmzTdvGVqfXiNcOtcfGUAPQN5LaHAjY%2BvtaqPeQYO%2FPNagyV1SG8T5FBcLg%2Fe4BVpe1uCrEw5UzRvCDa%2B4AFGz1RTUa9ffIEXVjT6dfM4Mf3wEOh3Jc4TIZB221LtM88D6YAMGaHt8mTM9Ccb2DyOJ3INpoBxnA0MI%2FJsREUEanNWPeOTKzQpBn0UO0gRHMyN%2Bh52tBP8r%2BDudUyZTxxsX45OSvR8%2BYTbQ%2BRDfoFWJVALAUk8zBpCUzWFC2GXZcKuurhWjs2rpHxWI2OMWtDIVSQeWbpiCSx2oPpHRtva6WSdUU6Wdwb85rnke3EH%2F2cGTwqAt0dy5yNBfpBJ%2BOE1NJvygiRuvFVZ7Csl3NuivQWl%2B1qcOq8iHefpyeABaPl7C5vtdFx9TfJUDniJMT8wpcx%2FcxDiyqpTY3isr8q0vnA6EXaKpwrAvRBh3h6y%2FSy6r%2FLJy4nfgryjsHvqegJcEvwcs%2Bm4moaaDQm7eUntFGY0VfsvuWTNW4Jo3swp%2B2C1ZfQgpd4ZXt5MN3DkMMGOqUBvRs69LAvxwQRdGDvbR6PtKiU9mGfex3QfBvmMuXiXYrQCLlZ1SGVuWiese%2B2643tyhHoIyjNquGTYqDmcCHV8S5srOqUX%2FQUQyCGuRtLQmeAGpcAXQ19GQt5B7S6qGXPEAZYh3YEI36T7Jlby24HiKLA2%2BkZf2ti%2F7PQTsLa%2BqVG9MTOzAfXgAHEeawWNzN1AjxVI7Pp2Ram3LV3gpniyxMDpDX9&X-Amz-Signature=dbea0cf7cf9e2ad6c82b0faeecc6acd383096851fa9a8d598872b80d1b5c9abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KGXD7E5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi6vAb9pUNiu%2Bqpqa3yvjxHsrsf33vOM7zcosIsYb9uAiEAh0PHuWr7ltv0usNgU5Sv8p04A9KiuMP4Gq8%2BibTOmTEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLi2kMdDCHG5YNahqCrcAwCDlByBn0cvNIoB%2BL3TM62Qg7hO00N0g%2BOJEsAze48acReMhiEvkEgJmxB2cgqr1hfWbVFrP4qzNsN1Vq3gePw%2FUhYMg9FoN2HrlmCP4T5PqdNbxmzTdvGVqfXiNcOtcfGUAPQN5LaHAjY%2BvtaqPeQYO%2FPNagyV1SG8T5FBcLg%2Fe4BVpe1uCrEw5UzRvCDa%2B4AFGz1RTUa9ffIEXVjT6dfM4Mf3wEOh3Jc4TIZB221LtM88D6YAMGaHt8mTM9Ccb2DyOJ3INpoBxnA0MI%2FJsREUEanNWPeOTKzQpBn0UO0gRHMyN%2Bh52tBP8r%2BDudUyZTxxsX45OSvR8%2BYTbQ%2BRDfoFWJVALAUk8zBpCUzWFC2GXZcKuurhWjs2rpHxWI2OMWtDIVSQeWbpiCSx2oPpHRtva6WSdUU6Wdwb85rnke3EH%2F2cGTwqAt0dy5yNBfpBJ%2BOE1NJvygiRuvFVZ7Csl3NuivQWl%2B1qcOq8iHefpyeABaPl7C5vtdFx9TfJUDniJMT8wpcx%2FcxDiyqpTY3isr8q0vnA6EXaKpwrAvRBh3h6y%2FSy6r%2FLJy4nfgryjsHvqegJcEvwcs%2Bm4moaaDQm7eUntFGY0VfsvuWTNW4Jo3swp%2B2C1ZfQgpd4ZXt5MN3DkMMGOqUBvRs69LAvxwQRdGDvbR6PtKiU9mGfex3QfBvmMuXiXYrQCLlZ1SGVuWiese%2B2643tyhHoIyjNquGTYqDmcCHV8S5srOqUX%2FQUQyCGuRtLQmeAGpcAXQ19GQt5B7S6qGXPEAZYh3YEI36T7Jlby24HiKLA2%2BkZf2ti%2F7PQTsLa%2BqVG9MTOzAfXgAHEeawWNzN1AjxVI7Pp2Ram3LV3gpniyxMDpDX9&X-Amz-Signature=d20fdaca15dac46e52f405dddbb816b61e17c81ce91ece9e4506a9e9b2f5c47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KGXD7E5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi6vAb9pUNiu%2Bqpqa3yvjxHsrsf33vOM7zcosIsYb9uAiEAh0PHuWr7ltv0usNgU5Sv8p04A9KiuMP4Gq8%2BibTOmTEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLi2kMdDCHG5YNahqCrcAwCDlByBn0cvNIoB%2BL3TM62Qg7hO00N0g%2BOJEsAze48acReMhiEvkEgJmxB2cgqr1hfWbVFrP4qzNsN1Vq3gePw%2FUhYMg9FoN2HrlmCP4T5PqdNbxmzTdvGVqfXiNcOtcfGUAPQN5LaHAjY%2BvtaqPeQYO%2FPNagyV1SG8T5FBcLg%2Fe4BVpe1uCrEw5UzRvCDa%2B4AFGz1RTUa9ffIEXVjT6dfM4Mf3wEOh3Jc4TIZB221LtM88D6YAMGaHt8mTM9Ccb2DyOJ3INpoBxnA0MI%2FJsREUEanNWPeOTKzQpBn0UO0gRHMyN%2Bh52tBP8r%2BDudUyZTxxsX45OSvR8%2BYTbQ%2BRDfoFWJVALAUk8zBpCUzWFC2GXZcKuurhWjs2rpHxWI2OMWtDIVSQeWbpiCSx2oPpHRtva6WSdUU6Wdwb85rnke3EH%2F2cGTwqAt0dy5yNBfpBJ%2BOE1NJvygiRuvFVZ7Csl3NuivQWl%2B1qcOq8iHefpyeABaPl7C5vtdFx9TfJUDniJMT8wpcx%2FcxDiyqpTY3isr8q0vnA6EXaKpwrAvRBh3h6y%2FSy6r%2FLJy4nfgryjsHvqegJcEvwcs%2Bm4moaaDQm7eUntFGY0VfsvuWTNW4Jo3swp%2B2C1ZfQgpd4ZXt5MN3DkMMGOqUBvRs69LAvxwQRdGDvbR6PtKiU9mGfex3QfBvmMuXiXYrQCLlZ1SGVuWiese%2B2643tyhHoIyjNquGTYqDmcCHV8S5srOqUX%2FQUQyCGuRtLQmeAGpcAXQ19GQt5B7S6qGXPEAZYh3YEI36T7Jlby24HiKLA2%2BkZf2ti%2F7PQTsLa%2BqVG9MTOzAfXgAHEeawWNzN1AjxVI7Pp2Ram3LV3gpniyxMDpDX9&X-Amz-Signature=b11b9225e8f4fa5415851af723b0e630e8da7ae4c095ed77887734903bae9c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KGXD7E5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi6vAb9pUNiu%2Bqpqa3yvjxHsrsf33vOM7zcosIsYb9uAiEAh0PHuWr7ltv0usNgU5Sv8p04A9KiuMP4Gq8%2BibTOmTEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLi2kMdDCHG5YNahqCrcAwCDlByBn0cvNIoB%2BL3TM62Qg7hO00N0g%2BOJEsAze48acReMhiEvkEgJmxB2cgqr1hfWbVFrP4qzNsN1Vq3gePw%2FUhYMg9FoN2HrlmCP4T5PqdNbxmzTdvGVqfXiNcOtcfGUAPQN5LaHAjY%2BvtaqPeQYO%2FPNagyV1SG8T5FBcLg%2Fe4BVpe1uCrEw5UzRvCDa%2B4AFGz1RTUa9ffIEXVjT6dfM4Mf3wEOh3Jc4TIZB221LtM88D6YAMGaHt8mTM9Ccb2DyOJ3INpoBxnA0MI%2FJsREUEanNWPeOTKzQpBn0UO0gRHMyN%2Bh52tBP8r%2BDudUyZTxxsX45OSvR8%2BYTbQ%2BRDfoFWJVALAUk8zBpCUzWFC2GXZcKuurhWjs2rpHxWI2OMWtDIVSQeWbpiCSx2oPpHRtva6WSdUU6Wdwb85rnke3EH%2F2cGTwqAt0dy5yNBfpBJ%2BOE1NJvygiRuvFVZ7Csl3NuivQWl%2B1qcOq8iHefpyeABaPl7C5vtdFx9TfJUDniJMT8wpcx%2FcxDiyqpTY3isr8q0vnA6EXaKpwrAvRBh3h6y%2FSy6r%2FLJy4nfgryjsHvqegJcEvwcs%2Bm4moaaDQm7eUntFGY0VfsvuWTNW4Jo3swp%2B2C1ZfQgpd4ZXt5MN3DkMMGOqUBvRs69LAvxwQRdGDvbR6PtKiU9mGfex3QfBvmMuXiXYrQCLlZ1SGVuWiese%2B2643tyhHoIyjNquGTYqDmcCHV8S5srOqUX%2FQUQyCGuRtLQmeAGpcAXQ19GQt5B7S6qGXPEAZYh3YEI36T7Jlby24HiKLA2%2BkZf2ti%2F7PQTsLa%2BqVG9MTOzAfXgAHEeawWNzN1AjxVI7Pp2Ram3LV3gpniyxMDpDX9&X-Amz-Signature=f0ec64463411d8b46d3cfe59dc81110f8a9e2f679b445f44d4c40682419293f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KGXD7E5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi6vAb9pUNiu%2Bqpqa3yvjxHsrsf33vOM7zcosIsYb9uAiEAh0PHuWr7ltv0usNgU5Sv8p04A9KiuMP4Gq8%2BibTOmTEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLi2kMdDCHG5YNahqCrcAwCDlByBn0cvNIoB%2BL3TM62Qg7hO00N0g%2BOJEsAze48acReMhiEvkEgJmxB2cgqr1hfWbVFrP4qzNsN1Vq3gePw%2FUhYMg9FoN2HrlmCP4T5PqdNbxmzTdvGVqfXiNcOtcfGUAPQN5LaHAjY%2BvtaqPeQYO%2FPNagyV1SG8T5FBcLg%2Fe4BVpe1uCrEw5UzRvCDa%2B4AFGz1RTUa9ffIEXVjT6dfM4Mf3wEOh3Jc4TIZB221LtM88D6YAMGaHt8mTM9Ccb2DyOJ3INpoBxnA0MI%2FJsREUEanNWPeOTKzQpBn0UO0gRHMyN%2Bh52tBP8r%2BDudUyZTxxsX45OSvR8%2BYTbQ%2BRDfoFWJVALAUk8zBpCUzWFC2GXZcKuurhWjs2rpHxWI2OMWtDIVSQeWbpiCSx2oPpHRtva6WSdUU6Wdwb85rnke3EH%2F2cGTwqAt0dy5yNBfpBJ%2BOE1NJvygiRuvFVZ7Csl3NuivQWl%2B1qcOq8iHefpyeABaPl7C5vtdFx9TfJUDniJMT8wpcx%2FcxDiyqpTY3isr8q0vnA6EXaKpwrAvRBh3h6y%2FSy6r%2FLJy4nfgryjsHvqegJcEvwcs%2Bm4moaaDQm7eUntFGY0VfsvuWTNW4Jo3swp%2B2C1ZfQgpd4ZXt5MN3DkMMGOqUBvRs69LAvxwQRdGDvbR6PtKiU9mGfex3QfBvmMuXiXYrQCLlZ1SGVuWiese%2B2643tyhHoIyjNquGTYqDmcCHV8S5srOqUX%2FQUQyCGuRtLQmeAGpcAXQ19GQt5B7S6qGXPEAZYh3YEI36T7Jlby24HiKLA2%2BkZf2ti%2F7PQTsLa%2BqVG9MTOzAfXgAHEeawWNzN1AjxVI7Pp2Ram3LV3gpniyxMDpDX9&X-Amz-Signature=d2e90afde5c90981baf4f9cd1a2303c2b47d723cf07ef301a817629dadf7c15b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
