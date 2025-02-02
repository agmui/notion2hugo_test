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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BAVNDAT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuRaiTjlZmf9zNKgsxournQ5pxEFDhSbAbTDqQgIacCAiBR4OsFnMX9HYMpgo2ztbmDpl%2FfVMNl3i9kegyIS3oaoyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAMPSfSKknY%2Fgsn57KtwDUdkM5uPzrVLujjRjgMDjcWhNicpl8aLaqRPmyAfRgtJ6OWcBKvXw9dD7HZPEYBkyS4j%2FnVlEGXPS1p2MFx33e3HPqdYJne1dLhT3Lnyfjyahdh9t9fjjx82ffyzCDCMU5nyOFvm7cYD95LNAPUBnhdrAeMJBfF%2B%2FhGc1PycwoLSH%2B16HYbHgBHk%2Fb098LgMGPpUQEvCFMtyhLUcUlvztHjk%2BQahJWjXIvOY7x%2BzyKARlzM3IJ31jB13AvIsDcgpZ6Up%2BVbCviOe7IGC5KvUbN0NBtEllKWIcHlzFiRJRFxgzvUzt2ADhT512RdR9t3ahC2EQ9Y9k0NxvEiwf6yq5YFRGE6qc6GC4VljtLjE8cJ8CZ8YofkZDXSBGQFS5WlFhNBaGPhS8yog76QKyjoZ7TVWhkbcTKZHoBzvoz%2Ba6xp%2BWYwfTHrTCyzS3%2FPj10V38RgCmonAZxjwlw6zYqpX4JbgnSDxz8UsUMZKISxwNOgP9jmlZVwDYUko3qqWFuYd8ccgtrNWp895XC2%2BxOzMSm9DC3VaxbmSLZu443%2BE8fspQCQZt4ov%2FES1lgYNZ4DHMTFyXeT%2B9Rb5PlwuSAC8Ovl8uhMlu5F15TYHNqJxFoSMNcd%2FgS4kwbjA3SqAw6538vAY6pgH9yH03UVFGP67DbQSjjMpHVn7TUR%2B1kC3bClDgYNcFnqpYjLc0rF%2FdMvsiDht2L7Og5rIRrp1DMOTq4pMX6g7jb%2FXzRolno5bbwsgLTSWU0Zzp22hEFbRQMwViRy6KduDKZcEuUGDpOCUrHqPM6AB8rWDmRbcEGQ1CPW4JA2NjyaUoC3Zdv76zWmNEEqF3iMMMbQs5Um9P4A83M2M%2By%2F977pMaY7d7&X-Amz-Signature=a2254973c710309d925aabfb15659d8ad504d176f3682c969ba3a98ae5a4cdf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BAVNDAT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuRaiTjlZmf9zNKgsxournQ5pxEFDhSbAbTDqQgIacCAiBR4OsFnMX9HYMpgo2ztbmDpl%2FfVMNl3i9kegyIS3oaoyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAMPSfSKknY%2Fgsn57KtwDUdkM5uPzrVLujjRjgMDjcWhNicpl8aLaqRPmyAfRgtJ6OWcBKvXw9dD7HZPEYBkyS4j%2FnVlEGXPS1p2MFx33e3HPqdYJne1dLhT3Lnyfjyahdh9t9fjjx82ffyzCDCMU5nyOFvm7cYD95LNAPUBnhdrAeMJBfF%2B%2FhGc1PycwoLSH%2B16HYbHgBHk%2Fb098LgMGPpUQEvCFMtyhLUcUlvztHjk%2BQahJWjXIvOY7x%2BzyKARlzM3IJ31jB13AvIsDcgpZ6Up%2BVbCviOe7IGC5KvUbN0NBtEllKWIcHlzFiRJRFxgzvUzt2ADhT512RdR9t3ahC2EQ9Y9k0NxvEiwf6yq5YFRGE6qc6GC4VljtLjE8cJ8CZ8YofkZDXSBGQFS5WlFhNBaGPhS8yog76QKyjoZ7TVWhkbcTKZHoBzvoz%2Ba6xp%2BWYwfTHrTCyzS3%2FPj10V38RgCmonAZxjwlw6zYqpX4JbgnSDxz8UsUMZKISxwNOgP9jmlZVwDYUko3qqWFuYd8ccgtrNWp895XC2%2BxOzMSm9DC3VaxbmSLZu443%2BE8fspQCQZt4ov%2FES1lgYNZ4DHMTFyXeT%2B9Rb5PlwuSAC8Ovl8uhMlu5F15TYHNqJxFoSMNcd%2FgS4kwbjA3SqAw6538vAY6pgH9yH03UVFGP67DbQSjjMpHVn7TUR%2B1kC3bClDgYNcFnqpYjLc0rF%2FdMvsiDht2L7Og5rIRrp1DMOTq4pMX6g7jb%2FXzRolno5bbwsgLTSWU0Zzp22hEFbRQMwViRy6KduDKZcEuUGDpOCUrHqPM6AB8rWDmRbcEGQ1CPW4JA2NjyaUoC3Zdv76zWmNEEqF3iMMMbQs5Um9P4A83M2M%2By%2F977pMaY7d7&X-Amz-Signature=70586dda4dc6a16911b0f2c0d805f3781137acd1f94520e92f42d41ed5747887&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BAVNDAT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuRaiTjlZmf9zNKgsxournQ5pxEFDhSbAbTDqQgIacCAiBR4OsFnMX9HYMpgo2ztbmDpl%2FfVMNl3i9kegyIS3oaoyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAMPSfSKknY%2Fgsn57KtwDUdkM5uPzrVLujjRjgMDjcWhNicpl8aLaqRPmyAfRgtJ6OWcBKvXw9dD7HZPEYBkyS4j%2FnVlEGXPS1p2MFx33e3HPqdYJne1dLhT3Lnyfjyahdh9t9fjjx82ffyzCDCMU5nyOFvm7cYD95LNAPUBnhdrAeMJBfF%2B%2FhGc1PycwoLSH%2B16HYbHgBHk%2Fb098LgMGPpUQEvCFMtyhLUcUlvztHjk%2BQahJWjXIvOY7x%2BzyKARlzM3IJ31jB13AvIsDcgpZ6Up%2BVbCviOe7IGC5KvUbN0NBtEllKWIcHlzFiRJRFxgzvUzt2ADhT512RdR9t3ahC2EQ9Y9k0NxvEiwf6yq5YFRGE6qc6GC4VljtLjE8cJ8CZ8YofkZDXSBGQFS5WlFhNBaGPhS8yog76QKyjoZ7TVWhkbcTKZHoBzvoz%2Ba6xp%2BWYwfTHrTCyzS3%2FPj10V38RgCmonAZxjwlw6zYqpX4JbgnSDxz8UsUMZKISxwNOgP9jmlZVwDYUko3qqWFuYd8ccgtrNWp895XC2%2BxOzMSm9DC3VaxbmSLZu443%2BE8fspQCQZt4ov%2FES1lgYNZ4DHMTFyXeT%2B9Rb5PlwuSAC8Ovl8uhMlu5F15TYHNqJxFoSMNcd%2FgS4kwbjA3SqAw6538vAY6pgH9yH03UVFGP67DbQSjjMpHVn7TUR%2B1kC3bClDgYNcFnqpYjLc0rF%2FdMvsiDht2L7Og5rIRrp1DMOTq4pMX6g7jb%2FXzRolno5bbwsgLTSWU0Zzp22hEFbRQMwViRy6KduDKZcEuUGDpOCUrHqPM6AB8rWDmRbcEGQ1CPW4JA2NjyaUoC3Zdv76zWmNEEqF3iMMMbQs5Um9P4A83M2M%2By%2F977pMaY7d7&X-Amz-Signature=e3ec2cc9f5289df631898d2843b4333af1ce126d33906bc87f1f1b657a8e48f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BAVNDAT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuRaiTjlZmf9zNKgsxournQ5pxEFDhSbAbTDqQgIacCAiBR4OsFnMX9HYMpgo2ztbmDpl%2FfVMNl3i9kegyIS3oaoyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAMPSfSKknY%2Fgsn57KtwDUdkM5uPzrVLujjRjgMDjcWhNicpl8aLaqRPmyAfRgtJ6OWcBKvXw9dD7HZPEYBkyS4j%2FnVlEGXPS1p2MFx33e3HPqdYJne1dLhT3Lnyfjyahdh9t9fjjx82ffyzCDCMU5nyOFvm7cYD95LNAPUBnhdrAeMJBfF%2B%2FhGc1PycwoLSH%2B16HYbHgBHk%2Fb098LgMGPpUQEvCFMtyhLUcUlvztHjk%2BQahJWjXIvOY7x%2BzyKARlzM3IJ31jB13AvIsDcgpZ6Up%2BVbCviOe7IGC5KvUbN0NBtEllKWIcHlzFiRJRFxgzvUzt2ADhT512RdR9t3ahC2EQ9Y9k0NxvEiwf6yq5YFRGE6qc6GC4VljtLjE8cJ8CZ8YofkZDXSBGQFS5WlFhNBaGPhS8yog76QKyjoZ7TVWhkbcTKZHoBzvoz%2Ba6xp%2BWYwfTHrTCyzS3%2FPj10V38RgCmonAZxjwlw6zYqpX4JbgnSDxz8UsUMZKISxwNOgP9jmlZVwDYUko3qqWFuYd8ccgtrNWp895XC2%2BxOzMSm9DC3VaxbmSLZu443%2BE8fspQCQZt4ov%2FES1lgYNZ4DHMTFyXeT%2B9Rb5PlwuSAC8Ovl8uhMlu5F15TYHNqJxFoSMNcd%2FgS4kwbjA3SqAw6538vAY6pgH9yH03UVFGP67DbQSjjMpHVn7TUR%2B1kC3bClDgYNcFnqpYjLc0rF%2FdMvsiDht2L7Og5rIRrp1DMOTq4pMX6g7jb%2FXzRolno5bbwsgLTSWU0Zzp22hEFbRQMwViRy6KduDKZcEuUGDpOCUrHqPM6AB8rWDmRbcEGQ1CPW4JA2NjyaUoC3Zdv76zWmNEEqF3iMMMbQs5Um9P4A83M2M%2By%2F977pMaY7d7&X-Amz-Signature=57e33fe775568c797c6b9ef823b2ae572d135d05089a6c40b923c8ea0001812b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BAVNDAT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuRaiTjlZmf9zNKgsxournQ5pxEFDhSbAbTDqQgIacCAiBR4OsFnMX9HYMpgo2ztbmDpl%2FfVMNl3i9kegyIS3oaoyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAMPSfSKknY%2Fgsn57KtwDUdkM5uPzrVLujjRjgMDjcWhNicpl8aLaqRPmyAfRgtJ6OWcBKvXw9dD7HZPEYBkyS4j%2FnVlEGXPS1p2MFx33e3HPqdYJne1dLhT3Lnyfjyahdh9t9fjjx82ffyzCDCMU5nyOFvm7cYD95LNAPUBnhdrAeMJBfF%2B%2FhGc1PycwoLSH%2B16HYbHgBHk%2Fb098LgMGPpUQEvCFMtyhLUcUlvztHjk%2BQahJWjXIvOY7x%2BzyKARlzM3IJ31jB13AvIsDcgpZ6Up%2BVbCviOe7IGC5KvUbN0NBtEllKWIcHlzFiRJRFxgzvUzt2ADhT512RdR9t3ahC2EQ9Y9k0NxvEiwf6yq5YFRGE6qc6GC4VljtLjE8cJ8CZ8YofkZDXSBGQFS5WlFhNBaGPhS8yog76QKyjoZ7TVWhkbcTKZHoBzvoz%2Ba6xp%2BWYwfTHrTCyzS3%2FPj10V38RgCmonAZxjwlw6zYqpX4JbgnSDxz8UsUMZKISxwNOgP9jmlZVwDYUko3qqWFuYd8ccgtrNWp895XC2%2BxOzMSm9DC3VaxbmSLZu443%2BE8fspQCQZt4ov%2FES1lgYNZ4DHMTFyXeT%2B9Rb5PlwuSAC8Ovl8uhMlu5F15TYHNqJxFoSMNcd%2FgS4kwbjA3SqAw6538vAY6pgH9yH03UVFGP67DbQSjjMpHVn7TUR%2B1kC3bClDgYNcFnqpYjLc0rF%2FdMvsiDht2L7Og5rIRrp1DMOTq4pMX6g7jb%2FXzRolno5bbwsgLTSWU0Zzp22hEFbRQMwViRy6KduDKZcEuUGDpOCUrHqPM6AB8rWDmRbcEGQ1CPW4JA2NjyaUoC3Zdv76zWmNEEqF3iMMMbQs5Um9P4A83M2M%2By%2F977pMaY7d7&X-Amz-Signature=dcbf8527f8e23cb23ba876a367b860a9af37f94ee80a8cfb825840ac699b5352&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BAVNDAT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuRaiTjlZmf9zNKgsxournQ5pxEFDhSbAbTDqQgIacCAiBR4OsFnMX9HYMpgo2ztbmDpl%2FfVMNl3i9kegyIS3oaoyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAMPSfSKknY%2Fgsn57KtwDUdkM5uPzrVLujjRjgMDjcWhNicpl8aLaqRPmyAfRgtJ6OWcBKvXw9dD7HZPEYBkyS4j%2FnVlEGXPS1p2MFx33e3HPqdYJne1dLhT3Lnyfjyahdh9t9fjjx82ffyzCDCMU5nyOFvm7cYD95LNAPUBnhdrAeMJBfF%2B%2FhGc1PycwoLSH%2B16HYbHgBHk%2Fb098LgMGPpUQEvCFMtyhLUcUlvztHjk%2BQahJWjXIvOY7x%2BzyKARlzM3IJ31jB13AvIsDcgpZ6Up%2BVbCviOe7IGC5KvUbN0NBtEllKWIcHlzFiRJRFxgzvUzt2ADhT512RdR9t3ahC2EQ9Y9k0NxvEiwf6yq5YFRGE6qc6GC4VljtLjE8cJ8CZ8YofkZDXSBGQFS5WlFhNBaGPhS8yog76QKyjoZ7TVWhkbcTKZHoBzvoz%2Ba6xp%2BWYwfTHrTCyzS3%2FPj10V38RgCmonAZxjwlw6zYqpX4JbgnSDxz8UsUMZKISxwNOgP9jmlZVwDYUko3qqWFuYd8ccgtrNWp895XC2%2BxOzMSm9DC3VaxbmSLZu443%2BE8fspQCQZt4ov%2FES1lgYNZ4DHMTFyXeT%2B9Rb5PlwuSAC8Ovl8uhMlu5F15TYHNqJxFoSMNcd%2FgS4kwbjA3SqAw6538vAY6pgH9yH03UVFGP67DbQSjjMpHVn7TUR%2B1kC3bClDgYNcFnqpYjLc0rF%2FdMvsiDht2L7Og5rIRrp1DMOTq4pMX6g7jb%2FXzRolno5bbwsgLTSWU0Zzp22hEFbRQMwViRy6KduDKZcEuUGDpOCUrHqPM6AB8rWDmRbcEGQ1CPW4JA2NjyaUoC3Zdv76zWmNEEqF3iMMMbQs5Um9P4A83M2M%2By%2F977pMaY7d7&X-Amz-Signature=7eb83da730ab6ccd26f8e7813c76c3fcbbc3e396f6156d9b23e9eae2b6796330&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BAVNDAT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuRaiTjlZmf9zNKgsxournQ5pxEFDhSbAbTDqQgIacCAiBR4OsFnMX9HYMpgo2ztbmDpl%2FfVMNl3i9kegyIS3oaoyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAMPSfSKknY%2Fgsn57KtwDUdkM5uPzrVLujjRjgMDjcWhNicpl8aLaqRPmyAfRgtJ6OWcBKvXw9dD7HZPEYBkyS4j%2FnVlEGXPS1p2MFx33e3HPqdYJne1dLhT3Lnyfjyahdh9t9fjjx82ffyzCDCMU5nyOFvm7cYD95LNAPUBnhdrAeMJBfF%2B%2FhGc1PycwoLSH%2B16HYbHgBHk%2Fb098LgMGPpUQEvCFMtyhLUcUlvztHjk%2BQahJWjXIvOY7x%2BzyKARlzM3IJ31jB13AvIsDcgpZ6Up%2BVbCviOe7IGC5KvUbN0NBtEllKWIcHlzFiRJRFxgzvUzt2ADhT512RdR9t3ahC2EQ9Y9k0NxvEiwf6yq5YFRGE6qc6GC4VljtLjE8cJ8CZ8YofkZDXSBGQFS5WlFhNBaGPhS8yog76QKyjoZ7TVWhkbcTKZHoBzvoz%2Ba6xp%2BWYwfTHrTCyzS3%2FPj10V38RgCmonAZxjwlw6zYqpX4JbgnSDxz8UsUMZKISxwNOgP9jmlZVwDYUko3qqWFuYd8ccgtrNWp895XC2%2BxOzMSm9DC3VaxbmSLZu443%2BE8fspQCQZt4ov%2FES1lgYNZ4DHMTFyXeT%2B9Rb5PlwuSAC8Ovl8uhMlu5F15TYHNqJxFoSMNcd%2FgS4kwbjA3SqAw6538vAY6pgH9yH03UVFGP67DbQSjjMpHVn7TUR%2B1kC3bClDgYNcFnqpYjLc0rF%2FdMvsiDht2L7Og5rIRrp1DMOTq4pMX6g7jb%2FXzRolno5bbwsgLTSWU0Zzp22hEFbRQMwViRy6KduDKZcEuUGDpOCUrHqPM6AB8rWDmRbcEGQ1CPW4JA2NjyaUoC3Zdv76zWmNEEqF3iMMMbQs5Um9P4A83M2M%2By%2F977pMaY7d7&X-Amz-Signature=779bf06e3f724ff446310dc82de23458d8e6415d97942d88884ecfe9c567d6c3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
