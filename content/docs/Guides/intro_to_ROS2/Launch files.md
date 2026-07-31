---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5ZC4P7E%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvQSxI%2F4LwIiTkylG7htJqqlKaypgr4UcJYNOO8zXYvAiAs5emVjxk6l%2FObtvS28ZxZ4MH6XyJryAZT%2F7OipdcY6iqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt4%2BqjzSQf8%2FkrV15KtwDol2qcwL%2BdcbSnOA%2FBAvn%2FaGHIrJEGLYKts5aogrT08nZKtZLW1CnFcbwrlkh%2BxmszZuVrnKQLOM6N3iECaZRTCZNhX06I5erhdEaXLcPbZJul%2FsGHoL7kGbqI5fcPKVb4WTKlSyVFw%2BtH2a2VF5o1yPCkeVDaAJNm07DCS8grUNkgo%2BWVCHGBbLJtAQkqNzK2CdF5eHlvNFZM2%2B73jGJS8rOVs0kvrX6mCR5REjegRiE6Jc5mtn12P4P1pLcOYJoMd5eqHJIQ%2BN8KqA1ILCkjnqRlv6AcqRYmVFuVD%2F0qUtTzwRqlFetFS%2FPDPjHHvGEvUhmRM683G21ZCRqTB%2FwXAzzfhJycA5jcE3%2FlusyCPEDK1bxR7VZN%2F8ymSDNUTdybJBT3LILp7Q9t45Mq%2BOu3e4o0n5mXuZSKrwp9HqRRY3OE5XI9pecplts7VzN8W70%2B5k1mlDshbUlm2MG%2BvxfH5ufgoscFe35NNZw3c87EMDM1901BnSY02ZZPXC6XvUlCXFn2BL0ZOh3zJIxB%2F3lAENzyIn967QtdL1zF1eXmAb0TL10vHkugPNa7LMfpoiL%2FrlaSp94W9tsAPQb25w4ifnmMBGobCpBf9NEkwcDrmTaDh6lRRfrWB1iNcUwnZew0wY6pgESizrouVGk6WwEVjaXWFh14%2BqdluJYqpZAyXOkx4Bxys5Rn81ibmos0kdDqUxznd8fkqmOUiEb3khaga6OtWkl1HxPN7iXUVHdTU3rLirXOuDpYvA9jr9J2YyUCSnCTcI0HKWJXln0xeQs3vww9vS0Y3aOJy2DW8y8ccon8gMjyv7pENRnoDDPFLmLDRtLQklJEXY8vDiwe3oafMlUML7ErYGO5VRE&X-Amz-Signature=fe0ba37f7305613d2e88732786ee0d39379293ce4554c042e9499f7afd7224e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5ZC4P7E%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvQSxI%2F4LwIiTkylG7htJqqlKaypgr4UcJYNOO8zXYvAiAs5emVjxk6l%2FObtvS28ZxZ4MH6XyJryAZT%2F7OipdcY6iqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt4%2BqjzSQf8%2FkrV15KtwDol2qcwL%2BdcbSnOA%2FBAvn%2FaGHIrJEGLYKts5aogrT08nZKtZLW1CnFcbwrlkh%2BxmszZuVrnKQLOM6N3iECaZRTCZNhX06I5erhdEaXLcPbZJul%2FsGHoL7kGbqI5fcPKVb4WTKlSyVFw%2BtH2a2VF5o1yPCkeVDaAJNm07DCS8grUNkgo%2BWVCHGBbLJtAQkqNzK2CdF5eHlvNFZM2%2B73jGJS8rOVs0kvrX6mCR5REjegRiE6Jc5mtn12P4P1pLcOYJoMd5eqHJIQ%2BN8KqA1ILCkjnqRlv6AcqRYmVFuVD%2F0qUtTzwRqlFetFS%2FPDPjHHvGEvUhmRM683G21ZCRqTB%2FwXAzzfhJycA5jcE3%2FlusyCPEDK1bxR7VZN%2F8ymSDNUTdybJBT3LILp7Q9t45Mq%2BOu3e4o0n5mXuZSKrwp9HqRRY3OE5XI9pecplts7VzN8W70%2B5k1mlDshbUlm2MG%2BvxfH5ufgoscFe35NNZw3c87EMDM1901BnSY02ZZPXC6XvUlCXFn2BL0ZOh3zJIxB%2F3lAENzyIn967QtdL1zF1eXmAb0TL10vHkugPNa7LMfpoiL%2FrlaSp94W9tsAPQb25w4ifnmMBGobCpBf9NEkwcDrmTaDh6lRRfrWB1iNcUwnZew0wY6pgESizrouVGk6WwEVjaXWFh14%2BqdluJYqpZAyXOkx4Bxys5Rn81ibmos0kdDqUxznd8fkqmOUiEb3khaga6OtWkl1HxPN7iXUVHdTU3rLirXOuDpYvA9jr9J2YyUCSnCTcI0HKWJXln0xeQs3vww9vS0Y3aOJy2DW8y8ccon8gMjyv7pENRnoDDPFLmLDRtLQklJEXY8vDiwe3oafMlUML7ErYGO5VRE&X-Amz-Signature=e3d2272d370dfb0006e864455adb973ae879fa010435f4e3984d6f20606ed019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5ZC4P7E%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvQSxI%2F4LwIiTkylG7htJqqlKaypgr4UcJYNOO8zXYvAiAs5emVjxk6l%2FObtvS28ZxZ4MH6XyJryAZT%2F7OipdcY6iqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt4%2BqjzSQf8%2FkrV15KtwDol2qcwL%2BdcbSnOA%2FBAvn%2FaGHIrJEGLYKts5aogrT08nZKtZLW1CnFcbwrlkh%2BxmszZuVrnKQLOM6N3iECaZRTCZNhX06I5erhdEaXLcPbZJul%2FsGHoL7kGbqI5fcPKVb4WTKlSyVFw%2BtH2a2VF5o1yPCkeVDaAJNm07DCS8grUNkgo%2BWVCHGBbLJtAQkqNzK2CdF5eHlvNFZM2%2B73jGJS8rOVs0kvrX6mCR5REjegRiE6Jc5mtn12P4P1pLcOYJoMd5eqHJIQ%2BN8KqA1ILCkjnqRlv6AcqRYmVFuVD%2F0qUtTzwRqlFetFS%2FPDPjHHvGEvUhmRM683G21ZCRqTB%2FwXAzzfhJycA5jcE3%2FlusyCPEDK1bxR7VZN%2F8ymSDNUTdybJBT3LILp7Q9t45Mq%2BOu3e4o0n5mXuZSKrwp9HqRRY3OE5XI9pecplts7VzN8W70%2B5k1mlDshbUlm2MG%2BvxfH5ufgoscFe35NNZw3c87EMDM1901BnSY02ZZPXC6XvUlCXFn2BL0ZOh3zJIxB%2F3lAENzyIn967QtdL1zF1eXmAb0TL10vHkugPNa7LMfpoiL%2FrlaSp94W9tsAPQb25w4ifnmMBGobCpBf9NEkwcDrmTaDh6lRRfrWB1iNcUwnZew0wY6pgESizrouVGk6WwEVjaXWFh14%2BqdluJYqpZAyXOkx4Bxys5Rn81ibmos0kdDqUxznd8fkqmOUiEb3khaga6OtWkl1HxPN7iXUVHdTU3rLirXOuDpYvA9jr9J2YyUCSnCTcI0HKWJXln0xeQs3vww9vS0Y3aOJy2DW8y8ccon8gMjyv7pENRnoDDPFLmLDRtLQklJEXY8vDiwe3oafMlUML7ErYGO5VRE&X-Amz-Signature=52defb43eaa924a1b89640f44297e89875c6ab834b5c51f857a9bdfee861dfcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
