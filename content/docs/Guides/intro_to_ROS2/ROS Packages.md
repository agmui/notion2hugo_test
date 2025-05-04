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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65USGYN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAqq2dwhU%2FBVUrgzpJEJmPUzcm0BI4hqKDv8bAxUGNO0AiAbwaWAIHZFoKJJ6%2BGVP649FaMW7a9WmesQK14Wbr9JziqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4WDNiq4XdVg1O89KtwDfXQJX15J%2BqMTHoEwPnJqzCro4WLU%2FuFoHDxWzP8Scca6Q1UVM6XBzH59zmjP3a6axrdQrWhwgQ0FlFXICno%2FS3y%2F1w1MEK%2B0y8u0AxxqEpa7AOlIBL46xCcrgHh4eQ9AJ30kyKl8JtLcwIgduuRp%2F%2BDz%2FtSR%2BCwqffy83%2Fui9KaJ5gRPkdXgwwyBAge%2BQ2p4VpXhxukJIcGEzwF7rRuVSAgRkHEJaZRw070Qufz2tnB1pjDQ25zidi%2FGGlWnbUOWDQvWvayZXb3AnJg2YHQ0rSid4xgQOVDwsQlpF7vQbtu8q0ehsYYvP0eLG3PUTGWm1454xZbc36Qgo4AY75yVXFPOw9bvW7ysnlTm8Zjy84r4k3qbHB9aZrVNeA2ccC95F%2FVFmF1HbNjeW5QD3%2F4vxlgjzzpgBFF764hTi77nO3FatRfWALDjK1sKD5XaBUsL%2BLdBFzqv2iBBRBR3h%2FgTfnH9DPUSbAxUace6ikGHewTh41zJ3YeYbqJkqhd2iDIOuxUhvF19Treb%2BpGCKLU5kXYh1Z9sOKfShum4QEE2uwnne42OxArW9YDNP4wxtsqa45db0my%2ByptEQOJSIyCSW7luXFpkEZ41Ge1ZsHuWhqlSy4Ms4K3xs6BqH8AwiuvbwAY6pgEihq6pUa8vZ27PQdDw%2BfFLpLVfYP5Kq8zRAKFlN4JUclruwpoWaU9tqHCV75UP42rDCfV%2Fb6XlE8pwtY%2FAef9OUAxOYGydEJ%2FMu%2FA5tCtXpgx1XpfJxvw7fZLFzBHJAU7x0LpaV%2BfMsEafoKzK%2BlpJA4SyO6FwqP29j42cQP%2BeS6ggDkgMV9viSwKDaajHeladYUx9hfhgi3ZajyL9sX73WQp2eYP8&X-Amz-Signature=12b70ccf569a8bd1b194da9a4909579b65e552edded422f327ffbf59cf2f248f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65USGYN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAqq2dwhU%2FBVUrgzpJEJmPUzcm0BI4hqKDv8bAxUGNO0AiAbwaWAIHZFoKJJ6%2BGVP649FaMW7a9WmesQK14Wbr9JziqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4WDNiq4XdVg1O89KtwDfXQJX15J%2BqMTHoEwPnJqzCro4WLU%2FuFoHDxWzP8Scca6Q1UVM6XBzH59zmjP3a6axrdQrWhwgQ0FlFXICno%2FS3y%2F1w1MEK%2B0y8u0AxxqEpa7AOlIBL46xCcrgHh4eQ9AJ30kyKl8JtLcwIgduuRp%2F%2BDz%2FtSR%2BCwqffy83%2Fui9KaJ5gRPkdXgwwyBAge%2BQ2p4VpXhxukJIcGEzwF7rRuVSAgRkHEJaZRw070Qufz2tnB1pjDQ25zidi%2FGGlWnbUOWDQvWvayZXb3AnJg2YHQ0rSid4xgQOVDwsQlpF7vQbtu8q0ehsYYvP0eLG3PUTGWm1454xZbc36Qgo4AY75yVXFPOw9bvW7ysnlTm8Zjy84r4k3qbHB9aZrVNeA2ccC95F%2FVFmF1HbNjeW5QD3%2F4vxlgjzzpgBFF764hTi77nO3FatRfWALDjK1sKD5XaBUsL%2BLdBFzqv2iBBRBR3h%2FgTfnH9DPUSbAxUace6ikGHewTh41zJ3YeYbqJkqhd2iDIOuxUhvF19Treb%2BpGCKLU5kXYh1Z9sOKfShum4QEE2uwnne42OxArW9YDNP4wxtsqa45db0my%2ByptEQOJSIyCSW7luXFpkEZ41Ge1ZsHuWhqlSy4Ms4K3xs6BqH8AwiuvbwAY6pgEihq6pUa8vZ27PQdDw%2BfFLpLVfYP5Kq8zRAKFlN4JUclruwpoWaU9tqHCV75UP42rDCfV%2Fb6XlE8pwtY%2FAef9OUAxOYGydEJ%2FMu%2FA5tCtXpgx1XpfJxvw7fZLFzBHJAU7x0LpaV%2BfMsEafoKzK%2BlpJA4SyO6FwqP29j42cQP%2BeS6ggDkgMV9viSwKDaajHeladYUx9hfhgi3ZajyL9sX73WQp2eYP8&X-Amz-Signature=bac8a5d5a42b184b874ccc6886c05a05eaba4bd4399cf2a3aa4f82793563a4d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65USGYN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAqq2dwhU%2FBVUrgzpJEJmPUzcm0BI4hqKDv8bAxUGNO0AiAbwaWAIHZFoKJJ6%2BGVP649FaMW7a9WmesQK14Wbr9JziqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4WDNiq4XdVg1O89KtwDfXQJX15J%2BqMTHoEwPnJqzCro4WLU%2FuFoHDxWzP8Scca6Q1UVM6XBzH59zmjP3a6axrdQrWhwgQ0FlFXICno%2FS3y%2F1w1MEK%2B0y8u0AxxqEpa7AOlIBL46xCcrgHh4eQ9AJ30kyKl8JtLcwIgduuRp%2F%2BDz%2FtSR%2BCwqffy83%2Fui9KaJ5gRPkdXgwwyBAge%2BQ2p4VpXhxukJIcGEzwF7rRuVSAgRkHEJaZRw070Qufz2tnB1pjDQ25zidi%2FGGlWnbUOWDQvWvayZXb3AnJg2YHQ0rSid4xgQOVDwsQlpF7vQbtu8q0ehsYYvP0eLG3PUTGWm1454xZbc36Qgo4AY75yVXFPOw9bvW7ysnlTm8Zjy84r4k3qbHB9aZrVNeA2ccC95F%2FVFmF1HbNjeW5QD3%2F4vxlgjzzpgBFF764hTi77nO3FatRfWALDjK1sKD5XaBUsL%2BLdBFzqv2iBBRBR3h%2FgTfnH9DPUSbAxUace6ikGHewTh41zJ3YeYbqJkqhd2iDIOuxUhvF19Treb%2BpGCKLU5kXYh1Z9sOKfShum4QEE2uwnne42OxArW9YDNP4wxtsqa45db0my%2ByptEQOJSIyCSW7luXFpkEZ41Ge1ZsHuWhqlSy4Ms4K3xs6BqH8AwiuvbwAY6pgEihq6pUa8vZ27PQdDw%2BfFLpLVfYP5Kq8zRAKFlN4JUclruwpoWaU9tqHCV75UP42rDCfV%2Fb6XlE8pwtY%2FAef9OUAxOYGydEJ%2FMu%2FA5tCtXpgx1XpfJxvw7fZLFzBHJAU7x0LpaV%2BfMsEafoKzK%2BlpJA4SyO6FwqP29j42cQP%2BeS6ggDkgMV9viSwKDaajHeladYUx9hfhgi3ZajyL9sX73WQp2eYP8&X-Amz-Signature=3319c1ea1fc097ea4478f804d87f88914c016e95738c32ff01e3c6df773b204b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65USGYN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAqq2dwhU%2FBVUrgzpJEJmPUzcm0BI4hqKDv8bAxUGNO0AiAbwaWAIHZFoKJJ6%2BGVP649FaMW7a9WmesQK14Wbr9JziqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4WDNiq4XdVg1O89KtwDfXQJX15J%2BqMTHoEwPnJqzCro4WLU%2FuFoHDxWzP8Scca6Q1UVM6XBzH59zmjP3a6axrdQrWhwgQ0FlFXICno%2FS3y%2F1w1MEK%2B0y8u0AxxqEpa7AOlIBL46xCcrgHh4eQ9AJ30kyKl8JtLcwIgduuRp%2F%2BDz%2FtSR%2BCwqffy83%2Fui9KaJ5gRPkdXgwwyBAge%2BQ2p4VpXhxukJIcGEzwF7rRuVSAgRkHEJaZRw070Qufz2tnB1pjDQ25zidi%2FGGlWnbUOWDQvWvayZXb3AnJg2YHQ0rSid4xgQOVDwsQlpF7vQbtu8q0ehsYYvP0eLG3PUTGWm1454xZbc36Qgo4AY75yVXFPOw9bvW7ysnlTm8Zjy84r4k3qbHB9aZrVNeA2ccC95F%2FVFmF1HbNjeW5QD3%2F4vxlgjzzpgBFF764hTi77nO3FatRfWALDjK1sKD5XaBUsL%2BLdBFzqv2iBBRBR3h%2FgTfnH9DPUSbAxUace6ikGHewTh41zJ3YeYbqJkqhd2iDIOuxUhvF19Treb%2BpGCKLU5kXYh1Z9sOKfShum4QEE2uwnne42OxArW9YDNP4wxtsqa45db0my%2ByptEQOJSIyCSW7luXFpkEZ41Ge1ZsHuWhqlSy4Ms4K3xs6BqH8AwiuvbwAY6pgEihq6pUa8vZ27PQdDw%2BfFLpLVfYP5Kq8zRAKFlN4JUclruwpoWaU9tqHCV75UP42rDCfV%2Fb6XlE8pwtY%2FAef9OUAxOYGydEJ%2FMu%2FA5tCtXpgx1XpfJxvw7fZLFzBHJAU7x0LpaV%2BfMsEafoKzK%2BlpJA4SyO6FwqP29j42cQP%2BeS6ggDkgMV9viSwKDaajHeladYUx9hfhgi3ZajyL9sX73WQp2eYP8&X-Amz-Signature=b28227df0a59719d67bab8060f80421b2e529642f91ca4f40cae4643ce04676e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65USGYN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAqq2dwhU%2FBVUrgzpJEJmPUzcm0BI4hqKDv8bAxUGNO0AiAbwaWAIHZFoKJJ6%2BGVP649FaMW7a9WmesQK14Wbr9JziqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4WDNiq4XdVg1O89KtwDfXQJX15J%2BqMTHoEwPnJqzCro4WLU%2FuFoHDxWzP8Scca6Q1UVM6XBzH59zmjP3a6axrdQrWhwgQ0FlFXICno%2FS3y%2F1w1MEK%2B0y8u0AxxqEpa7AOlIBL46xCcrgHh4eQ9AJ30kyKl8JtLcwIgduuRp%2F%2BDz%2FtSR%2BCwqffy83%2Fui9KaJ5gRPkdXgwwyBAge%2BQ2p4VpXhxukJIcGEzwF7rRuVSAgRkHEJaZRw070Qufz2tnB1pjDQ25zidi%2FGGlWnbUOWDQvWvayZXb3AnJg2YHQ0rSid4xgQOVDwsQlpF7vQbtu8q0ehsYYvP0eLG3PUTGWm1454xZbc36Qgo4AY75yVXFPOw9bvW7ysnlTm8Zjy84r4k3qbHB9aZrVNeA2ccC95F%2FVFmF1HbNjeW5QD3%2F4vxlgjzzpgBFF764hTi77nO3FatRfWALDjK1sKD5XaBUsL%2BLdBFzqv2iBBRBR3h%2FgTfnH9DPUSbAxUace6ikGHewTh41zJ3YeYbqJkqhd2iDIOuxUhvF19Treb%2BpGCKLU5kXYh1Z9sOKfShum4QEE2uwnne42OxArW9YDNP4wxtsqa45db0my%2ByptEQOJSIyCSW7luXFpkEZ41Ge1ZsHuWhqlSy4Ms4K3xs6BqH8AwiuvbwAY6pgEihq6pUa8vZ27PQdDw%2BfFLpLVfYP5Kq8zRAKFlN4JUclruwpoWaU9tqHCV75UP42rDCfV%2Fb6XlE8pwtY%2FAef9OUAxOYGydEJ%2FMu%2FA5tCtXpgx1XpfJxvw7fZLFzBHJAU7x0LpaV%2BfMsEafoKzK%2BlpJA4SyO6FwqP29j42cQP%2BeS6ggDkgMV9viSwKDaajHeladYUx9hfhgi3ZajyL9sX73WQp2eYP8&X-Amz-Signature=851d7309fa6e6612173681bab8a5c09873ada9bc530bb10254b34af0d7955c05&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65USGYN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAqq2dwhU%2FBVUrgzpJEJmPUzcm0BI4hqKDv8bAxUGNO0AiAbwaWAIHZFoKJJ6%2BGVP649FaMW7a9WmesQK14Wbr9JziqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4WDNiq4XdVg1O89KtwDfXQJX15J%2BqMTHoEwPnJqzCro4WLU%2FuFoHDxWzP8Scca6Q1UVM6XBzH59zmjP3a6axrdQrWhwgQ0FlFXICno%2FS3y%2F1w1MEK%2B0y8u0AxxqEpa7AOlIBL46xCcrgHh4eQ9AJ30kyKl8JtLcwIgduuRp%2F%2BDz%2FtSR%2BCwqffy83%2Fui9KaJ5gRPkdXgwwyBAge%2BQ2p4VpXhxukJIcGEzwF7rRuVSAgRkHEJaZRw070Qufz2tnB1pjDQ25zidi%2FGGlWnbUOWDQvWvayZXb3AnJg2YHQ0rSid4xgQOVDwsQlpF7vQbtu8q0ehsYYvP0eLG3PUTGWm1454xZbc36Qgo4AY75yVXFPOw9bvW7ysnlTm8Zjy84r4k3qbHB9aZrVNeA2ccC95F%2FVFmF1HbNjeW5QD3%2F4vxlgjzzpgBFF764hTi77nO3FatRfWALDjK1sKD5XaBUsL%2BLdBFzqv2iBBRBR3h%2FgTfnH9DPUSbAxUace6ikGHewTh41zJ3YeYbqJkqhd2iDIOuxUhvF19Treb%2BpGCKLU5kXYh1Z9sOKfShum4QEE2uwnne42OxArW9YDNP4wxtsqa45db0my%2ByptEQOJSIyCSW7luXFpkEZ41Ge1ZsHuWhqlSy4Ms4K3xs6BqH8AwiuvbwAY6pgEihq6pUa8vZ27PQdDw%2BfFLpLVfYP5Kq8zRAKFlN4JUclruwpoWaU9tqHCV75UP42rDCfV%2Fb6XlE8pwtY%2FAef9OUAxOYGydEJ%2FMu%2FA5tCtXpgx1XpfJxvw7fZLFzBHJAU7x0LpaV%2BfMsEafoKzK%2BlpJA4SyO6FwqP29j42cQP%2BeS6ggDkgMV9viSwKDaajHeladYUx9hfhgi3ZajyL9sX73WQp2eYP8&X-Amz-Signature=eb73a7cf4e07bb1cd52eaf00f59f8d832a4fbc1dc1d59263afcf555e27f7f627&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X65USGYN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAqq2dwhU%2FBVUrgzpJEJmPUzcm0BI4hqKDv8bAxUGNO0AiAbwaWAIHZFoKJJ6%2BGVP649FaMW7a9WmesQK14Wbr9JziqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4WDNiq4XdVg1O89KtwDfXQJX15J%2BqMTHoEwPnJqzCro4WLU%2FuFoHDxWzP8Scca6Q1UVM6XBzH59zmjP3a6axrdQrWhwgQ0FlFXICno%2FS3y%2F1w1MEK%2B0y8u0AxxqEpa7AOlIBL46xCcrgHh4eQ9AJ30kyKl8JtLcwIgduuRp%2F%2BDz%2FtSR%2BCwqffy83%2Fui9KaJ5gRPkdXgwwyBAge%2BQ2p4VpXhxukJIcGEzwF7rRuVSAgRkHEJaZRw070Qufz2tnB1pjDQ25zidi%2FGGlWnbUOWDQvWvayZXb3AnJg2YHQ0rSid4xgQOVDwsQlpF7vQbtu8q0ehsYYvP0eLG3PUTGWm1454xZbc36Qgo4AY75yVXFPOw9bvW7ysnlTm8Zjy84r4k3qbHB9aZrVNeA2ccC95F%2FVFmF1HbNjeW5QD3%2F4vxlgjzzpgBFF764hTi77nO3FatRfWALDjK1sKD5XaBUsL%2BLdBFzqv2iBBRBR3h%2FgTfnH9DPUSbAxUace6ikGHewTh41zJ3YeYbqJkqhd2iDIOuxUhvF19Treb%2BpGCKLU5kXYh1Z9sOKfShum4QEE2uwnne42OxArW9YDNP4wxtsqa45db0my%2ByptEQOJSIyCSW7luXFpkEZ41Ge1ZsHuWhqlSy4Ms4K3xs6BqH8AwiuvbwAY6pgEihq6pUa8vZ27PQdDw%2BfFLpLVfYP5Kq8zRAKFlN4JUclruwpoWaU9tqHCV75UP42rDCfV%2Fb6XlE8pwtY%2FAef9OUAxOYGydEJ%2FMu%2FA5tCtXpgx1XpfJxvw7fZLFzBHJAU7x0LpaV%2BfMsEafoKzK%2BlpJA4SyO6FwqP29j42cQP%2BeS6ggDkgMV9viSwKDaajHeladYUx9hfhgi3ZajyL9sX73WQp2eYP8&X-Amz-Signature=5b051d31c2722096879e9f46256d092c4dd4f7314de7251227847986bd399232&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
