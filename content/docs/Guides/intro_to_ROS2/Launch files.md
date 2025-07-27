---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHTLSHM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQClprJP31l3WNXfu8SbH0%2BfnD5CpTflO2uXC6tbeLL7ewIhAPGehkVPfMKSfFBTKGZpl6npO3wRi4utII3woUnDg8ZBKv8DCHIQABoMNjM3NDIzMTgzODA1Igw4PUIvg8ZYMwcZvGgq3APtwoSPuCNQsrfV6Eehxe8v7O%2FJ1i02oD%2FX3JF3AfhUuWmsDqzfdPkw8ZuWzLNZHml46tQmC0RE2QZIFCWtj2Z%2BdpP2FiafT5eg1QTwHUGyY2PeTjQhN9H%2B3VB3mBGTB8DMHZKVstcLNNM4BSLJW9L%2Fz1wvAJMbM%2BCrdn1IV%2FwRJ%2F3S34OwxRLBnI5VMpI2od0l5Jsv9WircocMc61FfObCHMhkEyGIbPp86wcc64%2Fybz%2Bt%2FWT7c%2F0CrWlFnjTcnwvodLlOenuijSKdvO75cC4iDPAnwBct1j%2B6SuZdQBC2mBybvv6wqvSkXp6T6hXZiAd8Nk6baDaqNW41WgEj%2BJ7BmH6IaAM6h%2BuYe4AdegM5Erm4uB%2BglnPFPTFhP7X2Kscix%2FsUrGGPS5TJQVZ7MjdRtrWGNGu8NnDWtqRNfxgQmf43Y%2FnriCDYPeZHjWa8ulXhlcr0VDeYKFj7Ip6nH%2Bbg8oWXjX7t4VC%2BF%2FAi6fAeQAwepfasmfEIJgzrVdZq%2FSeSeXLnnVhUsKgOMTWvajFt18TZxL4VIaUCR%2BKYlxS3EVJ6Zw0srA0%2F39Zi1ZKmlU%2FwyyDEj%2BJB8LT6kU2oxNisPvynlowzWgMK9vR7cDTn3JJiEEnVyygW%2FOJ21zCf3pfEBjqkAW24joML%2F1bGv7kuB9wAKPsz1ax1D79kuUkueYDc1yiM9qKhU0A%2FkV7o2PmkbKgU2RYTNOPc1y0nfLztZwwf1kXjZ9UpXFIGQzPCQkjLBPqY%2FqILm4lVV%2B6Eq%2FC9gRQ4cgkyKyiQ537O43UZQKvAkDkfPSJoN1D9OqT9r0QO61vpEeAq97PTfR2ZAgJvAoLlfwnPaPZRdI4wxOlzaZHmMV3dwbDo&X-Amz-Signature=87d0b79f6534f3bb67f20544160931d1834be67f5945281400c2c1dd658f127d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHTLSHM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQClprJP31l3WNXfu8SbH0%2BfnD5CpTflO2uXC6tbeLL7ewIhAPGehkVPfMKSfFBTKGZpl6npO3wRi4utII3woUnDg8ZBKv8DCHIQABoMNjM3NDIzMTgzODA1Igw4PUIvg8ZYMwcZvGgq3APtwoSPuCNQsrfV6Eehxe8v7O%2FJ1i02oD%2FX3JF3AfhUuWmsDqzfdPkw8ZuWzLNZHml46tQmC0RE2QZIFCWtj2Z%2BdpP2FiafT5eg1QTwHUGyY2PeTjQhN9H%2B3VB3mBGTB8DMHZKVstcLNNM4BSLJW9L%2Fz1wvAJMbM%2BCrdn1IV%2FwRJ%2F3S34OwxRLBnI5VMpI2od0l5Jsv9WircocMc61FfObCHMhkEyGIbPp86wcc64%2Fybz%2Bt%2FWT7c%2F0CrWlFnjTcnwvodLlOenuijSKdvO75cC4iDPAnwBct1j%2B6SuZdQBC2mBybvv6wqvSkXp6T6hXZiAd8Nk6baDaqNW41WgEj%2BJ7BmH6IaAM6h%2BuYe4AdegM5Erm4uB%2BglnPFPTFhP7X2Kscix%2FsUrGGPS5TJQVZ7MjdRtrWGNGu8NnDWtqRNfxgQmf43Y%2FnriCDYPeZHjWa8ulXhlcr0VDeYKFj7Ip6nH%2Bbg8oWXjX7t4VC%2BF%2FAi6fAeQAwepfasmfEIJgzrVdZq%2FSeSeXLnnVhUsKgOMTWvajFt18TZxL4VIaUCR%2BKYlxS3EVJ6Zw0srA0%2F39Zi1ZKmlU%2FwyyDEj%2BJB8LT6kU2oxNisPvynlowzWgMK9vR7cDTn3JJiEEnVyygW%2FOJ21zCf3pfEBjqkAW24joML%2F1bGv7kuB9wAKPsz1ax1D79kuUkueYDc1yiM9qKhU0A%2FkV7o2PmkbKgU2RYTNOPc1y0nfLztZwwf1kXjZ9UpXFIGQzPCQkjLBPqY%2FqILm4lVV%2B6Eq%2FC9gRQ4cgkyKyiQ537O43UZQKvAkDkfPSJoN1D9OqT9r0QO61vpEeAq97PTfR2ZAgJvAoLlfwnPaPZRdI4wxOlzaZHmMV3dwbDo&X-Amz-Signature=8fc0349d8a764e2d4b22eb54afd4d8ff0691cbb910025856e3d046efbf177c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHTLSHM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQClprJP31l3WNXfu8SbH0%2BfnD5CpTflO2uXC6tbeLL7ewIhAPGehkVPfMKSfFBTKGZpl6npO3wRi4utII3woUnDg8ZBKv8DCHIQABoMNjM3NDIzMTgzODA1Igw4PUIvg8ZYMwcZvGgq3APtwoSPuCNQsrfV6Eehxe8v7O%2FJ1i02oD%2FX3JF3AfhUuWmsDqzfdPkw8ZuWzLNZHml46tQmC0RE2QZIFCWtj2Z%2BdpP2FiafT5eg1QTwHUGyY2PeTjQhN9H%2B3VB3mBGTB8DMHZKVstcLNNM4BSLJW9L%2Fz1wvAJMbM%2BCrdn1IV%2FwRJ%2F3S34OwxRLBnI5VMpI2od0l5Jsv9WircocMc61FfObCHMhkEyGIbPp86wcc64%2Fybz%2Bt%2FWT7c%2F0CrWlFnjTcnwvodLlOenuijSKdvO75cC4iDPAnwBct1j%2B6SuZdQBC2mBybvv6wqvSkXp6T6hXZiAd8Nk6baDaqNW41WgEj%2BJ7BmH6IaAM6h%2BuYe4AdegM5Erm4uB%2BglnPFPTFhP7X2Kscix%2FsUrGGPS5TJQVZ7MjdRtrWGNGu8NnDWtqRNfxgQmf43Y%2FnriCDYPeZHjWa8ulXhlcr0VDeYKFj7Ip6nH%2Bbg8oWXjX7t4VC%2BF%2FAi6fAeQAwepfasmfEIJgzrVdZq%2FSeSeXLnnVhUsKgOMTWvajFt18TZxL4VIaUCR%2BKYlxS3EVJ6Zw0srA0%2F39Zi1ZKmlU%2FwyyDEj%2BJB8LT6kU2oxNisPvynlowzWgMK9vR7cDTn3JJiEEnVyygW%2FOJ21zCf3pfEBjqkAW24joML%2F1bGv7kuB9wAKPsz1ax1D79kuUkueYDc1yiM9qKhU0A%2FkV7o2PmkbKgU2RYTNOPc1y0nfLztZwwf1kXjZ9UpXFIGQzPCQkjLBPqY%2FqILm4lVV%2B6Eq%2FC9gRQ4cgkyKyiQ537O43UZQKvAkDkfPSJoN1D9OqT9r0QO61vpEeAq97PTfR2ZAgJvAoLlfwnPaPZRdI4wxOlzaZHmMV3dwbDo&X-Amz-Signature=4ae38f7138ca5f81e1bc86fed4338cff25570f95b3915622df9a9d459560f53d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
