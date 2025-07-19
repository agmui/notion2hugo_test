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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLCKZVEJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtlubgU90qUAWgxsAjreUeqQti1h7%2FC3NVBTBa3pSVyAiAXKUkb5wxb3MNqTe0%2FhYsV3eBkw0ohFAFKdAeO%2FWlhRCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMee2GjSy1avxsGbKKtwDKCISgm8KCxRXH5dj32ScgHVqW%2FzSq%2FcN%2F0y0A1pg9P7FoaqK%2Fr7MiEKoXcLzH2mUR7jvJm%2FGzcB5m0VcK6yuKFSVjWSAg2cJ1whHCys85lLFLiS76BwiMBoCpOlwyhiu8Rtfik5b%2FnwOta7jn%2BsISRzu%2BxfcrYrsafh8RrKURSoUBlvECIdTyxiG6%2F2l0ZzI450JFs8Wd2WhrkAMUMmjhEAKM7Bc9gykXNZQddQZLt4N9v00DOVY91pfvPuHPD85%2F1gXGuGNiHZM0emdCnJfXIa%2B0NRz8o0aJrDUh0LOl5JZ%2BRU6redSndbYX%2B6tNtZHwsXKx7j0c2FYZn5%2F4YqTY8fKlpOopY2gDG28vPC8ZpoxcxXMfmvUq0tyJ92Pw%2BsNowdoxfRGTT7e0gR6YAId1%2B%2BfDAyTG5viZvBcnYST2RmJbYL8ItNma2e5RUJy7pA8IdvIXBdUW5cJ2rlwegzmBcX4Lwm7rDQu2FWTyHLONYTIY4b1sGwj24ZG7wsQxBjvnjsqbb8dGkHwXTt0AcNDD8mRj8ylDOGYJjKrUK6UO7z3XtETchrnKxkrmJntdMxlLfH%2BEHd2tVPs%2BPQWcB0B%2FC2ssH6zXa59JGOYDUAsAftgDH81zPv9Y%2FeC5fYwwrjuwwY6pgH0F8k9H9CHYkiDQvU18zmWaD08zjcLwoHlIMFvTcp5ndxw1RrQve0%2Bnl8gwbsVFBQh06nY74WEx10tc0wnzbeYmIBQecYbG00T1IP%2BViDJBf6KSRmZUIlZTQ95A39heyPh0jIHI495ilNJgGtI%2FuFzDYnmrc%2FvGKNoHlio3gPwvHQv3MAu1fU4WdRRoAp1VL0IP1w0SlA9JMdNFkAU18YIr9%2FqBwte&X-Amz-Signature=cdcee476bd8f5b3018604dd9a7c28290d5ed6c43b103e38a924796a8287dacac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLCKZVEJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtlubgU90qUAWgxsAjreUeqQti1h7%2FC3NVBTBa3pSVyAiAXKUkb5wxb3MNqTe0%2FhYsV3eBkw0ohFAFKdAeO%2FWlhRCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMee2GjSy1avxsGbKKtwDKCISgm8KCxRXH5dj32ScgHVqW%2FzSq%2FcN%2F0y0A1pg9P7FoaqK%2Fr7MiEKoXcLzH2mUR7jvJm%2FGzcB5m0VcK6yuKFSVjWSAg2cJ1whHCys85lLFLiS76BwiMBoCpOlwyhiu8Rtfik5b%2FnwOta7jn%2BsISRzu%2BxfcrYrsafh8RrKURSoUBlvECIdTyxiG6%2F2l0ZzI450JFs8Wd2WhrkAMUMmjhEAKM7Bc9gykXNZQddQZLt4N9v00DOVY91pfvPuHPD85%2F1gXGuGNiHZM0emdCnJfXIa%2B0NRz8o0aJrDUh0LOl5JZ%2BRU6redSndbYX%2B6tNtZHwsXKx7j0c2FYZn5%2F4YqTY8fKlpOopY2gDG28vPC8ZpoxcxXMfmvUq0tyJ92Pw%2BsNowdoxfRGTT7e0gR6YAId1%2B%2BfDAyTG5viZvBcnYST2RmJbYL8ItNma2e5RUJy7pA8IdvIXBdUW5cJ2rlwegzmBcX4Lwm7rDQu2FWTyHLONYTIY4b1sGwj24ZG7wsQxBjvnjsqbb8dGkHwXTt0AcNDD8mRj8ylDOGYJjKrUK6UO7z3XtETchrnKxkrmJntdMxlLfH%2BEHd2tVPs%2BPQWcB0B%2FC2ssH6zXa59JGOYDUAsAftgDH81zPv9Y%2FeC5fYwwrjuwwY6pgH0F8k9H9CHYkiDQvU18zmWaD08zjcLwoHlIMFvTcp5ndxw1RrQve0%2Bnl8gwbsVFBQh06nY74WEx10tc0wnzbeYmIBQecYbG00T1IP%2BViDJBf6KSRmZUIlZTQ95A39heyPh0jIHI495ilNJgGtI%2FuFzDYnmrc%2FvGKNoHlio3gPwvHQv3MAu1fU4WdRRoAp1VL0IP1w0SlA9JMdNFkAU18YIr9%2FqBwte&X-Amz-Signature=a6cf98e8c65a44cbc581e70d334c5853f3e82a6a383fce019b49a9cca8be2472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLCKZVEJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtlubgU90qUAWgxsAjreUeqQti1h7%2FC3NVBTBa3pSVyAiAXKUkb5wxb3MNqTe0%2FhYsV3eBkw0ohFAFKdAeO%2FWlhRCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMee2GjSy1avxsGbKKtwDKCISgm8KCxRXH5dj32ScgHVqW%2FzSq%2FcN%2F0y0A1pg9P7FoaqK%2Fr7MiEKoXcLzH2mUR7jvJm%2FGzcB5m0VcK6yuKFSVjWSAg2cJ1whHCys85lLFLiS76BwiMBoCpOlwyhiu8Rtfik5b%2FnwOta7jn%2BsISRzu%2BxfcrYrsafh8RrKURSoUBlvECIdTyxiG6%2F2l0ZzI450JFs8Wd2WhrkAMUMmjhEAKM7Bc9gykXNZQddQZLt4N9v00DOVY91pfvPuHPD85%2F1gXGuGNiHZM0emdCnJfXIa%2B0NRz8o0aJrDUh0LOl5JZ%2BRU6redSndbYX%2B6tNtZHwsXKx7j0c2FYZn5%2F4YqTY8fKlpOopY2gDG28vPC8ZpoxcxXMfmvUq0tyJ92Pw%2BsNowdoxfRGTT7e0gR6YAId1%2B%2BfDAyTG5viZvBcnYST2RmJbYL8ItNma2e5RUJy7pA8IdvIXBdUW5cJ2rlwegzmBcX4Lwm7rDQu2FWTyHLONYTIY4b1sGwj24ZG7wsQxBjvnjsqbb8dGkHwXTt0AcNDD8mRj8ylDOGYJjKrUK6UO7z3XtETchrnKxkrmJntdMxlLfH%2BEHd2tVPs%2BPQWcB0B%2FC2ssH6zXa59JGOYDUAsAftgDH81zPv9Y%2FeC5fYwwrjuwwY6pgH0F8k9H9CHYkiDQvU18zmWaD08zjcLwoHlIMFvTcp5ndxw1RrQve0%2Bnl8gwbsVFBQh06nY74WEx10tc0wnzbeYmIBQecYbG00T1IP%2BViDJBf6KSRmZUIlZTQ95A39heyPh0jIHI495ilNJgGtI%2FuFzDYnmrc%2FvGKNoHlio3gPwvHQv3MAu1fU4WdRRoAp1VL0IP1w0SlA9JMdNFkAU18YIr9%2FqBwte&X-Amz-Signature=a35e991118bd12ff88a1f0c89e4c28418b9035e48b73528b57d9bb275d3ea285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
