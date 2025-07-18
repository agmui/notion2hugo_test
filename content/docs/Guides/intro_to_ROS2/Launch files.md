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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPXJKZDV%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD124jmoEvviR%2F0wTYNMTLEeebFw8yXlVbSGiQgcvsEKAIhAKZPwpDzvy84p6wC1IzA9%2BUb1M8eWKKDCaL5xn27xfqFKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEgdX5eYoJFfp7%2BoQq3APkbehpHOJZZ0d2G4LfNXaalSdxWTiR2ptnoqdmD4iAMU7a48VUrJrMO%2FweosQ6WtxB0atrjnyRsx%2FZk3BBJMwEI4jYTSFmKyUiBb3A0xeV3GN9SOjebwyQOXu0mWXa532aUlN%2FqArF%2F%2Fy%2F886jSxHwOtyw9FFIPpTuwrugppTKpYKjH55ojwK7uNDxDD9kIYB14YVIuw3%2FF1nH4yY%2BwO%2FGm3SiUHrwZSr4Ob9cTSsiFkKmEUFXRbRCGmcXaD6rguxwoT35CykuaaP4astJwz1KRbtHwJj4tTx5zfHIEK3AA22ZduIYulXYepUdJoBR7hsbdETk5KlcYWomGfW6Oj56wNPEYAJkaB7B%2FJLqN%2FPut0sCkFHctu0%2Bt4R9jAdmw9Khn0GOhapRCuKj1Rn%2F8XAEyQQjUo1Vco7OL0LyaxeFhr4udLP%2F3uc7b%2BEetJUE9FZ6%2BnJurJ2YmctVG4meZc0GchKCkiiDxMhW8nIoOE0BslM4vN9IDr57rjlJhGe%2Fgg4jDkM2c8Bg72lOlrbIAGDRjx9%2BOYCYO9wPxO1lZDXL1relEeaWIjYS441u81tnoCG3kEuKk8hgekjJKN7XIqXPxLxR7Uj1ugL%2B5fxWVIV15RSfGACK2JMaIrUEFzDemerDBjqkARawGmoTuxmjqN%2FgYhlekXVCMrXaG7yIP0Ag92rTx%2FDLx9UgzYthaDQHkVsknbw%2Fa7vZ0PcwsY3kB%2F405lnWtBqrTBEspw22hryCeSaYxLaFgBvYmnVlQLW1UoUZN4sicFRbAAfd9mR78au7%2BPph8bhWwcuoSQ0z8PNaSXedJjlc12DeQx%2FICbpFqqkrNx8S8PI2RR0JDB%2FC5ZJrbE7VIHNk2dyZ&X-Amz-Signature=b9c35417439380f51c600a6c55dcac1ab06b66ed7d9350b503a0a6ec13cc7a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPXJKZDV%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD124jmoEvviR%2F0wTYNMTLEeebFw8yXlVbSGiQgcvsEKAIhAKZPwpDzvy84p6wC1IzA9%2BUb1M8eWKKDCaL5xn27xfqFKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEgdX5eYoJFfp7%2BoQq3APkbehpHOJZZ0d2G4LfNXaalSdxWTiR2ptnoqdmD4iAMU7a48VUrJrMO%2FweosQ6WtxB0atrjnyRsx%2FZk3BBJMwEI4jYTSFmKyUiBb3A0xeV3GN9SOjebwyQOXu0mWXa532aUlN%2FqArF%2F%2Fy%2F886jSxHwOtyw9FFIPpTuwrugppTKpYKjH55ojwK7uNDxDD9kIYB14YVIuw3%2FF1nH4yY%2BwO%2FGm3SiUHrwZSr4Ob9cTSsiFkKmEUFXRbRCGmcXaD6rguxwoT35CykuaaP4astJwz1KRbtHwJj4tTx5zfHIEK3AA22ZduIYulXYepUdJoBR7hsbdETk5KlcYWomGfW6Oj56wNPEYAJkaB7B%2FJLqN%2FPut0sCkFHctu0%2Bt4R9jAdmw9Khn0GOhapRCuKj1Rn%2F8XAEyQQjUo1Vco7OL0LyaxeFhr4udLP%2F3uc7b%2BEetJUE9FZ6%2BnJurJ2YmctVG4meZc0GchKCkiiDxMhW8nIoOE0BslM4vN9IDr57rjlJhGe%2Fgg4jDkM2c8Bg72lOlrbIAGDRjx9%2BOYCYO9wPxO1lZDXL1relEeaWIjYS441u81tnoCG3kEuKk8hgekjJKN7XIqXPxLxR7Uj1ugL%2B5fxWVIV15RSfGACK2JMaIrUEFzDemerDBjqkARawGmoTuxmjqN%2FgYhlekXVCMrXaG7yIP0Ag92rTx%2FDLx9UgzYthaDQHkVsknbw%2Fa7vZ0PcwsY3kB%2F405lnWtBqrTBEspw22hryCeSaYxLaFgBvYmnVlQLW1UoUZN4sicFRbAAfd9mR78au7%2BPph8bhWwcuoSQ0z8PNaSXedJjlc12DeQx%2FICbpFqqkrNx8S8PI2RR0JDB%2FC5ZJrbE7VIHNk2dyZ&X-Amz-Signature=c4b5ce29d3ebf7de7294c023d55864e34c00a820c5b6cf114868f0d595e71f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPXJKZDV%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD124jmoEvviR%2F0wTYNMTLEeebFw8yXlVbSGiQgcvsEKAIhAKZPwpDzvy84p6wC1IzA9%2BUb1M8eWKKDCaL5xn27xfqFKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEgdX5eYoJFfp7%2BoQq3APkbehpHOJZZ0d2G4LfNXaalSdxWTiR2ptnoqdmD4iAMU7a48VUrJrMO%2FweosQ6WtxB0atrjnyRsx%2FZk3BBJMwEI4jYTSFmKyUiBb3A0xeV3GN9SOjebwyQOXu0mWXa532aUlN%2FqArF%2F%2Fy%2F886jSxHwOtyw9FFIPpTuwrugppTKpYKjH55ojwK7uNDxDD9kIYB14YVIuw3%2FF1nH4yY%2BwO%2FGm3SiUHrwZSr4Ob9cTSsiFkKmEUFXRbRCGmcXaD6rguxwoT35CykuaaP4astJwz1KRbtHwJj4tTx5zfHIEK3AA22ZduIYulXYepUdJoBR7hsbdETk5KlcYWomGfW6Oj56wNPEYAJkaB7B%2FJLqN%2FPut0sCkFHctu0%2Bt4R9jAdmw9Khn0GOhapRCuKj1Rn%2F8XAEyQQjUo1Vco7OL0LyaxeFhr4udLP%2F3uc7b%2BEetJUE9FZ6%2BnJurJ2YmctVG4meZc0GchKCkiiDxMhW8nIoOE0BslM4vN9IDr57rjlJhGe%2Fgg4jDkM2c8Bg72lOlrbIAGDRjx9%2BOYCYO9wPxO1lZDXL1relEeaWIjYS441u81tnoCG3kEuKk8hgekjJKN7XIqXPxLxR7Uj1ugL%2B5fxWVIV15RSfGACK2JMaIrUEFzDemerDBjqkARawGmoTuxmjqN%2FgYhlekXVCMrXaG7yIP0Ag92rTx%2FDLx9UgzYthaDQHkVsknbw%2Fa7vZ0PcwsY3kB%2F405lnWtBqrTBEspw22hryCeSaYxLaFgBvYmnVlQLW1UoUZN4sicFRbAAfd9mR78au7%2BPph8bhWwcuoSQ0z8PNaSXedJjlc12DeQx%2FICbpFqqkrNx8S8PI2RR0JDB%2FC5ZJrbE7VIHNk2dyZ&X-Amz-Signature=999a580b49397b3b129b48773e2f4a0e1ef6e0179a6d534cacf10411f5d2b1ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
