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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHC6KSHM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDNI7QKkOGcrB6PyUL8ZEZgpFOdX2WpRCQjdtlshmdrEgIhANIggeG5RYkOG2%2B0VL7EQr%2BYTUB9x7oXxk%2BTOZSa%2Fz7kKv8DCEcQABoMNjM3NDIzMTgzODA1IgxATfP7qjed3WZOWH8q3AMst6VGkeMKjYqa9v6TGq%2BGV6GSzA38JxUXgKt%2BGN5uhjeXAfTntP93ODqftJAKa6mgz%2BrhR5m71XM%2F%2BczFMY2VQA8xkkUFzKd%2ByX1P4Bm6LSo7hl8JmGOkugbK6LAs8VX0OhNXKGzdlH5VLt5mQOWCgSHMdDmqXAawv5FtIoWPVdWvEetf3rEjYxnj8Yx2W637ycTPcN3Z3G%2Fs8kAnzhtwXsYrErJg77A7iIDV9jbUatendTuBJDHMa2P%2FocU%2BIExHvx2UyDhnRehjbzEM2whL%2BooBIsCp9SedlN7XY2mJfNhiVczMndPlBhxfjn3V%2F6KsTQIA4QtgJvT%2BNdGEn0yuf9QvUgbHAD%2FrR5%2B%2B4N1mID%2BfNhsUACr8eDVKPnZ5UUvD%2FXqrcpKBLYtQRv3IbcYeYJeMUXY8gLoZKiXzmFP3yaiGkthM1ygTqlk%2B8OkNA8SJso3d1sJSW19obkbs9TJb%2BySsxJtYcd8OYo7Keo6SqNf8AXoUizIoiFFCEtK8BmvjD0TzJCQYaXLjLwvQPC5QOAzT7iPJ61aYSP25Hvue%2FaDIiSqt%2FCEHlHK%2FcripqYdInlx7h3udJvAO8B%2B6bUbHPmwDQHpBl%2BoxumDKBXQQ9HVUIGsjiwofEtPj3zCFxsK9BjqkAe0IyKm8p8MgAgwabi85cIlURLJ8%2F4qLnfYXTxBt5BpXZcy%2FESMZOjQ7OMAVmCn41XTQmvbOLRkYFOipUKpts8Ystjg%2BdeY4gnyrMXz268aNtHaxDV2LxA50BBI%2Fa1aCWO%2FQ5YCUe0yp%2FxqehsouDOOTPBQyVrokRcXOtbgmyFBmwfusu3iUp3oSdIy3QoWdIKYdQcxCzsDf9I5NNvAWzU7VFycH&X-Amz-Signature=dd6f9deada43d9b5558f4f5fd0fbad5da5e82564d87da75d58890d0340f4bd81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHC6KSHM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDNI7QKkOGcrB6PyUL8ZEZgpFOdX2WpRCQjdtlshmdrEgIhANIggeG5RYkOG2%2B0VL7EQr%2BYTUB9x7oXxk%2BTOZSa%2Fz7kKv8DCEcQABoMNjM3NDIzMTgzODA1IgxATfP7qjed3WZOWH8q3AMst6VGkeMKjYqa9v6TGq%2BGV6GSzA38JxUXgKt%2BGN5uhjeXAfTntP93ODqftJAKa6mgz%2BrhR5m71XM%2F%2BczFMY2VQA8xkkUFzKd%2ByX1P4Bm6LSo7hl8JmGOkugbK6LAs8VX0OhNXKGzdlH5VLt5mQOWCgSHMdDmqXAawv5FtIoWPVdWvEetf3rEjYxnj8Yx2W637ycTPcN3Z3G%2Fs8kAnzhtwXsYrErJg77A7iIDV9jbUatendTuBJDHMa2P%2FocU%2BIExHvx2UyDhnRehjbzEM2whL%2BooBIsCp9SedlN7XY2mJfNhiVczMndPlBhxfjn3V%2F6KsTQIA4QtgJvT%2BNdGEn0yuf9QvUgbHAD%2FrR5%2B%2B4N1mID%2BfNhsUACr8eDVKPnZ5UUvD%2FXqrcpKBLYtQRv3IbcYeYJeMUXY8gLoZKiXzmFP3yaiGkthM1ygTqlk%2B8OkNA8SJso3d1sJSW19obkbs9TJb%2BySsxJtYcd8OYo7Keo6SqNf8AXoUizIoiFFCEtK8BmvjD0TzJCQYaXLjLwvQPC5QOAzT7iPJ61aYSP25Hvue%2FaDIiSqt%2FCEHlHK%2FcripqYdInlx7h3udJvAO8B%2B6bUbHPmwDQHpBl%2BoxumDKBXQQ9HVUIGsjiwofEtPj3zCFxsK9BjqkAe0IyKm8p8MgAgwabi85cIlURLJ8%2F4qLnfYXTxBt5BpXZcy%2FESMZOjQ7OMAVmCn41XTQmvbOLRkYFOipUKpts8Ystjg%2BdeY4gnyrMXz268aNtHaxDV2LxA50BBI%2Fa1aCWO%2FQ5YCUe0yp%2FxqehsouDOOTPBQyVrokRcXOtbgmyFBmwfusu3iUp3oSdIy3QoWdIKYdQcxCzsDf9I5NNvAWzU7VFycH&X-Amz-Signature=ae1a042af98818aaf6d08fb6cd22c842166263c1834c472d651b4f976cb9d8da&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHC6KSHM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDNI7QKkOGcrB6PyUL8ZEZgpFOdX2WpRCQjdtlshmdrEgIhANIggeG5RYkOG2%2B0VL7EQr%2BYTUB9x7oXxk%2BTOZSa%2Fz7kKv8DCEcQABoMNjM3NDIzMTgzODA1IgxATfP7qjed3WZOWH8q3AMst6VGkeMKjYqa9v6TGq%2BGV6GSzA38JxUXgKt%2BGN5uhjeXAfTntP93ODqftJAKa6mgz%2BrhR5m71XM%2F%2BczFMY2VQA8xkkUFzKd%2ByX1P4Bm6LSo7hl8JmGOkugbK6LAs8VX0OhNXKGzdlH5VLt5mQOWCgSHMdDmqXAawv5FtIoWPVdWvEetf3rEjYxnj8Yx2W637ycTPcN3Z3G%2Fs8kAnzhtwXsYrErJg77A7iIDV9jbUatendTuBJDHMa2P%2FocU%2BIExHvx2UyDhnRehjbzEM2whL%2BooBIsCp9SedlN7XY2mJfNhiVczMndPlBhxfjn3V%2F6KsTQIA4QtgJvT%2BNdGEn0yuf9QvUgbHAD%2FrR5%2B%2B4N1mID%2BfNhsUACr8eDVKPnZ5UUvD%2FXqrcpKBLYtQRv3IbcYeYJeMUXY8gLoZKiXzmFP3yaiGkthM1ygTqlk%2B8OkNA8SJso3d1sJSW19obkbs9TJb%2BySsxJtYcd8OYo7Keo6SqNf8AXoUizIoiFFCEtK8BmvjD0TzJCQYaXLjLwvQPC5QOAzT7iPJ61aYSP25Hvue%2FaDIiSqt%2FCEHlHK%2FcripqYdInlx7h3udJvAO8B%2B6bUbHPmwDQHpBl%2BoxumDKBXQQ9HVUIGsjiwofEtPj3zCFxsK9BjqkAe0IyKm8p8MgAgwabi85cIlURLJ8%2F4qLnfYXTxBt5BpXZcy%2FESMZOjQ7OMAVmCn41XTQmvbOLRkYFOipUKpts8Ystjg%2BdeY4gnyrMXz268aNtHaxDV2LxA50BBI%2Fa1aCWO%2FQ5YCUe0yp%2FxqehsouDOOTPBQyVrokRcXOtbgmyFBmwfusu3iUp3oSdIy3QoWdIKYdQcxCzsDf9I5NNvAWzU7VFycH&X-Amz-Signature=f2d4f291425b859f21cbcf05c965be393d8600618255ad2eafd304c28cbf9ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHC6KSHM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDNI7QKkOGcrB6PyUL8ZEZgpFOdX2WpRCQjdtlshmdrEgIhANIggeG5RYkOG2%2B0VL7EQr%2BYTUB9x7oXxk%2BTOZSa%2Fz7kKv8DCEcQABoMNjM3NDIzMTgzODA1IgxATfP7qjed3WZOWH8q3AMst6VGkeMKjYqa9v6TGq%2BGV6GSzA38JxUXgKt%2BGN5uhjeXAfTntP93ODqftJAKa6mgz%2BrhR5m71XM%2F%2BczFMY2VQA8xkkUFzKd%2ByX1P4Bm6LSo7hl8JmGOkugbK6LAs8VX0OhNXKGzdlH5VLt5mQOWCgSHMdDmqXAawv5FtIoWPVdWvEetf3rEjYxnj8Yx2W637ycTPcN3Z3G%2Fs8kAnzhtwXsYrErJg77A7iIDV9jbUatendTuBJDHMa2P%2FocU%2BIExHvx2UyDhnRehjbzEM2whL%2BooBIsCp9SedlN7XY2mJfNhiVczMndPlBhxfjn3V%2F6KsTQIA4QtgJvT%2BNdGEn0yuf9QvUgbHAD%2FrR5%2B%2B4N1mID%2BfNhsUACr8eDVKPnZ5UUvD%2FXqrcpKBLYtQRv3IbcYeYJeMUXY8gLoZKiXzmFP3yaiGkthM1ygTqlk%2B8OkNA8SJso3d1sJSW19obkbs9TJb%2BySsxJtYcd8OYo7Keo6SqNf8AXoUizIoiFFCEtK8BmvjD0TzJCQYaXLjLwvQPC5QOAzT7iPJ61aYSP25Hvue%2FaDIiSqt%2FCEHlHK%2FcripqYdInlx7h3udJvAO8B%2B6bUbHPmwDQHpBl%2BoxumDKBXQQ9HVUIGsjiwofEtPj3zCFxsK9BjqkAe0IyKm8p8MgAgwabi85cIlURLJ8%2F4qLnfYXTxBt5BpXZcy%2FESMZOjQ7OMAVmCn41XTQmvbOLRkYFOipUKpts8Ystjg%2BdeY4gnyrMXz268aNtHaxDV2LxA50BBI%2Fa1aCWO%2FQ5YCUe0yp%2FxqehsouDOOTPBQyVrokRcXOtbgmyFBmwfusu3iUp3oSdIy3QoWdIKYdQcxCzsDf9I5NNvAWzU7VFycH&X-Amz-Signature=511ca40865a260f340ef4626fd36be76e7e9ebec62b4275a1605c2bf35c9a096&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHC6KSHM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDNI7QKkOGcrB6PyUL8ZEZgpFOdX2WpRCQjdtlshmdrEgIhANIggeG5RYkOG2%2B0VL7EQr%2BYTUB9x7oXxk%2BTOZSa%2Fz7kKv8DCEcQABoMNjM3NDIzMTgzODA1IgxATfP7qjed3WZOWH8q3AMst6VGkeMKjYqa9v6TGq%2BGV6GSzA38JxUXgKt%2BGN5uhjeXAfTntP93ODqftJAKa6mgz%2BrhR5m71XM%2F%2BczFMY2VQA8xkkUFzKd%2ByX1P4Bm6LSo7hl8JmGOkugbK6LAs8VX0OhNXKGzdlH5VLt5mQOWCgSHMdDmqXAawv5FtIoWPVdWvEetf3rEjYxnj8Yx2W637ycTPcN3Z3G%2Fs8kAnzhtwXsYrErJg77A7iIDV9jbUatendTuBJDHMa2P%2FocU%2BIExHvx2UyDhnRehjbzEM2whL%2BooBIsCp9SedlN7XY2mJfNhiVczMndPlBhxfjn3V%2F6KsTQIA4QtgJvT%2BNdGEn0yuf9QvUgbHAD%2FrR5%2B%2B4N1mID%2BfNhsUACr8eDVKPnZ5UUvD%2FXqrcpKBLYtQRv3IbcYeYJeMUXY8gLoZKiXzmFP3yaiGkthM1ygTqlk%2B8OkNA8SJso3d1sJSW19obkbs9TJb%2BySsxJtYcd8OYo7Keo6SqNf8AXoUizIoiFFCEtK8BmvjD0TzJCQYaXLjLwvQPC5QOAzT7iPJ61aYSP25Hvue%2FaDIiSqt%2FCEHlHK%2FcripqYdInlx7h3udJvAO8B%2B6bUbHPmwDQHpBl%2BoxumDKBXQQ9HVUIGsjiwofEtPj3zCFxsK9BjqkAe0IyKm8p8MgAgwabi85cIlURLJ8%2F4qLnfYXTxBt5BpXZcy%2FESMZOjQ7OMAVmCn41XTQmvbOLRkYFOipUKpts8Ystjg%2BdeY4gnyrMXz268aNtHaxDV2LxA50BBI%2Fa1aCWO%2FQ5YCUe0yp%2FxqehsouDOOTPBQyVrokRcXOtbgmyFBmwfusu3iUp3oSdIy3QoWdIKYdQcxCzsDf9I5NNvAWzU7VFycH&X-Amz-Signature=eecbd221be810b522da1a11542e14b7312d9665b4fed151212a11313b366d6bc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHC6KSHM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDNI7QKkOGcrB6PyUL8ZEZgpFOdX2WpRCQjdtlshmdrEgIhANIggeG5RYkOG2%2B0VL7EQr%2BYTUB9x7oXxk%2BTOZSa%2Fz7kKv8DCEcQABoMNjM3NDIzMTgzODA1IgxATfP7qjed3WZOWH8q3AMst6VGkeMKjYqa9v6TGq%2BGV6GSzA38JxUXgKt%2BGN5uhjeXAfTntP93ODqftJAKa6mgz%2BrhR5m71XM%2F%2BczFMY2VQA8xkkUFzKd%2ByX1P4Bm6LSo7hl8JmGOkugbK6LAs8VX0OhNXKGzdlH5VLt5mQOWCgSHMdDmqXAawv5FtIoWPVdWvEetf3rEjYxnj8Yx2W637ycTPcN3Z3G%2Fs8kAnzhtwXsYrErJg77A7iIDV9jbUatendTuBJDHMa2P%2FocU%2BIExHvx2UyDhnRehjbzEM2whL%2BooBIsCp9SedlN7XY2mJfNhiVczMndPlBhxfjn3V%2F6KsTQIA4QtgJvT%2BNdGEn0yuf9QvUgbHAD%2FrR5%2B%2B4N1mID%2BfNhsUACr8eDVKPnZ5UUvD%2FXqrcpKBLYtQRv3IbcYeYJeMUXY8gLoZKiXzmFP3yaiGkthM1ygTqlk%2B8OkNA8SJso3d1sJSW19obkbs9TJb%2BySsxJtYcd8OYo7Keo6SqNf8AXoUizIoiFFCEtK8BmvjD0TzJCQYaXLjLwvQPC5QOAzT7iPJ61aYSP25Hvue%2FaDIiSqt%2FCEHlHK%2FcripqYdInlx7h3udJvAO8B%2B6bUbHPmwDQHpBl%2BoxumDKBXQQ9HVUIGsjiwofEtPj3zCFxsK9BjqkAe0IyKm8p8MgAgwabi85cIlURLJ8%2F4qLnfYXTxBt5BpXZcy%2FESMZOjQ7OMAVmCn41XTQmvbOLRkYFOipUKpts8Ystjg%2BdeY4gnyrMXz268aNtHaxDV2LxA50BBI%2Fa1aCWO%2FQ5YCUe0yp%2FxqehsouDOOTPBQyVrokRcXOtbgmyFBmwfusu3iUp3oSdIy3QoWdIKYdQcxCzsDf9I5NNvAWzU7VFycH&X-Amz-Signature=f2a0d9273e1e2d48d2d300c21dc886785c620a1c362f9ea8fc5aa84ea3d80098&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHC6KSHM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDNI7QKkOGcrB6PyUL8ZEZgpFOdX2WpRCQjdtlshmdrEgIhANIggeG5RYkOG2%2B0VL7EQr%2BYTUB9x7oXxk%2BTOZSa%2Fz7kKv8DCEcQABoMNjM3NDIzMTgzODA1IgxATfP7qjed3WZOWH8q3AMst6VGkeMKjYqa9v6TGq%2BGV6GSzA38JxUXgKt%2BGN5uhjeXAfTntP93ODqftJAKa6mgz%2BrhR5m71XM%2F%2BczFMY2VQA8xkkUFzKd%2ByX1P4Bm6LSo7hl8JmGOkugbK6LAs8VX0OhNXKGzdlH5VLt5mQOWCgSHMdDmqXAawv5FtIoWPVdWvEetf3rEjYxnj8Yx2W637ycTPcN3Z3G%2Fs8kAnzhtwXsYrErJg77A7iIDV9jbUatendTuBJDHMa2P%2FocU%2BIExHvx2UyDhnRehjbzEM2whL%2BooBIsCp9SedlN7XY2mJfNhiVczMndPlBhxfjn3V%2F6KsTQIA4QtgJvT%2BNdGEn0yuf9QvUgbHAD%2FrR5%2B%2B4N1mID%2BfNhsUACr8eDVKPnZ5UUvD%2FXqrcpKBLYtQRv3IbcYeYJeMUXY8gLoZKiXzmFP3yaiGkthM1ygTqlk%2B8OkNA8SJso3d1sJSW19obkbs9TJb%2BySsxJtYcd8OYo7Keo6SqNf8AXoUizIoiFFCEtK8BmvjD0TzJCQYaXLjLwvQPC5QOAzT7iPJ61aYSP25Hvue%2FaDIiSqt%2FCEHlHK%2FcripqYdInlx7h3udJvAO8B%2B6bUbHPmwDQHpBl%2BoxumDKBXQQ9HVUIGsjiwofEtPj3zCFxsK9BjqkAe0IyKm8p8MgAgwabi85cIlURLJ8%2F4qLnfYXTxBt5BpXZcy%2FESMZOjQ7OMAVmCn41XTQmvbOLRkYFOipUKpts8Ystjg%2BdeY4gnyrMXz268aNtHaxDV2LxA50BBI%2Fa1aCWO%2FQ5YCUe0yp%2FxqehsouDOOTPBQyVrokRcXOtbgmyFBmwfusu3iUp3oSdIy3QoWdIKYdQcxCzsDf9I5NNvAWzU7VFycH&X-Amz-Signature=9990c2a3ec76c4d3459d4a857ad974ca53bf06797ee5ceafae637faae51f21c1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
