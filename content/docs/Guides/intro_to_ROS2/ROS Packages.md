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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGEDUTL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCeGxwqwE9wLlt0WywlQbMgEbQX7Mi0Y7XxihFzWRTYvgIgGTl%2BXKkh1Q0djSE5ub3zIcJGuG0%2ByBK7yA6q3gJWErUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGxemZb63Ey8vu1xFCrcAyAWWaUxxqgGvcM0hQyUV0D3eqQcWGizwkcLxoo7IfEtMwlwnbW9Mt3Vq3DF6eyfTKZLp%2BtnjY76NcEt7GZpGzLe8Ul8bFUNc6PrNzi9UDZeaqNOK0KEODKUoBZssGc5hNKstR0QkWuU6DdJ4LwoEH3kEvXzpa9qTxatN8zzS1Uw%2FS1xHe5LFfSmfAgv%2Fn1Kv4V5ky8ekJ%2FAEMOacQ05UxIeVW8VaWvXLIelT29rISQ1P0k3NagNBYwXqczUAA2UPD1SfK1nRWf%2FAjGtap9%2F23ILt%2FrJKndq7Fg0dlkzUQ7ytYEDH2CtNojZQ5AzzBlVcMiGBBElYkcwJsOTyUPEDByiEZ9%2BzWqmho7%2F94ePxyHOXywcSdQDIU%2F%2FVYO2OCtwEP7nfcgG%2B%2FPkwvMQDhULlsCDqVLLU4HlXTjvmhSnfECciTJ9vKURWWmutyxRvzoxgGHTsEMNn93vJQeNN8CCbyHEAVfrm3hNws3qiMCEKFNqawi3wKkBcAFGv3AfkJakFP9BAJk1zurfUxtUOCAhPGnD8ZAphmlMxcoFv2j745fgxzXsC%2FNkVB43zrOqV477WPQ5EROfSSIgJquEczleAWUYIHGqQUJQNpRD0lVEz9PzUW67%2FtJoHgaLHwAoMKnPvMIGOqUBwXcmdUEpPWrvM142TlldlzoHUEsPeJT62UfI40CtcbX8RnxtRSVHes1cuooLRkyK9NAyoR2eaQAS%2FJ95iagI60LZALt%2BqAYj9SndFx%2BLl0s2tmN8mzwZS8Jis0nLCb2KrkWkoOf942Fytqje%2BevP%2BOXFFhU%2FzCkpaHrAnu7XW6wEdZ6z5hhX5n9Fya1osk22hl4hmtu%2BY2Az7Kj8vZaCxXAeOWkp&X-Amz-Signature=89475977d70242c9b01e208d1102ed3b110809e1b66465d57c298e91e5ed10c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGEDUTL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCeGxwqwE9wLlt0WywlQbMgEbQX7Mi0Y7XxihFzWRTYvgIgGTl%2BXKkh1Q0djSE5ub3zIcJGuG0%2ByBK7yA6q3gJWErUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGxemZb63Ey8vu1xFCrcAyAWWaUxxqgGvcM0hQyUV0D3eqQcWGizwkcLxoo7IfEtMwlwnbW9Mt3Vq3DF6eyfTKZLp%2BtnjY76NcEt7GZpGzLe8Ul8bFUNc6PrNzi9UDZeaqNOK0KEODKUoBZssGc5hNKstR0QkWuU6DdJ4LwoEH3kEvXzpa9qTxatN8zzS1Uw%2FS1xHe5LFfSmfAgv%2Fn1Kv4V5ky8ekJ%2FAEMOacQ05UxIeVW8VaWvXLIelT29rISQ1P0k3NagNBYwXqczUAA2UPD1SfK1nRWf%2FAjGtap9%2F23ILt%2FrJKndq7Fg0dlkzUQ7ytYEDH2CtNojZQ5AzzBlVcMiGBBElYkcwJsOTyUPEDByiEZ9%2BzWqmho7%2F94ePxyHOXywcSdQDIU%2F%2FVYO2OCtwEP7nfcgG%2B%2FPkwvMQDhULlsCDqVLLU4HlXTjvmhSnfECciTJ9vKURWWmutyxRvzoxgGHTsEMNn93vJQeNN8CCbyHEAVfrm3hNws3qiMCEKFNqawi3wKkBcAFGv3AfkJakFP9BAJk1zurfUxtUOCAhPGnD8ZAphmlMxcoFv2j745fgxzXsC%2FNkVB43zrOqV477WPQ5EROfSSIgJquEczleAWUYIHGqQUJQNpRD0lVEz9PzUW67%2FtJoHgaLHwAoMKnPvMIGOqUBwXcmdUEpPWrvM142TlldlzoHUEsPeJT62UfI40CtcbX8RnxtRSVHes1cuooLRkyK9NAyoR2eaQAS%2FJ95iagI60LZALt%2BqAYj9SndFx%2BLl0s2tmN8mzwZS8Jis0nLCb2KrkWkoOf942Fytqje%2BevP%2BOXFFhU%2FzCkpaHrAnu7XW6wEdZ6z5hhX5n9Fya1osk22hl4hmtu%2BY2Az7Kj8vZaCxXAeOWkp&X-Amz-Signature=a3e35fb591fb27f158c3520b4f4030c037cac44b8b2d5b7463ee9abc6427a8c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGEDUTL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCeGxwqwE9wLlt0WywlQbMgEbQX7Mi0Y7XxihFzWRTYvgIgGTl%2BXKkh1Q0djSE5ub3zIcJGuG0%2ByBK7yA6q3gJWErUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGxemZb63Ey8vu1xFCrcAyAWWaUxxqgGvcM0hQyUV0D3eqQcWGizwkcLxoo7IfEtMwlwnbW9Mt3Vq3DF6eyfTKZLp%2BtnjY76NcEt7GZpGzLe8Ul8bFUNc6PrNzi9UDZeaqNOK0KEODKUoBZssGc5hNKstR0QkWuU6DdJ4LwoEH3kEvXzpa9qTxatN8zzS1Uw%2FS1xHe5LFfSmfAgv%2Fn1Kv4V5ky8ekJ%2FAEMOacQ05UxIeVW8VaWvXLIelT29rISQ1P0k3NagNBYwXqczUAA2UPD1SfK1nRWf%2FAjGtap9%2F23ILt%2FrJKndq7Fg0dlkzUQ7ytYEDH2CtNojZQ5AzzBlVcMiGBBElYkcwJsOTyUPEDByiEZ9%2BzWqmho7%2F94ePxyHOXywcSdQDIU%2F%2FVYO2OCtwEP7nfcgG%2B%2FPkwvMQDhULlsCDqVLLU4HlXTjvmhSnfECciTJ9vKURWWmutyxRvzoxgGHTsEMNn93vJQeNN8CCbyHEAVfrm3hNws3qiMCEKFNqawi3wKkBcAFGv3AfkJakFP9BAJk1zurfUxtUOCAhPGnD8ZAphmlMxcoFv2j745fgxzXsC%2FNkVB43zrOqV477WPQ5EROfSSIgJquEczleAWUYIHGqQUJQNpRD0lVEz9PzUW67%2FtJoHgaLHwAoMKnPvMIGOqUBwXcmdUEpPWrvM142TlldlzoHUEsPeJT62UfI40CtcbX8RnxtRSVHes1cuooLRkyK9NAyoR2eaQAS%2FJ95iagI60LZALt%2BqAYj9SndFx%2BLl0s2tmN8mzwZS8Jis0nLCb2KrkWkoOf942Fytqje%2BevP%2BOXFFhU%2FzCkpaHrAnu7XW6wEdZ6z5hhX5n9Fya1osk22hl4hmtu%2BY2Az7Kj8vZaCxXAeOWkp&X-Amz-Signature=bb4abed5e42489bdb58083b3678ef6c060725bddc138cb4c8b01b5839b771ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGEDUTL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCeGxwqwE9wLlt0WywlQbMgEbQX7Mi0Y7XxihFzWRTYvgIgGTl%2BXKkh1Q0djSE5ub3zIcJGuG0%2ByBK7yA6q3gJWErUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGxemZb63Ey8vu1xFCrcAyAWWaUxxqgGvcM0hQyUV0D3eqQcWGizwkcLxoo7IfEtMwlwnbW9Mt3Vq3DF6eyfTKZLp%2BtnjY76NcEt7GZpGzLe8Ul8bFUNc6PrNzi9UDZeaqNOK0KEODKUoBZssGc5hNKstR0QkWuU6DdJ4LwoEH3kEvXzpa9qTxatN8zzS1Uw%2FS1xHe5LFfSmfAgv%2Fn1Kv4V5ky8ekJ%2FAEMOacQ05UxIeVW8VaWvXLIelT29rISQ1P0k3NagNBYwXqczUAA2UPD1SfK1nRWf%2FAjGtap9%2F23ILt%2FrJKndq7Fg0dlkzUQ7ytYEDH2CtNojZQ5AzzBlVcMiGBBElYkcwJsOTyUPEDByiEZ9%2BzWqmho7%2F94ePxyHOXywcSdQDIU%2F%2FVYO2OCtwEP7nfcgG%2B%2FPkwvMQDhULlsCDqVLLU4HlXTjvmhSnfECciTJ9vKURWWmutyxRvzoxgGHTsEMNn93vJQeNN8CCbyHEAVfrm3hNws3qiMCEKFNqawi3wKkBcAFGv3AfkJakFP9BAJk1zurfUxtUOCAhPGnD8ZAphmlMxcoFv2j745fgxzXsC%2FNkVB43zrOqV477WPQ5EROfSSIgJquEczleAWUYIHGqQUJQNpRD0lVEz9PzUW67%2FtJoHgaLHwAoMKnPvMIGOqUBwXcmdUEpPWrvM142TlldlzoHUEsPeJT62UfI40CtcbX8RnxtRSVHes1cuooLRkyK9NAyoR2eaQAS%2FJ95iagI60LZALt%2BqAYj9SndFx%2BLl0s2tmN8mzwZS8Jis0nLCb2KrkWkoOf942Fytqje%2BevP%2BOXFFhU%2FzCkpaHrAnu7XW6wEdZ6z5hhX5n9Fya1osk22hl4hmtu%2BY2Az7Kj8vZaCxXAeOWkp&X-Amz-Signature=7abc14a63fdd8fbaec43cdb6a9ba2082da6e835fb1102f4c88e7f7a8277f24cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGEDUTL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCeGxwqwE9wLlt0WywlQbMgEbQX7Mi0Y7XxihFzWRTYvgIgGTl%2BXKkh1Q0djSE5ub3zIcJGuG0%2ByBK7yA6q3gJWErUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGxemZb63Ey8vu1xFCrcAyAWWaUxxqgGvcM0hQyUV0D3eqQcWGizwkcLxoo7IfEtMwlwnbW9Mt3Vq3DF6eyfTKZLp%2BtnjY76NcEt7GZpGzLe8Ul8bFUNc6PrNzi9UDZeaqNOK0KEODKUoBZssGc5hNKstR0QkWuU6DdJ4LwoEH3kEvXzpa9qTxatN8zzS1Uw%2FS1xHe5LFfSmfAgv%2Fn1Kv4V5ky8ekJ%2FAEMOacQ05UxIeVW8VaWvXLIelT29rISQ1P0k3NagNBYwXqczUAA2UPD1SfK1nRWf%2FAjGtap9%2F23ILt%2FrJKndq7Fg0dlkzUQ7ytYEDH2CtNojZQ5AzzBlVcMiGBBElYkcwJsOTyUPEDByiEZ9%2BzWqmho7%2F94ePxyHOXywcSdQDIU%2F%2FVYO2OCtwEP7nfcgG%2B%2FPkwvMQDhULlsCDqVLLU4HlXTjvmhSnfECciTJ9vKURWWmutyxRvzoxgGHTsEMNn93vJQeNN8CCbyHEAVfrm3hNws3qiMCEKFNqawi3wKkBcAFGv3AfkJakFP9BAJk1zurfUxtUOCAhPGnD8ZAphmlMxcoFv2j745fgxzXsC%2FNkVB43zrOqV477WPQ5EROfSSIgJquEczleAWUYIHGqQUJQNpRD0lVEz9PzUW67%2FtJoHgaLHwAoMKnPvMIGOqUBwXcmdUEpPWrvM142TlldlzoHUEsPeJT62UfI40CtcbX8RnxtRSVHes1cuooLRkyK9NAyoR2eaQAS%2FJ95iagI60LZALt%2BqAYj9SndFx%2BLl0s2tmN8mzwZS8Jis0nLCb2KrkWkoOf942Fytqje%2BevP%2BOXFFhU%2FzCkpaHrAnu7XW6wEdZ6z5hhX5n9Fya1osk22hl4hmtu%2BY2Az7Kj8vZaCxXAeOWkp&X-Amz-Signature=5f79d8db5c5576344b2306f78947e9dfd86c7766e304699f73d037b13835fcf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGEDUTL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCeGxwqwE9wLlt0WywlQbMgEbQX7Mi0Y7XxihFzWRTYvgIgGTl%2BXKkh1Q0djSE5ub3zIcJGuG0%2ByBK7yA6q3gJWErUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGxemZb63Ey8vu1xFCrcAyAWWaUxxqgGvcM0hQyUV0D3eqQcWGizwkcLxoo7IfEtMwlwnbW9Mt3Vq3DF6eyfTKZLp%2BtnjY76NcEt7GZpGzLe8Ul8bFUNc6PrNzi9UDZeaqNOK0KEODKUoBZssGc5hNKstR0QkWuU6DdJ4LwoEH3kEvXzpa9qTxatN8zzS1Uw%2FS1xHe5LFfSmfAgv%2Fn1Kv4V5ky8ekJ%2FAEMOacQ05UxIeVW8VaWvXLIelT29rISQ1P0k3NagNBYwXqczUAA2UPD1SfK1nRWf%2FAjGtap9%2F23ILt%2FrJKndq7Fg0dlkzUQ7ytYEDH2CtNojZQ5AzzBlVcMiGBBElYkcwJsOTyUPEDByiEZ9%2BzWqmho7%2F94ePxyHOXywcSdQDIU%2F%2FVYO2OCtwEP7nfcgG%2B%2FPkwvMQDhULlsCDqVLLU4HlXTjvmhSnfECciTJ9vKURWWmutyxRvzoxgGHTsEMNn93vJQeNN8CCbyHEAVfrm3hNws3qiMCEKFNqawi3wKkBcAFGv3AfkJakFP9BAJk1zurfUxtUOCAhPGnD8ZAphmlMxcoFv2j745fgxzXsC%2FNkVB43zrOqV477WPQ5EROfSSIgJquEczleAWUYIHGqQUJQNpRD0lVEz9PzUW67%2FtJoHgaLHwAoMKnPvMIGOqUBwXcmdUEpPWrvM142TlldlzoHUEsPeJT62UfI40CtcbX8RnxtRSVHes1cuooLRkyK9NAyoR2eaQAS%2FJ95iagI60LZALt%2BqAYj9SndFx%2BLl0s2tmN8mzwZS8Jis0nLCb2KrkWkoOf942Fytqje%2BevP%2BOXFFhU%2FzCkpaHrAnu7XW6wEdZ6z5hhX5n9Fya1osk22hl4hmtu%2BY2Az7Kj8vZaCxXAeOWkp&X-Amz-Signature=d70ce5cb61d9b3c3d94242f71ca32cb9bbda83b770f457f201ee0bcda6bb837c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGEDUTL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCeGxwqwE9wLlt0WywlQbMgEbQX7Mi0Y7XxihFzWRTYvgIgGTl%2BXKkh1Q0djSE5ub3zIcJGuG0%2ByBK7yA6q3gJWErUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGxemZb63Ey8vu1xFCrcAyAWWaUxxqgGvcM0hQyUV0D3eqQcWGizwkcLxoo7IfEtMwlwnbW9Mt3Vq3DF6eyfTKZLp%2BtnjY76NcEt7GZpGzLe8Ul8bFUNc6PrNzi9UDZeaqNOK0KEODKUoBZssGc5hNKstR0QkWuU6DdJ4LwoEH3kEvXzpa9qTxatN8zzS1Uw%2FS1xHe5LFfSmfAgv%2Fn1Kv4V5ky8ekJ%2FAEMOacQ05UxIeVW8VaWvXLIelT29rISQ1P0k3NagNBYwXqczUAA2UPD1SfK1nRWf%2FAjGtap9%2F23ILt%2FrJKndq7Fg0dlkzUQ7ytYEDH2CtNojZQ5AzzBlVcMiGBBElYkcwJsOTyUPEDByiEZ9%2BzWqmho7%2F94ePxyHOXywcSdQDIU%2F%2FVYO2OCtwEP7nfcgG%2B%2FPkwvMQDhULlsCDqVLLU4HlXTjvmhSnfECciTJ9vKURWWmutyxRvzoxgGHTsEMNn93vJQeNN8CCbyHEAVfrm3hNws3qiMCEKFNqawi3wKkBcAFGv3AfkJakFP9BAJk1zurfUxtUOCAhPGnD8ZAphmlMxcoFv2j745fgxzXsC%2FNkVB43zrOqV477WPQ5EROfSSIgJquEczleAWUYIHGqQUJQNpRD0lVEz9PzUW67%2FtJoHgaLHwAoMKnPvMIGOqUBwXcmdUEpPWrvM142TlldlzoHUEsPeJT62UfI40CtcbX8RnxtRSVHes1cuooLRkyK9NAyoR2eaQAS%2FJ95iagI60LZALt%2BqAYj9SndFx%2BLl0s2tmN8mzwZS8Jis0nLCb2KrkWkoOf942Fytqje%2BevP%2BOXFFhU%2FzCkpaHrAnu7XW6wEdZ6z5hhX5n9Fya1osk22hl4hmtu%2BY2Az7Kj8vZaCxXAeOWkp&X-Amz-Signature=9fba03a9afd72066e1413557a690c3a67584f5185cec485561e1262e8c79dc20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
