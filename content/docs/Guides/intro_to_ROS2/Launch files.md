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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNG757D%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpmb2XQvIdqxHtea00aj4H%2BxtLg3HfBOFS2dQ2sG5haAiAqeCfUa92EjITRQ32ogCJYs83Wuuth837g%2FWfQ5Z44EyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIqcg5FQ8vXNPCoQKtwDnCyFAgs3d628MiHj66SsQuvyOJvzzLTWpfTNmbnQiNITNqZJION%2FjLA3JjCXG30CVOYOYiNHvhUNM20o6JjM9mFhLNsVKexQ%2BdD9%2FeqwnZdvUa5yiigucfV5N1YtM3rcjHC7qrlkZprejMCVG%2Bw5wtwEa8zfXbDZFJMap4tKXnFC0ofNu%2FKj1gB8cKAHxqDc6JuFb6BEoprefiYgFtJRR5ymI5WgbmCPXalJ1RzgNdvTVzCpKWUWPMImucfNk0mpqSjE%2F4U%2Bb6b9ghvz5LT3TpkJ0rBdl31XZKl0FOcuGGISPCBktcxWEqfwG%2FKYL7YEAyXswggefkRrVC2fteDPbIh4ISEX%2BCdebOyRCm5LcQX02MFdhJO8jsShkz0HLASFS%2BTcToUJRpMCZDJgxWiwjthbEvqvgfS5bClGRjebip2%2F8DPyDNFVYGiKjjmG2LT6EAxVbH6fdWChJl38ft3HjAOWLoOPcOflqou3M1zB2m7DAXCaaU4Y19rBkOIqSLcWEz2ZMTgsQw4I8M7SdzoZoIf3xsMxH8FKffYPvBdB9k7GmcIH5LULkyUZKYILc55aaMMBQz8%2Bux5JuRpU%2FjnbMiZvK3hDFKqgs12ycA6O%2BSQc7MGzyf33%2FKEIh4YwtrPWwgY6pgGUhl3xliA1gJ9YzVKKxU5sccA8%2FC1CYuRNn6rBq0l7wjl%2FIfLYYPrNgIHq32dL7D3ylRXj7Mx5HvENGJnZz8PGkxjAjOrWrP17Xx2Nbyw46mPY0YIRxZwlf3sn6o%2FGPFqiWjgQ%2B1HXvJLQDJ6dahJbQCcwF%2BlYItxYN3BlXcx5KFWA53f0qq%2FaMuG%2BmWhcGCO25FugX6LnbrW05aeeZNJ7XgSEqvHL&X-Amz-Signature=205d2a3a82d1b8d8db8ef7e59f005412c86d559c127e715d1174cd992f04813f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNG757D%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpmb2XQvIdqxHtea00aj4H%2BxtLg3HfBOFS2dQ2sG5haAiAqeCfUa92EjITRQ32ogCJYs83Wuuth837g%2FWfQ5Z44EyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIqcg5FQ8vXNPCoQKtwDnCyFAgs3d628MiHj66SsQuvyOJvzzLTWpfTNmbnQiNITNqZJION%2FjLA3JjCXG30CVOYOYiNHvhUNM20o6JjM9mFhLNsVKexQ%2BdD9%2FeqwnZdvUa5yiigucfV5N1YtM3rcjHC7qrlkZprejMCVG%2Bw5wtwEa8zfXbDZFJMap4tKXnFC0ofNu%2FKj1gB8cKAHxqDc6JuFb6BEoprefiYgFtJRR5ymI5WgbmCPXalJ1RzgNdvTVzCpKWUWPMImucfNk0mpqSjE%2F4U%2Bb6b9ghvz5LT3TpkJ0rBdl31XZKl0FOcuGGISPCBktcxWEqfwG%2FKYL7YEAyXswggefkRrVC2fteDPbIh4ISEX%2BCdebOyRCm5LcQX02MFdhJO8jsShkz0HLASFS%2BTcToUJRpMCZDJgxWiwjthbEvqvgfS5bClGRjebip2%2F8DPyDNFVYGiKjjmG2LT6EAxVbH6fdWChJl38ft3HjAOWLoOPcOflqou3M1zB2m7DAXCaaU4Y19rBkOIqSLcWEz2ZMTgsQw4I8M7SdzoZoIf3xsMxH8FKffYPvBdB9k7GmcIH5LULkyUZKYILc55aaMMBQz8%2Bux5JuRpU%2FjnbMiZvK3hDFKqgs12ycA6O%2BSQc7MGzyf33%2FKEIh4YwtrPWwgY6pgGUhl3xliA1gJ9YzVKKxU5sccA8%2FC1CYuRNn6rBq0l7wjl%2FIfLYYPrNgIHq32dL7D3ylRXj7Mx5HvENGJnZz8PGkxjAjOrWrP17Xx2Nbyw46mPY0YIRxZwlf3sn6o%2FGPFqiWjgQ%2B1HXvJLQDJ6dahJbQCcwF%2BlYItxYN3BlXcx5KFWA53f0qq%2FaMuG%2BmWhcGCO25FugX6LnbrW05aeeZNJ7XgSEqvHL&X-Amz-Signature=e1ea6ce64325ae906e3f42ebf2e3b3a961e9fd6782ffac68f19de557c9699feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNG757D%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpmb2XQvIdqxHtea00aj4H%2BxtLg3HfBOFS2dQ2sG5haAiAqeCfUa92EjITRQ32ogCJYs83Wuuth837g%2FWfQ5Z44EyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDIqcg5FQ8vXNPCoQKtwDnCyFAgs3d628MiHj66SsQuvyOJvzzLTWpfTNmbnQiNITNqZJION%2FjLA3JjCXG30CVOYOYiNHvhUNM20o6JjM9mFhLNsVKexQ%2BdD9%2FeqwnZdvUa5yiigucfV5N1YtM3rcjHC7qrlkZprejMCVG%2Bw5wtwEa8zfXbDZFJMap4tKXnFC0ofNu%2FKj1gB8cKAHxqDc6JuFb6BEoprefiYgFtJRR5ymI5WgbmCPXalJ1RzgNdvTVzCpKWUWPMImucfNk0mpqSjE%2F4U%2Bb6b9ghvz5LT3TpkJ0rBdl31XZKl0FOcuGGISPCBktcxWEqfwG%2FKYL7YEAyXswggefkRrVC2fteDPbIh4ISEX%2BCdebOyRCm5LcQX02MFdhJO8jsShkz0HLASFS%2BTcToUJRpMCZDJgxWiwjthbEvqvgfS5bClGRjebip2%2F8DPyDNFVYGiKjjmG2LT6EAxVbH6fdWChJl38ft3HjAOWLoOPcOflqou3M1zB2m7DAXCaaU4Y19rBkOIqSLcWEz2ZMTgsQw4I8M7SdzoZoIf3xsMxH8FKffYPvBdB9k7GmcIH5LULkyUZKYILc55aaMMBQz8%2Bux5JuRpU%2FjnbMiZvK3hDFKqgs12ycA6O%2BSQc7MGzyf33%2FKEIh4YwtrPWwgY6pgGUhl3xliA1gJ9YzVKKxU5sccA8%2FC1CYuRNn6rBq0l7wjl%2FIfLYYPrNgIHq32dL7D3ylRXj7Mx5HvENGJnZz8PGkxjAjOrWrP17Xx2Nbyw46mPY0YIRxZwlf3sn6o%2FGPFqiWjgQ%2B1HXvJLQDJ6dahJbQCcwF%2BlYItxYN3BlXcx5KFWA53f0qq%2FaMuG%2BmWhcGCO25FugX6LnbrW05aeeZNJ7XgSEqvHL&X-Amz-Signature=e6f3d8c880eae03e9751860bfd062ee162a839e8a6a5f30a2550e9e83e662ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
