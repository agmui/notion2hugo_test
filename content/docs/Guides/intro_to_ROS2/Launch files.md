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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4KCGQYL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0XU6HiJiU0so0jMgoMsmF5eP9ixzcWKQqbiootyfNCAiATLDlCVEywU85nPJWPySFQUCfueVbZgC1Tf90613CyaSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYG4MEEJ8t%2B%2FWLtSqKtwDOCXsoU1T%2FWsaztfMcDtGnhDTI0KGA02MSF78t7WezihOqNVKGlV0Kv1JTMPfWWB1EKDZA%2Bze20JHRvGVqpN4mEW%2F6zv0p0%2F824XqtRL2q21A5acu3bwz0gdVcw4Gq0yP0P6IXr2dJAc9jHb1Mo9Ml6sFmAlX5ctk7wMv830WNs8aIR9lzEpjkGE7Zew4t0HFxdUZyOMBXIw%2Bs8uqP6qBkRqIWHEyR%2BWhLgyPJbLomMUO7TeF2%2FZ%2FLiJM%2BINZGI04pQ%2FUZxpChZxGZ1mKPKGS%2FGBAHB4MWun9fAYIkd9Ao55ivlTXXa%2FFVwmRRE3tIPlbNXExxh08yZPBiITlbcPyx8yG53H%2BEZM9CIt7nZw7RTrd1TcH8hEq2KOx02l6WslfNYQGMaTK%2BsOPzR%2Ft7CgVCuAwrPCCm8WtwUHfWiJ7oMFGICjne4gpC%2FQM9GiVLWoz4ZIFTD%2FfdpzGCbZEdCvwHGPooQYYIldGb9chesiZKd2HbiJAkP%2FHxueuZX1NqzasvDUGGrmDxOtuYDHrj4trH9IuzcjjnGjQEnAM5qqW4Iy0PcCeZT7liDnNLsa8vcF7rhR0keUmPfxZjPCCLd4NWwTFt6BZclZDuApVCvWRrDR2v6UWuyJttEwtIMEw7a6yvQY6pgFtzERo9RkSPkhWb4pQiJnaowDg3OaFDwPh331P8mpm85pbLN%2F9VW9tYlv%2F2uIs2k2jCmx3GbhTkhfvJXndzYVXYIIyFbl3NCr3fXzAo6%2F3DmX%2B7FR82hZHA%2FNTXkG9bnyx2UOldvL8tKF%2BWutBLWBblxpBJRCf0Iign6aN%2Fz28vVDqPT4PO3NCGQQUqqJtDSk9O2zScun0KAH8DXh2oyHROH%2BmSdbz&X-Amz-Signature=39633fa9b990d385d05148f999e207086770924935cf466e6dd4721f3d980c42&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4KCGQYL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0XU6HiJiU0so0jMgoMsmF5eP9ixzcWKQqbiootyfNCAiATLDlCVEywU85nPJWPySFQUCfueVbZgC1Tf90613CyaSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYG4MEEJ8t%2B%2FWLtSqKtwDOCXsoU1T%2FWsaztfMcDtGnhDTI0KGA02MSF78t7WezihOqNVKGlV0Kv1JTMPfWWB1EKDZA%2Bze20JHRvGVqpN4mEW%2F6zv0p0%2F824XqtRL2q21A5acu3bwz0gdVcw4Gq0yP0P6IXr2dJAc9jHb1Mo9Ml6sFmAlX5ctk7wMv830WNs8aIR9lzEpjkGE7Zew4t0HFxdUZyOMBXIw%2Bs8uqP6qBkRqIWHEyR%2BWhLgyPJbLomMUO7TeF2%2FZ%2FLiJM%2BINZGI04pQ%2FUZxpChZxGZ1mKPKGS%2FGBAHB4MWun9fAYIkd9Ao55ivlTXXa%2FFVwmRRE3tIPlbNXExxh08yZPBiITlbcPyx8yG53H%2BEZM9CIt7nZw7RTrd1TcH8hEq2KOx02l6WslfNYQGMaTK%2BsOPzR%2Ft7CgVCuAwrPCCm8WtwUHfWiJ7oMFGICjne4gpC%2FQM9GiVLWoz4ZIFTD%2FfdpzGCbZEdCvwHGPooQYYIldGb9chesiZKd2HbiJAkP%2FHxueuZX1NqzasvDUGGrmDxOtuYDHrj4trH9IuzcjjnGjQEnAM5qqW4Iy0PcCeZT7liDnNLsa8vcF7rhR0keUmPfxZjPCCLd4NWwTFt6BZclZDuApVCvWRrDR2v6UWuyJttEwtIMEw7a6yvQY6pgFtzERo9RkSPkhWb4pQiJnaowDg3OaFDwPh331P8mpm85pbLN%2F9VW9tYlv%2F2uIs2k2jCmx3GbhTkhfvJXndzYVXYIIyFbl3NCr3fXzAo6%2F3DmX%2B7FR82hZHA%2FNTXkG9bnyx2UOldvL8tKF%2BWutBLWBblxpBJRCf0Iign6aN%2Fz28vVDqPT4PO3NCGQQUqqJtDSk9O2zScun0KAH8DXh2oyHROH%2BmSdbz&X-Amz-Signature=effded839579107317d06afb545f1f6531b7d5113e77113ddac3c2f1b6924013&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4KCGQYL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0XU6HiJiU0so0jMgoMsmF5eP9ixzcWKQqbiootyfNCAiATLDlCVEywU85nPJWPySFQUCfueVbZgC1Tf90613CyaSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYG4MEEJ8t%2B%2FWLtSqKtwDOCXsoU1T%2FWsaztfMcDtGnhDTI0KGA02MSF78t7WezihOqNVKGlV0Kv1JTMPfWWB1EKDZA%2Bze20JHRvGVqpN4mEW%2F6zv0p0%2F824XqtRL2q21A5acu3bwz0gdVcw4Gq0yP0P6IXr2dJAc9jHb1Mo9Ml6sFmAlX5ctk7wMv830WNs8aIR9lzEpjkGE7Zew4t0HFxdUZyOMBXIw%2Bs8uqP6qBkRqIWHEyR%2BWhLgyPJbLomMUO7TeF2%2FZ%2FLiJM%2BINZGI04pQ%2FUZxpChZxGZ1mKPKGS%2FGBAHB4MWun9fAYIkd9Ao55ivlTXXa%2FFVwmRRE3tIPlbNXExxh08yZPBiITlbcPyx8yG53H%2BEZM9CIt7nZw7RTrd1TcH8hEq2KOx02l6WslfNYQGMaTK%2BsOPzR%2Ft7CgVCuAwrPCCm8WtwUHfWiJ7oMFGICjne4gpC%2FQM9GiVLWoz4ZIFTD%2FfdpzGCbZEdCvwHGPooQYYIldGb9chesiZKd2HbiJAkP%2FHxueuZX1NqzasvDUGGrmDxOtuYDHrj4trH9IuzcjjnGjQEnAM5qqW4Iy0PcCeZT7liDnNLsa8vcF7rhR0keUmPfxZjPCCLd4NWwTFt6BZclZDuApVCvWRrDR2v6UWuyJttEwtIMEw7a6yvQY6pgFtzERo9RkSPkhWb4pQiJnaowDg3OaFDwPh331P8mpm85pbLN%2F9VW9tYlv%2F2uIs2k2jCmx3GbhTkhfvJXndzYVXYIIyFbl3NCr3fXzAo6%2F3DmX%2B7FR82hZHA%2FNTXkG9bnyx2UOldvL8tKF%2BWutBLWBblxpBJRCf0Iign6aN%2Fz28vVDqPT4PO3NCGQQUqqJtDSk9O2zScun0KAH8DXh2oyHROH%2BmSdbz&X-Amz-Signature=1c068846b7b1cc236b87d8a94b69f0c119a6271c28bb86613055b1befdfef06d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
