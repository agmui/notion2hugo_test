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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYMADCD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcR4lPmj7JcGrsQZgHdXs4EP%2BZki5Ob7Pf%2FERE1njG1wIhAMp3aSScSebMEFckpbgn6qL01pkUIis%2Bc3f1WHMZMBwkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygK%2BzJXCpXhoKL7x4q3APYEYaVReS%2BK2jKDuVeP7fV6T%2F2k5%2FkTSbAsv01lKL814pJ9OOOf7TUREzWeq%2BYtzMELXHtgShZ%2FPB7UM44B%2Fk29gmsSNB0ukXpp2a56sHwKMr1w4w5VeP7oYbyvrE4l0l50oy%2BW91Lo5RAOK0vVzByFzna6sOFBYEV0vk%2BdSB6i7BSdCt0hyCRLrYRE2cCBmqGcHaybkeTv6Iodm7EYR5354Aa4dQHSIPifO14O4YFPTQDbqSNYwCc91kT6L2Lv3x5OxUoIcHLPa%2F1aTzLFJN8omC76QBkHFW9Rt61B%2Frp6A5ovJs3p0NUWjCM6SQ3GaBH2dAwB9qorRc5Ge4ku9m7wvR0EB9j%2FPyMvXqXb0ovkVCzf%2BmZ9mepPw%2Ffto55Jaqh%2B0Aj3gSkti7Jj2ZSZS1wjvCKdyhSld8yUKHVYRNZ1gNfbRAbInmJ2O8yPtxWiQMmFTZedU9cCK45r4SMGhOBWKRarD2yKM1BqfI5CH8SEGQUUCkGowlseVe7JT%2BlH4aJTQsOFWEOCALuw%2BZQTnVifiUOV3cgOSJcKk34ZHSRWJRndbp8VYt8UcYEyteTrRk%2FiwvcDdQkC1VY4jSQy3s0JToR22U4c8kCDAO71L3CtYZhqdPKfcloHBNAFDDezJW%2BBjqkAftx77c0QafI0BjTZjL5p5VUdcsf7I9KXvSsyfYgp0HOTr0PId74jDdxU9gwnGV6OyuD2dO%2BMTkdj4ipuaXD0arGqWVL7pR4c9m1p40NhELZ9bj5wIJjxqzstNgnDL7BVDwnBFMgPTzVTMfGGmsAzYU7naKZTDD9DBGk7T8%2B0VOX7g0oPAaKRLtF8pKK6BydFRaB%2F0oNLW2%2F%2BcXRyQ8axWvzBmQo&X-Amz-Signature=7c480265f3f49da6fe25aaf7ead8f6a2aef5e4682033dce5ea2f0d67f64d1976&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYMADCD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcR4lPmj7JcGrsQZgHdXs4EP%2BZki5Ob7Pf%2FERE1njG1wIhAMp3aSScSebMEFckpbgn6qL01pkUIis%2Bc3f1WHMZMBwkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygK%2BzJXCpXhoKL7x4q3APYEYaVReS%2BK2jKDuVeP7fV6T%2F2k5%2FkTSbAsv01lKL814pJ9OOOf7TUREzWeq%2BYtzMELXHtgShZ%2FPB7UM44B%2Fk29gmsSNB0ukXpp2a56sHwKMr1w4w5VeP7oYbyvrE4l0l50oy%2BW91Lo5RAOK0vVzByFzna6sOFBYEV0vk%2BdSB6i7BSdCt0hyCRLrYRE2cCBmqGcHaybkeTv6Iodm7EYR5354Aa4dQHSIPifO14O4YFPTQDbqSNYwCc91kT6L2Lv3x5OxUoIcHLPa%2F1aTzLFJN8omC76QBkHFW9Rt61B%2Frp6A5ovJs3p0NUWjCM6SQ3GaBH2dAwB9qorRc5Ge4ku9m7wvR0EB9j%2FPyMvXqXb0ovkVCzf%2BmZ9mepPw%2Ffto55Jaqh%2B0Aj3gSkti7Jj2ZSZS1wjvCKdyhSld8yUKHVYRNZ1gNfbRAbInmJ2O8yPtxWiQMmFTZedU9cCK45r4SMGhOBWKRarD2yKM1BqfI5CH8SEGQUUCkGowlseVe7JT%2BlH4aJTQsOFWEOCALuw%2BZQTnVifiUOV3cgOSJcKk34ZHSRWJRndbp8VYt8UcYEyteTrRk%2FiwvcDdQkC1VY4jSQy3s0JToR22U4c8kCDAO71L3CtYZhqdPKfcloHBNAFDDezJW%2BBjqkAftx77c0QafI0BjTZjL5p5VUdcsf7I9KXvSsyfYgp0HOTr0PId74jDdxU9gwnGV6OyuD2dO%2BMTkdj4ipuaXD0arGqWVL7pR4c9m1p40NhELZ9bj5wIJjxqzstNgnDL7BVDwnBFMgPTzVTMfGGmsAzYU7naKZTDD9DBGk7T8%2B0VOX7g0oPAaKRLtF8pKK6BydFRaB%2F0oNLW2%2F%2BcXRyQ8axWvzBmQo&X-Amz-Signature=4ba7156fa3e731bb1de3556c0887f3b90b69e25cea6d649019f9bb022295a05a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYMADCD%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcR4lPmj7JcGrsQZgHdXs4EP%2BZki5Ob7Pf%2FERE1njG1wIhAMp3aSScSebMEFckpbgn6qL01pkUIis%2Bc3f1WHMZMBwkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygK%2BzJXCpXhoKL7x4q3APYEYaVReS%2BK2jKDuVeP7fV6T%2F2k5%2FkTSbAsv01lKL814pJ9OOOf7TUREzWeq%2BYtzMELXHtgShZ%2FPB7UM44B%2Fk29gmsSNB0ukXpp2a56sHwKMr1w4w5VeP7oYbyvrE4l0l50oy%2BW91Lo5RAOK0vVzByFzna6sOFBYEV0vk%2BdSB6i7BSdCt0hyCRLrYRE2cCBmqGcHaybkeTv6Iodm7EYR5354Aa4dQHSIPifO14O4YFPTQDbqSNYwCc91kT6L2Lv3x5OxUoIcHLPa%2F1aTzLFJN8omC76QBkHFW9Rt61B%2Frp6A5ovJs3p0NUWjCM6SQ3GaBH2dAwB9qorRc5Ge4ku9m7wvR0EB9j%2FPyMvXqXb0ovkVCzf%2BmZ9mepPw%2Ffto55Jaqh%2B0Aj3gSkti7Jj2ZSZS1wjvCKdyhSld8yUKHVYRNZ1gNfbRAbInmJ2O8yPtxWiQMmFTZedU9cCK45r4SMGhOBWKRarD2yKM1BqfI5CH8SEGQUUCkGowlseVe7JT%2BlH4aJTQsOFWEOCALuw%2BZQTnVifiUOV3cgOSJcKk34ZHSRWJRndbp8VYt8UcYEyteTrRk%2FiwvcDdQkC1VY4jSQy3s0JToR22U4c8kCDAO71L3CtYZhqdPKfcloHBNAFDDezJW%2BBjqkAftx77c0QafI0BjTZjL5p5VUdcsf7I9KXvSsyfYgp0HOTr0PId74jDdxU9gwnGV6OyuD2dO%2BMTkdj4ipuaXD0arGqWVL7pR4c9m1p40NhELZ9bj5wIJjxqzstNgnDL7BVDwnBFMgPTzVTMfGGmsAzYU7naKZTDD9DBGk7T8%2B0VOX7g0oPAaKRLtF8pKK6BydFRaB%2F0oNLW2%2F%2BcXRyQ8axWvzBmQo&X-Amz-Signature=c03b34c86f10bfb06ecd184fdebbc4b0c6fb3b9aa17313e4e24d368cf1dd7bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
