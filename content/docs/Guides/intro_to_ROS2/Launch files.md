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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBOWRLQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBUYy9fnLGPySXNblpEQO4kPHvm%2F2UEDTDV%2BzpQL3kscAiAWMfKASuoczjk1dDNb2PfuQsSNBy0SHzW%2B3Gv8roLImyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocPzgr9m6%2B9wBHoGKtwDYwD8jCzSyHhG9YZoJN%2B0yE%2Bkf2Wv3K0RgAm8jLHz0ErruF9P67ICdDlUjC3jWj8REafU7EpIsmcuSo08O0Uo7jhatCQcJoi%2FXZwGG2wAvlg0%2BrxfQF3tyf5gMH2rXMqcX8O%2FLRi%2Bv0pDoDzfjjE8VF%2BVlgYcHMexGSimsVxp%2BIk5cfc4Yg8TuzjMOoKaiz6T9OIXh80wz6oaoqsWN1UdZZIjPTi%2F5Ze2lxZzyaD3d%2BiK6P%2BXxad2DgRtDSfSAMdDGFUQXzeSUu0kVFox2sWXI1pwts%2B2T8VdIxeD2t5Mt0Vk1A2xWsbKZ%2F3uVV3EJM5lh8Jw9nTy11NZYbO8YRwNr1VI%2FIpVsKyB4KV5LWH4bmvoy7HAaaJA6k22jP2pcywjZjBkm3Rqi9%2Bnf3gYyg8w5r4qDyhzVTUlra0aYjDE5DQWm5EU4rQtb5vI8sJUzNcYVFCOv7rS%2Bvty4AytkZS1xYKMTFpqbhVHam9ExlmCIBXlFmbH0s%2BES6haqGOHDDo5wMI3l0YghSM3I0aVCF2UQp2JdpesbSx50G%2BDPpMlx%2FZbXXgDW0pC2MQsY3MGujGmV0m3UkuTuJvuEAN4k9XTV3aYD6%2Bw%2Bap5HqxFzOiVZD3ekZTzbXf%2BoUECIk4whae6wQY6pgFAIUvbQAiZ4bhG8DeYdCBBQSPMpVXeQZt3kgf9DnafJ1QiH95Q9NdLSvEoka7ORGlSjM0synGW8vzIXaSNib92usQbGK9VCK1xxBcXYZiJNdjqN7s0GJ9E4BOATgFkRvRsBNdNq9YF1%2BXqFCyDT8MzIdDnQKWRsjIcGWw3XR6fOFbkJWMw8uT1QX6C0xoftdN9Gor1roPm8G2eqsd7ALGtfTLjXaEs&X-Amz-Signature=e90b15bd4e942061d94bb581c4a6bdb51d83e4f6ad5333a0a31c08a5794f05f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBOWRLQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBUYy9fnLGPySXNblpEQO4kPHvm%2F2UEDTDV%2BzpQL3kscAiAWMfKASuoczjk1dDNb2PfuQsSNBy0SHzW%2B3Gv8roLImyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocPzgr9m6%2B9wBHoGKtwDYwD8jCzSyHhG9YZoJN%2B0yE%2Bkf2Wv3K0RgAm8jLHz0ErruF9P67ICdDlUjC3jWj8REafU7EpIsmcuSo08O0Uo7jhatCQcJoi%2FXZwGG2wAvlg0%2BrxfQF3tyf5gMH2rXMqcX8O%2FLRi%2Bv0pDoDzfjjE8VF%2BVlgYcHMexGSimsVxp%2BIk5cfc4Yg8TuzjMOoKaiz6T9OIXh80wz6oaoqsWN1UdZZIjPTi%2F5Ze2lxZzyaD3d%2BiK6P%2BXxad2DgRtDSfSAMdDGFUQXzeSUu0kVFox2sWXI1pwts%2B2T8VdIxeD2t5Mt0Vk1A2xWsbKZ%2F3uVV3EJM5lh8Jw9nTy11NZYbO8YRwNr1VI%2FIpVsKyB4KV5LWH4bmvoy7HAaaJA6k22jP2pcywjZjBkm3Rqi9%2Bnf3gYyg8w5r4qDyhzVTUlra0aYjDE5DQWm5EU4rQtb5vI8sJUzNcYVFCOv7rS%2Bvty4AytkZS1xYKMTFpqbhVHam9ExlmCIBXlFmbH0s%2BES6haqGOHDDo5wMI3l0YghSM3I0aVCF2UQp2JdpesbSx50G%2BDPpMlx%2FZbXXgDW0pC2MQsY3MGujGmV0m3UkuTuJvuEAN4k9XTV3aYD6%2Bw%2Bap5HqxFzOiVZD3ekZTzbXf%2BoUECIk4whae6wQY6pgFAIUvbQAiZ4bhG8DeYdCBBQSPMpVXeQZt3kgf9DnafJ1QiH95Q9NdLSvEoka7ORGlSjM0synGW8vzIXaSNib92usQbGK9VCK1xxBcXYZiJNdjqN7s0GJ9E4BOATgFkRvRsBNdNq9YF1%2BXqFCyDT8MzIdDnQKWRsjIcGWw3XR6fOFbkJWMw8uT1QX6C0xoftdN9Gor1roPm8G2eqsd7ALGtfTLjXaEs&X-Amz-Signature=4744c61bc0734279f086a05e09193596504f18da41391d89aa388136a8e6bbeb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBOWRLQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBUYy9fnLGPySXNblpEQO4kPHvm%2F2UEDTDV%2BzpQL3kscAiAWMfKASuoczjk1dDNb2PfuQsSNBy0SHzW%2B3Gv8roLImyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocPzgr9m6%2B9wBHoGKtwDYwD8jCzSyHhG9YZoJN%2B0yE%2Bkf2Wv3K0RgAm8jLHz0ErruF9P67ICdDlUjC3jWj8REafU7EpIsmcuSo08O0Uo7jhatCQcJoi%2FXZwGG2wAvlg0%2BrxfQF3tyf5gMH2rXMqcX8O%2FLRi%2Bv0pDoDzfjjE8VF%2BVlgYcHMexGSimsVxp%2BIk5cfc4Yg8TuzjMOoKaiz6T9OIXh80wz6oaoqsWN1UdZZIjPTi%2F5Ze2lxZzyaD3d%2BiK6P%2BXxad2DgRtDSfSAMdDGFUQXzeSUu0kVFox2sWXI1pwts%2B2T8VdIxeD2t5Mt0Vk1A2xWsbKZ%2F3uVV3EJM5lh8Jw9nTy11NZYbO8YRwNr1VI%2FIpVsKyB4KV5LWH4bmvoy7HAaaJA6k22jP2pcywjZjBkm3Rqi9%2Bnf3gYyg8w5r4qDyhzVTUlra0aYjDE5DQWm5EU4rQtb5vI8sJUzNcYVFCOv7rS%2Bvty4AytkZS1xYKMTFpqbhVHam9ExlmCIBXlFmbH0s%2BES6haqGOHDDo5wMI3l0YghSM3I0aVCF2UQp2JdpesbSx50G%2BDPpMlx%2FZbXXgDW0pC2MQsY3MGujGmV0m3UkuTuJvuEAN4k9XTV3aYD6%2Bw%2Bap5HqxFzOiVZD3ekZTzbXf%2BoUECIk4whae6wQY6pgFAIUvbQAiZ4bhG8DeYdCBBQSPMpVXeQZt3kgf9DnafJ1QiH95Q9NdLSvEoka7ORGlSjM0synGW8vzIXaSNib92usQbGK9VCK1xxBcXYZiJNdjqN7s0GJ9E4BOATgFkRvRsBNdNq9YF1%2BXqFCyDT8MzIdDnQKWRsjIcGWw3XR6fOFbkJWMw8uT1QX6C0xoftdN9Gor1roPm8G2eqsd7ALGtfTLjXaEs&X-Amz-Signature=8af0d3c4cf6972a023cc663938ed985c642536a87fef188120a972cb38adde06&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
