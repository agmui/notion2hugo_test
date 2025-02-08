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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXFCGNY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDoObXyZUPk6snS8TMJAzn5g78wuePWiJi6yoacn1v38QIhAMQyFr9WedhM1474yE7yrKzeAVBCXwbjnugRNvC0Kph2KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwV1un%2B9OD7uJeCucq3AN2H56BwTZSVnrmBoM0d6uFI9K8GGNMazuB8GXz3L7bpXRuIxvv9xp2RIMfu%2FGp7ZXku3vdI1mAJ58wy6hRIQFy7DtlXhfi2vdnnX3h8ebn8sl%2F%2BziqlyCZBdULUZ535L5Gf6xcjHyf9l0gZlz6Os6WaIA5U3wP%2Fu1hdH8k%2F1%2BsP3Ai%2FxbCsV5Jrqxcwctyz6W2s0YMCNn4N4QtflKZKd0zcSW1rTVYL2xvaqbMZrY5pD2QeYbsxRf97Jw%2FkfcuHYIusv23B2xGr1IRZlu2kmzQgiIVvS0EUZXzxJi9M9%2Bnwie2eOHvzQqsxdA7vXF1dADCZgm6Br6iynvWXv34ii1fW1cGmWtTCNOUOY3evTfgnAxWRHCEp4vqy3ooRRgxQMgAe7kub1vWHh1MkJQLylxv%2BErB%2FdoA83m0%2BANsVa7GkSaqC%2B%2FAXgJUi6Wi5mUzmUECl0RZwm1qHxeZvfqczHafD5hpr4%2FeDRsBtK%2BT5bWaar5Sjtq6%2Fcbys1hSFg82aQevACuLsflNaIILrEFP95V7xPzu39rRIsVgiMFCDNJ0IG%2FTJBkqqC10EOtbAdQ%2BvlTF9VXWgIna2OswTAiAQasYprUYkcz9qF7joViGyoRr92PR9xoEuCoYAF67%2FjC7kJy9BjqkAUt48bI0B3BQ%2ByRRaYbzIaMqYLvaiaCpLs6K4ylzz6DRNy%2Bq1iFRiTrQHvVVSx%2BBv7uMwdeqCo75dPXIVTG4cZ6hVDA1WYknykWkBnlFIJEXYGa%2FPy39GwLOry1uIdges4D%2BmzdFS3Y1o56kwxzHNHuk8vR5NAw28zILqPa%2FXiIJ70tn3pczyUsjJGIl5HzMH749eXajKXqSvKcdsae9uaSN1q3f&X-Amz-Signature=6c9339b5b1fef2ab5e242bb7d68d78c3208d75025915c4c4b49a3650cfab1826&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXFCGNY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDoObXyZUPk6snS8TMJAzn5g78wuePWiJi6yoacn1v38QIhAMQyFr9WedhM1474yE7yrKzeAVBCXwbjnugRNvC0Kph2KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwV1un%2B9OD7uJeCucq3AN2H56BwTZSVnrmBoM0d6uFI9K8GGNMazuB8GXz3L7bpXRuIxvv9xp2RIMfu%2FGp7ZXku3vdI1mAJ58wy6hRIQFy7DtlXhfi2vdnnX3h8ebn8sl%2F%2BziqlyCZBdULUZ535L5Gf6xcjHyf9l0gZlz6Os6WaIA5U3wP%2Fu1hdH8k%2F1%2BsP3Ai%2FxbCsV5Jrqxcwctyz6W2s0YMCNn4N4QtflKZKd0zcSW1rTVYL2xvaqbMZrY5pD2QeYbsxRf97Jw%2FkfcuHYIusv23B2xGr1IRZlu2kmzQgiIVvS0EUZXzxJi9M9%2Bnwie2eOHvzQqsxdA7vXF1dADCZgm6Br6iynvWXv34ii1fW1cGmWtTCNOUOY3evTfgnAxWRHCEp4vqy3ooRRgxQMgAe7kub1vWHh1MkJQLylxv%2BErB%2FdoA83m0%2BANsVa7GkSaqC%2B%2FAXgJUi6Wi5mUzmUECl0RZwm1qHxeZvfqczHafD5hpr4%2FeDRsBtK%2BT5bWaar5Sjtq6%2Fcbys1hSFg82aQevACuLsflNaIILrEFP95V7xPzu39rRIsVgiMFCDNJ0IG%2FTJBkqqC10EOtbAdQ%2BvlTF9VXWgIna2OswTAiAQasYprUYkcz9qF7joViGyoRr92PR9xoEuCoYAF67%2FjC7kJy9BjqkAUt48bI0B3BQ%2ByRRaYbzIaMqYLvaiaCpLs6K4ylzz6DRNy%2Bq1iFRiTrQHvVVSx%2BBv7uMwdeqCo75dPXIVTG4cZ6hVDA1WYknykWkBnlFIJEXYGa%2FPy39GwLOry1uIdges4D%2BmzdFS3Y1o56kwxzHNHuk8vR5NAw28zILqPa%2FXiIJ70tn3pczyUsjJGIl5HzMH749eXajKXqSvKcdsae9uaSN1q3f&X-Amz-Signature=5c37b7c1457001c896de460a430224e0b09a91c6d3dab40003fd05398582f15c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXFCGNY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDoObXyZUPk6snS8TMJAzn5g78wuePWiJi6yoacn1v38QIhAMQyFr9WedhM1474yE7yrKzeAVBCXwbjnugRNvC0Kph2KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwV1un%2B9OD7uJeCucq3AN2H56BwTZSVnrmBoM0d6uFI9K8GGNMazuB8GXz3L7bpXRuIxvv9xp2RIMfu%2FGp7ZXku3vdI1mAJ58wy6hRIQFy7DtlXhfi2vdnnX3h8ebn8sl%2F%2BziqlyCZBdULUZ535L5Gf6xcjHyf9l0gZlz6Os6WaIA5U3wP%2Fu1hdH8k%2F1%2BsP3Ai%2FxbCsV5Jrqxcwctyz6W2s0YMCNn4N4QtflKZKd0zcSW1rTVYL2xvaqbMZrY5pD2QeYbsxRf97Jw%2FkfcuHYIusv23B2xGr1IRZlu2kmzQgiIVvS0EUZXzxJi9M9%2Bnwie2eOHvzQqsxdA7vXF1dADCZgm6Br6iynvWXv34ii1fW1cGmWtTCNOUOY3evTfgnAxWRHCEp4vqy3ooRRgxQMgAe7kub1vWHh1MkJQLylxv%2BErB%2FdoA83m0%2BANsVa7GkSaqC%2B%2FAXgJUi6Wi5mUzmUECl0RZwm1qHxeZvfqczHafD5hpr4%2FeDRsBtK%2BT5bWaar5Sjtq6%2Fcbys1hSFg82aQevACuLsflNaIILrEFP95V7xPzu39rRIsVgiMFCDNJ0IG%2FTJBkqqC10EOtbAdQ%2BvlTF9VXWgIna2OswTAiAQasYprUYkcz9qF7joViGyoRr92PR9xoEuCoYAF67%2FjC7kJy9BjqkAUt48bI0B3BQ%2ByRRaYbzIaMqYLvaiaCpLs6K4ylzz6DRNy%2Bq1iFRiTrQHvVVSx%2BBv7uMwdeqCo75dPXIVTG4cZ6hVDA1WYknykWkBnlFIJEXYGa%2FPy39GwLOry1uIdges4D%2BmzdFS3Y1o56kwxzHNHuk8vR5NAw28zILqPa%2FXiIJ70tn3pczyUsjJGIl5HzMH749eXajKXqSvKcdsae9uaSN1q3f&X-Amz-Signature=7c8fe20a9827fc6bef24a18eb608a08b4c4ab40ab4ac7e3a0f9f263a0c3806c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
