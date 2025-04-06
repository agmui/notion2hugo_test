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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3PTBQP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm5%2FmOO9axSZRcoP4Tiin4I6IQ9yuNAfnEDpK36OovkAiEAwCZ1lG8bRgnS3%2FoQi4K6uNIF5djW6qXoArNU0Adowmcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDQSx9tk7poRudRi3yrcA5gASxJcJL1G8m7bmZc02RIrUsZoRsuLZV9SpNgzDai2ZlINci2LIVB%2Fr97cuHBpBB7goZOZ%2FXHPu6srAQmdsncaMsAeWiO%2BvHdMb0hDikVQpIvjb2m2qQkK9SXvnwLsRZCBUjcAJ0PQjTS49egsKemRlKX3cwu6jbxbboO%2Fpo3kX3NdXbkoFVxqatNmvWBhsadAv5SxXpT%2FUUs3Iw%2Fv%2FA%2FxdDmD3rSG4EJtiXaAD9cspUag5H7sRvaF51C4eJPejjN7ax%2BI%2B9nE%2BVHhl%2FwCOxjA5Nk1K0E%2Bc1Aa%2FgndyyHn3beb3NjsO4HmvGDVIXHFfXkLresuYqBiiw3lqwLkBUgWxsFbLHU79G7gv8DThJdv%2BGtRF8oXDjq71u1Ei0NGAHFAwy%2FwRwa14ZjF9hm69v66h%2BU3T8SF8fag%2F%2ByJXUk5YB6kfbko1zkBkhv6l2RPuKjX2j9lidDJp%2FvDsy9OFQRzc39UTomRVls3EJMuYuo8fR%2F0Ph8003a1LWk9FYWgRsmCwuPJkgBFIe5hmhQQL%2BYEsHvesw7OxXVVldL8T2rbiMC%2BvGmxnrXFnewcv1XGOYZ6q59t9Ttva2XR9wkDBgQwvyDYVRhimcTzHcLbXfOEYQcko%2BDiethaS5kZMO%2FAyL8GOqUB50%2B9Mxzcn8GuyThG6btqpxyrMiBnmkNoo9jqxBrRGxo2ZnuYGFugnUph7rZH1f%2BnmGeYOvmdc%2BJImYZYgfWC2R3vLW8onb6%2Foi%2Fz1s%2Bjwaoqexo5hDCuC%2B0w2kIHfC%2FJ65cYH%2FStalLZ2Whr5%2FmY9RnOll54BKqgVf1BQ%2Fl4uumzyJKxR8CoJWy%2BEeUtm7Wb27dVwjZGpQfNjva%2BijAPDmfQpyHz&X-Amz-Signature=455f3b3b9d3ae939c7946b85c78a10ef99f1a63d07450396fab80898f499b6da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3PTBQP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm5%2FmOO9axSZRcoP4Tiin4I6IQ9yuNAfnEDpK36OovkAiEAwCZ1lG8bRgnS3%2FoQi4K6uNIF5djW6qXoArNU0Adowmcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDQSx9tk7poRudRi3yrcA5gASxJcJL1G8m7bmZc02RIrUsZoRsuLZV9SpNgzDai2ZlINci2LIVB%2Fr97cuHBpBB7goZOZ%2FXHPu6srAQmdsncaMsAeWiO%2BvHdMb0hDikVQpIvjb2m2qQkK9SXvnwLsRZCBUjcAJ0PQjTS49egsKemRlKX3cwu6jbxbboO%2Fpo3kX3NdXbkoFVxqatNmvWBhsadAv5SxXpT%2FUUs3Iw%2Fv%2FA%2FxdDmD3rSG4EJtiXaAD9cspUag5H7sRvaF51C4eJPejjN7ax%2BI%2B9nE%2BVHhl%2FwCOxjA5Nk1K0E%2Bc1Aa%2FgndyyHn3beb3NjsO4HmvGDVIXHFfXkLresuYqBiiw3lqwLkBUgWxsFbLHU79G7gv8DThJdv%2BGtRF8oXDjq71u1Ei0NGAHFAwy%2FwRwa14ZjF9hm69v66h%2BU3T8SF8fag%2F%2ByJXUk5YB6kfbko1zkBkhv6l2RPuKjX2j9lidDJp%2FvDsy9OFQRzc39UTomRVls3EJMuYuo8fR%2F0Ph8003a1LWk9FYWgRsmCwuPJkgBFIe5hmhQQL%2BYEsHvesw7OxXVVldL8T2rbiMC%2BvGmxnrXFnewcv1XGOYZ6q59t9Ttva2XR9wkDBgQwvyDYVRhimcTzHcLbXfOEYQcko%2BDiethaS5kZMO%2FAyL8GOqUB50%2B9Mxzcn8GuyThG6btqpxyrMiBnmkNoo9jqxBrRGxo2ZnuYGFugnUph7rZH1f%2BnmGeYOvmdc%2BJImYZYgfWC2R3vLW8onb6%2Foi%2Fz1s%2Bjwaoqexo5hDCuC%2B0w2kIHfC%2FJ65cYH%2FStalLZ2Whr5%2FmY9RnOll54BKqgVf1BQ%2Fl4uumzyJKxR8CoJWy%2BEeUtm7Wb27dVwjZGpQfNjva%2BijAPDmfQpyHz&X-Amz-Signature=5fc76ce96b24bf28d529b97fb041658eb2c2b7cbb53ece2ef8c5d84da23f9c81&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3PTBQP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm5%2FmOO9axSZRcoP4Tiin4I6IQ9yuNAfnEDpK36OovkAiEAwCZ1lG8bRgnS3%2FoQi4K6uNIF5djW6qXoArNU0Adowmcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDQSx9tk7poRudRi3yrcA5gASxJcJL1G8m7bmZc02RIrUsZoRsuLZV9SpNgzDai2ZlINci2LIVB%2Fr97cuHBpBB7goZOZ%2FXHPu6srAQmdsncaMsAeWiO%2BvHdMb0hDikVQpIvjb2m2qQkK9SXvnwLsRZCBUjcAJ0PQjTS49egsKemRlKX3cwu6jbxbboO%2Fpo3kX3NdXbkoFVxqatNmvWBhsadAv5SxXpT%2FUUs3Iw%2Fv%2FA%2FxdDmD3rSG4EJtiXaAD9cspUag5H7sRvaF51C4eJPejjN7ax%2BI%2B9nE%2BVHhl%2FwCOxjA5Nk1K0E%2Bc1Aa%2FgndyyHn3beb3NjsO4HmvGDVIXHFfXkLresuYqBiiw3lqwLkBUgWxsFbLHU79G7gv8DThJdv%2BGtRF8oXDjq71u1Ei0NGAHFAwy%2FwRwa14ZjF9hm69v66h%2BU3T8SF8fag%2F%2ByJXUk5YB6kfbko1zkBkhv6l2RPuKjX2j9lidDJp%2FvDsy9OFQRzc39UTomRVls3EJMuYuo8fR%2F0Ph8003a1LWk9FYWgRsmCwuPJkgBFIe5hmhQQL%2BYEsHvesw7OxXVVldL8T2rbiMC%2BvGmxnrXFnewcv1XGOYZ6q59t9Ttva2XR9wkDBgQwvyDYVRhimcTzHcLbXfOEYQcko%2BDiethaS5kZMO%2FAyL8GOqUB50%2B9Mxzcn8GuyThG6btqpxyrMiBnmkNoo9jqxBrRGxo2ZnuYGFugnUph7rZH1f%2BnmGeYOvmdc%2BJImYZYgfWC2R3vLW8onb6%2Foi%2Fz1s%2Bjwaoqexo5hDCuC%2B0w2kIHfC%2FJ65cYH%2FStalLZ2Whr5%2FmY9RnOll54BKqgVf1BQ%2Fl4uumzyJKxR8CoJWy%2BEeUtm7Wb27dVwjZGpQfNjva%2BijAPDmfQpyHz&X-Amz-Signature=e1d67dc685ef2a4fd8bb23e82331f78bccb1971a7fa3907e690a90cef3712e30&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3PTBQP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm5%2FmOO9axSZRcoP4Tiin4I6IQ9yuNAfnEDpK36OovkAiEAwCZ1lG8bRgnS3%2FoQi4K6uNIF5djW6qXoArNU0Adowmcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDQSx9tk7poRudRi3yrcA5gASxJcJL1G8m7bmZc02RIrUsZoRsuLZV9SpNgzDai2ZlINci2LIVB%2Fr97cuHBpBB7goZOZ%2FXHPu6srAQmdsncaMsAeWiO%2BvHdMb0hDikVQpIvjb2m2qQkK9SXvnwLsRZCBUjcAJ0PQjTS49egsKemRlKX3cwu6jbxbboO%2Fpo3kX3NdXbkoFVxqatNmvWBhsadAv5SxXpT%2FUUs3Iw%2Fv%2FA%2FxdDmD3rSG4EJtiXaAD9cspUag5H7sRvaF51C4eJPejjN7ax%2BI%2B9nE%2BVHhl%2FwCOxjA5Nk1K0E%2Bc1Aa%2FgndyyHn3beb3NjsO4HmvGDVIXHFfXkLresuYqBiiw3lqwLkBUgWxsFbLHU79G7gv8DThJdv%2BGtRF8oXDjq71u1Ei0NGAHFAwy%2FwRwa14ZjF9hm69v66h%2BU3T8SF8fag%2F%2ByJXUk5YB6kfbko1zkBkhv6l2RPuKjX2j9lidDJp%2FvDsy9OFQRzc39UTomRVls3EJMuYuo8fR%2F0Ph8003a1LWk9FYWgRsmCwuPJkgBFIe5hmhQQL%2BYEsHvesw7OxXVVldL8T2rbiMC%2BvGmxnrXFnewcv1XGOYZ6q59t9Ttva2XR9wkDBgQwvyDYVRhimcTzHcLbXfOEYQcko%2BDiethaS5kZMO%2FAyL8GOqUB50%2B9Mxzcn8GuyThG6btqpxyrMiBnmkNoo9jqxBrRGxo2ZnuYGFugnUph7rZH1f%2BnmGeYOvmdc%2BJImYZYgfWC2R3vLW8onb6%2Foi%2Fz1s%2Bjwaoqexo5hDCuC%2B0w2kIHfC%2FJ65cYH%2FStalLZ2Whr5%2FmY9RnOll54BKqgVf1BQ%2Fl4uumzyJKxR8CoJWy%2BEeUtm7Wb27dVwjZGpQfNjva%2BijAPDmfQpyHz&X-Amz-Signature=9096a264d6c8367d134fe65a8314f9c5f93d4b55506e48d6ac29a74bc9178668&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3PTBQP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm5%2FmOO9axSZRcoP4Tiin4I6IQ9yuNAfnEDpK36OovkAiEAwCZ1lG8bRgnS3%2FoQi4K6uNIF5djW6qXoArNU0Adowmcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDQSx9tk7poRudRi3yrcA5gASxJcJL1G8m7bmZc02RIrUsZoRsuLZV9SpNgzDai2ZlINci2LIVB%2Fr97cuHBpBB7goZOZ%2FXHPu6srAQmdsncaMsAeWiO%2BvHdMb0hDikVQpIvjb2m2qQkK9SXvnwLsRZCBUjcAJ0PQjTS49egsKemRlKX3cwu6jbxbboO%2Fpo3kX3NdXbkoFVxqatNmvWBhsadAv5SxXpT%2FUUs3Iw%2Fv%2FA%2FxdDmD3rSG4EJtiXaAD9cspUag5H7sRvaF51C4eJPejjN7ax%2BI%2B9nE%2BVHhl%2FwCOxjA5Nk1K0E%2Bc1Aa%2FgndyyHn3beb3NjsO4HmvGDVIXHFfXkLresuYqBiiw3lqwLkBUgWxsFbLHU79G7gv8DThJdv%2BGtRF8oXDjq71u1Ei0NGAHFAwy%2FwRwa14ZjF9hm69v66h%2BU3T8SF8fag%2F%2ByJXUk5YB6kfbko1zkBkhv6l2RPuKjX2j9lidDJp%2FvDsy9OFQRzc39UTomRVls3EJMuYuo8fR%2F0Ph8003a1LWk9FYWgRsmCwuPJkgBFIe5hmhQQL%2BYEsHvesw7OxXVVldL8T2rbiMC%2BvGmxnrXFnewcv1XGOYZ6q59t9Ttva2XR9wkDBgQwvyDYVRhimcTzHcLbXfOEYQcko%2BDiethaS5kZMO%2FAyL8GOqUB50%2B9Mxzcn8GuyThG6btqpxyrMiBnmkNoo9jqxBrRGxo2ZnuYGFugnUph7rZH1f%2BnmGeYOvmdc%2BJImYZYgfWC2R3vLW8onb6%2Foi%2Fz1s%2Bjwaoqexo5hDCuC%2B0w2kIHfC%2FJ65cYH%2FStalLZ2Whr5%2FmY9RnOll54BKqgVf1BQ%2Fl4uumzyJKxR8CoJWy%2BEeUtm7Wb27dVwjZGpQfNjva%2BijAPDmfQpyHz&X-Amz-Signature=6806a90a1efe39b530ec64e2ebe9ac5936f90bd83577fc1f75f7b8a316a42b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3PTBQP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm5%2FmOO9axSZRcoP4Tiin4I6IQ9yuNAfnEDpK36OovkAiEAwCZ1lG8bRgnS3%2FoQi4K6uNIF5djW6qXoArNU0Adowmcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDQSx9tk7poRudRi3yrcA5gASxJcJL1G8m7bmZc02RIrUsZoRsuLZV9SpNgzDai2ZlINci2LIVB%2Fr97cuHBpBB7goZOZ%2FXHPu6srAQmdsncaMsAeWiO%2BvHdMb0hDikVQpIvjb2m2qQkK9SXvnwLsRZCBUjcAJ0PQjTS49egsKemRlKX3cwu6jbxbboO%2Fpo3kX3NdXbkoFVxqatNmvWBhsadAv5SxXpT%2FUUs3Iw%2Fv%2FA%2FxdDmD3rSG4EJtiXaAD9cspUag5H7sRvaF51C4eJPejjN7ax%2BI%2B9nE%2BVHhl%2FwCOxjA5Nk1K0E%2Bc1Aa%2FgndyyHn3beb3NjsO4HmvGDVIXHFfXkLresuYqBiiw3lqwLkBUgWxsFbLHU79G7gv8DThJdv%2BGtRF8oXDjq71u1Ei0NGAHFAwy%2FwRwa14ZjF9hm69v66h%2BU3T8SF8fag%2F%2ByJXUk5YB6kfbko1zkBkhv6l2RPuKjX2j9lidDJp%2FvDsy9OFQRzc39UTomRVls3EJMuYuo8fR%2F0Ph8003a1LWk9FYWgRsmCwuPJkgBFIe5hmhQQL%2BYEsHvesw7OxXVVldL8T2rbiMC%2BvGmxnrXFnewcv1XGOYZ6q59t9Ttva2XR9wkDBgQwvyDYVRhimcTzHcLbXfOEYQcko%2BDiethaS5kZMO%2FAyL8GOqUB50%2B9Mxzcn8GuyThG6btqpxyrMiBnmkNoo9jqxBrRGxo2ZnuYGFugnUph7rZH1f%2BnmGeYOvmdc%2BJImYZYgfWC2R3vLW8onb6%2Foi%2Fz1s%2Bjwaoqexo5hDCuC%2B0w2kIHfC%2FJ65cYH%2FStalLZ2Whr5%2FmY9RnOll54BKqgVf1BQ%2Fl4uumzyJKxR8CoJWy%2BEeUtm7Wb27dVwjZGpQfNjva%2BijAPDmfQpyHz&X-Amz-Signature=e931da6a8f4eff146b4405850c1a978e67d5e563d27b0e7744f8eebe1f2785df&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3PTBQP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm5%2FmOO9axSZRcoP4Tiin4I6IQ9yuNAfnEDpK36OovkAiEAwCZ1lG8bRgnS3%2FoQi4K6uNIF5djW6qXoArNU0Adowmcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDQSx9tk7poRudRi3yrcA5gASxJcJL1G8m7bmZc02RIrUsZoRsuLZV9SpNgzDai2ZlINci2LIVB%2Fr97cuHBpBB7goZOZ%2FXHPu6srAQmdsncaMsAeWiO%2BvHdMb0hDikVQpIvjb2m2qQkK9SXvnwLsRZCBUjcAJ0PQjTS49egsKemRlKX3cwu6jbxbboO%2Fpo3kX3NdXbkoFVxqatNmvWBhsadAv5SxXpT%2FUUs3Iw%2Fv%2FA%2FxdDmD3rSG4EJtiXaAD9cspUag5H7sRvaF51C4eJPejjN7ax%2BI%2B9nE%2BVHhl%2FwCOxjA5Nk1K0E%2Bc1Aa%2FgndyyHn3beb3NjsO4HmvGDVIXHFfXkLresuYqBiiw3lqwLkBUgWxsFbLHU79G7gv8DThJdv%2BGtRF8oXDjq71u1Ei0NGAHFAwy%2FwRwa14ZjF9hm69v66h%2BU3T8SF8fag%2F%2ByJXUk5YB6kfbko1zkBkhv6l2RPuKjX2j9lidDJp%2FvDsy9OFQRzc39UTomRVls3EJMuYuo8fR%2F0Ph8003a1LWk9FYWgRsmCwuPJkgBFIe5hmhQQL%2BYEsHvesw7OxXVVldL8T2rbiMC%2BvGmxnrXFnewcv1XGOYZ6q59t9Ttva2XR9wkDBgQwvyDYVRhimcTzHcLbXfOEYQcko%2BDiethaS5kZMO%2FAyL8GOqUB50%2B9Mxzcn8GuyThG6btqpxyrMiBnmkNoo9jqxBrRGxo2ZnuYGFugnUph7rZH1f%2BnmGeYOvmdc%2BJImYZYgfWC2R3vLW8onb6%2Foi%2Fz1s%2Bjwaoqexo5hDCuC%2B0w2kIHfC%2FJ65cYH%2FStalLZ2Whr5%2FmY9RnOll54BKqgVf1BQ%2Fl4uumzyJKxR8CoJWy%2BEeUtm7Wb27dVwjZGpQfNjva%2BijAPDmfQpyHz&X-Amz-Signature=1f34056ecdf46468717a406c9bbfb970f2c9595e8fa285b40d5ddfff82ee62d0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
