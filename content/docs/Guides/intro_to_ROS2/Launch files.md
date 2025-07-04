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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJN3TKO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFUpRI%2FuaU8tZ10goXzS1G6yr5AzjuuiPQymJj8CwRRFAiEAsknpWG%2FahbPSDWBIZtmPQXUpcRnkY08Hp25ZZb9208cq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOZfyDNn2McH0k67ZCrcA3R8IpdsXpj%2FnAsQHOY7ZsMimCp2PAL8CEefg1aT8iuL8YpJ5AoD8w%2FkbKMOtYDnnjpANgW6s78EyIKhf47tnGCCVcEMuBE5TYcv7QquLGmRHUNY4CjKgpUCfoHDPa3m4TTpgD3iMUg0G1HoynipOI08WOW3LojgRzvB%2F6XYEoR9XIJ00pEuomJ3Z6ZX3eKGrA1Wp2Hfx1mi5kMn9uk1d7J0EDFxJF%2BRf0hvsKLWwjegvEuztv7PI48sLNRoS983T%2B0KdjowRcOFBmcnXromP0jyeFpizptOHRc%2B6sks0i5qqD%2FS0vqWeKTs0FUYLeiyiQgnrn5BFZWCvfbVjDBzREVnoeEjF0dF1MOMftQ6zlwPMjnEBa0NGPhMzOynD6VGobaxm2Uw8jGLmCckZZPVsI4BSGgK9Dc5SKv3crvLkh6IpouH8g%2FbIJRNo6kZp9qXd0Wbotczz7gTDSp2RGqfWE9EUFxdpyYtD1DkfRAe92JqW4ZFyQGLTEi0%2FH%2Fu5D%2BA6TckvXX7dXFBCYjOEzsrbk%2BBfli9IN4eRQror%2F0PwpeT60Fmt1ir5PJa%2FHta%2BTMPWP2Lfg%2F2ue0alDe5i4YnBYtAAda%2BceRSQH9%2BWKutlwkkszknqf%2FRz83DXCOqMMuOncMGOqUBnFdzPKYKGJwuvM1jl3FBeCeu%2FA%2BBfj3QkT%2BcmKTML7ypH2y6HZ%2BT8gkiN87eo9uCsjTnzINrPk9OPC7Xg50nuqzDBkqORMB0MeKm69A%2FkvISFBPe2fVYtTwMIUrajtPLzGL4i%2FDsdOdTsd9%2FSHivcBQM9BEeg%2BDk468qQzeoCKcCRqFxsCnf8rP9Uwd4a4P9HqGbAx0lhPubWFjiVpvEDNUbt4kn&X-Amz-Signature=6c596b482bb294be26c27b68dd97b26d4f4ade3c6e6a712071a8d3d0a767f411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJN3TKO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFUpRI%2FuaU8tZ10goXzS1G6yr5AzjuuiPQymJj8CwRRFAiEAsknpWG%2FahbPSDWBIZtmPQXUpcRnkY08Hp25ZZb9208cq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOZfyDNn2McH0k67ZCrcA3R8IpdsXpj%2FnAsQHOY7ZsMimCp2PAL8CEefg1aT8iuL8YpJ5AoD8w%2FkbKMOtYDnnjpANgW6s78EyIKhf47tnGCCVcEMuBE5TYcv7QquLGmRHUNY4CjKgpUCfoHDPa3m4TTpgD3iMUg0G1HoynipOI08WOW3LojgRzvB%2F6XYEoR9XIJ00pEuomJ3Z6ZX3eKGrA1Wp2Hfx1mi5kMn9uk1d7J0EDFxJF%2BRf0hvsKLWwjegvEuztv7PI48sLNRoS983T%2B0KdjowRcOFBmcnXromP0jyeFpizptOHRc%2B6sks0i5qqD%2FS0vqWeKTs0FUYLeiyiQgnrn5BFZWCvfbVjDBzREVnoeEjF0dF1MOMftQ6zlwPMjnEBa0NGPhMzOynD6VGobaxm2Uw8jGLmCckZZPVsI4BSGgK9Dc5SKv3crvLkh6IpouH8g%2FbIJRNo6kZp9qXd0Wbotczz7gTDSp2RGqfWE9EUFxdpyYtD1DkfRAe92JqW4ZFyQGLTEi0%2FH%2Fu5D%2BA6TckvXX7dXFBCYjOEzsrbk%2BBfli9IN4eRQror%2F0PwpeT60Fmt1ir5PJa%2FHta%2BTMPWP2Lfg%2F2ue0alDe5i4YnBYtAAda%2BceRSQH9%2BWKutlwkkszknqf%2FRz83DXCOqMMuOncMGOqUBnFdzPKYKGJwuvM1jl3FBeCeu%2FA%2BBfj3QkT%2BcmKTML7ypH2y6HZ%2BT8gkiN87eo9uCsjTnzINrPk9OPC7Xg50nuqzDBkqORMB0MeKm69A%2FkvISFBPe2fVYtTwMIUrajtPLzGL4i%2FDsdOdTsd9%2FSHivcBQM9BEeg%2BDk468qQzeoCKcCRqFxsCnf8rP9Uwd4a4P9HqGbAx0lhPubWFjiVpvEDNUbt4kn&X-Amz-Signature=e07c14d78a7796c33777485810701b06630d832ff614d6a2120238a2f5d17e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJN3TKO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFUpRI%2FuaU8tZ10goXzS1G6yr5AzjuuiPQymJj8CwRRFAiEAsknpWG%2FahbPSDWBIZtmPQXUpcRnkY08Hp25ZZb9208cq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOZfyDNn2McH0k67ZCrcA3R8IpdsXpj%2FnAsQHOY7ZsMimCp2PAL8CEefg1aT8iuL8YpJ5AoD8w%2FkbKMOtYDnnjpANgW6s78EyIKhf47tnGCCVcEMuBE5TYcv7QquLGmRHUNY4CjKgpUCfoHDPa3m4TTpgD3iMUg0G1HoynipOI08WOW3LojgRzvB%2F6XYEoR9XIJ00pEuomJ3Z6ZX3eKGrA1Wp2Hfx1mi5kMn9uk1d7J0EDFxJF%2BRf0hvsKLWwjegvEuztv7PI48sLNRoS983T%2B0KdjowRcOFBmcnXromP0jyeFpizptOHRc%2B6sks0i5qqD%2FS0vqWeKTs0FUYLeiyiQgnrn5BFZWCvfbVjDBzREVnoeEjF0dF1MOMftQ6zlwPMjnEBa0NGPhMzOynD6VGobaxm2Uw8jGLmCckZZPVsI4BSGgK9Dc5SKv3crvLkh6IpouH8g%2FbIJRNo6kZp9qXd0Wbotczz7gTDSp2RGqfWE9EUFxdpyYtD1DkfRAe92JqW4ZFyQGLTEi0%2FH%2Fu5D%2BA6TckvXX7dXFBCYjOEzsrbk%2BBfli9IN4eRQror%2F0PwpeT60Fmt1ir5PJa%2FHta%2BTMPWP2Lfg%2F2ue0alDe5i4YnBYtAAda%2BceRSQH9%2BWKutlwkkszknqf%2FRz83DXCOqMMuOncMGOqUBnFdzPKYKGJwuvM1jl3FBeCeu%2FA%2BBfj3QkT%2BcmKTML7ypH2y6HZ%2BT8gkiN87eo9uCsjTnzINrPk9OPC7Xg50nuqzDBkqORMB0MeKm69A%2FkvISFBPe2fVYtTwMIUrajtPLzGL4i%2FDsdOdTsd9%2FSHivcBQM9BEeg%2BDk468qQzeoCKcCRqFxsCnf8rP9Uwd4a4P9HqGbAx0lhPubWFjiVpvEDNUbt4kn&X-Amz-Signature=d6a106a7ac25f0d4aa2a042832e9c3c84669a3f292c4b11ec41e4622f6652f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
