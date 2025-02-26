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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCK6UW6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFwh6f5wMaEn4hBZ31d4S6BqBTdftV%2FVDgMaDJ0OqykDAiBSKRxTTAINqxY8GWTr3iMZw8PFZwkN%2Fr4kNjOoaAa55yr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMQtMOP58fxSHhEnOEKtwDbbtvV1%2B%2FLc%2FHx85F%2Fl7%2FXNPCpez7L5fAGj%2BTK5hDYlKNbj7vIH%2FmniOK60KFsSCVt4nHZHe0AtY0A6wunKO24TaZQy1qD7GXvjWc46RWOnQsI%2BBb%2FdubHCx5J%2FtvbqsRybXu3Awc2Ibc%2FcD2nc27t7NXwoZDDqYp6vud3b%2BSkELqCgdAZdkmzsDqQKWVV8m%2BL4%2BwrnXAodyp7aBqSIogGT1Zrd0flQ9bvEvX3PEXf8mPmfTnaF9d7o%2BAr9aCttiopGChjwMU31YNZq7YfX%2BxG%2BdB22PSDlIHIJ7W%2FoIbBlpHSoiyZ9G5Fpt7AaJjZyS3CQS9krh55DE4poiAT3M%2BTGv%2Bc%2BqcFPdvxdrOdO7LGyjtbPSW5tjSn8PKkAlBblrttk%2BMDPdcf1sbeTQoIeYs4DlCeNOrLiykMLu%2Fc28KO8nJTo0c3TkDpFn3Dn%2BRgF8P833ZtYtWlKbH%2FJJBHE2K%2BH3ui6Gz9uGzHBTAjOlDnlrYFv8sIN9C6G3f0FbYxbCWe3otTUp9KxJdA1zmIsXOMxCe7J6pl6MKKZ20g4RmuHnB%2BjfmophitaluXRDomI58q2P1dTRIGUQRS%2BHOc8Dsca7pp5%2BUH25N3YB%2Bya31isTlluQhdy7s%2BKnAnBQwmr77vQY6pgHBCKlxMlu0n9b4%2FwRRf84j9ZAYWOHQOjZdLDDzPUjYW4GJV858La%2BDa3zoO8FRF3MsgYfdQ56s3JvvkoWQzCLxTJFaIXWNTnX%2BSQA%2BnRiizXXRZ8z%2BnD3wXZrfIFuygw0Ezq11U%2FjiL7zXBIbbiHuUHeyqVygOD%2FacponFb%2BYR%2Bz3HPfTIU2MypJ2lwXhCywKGNta2r%2BcDa%2B%2F1P6ze6BZADHu7AAPr&X-Amz-Signature=f14f60bca16f38f07e3e042144358d62435062991953bf13c30df6dc8d5ca48f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCK6UW6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFwh6f5wMaEn4hBZ31d4S6BqBTdftV%2FVDgMaDJ0OqykDAiBSKRxTTAINqxY8GWTr3iMZw8PFZwkN%2Fr4kNjOoaAa55yr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMQtMOP58fxSHhEnOEKtwDbbtvV1%2B%2FLc%2FHx85F%2Fl7%2FXNPCpez7L5fAGj%2BTK5hDYlKNbj7vIH%2FmniOK60KFsSCVt4nHZHe0AtY0A6wunKO24TaZQy1qD7GXvjWc46RWOnQsI%2BBb%2FdubHCx5J%2FtvbqsRybXu3Awc2Ibc%2FcD2nc27t7NXwoZDDqYp6vud3b%2BSkELqCgdAZdkmzsDqQKWVV8m%2BL4%2BwrnXAodyp7aBqSIogGT1Zrd0flQ9bvEvX3PEXf8mPmfTnaF9d7o%2BAr9aCttiopGChjwMU31YNZq7YfX%2BxG%2BdB22PSDlIHIJ7W%2FoIbBlpHSoiyZ9G5Fpt7AaJjZyS3CQS9krh55DE4poiAT3M%2BTGv%2Bc%2BqcFPdvxdrOdO7LGyjtbPSW5tjSn8PKkAlBblrttk%2BMDPdcf1sbeTQoIeYs4DlCeNOrLiykMLu%2Fc28KO8nJTo0c3TkDpFn3Dn%2BRgF8P833ZtYtWlKbH%2FJJBHE2K%2BH3ui6Gz9uGzHBTAjOlDnlrYFv8sIN9C6G3f0FbYxbCWe3otTUp9KxJdA1zmIsXOMxCe7J6pl6MKKZ20g4RmuHnB%2BjfmophitaluXRDomI58q2P1dTRIGUQRS%2BHOc8Dsca7pp5%2BUH25N3YB%2Bya31isTlluQhdy7s%2BKnAnBQwmr77vQY6pgHBCKlxMlu0n9b4%2FwRRf84j9ZAYWOHQOjZdLDDzPUjYW4GJV858La%2BDa3zoO8FRF3MsgYfdQ56s3JvvkoWQzCLxTJFaIXWNTnX%2BSQA%2BnRiizXXRZ8z%2BnD3wXZrfIFuygw0Ezq11U%2FjiL7zXBIbbiHuUHeyqVygOD%2FacponFb%2BYR%2Bz3HPfTIU2MypJ2lwXhCywKGNta2r%2BcDa%2B%2F1P6ze6BZADHu7AAPr&X-Amz-Signature=33d91cd9626cfa57e6eeb6e2dd55106fb0079e1602d5bd71648cad3efe041c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCK6UW6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFwh6f5wMaEn4hBZ31d4S6BqBTdftV%2FVDgMaDJ0OqykDAiBSKRxTTAINqxY8GWTr3iMZw8PFZwkN%2Fr4kNjOoaAa55yr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMQtMOP58fxSHhEnOEKtwDbbtvV1%2B%2FLc%2FHx85F%2Fl7%2FXNPCpez7L5fAGj%2BTK5hDYlKNbj7vIH%2FmniOK60KFsSCVt4nHZHe0AtY0A6wunKO24TaZQy1qD7GXvjWc46RWOnQsI%2BBb%2FdubHCx5J%2FtvbqsRybXu3Awc2Ibc%2FcD2nc27t7NXwoZDDqYp6vud3b%2BSkELqCgdAZdkmzsDqQKWVV8m%2BL4%2BwrnXAodyp7aBqSIogGT1Zrd0flQ9bvEvX3PEXf8mPmfTnaF9d7o%2BAr9aCttiopGChjwMU31YNZq7YfX%2BxG%2BdB22PSDlIHIJ7W%2FoIbBlpHSoiyZ9G5Fpt7AaJjZyS3CQS9krh55DE4poiAT3M%2BTGv%2Bc%2BqcFPdvxdrOdO7LGyjtbPSW5tjSn8PKkAlBblrttk%2BMDPdcf1sbeTQoIeYs4DlCeNOrLiykMLu%2Fc28KO8nJTo0c3TkDpFn3Dn%2BRgF8P833ZtYtWlKbH%2FJJBHE2K%2BH3ui6Gz9uGzHBTAjOlDnlrYFv8sIN9C6G3f0FbYxbCWe3otTUp9KxJdA1zmIsXOMxCe7J6pl6MKKZ20g4RmuHnB%2BjfmophitaluXRDomI58q2P1dTRIGUQRS%2BHOc8Dsca7pp5%2BUH25N3YB%2Bya31isTlluQhdy7s%2BKnAnBQwmr77vQY6pgHBCKlxMlu0n9b4%2FwRRf84j9ZAYWOHQOjZdLDDzPUjYW4GJV858La%2BDa3zoO8FRF3MsgYfdQ56s3JvvkoWQzCLxTJFaIXWNTnX%2BSQA%2BnRiizXXRZ8z%2BnD3wXZrfIFuygw0Ezq11U%2FjiL7zXBIbbiHuUHeyqVygOD%2FacponFb%2BYR%2Bz3HPfTIU2MypJ2lwXhCywKGNta2r%2BcDa%2B%2F1P6ze6BZADHu7AAPr&X-Amz-Signature=791372384f647e3331e8aff798241d42652992a3c01f3c8a9af819aa5615020e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
