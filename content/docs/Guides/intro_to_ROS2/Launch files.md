---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPEUMPUU%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2BHZ%2BhwMipfqL7sQpuEmhYfTt0T2Q3COXOHdBKBcT9%2FwIgcgyJAcowxSD1EngUcTCuTOAFzfasesKO0PucHnUENPoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFwV5xOYxsODNQO8vSrcA452mpy6jteeHD%2BmVK2y5u4QSvOKiWdnmjxYyFR4kw5oCNftXkxVhNP4YOZxiS17o8dGOVeDzqAA0pB504ZwNb5iBDB0ySIWQyULAYgMmaoJf1eJuV%2Bk1IH0vIxdoo6MxN027YkPGrG%2FQBNfd5PbrPEf%2BM9lOG5g5EJCbtCQOKm4XhLhWl%2Bp5NUmnjb%2FRSDbItwYDkMrU4suRpg1IBCIZxdTdEE2G2BSVxkN576Kegxg450vRw8518WF93FYT6Sii7YHOIkijByDypN2mK5dhNvL3GZ9jmXTYYSPMcajqECrhapH4nKRgv4B1Y9tf67V7li0v8twb6%2F8HeKm2%2B1IVWHe8eB3AKZMVMzb5AhR6C4PWpxlOnl4D7xKryz1d6WARhQCWIGItb65fgib7iy8EdEFSKrE3YKZrbDYeZIzsEkyR9%2BMhML3XRwU8DQjXCntKg4ElSwTV9rC2NWwZm4hk1OdjfKOWVZj9F2BiG0b0sRSghXNUUgPJuc%2BnGJizkLAEgqLz8MAedsfAInq7cUOI2m0ayJKEnXzGSlEEm30mPhqK4HoS%2FlWclXXTnrJdwtPbM6fmhaocmmNOZGY4hu6A1r4MCcug%2FH4Ck2cWmOYg5z2GEEYPyJrmZCkeL4RMM6f%2Fr0GOqUBpRg93YbVrxqg0jgs6cigcP52nzjefe3EMdTshTmVj5N0d69KdCnvPlGBWAccxikk9y5kvP%2FzbIFihcgadNi3b8tmwWxSST36tjIvYNHMu7fxEBFo%2FBKIO25T0BaYeREH9cz%2BkzEUfkMLwZEVMwftUksiQZAN37uuHSJwuIFwxC7N3eSQkjV1iXak%2F%2FujNQjQL3fT3zECEmNTFBkO49EGWJd8TVLW&X-Amz-Signature=7670b8caefdfc7729405dfe6ae4887563b2c20470abb3c2f8ba951657a2c10a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPEUMPUU%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2BHZ%2BhwMipfqL7sQpuEmhYfTt0T2Q3COXOHdBKBcT9%2FwIgcgyJAcowxSD1EngUcTCuTOAFzfasesKO0PucHnUENPoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFwV5xOYxsODNQO8vSrcA452mpy6jteeHD%2BmVK2y5u4QSvOKiWdnmjxYyFR4kw5oCNftXkxVhNP4YOZxiS17o8dGOVeDzqAA0pB504ZwNb5iBDB0ySIWQyULAYgMmaoJf1eJuV%2Bk1IH0vIxdoo6MxN027YkPGrG%2FQBNfd5PbrPEf%2BM9lOG5g5EJCbtCQOKm4XhLhWl%2Bp5NUmnjb%2FRSDbItwYDkMrU4suRpg1IBCIZxdTdEE2G2BSVxkN576Kegxg450vRw8518WF93FYT6Sii7YHOIkijByDypN2mK5dhNvL3GZ9jmXTYYSPMcajqECrhapH4nKRgv4B1Y9tf67V7li0v8twb6%2F8HeKm2%2B1IVWHe8eB3AKZMVMzb5AhR6C4PWpxlOnl4D7xKryz1d6WARhQCWIGItb65fgib7iy8EdEFSKrE3YKZrbDYeZIzsEkyR9%2BMhML3XRwU8DQjXCntKg4ElSwTV9rC2NWwZm4hk1OdjfKOWVZj9F2BiG0b0sRSghXNUUgPJuc%2BnGJizkLAEgqLz8MAedsfAInq7cUOI2m0ayJKEnXzGSlEEm30mPhqK4HoS%2FlWclXXTnrJdwtPbM6fmhaocmmNOZGY4hu6A1r4MCcug%2FH4Ck2cWmOYg5z2GEEYPyJrmZCkeL4RMM6f%2Fr0GOqUBpRg93YbVrxqg0jgs6cigcP52nzjefe3EMdTshTmVj5N0d69KdCnvPlGBWAccxikk9y5kvP%2FzbIFihcgadNi3b8tmwWxSST36tjIvYNHMu7fxEBFo%2FBKIO25T0BaYeREH9cz%2BkzEUfkMLwZEVMwftUksiQZAN37uuHSJwuIFwxC7N3eSQkjV1iXak%2F%2FujNQjQL3fT3zECEmNTFBkO49EGWJd8TVLW&X-Amz-Signature=cb81baa3e42500b52c546fb54f2dab8fc7196bab43f473bf8ce27f0937116ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPEUMPUU%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2BHZ%2BhwMipfqL7sQpuEmhYfTt0T2Q3COXOHdBKBcT9%2FwIgcgyJAcowxSD1EngUcTCuTOAFzfasesKO0PucHnUENPoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFwV5xOYxsODNQO8vSrcA452mpy6jteeHD%2BmVK2y5u4QSvOKiWdnmjxYyFR4kw5oCNftXkxVhNP4YOZxiS17o8dGOVeDzqAA0pB504ZwNb5iBDB0ySIWQyULAYgMmaoJf1eJuV%2Bk1IH0vIxdoo6MxN027YkPGrG%2FQBNfd5PbrPEf%2BM9lOG5g5EJCbtCQOKm4XhLhWl%2Bp5NUmnjb%2FRSDbItwYDkMrU4suRpg1IBCIZxdTdEE2G2BSVxkN576Kegxg450vRw8518WF93FYT6Sii7YHOIkijByDypN2mK5dhNvL3GZ9jmXTYYSPMcajqECrhapH4nKRgv4B1Y9tf67V7li0v8twb6%2F8HeKm2%2B1IVWHe8eB3AKZMVMzb5AhR6C4PWpxlOnl4D7xKryz1d6WARhQCWIGItb65fgib7iy8EdEFSKrE3YKZrbDYeZIzsEkyR9%2BMhML3XRwU8DQjXCntKg4ElSwTV9rC2NWwZm4hk1OdjfKOWVZj9F2BiG0b0sRSghXNUUgPJuc%2BnGJizkLAEgqLz8MAedsfAInq7cUOI2m0ayJKEnXzGSlEEm30mPhqK4HoS%2FlWclXXTnrJdwtPbM6fmhaocmmNOZGY4hu6A1r4MCcug%2FH4Ck2cWmOYg5z2GEEYPyJrmZCkeL4RMM6f%2Fr0GOqUBpRg93YbVrxqg0jgs6cigcP52nzjefe3EMdTshTmVj5N0d69KdCnvPlGBWAccxikk9y5kvP%2FzbIFihcgadNi3b8tmwWxSST36tjIvYNHMu7fxEBFo%2FBKIO25T0BaYeREH9cz%2BkzEUfkMLwZEVMwftUksiQZAN37uuHSJwuIFwxC7N3eSQkjV1iXak%2F%2FujNQjQL3fT3zECEmNTFBkO49EGWJd8TVLW&X-Amz-Signature=b00619293e333474c07b84e40f61e2b16b1f4cd2f757fed4cf5c16c309171567&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
