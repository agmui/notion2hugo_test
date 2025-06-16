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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGDB6EXI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHFO5oGXuggvHp%2FGWyvx2RelZVjfd3BT%2Fu%2F2T73GpgHIAiB7kD49Puz3e3unsXNU6L8xHLwx3bnj5MJ3C%2B4isNhFzCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM0wcX%2Bskhn%2F6V2hDqKtwDqlEXSPtlIy6F79jcbGshBZmuk4IvarnoIXaDMBHuwUTqVf4ENprjmkrom%2BncicnQdDbJvDDWSFP9izjfQouLe6Y5MWnHR41011sJAug4HOfKF2A3F5%2BrRHI8GwEgCeelaTNscAQ%2FivDPC5tAXwQiB%2BrqENihaVFi4J0eLZGrTRzQqB8URnLpN7Zi%2BN4tkvauefbIzGk44fUiKYvPKmfhEP0jzHHlIOwsOmQ6iTX5ZJmcS2%2Bm8AhjB3DOSjt51Glz5S1a7nWGm4LrM%2B2vvCf9Qyaq4aM1IGRMJrk914XMrtd6Fq2%2FI2nH23EKu6EV5M4YDPogVnIdXdDLZLFDXWYmrjp6jEXNxh6%2FkWhxljzAfeZl1hxkpu1UCDDG2ev9%2FPgrHXYOv1UbWWTl%2BTr2O8LQDs4UEEw0SM4UJMibZxjcISb1qKPWntnS4gWd6ycksWDuc6Gys8wORyyA7qc446VQq28PS2vlZsnN2dJikwnWk1fB2sqYGyDLkCR15CAaOqftDUbbMYXTMf5TWOsSz55%2B%2FTYoqR8yEeTy3yWSyNfbEUvGEHBIZYlwDY%2BYuXVOXoP7zFq5yZtGhwVlIJF0PjNYDVtoq4XjDyyw9lN4sJRO7%2BwZceYZRfM8py7BZZ4wxuO%2FwgY6pgHR1Gfk5cCseoEGGT0KmMyGEV6CiT2G6TUblH%2FLmx3%2B79yIJ38Xk1A%2FwLOFtPPo4SGdvJ7ihrS0hNuYOh4gv4EERt3e%2BhNV%2Bb7zJnF%2B5E74X2PUN2YJo3RrRibehLLbQ7y3fBzW4jQsv6Rvqh5wu9qEo5oPzkuBYp8O02SZbUIlnb0gbM9LhKN3YtL83AAGKuxNoJvxpXqYxe3DlavEqTu8q69SCidJ&X-Amz-Signature=0506374ead1e04782184618fca7f1a43ea7d4c957049649b7c9efd65f274a9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGDB6EXI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHFO5oGXuggvHp%2FGWyvx2RelZVjfd3BT%2Fu%2F2T73GpgHIAiB7kD49Puz3e3unsXNU6L8xHLwx3bnj5MJ3C%2B4isNhFzCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM0wcX%2Bskhn%2F6V2hDqKtwDqlEXSPtlIy6F79jcbGshBZmuk4IvarnoIXaDMBHuwUTqVf4ENprjmkrom%2BncicnQdDbJvDDWSFP9izjfQouLe6Y5MWnHR41011sJAug4HOfKF2A3F5%2BrRHI8GwEgCeelaTNscAQ%2FivDPC5tAXwQiB%2BrqENihaVFi4J0eLZGrTRzQqB8URnLpN7Zi%2BN4tkvauefbIzGk44fUiKYvPKmfhEP0jzHHlIOwsOmQ6iTX5ZJmcS2%2Bm8AhjB3DOSjt51Glz5S1a7nWGm4LrM%2B2vvCf9Qyaq4aM1IGRMJrk914XMrtd6Fq2%2FI2nH23EKu6EV5M4YDPogVnIdXdDLZLFDXWYmrjp6jEXNxh6%2FkWhxljzAfeZl1hxkpu1UCDDG2ev9%2FPgrHXYOv1UbWWTl%2BTr2O8LQDs4UEEw0SM4UJMibZxjcISb1qKPWntnS4gWd6ycksWDuc6Gys8wORyyA7qc446VQq28PS2vlZsnN2dJikwnWk1fB2sqYGyDLkCR15CAaOqftDUbbMYXTMf5TWOsSz55%2B%2FTYoqR8yEeTy3yWSyNfbEUvGEHBIZYlwDY%2BYuXVOXoP7zFq5yZtGhwVlIJF0PjNYDVtoq4XjDyyw9lN4sJRO7%2BwZceYZRfM8py7BZZ4wxuO%2FwgY6pgHR1Gfk5cCseoEGGT0KmMyGEV6CiT2G6TUblH%2FLmx3%2B79yIJ38Xk1A%2FwLOFtPPo4SGdvJ7ihrS0hNuYOh4gv4EERt3e%2BhNV%2Bb7zJnF%2B5E74X2PUN2YJo3RrRibehLLbQ7y3fBzW4jQsv6Rvqh5wu9qEo5oPzkuBYp8O02SZbUIlnb0gbM9LhKN3YtL83AAGKuxNoJvxpXqYxe3DlavEqTu8q69SCidJ&X-Amz-Signature=e7f8ce877d7ba11d22406941e49b892627aa31a5250b8f77cdf98036bceff934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGDB6EXI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHFO5oGXuggvHp%2FGWyvx2RelZVjfd3BT%2Fu%2F2T73GpgHIAiB7kD49Puz3e3unsXNU6L8xHLwx3bnj5MJ3C%2B4isNhFzCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM0wcX%2Bskhn%2F6V2hDqKtwDqlEXSPtlIy6F79jcbGshBZmuk4IvarnoIXaDMBHuwUTqVf4ENprjmkrom%2BncicnQdDbJvDDWSFP9izjfQouLe6Y5MWnHR41011sJAug4HOfKF2A3F5%2BrRHI8GwEgCeelaTNscAQ%2FivDPC5tAXwQiB%2BrqENihaVFi4J0eLZGrTRzQqB8URnLpN7Zi%2BN4tkvauefbIzGk44fUiKYvPKmfhEP0jzHHlIOwsOmQ6iTX5ZJmcS2%2Bm8AhjB3DOSjt51Glz5S1a7nWGm4LrM%2B2vvCf9Qyaq4aM1IGRMJrk914XMrtd6Fq2%2FI2nH23EKu6EV5M4YDPogVnIdXdDLZLFDXWYmrjp6jEXNxh6%2FkWhxljzAfeZl1hxkpu1UCDDG2ev9%2FPgrHXYOv1UbWWTl%2BTr2O8LQDs4UEEw0SM4UJMibZxjcISb1qKPWntnS4gWd6ycksWDuc6Gys8wORyyA7qc446VQq28PS2vlZsnN2dJikwnWk1fB2sqYGyDLkCR15CAaOqftDUbbMYXTMf5TWOsSz55%2B%2FTYoqR8yEeTy3yWSyNfbEUvGEHBIZYlwDY%2BYuXVOXoP7zFq5yZtGhwVlIJF0PjNYDVtoq4XjDyyw9lN4sJRO7%2BwZceYZRfM8py7BZZ4wxuO%2FwgY6pgHR1Gfk5cCseoEGGT0KmMyGEV6CiT2G6TUblH%2FLmx3%2B79yIJ38Xk1A%2FwLOFtPPo4SGdvJ7ihrS0hNuYOh4gv4EERt3e%2BhNV%2Bb7zJnF%2B5E74X2PUN2YJo3RrRibehLLbQ7y3fBzW4jQsv6Rvqh5wu9qEo5oPzkuBYp8O02SZbUIlnb0gbM9LhKN3YtL83AAGKuxNoJvxpXqYxe3DlavEqTu8q69SCidJ&X-Amz-Signature=629fbb063fbe7d27a7010e92157e7bb058334694e35ddf7559b48a4c94536607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGDB6EXI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHFO5oGXuggvHp%2FGWyvx2RelZVjfd3BT%2Fu%2F2T73GpgHIAiB7kD49Puz3e3unsXNU6L8xHLwx3bnj5MJ3C%2B4isNhFzCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM0wcX%2Bskhn%2F6V2hDqKtwDqlEXSPtlIy6F79jcbGshBZmuk4IvarnoIXaDMBHuwUTqVf4ENprjmkrom%2BncicnQdDbJvDDWSFP9izjfQouLe6Y5MWnHR41011sJAug4HOfKF2A3F5%2BrRHI8GwEgCeelaTNscAQ%2FivDPC5tAXwQiB%2BrqENihaVFi4J0eLZGrTRzQqB8URnLpN7Zi%2BN4tkvauefbIzGk44fUiKYvPKmfhEP0jzHHlIOwsOmQ6iTX5ZJmcS2%2Bm8AhjB3DOSjt51Glz5S1a7nWGm4LrM%2B2vvCf9Qyaq4aM1IGRMJrk914XMrtd6Fq2%2FI2nH23EKu6EV5M4YDPogVnIdXdDLZLFDXWYmrjp6jEXNxh6%2FkWhxljzAfeZl1hxkpu1UCDDG2ev9%2FPgrHXYOv1UbWWTl%2BTr2O8LQDs4UEEw0SM4UJMibZxjcISb1qKPWntnS4gWd6ycksWDuc6Gys8wORyyA7qc446VQq28PS2vlZsnN2dJikwnWk1fB2sqYGyDLkCR15CAaOqftDUbbMYXTMf5TWOsSz55%2B%2FTYoqR8yEeTy3yWSyNfbEUvGEHBIZYlwDY%2BYuXVOXoP7zFq5yZtGhwVlIJF0PjNYDVtoq4XjDyyw9lN4sJRO7%2BwZceYZRfM8py7BZZ4wxuO%2FwgY6pgHR1Gfk5cCseoEGGT0KmMyGEV6CiT2G6TUblH%2FLmx3%2B79yIJ38Xk1A%2FwLOFtPPo4SGdvJ7ihrS0hNuYOh4gv4EERt3e%2BhNV%2Bb7zJnF%2B5E74X2PUN2YJo3RrRibehLLbQ7y3fBzW4jQsv6Rvqh5wu9qEo5oPzkuBYp8O02SZbUIlnb0gbM9LhKN3YtL83AAGKuxNoJvxpXqYxe3DlavEqTu8q69SCidJ&X-Amz-Signature=0b06a22fe68552e8fd10eedb2a265a3a97ca48ffb06c711644faa01fc3ff7dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGDB6EXI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHFO5oGXuggvHp%2FGWyvx2RelZVjfd3BT%2Fu%2F2T73GpgHIAiB7kD49Puz3e3unsXNU6L8xHLwx3bnj5MJ3C%2B4isNhFzCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM0wcX%2Bskhn%2F6V2hDqKtwDqlEXSPtlIy6F79jcbGshBZmuk4IvarnoIXaDMBHuwUTqVf4ENprjmkrom%2BncicnQdDbJvDDWSFP9izjfQouLe6Y5MWnHR41011sJAug4HOfKF2A3F5%2BrRHI8GwEgCeelaTNscAQ%2FivDPC5tAXwQiB%2BrqENihaVFi4J0eLZGrTRzQqB8URnLpN7Zi%2BN4tkvauefbIzGk44fUiKYvPKmfhEP0jzHHlIOwsOmQ6iTX5ZJmcS2%2Bm8AhjB3DOSjt51Glz5S1a7nWGm4LrM%2B2vvCf9Qyaq4aM1IGRMJrk914XMrtd6Fq2%2FI2nH23EKu6EV5M4YDPogVnIdXdDLZLFDXWYmrjp6jEXNxh6%2FkWhxljzAfeZl1hxkpu1UCDDG2ev9%2FPgrHXYOv1UbWWTl%2BTr2O8LQDs4UEEw0SM4UJMibZxjcISb1qKPWntnS4gWd6ycksWDuc6Gys8wORyyA7qc446VQq28PS2vlZsnN2dJikwnWk1fB2sqYGyDLkCR15CAaOqftDUbbMYXTMf5TWOsSz55%2B%2FTYoqR8yEeTy3yWSyNfbEUvGEHBIZYlwDY%2BYuXVOXoP7zFq5yZtGhwVlIJF0PjNYDVtoq4XjDyyw9lN4sJRO7%2BwZceYZRfM8py7BZZ4wxuO%2FwgY6pgHR1Gfk5cCseoEGGT0KmMyGEV6CiT2G6TUblH%2FLmx3%2B79yIJ38Xk1A%2FwLOFtPPo4SGdvJ7ihrS0hNuYOh4gv4EERt3e%2BhNV%2Bb7zJnF%2B5E74X2PUN2YJo3RrRibehLLbQ7y3fBzW4jQsv6Rvqh5wu9qEo5oPzkuBYp8O02SZbUIlnb0gbM9LhKN3YtL83AAGKuxNoJvxpXqYxe3DlavEqTu8q69SCidJ&X-Amz-Signature=917c78d7a8ecc97678cd40d71633d4c13429821ed8c87c5b5c7f9fe3ad974759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGDB6EXI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHFO5oGXuggvHp%2FGWyvx2RelZVjfd3BT%2Fu%2F2T73GpgHIAiB7kD49Puz3e3unsXNU6L8xHLwx3bnj5MJ3C%2B4isNhFzCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM0wcX%2Bskhn%2F6V2hDqKtwDqlEXSPtlIy6F79jcbGshBZmuk4IvarnoIXaDMBHuwUTqVf4ENprjmkrom%2BncicnQdDbJvDDWSFP9izjfQouLe6Y5MWnHR41011sJAug4HOfKF2A3F5%2BrRHI8GwEgCeelaTNscAQ%2FivDPC5tAXwQiB%2BrqENihaVFi4J0eLZGrTRzQqB8URnLpN7Zi%2BN4tkvauefbIzGk44fUiKYvPKmfhEP0jzHHlIOwsOmQ6iTX5ZJmcS2%2Bm8AhjB3DOSjt51Glz5S1a7nWGm4LrM%2B2vvCf9Qyaq4aM1IGRMJrk914XMrtd6Fq2%2FI2nH23EKu6EV5M4YDPogVnIdXdDLZLFDXWYmrjp6jEXNxh6%2FkWhxljzAfeZl1hxkpu1UCDDG2ev9%2FPgrHXYOv1UbWWTl%2BTr2O8LQDs4UEEw0SM4UJMibZxjcISb1qKPWntnS4gWd6ycksWDuc6Gys8wORyyA7qc446VQq28PS2vlZsnN2dJikwnWk1fB2sqYGyDLkCR15CAaOqftDUbbMYXTMf5TWOsSz55%2B%2FTYoqR8yEeTy3yWSyNfbEUvGEHBIZYlwDY%2BYuXVOXoP7zFq5yZtGhwVlIJF0PjNYDVtoq4XjDyyw9lN4sJRO7%2BwZceYZRfM8py7BZZ4wxuO%2FwgY6pgHR1Gfk5cCseoEGGT0KmMyGEV6CiT2G6TUblH%2FLmx3%2B79yIJ38Xk1A%2FwLOFtPPo4SGdvJ7ihrS0hNuYOh4gv4EERt3e%2BhNV%2Bb7zJnF%2B5E74X2PUN2YJo3RrRibehLLbQ7y3fBzW4jQsv6Rvqh5wu9qEo5oPzkuBYp8O02SZbUIlnb0gbM9LhKN3YtL83AAGKuxNoJvxpXqYxe3DlavEqTu8q69SCidJ&X-Amz-Signature=7349f10d27ded0e2e8fa016eef8a1189f2f6ad16b5b731056c9fce6d003fcbed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGDB6EXI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHFO5oGXuggvHp%2FGWyvx2RelZVjfd3BT%2Fu%2F2T73GpgHIAiB7kD49Puz3e3unsXNU6L8xHLwx3bnj5MJ3C%2B4isNhFzCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM0wcX%2Bskhn%2F6V2hDqKtwDqlEXSPtlIy6F79jcbGshBZmuk4IvarnoIXaDMBHuwUTqVf4ENprjmkrom%2BncicnQdDbJvDDWSFP9izjfQouLe6Y5MWnHR41011sJAug4HOfKF2A3F5%2BrRHI8GwEgCeelaTNscAQ%2FivDPC5tAXwQiB%2BrqENihaVFi4J0eLZGrTRzQqB8URnLpN7Zi%2BN4tkvauefbIzGk44fUiKYvPKmfhEP0jzHHlIOwsOmQ6iTX5ZJmcS2%2Bm8AhjB3DOSjt51Glz5S1a7nWGm4LrM%2B2vvCf9Qyaq4aM1IGRMJrk914XMrtd6Fq2%2FI2nH23EKu6EV5M4YDPogVnIdXdDLZLFDXWYmrjp6jEXNxh6%2FkWhxljzAfeZl1hxkpu1UCDDG2ev9%2FPgrHXYOv1UbWWTl%2BTr2O8LQDs4UEEw0SM4UJMibZxjcISb1qKPWntnS4gWd6ycksWDuc6Gys8wORyyA7qc446VQq28PS2vlZsnN2dJikwnWk1fB2sqYGyDLkCR15CAaOqftDUbbMYXTMf5TWOsSz55%2B%2FTYoqR8yEeTy3yWSyNfbEUvGEHBIZYlwDY%2BYuXVOXoP7zFq5yZtGhwVlIJF0PjNYDVtoq4XjDyyw9lN4sJRO7%2BwZceYZRfM8py7BZZ4wxuO%2FwgY6pgHR1Gfk5cCseoEGGT0KmMyGEV6CiT2G6TUblH%2FLmx3%2B79yIJ38Xk1A%2FwLOFtPPo4SGdvJ7ihrS0hNuYOh4gv4EERt3e%2BhNV%2Bb7zJnF%2B5E74X2PUN2YJo3RrRibehLLbQ7y3fBzW4jQsv6Rvqh5wu9qEo5oPzkuBYp8O02SZbUIlnb0gbM9LhKN3YtL83AAGKuxNoJvxpXqYxe3DlavEqTu8q69SCidJ&X-Amz-Signature=91e699d3dc5ad159f4afdf5770204534d53744a72b16e9516dff941ecbce5781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
