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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ35YGQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPR43Dl3nf%2FZ2t9PZNBqQ16tt7w6atrhfjGtODLYE7%2FgIgIuXqKYeaYntP2FnjefHKv5AAFlqm3ewVKlAcgbXGoU4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNXTmOjav6HR%2F7gRSrcA%2FTdjjrhLfmYhWihcqMG5hJL7ZRYxFKOySs2LPDvEuctOo%2Fp09DxLgxEuICTXJz70WkVI5nYfnjmrZ%2BJt5yfYSlgCfAsBSeTEGuoIWmXfX5kDujyeRUf%2FjlYOO%2FMwbspOhWHdnteHlFUK0eyXeZ%2FwLeo8QzajaIhPAks6llmqxenal03q7J1G82X8d%2FH6pa4M1%2Brn8m1y6K51xakVlZj%2FRXvQKX6ZbuVWJG6ekQVZBN3j3Ogwf%2Fw%2FBDdFr49J9AER9I5xtLUErfnJZ1jDnHdsXwbFOk9bO3SYZ%2BZ22IQtnUo7M4Vpdx9paNXPw0jl%2FOOuVIwWoyJVITMqK8Rdc6YXbJv0IZXRjvxhD36Rl4Snjtso0dpqxXgkO8mjeqKagi9bl8SmrAdzyhGv%2FkZmWX8hp5yUnIer0KUsKWzIwg9mZT07r3EfuN8mIAjmUNryK%2Fst2a9WI7rtfjUBYs851kge7CVGxXf25I9psswk8iM5jGoYoCdQVcfci8Z4CIsrIoqxm%2F9bWPLj3EL6dgzh%2FHqzgOWPSy%2F9di6Exs7FL4jFFvrOxQTNH2W1PgwG3o5NaSATn03%2FGIlxNWqDZC8f6Nm2TnGVGblld%2BOqORVWQkWWH8btAj9Wz189iIkCB%2F%2FMIv958EGOqUBKGm32VaZjLnU%2B9jBX7vFwQH%2BDaC6x9jH5ZspHp5SXrkPmhJAa93QkqiBChvBDVYk63RqDyJOp%2FQcmbzV5QKyNQRDUVoQn8%2FoHTE7QN%2Bop0OsPKAFREDYYMqla14YAIXb9FJ3LmOu1SqQbED8cmbhe9lnSRopqdA0xSdf25%2B05%2B5g9absYMgocu8jUDc4HfdrqKbneGtraEJxu%2B3wapOLfLYYFzw3&X-Amz-Signature=b6b001285dd61150334b929a58738bdde91eb276d97813150198f8a2ad8b2b64&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ35YGQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPR43Dl3nf%2FZ2t9PZNBqQ16tt7w6atrhfjGtODLYE7%2FgIgIuXqKYeaYntP2FnjefHKv5AAFlqm3ewVKlAcgbXGoU4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNXTmOjav6HR%2F7gRSrcA%2FTdjjrhLfmYhWihcqMG5hJL7ZRYxFKOySs2LPDvEuctOo%2Fp09DxLgxEuICTXJz70WkVI5nYfnjmrZ%2BJt5yfYSlgCfAsBSeTEGuoIWmXfX5kDujyeRUf%2FjlYOO%2FMwbspOhWHdnteHlFUK0eyXeZ%2FwLeo8QzajaIhPAks6llmqxenal03q7J1G82X8d%2FH6pa4M1%2Brn8m1y6K51xakVlZj%2FRXvQKX6ZbuVWJG6ekQVZBN3j3Ogwf%2Fw%2FBDdFr49J9AER9I5xtLUErfnJZ1jDnHdsXwbFOk9bO3SYZ%2BZ22IQtnUo7M4Vpdx9paNXPw0jl%2FOOuVIwWoyJVITMqK8Rdc6YXbJv0IZXRjvxhD36Rl4Snjtso0dpqxXgkO8mjeqKagi9bl8SmrAdzyhGv%2FkZmWX8hp5yUnIer0KUsKWzIwg9mZT07r3EfuN8mIAjmUNryK%2Fst2a9WI7rtfjUBYs851kge7CVGxXf25I9psswk8iM5jGoYoCdQVcfci8Z4CIsrIoqxm%2F9bWPLj3EL6dgzh%2FHqzgOWPSy%2F9di6Exs7FL4jFFvrOxQTNH2W1PgwG3o5NaSATn03%2FGIlxNWqDZC8f6Nm2TnGVGblld%2BOqORVWQkWWH8btAj9Wz189iIkCB%2F%2FMIv958EGOqUBKGm32VaZjLnU%2B9jBX7vFwQH%2BDaC6x9jH5ZspHp5SXrkPmhJAa93QkqiBChvBDVYk63RqDyJOp%2FQcmbzV5QKyNQRDUVoQn8%2FoHTE7QN%2Bop0OsPKAFREDYYMqla14YAIXb9FJ3LmOu1SqQbED8cmbhe9lnSRopqdA0xSdf25%2B05%2B5g9absYMgocu8jUDc4HfdrqKbneGtraEJxu%2B3wapOLfLYYFzw3&X-Amz-Signature=3691e45175d70c43178aa77149ade105e63002b59d6655319486a7d9c66f1e61&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ35YGQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPR43Dl3nf%2FZ2t9PZNBqQ16tt7w6atrhfjGtODLYE7%2FgIgIuXqKYeaYntP2FnjefHKv5AAFlqm3ewVKlAcgbXGoU4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNXTmOjav6HR%2F7gRSrcA%2FTdjjrhLfmYhWihcqMG5hJL7ZRYxFKOySs2LPDvEuctOo%2Fp09DxLgxEuICTXJz70WkVI5nYfnjmrZ%2BJt5yfYSlgCfAsBSeTEGuoIWmXfX5kDujyeRUf%2FjlYOO%2FMwbspOhWHdnteHlFUK0eyXeZ%2FwLeo8QzajaIhPAks6llmqxenal03q7J1G82X8d%2FH6pa4M1%2Brn8m1y6K51xakVlZj%2FRXvQKX6ZbuVWJG6ekQVZBN3j3Ogwf%2Fw%2FBDdFr49J9AER9I5xtLUErfnJZ1jDnHdsXwbFOk9bO3SYZ%2BZ22IQtnUo7M4Vpdx9paNXPw0jl%2FOOuVIwWoyJVITMqK8Rdc6YXbJv0IZXRjvxhD36Rl4Snjtso0dpqxXgkO8mjeqKagi9bl8SmrAdzyhGv%2FkZmWX8hp5yUnIer0KUsKWzIwg9mZT07r3EfuN8mIAjmUNryK%2Fst2a9WI7rtfjUBYs851kge7CVGxXf25I9psswk8iM5jGoYoCdQVcfci8Z4CIsrIoqxm%2F9bWPLj3EL6dgzh%2FHqzgOWPSy%2F9di6Exs7FL4jFFvrOxQTNH2W1PgwG3o5NaSATn03%2FGIlxNWqDZC8f6Nm2TnGVGblld%2BOqORVWQkWWH8btAj9Wz189iIkCB%2F%2FMIv958EGOqUBKGm32VaZjLnU%2B9jBX7vFwQH%2BDaC6x9jH5ZspHp5SXrkPmhJAa93QkqiBChvBDVYk63RqDyJOp%2FQcmbzV5QKyNQRDUVoQn8%2FoHTE7QN%2Bop0OsPKAFREDYYMqla14YAIXb9FJ3LmOu1SqQbED8cmbhe9lnSRopqdA0xSdf25%2B05%2B5g9absYMgocu8jUDc4HfdrqKbneGtraEJxu%2B3wapOLfLYYFzw3&X-Amz-Signature=93dca345b9ad32863ee4c07a99d7523faae7ed06ef1ea1abbe311f3f848dac04&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ35YGQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPR43Dl3nf%2FZ2t9PZNBqQ16tt7w6atrhfjGtODLYE7%2FgIgIuXqKYeaYntP2FnjefHKv5AAFlqm3ewVKlAcgbXGoU4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNXTmOjav6HR%2F7gRSrcA%2FTdjjrhLfmYhWihcqMG5hJL7ZRYxFKOySs2LPDvEuctOo%2Fp09DxLgxEuICTXJz70WkVI5nYfnjmrZ%2BJt5yfYSlgCfAsBSeTEGuoIWmXfX5kDujyeRUf%2FjlYOO%2FMwbspOhWHdnteHlFUK0eyXeZ%2FwLeo8QzajaIhPAks6llmqxenal03q7J1G82X8d%2FH6pa4M1%2Brn8m1y6K51xakVlZj%2FRXvQKX6ZbuVWJG6ekQVZBN3j3Ogwf%2Fw%2FBDdFr49J9AER9I5xtLUErfnJZ1jDnHdsXwbFOk9bO3SYZ%2BZ22IQtnUo7M4Vpdx9paNXPw0jl%2FOOuVIwWoyJVITMqK8Rdc6YXbJv0IZXRjvxhD36Rl4Snjtso0dpqxXgkO8mjeqKagi9bl8SmrAdzyhGv%2FkZmWX8hp5yUnIer0KUsKWzIwg9mZT07r3EfuN8mIAjmUNryK%2Fst2a9WI7rtfjUBYs851kge7CVGxXf25I9psswk8iM5jGoYoCdQVcfci8Z4CIsrIoqxm%2F9bWPLj3EL6dgzh%2FHqzgOWPSy%2F9di6Exs7FL4jFFvrOxQTNH2W1PgwG3o5NaSATn03%2FGIlxNWqDZC8f6Nm2TnGVGblld%2BOqORVWQkWWH8btAj9Wz189iIkCB%2F%2FMIv958EGOqUBKGm32VaZjLnU%2B9jBX7vFwQH%2BDaC6x9jH5ZspHp5SXrkPmhJAa93QkqiBChvBDVYk63RqDyJOp%2FQcmbzV5QKyNQRDUVoQn8%2FoHTE7QN%2Bop0OsPKAFREDYYMqla14YAIXb9FJ3LmOu1SqQbED8cmbhe9lnSRopqdA0xSdf25%2B05%2B5g9absYMgocu8jUDc4HfdrqKbneGtraEJxu%2B3wapOLfLYYFzw3&X-Amz-Signature=f9e2097289f1ba0a62794d1e5e63650a13a8617f93388589473d164c2d538731&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ35YGQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPR43Dl3nf%2FZ2t9PZNBqQ16tt7w6atrhfjGtODLYE7%2FgIgIuXqKYeaYntP2FnjefHKv5AAFlqm3ewVKlAcgbXGoU4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNXTmOjav6HR%2F7gRSrcA%2FTdjjrhLfmYhWihcqMG5hJL7ZRYxFKOySs2LPDvEuctOo%2Fp09DxLgxEuICTXJz70WkVI5nYfnjmrZ%2BJt5yfYSlgCfAsBSeTEGuoIWmXfX5kDujyeRUf%2FjlYOO%2FMwbspOhWHdnteHlFUK0eyXeZ%2FwLeo8QzajaIhPAks6llmqxenal03q7J1G82X8d%2FH6pa4M1%2Brn8m1y6K51xakVlZj%2FRXvQKX6ZbuVWJG6ekQVZBN3j3Ogwf%2Fw%2FBDdFr49J9AER9I5xtLUErfnJZ1jDnHdsXwbFOk9bO3SYZ%2BZ22IQtnUo7M4Vpdx9paNXPw0jl%2FOOuVIwWoyJVITMqK8Rdc6YXbJv0IZXRjvxhD36Rl4Snjtso0dpqxXgkO8mjeqKagi9bl8SmrAdzyhGv%2FkZmWX8hp5yUnIer0KUsKWzIwg9mZT07r3EfuN8mIAjmUNryK%2Fst2a9WI7rtfjUBYs851kge7CVGxXf25I9psswk8iM5jGoYoCdQVcfci8Z4CIsrIoqxm%2F9bWPLj3EL6dgzh%2FHqzgOWPSy%2F9di6Exs7FL4jFFvrOxQTNH2W1PgwG3o5NaSATn03%2FGIlxNWqDZC8f6Nm2TnGVGblld%2BOqORVWQkWWH8btAj9Wz189iIkCB%2F%2FMIv958EGOqUBKGm32VaZjLnU%2B9jBX7vFwQH%2BDaC6x9jH5ZspHp5SXrkPmhJAa93QkqiBChvBDVYk63RqDyJOp%2FQcmbzV5QKyNQRDUVoQn8%2FoHTE7QN%2Bop0OsPKAFREDYYMqla14YAIXb9FJ3LmOu1SqQbED8cmbhe9lnSRopqdA0xSdf25%2B05%2B5g9absYMgocu8jUDc4HfdrqKbneGtraEJxu%2B3wapOLfLYYFzw3&X-Amz-Signature=cb5b5b76219b0017c5d4d96cd792b925c330810757b135ab28850005197f4b98&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ35YGQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPR43Dl3nf%2FZ2t9PZNBqQ16tt7w6atrhfjGtODLYE7%2FgIgIuXqKYeaYntP2FnjefHKv5AAFlqm3ewVKlAcgbXGoU4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNXTmOjav6HR%2F7gRSrcA%2FTdjjrhLfmYhWihcqMG5hJL7ZRYxFKOySs2LPDvEuctOo%2Fp09DxLgxEuICTXJz70WkVI5nYfnjmrZ%2BJt5yfYSlgCfAsBSeTEGuoIWmXfX5kDujyeRUf%2FjlYOO%2FMwbspOhWHdnteHlFUK0eyXeZ%2FwLeo8QzajaIhPAks6llmqxenal03q7J1G82X8d%2FH6pa4M1%2Brn8m1y6K51xakVlZj%2FRXvQKX6ZbuVWJG6ekQVZBN3j3Ogwf%2Fw%2FBDdFr49J9AER9I5xtLUErfnJZ1jDnHdsXwbFOk9bO3SYZ%2BZ22IQtnUo7M4Vpdx9paNXPw0jl%2FOOuVIwWoyJVITMqK8Rdc6YXbJv0IZXRjvxhD36Rl4Snjtso0dpqxXgkO8mjeqKagi9bl8SmrAdzyhGv%2FkZmWX8hp5yUnIer0KUsKWzIwg9mZT07r3EfuN8mIAjmUNryK%2Fst2a9WI7rtfjUBYs851kge7CVGxXf25I9psswk8iM5jGoYoCdQVcfci8Z4CIsrIoqxm%2F9bWPLj3EL6dgzh%2FHqzgOWPSy%2F9di6Exs7FL4jFFvrOxQTNH2W1PgwG3o5NaSATn03%2FGIlxNWqDZC8f6Nm2TnGVGblld%2BOqORVWQkWWH8btAj9Wz189iIkCB%2F%2FMIv958EGOqUBKGm32VaZjLnU%2B9jBX7vFwQH%2BDaC6x9jH5ZspHp5SXrkPmhJAa93QkqiBChvBDVYk63RqDyJOp%2FQcmbzV5QKyNQRDUVoQn8%2FoHTE7QN%2Bop0OsPKAFREDYYMqla14YAIXb9FJ3LmOu1SqQbED8cmbhe9lnSRopqdA0xSdf25%2B05%2B5g9absYMgocu8jUDc4HfdrqKbneGtraEJxu%2B3wapOLfLYYFzw3&X-Amz-Signature=1add2497445eb23b7ceb827ad3c89e3463f964b8c77631d0e300abeaaae8b3e6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ35YGQ5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPR43Dl3nf%2FZ2t9PZNBqQ16tt7w6atrhfjGtODLYE7%2FgIgIuXqKYeaYntP2FnjefHKv5AAFlqm3ewVKlAcgbXGoU4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNXTmOjav6HR%2F7gRSrcA%2FTdjjrhLfmYhWihcqMG5hJL7ZRYxFKOySs2LPDvEuctOo%2Fp09DxLgxEuICTXJz70WkVI5nYfnjmrZ%2BJt5yfYSlgCfAsBSeTEGuoIWmXfX5kDujyeRUf%2FjlYOO%2FMwbspOhWHdnteHlFUK0eyXeZ%2FwLeo8QzajaIhPAks6llmqxenal03q7J1G82X8d%2FH6pa4M1%2Brn8m1y6K51xakVlZj%2FRXvQKX6ZbuVWJG6ekQVZBN3j3Ogwf%2Fw%2FBDdFr49J9AER9I5xtLUErfnJZ1jDnHdsXwbFOk9bO3SYZ%2BZ22IQtnUo7M4Vpdx9paNXPw0jl%2FOOuVIwWoyJVITMqK8Rdc6YXbJv0IZXRjvxhD36Rl4Snjtso0dpqxXgkO8mjeqKagi9bl8SmrAdzyhGv%2FkZmWX8hp5yUnIer0KUsKWzIwg9mZT07r3EfuN8mIAjmUNryK%2Fst2a9WI7rtfjUBYs851kge7CVGxXf25I9psswk8iM5jGoYoCdQVcfci8Z4CIsrIoqxm%2F9bWPLj3EL6dgzh%2FHqzgOWPSy%2F9di6Exs7FL4jFFvrOxQTNH2W1PgwG3o5NaSATn03%2FGIlxNWqDZC8f6Nm2TnGVGblld%2BOqORVWQkWWH8btAj9Wz189iIkCB%2F%2FMIv958EGOqUBKGm32VaZjLnU%2B9jBX7vFwQH%2BDaC6x9jH5ZspHp5SXrkPmhJAa93QkqiBChvBDVYk63RqDyJOp%2FQcmbzV5QKyNQRDUVoQn8%2FoHTE7QN%2Bop0OsPKAFREDYYMqla14YAIXb9FJ3LmOu1SqQbED8cmbhe9lnSRopqdA0xSdf25%2B05%2B5g9absYMgocu8jUDc4HfdrqKbneGtraEJxu%2B3wapOLfLYYFzw3&X-Amz-Signature=e59ebd57d9a552f74026df929a536a5a242a86b943f8f9a3d4b102e1da66352a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
