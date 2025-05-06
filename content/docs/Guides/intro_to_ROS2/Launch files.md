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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTUFBYK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrBwkcf0Ov3Ntpav%2FKKor06k9KDWUQFxIVErGD9cz5nAiEAmD62Jn5YkgaNEu5i0i39WZATTePVjc96F6ZPzOqxWBEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNgRTiQkggWZiU3NMircA93pkiSxnY76gn6qXmfRBDP5DlLicRBnSGWARaMIjGIYClfz4PS1GZ%2Fz0cliznWzJNlh7mj%2BRo8paT3vU0vYSIhW6Mh%2FkXmQ7fAileWqiHQz%2FJk1MWE8NlwFvt8mF9g2PXo%2FMHnSxdNmQnZ5UN15h0W2RiWgJfcxVr2wjIaRtKMU%2B4fRCVqGFBK84vgo8g2YANHWUxGIilSGrayMvMjDb8vBAWBmz7XCB3ecpuMv780T9JAQgUTcXECP9x6z493mloOiaXZDzAmoeZhVr8BfoXXJJ%2BgaP%2Fev4XjGgMwk5aRlvwAZwMY8Lpx4jQWKvP%2FqcF8RwDzo7DlARVFW%2B%2F16LTh18Fs84OJ8j9U3wBl1t8Ty82Giz276vUjvpo7vT%2FzYA39UH2H7NSKoAiUMQE%2FdqkE%2FOCY0k1jgFPDiaDksAlcQ4Kh1YO2QMfE%2B4xH%2FfNCllDjofXxuYYH6fBc97uo1%2FmNfkEdJc8AizrG7p2dLuFuKn9YMWdbdvaAMNToWCBAqmCN%2BoiMp7hkzpfITXAnGckNy16nRPcTfOnRSsJiPm4dLjXQ7mcF0VWvHXkSc8cudYbr7jFE4CUY4bJ2E0QDPY1FUu13eeTzkjmLm%2B%2B42KiCVlw2TlbgVRlyxa9rbMJG06cAGOqUBwYaIHOyLZzqBQALFSTqdIYdFMiuLHULS5xSkuw7Fn1tZtK9cub3aXWnRuBO%2BdtCYrtNtAsbnHmNruczHQDlWUcbwsiegRjkK6heoG%2Fw5zPV679HiqN1mmAtUZvTJaiVSwiQoPbu0F0dSxOJShE3zVwvyyVX1gJDLLwJ%2FUNzes1ndwJo3iRZXjF9hl5hJ%2BZM2rqu5b1c0IHdILpnmlh48cdap1BTz&X-Amz-Signature=d803db9f4d8019ceee0cb33fd145abd21f4c5eadecd3fbdbe4849e34d366b58f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTUFBYK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrBwkcf0Ov3Ntpav%2FKKor06k9KDWUQFxIVErGD9cz5nAiEAmD62Jn5YkgaNEu5i0i39WZATTePVjc96F6ZPzOqxWBEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNgRTiQkggWZiU3NMircA93pkiSxnY76gn6qXmfRBDP5DlLicRBnSGWARaMIjGIYClfz4PS1GZ%2Fz0cliznWzJNlh7mj%2BRo8paT3vU0vYSIhW6Mh%2FkXmQ7fAileWqiHQz%2FJk1MWE8NlwFvt8mF9g2PXo%2FMHnSxdNmQnZ5UN15h0W2RiWgJfcxVr2wjIaRtKMU%2B4fRCVqGFBK84vgo8g2YANHWUxGIilSGrayMvMjDb8vBAWBmz7XCB3ecpuMv780T9JAQgUTcXECP9x6z493mloOiaXZDzAmoeZhVr8BfoXXJJ%2BgaP%2Fev4XjGgMwk5aRlvwAZwMY8Lpx4jQWKvP%2FqcF8RwDzo7DlARVFW%2B%2F16LTh18Fs84OJ8j9U3wBl1t8Ty82Giz276vUjvpo7vT%2FzYA39UH2H7NSKoAiUMQE%2FdqkE%2FOCY0k1jgFPDiaDksAlcQ4Kh1YO2QMfE%2B4xH%2FfNCllDjofXxuYYH6fBc97uo1%2FmNfkEdJc8AizrG7p2dLuFuKn9YMWdbdvaAMNToWCBAqmCN%2BoiMp7hkzpfITXAnGckNy16nRPcTfOnRSsJiPm4dLjXQ7mcF0VWvHXkSc8cudYbr7jFE4CUY4bJ2E0QDPY1FUu13eeTzkjmLm%2B%2B42KiCVlw2TlbgVRlyxa9rbMJG06cAGOqUBwYaIHOyLZzqBQALFSTqdIYdFMiuLHULS5xSkuw7Fn1tZtK9cub3aXWnRuBO%2BdtCYrtNtAsbnHmNruczHQDlWUcbwsiegRjkK6heoG%2Fw5zPV679HiqN1mmAtUZvTJaiVSwiQoPbu0F0dSxOJShE3zVwvyyVX1gJDLLwJ%2FUNzes1ndwJo3iRZXjF9hl5hJ%2BZM2rqu5b1c0IHdILpnmlh48cdap1BTz&X-Amz-Signature=627754f7f3618fddd5a8d8fa4c4d1887a2f947f1479d865031a01156c6337ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTUFBYK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrBwkcf0Ov3Ntpav%2FKKor06k9KDWUQFxIVErGD9cz5nAiEAmD62Jn5YkgaNEu5i0i39WZATTePVjc96F6ZPzOqxWBEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNgRTiQkggWZiU3NMircA93pkiSxnY76gn6qXmfRBDP5DlLicRBnSGWARaMIjGIYClfz4PS1GZ%2Fz0cliznWzJNlh7mj%2BRo8paT3vU0vYSIhW6Mh%2FkXmQ7fAileWqiHQz%2FJk1MWE8NlwFvt8mF9g2PXo%2FMHnSxdNmQnZ5UN15h0W2RiWgJfcxVr2wjIaRtKMU%2B4fRCVqGFBK84vgo8g2YANHWUxGIilSGrayMvMjDb8vBAWBmz7XCB3ecpuMv780T9JAQgUTcXECP9x6z493mloOiaXZDzAmoeZhVr8BfoXXJJ%2BgaP%2Fev4XjGgMwk5aRlvwAZwMY8Lpx4jQWKvP%2FqcF8RwDzo7DlARVFW%2B%2F16LTh18Fs84OJ8j9U3wBl1t8Ty82Giz276vUjvpo7vT%2FzYA39UH2H7NSKoAiUMQE%2FdqkE%2FOCY0k1jgFPDiaDksAlcQ4Kh1YO2QMfE%2B4xH%2FfNCllDjofXxuYYH6fBc97uo1%2FmNfkEdJc8AizrG7p2dLuFuKn9YMWdbdvaAMNToWCBAqmCN%2BoiMp7hkzpfITXAnGckNy16nRPcTfOnRSsJiPm4dLjXQ7mcF0VWvHXkSc8cudYbr7jFE4CUY4bJ2E0QDPY1FUu13eeTzkjmLm%2B%2B42KiCVlw2TlbgVRlyxa9rbMJG06cAGOqUBwYaIHOyLZzqBQALFSTqdIYdFMiuLHULS5xSkuw7Fn1tZtK9cub3aXWnRuBO%2BdtCYrtNtAsbnHmNruczHQDlWUcbwsiegRjkK6heoG%2Fw5zPV679HiqN1mmAtUZvTJaiVSwiQoPbu0F0dSxOJShE3zVwvyyVX1gJDLLwJ%2FUNzes1ndwJo3iRZXjF9hl5hJ%2BZM2rqu5b1c0IHdILpnmlh48cdap1BTz&X-Amz-Signature=c1254971a010783adc5b519eb9ecca4c0b0c46368601f218c1bf6db7c4b0584d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
