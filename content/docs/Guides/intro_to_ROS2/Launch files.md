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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KYDLH4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwF7n5wPYV9P5iS969pRVlFQ7R6AYNY4UBih6iHgyu%2FAiEAziH5RWeF%2BpmUtTyhvAmezUnoJ32mET5T2y%2F7ydIhFCAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuOqSuaHarbe8DzWyrcAxQgYioYllUIz2Cr8Q%2F4%2BooqvKu6A9bp1jQWZtxPyelyrLH4kEik4eC0pO0%2BdeAZ5DM4EyhUgzjYPQW9JdiTaT%2FTDw09dXvZJyqK%2BysBWnFsW8YLvZonqTDLUENH6D%2BxkUsMjmTc%2FqijTOyLjQSAtCLNL3hPmqDweJDOYjhbEfjBTL%2FaaoLzr2yKDJdeaquyNYEEiFpPdpRT58qjM73CTGBikiE5VN3hk%2FXIUSIEvp6UDvCFy9hWatmFOlRdpQTIjydb9N3pLz7rPWV%2FtJUFrKasdC0alza09DjoMsMgH4l%2BiC%2FgY4eRA0ZxSrfHa2%2B%2B%2FE31tuQyN4fQ4Q%2FUlr%2FJRoIum0COAzxFrrbaE5%2FmJK1Kayk4kQWnV6EgyglbC3bz%2BtNXqMhou6ryi9fpdF8uOMIHLE5h0sfehfJUwz6Pi9Fmg7qlqs0FGAibN9cnvH2c1FOC4a%2Fqz%2FFyZYcF%2Bx%2BKd1ziYkDRanIsWDUORxYvPBJuPCYT6nTGhTBAtsIzTWvzF0jg%2BC9HMn%2B4YGFhgd2a%2BghvAgbVrzokT5ViWE68tD%2FX%2BJOxTIiM4VUL9yYcdDstdddjlUa1l%2FmCkVVGZ3QaPDOwWnE4o2iS0JDdVkphVl6pV9n8IqMwrLqXGsC0MOn3rb0GOqUBLn7rRc4LRrolDFfmHqTxUFr%2BZmAg0hdUDrdKvTduMjfahQWpKheWKuLdtV0BNNJLSfKr5hMbzTd7Qt6FlWTrsxXjuy1zbvuqVVptwLZX%2Fq0iwfqbttQAtzkfFHQf4PILrxu%2FzN9KXPtnBiQMPrAOBIFz%2F7Tt02tC%2BtAQeMU3NVg3OouHrnd66aaCw6NKLq20aTDDaujr5IqUM%2BgDaBl16q7%2BkK42&X-Amz-Signature=b0d49dca6c00dde05df054258d6b1433eec02d7ddb5e2f05703086eab4eab96b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KYDLH4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwF7n5wPYV9P5iS969pRVlFQ7R6AYNY4UBih6iHgyu%2FAiEAziH5RWeF%2BpmUtTyhvAmezUnoJ32mET5T2y%2F7ydIhFCAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuOqSuaHarbe8DzWyrcAxQgYioYllUIz2Cr8Q%2F4%2BooqvKu6A9bp1jQWZtxPyelyrLH4kEik4eC0pO0%2BdeAZ5DM4EyhUgzjYPQW9JdiTaT%2FTDw09dXvZJyqK%2BysBWnFsW8YLvZonqTDLUENH6D%2BxkUsMjmTc%2FqijTOyLjQSAtCLNL3hPmqDweJDOYjhbEfjBTL%2FaaoLzr2yKDJdeaquyNYEEiFpPdpRT58qjM73CTGBikiE5VN3hk%2FXIUSIEvp6UDvCFy9hWatmFOlRdpQTIjydb9N3pLz7rPWV%2FtJUFrKasdC0alza09DjoMsMgH4l%2BiC%2FgY4eRA0ZxSrfHa2%2B%2B%2FE31tuQyN4fQ4Q%2FUlr%2FJRoIum0COAzxFrrbaE5%2FmJK1Kayk4kQWnV6EgyglbC3bz%2BtNXqMhou6ryi9fpdF8uOMIHLE5h0sfehfJUwz6Pi9Fmg7qlqs0FGAibN9cnvH2c1FOC4a%2Fqz%2FFyZYcF%2Bx%2BKd1ziYkDRanIsWDUORxYvPBJuPCYT6nTGhTBAtsIzTWvzF0jg%2BC9HMn%2B4YGFhgd2a%2BghvAgbVrzokT5ViWE68tD%2FX%2BJOxTIiM4VUL9yYcdDstdddjlUa1l%2FmCkVVGZ3QaPDOwWnE4o2iS0JDdVkphVl6pV9n8IqMwrLqXGsC0MOn3rb0GOqUBLn7rRc4LRrolDFfmHqTxUFr%2BZmAg0hdUDrdKvTduMjfahQWpKheWKuLdtV0BNNJLSfKr5hMbzTd7Qt6FlWTrsxXjuy1zbvuqVVptwLZX%2Fq0iwfqbttQAtzkfFHQf4PILrxu%2FzN9KXPtnBiQMPrAOBIFz%2F7Tt02tC%2BtAQeMU3NVg3OouHrnd66aaCw6NKLq20aTDDaujr5IqUM%2BgDaBl16q7%2BkK42&X-Amz-Signature=3d3b6f86a8f3d0f8f2be7c5c421a38343c1b40cf43a6abaf3b9c4699e8a38375&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KYDLH4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwF7n5wPYV9P5iS969pRVlFQ7R6AYNY4UBih6iHgyu%2FAiEAziH5RWeF%2BpmUtTyhvAmezUnoJ32mET5T2y%2F7ydIhFCAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuOqSuaHarbe8DzWyrcAxQgYioYllUIz2Cr8Q%2F4%2BooqvKu6A9bp1jQWZtxPyelyrLH4kEik4eC0pO0%2BdeAZ5DM4EyhUgzjYPQW9JdiTaT%2FTDw09dXvZJyqK%2BysBWnFsW8YLvZonqTDLUENH6D%2BxkUsMjmTc%2FqijTOyLjQSAtCLNL3hPmqDweJDOYjhbEfjBTL%2FaaoLzr2yKDJdeaquyNYEEiFpPdpRT58qjM73CTGBikiE5VN3hk%2FXIUSIEvp6UDvCFy9hWatmFOlRdpQTIjydb9N3pLz7rPWV%2FtJUFrKasdC0alza09DjoMsMgH4l%2BiC%2FgY4eRA0ZxSrfHa2%2B%2B%2FE31tuQyN4fQ4Q%2FUlr%2FJRoIum0COAzxFrrbaE5%2FmJK1Kayk4kQWnV6EgyglbC3bz%2BtNXqMhou6ryi9fpdF8uOMIHLE5h0sfehfJUwz6Pi9Fmg7qlqs0FGAibN9cnvH2c1FOC4a%2Fqz%2FFyZYcF%2Bx%2BKd1ziYkDRanIsWDUORxYvPBJuPCYT6nTGhTBAtsIzTWvzF0jg%2BC9HMn%2B4YGFhgd2a%2BghvAgbVrzokT5ViWE68tD%2FX%2BJOxTIiM4VUL9yYcdDstdddjlUa1l%2FmCkVVGZ3QaPDOwWnE4o2iS0JDdVkphVl6pV9n8IqMwrLqXGsC0MOn3rb0GOqUBLn7rRc4LRrolDFfmHqTxUFr%2BZmAg0hdUDrdKvTduMjfahQWpKheWKuLdtV0BNNJLSfKr5hMbzTd7Qt6FlWTrsxXjuy1zbvuqVVptwLZX%2Fq0iwfqbttQAtzkfFHQf4PILrxu%2FzN9KXPtnBiQMPrAOBIFz%2F7Tt02tC%2BtAQeMU3NVg3OouHrnd66aaCw6NKLq20aTDDaujr5IqUM%2BgDaBl16q7%2BkK42&X-Amz-Signature=beae161f22562e167691e1ca480116398187e2dcf8527a1ce34d47dd98acfc50&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
