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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZVQ4OF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0FBMe1jbXKLd%2FrXI6S1LDyZckyyLtzvb6mGN1BLqtnAiEAjo3EIcCP7ntOYCbLv0pgX70MmkRlxWqIMfmHYW0GZ6sq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNgu3loOHAYX4XBpaSrcA51KxaPXuzM3bMjn2qVWUR%2Bmrz1rZ5WeXeP35X9LXek4TYUPULzSFu1eXosUXtTbTxKl9q4YrO0QADYtBLfP8xqxuXGuAw8wV3gw2EIAFHREvb80Sr0avy9bJ6XA8bx%2FrFxz0rAOS5c%2BtfvpPTrLkV7k0Xh9lfN4joolt%2FcagAKUi%2BG2dYlafDEz9giEr%2FerPng2LdEbHkX20BNM%2F6FRO%2BE2q1BgMUNfpssDwsTyhg5RYm2G%2FE2MxfL1DavDyxIWVdrFy5ePvWR2xFkrCmScySLMS8RW4ktqv6U5FBDUIM1HDZp9ICIIbxx8%2FG%2F6km%2Bihdlu6waiWCgLVVAAFIWEt3sn3GFnbFX4AeCiJFgGzLHW3nDX7S%2F7HnmoaV14oNsvcdfhPvVL9BxsJWfSEqIkaWRMdY%2FFd%2FLjM8DOTG1GnZLeF%2FwrOYZQefy1doqnLVVdt8ojzeM2Fq5168mPmrJgdA1Y7jeZLvAyXJbV3Nm%2BkyoAeGu25odKqoVWYormKOfurDcQORZgFEvz94lhg6eKCOeGs70V3vHXZhF83TWaztBl4Fjsztl0JGTVVyvGBMz52wSoh3NQAFotEqGTw%2ForUaxhtRSqQTbxzlbOQmMqq%2BQn9xq3trwnDmun359VMMfJqL4GOqUB0qz%2B8hQT%2FIcLz%2Fxn0Nb1qIcfv%2BmxY2n4ht1r59RD2dGaIg6J6E0gva%2BPJfaPNSRiWMv4emVARgcaQAJC5kRwEqvXgqewnU4WB%2BmZIKMu8V%2BOm%2BM%2BwFCuMlBWG0dDIYrTbUMdc%2FiJuFgoEd2JygiS2YV72KvUy8CcQAN%2FVyzTrbkAQAz5FD6Pv3rOGCMYZC1Vq9p%2B5lHAdXrhiiyZ%2B95QDxmVmkq4&X-Amz-Signature=a06b8eeffe9a55189c080010144fd0da7b974e51f9b5dc440ed37bc0eda10a60&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZVQ4OF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0FBMe1jbXKLd%2FrXI6S1LDyZckyyLtzvb6mGN1BLqtnAiEAjo3EIcCP7ntOYCbLv0pgX70MmkRlxWqIMfmHYW0GZ6sq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNgu3loOHAYX4XBpaSrcA51KxaPXuzM3bMjn2qVWUR%2Bmrz1rZ5WeXeP35X9LXek4TYUPULzSFu1eXosUXtTbTxKl9q4YrO0QADYtBLfP8xqxuXGuAw8wV3gw2EIAFHREvb80Sr0avy9bJ6XA8bx%2FrFxz0rAOS5c%2BtfvpPTrLkV7k0Xh9lfN4joolt%2FcagAKUi%2BG2dYlafDEz9giEr%2FerPng2LdEbHkX20BNM%2F6FRO%2BE2q1BgMUNfpssDwsTyhg5RYm2G%2FE2MxfL1DavDyxIWVdrFy5ePvWR2xFkrCmScySLMS8RW4ktqv6U5FBDUIM1HDZp9ICIIbxx8%2FG%2F6km%2Bihdlu6waiWCgLVVAAFIWEt3sn3GFnbFX4AeCiJFgGzLHW3nDX7S%2F7HnmoaV14oNsvcdfhPvVL9BxsJWfSEqIkaWRMdY%2FFd%2FLjM8DOTG1GnZLeF%2FwrOYZQefy1doqnLVVdt8ojzeM2Fq5168mPmrJgdA1Y7jeZLvAyXJbV3Nm%2BkyoAeGu25odKqoVWYormKOfurDcQORZgFEvz94lhg6eKCOeGs70V3vHXZhF83TWaztBl4Fjsztl0JGTVVyvGBMz52wSoh3NQAFotEqGTw%2ForUaxhtRSqQTbxzlbOQmMqq%2BQn9xq3trwnDmun359VMMfJqL4GOqUB0qz%2B8hQT%2FIcLz%2Fxn0Nb1qIcfv%2BmxY2n4ht1r59RD2dGaIg6J6E0gva%2BPJfaPNSRiWMv4emVARgcaQAJC5kRwEqvXgqewnU4WB%2BmZIKMu8V%2BOm%2BM%2BwFCuMlBWG0dDIYrTbUMdc%2FiJuFgoEd2JygiS2YV72KvUy8CcQAN%2FVyzTrbkAQAz5FD6Pv3rOGCMYZC1Vq9p%2B5lHAdXrhiiyZ%2B95QDxmVmkq4&X-Amz-Signature=eb10358045739b1b3231c90619f87cef7ea0f318bda8db59cd05e5935f803aae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZVQ4OF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0FBMe1jbXKLd%2FrXI6S1LDyZckyyLtzvb6mGN1BLqtnAiEAjo3EIcCP7ntOYCbLv0pgX70MmkRlxWqIMfmHYW0GZ6sq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNgu3loOHAYX4XBpaSrcA51KxaPXuzM3bMjn2qVWUR%2Bmrz1rZ5WeXeP35X9LXek4TYUPULzSFu1eXosUXtTbTxKl9q4YrO0QADYtBLfP8xqxuXGuAw8wV3gw2EIAFHREvb80Sr0avy9bJ6XA8bx%2FrFxz0rAOS5c%2BtfvpPTrLkV7k0Xh9lfN4joolt%2FcagAKUi%2BG2dYlafDEz9giEr%2FerPng2LdEbHkX20BNM%2F6FRO%2BE2q1BgMUNfpssDwsTyhg5RYm2G%2FE2MxfL1DavDyxIWVdrFy5ePvWR2xFkrCmScySLMS8RW4ktqv6U5FBDUIM1HDZp9ICIIbxx8%2FG%2F6km%2Bihdlu6waiWCgLVVAAFIWEt3sn3GFnbFX4AeCiJFgGzLHW3nDX7S%2F7HnmoaV14oNsvcdfhPvVL9BxsJWfSEqIkaWRMdY%2FFd%2FLjM8DOTG1GnZLeF%2FwrOYZQefy1doqnLVVdt8ojzeM2Fq5168mPmrJgdA1Y7jeZLvAyXJbV3Nm%2BkyoAeGu25odKqoVWYormKOfurDcQORZgFEvz94lhg6eKCOeGs70V3vHXZhF83TWaztBl4Fjsztl0JGTVVyvGBMz52wSoh3NQAFotEqGTw%2ForUaxhtRSqQTbxzlbOQmMqq%2BQn9xq3trwnDmun359VMMfJqL4GOqUB0qz%2B8hQT%2FIcLz%2Fxn0Nb1qIcfv%2BmxY2n4ht1r59RD2dGaIg6J6E0gva%2BPJfaPNSRiWMv4emVARgcaQAJC5kRwEqvXgqewnU4WB%2BmZIKMu8V%2BOm%2BM%2BwFCuMlBWG0dDIYrTbUMdc%2FiJuFgoEd2JygiS2YV72KvUy8CcQAN%2FVyzTrbkAQAz5FD6Pv3rOGCMYZC1Vq9p%2B5lHAdXrhiiyZ%2B95QDxmVmkq4&X-Amz-Signature=940ab73bb646e1aefc0b0c529f5453f6fb6bd32824ed9ee1f76cd5441aab0fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
