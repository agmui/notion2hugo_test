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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAMNZ54L%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICRl3uSf9%2BjlqtUm1QQIWqWq19yRq1ccEDqp3FACxVoLAiBEaUXLbwLRg4y4HpLrL3s%2Fo4U6obu60VHtUZz85yOWVCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIPU36CixAc6ead1LKtwDxsh%2FkvqnNQVR1RKlYJ%2Bb1AUnaluU3a%2BSq8Kq6XrIqxFtmxRDKA%2F0FShXBlr4b5r6b0Racl%2Fkym3caIjJrVSU3O37HLVDkrtRvboCynS7CEZwkIiyrz%2BRXLMmSJUPdI8LRjqAADMvDfIz67TyS2el%2B2i5TENxmUG9Dymim8xapYq6Os%2BBUvapXNNxxKu0usZFrngkUE%2F22NDsppe%2BSAh91jhHbjqYOonsU9tEtL2PCuDpFNaDwUEslUGvAa99FqrwnDZ%2F4XciRmNLWnJKUq9CU4uso%2BYPUlcSEf%2BzDtBHHsbgj7J5AWfdEFu61%2FAou7Omv23jI4Vu%2Fch5Xh7yQSdm%2FO1Zp6pZSV6wDjEM6uvy5dtq5fssGm4xO%2FrjQNW1kKrcIboEmqSCrkazxm%2B7kFogMg4IgEZoUVZ%2FgXBPat5ww9s711glREH5zx4epC%2B4Y3y9ETQ4rgQ%2FZM%2FnoOKai89GMzmZo46B3%2B4NuPHqNJyZfhBRe8iVwpua%2BkBEVwjKolz3pWLBUNvvU1hhzA%2BNtlM979KXlpGDZ6ZnmUrOJEOzfRcG4IthTIp0%2FxTXYmXoIcuK%2BY9bhYl8kyicOhgRChSA7OEgzIuo98rTDbqy2thkTpOVEX7uOKshagNpLB0w57LSvQY6pgESEkCe1XD0qNHM6lxRrbyPSqTvZTep21vCR7LF2TKG5Njc15PhSK9A8PHJazhUIjCCI2xggcQXkzZappJTA9MlbucFDDzSC4pGTI5ekBySVHr8Nve%2B5IpD2N0ez8YcS1FSWPEopMRBdgnnnLp%2BIssEjBh4%2FAVpt1C2iuvwJLAMIgDuD0MHMtsAO%2F9YHqjpWDeZBM7OUX2VrfIX5KfgzOQ9ffA9SiSv&X-Amz-Signature=d71df7fef7da86ed5aa012e0f2d23f78e86a6fd6d642080edef4b1daaa41e60e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAMNZ54L%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICRl3uSf9%2BjlqtUm1QQIWqWq19yRq1ccEDqp3FACxVoLAiBEaUXLbwLRg4y4HpLrL3s%2Fo4U6obu60VHtUZz85yOWVCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIPU36CixAc6ead1LKtwDxsh%2FkvqnNQVR1RKlYJ%2Bb1AUnaluU3a%2BSq8Kq6XrIqxFtmxRDKA%2F0FShXBlr4b5r6b0Racl%2Fkym3caIjJrVSU3O37HLVDkrtRvboCynS7CEZwkIiyrz%2BRXLMmSJUPdI8LRjqAADMvDfIz67TyS2el%2B2i5TENxmUG9Dymim8xapYq6Os%2BBUvapXNNxxKu0usZFrngkUE%2F22NDsppe%2BSAh91jhHbjqYOonsU9tEtL2PCuDpFNaDwUEslUGvAa99FqrwnDZ%2F4XciRmNLWnJKUq9CU4uso%2BYPUlcSEf%2BzDtBHHsbgj7J5AWfdEFu61%2FAou7Omv23jI4Vu%2Fch5Xh7yQSdm%2FO1Zp6pZSV6wDjEM6uvy5dtq5fssGm4xO%2FrjQNW1kKrcIboEmqSCrkazxm%2B7kFogMg4IgEZoUVZ%2FgXBPat5ww9s711glREH5zx4epC%2B4Y3y9ETQ4rgQ%2FZM%2FnoOKai89GMzmZo46B3%2B4NuPHqNJyZfhBRe8iVwpua%2BkBEVwjKolz3pWLBUNvvU1hhzA%2BNtlM979KXlpGDZ6ZnmUrOJEOzfRcG4IthTIp0%2FxTXYmXoIcuK%2BY9bhYl8kyicOhgRChSA7OEgzIuo98rTDbqy2thkTpOVEX7uOKshagNpLB0w57LSvQY6pgESEkCe1XD0qNHM6lxRrbyPSqTvZTep21vCR7LF2TKG5Njc15PhSK9A8PHJazhUIjCCI2xggcQXkzZappJTA9MlbucFDDzSC4pGTI5ekBySVHr8Nve%2B5IpD2N0ez8YcS1FSWPEopMRBdgnnnLp%2BIssEjBh4%2FAVpt1C2iuvwJLAMIgDuD0MHMtsAO%2F9YHqjpWDeZBM7OUX2VrfIX5KfgzOQ9ffA9SiSv&X-Amz-Signature=8e9541a6d754bfd68d2e965cedec80add147834952fa2c26a4423a8f7756f0e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAMNZ54L%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICRl3uSf9%2BjlqtUm1QQIWqWq19yRq1ccEDqp3FACxVoLAiBEaUXLbwLRg4y4HpLrL3s%2Fo4U6obu60VHtUZz85yOWVCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIPU36CixAc6ead1LKtwDxsh%2FkvqnNQVR1RKlYJ%2Bb1AUnaluU3a%2BSq8Kq6XrIqxFtmxRDKA%2F0FShXBlr4b5r6b0Racl%2Fkym3caIjJrVSU3O37HLVDkrtRvboCynS7CEZwkIiyrz%2BRXLMmSJUPdI8LRjqAADMvDfIz67TyS2el%2B2i5TENxmUG9Dymim8xapYq6Os%2BBUvapXNNxxKu0usZFrngkUE%2F22NDsppe%2BSAh91jhHbjqYOonsU9tEtL2PCuDpFNaDwUEslUGvAa99FqrwnDZ%2F4XciRmNLWnJKUq9CU4uso%2BYPUlcSEf%2BzDtBHHsbgj7J5AWfdEFu61%2FAou7Omv23jI4Vu%2Fch5Xh7yQSdm%2FO1Zp6pZSV6wDjEM6uvy5dtq5fssGm4xO%2FrjQNW1kKrcIboEmqSCrkazxm%2B7kFogMg4IgEZoUVZ%2FgXBPat5ww9s711glREH5zx4epC%2B4Y3y9ETQ4rgQ%2FZM%2FnoOKai89GMzmZo46B3%2B4NuPHqNJyZfhBRe8iVwpua%2BkBEVwjKolz3pWLBUNvvU1hhzA%2BNtlM979KXlpGDZ6ZnmUrOJEOzfRcG4IthTIp0%2FxTXYmXoIcuK%2BY9bhYl8kyicOhgRChSA7OEgzIuo98rTDbqy2thkTpOVEX7uOKshagNpLB0w57LSvQY6pgESEkCe1XD0qNHM6lxRrbyPSqTvZTep21vCR7LF2TKG5Njc15PhSK9A8PHJazhUIjCCI2xggcQXkzZappJTA9MlbucFDDzSC4pGTI5ekBySVHr8Nve%2B5IpD2N0ez8YcS1FSWPEopMRBdgnnnLp%2BIssEjBh4%2FAVpt1C2iuvwJLAMIgDuD0MHMtsAO%2F9YHqjpWDeZBM7OUX2VrfIX5KfgzOQ9ffA9SiSv&X-Amz-Signature=8a7840cacd2a9e171ea4d2edf67c2889fe652bb1f52f2a35aba4f003e649164b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
