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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HSWRP6N%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCXqtlBFAJlZiyeYBV0ZUHPr48XosD1atH1g%2Bd6kmGaswIgfriDswkwVWtPWXcNpEM1slaOq9mUV0YU%2FJKBzbwyVU4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOMsTH5c3sGBJkZv%2FCrcAxnpCWvDTw%2Fk7ODFWG3YgJHR%2Faj1TV0VFIpSmzHQTw4Qcxef4vci0A%2FPa1PywU3Ks1VNyqtV6N9SV3fRHm%2F6XnymylvdraRQe3O3SzlxWcXNJK3ti5OZLLBUl47uyXj72uaHeea%2FvLD3%2B7seIPkJP5Qvgtv3t3kdYIowNhKq1A%2BorMTyBtMmYpuHFsDyZOlOh6mDpBptn8q8DkMIoXP6vFXjapa51FmToIda3ZdayDYD2plNJh7SbyBvn4s9sMR%2FTIj1HLwXPna%2Bd4tYilTL73ycp179C%2F9fl7TE6aq6HKcqvJ1AX%2BBNfEhXupMbPo3UYrCXy%2FRprKETOvlSkJa6D42k1kQJijicKj0FG0RiQthCvThNCcr23pQEAq6o5g6ANEXZesUYzRldwnR0HEKTJbEfVMNo5R9ErBtV7f0bUvXsA6xTv9fJoEZRoB6MnkwCPAH3ahfE4racALMsN54tDAHx%2BDjOboOqUxX1VgCZ3WLQrpS4T%2B2rwgHHbcVRmjZ2U%2F50Qeqlh%2BAu4m1MH8dqZ6feTYp9LUr%2FpObMufJHhaEczn9a6eMNVIRlHRSYy5b0ZEmUCdFGCIKaQYonxInjCxbYh5lTYM7wS369mw%2FRMJYu3ox0mInkwoQMLiPFMPGLgL4GOqUBm%2FHoEoeDKnuh7krZkeT2cApqQ%2BGShH9%2FMelHOyS7vSma3SCeeGu9x5c751lF%2FZb%2B0reh9xXk5Uci1XEUMq%2BKbgYoUsDkNv2A76IpfNGFbpj%2FMfQMgoDKOphGd3Z0HpbYkqeewAV0%2FCLfQHfsFwNIbUdH8ccgPz4PLJwm%2B778YNnMkRBn%2FzIgOe7PPUCR3tVNm8efxXWdVrcmKu8jAzhSVKEkH5Tv&X-Amz-Signature=029269968e380b94c4800d3665d5438efbb74a504b798e0e987ffeddf4a6e02b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HSWRP6N%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCXqtlBFAJlZiyeYBV0ZUHPr48XosD1atH1g%2Bd6kmGaswIgfriDswkwVWtPWXcNpEM1slaOq9mUV0YU%2FJKBzbwyVU4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOMsTH5c3sGBJkZv%2FCrcAxnpCWvDTw%2Fk7ODFWG3YgJHR%2Faj1TV0VFIpSmzHQTw4Qcxef4vci0A%2FPa1PywU3Ks1VNyqtV6N9SV3fRHm%2F6XnymylvdraRQe3O3SzlxWcXNJK3ti5OZLLBUl47uyXj72uaHeea%2FvLD3%2B7seIPkJP5Qvgtv3t3kdYIowNhKq1A%2BorMTyBtMmYpuHFsDyZOlOh6mDpBptn8q8DkMIoXP6vFXjapa51FmToIda3ZdayDYD2plNJh7SbyBvn4s9sMR%2FTIj1HLwXPna%2Bd4tYilTL73ycp179C%2F9fl7TE6aq6HKcqvJ1AX%2BBNfEhXupMbPo3UYrCXy%2FRprKETOvlSkJa6D42k1kQJijicKj0FG0RiQthCvThNCcr23pQEAq6o5g6ANEXZesUYzRldwnR0HEKTJbEfVMNo5R9ErBtV7f0bUvXsA6xTv9fJoEZRoB6MnkwCPAH3ahfE4racALMsN54tDAHx%2BDjOboOqUxX1VgCZ3WLQrpS4T%2B2rwgHHbcVRmjZ2U%2F50Qeqlh%2BAu4m1MH8dqZ6feTYp9LUr%2FpObMufJHhaEczn9a6eMNVIRlHRSYy5b0ZEmUCdFGCIKaQYonxInjCxbYh5lTYM7wS369mw%2FRMJYu3ox0mInkwoQMLiPFMPGLgL4GOqUBm%2FHoEoeDKnuh7krZkeT2cApqQ%2BGShH9%2FMelHOyS7vSma3SCeeGu9x5c751lF%2FZb%2B0reh9xXk5Uci1XEUMq%2BKbgYoUsDkNv2A76IpfNGFbpj%2FMfQMgoDKOphGd3Z0HpbYkqeewAV0%2FCLfQHfsFwNIbUdH8ccgPz4PLJwm%2B778YNnMkRBn%2FzIgOe7PPUCR3tVNm8efxXWdVrcmKu8jAzhSVKEkH5Tv&X-Amz-Signature=633d448fdc171213494dffea25961b70639c7bda278a4c394d50d979162b6c89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HSWRP6N%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCXqtlBFAJlZiyeYBV0ZUHPr48XosD1atH1g%2Bd6kmGaswIgfriDswkwVWtPWXcNpEM1slaOq9mUV0YU%2FJKBzbwyVU4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOMsTH5c3sGBJkZv%2FCrcAxnpCWvDTw%2Fk7ODFWG3YgJHR%2Faj1TV0VFIpSmzHQTw4Qcxef4vci0A%2FPa1PywU3Ks1VNyqtV6N9SV3fRHm%2F6XnymylvdraRQe3O3SzlxWcXNJK3ti5OZLLBUl47uyXj72uaHeea%2FvLD3%2B7seIPkJP5Qvgtv3t3kdYIowNhKq1A%2BorMTyBtMmYpuHFsDyZOlOh6mDpBptn8q8DkMIoXP6vFXjapa51FmToIda3ZdayDYD2plNJh7SbyBvn4s9sMR%2FTIj1HLwXPna%2Bd4tYilTL73ycp179C%2F9fl7TE6aq6HKcqvJ1AX%2BBNfEhXupMbPo3UYrCXy%2FRprKETOvlSkJa6D42k1kQJijicKj0FG0RiQthCvThNCcr23pQEAq6o5g6ANEXZesUYzRldwnR0HEKTJbEfVMNo5R9ErBtV7f0bUvXsA6xTv9fJoEZRoB6MnkwCPAH3ahfE4racALMsN54tDAHx%2BDjOboOqUxX1VgCZ3WLQrpS4T%2B2rwgHHbcVRmjZ2U%2F50Qeqlh%2BAu4m1MH8dqZ6feTYp9LUr%2FpObMufJHhaEczn9a6eMNVIRlHRSYy5b0ZEmUCdFGCIKaQYonxInjCxbYh5lTYM7wS369mw%2FRMJYu3ox0mInkwoQMLiPFMPGLgL4GOqUBm%2FHoEoeDKnuh7krZkeT2cApqQ%2BGShH9%2FMelHOyS7vSma3SCeeGu9x5c751lF%2FZb%2B0reh9xXk5Uci1XEUMq%2BKbgYoUsDkNv2A76IpfNGFbpj%2FMfQMgoDKOphGd3Z0HpbYkqeewAV0%2FCLfQHfsFwNIbUdH8ccgPz4PLJwm%2B778YNnMkRBn%2FzIgOe7PPUCR3tVNm8efxXWdVrcmKu8jAzhSVKEkH5Tv&X-Amz-Signature=61bdf7d5baa87eb5b35aa10438b4734a3c44432017dc64508573efce0aa86dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
