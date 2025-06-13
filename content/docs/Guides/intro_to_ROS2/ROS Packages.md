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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBHGHYF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCUVnSsjN%2BLnNU8Sgdi%2FhsERQ9m%2BLvF6xL0c%2Ftire2ougIgSN8hOAO%2FMEux9EKqRcTIbUdvC1s%2FQlGGy%2FOsH81cg2sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLlV9b0IyG76buxZ0ircA%2FF%2B%2BkfCc2YCS%2B60XImkTkTvyUVF1a61rRDznbZJFn%2Fes3jFNgX%2BHfbafW%2FxbUklj1VJXHu6BLWln7BS5UJs5l3LMpSPBXQSnV3ndD6ZaaLZ2Ezkx0sKAhV%2BzNHA7fzLlI3aOvrBJLPEB9M4%2Bbl9jSNus0Ee6Sgb3pabfhMKPUokHCGNdvFTmjs6ZdCqal2mMJvXYFjtdlPGt77IIXAIfG3mk2obHomhHcVIC7Oo%2BfEWlVcXB2wMAH0DwjWBdbsrVqxY9RrjMjs4etB2Ew%2FSWyvW%2FXhWM5PFG1dvti49B3Lg%2BhcgO4FukchEFLvBLeNdsCMwhdWAI3U9HCl%2F4eAg2ZdyfZs1n%2FpZhvI9AW8PQTYBLye5nlEpue4efShMqQ6AMkllr0FTaRpJsLTNzW%2Bs2r9WZ078o8CZ9qATbhzD56dtzVcFEqgeTKa3X56JJES6XCCEIAyzeFIVxdHVEScYoRCoNjUixLgTVsxyL2UC9SvHRfuAzfe4UHwMvsyCgugFyR%2B%2F2t1DGh9khlKYgw3bJhoYFygQ%2BlPXK7BTzQjyB9LUY%2BCIRVf3o6%2F2%2F9NDfxxmliHdULkoGQvQNR2rKTQPSKmdZeDLGS1%2FnxOeshz2fHASum%2Fo1DiUAlsscEC%2BMLPSscIGOqUBW80WnmUIyOe%2BUdpZKhLxFbML4xMyC%2BCxcN7ay9NtW%2BCX6JpurD6dXO71w6dninK%2BiLRWd0jyU%2Bov8Kx3A9I84BVWdZGvQoIGA%2BJ0cvxuB17lSqej3FuKk7gyRCWwV8D%2BKLV6cnzWkqIbJ3yy6W4Tnj12ooMGd%2FmJWYA0dhYvjB5SvnKO3KQ%2BMpov7nIyOIIAtemmx9wip%2BdtQAcuYzoEvXlTepLh&X-Amz-Signature=98b2c66235f93d89d079e2474339da47682e29b73c4d0153d5769bfc24bb2243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBHGHYF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCUVnSsjN%2BLnNU8Sgdi%2FhsERQ9m%2BLvF6xL0c%2Ftire2ougIgSN8hOAO%2FMEux9EKqRcTIbUdvC1s%2FQlGGy%2FOsH81cg2sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLlV9b0IyG76buxZ0ircA%2FF%2B%2BkfCc2YCS%2B60XImkTkTvyUVF1a61rRDznbZJFn%2Fes3jFNgX%2BHfbafW%2FxbUklj1VJXHu6BLWln7BS5UJs5l3LMpSPBXQSnV3ndD6ZaaLZ2Ezkx0sKAhV%2BzNHA7fzLlI3aOvrBJLPEB9M4%2Bbl9jSNus0Ee6Sgb3pabfhMKPUokHCGNdvFTmjs6ZdCqal2mMJvXYFjtdlPGt77IIXAIfG3mk2obHomhHcVIC7Oo%2BfEWlVcXB2wMAH0DwjWBdbsrVqxY9RrjMjs4etB2Ew%2FSWyvW%2FXhWM5PFG1dvti49B3Lg%2BhcgO4FukchEFLvBLeNdsCMwhdWAI3U9HCl%2F4eAg2ZdyfZs1n%2FpZhvI9AW8PQTYBLye5nlEpue4efShMqQ6AMkllr0FTaRpJsLTNzW%2Bs2r9WZ078o8CZ9qATbhzD56dtzVcFEqgeTKa3X56JJES6XCCEIAyzeFIVxdHVEScYoRCoNjUixLgTVsxyL2UC9SvHRfuAzfe4UHwMvsyCgugFyR%2B%2F2t1DGh9khlKYgw3bJhoYFygQ%2BlPXK7BTzQjyB9LUY%2BCIRVf3o6%2F2%2F9NDfxxmliHdULkoGQvQNR2rKTQPSKmdZeDLGS1%2FnxOeshz2fHASum%2Fo1DiUAlsscEC%2BMLPSscIGOqUBW80WnmUIyOe%2BUdpZKhLxFbML4xMyC%2BCxcN7ay9NtW%2BCX6JpurD6dXO71w6dninK%2BiLRWd0jyU%2Bov8Kx3A9I84BVWdZGvQoIGA%2BJ0cvxuB17lSqej3FuKk7gyRCWwV8D%2BKLV6cnzWkqIbJ3yy6W4Tnj12ooMGd%2FmJWYA0dhYvjB5SvnKO3KQ%2BMpov7nIyOIIAtemmx9wip%2BdtQAcuYzoEvXlTepLh&X-Amz-Signature=4bba7bb2a0aeec6446c735f6cb192d5a64ab857c2f8bede02ccac7906f5152fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBHGHYF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCUVnSsjN%2BLnNU8Sgdi%2FhsERQ9m%2BLvF6xL0c%2Ftire2ougIgSN8hOAO%2FMEux9EKqRcTIbUdvC1s%2FQlGGy%2FOsH81cg2sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLlV9b0IyG76buxZ0ircA%2FF%2B%2BkfCc2YCS%2B60XImkTkTvyUVF1a61rRDznbZJFn%2Fes3jFNgX%2BHfbafW%2FxbUklj1VJXHu6BLWln7BS5UJs5l3LMpSPBXQSnV3ndD6ZaaLZ2Ezkx0sKAhV%2BzNHA7fzLlI3aOvrBJLPEB9M4%2Bbl9jSNus0Ee6Sgb3pabfhMKPUokHCGNdvFTmjs6ZdCqal2mMJvXYFjtdlPGt77IIXAIfG3mk2obHomhHcVIC7Oo%2BfEWlVcXB2wMAH0DwjWBdbsrVqxY9RrjMjs4etB2Ew%2FSWyvW%2FXhWM5PFG1dvti49B3Lg%2BhcgO4FukchEFLvBLeNdsCMwhdWAI3U9HCl%2F4eAg2ZdyfZs1n%2FpZhvI9AW8PQTYBLye5nlEpue4efShMqQ6AMkllr0FTaRpJsLTNzW%2Bs2r9WZ078o8CZ9qATbhzD56dtzVcFEqgeTKa3X56JJES6XCCEIAyzeFIVxdHVEScYoRCoNjUixLgTVsxyL2UC9SvHRfuAzfe4UHwMvsyCgugFyR%2B%2F2t1DGh9khlKYgw3bJhoYFygQ%2BlPXK7BTzQjyB9LUY%2BCIRVf3o6%2F2%2F9NDfxxmliHdULkoGQvQNR2rKTQPSKmdZeDLGS1%2FnxOeshz2fHASum%2Fo1DiUAlsscEC%2BMLPSscIGOqUBW80WnmUIyOe%2BUdpZKhLxFbML4xMyC%2BCxcN7ay9NtW%2BCX6JpurD6dXO71w6dninK%2BiLRWd0jyU%2Bov8Kx3A9I84BVWdZGvQoIGA%2BJ0cvxuB17lSqej3FuKk7gyRCWwV8D%2BKLV6cnzWkqIbJ3yy6W4Tnj12ooMGd%2FmJWYA0dhYvjB5SvnKO3KQ%2BMpov7nIyOIIAtemmx9wip%2BdtQAcuYzoEvXlTepLh&X-Amz-Signature=fc36a8fc853067cc97329d27adf42ecb40d6e770bf4cfe3718d932d0b8547f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBHGHYF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCUVnSsjN%2BLnNU8Sgdi%2FhsERQ9m%2BLvF6xL0c%2Ftire2ougIgSN8hOAO%2FMEux9EKqRcTIbUdvC1s%2FQlGGy%2FOsH81cg2sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLlV9b0IyG76buxZ0ircA%2FF%2B%2BkfCc2YCS%2B60XImkTkTvyUVF1a61rRDznbZJFn%2Fes3jFNgX%2BHfbafW%2FxbUklj1VJXHu6BLWln7BS5UJs5l3LMpSPBXQSnV3ndD6ZaaLZ2Ezkx0sKAhV%2BzNHA7fzLlI3aOvrBJLPEB9M4%2Bbl9jSNus0Ee6Sgb3pabfhMKPUokHCGNdvFTmjs6ZdCqal2mMJvXYFjtdlPGt77IIXAIfG3mk2obHomhHcVIC7Oo%2BfEWlVcXB2wMAH0DwjWBdbsrVqxY9RrjMjs4etB2Ew%2FSWyvW%2FXhWM5PFG1dvti49B3Lg%2BhcgO4FukchEFLvBLeNdsCMwhdWAI3U9HCl%2F4eAg2ZdyfZs1n%2FpZhvI9AW8PQTYBLye5nlEpue4efShMqQ6AMkllr0FTaRpJsLTNzW%2Bs2r9WZ078o8CZ9qATbhzD56dtzVcFEqgeTKa3X56JJES6XCCEIAyzeFIVxdHVEScYoRCoNjUixLgTVsxyL2UC9SvHRfuAzfe4UHwMvsyCgugFyR%2B%2F2t1DGh9khlKYgw3bJhoYFygQ%2BlPXK7BTzQjyB9LUY%2BCIRVf3o6%2F2%2F9NDfxxmliHdULkoGQvQNR2rKTQPSKmdZeDLGS1%2FnxOeshz2fHASum%2Fo1DiUAlsscEC%2BMLPSscIGOqUBW80WnmUIyOe%2BUdpZKhLxFbML4xMyC%2BCxcN7ay9NtW%2BCX6JpurD6dXO71w6dninK%2BiLRWd0jyU%2Bov8Kx3A9I84BVWdZGvQoIGA%2BJ0cvxuB17lSqej3FuKk7gyRCWwV8D%2BKLV6cnzWkqIbJ3yy6W4Tnj12ooMGd%2FmJWYA0dhYvjB5SvnKO3KQ%2BMpov7nIyOIIAtemmx9wip%2BdtQAcuYzoEvXlTepLh&X-Amz-Signature=856f01be384c631d2593efeca58f5e3e17c3ee1364f89037f4b9b24be4f0b7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBHGHYF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCUVnSsjN%2BLnNU8Sgdi%2FhsERQ9m%2BLvF6xL0c%2Ftire2ougIgSN8hOAO%2FMEux9EKqRcTIbUdvC1s%2FQlGGy%2FOsH81cg2sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLlV9b0IyG76buxZ0ircA%2FF%2B%2BkfCc2YCS%2B60XImkTkTvyUVF1a61rRDznbZJFn%2Fes3jFNgX%2BHfbafW%2FxbUklj1VJXHu6BLWln7BS5UJs5l3LMpSPBXQSnV3ndD6ZaaLZ2Ezkx0sKAhV%2BzNHA7fzLlI3aOvrBJLPEB9M4%2Bbl9jSNus0Ee6Sgb3pabfhMKPUokHCGNdvFTmjs6ZdCqal2mMJvXYFjtdlPGt77IIXAIfG3mk2obHomhHcVIC7Oo%2BfEWlVcXB2wMAH0DwjWBdbsrVqxY9RrjMjs4etB2Ew%2FSWyvW%2FXhWM5PFG1dvti49B3Lg%2BhcgO4FukchEFLvBLeNdsCMwhdWAI3U9HCl%2F4eAg2ZdyfZs1n%2FpZhvI9AW8PQTYBLye5nlEpue4efShMqQ6AMkllr0FTaRpJsLTNzW%2Bs2r9WZ078o8CZ9qATbhzD56dtzVcFEqgeTKa3X56JJES6XCCEIAyzeFIVxdHVEScYoRCoNjUixLgTVsxyL2UC9SvHRfuAzfe4UHwMvsyCgugFyR%2B%2F2t1DGh9khlKYgw3bJhoYFygQ%2BlPXK7BTzQjyB9LUY%2BCIRVf3o6%2F2%2F9NDfxxmliHdULkoGQvQNR2rKTQPSKmdZeDLGS1%2FnxOeshz2fHASum%2Fo1DiUAlsscEC%2BMLPSscIGOqUBW80WnmUIyOe%2BUdpZKhLxFbML4xMyC%2BCxcN7ay9NtW%2BCX6JpurD6dXO71w6dninK%2BiLRWd0jyU%2Bov8Kx3A9I84BVWdZGvQoIGA%2BJ0cvxuB17lSqej3FuKk7gyRCWwV8D%2BKLV6cnzWkqIbJ3yy6W4Tnj12ooMGd%2FmJWYA0dhYvjB5SvnKO3KQ%2BMpov7nIyOIIAtemmx9wip%2BdtQAcuYzoEvXlTepLh&X-Amz-Signature=7ea7247381fecf350517ec87b00897a2f54e1918e223ca301f40a9719b20fdc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBHGHYF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCUVnSsjN%2BLnNU8Sgdi%2FhsERQ9m%2BLvF6xL0c%2Ftire2ougIgSN8hOAO%2FMEux9EKqRcTIbUdvC1s%2FQlGGy%2FOsH81cg2sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLlV9b0IyG76buxZ0ircA%2FF%2B%2BkfCc2YCS%2B60XImkTkTvyUVF1a61rRDznbZJFn%2Fes3jFNgX%2BHfbafW%2FxbUklj1VJXHu6BLWln7BS5UJs5l3LMpSPBXQSnV3ndD6ZaaLZ2Ezkx0sKAhV%2BzNHA7fzLlI3aOvrBJLPEB9M4%2Bbl9jSNus0Ee6Sgb3pabfhMKPUokHCGNdvFTmjs6ZdCqal2mMJvXYFjtdlPGt77IIXAIfG3mk2obHomhHcVIC7Oo%2BfEWlVcXB2wMAH0DwjWBdbsrVqxY9RrjMjs4etB2Ew%2FSWyvW%2FXhWM5PFG1dvti49B3Lg%2BhcgO4FukchEFLvBLeNdsCMwhdWAI3U9HCl%2F4eAg2ZdyfZs1n%2FpZhvI9AW8PQTYBLye5nlEpue4efShMqQ6AMkllr0FTaRpJsLTNzW%2Bs2r9WZ078o8CZ9qATbhzD56dtzVcFEqgeTKa3X56JJES6XCCEIAyzeFIVxdHVEScYoRCoNjUixLgTVsxyL2UC9SvHRfuAzfe4UHwMvsyCgugFyR%2B%2F2t1DGh9khlKYgw3bJhoYFygQ%2BlPXK7BTzQjyB9LUY%2BCIRVf3o6%2F2%2F9NDfxxmliHdULkoGQvQNR2rKTQPSKmdZeDLGS1%2FnxOeshz2fHASum%2Fo1DiUAlsscEC%2BMLPSscIGOqUBW80WnmUIyOe%2BUdpZKhLxFbML4xMyC%2BCxcN7ay9NtW%2BCX6JpurD6dXO71w6dninK%2BiLRWd0jyU%2Bov8Kx3A9I84BVWdZGvQoIGA%2BJ0cvxuB17lSqej3FuKk7gyRCWwV8D%2BKLV6cnzWkqIbJ3yy6W4Tnj12ooMGd%2FmJWYA0dhYvjB5SvnKO3KQ%2BMpov7nIyOIIAtemmx9wip%2BdtQAcuYzoEvXlTepLh&X-Amz-Signature=6bac51b365b759ead1b94edf80db5a7482865acde9f96238b2351873b5887956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBHGHYF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCUVnSsjN%2BLnNU8Sgdi%2FhsERQ9m%2BLvF6xL0c%2Ftire2ougIgSN8hOAO%2FMEux9EKqRcTIbUdvC1s%2FQlGGy%2FOsH81cg2sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLlV9b0IyG76buxZ0ircA%2FF%2B%2BkfCc2YCS%2B60XImkTkTvyUVF1a61rRDznbZJFn%2Fes3jFNgX%2BHfbafW%2FxbUklj1VJXHu6BLWln7BS5UJs5l3LMpSPBXQSnV3ndD6ZaaLZ2Ezkx0sKAhV%2BzNHA7fzLlI3aOvrBJLPEB9M4%2Bbl9jSNus0Ee6Sgb3pabfhMKPUokHCGNdvFTmjs6ZdCqal2mMJvXYFjtdlPGt77IIXAIfG3mk2obHomhHcVIC7Oo%2BfEWlVcXB2wMAH0DwjWBdbsrVqxY9RrjMjs4etB2Ew%2FSWyvW%2FXhWM5PFG1dvti49B3Lg%2BhcgO4FukchEFLvBLeNdsCMwhdWAI3U9HCl%2F4eAg2ZdyfZs1n%2FpZhvI9AW8PQTYBLye5nlEpue4efShMqQ6AMkllr0FTaRpJsLTNzW%2Bs2r9WZ078o8CZ9qATbhzD56dtzVcFEqgeTKa3X56JJES6XCCEIAyzeFIVxdHVEScYoRCoNjUixLgTVsxyL2UC9SvHRfuAzfe4UHwMvsyCgugFyR%2B%2F2t1DGh9khlKYgw3bJhoYFygQ%2BlPXK7BTzQjyB9LUY%2BCIRVf3o6%2F2%2F9NDfxxmliHdULkoGQvQNR2rKTQPSKmdZeDLGS1%2FnxOeshz2fHASum%2Fo1DiUAlsscEC%2BMLPSscIGOqUBW80WnmUIyOe%2BUdpZKhLxFbML4xMyC%2BCxcN7ay9NtW%2BCX6JpurD6dXO71w6dninK%2BiLRWd0jyU%2Bov8Kx3A9I84BVWdZGvQoIGA%2BJ0cvxuB17lSqej3FuKk7gyRCWwV8D%2BKLV6cnzWkqIbJ3yy6W4Tnj12ooMGd%2FmJWYA0dhYvjB5SvnKO3KQ%2BMpov7nIyOIIAtemmx9wip%2BdtQAcuYzoEvXlTepLh&X-Amz-Signature=4d1c13654ad4a1669fca00a0609688e1457f2f47be0bee99d0b8110ee0018d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
