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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHXL4U76%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCP%2BsIYcrrqKfcEgVsoNS4MYxy24T6EjnyHBtMaFUJPowIhANkwjTkLX%2BqeS8dxygul2eTdx6awUoCL2xIgNZ6VR2AOKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCJkMDCV%2BK%2B7MFMOMq3ANl%2FpSXNe3OG8WabeE67vvta%2BEeA9T2yd5GJY6lfKl3CJfW6IfcEPcUIo6XNKIApQO98%2FOxQ94ofeSNiH9Du6t9tXOz75ptCN5LIANOy2sjS2xgSbWdaP4jvfzL5YYc4Q81lmThH%2BbuBwI4WXmgbvFgf11tSpkiwqCWoWFkdAtsHO%2FBtRy5NyFTTkcxP1itdXwBZx0TpO0fDPnZZsV8vT1%2FwAeMEAkIgkLW7dK4pPI0fcg4ijtApqvBgXj%2FHS3EfSHy7w240VHKU7%2FS9zINL0cVji8WCflV8sye%2Br4H7KL7lfRdkvCz3wrOrbbfBw6Si7wo2%2FDBwOTwaP4uxUDBsw35jLpCGQCDZVWTx3gVramVib4I7M5RXl8DZ5IWGEG77m0g6IRmeULqwAgnVAAQCHuzcshD5TYZfe8hPI%2FsM54TxM9XOW6kqqeoNr1Tir8we7cL0%2B4Cn4ZpVZiMdktoW6iqOgxaTN%2FH%2BaxjGJxA1aKCOewZhfAjaNmybnP%2FuNGrnQh9QunfFGN%2FEJySeYEDDpks10Pd7ZcfpzJMzt9d9m53fOaONG1ha6Uu3yhG3iy1n4okNG8BaOrl5%2FgMRn0VB7rham%2FrMvxlBsN8mkRs7s%2Br8LrS6yfXJDaksAsDKTC9uou%2BBjqkAV%2FnEid%2FXIomznQImLuzZegy6knQn7xrB76XMX%2F4uJtNHBA1OlZLHv4VjTBEGF%2ByDa%2FmaimqtVliAsaM2%2BhSv%2F9JACJ3Pz412UXiB%2FLpOOJ6DwRBokksqoyoNLa9owh1ffDknbTpLqUzx0N5M5esph1Qa%2BDSSlKaK%2F9oKyShKymtiyYMPRd5Uj%2FrZFKf1ctiT2BhfDE2Bc1vgKIUXflCk6YC%2BWYv&X-Amz-Signature=a9f4fb005bed60731ce8f25712dbfbb87bfcad5cc0477adef6e4bfbaa7715007&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHXL4U76%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCP%2BsIYcrrqKfcEgVsoNS4MYxy24T6EjnyHBtMaFUJPowIhANkwjTkLX%2BqeS8dxygul2eTdx6awUoCL2xIgNZ6VR2AOKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCJkMDCV%2BK%2B7MFMOMq3ANl%2FpSXNe3OG8WabeE67vvta%2BEeA9T2yd5GJY6lfKl3CJfW6IfcEPcUIo6XNKIApQO98%2FOxQ94ofeSNiH9Du6t9tXOz75ptCN5LIANOy2sjS2xgSbWdaP4jvfzL5YYc4Q81lmThH%2BbuBwI4WXmgbvFgf11tSpkiwqCWoWFkdAtsHO%2FBtRy5NyFTTkcxP1itdXwBZx0TpO0fDPnZZsV8vT1%2FwAeMEAkIgkLW7dK4pPI0fcg4ijtApqvBgXj%2FHS3EfSHy7w240VHKU7%2FS9zINL0cVji8WCflV8sye%2Br4H7KL7lfRdkvCz3wrOrbbfBw6Si7wo2%2FDBwOTwaP4uxUDBsw35jLpCGQCDZVWTx3gVramVib4I7M5RXl8DZ5IWGEG77m0g6IRmeULqwAgnVAAQCHuzcshD5TYZfe8hPI%2FsM54TxM9XOW6kqqeoNr1Tir8we7cL0%2B4Cn4ZpVZiMdktoW6iqOgxaTN%2FH%2BaxjGJxA1aKCOewZhfAjaNmybnP%2FuNGrnQh9QunfFGN%2FEJySeYEDDpks10Pd7ZcfpzJMzt9d9m53fOaONG1ha6Uu3yhG3iy1n4okNG8BaOrl5%2FgMRn0VB7rham%2FrMvxlBsN8mkRs7s%2Br8LrS6yfXJDaksAsDKTC9uou%2BBjqkAV%2FnEid%2FXIomznQImLuzZegy6knQn7xrB76XMX%2F4uJtNHBA1OlZLHv4VjTBEGF%2ByDa%2FmaimqtVliAsaM2%2BhSv%2F9JACJ3Pz412UXiB%2FLpOOJ6DwRBokksqoyoNLa9owh1ffDknbTpLqUzx0N5M5esph1Qa%2BDSSlKaK%2F9oKyShKymtiyYMPRd5Uj%2FrZFKf1ctiT2BhfDE2Bc1vgKIUXflCk6YC%2BWYv&X-Amz-Signature=8b1f9db8e36058978f171c767365e7a205188c1c0d84fa08028800593a5eee90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHXL4U76%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCP%2BsIYcrrqKfcEgVsoNS4MYxy24T6EjnyHBtMaFUJPowIhANkwjTkLX%2BqeS8dxygul2eTdx6awUoCL2xIgNZ6VR2AOKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCJkMDCV%2BK%2B7MFMOMq3ANl%2FpSXNe3OG8WabeE67vvta%2BEeA9T2yd5GJY6lfKl3CJfW6IfcEPcUIo6XNKIApQO98%2FOxQ94ofeSNiH9Du6t9tXOz75ptCN5LIANOy2sjS2xgSbWdaP4jvfzL5YYc4Q81lmThH%2BbuBwI4WXmgbvFgf11tSpkiwqCWoWFkdAtsHO%2FBtRy5NyFTTkcxP1itdXwBZx0TpO0fDPnZZsV8vT1%2FwAeMEAkIgkLW7dK4pPI0fcg4ijtApqvBgXj%2FHS3EfSHy7w240VHKU7%2FS9zINL0cVji8WCflV8sye%2Br4H7KL7lfRdkvCz3wrOrbbfBw6Si7wo2%2FDBwOTwaP4uxUDBsw35jLpCGQCDZVWTx3gVramVib4I7M5RXl8DZ5IWGEG77m0g6IRmeULqwAgnVAAQCHuzcshD5TYZfe8hPI%2FsM54TxM9XOW6kqqeoNr1Tir8we7cL0%2B4Cn4ZpVZiMdktoW6iqOgxaTN%2FH%2BaxjGJxA1aKCOewZhfAjaNmybnP%2FuNGrnQh9QunfFGN%2FEJySeYEDDpks10Pd7ZcfpzJMzt9d9m53fOaONG1ha6Uu3yhG3iy1n4okNG8BaOrl5%2FgMRn0VB7rham%2FrMvxlBsN8mkRs7s%2Br8LrS6yfXJDaksAsDKTC9uou%2BBjqkAV%2FnEid%2FXIomznQImLuzZegy6knQn7xrB76XMX%2F4uJtNHBA1OlZLHv4VjTBEGF%2ByDa%2FmaimqtVliAsaM2%2BhSv%2F9JACJ3Pz412UXiB%2FLpOOJ6DwRBokksqoyoNLa9owh1ffDknbTpLqUzx0N5M5esph1Qa%2BDSSlKaK%2F9oKyShKymtiyYMPRd5Uj%2FrZFKf1ctiT2BhfDE2Bc1vgKIUXflCk6YC%2BWYv&X-Amz-Signature=e280e0e9f834526dc65f4c3c4fc90daf52166462b54ac34f6d6ebb3592eb1a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
