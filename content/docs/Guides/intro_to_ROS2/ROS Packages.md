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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A35YXD7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQRXObUEqeLyeMNGsOZizRMl1WWRB642f4syrOoVjyIwIgSU7S3iDVcar2%2Fo8Y0QCdcl%2Fk6LgeBe5ZMIrD8sOVgUgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN917abe8pt9fpn0yrcA4xcw9rt5dAvarqWEmYnBRIw9kmpq1QI%2FsUrH87ftKiNoyCv9aXuBkCr3j17BCFV5eh20FTvSFIZTV6CGqOvJf2d8j1Z3VIW1rWQfE5lsy5z3jidpS2qvCzNjE79A%2FDbgAZjGSh%2B3KtzBWb%2BVNIXkzAxt0fEWgipsWBMZB%2B2nMsNxElAkI4NPszTKDHFAnvjXNHSjQjNiE388IF61EY6VosRsbmUaEXtozpeMVQHTjU7UZ2HMCTZy2eYJsAt1SgST1qpGHP0OabuaD4bhYVfmtiL3lEU%2F0diYro4GhOwja%2FjFcPafTA5btM6LHbnJFfZrKSVCf3uJte0cS9bi7Uo1Xs2h5sdyekAArVCTZGQ2aXc7d%2BRCsLQfp3JhbljB0a8IOC0CZMr7fOs2plx51U3HahP3ewsLfkkm8oNCRaptKUyAXmkbdWwMoHie7FcvIcqZtEw1g9K1kz5YLG0Cr%2B6ZLDSiFFeKOdCSfYFser4uiX3%2B%2F6RJjkrpGek7fcNwiSQ11%2BIlX%2BIqWBH5ZOtSGQeTm9dIO3JueH%2FMOkdLBfaleno%2BP8xsEgHD7p4qP4%2B9J0zohxeQgP4LJcN1YagvQBsFONBCcUtJmKv2cqdlDPcK7%2BsGuqD9UnSL0paRYPhMJS47sMGOqUBJ0GsF9vJeUDMIy4LqoXOlrc0BalBBzSo3cA9%2BC6NttjPnPbc6sfLgJJPTf0du7KdinXy0rpjNJWfBmRGobzbtfrBOgxCNYms6ZrsEW68rN5kKtjEV2XhHHRDVAOZX11xZAzHyGwD%2Bm48xrUBfxLMPkbP83IvwDbtbPqtRj0HR2KAhSCE%2FGkKc97RitGax4Q83HEdOZNk3lKhOmui3SBDOveD5QyF&X-Amz-Signature=5d04530ceb00da4ea1d8e094248a334b2a60a98e8bf553d53a1ff143b8df3a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A35YXD7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQRXObUEqeLyeMNGsOZizRMl1WWRB642f4syrOoVjyIwIgSU7S3iDVcar2%2Fo8Y0QCdcl%2Fk6LgeBe5ZMIrD8sOVgUgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN917abe8pt9fpn0yrcA4xcw9rt5dAvarqWEmYnBRIw9kmpq1QI%2FsUrH87ftKiNoyCv9aXuBkCr3j17BCFV5eh20FTvSFIZTV6CGqOvJf2d8j1Z3VIW1rWQfE5lsy5z3jidpS2qvCzNjE79A%2FDbgAZjGSh%2B3KtzBWb%2BVNIXkzAxt0fEWgipsWBMZB%2B2nMsNxElAkI4NPszTKDHFAnvjXNHSjQjNiE388IF61EY6VosRsbmUaEXtozpeMVQHTjU7UZ2HMCTZy2eYJsAt1SgST1qpGHP0OabuaD4bhYVfmtiL3lEU%2F0diYro4GhOwja%2FjFcPafTA5btM6LHbnJFfZrKSVCf3uJte0cS9bi7Uo1Xs2h5sdyekAArVCTZGQ2aXc7d%2BRCsLQfp3JhbljB0a8IOC0CZMr7fOs2plx51U3HahP3ewsLfkkm8oNCRaptKUyAXmkbdWwMoHie7FcvIcqZtEw1g9K1kz5YLG0Cr%2B6ZLDSiFFeKOdCSfYFser4uiX3%2B%2F6RJjkrpGek7fcNwiSQ11%2BIlX%2BIqWBH5ZOtSGQeTm9dIO3JueH%2FMOkdLBfaleno%2BP8xsEgHD7p4qP4%2B9J0zohxeQgP4LJcN1YagvQBsFONBCcUtJmKv2cqdlDPcK7%2BsGuqD9UnSL0paRYPhMJS47sMGOqUBJ0GsF9vJeUDMIy4LqoXOlrc0BalBBzSo3cA9%2BC6NttjPnPbc6sfLgJJPTf0du7KdinXy0rpjNJWfBmRGobzbtfrBOgxCNYms6ZrsEW68rN5kKtjEV2XhHHRDVAOZX11xZAzHyGwD%2Bm48xrUBfxLMPkbP83IvwDbtbPqtRj0HR2KAhSCE%2FGkKc97RitGax4Q83HEdOZNk3lKhOmui3SBDOveD5QyF&X-Amz-Signature=b4495b2c34264ee6594eaa4aa2be6a0d8932982f14e0a63271dfcd2bafe1b6ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A35YXD7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQRXObUEqeLyeMNGsOZizRMl1WWRB642f4syrOoVjyIwIgSU7S3iDVcar2%2Fo8Y0QCdcl%2Fk6LgeBe5ZMIrD8sOVgUgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN917abe8pt9fpn0yrcA4xcw9rt5dAvarqWEmYnBRIw9kmpq1QI%2FsUrH87ftKiNoyCv9aXuBkCr3j17BCFV5eh20FTvSFIZTV6CGqOvJf2d8j1Z3VIW1rWQfE5lsy5z3jidpS2qvCzNjE79A%2FDbgAZjGSh%2B3KtzBWb%2BVNIXkzAxt0fEWgipsWBMZB%2B2nMsNxElAkI4NPszTKDHFAnvjXNHSjQjNiE388IF61EY6VosRsbmUaEXtozpeMVQHTjU7UZ2HMCTZy2eYJsAt1SgST1qpGHP0OabuaD4bhYVfmtiL3lEU%2F0diYro4GhOwja%2FjFcPafTA5btM6LHbnJFfZrKSVCf3uJte0cS9bi7Uo1Xs2h5sdyekAArVCTZGQ2aXc7d%2BRCsLQfp3JhbljB0a8IOC0CZMr7fOs2plx51U3HahP3ewsLfkkm8oNCRaptKUyAXmkbdWwMoHie7FcvIcqZtEw1g9K1kz5YLG0Cr%2B6ZLDSiFFeKOdCSfYFser4uiX3%2B%2F6RJjkrpGek7fcNwiSQ11%2BIlX%2BIqWBH5ZOtSGQeTm9dIO3JueH%2FMOkdLBfaleno%2BP8xsEgHD7p4qP4%2B9J0zohxeQgP4LJcN1YagvQBsFONBCcUtJmKv2cqdlDPcK7%2BsGuqD9UnSL0paRYPhMJS47sMGOqUBJ0GsF9vJeUDMIy4LqoXOlrc0BalBBzSo3cA9%2BC6NttjPnPbc6sfLgJJPTf0du7KdinXy0rpjNJWfBmRGobzbtfrBOgxCNYms6ZrsEW68rN5kKtjEV2XhHHRDVAOZX11xZAzHyGwD%2Bm48xrUBfxLMPkbP83IvwDbtbPqtRj0HR2KAhSCE%2FGkKc97RitGax4Q83HEdOZNk3lKhOmui3SBDOveD5QyF&X-Amz-Signature=06354226c66301554301c68f73dab03e81c683c8c27b830b6a6be938cfb738c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A35YXD7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQRXObUEqeLyeMNGsOZizRMl1WWRB642f4syrOoVjyIwIgSU7S3iDVcar2%2Fo8Y0QCdcl%2Fk6LgeBe5ZMIrD8sOVgUgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN917abe8pt9fpn0yrcA4xcw9rt5dAvarqWEmYnBRIw9kmpq1QI%2FsUrH87ftKiNoyCv9aXuBkCr3j17BCFV5eh20FTvSFIZTV6CGqOvJf2d8j1Z3VIW1rWQfE5lsy5z3jidpS2qvCzNjE79A%2FDbgAZjGSh%2B3KtzBWb%2BVNIXkzAxt0fEWgipsWBMZB%2B2nMsNxElAkI4NPszTKDHFAnvjXNHSjQjNiE388IF61EY6VosRsbmUaEXtozpeMVQHTjU7UZ2HMCTZy2eYJsAt1SgST1qpGHP0OabuaD4bhYVfmtiL3lEU%2F0diYro4GhOwja%2FjFcPafTA5btM6LHbnJFfZrKSVCf3uJte0cS9bi7Uo1Xs2h5sdyekAArVCTZGQ2aXc7d%2BRCsLQfp3JhbljB0a8IOC0CZMr7fOs2plx51U3HahP3ewsLfkkm8oNCRaptKUyAXmkbdWwMoHie7FcvIcqZtEw1g9K1kz5YLG0Cr%2B6ZLDSiFFeKOdCSfYFser4uiX3%2B%2F6RJjkrpGek7fcNwiSQ11%2BIlX%2BIqWBH5ZOtSGQeTm9dIO3JueH%2FMOkdLBfaleno%2BP8xsEgHD7p4qP4%2B9J0zohxeQgP4LJcN1YagvQBsFONBCcUtJmKv2cqdlDPcK7%2BsGuqD9UnSL0paRYPhMJS47sMGOqUBJ0GsF9vJeUDMIy4LqoXOlrc0BalBBzSo3cA9%2BC6NttjPnPbc6sfLgJJPTf0du7KdinXy0rpjNJWfBmRGobzbtfrBOgxCNYms6ZrsEW68rN5kKtjEV2XhHHRDVAOZX11xZAzHyGwD%2Bm48xrUBfxLMPkbP83IvwDbtbPqtRj0HR2KAhSCE%2FGkKc97RitGax4Q83HEdOZNk3lKhOmui3SBDOveD5QyF&X-Amz-Signature=afd3527c07be6d6904099c3849a53c7ac5a9dc235b2013ee97dbb6183706b516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A35YXD7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQRXObUEqeLyeMNGsOZizRMl1WWRB642f4syrOoVjyIwIgSU7S3iDVcar2%2Fo8Y0QCdcl%2Fk6LgeBe5ZMIrD8sOVgUgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN917abe8pt9fpn0yrcA4xcw9rt5dAvarqWEmYnBRIw9kmpq1QI%2FsUrH87ftKiNoyCv9aXuBkCr3j17BCFV5eh20FTvSFIZTV6CGqOvJf2d8j1Z3VIW1rWQfE5lsy5z3jidpS2qvCzNjE79A%2FDbgAZjGSh%2B3KtzBWb%2BVNIXkzAxt0fEWgipsWBMZB%2B2nMsNxElAkI4NPszTKDHFAnvjXNHSjQjNiE388IF61EY6VosRsbmUaEXtozpeMVQHTjU7UZ2HMCTZy2eYJsAt1SgST1qpGHP0OabuaD4bhYVfmtiL3lEU%2F0diYro4GhOwja%2FjFcPafTA5btM6LHbnJFfZrKSVCf3uJte0cS9bi7Uo1Xs2h5sdyekAArVCTZGQ2aXc7d%2BRCsLQfp3JhbljB0a8IOC0CZMr7fOs2plx51U3HahP3ewsLfkkm8oNCRaptKUyAXmkbdWwMoHie7FcvIcqZtEw1g9K1kz5YLG0Cr%2B6ZLDSiFFeKOdCSfYFser4uiX3%2B%2F6RJjkrpGek7fcNwiSQ11%2BIlX%2BIqWBH5ZOtSGQeTm9dIO3JueH%2FMOkdLBfaleno%2BP8xsEgHD7p4qP4%2B9J0zohxeQgP4LJcN1YagvQBsFONBCcUtJmKv2cqdlDPcK7%2BsGuqD9UnSL0paRYPhMJS47sMGOqUBJ0GsF9vJeUDMIy4LqoXOlrc0BalBBzSo3cA9%2BC6NttjPnPbc6sfLgJJPTf0du7KdinXy0rpjNJWfBmRGobzbtfrBOgxCNYms6ZrsEW68rN5kKtjEV2XhHHRDVAOZX11xZAzHyGwD%2Bm48xrUBfxLMPkbP83IvwDbtbPqtRj0HR2KAhSCE%2FGkKc97RitGax4Q83HEdOZNk3lKhOmui3SBDOveD5QyF&X-Amz-Signature=9e5a844476fe829bfc6ba74513cba7c3737994ca7dd7c04e0c5d12f6f392790b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A35YXD7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQRXObUEqeLyeMNGsOZizRMl1WWRB642f4syrOoVjyIwIgSU7S3iDVcar2%2Fo8Y0QCdcl%2Fk6LgeBe5ZMIrD8sOVgUgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN917abe8pt9fpn0yrcA4xcw9rt5dAvarqWEmYnBRIw9kmpq1QI%2FsUrH87ftKiNoyCv9aXuBkCr3j17BCFV5eh20FTvSFIZTV6CGqOvJf2d8j1Z3VIW1rWQfE5lsy5z3jidpS2qvCzNjE79A%2FDbgAZjGSh%2B3KtzBWb%2BVNIXkzAxt0fEWgipsWBMZB%2B2nMsNxElAkI4NPszTKDHFAnvjXNHSjQjNiE388IF61EY6VosRsbmUaEXtozpeMVQHTjU7UZ2HMCTZy2eYJsAt1SgST1qpGHP0OabuaD4bhYVfmtiL3lEU%2F0diYro4GhOwja%2FjFcPafTA5btM6LHbnJFfZrKSVCf3uJte0cS9bi7Uo1Xs2h5sdyekAArVCTZGQ2aXc7d%2BRCsLQfp3JhbljB0a8IOC0CZMr7fOs2plx51U3HahP3ewsLfkkm8oNCRaptKUyAXmkbdWwMoHie7FcvIcqZtEw1g9K1kz5YLG0Cr%2B6ZLDSiFFeKOdCSfYFser4uiX3%2B%2F6RJjkrpGek7fcNwiSQ11%2BIlX%2BIqWBH5ZOtSGQeTm9dIO3JueH%2FMOkdLBfaleno%2BP8xsEgHD7p4qP4%2B9J0zohxeQgP4LJcN1YagvQBsFONBCcUtJmKv2cqdlDPcK7%2BsGuqD9UnSL0paRYPhMJS47sMGOqUBJ0GsF9vJeUDMIy4LqoXOlrc0BalBBzSo3cA9%2BC6NttjPnPbc6sfLgJJPTf0du7KdinXy0rpjNJWfBmRGobzbtfrBOgxCNYms6ZrsEW68rN5kKtjEV2XhHHRDVAOZX11xZAzHyGwD%2Bm48xrUBfxLMPkbP83IvwDbtbPqtRj0HR2KAhSCE%2FGkKc97RitGax4Q83HEdOZNk3lKhOmui3SBDOveD5QyF&X-Amz-Signature=93902b723944ccee6d8595840380dc10b0042549ed4a2b380e57db5a2365f798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A35YXD7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQRXObUEqeLyeMNGsOZizRMl1WWRB642f4syrOoVjyIwIgSU7S3iDVcar2%2Fo8Y0QCdcl%2Fk6LgeBe5ZMIrD8sOVgUgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN917abe8pt9fpn0yrcA4xcw9rt5dAvarqWEmYnBRIw9kmpq1QI%2FsUrH87ftKiNoyCv9aXuBkCr3j17BCFV5eh20FTvSFIZTV6CGqOvJf2d8j1Z3VIW1rWQfE5lsy5z3jidpS2qvCzNjE79A%2FDbgAZjGSh%2B3KtzBWb%2BVNIXkzAxt0fEWgipsWBMZB%2B2nMsNxElAkI4NPszTKDHFAnvjXNHSjQjNiE388IF61EY6VosRsbmUaEXtozpeMVQHTjU7UZ2HMCTZy2eYJsAt1SgST1qpGHP0OabuaD4bhYVfmtiL3lEU%2F0diYro4GhOwja%2FjFcPafTA5btM6LHbnJFfZrKSVCf3uJte0cS9bi7Uo1Xs2h5sdyekAArVCTZGQ2aXc7d%2BRCsLQfp3JhbljB0a8IOC0CZMr7fOs2plx51U3HahP3ewsLfkkm8oNCRaptKUyAXmkbdWwMoHie7FcvIcqZtEw1g9K1kz5YLG0Cr%2B6ZLDSiFFeKOdCSfYFser4uiX3%2B%2F6RJjkrpGek7fcNwiSQ11%2BIlX%2BIqWBH5ZOtSGQeTm9dIO3JueH%2FMOkdLBfaleno%2BP8xsEgHD7p4qP4%2B9J0zohxeQgP4LJcN1YagvQBsFONBCcUtJmKv2cqdlDPcK7%2BsGuqD9UnSL0paRYPhMJS47sMGOqUBJ0GsF9vJeUDMIy4LqoXOlrc0BalBBzSo3cA9%2BC6NttjPnPbc6sfLgJJPTf0du7KdinXy0rpjNJWfBmRGobzbtfrBOgxCNYms6ZrsEW68rN5kKtjEV2XhHHRDVAOZX11xZAzHyGwD%2Bm48xrUBfxLMPkbP83IvwDbtbPqtRj0HR2KAhSCE%2FGkKc97RitGax4Q83HEdOZNk3lKhOmui3SBDOveD5QyF&X-Amz-Signature=b1e5213e3ea34f85513c0276e51fd7b8e5e38bbf1418092adbdf7e7b6c87fd6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
