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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3E7KUS3%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FD8NzSuJhlb3cdsfGD9O%2BA62tVJphrUmw%2F6a7A4t92AiEAhbSrns6uLpsA4vAso6zeHYR%2Fs5%2F4AdJowOHJMHe%2BjxIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKV6yOjQuMxsoqFIUCrcA9PMHoEEvJs38%2FVlrNVaEyfr70A825GfMCeViREXvW1tifWfqKMo%2BGnHprfMDlptgblhs31hT6zPq8IE%2FjVLFc82aF4LIMWJylQ97%2F3HS22H9zwsYZC0MWhkta7IZn89hiyTnr9qMzn%2Fy0c6zhYLSda8pH99jwQXfwtvWX2pkvKpUtXbOYzTR2%2BTCtenW2NfXmj7q5O1xxBl0pHXpTux8kYmCVsmFKyHMimvp%2Fp09UM1Mktp6%2FPd90TKDafJtAnUJa8TeUyuRqhdJ284UY6fRmk6mZJ3G0ylPrKWHVldUDxhWNpYsZNx6KpQwRT8POppF4i1O43lCprPmM7iepHlSSmQQpw3KJa6TIpkFPA2TacXFKVsvREHcJrWZ59CUhwR1mRz4WdD9tETs2xcQmbBMZzi%2Fr03KUuzDNBEhZ%2FyV%2FufIpPHlpSQGqMTY9Ofc6sH%2FFzX3mUi1V%2F3ZLTK8bAJQQZDYYzr3HHFL2%2FCrNkiWCLJk7sD8zjV%2FmoQIET0327FRpPw6JFMqqvw8Sjq9TPTku5XZpUpYBOs3%2BzprTJtroGExl%2F3upeOPtZLCm4IDC8Bo%2Bd9ERBkmbfyRrek9mLCM2DGFQ3%2BSQbRvQuw7qVXLbu1fH9%2BVVfT9hU2ucHAMMfg8cAGOqUBuik2x734n%2FliFlKStrI8PGDbQpnDCmNSUSt2%2BmqOoKktqd7XBXXN%2BusmWAf0B6Yx0k9cKNnFxR7RwH7mY4DyZW%2Fz4XDQt%2BxwMAuHUT8LUeN0x1W0p2EhErjCou3lHfaVhhpCJCEY4JsShLZdoyhC7Z0n3M3xvR12ORV2jXE%2FLAIOMpr7dLJIfuq6np5F917DVKbfBrcqfHP%2B0QEaU6975e43k9iH&X-Amz-Signature=5587964fc847cc54430454b265bfd3fbe403b8a5d32ce31e6f2b0f6864ea3a47&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3E7KUS3%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FD8NzSuJhlb3cdsfGD9O%2BA62tVJphrUmw%2F6a7A4t92AiEAhbSrns6uLpsA4vAso6zeHYR%2Fs5%2F4AdJowOHJMHe%2BjxIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKV6yOjQuMxsoqFIUCrcA9PMHoEEvJs38%2FVlrNVaEyfr70A825GfMCeViREXvW1tifWfqKMo%2BGnHprfMDlptgblhs31hT6zPq8IE%2FjVLFc82aF4LIMWJylQ97%2F3HS22H9zwsYZC0MWhkta7IZn89hiyTnr9qMzn%2Fy0c6zhYLSda8pH99jwQXfwtvWX2pkvKpUtXbOYzTR2%2BTCtenW2NfXmj7q5O1xxBl0pHXpTux8kYmCVsmFKyHMimvp%2Fp09UM1Mktp6%2FPd90TKDafJtAnUJa8TeUyuRqhdJ284UY6fRmk6mZJ3G0ylPrKWHVldUDxhWNpYsZNx6KpQwRT8POppF4i1O43lCprPmM7iepHlSSmQQpw3KJa6TIpkFPA2TacXFKVsvREHcJrWZ59CUhwR1mRz4WdD9tETs2xcQmbBMZzi%2Fr03KUuzDNBEhZ%2FyV%2FufIpPHlpSQGqMTY9Ofc6sH%2FFzX3mUi1V%2F3ZLTK8bAJQQZDYYzr3HHFL2%2FCrNkiWCLJk7sD8zjV%2FmoQIET0327FRpPw6JFMqqvw8Sjq9TPTku5XZpUpYBOs3%2BzprTJtroGExl%2F3upeOPtZLCm4IDC8Bo%2Bd9ERBkmbfyRrek9mLCM2DGFQ3%2BSQbRvQuw7qVXLbu1fH9%2BVVfT9hU2ucHAMMfg8cAGOqUBuik2x734n%2FliFlKStrI8PGDbQpnDCmNSUSt2%2BmqOoKktqd7XBXXN%2BusmWAf0B6Yx0k9cKNnFxR7RwH7mY4DyZW%2Fz4XDQt%2BxwMAuHUT8LUeN0x1W0p2EhErjCou3lHfaVhhpCJCEY4JsShLZdoyhC7Z0n3M3xvR12ORV2jXE%2FLAIOMpr7dLJIfuq6np5F917DVKbfBrcqfHP%2B0QEaU6975e43k9iH&X-Amz-Signature=e05da9e7f0182782c91a6525a5c6e6116473537d0c94398386323fc180141b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3E7KUS3%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FD8NzSuJhlb3cdsfGD9O%2BA62tVJphrUmw%2F6a7A4t92AiEAhbSrns6uLpsA4vAso6zeHYR%2Fs5%2F4AdJowOHJMHe%2BjxIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKV6yOjQuMxsoqFIUCrcA9PMHoEEvJs38%2FVlrNVaEyfr70A825GfMCeViREXvW1tifWfqKMo%2BGnHprfMDlptgblhs31hT6zPq8IE%2FjVLFc82aF4LIMWJylQ97%2F3HS22H9zwsYZC0MWhkta7IZn89hiyTnr9qMzn%2Fy0c6zhYLSda8pH99jwQXfwtvWX2pkvKpUtXbOYzTR2%2BTCtenW2NfXmj7q5O1xxBl0pHXpTux8kYmCVsmFKyHMimvp%2Fp09UM1Mktp6%2FPd90TKDafJtAnUJa8TeUyuRqhdJ284UY6fRmk6mZJ3G0ylPrKWHVldUDxhWNpYsZNx6KpQwRT8POppF4i1O43lCprPmM7iepHlSSmQQpw3KJa6TIpkFPA2TacXFKVsvREHcJrWZ59CUhwR1mRz4WdD9tETs2xcQmbBMZzi%2Fr03KUuzDNBEhZ%2FyV%2FufIpPHlpSQGqMTY9Ofc6sH%2FFzX3mUi1V%2F3ZLTK8bAJQQZDYYzr3HHFL2%2FCrNkiWCLJk7sD8zjV%2FmoQIET0327FRpPw6JFMqqvw8Sjq9TPTku5XZpUpYBOs3%2BzprTJtroGExl%2F3upeOPtZLCm4IDC8Bo%2Bd9ERBkmbfyRrek9mLCM2DGFQ3%2BSQbRvQuw7qVXLbu1fH9%2BVVfT9hU2ucHAMMfg8cAGOqUBuik2x734n%2FliFlKStrI8PGDbQpnDCmNSUSt2%2BmqOoKktqd7XBXXN%2BusmWAf0B6Yx0k9cKNnFxR7RwH7mY4DyZW%2Fz4XDQt%2BxwMAuHUT8LUeN0x1W0p2EhErjCou3lHfaVhhpCJCEY4JsShLZdoyhC7Z0n3M3xvR12ORV2jXE%2FLAIOMpr7dLJIfuq6np5F917DVKbfBrcqfHP%2B0QEaU6975e43k9iH&X-Amz-Signature=b123986e7585e2ecd66ec68771420dfc62e4086a88db6db0263c61e06f27e46f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3E7KUS3%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FD8NzSuJhlb3cdsfGD9O%2BA62tVJphrUmw%2F6a7A4t92AiEAhbSrns6uLpsA4vAso6zeHYR%2Fs5%2F4AdJowOHJMHe%2BjxIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKV6yOjQuMxsoqFIUCrcA9PMHoEEvJs38%2FVlrNVaEyfr70A825GfMCeViREXvW1tifWfqKMo%2BGnHprfMDlptgblhs31hT6zPq8IE%2FjVLFc82aF4LIMWJylQ97%2F3HS22H9zwsYZC0MWhkta7IZn89hiyTnr9qMzn%2Fy0c6zhYLSda8pH99jwQXfwtvWX2pkvKpUtXbOYzTR2%2BTCtenW2NfXmj7q5O1xxBl0pHXpTux8kYmCVsmFKyHMimvp%2Fp09UM1Mktp6%2FPd90TKDafJtAnUJa8TeUyuRqhdJ284UY6fRmk6mZJ3G0ylPrKWHVldUDxhWNpYsZNx6KpQwRT8POppF4i1O43lCprPmM7iepHlSSmQQpw3KJa6TIpkFPA2TacXFKVsvREHcJrWZ59CUhwR1mRz4WdD9tETs2xcQmbBMZzi%2Fr03KUuzDNBEhZ%2FyV%2FufIpPHlpSQGqMTY9Ofc6sH%2FFzX3mUi1V%2F3ZLTK8bAJQQZDYYzr3HHFL2%2FCrNkiWCLJk7sD8zjV%2FmoQIET0327FRpPw6JFMqqvw8Sjq9TPTku5XZpUpYBOs3%2BzprTJtroGExl%2F3upeOPtZLCm4IDC8Bo%2Bd9ERBkmbfyRrek9mLCM2DGFQ3%2BSQbRvQuw7qVXLbu1fH9%2BVVfT9hU2ucHAMMfg8cAGOqUBuik2x734n%2FliFlKStrI8PGDbQpnDCmNSUSt2%2BmqOoKktqd7XBXXN%2BusmWAf0B6Yx0k9cKNnFxR7RwH7mY4DyZW%2Fz4XDQt%2BxwMAuHUT8LUeN0x1W0p2EhErjCou3lHfaVhhpCJCEY4JsShLZdoyhC7Z0n3M3xvR12ORV2jXE%2FLAIOMpr7dLJIfuq6np5F917DVKbfBrcqfHP%2B0QEaU6975e43k9iH&X-Amz-Signature=ce636ce71755b13beea192a65b1f4bc965524aa07e82e52080569043b4a76d34&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3E7KUS3%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FD8NzSuJhlb3cdsfGD9O%2BA62tVJphrUmw%2F6a7A4t92AiEAhbSrns6uLpsA4vAso6zeHYR%2Fs5%2F4AdJowOHJMHe%2BjxIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKV6yOjQuMxsoqFIUCrcA9PMHoEEvJs38%2FVlrNVaEyfr70A825GfMCeViREXvW1tifWfqKMo%2BGnHprfMDlptgblhs31hT6zPq8IE%2FjVLFc82aF4LIMWJylQ97%2F3HS22H9zwsYZC0MWhkta7IZn89hiyTnr9qMzn%2Fy0c6zhYLSda8pH99jwQXfwtvWX2pkvKpUtXbOYzTR2%2BTCtenW2NfXmj7q5O1xxBl0pHXpTux8kYmCVsmFKyHMimvp%2Fp09UM1Mktp6%2FPd90TKDafJtAnUJa8TeUyuRqhdJ284UY6fRmk6mZJ3G0ylPrKWHVldUDxhWNpYsZNx6KpQwRT8POppF4i1O43lCprPmM7iepHlSSmQQpw3KJa6TIpkFPA2TacXFKVsvREHcJrWZ59CUhwR1mRz4WdD9tETs2xcQmbBMZzi%2Fr03KUuzDNBEhZ%2FyV%2FufIpPHlpSQGqMTY9Ofc6sH%2FFzX3mUi1V%2F3ZLTK8bAJQQZDYYzr3HHFL2%2FCrNkiWCLJk7sD8zjV%2FmoQIET0327FRpPw6JFMqqvw8Sjq9TPTku5XZpUpYBOs3%2BzprTJtroGExl%2F3upeOPtZLCm4IDC8Bo%2Bd9ERBkmbfyRrek9mLCM2DGFQ3%2BSQbRvQuw7qVXLbu1fH9%2BVVfT9hU2ucHAMMfg8cAGOqUBuik2x734n%2FliFlKStrI8PGDbQpnDCmNSUSt2%2BmqOoKktqd7XBXXN%2BusmWAf0B6Yx0k9cKNnFxR7RwH7mY4DyZW%2Fz4XDQt%2BxwMAuHUT8LUeN0x1W0p2EhErjCou3lHfaVhhpCJCEY4JsShLZdoyhC7Z0n3M3xvR12ORV2jXE%2FLAIOMpr7dLJIfuq6np5F917DVKbfBrcqfHP%2B0QEaU6975e43k9iH&X-Amz-Signature=41bac89b1557df553930556f4e289d6cdcbabfb709fe90c15a97b0d2d794ce8d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3E7KUS3%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FD8NzSuJhlb3cdsfGD9O%2BA62tVJphrUmw%2F6a7A4t92AiEAhbSrns6uLpsA4vAso6zeHYR%2Fs5%2F4AdJowOHJMHe%2BjxIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKV6yOjQuMxsoqFIUCrcA9PMHoEEvJs38%2FVlrNVaEyfr70A825GfMCeViREXvW1tifWfqKMo%2BGnHprfMDlptgblhs31hT6zPq8IE%2FjVLFc82aF4LIMWJylQ97%2F3HS22H9zwsYZC0MWhkta7IZn89hiyTnr9qMzn%2Fy0c6zhYLSda8pH99jwQXfwtvWX2pkvKpUtXbOYzTR2%2BTCtenW2NfXmj7q5O1xxBl0pHXpTux8kYmCVsmFKyHMimvp%2Fp09UM1Mktp6%2FPd90TKDafJtAnUJa8TeUyuRqhdJ284UY6fRmk6mZJ3G0ylPrKWHVldUDxhWNpYsZNx6KpQwRT8POppF4i1O43lCprPmM7iepHlSSmQQpw3KJa6TIpkFPA2TacXFKVsvREHcJrWZ59CUhwR1mRz4WdD9tETs2xcQmbBMZzi%2Fr03KUuzDNBEhZ%2FyV%2FufIpPHlpSQGqMTY9Ofc6sH%2FFzX3mUi1V%2F3ZLTK8bAJQQZDYYzr3HHFL2%2FCrNkiWCLJk7sD8zjV%2FmoQIET0327FRpPw6JFMqqvw8Sjq9TPTku5XZpUpYBOs3%2BzprTJtroGExl%2F3upeOPtZLCm4IDC8Bo%2Bd9ERBkmbfyRrek9mLCM2DGFQ3%2BSQbRvQuw7qVXLbu1fH9%2BVVfT9hU2ucHAMMfg8cAGOqUBuik2x734n%2FliFlKStrI8PGDbQpnDCmNSUSt2%2BmqOoKktqd7XBXXN%2BusmWAf0B6Yx0k9cKNnFxR7RwH7mY4DyZW%2Fz4XDQt%2BxwMAuHUT8LUeN0x1W0p2EhErjCou3lHfaVhhpCJCEY4JsShLZdoyhC7Z0n3M3xvR12ORV2jXE%2FLAIOMpr7dLJIfuq6np5F917DVKbfBrcqfHP%2B0QEaU6975e43k9iH&X-Amz-Signature=2a0f08ab0e3b2e79a5db90991e566512ad9ce2efc546a99124febc168c5f46e1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3E7KUS3%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FD8NzSuJhlb3cdsfGD9O%2BA62tVJphrUmw%2F6a7A4t92AiEAhbSrns6uLpsA4vAso6zeHYR%2Fs5%2F4AdJowOHJMHe%2BjxIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKV6yOjQuMxsoqFIUCrcA9PMHoEEvJs38%2FVlrNVaEyfr70A825GfMCeViREXvW1tifWfqKMo%2BGnHprfMDlptgblhs31hT6zPq8IE%2FjVLFc82aF4LIMWJylQ97%2F3HS22H9zwsYZC0MWhkta7IZn89hiyTnr9qMzn%2Fy0c6zhYLSda8pH99jwQXfwtvWX2pkvKpUtXbOYzTR2%2BTCtenW2NfXmj7q5O1xxBl0pHXpTux8kYmCVsmFKyHMimvp%2Fp09UM1Mktp6%2FPd90TKDafJtAnUJa8TeUyuRqhdJ284UY6fRmk6mZJ3G0ylPrKWHVldUDxhWNpYsZNx6KpQwRT8POppF4i1O43lCprPmM7iepHlSSmQQpw3KJa6TIpkFPA2TacXFKVsvREHcJrWZ59CUhwR1mRz4WdD9tETs2xcQmbBMZzi%2Fr03KUuzDNBEhZ%2FyV%2FufIpPHlpSQGqMTY9Ofc6sH%2FFzX3mUi1V%2F3ZLTK8bAJQQZDYYzr3HHFL2%2FCrNkiWCLJk7sD8zjV%2FmoQIET0327FRpPw6JFMqqvw8Sjq9TPTku5XZpUpYBOs3%2BzprTJtroGExl%2F3upeOPtZLCm4IDC8Bo%2Bd9ERBkmbfyRrek9mLCM2DGFQ3%2BSQbRvQuw7qVXLbu1fH9%2BVVfT9hU2ucHAMMfg8cAGOqUBuik2x734n%2FliFlKStrI8PGDbQpnDCmNSUSt2%2BmqOoKktqd7XBXXN%2BusmWAf0B6Yx0k9cKNnFxR7RwH7mY4DyZW%2Fz4XDQt%2BxwMAuHUT8LUeN0x1W0p2EhErjCou3lHfaVhhpCJCEY4JsShLZdoyhC7Z0n3M3xvR12ORV2jXE%2FLAIOMpr7dLJIfuq6np5F917DVKbfBrcqfHP%2B0QEaU6975e43k9iH&X-Amz-Signature=6d104f455afe75fb3a4d60ec6b9f5275d54811a269c31146c2b66779d7e009ec&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
