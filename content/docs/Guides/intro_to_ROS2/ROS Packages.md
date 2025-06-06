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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNRUEH7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFZrXI9PYjHmr5Z%2BaJfWymMmCrOQy0DJU4i6pv6NeeAiEA2CLDWbrT1CSkk%2FZnrWamriCB%2FcMUyKm0SBIMTTBTT1wq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHtZphC7xS8OTuIm4yrcA03atLcLm%2Bqlj%2Fd2m348UgwUwidCj8HYIwWakbqVWuqBIf6WRVNvMlPWAHL5GDRN3uugTwtrpwULwqyQgGhRQgItERBBIyXW%2BiuG%2FqS3shV6UnbiRAQSYmMJA%2FRHvBq%2BY6yPor7i4HJ0RqCoz%2FdK4Yon5v6x3aJZ%2FiPGwDhtuQWlRecF3ivQKMfOU5hEGt2pXilnmTBqSoygf7B9NzhRGTwbFNsUBKBo7GIuWfJ0aIKnMRu%2FXWoy9MNb8ctcv6ZDzKi3s%2Fhj0aCH5Gb2tPh74s4MXfaH6RI89sZ99TQZZZKXwFQmNCr50vhwkGr8CEdi7ITNDqh1cEsWLZEpOzel3xbHeGAFcz%2FgchUuOVQQbaYsBd73roWalLOpG65wthI%2Fs4G%2B8K7L6sfZM7ZptaBi%2BbIuXEduQfgFyrzpBaVDLBBinjPNq5maN7YHKnwTuahEnJ%2FYHv5KgnEoPI9YrTWoiEu4xTPIuIHj8uppifJb8QNtm8Du4BC68ZMK8PTyRAMSDSXfl4IoG2TwH5sZwjUYC1x03gYafiEMzCfgWZnaywNihgCRxEKR0Us%2FhK8zoGKzLrBR6P1bGwucOyQG9OydxzoRJUDSoM0elorF54i%2F0LQTGDHpjzO1CFXsGRrbMJGHi8IGOqUBrN7zKOqVzODF5pnAMEn%2B2uRPOohWTqDjo1H7tD0bt2yZu8bLPLoW61O06zr5%2FMJiO0y6UhbYZmuCVNgYpo3PgOB0G%2FXe5pu4op6eYeLIUZcpqciq1UXutgxPRI3Ekkd5K5kgPlx0Fw7V%2BxcxF0c0Ow1oOHSeKmm7oaFbp%2FLA2XkZ9WLm6SUPqIzKuRNHaPAp8d6ukXmy%2BjPe4l2a%2FIW1ym4CtNsE&X-Amz-Signature=2f142d9f3b4352f857457cca31426f0f4967b90b9fae35a52b6685fc8575c6e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNRUEH7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFZrXI9PYjHmr5Z%2BaJfWymMmCrOQy0DJU4i6pv6NeeAiEA2CLDWbrT1CSkk%2FZnrWamriCB%2FcMUyKm0SBIMTTBTT1wq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHtZphC7xS8OTuIm4yrcA03atLcLm%2Bqlj%2Fd2m348UgwUwidCj8HYIwWakbqVWuqBIf6WRVNvMlPWAHL5GDRN3uugTwtrpwULwqyQgGhRQgItERBBIyXW%2BiuG%2FqS3shV6UnbiRAQSYmMJA%2FRHvBq%2BY6yPor7i4HJ0RqCoz%2FdK4Yon5v6x3aJZ%2FiPGwDhtuQWlRecF3ivQKMfOU5hEGt2pXilnmTBqSoygf7B9NzhRGTwbFNsUBKBo7GIuWfJ0aIKnMRu%2FXWoy9MNb8ctcv6ZDzKi3s%2Fhj0aCH5Gb2tPh74s4MXfaH6RI89sZ99TQZZZKXwFQmNCr50vhwkGr8CEdi7ITNDqh1cEsWLZEpOzel3xbHeGAFcz%2FgchUuOVQQbaYsBd73roWalLOpG65wthI%2Fs4G%2B8K7L6sfZM7ZptaBi%2BbIuXEduQfgFyrzpBaVDLBBinjPNq5maN7YHKnwTuahEnJ%2FYHv5KgnEoPI9YrTWoiEu4xTPIuIHj8uppifJb8QNtm8Du4BC68ZMK8PTyRAMSDSXfl4IoG2TwH5sZwjUYC1x03gYafiEMzCfgWZnaywNihgCRxEKR0Us%2FhK8zoGKzLrBR6P1bGwucOyQG9OydxzoRJUDSoM0elorF54i%2F0LQTGDHpjzO1CFXsGRrbMJGHi8IGOqUBrN7zKOqVzODF5pnAMEn%2B2uRPOohWTqDjo1H7tD0bt2yZu8bLPLoW61O06zr5%2FMJiO0y6UhbYZmuCVNgYpo3PgOB0G%2FXe5pu4op6eYeLIUZcpqciq1UXutgxPRI3Ekkd5K5kgPlx0Fw7V%2BxcxF0c0Ow1oOHSeKmm7oaFbp%2FLA2XkZ9WLm6SUPqIzKuRNHaPAp8d6ukXmy%2BjPe4l2a%2FIW1ym4CtNsE&X-Amz-Signature=08e44a7130207abbd4192fbbb1307b0382caff1b6421d40ba5a310a29308795a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNRUEH7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFZrXI9PYjHmr5Z%2BaJfWymMmCrOQy0DJU4i6pv6NeeAiEA2CLDWbrT1CSkk%2FZnrWamriCB%2FcMUyKm0SBIMTTBTT1wq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHtZphC7xS8OTuIm4yrcA03atLcLm%2Bqlj%2Fd2m348UgwUwidCj8HYIwWakbqVWuqBIf6WRVNvMlPWAHL5GDRN3uugTwtrpwULwqyQgGhRQgItERBBIyXW%2BiuG%2FqS3shV6UnbiRAQSYmMJA%2FRHvBq%2BY6yPor7i4HJ0RqCoz%2FdK4Yon5v6x3aJZ%2FiPGwDhtuQWlRecF3ivQKMfOU5hEGt2pXilnmTBqSoygf7B9NzhRGTwbFNsUBKBo7GIuWfJ0aIKnMRu%2FXWoy9MNb8ctcv6ZDzKi3s%2Fhj0aCH5Gb2tPh74s4MXfaH6RI89sZ99TQZZZKXwFQmNCr50vhwkGr8CEdi7ITNDqh1cEsWLZEpOzel3xbHeGAFcz%2FgchUuOVQQbaYsBd73roWalLOpG65wthI%2Fs4G%2B8K7L6sfZM7ZptaBi%2BbIuXEduQfgFyrzpBaVDLBBinjPNq5maN7YHKnwTuahEnJ%2FYHv5KgnEoPI9YrTWoiEu4xTPIuIHj8uppifJb8QNtm8Du4BC68ZMK8PTyRAMSDSXfl4IoG2TwH5sZwjUYC1x03gYafiEMzCfgWZnaywNihgCRxEKR0Us%2FhK8zoGKzLrBR6P1bGwucOyQG9OydxzoRJUDSoM0elorF54i%2F0LQTGDHpjzO1CFXsGRrbMJGHi8IGOqUBrN7zKOqVzODF5pnAMEn%2B2uRPOohWTqDjo1H7tD0bt2yZu8bLPLoW61O06zr5%2FMJiO0y6UhbYZmuCVNgYpo3PgOB0G%2FXe5pu4op6eYeLIUZcpqciq1UXutgxPRI3Ekkd5K5kgPlx0Fw7V%2BxcxF0c0Ow1oOHSeKmm7oaFbp%2FLA2XkZ9WLm6SUPqIzKuRNHaPAp8d6ukXmy%2BjPe4l2a%2FIW1ym4CtNsE&X-Amz-Signature=d2f30ab6220b99da2dad84540f6bd31426260b5434ccc02b1715fcde6995d23f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNRUEH7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFZrXI9PYjHmr5Z%2BaJfWymMmCrOQy0DJU4i6pv6NeeAiEA2CLDWbrT1CSkk%2FZnrWamriCB%2FcMUyKm0SBIMTTBTT1wq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHtZphC7xS8OTuIm4yrcA03atLcLm%2Bqlj%2Fd2m348UgwUwidCj8HYIwWakbqVWuqBIf6WRVNvMlPWAHL5GDRN3uugTwtrpwULwqyQgGhRQgItERBBIyXW%2BiuG%2FqS3shV6UnbiRAQSYmMJA%2FRHvBq%2BY6yPor7i4HJ0RqCoz%2FdK4Yon5v6x3aJZ%2FiPGwDhtuQWlRecF3ivQKMfOU5hEGt2pXilnmTBqSoygf7B9NzhRGTwbFNsUBKBo7GIuWfJ0aIKnMRu%2FXWoy9MNb8ctcv6ZDzKi3s%2Fhj0aCH5Gb2tPh74s4MXfaH6RI89sZ99TQZZZKXwFQmNCr50vhwkGr8CEdi7ITNDqh1cEsWLZEpOzel3xbHeGAFcz%2FgchUuOVQQbaYsBd73roWalLOpG65wthI%2Fs4G%2B8K7L6sfZM7ZptaBi%2BbIuXEduQfgFyrzpBaVDLBBinjPNq5maN7YHKnwTuahEnJ%2FYHv5KgnEoPI9YrTWoiEu4xTPIuIHj8uppifJb8QNtm8Du4BC68ZMK8PTyRAMSDSXfl4IoG2TwH5sZwjUYC1x03gYafiEMzCfgWZnaywNihgCRxEKR0Us%2FhK8zoGKzLrBR6P1bGwucOyQG9OydxzoRJUDSoM0elorF54i%2F0LQTGDHpjzO1CFXsGRrbMJGHi8IGOqUBrN7zKOqVzODF5pnAMEn%2B2uRPOohWTqDjo1H7tD0bt2yZu8bLPLoW61O06zr5%2FMJiO0y6UhbYZmuCVNgYpo3PgOB0G%2FXe5pu4op6eYeLIUZcpqciq1UXutgxPRI3Ekkd5K5kgPlx0Fw7V%2BxcxF0c0Ow1oOHSeKmm7oaFbp%2FLA2XkZ9WLm6SUPqIzKuRNHaPAp8d6ukXmy%2BjPe4l2a%2FIW1ym4CtNsE&X-Amz-Signature=68ed57810cbb9b3bb5030868c2e30e425ad79b1771988ed9bb9d14e853cce498&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNRUEH7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFZrXI9PYjHmr5Z%2BaJfWymMmCrOQy0DJU4i6pv6NeeAiEA2CLDWbrT1CSkk%2FZnrWamriCB%2FcMUyKm0SBIMTTBTT1wq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHtZphC7xS8OTuIm4yrcA03atLcLm%2Bqlj%2Fd2m348UgwUwidCj8HYIwWakbqVWuqBIf6WRVNvMlPWAHL5GDRN3uugTwtrpwULwqyQgGhRQgItERBBIyXW%2BiuG%2FqS3shV6UnbiRAQSYmMJA%2FRHvBq%2BY6yPor7i4HJ0RqCoz%2FdK4Yon5v6x3aJZ%2FiPGwDhtuQWlRecF3ivQKMfOU5hEGt2pXilnmTBqSoygf7B9NzhRGTwbFNsUBKBo7GIuWfJ0aIKnMRu%2FXWoy9MNb8ctcv6ZDzKi3s%2Fhj0aCH5Gb2tPh74s4MXfaH6RI89sZ99TQZZZKXwFQmNCr50vhwkGr8CEdi7ITNDqh1cEsWLZEpOzel3xbHeGAFcz%2FgchUuOVQQbaYsBd73roWalLOpG65wthI%2Fs4G%2B8K7L6sfZM7ZptaBi%2BbIuXEduQfgFyrzpBaVDLBBinjPNq5maN7YHKnwTuahEnJ%2FYHv5KgnEoPI9YrTWoiEu4xTPIuIHj8uppifJb8QNtm8Du4BC68ZMK8PTyRAMSDSXfl4IoG2TwH5sZwjUYC1x03gYafiEMzCfgWZnaywNihgCRxEKR0Us%2FhK8zoGKzLrBR6P1bGwucOyQG9OydxzoRJUDSoM0elorF54i%2F0LQTGDHpjzO1CFXsGRrbMJGHi8IGOqUBrN7zKOqVzODF5pnAMEn%2B2uRPOohWTqDjo1H7tD0bt2yZu8bLPLoW61O06zr5%2FMJiO0y6UhbYZmuCVNgYpo3PgOB0G%2FXe5pu4op6eYeLIUZcpqciq1UXutgxPRI3Ekkd5K5kgPlx0Fw7V%2BxcxF0c0Ow1oOHSeKmm7oaFbp%2FLA2XkZ9WLm6SUPqIzKuRNHaPAp8d6ukXmy%2BjPe4l2a%2FIW1ym4CtNsE&X-Amz-Signature=df797ec5d099a77f689e5030f5b1beface8582a8b20f0cceb5d86fead889735a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNRUEH7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFZrXI9PYjHmr5Z%2BaJfWymMmCrOQy0DJU4i6pv6NeeAiEA2CLDWbrT1CSkk%2FZnrWamriCB%2FcMUyKm0SBIMTTBTT1wq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHtZphC7xS8OTuIm4yrcA03atLcLm%2Bqlj%2Fd2m348UgwUwidCj8HYIwWakbqVWuqBIf6WRVNvMlPWAHL5GDRN3uugTwtrpwULwqyQgGhRQgItERBBIyXW%2BiuG%2FqS3shV6UnbiRAQSYmMJA%2FRHvBq%2BY6yPor7i4HJ0RqCoz%2FdK4Yon5v6x3aJZ%2FiPGwDhtuQWlRecF3ivQKMfOU5hEGt2pXilnmTBqSoygf7B9NzhRGTwbFNsUBKBo7GIuWfJ0aIKnMRu%2FXWoy9MNb8ctcv6ZDzKi3s%2Fhj0aCH5Gb2tPh74s4MXfaH6RI89sZ99TQZZZKXwFQmNCr50vhwkGr8CEdi7ITNDqh1cEsWLZEpOzel3xbHeGAFcz%2FgchUuOVQQbaYsBd73roWalLOpG65wthI%2Fs4G%2B8K7L6sfZM7ZptaBi%2BbIuXEduQfgFyrzpBaVDLBBinjPNq5maN7YHKnwTuahEnJ%2FYHv5KgnEoPI9YrTWoiEu4xTPIuIHj8uppifJb8QNtm8Du4BC68ZMK8PTyRAMSDSXfl4IoG2TwH5sZwjUYC1x03gYafiEMzCfgWZnaywNihgCRxEKR0Us%2FhK8zoGKzLrBR6P1bGwucOyQG9OydxzoRJUDSoM0elorF54i%2F0LQTGDHpjzO1CFXsGRrbMJGHi8IGOqUBrN7zKOqVzODF5pnAMEn%2B2uRPOohWTqDjo1H7tD0bt2yZu8bLPLoW61O06zr5%2FMJiO0y6UhbYZmuCVNgYpo3PgOB0G%2FXe5pu4op6eYeLIUZcpqciq1UXutgxPRI3Ekkd5K5kgPlx0Fw7V%2BxcxF0c0Ow1oOHSeKmm7oaFbp%2FLA2XkZ9WLm6SUPqIzKuRNHaPAp8d6ukXmy%2BjPe4l2a%2FIW1ym4CtNsE&X-Amz-Signature=7571c8caf2234ad23f6cee332adfe9222f873bd1e4a895c7bd8c406b834004a8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNRUEH7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFZrXI9PYjHmr5Z%2BaJfWymMmCrOQy0DJU4i6pv6NeeAiEA2CLDWbrT1CSkk%2FZnrWamriCB%2FcMUyKm0SBIMTTBTT1wq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDHtZphC7xS8OTuIm4yrcA03atLcLm%2Bqlj%2Fd2m348UgwUwidCj8HYIwWakbqVWuqBIf6WRVNvMlPWAHL5GDRN3uugTwtrpwULwqyQgGhRQgItERBBIyXW%2BiuG%2FqS3shV6UnbiRAQSYmMJA%2FRHvBq%2BY6yPor7i4HJ0RqCoz%2FdK4Yon5v6x3aJZ%2FiPGwDhtuQWlRecF3ivQKMfOU5hEGt2pXilnmTBqSoygf7B9NzhRGTwbFNsUBKBo7GIuWfJ0aIKnMRu%2FXWoy9MNb8ctcv6ZDzKi3s%2Fhj0aCH5Gb2tPh74s4MXfaH6RI89sZ99TQZZZKXwFQmNCr50vhwkGr8CEdi7ITNDqh1cEsWLZEpOzel3xbHeGAFcz%2FgchUuOVQQbaYsBd73roWalLOpG65wthI%2Fs4G%2B8K7L6sfZM7ZptaBi%2BbIuXEduQfgFyrzpBaVDLBBinjPNq5maN7YHKnwTuahEnJ%2FYHv5KgnEoPI9YrTWoiEu4xTPIuIHj8uppifJb8QNtm8Du4BC68ZMK8PTyRAMSDSXfl4IoG2TwH5sZwjUYC1x03gYafiEMzCfgWZnaywNihgCRxEKR0Us%2FhK8zoGKzLrBR6P1bGwucOyQG9OydxzoRJUDSoM0elorF54i%2F0LQTGDHpjzO1CFXsGRrbMJGHi8IGOqUBrN7zKOqVzODF5pnAMEn%2B2uRPOohWTqDjo1H7tD0bt2yZu8bLPLoW61O06zr5%2FMJiO0y6UhbYZmuCVNgYpo3PgOB0G%2FXe5pu4op6eYeLIUZcpqciq1UXutgxPRI3Ekkd5K5kgPlx0Fw7V%2BxcxF0c0Ow1oOHSeKmm7oaFbp%2FLA2XkZ9WLm6SUPqIzKuRNHaPAp8d6ukXmy%2BjPe4l2a%2FIW1ym4CtNsE&X-Amz-Signature=fdd964054d4744233b38f050f3b981d9702e24f9fecca76e3a50f9ff62276b66&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
