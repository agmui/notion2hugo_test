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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQD5ZBHX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVz1698FzXRKrEhHrnVgnIiW%2FPHKUtxJ5PfDLMH%2BXgqgIhAMjitKN9OghU%2BiGH7rYzHpTXcNLp6wPTL6qs6wg2oI8wKv8DCDMQABoMNjM3NDIzMTgzODA1Igz0JyYk6rgVnw5Xke8q3APrcCh0Mc2%2FvSPY8gxLCYdgB8MCr8WF1fWKq%2BrL6RO7D1o%2B2szj1uPwavWb%2Bzx20vU9O%2FlPUY1yjxl%2FiCBVac9wLeJqNSXRmwmsCzjODBCf7j%2FoysTIgQVfBAHXxYFPwYTxJ23d0qwa%2FZQzjE6RvgW2zzeGKvLDC%2FaRG6bfXS87Y3JrXXKvWZRZEf%2BRRwLZBEfAvp0ycc7yipxl7biSE7ysf7ZWorFYa29pvveUURJg6DnW%2Fe1qH6IVX0Ny21bt%2BuCT49d9umxHaOObQxf8uh17KM%2FADqau4L%2BNkztWcuU0bFaolM2I5wWykAMMNExlrzeIeIW9vl3R6g8Pr6DyzeGhrQyY%2FJ2Rv%2B3FsTAk%2BhMyprgpvzh62uTbtbfaJDuJhzH5F48V9ZY8h6hYw4AWhGdg7393HUyPXjTbekOYCkj8lnStmhObOx8tCEs1w83j9q1FaD5ojWaBa77dTafJd9iW4JXRGDvbNhpofGk5jIiF2PquCN0pTrHKAwAOJ6FnSLEdpBtCMOCfZaMumqNTH%2B2OShz6lpcDnxlBeas%2FOEvMf4EcPVTWMLtDxSwHzCpv3PChVV%2FHksqZ1BW3%2F5XzXUgQ2vW%2BgCGWJsG%2Bmw5YwuPPk3cYlTdF8PwZjs%2F5kzDZ9pC%2FBjqkAUqY%2BH9mnRFBBK3tuAx8B4Q9yObbif8puJeCSknoRYB4MZCSkvi6Lcck%2BsDkdU%2BZ06b5pgn8Ql7KT9vf0ptkrr%2FX3z%2FLXO3w8ifVwnVUqiJyurOtkKLk%2F7KGPzzmTSS3yOSy4E85msI2Z7Pt8guAYaDVkVDEyD4JwUHHW1z0%2BEbqV07e9Yh%2BnDfJQXYDELAZz%2F94D0wUmPAJpVVSyrn7lg5NfuAu&X-Amz-Signature=fb4db16079f5aa18ade2e80653ec2bc3788600f40bd848e4e9077569b982cad1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQD5ZBHX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVz1698FzXRKrEhHrnVgnIiW%2FPHKUtxJ5PfDLMH%2BXgqgIhAMjitKN9OghU%2BiGH7rYzHpTXcNLp6wPTL6qs6wg2oI8wKv8DCDMQABoMNjM3NDIzMTgzODA1Igz0JyYk6rgVnw5Xke8q3APrcCh0Mc2%2FvSPY8gxLCYdgB8MCr8WF1fWKq%2BrL6RO7D1o%2B2szj1uPwavWb%2Bzx20vU9O%2FlPUY1yjxl%2FiCBVac9wLeJqNSXRmwmsCzjODBCf7j%2FoysTIgQVfBAHXxYFPwYTxJ23d0qwa%2FZQzjE6RvgW2zzeGKvLDC%2FaRG6bfXS87Y3JrXXKvWZRZEf%2BRRwLZBEfAvp0ycc7yipxl7biSE7ysf7ZWorFYa29pvveUURJg6DnW%2Fe1qH6IVX0Ny21bt%2BuCT49d9umxHaOObQxf8uh17KM%2FADqau4L%2BNkztWcuU0bFaolM2I5wWykAMMNExlrzeIeIW9vl3R6g8Pr6DyzeGhrQyY%2FJ2Rv%2B3FsTAk%2BhMyprgpvzh62uTbtbfaJDuJhzH5F48V9ZY8h6hYw4AWhGdg7393HUyPXjTbekOYCkj8lnStmhObOx8tCEs1w83j9q1FaD5ojWaBa77dTafJd9iW4JXRGDvbNhpofGk5jIiF2PquCN0pTrHKAwAOJ6FnSLEdpBtCMOCfZaMumqNTH%2B2OShz6lpcDnxlBeas%2FOEvMf4EcPVTWMLtDxSwHzCpv3PChVV%2FHksqZ1BW3%2F5XzXUgQ2vW%2BgCGWJsG%2Bmw5YwuPPk3cYlTdF8PwZjs%2F5kzDZ9pC%2FBjqkAUqY%2BH9mnRFBBK3tuAx8B4Q9yObbif8puJeCSknoRYB4MZCSkvi6Lcck%2BsDkdU%2BZ06b5pgn8Ql7KT9vf0ptkrr%2FX3z%2FLXO3w8ifVwnVUqiJyurOtkKLk%2F7KGPzzmTSS3yOSy4E85msI2Z7Pt8guAYaDVkVDEyD4JwUHHW1z0%2BEbqV07e9Yh%2BnDfJQXYDELAZz%2F94D0wUmPAJpVVSyrn7lg5NfuAu&X-Amz-Signature=4ff6bf7b1398a10d74550605dc6a6b10addb9b53d1650b4bb3475804c2f38eec&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQD5ZBHX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVz1698FzXRKrEhHrnVgnIiW%2FPHKUtxJ5PfDLMH%2BXgqgIhAMjitKN9OghU%2BiGH7rYzHpTXcNLp6wPTL6qs6wg2oI8wKv8DCDMQABoMNjM3NDIzMTgzODA1Igz0JyYk6rgVnw5Xke8q3APrcCh0Mc2%2FvSPY8gxLCYdgB8MCr8WF1fWKq%2BrL6RO7D1o%2B2szj1uPwavWb%2Bzx20vU9O%2FlPUY1yjxl%2FiCBVac9wLeJqNSXRmwmsCzjODBCf7j%2FoysTIgQVfBAHXxYFPwYTxJ23d0qwa%2FZQzjE6RvgW2zzeGKvLDC%2FaRG6bfXS87Y3JrXXKvWZRZEf%2BRRwLZBEfAvp0ycc7yipxl7biSE7ysf7ZWorFYa29pvveUURJg6DnW%2Fe1qH6IVX0Ny21bt%2BuCT49d9umxHaOObQxf8uh17KM%2FADqau4L%2BNkztWcuU0bFaolM2I5wWykAMMNExlrzeIeIW9vl3R6g8Pr6DyzeGhrQyY%2FJ2Rv%2B3FsTAk%2BhMyprgpvzh62uTbtbfaJDuJhzH5F48V9ZY8h6hYw4AWhGdg7393HUyPXjTbekOYCkj8lnStmhObOx8tCEs1w83j9q1FaD5ojWaBa77dTafJd9iW4JXRGDvbNhpofGk5jIiF2PquCN0pTrHKAwAOJ6FnSLEdpBtCMOCfZaMumqNTH%2B2OShz6lpcDnxlBeas%2FOEvMf4EcPVTWMLtDxSwHzCpv3PChVV%2FHksqZ1BW3%2F5XzXUgQ2vW%2BgCGWJsG%2Bmw5YwuPPk3cYlTdF8PwZjs%2F5kzDZ9pC%2FBjqkAUqY%2BH9mnRFBBK3tuAx8B4Q9yObbif8puJeCSknoRYB4MZCSkvi6Lcck%2BsDkdU%2BZ06b5pgn8Ql7KT9vf0ptkrr%2FX3z%2FLXO3w8ifVwnVUqiJyurOtkKLk%2F7KGPzzmTSS3yOSy4E85msI2Z7Pt8guAYaDVkVDEyD4JwUHHW1z0%2BEbqV07e9Yh%2BnDfJQXYDELAZz%2F94D0wUmPAJpVVSyrn7lg5NfuAu&X-Amz-Signature=c8c25ebfd81ed1214f1eb43e492485ff83fc32e4d8f328e6953b185f348147f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQD5ZBHX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVz1698FzXRKrEhHrnVgnIiW%2FPHKUtxJ5PfDLMH%2BXgqgIhAMjitKN9OghU%2BiGH7rYzHpTXcNLp6wPTL6qs6wg2oI8wKv8DCDMQABoMNjM3NDIzMTgzODA1Igz0JyYk6rgVnw5Xke8q3APrcCh0Mc2%2FvSPY8gxLCYdgB8MCr8WF1fWKq%2BrL6RO7D1o%2B2szj1uPwavWb%2Bzx20vU9O%2FlPUY1yjxl%2FiCBVac9wLeJqNSXRmwmsCzjODBCf7j%2FoysTIgQVfBAHXxYFPwYTxJ23d0qwa%2FZQzjE6RvgW2zzeGKvLDC%2FaRG6bfXS87Y3JrXXKvWZRZEf%2BRRwLZBEfAvp0ycc7yipxl7biSE7ysf7ZWorFYa29pvveUURJg6DnW%2Fe1qH6IVX0Ny21bt%2BuCT49d9umxHaOObQxf8uh17KM%2FADqau4L%2BNkztWcuU0bFaolM2I5wWykAMMNExlrzeIeIW9vl3R6g8Pr6DyzeGhrQyY%2FJ2Rv%2B3FsTAk%2BhMyprgpvzh62uTbtbfaJDuJhzH5F48V9ZY8h6hYw4AWhGdg7393HUyPXjTbekOYCkj8lnStmhObOx8tCEs1w83j9q1FaD5ojWaBa77dTafJd9iW4JXRGDvbNhpofGk5jIiF2PquCN0pTrHKAwAOJ6FnSLEdpBtCMOCfZaMumqNTH%2B2OShz6lpcDnxlBeas%2FOEvMf4EcPVTWMLtDxSwHzCpv3PChVV%2FHksqZ1BW3%2F5XzXUgQ2vW%2BgCGWJsG%2Bmw5YwuPPk3cYlTdF8PwZjs%2F5kzDZ9pC%2FBjqkAUqY%2BH9mnRFBBK3tuAx8B4Q9yObbif8puJeCSknoRYB4MZCSkvi6Lcck%2BsDkdU%2BZ06b5pgn8Ql7KT9vf0ptkrr%2FX3z%2FLXO3w8ifVwnVUqiJyurOtkKLk%2F7KGPzzmTSS3yOSy4E85msI2Z7Pt8guAYaDVkVDEyD4JwUHHW1z0%2BEbqV07e9Yh%2BnDfJQXYDELAZz%2F94D0wUmPAJpVVSyrn7lg5NfuAu&X-Amz-Signature=f105076c94e8e04b557d5673bf49e7e971b3a72cb844bd6684cdd54678730ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQD5ZBHX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVz1698FzXRKrEhHrnVgnIiW%2FPHKUtxJ5PfDLMH%2BXgqgIhAMjitKN9OghU%2BiGH7rYzHpTXcNLp6wPTL6qs6wg2oI8wKv8DCDMQABoMNjM3NDIzMTgzODA1Igz0JyYk6rgVnw5Xke8q3APrcCh0Mc2%2FvSPY8gxLCYdgB8MCr8WF1fWKq%2BrL6RO7D1o%2B2szj1uPwavWb%2Bzx20vU9O%2FlPUY1yjxl%2FiCBVac9wLeJqNSXRmwmsCzjODBCf7j%2FoysTIgQVfBAHXxYFPwYTxJ23d0qwa%2FZQzjE6RvgW2zzeGKvLDC%2FaRG6bfXS87Y3JrXXKvWZRZEf%2BRRwLZBEfAvp0ycc7yipxl7biSE7ysf7ZWorFYa29pvveUURJg6DnW%2Fe1qH6IVX0Ny21bt%2BuCT49d9umxHaOObQxf8uh17KM%2FADqau4L%2BNkztWcuU0bFaolM2I5wWykAMMNExlrzeIeIW9vl3R6g8Pr6DyzeGhrQyY%2FJ2Rv%2B3FsTAk%2BhMyprgpvzh62uTbtbfaJDuJhzH5F48V9ZY8h6hYw4AWhGdg7393HUyPXjTbekOYCkj8lnStmhObOx8tCEs1w83j9q1FaD5ojWaBa77dTafJd9iW4JXRGDvbNhpofGk5jIiF2PquCN0pTrHKAwAOJ6FnSLEdpBtCMOCfZaMumqNTH%2B2OShz6lpcDnxlBeas%2FOEvMf4EcPVTWMLtDxSwHzCpv3PChVV%2FHksqZ1BW3%2F5XzXUgQ2vW%2BgCGWJsG%2Bmw5YwuPPk3cYlTdF8PwZjs%2F5kzDZ9pC%2FBjqkAUqY%2BH9mnRFBBK3tuAx8B4Q9yObbif8puJeCSknoRYB4MZCSkvi6Lcck%2BsDkdU%2BZ06b5pgn8Ql7KT9vf0ptkrr%2FX3z%2FLXO3w8ifVwnVUqiJyurOtkKLk%2F7KGPzzmTSS3yOSy4E85msI2Z7Pt8guAYaDVkVDEyD4JwUHHW1z0%2BEbqV07e9Yh%2BnDfJQXYDELAZz%2F94D0wUmPAJpVVSyrn7lg5NfuAu&X-Amz-Signature=a0c3af9586331c51341f22ad4dd3dcc7772611de9d56a6000e455c7ff4a3a2e9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQD5ZBHX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVz1698FzXRKrEhHrnVgnIiW%2FPHKUtxJ5PfDLMH%2BXgqgIhAMjitKN9OghU%2BiGH7rYzHpTXcNLp6wPTL6qs6wg2oI8wKv8DCDMQABoMNjM3NDIzMTgzODA1Igz0JyYk6rgVnw5Xke8q3APrcCh0Mc2%2FvSPY8gxLCYdgB8MCr8WF1fWKq%2BrL6RO7D1o%2B2szj1uPwavWb%2Bzx20vU9O%2FlPUY1yjxl%2FiCBVac9wLeJqNSXRmwmsCzjODBCf7j%2FoysTIgQVfBAHXxYFPwYTxJ23d0qwa%2FZQzjE6RvgW2zzeGKvLDC%2FaRG6bfXS87Y3JrXXKvWZRZEf%2BRRwLZBEfAvp0ycc7yipxl7biSE7ysf7ZWorFYa29pvveUURJg6DnW%2Fe1qH6IVX0Ny21bt%2BuCT49d9umxHaOObQxf8uh17KM%2FADqau4L%2BNkztWcuU0bFaolM2I5wWykAMMNExlrzeIeIW9vl3R6g8Pr6DyzeGhrQyY%2FJ2Rv%2B3FsTAk%2BhMyprgpvzh62uTbtbfaJDuJhzH5F48V9ZY8h6hYw4AWhGdg7393HUyPXjTbekOYCkj8lnStmhObOx8tCEs1w83j9q1FaD5ojWaBa77dTafJd9iW4JXRGDvbNhpofGk5jIiF2PquCN0pTrHKAwAOJ6FnSLEdpBtCMOCfZaMumqNTH%2B2OShz6lpcDnxlBeas%2FOEvMf4EcPVTWMLtDxSwHzCpv3PChVV%2FHksqZ1BW3%2F5XzXUgQ2vW%2BgCGWJsG%2Bmw5YwuPPk3cYlTdF8PwZjs%2F5kzDZ9pC%2FBjqkAUqY%2BH9mnRFBBK3tuAx8B4Q9yObbif8puJeCSknoRYB4MZCSkvi6Lcck%2BsDkdU%2BZ06b5pgn8Ql7KT9vf0ptkrr%2FX3z%2FLXO3w8ifVwnVUqiJyurOtkKLk%2F7KGPzzmTSS3yOSy4E85msI2Z7Pt8guAYaDVkVDEyD4JwUHHW1z0%2BEbqV07e9Yh%2BnDfJQXYDELAZz%2F94D0wUmPAJpVVSyrn7lg5NfuAu&X-Amz-Signature=8f68fa7bace2c424923d9519c9adbe13f2f7f1f02de171b6d595db44c1f6d69a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQD5ZBHX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVz1698FzXRKrEhHrnVgnIiW%2FPHKUtxJ5PfDLMH%2BXgqgIhAMjitKN9OghU%2BiGH7rYzHpTXcNLp6wPTL6qs6wg2oI8wKv8DCDMQABoMNjM3NDIzMTgzODA1Igz0JyYk6rgVnw5Xke8q3APrcCh0Mc2%2FvSPY8gxLCYdgB8MCr8WF1fWKq%2BrL6RO7D1o%2B2szj1uPwavWb%2Bzx20vU9O%2FlPUY1yjxl%2FiCBVac9wLeJqNSXRmwmsCzjODBCf7j%2FoysTIgQVfBAHXxYFPwYTxJ23d0qwa%2FZQzjE6RvgW2zzeGKvLDC%2FaRG6bfXS87Y3JrXXKvWZRZEf%2BRRwLZBEfAvp0ycc7yipxl7biSE7ysf7ZWorFYa29pvveUURJg6DnW%2Fe1qH6IVX0Ny21bt%2BuCT49d9umxHaOObQxf8uh17KM%2FADqau4L%2BNkztWcuU0bFaolM2I5wWykAMMNExlrzeIeIW9vl3R6g8Pr6DyzeGhrQyY%2FJ2Rv%2B3FsTAk%2BhMyprgpvzh62uTbtbfaJDuJhzH5F48V9ZY8h6hYw4AWhGdg7393HUyPXjTbekOYCkj8lnStmhObOx8tCEs1w83j9q1FaD5ojWaBa77dTafJd9iW4JXRGDvbNhpofGk5jIiF2PquCN0pTrHKAwAOJ6FnSLEdpBtCMOCfZaMumqNTH%2B2OShz6lpcDnxlBeas%2FOEvMf4EcPVTWMLtDxSwHzCpv3PChVV%2FHksqZ1BW3%2F5XzXUgQ2vW%2BgCGWJsG%2Bmw5YwuPPk3cYlTdF8PwZjs%2F5kzDZ9pC%2FBjqkAUqY%2BH9mnRFBBK3tuAx8B4Q9yObbif8puJeCSknoRYB4MZCSkvi6Lcck%2BsDkdU%2BZ06b5pgn8Ql7KT9vf0ptkrr%2FX3z%2FLXO3w8ifVwnVUqiJyurOtkKLk%2F7KGPzzmTSS3yOSy4E85msI2Z7Pt8guAYaDVkVDEyD4JwUHHW1z0%2BEbqV07e9Yh%2BnDfJQXYDELAZz%2F94D0wUmPAJpVVSyrn7lg5NfuAu&X-Amz-Signature=d157413f0e6996105d0f8c2668a4c029675d2b948e7fa9e6f61a899af9d84c99&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
