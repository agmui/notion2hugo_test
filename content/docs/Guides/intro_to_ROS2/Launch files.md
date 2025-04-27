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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2KFMBK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRxhzHkf2CaahshRs6ZX7Qm9sgA%2BQ7W92krebjm2Y8vAiA9cidIkM9Zh5Vr9r%2FYKGMl0%2BqhDoLhqa2m44PbFM7GTSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoAPpnTSFwIJOrZ6fKtwDRPx%2BqDc3p%2Fdh1838ZWg%2FQNe2Ku792JgTqcdLTx61OyqrsukzfqjP%2By3Kf1g4T1OpYxs2hAP%2FNiIHLVxP3Chr0oxRs249CV1FaydbfygZrvSD%2B5VD%2FQnmg6ON5tsmLusBSr5D3CiyMWjKE7dgWvhoEZCwUdeJ39AvqA310rZZe82N0xQ%2FyMi%2FGy1%2F2vyPNzNrfmIFg9mm766i0XQTcFhswPjYLCgwRXzP4zojsOZOycDBnc8YU55ACStcGa0tm3nVTNHSxmO%2Bas%2BkJqehS8jhvYQRxzgQwYAWXfum3qTlnXVCPkNPkk1dvAEXE4H0zLjnA6WM%2BZ8AZpNRwKebcJXU8awSBk5Un5AOGuFNEk7ZBn5%2BedUW87HZ%2F1I8fdlUNIbt6qqS0fJ2FPfeFhMyQKo7C%2BqVHSH2732S9tYXcVw3UnM4Xav4Hkm3qgcM%2FzeiCDCjKIQ7Z8DEuHEMeqQVdyZOBU3aSCnPyz0qcTQrCcPnqNmyy9hPN2TxHS7yA%2Bunm0GT2TVN3xnlhQC%2FUhZxIQ4FY6LbxNAsR2KZCoMXTKie0NrsLtLBtokfBpx6EC4F61Ny4YXIE3pdZMZI3pdT%2F0pWtUphZcr4n6OHrxUZnId5miQNmFlXrwoM92TJTbow6r%2B1wAY6pgGhiUGHVujt7egCh%2BNmXiVK9cLtieO9o9U1A79yUbRpt1JE%2Bei8EpO0Bl%2F8ZEmwL%2F7BM7ZL6OOKP8ysW43uYJ2K9v2ZLpFxADcm%2Bg82ens8hAFf3X%2FUIdV4kgmYsJUuimWX8KxXDKDSQxY6aaAzK36I%2FvspWapaas52jtXHJMH8Rvd9ydTpNeWoc4lQ%2Fy%2BgxnV77UtDXlYxKCu0WH0kejyfn9dGpd6X&X-Amz-Signature=10c1ac9e12d7c207f4eb1af606e84cc12d505c8e5d40b0f3108356fa14994891&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2KFMBK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRxhzHkf2CaahshRs6ZX7Qm9sgA%2BQ7W92krebjm2Y8vAiA9cidIkM9Zh5Vr9r%2FYKGMl0%2BqhDoLhqa2m44PbFM7GTSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoAPpnTSFwIJOrZ6fKtwDRPx%2BqDc3p%2Fdh1838ZWg%2FQNe2Ku792JgTqcdLTx61OyqrsukzfqjP%2By3Kf1g4T1OpYxs2hAP%2FNiIHLVxP3Chr0oxRs249CV1FaydbfygZrvSD%2B5VD%2FQnmg6ON5tsmLusBSr5D3CiyMWjKE7dgWvhoEZCwUdeJ39AvqA310rZZe82N0xQ%2FyMi%2FGy1%2F2vyPNzNrfmIFg9mm766i0XQTcFhswPjYLCgwRXzP4zojsOZOycDBnc8YU55ACStcGa0tm3nVTNHSxmO%2Bas%2BkJqehS8jhvYQRxzgQwYAWXfum3qTlnXVCPkNPkk1dvAEXE4H0zLjnA6WM%2BZ8AZpNRwKebcJXU8awSBk5Un5AOGuFNEk7ZBn5%2BedUW87HZ%2F1I8fdlUNIbt6qqS0fJ2FPfeFhMyQKo7C%2BqVHSH2732S9tYXcVw3UnM4Xav4Hkm3qgcM%2FzeiCDCjKIQ7Z8DEuHEMeqQVdyZOBU3aSCnPyz0qcTQrCcPnqNmyy9hPN2TxHS7yA%2Bunm0GT2TVN3xnlhQC%2FUhZxIQ4FY6LbxNAsR2KZCoMXTKie0NrsLtLBtokfBpx6EC4F61Ny4YXIE3pdZMZI3pdT%2F0pWtUphZcr4n6OHrxUZnId5miQNmFlXrwoM92TJTbow6r%2B1wAY6pgGhiUGHVujt7egCh%2BNmXiVK9cLtieO9o9U1A79yUbRpt1JE%2Bei8EpO0Bl%2F8ZEmwL%2F7BM7ZL6OOKP8ysW43uYJ2K9v2ZLpFxADcm%2Bg82ens8hAFf3X%2FUIdV4kgmYsJUuimWX8KxXDKDSQxY6aaAzK36I%2FvspWapaas52jtXHJMH8Rvd9ydTpNeWoc4lQ%2Fy%2BgxnV77UtDXlYxKCu0WH0kejyfn9dGpd6X&X-Amz-Signature=28e653923ea46af61197299d5809bd19a7f4d4eb1f84a46613aeebf48c5365b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2KFMBK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRxhzHkf2CaahshRs6ZX7Qm9sgA%2BQ7W92krebjm2Y8vAiA9cidIkM9Zh5Vr9r%2FYKGMl0%2BqhDoLhqa2m44PbFM7GTSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoAPpnTSFwIJOrZ6fKtwDRPx%2BqDc3p%2Fdh1838ZWg%2FQNe2Ku792JgTqcdLTx61OyqrsukzfqjP%2By3Kf1g4T1OpYxs2hAP%2FNiIHLVxP3Chr0oxRs249CV1FaydbfygZrvSD%2B5VD%2FQnmg6ON5tsmLusBSr5D3CiyMWjKE7dgWvhoEZCwUdeJ39AvqA310rZZe82N0xQ%2FyMi%2FGy1%2F2vyPNzNrfmIFg9mm766i0XQTcFhswPjYLCgwRXzP4zojsOZOycDBnc8YU55ACStcGa0tm3nVTNHSxmO%2Bas%2BkJqehS8jhvYQRxzgQwYAWXfum3qTlnXVCPkNPkk1dvAEXE4H0zLjnA6WM%2BZ8AZpNRwKebcJXU8awSBk5Un5AOGuFNEk7ZBn5%2BedUW87HZ%2F1I8fdlUNIbt6qqS0fJ2FPfeFhMyQKo7C%2BqVHSH2732S9tYXcVw3UnM4Xav4Hkm3qgcM%2FzeiCDCjKIQ7Z8DEuHEMeqQVdyZOBU3aSCnPyz0qcTQrCcPnqNmyy9hPN2TxHS7yA%2Bunm0GT2TVN3xnlhQC%2FUhZxIQ4FY6LbxNAsR2KZCoMXTKie0NrsLtLBtokfBpx6EC4F61Ny4YXIE3pdZMZI3pdT%2F0pWtUphZcr4n6OHrxUZnId5miQNmFlXrwoM92TJTbow6r%2B1wAY6pgGhiUGHVujt7egCh%2BNmXiVK9cLtieO9o9U1A79yUbRpt1JE%2Bei8EpO0Bl%2F8ZEmwL%2F7BM7ZL6OOKP8ysW43uYJ2K9v2ZLpFxADcm%2Bg82ens8hAFf3X%2FUIdV4kgmYsJUuimWX8KxXDKDSQxY6aaAzK36I%2FvspWapaas52jtXHJMH8Rvd9ydTpNeWoc4lQ%2Fy%2BgxnV77UtDXlYxKCu0WH0kejyfn9dGpd6X&X-Amz-Signature=6a80260418366a167bdb71df343e964905d1985d5940ec182246ec6fecf0f9ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
