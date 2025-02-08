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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMPDFGG%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICUG31jfxIm9oqLv9IPZ26joIGVtJ%2FjRoOUIqxlxtrWRAiEA%2F%2FMl2z8ZN%2BXCq8%2FztgTmZRAkDf3pnADvhLpUgO4qId4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKSq01YHln14w8eCCrcAwwuPirpIvudtiX0P5pDINBMbJljTCtOIklhMVmpLXcLdkoTLel4m9HmITV%2Fsulpognjza3FDHjccXqOKx%2FM6TFvBq8TA4Jv8ZrRyIQzJduVJkCN%2ByUG2uFecpiAnLRXa%2BQXwYNfEfwFRPbo3sq7gnZNJ8Xx8UDxqQ056XmVv2JgQ5jxkGySehe4fpoWMqVM4%2BQXG%2BXn7lkfUZEGvv2TGCJ4Ec5iJNheKQhZfnQQRdDZ%2BczL9Wob1nVNzUmgO3MOMn60X2EkgHaCZ8ukNA%2F3JKC73TSaa0%2BFqDW0v6EtEkv0gkyXba97caCxg6usYDqvshjPB5W7ZkobRJ7VA43GSV6WPvjacrHX5nueCRsD8XF4fGAPe%2FNYTgDbtz0LND%2BNPbP1MMyAg9A0CseVW4DAraZfpAqR%2B9tMKeR0%2BBcIqfIFQnQdcgeF5SvbiSr1W4QLVgTc44PacLL5HEiDzULOYAR%2BYgnwI7q%2BC61soJssydPBNEJ2cg2QsjwLtMRncej8E6jlXb8rXNeE9NwejLEefz9WNRnwOdsRK8ns7d8tqUPuh8umTLMzH%2FyHm%2FYu5u3jW6RZSvpoDfGjUX1z6ABzQNQBk%2B8FFU%2BcfYQ6nKThHW7CqHV8rrCiWmiSFyQQMMCYn70GOqUB0jU3lgiY%2B1XiPChNGb2gGE1g7NnxH1MUDzI2MPjvKbkKqF9mFtKdmhBD6p4Vxvzk3M49hmXVjp99bQBWk1VfN8xRx0hoF1s6YjoGAAv07H7byB0Ao17m53wqGk0sZrFgKEZftGcC6n55xvGZQJgP6xyJpPOICyHr0D8M8uWyHJ3Of0bQbAuHZS0oaOKHKWbU3DspBzHLLvQqgNDklE6xIoX%2Bm0dw&X-Amz-Signature=c371dc79abbca336944371e0290f29fd1dffacd69f4f8283218aea1089cfdff9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMPDFGG%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICUG31jfxIm9oqLv9IPZ26joIGVtJ%2FjRoOUIqxlxtrWRAiEA%2F%2FMl2z8ZN%2BXCq8%2FztgTmZRAkDf3pnADvhLpUgO4qId4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKSq01YHln14w8eCCrcAwwuPirpIvudtiX0P5pDINBMbJljTCtOIklhMVmpLXcLdkoTLel4m9HmITV%2Fsulpognjza3FDHjccXqOKx%2FM6TFvBq8TA4Jv8ZrRyIQzJduVJkCN%2ByUG2uFecpiAnLRXa%2BQXwYNfEfwFRPbo3sq7gnZNJ8Xx8UDxqQ056XmVv2JgQ5jxkGySehe4fpoWMqVM4%2BQXG%2BXn7lkfUZEGvv2TGCJ4Ec5iJNheKQhZfnQQRdDZ%2BczL9Wob1nVNzUmgO3MOMn60X2EkgHaCZ8ukNA%2F3JKC73TSaa0%2BFqDW0v6EtEkv0gkyXba97caCxg6usYDqvshjPB5W7ZkobRJ7VA43GSV6WPvjacrHX5nueCRsD8XF4fGAPe%2FNYTgDbtz0LND%2BNPbP1MMyAg9A0CseVW4DAraZfpAqR%2B9tMKeR0%2BBcIqfIFQnQdcgeF5SvbiSr1W4QLVgTc44PacLL5HEiDzULOYAR%2BYgnwI7q%2BC61soJssydPBNEJ2cg2QsjwLtMRncej8E6jlXb8rXNeE9NwejLEefz9WNRnwOdsRK8ns7d8tqUPuh8umTLMzH%2FyHm%2FYu5u3jW6RZSvpoDfGjUX1z6ABzQNQBk%2B8FFU%2BcfYQ6nKThHW7CqHV8rrCiWmiSFyQQMMCYn70GOqUB0jU3lgiY%2B1XiPChNGb2gGE1g7NnxH1MUDzI2MPjvKbkKqF9mFtKdmhBD6p4Vxvzk3M49hmXVjp99bQBWk1VfN8xRx0hoF1s6YjoGAAv07H7byB0Ao17m53wqGk0sZrFgKEZftGcC6n55xvGZQJgP6xyJpPOICyHr0D8M8uWyHJ3Of0bQbAuHZS0oaOKHKWbU3DspBzHLLvQqgNDklE6xIoX%2Bm0dw&X-Amz-Signature=cb94785c8abf3e54e51f11665af8c1855fe908d03161b7650ba007291706f193&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMPDFGG%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICUG31jfxIm9oqLv9IPZ26joIGVtJ%2FjRoOUIqxlxtrWRAiEA%2F%2FMl2z8ZN%2BXCq8%2FztgTmZRAkDf3pnADvhLpUgO4qId4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKSq01YHln14w8eCCrcAwwuPirpIvudtiX0P5pDINBMbJljTCtOIklhMVmpLXcLdkoTLel4m9HmITV%2Fsulpognjza3FDHjccXqOKx%2FM6TFvBq8TA4Jv8ZrRyIQzJduVJkCN%2ByUG2uFecpiAnLRXa%2BQXwYNfEfwFRPbo3sq7gnZNJ8Xx8UDxqQ056XmVv2JgQ5jxkGySehe4fpoWMqVM4%2BQXG%2BXn7lkfUZEGvv2TGCJ4Ec5iJNheKQhZfnQQRdDZ%2BczL9Wob1nVNzUmgO3MOMn60X2EkgHaCZ8ukNA%2F3JKC73TSaa0%2BFqDW0v6EtEkv0gkyXba97caCxg6usYDqvshjPB5W7ZkobRJ7VA43GSV6WPvjacrHX5nueCRsD8XF4fGAPe%2FNYTgDbtz0LND%2BNPbP1MMyAg9A0CseVW4DAraZfpAqR%2B9tMKeR0%2BBcIqfIFQnQdcgeF5SvbiSr1W4QLVgTc44PacLL5HEiDzULOYAR%2BYgnwI7q%2BC61soJssydPBNEJ2cg2QsjwLtMRncej8E6jlXb8rXNeE9NwejLEefz9WNRnwOdsRK8ns7d8tqUPuh8umTLMzH%2FyHm%2FYu5u3jW6RZSvpoDfGjUX1z6ABzQNQBk%2B8FFU%2BcfYQ6nKThHW7CqHV8rrCiWmiSFyQQMMCYn70GOqUB0jU3lgiY%2B1XiPChNGb2gGE1g7NnxH1MUDzI2MPjvKbkKqF9mFtKdmhBD6p4Vxvzk3M49hmXVjp99bQBWk1VfN8xRx0hoF1s6YjoGAAv07H7byB0Ao17m53wqGk0sZrFgKEZftGcC6n55xvGZQJgP6xyJpPOICyHr0D8M8uWyHJ3Of0bQbAuHZS0oaOKHKWbU3DspBzHLLvQqgNDklE6xIoX%2Bm0dw&X-Amz-Signature=6c264e292eb2d6e58c187ec78e764ff0c4b29261d485d0935ffd15f362f1e5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
