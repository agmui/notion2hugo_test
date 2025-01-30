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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665265NK7E%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrIzwy0zB%2BeJAhlYel37pNISyZ%2BxIIr%2BYXJh7Mg2dBJQIgK98JvNnznkKy8Eqi3xs7VUrt7oRXBfSpYyaqT5Mb6SEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5TxZz9TgvW0MkkkyrcA%2FRFqCkQNdvVe1KnWpf88Qnlxi5ajKV36WeG01j61Sl%2BAPGxqjtyhasehqRP07xHdomh9L7CwvkNSfceoQDQMUZlrGkMPHOG%2FHdSL2VchCVRd2grroQY%2B3Xs80wcS1MZ%2FwaTfAsGdjOrZWQek3SaIhl2khzVyUFnn6Np38UUfrivxLo1z8lkG94cUD58OrJEoOKIC%2F64dHe6vd2TC7ilr5l8Aqyi14d5sStlr1Fx6ayXmUxgkTm8siXT3FRRzEqNwvvl1%2Bfii%2B2IJNk4YAMQIwy8u2OYL2n1lySa2x4j%2F6u6ouEwa5W8K4tWOeH7E%2FDahxclXI11Uk8GbQbUki2WfjEAdQTbBdFYffebl%2B9ctrZ7O%2FESE4GOPMpithcjdIKbeIjxTTAgDQ%2F%2ByG2YzFYnC92AyI40ktuvlRP%2B7cwiz5OvwgTTmPZUpZwqhuvTt71dnbgm9l54Q%2FJ%2BOEnWDn7AIzbTMidH%2FS2vMB%2BODQZ7zKJqleArzpWouyFI18xHQMa4UWSNAnpRfxdZKx97b7qBjFaOm3LuVWPDolh%2B03KSjs9rvA%2BXMJanPmF5UHs9l5oj6cBrA9HK1yB0DxHr8M2JgfoJ4X7tPqiSFYqKtGDOukVlLhPSwXxvcRBFeQveMLWz67wGOqUBW%2ByVYMHQyV02NihEIgtF6GbLAYR4A3xY3GpNKpsR61XSbC6k5cj14QpTAyBjQ0ZOuENOsEsO0aG2tx6wnORAWLH7WYL2e7%2B5pdqWFpzMP5AWtk0BTEEMJ1O2Q6v%2FPDntw2SduKvlHMTw5J71VlNlqJfFdC80wNnQyUBWzNrNt9HCCo1Rw8wmjRDFQQHPH9TinXAxlb6bg1qmT7uiyQgaQqzqPQPT&X-Amz-Signature=9e8a5f2792d07824a5688e8c0df4eb9e4e4cdd73ea6d480dbc4a42cb792d8e49&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665265NK7E%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrIzwy0zB%2BeJAhlYel37pNISyZ%2BxIIr%2BYXJh7Mg2dBJQIgK98JvNnznkKy8Eqi3xs7VUrt7oRXBfSpYyaqT5Mb6SEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5TxZz9TgvW0MkkkyrcA%2FRFqCkQNdvVe1KnWpf88Qnlxi5ajKV36WeG01j61Sl%2BAPGxqjtyhasehqRP07xHdomh9L7CwvkNSfceoQDQMUZlrGkMPHOG%2FHdSL2VchCVRd2grroQY%2B3Xs80wcS1MZ%2FwaTfAsGdjOrZWQek3SaIhl2khzVyUFnn6Np38UUfrivxLo1z8lkG94cUD58OrJEoOKIC%2F64dHe6vd2TC7ilr5l8Aqyi14d5sStlr1Fx6ayXmUxgkTm8siXT3FRRzEqNwvvl1%2Bfii%2B2IJNk4YAMQIwy8u2OYL2n1lySa2x4j%2F6u6ouEwa5W8K4tWOeH7E%2FDahxclXI11Uk8GbQbUki2WfjEAdQTbBdFYffebl%2B9ctrZ7O%2FESE4GOPMpithcjdIKbeIjxTTAgDQ%2F%2ByG2YzFYnC92AyI40ktuvlRP%2B7cwiz5OvwgTTmPZUpZwqhuvTt71dnbgm9l54Q%2FJ%2BOEnWDn7AIzbTMidH%2FS2vMB%2BODQZ7zKJqleArzpWouyFI18xHQMa4UWSNAnpRfxdZKx97b7qBjFaOm3LuVWPDolh%2B03KSjs9rvA%2BXMJanPmF5UHs9l5oj6cBrA9HK1yB0DxHr8M2JgfoJ4X7tPqiSFYqKtGDOukVlLhPSwXxvcRBFeQveMLWz67wGOqUBW%2ByVYMHQyV02NihEIgtF6GbLAYR4A3xY3GpNKpsR61XSbC6k5cj14QpTAyBjQ0ZOuENOsEsO0aG2tx6wnORAWLH7WYL2e7%2B5pdqWFpzMP5AWtk0BTEEMJ1O2Q6v%2FPDntw2SduKvlHMTw5J71VlNlqJfFdC80wNnQyUBWzNrNt9HCCo1Rw8wmjRDFQQHPH9TinXAxlb6bg1qmT7uiyQgaQqzqPQPT&X-Amz-Signature=3a41a60e505cf936847e41fd6ed98f61b12f9e9874c3d68593c0e7e51e8dc229&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665265NK7E%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrIzwy0zB%2BeJAhlYel37pNISyZ%2BxIIr%2BYXJh7Mg2dBJQIgK98JvNnznkKy8Eqi3xs7VUrt7oRXBfSpYyaqT5Mb6SEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5TxZz9TgvW0MkkkyrcA%2FRFqCkQNdvVe1KnWpf88Qnlxi5ajKV36WeG01j61Sl%2BAPGxqjtyhasehqRP07xHdomh9L7CwvkNSfceoQDQMUZlrGkMPHOG%2FHdSL2VchCVRd2grroQY%2B3Xs80wcS1MZ%2FwaTfAsGdjOrZWQek3SaIhl2khzVyUFnn6Np38UUfrivxLo1z8lkG94cUD58OrJEoOKIC%2F64dHe6vd2TC7ilr5l8Aqyi14d5sStlr1Fx6ayXmUxgkTm8siXT3FRRzEqNwvvl1%2Bfii%2B2IJNk4YAMQIwy8u2OYL2n1lySa2x4j%2F6u6ouEwa5W8K4tWOeH7E%2FDahxclXI11Uk8GbQbUki2WfjEAdQTbBdFYffebl%2B9ctrZ7O%2FESE4GOPMpithcjdIKbeIjxTTAgDQ%2F%2ByG2YzFYnC92AyI40ktuvlRP%2B7cwiz5OvwgTTmPZUpZwqhuvTt71dnbgm9l54Q%2FJ%2BOEnWDn7AIzbTMidH%2FS2vMB%2BODQZ7zKJqleArzpWouyFI18xHQMa4UWSNAnpRfxdZKx97b7qBjFaOm3LuVWPDolh%2B03KSjs9rvA%2BXMJanPmF5UHs9l5oj6cBrA9HK1yB0DxHr8M2JgfoJ4X7tPqiSFYqKtGDOukVlLhPSwXxvcRBFeQveMLWz67wGOqUBW%2ByVYMHQyV02NihEIgtF6GbLAYR4A3xY3GpNKpsR61XSbC6k5cj14QpTAyBjQ0ZOuENOsEsO0aG2tx6wnORAWLH7WYL2e7%2B5pdqWFpzMP5AWtk0BTEEMJ1O2Q6v%2FPDntw2SduKvlHMTw5J71VlNlqJfFdC80wNnQyUBWzNrNt9HCCo1Rw8wmjRDFQQHPH9TinXAxlb6bg1qmT7uiyQgaQqzqPQPT&X-Amz-Signature=65f5bfe18dd5bd86f26f549841cb633d438ea60f5fda8f41a22d52ad54d17c96&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
