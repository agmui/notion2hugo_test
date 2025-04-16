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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CF534M%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMbdPIXZG7lkhGW8L4XoPDEeLE72T75HiFZ%2BHAozyN7AIgKbJHQVOFoBn2on1Zqye1yWAbHXLUd93EOoMQNfU3xIIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAFo33VTR%2FsWRHFr4SrcA%2BhF2HQRb4Z0VK6yiwV0WQ0vUSYVWtRJlJ9fTcGoXC6yD76hKjpAdufIJXAt6btyKiEqw5v7iFiFVZ6xXyAatuF6J48mvQFQDSQ69TvbdaSqKaRlKdAEMmMa%2BpHjNjoD9%2Fqle2EIpaiNBwo%2FH9g0KepoyqOJYHF5%2FQAcVN4c5Der9YSpHUgbu0SVuvmBuNDVjMgYOcLN%2BRUati6OeqgCd1ktZ1tsFUfla8sdjXl4gq7lnRN28RzpMOLbMgWLobu9RL3wDagSmsRLzcVcG6Q7DFB5EdoACTbcY39iYBRYH89TFa4IeTgr5skeQjPqSyjfN9Cd%2Fffzjp%2F9hg5cpePEkfm%2B8oWaoyvx3dYc4%2FEsnwDYy3mnh92JHv71eF9ohRbhr5rI8RnBh1gjgASu1XyFj0PWLa8d0YT2GdnHPSVkl19WY4lzvhpMn6nB6GmRJZGo0Tnv28Rh4%2Bz3dt%2B0Iwd55Jbn2rpSukoQ73BkIkiuiI49QNKbZfIgnTEyL9qlQFa4Nq6NkLhDydwubd5BqdcOrbhZJbt%2FeAnuVyR3Rzo5%2BXWXRXPtCJNggHr2MpNmh4oKYApXb4fnLoE8iAxrIseijFGspKRImoVLqo8PWvkU%2BArnhprztHIxJNluIphXMLSP%2Fr8GOqUBl8fkFUFAVN9hEeoixFwAuxsrJrLzX0cyWfWUuy%2Fa3iNyBo3zLHKl5A1tYPbRi1N0t%2FYQ8ZaRok%2FReH4NdURIUBArZ2vx15o2UZX1uZzO9WDAaZebRaqhxTeBGCqXDvuVkGKEqQTw1F%2FwJ8yb7WToD%2FVVVTAwJeccT1u8GokB%2By6AJwSFZuCGe2O3ioHOegKFAkMiO6MvgnqrUirgFh5kER35cFts&X-Amz-Signature=0248b4832e9a2cdd90048ee9ef333a8877e29b5cac3dc688ed703254189c904e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CF534M%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMbdPIXZG7lkhGW8L4XoPDEeLE72T75HiFZ%2BHAozyN7AIgKbJHQVOFoBn2on1Zqye1yWAbHXLUd93EOoMQNfU3xIIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAFo33VTR%2FsWRHFr4SrcA%2BhF2HQRb4Z0VK6yiwV0WQ0vUSYVWtRJlJ9fTcGoXC6yD76hKjpAdufIJXAt6btyKiEqw5v7iFiFVZ6xXyAatuF6J48mvQFQDSQ69TvbdaSqKaRlKdAEMmMa%2BpHjNjoD9%2Fqle2EIpaiNBwo%2FH9g0KepoyqOJYHF5%2FQAcVN4c5Der9YSpHUgbu0SVuvmBuNDVjMgYOcLN%2BRUati6OeqgCd1ktZ1tsFUfla8sdjXl4gq7lnRN28RzpMOLbMgWLobu9RL3wDagSmsRLzcVcG6Q7DFB5EdoACTbcY39iYBRYH89TFa4IeTgr5skeQjPqSyjfN9Cd%2Fffzjp%2F9hg5cpePEkfm%2B8oWaoyvx3dYc4%2FEsnwDYy3mnh92JHv71eF9ohRbhr5rI8RnBh1gjgASu1XyFj0PWLa8d0YT2GdnHPSVkl19WY4lzvhpMn6nB6GmRJZGo0Tnv28Rh4%2Bz3dt%2B0Iwd55Jbn2rpSukoQ73BkIkiuiI49QNKbZfIgnTEyL9qlQFa4Nq6NkLhDydwubd5BqdcOrbhZJbt%2FeAnuVyR3Rzo5%2BXWXRXPtCJNggHr2MpNmh4oKYApXb4fnLoE8iAxrIseijFGspKRImoVLqo8PWvkU%2BArnhprztHIxJNluIphXMLSP%2Fr8GOqUBl8fkFUFAVN9hEeoixFwAuxsrJrLzX0cyWfWUuy%2Fa3iNyBo3zLHKl5A1tYPbRi1N0t%2FYQ8ZaRok%2FReH4NdURIUBArZ2vx15o2UZX1uZzO9WDAaZebRaqhxTeBGCqXDvuVkGKEqQTw1F%2FwJ8yb7WToD%2FVVVTAwJeccT1u8GokB%2By6AJwSFZuCGe2O3ioHOegKFAkMiO6MvgnqrUirgFh5kER35cFts&X-Amz-Signature=cd743bfbbaacc83d352cd71b02566dc3d1180fdeadde5cfb1f07e27fe624fc7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CF534M%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMbdPIXZG7lkhGW8L4XoPDEeLE72T75HiFZ%2BHAozyN7AIgKbJHQVOFoBn2on1Zqye1yWAbHXLUd93EOoMQNfU3xIIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAFo33VTR%2FsWRHFr4SrcA%2BhF2HQRb4Z0VK6yiwV0WQ0vUSYVWtRJlJ9fTcGoXC6yD76hKjpAdufIJXAt6btyKiEqw5v7iFiFVZ6xXyAatuF6J48mvQFQDSQ69TvbdaSqKaRlKdAEMmMa%2BpHjNjoD9%2Fqle2EIpaiNBwo%2FH9g0KepoyqOJYHF5%2FQAcVN4c5Der9YSpHUgbu0SVuvmBuNDVjMgYOcLN%2BRUati6OeqgCd1ktZ1tsFUfla8sdjXl4gq7lnRN28RzpMOLbMgWLobu9RL3wDagSmsRLzcVcG6Q7DFB5EdoACTbcY39iYBRYH89TFa4IeTgr5skeQjPqSyjfN9Cd%2Fffzjp%2F9hg5cpePEkfm%2B8oWaoyvx3dYc4%2FEsnwDYy3mnh92JHv71eF9ohRbhr5rI8RnBh1gjgASu1XyFj0PWLa8d0YT2GdnHPSVkl19WY4lzvhpMn6nB6GmRJZGo0Tnv28Rh4%2Bz3dt%2B0Iwd55Jbn2rpSukoQ73BkIkiuiI49QNKbZfIgnTEyL9qlQFa4Nq6NkLhDydwubd5BqdcOrbhZJbt%2FeAnuVyR3Rzo5%2BXWXRXPtCJNggHr2MpNmh4oKYApXb4fnLoE8iAxrIseijFGspKRImoVLqo8PWvkU%2BArnhprztHIxJNluIphXMLSP%2Fr8GOqUBl8fkFUFAVN9hEeoixFwAuxsrJrLzX0cyWfWUuy%2Fa3iNyBo3zLHKl5A1tYPbRi1N0t%2FYQ8ZaRok%2FReH4NdURIUBArZ2vx15o2UZX1uZzO9WDAaZebRaqhxTeBGCqXDvuVkGKEqQTw1F%2FwJ8yb7WToD%2FVVVTAwJeccT1u8GokB%2By6AJwSFZuCGe2O3ioHOegKFAkMiO6MvgnqrUirgFh5kER35cFts&X-Amz-Signature=ee84ad86eed956034957751989bad2e4555e8159375bbfaa5d1de3ce44a38a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
