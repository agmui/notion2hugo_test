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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA5CZ3D2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWAxcqP86xagu8Q3YSbyGIfkm6YdrAkRWiXTF0NONDFAiBFAzYq2ZzoefikTOOAzdHBbCC1xgv5OzXByC4oAqKL2SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GfkNA%2Bx8H9RrQoCKtwDrxt68y0V6IGJ%2BCz%2Byi8%2BtvARaHJY%2BkOeZLMY2ZH46l%2BV5JYDTOnmzTPpS%2FSplKQbMCfigo90XEUH8tNw%2FXggTw2qD%2BT%2Be9SaEwFaCvvf25YzAuY27VcWs1oPdhyaQ7eFN53PS9oH%2FBb6zRDYNCuI3m14t%2BE2XRGfn%2FQG3kabUmqbE0A1VSHZ7pkPUkzSycrFPN791xP9qvNYrehcKXIZin4fcEEk80qiZFcMX81qO%2BCkDZkelfVS47Q7PnSuOC9rYtQ7qSjblhkHfm3FyD6Fvr8Rhufevsb4GyFbwe4YphHWqIvFp3VKCFOmJsfyfsLUfHuQAbRolUUGGl3XO7MQ3zNWIZY3E4Pbxeni0z%2BuR1317nWxRGfSQiuZk2asA3YjRaEt7fmB5FixngtjihQPh0MBMGKxxrMvvKRnJelCb%2FIPc5L1ajzjhwnkcGxNKHDzBPv%2Bnx6dneZ4bIvjRPawxUvdQlCumCmvUe%2F0bnAlXR7k5158lrU1szo4SIlxlzWRyjvcPYsROtSayTOsvmAFgBMCZfCOoVMxz3LSPVxaA%2BuNExyfXYnrR5ynqBv06oc3fxm4YYMuukcxhl0YERMLUcxEAzzfL09Qh%2BAXQOOlzDUb9L0KEaQHmvOPYxUwyYjsvAY6pgEV6HwNc3bIXPGSWe%2B5wZht1HKjuDAh4x3rkk1LV0buxL%2Fm5pRHf%2F%2ByY3dHwEVYst%2F0ZeZ4fbF8BRPZw%2BSX8Lr84UTv6syvBGpqgYC%2BrS%2F6rCB9chpGIqZ9kugVJAU6kmJIV1QqbMXbHdaR2Dyz52Fw7OW%2F94zQOHC1Q%2FL7sduaNW7CfbYaMycNPnbyS5k6K2h2l%2Fk7CfybbP2owYspypDuzKpBzJ0G&X-Amz-Signature=e5a09bbf99a3c088b3857ed8f8c2a2606ff99f8dd32426a3413e99b47375d1c8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA5CZ3D2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWAxcqP86xagu8Q3YSbyGIfkm6YdrAkRWiXTF0NONDFAiBFAzYq2ZzoefikTOOAzdHBbCC1xgv5OzXByC4oAqKL2SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GfkNA%2Bx8H9RrQoCKtwDrxt68y0V6IGJ%2BCz%2Byi8%2BtvARaHJY%2BkOeZLMY2ZH46l%2BV5JYDTOnmzTPpS%2FSplKQbMCfigo90XEUH8tNw%2FXggTw2qD%2BT%2Be9SaEwFaCvvf25YzAuY27VcWs1oPdhyaQ7eFN53PS9oH%2FBb6zRDYNCuI3m14t%2BE2XRGfn%2FQG3kabUmqbE0A1VSHZ7pkPUkzSycrFPN791xP9qvNYrehcKXIZin4fcEEk80qiZFcMX81qO%2BCkDZkelfVS47Q7PnSuOC9rYtQ7qSjblhkHfm3FyD6Fvr8Rhufevsb4GyFbwe4YphHWqIvFp3VKCFOmJsfyfsLUfHuQAbRolUUGGl3XO7MQ3zNWIZY3E4Pbxeni0z%2BuR1317nWxRGfSQiuZk2asA3YjRaEt7fmB5FixngtjihQPh0MBMGKxxrMvvKRnJelCb%2FIPc5L1ajzjhwnkcGxNKHDzBPv%2Bnx6dneZ4bIvjRPawxUvdQlCumCmvUe%2F0bnAlXR7k5158lrU1szo4SIlxlzWRyjvcPYsROtSayTOsvmAFgBMCZfCOoVMxz3LSPVxaA%2BuNExyfXYnrR5ynqBv06oc3fxm4YYMuukcxhl0YERMLUcxEAzzfL09Qh%2BAXQOOlzDUb9L0KEaQHmvOPYxUwyYjsvAY6pgEV6HwNc3bIXPGSWe%2B5wZht1HKjuDAh4x3rkk1LV0buxL%2Fm5pRHf%2F%2ByY3dHwEVYst%2F0ZeZ4fbF8BRPZw%2BSX8Lr84UTv6syvBGpqgYC%2BrS%2F6rCB9chpGIqZ9kugVJAU6kmJIV1QqbMXbHdaR2Dyz52Fw7OW%2F94zQOHC1Q%2FL7sduaNW7CfbYaMycNPnbyS5k6K2h2l%2Fk7CfybbP2owYspypDuzKpBzJ0G&X-Amz-Signature=462cea0f6151896d579b1527a02b10a58cea60e0813fbbca1364cd92a53814e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA5CZ3D2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWAxcqP86xagu8Q3YSbyGIfkm6YdrAkRWiXTF0NONDFAiBFAzYq2ZzoefikTOOAzdHBbCC1xgv5OzXByC4oAqKL2SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GfkNA%2Bx8H9RrQoCKtwDrxt68y0V6IGJ%2BCz%2Byi8%2BtvARaHJY%2BkOeZLMY2ZH46l%2BV5JYDTOnmzTPpS%2FSplKQbMCfigo90XEUH8tNw%2FXggTw2qD%2BT%2Be9SaEwFaCvvf25YzAuY27VcWs1oPdhyaQ7eFN53PS9oH%2FBb6zRDYNCuI3m14t%2BE2XRGfn%2FQG3kabUmqbE0A1VSHZ7pkPUkzSycrFPN791xP9qvNYrehcKXIZin4fcEEk80qiZFcMX81qO%2BCkDZkelfVS47Q7PnSuOC9rYtQ7qSjblhkHfm3FyD6Fvr8Rhufevsb4GyFbwe4YphHWqIvFp3VKCFOmJsfyfsLUfHuQAbRolUUGGl3XO7MQ3zNWIZY3E4Pbxeni0z%2BuR1317nWxRGfSQiuZk2asA3YjRaEt7fmB5FixngtjihQPh0MBMGKxxrMvvKRnJelCb%2FIPc5L1ajzjhwnkcGxNKHDzBPv%2Bnx6dneZ4bIvjRPawxUvdQlCumCmvUe%2F0bnAlXR7k5158lrU1szo4SIlxlzWRyjvcPYsROtSayTOsvmAFgBMCZfCOoVMxz3LSPVxaA%2BuNExyfXYnrR5ynqBv06oc3fxm4YYMuukcxhl0YERMLUcxEAzzfL09Qh%2BAXQOOlzDUb9L0KEaQHmvOPYxUwyYjsvAY6pgEV6HwNc3bIXPGSWe%2B5wZht1HKjuDAh4x3rkk1LV0buxL%2Fm5pRHf%2F%2ByY3dHwEVYst%2F0ZeZ4fbF8BRPZw%2BSX8Lr84UTv6syvBGpqgYC%2BrS%2F6rCB9chpGIqZ9kugVJAU6kmJIV1QqbMXbHdaR2Dyz52Fw7OW%2F94zQOHC1Q%2FL7sduaNW7CfbYaMycNPnbyS5k6K2h2l%2Fk7CfybbP2owYspypDuzKpBzJ0G&X-Amz-Signature=cc5bc8f89bd200f4a125cf4afcfa2c4e168136637f873af7809ece15b44b3b22&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
