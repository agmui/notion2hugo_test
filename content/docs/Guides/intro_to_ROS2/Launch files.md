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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRQZGXM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBVUHcY9qTmvnmDSRV5Iw8Z%2F3yZJ5%2F058qIFlDp3JjVEAiAyuvbr%2BntRca9Iy7aJZzSLRLtW5tQRpt6r5d4lIHIsqiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsmr3K55uFJygYUqRKtwDTktlh7p35FU0MvtkoQ%2F49uR6OvFwMG3c6R6OvV6U%2B6UV8AiUBRMNlZ6pvewZOOXMqDEqAkRvatsFhsVumey%2BPHCX2jsgQYheCTmahsxobA6zlnj21U7WsbmKzsu2dkkfZs7AcaOXNttI22KFJFhxKl%2F301bI%2B8jubtCZbApNIrofLTCUeplq%2FM1Zx1Aqmyuxa91akXuMNj7aCuEE5UfX2lfQjyOwc0xJpAineiyvKB0kiUSZhCCPNqIt%2FYT6XJKNLtWvid4wDlOpNOTRzd6UBEba6V%2Be24aLLV2ALTz1CKMQBXBsF0ZUl5Zboj7temtuedt%2FogIysqpxRRdjVJYSIH0AKl8d5e7U7iHQ7OCQSjAd%2FvrW99aYvrEOFctHShsaWC69KwcYi7RtSBYTdVma%2BYl5ERwxvQFSi7lZ599tvAUdp4Kfyobzr%2FnqJvOOmr4DarxNj2euKkwA2VRr%2BKQZ8zPWOzbF58XVA5DxjS98xajRbG%2B%2Ft6ooOBdpsOV25VSj5uJxrDY2xutCXvOFyGaXcgS1B1A%2Fwe4zesTv21Fu08TKP5Pp4AznmKQlTQBEghJ4TlNPTMCmRYOBo3rb1YfijsVxJ1BOllSiIFuCfSuJoqlZFUq72%2BNTkvhIKNkwhe%2ByvwY6pgEuxy%2BemscQzcDv2NO6zuUGOtZAyhoiZyLS2UpCgR8m7bb6CPdLpDzhju%2FwdUTt4ytY97E0MP4xI%2F1NMJ3GKvmjyK1x0za179i%2Foz%2BkcboWTHpBMxjPO4J3sn4QHGexXDJseQOE3k3fWwnsibLiCs%2FJvxpSSg8s9bWt1p4sR2yNsE615Wa7vQuX33b9vgicX199eYKrKJaK3aE4VTSQXBsEuCzm4auf&X-Amz-Signature=9712f4791e9c974793686c1a40a0893cbe46bf94bb004790e43c413c95403388&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRQZGXM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBVUHcY9qTmvnmDSRV5Iw8Z%2F3yZJ5%2F058qIFlDp3JjVEAiAyuvbr%2BntRca9Iy7aJZzSLRLtW5tQRpt6r5d4lIHIsqiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsmr3K55uFJygYUqRKtwDTktlh7p35FU0MvtkoQ%2F49uR6OvFwMG3c6R6OvV6U%2B6UV8AiUBRMNlZ6pvewZOOXMqDEqAkRvatsFhsVumey%2BPHCX2jsgQYheCTmahsxobA6zlnj21U7WsbmKzsu2dkkfZs7AcaOXNttI22KFJFhxKl%2F301bI%2B8jubtCZbApNIrofLTCUeplq%2FM1Zx1Aqmyuxa91akXuMNj7aCuEE5UfX2lfQjyOwc0xJpAineiyvKB0kiUSZhCCPNqIt%2FYT6XJKNLtWvid4wDlOpNOTRzd6UBEba6V%2Be24aLLV2ALTz1CKMQBXBsF0ZUl5Zboj7temtuedt%2FogIysqpxRRdjVJYSIH0AKl8d5e7U7iHQ7OCQSjAd%2FvrW99aYvrEOFctHShsaWC69KwcYi7RtSBYTdVma%2BYl5ERwxvQFSi7lZ599tvAUdp4Kfyobzr%2FnqJvOOmr4DarxNj2euKkwA2VRr%2BKQZ8zPWOzbF58XVA5DxjS98xajRbG%2B%2Ft6ooOBdpsOV25VSj5uJxrDY2xutCXvOFyGaXcgS1B1A%2Fwe4zesTv21Fu08TKP5Pp4AznmKQlTQBEghJ4TlNPTMCmRYOBo3rb1YfijsVxJ1BOllSiIFuCfSuJoqlZFUq72%2BNTkvhIKNkwhe%2ByvwY6pgEuxy%2BemscQzcDv2NO6zuUGOtZAyhoiZyLS2UpCgR8m7bb6CPdLpDzhju%2FwdUTt4ytY97E0MP4xI%2F1NMJ3GKvmjyK1x0za179i%2Foz%2BkcboWTHpBMxjPO4J3sn4QHGexXDJseQOE3k3fWwnsibLiCs%2FJvxpSSg8s9bWt1p4sR2yNsE615Wa7vQuX33b9vgicX199eYKrKJaK3aE4VTSQXBsEuCzm4auf&X-Amz-Signature=ed1ee979db4ad934169542ddebff3b830b4b56626a33b8fee9fa1b503e82e341&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRQZGXM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBVUHcY9qTmvnmDSRV5Iw8Z%2F3yZJ5%2F058qIFlDp3JjVEAiAyuvbr%2BntRca9Iy7aJZzSLRLtW5tQRpt6r5d4lIHIsqiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsmr3K55uFJygYUqRKtwDTktlh7p35FU0MvtkoQ%2F49uR6OvFwMG3c6R6OvV6U%2B6UV8AiUBRMNlZ6pvewZOOXMqDEqAkRvatsFhsVumey%2BPHCX2jsgQYheCTmahsxobA6zlnj21U7WsbmKzsu2dkkfZs7AcaOXNttI22KFJFhxKl%2F301bI%2B8jubtCZbApNIrofLTCUeplq%2FM1Zx1Aqmyuxa91akXuMNj7aCuEE5UfX2lfQjyOwc0xJpAineiyvKB0kiUSZhCCPNqIt%2FYT6XJKNLtWvid4wDlOpNOTRzd6UBEba6V%2Be24aLLV2ALTz1CKMQBXBsF0ZUl5Zboj7temtuedt%2FogIysqpxRRdjVJYSIH0AKl8d5e7U7iHQ7OCQSjAd%2FvrW99aYvrEOFctHShsaWC69KwcYi7RtSBYTdVma%2BYl5ERwxvQFSi7lZ599tvAUdp4Kfyobzr%2FnqJvOOmr4DarxNj2euKkwA2VRr%2BKQZ8zPWOzbF58XVA5DxjS98xajRbG%2B%2Ft6ooOBdpsOV25VSj5uJxrDY2xutCXvOFyGaXcgS1B1A%2Fwe4zesTv21Fu08TKP5Pp4AznmKQlTQBEghJ4TlNPTMCmRYOBo3rb1YfijsVxJ1BOllSiIFuCfSuJoqlZFUq72%2BNTkvhIKNkwhe%2ByvwY6pgEuxy%2BemscQzcDv2NO6zuUGOtZAyhoiZyLS2UpCgR8m7bb6CPdLpDzhju%2FwdUTt4ytY97E0MP4xI%2F1NMJ3GKvmjyK1x0za179i%2Foz%2BkcboWTHpBMxjPO4J3sn4QHGexXDJseQOE3k3fWwnsibLiCs%2FJvxpSSg8s9bWt1p4sR2yNsE615Wa7vQuX33b9vgicX199eYKrKJaK3aE4VTSQXBsEuCzm4auf&X-Amz-Signature=2243d1441e336632c9d85640412b1bf153430d1cedc38cd8514083cbb3ad5a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
