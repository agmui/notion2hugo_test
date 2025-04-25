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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GREFOWL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKdOl2P5lOUuYlP1nA8nY5103%2FFJ0gDCZtdfVVbmHZNQIgayZusp5LpzcAs4Cj3v%2B1aaZVx7s9AEDyRbpu4A0hgDkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDM%2F21siLuhHhmXNZ3SrcAzF3%2FaAd3dywpkNRZBtJZRPe8ZIiJoRQJ5h%2F119D%2Fl2Wj%2F2w4TReujEuO2XruBKpfqNR9DOdZs0UKhA0OekRVLhnmQ1XbaSeaE3fOabD1PhGv1dZTA%2BziP5ZpxakjPDKPxCQmqHYSbSDifP3fGwy7SxmmQLrkeRvanRQfw7Bk6lSsY%2FSiXkhnLE%2FUdr9gu8HfVQ3oMOHNd%2FWfOeUYG3pBi1nt4%2Bn6Mkzscq%2FfZaC0cL%2BFobFMcixhvZ3rBqSOwR0jBtiIqv0rMbXwMnsRmbn0qRPGeyV429JpYlpxIWLO5XHBW31pnGLym8R4pbyXlqoG2e6QwRAJ6i1x8cYH190AvJWO3JrqcgqY0emyCiAOsQtqyWmDCBZsOOO1xfOZgW5o8q1hkpfmp3Osmvx3%2F8MLxinHzWYhX%2FfOgE6pjSROWXIoEgsduBetnaRN6%2BuI%2FeOPL4mc%2FUbqgCgkxjfSAkBQyRAnaLN56LOCy%2FMNXI%2BFnNY0lOOI0uKWjbJYGd2O4b4vQhA6HY8s5JkG2NcauGmxJrcb6g4IP8FYIR37lyqR4grl5qHLW6qr6Cl2Lo%2FPaSq%2BA2acdA5qAtZhDHxKiTVOIl8k7fs9qlUME9Fc0WGKAAsrCELXMLETp4tPMRZMJidr8AGOqUBUTRrnRQyugJ3%2FUK6l58nogAnVBalFTuJYxCJIgqKv5PDVWcEwh0ZKPxhdDR7WzFJzHLHCR7MmIMNDnkCw58EoL4OLfi0fhuUKSf3tGAodvk%2BnnXw3JymcIKR9P8QhiQCLVMm44BnrmmRhqrgOSwSSYUGBE8shvYCNpiqHstU0cl0vc10UMulsadv9K2TYxN8X%2BoxFBdbSKiVbiE5pQeCCz72WYn9&X-Amz-Signature=67cb741421918f4d0f16f1f19100016404f3b3d3ca77352a31667fbfaa062eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GREFOWL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKdOl2P5lOUuYlP1nA8nY5103%2FFJ0gDCZtdfVVbmHZNQIgayZusp5LpzcAs4Cj3v%2B1aaZVx7s9AEDyRbpu4A0hgDkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDM%2F21siLuhHhmXNZ3SrcAzF3%2FaAd3dywpkNRZBtJZRPe8ZIiJoRQJ5h%2F119D%2Fl2Wj%2F2w4TReujEuO2XruBKpfqNR9DOdZs0UKhA0OekRVLhnmQ1XbaSeaE3fOabD1PhGv1dZTA%2BziP5ZpxakjPDKPxCQmqHYSbSDifP3fGwy7SxmmQLrkeRvanRQfw7Bk6lSsY%2FSiXkhnLE%2FUdr9gu8HfVQ3oMOHNd%2FWfOeUYG3pBi1nt4%2Bn6Mkzscq%2FfZaC0cL%2BFobFMcixhvZ3rBqSOwR0jBtiIqv0rMbXwMnsRmbn0qRPGeyV429JpYlpxIWLO5XHBW31pnGLym8R4pbyXlqoG2e6QwRAJ6i1x8cYH190AvJWO3JrqcgqY0emyCiAOsQtqyWmDCBZsOOO1xfOZgW5o8q1hkpfmp3Osmvx3%2F8MLxinHzWYhX%2FfOgE6pjSROWXIoEgsduBetnaRN6%2BuI%2FeOPL4mc%2FUbqgCgkxjfSAkBQyRAnaLN56LOCy%2FMNXI%2BFnNY0lOOI0uKWjbJYGd2O4b4vQhA6HY8s5JkG2NcauGmxJrcb6g4IP8FYIR37lyqR4grl5qHLW6qr6Cl2Lo%2FPaSq%2BA2acdA5qAtZhDHxKiTVOIl8k7fs9qlUME9Fc0WGKAAsrCELXMLETp4tPMRZMJidr8AGOqUBUTRrnRQyugJ3%2FUK6l58nogAnVBalFTuJYxCJIgqKv5PDVWcEwh0ZKPxhdDR7WzFJzHLHCR7MmIMNDnkCw58EoL4OLfi0fhuUKSf3tGAodvk%2BnnXw3JymcIKR9P8QhiQCLVMm44BnrmmRhqrgOSwSSYUGBE8shvYCNpiqHstU0cl0vc10UMulsadv9K2TYxN8X%2BoxFBdbSKiVbiE5pQeCCz72WYn9&X-Amz-Signature=043a4c0710c844360355736d5acc3b3ad7a5ce7f7bee30ebf219d31a13f86813&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GREFOWL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKdOl2P5lOUuYlP1nA8nY5103%2FFJ0gDCZtdfVVbmHZNQIgayZusp5LpzcAs4Cj3v%2B1aaZVx7s9AEDyRbpu4A0hgDkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDM%2F21siLuhHhmXNZ3SrcAzF3%2FaAd3dywpkNRZBtJZRPe8ZIiJoRQJ5h%2F119D%2Fl2Wj%2F2w4TReujEuO2XruBKpfqNR9DOdZs0UKhA0OekRVLhnmQ1XbaSeaE3fOabD1PhGv1dZTA%2BziP5ZpxakjPDKPxCQmqHYSbSDifP3fGwy7SxmmQLrkeRvanRQfw7Bk6lSsY%2FSiXkhnLE%2FUdr9gu8HfVQ3oMOHNd%2FWfOeUYG3pBi1nt4%2Bn6Mkzscq%2FfZaC0cL%2BFobFMcixhvZ3rBqSOwR0jBtiIqv0rMbXwMnsRmbn0qRPGeyV429JpYlpxIWLO5XHBW31pnGLym8R4pbyXlqoG2e6QwRAJ6i1x8cYH190AvJWO3JrqcgqY0emyCiAOsQtqyWmDCBZsOOO1xfOZgW5o8q1hkpfmp3Osmvx3%2F8MLxinHzWYhX%2FfOgE6pjSROWXIoEgsduBetnaRN6%2BuI%2FeOPL4mc%2FUbqgCgkxjfSAkBQyRAnaLN56LOCy%2FMNXI%2BFnNY0lOOI0uKWjbJYGd2O4b4vQhA6HY8s5JkG2NcauGmxJrcb6g4IP8FYIR37lyqR4grl5qHLW6qr6Cl2Lo%2FPaSq%2BA2acdA5qAtZhDHxKiTVOIl8k7fs9qlUME9Fc0WGKAAsrCELXMLETp4tPMRZMJidr8AGOqUBUTRrnRQyugJ3%2FUK6l58nogAnVBalFTuJYxCJIgqKv5PDVWcEwh0ZKPxhdDR7WzFJzHLHCR7MmIMNDnkCw58EoL4OLfi0fhuUKSf3tGAodvk%2BnnXw3JymcIKR9P8QhiQCLVMm44BnrmmRhqrgOSwSSYUGBE8shvYCNpiqHstU0cl0vc10UMulsadv9K2TYxN8X%2BoxFBdbSKiVbiE5pQeCCz72WYn9&X-Amz-Signature=f3ace1a2af1fce35e1fee81152563843a1e92ef2fd36f7ca32ca95711c0b137f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
