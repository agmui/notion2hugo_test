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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQTWOJV5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESOdtwAFiq6nEYe3UHdCeTwGDPvH4KHxC3r%2BjmSjN%2BfAiA3s9%2FiURYFl5pvpcvfTwOqEdB%2BXimw6SzObDeds8g50yr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDw933VeEI8HjucgJKtwDnNkpo6JeX4s6ZDpuOQWa0DZIW%2BldBm8urBAdAHljBWy10mfSiM%2BlfT5zSmU%2F0PcBaw6gvHaD10NDhLGop%2BBmwMv6nMepUXOVLouQkuIkn68YIs%2FdY9G1I0c6OKfUmCWZaxWIF1IriRy9bluvmODXEO1yasREqiw8j4GE4DSLt4uQsHrpOZe%2FUA5G0I4V%2BZ5FPZK3%2BYkv2WKWpxOGikQVTE9dZSJj%2BXBuL7UjB2Odm0NovPked1qO%2BMXcl1dr1Dcb6abQYFgJAqeCbb6PK2FD2q552RYHLfn6tx3HMV8kdVDh6NEQmTmCewVmiG2qgwtLSpObab%2FFMgiTlWHnJb43fUnwbpqU7aEF7g2%2BGh%2FC8oh625shg%2B6SyjfDs%2Fbj712bqn0sY9tdnV9%2F8biMIbKybi0HH66S81AcQ92EiDMOFtGe5zD5SI4xDtEK7mJPChfFWHIulMYyWldvAD93cHrdzVFQjl12f%2FBaMX6TvUJOayNoKWA5Z3duD3PwA0YVBqtBz8%2FleIigHsq0HCxuDRSjtVH6cPvl6ndCVZiLYpoC49L0rn%2FHqbRfb9%2ByGm%2F5J1e8%2BL4sgyeR5X%2B%2FVBfr%2FjzB%2BJWFjwB%2FOb08G1EqEkZuVrhVWZzJaaEAuicGf%2Bsw3OzfvgY6pgH1t1%2FoPutv3Yy1Bnz4AopxfMNrlkv6bkdwhzudwghDgnTHJxlflsSUY4EPnQY0HdofmtsWYOcXnbVKkLtTLxGHkjhbPC8hd%2FN96I14WaKq3PKqspBnv6ID%2BgoUhSiNLw820EPPWTmqchMqC083Ku6LzdXyUx0SLS%2FUzLkaQnIHmH7M%2FTuWLYdU%2BKTVWW%2BHaFt05eIgcz%2BIXmUMeyMfhZiCfDq0L1%2FF&X-Amz-Signature=54fc4c8719780acfc8347043f6dbe65055af3fbe6d72bd3c51e4fc1a5abe6e74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQTWOJV5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESOdtwAFiq6nEYe3UHdCeTwGDPvH4KHxC3r%2BjmSjN%2BfAiA3s9%2FiURYFl5pvpcvfTwOqEdB%2BXimw6SzObDeds8g50yr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDw933VeEI8HjucgJKtwDnNkpo6JeX4s6ZDpuOQWa0DZIW%2BldBm8urBAdAHljBWy10mfSiM%2BlfT5zSmU%2F0PcBaw6gvHaD10NDhLGop%2BBmwMv6nMepUXOVLouQkuIkn68YIs%2FdY9G1I0c6OKfUmCWZaxWIF1IriRy9bluvmODXEO1yasREqiw8j4GE4DSLt4uQsHrpOZe%2FUA5G0I4V%2BZ5FPZK3%2BYkv2WKWpxOGikQVTE9dZSJj%2BXBuL7UjB2Odm0NovPked1qO%2BMXcl1dr1Dcb6abQYFgJAqeCbb6PK2FD2q552RYHLfn6tx3HMV8kdVDh6NEQmTmCewVmiG2qgwtLSpObab%2FFMgiTlWHnJb43fUnwbpqU7aEF7g2%2BGh%2FC8oh625shg%2B6SyjfDs%2Fbj712bqn0sY9tdnV9%2F8biMIbKybi0HH66S81AcQ92EiDMOFtGe5zD5SI4xDtEK7mJPChfFWHIulMYyWldvAD93cHrdzVFQjl12f%2FBaMX6TvUJOayNoKWA5Z3duD3PwA0YVBqtBz8%2FleIigHsq0HCxuDRSjtVH6cPvl6ndCVZiLYpoC49L0rn%2FHqbRfb9%2ByGm%2F5J1e8%2BL4sgyeR5X%2B%2FVBfr%2FjzB%2BJWFjwB%2FOb08G1EqEkZuVrhVWZzJaaEAuicGf%2Bsw3OzfvgY6pgH1t1%2FoPutv3Yy1Bnz4AopxfMNrlkv6bkdwhzudwghDgnTHJxlflsSUY4EPnQY0HdofmtsWYOcXnbVKkLtTLxGHkjhbPC8hd%2FN96I14WaKq3PKqspBnv6ID%2BgoUhSiNLw820EPPWTmqchMqC083Ku6LzdXyUx0SLS%2FUzLkaQnIHmH7M%2FTuWLYdU%2BKTVWW%2BHaFt05eIgcz%2BIXmUMeyMfhZiCfDq0L1%2FF&X-Amz-Signature=9e5042f074ecf3d247babadca2f58e09b2cc8b98f3a33d0099c545b26595b1be&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQTWOJV5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESOdtwAFiq6nEYe3UHdCeTwGDPvH4KHxC3r%2BjmSjN%2BfAiA3s9%2FiURYFl5pvpcvfTwOqEdB%2BXimw6SzObDeds8g50yr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDw933VeEI8HjucgJKtwDnNkpo6JeX4s6ZDpuOQWa0DZIW%2BldBm8urBAdAHljBWy10mfSiM%2BlfT5zSmU%2F0PcBaw6gvHaD10NDhLGop%2BBmwMv6nMepUXOVLouQkuIkn68YIs%2FdY9G1I0c6OKfUmCWZaxWIF1IriRy9bluvmODXEO1yasREqiw8j4GE4DSLt4uQsHrpOZe%2FUA5G0I4V%2BZ5FPZK3%2BYkv2WKWpxOGikQVTE9dZSJj%2BXBuL7UjB2Odm0NovPked1qO%2BMXcl1dr1Dcb6abQYFgJAqeCbb6PK2FD2q552RYHLfn6tx3HMV8kdVDh6NEQmTmCewVmiG2qgwtLSpObab%2FFMgiTlWHnJb43fUnwbpqU7aEF7g2%2BGh%2FC8oh625shg%2B6SyjfDs%2Fbj712bqn0sY9tdnV9%2F8biMIbKybi0HH66S81AcQ92EiDMOFtGe5zD5SI4xDtEK7mJPChfFWHIulMYyWldvAD93cHrdzVFQjl12f%2FBaMX6TvUJOayNoKWA5Z3duD3PwA0YVBqtBz8%2FleIigHsq0HCxuDRSjtVH6cPvl6ndCVZiLYpoC49L0rn%2FHqbRfb9%2ByGm%2F5J1e8%2BL4sgyeR5X%2B%2FVBfr%2FjzB%2BJWFjwB%2FOb08G1EqEkZuVrhVWZzJaaEAuicGf%2Bsw3OzfvgY6pgH1t1%2FoPutv3Yy1Bnz4AopxfMNrlkv6bkdwhzudwghDgnTHJxlflsSUY4EPnQY0HdofmtsWYOcXnbVKkLtTLxGHkjhbPC8hd%2FN96I14WaKq3PKqspBnv6ID%2BgoUhSiNLw820EPPWTmqchMqC083Ku6LzdXyUx0SLS%2FUzLkaQnIHmH7M%2FTuWLYdU%2BKTVWW%2BHaFt05eIgcz%2BIXmUMeyMfhZiCfDq0L1%2FF&X-Amz-Signature=ae8714e1e8ef3dcd5c1e1eb3b343c75b2ef4dd24c872033f2967530ffd3a469b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQTWOJV5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESOdtwAFiq6nEYe3UHdCeTwGDPvH4KHxC3r%2BjmSjN%2BfAiA3s9%2FiURYFl5pvpcvfTwOqEdB%2BXimw6SzObDeds8g50yr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDw933VeEI8HjucgJKtwDnNkpo6JeX4s6ZDpuOQWa0DZIW%2BldBm8urBAdAHljBWy10mfSiM%2BlfT5zSmU%2F0PcBaw6gvHaD10NDhLGop%2BBmwMv6nMepUXOVLouQkuIkn68YIs%2FdY9G1I0c6OKfUmCWZaxWIF1IriRy9bluvmODXEO1yasREqiw8j4GE4DSLt4uQsHrpOZe%2FUA5G0I4V%2BZ5FPZK3%2BYkv2WKWpxOGikQVTE9dZSJj%2BXBuL7UjB2Odm0NovPked1qO%2BMXcl1dr1Dcb6abQYFgJAqeCbb6PK2FD2q552RYHLfn6tx3HMV8kdVDh6NEQmTmCewVmiG2qgwtLSpObab%2FFMgiTlWHnJb43fUnwbpqU7aEF7g2%2BGh%2FC8oh625shg%2B6SyjfDs%2Fbj712bqn0sY9tdnV9%2F8biMIbKybi0HH66S81AcQ92EiDMOFtGe5zD5SI4xDtEK7mJPChfFWHIulMYyWldvAD93cHrdzVFQjl12f%2FBaMX6TvUJOayNoKWA5Z3duD3PwA0YVBqtBz8%2FleIigHsq0HCxuDRSjtVH6cPvl6ndCVZiLYpoC49L0rn%2FHqbRfb9%2ByGm%2F5J1e8%2BL4sgyeR5X%2B%2FVBfr%2FjzB%2BJWFjwB%2FOb08G1EqEkZuVrhVWZzJaaEAuicGf%2Bsw3OzfvgY6pgH1t1%2FoPutv3Yy1Bnz4AopxfMNrlkv6bkdwhzudwghDgnTHJxlflsSUY4EPnQY0HdofmtsWYOcXnbVKkLtTLxGHkjhbPC8hd%2FN96I14WaKq3PKqspBnv6ID%2BgoUhSiNLw820EPPWTmqchMqC083Ku6LzdXyUx0SLS%2FUzLkaQnIHmH7M%2FTuWLYdU%2BKTVWW%2BHaFt05eIgcz%2BIXmUMeyMfhZiCfDq0L1%2FF&X-Amz-Signature=60b919c4480b2f9bce21b6e3ad964e2db62232337920d8275787eeb31cb0f076&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQTWOJV5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESOdtwAFiq6nEYe3UHdCeTwGDPvH4KHxC3r%2BjmSjN%2BfAiA3s9%2FiURYFl5pvpcvfTwOqEdB%2BXimw6SzObDeds8g50yr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDw933VeEI8HjucgJKtwDnNkpo6JeX4s6ZDpuOQWa0DZIW%2BldBm8urBAdAHljBWy10mfSiM%2BlfT5zSmU%2F0PcBaw6gvHaD10NDhLGop%2BBmwMv6nMepUXOVLouQkuIkn68YIs%2FdY9G1I0c6OKfUmCWZaxWIF1IriRy9bluvmODXEO1yasREqiw8j4GE4DSLt4uQsHrpOZe%2FUA5G0I4V%2BZ5FPZK3%2BYkv2WKWpxOGikQVTE9dZSJj%2BXBuL7UjB2Odm0NovPked1qO%2BMXcl1dr1Dcb6abQYFgJAqeCbb6PK2FD2q552RYHLfn6tx3HMV8kdVDh6NEQmTmCewVmiG2qgwtLSpObab%2FFMgiTlWHnJb43fUnwbpqU7aEF7g2%2BGh%2FC8oh625shg%2B6SyjfDs%2Fbj712bqn0sY9tdnV9%2F8biMIbKybi0HH66S81AcQ92EiDMOFtGe5zD5SI4xDtEK7mJPChfFWHIulMYyWldvAD93cHrdzVFQjl12f%2FBaMX6TvUJOayNoKWA5Z3duD3PwA0YVBqtBz8%2FleIigHsq0HCxuDRSjtVH6cPvl6ndCVZiLYpoC49L0rn%2FHqbRfb9%2ByGm%2F5J1e8%2BL4sgyeR5X%2B%2FVBfr%2FjzB%2BJWFjwB%2FOb08G1EqEkZuVrhVWZzJaaEAuicGf%2Bsw3OzfvgY6pgH1t1%2FoPutv3Yy1Bnz4AopxfMNrlkv6bkdwhzudwghDgnTHJxlflsSUY4EPnQY0HdofmtsWYOcXnbVKkLtTLxGHkjhbPC8hd%2FN96I14WaKq3PKqspBnv6ID%2BgoUhSiNLw820EPPWTmqchMqC083Ku6LzdXyUx0SLS%2FUzLkaQnIHmH7M%2FTuWLYdU%2BKTVWW%2BHaFt05eIgcz%2BIXmUMeyMfhZiCfDq0L1%2FF&X-Amz-Signature=9e2f7d0d4b4f37a0b1ea5fc88f7126df806a009615f33542a80f569c83f2be05&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQTWOJV5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESOdtwAFiq6nEYe3UHdCeTwGDPvH4KHxC3r%2BjmSjN%2BfAiA3s9%2FiURYFl5pvpcvfTwOqEdB%2BXimw6SzObDeds8g50yr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDw933VeEI8HjucgJKtwDnNkpo6JeX4s6ZDpuOQWa0DZIW%2BldBm8urBAdAHljBWy10mfSiM%2BlfT5zSmU%2F0PcBaw6gvHaD10NDhLGop%2BBmwMv6nMepUXOVLouQkuIkn68YIs%2FdY9G1I0c6OKfUmCWZaxWIF1IriRy9bluvmODXEO1yasREqiw8j4GE4DSLt4uQsHrpOZe%2FUA5G0I4V%2BZ5FPZK3%2BYkv2WKWpxOGikQVTE9dZSJj%2BXBuL7UjB2Odm0NovPked1qO%2BMXcl1dr1Dcb6abQYFgJAqeCbb6PK2FD2q552RYHLfn6tx3HMV8kdVDh6NEQmTmCewVmiG2qgwtLSpObab%2FFMgiTlWHnJb43fUnwbpqU7aEF7g2%2BGh%2FC8oh625shg%2B6SyjfDs%2Fbj712bqn0sY9tdnV9%2F8biMIbKybi0HH66S81AcQ92EiDMOFtGe5zD5SI4xDtEK7mJPChfFWHIulMYyWldvAD93cHrdzVFQjl12f%2FBaMX6TvUJOayNoKWA5Z3duD3PwA0YVBqtBz8%2FleIigHsq0HCxuDRSjtVH6cPvl6ndCVZiLYpoC49L0rn%2FHqbRfb9%2ByGm%2F5J1e8%2BL4sgyeR5X%2B%2FVBfr%2FjzB%2BJWFjwB%2FOb08G1EqEkZuVrhVWZzJaaEAuicGf%2Bsw3OzfvgY6pgH1t1%2FoPutv3Yy1Bnz4AopxfMNrlkv6bkdwhzudwghDgnTHJxlflsSUY4EPnQY0HdofmtsWYOcXnbVKkLtTLxGHkjhbPC8hd%2FN96I14WaKq3PKqspBnv6ID%2BgoUhSiNLw820EPPWTmqchMqC083Ku6LzdXyUx0SLS%2FUzLkaQnIHmH7M%2FTuWLYdU%2BKTVWW%2BHaFt05eIgcz%2BIXmUMeyMfhZiCfDq0L1%2FF&X-Amz-Signature=f75e029575afe190814f17a79c07bf5040d15298d79aa9d1cd548430e798eedd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQTWOJV5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESOdtwAFiq6nEYe3UHdCeTwGDPvH4KHxC3r%2BjmSjN%2BfAiA3s9%2FiURYFl5pvpcvfTwOqEdB%2BXimw6SzObDeds8g50yr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDw933VeEI8HjucgJKtwDnNkpo6JeX4s6ZDpuOQWa0DZIW%2BldBm8urBAdAHljBWy10mfSiM%2BlfT5zSmU%2F0PcBaw6gvHaD10NDhLGop%2BBmwMv6nMepUXOVLouQkuIkn68YIs%2FdY9G1I0c6OKfUmCWZaxWIF1IriRy9bluvmODXEO1yasREqiw8j4GE4DSLt4uQsHrpOZe%2FUA5G0I4V%2BZ5FPZK3%2BYkv2WKWpxOGikQVTE9dZSJj%2BXBuL7UjB2Odm0NovPked1qO%2BMXcl1dr1Dcb6abQYFgJAqeCbb6PK2FD2q552RYHLfn6tx3HMV8kdVDh6NEQmTmCewVmiG2qgwtLSpObab%2FFMgiTlWHnJb43fUnwbpqU7aEF7g2%2BGh%2FC8oh625shg%2B6SyjfDs%2Fbj712bqn0sY9tdnV9%2F8biMIbKybi0HH66S81AcQ92EiDMOFtGe5zD5SI4xDtEK7mJPChfFWHIulMYyWldvAD93cHrdzVFQjl12f%2FBaMX6TvUJOayNoKWA5Z3duD3PwA0YVBqtBz8%2FleIigHsq0HCxuDRSjtVH6cPvl6ndCVZiLYpoC49L0rn%2FHqbRfb9%2ByGm%2F5J1e8%2BL4sgyeR5X%2B%2FVBfr%2FjzB%2BJWFjwB%2FOb08G1EqEkZuVrhVWZzJaaEAuicGf%2Bsw3OzfvgY6pgH1t1%2FoPutv3Yy1Bnz4AopxfMNrlkv6bkdwhzudwghDgnTHJxlflsSUY4EPnQY0HdofmtsWYOcXnbVKkLtTLxGHkjhbPC8hd%2FN96I14WaKq3PKqspBnv6ID%2BgoUhSiNLw820EPPWTmqchMqC083Ku6LzdXyUx0SLS%2FUzLkaQnIHmH7M%2FTuWLYdU%2BKTVWW%2BHaFt05eIgcz%2BIXmUMeyMfhZiCfDq0L1%2FF&X-Amz-Signature=9a66d6fc0d82165f3414c9c054babbdd7e9705a2f6986d34ab2e618c3a43b177&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
