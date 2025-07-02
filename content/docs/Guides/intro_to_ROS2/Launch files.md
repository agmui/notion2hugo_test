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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDFS33GA%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI43RpFuqhWZTnyvZsqxPeQZ3vh6YLumHry4324sNq%2BwIgKbU%2F%2Bv7AQOsV1OZQThz1fPUaVSp3kF4uopR3R5ZSeqUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzYJ%2FfrcOoO9HRDtircA4EI9S%2B02TIH69RDET8gIHkG913%2B0xohRKnW4LlnYVbNIpco%2BoT1G5AJ%2FYH0yNVD2kj5pn2eYfdDpLFljRs6sHFCQuvAalv5b09z8by4N3M3FGoMRkrQneNIEXsBkBaFbtgfSUiw9SDCgIuUnxadYZTMMw9nEJW4VCyElM2JYsjFqpaqhW4FoL80GQrY2dOQnvZP2yXm3wOZMF1QG9aR5Tkp4lBrebwYfW6DrPxTkoUxAvjo0c%2FoatLZd3adEdoXQm5DDvs2bDs35MOp31dTl29CES1ruwk4nXcBytrxH3F6i0bh0e0ZPwFCp81o8eEcr68JgFH3iZBvlgulgEF6O6yVCdAPeVkEnspOcSt%2FkzepQNwur5GdRqgajOQZKLT9GK43%2FRoNCRFpDqEvYy89I7ewoJfQm5EbSmHJY%2Fm2WBwsl9qhmFeRn9BG%2B0kWfvOh1S6vQ5NigJ17zBHTTRO1fZbEijwhBfdBUTVQ9XO40FC6EnS7CT6K3sCn6JaMdvd9q4HtiLXvvLhcgDOYMJkQFmAR%2F5KTlozZJvquEHtbRyFSan9SfoErOWMIiP%2FmcKV2X5WEQ7k3vodJ5QF%2F1EVmNhvbECn17D9BkkxzMsIwYKMmHFAgvcinvpx3l5QMMPO9lsMGOqUBde%2F9gWuWEuWwQ%2FRnpsk%2BSnb%2BJK59FqCbw0HQL6rJ1C8ul81NtSgHGeKbLRCROgcif8bljnPR0S0B1G%2FCb7F6EsdlGyRJ8rvcZoNV0L4Zn46UR5M3tjzMmt5LTDz7VPQfhc%2FrK9NPQZSz%2FHKKKphFZkceZNHDm2EI1UXxKxZs4R2u5WCAMu7rxHfE2NbLhsagxSSKzKta%2B3yiQjRpb%2Fktkba2f85r&X-Amz-Signature=7fcf5494dba22f9b6dff84527c79a1f2d272994bdcc3129e70ca9a15256f1337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDFS33GA%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI43RpFuqhWZTnyvZsqxPeQZ3vh6YLumHry4324sNq%2BwIgKbU%2F%2Bv7AQOsV1OZQThz1fPUaVSp3kF4uopR3R5ZSeqUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzYJ%2FfrcOoO9HRDtircA4EI9S%2B02TIH69RDET8gIHkG913%2B0xohRKnW4LlnYVbNIpco%2BoT1G5AJ%2FYH0yNVD2kj5pn2eYfdDpLFljRs6sHFCQuvAalv5b09z8by4N3M3FGoMRkrQneNIEXsBkBaFbtgfSUiw9SDCgIuUnxadYZTMMw9nEJW4VCyElM2JYsjFqpaqhW4FoL80GQrY2dOQnvZP2yXm3wOZMF1QG9aR5Tkp4lBrebwYfW6DrPxTkoUxAvjo0c%2FoatLZd3adEdoXQm5DDvs2bDs35MOp31dTl29CES1ruwk4nXcBytrxH3F6i0bh0e0ZPwFCp81o8eEcr68JgFH3iZBvlgulgEF6O6yVCdAPeVkEnspOcSt%2FkzepQNwur5GdRqgajOQZKLT9GK43%2FRoNCRFpDqEvYy89I7ewoJfQm5EbSmHJY%2Fm2WBwsl9qhmFeRn9BG%2B0kWfvOh1S6vQ5NigJ17zBHTTRO1fZbEijwhBfdBUTVQ9XO40FC6EnS7CT6K3sCn6JaMdvd9q4HtiLXvvLhcgDOYMJkQFmAR%2F5KTlozZJvquEHtbRyFSan9SfoErOWMIiP%2FmcKV2X5WEQ7k3vodJ5QF%2F1EVmNhvbECn17D9BkkxzMsIwYKMmHFAgvcinvpx3l5QMMPO9lsMGOqUBde%2F9gWuWEuWwQ%2FRnpsk%2BSnb%2BJK59FqCbw0HQL6rJ1C8ul81NtSgHGeKbLRCROgcif8bljnPR0S0B1G%2FCb7F6EsdlGyRJ8rvcZoNV0L4Zn46UR5M3tjzMmt5LTDz7VPQfhc%2FrK9NPQZSz%2FHKKKphFZkceZNHDm2EI1UXxKxZs4R2u5WCAMu7rxHfE2NbLhsagxSSKzKta%2B3yiQjRpb%2Fktkba2f85r&X-Amz-Signature=881547ae81af60e53ef9d12554ae591181c5c04d60d9d91b2c4ba8eb105e4a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDFS33GA%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI43RpFuqhWZTnyvZsqxPeQZ3vh6YLumHry4324sNq%2BwIgKbU%2F%2Bv7AQOsV1OZQThz1fPUaVSp3kF4uopR3R5ZSeqUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzYJ%2FfrcOoO9HRDtircA4EI9S%2B02TIH69RDET8gIHkG913%2B0xohRKnW4LlnYVbNIpco%2BoT1G5AJ%2FYH0yNVD2kj5pn2eYfdDpLFljRs6sHFCQuvAalv5b09z8by4N3M3FGoMRkrQneNIEXsBkBaFbtgfSUiw9SDCgIuUnxadYZTMMw9nEJW4VCyElM2JYsjFqpaqhW4FoL80GQrY2dOQnvZP2yXm3wOZMF1QG9aR5Tkp4lBrebwYfW6DrPxTkoUxAvjo0c%2FoatLZd3adEdoXQm5DDvs2bDs35MOp31dTl29CES1ruwk4nXcBytrxH3F6i0bh0e0ZPwFCp81o8eEcr68JgFH3iZBvlgulgEF6O6yVCdAPeVkEnspOcSt%2FkzepQNwur5GdRqgajOQZKLT9GK43%2FRoNCRFpDqEvYy89I7ewoJfQm5EbSmHJY%2Fm2WBwsl9qhmFeRn9BG%2B0kWfvOh1S6vQ5NigJ17zBHTTRO1fZbEijwhBfdBUTVQ9XO40FC6EnS7CT6K3sCn6JaMdvd9q4HtiLXvvLhcgDOYMJkQFmAR%2F5KTlozZJvquEHtbRyFSan9SfoErOWMIiP%2FmcKV2X5WEQ7k3vodJ5QF%2F1EVmNhvbECn17D9BkkxzMsIwYKMmHFAgvcinvpx3l5QMMPO9lsMGOqUBde%2F9gWuWEuWwQ%2FRnpsk%2BSnb%2BJK59FqCbw0HQL6rJ1C8ul81NtSgHGeKbLRCROgcif8bljnPR0S0B1G%2FCb7F6EsdlGyRJ8rvcZoNV0L4Zn46UR5M3tjzMmt5LTDz7VPQfhc%2FrK9NPQZSz%2FHKKKphFZkceZNHDm2EI1UXxKxZs4R2u5WCAMu7rxHfE2NbLhsagxSSKzKta%2B3yiQjRpb%2Fktkba2f85r&X-Amz-Signature=04919cb4566c79648fa39bb0202c6c92253feb24c711d4f1a8723758e10f97f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
