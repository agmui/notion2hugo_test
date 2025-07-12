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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UO6OS7R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6A3MpvLatrghEdHBkYDxFhDQqwslEi%2BrZ6x6h0IDe%2BAiB9TiHWGzsT2F9GHVTofUrbJp%2FX9GwsOS7g6VyzovUZ3iqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsEiaUMUzcrqMNDoKKtwDoeOws42EBRBBSSqal6SSwjVnnAz3uGfJz%2FWIi%2BpRdtvv327PBo8Hqeh2jfWsepRpjQQPMv2JBGaiUWUU9yaPWNOqD8z9Jy1mcigwDdG0RqEUFvtaZvGCTD%2B%2F%2BoQ6e0B92vhSLhlgARqrfQxvEPB2p7fXWXLsTYepeFBQ0LVx1Q9VllXMkC%2FqvQm42oF8Ou7PIJ9Q%2BVUskuUBg%2BJ1%2BSJHJkVIPvwiCa6EPW7ZR9a9e3Jedk7OzThPSIU8oLMcClwZkLvYgnnhl7B90c5wSQ65io3A0Va4kwoclq0lboE1Rt6cseqM3bcapI2Skdc4Bt4W2m7b2VNmuSHKErQN%2Fy8vfyIo4aXjkNbWJJmIbm4OCA5UZgQyAVik3MDG7Kt6X0sd2hzkcYk3MOYP%2F7QRPBjq0bat8IMCylkVB1GWft4is5pD3BIIgubgBWMTFmP5UybWF6uH6qczhrQ6KVWXqQ%2FrP9DAGJa3kEk5lG1pm%2BW%2B8%2FD2k0Nmb4yA%2BFSQWL8CHK0929ljqVZWJHp6UxXTLmDvasrKAUsRKgYPmfpZdtEbjcnKXZqns6sdk%2BgreNlI3Xf9i479sVKHJCV1gHcQ2jYqO2xLgBi8w3ZKUup2jO1YM2QwPy5TeHSt7foQtfYw7%2FzIwwY6pgE90RAKrJcXIt%2FvNVn%2Fmc7CAbqX%2F12OclfUMm%2BWeOwbr2LnOtiLTukT7gV%2BNRGOboMVolLuslcWw6wkia4Maii7T8EvL5ywWhTxw%2Fpeii%2BEC3hEchFikAWfgtDEADFPlp2a6shw8zwI0iXnMgRR2lCIYdbW0g37tTsO5fqVqwU2M%2BVQR3YKjSbcYtJuhxKWwypqlVd4Uc4vpHidQ2n1lXs89nJH%2BwMT&X-Amz-Signature=e5c758429d368e278954c88facca96b4b6caa32e4ebc118775e736b55c8f7bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UO6OS7R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6A3MpvLatrghEdHBkYDxFhDQqwslEi%2BrZ6x6h0IDe%2BAiB9TiHWGzsT2F9GHVTofUrbJp%2FX9GwsOS7g6VyzovUZ3iqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsEiaUMUzcrqMNDoKKtwDoeOws42EBRBBSSqal6SSwjVnnAz3uGfJz%2FWIi%2BpRdtvv327PBo8Hqeh2jfWsepRpjQQPMv2JBGaiUWUU9yaPWNOqD8z9Jy1mcigwDdG0RqEUFvtaZvGCTD%2B%2F%2BoQ6e0B92vhSLhlgARqrfQxvEPB2p7fXWXLsTYepeFBQ0LVx1Q9VllXMkC%2FqvQm42oF8Ou7PIJ9Q%2BVUskuUBg%2BJ1%2BSJHJkVIPvwiCa6EPW7ZR9a9e3Jedk7OzThPSIU8oLMcClwZkLvYgnnhl7B90c5wSQ65io3A0Va4kwoclq0lboE1Rt6cseqM3bcapI2Skdc4Bt4W2m7b2VNmuSHKErQN%2Fy8vfyIo4aXjkNbWJJmIbm4OCA5UZgQyAVik3MDG7Kt6X0sd2hzkcYk3MOYP%2F7QRPBjq0bat8IMCylkVB1GWft4is5pD3BIIgubgBWMTFmP5UybWF6uH6qczhrQ6KVWXqQ%2FrP9DAGJa3kEk5lG1pm%2BW%2B8%2FD2k0Nmb4yA%2BFSQWL8CHK0929ljqVZWJHp6UxXTLmDvasrKAUsRKgYPmfpZdtEbjcnKXZqns6sdk%2BgreNlI3Xf9i479sVKHJCV1gHcQ2jYqO2xLgBi8w3ZKUup2jO1YM2QwPy5TeHSt7foQtfYw7%2FzIwwY6pgE90RAKrJcXIt%2FvNVn%2Fmc7CAbqX%2F12OclfUMm%2BWeOwbr2LnOtiLTukT7gV%2BNRGOboMVolLuslcWw6wkia4Maii7T8EvL5ywWhTxw%2Fpeii%2BEC3hEchFikAWfgtDEADFPlp2a6shw8zwI0iXnMgRR2lCIYdbW0g37tTsO5fqVqwU2M%2BVQR3YKjSbcYtJuhxKWwypqlVd4Uc4vpHidQ2n1lXs89nJH%2BwMT&X-Amz-Signature=b4ca24339091c8f4863c819bb9afccc9833cce98d7c4b65f6bf684bc69e34de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UO6OS7R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6A3MpvLatrghEdHBkYDxFhDQqwslEi%2BrZ6x6h0IDe%2BAiB9TiHWGzsT2F9GHVTofUrbJp%2FX9GwsOS7g6VyzovUZ3iqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsEiaUMUzcrqMNDoKKtwDoeOws42EBRBBSSqal6SSwjVnnAz3uGfJz%2FWIi%2BpRdtvv327PBo8Hqeh2jfWsepRpjQQPMv2JBGaiUWUU9yaPWNOqD8z9Jy1mcigwDdG0RqEUFvtaZvGCTD%2B%2F%2BoQ6e0B92vhSLhlgARqrfQxvEPB2p7fXWXLsTYepeFBQ0LVx1Q9VllXMkC%2FqvQm42oF8Ou7PIJ9Q%2BVUskuUBg%2BJ1%2BSJHJkVIPvwiCa6EPW7ZR9a9e3Jedk7OzThPSIU8oLMcClwZkLvYgnnhl7B90c5wSQ65io3A0Va4kwoclq0lboE1Rt6cseqM3bcapI2Skdc4Bt4W2m7b2VNmuSHKErQN%2Fy8vfyIo4aXjkNbWJJmIbm4OCA5UZgQyAVik3MDG7Kt6X0sd2hzkcYk3MOYP%2F7QRPBjq0bat8IMCylkVB1GWft4is5pD3BIIgubgBWMTFmP5UybWF6uH6qczhrQ6KVWXqQ%2FrP9DAGJa3kEk5lG1pm%2BW%2B8%2FD2k0Nmb4yA%2BFSQWL8CHK0929ljqVZWJHp6UxXTLmDvasrKAUsRKgYPmfpZdtEbjcnKXZqns6sdk%2BgreNlI3Xf9i479sVKHJCV1gHcQ2jYqO2xLgBi8w3ZKUup2jO1YM2QwPy5TeHSt7foQtfYw7%2FzIwwY6pgE90RAKrJcXIt%2FvNVn%2Fmc7CAbqX%2F12OclfUMm%2BWeOwbr2LnOtiLTukT7gV%2BNRGOboMVolLuslcWw6wkia4Maii7T8EvL5ywWhTxw%2Fpeii%2BEC3hEchFikAWfgtDEADFPlp2a6shw8zwI0iXnMgRR2lCIYdbW0g37tTsO5fqVqwU2M%2BVQR3YKjSbcYtJuhxKWwypqlVd4Uc4vpHidQ2n1lXs89nJH%2BwMT&X-Amz-Signature=1afd4660846d7e1e571c31505ea64979d808b2ad1a2b61be4164aa23a0d4a93c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
