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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545YA2IR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGmO6o8gtzrob1Imn6uepfXKR71BGtBAfYHPM8qRUGQyAiAniUyM24RtV8OJ%2Fh%2BC5ERQjDw0W2ACxO6v%2FMcYGw3efSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM51DyumX2QZ5A1yzdKtwDIHQ71PQY8Ta5vAqhEYPCOWi3G8c21iFX9qOuXsd4Z05E%2FKwelNN%2B%2B83RG3mIP4ZCIT16qjDu7ytTdo%2FIq0iQjhSuxJAbThGXh6zVVE24d0Awfc9XP7BoubYiCwqNP3UC7UDbIhMZ1UIdTnzOhNpetP6X8dTt6rSEvFndrBCXJ%2FhXmyk0IRsizU1yqAtHmvbWNGi%2FNIgSoC6RFGx8b6eoWZArF5m%2F8pPHFWBx%2BKZMLn7PuTM7KCK0UHY9lAW3NKaU8OX4rW%2B0hmfF9K6OZ%2FTNo3wssjUAWymtYSLq9sLWMvz0UD5DH9sNrpbWon8gbWTEwn721MS%2BDHiMi6Oykj53otOGsYsA6alzOWA%2BDarY1A3mOY337qPrDaND3frQEYxMXO1XOnnXIzgjqvVOhGyyQ%2FagwLoJrB7iQqTr9dqYGuusIG8NicE0bpOUxdXpUZMxagNTe5dAcmOMVKQ%2BpA%2FsUiCALpCdG9jic%2Bsk1016q%2BuIvR7FyO5QBZZU%2BdM13T9xYyme3DJkkk8NP2j1NZfz%2Fxy%2FSL1XmwXPKWF2fiuZZT9glZPyb8KpeDPxs9tQ0hv2pTtLwowDzCM5jR9VpE6IZCA9d2D39b7HSlgS6MSO6UBXiZSL5tr8MqLE%2Bsswi66CwgY6pgGIOiRUV0wHmfawOvGI%2BK6rnzY%2FQ7eletgBN3N%2Bgom5LC3m9d5%2B4jChSqVFmRM6G7oD0QimXLULjRrpG%2BXDMydqAbLdJ%2Bu1jik6euP9zD1IVgnE57gfb38Rs7eENEMsY0Icqey%2B4%2FSWXRob1tMOq2bbWC0dT9CMVTc22bxTieLgVsHX0UQrX1ZIwaMROlrkAuHfy%2FVncEgoO8K%2F1HeN6BhdhyMqMCwt&X-Amz-Signature=2f98c5e80eb9405dc104f59b0744336e2c13e63b2e03b5254d8cf81b5c9046d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545YA2IR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGmO6o8gtzrob1Imn6uepfXKR71BGtBAfYHPM8qRUGQyAiAniUyM24RtV8OJ%2Fh%2BC5ERQjDw0W2ACxO6v%2FMcYGw3efSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM51DyumX2QZ5A1yzdKtwDIHQ71PQY8Ta5vAqhEYPCOWi3G8c21iFX9qOuXsd4Z05E%2FKwelNN%2B%2B83RG3mIP4ZCIT16qjDu7ytTdo%2FIq0iQjhSuxJAbThGXh6zVVE24d0Awfc9XP7BoubYiCwqNP3UC7UDbIhMZ1UIdTnzOhNpetP6X8dTt6rSEvFndrBCXJ%2FhXmyk0IRsizU1yqAtHmvbWNGi%2FNIgSoC6RFGx8b6eoWZArF5m%2F8pPHFWBx%2BKZMLn7PuTM7KCK0UHY9lAW3NKaU8OX4rW%2B0hmfF9K6OZ%2FTNo3wssjUAWymtYSLq9sLWMvz0UD5DH9sNrpbWon8gbWTEwn721MS%2BDHiMi6Oykj53otOGsYsA6alzOWA%2BDarY1A3mOY337qPrDaND3frQEYxMXO1XOnnXIzgjqvVOhGyyQ%2FagwLoJrB7iQqTr9dqYGuusIG8NicE0bpOUxdXpUZMxagNTe5dAcmOMVKQ%2BpA%2FsUiCALpCdG9jic%2Bsk1016q%2BuIvR7FyO5QBZZU%2BdM13T9xYyme3DJkkk8NP2j1NZfz%2Fxy%2FSL1XmwXPKWF2fiuZZT9glZPyb8KpeDPxs9tQ0hv2pTtLwowDzCM5jR9VpE6IZCA9d2D39b7HSlgS6MSO6UBXiZSL5tr8MqLE%2Bsswi66CwgY6pgGIOiRUV0wHmfawOvGI%2BK6rnzY%2FQ7eletgBN3N%2Bgom5LC3m9d5%2B4jChSqVFmRM6G7oD0QimXLULjRrpG%2BXDMydqAbLdJ%2Bu1jik6euP9zD1IVgnE57gfb38Rs7eENEMsY0Icqey%2B4%2FSWXRob1tMOq2bbWC0dT9CMVTc22bxTieLgVsHX0UQrX1ZIwaMROlrkAuHfy%2FVncEgoO8K%2F1HeN6BhdhyMqMCwt&X-Amz-Signature=e54832948de32cb2c60572346f0253b4100d5937fd927e671da9abc1b23e7a6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545YA2IR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGmO6o8gtzrob1Imn6uepfXKR71BGtBAfYHPM8qRUGQyAiAniUyM24RtV8OJ%2Fh%2BC5ERQjDw0W2ACxO6v%2FMcYGw3efSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM51DyumX2QZ5A1yzdKtwDIHQ71PQY8Ta5vAqhEYPCOWi3G8c21iFX9qOuXsd4Z05E%2FKwelNN%2B%2B83RG3mIP4ZCIT16qjDu7ytTdo%2FIq0iQjhSuxJAbThGXh6zVVE24d0Awfc9XP7BoubYiCwqNP3UC7UDbIhMZ1UIdTnzOhNpetP6X8dTt6rSEvFndrBCXJ%2FhXmyk0IRsizU1yqAtHmvbWNGi%2FNIgSoC6RFGx8b6eoWZArF5m%2F8pPHFWBx%2BKZMLn7PuTM7KCK0UHY9lAW3NKaU8OX4rW%2B0hmfF9K6OZ%2FTNo3wssjUAWymtYSLq9sLWMvz0UD5DH9sNrpbWon8gbWTEwn721MS%2BDHiMi6Oykj53otOGsYsA6alzOWA%2BDarY1A3mOY337qPrDaND3frQEYxMXO1XOnnXIzgjqvVOhGyyQ%2FagwLoJrB7iQqTr9dqYGuusIG8NicE0bpOUxdXpUZMxagNTe5dAcmOMVKQ%2BpA%2FsUiCALpCdG9jic%2Bsk1016q%2BuIvR7FyO5QBZZU%2BdM13T9xYyme3DJkkk8NP2j1NZfz%2Fxy%2FSL1XmwXPKWF2fiuZZT9glZPyb8KpeDPxs9tQ0hv2pTtLwowDzCM5jR9VpE6IZCA9d2D39b7HSlgS6MSO6UBXiZSL5tr8MqLE%2Bsswi66CwgY6pgGIOiRUV0wHmfawOvGI%2BK6rnzY%2FQ7eletgBN3N%2Bgom5LC3m9d5%2B4jChSqVFmRM6G7oD0QimXLULjRrpG%2BXDMydqAbLdJ%2Bu1jik6euP9zD1IVgnE57gfb38Rs7eENEMsY0Icqey%2B4%2FSWXRob1tMOq2bbWC0dT9CMVTc22bxTieLgVsHX0UQrX1ZIwaMROlrkAuHfy%2FVncEgoO8K%2F1HeN6BhdhyMqMCwt&X-Amz-Signature=a3a5526b3d62a5d980930657c7f09f5090bcd638c73f5a5ee874284b33d9f274&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
