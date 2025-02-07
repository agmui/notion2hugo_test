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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIUZQWX4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFOuR6CT1vfuOxsXaOntVVYenpfmQU3go6OyLVGuHCl3AiEAp62PmCB2fNQICPt6dAxCWvU0zLKbBJHuCGmBi9VOoEsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDE%2B3KdEDJnvG%2FIm3YSrcA8KrXv2XulBDtBTAGtfIvACvxbgFrKBJZsrgOnApSp30kGcmQNI3ep0Jzx%2FFLlRELYAnwxYzP8Zk1w4xHU64w4HC58UxOHFz0NfiwrTwPhOKjW%2B85mhtBnkI60TvWiTBWs6UceAHGRm8ZAXORF7ewR9P70bNVJ6%2FIfYSwdV6l72mNbxWt4xjFOVKjgEhb5zY5hunLKyKbCbNoYgyQHg2UkxrdBO8lpq35Eu2WCyNDWe4M4QHLQk3PXf0KAwZJgmA1gzE7kJB3szzLz8NQERYJQAWxYqJFZTrlP%2FDoiIlm8pVNaN%2BKkKp3klWVvIsdYwKnfVFkT059rKQiEOUZzzHSwCy7xlGO9xcF6sEKn3RrW1iUEEq1D53LIxmCMI%2FLnkgpSf6anydGhFag2ZrFFz3akiXIMy34UMeLT9Q6zcLpm5SbBJfAX1LjdltVyIpiq4KVeZ34HlFn8YulfNiJRmRjtCPHsTPElxsczvXagAbmOz8I%2F55QaWMsxGGnfJXJt8JpCgRSvC75%2FjE7nZAqKYJstDLpnHi7CB5xhh7HEH2LSBwgh1UdkBk%2B%2BSWhssdrM4Vebprbl2RgLOBbeLyK1qH8WVrgH30wvmNNUZ2ds7cB7sTr7ATboXprATTUOMYMKrUmb0GOqUB7Osof4zFay1TJyE8X4dpYhFXGM%2B19lVP8TWKOrZdik%2BZac9J6XkNzvYc2sqHqhIhdPme1Smq238fXf8lvJ1n%2BL24CmqVB7KfQ%2B3XAbhepVz5ugbadRREQZUd%2FZT4bFZM4zaZzDCPki171DvjfF%2FL0MJeWIWJm65tpOakSK2Gw1CWmc2E5hzsl4bSM0H61AyRe0enIZ%2BbsAZv4IGndGMK3BN5jsNs&X-Amz-Signature=0a063e11c7db0e9ae842234935a7d3ce8126bffdf0ffc7ec5a1371cc0cb419ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIUZQWX4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFOuR6CT1vfuOxsXaOntVVYenpfmQU3go6OyLVGuHCl3AiEAp62PmCB2fNQICPt6dAxCWvU0zLKbBJHuCGmBi9VOoEsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDE%2B3KdEDJnvG%2FIm3YSrcA8KrXv2XulBDtBTAGtfIvACvxbgFrKBJZsrgOnApSp30kGcmQNI3ep0Jzx%2FFLlRELYAnwxYzP8Zk1w4xHU64w4HC58UxOHFz0NfiwrTwPhOKjW%2B85mhtBnkI60TvWiTBWs6UceAHGRm8ZAXORF7ewR9P70bNVJ6%2FIfYSwdV6l72mNbxWt4xjFOVKjgEhb5zY5hunLKyKbCbNoYgyQHg2UkxrdBO8lpq35Eu2WCyNDWe4M4QHLQk3PXf0KAwZJgmA1gzE7kJB3szzLz8NQERYJQAWxYqJFZTrlP%2FDoiIlm8pVNaN%2BKkKp3klWVvIsdYwKnfVFkT059rKQiEOUZzzHSwCy7xlGO9xcF6sEKn3RrW1iUEEq1D53LIxmCMI%2FLnkgpSf6anydGhFag2ZrFFz3akiXIMy34UMeLT9Q6zcLpm5SbBJfAX1LjdltVyIpiq4KVeZ34HlFn8YulfNiJRmRjtCPHsTPElxsczvXagAbmOz8I%2F55QaWMsxGGnfJXJt8JpCgRSvC75%2FjE7nZAqKYJstDLpnHi7CB5xhh7HEH2LSBwgh1UdkBk%2B%2BSWhssdrM4Vebprbl2RgLOBbeLyK1qH8WVrgH30wvmNNUZ2ds7cB7sTr7ATboXprATTUOMYMKrUmb0GOqUB7Osof4zFay1TJyE8X4dpYhFXGM%2B19lVP8TWKOrZdik%2BZac9J6XkNzvYc2sqHqhIhdPme1Smq238fXf8lvJ1n%2BL24CmqVB7KfQ%2B3XAbhepVz5ugbadRREQZUd%2FZT4bFZM4zaZzDCPki171DvjfF%2FL0MJeWIWJm65tpOakSK2Gw1CWmc2E5hzsl4bSM0H61AyRe0enIZ%2BbsAZv4IGndGMK3BN5jsNs&X-Amz-Signature=eda70b7a57bf2af557b38959ec77e2b181765f47c90123a978594d8f27db9f86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIUZQWX4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFOuR6CT1vfuOxsXaOntVVYenpfmQU3go6OyLVGuHCl3AiEAp62PmCB2fNQICPt6dAxCWvU0zLKbBJHuCGmBi9VOoEsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDE%2B3KdEDJnvG%2FIm3YSrcA8KrXv2XulBDtBTAGtfIvACvxbgFrKBJZsrgOnApSp30kGcmQNI3ep0Jzx%2FFLlRELYAnwxYzP8Zk1w4xHU64w4HC58UxOHFz0NfiwrTwPhOKjW%2B85mhtBnkI60TvWiTBWs6UceAHGRm8ZAXORF7ewR9P70bNVJ6%2FIfYSwdV6l72mNbxWt4xjFOVKjgEhb5zY5hunLKyKbCbNoYgyQHg2UkxrdBO8lpq35Eu2WCyNDWe4M4QHLQk3PXf0KAwZJgmA1gzE7kJB3szzLz8NQERYJQAWxYqJFZTrlP%2FDoiIlm8pVNaN%2BKkKp3klWVvIsdYwKnfVFkT059rKQiEOUZzzHSwCy7xlGO9xcF6sEKn3RrW1iUEEq1D53LIxmCMI%2FLnkgpSf6anydGhFag2ZrFFz3akiXIMy34UMeLT9Q6zcLpm5SbBJfAX1LjdltVyIpiq4KVeZ34HlFn8YulfNiJRmRjtCPHsTPElxsczvXagAbmOz8I%2F55QaWMsxGGnfJXJt8JpCgRSvC75%2FjE7nZAqKYJstDLpnHi7CB5xhh7HEH2LSBwgh1UdkBk%2B%2BSWhssdrM4Vebprbl2RgLOBbeLyK1qH8WVrgH30wvmNNUZ2ds7cB7sTr7ATboXprATTUOMYMKrUmb0GOqUB7Osof4zFay1TJyE8X4dpYhFXGM%2B19lVP8TWKOrZdik%2BZac9J6XkNzvYc2sqHqhIhdPme1Smq238fXf8lvJ1n%2BL24CmqVB7KfQ%2B3XAbhepVz5ugbadRREQZUd%2FZT4bFZM4zaZzDCPki171DvjfF%2FL0MJeWIWJm65tpOakSK2Gw1CWmc2E5hzsl4bSM0H61AyRe0enIZ%2BbsAZv4IGndGMK3BN5jsNs&X-Amz-Signature=4b8b31ace2d6851bd21a486c8aa711d05c01279fa7facac7231b4f1baf2de14d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
