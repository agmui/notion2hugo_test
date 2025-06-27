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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXAWFMQQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBFILvnt%2B8%2B8QmM4iocijsk0l7rbdI1lAyLwMluPNN48AiBB0qDfFL1uDdbb1TkCJLuie3rFOsbKefd7OP3BDOTm0Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMCq6hhOAQQOo9QtJKKtwDqgsouD1DVBAxvyT995gDtSPLMMl733B4Ww4SkcvT7SVi2wgDuhHWp68Mkzbb1ofXwWnGU8e%2B4WugeCDRa7mvgFdd08mXrVYawCuIX8UK57cv3G6O9lQLrFQfCVGj5gzlJyD8WZirOWqfOTfjT%2BD5NZQxVjlycHRXE%2Bunkj%2BnISdal63%2BvhuCdXgoyO2MenWcnXz4iMzUbg24VJCeOuIKUVnOmSDS2OfT34OnhJYjn2t89ZiLE%2B2Ofu5Ke62Zw6OL%2BjnpxprTiUTtH3Ilr3KsFmcbhVB7qXxGNzHZUoDMfN6EK8tQnNJf0FYQty%2FYNaglxRvPiJ8PFGhrFgfC2nhjsOUqL2JXSJQDw%2F%2BPqRrUop3cFWFaXQDz2%2B0UyBZQArVn5R%2Frq9vc%2FP%2FdKF4TL7jAddg8eh%2F69%2Fiuplx8jwp4RveOBP00C%2FeCc04%2F%2B%2BM0zNGDpOwI9O0DNjC0l4L2kszpVUwZe3IzdkRujI2VKHywAy9cqusmMffbQzj0eWBQ8cR9%2B2PpR9aJAO10ZjM9L3Me5h%2FWBJe1%2FgcIV%2FMtW7KypgIjWioiva9ZIPMFyAJnvvb3Qg%2FRpVEh2HqB%2FyNC%2B5V2IsN0v%2F0zVLnZd4ezMyQrXu2JNxw7QyAQ%2BsqjEnwwxPf4wgY6pgENtbbupsDm8Nt9iU8RN%2BUwwrwXtpZnpK2d%2FNPteLhnSdZwUMbgopcyeD1UdSqwIxxEg7bjEC0yN2sLATh6A45P1hE%2BiHt4jB6Wat6o6ghUJLoe9DbLoH95eMMMQLwFAqOsRq3CGHUajDJj08B6SD%2BWsq18JyfcMPvb9qmHGbxdqujwXWXP4Hb7q%2BH%2FocU4St4yEQhnQ%2BA5PY6M8ADeX6PcHMA6De9k&X-Amz-Signature=3a712ff6116719afe8b8a62adf9ce92b1d7af97373874e8559dc13b4323445f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXAWFMQQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBFILvnt%2B8%2B8QmM4iocijsk0l7rbdI1lAyLwMluPNN48AiBB0qDfFL1uDdbb1TkCJLuie3rFOsbKefd7OP3BDOTm0Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMCq6hhOAQQOo9QtJKKtwDqgsouD1DVBAxvyT995gDtSPLMMl733B4Ww4SkcvT7SVi2wgDuhHWp68Mkzbb1ofXwWnGU8e%2B4WugeCDRa7mvgFdd08mXrVYawCuIX8UK57cv3G6O9lQLrFQfCVGj5gzlJyD8WZirOWqfOTfjT%2BD5NZQxVjlycHRXE%2Bunkj%2BnISdal63%2BvhuCdXgoyO2MenWcnXz4iMzUbg24VJCeOuIKUVnOmSDS2OfT34OnhJYjn2t89ZiLE%2B2Ofu5Ke62Zw6OL%2BjnpxprTiUTtH3Ilr3KsFmcbhVB7qXxGNzHZUoDMfN6EK8tQnNJf0FYQty%2FYNaglxRvPiJ8PFGhrFgfC2nhjsOUqL2JXSJQDw%2F%2BPqRrUop3cFWFaXQDz2%2B0UyBZQArVn5R%2Frq9vc%2FP%2FdKF4TL7jAddg8eh%2F69%2Fiuplx8jwp4RveOBP00C%2FeCc04%2F%2B%2BM0zNGDpOwI9O0DNjC0l4L2kszpVUwZe3IzdkRujI2VKHywAy9cqusmMffbQzj0eWBQ8cR9%2B2PpR9aJAO10ZjM9L3Me5h%2FWBJe1%2FgcIV%2FMtW7KypgIjWioiva9ZIPMFyAJnvvb3Qg%2FRpVEh2HqB%2FyNC%2B5V2IsN0v%2F0zVLnZd4ezMyQrXu2JNxw7QyAQ%2BsqjEnwwxPf4wgY6pgENtbbupsDm8Nt9iU8RN%2BUwwrwXtpZnpK2d%2FNPteLhnSdZwUMbgopcyeD1UdSqwIxxEg7bjEC0yN2sLATh6A45P1hE%2BiHt4jB6Wat6o6ghUJLoe9DbLoH95eMMMQLwFAqOsRq3CGHUajDJj08B6SD%2BWsq18JyfcMPvb9qmHGbxdqujwXWXP4Hb7q%2BH%2FocU4St4yEQhnQ%2BA5PY6M8ADeX6PcHMA6De9k&X-Amz-Signature=479c1ee1ae5f7922e728d30e44cf958ce6df6d195771f8d0150de27d6fb63f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXAWFMQQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBFILvnt%2B8%2B8QmM4iocijsk0l7rbdI1lAyLwMluPNN48AiBB0qDfFL1uDdbb1TkCJLuie3rFOsbKefd7OP3BDOTm0Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMCq6hhOAQQOo9QtJKKtwDqgsouD1DVBAxvyT995gDtSPLMMl733B4Ww4SkcvT7SVi2wgDuhHWp68Mkzbb1ofXwWnGU8e%2B4WugeCDRa7mvgFdd08mXrVYawCuIX8UK57cv3G6O9lQLrFQfCVGj5gzlJyD8WZirOWqfOTfjT%2BD5NZQxVjlycHRXE%2Bunkj%2BnISdal63%2BvhuCdXgoyO2MenWcnXz4iMzUbg24VJCeOuIKUVnOmSDS2OfT34OnhJYjn2t89ZiLE%2B2Ofu5Ke62Zw6OL%2BjnpxprTiUTtH3Ilr3KsFmcbhVB7qXxGNzHZUoDMfN6EK8tQnNJf0FYQty%2FYNaglxRvPiJ8PFGhrFgfC2nhjsOUqL2JXSJQDw%2F%2BPqRrUop3cFWFaXQDz2%2B0UyBZQArVn5R%2Frq9vc%2FP%2FdKF4TL7jAddg8eh%2F69%2Fiuplx8jwp4RveOBP00C%2FeCc04%2F%2B%2BM0zNGDpOwI9O0DNjC0l4L2kszpVUwZe3IzdkRujI2VKHywAy9cqusmMffbQzj0eWBQ8cR9%2B2PpR9aJAO10ZjM9L3Me5h%2FWBJe1%2FgcIV%2FMtW7KypgIjWioiva9ZIPMFyAJnvvb3Qg%2FRpVEh2HqB%2FyNC%2B5V2IsN0v%2F0zVLnZd4ezMyQrXu2JNxw7QyAQ%2BsqjEnwwxPf4wgY6pgENtbbupsDm8Nt9iU8RN%2BUwwrwXtpZnpK2d%2FNPteLhnSdZwUMbgopcyeD1UdSqwIxxEg7bjEC0yN2sLATh6A45P1hE%2BiHt4jB6Wat6o6ghUJLoe9DbLoH95eMMMQLwFAqOsRq3CGHUajDJj08B6SD%2BWsq18JyfcMPvb9qmHGbxdqujwXWXP4Hb7q%2BH%2FocU4St4yEQhnQ%2BA5PY6M8ADeX6PcHMA6De9k&X-Amz-Signature=613f3bfccfd852c8fadebd64f731f62b0b5c75b8cd45b5ffd127d4669fd163a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXAWFMQQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBFILvnt%2B8%2B8QmM4iocijsk0l7rbdI1lAyLwMluPNN48AiBB0qDfFL1uDdbb1TkCJLuie3rFOsbKefd7OP3BDOTm0Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMCq6hhOAQQOo9QtJKKtwDqgsouD1DVBAxvyT995gDtSPLMMl733B4Ww4SkcvT7SVi2wgDuhHWp68Mkzbb1ofXwWnGU8e%2B4WugeCDRa7mvgFdd08mXrVYawCuIX8UK57cv3G6O9lQLrFQfCVGj5gzlJyD8WZirOWqfOTfjT%2BD5NZQxVjlycHRXE%2Bunkj%2BnISdal63%2BvhuCdXgoyO2MenWcnXz4iMzUbg24VJCeOuIKUVnOmSDS2OfT34OnhJYjn2t89ZiLE%2B2Ofu5Ke62Zw6OL%2BjnpxprTiUTtH3Ilr3KsFmcbhVB7qXxGNzHZUoDMfN6EK8tQnNJf0FYQty%2FYNaglxRvPiJ8PFGhrFgfC2nhjsOUqL2JXSJQDw%2F%2BPqRrUop3cFWFaXQDz2%2B0UyBZQArVn5R%2Frq9vc%2FP%2FdKF4TL7jAddg8eh%2F69%2Fiuplx8jwp4RveOBP00C%2FeCc04%2F%2B%2BM0zNGDpOwI9O0DNjC0l4L2kszpVUwZe3IzdkRujI2VKHywAy9cqusmMffbQzj0eWBQ8cR9%2B2PpR9aJAO10ZjM9L3Me5h%2FWBJe1%2FgcIV%2FMtW7KypgIjWioiva9ZIPMFyAJnvvb3Qg%2FRpVEh2HqB%2FyNC%2B5V2IsN0v%2F0zVLnZd4ezMyQrXu2JNxw7QyAQ%2BsqjEnwwxPf4wgY6pgENtbbupsDm8Nt9iU8RN%2BUwwrwXtpZnpK2d%2FNPteLhnSdZwUMbgopcyeD1UdSqwIxxEg7bjEC0yN2sLATh6A45P1hE%2BiHt4jB6Wat6o6ghUJLoe9DbLoH95eMMMQLwFAqOsRq3CGHUajDJj08B6SD%2BWsq18JyfcMPvb9qmHGbxdqujwXWXP4Hb7q%2BH%2FocU4St4yEQhnQ%2BA5PY6M8ADeX6PcHMA6De9k&X-Amz-Signature=451127f8338cf730399bd45a5788034a66e3b38d5ae3072d147daaeeab040623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXAWFMQQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBFILvnt%2B8%2B8QmM4iocijsk0l7rbdI1lAyLwMluPNN48AiBB0qDfFL1uDdbb1TkCJLuie3rFOsbKefd7OP3BDOTm0Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMCq6hhOAQQOo9QtJKKtwDqgsouD1DVBAxvyT995gDtSPLMMl733B4Ww4SkcvT7SVi2wgDuhHWp68Mkzbb1ofXwWnGU8e%2B4WugeCDRa7mvgFdd08mXrVYawCuIX8UK57cv3G6O9lQLrFQfCVGj5gzlJyD8WZirOWqfOTfjT%2BD5NZQxVjlycHRXE%2Bunkj%2BnISdal63%2BvhuCdXgoyO2MenWcnXz4iMzUbg24VJCeOuIKUVnOmSDS2OfT34OnhJYjn2t89ZiLE%2B2Ofu5Ke62Zw6OL%2BjnpxprTiUTtH3Ilr3KsFmcbhVB7qXxGNzHZUoDMfN6EK8tQnNJf0FYQty%2FYNaglxRvPiJ8PFGhrFgfC2nhjsOUqL2JXSJQDw%2F%2BPqRrUop3cFWFaXQDz2%2B0UyBZQArVn5R%2Frq9vc%2FP%2FdKF4TL7jAddg8eh%2F69%2Fiuplx8jwp4RveOBP00C%2FeCc04%2F%2B%2BM0zNGDpOwI9O0DNjC0l4L2kszpVUwZe3IzdkRujI2VKHywAy9cqusmMffbQzj0eWBQ8cR9%2B2PpR9aJAO10ZjM9L3Me5h%2FWBJe1%2FgcIV%2FMtW7KypgIjWioiva9ZIPMFyAJnvvb3Qg%2FRpVEh2HqB%2FyNC%2B5V2IsN0v%2F0zVLnZd4ezMyQrXu2JNxw7QyAQ%2BsqjEnwwxPf4wgY6pgENtbbupsDm8Nt9iU8RN%2BUwwrwXtpZnpK2d%2FNPteLhnSdZwUMbgopcyeD1UdSqwIxxEg7bjEC0yN2sLATh6A45P1hE%2BiHt4jB6Wat6o6ghUJLoe9DbLoH95eMMMQLwFAqOsRq3CGHUajDJj08B6SD%2BWsq18JyfcMPvb9qmHGbxdqujwXWXP4Hb7q%2BH%2FocU4St4yEQhnQ%2BA5PY6M8ADeX6PcHMA6De9k&X-Amz-Signature=32cd01f424abfb738b8b734305899c04e0fe19acdc4e7134f3a803e63d89bfbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXAWFMQQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBFILvnt%2B8%2B8QmM4iocijsk0l7rbdI1lAyLwMluPNN48AiBB0qDfFL1uDdbb1TkCJLuie3rFOsbKefd7OP3BDOTm0Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMCq6hhOAQQOo9QtJKKtwDqgsouD1DVBAxvyT995gDtSPLMMl733B4Ww4SkcvT7SVi2wgDuhHWp68Mkzbb1ofXwWnGU8e%2B4WugeCDRa7mvgFdd08mXrVYawCuIX8UK57cv3G6O9lQLrFQfCVGj5gzlJyD8WZirOWqfOTfjT%2BD5NZQxVjlycHRXE%2Bunkj%2BnISdal63%2BvhuCdXgoyO2MenWcnXz4iMzUbg24VJCeOuIKUVnOmSDS2OfT34OnhJYjn2t89ZiLE%2B2Ofu5Ke62Zw6OL%2BjnpxprTiUTtH3Ilr3KsFmcbhVB7qXxGNzHZUoDMfN6EK8tQnNJf0FYQty%2FYNaglxRvPiJ8PFGhrFgfC2nhjsOUqL2JXSJQDw%2F%2BPqRrUop3cFWFaXQDz2%2B0UyBZQArVn5R%2Frq9vc%2FP%2FdKF4TL7jAddg8eh%2F69%2Fiuplx8jwp4RveOBP00C%2FeCc04%2F%2B%2BM0zNGDpOwI9O0DNjC0l4L2kszpVUwZe3IzdkRujI2VKHywAy9cqusmMffbQzj0eWBQ8cR9%2B2PpR9aJAO10ZjM9L3Me5h%2FWBJe1%2FgcIV%2FMtW7KypgIjWioiva9ZIPMFyAJnvvb3Qg%2FRpVEh2HqB%2FyNC%2B5V2IsN0v%2F0zVLnZd4ezMyQrXu2JNxw7QyAQ%2BsqjEnwwxPf4wgY6pgENtbbupsDm8Nt9iU8RN%2BUwwrwXtpZnpK2d%2FNPteLhnSdZwUMbgopcyeD1UdSqwIxxEg7bjEC0yN2sLATh6A45P1hE%2BiHt4jB6Wat6o6ghUJLoe9DbLoH95eMMMQLwFAqOsRq3CGHUajDJj08B6SD%2BWsq18JyfcMPvb9qmHGbxdqujwXWXP4Hb7q%2BH%2FocU4St4yEQhnQ%2BA5PY6M8ADeX6PcHMA6De9k&X-Amz-Signature=9a1e9ffb0d88d925e668573d590b9478e561d2b9a5963440585aa2d3dbdc315b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXAWFMQQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBFILvnt%2B8%2B8QmM4iocijsk0l7rbdI1lAyLwMluPNN48AiBB0qDfFL1uDdbb1TkCJLuie3rFOsbKefd7OP3BDOTm0Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMCq6hhOAQQOo9QtJKKtwDqgsouD1DVBAxvyT995gDtSPLMMl733B4Ww4SkcvT7SVi2wgDuhHWp68Mkzbb1ofXwWnGU8e%2B4WugeCDRa7mvgFdd08mXrVYawCuIX8UK57cv3G6O9lQLrFQfCVGj5gzlJyD8WZirOWqfOTfjT%2BD5NZQxVjlycHRXE%2Bunkj%2BnISdal63%2BvhuCdXgoyO2MenWcnXz4iMzUbg24VJCeOuIKUVnOmSDS2OfT34OnhJYjn2t89ZiLE%2B2Ofu5Ke62Zw6OL%2BjnpxprTiUTtH3Ilr3KsFmcbhVB7qXxGNzHZUoDMfN6EK8tQnNJf0FYQty%2FYNaglxRvPiJ8PFGhrFgfC2nhjsOUqL2JXSJQDw%2F%2BPqRrUop3cFWFaXQDz2%2B0UyBZQArVn5R%2Frq9vc%2FP%2FdKF4TL7jAddg8eh%2F69%2Fiuplx8jwp4RveOBP00C%2FeCc04%2F%2B%2BM0zNGDpOwI9O0DNjC0l4L2kszpVUwZe3IzdkRujI2VKHywAy9cqusmMffbQzj0eWBQ8cR9%2B2PpR9aJAO10ZjM9L3Me5h%2FWBJe1%2FgcIV%2FMtW7KypgIjWioiva9ZIPMFyAJnvvb3Qg%2FRpVEh2HqB%2FyNC%2B5V2IsN0v%2F0zVLnZd4ezMyQrXu2JNxw7QyAQ%2BsqjEnwwxPf4wgY6pgENtbbupsDm8Nt9iU8RN%2BUwwrwXtpZnpK2d%2FNPteLhnSdZwUMbgopcyeD1UdSqwIxxEg7bjEC0yN2sLATh6A45P1hE%2BiHt4jB6Wat6o6ghUJLoe9DbLoH95eMMMQLwFAqOsRq3CGHUajDJj08B6SD%2BWsq18JyfcMPvb9qmHGbxdqujwXWXP4Hb7q%2BH%2FocU4St4yEQhnQ%2BA5PY6M8ADeX6PcHMA6De9k&X-Amz-Signature=1bb62540978cd990e60441a927b9152a06cda3e7f1d04ca56cfba28a7d661542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
