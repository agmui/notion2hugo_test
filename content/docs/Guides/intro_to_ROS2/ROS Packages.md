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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6KNBLF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA03Z7uziaS57jAynrvFaMctO0h%2Fdnw2LS1K7BOzYRolAiAFtjb9XOwiu3wVo900nppNd7zg7VnjBMXnxls%2BQfTOyCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd48J7McgAuP63HX1KtwDqQXIP0e6K7u%2BRODncm3jSLjbPvwmz%2FidLzMyIQe5jxN5l1BExtzkjBCL%2BLcBmdC%2BsiII%2BzpIbX9foCiuG%2BnM7yAz7p3iHRzReqoBQIv%2BJBaZ9U4F5bthCZ611EqPFjwTkEsxoyzsRBkkmFQqwQ7GHdJVPNnMKL%2B6bwsC0xquLGoceb1GZspcmkFvBIPNOoeN3X%2Fif6PAAo5qSFvVdD849hKd2pcQHnnqPJQEq%2FYKJB%2Bxzf6p%2FUv%2B7Sh5HbVADtLy75Kw9hqONK6%2BWp%2FVMpEC3DM5dGIU%2FRvQb96sGF0BykZV5VGSuAQHdddxYmebSO%2FVGrJwV%2Ff5XyWj%2FwYGaQM%2BAkbAbmo%2BwxK9GFuE3Y2zH6Xen5fhmiXhdZWKX5Anx21WLldfWbdKaJAWHwxhOshXEbFFtIo2dojy0r7lJ8D3pkeddv5zz6k3OEuPz6ZDZw3iMtcLwgm%2B2r3q%2BJSa7cHtytuNfe7akqWo1QNHL%2F%2BKi%2FFO7CK%2F23aV0yP0n3FGMoOOWWYe%2BjMNvTqfDqVGc%2FUF3Edn0gfpjYZbXwmqL4JnbyFMCKEhQcUNw9%2FVSto23drSdAFpdlSFTeeMQx15%2FaFrdchLyWgJa%2FXZMdsrlEqL4pG1gFvSwp9n%2FChsGjUwkbSVwgY6pgHOkdVSTzwN9aLMK9Gfw7LfyqLKQXXQ4LQaz5XbmIFHcWDMVG9vW%2BfM2WUQeRKSJS5JKK%2BoUcBrj1tmXIfggTKIzP7qGu0mWn%2F5yk5A9u%2FtlLd62YXdlmkmGwaJ0oz7AFuGRH9UuFQDWcnjDtk4d9wA7BYEFlu9GlTNKqoGlvABCwEDs5ZfQ4m3eKHPrlqiUS2sS0qE52LEvGSlUcs6NIfPF4om%2BUz0&X-Amz-Signature=2d0e97a4170d41139805df74f66dc843ee694e363152916416170c3bcb673ade&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6KNBLF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA03Z7uziaS57jAynrvFaMctO0h%2Fdnw2LS1K7BOzYRolAiAFtjb9XOwiu3wVo900nppNd7zg7VnjBMXnxls%2BQfTOyCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd48J7McgAuP63HX1KtwDqQXIP0e6K7u%2BRODncm3jSLjbPvwmz%2FidLzMyIQe5jxN5l1BExtzkjBCL%2BLcBmdC%2BsiII%2BzpIbX9foCiuG%2BnM7yAz7p3iHRzReqoBQIv%2BJBaZ9U4F5bthCZ611EqPFjwTkEsxoyzsRBkkmFQqwQ7GHdJVPNnMKL%2B6bwsC0xquLGoceb1GZspcmkFvBIPNOoeN3X%2Fif6PAAo5qSFvVdD849hKd2pcQHnnqPJQEq%2FYKJB%2Bxzf6p%2FUv%2B7Sh5HbVADtLy75Kw9hqONK6%2BWp%2FVMpEC3DM5dGIU%2FRvQb96sGF0BykZV5VGSuAQHdddxYmebSO%2FVGrJwV%2Ff5XyWj%2FwYGaQM%2BAkbAbmo%2BwxK9GFuE3Y2zH6Xen5fhmiXhdZWKX5Anx21WLldfWbdKaJAWHwxhOshXEbFFtIo2dojy0r7lJ8D3pkeddv5zz6k3OEuPz6ZDZw3iMtcLwgm%2B2r3q%2BJSa7cHtytuNfe7akqWo1QNHL%2F%2BKi%2FFO7CK%2F23aV0yP0n3FGMoOOWWYe%2BjMNvTqfDqVGc%2FUF3Edn0gfpjYZbXwmqL4JnbyFMCKEhQcUNw9%2FVSto23drSdAFpdlSFTeeMQx15%2FaFrdchLyWgJa%2FXZMdsrlEqL4pG1gFvSwp9n%2FChsGjUwkbSVwgY6pgHOkdVSTzwN9aLMK9Gfw7LfyqLKQXXQ4LQaz5XbmIFHcWDMVG9vW%2BfM2WUQeRKSJS5JKK%2BoUcBrj1tmXIfggTKIzP7qGu0mWn%2F5yk5A9u%2FtlLd62YXdlmkmGwaJ0oz7AFuGRH9UuFQDWcnjDtk4d9wA7BYEFlu9GlTNKqoGlvABCwEDs5ZfQ4m3eKHPrlqiUS2sS0qE52LEvGSlUcs6NIfPF4om%2BUz0&X-Amz-Signature=c1a52a4c935fbef25cfc5c27c08725494111024961b759e31039c7509db14b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6KNBLF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA03Z7uziaS57jAynrvFaMctO0h%2Fdnw2LS1K7BOzYRolAiAFtjb9XOwiu3wVo900nppNd7zg7VnjBMXnxls%2BQfTOyCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd48J7McgAuP63HX1KtwDqQXIP0e6K7u%2BRODncm3jSLjbPvwmz%2FidLzMyIQe5jxN5l1BExtzkjBCL%2BLcBmdC%2BsiII%2BzpIbX9foCiuG%2BnM7yAz7p3iHRzReqoBQIv%2BJBaZ9U4F5bthCZ611EqPFjwTkEsxoyzsRBkkmFQqwQ7GHdJVPNnMKL%2B6bwsC0xquLGoceb1GZspcmkFvBIPNOoeN3X%2Fif6PAAo5qSFvVdD849hKd2pcQHnnqPJQEq%2FYKJB%2Bxzf6p%2FUv%2B7Sh5HbVADtLy75Kw9hqONK6%2BWp%2FVMpEC3DM5dGIU%2FRvQb96sGF0BykZV5VGSuAQHdddxYmebSO%2FVGrJwV%2Ff5XyWj%2FwYGaQM%2BAkbAbmo%2BwxK9GFuE3Y2zH6Xen5fhmiXhdZWKX5Anx21WLldfWbdKaJAWHwxhOshXEbFFtIo2dojy0r7lJ8D3pkeddv5zz6k3OEuPz6ZDZw3iMtcLwgm%2B2r3q%2BJSa7cHtytuNfe7akqWo1QNHL%2F%2BKi%2FFO7CK%2F23aV0yP0n3FGMoOOWWYe%2BjMNvTqfDqVGc%2FUF3Edn0gfpjYZbXwmqL4JnbyFMCKEhQcUNw9%2FVSto23drSdAFpdlSFTeeMQx15%2FaFrdchLyWgJa%2FXZMdsrlEqL4pG1gFvSwp9n%2FChsGjUwkbSVwgY6pgHOkdVSTzwN9aLMK9Gfw7LfyqLKQXXQ4LQaz5XbmIFHcWDMVG9vW%2BfM2WUQeRKSJS5JKK%2BoUcBrj1tmXIfggTKIzP7qGu0mWn%2F5yk5A9u%2FtlLd62YXdlmkmGwaJ0oz7AFuGRH9UuFQDWcnjDtk4d9wA7BYEFlu9GlTNKqoGlvABCwEDs5ZfQ4m3eKHPrlqiUS2sS0qE52LEvGSlUcs6NIfPF4om%2BUz0&X-Amz-Signature=c9de1fa593c90d6e199dbb70446fa558d8de2c8b28115c24b6bb2abc1f199b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6KNBLF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA03Z7uziaS57jAynrvFaMctO0h%2Fdnw2LS1K7BOzYRolAiAFtjb9XOwiu3wVo900nppNd7zg7VnjBMXnxls%2BQfTOyCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd48J7McgAuP63HX1KtwDqQXIP0e6K7u%2BRODncm3jSLjbPvwmz%2FidLzMyIQe5jxN5l1BExtzkjBCL%2BLcBmdC%2BsiII%2BzpIbX9foCiuG%2BnM7yAz7p3iHRzReqoBQIv%2BJBaZ9U4F5bthCZ611EqPFjwTkEsxoyzsRBkkmFQqwQ7GHdJVPNnMKL%2B6bwsC0xquLGoceb1GZspcmkFvBIPNOoeN3X%2Fif6PAAo5qSFvVdD849hKd2pcQHnnqPJQEq%2FYKJB%2Bxzf6p%2FUv%2B7Sh5HbVADtLy75Kw9hqONK6%2BWp%2FVMpEC3DM5dGIU%2FRvQb96sGF0BykZV5VGSuAQHdddxYmebSO%2FVGrJwV%2Ff5XyWj%2FwYGaQM%2BAkbAbmo%2BwxK9GFuE3Y2zH6Xen5fhmiXhdZWKX5Anx21WLldfWbdKaJAWHwxhOshXEbFFtIo2dojy0r7lJ8D3pkeddv5zz6k3OEuPz6ZDZw3iMtcLwgm%2B2r3q%2BJSa7cHtytuNfe7akqWo1QNHL%2F%2BKi%2FFO7CK%2F23aV0yP0n3FGMoOOWWYe%2BjMNvTqfDqVGc%2FUF3Edn0gfpjYZbXwmqL4JnbyFMCKEhQcUNw9%2FVSto23drSdAFpdlSFTeeMQx15%2FaFrdchLyWgJa%2FXZMdsrlEqL4pG1gFvSwp9n%2FChsGjUwkbSVwgY6pgHOkdVSTzwN9aLMK9Gfw7LfyqLKQXXQ4LQaz5XbmIFHcWDMVG9vW%2BfM2WUQeRKSJS5JKK%2BoUcBrj1tmXIfggTKIzP7qGu0mWn%2F5yk5A9u%2FtlLd62YXdlmkmGwaJ0oz7AFuGRH9UuFQDWcnjDtk4d9wA7BYEFlu9GlTNKqoGlvABCwEDs5ZfQ4m3eKHPrlqiUS2sS0qE52LEvGSlUcs6NIfPF4om%2BUz0&X-Amz-Signature=9c8c30f223490ad84328c7f2c1d9cea6a9dafe05932e46226d42c0943e3a17ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6KNBLF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA03Z7uziaS57jAynrvFaMctO0h%2Fdnw2LS1K7BOzYRolAiAFtjb9XOwiu3wVo900nppNd7zg7VnjBMXnxls%2BQfTOyCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd48J7McgAuP63HX1KtwDqQXIP0e6K7u%2BRODncm3jSLjbPvwmz%2FidLzMyIQe5jxN5l1BExtzkjBCL%2BLcBmdC%2BsiII%2BzpIbX9foCiuG%2BnM7yAz7p3iHRzReqoBQIv%2BJBaZ9U4F5bthCZ611EqPFjwTkEsxoyzsRBkkmFQqwQ7GHdJVPNnMKL%2B6bwsC0xquLGoceb1GZspcmkFvBIPNOoeN3X%2Fif6PAAo5qSFvVdD849hKd2pcQHnnqPJQEq%2FYKJB%2Bxzf6p%2FUv%2B7Sh5HbVADtLy75Kw9hqONK6%2BWp%2FVMpEC3DM5dGIU%2FRvQb96sGF0BykZV5VGSuAQHdddxYmebSO%2FVGrJwV%2Ff5XyWj%2FwYGaQM%2BAkbAbmo%2BwxK9GFuE3Y2zH6Xen5fhmiXhdZWKX5Anx21WLldfWbdKaJAWHwxhOshXEbFFtIo2dojy0r7lJ8D3pkeddv5zz6k3OEuPz6ZDZw3iMtcLwgm%2B2r3q%2BJSa7cHtytuNfe7akqWo1QNHL%2F%2BKi%2FFO7CK%2F23aV0yP0n3FGMoOOWWYe%2BjMNvTqfDqVGc%2FUF3Edn0gfpjYZbXwmqL4JnbyFMCKEhQcUNw9%2FVSto23drSdAFpdlSFTeeMQx15%2FaFrdchLyWgJa%2FXZMdsrlEqL4pG1gFvSwp9n%2FChsGjUwkbSVwgY6pgHOkdVSTzwN9aLMK9Gfw7LfyqLKQXXQ4LQaz5XbmIFHcWDMVG9vW%2BfM2WUQeRKSJS5JKK%2BoUcBrj1tmXIfggTKIzP7qGu0mWn%2F5yk5A9u%2FtlLd62YXdlmkmGwaJ0oz7AFuGRH9UuFQDWcnjDtk4d9wA7BYEFlu9GlTNKqoGlvABCwEDs5ZfQ4m3eKHPrlqiUS2sS0qE52LEvGSlUcs6NIfPF4om%2BUz0&X-Amz-Signature=0909fd2ebf10a9a63575665c951d0e441cb747c8ee4df5b7cad1902f9de13f52&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6KNBLF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA03Z7uziaS57jAynrvFaMctO0h%2Fdnw2LS1K7BOzYRolAiAFtjb9XOwiu3wVo900nppNd7zg7VnjBMXnxls%2BQfTOyCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd48J7McgAuP63HX1KtwDqQXIP0e6K7u%2BRODncm3jSLjbPvwmz%2FidLzMyIQe5jxN5l1BExtzkjBCL%2BLcBmdC%2BsiII%2BzpIbX9foCiuG%2BnM7yAz7p3iHRzReqoBQIv%2BJBaZ9U4F5bthCZ611EqPFjwTkEsxoyzsRBkkmFQqwQ7GHdJVPNnMKL%2B6bwsC0xquLGoceb1GZspcmkFvBIPNOoeN3X%2Fif6PAAo5qSFvVdD849hKd2pcQHnnqPJQEq%2FYKJB%2Bxzf6p%2FUv%2B7Sh5HbVADtLy75Kw9hqONK6%2BWp%2FVMpEC3DM5dGIU%2FRvQb96sGF0BykZV5VGSuAQHdddxYmebSO%2FVGrJwV%2Ff5XyWj%2FwYGaQM%2BAkbAbmo%2BwxK9GFuE3Y2zH6Xen5fhmiXhdZWKX5Anx21WLldfWbdKaJAWHwxhOshXEbFFtIo2dojy0r7lJ8D3pkeddv5zz6k3OEuPz6ZDZw3iMtcLwgm%2B2r3q%2BJSa7cHtytuNfe7akqWo1QNHL%2F%2BKi%2FFO7CK%2F23aV0yP0n3FGMoOOWWYe%2BjMNvTqfDqVGc%2FUF3Edn0gfpjYZbXwmqL4JnbyFMCKEhQcUNw9%2FVSto23drSdAFpdlSFTeeMQx15%2FaFrdchLyWgJa%2FXZMdsrlEqL4pG1gFvSwp9n%2FChsGjUwkbSVwgY6pgHOkdVSTzwN9aLMK9Gfw7LfyqLKQXXQ4LQaz5XbmIFHcWDMVG9vW%2BfM2WUQeRKSJS5JKK%2BoUcBrj1tmXIfggTKIzP7qGu0mWn%2F5yk5A9u%2FtlLd62YXdlmkmGwaJ0oz7AFuGRH9UuFQDWcnjDtk4d9wA7BYEFlu9GlTNKqoGlvABCwEDs5ZfQ4m3eKHPrlqiUS2sS0qE52LEvGSlUcs6NIfPF4om%2BUz0&X-Amz-Signature=69938932a248d5c6db9aa3618d49d07c5f33318215161eec45aa50d529d86d19&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E6KNBLF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA03Z7uziaS57jAynrvFaMctO0h%2Fdnw2LS1K7BOzYRolAiAFtjb9XOwiu3wVo900nppNd7zg7VnjBMXnxls%2BQfTOyCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd48J7McgAuP63HX1KtwDqQXIP0e6K7u%2BRODncm3jSLjbPvwmz%2FidLzMyIQe5jxN5l1BExtzkjBCL%2BLcBmdC%2BsiII%2BzpIbX9foCiuG%2BnM7yAz7p3iHRzReqoBQIv%2BJBaZ9U4F5bthCZ611EqPFjwTkEsxoyzsRBkkmFQqwQ7GHdJVPNnMKL%2B6bwsC0xquLGoceb1GZspcmkFvBIPNOoeN3X%2Fif6PAAo5qSFvVdD849hKd2pcQHnnqPJQEq%2FYKJB%2Bxzf6p%2FUv%2B7Sh5HbVADtLy75Kw9hqONK6%2BWp%2FVMpEC3DM5dGIU%2FRvQb96sGF0BykZV5VGSuAQHdddxYmebSO%2FVGrJwV%2Ff5XyWj%2FwYGaQM%2BAkbAbmo%2BwxK9GFuE3Y2zH6Xen5fhmiXhdZWKX5Anx21WLldfWbdKaJAWHwxhOshXEbFFtIo2dojy0r7lJ8D3pkeddv5zz6k3OEuPz6ZDZw3iMtcLwgm%2B2r3q%2BJSa7cHtytuNfe7akqWo1QNHL%2F%2BKi%2FFO7CK%2F23aV0yP0n3FGMoOOWWYe%2BjMNvTqfDqVGc%2FUF3Edn0gfpjYZbXwmqL4JnbyFMCKEhQcUNw9%2FVSto23drSdAFpdlSFTeeMQx15%2FaFrdchLyWgJa%2FXZMdsrlEqL4pG1gFvSwp9n%2FChsGjUwkbSVwgY6pgHOkdVSTzwN9aLMK9Gfw7LfyqLKQXXQ4LQaz5XbmIFHcWDMVG9vW%2BfM2WUQeRKSJS5JKK%2BoUcBrj1tmXIfggTKIzP7qGu0mWn%2F5yk5A9u%2FtlLd62YXdlmkmGwaJ0oz7AFuGRH9UuFQDWcnjDtk4d9wA7BYEFlu9GlTNKqoGlvABCwEDs5ZfQ4m3eKHPrlqiUS2sS0qE52LEvGSlUcs6NIfPF4om%2BUz0&X-Amz-Signature=63c3d821a6b0daf98eb204656a7af07b8d573eecf881b5248d9e019fbbaf1062&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
