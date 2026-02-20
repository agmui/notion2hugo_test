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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3YSU5P%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHTfkIUvVJzyhH8QVHzw1phDoO5%2BroLs0ENOEcL9rKzQIhAK8RP5KbV2XCJNWmkus4YV4sBzx0rn6djhy2FPIWSVrfKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz742hZ05sNF2Yokawq3APnL34gy8mFRwOufEJjivouexlsHRxdnIOsOBHGh53t6eO5k5XWQQ%2BjfoWLXOX2nBRdAUA%2BjGOq0Cl6ULaCxUkKsE4T%2FtEHtnfUb644rAFP%2FQXYs5EKh5xBS6yYDzwwKfd4dVxaZKjY%2F1%2FWpuKn%2F%2B14R9HjRtM37uogGfwDDWinfqByKIXSQtoTyeaEnB887hRlar8k0pdvEeQrdaOfcNdN59sZ3dRWv9lT%2Fg7m9FAIzlwpLRc0ogGUXRwWETx1TQ9G1Ksa%2Fccxixrb6QYSwb5JNT6Xhkm6CZ%2BetxulXhURwdXY4Ze9kQpziGReCTnuiGeQOlfGDO9RvutETXzmQcuw2MvUVLwS6lCvo0mo5l23vcHLWYZjWJ786NZsPn42Za%2FBzogmH6IeTaLF8jevEi1ruuJBmIo5wRE2qNiEfErtNp1rdKOksLsLRtBPLV6BBF8ZtLcrOwAZVf%2FgnBGIUp0wdycw57hVnBiew2Mh6x6KeCfNOcuMEOAG5Fei90AiAFGl7wKH5xsDjQ8DQByMM1wpjcgcVCxBFIZF0%2BOzuk4imd4D3FUxNKVQzHKf4IFiXw3%2FiHmgHcNBaYid16Iyu3D5z9%2FxwRktEUh9S5SZtRvyVXCMmHe6X7r1DONDDTCi6d7MBjqkAW31iv%2BBu5NnMHfDbBHBpZic8c7bYIxNJJaMF5GphiaWc2xu7eCF%2BkS8LulRErj1S9mR8LBPS7WQrHVh6ypYJ6JThzRaFMpEzrZmqUBy2%2Bway6tlEYSdHdCT5T3kVrT0HTfbVqZARaQcMw34vKem%2FA1bnNdqMJ%2FkRGQ1w7p7RG6TfIJuW8Tvhb3F2lAKQ9BTIZMpGP%2FocT4zNOKypjR7vcJl5%2FBu&X-Amz-Signature=3550089c51d226d2017f699442298d07b6bc7d9fd4eae5899329b695ea4f3d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3YSU5P%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHTfkIUvVJzyhH8QVHzw1phDoO5%2BroLs0ENOEcL9rKzQIhAK8RP5KbV2XCJNWmkus4YV4sBzx0rn6djhy2FPIWSVrfKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz742hZ05sNF2Yokawq3APnL34gy8mFRwOufEJjivouexlsHRxdnIOsOBHGh53t6eO5k5XWQQ%2BjfoWLXOX2nBRdAUA%2BjGOq0Cl6ULaCxUkKsE4T%2FtEHtnfUb644rAFP%2FQXYs5EKh5xBS6yYDzwwKfd4dVxaZKjY%2F1%2FWpuKn%2F%2B14R9HjRtM37uogGfwDDWinfqByKIXSQtoTyeaEnB887hRlar8k0pdvEeQrdaOfcNdN59sZ3dRWv9lT%2Fg7m9FAIzlwpLRc0ogGUXRwWETx1TQ9G1Ksa%2Fccxixrb6QYSwb5JNT6Xhkm6CZ%2BetxulXhURwdXY4Ze9kQpziGReCTnuiGeQOlfGDO9RvutETXzmQcuw2MvUVLwS6lCvo0mo5l23vcHLWYZjWJ786NZsPn42Za%2FBzogmH6IeTaLF8jevEi1ruuJBmIo5wRE2qNiEfErtNp1rdKOksLsLRtBPLV6BBF8ZtLcrOwAZVf%2FgnBGIUp0wdycw57hVnBiew2Mh6x6KeCfNOcuMEOAG5Fei90AiAFGl7wKH5xsDjQ8DQByMM1wpjcgcVCxBFIZF0%2BOzuk4imd4D3FUxNKVQzHKf4IFiXw3%2FiHmgHcNBaYid16Iyu3D5z9%2FxwRktEUh9S5SZtRvyVXCMmHe6X7r1DONDDTCi6d7MBjqkAW31iv%2BBu5NnMHfDbBHBpZic8c7bYIxNJJaMF5GphiaWc2xu7eCF%2BkS8LulRErj1S9mR8LBPS7WQrHVh6ypYJ6JThzRaFMpEzrZmqUBy2%2Bway6tlEYSdHdCT5T3kVrT0HTfbVqZARaQcMw34vKem%2FA1bnNdqMJ%2FkRGQ1w7p7RG6TfIJuW8Tvhb3F2lAKQ9BTIZMpGP%2FocT4zNOKypjR7vcJl5%2FBu&X-Amz-Signature=10403c103e90ccba2f536336bfc263842918ace8f22f09feda1481551e9b1379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3YSU5P%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHTfkIUvVJzyhH8QVHzw1phDoO5%2BroLs0ENOEcL9rKzQIhAK8RP5KbV2XCJNWmkus4YV4sBzx0rn6djhy2FPIWSVrfKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz742hZ05sNF2Yokawq3APnL34gy8mFRwOufEJjivouexlsHRxdnIOsOBHGh53t6eO5k5XWQQ%2BjfoWLXOX2nBRdAUA%2BjGOq0Cl6ULaCxUkKsE4T%2FtEHtnfUb644rAFP%2FQXYs5EKh5xBS6yYDzwwKfd4dVxaZKjY%2F1%2FWpuKn%2F%2B14R9HjRtM37uogGfwDDWinfqByKIXSQtoTyeaEnB887hRlar8k0pdvEeQrdaOfcNdN59sZ3dRWv9lT%2Fg7m9FAIzlwpLRc0ogGUXRwWETx1TQ9G1Ksa%2Fccxixrb6QYSwb5JNT6Xhkm6CZ%2BetxulXhURwdXY4Ze9kQpziGReCTnuiGeQOlfGDO9RvutETXzmQcuw2MvUVLwS6lCvo0mo5l23vcHLWYZjWJ786NZsPn42Za%2FBzogmH6IeTaLF8jevEi1ruuJBmIo5wRE2qNiEfErtNp1rdKOksLsLRtBPLV6BBF8ZtLcrOwAZVf%2FgnBGIUp0wdycw57hVnBiew2Mh6x6KeCfNOcuMEOAG5Fei90AiAFGl7wKH5xsDjQ8DQByMM1wpjcgcVCxBFIZF0%2BOzuk4imd4D3FUxNKVQzHKf4IFiXw3%2FiHmgHcNBaYid16Iyu3D5z9%2FxwRktEUh9S5SZtRvyVXCMmHe6X7r1DONDDTCi6d7MBjqkAW31iv%2BBu5NnMHfDbBHBpZic8c7bYIxNJJaMF5GphiaWc2xu7eCF%2BkS8LulRErj1S9mR8LBPS7WQrHVh6ypYJ6JThzRaFMpEzrZmqUBy2%2Bway6tlEYSdHdCT5T3kVrT0HTfbVqZARaQcMw34vKem%2FA1bnNdqMJ%2FkRGQ1w7p7RG6TfIJuW8Tvhb3F2lAKQ9BTIZMpGP%2FocT4zNOKypjR7vcJl5%2FBu&X-Amz-Signature=12d456eda3d16bd01c533fa7a0d853b927ba1dcf93dda827e47dc90387b1698f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
