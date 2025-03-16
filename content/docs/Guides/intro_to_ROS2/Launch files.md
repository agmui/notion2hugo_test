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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDNM6UTM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAurhjX4NHR8VzWL2BmA6UhBW4Te1MbBcDMJfQGEGFldAiBvQhOapX2kM11cKrgVMhqzfgGt2IRElOaCktYvdAILHir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMS9VqwruYkpoMbCuVKtwDaOYzJesx3zJPwf4YiQ2HQyzLB33KM3VMA26MWGvKFc%2B%2FIzKpiMOMjt9DfVofsVZcxMUWLxwEczTouqwt7oacJUfwIsE5yWT4280UamsfeiPNBR7y18rY0MTcY58JvcB5tmwpZc23rLHBeQNhekPp5gdFCi06vW9AplCkrXBBDtlsry8vdoaP7JB6Qumd22s%2FZTihJTIEAnE6zj0CWzO%2B5kGUHjBAAIh5R25JQyTARBqpZf%2FOdEgnASSi8yNQDPlKJTArTbjCxIOimp3b5hvV5Vl38QPrTY691SymGo5y7gFghw5bICLvKVHYKhq7zo0C%2Bco6zjCW%2FFdONWT03GkM%2BGMfNnNEw8t3U0Bie1rVZDJv4zw6lqYIefjdpQojy5A%2FtegqrkMOXj4r9NgFy%2FO0L5jL%2BCBf9PO%2BN2axXBpg1MetILs0pE9vbTBqWOwfseXePAYOtmIQnpxP75u0K3lA62rMPWdHJHbb0cRTq7Rgg5XvPduNFsgDgMXFf6M%2BN7NwadV%2B20UWgz6ZrJEVvNFHQRB06aL%2FLnhKKT90b4qTzarfu%2BfNg7HNnMC8FRiKnx0ZIMMWFKQxIiHSlQ5kWfCeUwlNC61hVMrD2J4M4Axq1Expjb%2FfbCWUMNDIT%2F4w%2BL3bvgY6pgGgNi8rLvap38e%2FbgIU7e2aTRMRUFTsiQdz111W%2B29RyMkO2KtSpEJdXVknzoV5oiiPt1YdFB4ki6%2FDzT%2FA930Q3eX0rWVtMjOjntc7rwKo0ldkKJCnpUOG8lI47V8sdMyMlOvyO4O72i7ZmfY5HpTSBr0PJFEwvWAVEqutow7k5yjMBckKzqpMI8RGNMbV4jDtd2UqKvVh4gbsLwcqR3S5hQg2m8vR&X-Amz-Signature=5fafe1a85424b9c4b531d28dc22d598260ab84f281b176e462cca153c593e9e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDNM6UTM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAurhjX4NHR8VzWL2BmA6UhBW4Te1MbBcDMJfQGEGFldAiBvQhOapX2kM11cKrgVMhqzfgGt2IRElOaCktYvdAILHir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMS9VqwruYkpoMbCuVKtwDaOYzJesx3zJPwf4YiQ2HQyzLB33KM3VMA26MWGvKFc%2B%2FIzKpiMOMjt9DfVofsVZcxMUWLxwEczTouqwt7oacJUfwIsE5yWT4280UamsfeiPNBR7y18rY0MTcY58JvcB5tmwpZc23rLHBeQNhekPp5gdFCi06vW9AplCkrXBBDtlsry8vdoaP7JB6Qumd22s%2FZTihJTIEAnE6zj0CWzO%2B5kGUHjBAAIh5R25JQyTARBqpZf%2FOdEgnASSi8yNQDPlKJTArTbjCxIOimp3b5hvV5Vl38QPrTY691SymGo5y7gFghw5bICLvKVHYKhq7zo0C%2Bco6zjCW%2FFdONWT03GkM%2BGMfNnNEw8t3U0Bie1rVZDJv4zw6lqYIefjdpQojy5A%2FtegqrkMOXj4r9NgFy%2FO0L5jL%2BCBf9PO%2BN2axXBpg1MetILs0pE9vbTBqWOwfseXePAYOtmIQnpxP75u0K3lA62rMPWdHJHbb0cRTq7Rgg5XvPduNFsgDgMXFf6M%2BN7NwadV%2B20UWgz6ZrJEVvNFHQRB06aL%2FLnhKKT90b4qTzarfu%2BfNg7HNnMC8FRiKnx0ZIMMWFKQxIiHSlQ5kWfCeUwlNC61hVMrD2J4M4Axq1Expjb%2FfbCWUMNDIT%2F4w%2BL3bvgY6pgGgNi8rLvap38e%2FbgIU7e2aTRMRUFTsiQdz111W%2B29RyMkO2KtSpEJdXVknzoV5oiiPt1YdFB4ki6%2FDzT%2FA930Q3eX0rWVtMjOjntc7rwKo0ldkKJCnpUOG8lI47V8sdMyMlOvyO4O72i7ZmfY5HpTSBr0PJFEwvWAVEqutow7k5yjMBckKzqpMI8RGNMbV4jDtd2UqKvVh4gbsLwcqR3S5hQg2m8vR&X-Amz-Signature=59fa6b958029ebd7a4fc5608312e645e31893698ca48e6596d4f38cb3227dbb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDNM6UTM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAurhjX4NHR8VzWL2BmA6UhBW4Te1MbBcDMJfQGEGFldAiBvQhOapX2kM11cKrgVMhqzfgGt2IRElOaCktYvdAILHir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMS9VqwruYkpoMbCuVKtwDaOYzJesx3zJPwf4YiQ2HQyzLB33KM3VMA26MWGvKFc%2B%2FIzKpiMOMjt9DfVofsVZcxMUWLxwEczTouqwt7oacJUfwIsE5yWT4280UamsfeiPNBR7y18rY0MTcY58JvcB5tmwpZc23rLHBeQNhekPp5gdFCi06vW9AplCkrXBBDtlsry8vdoaP7JB6Qumd22s%2FZTihJTIEAnE6zj0CWzO%2B5kGUHjBAAIh5R25JQyTARBqpZf%2FOdEgnASSi8yNQDPlKJTArTbjCxIOimp3b5hvV5Vl38QPrTY691SymGo5y7gFghw5bICLvKVHYKhq7zo0C%2Bco6zjCW%2FFdONWT03GkM%2BGMfNnNEw8t3U0Bie1rVZDJv4zw6lqYIefjdpQojy5A%2FtegqrkMOXj4r9NgFy%2FO0L5jL%2BCBf9PO%2BN2axXBpg1MetILs0pE9vbTBqWOwfseXePAYOtmIQnpxP75u0K3lA62rMPWdHJHbb0cRTq7Rgg5XvPduNFsgDgMXFf6M%2BN7NwadV%2B20UWgz6ZrJEVvNFHQRB06aL%2FLnhKKT90b4qTzarfu%2BfNg7HNnMC8FRiKnx0ZIMMWFKQxIiHSlQ5kWfCeUwlNC61hVMrD2J4M4Axq1Expjb%2FfbCWUMNDIT%2F4w%2BL3bvgY6pgGgNi8rLvap38e%2FbgIU7e2aTRMRUFTsiQdz111W%2B29RyMkO2KtSpEJdXVknzoV5oiiPt1YdFB4ki6%2FDzT%2FA930Q3eX0rWVtMjOjntc7rwKo0ldkKJCnpUOG8lI47V8sdMyMlOvyO4O72i7ZmfY5HpTSBr0PJFEwvWAVEqutow7k5yjMBckKzqpMI8RGNMbV4jDtd2UqKvVh4gbsLwcqR3S5hQg2m8vR&X-Amz-Signature=8c96d44ac3c9b0deb996a8c48c03eb05905ec4af5499b900914cfe9f4dd4d586&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
