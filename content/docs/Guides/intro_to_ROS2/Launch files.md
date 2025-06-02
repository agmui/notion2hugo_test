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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLVC2APB%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCnv6y5B3o5z0fBvUSFJ77g3py9FwSr52JGyqTvqTXR0gIgW77k0LSoSSsvr53NO%2Fn%2BzK3XRCj1CZeDD%2FefZ4wIK9YqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHftiQjsVx5fhoQEPircA1L9uRPXjRpblHcseSO90iJTP%2BTRtixItSUz0ucdGMFZOO9WM2APisgaoWMfMEoC94rq2bn4ZmaZ9ZQVgeMjOV6g7nxM3rTn64PWUzf5ICf3QproBaQJL9o9KzhEfHwO1Nzsy8hQ%2F%2F%2B%2FKpZhsLtknQmG0bWlSN6wVzfh9%2BrK1gayZnUCwFx6xRkzmPrYGhMKrQmlDAf%2FiJ%2B9e4bwkFTd9UqPD%2BPfHbssdB%2F2ZxHB8EIxSpLQHgXWctUM78%2BaEutMXiQ3s3HzIxBaEEakKg8Y595xdVv5wiu%2BsxPgL8ZyMCNnUJgDTvxhsJWzldeU%2F6kx8lShHD%2B1a1Ac10f1EVTgzvOhlv9Qle50zrvETjiMaiofRG965DO4tTM%2BHFYPxVCveAmuOn01peaeqq8FFHwz%2BqQWWJDyHXf5nqwJ%2FMoGoK%2FgHxi4wipSdeW28B5iF3V2CI2EpJuNmtRlbiV%2BTPoZ7ONVLUSAy5S%2FGz0dJ9xF7hgUjUbQrRF%2BngFm7usxR%2BF%2FPRG%2BYhIQrkDoIx%2FKWhC7YOPKJD54NTU0rpAPD9MdKG2WoJrYeT%2B4gVkO1DDYtoD4ZV5fNFRXRk3VvT5yxzc6uHpcYYoW9XPcLx4v%2FYRBioZ0Kxw1wdvvJUMEZCTKMJ6T%2BMEGOqUBV%2BRn6T5QwelFyz7o9RRpobv32LOhVtIoYAwwmQZwzU6kuSnaS%2FCYd8S6eP3kzCcePHSB7kfM%2FP%2FmZOg%2BEp%2FHROjpBYdbmlhH5rm0Z5Bz9YGfQzJh4Bq8OQN1Bb9XgMEM7OWqplQqeGIXWqg59JJOPTzTIIQ%2BoxnGR%2BU1I40%2F2tSLnd%2BjyEAynqY%2Fi%2BVpCzUwb968Gk%2FsMYePBtnfN3sLLMdwLnmu&X-Amz-Signature=3e774c897d7c2fd39994ff4be8b995ce2b8e5ac8014c76abd8006215be7bf258&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLVC2APB%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCnv6y5B3o5z0fBvUSFJ77g3py9FwSr52JGyqTvqTXR0gIgW77k0LSoSSsvr53NO%2Fn%2BzK3XRCj1CZeDD%2FefZ4wIK9YqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHftiQjsVx5fhoQEPircA1L9uRPXjRpblHcseSO90iJTP%2BTRtixItSUz0ucdGMFZOO9WM2APisgaoWMfMEoC94rq2bn4ZmaZ9ZQVgeMjOV6g7nxM3rTn64PWUzf5ICf3QproBaQJL9o9KzhEfHwO1Nzsy8hQ%2F%2F%2B%2FKpZhsLtknQmG0bWlSN6wVzfh9%2BrK1gayZnUCwFx6xRkzmPrYGhMKrQmlDAf%2FiJ%2B9e4bwkFTd9UqPD%2BPfHbssdB%2F2ZxHB8EIxSpLQHgXWctUM78%2BaEutMXiQ3s3HzIxBaEEakKg8Y595xdVv5wiu%2BsxPgL8ZyMCNnUJgDTvxhsJWzldeU%2F6kx8lShHD%2B1a1Ac10f1EVTgzvOhlv9Qle50zrvETjiMaiofRG965DO4tTM%2BHFYPxVCveAmuOn01peaeqq8FFHwz%2BqQWWJDyHXf5nqwJ%2FMoGoK%2FgHxi4wipSdeW28B5iF3V2CI2EpJuNmtRlbiV%2BTPoZ7ONVLUSAy5S%2FGz0dJ9xF7hgUjUbQrRF%2BngFm7usxR%2BF%2FPRG%2BYhIQrkDoIx%2FKWhC7YOPKJD54NTU0rpAPD9MdKG2WoJrYeT%2B4gVkO1DDYtoD4ZV5fNFRXRk3VvT5yxzc6uHpcYYoW9XPcLx4v%2FYRBioZ0Kxw1wdvvJUMEZCTKMJ6T%2BMEGOqUBV%2BRn6T5QwelFyz7o9RRpobv32LOhVtIoYAwwmQZwzU6kuSnaS%2FCYd8S6eP3kzCcePHSB7kfM%2FP%2FmZOg%2BEp%2FHROjpBYdbmlhH5rm0Z5Bz9YGfQzJh4Bq8OQN1Bb9XgMEM7OWqplQqeGIXWqg59JJOPTzTIIQ%2BoxnGR%2BU1I40%2F2tSLnd%2BjyEAynqY%2Fi%2BVpCzUwb968Gk%2FsMYePBtnfN3sLLMdwLnmu&X-Amz-Signature=9af2db882b1929c3f10ae2b780c23789326ab9577e1b195a9b8ab84fd800d234&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLVC2APB%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCnv6y5B3o5z0fBvUSFJ77g3py9FwSr52JGyqTvqTXR0gIgW77k0LSoSSsvr53NO%2Fn%2BzK3XRCj1CZeDD%2FefZ4wIK9YqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHftiQjsVx5fhoQEPircA1L9uRPXjRpblHcseSO90iJTP%2BTRtixItSUz0ucdGMFZOO9WM2APisgaoWMfMEoC94rq2bn4ZmaZ9ZQVgeMjOV6g7nxM3rTn64PWUzf5ICf3QproBaQJL9o9KzhEfHwO1Nzsy8hQ%2F%2F%2B%2FKpZhsLtknQmG0bWlSN6wVzfh9%2BrK1gayZnUCwFx6xRkzmPrYGhMKrQmlDAf%2FiJ%2B9e4bwkFTd9UqPD%2BPfHbssdB%2F2ZxHB8EIxSpLQHgXWctUM78%2BaEutMXiQ3s3HzIxBaEEakKg8Y595xdVv5wiu%2BsxPgL8ZyMCNnUJgDTvxhsJWzldeU%2F6kx8lShHD%2B1a1Ac10f1EVTgzvOhlv9Qle50zrvETjiMaiofRG965DO4tTM%2BHFYPxVCveAmuOn01peaeqq8FFHwz%2BqQWWJDyHXf5nqwJ%2FMoGoK%2FgHxi4wipSdeW28B5iF3V2CI2EpJuNmtRlbiV%2BTPoZ7ONVLUSAy5S%2FGz0dJ9xF7hgUjUbQrRF%2BngFm7usxR%2BF%2FPRG%2BYhIQrkDoIx%2FKWhC7YOPKJD54NTU0rpAPD9MdKG2WoJrYeT%2B4gVkO1DDYtoD4ZV5fNFRXRk3VvT5yxzc6uHpcYYoW9XPcLx4v%2FYRBioZ0Kxw1wdvvJUMEZCTKMJ6T%2BMEGOqUBV%2BRn6T5QwelFyz7o9RRpobv32LOhVtIoYAwwmQZwzU6kuSnaS%2FCYd8S6eP3kzCcePHSB7kfM%2FP%2FmZOg%2BEp%2FHROjpBYdbmlhH5rm0Z5Bz9YGfQzJh4Bq8OQN1Bb9XgMEM7OWqplQqeGIXWqg59JJOPTzTIIQ%2BoxnGR%2BU1I40%2F2tSLnd%2BjyEAynqY%2Fi%2BVpCzUwb968Gk%2FsMYePBtnfN3sLLMdwLnmu&X-Amz-Signature=c5b4a7517247845fd8133e22c41eeeec6ea152ac5fc9b440304486d95f74c0ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
