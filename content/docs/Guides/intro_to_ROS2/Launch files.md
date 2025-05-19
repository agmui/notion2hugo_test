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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQPPCTU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu%2BC8L%2BaDmT8zrpd3rrP5TdQJaiN6BL3H69TZHl%2F5TEAiA9SjZ77WEl3p0IB2attBxsf3Q55bJMdfx88CDN3O0CCSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWuxitQOOshoxrifEKtwDpmtGW04m8XENjkJl3d5Vgy7%2BEiWdTClmWvnbG4%2FimhHXS%2BYjGhbwagc%2BKIixZbR6XKNT40SeLdwIzIUX3xxbwf1NzzQmU3UvgPvqLXFgQSTFketTstFtqP3JpOilXmcW9FUEEg%2FQkd1M5fivTevn54TQlEv7op7O0NLfaEfcnIWli5C%2Bo4nHuJo%2FayoC4AZfIVxhZOneP66ZU3JH%2B3HPBJww8iFN1HogNOl4c0c8I6GCh8ltZVeMBL%2FTjJufC4hsG6m17N7TEjcJgiEuHvSzGTXuu9UlEx%2FPQIAMnJD37olg8HYVcxwFSO70KezYz9UfWD1IphGPqirr%2FYzthUH%2BXlFYLqXXphGk%2FecYcUp3N40G9wxptypKKyjtdcYWAjioJZWDcWG4lV98%2BTRCZuGEZKYY%2FTI7ooQVaLTmnW%2F0OlozmNnGlxyILiUvE2cacrYf%2FPiZ4OIcGsDQc1DoA5%2FCeoYn0kj7bJvViacC95t0lqCRNaziT9hBhzrZeu1%2FWTZe4B3KCAMIxgtk1Dzbf2LOm%2BsRmn1dQD9%2FUuNR48O711vqiHQcdbyIU7PUGGksu2iL2wj5RHh0J4NAxVMxus9QG4WiOAoFAaYf%2BAIx3slELHQG40mrixutahHO55kw9J6rwQY6pgGtPH715MgTnT8Blqg830veGjilm8Py1MEG%2FXmts9Xc61KYRQQi0eOd9SJRNM3Yl4zGXLI%2Fh%2BqmEVfWPnQBhsae5JEno5j4RgIEz8t8OOhrprGdxJ1JTXlAVABIcSJjheBQRQtvuS7%2F79L6aK%2BRSZpBOWzt07JaIoIyimVp1m4OiK1B3VLBGdVwcCbE7EogCdywIz9n0V%2FmNb%2FL9hiu5pTvEQnW1PEh&X-Amz-Signature=acd68d18a6c007ee4a1d9cfbbf2f1473e78984eb9890edb951c3f62d6f8b0274&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQPPCTU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu%2BC8L%2BaDmT8zrpd3rrP5TdQJaiN6BL3H69TZHl%2F5TEAiA9SjZ77WEl3p0IB2attBxsf3Q55bJMdfx88CDN3O0CCSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWuxitQOOshoxrifEKtwDpmtGW04m8XENjkJl3d5Vgy7%2BEiWdTClmWvnbG4%2FimhHXS%2BYjGhbwagc%2BKIixZbR6XKNT40SeLdwIzIUX3xxbwf1NzzQmU3UvgPvqLXFgQSTFketTstFtqP3JpOilXmcW9FUEEg%2FQkd1M5fivTevn54TQlEv7op7O0NLfaEfcnIWli5C%2Bo4nHuJo%2FayoC4AZfIVxhZOneP66ZU3JH%2B3HPBJww8iFN1HogNOl4c0c8I6GCh8ltZVeMBL%2FTjJufC4hsG6m17N7TEjcJgiEuHvSzGTXuu9UlEx%2FPQIAMnJD37olg8HYVcxwFSO70KezYz9UfWD1IphGPqirr%2FYzthUH%2BXlFYLqXXphGk%2FecYcUp3N40G9wxptypKKyjtdcYWAjioJZWDcWG4lV98%2BTRCZuGEZKYY%2FTI7ooQVaLTmnW%2F0OlozmNnGlxyILiUvE2cacrYf%2FPiZ4OIcGsDQc1DoA5%2FCeoYn0kj7bJvViacC95t0lqCRNaziT9hBhzrZeu1%2FWTZe4B3KCAMIxgtk1Dzbf2LOm%2BsRmn1dQD9%2FUuNR48O711vqiHQcdbyIU7PUGGksu2iL2wj5RHh0J4NAxVMxus9QG4WiOAoFAaYf%2BAIx3slELHQG40mrixutahHO55kw9J6rwQY6pgGtPH715MgTnT8Blqg830veGjilm8Py1MEG%2FXmts9Xc61KYRQQi0eOd9SJRNM3Yl4zGXLI%2Fh%2BqmEVfWPnQBhsae5JEno5j4RgIEz8t8OOhrprGdxJ1JTXlAVABIcSJjheBQRQtvuS7%2F79L6aK%2BRSZpBOWzt07JaIoIyimVp1m4OiK1B3VLBGdVwcCbE7EogCdywIz9n0V%2FmNb%2FL9hiu5pTvEQnW1PEh&X-Amz-Signature=f692d589571d057c65e82a67392baa4252e77299fa8e4fefcddc1d09d151c461&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQPPCTU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu%2BC8L%2BaDmT8zrpd3rrP5TdQJaiN6BL3H69TZHl%2F5TEAiA9SjZ77WEl3p0IB2attBxsf3Q55bJMdfx88CDN3O0CCSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWuxitQOOshoxrifEKtwDpmtGW04m8XENjkJl3d5Vgy7%2BEiWdTClmWvnbG4%2FimhHXS%2BYjGhbwagc%2BKIixZbR6XKNT40SeLdwIzIUX3xxbwf1NzzQmU3UvgPvqLXFgQSTFketTstFtqP3JpOilXmcW9FUEEg%2FQkd1M5fivTevn54TQlEv7op7O0NLfaEfcnIWli5C%2Bo4nHuJo%2FayoC4AZfIVxhZOneP66ZU3JH%2B3HPBJww8iFN1HogNOl4c0c8I6GCh8ltZVeMBL%2FTjJufC4hsG6m17N7TEjcJgiEuHvSzGTXuu9UlEx%2FPQIAMnJD37olg8HYVcxwFSO70KezYz9UfWD1IphGPqirr%2FYzthUH%2BXlFYLqXXphGk%2FecYcUp3N40G9wxptypKKyjtdcYWAjioJZWDcWG4lV98%2BTRCZuGEZKYY%2FTI7ooQVaLTmnW%2F0OlozmNnGlxyILiUvE2cacrYf%2FPiZ4OIcGsDQc1DoA5%2FCeoYn0kj7bJvViacC95t0lqCRNaziT9hBhzrZeu1%2FWTZe4B3KCAMIxgtk1Dzbf2LOm%2BsRmn1dQD9%2FUuNR48O711vqiHQcdbyIU7PUGGksu2iL2wj5RHh0J4NAxVMxus9QG4WiOAoFAaYf%2BAIx3slELHQG40mrixutahHO55kw9J6rwQY6pgGtPH715MgTnT8Blqg830veGjilm8Py1MEG%2FXmts9Xc61KYRQQi0eOd9SJRNM3Yl4zGXLI%2Fh%2BqmEVfWPnQBhsae5JEno5j4RgIEz8t8OOhrprGdxJ1JTXlAVABIcSJjheBQRQtvuS7%2F79L6aK%2BRSZpBOWzt07JaIoIyimVp1m4OiK1B3VLBGdVwcCbE7EogCdywIz9n0V%2FmNb%2FL9hiu5pTvEQnW1PEh&X-Amz-Signature=80f2578a61b45607165f428bf323175296630b077d20d13cbe6ccf4be199ea7a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
