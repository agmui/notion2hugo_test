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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SFIAGG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBrcxNVa8YMlXzZfZR%2BD%2BCuSQsdcR0MDCgsRgT3luXS7AiAPYEUhfoIq6w2RL7xZkfua%2FnnzUohtDD%2Bq9jNyQC35%2BCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpa6R6VqDLFsLpCfWKtwD7jjn6bOvKGuGXnoopwtlr%2FDeNNPpN73zxyUocpSEGCfFpxxDlp4MhSbV%2BkAGX44jnDEYGwKg2eG3J4sYbVX0xSuo%2ByU30cv5N%2FRSTICofFoYy%2BHsCr8QcO%2FZH5jyfXdGumHmFqFZDIlHqcyTmp3Q%2BobHOnZPMwz8kMHAbyybb7XY1XsQVjEfFlbqtMZjtP1rGb%2F9c6sS0qxdv6%2FU%2BKowo1dyNvS2ANl%2B7E3ov4mdwSadjzqjAlJJRre1Y%2Bxl%2Fwk7ERPoPkB8jk7oSw77VCk%2BDsAtws1SCuFxl4GkPTAmETE%2BuNpDDNsC2pr4fhF31qOAxSqLSAlfXsFzMyE%2BnQ%2FVq4s%2FDPZMBrqFGQHBo2pwaSe2BxE383WksXhQLklJuQP9KGuHnB9Ap1hQCe0Ud3SbgKvXsH2d7%2BkUF0jLlcvatoBlF2%2BphcmjhVcM1i5G%2FDOLr%2BptJuUlcNhTuztgvkvktcmI3HAgx0ObfwtvSNZXVukYAPp0R8rCf6murAsvEPZ4sGfmvciu3EU%2FxaDg2EsvN7Jn18sORQ9DTsyJ8BbhCWRVaecJSMq11fm%2Bc0icfK4I12CXCfz6REhXBbZNGB7Eo93hgOSkjC4OSRwBBGJoXBfx9U29IcUV8e49NpEwmrybwwY6pgGnUQUZdj7X%2Fu%2BTQE4yWTDpE86nNqwVn95WRe062eLYzu6VBhdfIB7w4mzcrRhdz0l0JrnW1s2oMhp0IXFru7JLQoesayHjKHh9PWqwmKoIKqv4IpNUMXa3xk4MD%2FRj7AYf61KwI7vW89RyJFd8iB41KYDsVIa4DMYqoKaZNgL3XY%2FX4ZFr%2BYB7EFHEXQORrpjObvwBAKxeiEbhYmMSM79I99OfLmT7&X-Amz-Signature=8c4013deeb3a6172d6c7a79040d9baafa945205fdd27c27e47e711020ba0a195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SFIAGG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBrcxNVa8YMlXzZfZR%2BD%2BCuSQsdcR0MDCgsRgT3luXS7AiAPYEUhfoIq6w2RL7xZkfua%2FnnzUohtDD%2Bq9jNyQC35%2BCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpa6R6VqDLFsLpCfWKtwD7jjn6bOvKGuGXnoopwtlr%2FDeNNPpN73zxyUocpSEGCfFpxxDlp4MhSbV%2BkAGX44jnDEYGwKg2eG3J4sYbVX0xSuo%2ByU30cv5N%2FRSTICofFoYy%2BHsCr8QcO%2FZH5jyfXdGumHmFqFZDIlHqcyTmp3Q%2BobHOnZPMwz8kMHAbyybb7XY1XsQVjEfFlbqtMZjtP1rGb%2F9c6sS0qxdv6%2FU%2BKowo1dyNvS2ANl%2B7E3ov4mdwSadjzqjAlJJRre1Y%2Bxl%2Fwk7ERPoPkB8jk7oSw77VCk%2BDsAtws1SCuFxl4GkPTAmETE%2BuNpDDNsC2pr4fhF31qOAxSqLSAlfXsFzMyE%2BnQ%2FVq4s%2FDPZMBrqFGQHBo2pwaSe2BxE383WksXhQLklJuQP9KGuHnB9Ap1hQCe0Ud3SbgKvXsH2d7%2BkUF0jLlcvatoBlF2%2BphcmjhVcM1i5G%2FDOLr%2BptJuUlcNhTuztgvkvktcmI3HAgx0ObfwtvSNZXVukYAPp0R8rCf6murAsvEPZ4sGfmvciu3EU%2FxaDg2EsvN7Jn18sORQ9DTsyJ8BbhCWRVaecJSMq11fm%2Bc0icfK4I12CXCfz6REhXBbZNGB7Eo93hgOSkjC4OSRwBBGJoXBfx9U29IcUV8e49NpEwmrybwwY6pgGnUQUZdj7X%2Fu%2BTQE4yWTDpE86nNqwVn95WRe062eLYzu6VBhdfIB7w4mzcrRhdz0l0JrnW1s2oMhp0IXFru7JLQoesayHjKHh9PWqwmKoIKqv4IpNUMXa3xk4MD%2FRj7AYf61KwI7vW89RyJFd8iB41KYDsVIa4DMYqoKaZNgL3XY%2FX4ZFr%2BYB7EFHEXQORrpjObvwBAKxeiEbhYmMSM79I99OfLmT7&X-Amz-Signature=48b0a146165b6cf6a28a1c3aad4a0b9c805f5ee9375d0cac287f1194aaf2c7bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SFIAGG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBrcxNVa8YMlXzZfZR%2BD%2BCuSQsdcR0MDCgsRgT3luXS7AiAPYEUhfoIq6w2RL7xZkfua%2FnnzUohtDD%2Bq9jNyQC35%2BCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpa6R6VqDLFsLpCfWKtwD7jjn6bOvKGuGXnoopwtlr%2FDeNNPpN73zxyUocpSEGCfFpxxDlp4MhSbV%2BkAGX44jnDEYGwKg2eG3J4sYbVX0xSuo%2ByU30cv5N%2FRSTICofFoYy%2BHsCr8QcO%2FZH5jyfXdGumHmFqFZDIlHqcyTmp3Q%2BobHOnZPMwz8kMHAbyybb7XY1XsQVjEfFlbqtMZjtP1rGb%2F9c6sS0qxdv6%2FU%2BKowo1dyNvS2ANl%2B7E3ov4mdwSadjzqjAlJJRre1Y%2Bxl%2Fwk7ERPoPkB8jk7oSw77VCk%2BDsAtws1SCuFxl4GkPTAmETE%2BuNpDDNsC2pr4fhF31qOAxSqLSAlfXsFzMyE%2BnQ%2FVq4s%2FDPZMBrqFGQHBo2pwaSe2BxE383WksXhQLklJuQP9KGuHnB9Ap1hQCe0Ud3SbgKvXsH2d7%2BkUF0jLlcvatoBlF2%2BphcmjhVcM1i5G%2FDOLr%2BptJuUlcNhTuztgvkvktcmI3HAgx0ObfwtvSNZXVukYAPp0R8rCf6murAsvEPZ4sGfmvciu3EU%2FxaDg2EsvN7Jn18sORQ9DTsyJ8BbhCWRVaecJSMq11fm%2Bc0icfK4I12CXCfz6REhXBbZNGB7Eo93hgOSkjC4OSRwBBGJoXBfx9U29IcUV8e49NpEwmrybwwY6pgGnUQUZdj7X%2Fu%2BTQE4yWTDpE86nNqwVn95WRe062eLYzu6VBhdfIB7w4mzcrRhdz0l0JrnW1s2oMhp0IXFru7JLQoesayHjKHh9PWqwmKoIKqv4IpNUMXa3xk4MD%2FRj7AYf61KwI7vW89RyJFd8iB41KYDsVIa4DMYqoKaZNgL3XY%2FX4ZFr%2BYB7EFHEXQORrpjObvwBAKxeiEbhYmMSM79I99OfLmT7&X-Amz-Signature=2fe87a274ad729254946af35c53cc8cdd8cdfbbc6d639be4a2334bcae4e90945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
