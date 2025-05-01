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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ITFQDUA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDF3SMwXPnlz4nDofAoi3Ouf4uZPS86wRuzdMKLIwLIzQIhAORpZS3AlIjFn7ukkFMZOEsDOe4rzf8uYT9Y1BCKZk6nKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFMJydH9sAhgw6lDkq3ANmPjQccCFBT%2BkdG%2BDoVLOd870Me3NJgq59T9%2Fnc5BRh%2FLyHevvYekef8cKdIVLxxlGbf2%2F8Fy%2B2tkBF1fJyFHEQF%2BzgMsurzMpoCsy8Yg1cus6ArBgp46G3aiVVRfUk00miQTfhLNVTgfg4QWFGT6ok0zkXy%2Box3ZTalM2iVgeo%2BUG0KGAKAk9Ysr8b7%2BliigJeC5rLiFEYdykThxNbfOa%2FVe%2FQyY6unQhhJ9M%2Fnoh2iHgJg32vQuwwa9T2rp%2BUcRoPVb5Jqsg%2FjCIzec4I7YaN7SRWrzIwDQ62a9IfV8%2BjIgRFUSkxIqvwx57QVTlRNMMIfcLw2xSRj39BjwijjBxmeC2p%2BbOmQT2yb%2FUkwNuEmLqXZu%2BG%2BIqGqp5vfeyI3vsD2VGXnH5EOeWEa3rn28jvF5ylkfGUcEdRNuQsw7tGHKlvYwppqQRG8UnH4BLqIspZUu%2F07raZQ%2FK1AgKbBziukZ%2FfUv%2F%2BwZZbqQEM9eL3M0Arj6SKRBsyUiTJ%2BxX3ptF1EXZJ9g53YDUTDkqOI2yu%2F1bDBDDxzbhfHDBiQpzlRtJEKAPFAC%2B7iUin6T78FK3N1YwyNCficpEviagMWUExy0cxSTkU2ZRtQlwN1QRGB4lo3KYhqdZ5KsnuDDVx8%2FABjqkAb%2BiRdk0ANR5QNNu5DNOC5iSZ2biXZeHfxyO%2BqgH41HZtbsWteqwvtSqwp3HN%2Fb9N8hvAZ7BvK3l9L5H65RfKQh27OHQGz31K4jo1GcTWZz1dHfd6F35hk5BKvVvfFm8BmWUGEL0D3U3qjaCytk%2Fw8igQUVEFgJNZOGyNXRZSfYwLORsdX3qWefRalcfdNLdBi53udhIhhq84%2BKvHDXOZMUB72QS&X-Amz-Signature=12b52cbfe2670a40828651e63435bbcf22a454c6044a673f592230e7e5182b39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ITFQDUA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDF3SMwXPnlz4nDofAoi3Ouf4uZPS86wRuzdMKLIwLIzQIhAORpZS3AlIjFn7ukkFMZOEsDOe4rzf8uYT9Y1BCKZk6nKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFMJydH9sAhgw6lDkq3ANmPjQccCFBT%2BkdG%2BDoVLOd870Me3NJgq59T9%2Fnc5BRh%2FLyHevvYekef8cKdIVLxxlGbf2%2F8Fy%2B2tkBF1fJyFHEQF%2BzgMsurzMpoCsy8Yg1cus6ArBgp46G3aiVVRfUk00miQTfhLNVTgfg4QWFGT6ok0zkXy%2Box3ZTalM2iVgeo%2BUG0KGAKAk9Ysr8b7%2BliigJeC5rLiFEYdykThxNbfOa%2FVe%2FQyY6unQhhJ9M%2Fnoh2iHgJg32vQuwwa9T2rp%2BUcRoPVb5Jqsg%2FjCIzec4I7YaN7SRWrzIwDQ62a9IfV8%2BjIgRFUSkxIqvwx57QVTlRNMMIfcLw2xSRj39BjwijjBxmeC2p%2BbOmQT2yb%2FUkwNuEmLqXZu%2BG%2BIqGqp5vfeyI3vsD2VGXnH5EOeWEa3rn28jvF5ylkfGUcEdRNuQsw7tGHKlvYwppqQRG8UnH4BLqIspZUu%2F07raZQ%2FK1AgKbBziukZ%2FfUv%2F%2BwZZbqQEM9eL3M0Arj6SKRBsyUiTJ%2BxX3ptF1EXZJ9g53YDUTDkqOI2yu%2F1bDBDDxzbhfHDBiQpzlRtJEKAPFAC%2B7iUin6T78FK3N1YwyNCficpEviagMWUExy0cxSTkU2ZRtQlwN1QRGB4lo3KYhqdZ5KsnuDDVx8%2FABjqkAb%2BiRdk0ANR5QNNu5DNOC5iSZ2biXZeHfxyO%2BqgH41HZtbsWteqwvtSqwp3HN%2Fb9N8hvAZ7BvK3l9L5H65RfKQh27OHQGz31K4jo1GcTWZz1dHfd6F35hk5BKvVvfFm8BmWUGEL0D3U3qjaCytk%2Fw8igQUVEFgJNZOGyNXRZSfYwLORsdX3qWefRalcfdNLdBi53udhIhhq84%2BKvHDXOZMUB72QS&X-Amz-Signature=5c5a3efda62968088f5f875577ce22ed24735375579d0e618724a04efaba3c80&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ITFQDUA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDF3SMwXPnlz4nDofAoi3Ouf4uZPS86wRuzdMKLIwLIzQIhAORpZS3AlIjFn7ukkFMZOEsDOe4rzf8uYT9Y1BCKZk6nKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFMJydH9sAhgw6lDkq3ANmPjQccCFBT%2BkdG%2BDoVLOd870Me3NJgq59T9%2Fnc5BRh%2FLyHevvYekef8cKdIVLxxlGbf2%2F8Fy%2B2tkBF1fJyFHEQF%2BzgMsurzMpoCsy8Yg1cus6ArBgp46G3aiVVRfUk00miQTfhLNVTgfg4QWFGT6ok0zkXy%2Box3ZTalM2iVgeo%2BUG0KGAKAk9Ysr8b7%2BliigJeC5rLiFEYdykThxNbfOa%2FVe%2FQyY6unQhhJ9M%2Fnoh2iHgJg32vQuwwa9T2rp%2BUcRoPVb5Jqsg%2FjCIzec4I7YaN7SRWrzIwDQ62a9IfV8%2BjIgRFUSkxIqvwx57QVTlRNMMIfcLw2xSRj39BjwijjBxmeC2p%2BbOmQT2yb%2FUkwNuEmLqXZu%2BG%2BIqGqp5vfeyI3vsD2VGXnH5EOeWEa3rn28jvF5ylkfGUcEdRNuQsw7tGHKlvYwppqQRG8UnH4BLqIspZUu%2F07raZQ%2FK1AgKbBziukZ%2FfUv%2F%2BwZZbqQEM9eL3M0Arj6SKRBsyUiTJ%2BxX3ptF1EXZJ9g53YDUTDkqOI2yu%2F1bDBDDxzbhfHDBiQpzlRtJEKAPFAC%2B7iUin6T78FK3N1YwyNCficpEviagMWUExy0cxSTkU2ZRtQlwN1QRGB4lo3KYhqdZ5KsnuDDVx8%2FABjqkAb%2BiRdk0ANR5QNNu5DNOC5iSZ2biXZeHfxyO%2BqgH41HZtbsWteqwvtSqwp3HN%2Fb9N8hvAZ7BvK3l9L5H65RfKQh27OHQGz31K4jo1GcTWZz1dHfd6F35hk5BKvVvfFm8BmWUGEL0D3U3qjaCytk%2Fw8igQUVEFgJNZOGyNXRZSfYwLORsdX3qWefRalcfdNLdBi53udhIhhq84%2BKvHDXOZMUB72QS&X-Amz-Signature=da264fff8caebfc1ce906ede8e9fcf53dd24732e3a104360dea0ac3b886a00da&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ITFQDUA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDF3SMwXPnlz4nDofAoi3Ouf4uZPS86wRuzdMKLIwLIzQIhAORpZS3AlIjFn7ukkFMZOEsDOe4rzf8uYT9Y1BCKZk6nKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFMJydH9sAhgw6lDkq3ANmPjQccCFBT%2BkdG%2BDoVLOd870Me3NJgq59T9%2Fnc5BRh%2FLyHevvYekef8cKdIVLxxlGbf2%2F8Fy%2B2tkBF1fJyFHEQF%2BzgMsurzMpoCsy8Yg1cus6ArBgp46G3aiVVRfUk00miQTfhLNVTgfg4QWFGT6ok0zkXy%2Box3ZTalM2iVgeo%2BUG0KGAKAk9Ysr8b7%2BliigJeC5rLiFEYdykThxNbfOa%2FVe%2FQyY6unQhhJ9M%2Fnoh2iHgJg32vQuwwa9T2rp%2BUcRoPVb5Jqsg%2FjCIzec4I7YaN7SRWrzIwDQ62a9IfV8%2BjIgRFUSkxIqvwx57QVTlRNMMIfcLw2xSRj39BjwijjBxmeC2p%2BbOmQT2yb%2FUkwNuEmLqXZu%2BG%2BIqGqp5vfeyI3vsD2VGXnH5EOeWEa3rn28jvF5ylkfGUcEdRNuQsw7tGHKlvYwppqQRG8UnH4BLqIspZUu%2F07raZQ%2FK1AgKbBziukZ%2FfUv%2F%2BwZZbqQEM9eL3M0Arj6SKRBsyUiTJ%2BxX3ptF1EXZJ9g53YDUTDkqOI2yu%2F1bDBDDxzbhfHDBiQpzlRtJEKAPFAC%2B7iUin6T78FK3N1YwyNCficpEviagMWUExy0cxSTkU2ZRtQlwN1QRGB4lo3KYhqdZ5KsnuDDVx8%2FABjqkAb%2BiRdk0ANR5QNNu5DNOC5iSZ2biXZeHfxyO%2BqgH41HZtbsWteqwvtSqwp3HN%2Fb9N8hvAZ7BvK3l9L5H65RfKQh27OHQGz31K4jo1GcTWZz1dHfd6F35hk5BKvVvfFm8BmWUGEL0D3U3qjaCytk%2Fw8igQUVEFgJNZOGyNXRZSfYwLORsdX3qWefRalcfdNLdBi53udhIhhq84%2BKvHDXOZMUB72QS&X-Amz-Signature=e81ffb27b0482decddbbdbcc8b1b79fbe0faa7f1f8dc47c544b345bb63612998&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ITFQDUA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDF3SMwXPnlz4nDofAoi3Ouf4uZPS86wRuzdMKLIwLIzQIhAORpZS3AlIjFn7ukkFMZOEsDOe4rzf8uYT9Y1BCKZk6nKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFMJydH9sAhgw6lDkq3ANmPjQccCFBT%2BkdG%2BDoVLOd870Me3NJgq59T9%2Fnc5BRh%2FLyHevvYekef8cKdIVLxxlGbf2%2F8Fy%2B2tkBF1fJyFHEQF%2BzgMsurzMpoCsy8Yg1cus6ArBgp46G3aiVVRfUk00miQTfhLNVTgfg4QWFGT6ok0zkXy%2Box3ZTalM2iVgeo%2BUG0KGAKAk9Ysr8b7%2BliigJeC5rLiFEYdykThxNbfOa%2FVe%2FQyY6unQhhJ9M%2Fnoh2iHgJg32vQuwwa9T2rp%2BUcRoPVb5Jqsg%2FjCIzec4I7YaN7SRWrzIwDQ62a9IfV8%2BjIgRFUSkxIqvwx57QVTlRNMMIfcLw2xSRj39BjwijjBxmeC2p%2BbOmQT2yb%2FUkwNuEmLqXZu%2BG%2BIqGqp5vfeyI3vsD2VGXnH5EOeWEa3rn28jvF5ylkfGUcEdRNuQsw7tGHKlvYwppqQRG8UnH4BLqIspZUu%2F07raZQ%2FK1AgKbBziukZ%2FfUv%2F%2BwZZbqQEM9eL3M0Arj6SKRBsyUiTJ%2BxX3ptF1EXZJ9g53YDUTDkqOI2yu%2F1bDBDDxzbhfHDBiQpzlRtJEKAPFAC%2B7iUin6T78FK3N1YwyNCficpEviagMWUExy0cxSTkU2ZRtQlwN1QRGB4lo3KYhqdZ5KsnuDDVx8%2FABjqkAb%2BiRdk0ANR5QNNu5DNOC5iSZ2biXZeHfxyO%2BqgH41HZtbsWteqwvtSqwp3HN%2Fb9N8hvAZ7BvK3l9L5H65RfKQh27OHQGz31K4jo1GcTWZz1dHfd6F35hk5BKvVvfFm8BmWUGEL0D3U3qjaCytk%2Fw8igQUVEFgJNZOGyNXRZSfYwLORsdX3qWefRalcfdNLdBi53udhIhhq84%2BKvHDXOZMUB72QS&X-Amz-Signature=52ab3922754aaddcae42e2b4c598a520aa3ad7e6a1bf849e75eec09180100a74&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ITFQDUA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDF3SMwXPnlz4nDofAoi3Ouf4uZPS86wRuzdMKLIwLIzQIhAORpZS3AlIjFn7ukkFMZOEsDOe4rzf8uYT9Y1BCKZk6nKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFMJydH9sAhgw6lDkq3ANmPjQccCFBT%2BkdG%2BDoVLOd870Me3NJgq59T9%2Fnc5BRh%2FLyHevvYekef8cKdIVLxxlGbf2%2F8Fy%2B2tkBF1fJyFHEQF%2BzgMsurzMpoCsy8Yg1cus6ArBgp46G3aiVVRfUk00miQTfhLNVTgfg4QWFGT6ok0zkXy%2Box3ZTalM2iVgeo%2BUG0KGAKAk9Ysr8b7%2BliigJeC5rLiFEYdykThxNbfOa%2FVe%2FQyY6unQhhJ9M%2Fnoh2iHgJg32vQuwwa9T2rp%2BUcRoPVb5Jqsg%2FjCIzec4I7YaN7SRWrzIwDQ62a9IfV8%2BjIgRFUSkxIqvwx57QVTlRNMMIfcLw2xSRj39BjwijjBxmeC2p%2BbOmQT2yb%2FUkwNuEmLqXZu%2BG%2BIqGqp5vfeyI3vsD2VGXnH5EOeWEa3rn28jvF5ylkfGUcEdRNuQsw7tGHKlvYwppqQRG8UnH4BLqIspZUu%2F07raZQ%2FK1AgKbBziukZ%2FfUv%2F%2BwZZbqQEM9eL3M0Arj6SKRBsyUiTJ%2BxX3ptF1EXZJ9g53YDUTDkqOI2yu%2F1bDBDDxzbhfHDBiQpzlRtJEKAPFAC%2B7iUin6T78FK3N1YwyNCficpEviagMWUExy0cxSTkU2ZRtQlwN1QRGB4lo3KYhqdZ5KsnuDDVx8%2FABjqkAb%2BiRdk0ANR5QNNu5DNOC5iSZ2biXZeHfxyO%2BqgH41HZtbsWteqwvtSqwp3HN%2Fb9N8hvAZ7BvK3l9L5H65RfKQh27OHQGz31K4jo1GcTWZz1dHfd6F35hk5BKvVvfFm8BmWUGEL0D3U3qjaCytk%2Fw8igQUVEFgJNZOGyNXRZSfYwLORsdX3qWefRalcfdNLdBi53udhIhhq84%2BKvHDXOZMUB72QS&X-Amz-Signature=320836013a22ce2b0a681247d81d58c5d440cd6f25fffe655d5ca5c52316a0f3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ITFQDUA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDF3SMwXPnlz4nDofAoi3Ouf4uZPS86wRuzdMKLIwLIzQIhAORpZS3AlIjFn7ukkFMZOEsDOe4rzf8uYT9Y1BCKZk6nKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFMJydH9sAhgw6lDkq3ANmPjQccCFBT%2BkdG%2BDoVLOd870Me3NJgq59T9%2Fnc5BRh%2FLyHevvYekef8cKdIVLxxlGbf2%2F8Fy%2B2tkBF1fJyFHEQF%2BzgMsurzMpoCsy8Yg1cus6ArBgp46G3aiVVRfUk00miQTfhLNVTgfg4QWFGT6ok0zkXy%2Box3ZTalM2iVgeo%2BUG0KGAKAk9Ysr8b7%2BliigJeC5rLiFEYdykThxNbfOa%2FVe%2FQyY6unQhhJ9M%2Fnoh2iHgJg32vQuwwa9T2rp%2BUcRoPVb5Jqsg%2FjCIzec4I7YaN7SRWrzIwDQ62a9IfV8%2BjIgRFUSkxIqvwx57QVTlRNMMIfcLw2xSRj39BjwijjBxmeC2p%2BbOmQT2yb%2FUkwNuEmLqXZu%2BG%2BIqGqp5vfeyI3vsD2VGXnH5EOeWEa3rn28jvF5ylkfGUcEdRNuQsw7tGHKlvYwppqQRG8UnH4BLqIspZUu%2F07raZQ%2FK1AgKbBziukZ%2FfUv%2F%2BwZZbqQEM9eL3M0Arj6SKRBsyUiTJ%2BxX3ptF1EXZJ9g53YDUTDkqOI2yu%2F1bDBDDxzbhfHDBiQpzlRtJEKAPFAC%2B7iUin6T78FK3N1YwyNCficpEviagMWUExy0cxSTkU2ZRtQlwN1QRGB4lo3KYhqdZ5KsnuDDVx8%2FABjqkAb%2BiRdk0ANR5QNNu5DNOC5iSZ2biXZeHfxyO%2BqgH41HZtbsWteqwvtSqwp3HN%2Fb9N8hvAZ7BvK3l9L5H65RfKQh27OHQGz31K4jo1GcTWZz1dHfd6F35hk5BKvVvfFm8BmWUGEL0D3U3qjaCytk%2Fw8igQUVEFgJNZOGyNXRZSfYwLORsdX3qWefRalcfdNLdBi53udhIhhq84%2BKvHDXOZMUB72QS&X-Amz-Signature=d6a9eb2c3e478a6c13706a94231bdd0f971688c10fd137ed060ccc462a299656&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
