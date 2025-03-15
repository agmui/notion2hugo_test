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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDBTADJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4%2FV8QKOBl1XtbIBaGanE70w1ljdubU0GSJXOdCYo%2BlAIhANpvXAOcAlNRRAouQyGogZjsXPAbHKAXJagEZ5CWdDf7Kv8DCBEQABoMNjM3NDIzMTgzODA1IgxeLfdnFV%2Byx7cIjRgq3ANhj7Je1azrPvzCVtQpv8rFChmn4yFsWzyBQzNVLDLJgmSHRANmXx2kjSrNvbOpbPnBvtcfm9R1mlP7EbJ14P7mHo0GhSUUhba9llUlTL6xE9TDzNYBBP35Vmy3u0h0jF00gyAssQ73ac08tCBdg%2B7ujyEWD4QVBeqSVnhOwUVy%2FCz7tVO4emcby6OG2XlImaB1%2Fapik2ogn%2BfBWrYqJjrCGBVFU1RTE%2FaVC0gH26%2F6idSbbcJq3sKJroFPn5TJVj3XXBq%2Bmdz529WQkn6EK1SqIevp%2BF6W%2FbuSX3YcS8z05LvjWohhmlsnWJeNUjbDFcEBkfhl7LLfDEgQZ%2BnADS5f5zIUklwomaD5%2FptCacp%2Bwl61A7LeimRS7aY52yEwrpWZfWfv%2BkLroKAMDaaeUnvnAdryBKPl7%2BUvt5cbKEDVS8lX1lRK3%2BklftJ2%2F5P45HkKM6x9RPWLZo3Y90iV0W%2BG3ibq8bROOUJtST%2FpoKFjiYX3lFXhQDZ2fgZfxFGHra3VYEV82sE%2BiV5H00cdlnuyXfkzd%2FKM2ixf87uJ9gZfBUoqDVsioEPJn5WNFF5peHP7kgaZZ0oljjuIOkW7yL3rb7pmK9UflTkeJFvIarEyX9og%2Bdpg8RqTYXEDUDC24dS%2BBjqkAS7Wwr1m4j%2B1obYsaomUKx2Iqsvn5DrhiD40iYgzgokkk0QVuikeOC4838%2FGplxlt3ClR%2F3y%2BnXYhF08CUrBDQTM0MjZjHO%2FIrMnIn401rbjUygj4fsd54eSrILJORHc7ZG%2Bo7eNU1yh%2BXJqbHHFnNgB0hCh2KM5%2BBi2bbkgP4f9KB0iLSSvlmcS6dGAJ8EWrgw9PLQOkU8m9tXZG1zFDlrycr0b&X-Amz-Signature=7da3f8572a0f2bf361998ad17de661956073f99198545af52888a2fca43d5c93&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDBTADJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4%2FV8QKOBl1XtbIBaGanE70w1ljdubU0GSJXOdCYo%2BlAIhANpvXAOcAlNRRAouQyGogZjsXPAbHKAXJagEZ5CWdDf7Kv8DCBEQABoMNjM3NDIzMTgzODA1IgxeLfdnFV%2Byx7cIjRgq3ANhj7Je1azrPvzCVtQpv8rFChmn4yFsWzyBQzNVLDLJgmSHRANmXx2kjSrNvbOpbPnBvtcfm9R1mlP7EbJ14P7mHo0GhSUUhba9llUlTL6xE9TDzNYBBP35Vmy3u0h0jF00gyAssQ73ac08tCBdg%2B7ujyEWD4QVBeqSVnhOwUVy%2FCz7tVO4emcby6OG2XlImaB1%2Fapik2ogn%2BfBWrYqJjrCGBVFU1RTE%2FaVC0gH26%2F6idSbbcJq3sKJroFPn5TJVj3XXBq%2Bmdz529WQkn6EK1SqIevp%2BF6W%2FbuSX3YcS8z05LvjWohhmlsnWJeNUjbDFcEBkfhl7LLfDEgQZ%2BnADS5f5zIUklwomaD5%2FptCacp%2Bwl61A7LeimRS7aY52yEwrpWZfWfv%2BkLroKAMDaaeUnvnAdryBKPl7%2BUvt5cbKEDVS8lX1lRK3%2BklftJ2%2F5P45HkKM6x9RPWLZo3Y90iV0W%2BG3ibq8bROOUJtST%2FpoKFjiYX3lFXhQDZ2fgZfxFGHra3VYEV82sE%2BiV5H00cdlnuyXfkzd%2FKM2ixf87uJ9gZfBUoqDVsioEPJn5WNFF5peHP7kgaZZ0oljjuIOkW7yL3rb7pmK9UflTkeJFvIarEyX9og%2Bdpg8RqTYXEDUDC24dS%2BBjqkAS7Wwr1m4j%2B1obYsaomUKx2Iqsvn5DrhiD40iYgzgokkk0QVuikeOC4838%2FGplxlt3ClR%2F3y%2BnXYhF08CUrBDQTM0MjZjHO%2FIrMnIn401rbjUygj4fsd54eSrILJORHc7ZG%2Bo7eNU1yh%2BXJqbHHFnNgB0hCh2KM5%2BBi2bbkgP4f9KB0iLSSvlmcS6dGAJ8EWrgw9PLQOkU8m9tXZG1zFDlrycr0b&X-Amz-Signature=a9510824fe7e3c342dcb729ad8959ff63a2ec7668078127d76f464cfbf2cc7a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDBTADJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4%2FV8QKOBl1XtbIBaGanE70w1ljdubU0GSJXOdCYo%2BlAIhANpvXAOcAlNRRAouQyGogZjsXPAbHKAXJagEZ5CWdDf7Kv8DCBEQABoMNjM3NDIzMTgzODA1IgxeLfdnFV%2Byx7cIjRgq3ANhj7Je1azrPvzCVtQpv8rFChmn4yFsWzyBQzNVLDLJgmSHRANmXx2kjSrNvbOpbPnBvtcfm9R1mlP7EbJ14P7mHo0GhSUUhba9llUlTL6xE9TDzNYBBP35Vmy3u0h0jF00gyAssQ73ac08tCBdg%2B7ujyEWD4QVBeqSVnhOwUVy%2FCz7tVO4emcby6OG2XlImaB1%2Fapik2ogn%2BfBWrYqJjrCGBVFU1RTE%2FaVC0gH26%2F6idSbbcJq3sKJroFPn5TJVj3XXBq%2Bmdz529WQkn6EK1SqIevp%2BF6W%2FbuSX3YcS8z05LvjWohhmlsnWJeNUjbDFcEBkfhl7LLfDEgQZ%2BnADS5f5zIUklwomaD5%2FptCacp%2Bwl61A7LeimRS7aY52yEwrpWZfWfv%2BkLroKAMDaaeUnvnAdryBKPl7%2BUvt5cbKEDVS8lX1lRK3%2BklftJ2%2F5P45HkKM6x9RPWLZo3Y90iV0W%2BG3ibq8bROOUJtST%2FpoKFjiYX3lFXhQDZ2fgZfxFGHra3VYEV82sE%2BiV5H00cdlnuyXfkzd%2FKM2ixf87uJ9gZfBUoqDVsioEPJn5WNFF5peHP7kgaZZ0oljjuIOkW7yL3rb7pmK9UflTkeJFvIarEyX9og%2Bdpg8RqTYXEDUDC24dS%2BBjqkAS7Wwr1m4j%2B1obYsaomUKx2Iqsvn5DrhiD40iYgzgokkk0QVuikeOC4838%2FGplxlt3ClR%2F3y%2BnXYhF08CUrBDQTM0MjZjHO%2FIrMnIn401rbjUygj4fsd54eSrILJORHc7ZG%2Bo7eNU1yh%2BXJqbHHFnNgB0hCh2KM5%2BBi2bbkgP4f9KB0iLSSvlmcS6dGAJ8EWrgw9PLQOkU8m9tXZG1zFDlrycr0b&X-Amz-Signature=433a445ba0835988d6172c5b46910a94b7ce8b84dccac7581a6f0ed153b30d00&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
