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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKX3SRE%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAECpiElAVe6Pdic4NuoKrLEXBMJYZFku1HMJhl6cmD6AiEAmUagkTZt1BaY5XP7LtPV7VqTk6yUTvjun0wm%2BrQ0PQUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUafN9raWwXLV6swCrcA0CJmNFfMOgxUC9O9aPPb%2BPLrMVjiHKNbO6RXR0WcYW%2BmB4lcOQoL%2FSXOb76IQrIa%2BG722%2FZV2bHaxNsaDauwiWJFF4hMfOPV7cHYJcFKv2MvzbVpFvSsVfk0cWe%2FkO%2BW9%2FYDNzxd415kdiiUzvzkQ1zPEKuMQEEEg0ngNYkYS9LcNcdpmv%2FsDkrpsbKwOCunJnXVaPKID6GtjM4i2%2B7pqE0y7R6sS3Q%2BWsAXjK%2BkwszVQUFh7V7sh8qu0uJerXgCxz56oFCpV03MU43%2FanzPa8FIRY97fs5YyTaIWbNjEs6C0zsiBcJ%2Fn4lhSDu7LJ9OEmdDKOZJ2KcAFeGHMTALf2v08J15LBU3i9oen1lLkClFu9kanLUBO556TP20PeXvlcrMVZO2G98ebk5RmPPjo4krLrUjWVaGmym4xAI2oiP1yp8qOhM8pDIanL5QVJcP825Mh27LzGtZD89ntkp8WUr2vQ5hGNqE%2BYjgJgYBxN%2FdumMkkdTnYLe%2FeH3IhSyWDptgiSBHmQzoibiyoz90jOsmmW7hr8fQ7ym8V5hQXtg7INdaM4rM0PCxy%2FOwrmFhbKoyTA3KjfP62VZRxeylh0GH7kMxRV2fsZ0RkkTKog%2F1OE2YtWBVRh7%2FfmaMIPy2sIGOqUBa29VF3T%2Fdqg%2FRvEC84%2FjbHIUB6D%2B9kvBuiB4h5%2F458%2BeDB24L8iYZvQdCmhM3yI9bkhb1mqNmCsD7NtiWD2kq3IVnuR0hGR9kkgqJAc0wRyqokPW2HFhBUFi%2FrXAV%2B9mqN35VW0dYyLnX7g0fhIub1Jqs8IRnsEhSGPp2hkchf3FhkA%2FSoOJz4D1oqFblpwiGBoRET8lG0wYXM4hO3Kt9g1qe54A&X-Amz-Signature=d0b8a2b6a008ee5a38ff4eddfb3da85c1421b85d948411b772438495f5cc82db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKX3SRE%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAECpiElAVe6Pdic4NuoKrLEXBMJYZFku1HMJhl6cmD6AiEAmUagkTZt1BaY5XP7LtPV7VqTk6yUTvjun0wm%2BrQ0PQUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUafN9raWwXLV6swCrcA0CJmNFfMOgxUC9O9aPPb%2BPLrMVjiHKNbO6RXR0WcYW%2BmB4lcOQoL%2FSXOb76IQrIa%2BG722%2FZV2bHaxNsaDauwiWJFF4hMfOPV7cHYJcFKv2MvzbVpFvSsVfk0cWe%2FkO%2BW9%2FYDNzxd415kdiiUzvzkQ1zPEKuMQEEEg0ngNYkYS9LcNcdpmv%2FsDkrpsbKwOCunJnXVaPKID6GtjM4i2%2B7pqE0y7R6sS3Q%2BWsAXjK%2BkwszVQUFh7V7sh8qu0uJerXgCxz56oFCpV03MU43%2FanzPa8FIRY97fs5YyTaIWbNjEs6C0zsiBcJ%2Fn4lhSDu7LJ9OEmdDKOZJ2KcAFeGHMTALf2v08J15LBU3i9oen1lLkClFu9kanLUBO556TP20PeXvlcrMVZO2G98ebk5RmPPjo4krLrUjWVaGmym4xAI2oiP1yp8qOhM8pDIanL5QVJcP825Mh27LzGtZD89ntkp8WUr2vQ5hGNqE%2BYjgJgYBxN%2FdumMkkdTnYLe%2FeH3IhSyWDptgiSBHmQzoibiyoz90jOsmmW7hr8fQ7ym8V5hQXtg7INdaM4rM0PCxy%2FOwrmFhbKoyTA3KjfP62VZRxeylh0GH7kMxRV2fsZ0RkkTKog%2F1OE2YtWBVRh7%2FfmaMIPy2sIGOqUBa29VF3T%2Fdqg%2FRvEC84%2FjbHIUB6D%2B9kvBuiB4h5%2F458%2BeDB24L8iYZvQdCmhM3yI9bkhb1mqNmCsD7NtiWD2kq3IVnuR0hGR9kkgqJAc0wRyqokPW2HFhBUFi%2FrXAV%2B9mqN35VW0dYyLnX7g0fhIub1Jqs8IRnsEhSGPp2hkchf3FhkA%2FSoOJz4D1oqFblpwiGBoRET8lG0wYXM4hO3Kt9g1qe54A&X-Amz-Signature=e86d5b18a1a0c86c4b68839831935991f1ae6c49a0cee05626fa9c48ef92f874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKX3SRE%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAECpiElAVe6Pdic4NuoKrLEXBMJYZFku1HMJhl6cmD6AiEAmUagkTZt1BaY5XP7LtPV7VqTk6yUTvjun0wm%2BrQ0PQUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUafN9raWwXLV6swCrcA0CJmNFfMOgxUC9O9aPPb%2BPLrMVjiHKNbO6RXR0WcYW%2BmB4lcOQoL%2FSXOb76IQrIa%2BG722%2FZV2bHaxNsaDauwiWJFF4hMfOPV7cHYJcFKv2MvzbVpFvSsVfk0cWe%2FkO%2BW9%2FYDNzxd415kdiiUzvzkQ1zPEKuMQEEEg0ngNYkYS9LcNcdpmv%2FsDkrpsbKwOCunJnXVaPKID6GtjM4i2%2B7pqE0y7R6sS3Q%2BWsAXjK%2BkwszVQUFh7V7sh8qu0uJerXgCxz56oFCpV03MU43%2FanzPa8FIRY97fs5YyTaIWbNjEs6C0zsiBcJ%2Fn4lhSDu7LJ9OEmdDKOZJ2KcAFeGHMTALf2v08J15LBU3i9oen1lLkClFu9kanLUBO556TP20PeXvlcrMVZO2G98ebk5RmPPjo4krLrUjWVaGmym4xAI2oiP1yp8qOhM8pDIanL5QVJcP825Mh27LzGtZD89ntkp8WUr2vQ5hGNqE%2BYjgJgYBxN%2FdumMkkdTnYLe%2FeH3IhSyWDptgiSBHmQzoibiyoz90jOsmmW7hr8fQ7ym8V5hQXtg7INdaM4rM0PCxy%2FOwrmFhbKoyTA3KjfP62VZRxeylh0GH7kMxRV2fsZ0RkkTKog%2F1OE2YtWBVRh7%2FfmaMIPy2sIGOqUBa29VF3T%2Fdqg%2FRvEC84%2FjbHIUB6D%2B9kvBuiB4h5%2F458%2BeDB24L8iYZvQdCmhM3yI9bkhb1mqNmCsD7NtiWD2kq3IVnuR0hGR9kkgqJAc0wRyqokPW2HFhBUFi%2FrXAV%2B9mqN35VW0dYyLnX7g0fhIub1Jqs8IRnsEhSGPp2hkchf3FhkA%2FSoOJz4D1oqFblpwiGBoRET8lG0wYXM4hO3Kt9g1qe54A&X-Amz-Signature=c101682468f6d106eefcec4204d3ff2a19e945fa2a73a0e77ec8b08a6d249d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
