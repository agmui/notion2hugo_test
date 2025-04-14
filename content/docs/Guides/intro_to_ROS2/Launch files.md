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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D33J6BK%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhAERcDjdfMUUty4fG2c9TO%2Fp7COmPp3HbdiZAztrJgIhAK%2FrFz1lxuHFLZrSHEh8rfEZQKCvjvrVuo5%2B1DqjRMQcKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU%2BKZBwZtIJawXAaQq3ANb0vfLXNgL1YLxI3zF1hdSKrS2FJeQZEMbeTUXsITRtES4FdWB8Nf5tbd8Qswe%2BUUO7lCSeZ5%2Bqjuvf9j4Q%2BaPFPXLFBQ959KRSFZidToNrQqCpIRNkKf4UwbNdkbTDM9eaWQYVLDOUy3MjbUJuurNtjamFWKuJOTNilFxWBPFWqFec%2FDxjdExqyCPQ6fE6XahXeM%2FvUYRyGtMyOVWfTQh9XEn5qic8wdZrDGB8f1TtfEvBXdiusiQGVDOnjb8b1JADMPA5yWQ8vk0bnNzj3fRlkySUqlqkii2rB10vUpy%2BcQqSVbS967flqTBNU%2BsceVG6MZgQEGR5dA8vBIAkLe7YMVxHrAyJpxeGOuWmCxdCXjdbiOQmFViRyjLfDJf1k00tRtRKwkXRWuQF2lFHe%2Bx4jKrLXmNivUA0p2e3dtUm6%2B4Z0zTtfpLvRZlO8FLpCeOMpY8pKefCPIgB%2BRx6Cy3bkwcC88hIlOriP6RGxfp3s86LFtJkxZFBoYYTun9Zt5GDiyZGGnWwfmERmmJhgaAfASVUfGiNFQI45ki0BFVdUoGraCPqPyRj7nKP7QK0uH3Trbk8rYc7lpTYxEsoQCLQfKKYWd%2FSczqfaVU8HnsLLeB9JJQESp%2Fgd6qXTCOufG%2FBjqkAbFvPRpec%2F3WbFX4VWnD%2FKUZ4QH57qkMG6kHyPfRQSg%2FqX3k%2B5XKDmUpDJXLUahRnIUEl8qEzyHEU2dt%2BkxcVl02PUCzFSl7nWQSbV1cHvjbNDgHJ7Uj%2FaaiKhlJig3EX8aw24MteKVxRSLdQcGYOMWM5ZNQWrSFZ5Lv78iICcBh%2FFLFEYqUfFoBoto8UcIV5V2J5tx3k8YnmQBUEHHDfBZbw0dS&X-Amz-Signature=e8853d0566486fec93154ab31f6c29818e1b8a90adc54f74ea22c929c20c954f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D33J6BK%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhAERcDjdfMUUty4fG2c9TO%2Fp7COmPp3HbdiZAztrJgIhAK%2FrFz1lxuHFLZrSHEh8rfEZQKCvjvrVuo5%2B1DqjRMQcKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU%2BKZBwZtIJawXAaQq3ANb0vfLXNgL1YLxI3zF1hdSKrS2FJeQZEMbeTUXsITRtES4FdWB8Nf5tbd8Qswe%2BUUO7lCSeZ5%2Bqjuvf9j4Q%2BaPFPXLFBQ959KRSFZidToNrQqCpIRNkKf4UwbNdkbTDM9eaWQYVLDOUy3MjbUJuurNtjamFWKuJOTNilFxWBPFWqFec%2FDxjdExqyCPQ6fE6XahXeM%2FvUYRyGtMyOVWfTQh9XEn5qic8wdZrDGB8f1TtfEvBXdiusiQGVDOnjb8b1JADMPA5yWQ8vk0bnNzj3fRlkySUqlqkii2rB10vUpy%2BcQqSVbS967flqTBNU%2BsceVG6MZgQEGR5dA8vBIAkLe7YMVxHrAyJpxeGOuWmCxdCXjdbiOQmFViRyjLfDJf1k00tRtRKwkXRWuQF2lFHe%2Bx4jKrLXmNivUA0p2e3dtUm6%2B4Z0zTtfpLvRZlO8FLpCeOMpY8pKefCPIgB%2BRx6Cy3bkwcC88hIlOriP6RGxfp3s86LFtJkxZFBoYYTun9Zt5GDiyZGGnWwfmERmmJhgaAfASVUfGiNFQI45ki0BFVdUoGraCPqPyRj7nKP7QK0uH3Trbk8rYc7lpTYxEsoQCLQfKKYWd%2FSczqfaVU8HnsLLeB9JJQESp%2Fgd6qXTCOufG%2FBjqkAbFvPRpec%2F3WbFX4VWnD%2FKUZ4QH57qkMG6kHyPfRQSg%2FqX3k%2B5XKDmUpDJXLUahRnIUEl8qEzyHEU2dt%2BkxcVl02PUCzFSl7nWQSbV1cHvjbNDgHJ7Uj%2FaaiKhlJig3EX8aw24MteKVxRSLdQcGYOMWM5ZNQWrSFZ5Lv78iICcBh%2FFLFEYqUfFoBoto8UcIV5V2J5tx3k8YnmQBUEHHDfBZbw0dS&X-Amz-Signature=2c07f1c3cb6ad4eeb28c9328e87a2b66fff550e407ca9c2788a1943f02b712d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D33J6BK%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhAERcDjdfMUUty4fG2c9TO%2Fp7COmPp3HbdiZAztrJgIhAK%2FrFz1lxuHFLZrSHEh8rfEZQKCvjvrVuo5%2B1DqjRMQcKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU%2BKZBwZtIJawXAaQq3ANb0vfLXNgL1YLxI3zF1hdSKrS2FJeQZEMbeTUXsITRtES4FdWB8Nf5tbd8Qswe%2BUUO7lCSeZ5%2Bqjuvf9j4Q%2BaPFPXLFBQ959KRSFZidToNrQqCpIRNkKf4UwbNdkbTDM9eaWQYVLDOUy3MjbUJuurNtjamFWKuJOTNilFxWBPFWqFec%2FDxjdExqyCPQ6fE6XahXeM%2FvUYRyGtMyOVWfTQh9XEn5qic8wdZrDGB8f1TtfEvBXdiusiQGVDOnjb8b1JADMPA5yWQ8vk0bnNzj3fRlkySUqlqkii2rB10vUpy%2BcQqSVbS967flqTBNU%2BsceVG6MZgQEGR5dA8vBIAkLe7YMVxHrAyJpxeGOuWmCxdCXjdbiOQmFViRyjLfDJf1k00tRtRKwkXRWuQF2lFHe%2Bx4jKrLXmNivUA0p2e3dtUm6%2B4Z0zTtfpLvRZlO8FLpCeOMpY8pKefCPIgB%2BRx6Cy3bkwcC88hIlOriP6RGxfp3s86LFtJkxZFBoYYTun9Zt5GDiyZGGnWwfmERmmJhgaAfASVUfGiNFQI45ki0BFVdUoGraCPqPyRj7nKP7QK0uH3Trbk8rYc7lpTYxEsoQCLQfKKYWd%2FSczqfaVU8HnsLLeB9JJQESp%2Fgd6qXTCOufG%2FBjqkAbFvPRpec%2F3WbFX4VWnD%2FKUZ4QH57qkMG6kHyPfRQSg%2FqX3k%2B5XKDmUpDJXLUahRnIUEl8qEzyHEU2dt%2BkxcVl02PUCzFSl7nWQSbV1cHvjbNDgHJ7Uj%2FaaiKhlJig3EX8aw24MteKVxRSLdQcGYOMWM5ZNQWrSFZ5Lv78iICcBh%2FFLFEYqUfFoBoto8UcIV5V2J5tx3k8YnmQBUEHHDfBZbw0dS&X-Amz-Signature=a44ef2d0bb9385cb13606743121d58dada1fe85b48b088e9d085f74d10b13678&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
