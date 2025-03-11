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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667324KMVZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDeljXmL7AnX9wHuwha9dsMF1eS1V27voJKKka3UfDjggIgYMxkFpWK0LhYc72KqC8TzBVLXvbADhxrP%2Fy%2Bf08GTJ4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEMW%2Bh8riESKrCPsyrcAwkG7d%2Bi%2Fd21ciJjPYFt0GHPq12vjncSTCZffYINmC47VCNdMWZTZl7c%2BnNMBz1jcGIxkf8TUaBJX%2BPNA5ieXlbrvcY8hsEVLbaYqtiQNxg4gCV70GwFNOuz1Em5qxOEbNDclI8QmxNsj2igy894DkIYUYCMCXRih7c%2FNnn7dwCOTQ%2BnrYL7YXdvLQHonZS0xfMaVJdhcW4ZFOuaqT3rnWAGk9JgeEaAClG%2F1vNvKt8lx0O7%2Bf8fXo3GKrIH%2FmkT9k%2By%2B8nOJtr8mSgqM7r02VX1acoSWCdc7R5FDEVMmPZ0i5oHlgMdoffe1RZfcRlz0hjmwCS7A6mZnmxwxvoGMC6eFxQ%2FvGxk42ZZNt5tcP1CgJ7kdlR7%2F7YJoE6S1fHg2QPi40V7nxP3gP%2BoZGFY6KTAPhotJ4fmCcMCGov7vMrwl5ucIm2jDez0VjoGdwgPPgZEvDjA3Ea2Am4zzddGV1PBvd20MfW4QCXJNuoxbAQdDxSvR7o%2FU6PKaerBpV63j8r0kzLjmXGMJJkykujCd0mTLMaQiD5q8Rm6yLsrv8%2F5orO3IPH60TQV3tEdcSK4PFVGJThMsb2gK5y19JtOSXyskvTxPLL0wwQgn7coZn%2BcQuo0sJrEByx9maNCMOyxwr4GOqUBfyCgHBqeJSMY7WzYa8267PmrA1To7jfHMGPRpY1GbR1qWo5xBlBEZMaB1IcxeGrQ0M3lJvTZfFC4IjvZEBU9h3gbN5J5K5ufa3z9NJSgaptZy4FmXIxsTZpiu2M%2FtNhk8MOWk33y7mucONV0iFu6uJZP95h0rLkt3fc92E5ei%2BHaJXM8EApiF9A5m%2FIjrR4aPe2fwg8uvt6LB4F%2FSSC%2FnODW9any&X-Amz-Signature=258ce23947748320f130c63804d0c01d9b74f2d6caa70f0ebeeed6c1d3284c90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667324KMVZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDeljXmL7AnX9wHuwha9dsMF1eS1V27voJKKka3UfDjggIgYMxkFpWK0LhYc72KqC8TzBVLXvbADhxrP%2Fy%2Bf08GTJ4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEMW%2Bh8riESKrCPsyrcAwkG7d%2Bi%2Fd21ciJjPYFt0GHPq12vjncSTCZffYINmC47VCNdMWZTZl7c%2BnNMBz1jcGIxkf8TUaBJX%2BPNA5ieXlbrvcY8hsEVLbaYqtiQNxg4gCV70GwFNOuz1Em5qxOEbNDclI8QmxNsj2igy894DkIYUYCMCXRih7c%2FNnn7dwCOTQ%2BnrYL7YXdvLQHonZS0xfMaVJdhcW4ZFOuaqT3rnWAGk9JgeEaAClG%2F1vNvKt8lx0O7%2Bf8fXo3GKrIH%2FmkT9k%2By%2B8nOJtr8mSgqM7r02VX1acoSWCdc7R5FDEVMmPZ0i5oHlgMdoffe1RZfcRlz0hjmwCS7A6mZnmxwxvoGMC6eFxQ%2FvGxk42ZZNt5tcP1CgJ7kdlR7%2F7YJoE6S1fHg2QPi40V7nxP3gP%2BoZGFY6KTAPhotJ4fmCcMCGov7vMrwl5ucIm2jDez0VjoGdwgPPgZEvDjA3Ea2Am4zzddGV1PBvd20MfW4QCXJNuoxbAQdDxSvR7o%2FU6PKaerBpV63j8r0kzLjmXGMJJkykujCd0mTLMaQiD5q8Rm6yLsrv8%2F5orO3IPH60TQV3tEdcSK4PFVGJThMsb2gK5y19JtOSXyskvTxPLL0wwQgn7coZn%2BcQuo0sJrEByx9maNCMOyxwr4GOqUBfyCgHBqeJSMY7WzYa8267PmrA1To7jfHMGPRpY1GbR1qWo5xBlBEZMaB1IcxeGrQ0M3lJvTZfFC4IjvZEBU9h3gbN5J5K5ufa3z9NJSgaptZy4FmXIxsTZpiu2M%2FtNhk8MOWk33y7mucONV0iFu6uJZP95h0rLkt3fc92E5ei%2BHaJXM8EApiF9A5m%2FIjrR4aPe2fwg8uvt6LB4F%2FSSC%2FnODW9any&X-Amz-Signature=7f28fb13509a96a1b6d3aac774c05e1b183ecf2aac9851b06afe1ec8696e50b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667324KMVZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDeljXmL7AnX9wHuwha9dsMF1eS1V27voJKKka3UfDjggIgYMxkFpWK0LhYc72KqC8TzBVLXvbADhxrP%2Fy%2Bf08GTJ4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEMW%2Bh8riESKrCPsyrcAwkG7d%2Bi%2Fd21ciJjPYFt0GHPq12vjncSTCZffYINmC47VCNdMWZTZl7c%2BnNMBz1jcGIxkf8TUaBJX%2BPNA5ieXlbrvcY8hsEVLbaYqtiQNxg4gCV70GwFNOuz1Em5qxOEbNDclI8QmxNsj2igy894DkIYUYCMCXRih7c%2FNnn7dwCOTQ%2BnrYL7YXdvLQHonZS0xfMaVJdhcW4ZFOuaqT3rnWAGk9JgeEaAClG%2F1vNvKt8lx0O7%2Bf8fXo3GKrIH%2FmkT9k%2By%2B8nOJtr8mSgqM7r02VX1acoSWCdc7R5FDEVMmPZ0i5oHlgMdoffe1RZfcRlz0hjmwCS7A6mZnmxwxvoGMC6eFxQ%2FvGxk42ZZNt5tcP1CgJ7kdlR7%2F7YJoE6S1fHg2QPi40V7nxP3gP%2BoZGFY6KTAPhotJ4fmCcMCGov7vMrwl5ucIm2jDez0VjoGdwgPPgZEvDjA3Ea2Am4zzddGV1PBvd20MfW4QCXJNuoxbAQdDxSvR7o%2FU6PKaerBpV63j8r0kzLjmXGMJJkykujCd0mTLMaQiD5q8Rm6yLsrv8%2F5orO3IPH60TQV3tEdcSK4PFVGJThMsb2gK5y19JtOSXyskvTxPLL0wwQgn7coZn%2BcQuo0sJrEByx9maNCMOyxwr4GOqUBfyCgHBqeJSMY7WzYa8267PmrA1To7jfHMGPRpY1GbR1qWo5xBlBEZMaB1IcxeGrQ0M3lJvTZfFC4IjvZEBU9h3gbN5J5K5ufa3z9NJSgaptZy4FmXIxsTZpiu2M%2FtNhk8MOWk33y7mucONV0iFu6uJZP95h0rLkt3fc92E5ei%2BHaJXM8EApiF9A5m%2FIjrR4aPe2fwg8uvt6LB4F%2FSSC%2FnODW9any&X-Amz-Signature=8dc42d39bd18f0200fd7f33eac61fd17e1c71f26ab05007506707b68669cf853&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667324KMVZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDeljXmL7AnX9wHuwha9dsMF1eS1V27voJKKka3UfDjggIgYMxkFpWK0LhYc72KqC8TzBVLXvbADhxrP%2Fy%2Bf08GTJ4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEMW%2Bh8riESKrCPsyrcAwkG7d%2Bi%2Fd21ciJjPYFt0GHPq12vjncSTCZffYINmC47VCNdMWZTZl7c%2BnNMBz1jcGIxkf8TUaBJX%2BPNA5ieXlbrvcY8hsEVLbaYqtiQNxg4gCV70GwFNOuz1Em5qxOEbNDclI8QmxNsj2igy894DkIYUYCMCXRih7c%2FNnn7dwCOTQ%2BnrYL7YXdvLQHonZS0xfMaVJdhcW4ZFOuaqT3rnWAGk9JgeEaAClG%2F1vNvKt8lx0O7%2Bf8fXo3GKrIH%2FmkT9k%2By%2B8nOJtr8mSgqM7r02VX1acoSWCdc7R5FDEVMmPZ0i5oHlgMdoffe1RZfcRlz0hjmwCS7A6mZnmxwxvoGMC6eFxQ%2FvGxk42ZZNt5tcP1CgJ7kdlR7%2F7YJoE6S1fHg2QPi40V7nxP3gP%2BoZGFY6KTAPhotJ4fmCcMCGov7vMrwl5ucIm2jDez0VjoGdwgPPgZEvDjA3Ea2Am4zzddGV1PBvd20MfW4QCXJNuoxbAQdDxSvR7o%2FU6PKaerBpV63j8r0kzLjmXGMJJkykujCd0mTLMaQiD5q8Rm6yLsrv8%2F5orO3IPH60TQV3tEdcSK4PFVGJThMsb2gK5y19JtOSXyskvTxPLL0wwQgn7coZn%2BcQuo0sJrEByx9maNCMOyxwr4GOqUBfyCgHBqeJSMY7WzYa8267PmrA1To7jfHMGPRpY1GbR1qWo5xBlBEZMaB1IcxeGrQ0M3lJvTZfFC4IjvZEBU9h3gbN5J5K5ufa3z9NJSgaptZy4FmXIxsTZpiu2M%2FtNhk8MOWk33y7mucONV0iFu6uJZP95h0rLkt3fc92E5ei%2BHaJXM8EApiF9A5m%2FIjrR4aPe2fwg8uvt6LB4F%2FSSC%2FnODW9any&X-Amz-Signature=2763b048835e952fb3769f964740a7eb6cc2baa0d96b365f64d1eacb83dfc587&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667324KMVZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDeljXmL7AnX9wHuwha9dsMF1eS1V27voJKKka3UfDjggIgYMxkFpWK0LhYc72KqC8TzBVLXvbADhxrP%2Fy%2Bf08GTJ4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEMW%2Bh8riESKrCPsyrcAwkG7d%2Bi%2Fd21ciJjPYFt0GHPq12vjncSTCZffYINmC47VCNdMWZTZl7c%2BnNMBz1jcGIxkf8TUaBJX%2BPNA5ieXlbrvcY8hsEVLbaYqtiQNxg4gCV70GwFNOuz1Em5qxOEbNDclI8QmxNsj2igy894DkIYUYCMCXRih7c%2FNnn7dwCOTQ%2BnrYL7YXdvLQHonZS0xfMaVJdhcW4ZFOuaqT3rnWAGk9JgeEaAClG%2F1vNvKt8lx0O7%2Bf8fXo3GKrIH%2FmkT9k%2By%2B8nOJtr8mSgqM7r02VX1acoSWCdc7R5FDEVMmPZ0i5oHlgMdoffe1RZfcRlz0hjmwCS7A6mZnmxwxvoGMC6eFxQ%2FvGxk42ZZNt5tcP1CgJ7kdlR7%2F7YJoE6S1fHg2QPi40V7nxP3gP%2BoZGFY6KTAPhotJ4fmCcMCGov7vMrwl5ucIm2jDez0VjoGdwgPPgZEvDjA3Ea2Am4zzddGV1PBvd20MfW4QCXJNuoxbAQdDxSvR7o%2FU6PKaerBpV63j8r0kzLjmXGMJJkykujCd0mTLMaQiD5q8Rm6yLsrv8%2F5orO3IPH60TQV3tEdcSK4PFVGJThMsb2gK5y19JtOSXyskvTxPLL0wwQgn7coZn%2BcQuo0sJrEByx9maNCMOyxwr4GOqUBfyCgHBqeJSMY7WzYa8267PmrA1To7jfHMGPRpY1GbR1qWo5xBlBEZMaB1IcxeGrQ0M3lJvTZfFC4IjvZEBU9h3gbN5J5K5ufa3z9NJSgaptZy4FmXIxsTZpiu2M%2FtNhk8MOWk33y7mucONV0iFu6uJZP95h0rLkt3fc92E5ei%2BHaJXM8EApiF9A5m%2FIjrR4aPe2fwg8uvt6LB4F%2FSSC%2FnODW9any&X-Amz-Signature=1c6c11a7a042b5e812642db22aac1ea5c3755cadbdebb7b8e7eb71067542f383&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667324KMVZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDeljXmL7AnX9wHuwha9dsMF1eS1V27voJKKka3UfDjggIgYMxkFpWK0LhYc72KqC8TzBVLXvbADhxrP%2Fy%2Bf08GTJ4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEMW%2Bh8riESKrCPsyrcAwkG7d%2Bi%2Fd21ciJjPYFt0GHPq12vjncSTCZffYINmC47VCNdMWZTZl7c%2BnNMBz1jcGIxkf8TUaBJX%2BPNA5ieXlbrvcY8hsEVLbaYqtiQNxg4gCV70GwFNOuz1Em5qxOEbNDclI8QmxNsj2igy894DkIYUYCMCXRih7c%2FNnn7dwCOTQ%2BnrYL7YXdvLQHonZS0xfMaVJdhcW4ZFOuaqT3rnWAGk9JgeEaAClG%2F1vNvKt8lx0O7%2Bf8fXo3GKrIH%2FmkT9k%2By%2B8nOJtr8mSgqM7r02VX1acoSWCdc7R5FDEVMmPZ0i5oHlgMdoffe1RZfcRlz0hjmwCS7A6mZnmxwxvoGMC6eFxQ%2FvGxk42ZZNt5tcP1CgJ7kdlR7%2F7YJoE6S1fHg2QPi40V7nxP3gP%2BoZGFY6KTAPhotJ4fmCcMCGov7vMrwl5ucIm2jDez0VjoGdwgPPgZEvDjA3Ea2Am4zzddGV1PBvd20MfW4QCXJNuoxbAQdDxSvR7o%2FU6PKaerBpV63j8r0kzLjmXGMJJkykujCd0mTLMaQiD5q8Rm6yLsrv8%2F5orO3IPH60TQV3tEdcSK4PFVGJThMsb2gK5y19JtOSXyskvTxPLL0wwQgn7coZn%2BcQuo0sJrEByx9maNCMOyxwr4GOqUBfyCgHBqeJSMY7WzYa8267PmrA1To7jfHMGPRpY1GbR1qWo5xBlBEZMaB1IcxeGrQ0M3lJvTZfFC4IjvZEBU9h3gbN5J5K5ufa3z9NJSgaptZy4FmXIxsTZpiu2M%2FtNhk8MOWk33y7mucONV0iFu6uJZP95h0rLkt3fc92E5ei%2BHaJXM8EApiF9A5m%2FIjrR4aPe2fwg8uvt6LB4F%2FSSC%2FnODW9any&X-Amz-Signature=7f230aae95d5de59c766d6923b242b76b2942a758aca13f63ee59b61f3cf4658&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667324KMVZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDeljXmL7AnX9wHuwha9dsMF1eS1V27voJKKka3UfDjggIgYMxkFpWK0LhYc72KqC8TzBVLXvbADhxrP%2Fy%2Bf08GTJ4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEMW%2Bh8riESKrCPsyrcAwkG7d%2Bi%2Fd21ciJjPYFt0GHPq12vjncSTCZffYINmC47VCNdMWZTZl7c%2BnNMBz1jcGIxkf8TUaBJX%2BPNA5ieXlbrvcY8hsEVLbaYqtiQNxg4gCV70GwFNOuz1Em5qxOEbNDclI8QmxNsj2igy894DkIYUYCMCXRih7c%2FNnn7dwCOTQ%2BnrYL7YXdvLQHonZS0xfMaVJdhcW4ZFOuaqT3rnWAGk9JgeEaAClG%2F1vNvKt8lx0O7%2Bf8fXo3GKrIH%2FmkT9k%2By%2B8nOJtr8mSgqM7r02VX1acoSWCdc7R5FDEVMmPZ0i5oHlgMdoffe1RZfcRlz0hjmwCS7A6mZnmxwxvoGMC6eFxQ%2FvGxk42ZZNt5tcP1CgJ7kdlR7%2F7YJoE6S1fHg2QPi40V7nxP3gP%2BoZGFY6KTAPhotJ4fmCcMCGov7vMrwl5ucIm2jDez0VjoGdwgPPgZEvDjA3Ea2Am4zzddGV1PBvd20MfW4QCXJNuoxbAQdDxSvR7o%2FU6PKaerBpV63j8r0kzLjmXGMJJkykujCd0mTLMaQiD5q8Rm6yLsrv8%2F5orO3IPH60TQV3tEdcSK4PFVGJThMsb2gK5y19JtOSXyskvTxPLL0wwQgn7coZn%2BcQuo0sJrEByx9maNCMOyxwr4GOqUBfyCgHBqeJSMY7WzYa8267PmrA1To7jfHMGPRpY1GbR1qWo5xBlBEZMaB1IcxeGrQ0M3lJvTZfFC4IjvZEBU9h3gbN5J5K5ufa3z9NJSgaptZy4FmXIxsTZpiu2M%2FtNhk8MOWk33y7mucONV0iFu6uJZP95h0rLkt3fc92E5ei%2BHaJXM8EApiF9A5m%2FIjrR4aPe2fwg8uvt6LB4F%2FSSC%2FnODW9any&X-Amz-Signature=ab37b21e40a58992e332d26d431415f3ae390f3c630008f2b15f33cfba4e9e64&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
