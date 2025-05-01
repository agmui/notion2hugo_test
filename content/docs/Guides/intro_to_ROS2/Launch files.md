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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZS66ZZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD0bV6IXEQueS7DuP6pjVX9O%2BhtW82iHYc3PYjMHCGI8gIhANMogsm8SDtSTf0TlU2hYD7L5IA8xQLcF3T%2FRLFpY%2FB8KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPBGw%2BHRYI3a8MX%2Bkq3ANvlnmkSyu7IWiOVex91m1fOwTN83J9z10%2BZnSoRSuqrSDnj4xWm6LdQYddRY56hH8OUpkohsyGlvYQaRsZQknE7GP%2FvfLRyKdM4Eb2n1g7BLshwIg7NP%2Fb%2F2bcP5FrwC%2FScExMcCXCK1E6yPdfpXcsHtlmy%2FDBnfm3wrjlgHbkwAg2qtJ%2Bvqruu0hxU2ITE0VKgTW7hgGsev%2Br7NcMNtbIRuEb0agrcMvd3KU00vhkRGdQ5lVyf20LEFxOip9yiIuVk9d0W%2B6KUeaE8gzxUnV2UqvkvlzV0CYLJlZFyxZ%2FGr8BAiEvK7BQcPOjRXYqLgwi%2BnE7t7w%2Fx2fc0lGm%2BSMTgqM%2ButZf9GP24cHLiOo955%2F9vGPxbx4oj22v4yqJEYOhf86SK%2FesWYqveZGy2yxeKZuu13fGYTZgfx%2FKhAt2n5EPTbM8TOFiOee9dtKwMo5j0Blaqq5DKdOsYMdNSLJNwSDb2nYn66Sxm80HCQWt3kcWpZShQOkICmi0eMI%2FRLsvIzKYTV0HM3aRyPNxpbXzp%2Bu48nT3Fj30fGKzLwtIXHXLBA9T70dnKjCzZvXvD%2BtcSsdSzoAVoyN7iDfckSf4G1Q1tWgsErVLp8RWSjFXt8TWQ9MDcJlBvXz7czCHvsvABjqkAZFcdtF48gz86x4LxTN6pnx5lr%2FIbY38PAJWQhh0OoIAEMn4ZmBRbcxfjCXEsnfu9zgt8brh1IKba16wTRiEskzMOylyHg7OZfq9eMwnE5j7TUBLmnft%2FP%2B7UVyou7g%2F%2FNC7JPCdj2wZLAQZyCsi2E2if7d0zj0LMlb3ToKu9cJ7lktyJL3W7xNAoAlI5Qq8BW2%2BEwyN76aIr9AkeRg5I4eYjrxV&X-Amz-Signature=48df1e542e61f1cb849347683954b2d2dda5bf435b670f4e521914338d9b463e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZS66ZZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD0bV6IXEQueS7DuP6pjVX9O%2BhtW82iHYc3PYjMHCGI8gIhANMogsm8SDtSTf0TlU2hYD7L5IA8xQLcF3T%2FRLFpY%2FB8KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPBGw%2BHRYI3a8MX%2Bkq3ANvlnmkSyu7IWiOVex91m1fOwTN83J9z10%2BZnSoRSuqrSDnj4xWm6LdQYddRY56hH8OUpkohsyGlvYQaRsZQknE7GP%2FvfLRyKdM4Eb2n1g7BLshwIg7NP%2Fb%2F2bcP5FrwC%2FScExMcCXCK1E6yPdfpXcsHtlmy%2FDBnfm3wrjlgHbkwAg2qtJ%2Bvqruu0hxU2ITE0VKgTW7hgGsev%2Br7NcMNtbIRuEb0agrcMvd3KU00vhkRGdQ5lVyf20LEFxOip9yiIuVk9d0W%2B6KUeaE8gzxUnV2UqvkvlzV0CYLJlZFyxZ%2FGr8BAiEvK7BQcPOjRXYqLgwi%2BnE7t7w%2Fx2fc0lGm%2BSMTgqM%2ButZf9GP24cHLiOo955%2F9vGPxbx4oj22v4yqJEYOhf86SK%2FesWYqveZGy2yxeKZuu13fGYTZgfx%2FKhAt2n5EPTbM8TOFiOee9dtKwMo5j0Blaqq5DKdOsYMdNSLJNwSDb2nYn66Sxm80HCQWt3kcWpZShQOkICmi0eMI%2FRLsvIzKYTV0HM3aRyPNxpbXzp%2Bu48nT3Fj30fGKzLwtIXHXLBA9T70dnKjCzZvXvD%2BtcSsdSzoAVoyN7iDfckSf4G1Q1tWgsErVLp8RWSjFXt8TWQ9MDcJlBvXz7czCHvsvABjqkAZFcdtF48gz86x4LxTN6pnx5lr%2FIbY38PAJWQhh0OoIAEMn4ZmBRbcxfjCXEsnfu9zgt8brh1IKba16wTRiEskzMOylyHg7OZfq9eMwnE5j7TUBLmnft%2FP%2B7UVyou7g%2F%2FNC7JPCdj2wZLAQZyCsi2E2if7d0zj0LMlb3ToKu9cJ7lktyJL3W7xNAoAlI5Qq8BW2%2BEwyN76aIr9AkeRg5I4eYjrxV&X-Amz-Signature=2126db2e9b98428d73eddc2a0b9cd1cb255fc5e2342d6e6b1f213b803e4623b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZS66ZZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD0bV6IXEQueS7DuP6pjVX9O%2BhtW82iHYc3PYjMHCGI8gIhANMogsm8SDtSTf0TlU2hYD7L5IA8xQLcF3T%2FRLFpY%2FB8KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPBGw%2BHRYI3a8MX%2Bkq3ANvlnmkSyu7IWiOVex91m1fOwTN83J9z10%2BZnSoRSuqrSDnj4xWm6LdQYddRY56hH8OUpkohsyGlvYQaRsZQknE7GP%2FvfLRyKdM4Eb2n1g7BLshwIg7NP%2Fb%2F2bcP5FrwC%2FScExMcCXCK1E6yPdfpXcsHtlmy%2FDBnfm3wrjlgHbkwAg2qtJ%2Bvqruu0hxU2ITE0VKgTW7hgGsev%2Br7NcMNtbIRuEb0agrcMvd3KU00vhkRGdQ5lVyf20LEFxOip9yiIuVk9d0W%2B6KUeaE8gzxUnV2UqvkvlzV0CYLJlZFyxZ%2FGr8BAiEvK7BQcPOjRXYqLgwi%2BnE7t7w%2Fx2fc0lGm%2BSMTgqM%2ButZf9GP24cHLiOo955%2F9vGPxbx4oj22v4yqJEYOhf86SK%2FesWYqveZGy2yxeKZuu13fGYTZgfx%2FKhAt2n5EPTbM8TOFiOee9dtKwMo5j0Blaqq5DKdOsYMdNSLJNwSDb2nYn66Sxm80HCQWt3kcWpZShQOkICmi0eMI%2FRLsvIzKYTV0HM3aRyPNxpbXzp%2Bu48nT3Fj30fGKzLwtIXHXLBA9T70dnKjCzZvXvD%2BtcSsdSzoAVoyN7iDfckSf4G1Q1tWgsErVLp8RWSjFXt8TWQ9MDcJlBvXz7czCHvsvABjqkAZFcdtF48gz86x4LxTN6pnx5lr%2FIbY38PAJWQhh0OoIAEMn4ZmBRbcxfjCXEsnfu9zgt8brh1IKba16wTRiEskzMOylyHg7OZfq9eMwnE5j7TUBLmnft%2FP%2B7UVyou7g%2F%2FNC7JPCdj2wZLAQZyCsi2E2if7d0zj0LMlb3ToKu9cJ7lktyJL3W7xNAoAlI5Qq8BW2%2BEwyN76aIr9AkeRg5I4eYjrxV&X-Amz-Signature=6e8c7fd9fcdbba75d0d2d32f0471edfbc982d5e6682c3a276a4a408b06f73f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
