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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNO5TVG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCUBiD6OhYdoeXz0iSM%2FxXA8oac8RoHohI0VY3oDOkGaAIgVHWZaxeOQQzplvC%2FMKdfOdFMQOBNCdoptlMJbB5vQQoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDN5OHgr4CPELrSfP3CrcA3lEkq6RXfUL%2F%2B%2F1FJU%2BPP11Pfs2wWxxgUXmAQL%2BXiUDey6hdTQlxfUobIR%2FPdkXPNQqFK8bLaiUUk3tTIHlW%2Bdy36K5IHRZkgpmhPIrvywQCd2OWSJiNyfm8bepAiqKBaG4EszC7koQ%2FV7KY9eEZt6XR79rBjvqvdo9RRwzheVtqDygiKZNmsn1EwEoGT2L3Nxm%2B2qzu5FpFiRCfLT7NsNxcQo%2FOlRsRcE3v38k7Nz1sDXKgzG5uobsddS%2BMr8fV3AYjUzhHeu48oOWr0qwLimFd%2B2sXeaGsAknaxRP4VIjNi9jClszX%2Be2mUo1B%2FOft9oZNXTxZKRFpdZyJ8x5O%2F4gGaDOkFFNNQSYkuH10FAJE4ZnOvt26%2FXL9zqr%2BQc181RnhabvReaX3A3nG51ZE3OMM3n1aGTrhU0Jty6doAlUzSp1l1%2B1pVqKZVZqdbVvqWZ9%2Fl713wtpU93n%2F3BXRy01o19mcRndoFyjlIl4JywItVHpkkbjMfx8LwWIhpRAsfNDtsNQhHRc8jGDha%2BoFRbFvOiTCS7cdCoAb4L1mzybeK27nueb68mtsayjnnSoAIt79xxBIHfqWDW5FmK4Yl9Y38Lb95lGAWWeh0VoHm%2Fa9Hulx4UU1bVgPCu0MKDMr8IGOqUBf8MfyUbFInMOc6pOcHGdyieRAcboQxhlEQ90hEMc5c9DgU4R1diQawY6mkAz0td7X6mXNZGWiPWH4Mx%2FOCNBrxO4gNAYp%2BHKbKZsP6Os3O1bzhSiVpLdqJFTmLNP1oTVLki8g7x%2B2PpoCARyhbkH0H8wj4kEL2hM9gZr%2BA9K%2BLdjwwLILE0ZNpp0Q%2BmooOsMSe%2FqqioRfAVJBbHQR1oHl18X1xlF&X-Amz-Signature=90708a3cc969ddd2d8a913eb655bead54d356bf8eea8dbb38fc42448e2336ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNO5TVG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCUBiD6OhYdoeXz0iSM%2FxXA8oac8RoHohI0VY3oDOkGaAIgVHWZaxeOQQzplvC%2FMKdfOdFMQOBNCdoptlMJbB5vQQoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDN5OHgr4CPELrSfP3CrcA3lEkq6RXfUL%2F%2B%2F1FJU%2BPP11Pfs2wWxxgUXmAQL%2BXiUDey6hdTQlxfUobIR%2FPdkXPNQqFK8bLaiUUk3tTIHlW%2Bdy36K5IHRZkgpmhPIrvywQCd2OWSJiNyfm8bepAiqKBaG4EszC7koQ%2FV7KY9eEZt6XR79rBjvqvdo9RRwzheVtqDygiKZNmsn1EwEoGT2L3Nxm%2B2qzu5FpFiRCfLT7NsNxcQo%2FOlRsRcE3v38k7Nz1sDXKgzG5uobsddS%2BMr8fV3AYjUzhHeu48oOWr0qwLimFd%2B2sXeaGsAknaxRP4VIjNi9jClszX%2Be2mUo1B%2FOft9oZNXTxZKRFpdZyJ8x5O%2F4gGaDOkFFNNQSYkuH10FAJE4ZnOvt26%2FXL9zqr%2BQc181RnhabvReaX3A3nG51ZE3OMM3n1aGTrhU0Jty6doAlUzSp1l1%2B1pVqKZVZqdbVvqWZ9%2Fl713wtpU93n%2F3BXRy01o19mcRndoFyjlIl4JywItVHpkkbjMfx8LwWIhpRAsfNDtsNQhHRc8jGDha%2BoFRbFvOiTCS7cdCoAb4L1mzybeK27nueb68mtsayjnnSoAIt79xxBIHfqWDW5FmK4Yl9Y38Lb95lGAWWeh0VoHm%2Fa9Hulx4UU1bVgPCu0MKDMr8IGOqUBf8MfyUbFInMOc6pOcHGdyieRAcboQxhlEQ90hEMc5c9DgU4R1diQawY6mkAz0td7X6mXNZGWiPWH4Mx%2FOCNBrxO4gNAYp%2BHKbKZsP6Os3O1bzhSiVpLdqJFTmLNP1oTVLki8g7x%2B2PpoCARyhbkH0H8wj4kEL2hM9gZr%2BA9K%2BLdjwwLILE0ZNpp0Q%2BmooOsMSe%2FqqioRfAVJBbHQR1oHl18X1xlF&X-Amz-Signature=5127ab7d20156420bc4a775df1a0f721a702560bdaef11565b63ab328a4daf65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNO5TVG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCUBiD6OhYdoeXz0iSM%2FxXA8oac8RoHohI0VY3oDOkGaAIgVHWZaxeOQQzplvC%2FMKdfOdFMQOBNCdoptlMJbB5vQQoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDN5OHgr4CPELrSfP3CrcA3lEkq6RXfUL%2F%2B%2F1FJU%2BPP11Pfs2wWxxgUXmAQL%2BXiUDey6hdTQlxfUobIR%2FPdkXPNQqFK8bLaiUUk3tTIHlW%2Bdy36K5IHRZkgpmhPIrvywQCd2OWSJiNyfm8bepAiqKBaG4EszC7koQ%2FV7KY9eEZt6XR79rBjvqvdo9RRwzheVtqDygiKZNmsn1EwEoGT2L3Nxm%2B2qzu5FpFiRCfLT7NsNxcQo%2FOlRsRcE3v38k7Nz1sDXKgzG5uobsddS%2BMr8fV3AYjUzhHeu48oOWr0qwLimFd%2B2sXeaGsAknaxRP4VIjNi9jClszX%2Be2mUo1B%2FOft9oZNXTxZKRFpdZyJ8x5O%2F4gGaDOkFFNNQSYkuH10FAJE4ZnOvt26%2FXL9zqr%2BQc181RnhabvReaX3A3nG51ZE3OMM3n1aGTrhU0Jty6doAlUzSp1l1%2B1pVqKZVZqdbVvqWZ9%2Fl713wtpU93n%2F3BXRy01o19mcRndoFyjlIl4JywItVHpkkbjMfx8LwWIhpRAsfNDtsNQhHRc8jGDha%2BoFRbFvOiTCS7cdCoAb4L1mzybeK27nueb68mtsayjnnSoAIt79xxBIHfqWDW5FmK4Yl9Y38Lb95lGAWWeh0VoHm%2Fa9Hulx4UU1bVgPCu0MKDMr8IGOqUBf8MfyUbFInMOc6pOcHGdyieRAcboQxhlEQ90hEMc5c9DgU4R1diQawY6mkAz0td7X6mXNZGWiPWH4Mx%2FOCNBrxO4gNAYp%2BHKbKZsP6Os3O1bzhSiVpLdqJFTmLNP1oTVLki8g7x%2B2PpoCARyhbkH0H8wj4kEL2hM9gZr%2BA9K%2BLdjwwLILE0ZNpp0Q%2BmooOsMSe%2FqqioRfAVJBbHQR1oHl18X1xlF&X-Amz-Signature=9425ea53825c7209bbfcacb21a4b70173b0862bed8dc7b1e9d38da493a4ed99c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNO5TVG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCUBiD6OhYdoeXz0iSM%2FxXA8oac8RoHohI0VY3oDOkGaAIgVHWZaxeOQQzplvC%2FMKdfOdFMQOBNCdoptlMJbB5vQQoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDN5OHgr4CPELrSfP3CrcA3lEkq6RXfUL%2F%2B%2F1FJU%2BPP11Pfs2wWxxgUXmAQL%2BXiUDey6hdTQlxfUobIR%2FPdkXPNQqFK8bLaiUUk3tTIHlW%2Bdy36K5IHRZkgpmhPIrvywQCd2OWSJiNyfm8bepAiqKBaG4EszC7koQ%2FV7KY9eEZt6XR79rBjvqvdo9RRwzheVtqDygiKZNmsn1EwEoGT2L3Nxm%2B2qzu5FpFiRCfLT7NsNxcQo%2FOlRsRcE3v38k7Nz1sDXKgzG5uobsddS%2BMr8fV3AYjUzhHeu48oOWr0qwLimFd%2B2sXeaGsAknaxRP4VIjNi9jClszX%2Be2mUo1B%2FOft9oZNXTxZKRFpdZyJ8x5O%2F4gGaDOkFFNNQSYkuH10FAJE4ZnOvt26%2FXL9zqr%2BQc181RnhabvReaX3A3nG51ZE3OMM3n1aGTrhU0Jty6doAlUzSp1l1%2B1pVqKZVZqdbVvqWZ9%2Fl713wtpU93n%2F3BXRy01o19mcRndoFyjlIl4JywItVHpkkbjMfx8LwWIhpRAsfNDtsNQhHRc8jGDha%2BoFRbFvOiTCS7cdCoAb4L1mzybeK27nueb68mtsayjnnSoAIt79xxBIHfqWDW5FmK4Yl9Y38Lb95lGAWWeh0VoHm%2Fa9Hulx4UU1bVgPCu0MKDMr8IGOqUBf8MfyUbFInMOc6pOcHGdyieRAcboQxhlEQ90hEMc5c9DgU4R1diQawY6mkAz0td7X6mXNZGWiPWH4Mx%2FOCNBrxO4gNAYp%2BHKbKZsP6Os3O1bzhSiVpLdqJFTmLNP1oTVLki8g7x%2B2PpoCARyhbkH0H8wj4kEL2hM9gZr%2BA9K%2BLdjwwLILE0ZNpp0Q%2BmooOsMSe%2FqqioRfAVJBbHQR1oHl18X1xlF&X-Amz-Signature=660428cf73f19a2af384149eeb8e93eed32eba14c16b699bc07ff617db5d9c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNO5TVG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCUBiD6OhYdoeXz0iSM%2FxXA8oac8RoHohI0VY3oDOkGaAIgVHWZaxeOQQzplvC%2FMKdfOdFMQOBNCdoptlMJbB5vQQoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDN5OHgr4CPELrSfP3CrcA3lEkq6RXfUL%2F%2B%2F1FJU%2BPP11Pfs2wWxxgUXmAQL%2BXiUDey6hdTQlxfUobIR%2FPdkXPNQqFK8bLaiUUk3tTIHlW%2Bdy36K5IHRZkgpmhPIrvywQCd2OWSJiNyfm8bepAiqKBaG4EszC7koQ%2FV7KY9eEZt6XR79rBjvqvdo9RRwzheVtqDygiKZNmsn1EwEoGT2L3Nxm%2B2qzu5FpFiRCfLT7NsNxcQo%2FOlRsRcE3v38k7Nz1sDXKgzG5uobsddS%2BMr8fV3AYjUzhHeu48oOWr0qwLimFd%2B2sXeaGsAknaxRP4VIjNi9jClszX%2Be2mUo1B%2FOft9oZNXTxZKRFpdZyJ8x5O%2F4gGaDOkFFNNQSYkuH10FAJE4ZnOvt26%2FXL9zqr%2BQc181RnhabvReaX3A3nG51ZE3OMM3n1aGTrhU0Jty6doAlUzSp1l1%2B1pVqKZVZqdbVvqWZ9%2Fl713wtpU93n%2F3BXRy01o19mcRndoFyjlIl4JywItVHpkkbjMfx8LwWIhpRAsfNDtsNQhHRc8jGDha%2BoFRbFvOiTCS7cdCoAb4L1mzybeK27nueb68mtsayjnnSoAIt79xxBIHfqWDW5FmK4Yl9Y38Lb95lGAWWeh0VoHm%2Fa9Hulx4UU1bVgPCu0MKDMr8IGOqUBf8MfyUbFInMOc6pOcHGdyieRAcboQxhlEQ90hEMc5c9DgU4R1diQawY6mkAz0td7X6mXNZGWiPWH4Mx%2FOCNBrxO4gNAYp%2BHKbKZsP6Os3O1bzhSiVpLdqJFTmLNP1oTVLki8g7x%2B2PpoCARyhbkH0H8wj4kEL2hM9gZr%2BA9K%2BLdjwwLILE0ZNpp0Q%2BmooOsMSe%2FqqioRfAVJBbHQR1oHl18X1xlF&X-Amz-Signature=093d02aeb2eaf277ea9ba7fc766e6d1a7ef043b4f1b99e548442bd2aec99bf52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNO5TVG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCUBiD6OhYdoeXz0iSM%2FxXA8oac8RoHohI0VY3oDOkGaAIgVHWZaxeOQQzplvC%2FMKdfOdFMQOBNCdoptlMJbB5vQQoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDN5OHgr4CPELrSfP3CrcA3lEkq6RXfUL%2F%2B%2F1FJU%2BPP11Pfs2wWxxgUXmAQL%2BXiUDey6hdTQlxfUobIR%2FPdkXPNQqFK8bLaiUUk3tTIHlW%2Bdy36K5IHRZkgpmhPIrvywQCd2OWSJiNyfm8bepAiqKBaG4EszC7koQ%2FV7KY9eEZt6XR79rBjvqvdo9RRwzheVtqDygiKZNmsn1EwEoGT2L3Nxm%2B2qzu5FpFiRCfLT7NsNxcQo%2FOlRsRcE3v38k7Nz1sDXKgzG5uobsddS%2BMr8fV3AYjUzhHeu48oOWr0qwLimFd%2B2sXeaGsAknaxRP4VIjNi9jClszX%2Be2mUo1B%2FOft9oZNXTxZKRFpdZyJ8x5O%2F4gGaDOkFFNNQSYkuH10FAJE4ZnOvt26%2FXL9zqr%2BQc181RnhabvReaX3A3nG51ZE3OMM3n1aGTrhU0Jty6doAlUzSp1l1%2B1pVqKZVZqdbVvqWZ9%2Fl713wtpU93n%2F3BXRy01o19mcRndoFyjlIl4JywItVHpkkbjMfx8LwWIhpRAsfNDtsNQhHRc8jGDha%2BoFRbFvOiTCS7cdCoAb4L1mzybeK27nueb68mtsayjnnSoAIt79xxBIHfqWDW5FmK4Yl9Y38Lb95lGAWWeh0VoHm%2Fa9Hulx4UU1bVgPCu0MKDMr8IGOqUBf8MfyUbFInMOc6pOcHGdyieRAcboQxhlEQ90hEMc5c9DgU4R1diQawY6mkAz0td7X6mXNZGWiPWH4Mx%2FOCNBrxO4gNAYp%2BHKbKZsP6Os3O1bzhSiVpLdqJFTmLNP1oTVLki8g7x%2B2PpoCARyhbkH0H8wj4kEL2hM9gZr%2BA9K%2BLdjwwLILE0ZNpp0Q%2BmooOsMSe%2FqqioRfAVJBbHQR1oHl18X1xlF&X-Amz-Signature=2cda535918de3d874c77ecfd05558f63af71dca5dc959f9e609b1c253a6982de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNO5TVG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCUBiD6OhYdoeXz0iSM%2FxXA8oac8RoHohI0VY3oDOkGaAIgVHWZaxeOQQzplvC%2FMKdfOdFMQOBNCdoptlMJbB5vQQoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDN5OHgr4CPELrSfP3CrcA3lEkq6RXfUL%2F%2B%2F1FJU%2BPP11Pfs2wWxxgUXmAQL%2BXiUDey6hdTQlxfUobIR%2FPdkXPNQqFK8bLaiUUk3tTIHlW%2Bdy36K5IHRZkgpmhPIrvywQCd2OWSJiNyfm8bepAiqKBaG4EszC7koQ%2FV7KY9eEZt6XR79rBjvqvdo9RRwzheVtqDygiKZNmsn1EwEoGT2L3Nxm%2B2qzu5FpFiRCfLT7NsNxcQo%2FOlRsRcE3v38k7Nz1sDXKgzG5uobsddS%2BMr8fV3AYjUzhHeu48oOWr0qwLimFd%2B2sXeaGsAknaxRP4VIjNi9jClszX%2Be2mUo1B%2FOft9oZNXTxZKRFpdZyJ8x5O%2F4gGaDOkFFNNQSYkuH10FAJE4ZnOvt26%2FXL9zqr%2BQc181RnhabvReaX3A3nG51ZE3OMM3n1aGTrhU0Jty6doAlUzSp1l1%2B1pVqKZVZqdbVvqWZ9%2Fl713wtpU93n%2F3BXRy01o19mcRndoFyjlIl4JywItVHpkkbjMfx8LwWIhpRAsfNDtsNQhHRc8jGDha%2BoFRbFvOiTCS7cdCoAb4L1mzybeK27nueb68mtsayjnnSoAIt79xxBIHfqWDW5FmK4Yl9Y38Lb95lGAWWeh0VoHm%2Fa9Hulx4UU1bVgPCu0MKDMr8IGOqUBf8MfyUbFInMOc6pOcHGdyieRAcboQxhlEQ90hEMc5c9DgU4R1diQawY6mkAz0td7X6mXNZGWiPWH4Mx%2FOCNBrxO4gNAYp%2BHKbKZsP6Os3O1bzhSiVpLdqJFTmLNP1oTVLki8g7x%2B2PpoCARyhbkH0H8wj4kEL2hM9gZr%2BA9K%2BLdjwwLILE0ZNpp0Q%2BmooOsMSe%2FqqioRfAVJBbHQR1oHl18X1xlF&X-Amz-Signature=a6cf166be0370f4b8ec8a4c5aa8ba5c4d1e0de340f9f309f23056ff3c667d20e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
