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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664545ZIDC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGHKoz1W4PJkTQqIy0AOjmjjslqxnctTKHZ25y526iNoAiEAmdmY9CaGkJl9antPN4MyIuAX4QFFoZC33MUQ%2B5tQAV0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKbclfdW5u5bh57YGCrcAywuj1TTWZI4nmhzLWCo5rrA5HYpglMxiQ8xkaXd5pmBZnkTlil2eludR3esqA5w305PBBsyePaxt3h4kDPIgi0MfK8qYyQ6kG3Lvk71lUOSYqZODrrEZlT1D%2FAAa2q5tWjOmPKsMaNBPZUFU4SpNKv%2Bu49B8n4clL04d4uEaKbYcbH2hy0%2BcRdXPE%2FRQ3I1OtB0xnWC1K69h5zQEqLG%2FCb23B66002Cy7KDQfqYwjQe43u7TLzcbSDNUBawCbuo7Vy6RLY6HVQcIa2CU1IjM1M9S1Mte%2BFzyda9le%2B0tR4MmILKZZHXZOjooPZDkScsLj4lcmorJ1X2X7xDCKkHwByVGg6Rp%2Fol2ffvq%2FCZPB%2FC7wAcq%2BCXpcbTaBfJx8dUwqM6xjb%2FXzK8PfhB%2FmfB89BcG3F%2BcRtML1oZanEoI7rNcyHzTnLSxdRGjtaO8vPeh5oBrvFWXb7D99hysP1Slv2MMhWzmvICQRXBV%2F5asC1PGysU998cuAfBBs%2F37IzBUD1bJ7QobvsxlXz3ZqlBqbMjsei7fPZmVW8qbqsefQxLO38h7WCzfybhynujEnVl%2B%2B49gMWvrkWc09JkbI6ZViO80xZHdO3M2scIeTooRprJZYKualrZJ7TxajKrMJuGhr0GOqUBrWIMLXtp%2FGboPl7oyZ0FbRmOtWrsuqAcdQmJfN5BW%2F2FE%2BMJzZLoP5Iv8ENox3buc2UcKWgk9DGcWC%2FmWV1r%2FUqLJ7ZTg4vO2mHRkXBRsHufxo7LMuriFZwMZhPPViIxwv80lqnRIxJVcPf4f6U%2Bl8GIymvg2cqY%2Fku7AGh6M5A4M3JTQmwwlh5LvozaU%2FEsL1D2UjxKwant6d5SgO4WBuPpOAjb&X-Amz-Signature=08e5ca997067c612046bdbe24dc7717c9c1409cc717e419377e8b329c78db61b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664545ZIDC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGHKoz1W4PJkTQqIy0AOjmjjslqxnctTKHZ25y526iNoAiEAmdmY9CaGkJl9antPN4MyIuAX4QFFoZC33MUQ%2B5tQAV0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKbclfdW5u5bh57YGCrcAywuj1TTWZI4nmhzLWCo5rrA5HYpglMxiQ8xkaXd5pmBZnkTlil2eludR3esqA5w305PBBsyePaxt3h4kDPIgi0MfK8qYyQ6kG3Lvk71lUOSYqZODrrEZlT1D%2FAAa2q5tWjOmPKsMaNBPZUFU4SpNKv%2Bu49B8n4clL04d4uEaKbYcbH2hy0%2BcRdXPE%2FRQ3I1OtB0xnWC1K69h5zQEqLG%2FCb23B66002Cy7KDQfqYwjQe43u7TLzcbSDNUBawCbuo7Vy6RLY6HVQcIa2CU1IjM1M9S1Mte%2BFzyda9le%2B0tR4MmILKZZHXZOjooPZDkScsLj4lcmorJ1X2X7xDCKkHwByVGg6Rp%2Fol2ffvq%2FCZPB%2FC7wAcq%2BCXpcbTaBfJx8dUwqM6xjb%2FXzK8PfhB%2FmfB89BcG3F%2BcRtML1oZanEoI7rNcyHzTnLSxdRGjtaO8vPeh5oBrvFWXb7D99hysP1Slv2MMhWzmvICQRXBV%2F5asC1PGysU998cuAfBBs%2F37IzBUD1bJ7QobvsxlXz3ZqlBqbMjsei7fPZmVW8qbqsefQxLO38h7WCzfybhynujEnVl%2B%2B49gMWvrkWc09JkbI6ZViO80xZHdO3M2scIeTooRprJZYKualrZJ7TxajKrMJuGhr0GOqUBrWIMLXtp%2FGboPl7oyZ0FbRmOtWrsuqAcdQmJfN5BW%2F2FE%2BMJzZLoP5Iv8ENox3buc2UcKWgk9DGcWC%2FmWV1r%2FUqLJ7ZTg4vO2mHRkXBRsHufxo7LMuriFZwMZhPPViIxwv80lqnRIxJVcPf4f6U%2Bl8GIymvg2cqY%2Fku7AGh6M5A4M3JTQmwwlh5LvozaU%2FEsL1D2UjxKwant6d5SgO4WBuPpOAjb&X-Amz-Signature=5446d17a10bf5fb0eb76526d1c2a4ba2122cd5b2e21d30fa80b535abfbd742f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664545ZIDC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGHKoz1W4PJkTQqIy0AOjmjjslqxnctTKHZ25y526iNoAiEAmdmY9CaGkJl9antPN4MyIuAX4QFFoZC33MUQ%2B5tQAV0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKbclfdW5u5bh57YGCrcAywuj1TTWZI4nmhzLWCo5rrA5HYpglMxiQ8xkaXd5pmBZnkTlil2eludR3esqA5w305PBBsyePaxt3h4kDPIgi0MfK8qYyQ6kG3Lvk71lUOSYqZODrrEZlT1D%2FAAa2q5tWjOmPKsMaNBPZUFU4SpNKv%2Bu49B8n4clL04d4uEaKbYcbH2hy0%2BcRdXPE%2FRQ3I1OtB0xnWC1K69h5zQEqLG%2FCb23B66002Cy7KDQfqYwjQe43u7TLzcbSDNUBawCbuo7Vy6RLY6HVQcIa2CU1IjM1M9S1Mte%2BFzyda9le%2B0tR4MmILKZZHXZOjooPZDkScsLj4lcmorJ1X2X7xDCKkHwByVGg6Rp%2Fol2ffvq%2FCZPB%2FC7wAcq%2BCXpcbTaBfJx8dUwqM6xjb%2FXzK8PfhB%2FmfB89BcG3F%2BcRtML1oZanEoI7rNcyHzTnLSxdRGjtaO8vPeh5oBrvFWXb7D99hysP1Slv2MMhWzmvICQRXBV%2F5asC1PGysU998cuAfBBs%2F37IzBUD1bJ7QobvsxlXz3ZqlBqbMjsei7fPZmVW8qbqsefQxLO38h7WCzfybhynujEnVl%2B%2B49gMWvrkWc09JkbI6ZViO80xZHdO3M2scIeTooRprJZYKualrZJ7TxajKrMJuGhr0GOqUBrWIMLXtp%2FGboPl7oyZ0FbRmOtWrsuqAcdQmJfN5BW%2F2FE%2BMJzZLoP5Iv8ENox3buc2UcKWgk9DGcWC%2FmWV1r%2FUqLJ7ZTg4vO2mHRkXBRsHufxo7LMuriFZwMZhPPViIxwv80lqnRIxJVcPf4f6U%2Bl8GIymvg2cqY%2Fku7AGh6M5A4M3JTQmwwlh5LvozaU%2FEsL1D2UjxKwant6d5SgO4WBuPpOAjb&X-Amz-Signature=c7f6491ee8c1cc2e4b6f377dd06cf227ac5dc73b8d8ebae34cc39ef8041143a8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664545ZIDC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGHKoz1W4PJkTQqIy0AOjmjjslqxnctTKHZ25y526iNoAiEAmdmY9CaGkJl9antPN4MyIuAX4QFFoZC33MUQ%2B5tQAV0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKbclfdW5u5bh57YGCrcAywuj1TTWZI4nmhzLWCo5rrA5HYpglMxiQ8xkaXd5pmBZnkTlil2eludR3esqA5w305PBBsyePaxt3h4kDPIgi0MfK8qYyQ6kG3Lvk71lUOSYqZODrrEZlT1D%2FAAa2q5tWjOmPKsMaNBPZUFU4SpNKv%2Bu49B8n4clL04d4uEaKbYcbH2hy0%2BcRdXPE%2FRQ3I1OtB0xnWC1K69h5zQEqLG%2FCb23B66002Cy7KDQfqYwjQe43u7TLzcbSDNUBawCbuo7Vy6RLY6HVQcIa2CU1IjM1M9S1Mte%2BFzyda9le%2B0tR4MmILKZZHXZOjooPZDkScsLj4lcmorJ1X2X7xDCKkHwByVGg6Rp%2Fol2ffvq%2FCZPB%2FC7wAcq%2BCXpcbTaBfJx8dUwqM6xjb%2FXzK8PfhB%2FmfB89BcG3F%2BcRtML1oZanEoI7rNcyHzTnLSxdRGjtaO8vPeh5oBrvFWXb7D99hysP1Slv2MMhWzmvICQRXBV%2F5asC1PGysU998cuAfBBs%2F37IzBUD1bJ7QobvsxlXz3ZqlBqbMjsei7fPZmVW8qbqsefQxLO38h7WCzfybhynujEnVl%2B%2B49gMWvrkWc09JkbI6ZViO80xZHdO3M2scIeTooRprJZYKualrZJ7TxajKrMJuGhr0GOqUBrWIMLXtp%2FGboPl7oyZ0FbRmOtWrsuqAcdQmJfN5BW%2F2FE%2BMJzZLoP5Iv8ENox3buc2UcKWgk9DGcWC%2FmWV1r%2FUqLJ7ZTg4vO2mHRkXBRsHufxo7LMuriFZwMZhPPViIxwv80lqnRIxJVcPf4f6U%2Bl8GIymvg2cqY%2Fku7AGh6M5A4M3JTQmwwlh5LvozaU%2FEsL1D2UjxKwant6d5SgO4WBuPpOAjb&X-Amz-Signature=108255e18db09952b49f9cce3bcd3c57e85ac98d3615558aae5115c863c74559&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664545ZIDC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGHKoz1W4PJkTQqIy0AOjmjjslqxnctTKHZ25y526iNoAiEAmdmY9CaGkJl9antPN4MyIuAX4QFFoZC33MUQ%2B5tQAV0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKbclfdW5u5bh57YGCrcAywuj1TTWZI4nmhzLWCo5rrA5HYpglMxiQ8xkaXd5pmBZnkTlil2eludR3esqA5w305PBBsyePaxt3h4kDPIgi0MfK8qYyQ6kG3Lvk71lUOSYqZODrrEZlT1D%2FAAa2q5tWjOmPKsMaNBPZUFU4SpNKv%2Bu49B8n4clL04d4uEaKbYcbH2hy0%2BcRdXPE%2FRQ3I1OtB0xnWC1K69h5zQEqLG%2FCb23B66002Cy7KDQfqYwjQe43u7TLzcbSDNUBawCbuo7Vy6RLY6HVQcIa2CU1IjM1M9S1Mte%2BFzyda9le%2B0tR4MmILKZZHXZOjooPZDkScsLj4lcmorJ1X2X7xDCKkHwByVGg6Rp%2Fol2ffvq%2FCZPB%2FC7wAcq%2BCXpcbTaBfJx8dUwqM6xjb%2FXzK8PfhB%2FmfB89BcG3F%2BcRtML1oZanEoI7rNcyHzTnLSxdRGjtaO8vPeh5oBrvFWXb7D99hysP1Slv2MMhWzmvICQRXBV%2F5asC1PGysU998cuAfBBs%2F37IzBUD1bJ7QobvsxlXz3ZqlBqbMjsei7fPZmVW8qbqsefQxLO38h7WCzfybhynujEnVl%2B%2B49gMWvrkWc09JkbI6ZViO80xZHdO3M2scIeTooRprJZYKualrZJ7TxajKrMJuGhr0GOqUBrWIMLXtp%2FGboPl7oyZ0FbRmOtWrsuqAcdQmJfN5BW%2F2FE%2BMJzZLoP5Iv8ENox3buc2UcKWgk9DGcWC%2FmWV1r%2FUqLJ7ZTg4vO2mHRkXBRsHufxo7LMuriFZwMZhPPViIxwv80lqnRIxJVcPf4f6U%2Bl8GIymvg2cqY%2Fku7AGh6M5A4M3JTQmwwlh5LvozaU%2FEsL1D2UjxKwant6d5SgO4WBuPpOAjb&X-Amz-Signature=9c2c0d814c24f758f1e6dc99704d65f8027ecf9c7a5f7788205a3f5a80a4ab7c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664545ZIDC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGHKoz1W4PJkTQqIy0AOjmjjslqxnctTKHZ25y526iNoAiEAmdmY9CaGkJl9antPN4MyIuAX4QFFoZC33MUQ%2B5tQAV0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKbclfdW5u5bh57YGCrcAywuj1TTWZI4nmhzLWCo5rrA5HYpglMxiQ8xkaXd5pmBZnkTlil2eludR3esqA5w305PBBsyePaxt3h4kDPIgi0MfK8qYyQ6kG3Lvk71lUOSYqZODrrEZlT1D%2FAAa2q5tWjOmPKsMaNBPZUFU4SpNKv%2Bu49B8n4clL04d4uEaKbYcbH2hy0%2BcRdXPE%2FRQ3I1OtB0xnWC1K69h5zQEqLG%2FCb23B66002Cy7KDQfqYwjQe43u7TLzcbSDNUBawCbuo7Vy6RLY6HVQcIa2CU1IjM1M9S1Mte%2BFzyda9le%2B0tR4MmILKZZHXZOjooPZDkScsLj4lcmorJ1X2X7xDCKkHwByVGg6Rp%2Fol2ffvq%2FCZPB%2FC7wAcq%2BCXpcbTaBfJx8dUwqM6xjb%2FXzK8PfhB%2FmfB89BcG3F%2BcRtML1oZanEoI7rNcyHzTnLSxdRGjtaO8vPeh5oBrvFWXb7D99hysP1Slv2MMhWzmvICQRXBV%2F5asC1PGysU998cuAfBBs%2F37IzBUD1bJ7QobvsxlXz3ZqlBqbMjsei7fPZmVW8qbqsefQxLO38h7WCzfybhynujEnVl%2B%2B49gMWvrkWc09JkbI6ZViO80xZHdO3M2scIeTooRprJZYKualrZJ7TxajKrMJuGhr0GOqUBrWIMLXtp%2FGboPl7oyZ0FbRmOtWrsuqAcdQmJfN5BW%2F2FE%2BMJzZLoP5Iv8ENox3buc2UcKWgk9DGcWC%2FmWV1r%2FUqLJ7ZTg4vO2mHRkXBRsHufxo7LMuriFZwMZhPPViIxwv80lqnRIxJVcPf4f6U%2Bl8GIymvg2cqY%2Fku7AGh6M5A4M3JTQmwwlh5LvozaU%2FEsL1D2UjxKwant6d5SgO4WBuPpOAjb&X-Amz-Signature=ffcbe80c4826a6b320d124093984c5f5a3773d301ac7c7b37a18c69be223185d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664545ZIDC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGHKoz1W4PJkTQqIy0AOjmjjslqxnctTKHZ25y526iNoAiEAmdmY9CaGkJl9antPN4MyIuAX4QFFoZC33MUQ%2B5tQAV0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKbclfdW5u5bh57YGCrcAywuj1TTWZI4nmhzLWCo5rrA5HYpglMxiQ8xkaXd5pmBZnkTlil2eludR3esqA5w305PBBsyePaxt3h4kDPIgi0MfK8qYyQ6kG3Lvk71lUOSYqZODrrEZlT1D%2FAAa2q5tWjOmPKsMaNBPZUFU4SpNKv%2Bu49B8n4clL04d4uEaKbYcbH2hy0%2BcRdXPE%2FRQ3I1OtB0xnWC1K69h5zQEqLG%2FCb23B66002Cy7KDQfqYwjQe43u7TLzcbSDNUBawCbuo7Vy6RLY6HVQcIa2CU1IjM1M9S1Mte%2BFzyda9le%2B0tR4MmILKZZHXZOjooPZDkScsLj4lcmorJ1X2X7xDCKkHwByVGg6Rp%2Fol2ffvq%2FCZPB%2FC7wAcq%2BCXpcbTaBfJx8dUwqM6xjb%2FXzK8PfhB%2FmfB89BcG3F%2BcRtML1oZanEoI7rNcyHzTnLSxdRGjtaO8vPeh5oBrvFWXb7D99hysP1Slv2MMhWzmvICQRXBV%2F5asC1PGysU998cuAfBBs%2F37IzBUD1bJ7QobvsxlXz3ZqlBqbMjsei7fPZmVW8qbqsefQxLO38h7WCzfybhynujEnVl%2B%2B49gMWvrkWc09JkbI6ZViO80xZHdO3M2scIeTooRprJZYKualrZJ7TxajKrMJuGhr0GOqUBrWIMLXtp%2FGboPl7oyZ0FbRmOtWrsuqAcdQmJfN5BW%2F2FE%2BMJzZLoP5Iv8ENox3buc2UcKWgk9DGcWC%2FmWV1r%2FUqLJ7ZTg4vO2mHRkXBRsHufxo7LMuriFZwMZhPPViIxwv80lqnRIxJVcPf4f6U%2Bl8GIymvg2cqY%2Fku7AGh6M5A4M3JTQmwwlh5LvozaU%2FEsL1D2UjxKwant6d5SgO4WBuPpOAjb&X-Amz-Signature=02e0e11729fb887fc02a638c92898632e93b0d608fbf4accf6f7712c2bfed33b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
