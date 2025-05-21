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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC6QSNF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCUlL%2FVSEyqT4GLMNzau3vFlsxUvGJeJNb2MX8c095GHAIgbagNyI6IJ9FrbRwzJXK6zExFPYhjJPAKA26Onl0V%2FR4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlZaZCVAiwZlKCM8ircA7ZSqFHCjSou5SNQUM%2BF%2FC1XbLoQRAKABmn5nBZqLtX47wLcixQq4HmtfXPoEg3fMHvPS%2F1jiDy0PJNJyxtIRAmGhoRI4mcHL8oTAAAv4tRn1imargrHl4Grbec2bpLFAvSTdYIu%2Bm1yo%2FgalECKZweG2iqoWZpKIgu4b5C3u%2Fo9AC4PiAE%2FgRf0N1DNHvJnJbqe5pRlqf2miRnRLwlA%2Fyyk9gta1eDrIVEoGxfy%2B8CflYoUmtEbYTWzUDgp8zW88ss8Z81%2B2HMacC6eL8gLYgd43TDwcc2BIshzJHVITHNw3wAo5v98i6s33dBLLhOwWkAxtG%2B2MZ%2BzBYVfmIOLdFKvGk49fsUAVLVKt%2FXZXqP4PZKeRC2vvc8W4bVIl39sWd5%2FSZMvs%2FgGrb4ApwllQj0ffRTN34yHQLH4nyDjy418T4tO2HA1o28ypACXioolHcf8%2BMMHBAwA%2B2S1pCDHUkN4t6zhboMsPKpCkKv2tOjgC41MRxzBwdWWAgUp3FEnFv5kBcvc1zW%2FzqMMOGTOnqH62LtqIzcS4IulaIdW1J%2BGTUXEDGwTVOHn2wpsldbW2RnGjSQiZRp1pv9MSXZ9qv1pAAfL5NhEDsclVVzB%2BlNRx5pJMvO2X3Oc8QpbMOTutsEGOqUBov4MxHT36KgcAbiZoCsCZ%2BLEFOgo%2F4Ysjh5OXGc4PUzW%2FvtjAa6g%2B7hLBqTDcnQzzbPO%2F3toN0toNHV6Tg9m94HY%2Fp3Rz%2BTbsKNnUpG%2BOV5GKoPpdn9rSASKd4mRUHw340M1%2FfpPN4%2FEECiWjRtpVykSmkO2L7i4Sz%2BRvdNZ65HS%2BhQ2QLAO0BRYGcZHb1tb2fgJ1UO0hLRtDfzJf%2FV20WyIhPI0&X-Amz-Signature=1aa055596eae2818ed3ad6bf7cb46f190cc7e8ae5e5c632bb9f0aa08d5b78213&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC6QSNF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCUlL%2FVSEyqT4GLMNzau3vFlsxUvGJeJNb2MX8c095GHAIgbagNyI6IJ9FrbRwzJXK6zExFPYhjJPAKA26Onl0V%2FR4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlZaZCVAiwZlKCM8ircA7ZSqFHCjSou5SNQUM%2BF%2FC1XbLoQRAKABmn5nBZqLtX47wLcixQq4HmtfXPoEg3fMHvPS%2F1jiDy0PJNJyxtIRAmGhoRI4mcHL8oTAAAv4tRn1imargrHl4Grbec2bpLFAvSTdYIu%2Bm1yo%2FgalECKZweG2iqoWZpKIgu4b5C3u%2Fo9AC4PiAE%2FgRf0N1DNHvJnJbqe5pRlqf2miRnRLwlA%2Fyyk9gta1eDrIVEoGxfy%2B8CflYoUmtEbYTWzUDgp8zW88ss8Z81%2B2HMacC6eL8gLYgd43TDwcc2BIshzJHVITHNw3wAo5v98i6s33dBLLhOwWkAxtG%2B2MZ%2BzBYVfmIOLdFKvGk49fsUAVLVKt%2FXZXqP4PZKeRC2vvc8W4bVIl39sWd5%2FSZMvs%2FgGrb4ApwllQj0ffRTN34yHQLH4nyDjy418T4tO2HA1o28ypACXioolHcf8%2BMMHBAwA%2B2S1pCDHUkN4t6zhboMsPKpCkKv2tOjgC41MRxzBwdWWAgUp3FEnFv5kBcvc1zW%2FzqMMOGTOnqH62LtqIzcS4IulaIdW1J%2BGTUXEDGwTVOHn2wpsldbW2RnGjSQiZRp1pv9MSXZ9qv1pAAfL5NhEDsclVVzB%2BlNRx5pJMvO2X3Oc8QpbMOTutsEGOqUBov4MxHT36KgcAbiZoCsCZ%2BLEFOgo%2F4Ysjh5OXGc4PUzW%2FvtjAa6g%2B7hLBqTDcnQzzbPO%2F3toN0toNHV6Tg9m94HY%2Fp3Rz%2BTbsKNnUpG%2BOV5GKoPpdn9rSASKd4mRUHw340M1%2FfpPN4%2FEECiWjRtpVykSmkO2L7i4Sz%2BRvdNZ65HS%2BhQ2QLAO0BRYGcZHb1tb2fgJ1UO0hLRtDfzJf%2FV20WyIhPI0&X-Amz-Signature=32d760ca5d3616dfd1665ca976cfb06ac39a88e9f58ea49ed524dd3fa1555bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC6QSNF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCUlL%2FVSEyqT4GLMNzau3vFlsxUvGJeJNb2MX8c095GHAIgbagNyI6IJ9FrbRwzJXK6zExFPYhjJPAKA26Onl0V%2FR4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlZaZCVAiwZlKCM8ircA7ZSqFHCjSou5SNQUM%2BF%2FC1XbLoQRAKABmn5nBZqLtX47wLcixQq4HmtfXPoEg3fMHvPS%2F1jiDy0PJNJyxtIRAmGhoRI4mcHL8oTAAAv4tRn1imargrHl4Grbec2bpLFAvSTdYIu%2Bm1yo%2FgalECKZweG2iqoWZpKIgu4b5C3u%2Fo9AC4PiAE%2FgRf0N1DNHvJnJbqe5pRlqf2miRnRLwlA%2Fyyk9gta1eDrIVEoGxfy%2B8CflYoUmtEbYTWzUDgp8zW88ss8Z81%2B2HMacC6eL8gLYgd43TDwcc2BIshzJHVITHNw3wAo5v98i6s33dBLLhOwWkAxtG%2B2MZ%2BzBYVfmIOLdFKvGk49fsUAVLVKt%2FXZXqP4PZKeRC2vvc8W4bVIl39sWd5%2FSZMvs%2FgGrb4ApwllQj0ffRTN34yHQLH4nyDjy418T4tO2HA1o28ypACXioolHcf8%2BMMHBAwA%2B2S1pCDHUkN4t6zhboMsPKpCkKv2tOjgC41MRxzBwdWWAgUp3FEnFv5kBcvc1zW%2FzqMMOGTOnqH62LtqIzcS4IulaIdW1J%2BGTUXEDGwTVOHn2wpsldbW2RnGjSQiZRp1pv9MSXZ9qv1pAAfL5NhEDsclVVzB%2BlNRx5pJMvO2X3Oc8QpbMOTutsEGOqUBov4MxHT36KgcAbiZoCsCZ%2BLEFOgo%2F4Ysjh5OXGc4PUzW%2FvtjAa6g%2B7hLBqTDcnQzzbPO%2F3toN0toNHV6Tg9m94HY%2Fp3Rz%2BTbsKNnUpG%2BOV5GKoPpdn9rSASKd4mRUHw340M1%2FfpPN4%2FEECiWjRtpVykSmkO2L7i4Sz%2BRvdNZ65HS%2BhQ2QLAO0BRYGcZHb1tb2fgJ1UO0hLRtDfzJf%2FV20WyIhPI0&X-Amz-Signature=510fd310c20cd880582ca64014779d1e6c79d08ab8bc4ae332a55e0ee9ec3ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
