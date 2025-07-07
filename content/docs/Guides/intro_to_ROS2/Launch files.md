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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHZVGR2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIF72EnuEGxl0vPAiewsC0bdG6glo2HnChDA%2FHYzq%2Ff1fAiEAik3gUBRrxTnRDxjLZTy6Hj8YkVoSNl0pUOz08YVjBw0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIBzVnsc%2BP5YLnwXvCrcA%2F%2Fvcdj606lCgeBTCj4tCyYfXk4TaZgK%2Fh54%2FBt6xkPvZ4g5FJXPRjKaaG4DHrf08kTOTNw4xVB%2FV52zl2hQAf77odho0MTs1vVcxdOhz0omauhO%2BqmmoKKdUwNwJNu%2FT4mhoM5MtnHR3sC7D37an6q35J%2FJ8QmLKKvkykfSdhsjU0fzhD1CrUKJmgC%2BQRVG2QzGygMJILjotXxWq7OkMUyrNVhxF6BYV6DMToRk5b3lZVpe7Zo3d7iu1mda4W47Wi7nK55e7qs9T5CSuXJUPi0x7S80TcdXgzqmp%2FRF%2FTcZoMUvnj%2FZa7r0CLkK301pH6u%2FaMwUBY9KgpSzQ4mbpWnH6zy8BoYi0CH3%2F5s2yaMmKDUwQUeAWFg21rgzW8Y2v06%2BZfc5%2Fik7ecMr%2F8bTdHDHvPrEO1S5IfrsrEex9sMqXU4RRj2Qt3ZqHB9UaUaVPl5Sh8zvno8wgH4wRWPzt0pLIE3JF31tgEM684378aExQ%2BYknE8fa9HUUvaQNXd3u%2BoXdk2bz0ZPzpgZ1K549yegZzbp2Cyisc4aNK6Yx5LM6Qt5OADJR71qkp3y1vZsdn7O5A6nrHceJ2Hu5wAXyHMaRlYgkLXC0CSwTyX3Sn8T5LukzTFMcnUuH4BwMPOMr8MGOqUBZkeVpq61IAiDbRt9EweadSrVpIv4T1%2FHSwfOBAPQnTZYTjfgQsJvOhkXpmPiFB3%2FMkAxtysFZXnNk997CphFgHbkL6YOv2qvE%2BBvyNWVL9rQxD54RlGqzGL5CT%2FUMW7QAqnw7z3LHjoJjplB3YdqB5BaIkH42oM%2FW2ZH6AxxJInOT8s40rr3Fs4sLmnrvqYNsxejdf7N7tPFJXBO%2B%2FNyLaYKs4x%2F&X-Amz-Signature=1fa589b08958c6c83625a41e42380a206e1c17e847bae100b30d548b430d6bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHZVGR2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIF72EnuEGxl0vPAiewsC0bdG6glo2HnChDA%2FHYzq%2Ff1fAiEAik3gUBRrxTnRDxjLZTy6Hj8YkVoSNl0pUOz08YVjBw0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIBzVnsc%2BP5YLnwXvCrcA%2F%2Fvcdj606lCgeBTCj4tCyYfXk4TaZgK%2Fh54%2FBt6xkPvZ4g5FJXPRjKaaG4DHrf08kTOTNw4xVB%2FV52zl2hQAf77odho0MTs1vVcxdOhz0omauhO%2BqmmoKKdUwNwJNu%2FT4mhoM5MtnHR3sC7D37an6q35J%2FJ8QmLKKvkykfSdhsjU0fzhD1CrUKJmgC%2BQRVG2QzGygMJILjotXxWq7OkMUyrNVhxF6BYV6DMToRk5b3lZVpe7Zo3d7iu1mda4W47Wi7nK55e7qs9T5CSuXJUPi0x7S80TcdXgzqmp%2FRF%2FTcZoMUvnj%2FZa7r0CLkK301pH6u%2FaMwUBY9KgpSzQ4mbpWnH6zy8BoYi0CH3%2F5s2yaMmKDUwQUeAWFg21rgzW8Y2v06%2BZfc5%2Fik7ecMr%2F8bTdHDHvPrEO1S5IfrsrEex9sMqXU4RRj2Qt3ZqHB9UaUaVPl5Sh8zvno8wgH4wRWPzt0pLIE3JF31tgEM684378aExQ%2BYknE8fa9HUUvaQNXd3u%2BoXdk2bz0ZPzpgZ1K549yegZzbp2Cyisc4aNK6Yx5LM6Qt5OADJR71qkp3y1vZsdn7O5A6nrHceJ2Hu5wAXyHMaRlYgkLXC0CSwTyX3Sn8T5LukzTFMcnUuH4BwMPOMr8MGOqUBZkeVpq61IAiDbRt9EweadSrVpIv4T1%2FHSwfOBAPQnTZYTjfgQsJvOhkXpmPiFB3%2FMkAxtysFZXnNk997CphFgHbkL6YOv2qvE%2BBvyNWVL9rQxD54RlGqzGL5CT%2FUMW7QAqnw7z3LHjoJjplB3YdqB5BaIkH42oM%2FW2ZH6AxxJInOT8s40rr3Fs4sLmnrvqYNsxejdf7N7tPFJXBO%2B%2FNyLaYKs4x%2F&X-Amz-Signature=abce1cc01967fe8a7ffad4fdbf5db1a7191c8dad016151472a6648178da5dcaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHZVGR2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIF72EnuEGxl0vPAiewsC0bdG6glo2HnChDA%2FHYzq%2Ff1fAiEAik3gUBRrxTnRDxjLZTy6Hj8YkVoSNl0pUOz08YVjBw0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIBzVnsc%2BP5YLnwXvCrcA%2F%2Fvcdj606lCgeBTCj4tCyYfXk4TaZgK%2Fh54%2FBt6xkPvZ4g5FJXPRjKaaG4DHrf08kTOTNw4xVB%2FV52zl2hQAf77odho0MTs1vVcxdOhz0omauhO%2BqmmoKKdUwNwJNu%2FT4mhoM5MtnHR3sC7D37an6q35J%2FJ8QmLKKvkykfSdhsjU0fzhD1CrUKJmgC%2BQRVG2QzGygMJILjotXxWq7OkMUyrNVhxF6BYV6DMToRk5b3lZVpe7Zo3d7iu1mda4W47Wi7nK55e7qs9T5CSuXJUPi0x7S80TcdXgzqmp%2FRF%2FTcZoMUvnj%2FZa7r0CLkK301pH6u%2FaMwUBY9KgpSzQ4mbpWnH6zy8BoYi0CH3%2F5s2yaMmKDUwQUeAWFg21rgzW8Y2v06%2BZfc5%2Fik7ecMr%2F8bTdHDHvPrEO1S5IfrsrEex9sMqXU4RRj2Qt3ZqHB9UaUaVPl5Sh8zvno8wgH4wRWPzt0pLIE3JF31tgEM684378aExQ%2BYknE8fa9HUUvaQNXd3u%2BoXdk2bz0ZPzpgZ1K549yegZzbp2Cyisc4aNK6Yx5LM6Qt5OADJR71qkp3y1vZsdn7O5A6nrHceJ2Hu5wAXyHMaRlYgkLXC0CSwTyX3Sn8T5LukzTFMcnUuH4BwMPOMr8MGOqUBZkeVpq61IAiDbRt9EweadSrVpIv4T1%2FHSwfOBAPQnTZYTjfgQsJvOhkXpmPiFB3%2FMkAxtysFZXnNk997CphFgHbkL6YOv2qvE%2BBvyNWVL9rQxD54RlGqzGL5CT%2FUMW7QAqnw7z3LHjoJjplB3YdqB5BaIkH42oM%2FW2ZH6AxxJInOT8s40rr3Fs4sLmnrvqYNsxejdf7N7tPFJXBO%2B%2FNyLaYKs4x%2F&X-Amz-Signature=512c957c0214e9a81bc38a4377dae6c4b3e7848dac201d8c64bc3ffec6dc5898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
