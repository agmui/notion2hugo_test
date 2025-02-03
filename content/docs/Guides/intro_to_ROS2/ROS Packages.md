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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDTZS3B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHP75Y2Rj40VqlGPw3vRjAKfHekqoE7iG1rFMYnlKDL8AiEA15QVexvQgKwpajAwRPkxUSGbXkHe69imB63%2Fc%2BRK16sq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBjZyLQMyG1Ix2HlSSrcAwFQW4p5s4gGK66TEduMRv9wI4%2F3CgOLhkGk2YrGqXdPUYUqrrFz1fpdhZg02uSKKPpgoMGNrsmCX77SgdfVRxbL%2FWduMN%2F9JtxqTElBJQvs%2BOsbRlYw8yZPT11A7r6OSVs3gNfHzNwGV0DJLghFHQjwuYT8eusKxzd9prCDPWF7uwBqQtzvNA97hvyriO9oR%2FCL82IS3kWjNyXgqD6wDQfZi5F3PZkCoB99e3e1ZZsTqiRE39t02QRZAoL%2BVTa1K0669r2O6Mk9LZ90XP9T9%2FDluFTr%2BfDckhnB%2F7ympswPkdFZ8YJWDusqXSLy0XoXVqbbCLosNRKTUbFyWaQaVQfar6C8IaHbq8%2BiiSInaUzAzM1sddNlBHIJi4GY4F1u%2Bq7iPdtJxiuUDi1Ha2Hp0k0pW7QPulGGXJQt8x2flSKs4ac1QsJ02y4bHDLJcZBhYH5%2Bq887r9Qt3eHk1F1fpvDx6W5EtYp%2B9xlmNqnQVVg5vXjPAJ8vx8f3vPG7V%2F1%2BuGAaUR3ZldlatbHTX%2BM7b7RNcqUDqMLGPuvmjGgPs%2FYk%2Fcw0ny6Mlv%2FI1aBIRgSSaUb8jZHrIWH89%2Bux6gfdgc5sDpmRvFT0Y6zFRMQrxL2u91rYmyAdNeABVVRAMObegb0GOqUBsNqLKAIh5SnsEzgL8U85PJrYHZ9vZ4mGPVLFyltyI8b3eKLc0MVbfhG%2BH0FVyV%2BRp%2FCVCgZLfglpzRrCQUXuZ3lu6cnM5ASMnd8hNiLTI60jXgefO5kESKbej6QhttefEadcgiBV%2FPRPFYraHP3wXcALNayeXCvVRa%2BAr0SecSHB8xNDoDqWs%2BXU7dBO17kD9LFxeMQnhSwCXWlMxMBHUV3WLf%2F5&X-Amz-Signature=043fccb6b72b0fd2a267be20f9b93f3d56f7fb0a9d9bb994723cc5ff3ca25dab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDTZS3B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHP75Y2Rj40VqlGPw3vRjAKfHekqoE7iG1rFMYnlKDL8AiEA15QVexvQgKwpajAwRPkxUSGbXkHe69imB63%2Fc%2BRK16sq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBjZyLQMyG1Ix2HlSSrcAwFQW4p5s4gGK66TEduMRv9wI4%2F3CgOLhkGk2YrGqXdPUYUqrrFz1fpdhZg02uSKKPpgoMGNrsmCX77SgdfVRxbL%2FWduMN%2F9JtxqTElBJQvs%2BOsbRlYw8yZPT11A7r6OSVs3gNfHzNwGV0DJLghFHQjwuYT8eusKxzd9prCDPWF7uwBqQtzvNA97hvyriO9oR%2FCL82IS3kWjNyXgqD6wDQfZi5F3PZkCoB99e3e1ZZsTqiRE39t02QRZAoL%2BVTa1K0669r2O6Mk9LZ90XP9T9%2FDluFTr%2BfDckhnB%2F7ympswPkdFZ8YJWDusqXSLy0XoXVqbbCLosNRKTUbFyWaQaVQfar6C8IaHbq8%2BiiSInaUzAzM1sddNlBHIJi4GY4F1u%2Bq7iPdtJxiuUDi1Ha2Hp0k0pW7QPulGGXJQt8x2flSKs4ac1QsJ02y4bHDLJcZBhYH5%2Bq887r9Qt3eHk1F1fpvDx6W5EtYp%2B9xlmNqnQVVg5vXjPAJ8vx8f3vPG7V%2F1%2BuGAaUR3ZldlatbHTX%2BM7b7RNcqUDqMLGPuvmjGgPs%2FYk%2Fcw0ny6Mlv%2FI1aBIRgSSaUb8jZHrIWH89%2Bux6gfdgc5sDpmRvFT0Y6zFRMQrxL2u91rYmyAdNeABVVRAMObegb0GOqUBsNqLKAIh5SnsEzgL8U85PJrYHZ9vZ4mGPVLFyltyI8b3eKLc0MVbfhG%2BH0FVyV%2BRp%2FCVCgZLfglpzRrCQUXuZ3lu6cnM5ASMnd8hNiLTI60jXgefO5kESKbej6QhttefEadcgiBV%2FPRPFYraHP3wXcALNayeXCvVRa%2BAr0SecSHB8xNDoDqWs%2BXU7dBO17kD9LFxeMQnhSwCXWlMxMBHUV3WLf%2F5&X-Amz-Signature=ac9e81a31722c9e9a647ec40e50b77b51fbaed4a8e911753ed44ec588ef604aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDTZS3B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHP75Y2Rj40VqlGPw3vRjAKfHekqoE7iG1rFMYnlKDL8AiEA15QVexvQgKwpajAwRPkxUSGbXkHe69imB63%2Fc%2BRK16sq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBjZyLQMyG1Ix2HlSSrcAwFQW4p5s4gGK66TEduMRv9wI4%2F3CgOLhkGk2YrGqXdPUYUqrrFz1fpdhZg02uSKKPpgoMGNrsmCX77SgdfVRxbL%2FWduMN%2F9JtxqTElBJQvs%2BOsbRlYw8yZPT11A7r6OSVs3gNfHzNwGV0DJLghFHQjwuYT8eusKxzd9prCDPWF7uwBqQtzvNA97hvyriO9oR%2FCL82IS3kWjNyXgqD6wDQfZi5F3PZkCoB99e3e1ZZsTqiRE39t02QRZAoL%2BVTa1K0669r2O6Mk9LZ90XP9T9%2FDluFTr%2BfDckhnB%2F7ympswPkdFZ8YJWDusqXSLy0XoXVqbbCLosNRKTUbFyWaQaVQfar6C8IaHbq8%2BiiSInaUzAzM1sddNlBHIJi4GY4F1u%2Bq7iPdtJxiuUDi1Ha2Hp0k0pW7QPulGGXJQt8x2flSKs4ac1QsJ02y4bHDLJcZBhYH5%2Bq887r9Qt3eHk1F1fpvDx6W5EtYp%2B9xlmNqnQVVg5vXjPAJ8vx8f3vPG7V%2F1%2BuGAaUR3ZldlatbHTX%2BM7b7RNcqUDqMLGPuvmjGgPs%2FYk%2Fcw0ny6Mlv%2FI1aBIRgSSaUb8jZHrIWH89%2Bux6gfdgc5sDpmRvFT0Y6zFRMQrxL2u91rYmyAdNeABVVRAMObegb0GOqUBsNqLKAIh5SnsEzgL8U85PJrYHZ9vZ4mGPVLFyltyI8b3eKLc0MVbfhG%2BH0FVyV%2BRp%2FCVCgZLfglpzRrCQUXuZ3lu6cnM5ASMnd8hNiLTI60jXgefO5kESKbej6QhttefEadcgiBV%2FPRPFYraHP3wXcALNayeXCvVRa%2BAr0SecSHB8xNDoDqWs%2BXU7dBO17kD9LFxeMQnhSwCXWlMxMBHUV3WLf%2F5&X-Amz-Signature=5158246df993663e186ea9742fd82e86b2039fc7aece3853f4fba608dad68f90&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDTZS3B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHP75Y2Rj40VqlGPw3vRjAKfHekqoE7iG1rFMYnlKDL8AiEA15QVexvQgKwpajAwRPkxUSGbXkHe69imB63%2Fc%2BRK16sq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBjZyLQMyG1Ix2HlSSrcAwFQW4p5s4gGK66TEduMRv9wI4%2F3CgOLhkGk2YrGqXdPUYUqrrFz1fpdhZg02uSKKPpgoMGNrsmCX77SgdfVRxbL%2FWduMN%2F9JtxqTElBJQvs%2BOsbRlYw8yZPT11A7r6OSVs3gNfHzNwGV0DJLghFHQjwuYT8eusKxzd9prCDPWF7uwBqQtzvNA97hvyriO9oR%2FCL82IS3kWjNyXgqD6wDQfZi5F3PZkCoB99e3e1ZZsTqiRE39t02QRZAoL%2BVTa1K0669r2O6Mk9LZ90XP9T9%2FDluFTr%2BfDckhnB%2F7ympswPkdFZ8YJWDusqXSLy0XoXVqbbCLosNRKTUbFyWaQaVQfar6C8IaHbq8%2BiiSInaUzAzM1sddNlBHIJi4GY4F1u%2Bq7iPdtJxiuUDi1Ha2Hp0k0pW7QPulGGXJQt8x2flSKs4ac1QsJ02y4bHDLJcZBhYH5%2Bq887r9Qt3eHk1F1fpvDx6W5EtYp%2B9xlmNqnQVVg5vXjPAJ8vx8f3vPG7V%2F1%2BuGAaUR3ZldlatbHTX%2BM7b7RNcqUDqMLGPuvmjGgPs%2FYk%2Fcw0ny6Mlv%2FI1aBIRgSSaUb8jZHrIWH89%2Bux6gfdgc5sDpmRvFT0Y6zFRMQrxL2u91rYmyAdNeABVVRAMObegb0GOqUBsNqLKAIh5SnsEzgL8U85PJrYHZ9vZ4mGPVLFyltyI8b3eKLc0MVbfhG%2BH0FVyV%2BRp%2FCVCgZLfglpzRrCQUXuZ3lu6cnM5ASMnd8hNiLTI60jXgefO5kESKbej6QhttefEadcgiBV%2FPRPFYraHP3wXcALNayeXCvVRa%2BAr0SecSHB8xNDoDqWs%2BXU7dBO17kD9LFxeMQnhSwCXWlMxMBHUV3WLf%2F5&X-Amz-Signature=589d3aaf5661354db3a2baec7d0d313d980cc00a67bb5a9844b8e0018bae3bc9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDTZS3B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHP75Y2Rj40VqlGPw3vRjAKfHekqoE7iG1rFMYnlKDL8AiEA15QVexvQgKwpajAwRPkxUSGbXkHe69imB63%2Fc%2BRK16sq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBjZyLQMyG1Ix2HlSSrcAwFQW4p5s4gGK66TEduMRv9wI4%2F3CgOLhkGk2YrGqXdPUYUqrrFz1fpdhZg02uSKKPpgoMGNrsmCX77SgdfVRxbL%2FWduMN%2F9JtxqTElBJQvs%2BOsbRlYw8yZPT11A7r6OSVs3gNfHzNwGV0DJLghFHQjwuYT8eusKxzd9prCDPWF7uwBqQtzvNA97hvyriO9oR%2FCL82IS3kWjNyXgqD6wDQfZi5F3PZkCoB99e3e1ZZsTqiRE39t02QRZAoL%2BVTa1K0669r2O6Mk9LZ90XP9T9%2FDluFTr%2BfDckhnB%2F7ympswPkdFZ8YJWDusqXSLy0XoXVqbbCLosNRKTUbFyWaQaVQfar6C8IaHbq8%2BiiSInaUzAzM1sddNlBHIJi4GY4F1u%2Bq7iPdtJxiuUDi1Ha2Hp0k0pW7QPulGGXJQt8x2flSKs4ac1QsJ02y4bHDLJcZBhYH5%2Bq887r9Qt3eHk1F1fpvDx6W5EtYp%2B9xlmNqnQVVg5vXjPAJ8vx8f3vPG7V%2F1%2BuGAaUR3ZldlatbHTX%2BM7b7RNcqUDqMLGPuvmjGgPs%2FYk%2Fcw0ny6Mlv%2FI1aBIRgSSaUb8jZHrIWH89%2Bux6gfdgc5sDpmRvFT0Y6zFRMQrxL2u91rYmyAdNeABVVRAMObegb0GOqUBsNqLKAIh5SnsEzgL8U85PJrYHZ9vZ4mGPVLFyltyI8b3eKLc0MVbfhG%2BH0FVyV%2BRp%2FCVCgZLfglpzRrCQUXuZ3lu6cnM5ASMnd8hNiLTI60jXgefO5kESKbej6QhttefEadcgiBV%2FPRPFYraHP3wXcALNayeXCvVRa%2BAr0SecSHB8xNDoDqWs%2BXU7dBO17kD9LFxeMQnhSwCXWlMxMBHUV3WLf%2F5&X-Amz-Signature=3c85c53392428b9125ec883be45ff8949d1d9ab5f0851bf6301792454c0c703b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDTZS3B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHP75Y2Rj40VqlGPw3vRjAKfHekqoE7iG1rFMYnlKDL8AiEA15QVexvQgKwpajAwRPkxUSGbXkHe69imB63%2Fc%2BRK16sq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBjZyLQMyG1Ix2HlSSrcAwFQW4p5s4gGK66TEduMRv9wI4%2F3CgOLhkGk2YrGqXdPUYUqrrFz1fpdhZg02uSKKPpgoMGNrsmCX77SgdfVRxbL%2FWduMN%2F9JtxqTElBJQvs%2BOsbRlYw8yZPT11A7r6OSVs3gNfHzNwGV0DJLghFHQjwuYT8eusKxzd9prCDPWF7uwBqQtzvNA97hvyriO9oR%2FCL82IS3kWjNyXgqD6wDQfZi5F3PZkCoB99e3e1ZZsTqiRE39t02QRZAoL%2BVTa1K0669r2O6Mk9LZ90XP9T9%2FDluFTr%2BfDckhnB%2F7ympswPkdFZ8YJWDusqXSLy0XoXVqbbCLosNRKTUbFyWaQaVQfar6C8IaHbq8%2BiiSInaUzAzM1sddNlBHIJi4GY4F1u%2Bq7iPdtJxiuUDi1Ha2Hp0k0pW7QPulGGXJQt8x2flSKs4ac1QsJ02y4bHDLJcZBhYH5%2Bq887r9Qt3eHk1F1fpvDx6W5EtYp%2B9xlmNqnQVVg5vXjPAJ8vx8f3vPG7V%2F1%2BuGAaUR3ZldlatbHTX%2BM7b7RNcqUDqMLGPuvmjGgPs%2FYk%2Fcw0ny6Mlv%2FI1aBIRgSSaUb8jZHrIWH89%2Bux6gfdgc5sDpmRvFT0Y6zFRMQrxL2u91rYmyAdNeABVVRAMObegb0GOqUBsNqLKAIh5SnsEzgL8U85PJrYHZ9vZ4mGPVLFyltyI8b3eKLc0MVbfhG%2BH0FVyV%2BRp%2FCVCgZLfglpzRrCQUXuZ3lu6cnM5ASMnd8hNiLTI60jXgefO5kESKbej6QhttefEadcgiBV%2FPRPFYraHP3wXcALNayeXCvVRa%2BAr0SecSHB8xNDoDqWs%2BXU7dBO17kD9LFxeMQnhSwCXWlMxMBHUV3WLf%2F5&X-Amz-Signature=b8f769723b6814ab12999468f11f2d1c8c6a654e97bb52d0900e2c1840fefa4b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDTZS3B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHP75Y2Rj40VqlGPw3vRjAKfHekqoE7iG1rFMYnlKDL8AiEA15QVexvQgKwpajAwRPkxUSGbXkHe69imB63%2Fc%2BRK16sq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBjZyLQMyG1Ix2HlSSrcAwFQW4p5s4gGK66TEduMRv9wI4%2F3CgOLhkGk2YrGqXdPUYUqrrFz1fpdhZg02uSKKPpgoMGNrsmCX77SgdfVRxbL%2FWduMN%2F9JtxqTElBJQvs%2BOsbRlYw8yZPT11A7r6OSVs3gNfHzNwGV0DJLghFHQjwuYT8eusKxzd9prCDPWF7uwBqQtzvNA97hvyriO9oR%2FCL82IS3kWjNyXgqD6wDQfZi5F3PZkCoB99e3e1ZZsTqiRE39t02QRZAoL%2BVTa1K0669r2O6Mk9LZ90XP9T9%2FDluFTr%2BfDckhnB%2F7ympswPkdFZ8YJWDusqXSLy0XoXVqbbCLosNRKTUbFyWaQaVQfar6C8IaHbq8%2BiiSInaUzAzM1sddNlBHIJi4GY4F1u%2Bq7iPdtJxiuUDi1Ha2Hp0k0pW7QPulGGXJQt8x2flSKs4ac1QsJ02y4bHDLJcZBhYH5%2Bq887r9Qt3eHk1F1fpvDx6W5EtYp%2B9xlmNqnQVVg5vXjPAJ8vx8f3vPG7V%2F1%2BuGAaUR3ZldlatbHTX%2BM7b7RNcqUDqMLGPuvmjGgPs%2FYk%2Fcw0ny6Mlv%2FI1aBIRgSSaUb8jZHrIWH89%2Bux6gfdgc5sDpmRvFT0Y6zFRMQrxL2u91rYmyAdNeABVVRAMObegb0GOqUBsNqLKAIh5SnsEzgL8U85PJrYHZ9vZ4mGPVLFyltyI8b3eKLc0MVbfhG%2BH0FVyV%2BRp%2FCVCgZLfglpzRrCQUXuZ3lu6cnM5ASMnd8hNiLTI60jXgefO5kESKbej6QhttefEadcgiBV%2FPRPFYraHP3wXcALNayeXCvVRa%2BAr0SecSHB8xNDoDqWs%2BXU7dBO17kD9LFxeMQnhSwCXWlMxMBHUV3WLf%2F5&X-Amz-Signature=6ac996be7916772b6f8ba30183620c4728e3033eb4e58b868a0c7f946b2c801f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
