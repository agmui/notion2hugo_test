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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6B4RZ6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgztQxx7ksJ4jRmBXkbN813k0hH1wVhNGCcXDL8hWc8AiBgIGpgwOHvMnP8hNDvIGsIwoQFGD1aAU0KT0bZdhSJWCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMS9RneBUONrGffn61KtwD1gJXNA6MVlZ6GHNUPtQ6VmLLwQ3Zj9Okzb0c0UOhrITbbjGtaEoAK1RHsGnRStdy78y8fV4Nnt6wJpjXEFKE2psqFMixvcWNg30%2B8PfOj6QVjAP%2F0kId2T2EYkwydbS97tw6YrgDRFJYVUKJcYOZLwqo2ARFwekJ2P7OGEIpuVAoqC9QHNk%2BEnHdTY4puaXvKRGNC9CC7Yv49F5Q%2Fz8X3hpbyrEIgywLEsFq9ejEztXbHiGdA5HjQZpO%2BplItKLPiI0le6j76mSNRDmgvO4BxFkQMFX3pXGV4hkSLbC0FIh%2BPhP5fpjHNn9ZzbSoezGXbX%2BlZqDTLG6yH45o6qGgnfLm0dvdCSxP7gzWfTK%2BWnnLv3xg8dOF%2FF8d8zH0NFBsGaBnHPKz7q4GuUKHZQvZBpk6Qc6BYD3xgHwDKrd2Lkc1Wlj7RqgIjK%2FY4h9O2KK5kwfnTu4vXHV3c%2FffFtWkb8AgHrxoez4mVGeEoxgut7Uy7rj5FPBpSwmKQTKOaOwUPcnR7WaSt0v6S29XzRZUUaoCC7DjmoeCMH33CPJoYdpMFtOnZj8MeePLgLkSdLw2afXdwflSWCzzdEMU%2B0E9cxm2cxyuAZrRY%2FJY9TrtMSie0iuf1A1ZDfh7%2FXcwhO22wAY6pgFBqlkYeQORdLH0kgY74dEBzDTOQ7i2Te99Z5KU27gBcy7eKUV6ddoUPPsu%2FGfwnd26Xidq3QoakPVR%2BmUefg1772%2FfO00LZYSDoj%2FNBndv%2FOes5NXiubnE0ZvoAW0tGzFhJ%2B0b9GYJ%2FdMy2b46SsFU2pMzf1lbwHLrsM36las1geIZvAQXdh4t9f1u6YbKpq%2BtO3wfQrs%2BVTibM4sBikE5DPrjh8jL&X-Amz-Signature=dbe54ff3fea049a438a86c6034a0c1ff617a0402b09b4b2f219969c39c1e4621&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6B4RZ6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgztQxx7ksJ4jRmBXkbN813k0hH1wVhNGCcXDL8hWc8AiBgIGpgwOHvMnP8hNDvIGsIwoQFGD1aAU0KT0bZdhSJWCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMS9RneBUONrGffn61KtwD1gJXNA6MVlZ6GHNUPtQ6VmLLwQ3Zj9Okzb0c0UOhrITbbjGtaEoAK1RHsGnRStdy78y8fV4Nnt6wJpjXEFKE2psqFMixvcWNg30%2B8PfOj6QVjAP%2F0kId2T2EYkwydbS97tw6YrgDRFJYVUKJcYOZLwqo2ARFwekJ2P7OGEIpuVAoqC9QHNk%2BEnHdTY4puaXvKRGNC9CC7Yv49F5Q%2Fz8X3hpbyrEIgywLEsFq9ejEztXbHiGdA5HjQZpO%2BplItKLPiI0le6j76mSNRDmgvO4BxFkQMFX3pXGV4hkSLbC0FIh%2BPhP5fpjHNn9ZzbSoezGXbX%2BlZqDTLG6yH45o6qGgnfLm0dvdCSxP7gzWfTK%2BWnnLv3xg8dOF%2FF8d8zH0NFBsGaBnHPKz7q4GuUKHZQvZBpk6Qc6BYD3xgHwDKrd2Lkc1Wlj7RqgIjK%2FY4h9O2KK5kwfnTu4vXHV3c%2FffFtWkb8AgHrxoez4mVGeEoxgut7Uy7rj5FPBpSwmKQTKOaOwUPcnR7WaSt0v6S29XzRZUUaoCC7DjmoeCMH33CPJoYdpMFtOnZj8MeePLgLkSdLw2afXdwflSWCzzdEMU%2B0E9cxm2cxyuAZrRY%2FJY9TrtMSie0iuf1A1ZDfh7%2FXcwhO22wAY6pgFBqlkYeQORdLH0kgY74dEBzDTOQ7i2Te99Z5KU27gBcy7eKUV6ddoUPPsu%2FGfwnd26Xidq3QoakPVR%2BmUefg1772%2FfO00LZYSDoj%2FNBndv%2FOes5NXiubnE0ZvoAW0tGzFhJ%2B0b9GYJ%2FdMy2b46SsFU2pMzf1lbwHLrsM36las1geIZvAQXdh4t9f1u6YbKpq%2BtO3wfQrs%2BVTibM4sBikE5DPrjh8jL&X-Amz-Signature=54c5a1185096d0f1ab5e9545bb2e66f9c413591c7eddd0a188c5206bd200aaf7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6B4RZ6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgztQxx7ksJ4jRmBXkbN813k0hH1wVhNGCcXDL8hWc8AiBgIGpgwOHvMnP8hNDvIGsIwoQFGD1aAU0KT0bZdhSJWCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMS9RneBUONrGffn61KtwD1gJXNA6MVlZ6GHNUPtQ6VmLLwQ3Zj9Okzb0c0UOhrITbbjGtaEoAK1RHsGnRStdy78y8fV4Nnt6wJpjXEFKE2psqFMixvcWNg30%2B8PfOj6QVjAP%2F0kId2T2EYkwydbS97tw6YrgDRFJYVUKJcYOZLwqo2ARFwekJ2P7OGEIpuVAoqC9QHNk%2BEnHdTY4puaXvKRGNC9CC7Yv49F5Q%2Fz8X3hpbyrEIgywLEsFq9ejEztXbHiGdA5HjQZpO%2BplItKLPiI0le6j76mSNRDmgvO4BxFkQMFX3pXGV4hkSLbC0FIh%2BPhP5fpjHNn9ZzbSoezGXbX%2BlZqDTLG6yH45o6qGgnfLm0dvdCSxP7gzWfTK%2BWnnLv3xg8dOF%2FF8d8zH0NFBsGaBnHPKz7q4GuUKHZQvZBpk6Qc6BYD3xgHwDKrd2Lkc1Wlj7RqgIjK%2FY4h9O2KK5kwfnTu4vXHV3c%2FffFtWkb8AgHrxoez4mVGeEoxgut7Uy7rj5FPBpSwmKQTKOaOwUPcnR7WaSt0v6S29XzRZUUaoCC7DjmoeCMH33CPJoYdpMFtOnZj8MeePLgLkSdLw2afXdwflSWCzzdEMU%2B0E9cxm2cxyuAZrRY%2FJY9TrtMSie0iuf1A1ZDfh7%2FXcwhO22wAY6pgFBqlkYeQORdLH0kgY74dEBzDTOQ7i2Te99Z5KU27gBcy7eKUV6ddoUPPsu%2FGfwnd26Xidq3QoakPVR%2BmUefg1772%2FfO00LZYSDoj%2FNBndv%2FOes5NXiubnE0ZvoAW0tGzFhJ%2B0b9GYJ%2FdMy2b46SsFU2pMzf1lbwHLrsM36las1geIZvAQXdh4t9f1u6YbKpq%2BtO3wfQrs%2BVTibM4sBikE5DPrjh8jL&X-Amz-Signature=a694ab6ccdcd9959b8aaaa601e5a925c4bc2b7845675ef6e3b9ffed836c6a4be&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
