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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LDDTH4I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAGM7O5e2tlhusfpDm%2Fqmc4lM9hKFzSezZX%2BTN8TSkLAiEA6Q2iFkiCf6JRBpuv%2FzJLVyjrH1NeiwRK1s5FShxNe88qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzjZMp723vlyJqaUyrcAxIlAebPG5JMvnqssPYu2O9n3sr181vFjjPbPYfA51iBrE28nXShuXEzQYnhO6kNgBaVH1kncQL%2F2ACGEFi5NUVzt1Xi5RbPuUvV6nMaVPx8ZlCPrnEadv4wTgEjLGYG%2BmpJMtKpV97SJNLbwOI1ZuAvL26WnJMLg5UUUzNWqu%2FQity1P9yRTNY0%2FqXkE7MczsuOUIH%2B6FZH%2FrzoMnm2%2BlfNa6pOv1eIVds2IqWdnFaD6SGfECSdFAis5%2BwVIK4AyEmhv4Gw2wDWcCRXIFR%2FCU9SJwz095Ygglp6y3L0JvQsuraLiFsXYwvY%2BA9m38HKkUCN8lul%2Bhw%2B7gkLIyKvNQU7L%2Fxb49zIzwbZrUMN6SKhgYJd7%2BHLJQSkxL8NDTidehVf9AS9E5dqm76UguHxSfouGfb9TWGiieHLy2eChNAxNVFRvSZkQ03U%2BXizHHSM01tAb75%2BEiJbaA4WTk9foAFZkmcN7ZVBSErGVgZ3Aa3JD2f2V%2BGExMhj1eTjnI8lhNbXaiGfvJd8N5u1fr7RaSIXAmWzZ36Xqi3iq2AZFhiQ%2Bp6fSmuNPcgCs2WnmH%2BBazoqnsuyfG0wFOAYD%2FVkWwAfa9CcaOYd6Kg9K29xZ6vhtK9ndoH%2B2KOA3MqgMKnvr8QGOqUBOhh5bIGcYTXLVYaqNkpqhes6DBVyXHWNMmi2a1ddKPq90cow4y%2Bo3qL0HzfQ5dThiTOKC83C%2B7dO7wfaePqmfmvANTVh7ZiROLR%2BNYyCj%2BfUFZjKgsi96n%2BIJ1yAFPsekfKkDSzltBtYgyauTshoBnxMH%2BnMFbs1G0sty5wdR7xmenyXwzMI36%2FnqnQI6%2F%2FnRlvzG4IKanCS4495OuBKjDRrFWB1&X-Amz-Signature=81c17ba19282ba370dc266806cb240be88c2007c445856c5072dc0ac634fbff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LDDTH4I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAGM7O5e2tlhusfpDm%2Fqmc4lM9hKFzSezZX%2BTN8TSkLAiEA6Q2iFkiCf6JRBpuv%2FzJLVyjrH1NeiwRK1s5FShxNe88qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzjZMp723vlyJqaUyrcAxIlAebPG5JMvnqssPYu2O9n3sr181vFjjPbPYfA51iBrE28nXShuXEzQYnhO6kNgBaVH1kncQL%2F2ACGEFi5NUVzt1Xi5RbPuUvV6nMaVPx8ZlCPrnEadv4wTgEjLGYG%2BmpJMtKpV97SJNLbwOI1ZuAvL26WnJMLg5UUUzNWqu%2FQity1P9yRTNY0%2FqXkE7MczsuOUIH%2B6FZH%2FrzoMnm2%2BlfNa6pOv1eIVds2IqWdnFaD6SGfECSdFAis5%2BwVIK4AyEmhv4Gw2wDWcCRXIFR%2FCU9SJwz095Ygglp6y3L0JvQsuraLiFsXYwvY%2BA9m38HKkUCN8lul%2Bhw%2B7gkLIyKvNQU7L%2Fxb49zIzwbZrUMN6SKhgYJd7%2BHLJQSkxL8NDTidehVf9AS9E5dqm76UguHxSfouGfb9TWGiieHLy2eChNAxNVFRvSZkQ03U%2BXizHHSM01tAb75%2BEiJbaA4WTk9foAFZkmcN7ZVBSErGVgZ3Aa3JD2f2V%2BGExMhj1eTjnI8lhNbXaiGfvJd8N5u1fr7RaSIXAmWzZ36Xqi3iq2AZFhiQ%2Bp6fSmuNPcgCs2WnmH%2BBazoqnsuyfG0wFOAYD%2FVkWwAfa9CcaOYd6Kg9K29xZ6vhtK9ndoH%2B2KOA3MqgMKnvr8QGOqUBOhh5bIGcYTXLVYaqNkpqhes6DBVyXHWNMmi2a1ddKPq90cow4y%2Bo3qL0HzfQ5dThiTOKC83C%2B7dO7wfaePqmfmvANTVh7ZiROLR%2BNYyCj%2BfUFZjKgsi96n%2BIJ1yAFPsekfKkDSzltBtYgyauTshoBnxMH%2BnMFbs1G0sty5wdR7xmenyXwzMI36%2FnqnQI6%2F%2FnRlvzG4IKanCS4495OuBKjDRrFWB1&X-Amz-Signature=d14db6fc4c7d3c5feb0e040d4d702d18a2eeaefda0d431e6087f17f742de7973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LDDTH4I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAGM7O5e2tlhusfpDm%2Fqmc4lM9hKFzSezZX%2BTN8TSkLAiEA6Q2iFkiCf6JRBpuv%2FzJLVyjrH1NeiwRK1s5FShxNe88qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzjZMp723vlyJqaUyrcAxIlAebPG5JMvnqssPYu2O9n3sr181vFjjPbPYfA51iBrE28nXShuXEzQYnhO6kNgBaVH1kncQL%2F2ACGEFi5NUVzt1Xi5RbPuUvV6nMaVPx8ZlCPrnEadv4wTgEjLGYG%2BmpJMtKpV97SJNLbwOI1ZuAvL26WnJMLg5UUUzNWqu%2FQity1P9yRTNY0%2FqXkE7MczsuOUIH%2B6FZH%2FrzoMnm2%2BlfNa6pOv1eIVds2IqWdnFaD6SGfECSdFAis5%2BwVIK4AyEmhv4Gw2wDWcCRXIFR%2FCU9SJwz095Ygglp6y3L0JvQsuraLiFsXYwvY%2BA9m38HKkUCN8lul%2Bhw%2B7gkLIyKvNQU7L%2Fxb49zIzwbZrUMN6SKhgYJd7%2BHLJQSkxL8NDTidehVf9AS9E5dqm76UguHxSfouGfb9TWGiieHLy2eChNAxNVFRvSZkQ03U%2BXizHHSM01tAb75%2BEiJbaA4WTk9foAFZkmcN7ZVBSErGVgZ3Aa3JD2f2V%2BGExMhj1eTjnI8lhNbXaiGfvJd8N5u1fr7RaSIXAmWzZ36Xqi3iq2AZFhiQ%2Bp6fSmuNPcgCs2WnmH%2BBazoqnsuyfG0wFOAYD%2FVkWwAfa9CcaOYd6Kg9K29xZ6vhtK9ndoH%2B2KOA3MqgMKnvr8QGOqUBOhh5bIGcYTXLVYaqNkpqhes6DBVyXHWNMmi2a1ddKPq90cow4y%2Bo3qL0HzfQ5dThiTOKC83C%2B7dO7wfaePqmfmvANTVh7ZiROLR%2BNYyCj%2BfUFZjKgsi96n%2BIJ1yAFPsekfKkDSzltBtYgyauTshoBnxMH%2BnMFbs1G0sty5wdR7xmenyXwzMI36%2FnqnQI6%2F%2FnRlvzG4IKanCS4495OuBKjDRrFWB1&X-Amz-Signature=7babee81150163e1679020ab079d3f4c9aad6e6b95679e5aad0d23e025c20b0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
