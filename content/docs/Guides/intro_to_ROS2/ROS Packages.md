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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJ662SS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCgEFVOciQZ%2Bk5axNeHshe3iOvm3lLZa%2B%2B7Vom3EhH1SQIge56RmNrP%2BY%2FK0fICqyLmQDOZE9yt86mHijIUGBgoIAIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE9OI9jU7ktx5nQiFSrcA%2FcMLtzkxp3dS9CbfdtNfk0mFfSzr2GlSIx2NrBVojei4MBQdrA1k8wzGA7jCD06bnHhw7Lz0K%2BaWEIS1EjhhZm271tIbBPUVxZRkVKM3txobsU0cpFRFkrYpbgH945Ri1BCZ2IYa1iNcVhBRWMFR1wPQQBjEaYphxx6ObGUKoz3hEm0g1b9%2Fq3oW1C9Fr55uPq%2BZCxT34KukNd6I8ddpClN9Qw%2Fn7il20q9ul4b5oUkNa2%2FJN3Ddt%2BLsLdwZB9c7tRCVirfMMI5FYBC686nBnd%2Bnhuhb8aha6G8YmoVGVwH0k8GL6KQT3WtF2gxtw5%2BJMCuW6BqeMgL9H5g7Up3iUD379mfJShMRIO%2BS1a7bLlx75JbRitw%2FNyve7v6o7WOA2IGKb6PAAa5CwkSStxPQxBYt6I2EKmgdVY8HHFG83izueV6pSAcdvVEty9tA%2B280Ml%2B7gRXZKwn%2BpU5y%2Bpz3c0Li%2BIZocMy9ficusI%2BWLstn5l%2FTbO0lqWejFUB%2BVqS33Sn4zTP5Ze5JdHWg5fRystA4HyNEqi3sIr5twopcosQkcWDw0FjlivQl2V4OSTQWml3CefxadB1PSV1UgUK0yW2%2Bzj%2BroQ5opiVnZn1Ptif8yScIzhLGK9hEB4vMO%2FB9MIGOqUBx9ZhiQdnlncSiJ1cFPjiYL0sO%2F2RkQTQxAhq%2Bls6VOutvH%2BsvBLu1PLFgCFpTHc%2Bi87RHWOJPvne%2FfwRVtR8RCl2Hi1a7kiWyylF4Hk%2FvNGSb3EC8F07JkUt%2B%2FXolKyzbu%2BkSh4q5AkLXL%2FK2W6Jq%2FJ1nl09OmDrllY0r6eebB2tn6s0FVtLtUoVcv6wINycuu%2FpuXvBc%2FKtVwqynXAILh85lBeO&X-Amz-Signature=6986ee44f6f4e26d427732ab0a1d74b277a59ec8f63ebc3a000d0613055490d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJ662SS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCgEFVOciQZ%2Bk5axNeHshe3iOvm3lLZa%2B%2B7Vom3EhH1SQIge56RmNrP%2BY%2FK0fICqyLmQDOZE9yt86mHijIUGBgoIAIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE9OI9jU7ktx5nQiFSrcA%2FcMLtzkxp3dS9CbfdtNfk0mFfSzr2GlSIx2NrBVojei4MBQdrA1k8wzGA7jCD06bnHhw7Lz0K%2BaWEIS1EjhhZm271tIbBPUVxZRkVKM3txobsU0cpFRFkrYpbgH945Ri1BCZ2IYa1iNcVhBRWMFR1wPQQBjEaYphxx6ObGUKoz3hEm0g1b9%2Fq3oW1C9Fr55uPq%2BZCxT34KukNd6I8ddpClN9Qw%2Fn7il20q9ul4b5oUkNa2%2FJN3Ddt%2BLsLdwZB9c7tRCVirfMMI5FYBC686nBnd%2Bnhuhb8aha6G8YmoVGVwH0k8GL6KQT3WtF2gxtw5%2BJMCuW6BqeMgL9H5g7Up3iUD379mfJShMRIO%2BS1a7bLlx75JbRitw%2FNyve7v6o7WOA2IGKb6PAAa5CwkSStxPQxBYt6I2EKmgdVY8HHFG83izueV6pSAcdvVEty9tA%2B280Ml%2B7gRXZKwn%2BpU5y%2Bpz3c0Li%2BIZocMy9ficusI%2BWLstn5l%2FTbO0lqWejFUB%2BVqS33Sn4zTP5Ze5JdHWg5fRystA4HyNEqi3sIr5twopcosQkcWDw0FjlivQl2V4OSTQWml3CefxadB1PSV1UgUK0yW2%2Bzj%2BroQ5opiVnZn1Ptif8yScIzhLGK9hEB4vMO%2FB9MIGOqUBx9ZhiQdnlncSiJ1cFPjiYL0sO%2F2RkQTQxAhq%2Bls6VOutvH%2BsvBLu1PLFgCFpTHc%2Bi87RHWOJPvne%2FfwRVtR8RCl2Hi1a7kiWyylF4Hk%2FvNGSb3EC8F07JkUt%2B%2FXolKyzbu%2BkSh4q5AkLXL%2FK2W6Jq%2FJ1nl09OmDrllY0r6eebB2tn6s0FVtLtUoVcv6wINycuu%2FpuXvBc%2FKtVwqynXAILh85lBeO&X-Amz-Signature=b144c7188a8a9745471d6fed6a247c82de5ac3d1f8c4f909ca2d44b1fd4439a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJ662SS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCgEFVOciQZ%2Bk5axNeHshe3iOvm3lLZa%2B%2B7Vom3EhH1SQIge56RmNrP%2BY%2FK0fICqyLmQDOZE9yt86mHijIUGBgoIAIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE9OI9jU7ktx5nQiFSrcA%2FcMLtzkxp3dS9CbfdtNfk0mFfSzr2GlSIx2NrBVojei4MBQdrA1k8wzGA7jCD06bnHhw7Lz0K%2BaWEIS1EjhhZm271tIbBPUVxZRkVKM3txobsU0cpFRFkrYpbgH945Ri1BCZ2IYa1iNcVhBRWMFR1wPQQBjEaYphxx6ObGUKoz3hEm0g1b9%2Fq3oW1C9Fr55uPq%2BZCxT34KukNd6I8ddpClN9Qw%2Fn7il20q9ul4b5oUkNa2%2FJN3Ddt%2BLsLdwZB9c7tRCVirfMMI5FYBC686nBnd%2Bnhuhb8aha6G8YmoVGVwH0k8GL6KQT3WtF2gxtw5%2BJMCuW6BqeMgL9H5g7Up3iUD379mfJShMRIO%2BS1a7bLlx75JbRitw%2FNyve7v6o7WOA2IGKb6PAAa5CwkSStxPQxBYt6I2EKmgdVY8HHFG83izueV6pSAcdvVEty9tA%2B280Ml%2B7gRXZKwn%2BpU5y%2Bpz3c0Li%2BIZocMy9ficusI%2BWLstn5l%2FTbO0lqWejFUB%2BVqS33Sn4zTP5Ze5JdHWg5fRystA4HyNEqi3sIr5twopcosQkcWDw0FjlivQl2V4OSTQWml3CefxadB1PSV1UgUK0yW2%2Bzj%2BroQ5opiVnZn1Ptif8yScIzhLGK9hEB4vMO%2FB9MIGOqUBx9ZhiQdnlncSiJ1cFPjiYL0sO%2F2RkQTQxAhq%2Bls6VOutvH%2BsvBLu1PLFgCFpTHc%2Bi87RHWOJPvne%2FfwRVtR8RCl2Hi1a7kiWyylF4Hk%2FvNGSb3EC8F07JkUt%2B%2FXolKyzbu%2BkSh4q5AkLXL%2FK2W6Jq%2FJ1nl09OmDrllY0r6eebB2tn6s0FVtLtUoVcv6wINycuu%2FpuXvBc%2FKtVwqynXAILh85lBeO&X-Amz-Signature=a99f14a8cccdece86eda870ca88d46fa52f7926a318b5a8f621eb63e9ab21d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJ662SS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCgEFVOciQZ%2Bk5axNeHshe3iOvm3lLZa%2B%2B7Vom3EhH1SQIge56RmNrP%2BY%2FK0fICqyLmQDOZE9yt86mHijIUGBgoIAIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE9OI9jU7ktx5nQiFSrcA%2FcMLtzkxp3dS9CbfdtNfk0mFfSzr2GlSIx2NrBVojei4MBQdrA1k8wzGA7jCD06bnHhw7Lz0K%2BaWEIS1EjhhZm271tIbBPUVxZRkVKM3txobsU0cpFRFkrYpbgH945Ri1BCZ2IYa1iNcVhBRWMFR1wPQQBjEaYphxx6ObGUKoz3hEm0g1b9%2Fq3oW1C9Fr55uPq%2BZCxT34KukNd6I8ddpClN9Qw%2Fn7il20q9ul4b5oUkNa2%2FJN3Ddt%2BLsLdwZB9c7tRCVirfMMI5FYBC686nBnd%2Bnhuhb8aha6G8YmoVGVwH0k8GL6KQT3WtF2gxtw5%2BJMCuW6BqeMgL9H5g7Up3iUD379mfJShMRIO%2BS1a7bLlx75JbRitw%2FNyve7v6o7WOA2IGKb6PAAa5CwkSStxPQxBYt6I2EKmgdVY8HHFG83izueV6pSAcdvVEty9tA%2B280Ml%2B7gRXZKwn%2BpU5y%2Bpz3c0Li%2BIZocMy9ficusI%2BWLstn5l%2FTbO0lqWejFUB%2BVqS33Sn4zTP5Ze5JdHWg5fRystA4HyNEqi3sIr5twopcosQkcWDw0FjlivQl2V4OSTQWml3CefxadB1PSV1UgUK0yW2%2Bzj%2BroQ5opiVnZn1Ptif8yScIzhLGK9hEB4vMO%2FB9MIGOqUBx9ZhiQdnlncSiJ1cFPjiYL0sO%2F2RkQTQxAhq%2Bls6VOutvH%2BsvBLu1PLFgCFpTHc%2Bi87RHWOJPvne%2FfwRVtR8RCl2Hi1a7kiWyylF4Hk%2FvNGSb3EC8F07JkUt%2B%2FXolKyzbu%2BkSh4q5AkLXL%2FK2W6Jq%2FJ1nl09OmDrllY0r6eebB2tn6s0FVtLtUoVcv6wINycuu%2FpuXvBc%2FKtVwqynXAILh85lBeO&X-Amz-Signature=5056f64d7a56cc4810e317834faae62b5355b05c463131c94a4a3914b7a7c07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJ662SS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCgEFVOciQZ%2Bk5axNeHshe3iOvm3lLZa%2B%2B7Vom3EhH1SQIge56RmNrP%2BY%2FK0fICqyLmQDOZE9yt86mHijIUGBgoIAIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE9OI9jU7ktx5nQiFSrcA%2FcMLtzkxp3dS9CbfdtNfk0mFfSzr2GlSIx2NrBVojei4MBQdrA1k8wzGA7jCD06bnHhw7Lz0K%2BaWEIS1EjhhZm271tIbBPUVxZRkVKM3txobsU0cpFRFkrYpbgH945Ri1BCZ2IYa1iNcVhBRWMFR1wPQQBjEaYphxx6ObGUKoz3hEm0g1b9%2Fq3oW1C9Fr55uPq%2BZCxT34KukNd6I8ddpClN9Qw%2Fn7il20q9ul4b5oUkNa2%2FJN3Ddt%2BLsLdwZB9c7tRCVirfMMI5FYBC686nBnd%2Bnhuhb8aha6G8YmoVGVwH0k8GL6KQT3WtF2gxtw5%2BJMCuW6BqeMgL9H5g7Up3iUD379mfJShMRIO%2BS1a7bLlx75JbRitw%2FNyve7v6o7WOA2IGKb6PAAa5CwkSStxPQxBYt6I2EKmgdVY8HHFG83izueV6pSAcdvVEty9tA%2B280Ml%2B7gRXZKwn%2BpU5y%2Bpz3c0Li%2BIZocMy9ficusI%2BWLstn5l%2FTbO0lqWejFUB%2BVqS33Sn4zTP5Ze5JdHWg5fRystA4HyNEqi3sIr5twopcosQkcWDw0FjlivQl2V4OSTQWml3CefxadB1PSV1UgUK0yW2%2Bzj%2BroQ5opiVnZn1Ptif8yScIzhLGK9hEB4vMO%2FB9MIGOqUBx9ZhiQdnlncSiJ1cFPjiYL0sO%2F2RkQTQxAhq%2Bls6VOutvH%2BsvBLu1PLFgCFpTHc%2Bi87RHWOJPvne%2FfwRVtR8RCl2Hi1a7kiWyylF4Hk%2FvNGSb3EC8F07JkUt%2B%2FXolKyzbu%2BkSh4q5AkLXL%2FK2W6Jq%2FJ1nl09OmDrllY0r6eebB2tn6s0FVtLtUoVcv6wINycuu%2FpuXvBc%2FKtVwqynXAILh85lBeO&X-Amz-Signature=fa6418c710b5dadf67cf377f9a8157f88b34d60f48788a92d4182df088439e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJ662SS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCgEFVOciQZ%2Bk5axNeHshe3iOvm3lLZa%2B%2B7Vom3EhH1SQIge56RmNrP%2BY%2FK0fICqyLmQDOZE9yt86mHijIUGBgoIAIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE9OI9jU7ktx5nQiFSrcA%2FcMLtzkxp3dS9CbfdtNfk0mFfSzr2GlSIx2NrBVojei4MBQdrA1k8wzGA7jCD06bnHhw7Lz0K%2BaWEIS1EjhhZm271tIbBPUVxZRkVKM3txobsU0cpFRFkrYpbgH945Ri1BCZ2IYa1iNcVhBRWMFR1wPQQBjEaYphxx6ObGUKoz3hEm0g1b9%2Fq3oW1C9Fr55uPq%2BZCxT34KukNd6I8ddpClN9Qw%2Fn7il20q9ul4b5oUkNa2%2FJN3Ddt%2BLsLdwZB9c7tRCVirfMMI5FYBC686nBnd%2Bnhuhb8aha6G8YmoVGVwH0k8GL6KQT3WtF2gxtw5%2BJMCuW6BqeMgL9H5g7Up3iUD379mfJShMRIO%2BS1a7bLlx75JbRitw%2FNyve7v6o7WOA2IGKb6PAAa5CwkSStxPQxBYt6I2EKmgdVY8HHFG83izueV6pSAcdvVEty9tA%2B280Ml%2B7gRXZKwn%2BpU5y%2Bpz3c0Li%2BIZocMy9ficusI%2BWLstn5l%2FTbO0lqWejFUB%2BVqS33Sn4zTP5Ze5JdHWg5fRystA4HyNEqi3sIr5twopcosQkcWDw0FjlivQl2V4OSTQWml3CefxadB1PSV1UgUK0yW2%2Bzj%2BroQ5opiVnZn1Ptif8yScIzhLGK9hEB4vMO%2FB9MIGOqUBx9ZhiQdnlncSiJ1cFPjiYL0sO%2F2RkQTQxAhq%2Bls6VOutvH%2BsvBLu1PLFgCFpTHc%2Bi87RHWOJPvne%2FfwRVtR8RCl2Hi1a7kiWyylF4Hk%2FvNGSb3EC8F07JkUt%2B%2FXolKyzbu%2BkSh4q5AkLXL%2FK2W6Jq%2FJ1nl09OmDrllY0r6eebB2tn6s0FVtLtUoVcv6wINycuu%2FpuXvBc%2FKtVwqynXAILh85lBeO&X-Amz-Signature=8dad481b8c3ca37521acd0cda95a636a7ed14520346b5f428ef82bd7cbbda693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJ662SS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCgEFVOciQZ%2Bk5axNeHshe3iOvm3lLZa%2B%2B7Vom3EhH1SQIge56RmNrP%2BY%2FK0fICqyLmQDOZE9yt86mHijIUGBgoIAIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE9OI9jU7ktx5nQiFSrcA%2FcMLtzkxp3dS9CbfdtNfk0mFfSzr2GlSIx2NrBVojei4MBQdrA1k8wzGA7jCD06bnHhw7Lz0K%2BaWEIS1EjhhZm271tIbBPUVxZRkVKM3txobsU0cpFRFkrYpbgH945Ri1BCZ2IYa1iNcVhBRWMFR1wPQQBjEaYphxx6ObGUKoz3hEm0g1b9%2Fq3oW1C9Fr55uPq%2BZCxT34KukNd6I8ddpClN9Qw%2Fn7il20q9ul4b5oUkNa2%2FJN3Ddt%2BLsLdwZB9c7tRCVirfMMI5FYBC686nBnd%2Bnhuhb8aha6G8YmoVGVwH0k8GL6KQT3WtF2gxtw5%2BJMCuW6BqeMgL9H5g7Up3iUD379mfJShMRIO%2BS1a7bLlx75JbRitw%2FNyve7v6o7WOA2IGKb6PAAa5CwkSStxPQxBYt6I2EKmgdVY8HHFG83izueV6pSAcdvVEty9tA%2B280Ml%2B7gRXZKwn%2BpU5y%2Bpz3c0Li%2BIZocMy9ficusI%2BWLstn5l%2FTbO0lqWejFUB%2BVqS33Sn4zTP5Ze5JdHWg5fRystA4HyNEqi3sIr5twopcosQkcWDw0FjlivQl2V4OSTQWml3CefxadB1PSV1UgUK0yW2%2Bzj%2BroQ5opiVnZn1Ptif8yScIzhLGK9hEB4vMO%2FB9MIGOqUBx9ZhiQdnlncSiJ1cFPjiYL0sO%2F2RkQTQxAhq%2Bls6VOutvH%2BsvBLu1PLFgCFpTHc%2Bi87RHWOJPvne%2FfwRVtR8RCl2Hi1a7kiWyylF4Hk%2FvNGSb3EC8F07JkUt%2B%2FXolKyzbu%2BkSh4q5AkLXL%2FK2W6Jq%2FJ1nl09OmDrllY0r6eebB2tn6s0FVtLtUoVcv6wINycuu%2FpuXvBc%2FKtVwqynXAILh85lBeO&X-Amz-Signature=479f50cde70525dc552e18be6f60ad3a48fa9cb5451e6c96267eabe6399f0ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
