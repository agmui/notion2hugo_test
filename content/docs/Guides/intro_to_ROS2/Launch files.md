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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVARS7ZP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDP58ScMH%2B8iyglh03O%2BVtxRajqtKKElHjQIlVS5EPonQIgINukvDEmn2AJQijMDWBNPnId%2FC0DB5xp48F0tcyfyVkqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5U%2F94TzGzwbw90sSrcA2joHCqLDK7Fupt%2FJq9D1HHtf3A38UAPiQvltFk2zc4DEm0pRpK2GklcWu9dzb4aknk32O%2Biuxar0NkhBv4ThucOd%2BKZmFcgZ931yJGdYJKp65PXZ%2BRBVYE3fw%2BSFxshHRlsT2GnJutgZVXnoq6PzReN%2B7nEchBeoIr0iKTQJhzSvkmBQ1hn53I3dFMQAd7oMti9aRFKbzXAO4ulEdI3bpWRqLS8u%2FT8t%2Fs4IXwvUDhI9f%2FqY8GD1kdC5Q6ug94294%2BXkx7o3B%2FObE%2Fpzwk%2BBbHMHzA1PFwcSblvJDMZdBRNTQ1gz31lhPSTq4xaQFDFPx4aQDDUhsPwBfu2wSuUWyiKwAwQhnTsvpfkVGqCDCuyevhZOFczl5JRnHHRU0PxJrbiZWTsWNJNplajWh02MfMl68skz5If8mp%2BHTZuO9TFMUjvU%2FySQae7bBsv%2BR%2BT6OlyhBvfuUlYiuz4GV19IE%2FGQgmlnZvnDWuN9E%2B3v%2FEXsSfKjJDEv%2Fqo8WZ8VXJe5Bbu8TnJsMsh1xRrg3Tho%2Fz%2F9e7BV%2Flqq9q88kRq%2B8O%2B0XoWkfBpBTh3LdI9LUro5to5loie2urEwwFoGjfy53uel%2FYGgi%2BJdhYUqmomrXuj9h0Q4P4tNvkrDhAWMIHShL4GOqUBQjyWxJp3%2FgbfXtQ96if6JSonK4i28fo1E8IZc7w7B%2Fp1a2E1vjbmWeyVrZkV%2FhQQppnAmIfGb6sg2pYfN7VnfjhikyykO92%2B9tiYJUyfO7zOGcpTHATXQ14MztOT3TCy%2BAbAKPKYycIhh3nq9sArDcwxQSwbLM%2Ft5K7fQ2YRP9%2B7H0gt3ag7Edhhm6AQejwyhEoM5onaFY5XBXN7vFuAMzATZ%2BzX&X-Amz-Signature=25fd48515604b7aa31ef0b35e37d3ec9b9d865ac9f403a4631c11455c57e0eea&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVARS7ZP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDP58ScMH%2B8iyglh03O%2BVtxRajqtKKElHjQIlVS5EPonQIgINukvDEmn2AJQijMDWBNPnId%2FC0DB5xp48F0tcyfyVkqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5U%2F94TzGzwbw90sSrcA2joHCqLDK7Fupt%2FJq9D1HHtf3A38UAPiQvltFk2zc4DEm0pRpK2GklcWu9dzb4aknk32O%2Biuxar0NkhBv4ThucOd%2BKZmFcgZ931yJGdYJKp65PXZ%2BRBVYE3fw%2BSFxshHRlsT2GnJutgZVXnoq6PzReN%2B7nEchBeoIr0iKTQJhzSvkmBQ1hn53I3dFMQAd7oMti9aRFKbzXAO4ulEdI3bpWRqLS8u%2FT8t%2Fs4IXwvUDhI9f%2FqY8GD1kdC5Q6ug94294%2BXkx7o3B%2FObE%2Fpzwk%2BBbHMHzA1PFwcSblvJDMZdBRNTQ1gz31lhPSTq4xaQFDFPx4aQDDUhsPwBfu2wSuUWyiKwAwQhnTsvpfkVGqCDCuyevhZOFczl5JRnHHRU0PxJrbiZWTsWNJNplajWh02MfMl68skz5If8mp%2BHTZuO9TFMUjvU%2FySQae7bBsv%2BR%2BT6OlyhBvfuUlYiuz4GV19IE%2FGQgmlnZvnDWuN9E%2B3v%2FEXsSfKjJDEv%2Fqo8WZ8VXJe5Bbu8TnJsMsh1xRrg3Tho%2Fz%2F9e7BV%2Flqq9q88kRq%2B8O%2B0XoWkfBpBTh3LdI9LUro5to5loie2urEwwFoGjfy53uel%2FYGgi%2BJdhYUqmomrXuj9h0Q4P4tNvkrDhAWMIHShL4GOqUBQjyWxJp3%2FgbfXtQ96if6JSonK4i28fo1E8IZc7w7B%2Fp1a2E1vjbmWeyVrZkV%2FhQQppnAmIfGb6sg2pYfN7VnfjhikyykO92%2B9tiYJUyfO7zOGcpTHATXQ14MztOT3TCy%2BAbAKPKYycIhh3nq9sArDcwxQSwbLM%2Ft5K7fQ2YRP9%2B7H0gt3ag7Edhhm6AQejwyhEoM5onaFY5XBXN7vFuAMzATZ%2BzX&X-Amz-Signature=a9f49ef86b9ae64f21b1303a6f455bc088ab14f86e0ef8cee6cf88b0dd620089&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVARS7ZP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDP58ScMH%2B8iyglh03O%2BVtxRajqtKKElHjQIlVS5EPonQIgINukvDEmn2AJQijMDWBNPnId%2FC0DB5xp48F0tcyfyVkqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5U%2F94TzGzwbw90sSrcA2joHCqLDK7Fupt%2FJq9D1HHtf3A38UAPiQvltFk2zc4DEm0pRpK2GklcWu9dzb4aknk32O%2Biuxar0NkhBv4ThucOd%2BKZmFcgZ931yJGdYJKp65PXZ%2BRBVYE3fw%2BSFxshHRlsT2GnJutgZVXnoq6PzReN%2B7nEchBeoIr0iKTQJhzSvkmBQ1hn53I3dFMQAd7oMti9aRFKbzXAO4ulEdI3bpWRqLS8u%2FT8t%2Fs4IXwvUDhI9f%2FqY8GD1kdC5Q6ug94294%2BXkx7o3B%2FObE%2Fpzwk%2BBbHMHzA1PFwcSblvJDMZdBRNTQ1gz31lhPSTq4xaQFDFPx4aQDDUhsPwBfu2wSuUWyiKwAwQhnTsvpfkVGqCDCuyevhZOFczl5JRnHHRU0PxJrbiZWTsWNJNplajWh02MfMl68skz5If8mp%2BHTZuO9TFMUjvU%2FySQae7bBsv%2BR%2BT6OlyhBvfuUlYiuz4GV19IE%2FGQgmlnZvnDWuN9E%2B3v%2FEXsSfKjJDEv%2Fqo8WZ8VXJe5Bbu8TnJsMsh1xRrg3Tho%2Fz%2F9e7BV%2Flqq9q88kRq%2B8O%2B0XoWkfBpBTh3LdI9LUro5to5loie2urEwwFoGjfy53uel%2FYGgi%2BJdhYUqmomrXuj9h0Q4P4tNvkrDhAWMIHShL4GOqUBQjyWxJp3%2FgbfXtQ96if6JSonK4i28fo1E8IZc7w7B%2Fp1a2E1vjbmWeyVrZkV%2FhQQppnAmIfGb6sg2pYfN7VnfjhikyykO92%2B9tiYJUyfO7zOGcpTHATXQ14MztOT3TCy%2BAbAKPKYycIhh3nq9sArDcwxQSwbLM%2Ft5K7fQ2YRP9%2B7H0gt3ag7Edhhm6AQejwyhEoM5onaFY5XBXN7vFuAMzATZ%2BzX&X-Amz-Signature=edeb563a661a8172401e2d66aa3b4905e4596382f48d6869ec37d2ed258acddc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
