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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKPZRSCN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmM1eY6NudOpGYcEGk25ZICD%2FrzWBpwBqYh%2BJqYM5IPAiBqEJDaE1tQpcfZKLGb9ARjuiBunaGybvmuU08OEUgzrCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjmBV1UDIHSATvpKIKtwDYtUvBwBVmCwK4k8kvJLrSbfCfVU9X%2F3K0V%2BRF1J7WPnqP4XPm9GCMv8ME%2FFaaAJaB49C6xbmT01gByBjIkX5%2BWyovh0bdHMkM4nhDsJ0Mjyd3r1UoD1LEj%2Fy7FyV%2BrB8qB7TrThlOC3mbJUPBQWxN8QJyJkrHf6NXy%2Bz%2B4vgqmUb8X4u6xVw6gDmem288jNq7A6wJQam6%2FF04F5FW611qIjz8gEmkpdMeloSUXQ11OLBlV5Na1RsMkXsKn3ZAwOf2%2F6XNn24NEadnQhbZoqnQWX6ivxMEA8QC8K%2FIWNg5%2BzrvAgVsjBzDWDu3qKIMiwh4wgLjPWi71%2B1FKpV2L3BtdbtZCsFbA2MLmCiZqOoHMK3h1iWhUM%2BXDuSpl%2FhKqs2CaOzToNHSrZxYPv7oPOcryQh%2BM8kKUA%2BqNRGQbxuQfXknVaGfbYPvI0ZttWnM%2FxK3f6hTtxzAbx8FMWSxjd4uZqS9GJIoqm0wNhZuh6TLEqSDmaCW9i2Dg1RmHo5nt7NE9lEcjRW9h5SVWWyvZkitWMKCubInR4YeUDDgYjlgYGzWnTyol9npOUGbNEWlmgkJcQyS3v%2FMFYi9Sq1wA9nkQsJabiDYkazEmoto%2BYeCZZ%2Bv7KkwwWaAdsz69cwu%2FSAwwY6pgHc5eyaOV1g0HaPn1eQtppM6G%2FzvOffWjCOajzbi45bHfn49QQUKW4ZMrgysNQPPnltIpSkwRfc4FN%2Bk6S6h8kkecr6ha8Y8dp8ynZgbyIcUOlzQRP%2FlIyRoS9%2FxXib614ifoQB5Rk974xUQtskqaj%2BQAuLAP3QZCx2QbGA3d58s9pv3Nc4Whq63WcxPhzTTGQWpyxuMglCu7KDNZthJm7XmyyeM%2BB5&X-Amz-Signature=71d034280294f3bf60392e5ca2aaaea2f23e953bdd0d39eaab6b2e9b71528027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKPZRSCN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmM1eY6NudOpGYcEGk25ZICD%2FrzWBpwBqYh%2BJqYM5IPAiBqEJDaE1tQpcfZKLGb9ARjuiBunaGybvmuU08OEUgzrCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjmBV1UDIHSATvpKIKtwDYtUvBwBVmCwK4k8kvJLrSbfCfVU9X%2F3K0V%2BRF1J7WPnqP4XPm9GCMv8ME%2FFaaAJaB49C6xbmT01gByBjIkX5%2BWyovh0bdHMkM4nhDsJ0Mjyd3r1UoD1LEj%2Fy7FyV%2BrB8qB7TrThlOC3mbJUPBQWxN8QJyJkrHf6NXy%2Bz%2B4vgqmUb8X4u6xVw6gDmem288jNq7A6wJQam6%2FF04F5FW611qIjz8gEmkpdMeloSUXQ11OLBlV5Na1RsMkXsKn3ZAwOf2%2F6XNn24NEadnQhbZoqnQWX6ivxMEA8QC8K%2FIWNg5%2BzrvAgVsjBzDWDu3qKIMiwh4wgLjPWi71%2B1FKpV2L3BtdbtZCsFbA2MLmCiZqOoHMK3h1iWhUM%2BXDuSpl%2FhKqs2CaOzToNHSrZxYPv7oPOcryQh%2BM8kKUA%2BqNRGQbxuQfXknVaGfbYPvI0ZttWnM%2FxK3f6hTtxzAbx8FMWSxjd4uZqS9GJIoqm0wNhZuh6TLEqSDmaCW9i2Dg1RmHo5nt7NE9lEcjRW9h5SVWWyvZkitWMKCubInR4YeUDDgYjlgYGzWnTyol9npOUGbNEWlmgkJcQyS3v%2FMFYi9Sq1wA9nkQsJabiDYkazEmoto%2BYeCZZ%2Bv7KkwwWaAdsz69cwu%2FSAwwY6pgHc5eyaOV1g0HaPn1eQtppM6G%2FzvOffWjCOajzbi45bHfn49QQUKW4ZMrgysNQPPnltIpSkwRfc4FN%2Bk6S6h8kkecr6ha8Y8dp8ynZgbyIcUOlzQRP%2FlIyRoS9%2FxXib614ifoQB5Rk974xUQtskqaj%2BQAuLAP3QZCx2QbGA3d58s9pv3Nc4Whq63WcxPhzTTGQWpyxuMglCu7KDNZthJm7XmyyeM%2BB5&X-Amz-Signature=0459c3d8938ce8072a73b4dbabe1fade09e710e31090f265c3fecdfe8592627c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKPZRSCN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmM1eY6NudOpGYcEGk25ZICD%2FrzWBpwBqYh%2BJqYM5IPAiBqEJDaE1tQpcfZKLGb9ARjuiBunaGybvmuU08OEUgzrCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjmBV1UDIHSATvpKIKtwDYtUvBwBVmCwK4k8kvJLrSbfCfVU9X%2F3K0V%2BRF1J7WPnqP4XPm9GCMv8ME%2FFaaAJaB49C6xbmT01gByBjIkX5%2BWyovh0bdHMkM4nhDsJ0Mjyd3r1UoD1LEj%2Fy7FyV%2BrB8qB7TrThlOC3mbJUPBQWxN8QJyJkrHf6NXy%2Bz%2B4vgqmUb8X4u6xVw6gDmem288jNq7A6wJQam6%2FF04F5FW611qIjz8gEmkpdMeloSUXQ11OLBlV5Na1RsMkXsKn3ZAwOf2%2F6XNn24NEadnQhbZoqnQWX6ivxMEA8QC8K%2FIWNg5%2BzrvAgVsjBzDWDu3qKIMiwh4wgLjPWi71%2B1FKpV2L3BtdbtZCsFbA2MLmCiZqOoHMK3h1iWhUM%2BXDuSpl%2FhKqs2CaOzToNHSrZxYPv7oPOcryQh%2BM8kKUA%2BqNRGQbxuQfXknVaGfbYPvI0ZttWnM%2FxK3f6hTtxzAbx8FMWSxjd4uZqS9GJIoqm0wNhZuh6TLEqSDmaCW9i2Dg1RmHo5nt7NE9lEcjRW9h5SVWWyvZkitWMKCubInR4YeUDDgYjlgYGzWnTyol9npOUGbNEWlmgkJcQyS3v%2FMFYi9Sq1wA9nkQsJabiDYkazEmoto%2BYeCZZ%2Bv7KkwwWaAdsz69cwu%2FSAwwY6pgHc5eyaOV1g0HaPn1eQtppM6G%2FzvOffWjCOajzbi45bHfn49QQUKW4ZMrgysNQPPnltIpSkwRfc4FN%2Bk6S6h8kkecr6ha8Y8dp8ynZgbyIcUOlzQRP%2FlIyRoS9%2FxXib614ifoQB5Rk974xUQtskqaj%2BQAuLAP3QZCx2QbGA3d58s9pv3Nc4Whq63WcxPhzTTGQWpyxuMglCu7KDNZthJm7XmyyeM%2BB5&X-Amz-Signature=fe3c339c83309ff0ab68723386a0518a5504a3b078d2d049f706c9bbe7dac003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKPZRSCN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmM1eY6NudOpGYcEGk25ZICD%2FrzWBpwBqYh%2BJqYM5IPAiBqEJDaE1tQpcfZKLGb9ARjuiBunaGybvmuU08OEUgzrCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjmBV1UDIHSATvpKIKtwDYtUvBwBVmCwK4k8kvJLrSbfCfVU9X%2F3K0V%2BRF1J7WPnqP4XPm9GCMv8ME%2FFaaAJaB49C6xbmT01gByBjIkX5%2BWyovh0bdHMkM4nhDsJ0Mjyd3r1UoD1LEj%2Fy7FyV%2BrB8qB7TrThlOC3mbJUPBQWxN8QJyJkrHf6NXy%2Bz%2B4vgqmUb8X4u6xVw6gDmem288jNq7A6wJQam6%2FF04F5FW611qIjz8gEmkpdMeloSUXQ11OLBlV5Na1RsMkXsKn3ZAwOf2%2F6XNn24NEadnQhbZoqnQWX6ivxMEA8QC8K%2FIWNg5%2BzrvAgVsjBzDWDu3qKIMiwh4wgLjPWi71%2B1FKpV2L3BtdbtZCsFbA2MLmCiZqOoHMK3h1iWhUM%2BXDuSpl%2FhKqs2CaOzToNHSrZxYPv7oPOcryQh%2BM8kKUA%2BqNRGQbxuQfXknVaGfbYPvI0ZttWnM%2FxK3f6hTtxzAbx8FMWSxjd4uZqS9GJIoqm0wNhZuh6TLEqSDmaCW9i2Dg1RmHo5nt7NE9lEcjRW9h5SVWWyvZkitWMKCubInR4YeUDDgYjlgYGzWnTyol9npOUGbNEWlmgkJcQyS3v%2FMFYi9Sq1wA9nkQsJabiDYkazEmoto%2BYeCZZ%2Bv7KkwwWaAdsz69cwu%2FSAwwY6pgHc5eyaOV1g0HaPn1eQtppM6G%2FzvOffWjCOajzbi45bHfn49QQUKW4ZMrgysNQPPnltIpSkwRfc4FN%2Bk6S6h8kkecr6ha8Y8dp8ynZgbyIcUOlzQRP%2FlIyRoS9%2FxXib614ifoQB5Rk974xUQtskqaj%2BQAuLAP3QZCx2QbGA3d58s9pv3Nc4Whq63WcxPhzTTGQWpyxuMglCu7KDNZthJm7XmyyeM%2BB5&X-Amz-Signature=055a09989b920b26ae727cf50da58215e15bc4ebb0a424addbc0c953712dc539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKPZRSCN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmM1eY6NudOpGYcEGk25ZICD%2FrzWBpwBqYh%2BJqYM5IPAiBqEJDaE1tQpcfZKLGb9ARjuiBunaGybvmuU08OEUgzrCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjmBV1UDIHSATvpKIKtwDYtUvBwBVmCwK4k8kvJLrSbfCfVU9X%2F3K0V%2BRF1J7WPnqP4XPm9GCMv8ME%2FFaaAJaB49C6xbmT01gByBjIkX5%2BWyovh0bdHMkM4nhDsJ0Mjyd3r1UoD1LEj%2Fy7FyV%2BrB8qB7TrThlOC3mbJUPBQWxN8QJyJkrHf6NXy%2Bz%2B4vgqmUb8X4u6xVw6gDmem288jNq7A6wJQam6%2FF04F5FW611qIjz8gEmkpdMeloSUXQ11OLBlV5Na1RsMkXsKn3ZAwOf2%2F6XNn24NEadnQhbZoqnQWX6ivxMEA8QC8K%2FIWNg5%2BzrvAgVsjBzDWDu3qKIMiwh4wgLjPWi71%2B1FKpV2L3BtdbtZCsFbA2MLmCiZqOoHMK3h1iWhUM%2BXDuSpl%2FhKqs2CaOzToNHSrZxYPv7oPOcryQh%2BM8kKUA%2BqNRGQbxuQfXknVaGfbYPvI0ZttWnM%2FxK3f6hTtxzAbx8FMWSxjd4uZqS9GJIoqm0wNhZuh6TLEqSDmaCW9i2Dg1RmHo5nt7NE9lEcjRW9h5SVWWyvZkitWMKCubInR4YeUDDgYjlgYGzWnTyol9npOUGbNEWlmgkJcQyS3v%2FMFYi9Sq1wA9nkQsJabiDYkazEmoto%2BYeCZZ%2Bv7KkwwWaAdsz69cwu%2FSAwwY6pgHc5eyaOV1g0HaPn1eQtppM6G%2FzvOffWjCOajzbi45bHfn49QQUKW4ZMrgysNQPPnltIpSkwRfc4FN%2Bk6S6h8kkecr6ha8Y8dp8ynZgbyIcUOlzQRP%2FlIyRoS9%2FxXib614ifoQB5Rk974xUQtskqaj%2BQAuLAP3QZCx2QbGA3d58s9pv3Nc4Whq63WcxPhzTTGQWpyxuMglCu7KDNZthJm7XmyyeM%2BB5&X-Amz-Signature=60fa431ea9ce1f233ba5a207fa4fe73125006bd786db5f58aa44b541c6342465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKPZRSCN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmM1eY6NudOpGYcEGk25ZICD%2FrzWBpwBqYh%2BJqYM5IPAiBqEJDaE1tQpcfZKLGb9ARjuiBunaGybvmuU08OEUgzrCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjmBV1UDIHSATvpKIKtwDYtUvBwBVmCwK4k8kvJLrSbfCfVU9X%2F3K0V%2BRF1J7WPnqP4XPm9GCMv8ME%2FFaaAJaB49C6xbmT01gByBjIkX5%2BWyovh0bdHMkM4nhDsJ0Mjyd3r1UoD1LEj%2Fy7FyV%2BrB8qB7TrThlOC3mbJUPBQWxN8QJyJkrHf6NXy%2Bz%2B4vgqmUb8X4u6xVw6gDmem288jNq7A6wJQam6%2FF04F5FW611qIjz8gEmkpdMeloSUXQ11OLBlV5Na1RsMkXsKn3ZAwOf2%2F6XNn24NEadnQhbZoqnQWX6ivxMEA8QC8K%2FIWNg5%2BzrvAgVsjBzDWDu3qKIMiwh4wgLjPWi71%2B1FKpV2L3BtdbtZCsFbA2MLmCiZqOoHMK3h1iWhUM%2BXDuSpl%2FhKqs2CaOzToNHSrZxYPv7oPOcryQh%2BM8kKUA%2BqNRGQbxuQfXknVaGfbYPvI0ZttWnM%2FxK3f6hTtxzAbx8FMWSxjd4uZqS9GJIoqm0wNhZuh6TLEqSDmaCW9i2Dg1RmHo5nt7NE9lEcjRW9h5SVWWyvZkitWMKCubInR4YeUDDgYjlgYGzWnTyol9npOUGbNEWlmgkJcQyS3v%2FMFYi9Sq1wA9nkQsJabiDYkazEmoto%2BYeCZZ%2Bv7KkwwWaAdsz69cwu%2FSAwwY6pgHc5eyaOV1g0HaPn1eQtppM6G%2FzvOffWjCOajzbi45bHfn49QQUKW4ZMrgysNQPPnltIpSkwRfc4FN%2Bk6S6h8kkecr6ha8Y8dp8ynZgbyIcUOlzQRP%2FlIyRoS9%2FxXib614ifoQB5Rk974xUQtskqaj%2BQAuLAP3QZCx2QbGA3d58s9pv3Nc4Whq63WcxPhzTTGQWpyxuMglCu7KDNZthJm7XmyyeM%2BB5&X-Amz-Signature=d0116d76fd19f2eb936db5d6ff533c4c4db78f751adf5519acce04be0338413a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKPZRSCN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmM1eY6NudOpGYcEGk25ZICD%2FrzWBpwBqYh%2BJqYM5IPAiBqEJDaE1tQpcfZKLGb9ARjuiBunaGybvmuU08OEUgzrCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjmBV1UDIHSATvpKIKtwDYtUvBwBVmCwK4k8kvJLrSbfCfVU9X%2F3K0V%2BRF1J7WPnqP4XPm9GCMv8ME%2FFaaAJaB49C6xbmT01gByBjIkX5%2BWyovh0bdHMkM4nhDsJ0Mjyd3r1UoD1LEj%2Fy7FyV%2BrB8qB7TrThlOC3mbJUPBQWxN8QJyJkrHf6NXy%2Bz%2B4vgqmUb8X4u6xVw6gDmem288jNq7A6wJQam6%2FF04F5FW611qIjz8gEmkpdMeloSUXQ11OLBlV5Na1RsMkXsKn3ZAwOf2%2F6XNn24NEadnQhbZoqnQWX6ivxMEA8QC8K%2FIWNg5%2BzrvAgVsjBzDWDu3qKIMiwh4wgLjPWi71%2B1FKpV2L3BtdbtZCsFbA2MLmCiZqOoHMK3h1iWhUM%2BXDuSpl%2FhKqs2CaOzToNHSrZxYPv7oPOcryQh%2BM8kKUA%2BqNRGQbxuQfXknVaGfbYPvI0ZttWnM%2FxK3f6hTtxzAbx8FMWSxjd4uZqS9GJIoqm0wNhZuh6TLEqSDmaCW9i2Dg1RmHo5nt7NE9lEcjRW9h5SVWWyvZkitWMKCubInR4YeUDDgYjlgYGzWnTyol9npOUGbNEWlmgkJcQyS3v%2FMFYi9Sq1wA9nkQsJabiDYkazEmoto%2BYeCZZ%2Bv7KkwwWaAdsz69cwu%2FSAwwY6pgHc5eyaOV1g0HaPn1eQtppM6G%2FzvOffWjCOajzbi45bHfn49QQUKW4ZMrgysNQPPnltIpSkwRfc4FN%2Bk6S6h8kkecr6ha8Y8dp8ynZgbyIcUOlzQRP%2FlIyRoS9%2FxXib614ifoQB5Rk974xUQtskqaj%2BQAuLAP3QZCx2QbGA3d58s9pv3Nc4Whq63WcxPhzTTGQWpyxuMglCu7KDNZthJm7XmyyeM%2BB5&X-Amz-Signature=4d6d6db52ac6ec899fc2ebc79bfa726b3d00c121c2025e48131457ebd3189f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
