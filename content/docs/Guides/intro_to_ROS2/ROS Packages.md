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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q26POWON%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENsAcVsdBIZoZLAhuZrTPDfkv%2BnB0kK%2FwpUhs%2FjCNz0AiEAu5nwIYYXlWdPCqF6e8FdB4o72VTX7e6MxYxv84CCqmEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPtzEZaIojJqFnBRircA5jfg74LMzwtgRN6yk41C6Xq00OPsGxJDPcVCx09y77P%2FLiQM6LLlvZjjUGThvCGqnxMJcFmAFXEIOHxMeqDzVYOZhZy9RNU%2BF9%2Fjitl5tpnRRqXOv9IMtYV3upeg%2BOGjTbcl%2Fxslkf%2FGaViviMC0fXUi%2BQS%2B%2Fwc5pC1duSFvPqDk%2BYOUDPjBbfELx3sl%2FHwGaMpEFdZ8AkRxRW5hvQk0XX%2BRtkXylmemm%2FEqvVdnauA27uolF0tYsT0hVLyMxzylQ%2BJ%2BRDkFmDpx1zAPHWVIi5WTak959zxNS6n9bVvnB3vo%2F2onuIQp5FRnrjeZC6xhHvkZl%2Bmg2z4TzlaWgSdqEwvpnULDl5avOzJTOkvq%2Bjo3XyDB7Ie9a7rg2zEL8h6KRwKqG4h9du4LCTbMaVTNZEeYc51d9dcdbA%2BlGVDqHuIom99T3AuUoDh%2Fa3l2WyalRRrhoUVqhkzDe0P3GmZN2uom4WPcSjlhsYKfY8QsHinqzmKafhnSm2LlkAOrvbpNEqvjskC1Dtz%2FNwkxvg8vSrQRjyQU%2Fl4m57eitZRwnQae2qvK%2FDnYv80NxARf8B5V9hUoQR8F5%2BaVBo0VtMo%2F1WnOY86VpQW31XLuZF5x1rPoeJvviW%2F%2BgB7Odd4MPW8lsMGOqUBJbK4P8fyXEYuaCdneV90JKTXTArpaK66%2BkF2l3XRgU43e215h3Cmf61fwBeCJlBIoy8Se%2BYj7x0G0JuGb6IwvYPGSJpqiptbIrRI9TtlcPVDDA%2BbATLFn59oWm3cliV0xOVNwQlOcK9go8q0jXvc1PqHXvCnZHPQnAoYq0KeY3pVjMfy0Zf9TF5ska20G82WdvY%2BjmZ0qeCqzXKLPjrZ5dNH4uEV&X-Amz-Signature=753060702872868116e3855399e00ff66a21fa915ff9b4d5643abefe9942d55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q26POWON%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENsAcVsdBIZoZLAhuZrTPDfkv%2BnB0kK%2FwpUhs%2FjCNz0AiEAu5nwIYYXlWdPCqF6e8FdB4o72VTX7e6MxYxv84CCqmEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPtzEZaIojJqFnBRircA5jfg74LMzwtgRN6yk41C6Xq00OPsGxJDPcVCx09y77P%2FLiQM6LLlvZjjUGThvCGqnxMJcFmAFXEIOHxMeqDzVYOZhZy9RNU%2BF9%2Fjitl5tpnRRqXOv9IMtYV3upeg%2BOGjTbcl%2Fxslkf%2FGaViviMC0fXUi%2BQS%2B%2Fwc5pC1duSFvPqDk%2BYOUDPjBbfELx3sl%2FHwGaMpEFdZ8AkRxRW5hvQk0XX%2BRtkXylmemm%2FEqvVdnauA27uolF0tYsT0hVLyMxzylQ%2BJ%2BRDkFmDpx1zAPHWVIi5WTak959zxNS6n9bVvnB3vo%2F2onuIQp5FRnrjeZC6xhHvkZl%2Bmg2z4TzlaWgSdqEwvpnULDl5avOzJTOkvq%2Bjo3XyDB7Ie9a7rg2zEL8h6KRwKqG4h9du4LCTbMaVTNZEeYc51d9dcdbA%2BlGVDqHuIom99T3AuUoDh%2Fa3l2WyalRRrhoUVqhkzDe0P3GmZN2uom4WPcSjlhsYKfY8QsHinqzmKafhnSm2LlkAOrvbpNEqvjskC1Dtz%2FNwkxvg8vSrQRjyQU%2Fl4m57eitZRwnQae2qvK%2FDnYv80NxARf8B5V9hUoQR8F5%2BaVBo0VtMo%2F1WnOY86VpQW31XLuZF5x1rPoeJvviW%2F%2BgB7Odd4MPW8lsMGOqUBJbK4P8fyXEYuaCdneV90JKTXTArpaK66%2BkF2l3XRgU43e215h3Cmf61fwBeCJlBIoy8Se%2BYj7x0G0JuGb6IwvYPGSJpqiptbIrRI9TtlcPVDDA%2BbATLFn59oWm3cliV0xOVNwQlOcK9go8q0jXvc1PqHXvCnZHPQnAoYq0KeY3pVjMfy0Zf9TF5ska20G82WdvY%2BjmZ0qeCqzXKLPjrZ5dNH4uEV&X-Amz-Signature=e2b0a78054d499b6544d7118967dd5d2af82b3644307e510fc265f9553ccb1bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q26POWON%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENsAcVsdBIZoZLAhuZrTPDfkv%2BnB0kK%2FwpUhs%2FjCNz0AiEAu5nwIYYXlWdPCqF6e8FdB4o72VTX7e6MxYxv84CCqmEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPtzEZaIojJqFnBRircA5jfg74LMzwtgRN6yk41C6Xq00OPsGxJDPcVCx09y77P%2FLiQM6LLlvZjjUGThvCGqnxMJcFmAFXEIOHxMeqDzVYOZhZy9RNU%2BF9%2Fjitl5tpnRRqXOv9IMtYV3upeg%2BOGjTbcl%2Fxslkf%2FGaViviMC0fXUi%2BQS%2B%2Fwc5pC1duSFvPqDk%2BYOUDPjBbfELx3sl%2FHwGaMpEFdZ8AkRxRW5hvQk0XX%2BRtkXylmemm%2FEqvVdnauA27uolF0tYsT0hVLyMxzylQ%2BJ%2BRDkFmDpx1zAPHWVIi5WTak959zxNS6n9bVvnB3vo%2F2onuIQp5FRnrjeZC6xhHvkZl%2Bmg2z4TzlaWgSdqEwvpnULDl5avOzJTOkvq%2Bjo3XyDB7Ie9a7rg2zEL8h6KRwKqG4h9du4LCTbMaVTNZEeYc51d9dcdbA%2BlGVDqHuIom99T3AuUoDh%2Fa3l2WyalRRrhoUVqhkzDe0P3GmZN2uom4WPcSjlhsYKfY8QsHinqzmKafhnSm2LlkAOrvbpNEqvjskC1Dtz%2FNwkxvg8vSrQRjyQU%2Fl4m57eitZRwnQae2qvK%2FDnYv80NxARf8B5V9hUoQR8F5%2BaVBo0VtMo%2F1WnOY86VpQW31XLuZF5x1rPoeJvviW%2F%2BgB7Odd4MPW8lsMGOqUBJbK4P8fyXEYuaCdneV90JKTXTArpaK66%2BkF2l3XRgU43e215h3Cmf61fwBeCJlBIoy8Se%2BYj7x0G0JuGb6IwvYPGSJpqiptbIrRI9TtlcPVDDA%2BbATLFn59oWm3cliV0xOVNwQlOcK9go8q0jXvc1PqHXvCnZHPQnAoYq0KeY3pVjMfy0Zf9TF5ska20G82WdvY%2BjmZ0qeCqzXKLPjrZ5dNH4uEV&X-Amz-Signature=038dca13f646927030b792e6adba5552beb77820e890caa3a2b0b229d0a8f03e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q26POWON%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENsAcVsdBIZoZLAhuZrTPDfkv%2BnB0kK%2FwpUhs%2FjCNz0AiEAu5nwIYYXlWdPCqF6e8FdB4o72VTX7e6MxYxv84CCqmEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPtzEZaIojJqFnBRircA5jfg74LMzwtgRN6yk41C6Xq00OPsGxJDPcVCx09y77P%2FLiQM6LLlvZjjUGThvCGqnxMJcFmAFXEIOHxMeqDzVYOZhZy9RNU%2BF9%2Fjitl5tpnRRqXOv9IMtYV3upeg%2BOGjTbcl%2Fxslkf%2FGaViviMC0fXUi%2BQS%2B%2Fwc5pC1duSFvPqDk%2BYOUDPjBbfELx3sl%2FHwGaMpEFdZ8AkRxRW5hvQk0XX%2BRtkXylmemm%2FEqvVdnauA27uolF0tYsT0hVLyMxzylQ%2BJ%2BRDkFmDpx1zAPHWVIi5WTak959zxNS6n9bVvnB3vo%2F2onuIQp5FRnrjeZC6xhHvkZl%2Bmg2z4TzlaWgSdqEwvpnULDl5avOzJTOkvq%2Bjo3XyDB7Ie9a7rg2zEL8h6KRwKqG4h9du4LCTbMaVTNZEeYc51d9dcdbA%2BlGVDqHuIom99T3AuUoDh%2Fa3l2WyalRRrhoUVqhkzDe0P3GmZN2uom4WPcSjlhsYKfY8QsHinqzmKafhnSm2LlkAOrvbpNEqvjskC1Dtz%2FNwkxvg8vSrQRjyQU%2Fl4m57eitZRwnQae2qvK%2FDnYv80NxARf8B5V9hUoQR8F5%2BaVBo0VtMo%2F1WnOY86VpQW31XLuZF5x1rPoeJvviW%2F%2BgB7Odd4MPW8lsMGOqUBJbK4P8fyXEYuaCdneV90JKTXTArpaK66%2BkF2l3XRgU43e215h3Cmf61fwBeCJlBIoy8Se%2BYj7x0G0JuGb6IwvYPGSJpqiptbIrRI9TtlcPVDDA%2BbATLFn59oWm3cliV0xOVNwQlOcK9go8q0jXvc1PqHXvCnZHPQnAoYq0KeY3pVjMfy0Zf9TF5ska20G82WdvY%2BjmZ0qeCqzXKLPjrZ5dNH4uEV&X-Amz-Signature=608cbb5eae54e46d596f810769f462bf6ed0b538a7c53c2d8a7ec21f2c9e7638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q26POWON%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENsAcVsdBIZoZLAhuZrTPDfkv%2BnB0kK%2FwpUhs%2FjCNz0AiEAu5nwIYYXlWdPCqF6e8FdB4o72VTX7e6MxYxv84CCqmEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPtzEZaIojJqFnBRircA5jfg74LMzwtgRN6yk41C6Xq00OPsGxJDPcVCx09y77P%2FLiQM6LLlvZjjUGThvCGqnxMJcFmAFXEIOHxMeqDzVYOZhZy9RNU%2BF9%2Fjitl5tpnRRqXOv9IMtYV3upeg%2BOGjTbcl%2Fxslkf%2FGaViviMC0fXUi%2BQS%2B%2Fwc5pC1duSFvPqDk%2BYOUDPjBbfELx3sl%2FHwGaMpEFdZ8AkRxRW5hvQk0XX%2BRtkXylmemm%2FEqvVdnauA27uolF0tYsT0hVLyMxzylQ%2BJ%2BRDkFmDpx1zAPHWVIi5WTak959zxNS6n9bVvnB3vo%2F2onuIQp5FRnrjeZC6xhHvkZl%2Bmg2z4TzlaWgSdqEwvpnULDl5avOzJTOkvq%2Bjo3XyDB7Ie9a7rg2zEL8h6KRwKqG4h9du4LCTbMaVTNZEeYc51d9dcdbA%2BlGVDqHuIom99T3AuUoDh%2Fa3l2WyalRRrhoUVqhkzDe0P3GmZN2uom4WPcSjlhsYKfY8QsHinqzmKafhnSm2LlkAOrvbpNEqvjskC1Dtz%2FNwkxvg8vSrQRjyQU%2Fl4m57eitZRwnQae2qvK%2FDnYv80NxARf8B5V9hUoQR8F5%2BaVBo0VtMo%2F1WnOY86VpQW31XLuZF5x1rPoeJvviW%2F%2BgB7Odd4MPW8lsMGOqUBJbK4P8fyXEYuaCdneV90JKTXTArpaK66%2BkF2l3XRgU43e215h3Cmf61fwBeCJlBIoy8Se%2BYj7x0G0JuGb6IwvYPGSJpqiptbIrRI9TtlcPVDDA%2BbATLFn59oWm3cliV0xOVNwQlOcK9go8q0jXvc1PqHXvCnZHPQnAoYq0KeY3pVjMfy0Zf9TF5ska20G82WdvY%2BjmZ0qeCqzXKLPjrZ5dNH4uEV&X-Amz-Signature=326ba3ab75404290fde510b94145db1c244e36950f2f06ecbe70e5c314e20a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q26POWON%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENsAcVsdBIZoZLAhuZrTPDfkv%2BnB0kK%2FwpUhs%2FjCNz0AiEAu5nwIYYXlWdPCqF6e8FdB4o72VTX7e6MxYxv84CCqmEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPtzEZaIojJqFnBRircA5jfg74LMzwtgRN6yk41C6Xq00OPsGxJDPcVCx09y77P%2FLiQM6LLlvZjjUGThvCGqnxMJcFmAFXEIOHxMeqDzVYOZhZy9RNU%2BF9%2Fjitl5tpnRRqXOv9IMtYV3upeg%2BOGjTbcl%2Fxslkf%2FGaViviMC0fXUi%2BQS%2B%2Fwc5pC1duSFvPqDk%2BYOUDPjBbfELx3sl%2FHwGaMpEFdZ8AkRxRW5hvQk0XX%2BRtkXylmemm%2FEqvVdnauA27uolF0tYsT0hVLyMxzylQ%2BJ%2BRDkFmDpx1zAPHWVIi5WTak959zxNS6n9bVvnB3vo%2F2onuIQp5FRnrjeZC6xhHvkZl%2Bmg2z4TzlaWgSdqEwvpnULDl5avOzJTOkvq%2Bjo3XyDB7Ie9a7rg2zEL8h6KRwKqG4h9du4LCTbMaVTNZEeYc51d9dcdbA%2BlGVDqHuIom99T3AuUoDh%2Fa3l2WyalRRrhoUVqhkzDe0P3GmZN2uom4WPcSjlhsYKfY8QsHinqzmKafhnSm2LlkAOrvbpNEqvjskC1Dtz%2FNwkxvg8vSrQRjyQU%2Fl4m57eitZRwnQae2qvK%2FDnYv80NxARf8B5V9hUoQR8F5%2BaVBo0VtMo%2F1WnOY86VpQW31XLuZF5x1rPoeJvviW%2F%2BgB7Odd4MPW8lsMGOqUBJbK4P8fyXEYuaCdneV90JKTXTArpaK66%2BkF2l3XRgU43e215h3Cmf61fwBeCJlBIoy8Se%2BYj7x0G0JuGb6IwvYPGSJpqiptbIrRI9TtlcPVDDA%2BbATLFn59oWm3cliV0xOVNwQlOcK9go8q0jXvc1PqHXvCnZHPQnAoYq0KeY3pVjMfy0Zf9TF5ska20G82WdvY%2BjmZ0qeCqzXKLPjrZ5dNH4uEV&X-Amz-Signature=a4c72c94c180762c7a007de8845f1a3849dfb422e569655a4470fbe1a506b84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q26POWON%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENsAcVsdBIZoZLAhuZrTPDfkv%2BnB0kK%2FwpUhs%2FjCNz0AiEAu5nwIYYXlWdPCqF6e8FdB4o72VTX7e6MxYxv84CCqmEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPtzEZaIojJqFnBRircA5jfg74LMzwtgRN6yk41C6Xq00OPsGxJDPcVCx09y77P%2FLiQM6LLlvZjjUGThvCGqnxMJcFmAFXEIOHxMeqDzVYOZhZy9RNU%2BF9%2Fjitl5tpnRRqXOv9IMtYV3upeg%2BOGjTbcl%2Fxslkf%2FGaViviMC0fXUi%2BQS%2B%2Fwc5pC1duSFvPqDk%2BYOUDPjBbfELx3sl%2FHwGaMpEFdZ8AkRxRW5hvQk0XX%2BRtkXylmemm%2FEqvVdnauA27uolF0tYsT0hVLyMxzylQ%2BJ%2BRDkFmDpx1zAPHWVIi5WTak959zxNS6n9bVvnB3vo%2F2onuIQp5FRnrjeZC6xhHvkZl%2Bmg2z4TzlaWgSdqEwvpnULDl5avOzJTOkvq%2Bjo3XyDB7Ie9a7rg2zEL8h6KRwKqG4h9du4LCTbMaVTNZEeYc51d9dcdbA%2BlGVDqHuIom99T3AuUoDh%2Fa3l2WyalRRrhoUVqhkzDe0P3GmZN2uom4WPcSjlhsYKfY8QsHinqzmKafhnSm2LlkAOrvbpNEqvjskC1Dtz%2FNwkxvg8vSrQRjyQU%2Fl4m57eitZRwnQae2qvK%2FDnYv80NxARf8B5V9hUoQR8F5%2BaVBo0VtMo%2F1WnOY86VpQW31XLuZF5x1rPoeJvviW%2F%2BgB7Odd4MPW8lsMGOqUBJbK4P8fyXEYuaCdneV90JKTXTArpaK66%2BkF2l3XRgU43e215h3Cmf61fwBeCJlBIoy8Se%2BYj7x0G0JuGb6IwvYPGSJpqiptbIrRI9TtlcPVDDA%2BbATLFn59oWm3cliV0xOVNwQlOcK9go8q0jXvc1PqHXvCnZHPQnAoYq0KeY3pVjMfy0Zf9TF5ska20G82WdvY%2BjmZ0qeCqzXKLPjrZ5dNH4uEV&X-Amz-Signature=b2cfa576adbd68ead55d039a5b8b1b17623f0e5fd45850648e1096368c4c3326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
