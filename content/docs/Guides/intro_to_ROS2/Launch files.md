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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QO7RPWP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGaaMqSyePmpiZHYCqO%2F71PvS%2BkT3pVjuNjFDN8nWtFjAiBEzML%2B1QjHxAi3ugLCP7NiYvuBsUgHON%2B4IycKoFL53Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMvGHUbZY9OfvUp%2BjOKtwDJEqvmq8vKcQ9GDxGecXHrT%2Fp%2BK4rL%2FNv4FiQv1UKB4M8EED00kxKUuNOSzrqjJDrh7o5iGiK6dCmXsKxjo1TaJCZvdOSAGq6PA5b86mwmLvJznUXp9d0UlPa0pkzkoOvAlvOcP0i70927ycsHF%2FIfT%2B7ErduguOA%2B1XP6d3rnhFdGMQ7lxA3Z8yaoEwru5nfIv6GRRX5p7ARECLrFu2nalHDD7XIr3hFpLxz2R6AJBZaz8rRtgMy1P87IvO2qE4FV9ZtH86I3%2BUzK4RXj9UcG8V5pHEtTTcJW8NgXuqW%2F3hRZAp35J3l7kUTTDWmvdMkMRab8qG9UTKW4PAfArPnMt31xo0HjIItaJzgGY2utd4wWErwc1Qic7BFqRZHi7z4cw8rWFaO5Rv914f045gTC1hdKmfMQSLbXoRS2EAv03l1hCoxgtrIc9Xd0NXBZAqi19Q5cMhevUV4MRt2t6IWJXcmBBYh3JvJhZLoVvDhotzTD%2BKhRTO6m4FGAPxP3j8b8bvm%2Fbgc3rX8SBQRYZDKC2PQLmLdbhmWEJI%2FGB3natghfeA5ImmfuMmba45OBV3N79%2BgUmtW6tydg3vJdD9jVXBGFPQBiIjiZqchpp8qxyq6IVEmKm2BPDIOIyAw34jzwgY6pgFukTFU9w32hLAXOlzMoX2pAoczQoj%2BuPqa1EylTYzvr1Hnice%2BqfoVveONGQKWeqd6kJ9ae01%2BopJHRiQvLfzInX2bO9uwXwakiRslE%2Ff6v8H0%2Ffyr2iwS44eo31hM359lVcdwZ74TPLGRbz0X110qrPLz2uke09cQ%2FMsZ%2F4vVTR8BxhfPm1sNsvU25jBPtvlzCJ%2BwAxk1L68MAyDu3G95vukXeEPG&X-Amz-Signature=b186a1ad903b045c6cebc392c5d51188aba6c1e17ebb7a62933a69c826f6fc86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QO7RPWP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGaaMqSyePmpiZHYCqO%2F71PvS%2BkT3pVjuNjFDN8nWtFjAiBEzML%2B1QjHxAi3ugLCP7NiYvuBsUgHON%2B4IycKoFL53Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMvGHUbZY9OfvUp%2BjOKtwDJEqvmq8vKcQ9GDxGecXHrT%2Fp%2BK4rL%2FNv4FiQv1UKB4M8EED00kxKUuNOSzrqjJDrh7o5iGiK6dCmXsKxjo1TaJCZvdOSAGq6PA5b86mwmLvJznUXp9d0UlPa0pkzkoOvAlvOcP0i70927ycsHF%2FIfT%2B7ErduguOA%2B1XP6d3rnhFdGMQ7lxA3Z8yaoEwru5nfIv6GRRX5p7ARECLrFu2nalHDD7XIr3hFpLxz2R6AJBZaz8rRtgMy1P87IvO2qE4FV9ZtH86I3%2BUzK4RXj9UcG8V5pHEtTTcJW8NgXuqW%2F3hRZAp35J3l7kUTTDWmvdMkMRab8qG9UTKW4PAfArPnMt31xo0HjIItaJzgGY2utd4wWErwc1Qic7BFqRZHi7z4cw8rWFaO5Rv914f045gTC1hdKmfMQSLbXoRS2EAv03l1hCoxgtrIc9Xd0NXBZAqi19Q5cMhevUV4MRt2t6IWJXcmBBYh3JvJhZLoVvDhotzTD%2BKhRTO6m4FGAPxP3j8b8bvm%2Fbgc3rX8SBQRYZDKC2PQLmLdbhmWEJI%2FGB3natghfeA5ImmfuMmba45OBV3N79%2BgUmtW6tydg3vJdD9jVXBGFPQBiIjiZqchpp8qxyq6IVEmKm2BPDIOIyAw34jzwgY6pgFukTFU9w32hLAXOlzMoX2pAoczQoj%2BuPqa1EylTYzvr1Hnice%2BqfoVveONGQKWeqd6kJ9ae01%2BopJHRiQvLfzInX2bO9uwXwakiRslE%2Ff6v8H0%2Ffyr2iwS44eo31hM359lVcdwZ74TPLGRbz0X110qrPLz2uke09cQ%2FMsZ%2F4vVTR8BxhfPm1sNsvU25jBPtvlzCJ%2BwAxk1L68MAyDu3G95vukXeEPG&X-Amz-Signature=3f8836ddfded99ac7f2f44cdb48c0807e4ef984d4fd3d2806a60221326fde703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QO7RPWP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGaaMqSyePmpiZHYCqO%2F71PvS%2BkT3pVjuNjFDN8nWtFjAiBEzML%2B1QjHxAi3ugLCP7NiYvuBsUgHON%2B4IycKoFL53Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMvGHUbZY9OfvUp%2BjOKtwDJEqvmq8vKcQ9GDxGecXHrT%2Fp%2BK4rL%2FNv4FiQv1UKB4M8EED00kxKUuNOSzrqjJDrh7o5iGiK6dCmXsKxjo1TaJCZvdOSAGq6PA5b86mwmLvJznUXp9d0UlPa0pkzkoOvAlvOcP0i70927ycsHF%2FIfT%2B7ErduguOA%2B1XP6d3rnhFdGMQ7lxA3Z8yaoEwru5nfIv6GRRX5p7ARECLrFu2nalHDD7XIr3hFpLxz2R6AJBZaz8rRtgMy1P87IvO2qE4FV9ZtH86I3%2BUzK4RXj9UcG8V5pHEtTTcJW8NgXuqW%2F3hRZAp35J3l7kUTTDWmvdMkMRab8qG9UTKW4PAfArPnMt31xo0HjIItaJzgGY2utd4wWErwc1Qic7BFqRZHi7z4cw8rWFaO5Rv914f045gTC1hdKmfMQSLbXoRS2EAv03l1hCoxgtrIc9Xd0NXBZAqi19Q5cMhevUV4MRt2t6IWJXcmBBYh3JvJhZLoVvDhotzTD%2BKhRTO6m4FGAPxP3j8b8bvm%2Fbgc3rX8SBQRYZDKC2PQLmLdbhmWEJI%2FGB3natghfeA5ImmfuMmba45OBV3N79%2BgUmtW6tydg3vJdD9jVXBGFPQBiIjiZqchpp8qxyq6IVEmKm2BPDIOIyAw34jzwgY6pgFukTFU9w32hLAXOlzMoX2pAoczQoj%2BuPqa1EylTYzvr1Hnice%2BqfoVveONGQKWeqd6kJ9ae01%2BopJHRiQvLfzInX2bO9uwXwakiRslE%2Ff6v8H0%2Ffyr2iwS44eo31hM359lVcdwZ74TPLGRbz0X110qrPLz2uke09cQ%2FMsZ%2F4vVTR8BxhfPm1sNsvU25jBPtvlzCJ%2BwAxk1L68MAyDu3G95vukXeEPG&X-Amz-Signature=f87eb8c7ebba8a3bb639de5c134868e081ca0845238bd2dca7e5236120c25363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
