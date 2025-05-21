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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2NF7BT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFhCe5Zx5axfI4RkS3hhTMW%2Bjs4bbTTWGzPShG7BnA6CAiAuQfyihcqjzsj3zQbxuHWregiMLGLIw17ox5bMvkHBwSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK2XU4MQQNxigfWbBKtwDhr34Gli4FyFAazvJlNrUCpaUp4mAGH9yP2161jY7Zn1SUg6fjTA8zqbQ2yFI90GT%2B52yKhu9hvEY0L6e7YmN9y58lA0yRjdTSDjmssVoNHyU0r%2Bk3dEdUoRPss4SPE%2BD7HVxGFkHQ0ByoliIUk%2FXqkimYqNPugXWyOCDVOeJnOYyak5S3oShT0Lw%2B6YyDkuqs5qBuwHOVLZCs7uz5dwMCX5pmzhrM47EmetNsvYxvIGd0nqej%2FYzFNvdsJWuQGYPEH%2FLEt%2Bqz4ActInzdqOZoPXbQitbf2s%2F0dYzVCcYHbcFvsk%2FEWY6wVCn9wlngwUTfpFx2gMivsnRe4ecD3OWGMcrFXHUbiyZGPPJL5KdMmvC4pBAadTD95NJtYcLq1qrjh7cB3xGc6kea6BxyyKvJTckQtsvGAel9wregI6EKD3fV%2F772VgBB5ol92SPie8G5UpEVeSTCDvbgEUNLov9DyZPkZgxHyB%2F88jOiUFuHPUjBJy0z1mMb0aDVkgN0USjggoyaF1aPRg7Nh6KI18czSPrK0c3QeeV8RjIHXBBo4GUeTAz8uW2gLNfDy9Swo9zyb2kHdxKXmcpEnpodQ34e6iDR1oBxaKantHqRO8UoXG85GYWNuFR6%2F3nHqMwm464wQY6pgE46opExsyIl0q%2BLhyx0AwNqKMrr78SqnBbNFav2l%2BXQPDAJT%2Bvdljbs1saGnMNYh2YkeeCF4K%2Fc3ChpqJ%2FlYaGlv2kq%2Fi0fkoC5f%2Fi8AdftS%2B7uLRMyzjJzTeE8cuSeNywfzVr8sp2XR0WkBchsMItD8cl%2Fkakc4wLpXjYAQYYWT1BTuyeOqhvEhFDgKZozndF00LsADpTHAzksU4EYZRX%2FK83IL0G&X-Amz-Signature=0fb7870f4fa68d90d67e7e00db651ebc75400d3724d1c146feebc9f5607f146f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2NF7BT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFhCe5Zx5axfI4RkS3hhTMW%2Bjs4bbTTWGzPShG7BnA6CAiAuQfyihcqjzsj3zQbxuHWregiMLGLIw17ox5bMvkHBwSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK2XU4MQQNxigfWbBKtwDhr34Gli4FyFAazvJlNrUCpaUp4mAGH9yP2161jY7Zn1SUg6fjTA8zqbQ2yFI90GT%2B52yKhu9hvEY0L6e7YmN9y58lA0yRjdTSDjmssVoNHyU0r%2Bk3dEdUoRPss4SPE%2BD7HVxGFkHQ0ByoliIUk%2FXqkimYqNPugXWyOCDVOeJnOYyak5S3oShT0Lw%2B6YyDkuqs5qBuwHOVLZCs7uz5dwMCX5pmzhrM47EmetNsvYxvIGd0nqej%2FYzFNvdsJWuQGYPEH%2FLEt%2Bqz4ActInzdqOZoPXbQitbf2s%2F0dYzVCcYHbcFvsk%2FEWY6wVCn9wlngwUTfpFx2gMivsnRe4ecD3OWGMcrFXHUbiyZGPPJL5KdMmvC4pBAadTD95NJtYcLq1qrjh7cB3xGc6kea6BxyyKvJTckQtsvGAel9wregI6EKD3fV%2F772VgBB5ol92SPie8G5UpEVeSTCDvbgEUNLov9DyZPkZgxHyB%2F88jOiUFuHPUjBJy0z1mMb0aDVkgN0USjggoyaF1aPRg7Nh6KI18czSPrK0c3QeeV8RjIHXBBo4GUeTAz8uW2gLNfDy9Swo9zyb2kHdxKXmcpEnpodQ34e6iDR1oBxaKantHqRO8UoXG85GYWNuFR6%2F3nHqMwm464wQY6pgE46opExsyIl0q%2BLhyx0AwNqKMrr78SqnBbNFav2l%2BXQPDAJT%2Bvdljbs1saGnMNYh2YkeeCF4K%2Fc3ChpqJ%2FlYaGlv2kq%2Fi0fkoC5f%2Fi8AdftS%2B7uLRMyzjJzTeE8cuSeNywfzVr8sp2XR0WkBchsMItD8cl%2Fkakc4wLpXjYAQYYWT1BTuyeOqhvEhFDgKZozndF00LsADpTHAzksU4EYZRX%2FK83IL0G&X-Amz-Signature=adf0b07f3638a82d2660d2d651dabab50697012b7535166cbfa902bb43f8b038&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2NF7BT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFhCe5Zx5axfI4RkS3hhTMW%2Bjs4bbTTWGzPShG7BnA6CAiAuQfyihcqjzsj3zQbxuHWregiMLGLIw17ox5bMvkHBwSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK2XU4MQQNxigfWbBKtwDhr34Gli4FyFAazvJlNrUCpaUp4mAGH9yP2161jY7Zn1SUg6fjTA8zqbQ2yFI90GT%2B52yKhu9hvEY0L6e7YmN9y58lA0yRjdTSDjmssVoNHyU0r%2Bk3dEdUoRPss4SPE%2BD7HVxGFkHQ0ByoliIUk%2FXqkimYqNPugXWyOCDVOeJnOYyak5S3oShT0Lw%2B6YyDkuqs5qBuwHOVLZCs7uz5dwMCX5pmzhrM47EmetNsvYxvIGd0nqej%2FYzFNvdsJWuQGYPEH%2FLEt%2Bqz4ActInzdqOZoPXbQitbf2s%2F0dYzVCcYHbcFvsk%2FEWY6wVCn9wlngwUTfpFx2gMivsnRe4ecD3OWGMcrFXHUbiyZGPPJL5KdMmvC4pBAadTD95NJtYcLq1qrjh7cB3xGc6kea6BxyyKvJTckQtsvGAel9wregI6EKD3fV%2F772VgBB5ol92SPie8G5UpEVeSTCDvbgEUNLov9DyZPkZgxHyB%2F88jOiUFuHPUjBJy0z1mMb0aDVkgN0USjggoyaF1aPRg7Nh6KI18czSPrK0c3QeeV8RjIHXBBo4GUeTAz8uW2gLNfDy9Swo9zyb2kHdxKXmcpEnpodQ34e6iDR1oBxaKantHqRO8UoXG85GYWNuFR6%2F3nHqMwm464wQY6pgE46opExsyIl0q%2BLhyx0AwNqKMrr78SqnBbNFav2l%2BXQPDAJT%2Bvdljbs1saGnMNYh2YkeeCF4K%2Fc3ChpqJ%2FlYaGlv2kq%2Fi0fkoC5f%2Fi8AdftS%2B7uLRMyzjJzTeE8cuSeNywfzVr8sp2XR0WkBchsMItD8cl%2Fkakc4wLpXjYAQYYWT1BTuyeOqhvEhFDgKZozndF00LsADpTHAzksU4EYZRX%2FK83IL0G&X-Amz-Signature=1a00b4318fb1111f33677f19987e9b533d7d29a458c2e47ac1fa1fe16f645cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
