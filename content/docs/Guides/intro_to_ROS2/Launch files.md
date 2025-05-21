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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFWQXHFR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCMRKjz2di0YYyHgz%2FdxdWhfi0tbt1DR4IY2AO6UH5kPQIhAND316QKCvMNTGsOdsugjHszAq1znLp4bOiRI2MnxXbWKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtj517KQJsu7Elj7Uq3APtOsDUo%2F9qPxukrwYaSZQqhERToUSHA8FtAjtJ6wvNlE01YTrPfK%2FBQ6zFTlaXWIToUEC73O2HEM10IvOFabkSb77%2BB84AoYiQdSn41vkGvTxwrqvEg9LRYPhOw%2FXT4TsRO0ks%2FXnZUfP0kTIr9tlnfa5XFuJXuIstBQSAJmtOjQsxIQoqQ3ncGngnurnW%2FJdupbM3Unof7odtU94DxMHmhIE9b7LJ4Lu1GRWP%2Fyrm0Y5Cb5AdW8TiEyMI1bLQz1yeWeidv5QFAv4qGIjJfpBr6ARQ7Wtc5dx49tqmRLvWiee6p1SFtdTNhKa%2FJyUbL4C33nejf0%2FPX%2BcT7L6cZ1I4mfN1gJLKNvZWwMEwTGbCOPSs0S5aJpWbjYxVWQP7h%2FLPqGtD%2FTPodS9MhRJ9xwlUvEsLFSQDbDdlZun%2FjaW2eJDxNqUcUuKeBDxuDFjWjhRvyJjre0A1ibfV6MqMKbg5lkCROgJePIyyjwlV0JJZE%2BzzFvr82Y6uFjcBDYG2IcKBKNRkEoCEv%2BU70JczZNvo%2FHMCbJDmMl%2BLs0ddqEdDLIVg6uuXhI1OkhcRPpjY9ti5GA%2F2tR8DeaP9D66H%2F7gM0XiecDiIkBp%2BdML5VDTaJZhNR5ER0%2F6KQMcm6DCc7rbBBjqkAcaIlsyNvAL8Vhx5amrECKtSkeKXWwG9666wD66SZGShDbIx1Ex%2FIcCudCPB6k4MIw6HVE59pgg393K5Z4X4MAWoxkvsCZwrqSiwNv2oNuH3dnuhoWiwZ2bhwjyVcH2a4ZtCZdz3LOVN7eawrsqPTOXy1lrtNJbq8Ld1P0bIkhDatIQ6IUWDOhd5IITOP8mt72dQIZF2KHcuJBputg%2FKc%2FgIy5Jx&X-Amz-Signature=0cffb458bd6e5eac6bbd24cf571aafaee1be44835f0ab8a38c3e5044bc396210&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFWQXHFR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCMRKjz2di0YYyHgz%2FdxdWhfi0tbt1DR4IY2AO6UH5kPQIhAND316QKCvMNTGsOdsugjHszAq1znLp4bOiRI2MnxXbWKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtj517KQJsu7Elj7Uq3APtOsDUo%2F9qPxukrwYaSZQqhERToUSHA8FtAjtJ6wvNlE01YTrPfK%2FBQ6zFTlaXWIToUEC73O2HEM10IvOFabkSb77%2BB84AoYiQdSn41vkGvTxwrqvEg9LRYPhOw%2FXT4TsRO0ks%2FXnZUfP0kTIr9tlnfa5XFuJXuIstBQSAJmtOjQsxIQoqQ3ncGngnurnW%2FJdupbM3Unof7odtU94DxMHmhIE9b7LJ4Lu1GRWP%2Fyrm0Y5Cb5AdW8TiEyMI1bLQz1yeWeidv5QFAv4qGIjJfpBr6ARQ7Wtc5dx49tqmRLvWiee6p1SFtdTNhKa%2FJyUbL4C33nejf0%2FPX%2BcT7L6cZ1I4mfN1gJLKNvZWwMEwTGbCOPSs0S5aJpWbjYxVWQP7h%2FLPqGtD%2FTPodS9MhRJ9xwlUvEsLFSQDbDdlZun%2FjaW2eJDxNqUcUuKeBDxuDFjWjhRvyJjre0A1ibfV6MqMKbg5lkCROgJePIyyjwlV0JJZE%2BzzFvr82Y6uFjcBDYG2IcKBKNRkEoCEv%2BU70JczZNvo%2FHMCbJDmMl%2BLs0ddqEdDLIVg6uuXhI1OkhcRPpjY9ti5GA%2F2tR8DeaP9D66H%2F7gM0XiecDiIkBp%2BdML5VDTaJZhNR5ER0%2F6KQMcm6DCc7rbBBjqkAcaIlsyNvAL8Vhx5amrECKtSkeKXWwG9666wD66SZGShDbIx1Ex%2FIcCudCPB6k4MIw6HVE59pgg393K5Z4X4MAWoxkvsCZwrqSiwNv2oNuH3dnuhoWiwZ2bhwjyVcH2a4ZtCZdz3LOVN7eawrsqPTOXy1lrtNJbq8Ld1P0bIkhDatIQ6IUWDOhd5IITOP8mt72dQIZF2KHcuJBputg%2FKc%2FgIy5Jx&X-Amz-Signature=69485ec0542b4f221c53700bea9939cf36eaf9cd9ab5c40003998d4675441a47&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFWQXHFR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCMRKjz2di0YYyHgz%2FdxdWhfi0tbt1DR4IY2AO6UH5kPQIhAND316QKCvMNTGsOdsugjHszAq1znLp4bOiRI2MnxXbWKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtj517KQJsu7Elj7Uq3APtOsDUo%2F9qPxukrwYaSZQqhERToUSHA8FtAjtJ6wvNlE01YTrPfK%2FBQ6zFTlaXWIToUEC73O2HEM10IvOFabkSb77%2BB84AoYiQdSn41vkGvTxwrqvEg9LRYPhOw%2FXT4TsRO0ks%2FXnZUfP0kTIr9tlnfa5XFuJXuIstBQSAJmtOjQsxIQoqQ3ncGngnurnW%2FJdupbM3Unof7odtU94DxMHmhIE9b7LJ4Lu1GRWP%2Fyrm0Y5Cb5AdW8TiEyMI1bLQz1yeWeidv5QFAv4qGIjJfpBr6ARQ7Wtc5dx49tqmRLvWiee6p1SFtdTNhKa%2FJyUbL4C33nejf0%2FPX%2BcT7L6cZ1I4mfN1gJLKNvZWwMEwTGbCOPSs0S5aJpWbjYxVWQP7h%2FLPqGtD%2FTPodS9MhRJ9xwlUvEsLFSQDbDdlZun%2FjaW2eJDxNqUcUuKeBDxuDFjWjhRvyJjre0A1ibfV6MqMKbg5lkCROgJePIyyjwlV0JJZE%2BzzFvr82Y6uFjcBDYG2IcKBKNRkEoCEv%2BU70JczZNvo%2FHMCbJDmMl%2BLs0ddqEdDLIVg6uuXhI1OkhcRPpjY9ti5GA%2F2tR8DeaP9D66H%2F7gM0XiecDiIkBp%2BdML5VDTaJZhNR5ER0%2F6KQMcm6DCc7rbBBjqkAcaIlsyNvAL8Vhx5amrECKtSkeKXWwG9666wD66SZGShDbIx1Ex%2FIcCudCPB6k4MIw6HVE59pgg393K5Z4X4MAWoxkvsCZwrqSiwNv2oNuH3dnuhoWiwZ2bhwjyVcH2a4ZtCZdz3LOVN7eawrsqPTOXy1lrtNJbq8Ld1P0bIkhDatIQ6IUWDOhd5IITOP8mt72dQIZF2KHcuJBputg%2FKc%2FgIy5Jx&X-Amz-Signature=a6c30592b8d1991f54988320a6598f74c4d5324aa4e00d7172e5c3d37ba7c13e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
