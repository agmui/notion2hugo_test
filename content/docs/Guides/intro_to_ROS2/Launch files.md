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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWOI7JX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCUlcMQiXaO7IWFPj4VF6TJeti7gyDAg7srRYP7RVSV3gIgFaFIxvxEK2ZGKOnwWgfOuThmIgM2P5gV5q3VrvYPqiQqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wA%2B02nsd%2BslPadCrcAwzZsU4o1UoRQ20uPlsgsxKQbj%2BsSb9FOlpSHiXw72lLR3BjmHzzzHY5pEggsBigT%2FhiaUI9N7YT7YxWHOj2KyTKCpCLY%2B1ZSe6pzCyVx2iWQctstADjUI3C2HARXtmtbK4X9BhYbpxhek%2BTcV2G0lkN1n6PW%2Bdhiw1KWENdEuZPoZD3%2BxB7LFO8pzUYVxJse44g%2BzF9oWfxGivYshOgO9I9YdhedTZaI7bDpcxhXkg7HjpFVPQxo%2FLQN1d8umBu0hvY5sLTYuFFyEzTnv4aEAVwzrQqXMedeD8G6IdqlVZ%2BdVAEqo%2FuJZbOHU%2B0i14ZB2cWz0zCaaalXvMR8OfTiLADLZmO3b%2BBO3a52h1l5SlSY%2FCZ0DSZ1lkpXBjfQjTlPBQ%2BtCd8wFIbCkjP5WLz%2FKxV7FIF%2FsN4tcKyNCviOiJevyTX7QEc9tfV8ecWr0NX1Fkgtb4VM1fDaghZ7uYC2HwpsrdsFIG3YmXZIqlh2VIEZAlXFDnG2776%2FP1i68tNfBRvs5HDLMIfv75iBHVMWEUPnR82U%2FYPG%2BTpVcm9OnoCpIxPpJce%2BEFuQhbizBdJ6wUHUvj7fcejX47sas8wAqVEbycgpyRw4YIAzm5gEpkRZVlmsy3k4zu6%2Fs%2B6MOu3h8EGOqUBLJ3nbFrYIxaZVVB2CnsUSnztlScz3d4b%2FycRkLdjwdt4NENWRlsm00CkWVukDUKcU8q34ETv9GDijRJc1l4G26h9q7gpxTEgn9XVjJ0Gm3WfXrcHnovW8soSO8T8849KwiDFq7NOgLXo4TT2MoH6%2FXn4Yif%2FPEw91y7S%2ByVmaXhMnLDAjs5wbQMtSXN1ZDyo3opYutAf6hd6OuxmT3S1IH2wGFKW&X-Amz-Signature=01226e2fc783c22fa0994dc4eb2d27d3694cd6c750e25c64ff87c667a98c8f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWOI7JX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCUlcMQiXaO7IWFPj4VF6TJeti7gyDAg7srRYP7RVSV3gIgFaFIxvxEK2ZGKOnwWgfOuThmIgM2P5gV5q3VrvYPqiQqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wA%2B02nsd%2BslPadCrcAwzZsU4o1UoRQ20uPlsgsxKQbj%2BsSb9FOlpSHiXw72lLR3BjmHzzzHY5pEggsBigT%2FhiaUI9N7YT7YxWHOj2KyTKCpCLY%2B1ZSe6pzCyVx2iWQctstADjUI3C2HARXtmtbK4X9BhYbpxhek%2BTcV2G0lkN1n6PW%2Bdhiw1KWENdEuZPoZD3%2BxB7LFO8pzUYVxJse44g%2BzF9oWfxGivYshOgO9I9YdhedTZaI7bDpcxhXkg7HjpFVPQxo%2FLQN1d8umBu0hvY5sLTYuFFyEzTnv4aEAVwzrQqXMedeD8G6IdqlVZ%2BdVAEqo%2FuJZbOHU%2B0i14ZB2cWz0zCaaalXvMR8OfTiLADLZmO3b%2BBO3a52h1l5SlSY%2FCZ0DSZ1lkpXBjfQjTlPBQ%2BtCd8wFIbCkjP5WLz%2FKxV7FIF%2FsN4tcKyNCviOiJevyTX7QEc9tfV8ecWr0NX1Fkgtb4VM1fDaghZ7uYC2HwpsrdsFIG3YmXZIqlh2VIEZAlXFDnG2776%2FP1i68tNfBRvs5HDLMIfv75iBHVMWEUPnR82U%2FYPG%2BTpVcm9OnoCpIxPpJce%2BEFuQhbizBdJ6wUHUvj7fcejX47sas8wAqVEbycgpyRw4YIAzm5gEpkRZVlmsy3k4zu6%2Fs%2B6MOu3h8EGOqUBLJ3nbFrYIxaZVVB2CnsUSnztlScz3d4b%2FycRkLdjwdt4NENWRlsm00CkWVukDUKcU8q34ETv9GDijRJc1l4G26h9q7gpxTEgn9XVjJ0Gm3WfXrcHnovW8soSO8T8849KwiDFq7NOgLXo4TT2MoH6%2FXn4Yif%2FPEw91y7S%2ByVmaXhMnLDAjs5wbQMtSXN1ZDyo3opYutAf6hd6OuxmT3S1IH2wGFKW&X-Amz-Signature=88c415a7d82dd7cebc9fecb3b10751759730ea750086b50b5418d814067feee5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWOI7JX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCUlcMQiXaO7IWFPj4VF6TJeti7gyDAg7srRYP7RVSV3gIgFaFIxvxEK2ZGKOnwWgfOuThmIgM2P5gV5q3VrvYPqiQqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wA%2B02nsd%2BslPadCrcAwzZsU4o1UoRQ20uPlsgsxKQbj%2BsSb9FOlpSHiXw72lLR3BjmHzzzHY5pEggsBigT%2FhiaUI9N7YT7YxWHOj2KyTKCpCLY%2B1ZSe6pzCyVx2iWQctstADjUI3C2HARXtmtbK4X9BhYbpxhek%2BTcV2G0lkN1n6PW%2Bdhiw1KWENdEuZPoZD3%2BxB7LFO8pzUYVxJse44g%2BzF9oWfxGivYshOgO9I9YdhedTZaI7bDpcxhXkg7HjpFVPQxo%2FLQN1d8umBu0hvY5sLTYuFFyEzTnv4aEAVwzrQqXMedeD8G6IdqlVZ%2BdVAEqo%2FuJZbOHU%2B0i14ZB2cWz0zCaaalXvMR8OfTiLADLZmO3b%2BBO3a52h1l5SlSY%2FCZ0DSZ1lkpXBjfQjTlPBQ%2BtCd8wFIbCkjP5WLz%2FKxV7FIF%2FsN4tcKyNCviOiJevyTX7QEc9tfV8ecWr0NX1Fkgtb4VM1fDaghZ7uYC2HwpsrdsFIG3YmXZIqlh2VIEZAlXFDnG2776%2FP1i68tNfBRvs5HDLMIfv75iBHVMWEUPnR82U%2FYPG%2BTpVcm9OnoCpIxPpJce%2BEFuQhbizBdJ6wUHUvj7fcejX47sas8wAqVEbycgpyRw4YIAzm5gEpkRZVlmsy3k4zu6%2Fs%2B6MOu3h8EGOqUBLJ3nbFrYIxaZVVB2CnsUSnztlScz3d4b%2FycRkLdjwdt4NENWRlsm00CkWVukDUKcU8q34ETv9GDijRJc1l4G26h9q7gpxTEgn9XVjJ0Gm3WfXrcHnovW8soSO8T8849KwiDFq7NOgLXo4TT2MoH6%2FXn4Yif%2FPEw91y7S%2ByVmaXhMnLDAjs5wbQMtSXN1ZDyo3opYutAf6hd6OuxmT3S1IH2wGFKW&X-Amz-Signature=20e9ac52a400878f38d2c359faa9e79fb82b02902a75d3248c069bd70204ecda&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
