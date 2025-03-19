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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS5PXCID%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIAFltGqsIyZJ2Y0FP5wN09z9Bzy1Xe8rrR7TIf8w7aGFAiEApXeUfhPg2Orfo53BqpC3C56u3S3URPHU8qhS54QMi%2FAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAKLgUrIhDMmooxSFCrcA%2BaGRgPA9o9RxE83DSIV%2Fuz3tiV9GNUhubcULfWhexvhY%2BbCzrYUXEpjjrStqL00MNTZ%2FdmJSIO9kEbQB%2F2psGOFiFoXraqbS04UTzbu6I5Ppe8abnsZmMVacjdUY0aGzRQhZQhATJniN5fXsZ%2F40DTFzZRv10CXX5dQ56W1KCsKkfIkIpsqa7QL6K%2BY8NpK3wWUYR%2Fn6zVpkFhBAKP3BFUQCAsl%2FmEDIQsysKq8UvApqNpsCGM9C9IwIvD33YaI4G%2BuxbrsYjy1V05xdPZyo63rMsf58%2F7f6bB0Q03p99Mi1Cf2KicqYwLeNZd9KuiJ4DDeoHJVgDu10E%2Ba3TXZATJykk9dxl80jRye%2FWf%2FldVXiGOzRI1Zv2XGcmUWOApR3fKi0V5pqkds%2B4ajYDgDRRnV1tdvr2nzb8Sn0Q6SN2cIjvFja4B5NMDXlRT9uhFonQ%2FUjBogBjqP9FZClEJ86miPz2Tk5hbqc5J7mfJ5KqtYFFVcdXQwBDPYsHtDR21vhm%2FYEyr93yCE%2BZx5c4fH4ptD8uQRYev08WUfSlRIaxF9uMLgf0GA%2Bz6LsSKiv0mJhYjJagRCXYND0W7FV99k8o3ScKaFxbLR9lUATypsP1M1lLcPXyYWEitihZR2MOv96L4GOqUB7ipxR0JCUqRb7KaSXI%2BC856XjgBMqyd%2FdzUH26WIpLO50Ao3gEEdLSVJFcRtj7A%2BGEtHZF%2Bgq%2Be3y6Mo7nmn2QeTCcZcH25NbywHIqPHMadlAN7FA5BIokxUhKz4HVIt%2FG1UBsCBVpm1WMJORNWZXZO49mF6wROQH%2FmHBX0hw9a0cg1peE1eRMPVNE9P2G0R%2FWreVIbB98M6ct52zB%2BOqCCUcqZb&X-Amz-Signature=b99fa9d15b1155466b6d9596d7b081aab00ccb3cf70cf30e9000982cd27a2d40&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS5PXCID%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIAFltGqsIyZJ2Y0FP5wN09z9Bzy1Xe8rrR7TIf8w7aGFAiEApXeUfhPg2Orfo53BqpC3C56u3S3URPHU8qhS54QMi%2FAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAKLgUrIhDMmooxSFCrcA%2BaGRgPA9o9RxE83DSIV%2Fuz3tiV9GNUhubcULfWhexvhY%2BbCzrYUXEpjjrStqL00MNTZ%2FdmJSIO9kEbQB%2F2psGOFiFoXraqbS04UTzbu6I5Ppe8abnsZmMVacjdUY0aGzRQhZQhATJniN5fXsZ%2F40DTFzZRv10CXX5dQ56W1KCsKkfIkIpsqa7QL6K%2BY8NpK3wWUYR%2Fn6zVpkFhBAKP3BFUQCAsl%2FmEDIQsysKq8UvApqNpsCGM9C9IwIvD33YaI4G%2BuxbrsYjy1V05xdPZyo63rMsf58%2F7f6bB0Q03p99Mi1Cf2KicqYwLeNZd9KuiJ4DDeoHJVgDu10E%2Ba3TXZATJykk9dxl80jRye%2FWf%2FldVXiGOzRI1Zv2XGcmUWOApR3fKi0V5pqkds%2B4ajYDgDRRnV1tdvr2nzb8Sn0Q6SN2cIjvFja4B5NMDXlRT9uhFonQ%2FUjBogBjqP9FZClEJ86miPz2Tk5hbqc5J7mfJ5KqtYFFVcdXQwBDPYsHtDR21vhm%2FYEyr93yCE%2BZx5c4fH4ptD8uQRYev08WUfSlRIaxF9uMLgf0GA%2Bz6LsSKiv0mJhYjJagRCXYND0W7FV99k8o3ScKaFxbLR9lUATypsP1M1lLcPXyYWEitihZR2MOv96L4GOqUB7ipxR0JCUqRb7KaSXI%2BC856XjgBMqyd%2FdzUH26WIpLO50Ao3gEEdLSVJFcRtj7A%2BGEtHZF%2Bgq%2Be3y6Mo7nmn2QeTCcZcH25NbywHIqPHMadlAN7FA5BIokxUhKz4HVIt%2FG1UBsCBVpm1WMJORNWZXZO49mF6wROQH%2FmHBX0hw9a0cg1peE1eRMPVNE9P2G0R%2FWreVIbB98M6ct52zB%2BOqCCUcqZb&X-Amz-Signature=5c3dc1a23f2be9aa1348b7484acfa9639d257ca2bada9b06bbd91866f15d3dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS5PXCID%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIAFltGqsIyZJ2Y0FP5wN09z9Bzy1Xe8rrR7TIf8w7aGFAiEApXeUfhPg2Orfo53BqpC3C56u3S3URPHU8qhS54QMi%2FAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAKLgUrIhDMmooxSFCrcA%2BaGRgPA9o9RxE83DSIV%2Fuz3tiV9GNUhubcULfWhexvhY%2BbCzrYUXEpjjrStqL00MNTZ%2FdmJSIO9kEbQB%2F2psGOFiFoXraqbS04UTzbu6I5Ppe8abnsZmMVacjdUY0aGzRQhZQhATJniN5fXsZ%2F40DTFzZRv10CXX5dQ56W1KCsKkfIkIpsqa7QL6K%2BY8NpK3wWUYR%2Fn6zVpkFhBAKP3BFUQCAsl%2FmEDIQsysKq8UvApqNpsCGM9C9IwIvD33YaI4G%2BuxbrsYjy1V05xdPZyo63rMsf58%2F7f6bB0Q03p99Mi1Cf2KicqYwLeNZd9KuiJ4DDeoHJVgDu10E%2Ba3TXZATJykk9dxl80jRye%2FWf%2FldVXiGOzRI1Zv2XGcmUWOApR3fKi0V5pqkds%2B4ajYDgDRRnV1tdvr2nzb8Sn0Q6SN2cIjvFja4B5NMDXlRT9uhFonQ%2FUjBogBjqP9FZClEJ86miPz2Tk5hbqc5J7mfJ5KqtYFFVcdXQwBDPYsHtDR21vhm%2FYEyr93yCE%2BZx5c4fH4ptD8uQRYev08WUfSlRIaxF9uMLgf0GA%2Bz6LsSKiv0mJhYjJagRCXYND0W7FV99k8o3ScKaFxbLR9lUATypsP1M1lLcPXyYWEitihZR2MOv96L4GOqUB7ipxR0JCUqRb7KaSXI%2BC856XjgBMqyd%2FdzUH26WIpLO50Ao3gEEdLSVJFcRtj7A%2BGEtHZF%2Bgq%2Be3y6Mo7nmn2QeTCcZcH25NbywHIqPHMadlAN7FA5BIokxUhKz4HVIt%2FG1UBsCBVpm1WMJORNWZXZO49mF6wROQH%2FmHBX0hw9a0cg1peE1eRMPVNE9P2G0R%2FWreVIbB98M6ct52zB%2BOqCCUcqZb&X-Amz-Signature=433a84c49331cae91148187b26ee95e7b86c8a06c716b7bfa0c7f1444454fd0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
