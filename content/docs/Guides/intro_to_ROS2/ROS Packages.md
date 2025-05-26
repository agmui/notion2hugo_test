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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q7RE4X%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC7DN8rngBs7gpyf%2F2mHn2pvinO5sbSxGIRIY2AcxfOBQIhAP7yRhpeQ8%2Fj7ERU%2F%2BTRDBsi9hQuW97yJ7uBrbI3cZHYKv8DCD8QABoMNjM3NDIzMTgzODA1IgxwUhG9z5lcXog1aVgq3ANjFP5M9gj8zVq9TlvbJs2qgxzJ%2BtQFdrGI5DwIWGowomWbdVLqVp%2BlcPi0xG722xdK%2BEXkKmiLiTOc4Q%2Biobr8JvPHieogVXX0OYGF5IdTmlw4f8wBJ%2BsgeBZOMZKO%2BNP9E6dpisyrH87MfJ8O41DnGqkAeiI75FaTgDZhB%2BLY4ttyx4KYvOZwlnAUQ%2FlDR4UVuHG5OzKWn%2FNjnAPNzXpFCDeP%2BAwA%2Bz7fmzT9py5xJq211jkETKvLY4GeP%2Fezpid11Xt0sBTGeWuAYxK%2FtPxYdl7ikjfU8akaTyw4fFi2ObPsTM76tg4%2FJy7ycMEUpyAhuWOupe7svFMYUuARdl1D%2B9%2F%2B2xMDLWS%2Fn1Gk6u0hJyZD%2FKIhNwYM8kpkB2te8Na3Ftpk9v22o%2F5TYjR18IzbnbWGMXqvWT%2FouXXtI%2FBCvZv24F3%2Fj6f8RvFBd1w75kfBTKrzTqS9Vqphu18fb1qjk%2BCuHYq%2FIUUsYMh6WIfpPRS2TMmmXCnNmIArKRlT7C6ObSzfM6YK5O3knrNBWiPAPrh0ushC1Ut%2BiFt%2FtSLWY2mnrlnN%2FYuBKNVGPmpMWM2is1jInjUmgtadsahgluB3ddDHvWpTpM8sLoUVLgJKDo2de6amxcVeOIY91TD8jtDBBjqkAfzEGrA1dUpXx6UBu%2BpPLbcOSgi0tZs%2Fy9Ce%2FbQ4gqjEirVEF%2FtzjWpa7DHuDFFFj9aNvHQEp6EwXDPSEKCYc%2FS4dx%2BJcJoOGggMT8hau74pgEpvVq4WSZc4uJkCL2xk59ovp4XEpcoCLteolmHvG%2FRNObWF1eNb1leIsxR5BogR0%2Fm17e2OFNJuHpEMgSwRDQ0UbbFv7CTE%2B7RUvkyQ%2BPG2u6pW&X-Amz-Signature=44c05ebc188ba42fbd5c6421848f05617a7fe852ff4e714a531a6909456759db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q7RE4X%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC7DN8rngBs7gpyf%2F2mHn2pvinO5sbSxGIRIY2AcxfOBQIhAP7yRhpeQ8%2Fj7ERU%2F%2BTRDBsi9hQuW97yJ7uBrbI3cZHYKv8DCD8QABoMNjM3NDIzMTgzODA1IgxwUhG9z5lcXog1aVgq3ANjFP5M9gj8zVq9TlvbJs2qgxzJ%2BtQFdrGI5DwIWGowomWbdVLqVp%2BlcPi0xG722xdK%2BEXkKmiLiTOc4Q%2Biobr8JvPHieogVXX0OYGF5IdTmlw4f8wBJ%2BsgeBZOMZKO%2BNP9E6dpisyrH87MfJ8O41DnGqkAeiI75FaTgDZhB%2BLY4ttyx4KYvOZwlnAUQ%2FlDR4UVuHG5OzKWn%2FNjnAPNzXpFCDeP%2BAwA%2Bz7fmzT9py5xJq211jkETKvLY4GeP%2Fezpid11Xt0sBTGeWuAYxK%2FtPxYdl7ikjfU8akaTyw4fFi2ObPsTM76tg4%2FJy7ycMEUpyAhuWOupe7svFMYUuARdl1D%2B9%2F%2B2xMDLWS%2Fn1Gk6u0hJyZD%2FKIhNwYM8kpkB2te8Na3Ftpk9v22o%2F5TYjR18IzbnbWGMXqvWT%2FouXXtI%2FBCvZv24F3%2Fj6f8RvFBd1w75kfBTKrzTqS9Vqphu18fb1qjk%2BCuHYq%2FIUUsYMh6WIfpPRS2TMmmXCnNmIArKRlT7C6ObSzfM6YK5O3knrNBWiPAPrh0ushC1Ut%2BiFt%2FtSLWY2mnrlnN%2FYuBKNVGPmpMWM2is1jInjUmgtadsahgluB3ddDHvWpTpM8sLoUVLgJKDo2de6amxcVeOIY91TD8jtDBBjqkAfzEGrA1dUpXx6UBu%2BpPLbcOSgi0tZs%2Fy9Ce%2FbQ4gqjEirVEF%2FtzjWpa7DHuDFFFj9aNvHQEp6EwXDPSEKCYc%2FS4dx%2BJcJoOGggMT8hau74pgEpvVq4WSZc4uJkCL2xk59ovp4XEpcoCLteolmHvG%2FRNObWF1eNb1leIsxR5BogR0%2Fm17e2OFNJuHpEMgSwRDQ0UbbFv7CTE%2B7RUvkyQ%2BPG2u6pW&X-Amz-Signature=838ab53818923893c07eb489e8288964bceae876577e2b6fdab183be07d0e3f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q7RE4X%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC7DN8rngBs7gpyf%2F2mHn2pvinO5sbSxGIRIY2AcxfOBQIhAP7yRhpeQ8%2Fj7ERU%2F%2BTRDBsi9hQuW97yJ7uBrbI3cZHYKv8DCD8QABoMNjM3NDIzMTgzODA1IgxwUhG9z5lcXog1aVgq3ANjFP5M9gj8zVq9TlvbJs2qgxzJ%2BtQFdrGI5DwIWGowomWbdVLqVp%2BlcPi0xG722xdK%2BEXkKmiLiTOc4Q%2Biobr8JvPHieogVXX0OYGF5IdTmlw4f8wBJ%2BsgeBZOMZKO%2BNP9E6dpisyrH87MfJ8O41DnGqkAeiI75FaTgDZhB%2BLY4ttyx4KYvOZwlnAUQ%2FlDR4UVuHG5OzKWn%2FNjnAPNzXpFCDeP%2BAwA%2Bz7fmzT9py5xJq211jkETKvLY4GeP%2Fezpid11Xt0sBTGeWuAYxK%2FtPxYdl7ikjfU8akaTyw4fFi2ObPsTM76tg4%2FJy7ycMEUpyAhuWOupe7svFMYUuARdl1D%2B9%2F%2B2xMDLWS%2Fn1Gk6u0hJyZD%2FKIhNwYM8kpkB2te8Na3Ftpk9v22o%2F5TYjR18IzbnbWGMXqvWT%2FouXXtI%2FBCvZv24F3%2Fj6f8RvFBd1w75kfBTKrzTqS9Vqphu18fb1qjk%2BCuHYq%2FIUUsYMh6WIfpPRS2TMmmXCnNmIArKRlT7C6ObSzfM6YK5O3knrNBWiPAPrh0ushC1Ut%2BiFt%2FtSLWY2mnrlnN%2FYuBKNVGPmpMWM2is1jInjUmgtadsahgluB3ddDHvWpTpM8sLoUVLgJKDo2de6amxcVeOIY91TD8jtDBBjqkAfzEGrA1dUpXx6UBu%2BpPLbcOSgi0tZs%2Fy9Ce%2FbQ4gqjEirVEF%2FtzjWpa7DHuDFFFj9aNvHQEp6EwXDPSEKCYc%2FS4dx%2BJcJoOGggMT8hau74pgEpvVq4WSZc4uJkCL2xk59ovp4XEpcoCLteolmHvG%2FRNObWF1eNb1leIsxR5BogR0%2Fm17e2OFNJuHpEMgSwRDQ0UbbFv7CTE%2B7RUvkyQ%2BPG2u6pW&X-Amz-Signature=11ff5f33716b2bbdd49a4e63ae5839528fce582ef5b6306809a14e5e2d55d741&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q7RE4X%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC7DN8rngBs7gpyf%2F2mHn2pvinO5sbSxGIRIY2AcxfOBQIhAP7yRhpeQ8%2Fj7ERU%2F%2BTRDBsi9hQuW97yJ7uBrbI3cZHYKv8DCD8QABoMNjM3NDIzMTgzODA1IgxwUhG9z5lcXog1aVgq3ANjFP5M9gj8zVq9TlvbJs2qgxzJ%2BtQFdrGI5DwIWGowomWbdVLqVp%2BlcPi0xG722xdK%2BEXkKmiLiTOc4Q%2Biobr8JvPHieogVXX0OYGF5IdTmlw4f8wBJ%2BsgeBZOMZKO%2BNP9E6dpisyrH87MfJ8O41DnGqkAeiI75FaTgDZhB%2BLY4ttyx4KYvOZwlnAUQ%2FlDR4UVuHG5OzKWn%2FNjnAPNzXpFCDeP%2BAwA%2Bz7fmzT9py5xJq211jkETKvLY4GeP%2Fezpid11Xt0sBTGeWuAYxK%2FtPxYdl7ikjfU8akaTyw4fFi2ObPsTM76tg4%2FJy7ycMEUpyAhuWOupe7svFMYUuARdl1D%2B9%2F%2B2xMDLWS%2Fn1Gk6u0hJyZD%2FKIhNwYM8kpkB2te8Na3Ftpk9v22o%2F5TYjR18IzbnbWGMXqvWT%2FouXXtI%2FBCvZv24F3%2Fj6f8RvFBd1w75kfBTKrzTqS9Vqphu18fb1qjk%2BCuHYq%2FIUUsYMh6WIfpPRS2TMmmXCnNmIArKRlT7C6ObSzfM6YK5O3knrNBWiPAPrh0ushC1Ut%2BiFt%2FtSLWY2mnrlnN%2FYuBKNVGPmpMWM2is1jInjUmgtadsahgluB3ddDHvWpTpM8sLoUVLgJKDo2de6amxcVeOIY91TD8jtDBBjqkAfzEGrA1dUpXx6UBu%2BpPLbcOSgi0tZs%2Fy9Ce%2FbQ4gqjEirVEF%2FtzjWpa7DHuDFFFj9aNvHQEp6EwXDPSEKCYc%2FS4dx%2BJcJoOGggMT8hau74pgEpvVq4WSZc4uJkCL2xk59ovp4XEpcoCLteolmHvG%2FRNObWF1eNb1leIsxR5BogR0%2Fm17e2OFNJuHpEMgSwRDQ0UbbFv7CTE%2B7RUvkyQ%2BPG2u6pW&X-Amz-Signature=f233d63b5eaef0bb7235257d024697363dc407bc56c7770d75aa8d22f5265b94&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q7RE4X%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC7DN8rngBs7gpyf%2F2mHn2pvinO5sbSxGIRIY2AcxfOBQIhAP7yRhpeQ8%2Fj7ERU%2F%2BTRDBsi9hQuW97yJ7uBrbI3cZHYKv8DCD8QABoMNjM3NDIzMTgzODA1IgxwUhG9z5lcXog1aVgq3ANjFP5M9gj8zVq9TlvbJs2qgxzJ%2BtQFdrGI5DwIWGowomWbdVLqVp%2BlcPi0xG722xdK%2BEXkKmiLiTOc4Q%2Biobr8JvPHieogVXX0OYGF5IdTmlw4f8wBJ%2BsgeBZOMZKO%2BNP9E6dpisyrH87MfJ8O41DnGqkAeiI75FaTgDZhB%2BLY4ttyx4KYvOZwlnAUQ%2FlDR4UVuHG5OzKWn%2FNjnAPNzXpFCDeP%2BAwA%2Bz7fmzT9py5xJq211jkETKvLY4GeP%2Fezpid11Xt0sBTGeWuAYxK%2FtPxYdl7ikjfU8akaTyw4fFi2ObPsTM76tg4%2FJy7ycMEUpyAhuWOupe7svFMYUuARdl1D%2B9%2F%2B2xMDLWS%2Fn1Gk6u0hJyZD%2FKIhNwYM8kpkB2te8Na3Ftpk9v22o%2F5TYjR18IzbnbWGMXqvWT%2FouXXtI%2FBCvZv24F3%2Fj6f8RvFBd1w75kfBTKrzTqS9Vqphu18fb1qjk%2BCuHYq%2FIUUsYMh6WIfpPRS2TMmmXCnNmIArKRlT7C6ObSzfM6YK5O3knrNBWiPAPrh0ushC1Ut%2BiFt%2FtSLWY2mnrlnN%2FYuBKNVGPmpMWM2is1jInjUmgtadsahgluB3ddDHvWpTpM8sLoUVLgJKDo2de6amxcVeOIY91TD8jtDBBjqkAfzEGrA1dUpXx6UBu%2BpPLbcOSgi0tZs%2Fy9Ce%2FbQ4gqjEirVEF%2FtzjWpa7DHuDFFFj9aNvHQEp6EwXDPSEKCYc%2FS4dx%2BJcJoOGggMT8hau74pgEpvVq4WSZc4uJkCL2xk59ovp4XEpcoCLteolmHvG%2FRNObWF1eNb1leIsxR5BogR0%2Fm17e2OFNJuHpEMgSwRDQ0UbbFv7CTE%2B7RUvkyQ%2BPG2u6pW&X-Amz-Signature=f686bf119716cb0285b646a76c0692d7a9c6676de87ba0fbbecc9101789cc574&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q7RE4X%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC7DN8rngBs7gpyf%2F2mHn2pvinO5sbSxGIRIY2AcxfOBQIhAP7yRhpeQ8%2Fj7ERU%2F%2BTRDBsi9hQuW97yJ7uBrbI3cZHYKv8DCD8QABoMNjM3NDIzMTgzODA1IgxwUhG9z5lcXog1aVgq3ANjFP5M9gj8zVq9TlvbJs2qgxzJ%2BtQFdrGI5DwIWGowomWbdVLqVp%2BlcPi0xG722xdK%2BEXkKmiLiTOc4Q%2Biobr8JvPHieogVXX0OYGF5IdTmlw4f8wBJ%2BsgeBZOMZKO%2BNP9E6dpisyrH87MfJ8O41DnGqkAeiI75FaTgDZhB%2BLY4ttyx4KYvOZwlnAUQ%2FlDR4UVuHG5OzKWn%2FNjnAPNzXpFCDeP%2BAwA%2Bz7fmzT9py5xJq211jkETKvLY4GeP%2Fezpid11Xt0sBTGeWuAYxK%2FtPxYdl7ikjfU8akaTyw4fFi2ObPsTM76tg4%2FJy7ycMEUpyAhuWOupe7svFMYUuARdl1D%2B9%2F%2B2xMDLWS%2Fn1Gk6u0hJyZD%2FKIhNwYM8kpkB2te8Na3Ftpk9v22o%2F5TYjR18IzbnbWGMXqvWT%2FouXXtI%2FBCvZv24F3%2Fj6f8RvFBd1w75kfBTKrzTqS9Vqphu18fb1qjk%2BCuHYq%2FIUUsYMh6WIfpPRS2TMmmXCnNmIArKRlT7C6ObSzfM6YK5O3knrNBWiPAPrh0ushC1Ut%2BiFt%2FtSLWY2mnrlnN%2FYuBKNVGPmpMWM2is1jInjUmgtadsahgluB3ddDHvWpTpM8sLoUVLgJKDo2de6amxcVeOIY91TD8jtDBBjqkAfzEGrA1dUpXx6UBu%2BpPLbcOSgi0tZs%2Fy9Ce%2FbQ4gqjEirVEF%2FtzjWpa7DHuDFFFj9aNvHQEp6EwXDPSEKCYc%2FS4dx%2BJcJoOGggMT8hau74pgEpvVq4WSZc4uJkCL2xk59ovp4XEpcoCLteolmHvG%2FRNObWF1eNb1leIsxR5BogR0%2Fm17e2OFNJuHpEMgSwRDQ0UbbFv7CTE%2B7RUvkyQ%2BPG2u6pW&X-Amz-Signature=cf3f88429de3cee033930e6809917295e43c33e788997d4c9f0ce78439e0232f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Q7RE4X%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC7DN8rngBs7gpyf%2F2mHn2pvinO5sbSxGIRIY2AcxfOBQIhAP7yRhpeQ8%2Fj7ERU%2F%2BTRDBsi9hQuW97yJ7uBrbI3cZHYKv8DCD8QABoMNjM3NDIzMTgzODA1IgxwUhG9z5lcXog1aVgq3ANjFP5M9gj8zVq9TlvbJs2qgxzJ%2BtQFdrGI5DwIWGowomWbdVLqVp%2BlcPi0xG722xdK%2BEXkKmiLiTOc4Q%2Biobr8JvPHieogVXX0OYGF5IdTmlw4f8wBJ%2BsgeBZOMZKO%2BNP9E6dpisyrH87MfJ8O41DnGqkAeiI75FaTgDZhB%2BLY4ttyx4KYvOZwlnAUQ%2FlDR4UVuHG5OzKWn%2FNjnAPNzXpFCDeP%2BAwA%2Bz7fmzT9py5xJq211jkETKvLY4GeP%2Fezpid11Xt0sBTGeWuAYxK%2FtPxYdl7ikjfU8akaTyw4fFi2ObPsTM76tg4%2FJy7ycMEUpyAhuWOupe7svFMYUuARdl1D%2B9%2F%2B2xMDLWS%2Fn1Gk6u0hJyZD%2FKIhNwYM8kpkB2te8Na3Ftpk9v22o%2F5TYjR18IzbnbWGMXqvWT%2FouXXtI%2FBCvZv24F3%2Fj6f8RvFBd1w75kfBTKrzTqS9Vqphu18fb1qjk%2BCuHYq%2FIUUsYMh6WIfpPRS2TMmmXCnNmIArKRlT7C6ObSzfM6YK5O3knrNBWiPAPrh0ushC1Ut%2BiFt%2FtSLWY2mnrlnN%2FYuBKNVGPmpMWM2is1jInjUmgtadsahgluB3ddDHvWpTpM8sLoUVLgJKDo2de6amxcVeOIY91TD8jtDBBjqkAfzEGrA1dUpXx6UBu%2BpPLbcOSgi0tZs%2Fy9Ce%2FbQ4gqjEirVEF%2FtzjWpa7DHuDFFFj9aNvHQEp6EwXDPSEKCYc%2FS4dx%2BJcJoOGggMT8hau74pgEpvVq4WSZc4uJkCL2xk59ovp4XEpcoCLteolmHvG%2FRNObWF1eNb1leIsxR5BogR0%2Fm17e2OFNJuHpEMgSwRDQ0UbbFv7CTE%2B7RUvkyQ%2BPG2u6pW&X-Amz-Signature=aa90660b8344d88e72d7e513b0ee63e0dc1d4ea240848d5986abecf54d7241e1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
