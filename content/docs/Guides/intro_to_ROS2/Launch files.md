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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LOB6SND%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIAzc4bcHzZC5IvVp%2F9DNkwqz9lpY%2B1Y4IF1KO3iXcXuQAiAR3HTqTfzkkBwtC2eJQ%2Bw3Xxl%2FQ0T6QdsHD9GdpAaimyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMRxFyU2SpB2Zvw%2B3pKtwDoqjYlEj1TdFdFziQPv6g14B%2FTVy%2FyA2iwHToBtgJkJGvRkkfSBG%2FfYjWOPVVrH00gAvhwZcgGTw%2ByhA3LOiPEahb%2FRV4v75trpTVq7wqpAm%2FqYGTBJyGmmQ4uBVTY4%2FMw32YF5wlJVKlIJ3JOOh%2FQEngHuM5ax6GJtnuiZ9wUmfEXmSWjuzOfP%2F7R7kLuojN8tA30GkP%2BaC2mqdqHqcg3RGMrBmW%2FfhLtfuAYKcWPm28MVxfE0eGIG%2BntSlMjzPItyk2%2FfT37Ez2YIryGBE3X3tyzgdOGm8FOxz09JpY03oKHrmIIwyKbQvtGshxQIm222S7lYqpyyMgpQ8kEV7vOT7%2B2BBff2RyzR2nbSOfSq%2BQ3qh3F9SCBsFmg%2FkIjnoxdF6difpI0JmjngH5ivMNHscNahyOy5rFG%2FBo33kMe%2F%2BFiV%2BTnLrhBzFgGCSdvuZISPaFRpf19Momda%2BuCN4C0snkO94EZkZkj9DGw5EVkjyJNhcUYJBoVxqOZD7tOa7l95Tt0RVwla1oANKsEscVLorBnja4f163xcAlfUTFUTFP21R%2FdHSEqUdebcE1TjfUdrYlQWGCMZRCPBQRSE%2B%2BB1AYJYH68h%2FBfzHjTOkMSI5Pg28h%2Fowcm3voW5QwwNmkwwY6pgEVpcmUR8ZR8%2F5IM2nqYbWQ2UQsZqJXGAT8FiDmNjKs4aB3jnwRbqgpES4NQXOTnNqxrsyzfRatBQQz3%2BWaKgTlL5yp%2FzVRG5FaumB9Loq0BO5jmbql6OKAPybYwm4Taq67TQwHfm%2FkOloZyeMqqE%2B8ViRrVethHx85XmTNQc7c6%2FTQsfChmyfnRlCc8pimNXRfSqvJuPIyfEH1Sbq3P%2Fl8vPRhnD71&X-Amz-Signature=ff53db1d013b113fba122b5b9ea238a25b7f9fa311113d694e619308b4d27aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LOB6SND%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIAzc4bcHzZC5IvVp%2F9DNkwqz9lpY%2B1Y4IF1KO3iXcXuQAiAR3HTqTfzkkBwtC2eJQ%2Bw3Xxl%2FQ0T6QdsHD9GdpAaimyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMRxFyU2SpB2Zvw%2B3pKtwDoqjYlEj1TdFdFziQPv6g14B%2FTVy%2FyA2iwHToBtgJkJGvRkkfSBG%2FfYjWOPVVrH00gAvhwZcgGTw%2ByhA3LOiPEahb%2FRV4v75trpTVq7wqpAm%2FqYGTBJyGmmQ4uBVTY4%2FMw32YF5wlJVKlIJ3JOOh%2FQEngHuM5ax6GJtnuiZ9wUmfEXmSWjuzOfP%2F7R7kLuojN8tA30GkP%2BaC2mqdqHqcg3RGMrBmW%2FfhLtfuAYKcWPm28MVxfE0eGIG%2BntSlMjzPItyk2%2FfT37Ez2YIryGBE3X3tyzgdOGm8FOxz09JpY03oKHrmIIwyKbQvtGshxQIm222S7lYqpyyMgpQ8kEV7vOT7%2B2BBff2RyzR2nbSOfSq%2BQ3qh3F9SCBsFmg%2FkIjnoxdF6difpI0JmjngH5ivMNHscNahyOy5rFG%2FBo33kMe%2F%2BFiV%2BTnLrhBzFgGCSdvuZISPaFRpf19Momda%2BuCN4C0snkO94EZkZkj9DGw5EVkjyJNhcUYJBoVxqOZD7tOa7l95Tt0RVwla1oANKsEscVLorBnja4f163xcAlfUTFUTFP21R%2FdHSEqUdebcE1TjfUdrYlQWGCMZRCPBQRSE%2B%2BB1AYJYH68h%2FBfzHjTOkMSI5Pg28h%2Fowcm3voW5QwwNmkwwY6pgEVpcmUR8ZR8%2F5IM2nqYbWQ2UQsZqJXGAT8FiDmNjKs4aB3jnwRbqgpES4NQXOTnNqxrsyzfRatBQQz3%2BWaKgTlL5yp%2FzVRG5FaumB9Loq0BO5jmbql6OKAPybYwm4Taq67TQwHfm%2FkOloZyeMqqE%2B8ViRrVethHx85XmTNQc7c6%2FTQsfChmyfnRlCc8pimNXRfSqvJuPIyfEH1Sbq3P%2Fl8vPRhnD71&X-Amz-Signature=1039c93f13347f71c1ed3fce7492d090454f00d958f97b1dd827f7bcd071f397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LOB6SND%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIAzc4bcHzZC5IvVp%2F9DNkwqz9lpY%2B1Y4IF1KO3iXcXuQAiAR3HTqTfzkkBwtC2eJQ%2Bw3Xxl%2FQ0T6QdsHD9GdpAaimyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMRxFyU2SpB2Zvw%2B3pKtwDoqjYlEj1TdFdFziQPv6g14B%2FTVy%2FyA2iwHToBtgJkJGvRkkfSBG%2FfYjWOPVVrH00gAvhwZcgGTw%2ByhA3LOiPEahb%2FRV4v75trpTVq7wqpAm%2FqYGTBJyGmmQ4uBVTY4%2FMw32YF5wlJVKlIJ3JOOh%2FQEngHuM5ax6GJtnuiZ9wUmfEXmSWjuzOfP%2F7R7kLuojN8tA30GkP%2BaC2mqdqHqcg3RGMrBmW%2FfhLtfuAYKcWPm28MVxfE0eGIG%2BntSlMjzPItyk2%2FfT37Ez2YIryGBE3X3tyzgdOGm8FOxz09JpY03oKHrmIIwyKbQvtGshxQIm222S7lYqpyyMgpQ8kEV7vOT7%2B2BBff2RyzR2nbSOfSq%2BQ3qh3F9SCBsFmg%2FkIjnoxdF6difpI0JmjngH5ivMNHscNahyOy5rFG%2FBo33kMe%2F%2BFiV%2BTnLrhBzFgGCSdvuZISPaFRpf19Momda%2BuCN4C0snkO94EZkZkj9DGw5EVkjyJNhcUYJBoVxqOZD7tOa7l95Tt0RVwla1oANKsEscVLorBnja4f163xcAlfUTFUTFP21R%2FdHSEqUdebcE1TjfUdrYlQWGCMZRCPBQRSE%2B%2BB1AYJYH68h%2FBfzHjTOkMSI5Pg28h%2Fowcm3voW5QwwNmkwwY6pgEVpcmUR8ZR8%2F5IM2nqYbWQ2UQsZqJXGAT8FiDmNjKs4aB3jnwRbqgpES4NQXOTnNqxrsyzfRatBQQz3%2BWaKgTlL5yp%2FzVRG5FaumB9Loq0BO5jmbql6OKAPybYwm4Taq67TQwHfm%2FkOloZyeMqqE%2B8ViRrVethHx85XmTNQc7c6%2FTQsfChmyfnRlCc8pimNXRfSqvJuPIyfEH1Sbq3P%2Fl8vPRhnD71&X-Amz-Signature=c035d5592878fc4f51bd24005065d44adc0ad3720c33910c58d7762a379ac1fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
