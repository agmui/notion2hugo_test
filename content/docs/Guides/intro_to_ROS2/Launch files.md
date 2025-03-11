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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJTCK3PI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDuDtymHqpDLXlU4Bi8jzYfTu8W0RKjCDGHNad4xElnwAiBbyQ%2BtSEXyWCsSs5TVy%2BbOoSGF53HvODcCXYX%2FrjNgiSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRTMpJp2GVwi1H6x3KtwDp6rfzS8q9IYAgb3sDUzuh45tJQl0%2F%2FN6Ryqwm2EdsRPCPe68dAmXxqnoJjoHUypEPRAaMEZ2JsDp%2BM3p6GAI4nTNlKVf5q6kjgHfP8HBYYBWeKJL%2FDcRhyksdTXe%2BgZUUsyIL2%2BuK%2BPs6VSobAHPfUBkEIlkvPuobcAlipeW5NNOcyxPpLe%2BcPljLTGeD2Vc72JJxP0hX2I0VD1gB9by%2FHsro5Ja66T7pb8DrnR97Qf9UpEKGqEqtnlJLGXeB%2BlaXtx%2BxJ9Cz5JC4A3LOuHMEPOd1DxIFE24oT2%2BCZ5WWJGtTaZznLKMI8oIUuB3VZwLdNyEaH%2FER4jRd%2By0YWEZH6HGf0pvqgbKbpR8vz%2F6uUW0CqWNRY%2BFne2z2CkSr5YIruQ%2Be26JouDvQr9jOFLmTrfg4NfXJa8BDSalE2rYGXZzWBv%2FVzdNRHWWdH9Ig%2BbzLq5mV8lEFsydgarc7FuKhK4eBMf18uSK3ta0cLwJ2nETcsWAzilE2mX24lKyORsvFd5j4kfk2P74MQYDUCIFQdr567QnWanpfHxvXDcaUoW5plc3iafOTdz0wa8d9f3%2FkW7p3SnkyHXwnIP76qgxBZ3YQkIutkOm9YHI0I0r%2FLGdmvChXHWLh%2Fnr%2BAgwu9LCvgY6pgHzH3KQq6Rhy6RpYPDFa9%2BslgXR32u%2Fa84j3SkFCfT5Z7LIwPi0ne9VNAgWeKqINu6rrHJryhbCokgVov9Jj%2F24OqoIsSCWf4bLyzk4csXBTVVGpD8TynsfxMTim6QO4DmZO2J2fsKEgtiFEgkiLLzfhR1BvOQixqg7%2FWg%2FcfHklGv%2BmxciUUSRlZTAPjE8ZSMOBwRQiD7DrjRpghZOGr8h%2BXi5iZvL&X-Amz-Signature=ac64f3329467ef1fa8a5776b4129a9cceae523b074cf343d36e18c6f6f9a8635&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJTCK3PI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDuDtymHqpDLXlU4Bi8jzYfTu8W0RKjCDGHNad4xElnwAiBbyQ%2BtSEXyWCsSs5TVy%2BbOoSGF53HvODcCXYX%2FrjNgiSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRTMpJp2GVwi1H6x3KtwDp6rfzS8q9IYAgb3sDUzuh45tJQl0%2F%2FN6Ryqwm2EdsRPCPe68dAmXxqnoJjoHUypEPRAaMEZ2JsDp%2BM3p6GAI4nTNlKVf5q6kjgHfP8HBYYBWeKJL%2FDcRhyksdTXe%2BgZUUsyIL2%2BuK%2BPs6VSobAHPfUBkEIlkvPuobcAlipeW5NNOcyxPpLe%2BcPljLTGeD2Vc72JJxP0hX2I0VD1gB9by%2FHsro5Ja66T7pb8DrnR97Qf9UpEKGqEqtnlJLGXeB%2BlaXtx%2BxJ9Cz5JC4A3LOuHMEPOd1DxIFE24oT2%2BCZ5WWJGtTaZznLKMI8oIUuB3VZwLdNyEaH%2FER4jRd%2By0YWEZH6HGf0pvqgbKbpR8vz%2F6uUW0CqWNRY%2BFne2z2CkSr5YIruQ%2Be26JouDvQr9jOFLmTrfg4NfXJa8BDSalE2rYGXZzWBv%2FVzdNRHWWdH9Ig%2BbzLq5mV8lEFsydgarc7FuKhK4eBMf18uSK3ta0cLwJ2nETcsWAzilE2mX24lKyORsvFd5j4kfk2P74MQYDUCIFQdr567QnWanpfHxvXDcaUoW5plc3iafOTdz0wa8d9f3%2FkW7p3SnkyHXwnIP76qgxBZ3YQkIutkOm9YHI0I0r%2FLGdmvChXHWLh%2Fnr%2BAgwu9LCvgY6pgHzH3KQq6Rhy6RpYPDFa9%2BslgXR32u%2Fa84j3SkFCfT5Z7LIwPi0ne9VNAgWeKqINu6rrHJryhbCokgVov9Jj%2F24OqoIsSCWf4bLyzk4csXBTVVGpD8TynsfxMTim6QO4DmZO2J2fsKEgtiFEgkiLLzfhR1BvOQixqg7%2FWg%2FcfHklGv%2BmxciUUSRlZTAPjE8ZSMOBwRQiD7DrjRpghZOGr8h%2BXi5iZvL&X-Amz-Signature=bc13e109ada4ab09bbba1153099c6612d232f21c8cfab99a47c94d94c23257c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJTCK3PI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDuDtymHqpDLXlU4Bi8jzYfTu8W0RKjCDGHNad4xElnwAiBbyQ%2BtSEXyWCsSs5TVy%2BbOoSGF53HvODcCXYX%2FrjNgiSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRTMpJp2GVwi1H6x3KtwDp6rfzS8q9IYAgb3sDUzuh45tJQl0%2F%2FN6Ryqwm2EdsRPCPe68dAmXxqnoJjoHUypEPRAaMEZ2JsDp%2BM3p6GAI4nTNlKVf5q6kjgHfP8HBYYBWeKJL%2FDcRhyksdTXe%2BgZUUsyIL2%2BuK%2BPs6VSobAHPfUBkEIlkvPuobcAlipeW5NNOcyxPpLe%2BcPljLTGeD2Vc72JJxP0hX2I0VD1gB9by%2FHsro5Ja66T7pb8DrnR97Qf9UpEKGqEqtnlJLGXeB%2BlaXtx%2BxJ9Cz5JC4A3LOuHMEPOd1DxIFE24oT2%2BCZ5WWJGtTaZznLKMI8oIUuB3VZwLdNyEaH%2FER4jRd%2By0YWEZH6HGf0pvqgbKbpR8vz%2F6uUW0CqWNRY%2BFne2z2CkSr5YIruQ%2Be26JouDvQr9jOFLmTrfg4NfXJa8BDSalE2rYGXZzWBv%2FVzdNRHWWdH9Ig%2BbzLq5mV8lEFsydgarc7FuKhK4eBMf18uSK3ta0cLwJ2nETcsWAzilE2mX24lKyORsvFd5j4kfk2P74MQYDUCIFQdr567QnWanpfHxvXDcaUoW5plc3iafOTdz0wa8d9f3%2FkW7p3SnkyHXwnIP76qgxBZ3YQkIutkOm9YHI0I0r%2FLGdmvChXHWLh%2Fnr%2BAgwu9LCvgY6pgHzH3KQq6Rhy6RpYPDFa9%2BslgXR32u%2Fa84j3SkFCfT5Z7LIwPi0ne9VNAgWeKqINu6rrHJryhbCokgVov9Jj%2F24OqoIsSCWf4bLyzk4csXBTVVGpD8TynsfxMTim6QO4DmZO2J2fsKEgtiFEgkiLLzfhR1BvOQixqg7%2FWg%2FcfHklGv%2BmxciUUSRlZTAPjE8ZSMOBwRQiD7DrjRpghZOGr8h%2BXi5iZvL&X-Amz-Signature=b4b4641a6f828d579421b54180e0e52f39061b624e64634aa9934530086a7bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
