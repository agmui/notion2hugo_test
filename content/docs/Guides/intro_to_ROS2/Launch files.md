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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DWLDNT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVO820Az8xs8ryFlA6SbRJaF85hPuhRB4YESQ4pV4NGAiEA2uQCtXEPyQ5QizNTly%2BouMIpGsIeDypbqAccZWjuWagqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaM%2BbtGd1W6BCe5dyrcA40VausLKQAt4G%2FTDhZC6IogYV1jodDIEnfTuCUUCSUsZezFsaOg0V5roLFynqBBaD4%2Brkkw2%2B4BR0HNP3MD3OizFeI9EXJlfhb1siVwU9uc4bUDcu4C%2Ftn%2BxQZAXou5%2FeLDJsK194rEkce4J6TI%2Fb7iSrvbfhsqC%2Fy1G63ycFFnTGjh0b9Qqbj9Jc5IWZrERaVA17sqptdvQ7SoP5HLzRvTpoTP%2B7WkoA2ReVV8P%2Brn80j5oEv4c9e%2B0Rmz5hsyezWksdHB8%2BAMGsl6KVFbdiebILOoOGwKDfK6mB85tPQzsYrsBwTFqHjTMu0xJpmEy%2FFvKBauY6peLF0SnJQIwFa1rVFpUqUFXvIaf5DqbdjoULzDcOnC%2FhsgpE0tpTNPDIkq4fAbwm51MlLf5LQFnyel5z7bP0p0c6bXcmeTr0YFhW3%2B2yyF1RQeTUJ6r4Z1KMa0Y%2FwJwpRJiGeDJX1cMZd5IZJrcy3AV6XKBEyRJF9pM2qcqfDIQZlZrM5raZdMwgojef1o07WXke6VOi%2FRAghuBdniWGdtEUz5ulZd4GRyx%2B8dV6vKLHl%2F%2Blyk%2FSwva9kY%2FXa5uKxwpkQEmadMidNS5zc%2Ffl02qfAWpPwvdpYRD5jKURCXnImbjo7tMMbW%2BsMGOqUBYdkehQDfyiVv68Zr6IGiT41aQLw3Cw7l%2Bl3b9foaO8rnPd8bQRvj37imlra5u9bDzJ%2FO%2BrKVOzfVZF%2FqHsZA6p%2BQ1AJrVyWi2duHHpqpsPNkvLyR9m0vKBLbNcSyu57EUICVkmmuo3N5qK2WBviIQlf8GW6vc4IQ2UNCtM2YFjfJ7DUHwvweNa6%2BBwGNNLUOtmKSA%2FRVwvGt33awfyWk16Uc8xoZ&X-Amz-Signature=b01ee89aad1077aff76a66d2372b50436a38dcb3fedd9d8c68acc0203b36cc58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DWLDNT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVO820Az8xs8ryFlA6SbRJaF85hPuhRB4YESQ4pV4NGAiEA2uQCtXEPyQ5QizNTly%2BouMIpGsIeDypbqAccZWjuWagqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaM%2BbtGd1W6BCe5dyrcA40VausLKQAt4G%2FTDhZC6IogYV1jodDIEnfTuCUUCSUsZezFsaOg0V5roLFynqBBaD4%2Brkkw2%2B4BR0HNP3MD3OizFeI9EXJlfhb1siVwU9uc4bUDcu4C%2Ftn%2BxQZAXou5%2FeLDJsK194rEkce4J6TI%2Fb7iSrvbfhsqC%2Fy1G63ycFFnTGjh0b9Qqbj9Jc5IWZrERaVA17sqptdvQ7SoP5HLzRvTpoTP%2B7WkoA2ReVV8P%2Brn80j5oEv4c9e%2B0Rmz5hsyezWksdHB8%2BAMGsl6KVFbdiebILOoOGwKDfK6mB85tPQzsYrsBwTFqHjTMu0xJpmEy%2FFvKBauY6peLF0SnJQIwFa1rVFpUqUFXvIaf5DqbdjoULzDcOnC%2FhsgpE0tpTNPDIkq4fAbwm51MlLf5LQFnyel5z7bP0p0c6bXcmeTr0YFhW3%2B2yyF1RQeTUJ6r4Z1KMa0Y%2FwJwpRJiGeDJX1cMZd5IZJrcy3AV6XKBEyRJF9pM2qcqfDIQZlZrM5raZdMwgojef1o07WXke6VOi%2FRAghuBdniWGdtEUz5ulZd4GRyx%2B8dV6vKLHl%2F%2Blyk%2FSwva9kY%2FXa5uKxwpkQEmadMidNS5zc%2Ffl02qfAWpPwvdpYRD5jKURCXnImbjo7tMMbW%2BsMGOqUBYdkehQDfyiVv68Zr6IGiT41aQLw3Cw7l%2Bl3b9foaO8rnPd8bQRvj37imlra5u9bDzJ%2FO%2BrKVOzfVZF%2FqHsZA6p%2BQ1AJrVyWi2duHHpqpsPNkvLyR9m0vKBLbNcSyu57EUICVkmmuo3N5qK2WBviIQlf8GW6vc4IQ2UNCtM2YFjfJ7DUHwvweNa6%2BBwGNNLUOtmKSA%2FRVwvGt33awfyWk16Uc8xoZ&X-Amz-Signature=bb71458ed2aced9f2a134f9eb6f34916b657b2fa5cb51dba207c69261a74d4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DWLDNT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVO820Az8xs8ryFlA6SbRJaF85hPuhRB4YESQ4pV4NGAiEA2uQCtXEPyQ5QizNTly%2BouMIpGsIeDypbqAccZWjuWagqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaM%2BbtGd1W6BCe5dyrcA40VausLKQAt4G%2FTDhZC6IogYV1jodDIEnfTuCUUCSUsZezFsaOg0V5roLFynqBBaD4%2Brkkw2%2B4BR0HNP3MD3OizFeI9EXJlfhb1siVwU9uc4bUDcu4C%2Ftn%2BxQZAXou5%2FeLDJsK194rEkce4J6TI%2Fb7iSrvbfhsqC%2Fy1G63ycFFnTGjh0b9Qqbj9Jc5IWZrERaVA17sqptdvQ7SoP5HLzRvTpoTP%2B7WkoA2ReVV8P%2Brn80j5oEv4c9e%2B0Rmz5hsyezWksdHB8%2BAMGsl6KVFbdiebILOoOGwKDfK6mB85tPQzsYrsBwTFqHjTMu0xJpmEy%2FFvKBauY6peLF0SnJQIwFa1rVFpUqUFXvIaf5DqbdjoULzDcOnC%2FhsgpE0tpTNPDIkq4fAbwm51MlLf5LQFnyel5z7bP0p0c6bXcmeTr0YFhW3%2B2yyF1RQeTUJ6r4Z1KMa0Y%2FwJwpRJiGeDJX1cMZd5IZJrcy3AV6XKBEyRJF9pM2qcqfDIQZlZrM5raZdMwgojef1o07WXke6VOi%2FRAghuBdniWGdtEUz5ulZd4GRyx%2B8dV6vKLHl%2F%2Blyk%2FSwva9kY%2FXa5uKxwpkQEmadMidNS5zc%2Ffl02qfAWpPwvdpYRD5jKURCXnImbjo7tMMbW%2BsMGOqUBYdkehQDfyiVv68Zr6IGiT41aQLw3Cw7l%2Bl3b9foaO8rnPd8bQRvj37imlra5u9bDzJ%2FO%2BrKVOzfVZF%2FqHsZA6p%2BQ1AJrVyWi2duHHpqpsPNkvLyR9m0vKBLbNcSyu57EUICVkmmuo3N5qK2WBviIQlf8GW6vc4IQ2UNCtM2YFjfJ7DUHwvweNa6%2BBwGNNLUOtmKSA%2FRVwvGt33awfyWk16Uc8xoZ&X-Amz-Signature=3d641df316fe2a2f17b35931f9723a46ac348b289c2ca9bc174b8c84ad0e7f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
