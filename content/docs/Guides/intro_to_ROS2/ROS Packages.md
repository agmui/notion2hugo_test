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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JT6LG3B%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHooWTd4%2F38ICgCu%2BIQCuIKn%2B7XTLL5h3BUywy%2BTTp8qAiB1Gz0Or5eGsW11Xq1FHyEi8oWmLLkXvc8DRhV1ZUPK2SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhKF4KxXIiYGmtMWxKtwDfYnVxv%2B5KgDVJG1Yuisz6NQzIq0taeXYpaexlo6AQJ8EuK0frszN5jtq4sVQM40fGPkx63LHAqMu96rtNkCc106P%2FBG0NlWCGL6xqwnj8e%2Beyl397OzYKPiclSIRIrNwz4FQ4rPwe%2BceGl6Mz7c%2F2jqfNgIdvDiJQ1kphX2GFWM2mIc0ROTQJd1KpP8HOZNELxlaWno9p1Jbhptc7M9uWrqJkr7PZnTFY9Aob%2B8r8gZNky8GZ88UFfYLzxYqXl9BUom4BPuN2k0DOcyq5ziKhhcRgIoaIuyMRol2Q4FFky6czkehHE%2FC6KJLSfrvIrqbq7JwFuD4%2BbrQx5ciDeTm7qsrO%2BqA6LN7u2VfcaRIoll85vB31JEbc9R7wfybxGIARRyULWCosyRKABS5iADkneLxIfVIz65NN6bi8nK0xk18eR6u4hoHcgO22JCqWV%2FuMR%2FQa7nmZQByxCuCPM3jHUil3WYkemwFlcLjHqmGuh5wIQQ%2Boccaf3HwE%2Bm052h%2FsPHOAUmyC0xB5%2BlWq8YvNS8Zo57z1mOXV%2BopsFK%2B00rSjCzdB2FnA8NRuU%2F4q7eOZXCEg7ASBbFOCtWYMo9wkdcquA5omJvRv2ytOnYSemJiNnU%2FLwcLfQ44Ssow6p6OwAY6pgG%2FzSeZmwo9PSA3lvsx3rOOotfiIxb6Apo41EQpe05RN7OewgPnHN8azCMNDECFmoIH5MpEd76%2Fqiz8jeYM0ZrAlR3K%2F59bUSD5SqE2LQrB7S2yofV9SVKeNIm2pwvn8s7MNZD8QXI3nTx0huFKunsaVgA1vag8W%2FHQVQBZOrlYCUrrF3WlRZ5vMUuncrzopNPitcolNCAkcAGtfdGDM%2F3gjsGNvM6h&X-Amz-Signature=5ae2d517f4f9b4734078cac18d56f9e62cfa22f771b46fd608419851c07753a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JT6LG3B%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHooWTd4%2F38ICgCu%2BIQCuIKn%2B7XTLL5h3BUywy%2BTTp8qAiB1Gz0Or5eGsW11Xq1FHyEi8oWmLLkXvc8DRhV1ZUPK2SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhKF4KxXIiYGmtMWxKtwDfYnVxv%2B5KgDVJG1Yuisz6NQzIq0taeXYpaexlo6AQJ8EuK0frszN5jtq4sVQM40fGPkx63LHAqMu96rtNkCc106P%2FBG0NlWCGL6xqwnj8e%2Beyl397OzYKPiclSIRIrNwz4FQ4rPwe%2BceGl6Mz7c%2F2jqfNgIdvDiJQ1kphX2GFWM2mIc0ROTQJd1KpP8HOZNELxlaWno9p1Jbhptc7M9uWrqJkr7PZnTFY9Aob%2B8r8gZNky8GZ88UFfYLzxYqXl9BUom4BPuN2k0DOcyq5ziKhhcRgIoaIuyMRol2Q4FFky6czkehHE%2FC6KJLSfrvIrqbq7JwFuD4%2BbrQx5ciDeTm7qsrO%2BqA6LN7u2VfcaRIoll85vB31JEbc9R7wfybxGIARRyULWCosyRKABS5iADkneLxIfVIz65NN6bi8nK0xk18eR6u4hoHcgO22JCqWV%2FuMR%2FQa7nmZQByxCuCPM3jHUil3WYkemwFlcLjHqmGuh5wIQQ%2Boccaf3HwE%2Bm052h%2FsPHOAUmyC0xB5%2BlWq8YvNS8Zo57z1mOXV%2BopsFK%2B00rSjCzdB2FnA8NRuU%2F4q7eOZXCEg7ASBbFOCtWYMo9wkdcquA5omJvRv2ytOnYSemJiNnU%2FLwcLfQ44Ssow6p6OwAY6pgG%2FzSeZmwo9PSA3lvsx3rOOotfiIxb6Apo41EQpe05RN7OewgPnHN8azCMNDECFmoIH5MpEd76%2Fqiz8jeYM0ZrAlR3K%2F59bUSD5SqE2LQrB7S2yofV9SVKeNIm2pwvn8s7MNZD8QXI3nTx0huFKunsaVgA1vag8W%2FHQVQBZOrlYCUrrF3WlRZ5vMUuncrzopNPitcolNCAkcAGtfdGDM%2F3gjsGNvM6h&X-Amz-Signature=985e25832e20785788949de516c0c75e478806488b4b9ea20eeff9ca4f51e428&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JT6LG3B%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHooWTd4%2F38ICgCu%2BIQCuIKn%2B7XTLL5h3BUywy%2BTTp8qAiB1Gz0Or5eGsW11Xq1FHyEi8oWmLLkXvc8DRhV1ZUPK2SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhKF4KxXIiYGmtMWxKtwDfYnVxv%2B5KgDVJG1Yuisz6NQzIq0taeXYpaexlo6AQJ8EuK0frszN5jtq4sVQM40fGPkx63LHAqMu96rtNkCc106P%2FBG0NlWCGL6xqwnj8e%2Beyl397OzYKPiclSIRIrNwz4FQ4rPwe%2BceGl6Mz7c%2F2jqfNgIdvDiJQ1kphX2GFWM2mIc0ROTQJd1KpP8HOZNELxlaWno9p1Jbhptc7M9uWrqJkr7PZnTFY9Aob%2B8r8gZNky8GZ88UFfYLzxYqXl9BUom4BPuN2k0DOcyq5ziKhhcRgIoaIuyMRol2Q4FFky6czkehHE%2FC6KJLSfrvIrqbq7JwFuD4%2BbrQx5ciDeTm7qsrO%2BqA6LN7u2VfcaRIoll85vB31JEbc9R7wfybxGIARRyULWCosyRKABS5iADkneLxIfVIz65NN6bi8nK0xk18eR6u4hoHcgO22JCqWV%2FuMR%2FQa7nmZQByxCuCPM3jHUil3WYkemwFlcLjHqmGuh5wIQQ%2Boccaf3HwE%2Bm052h%2FsPHOAUmyC0xB5%2BlWq8YvNS8Zo57z1mOXV%2BopsFK%2B00rSjCzdB2FnA8NRuU%2F4q7eOZXCEg7ASBbFOCtWYMo9wkdcquA5omJvRv2ytOnYSemJiNnU%2FLwcLfQ44Ssow6p6OwAY6pgG%2FzSeZmwo9PSA3lvsx3rOOotfiIxb6Apo41EQpe05RN7OewgPnHN8azCMNDECFmoIH5MpEd76%2Fqiz8jeYM0ZrAlR3K%2F59bUSD5SqE2LQrB7S2yofV9SVKeNIm2pwvn8s7MNZD8QXI3nTx0huFKunsaVgA1vag8W%2FHQVQBZOrlYCUrrF3WlRZ5vMUuncrzopNPitcolNCAkcAGtfdGDM%2F3gjsGNvM6h&X-Amz-Signature=9ec208876f43eba2dbd2aeca2bed9ee4ebd5c035537186437205842c602d35f8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JT6LG3B%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHooWTd4%2F38ICgCu%2BIQCuIKn%2B7XTLL5h3BUywy%2BTTp8qAiB1Gz0Or5eGsW11Xq1FHyEi8oWmLLkXvc8DRhV1ZUPK2SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhKF4KxXIiYGmtMWxKtwDfYnVxv%2B5KgDVJG1Yuisz6NQzIq0taeXYpaexlo6AQJ8EuK0frszN5jtq4sVQM40fGPkx63LHAqMu96rtNkCc106P%2FBG0NlWCGL6xqwnj8e%2Beyl397OzYKPiclSIRIrNwz4FQ4rPwe%2BceGl6Mz7c%2F2jqfNgIdvDiJQ1kphX2GFWM2mIc0ROTQJd1KpP8HOZNELxlaWno9p1Jbhptc7M9uWrqJkr7PZnTFY9Aob%2B8r8gZNky8GZ88UFfYLzxYqXl9BUom4BPuN2k0DOcyq5ziKhhcRgIoaIuyMRol2Q4FFky6czkehHE%2FC6KJLSfrvIrqbq7JwFuD4%2BbrQx5ciDeTm7qsrO%2BqA6LN7u2VfcaRIoll85vB31JEbc9R7wfybxGIARRyULWCosyRKABS5iADkneLxIfVIz65NN6bi8nK0xk18eR6u4hoHcgO22JCqWV%2FuMR%2FQa7nmZQByxCuCPM3jHUil3WYkemwFlcLjHqmGuh5wIQQ%2Boccaf3HwE%2Bm052h%2FsPHOAUmyC0xB5%2BlWq8YvNS8Zo57z1mOXV%2BopsFK%2B00rSjCzdB2FnA8NRuU%2F4q7eOZXCEg7ASBbFOCtWYMo9wkdcquA5omJvRv2ytOnYSemJiNnU%2FLwcLfQ44Ssow6p6OwAY6pgG%2FzSeZmwo9PSA3lvsx3rOOotfiIxb6Apo41EQpe05RN7OewgPnHN8azCMNDECFmoIH5MpEd76%2Fqiz8jeYM0ZrAlR3K%2F59bUSD5SqE2LQrB7S2yofV9SVKeNIm2pwvn8s7MNZD8QXI3nTx0huFKunsaVgA1vag8W%2FHQVQBZOrlYCUrrF3WlRZ5vMUuncrzopNPitcolNCAkcAGtfdGDM%2F3gjsGNvM6h&X-Amz-Signature=ca1b150ee8d03c4ce2ee55459aa13015e6d15699ed46ada3344891be6fc0e3ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JT6LG3B%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHooWTd4%2F38ICgCu%2BIQCuIKn%2B7XTLL5h3BUywy%2BTTp8qAiB1Gz0Or5eGsW11Xq1FHyEi8oWmLLkXvc8DRhV1ZUPK2SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhKF4KxXIiYGmtMWxKtwDfYnVxv%2B5KgDVJG1Yuisz6NQzIq0taeXYpaexlo6AQJ8EuK0frszN5jtq4sVQM40fGPkx63LHAqMu96rtNkCc106P%2FBG0NlWCGL6xqwnj8e%2Beyl397OzYKPiclSIRIrNwz4FQ4rPwe%2BceGl6Mz7c%2F2jqfNgIdvDiJQ1kphX2GFWM2mIc0ROTQJd1KpP8HOZNELxlaWno9p1Jbhptc7M9uWrqJkr7PZnTFY9Aob%2B8r8gZNky8GZ88UFfYLzxYqXl9BUom4BPuN2k0DOcyq5ziKhhcRgIoaIuyMRol2Q4FFky6czkehHE%2FC6KJLSfrvIrqbq7JwFuD4%2BbrQx5ciDeTm7qsrO%2BqA6LN7u2VfcaRIoll85vB31JEbc9R7wfybxGIARRyULWCosyRKABS5iADkneLxIfVIz65NN6bi8nK0xk18eR6u4hoHcgO22JCqWV%2FuMR%2FQa7nmZQByxCuCPM3jHUil3WYkemwFlcLjHqmGuh5wIQQ%2Boccaf3HwE%2Bm052h%2FsPHOAUmyC0xB5%2BlWq8YvNS8Zo57z1mOXV%2BopsFK%2B00rSjCzdB2FnA8NRuU%2F4q7eOZXCEg7ASBbFOCtWYMo9wkdcquA5omJvRv2ytOnYSemJiNnU%2FLwcLfQ44Ssow6p6OwAY6pgG%2FzSeZmwo9PSA3lvsx3rOOotfiIxb6Apo41EQpe05RN7OewgPnHN8azCMNDECFmoIH5MpEd76%2Fqiz8jeYM0ZrAlR3K%2F59bUSD5SqE2LQrB7S2yofV9SVKeNIm2pwvn8s7MNZD8QXI3nTx0huFKunsaVgA1vag8W%2FHQVQBZOrlYCUrrF3WlRZ5vMUuncrzopNPitcolNCAkcAGtfdGDM%2F3gjsGNvM6h&X-Amz-Signature=4ee625297e8e64a90e7a6cd86dcea02a702225408c00a05e9599c20c9928a9cb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JT6LG3B%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHooWTd4%2F38ICgCu%2BIQCuIKn%2B7XTLL5h3BUywy%2BTTp8qAiB1Gz0Or5eGsW11Xq1FHyEi8oWmLLkXvc8DRhV1ZUPK2SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhKF4KxXIiYGmtMWxKtwDfYnVxv%2B5KgDVJG1Yuisz6NQzIq0taeXYpaexlo6AQJ8EuK0frszN5jtq4sVQM40fGPkx63LHAqMu96rtNkCc106P%2FBG0NlWCGL6xqwnj8e%2Beyl397OzYKPiclSIRIrNwz4FQ4rPwe%2BceGl6Mz7c%2F2jqfNgIdvDiJQ1kphX2GFWM2mIc0ROTQJd1KpP8HOZNELxlaWno9p1Jbhptc7M9uWrqJkr7PZnTFY9Aob%2B8r8gZNky8GZ88UFfYLzxYqXl9BUom4BPuN2k0DOcyq5ziKhhcRgIoaIuyMRol2Q4FFky6czkehHE%2FC6KJLSfrvIrqbq7JwFuD4%2BbrQx5ciDeTm7qsrO%2BqA6LN7u2VfcaRIoll85vB31JEbc9R7wfybxGIARRyULWCosyRKABS5iADkneLxIfVIz65NN6bi8nK0xk18eR6u4hoHcgO22JCqWV%2FuMR%2FQa7nmZQByxCuCPM3jHUil3WYkemwFlcLjHqmGuh5wIQQ%2Boccaf3HwE%2Bm052h%2FsPHOAUmyC0xB5%2BlWq8YvNS8Zo57z1mOXV%2BopsFK%2B00rSjCzdB2FnA8NRuU%2F4q7eOZXCEg7ASBbFOCtWYMo9wkdcquA5omJvRv2ytOnYSemJiNnU%2FLwcLfQ44Ssow6p6OwAY6pgG%2FzSeZmwo9PSA3lvsx3rOOotfiIxb6Apo41EQpe05RN7OewgPnHN8azCMNDECFmoIH5MpEd76%2Fqiz8jeYM0ZrAlR3K%2F59bUSD5SqE2LQrB7S2yofV9SVKeNIm2pwvn8s7MNZD8QXI3nTx0huFKunsaVgA1vag8W%2FHQVQBZOrlYCUrrF3WlRZ5vMUuncrzopNPitcolNCAkcAGtfdGDM%2F3gjsGNvM6h&X-Amz-Signature=65240ae677e19463a6b88dd6d1e2fd1c8ff3d9ba071b38abb26ac442f78aa875&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JT6LG3B%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHooWTd4%2F38ICgCu%2BIQCuIKn%2B7XTLL5h3BUywy%2BTTp8qAiB1Gz0Or5eGsW11Xq1FHyEi8oWmLLkXvc8DRhV1ZUPK2SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhKF4KxXIiYGmtMWxKtwDfYnVxv%2B5KgDVJG1Yuisz6NQzIq0taeXYpaexlo6AQJ8EuK0frszN5jtq4sVQM40fGPkx63LHAqMu96rtNkCc106P%2FBG0NlWCGL6xqwnj8e%2Beyl397OzYKPiclSIRIrNwz4FQ4rPwe%2BceGl6Mz7c%2F2jqfNgIdvDiJQ1kphX2GFWM2mIc0ROTQJd1KpP8HOZNELxlaWno9p1Jbhptc7M9uWrqJkr7PZnTFY9Aob%2B8r8gZNky8GZ88UFfYLzxYqXl9BUom4BPuN2k0DOcyq5ziKhhcRgIoaIuyMRol2Q4FFky6czkehHE%2FC6KJLSfrvIrqbq7JwFuD4%2BbrQx5ciDeTm7qsrO%2BqA6LN7u2VfcaRIoll85vB31JEbc9R7wfybxGIARRyULWCosyRKABS5iADkneLxIfVIz65NN6bi8nK0xk18eR6u4hoHcgO22JCqWV%2FuMR%2FQa7nmZQByxCuCPM3jHUil3WYkemwFlcLjHqmGuh5wIQQ%2Boccaf3HwE%2Bm052h%2FsPHOAUmyC0xB5%2BlWq8YvNS8Zo57z1mOXV%2BopsFK%2B00rSjCzdB2FnA8NRuU%2F4q7eOZXCEg7ASBbFOCtWYMo9wkdcquA5omJvRv2ytOnYSemJiNnU%2FLwcLfQ44Ssow6p6OwAY6pgG%2FzSeZmwo9PSA3lvsx3rOOotfiIxb6Apo41EQpe05RN7OewgPnHN8azCMNDECFmoIH5MpEd76%2Fqiz8jeYM0ZrAlR3K%2F59bUSD5SqE2LQrB7S2yofV9SVKeNIm2pwvn8s7MNZD8QXI3nTx0huFKunsaVgA1vag8W%2FHQVQBZOrlYCUrrF3WlRZ5vMUuncrzopNPitcolNCAkcAGtfdGDM%2F3gjsGNvM6h&X-Amz-Signature=59130f6fa6b848f604e5c2644e34bde2aad52d76119c4e19ce15dfc5fda4f6e6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
