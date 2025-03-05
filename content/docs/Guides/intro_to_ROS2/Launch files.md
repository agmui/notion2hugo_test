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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBMR6UO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqRgxqbijTpsFRQo3e2Bg7qh0ZaK5vwXDlKdB2%2BEP4fAiBXpU29a0RobYL983Vqn2RhEt9FU1NRvWnD1xGUSxfz%2Bir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMbUnJadOZkca%2B%2BjYkKtwDmPojcpnw3S86CrdDlEpRfu5esbdAb1COCBFa0LcC6CzKuHDHWy7Oeg51flRZyrfFfyAKADLxC3YWY4c5NB%2BEtGkemb58PUfxioz0kLKdVJxzwS7TURmzF8tlJFYpYAUB%2FTSnrBf9oFi6Q94UAyzOBozQwo3BkNALA8dZ4JP%2BNBeT37VKBtj448gyKWqpO0Ng9NhHuMIWPH5WsuzZePZMXQ2uUvqQPOvUblQmDflUE895S7%2Fu2WVKPeojszF89sWktcUDs2MOvMfqJY9u5JqzwDByEN51j%2FMbQprljnwlv80ngc9M767zs4ldFksh56pjgTkNmGuHmSxpETp5ITPssQpcqdT2wtXq%2Bwz89MT%2FWIslpX9tQsA06pxoVd9kaIwVghFC5wXOEu8AtjrWCpWYE%2FD6PuBPMAeMjkDyDXD0uyUa7edzIBL5tK94ARpjyxNBK7jmalN90WX0cee9JoEXS2q0RV66a8UUDlS%2BvzLV8O0JvGy53myZaS3QuF%2BDVYDEWHeEl%2Faj2tkrRqNVp0RgifqjVG%2FyGqiObrXTJ%2BMMC8cu7R1ZJPTcdmhbV5ZBFM6IaR1On1BdlhBRmJFoWB6m0FNl%2FI3dW3T3iqO0yejByrfk3ANtgnPTnKVVfk4wsJahvgY6pgF2W6O1MFzrRZax0XlqmaMh3KB7iHq%2BhHY0CbgF5AF5oz9%2FW%2BtGNjC%2FJtQihLk1To4w8oj73ep34MwTyEUwdJSgR1Ll%2BU5l4ABafXGX3GHyiuWt939yo%2BhpO%2B%2FqfSjlPXZFkgGQMxHSSurokUgbHN7H%2Bvvv6aTUeRU7bHCvIE6iou1ySGWMFozoVmw9nMSTvlFidkBQ2VFgRCiCntid4bI%2BSzpUVx8U&X-Amz-Signature=f77c26109caa54ce93f580e1e4b4b73f4528ad1817b9a2a3eada8d6bf152da81&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBMR6UO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqRgxqbijTpsFRQo3e2Bg7qh0ZaK5vwXDlKdB2%2BEP4fAiBXpU29a0RobYL983Vqn2RhEt9FU1NRvWnD1xGUSxfz%2Bir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMbUnJadOZkca%2B%2BjYkKtwDmPojcpnw3S86CrdDlEpRfu5esbdAb1COCBFa0LcC6CzKuHDHWy7Oeg51flRZyrfFfyAKADLxC3YWY4c5NB%2BEtGkemb58PUfxioz0kLKdVJxzwS7TURmzF8tlJFYpYAUB%2FTSnrBf9oFi6Q94UAyzOBozQwo3BkNALA8dZ4JP%2BNBeT37VKBtj448gyKWqpO0Ng9NhHuMIWPH5WsuzZePZMXQ2uUvqQPOvUblQmDflUE895S7%2Fu2WVKPeojszF89sWktcUDs2MOvMfqJY9u5JqzwDByEN51j%2FMbQprljnwlv80ngc9M767zs4ldFksh56pjgTkNmGuHmSxpETp5ITPssQpcqdT2wtXq%2Bwz89MT%2FWIslpX9tQsA06pxoVd9kaIwVghFC5wXOEu8AtjrWCpWYE%2FD6PuBPMAeMjkDyDXD0uyUa7edzIBL5tK94ARpjyxNBK7jmalN90WX0cee9JoEXS2q0RV66a8UUDlS%2BvzLV8O0JvGy53myZaS3QuF%2BDVYDEWHeEl%2Faj2tkrRqNVp0RgifqjVG%2FyGqiObrXTJ%2BMMC8cu7R1ZJPTcdmhbV5ZBFM6IaR1On1BdlhBRmJFoWB6m0FNl%2FI3dW3T3iqO0yejByrfk3ANtgnPTnKVVfk4wsJahvgY6pgF2W6O1MFzrRZax0XlqmaMh3KB7iHq%2BhHY0CbgF5AF5oz9%2FW%2BtGNjC%2FJtQihLk1To4w8oj73ep34MwTyEUwdJSgR1Ll%2BU5l4ABafXGX3GHyiuWt939yo%2BhpO%2B%2FqfSjlPXZFkgGQMxHSSurokUgbHN7H%2Bvvv6aTUeRU7bHCvIE6iou1ySGWMFozoVmw9nMSTvlFidkBQ2VFgRCiCntid4bI%2BSzpUVx8U&X-Amz-Signature=e4b8757d60662723fd315e3c560e8de6bdf892916b42f5246b791b8a9fbcdb3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBMR6UO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqRgxqbijTpsFRQo3e2Bg7qh0ZaK5vwXDlKdB2%2BEP4fAiBXpU29a0RobYL983Vqn2RhEt9FU1NRvWnD1xGUSxfz%2Bir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMbUnJadOZkca%2B%2BjYkKtwDmPojcpnw3S86CrdDlEpRfu5esbdAb1COCBFa0LcC6CzKuHDHWy7Oeg51flRZyrfFfyAKADLxC3YWY4c5NB%2BEtGkemb58PUfxioz0kLKdVJxzwS7TURmzF8tlJFYpYAUB%2FTSnrBf9oFi6Q94UAyzOBozQwo3BkNALA8dZ4JP%2BNBeT37VKBtj448gyKWqpO0Ng9NhHuMIWPH5WsuzZePZMXQ2uUvqQPOvUblQmDflUE895S7%2Fu2WVKPeojszF89sWktcUDs2MOvMfqJY9u5JqzwDByEN51j%2FMbQprljnwlv80ngc9M767zs4ldFksh56pjgTkNmGuHmSxpETp5ITPssQpcqdT2wtXq%2Bwz89MT%2FWIslpX9tQsA06pxoVd9kaIwVghFC5wXOEu8AtjrWCpWYE%2FD6PuBPMAeMjkDyDXD0uyUa7edzIBL5tK94ARpjyxNBK7jmalN90WX0cee9JoEXS2q0RV66a8UUDlS%2BvzLV8O0JvGy53myZaS3QuF%2BDVYDEWHeEl%2Faj2tkrRqNVp0RgifqjVG%2FyGqiObrXTJ%2BMMC8cu7R1ZJPTcdmhbV5ZBFM6IaR1On1BdlhBRmJFoWB6m0FNl%2FI3dW3T3iqO0yejByrfk3ANtgnPTnKVVfk4wsJahvgY6pgF2W6O1MFzrRZax0XlqmaMh3KB7iHq%2BhHY0CbgF5AF5oz9%2FW%2BtGNjC%2FJtQihLk1To4w8oj73ep34MwTyEUwdJSgR1Ll%2BU5l4ABafXGX3GHyiuWt939yo%2BhpO%2B%2FqfSjlPXZFkgGQMxHSSurokUgbHN7H%2Bvvv6aTUeRU7bHCvIE6iou1ySGWMFozoVmw9nMSTvlFidkBQ2VFgRCiCntid4bI%2BSzpUVx8U&X-Amz-Signature=f1a7de102db4c3fc37145252588d1f9618331d4e008c8e87c716096cc6f9aa8b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
