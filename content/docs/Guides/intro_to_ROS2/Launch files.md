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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJHMCHU%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDdBhp4CuP2pJD%2FDoDL0P4DwSBrGgmsRNqaVyfPIG3wEQIgYhmoQc8EXehZ7OgILOuo1ne%2BjWQ2SArA1Yy%2FoISPuCsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDARUPoWSBQUYLnThHSrcAyw04VpYgRCQ1Ude8cJDYJUnFuqE5IvTw9vCsBly7yhT9Q3I1P8UqJ6L6jdMhjVULJYLu5sZPnxQCWTxqtf91QATp6%2FSDg%2Fkeu2fC%2FO7f7k2ONDt81mxrA3g9sNkKVoWnRSPrIZXvzDMAsrWSIQyJt4vD5yN0tpPchYFWs%2B9sE7P%2B%2FaNN5ayT7pQl5ngko%2Fm3mvtxJrLfH4m699rh4M90cF9GLI0x6RQj40hHCO%2B4VtVam%2Bml0G0ZIDOawSIxsFHH8JTLKBDhj%2FBfoAuSvsbpZX8GVxzk09j%2BH0FXuzSUlUX%2B1SupBKg4Grhb5qAxx8SVD%2FZEkULF4PNVsTXwKiyuDnA2DmL6K%2BUAtJCe6CrVLxAPq3wmR4%2B3y566ggZCbLq9x6lkSPWHxkSHX9w52FYNDpO6%2FowwRH%2FAYBvfZpZWZGkdpgUCS0q0QwEXTzDGdXozLShivUtjls2GPMJjb%2FyI9LdKJTPC%2FTHz5H9qfIgNCmTw%2Fb8sFTAMM7euUuUannpULxtdiL8pZ%2F2sziDZYTcgJtNKtZTX2%2F3O8wsgV1B3A1kXNhBzKt%2B1gjBqVerzWe9NCfaugaF96dXM0%2FlyV4dKS8KjdSSkTeAg2wvzFvCc36Hdp80Cj6%2B%2FxbEtVAhMK6q5sIGOqUBqyOkR1YM4yJZVSGP9w0j5eWataq80Q0oDUrjc2cgVLwzpUobxsZRRAJ9smP39Gz%2BYp73VgiQ6FENPHsnQK9QO9Bwn0rJ7xhZIOjnhe7eRGCWqCIJ3hbFcatiAh%2Bdhn0FsVrNsCMMt6r%2F2uzi%2BdGwmH2kXczRIRHu2gMlOmydPmrFvTIE%2BunwDIDRpdXE%2BjffF0NDl1w3W3ySOEqfp1OBEk8T4yxM&X-Amz-Signature=253a0953eec9a30fef007b00fde43d8822ffe772520737787ec2d389f59c0d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJHMCHU%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDdBhp4CuP2pJD%2FDoDL0P4DwSBrGgmsRNqaVyfPIG3wEQIgYhmoQc8EXehZ7OgILOuo1ne%2BjWQ2SArA1Yy%2FoISPuCsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDARUPoWSBQUYLnThHSrcAyw04VpYgRCQ1Ude8cJDYJUnFuqE5IvTw9vCsBly7yhT9Q3I1P8UqJ6L6jdMhjVULJYLu5sZPnxQCWTxqtf91QATp6%2FSDg%2Fkeu2fC%2FO7f7k2ONDt81mxrA3g9sNkKVoWnRSPrIZXvzDMAsrWSIQyJt4vD5yN0tpPchYFWs%2B9sE7P%2B%2FaNN5ayT7pQl5ngko%2Fm3mvtxJrLfH4m699rh4M90cF9GLI0x6RQj40hHCO%2B4VtVam%2Bml0G0ZIDOawSIxsFHH8JTLKBDhj%2FBfoAuSvsbpZX8GVxzk09j%2BH0FXuzSUlUX%2B1SupBKg4Grhb5qAxx8SVD%2FZEkULF4PNVsTXwKiyuDnA2DmL6K%2BUAtJCe6CrVLxAPq3wmR4%2B3y566ggZCbLq9x6lkSPWHxkSHX9w52FYNDpO6%2FowwRH%2FAYBvfZpZWZGkdpgUCS0q0QwEXTzDGdXozLShivUtjls2GPMJjb%2FyI9LdKJTPC%2FTHz5H9qfIgNCmTw%2Fb8sFTAMM7euUuUannpULxtdiL8pZ%2F2sziDZYTcgJtNKtZTX2%2F3O8wsgV1B3A1kXNhBzKt%2B1gjBqVerzWe9NCfaugaF96dXM0%2FlyV4dKS8KjdSSkTeAg2wvzFvCc36Hdp80Cj6%2B%2FxbEtVAhMK6q5sIGOqUBqyOkR1YM4yJZVSGP9w0j5eWataq80Q0oDUrjc2cgVLwzpUobxsZRRAJ9smP39Gz%2BYp73VgiQ6FENPHsnQK9QO9Bwn0rJ7xhZIOjnhe7eRGCWqCIJ3hbFcatiAh%2Bdhn0FsVrNsCMMt6r%2F2uzi%2BdGwmH2kXczRIRHu2gMlOmydPmrFvTIE%2BunwDIDRpdXE%2BjffF0NDl1w3W3ySOEqfp1OBEk8T4yxM&X-Amz-Signature=054b34d07cd03cba67e75a352875b9b51217e640ff0be64cecf047fd370ecd73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJHMCHU%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDdBhp4CuP2pJD%2FDoDL0P4DwSBrGgmsRNqaVyfPIG3wEQIgYhmoQc8EXehZ7OgILOuo1ne%2BjWQ2SArA1Yy%2FoISPuCsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDARUPoWSBQUYLnThHSrcAyw04VpYgRCQ1Ude8cJDYJUnFuqE5IvTw9vCsBly7yhT9Q3I1P8UqJ6L6jdMhjVULJYLu5sZPnxQCWTxqtf91QATp6%2FSDg%2Fkeu2fC%2FO7f7k2ONDt81mxrA3g9sNkKVoWnRSPrIZXvzDMAsrWSIQyJt4vD5yN0tpPchYFWs%2B9sE7P%2B%2FaNN5ayT7pQl5ngko%2Fm3mvtxJrLfH4m699rh4M90cF9GLI0x6RQj40hHCO%2B4VtVam%2Bml0G0ZIDOawSIxsFHH8JTLKBDhj%2FBfoAuSvsbpZX8GVxzk09j%2BH0FXuzSUlUX%2B1SupBKg4Grhb5qAxx8SVD%2FZEkULF4PNVsTXwKiyuDnA2DmL6K%2BUAtJCe6CrVLxAPq3wmR4%2B3y566ggZCbLq9x6lkSPWHxkSHX9w52FYNDpO6%2FowwRH%2FAYBvfZpZWZGkdpgUCS0q0QwEXTzDGdXozLShivUtjls2GPMJjb%2FyI9LdKJTPC%2FTHz5H9qfIgNCmTw%2Fb8sFTAMM7euUuUannpULxtdiL8pZ%2F2sziDZYTcgJtNKtZTX2%2F3O8wsgV1B3A1kXNhBzKt%2B1gjBqVerzWe9NCfaugaF96dXM0%2FlyV4dKS8KjdSSkTeAg2wvzFvCc36Hdp80Cj6%2B%2FxbEtVAhMK6q5sIGOqUBqyOkR1YM4yJZVSGP9w0j5eWataq80Q0oDUrjc2cgVLwzpUobxsZRRAJ9smP39Gz%2BYp73VgiQ6FENPHsnQK9QO9Bwn0rJ7xhZIOjnhe7eRGCWqCIJ3hbFcatiAh%2Bdhn0FsVrNsCMMt6r%2F2uzi%2BdGwmH2kXczRIRHu2gMlOmydPmrFvTIE%2BunwDIDRpdXE%2BjffF0NDl1w3W3ySOEqfp1OBEk8T4yxM&X-Amz-Signature=0a1b64bd788e1a2e4687fb5225e5025b8ee44b3000b78c94d37646a73df9ccc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
