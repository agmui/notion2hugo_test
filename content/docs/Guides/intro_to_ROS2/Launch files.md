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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEHPFIAS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKy8XrsA1sQlRUhdG2vjThE%2BJr6QB9Jv75jFx2K7OyEAiEA%2FMcc8cGmrOXOA8E5%2FEuE2f8IkqT10vQ3EK4QILFQ%2B20qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANk3rDiX3HTf2nmLyrcA%2BOkbhG%2FQAs3SpIPMgBHG1ogOtylI3tNowLnAGrHA1%2B2qL8fg6ggx3Eya%2FaViMkyOQN5Ej0PNCf%2BiQvw%2BVi0YrxEaAn%2BuE4B155hEclPfxB%2BzoE3V6HEn4SWbspDBcidfg3lq3cJNRqx3l1CuZivUs7ee%2FUv8gqZmQX7BbOSDfhIsQyLDI%2F%2Fa%2FnUSKQRiIhzketnRwllQR9nznLbZW6K%2FiqM%2FIrQv6IrIvgX62cGP6Mq%2Bhw%2FC8aejLbsKWtinnwJc4c%2FleRSzlcqBIobiLEXGJft3%2FH7m6agzfeszbO2EPTHqthzcwc7YIHDEdDS8RlmDH0UHp1dkIX%2BEAhF63ZyjZv5RAULwPYany%2BR%2BqbF9V52KVUUz4lZpurn0tPGD5TrCiWJcV13uYzMhoT%2F8PEZflL1YCPwxGhUy2aa7zsJIEAyez%2F5F90Q3sCT5MtxbkTuOVD9wLpgO6v5BKH24WtmErNyBjFuKVvHxfj3nauB46BAry2mAstLiclYpm85X2hVIjzLjun6SAX7ROJ1YEBqiDdUPln9NO2fZBlIOXCc%2BDFqwdc5ohqE1ffFh%2BnPFsPasSA6zQxw9cEQ2B%2Bjyj%2FWxqBgVYko9miK0AMgENmtU4kMV1yqa9EVHzQlhNYPMPOO28IGOqUBg1Qwcd%2FtcdoPxB34m4PgAKviq2dljsrVJKCu0U0u8Bgvaw4Vjlimc%2FJAB5ShBa6VfYWBqReIpqyH3ygpnJIkM4gpUoMSF9bT2t1BxpcFjxXQoeXj%2B2GFayUd91VNXeUNCUHOAoHnMV7KP4fXMmOBGk1fX6iL7T3VFz4sFWk8TmYAyQw5pG4S3o1mVwyzmvF2u2hCcbFLDJ6vR3aKl9kkzlGNOZbv&X-Amz-Signature=2ced6812197ce4f56b19c89d21c57bae6d977fd393d7d061a95103e9e8added1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEHPFIAS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKy8XrsA1sQlRUhdG2vjThE%2BJr6QB9Jv75jFx2K7OyEAiEA%2FMcc8cGmrOXOA8E5%2FEuE2f8IkqT10vQ3EK4QILFQ%2B20qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANk3rDiX3HTf2nmLyrcA%2BOkbhG%2FQAs3SpIPMgBHG1ogOtylI3tNowLnAGrHA1%2B2qL8fg6ggx3Eya%2FaViMkyOQN5Ej0PNCf%2BiQvw%2BVi0YrxEaAn%2BuE4B155hEclPfxB%2BzoE3V6HEn4SWbspDBcidfg3lq3cJNRqx3l1CuZivUs7ee%2FUv8gqZmQX7BbOSDfhIsQyLDI%2F%2Fa%2FnUSKQRiIhzketnRwllQR9nznLbZW6K%2FiqM%2FIrQv6IrIvgX62cGP6Mq%2Bhw%2FC8aejLbsKWtinnwJc4c%2FleRSzlcqBIobiLEXGJft3%2FH7m6agzfeszbO2EPTHqthzcwc7YIHDEdDS8RlmDH0UHp1dkIX%2BEAhF63ZyjZv5RAULwPYany%2BR%2BqbF9V52KVUUz4lZpurn0tPGD5TrCiWJcV13uYzMhoT%2F8PEZflL1YCPwxGhUy2aa7zsJIEAyez%2F5F90Q3sCT5MtxbkTuOVD9wLpgO6v5BKH24WtmErNyBjFuKVvHxfj3nauB46BAry2mAstLiclYpm85X2hVIjzLjun6SAX7ROJ1YEBqiDdUPln9NO2fZBlIOXCc%2BDFqwdc5ohqE1ffFh%2BnPFsPasSA6zQxw9cEQ2B%2Bjyj%2FWxqBgVYko9miK0AMgENmtU4kMV1yqa9EVHzQlhNYPMPOO28IGOqUBg1Qwcd%2FtcdoPxB34m4PgAKviq2dljsrVJKCu0U0u8Bgvaw4Vjlimc%2FJAB5ShBa6VfYWBqReIpqyH3ygpnJIkM4gpUoMSF9bT2t1BxpcFjxXQoeXj%2B2GFayUd91VNXeUNCUHOAoHnMV7KP4fXMmOBGk1fX6iL7T3VFz4sFWk8TmYAyQw5pG4S3o1mVwyzmvF2u2hCcbFLDJ6vR3aKl9kkzlGNOZbv&X-Amz-Signature=b8432c71f13fae7c7ee4e1ff634c257fcf8b4a0c8276e63d3b6006bbe2cf9672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEHPFIAS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKy8XrsA1sQlRUhdG2vjThE%2BJr6QB9Jv75jFx2K7OyEAiEA%2FMcc8cGmrOXOA8E5%2FEuE2f8IkqT10vQ3EK4QILFQ%2B20qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANk3rDiX3HTf2nmLyrcA%2BOkbhG%2FQAs3SpIPMgBHG1ogOtylI3tNowLnAGrHA1%2B2qL8fg6ggx3Eya%2FaViMkyOQN5Ej0PNCf%2BiQvw%2BVi0YrxEaAn%2BuE4B155hEclPfxB%2BzoE3V6HEn4SWbspDBcidfg3lq3cJNRqx3l1CuZivUs7ee%2FUv8gqZmQX7BbOSDfhIsQyLDI%2F%2Fa%2FnUSKQRiIhzketnRwllQR9nznLbZW6K%2FiqM%2FIrQv6IrIvgX62cGP6Mq%2Bhw%2FC8aejLbsKWtinnwJc4c%2FleRSzlcqBIobiLEXGJft3%2FH7m6agzfeszbO2EPTHqthzcwc7YIHDEdDS8RlmDH0UHp1dkIX%2BEAhF63ZyjZv5RAULwPYany%2BR%2BqbF9V52KVUUz4lZpurn0tPGD5TrCiWJcV13uYzMhoT%2F8PEZflL1YCPwxGhUy2aa7zsJIEAyez%2F5F90Q3sCT5MtxbkTuOVD9wLpgO6v5BKH24WtmErNyBjFuKVvHxfj3nauB46BAry2mAstLiclYpm85X2hVIjzLjun6SAX7ROJ1YEBqiDdUPln9NO2fZBlIOXCc%2BDFqwdc5ohqE1ffFh%2BnPFsPasSA6zQxw9cEQ2B%2Bjyj%2FWxqBgVYko9miK0AMgENmtU4kMV1yqa9EVHzQlhNYPMPOO28IGOqUBg1Qwcd%2FtcdoPxB34m4PgAKviq2dljsrVJKCu0U0u8Bgvaw4Vjlimc%2FJAB5ShBa6VfYWBqReIpqyH3ygpnJIkM4gpUoMSF9bT2t1BxpcFjxXQoeXj%2B2GFayUd91VNXeUNCUHOAoHnMV7KP4fXMmOBGk1fX6iL7T3VFz4sFWk8TmYAyQw5pG4S3o1mVwyzmvF2u2hCcbFLDJ6vR3aKl9kkzlGNOZbv&X-Amz-Signature=33898134dd275bc12108315d05f288b8689ab25136ace14b916aa233261d8c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
