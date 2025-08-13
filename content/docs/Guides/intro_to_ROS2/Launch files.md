---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOTZRKEP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7rC4SsVeP4pL4ySj83geZ2VTtbkNV%2Bse5QIvGOZLDJAiEA42oDhyJOPSEEcKdWOqEuXy%2BpOwWCOkVL8caYASKrFasq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOVH3TnkgEYFDFcFjCrcA5ba%2FEnnQHVOEmh9cLYcq9CWKZUGj4qtmp2cB0Fj3AoPUFve5BSeUy0mQlcqyZD2%2BO0QBLFs%2Bx7ONQVqNoplMm2fwSjFbOWmtUW67lYqoedZ8sNMwssJE4H2oa0a8Gmc5S9FDeqeOWmUlk0Oszqb6fe09KRh8LypJeumSv6y1uboUPS16YYws1lUludny6Eewg5hetqapWCzxkDlK1X42gBxpncJYnWBqEFLlYbSrm6OSOYr9gMUppn5X9u53isCV2%2Bz3HPhGSwvjck98qO537leD%2FxMWUGcm2MUcrIY3HojT3UksG0XbSJXFhwzwvlXptZEEWFOZqDuId786slBFxM7ZFDrpp2lilspGdur1BL1tU7tfoQfNZvSUuy5zxW19v3Jmjv%2BDjJIx4DZlvI%2FIx12C%2FciyfYc9gLphZEZsZFaG%2FShV7t8%2Fgl0CrtlJ877fjtfrN87LHejHzuq1atHwp0O%2FJgE1FA8n%2Fxmy5OZaJjMMmXWkGjz1kfveboWMqFYhaxOh%2FWZsYwK2L7a%2BvRQWpPZYPFJXN3lsMbpePZh9aeicCsuEp4q1K7mfDveg6u%2BIYFVxz54JLzYIJJjfavSbECz1nymUkN13wSPXh7U6GV2XFr%2BFCIMgX2iinnuMKHR8MQGOqUB1dw8%2BLY%2B8IierUyYFTPTLqPtcE0YCNu%2BXcNCkbZ%2Bc4SyFgdtL343Hm9hLJvny45cMwkdwOjknwx6rV2Bfo64h6WjWUiyFRTfaRzjF7aYzNgFVGqXuX68XWIZyMw8DN2Q%2FSoD%2Fof9E%2FVytC4R2xRfjKciS4IR6%2FSith%2FShHPGZ6VanrpeEqnYVTkZoTWBiIAgHr0zjs9g%2BAgxvLeifqGEGWH7iX9A&X-Amz-Signature=110f2e0701b413b06c45d79c65e563d7d095f5544e7285baa87b31dab754748d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOTZRKEP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7rC4SsVeP4pL4ySj83geZ2VTtbkNV%2Bse5QIvGOZLDJAiEA42oDhyJOPSEEcKdWOqEuXy%2BpOwWCOkVL8caYASKrFasq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOVH3TnkgEYFDFcFjCrcA5ba%2FEnnQHVOEmh9cLYcq9CWKZUGj4qtmp2cB0Fj3AoPUFve5BSeUy0mQlcqyZD2%2BO0QBLFs%2Bx7ONQVqNoplMm2fwSjFbOWmtUW67lYqoedZ8sNMwssJE4H2oa0a8Gmc5S9FDeqeOWmUlk0Oszqb6fe09KRh8LypJeumSv6y1uboUPS16YYws1lUludny6Eewg5hetqapWCzxkDlK1X42gBxpncJYnWBqEFLlYbSrm6OSOYr9gMUppn5X9u53isCV2%2Bz3HPhGSwvjck98qO537leD%2FxMWUGcm2MUcrIY3HojT3UksG0XbSJXFhwzwvlXptZEEWFOZqDuId786slBFxM7ZFDrpp2lilspGdur1BL1tU7tfoQfNZvSUuy5zxW19v3Jmjv%2BDjJIx4DZlvI%2FIx12C%2FciyfYc9gLphZEZsZFaG%2FShV7t8%2Fgl0CrtlJ877fjtfrN87LHejHzuq1atHwp0O%2FJgE1FA8n%2Fxmy5OZaJjMMmXWkGjz1kfveboWMqFYhaxOh%2FWZsYwK2L7a%2BvRQWpPZYPFJXN3lsMbpePZh9aeicCsuEp4q1K7mfDveg6u%2BIYFVxz54JLzYIJJjfavSbECz1nymUkN13wSPXh7U6GV2XFr%2BFCIMgX2iinnuMKHR8MQGOqUB1dw8%2BLY%2B8IierUyYFTPTLqPtcE0YCNu%2BXcNCkbZ%2Bc4SyFgdtL343Hm9hLJvny45cMwkdwOjknwx6rV2Bfo64h6WjWUiyFRTfaRzjF7aYzNgFVGqXuX68XWIZyMw8DN2Q%2FSoD%2Fof9E%2FVytC4R2xRfjKciS4IR6%2FSith%2FShHPGZ6VanrpeEqnYVTkZoTWBiIAgHr0zjs9g%2BAgxvLeifqGEGWH7iX9A&X-Amz-Signature=759fd3204496102633657f879efebfd151f5cbea04848fab3bef6580311cbdc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOTZRKEP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7rC4SsVeP4pL4ySj83geZ2VTtbkNV%2Bse5QIvGOZLDJAiEA42oDhyJOPSEEcKdWOqEuXy%2BpOwWCOkVL8caYASKrFasq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOVH3TnkgEYFDFcFjCrcA5ba%2FEnnQHVOEmh9cLYcq9CWKZUGj4qtmp2cB0Fj3AoPUFve5BSeUy0mQlcqyZD2%2BO0QBLFs%2Bx7ONQVqNoplMm2fwSjFbOWmtUW67lYqoedZ8sNMwssJE4H2oa0a8Gmc5S9FDeqeOWmUlk0Oszqb6fe09KRh8LypJeumSv6y1uboUPS16YYws1lUludny6Eewg5hetqapWCzxkDlK1X42gBxpncJYnWBqEFLlYbSrm6OSOYr9gMUppn5X9u53isCV2%2Bz3HPhGSwvjck98qO537leD%2FxMWUGcm2MUcrIY3HojT3UksG0XbSJXFhwzwvlXptZEEWFOZqDuId786slBFxM7ZFDrpp2lilspGdur1BL1tU7tfoQfNZvSUuy5zxW19v3Jmjv%2BDjJIx4DZlvI%2FIx12C%2FciyfYc9gLphZEZsZFaG%2FShV7t8%2Fgl0CrtlJ877fjtfrN87LHejHzuq1atHwp0O%2FJgE1FA8n%2Fxmy5OZaJjMMmXWkGjz1kfveboWMqFYhaxOh%2FWZsYwK2L7a%2BvRQWpPZYPFJXN3lsMbpePZh9aeicCsuEp4q1K7mfDveg6u%2BIYFVxz54JLzYIJJjfavSbECz1nymUkN13wSPXh7U6GV2XFr%2BFCIMgX2iinnuMKHR8MQGOqUB1dw8%2BLY%2B8IierUyYFTPTLqPtcE0YCNu%2BXcNCkbZ%2Bc4SyFgdtL343Hm9hLJvny45cMwkdwOjknwx6rV2Bfo64h6WjWUiyFRTfaRzjF7aYzNgFVGqXuX68XWIZyMw8DN2Q%2FSoD%2Fof9E%2FVytC4R2xRfjKciS4IR6%2FSith%2FShHPGZ6VanrpeEqnYVTkZoTWBiIAgHr0zjs9g%2BAgxvLeifqGEGWH7iX9A&X-Amz-Signature=b38116f01bfff53bba2be7b54801082f029583a8e0b78fecf2e646b132cd077c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
