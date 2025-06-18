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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUXV3YA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEsaUtxEmsYWIzoke9W8cMULDLaIGPgAQZfua9lRGPxQIhALkmzSf1rfOes%2FcpY1FA5QLoKTP84Vfjmus9i8vqWqt%2FKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIb%2B%2F9pBCa8wxkqQIq3ANLAFokQfz6iYn4atruqtq0U9cex1g%2FHmaLj2p3CQhjBPHfNVgSPeyAK8ZoZedPPdj36uaN5KuqZ8cMQDL%2FvvgAbLcoItmBxbibQuikEsFnEJ5iLf8ZLWNoG5LtoBlspenMiwILGrKu2561v2wrCJQ1N6lLOisbBREHdpWQ2Mtbea%2BFYm%2FLs61OnshBRLJkR%2BFpYtuPeAyddrYh1cPoKfQQajFL6Qv9G88K%2B8mmkWYd5N1xAr%2BwjtcEUHua3GGzBKFyrA2MhZCMUpKctzpr6rlPGDQvL0GkieZUbKIXhjBH37hUnDiT1b5x4mqPhXhc2xyFVyo0JnWUxmJp0Ke9eJeW1Hsk2FECgGLFCkjlIz4VHFx8GxyJvqMRFh%2BEC6HRiMAAU3uuZnb1ea9m7H8XnxQMFVb7YNnWqvLjlJ8ErkKe1AQIeQNwWGGMTcFeWxz%2FDdZGAxZtSKo5i4ytdtYzm4nqSxQlVEFk3GtCrLQUL7zXaSeP0VumLKwjVbbM82rCQwXaJaKUBD7fFx53v89i%2FTSdfbgm2OR1ZCLgYK6D1j4Lqnwt7szoenHdXj2BIk2C%2BfB1ru2AXk%2BX9q1zLclv3pYK7GooGhkjncdO8OgBQf%2Bh%2BYqxVK1OyHxk2%2FW6WzD77MfCBjqkAWK40XFo%2FqE4R7ppZWXqvICH6MUDkPKvCLBWu41Rj9A5E4AxAbf1Z7sDUwfAcXDk1rv%2B4RxAp7cGH8Pi4PtRLd0V%2BXbImw%2BGRMyC4QZB8NwzQuPAxcT4WuRhX3w7nJRFAUhpa5IqdYejQ0rvxNDFdDgraBpXh81twKgX0d%2FHe3wNqb7eSV35HCBlLHjpHLLwkpVidZ18YnPOD31BBQrPc9CKO8Vw&X-Amz-Signature=f94b4a09e019cfe757f6467424b024be157404284769489783319c0b48b69b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUXV3YA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEsaUtxEmsYWIzoke9W8cMULDLaIGPgAQZfua9lRGPxQIhALkmzSf1rfOes%2FcpY1FA5QLoKTP84Vfjmus9i8vqWqt%2FKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIb%2B%2F9pBCa8wxkqQIq3ANLAFokQfz6iYn4atruqtq0U9cex1g%2FHmaLj2p3CQhjBPHfNVgSPeyAK8ZoZedPPdj36uaN5KuqZ8cMQDL%2FvvgAbLcoItmBxbibQuikEsFnEJ5iLf8ZLWNoG5LtoBlspenMiwILGrKu2561v2wrCJQ1N6lLOisbBREHdpWQ2Mtbea%2BFYm%2FLs61OnshBRLJkR%2BFpYtuPeAyddrYh1cPoKfQQajFL6Qv9G88K%2B8mmkWYd5N1xAr%2BwjtcEUHua3GGzBKFyrA2MhZCMUpKctzpr6rlPGDQvL0GkieZUbKIXhjBH37hUnDiT1b5x4mqPhXhc2xyFVyo0JnWUxmJp0Ke9eJeW1Hsk2FECgGLFCkjlIz4VHFx8GxyJvqMRFh%2BEC6HRiMAAU3uuZnb1ea9m7H8XnxQMFVb7YNnWqvLjlJ8ErkKe1AQIeQNwWGGMTcFeWxz%2FDdZGAxZtSKo5i4ytdtYzm4nqSxQlVEFk3GtCrLQUL7zXaSeP0VumLKwjVbbM82rCQwXaJaKUBD7fFx53v89i%2FTSdfbgm2OR1ZCLgYK6D1j4Lqnwt7szoenHdXj2BIk2C%2BfB1ru2AXk%2BX9q1zLclv3pYK7GooGhkjncdO8OgBQf%2Bh%2BYqxVK1OyHxk2%2FW6WzD77MfCBjqkAWK40XFo%2FqE4R7ppZWXqvICH6MUDkPKvCLBWu41Rj9A5E4AxAbf1Z7sDUwfAcXDk1rv%2B4RxAp7cGH8Pi4PtRLd0V%2BXbImw%2BGRMyC4QZB8NwzQuPAxcT4WuRhX3w7nJRFAUhpa5IqdYejQ0rvxNDFdDgraBpXh81twKgX0d%2FHe3wNqb7eSV35HCBlLHjpHLLwkpVidZ18YnPOD31BBQrPc9CKO8Vw&X-Amz-Signature=fa1e3f5bb7ea58b40871fc27a48ee6a6915d958ccb919111d48eeac1e08920c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUXV3YA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEsaUtxEmsYWIzoke9W8cMULDLaIGPgAQZfua9lRGPxQIhALkmzSf1rfOes%2FcpY1FA5QLoKTP84Vfjmus9i8vqWqt%2FKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIb%2B%2F9pBCa8wxkqQIq3ANLAFokQfz6iYn4atruqtq0U9cex1g%2FHmaLj2p3CQhjBPHfNVgSPeyAK8ZoZedPPdj36uaN5KuqZ8cMQDL%2FvvgAbLcoItmBxbibQuikEsFnEJ5iLf8ZLWNoG5LtoBlspenMiwILGrKu2561v2wrCJQ1N6lLOisbBREHdpWQ2Mtbea%2BFYm%2FLs61OnshBRLJkR%2BFpYtuPeAyddrYh1cPoKfQQajFL6Qv9G88K%2B8mmkWYd5N1xAr%2BwjtcEUHua3GGzBKFyrA2MhZCMUpKctzpr6rlPGDQvL0GkieZUbKIXhjBH37hUnDiT1b5x4mqPhXhc2xyFVyo0JnWUxmJp0Ke9eJeW1Hsk2FECgGLFCkjlIz4VHFx8GxyJvqMRFh%2BEC6HRiMAAU3uuZnb1ea9m7H8XnxQMFVb7YNnWqvLjlJ8ErkKe1AQIeQNwWGGMTcFeWxz%2FDdZGAxZtSKo5i4ytdtYzm4nqSxQlVEFk3GtCrLQUL7zXaSeP0VumLKwjVbbM82rCQwXaJaKUBD7fFx53v89i%2FTSdfbgm2OR1ZCLgYK6D1j4Lqnwt7szoenHdXj2BIk2C%2BfB1ru2AXk%2BX9q1zLclv3pYK7GooGhkjncdO8OgBQf%2Bh%2BYqxVK1OyHxk2%2FW6WzD77MfCBjqkAWK40XFo%2FqE4R7ppZWXqvICH6MUDkPKvCLBWu41Rj9A5E4AxAbf1Z7sDUwfAcXDk1rv%2B4RxAp7cGH8Pi4PtRLd0V%2BXbImw%2BGRMyC4QZB8NwzQuPAxcT4WuRhX3w7nJRFAUhpa5IqdYejQ0rvxNDFdDgraBpXh81twKgX0d%2FHe3wNqb7eSV35HCBlLHjpHLLwkpVidZ18YnPOD31BBQrPc9CKO8Vw&X-Amz-Signature=e2a2804f726b3854ffedd001985f9e13b81a3dbca9053537fd0cf24d660693d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
