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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53GNJIT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAi4CANsuoDyFyNhip3LTzhh4tY7YvEpTHd6ZV%2FkqkbwAiEAoIw92%2FSIkgAZOT%2FcXMEeFoG4MspIDg3HzbVcqdwGLkwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXKGEX33phk1bnEtSrcA%2F5lI4oO34RqPFE7AnCw6ssbm16iEbClMr%2F1O2z6F7wFTMONJPGjbvcmufrItqikzn%2Fs3Lcye4ZC1OZIpyQO5mqisxLs4I%2Bd0w9Jra6Y5vOYzk3%2FIUdiTeNw2B0v5gcMcJBAJi7pGTYJ8Zz2LzrbB8vKgsFcVR%2F1DwQbEkLBm8X8y9BSeEmWym%2F2rQVU22SIP7%2B04HRe9GC5%2Bg0rv3JXwzHd1UxokmTRo2JYrw%2FejMupKSAa6ijzrZqq%2B5EvppwhQ93cqZVYnm93pUSUN1VvBIncjisnIQ%2FwE1RMOmI8P2KCwLaQig7MIZh0FDpn1CKOQo8nqbZvsqqFJkyhlw%2FzsL82n%2F3JdySO2mzBvEd%2Fy22C47B4NHo2iiFwR%2Frh7FsjMXRk01MA2dcQqR0WSzUKNhPDw682aVJLYI0fJF9VqFaAt0UCwtKSwaWjEskXaDvE3BT4Aw9UrwPJW5xQNA0PglANvE37jzFUU4ExRwcn49sAs%2B4EdQJatQU39hDE4llTJiCIajY3%2Fa4Yf0lWzN5ae9e98wExcq%2Fys0kk1QPyJAZYeJ1%2BOIQcIvzLbGzo49N78TmGUb%2B%2FbhArAF6S7zDlZSsimSrtFWOcExEq6LsVclPsZE5qrAfbN0wJzaw2MNWP8cMGOqUBHrrCFs8K3tz7o%2BRgeZ7zKEOxJRhIldFUlQWoucJaTzWpMKyoSc%2B7Jl3usS0BsqD2kO27NL8zvEbsXVNwJMe1vp2o9WctCe%2Fu%2BkQcwbxGOOSgTJK7IHSY%2FHdHahXHrmdnSW3e5ZltJNfE9b5uBVvxeOiywpMIFSHFjVfSGlj31fl358SQkbzLzgHf1e2ju%2F7q%2BNMD66G4uscyUpu%2BzoISOkK6UDXH&X-Amz-Signature=5864b3066e63ee9178552fe4a8a28a211597baed85392e248a30839f629b92a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53GNJIT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAi4CANsuoDyFyNhip3LTzhh4tY7YvEpTHd6ZV%2FkqkbwAiEAoIw92%2FSIkgAZOT%2FcXMEeFoG4MspIDg3HzbVcqdwGLkwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXKGEX33phk1bnEtSrcA%2F5lI4oO34RqPFE7AnCw6ssbm16iEbClMr%2F1O2z6F7wFTMONJPGjbvcmufrItqikzn%2Fs3Lcye4ZC1OZIpyQO5mqisxLs4I%2Bd0w9Jra6Y5vOYzk3%2FIUdiTeNw2B0v5gcMcJBAJi7pGTYJ8Zz2LzrbB8vKgsFcVR%2F1DwQbEkLBm8X8y9BSeEmWym%2F2rQVU22SIP7%2B04HRe9GC5%2Bg0rv3JXwzHd1UxokmTRo2JYrw%2FejMupKSAa6ijzrZqq%2B5EvppwhQ93cqZVYnm93pUSUN1VvBIncjisnIQ%2FwE1RMOmI8P2KCwLaQig7MIZh0FDpn1CKOQo8nqbZvsqqFJkyhlw%2FzsL82n%2F3JdySO2mzBvEd%2Fy22C47B4NHo2iiFwR%2Frh7FsjMXRk01MA2dcQqR0WSzUKNhPDw682aVJLYI0fJF9VqFaAt0UCwtKSwaWjEskXaDvE3BT4Aw9UrwPJW5xQNA0PglANvE37jzFUU4ExRwcn49sAs%2B4EdQJatQU39hDE4llTJiCIajY3%2Fa4Yf0lWzN5ae9e98wExcq%2Fys0kk1QPyJAZYeJ1%2BOIQcIvzLbGzo49N78TmGUb%2B%2FbhArAF6S7zDlZSsimSrtFWOcExEq6LsVclPsZE5qrAfbN0wJzaw2MNWP8cMGOqUBHrrCFs8K3tz7o%2BRgeZ7zKEOxJRhIldFUlQWoucJaTzWpMKyoSc%2B7Jl3usS0BsqD2kO27NL8zvEbsXVNwJMe1vp2o9WctCe%2Fu%2BkQcwbxGOOSgTJK7IHSY%2FHdHahXHrmdnSW3e5ZltJNfE9b5uBVvxeOiywpMIFSHFjVfSGlj31fl358SQkbzLzgHf1e2ju%2F7q%2BNMD66G4uscyUpu%2BzoISOkK6UDXH&X-Amz-Signature=fad44ac00d01aecbc01405210e516e9723567e2a219d149c94997ae0f0751879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53GNJIT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAi4CANsuoDyFyNhip3LTzhh4tY7YvEpTHd6ZV%2FkqkbwAiEAoIw92%2FSIkgAZOT%2FcXMEeFoG4MspIDg3HzbVcqdwGLkwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXKGEX33phk1bnEtSrcA%2F5lI4oO34RqPFE7AnCw6ssbm16iEbClMr%2F1O2z6F7wFTMONJPGjbvcmufrItqikzn%2Fs3Lcye4ZC1OZIpyQO5mqisxLs4I%2Bd0w9Jra6Y5vOYzk3%2FIUdiTeNw2B0v5gcMcJBAJi7pGTYJ8Zz2LzrbB8vKgsFcVR%2F1DwQbEkLBm8X8y9BSeEmWym%2F2rQVU22SIP7%2B04HRe9GC5%2Bg0rv3JXwzHd1UxokmTRo2JYrw%2FejMupKSAa6ijzrZqq%2B5EvppwhQ93cqZVYnm93pUSUN1VvBIncjisnIQ%2FwE1RMOmI8P2KCwLaQig7MIZh0FDpn1CKOQo8nqbZvsqqFJkyhlw%2FzsL82n%2F3JdySO2mzBvEd%2Fy22C47B4NHo2iiFwR%2Frh7FsjMXRk01MA2dcQqR0WSzUKNhPDw682aVJLYI0fJF9VqFaAt0UCwtKSwaWjEskXaDvE3BT4Aw9UrwPJW5xQNA0PglANvE37jzFUU4ExRwcn49sAs%2B4EdQJatQU39hDE4llTJiCIajY3%2Fa4Yf0lWzN5ae9e98wExcq%2Fys0kk1QPyJAZYeJ1%2BOIQcIvzLbGzo49N78TmGUb%2B%2FbhArAF6S7zDlZSsimSrtFWOcExEq6LsVclPsZE5qrAfbN0wJzaw2MNWP8cMGOqUBHrrCFs8K3tz7o%2BRgeZ7zKEOxJRhIldFUlQWoucJaTzWpMKyoSc%2B7Jl3usS0BsqD2kO27NL8zvEbsXVNwJMe1vp2o9WctCe%2Fu%2BkQcwbxGOOSgTJK7IHSY%2FHdHahXHrmdnSW3e5ZltJNfE9b5uBVvxeOiywpMIFSHFjVfSGlj31fl358SQkbzLzgHf1e2ju%2F7q%2BNMD66G4uscyUpu%2BzoISOkK6UDXH&X-Amz-Signature=ce0f6cdd82d293e5a122eb0dbd52e9984ba77e64d5ae9758c2d07da740259038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
