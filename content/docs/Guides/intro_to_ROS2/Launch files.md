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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ER63Y7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCNZYLZjx3cpUQw7Uy2fdlkioBlBoILybxBjyGE5QgEewIhANEfoOEAY%2B6chNnWLYBz%2BWsxKdzvqm%2Bsjhxxc1ofbwN5KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFa1e92DdYe%2BRdr0sq3APfCq5gwVBOYQAvHKdi47OYwCkOi%2BQP98Zp26bn02bgh%2BUVMF9N32dILv6COLMxveRQAynecpHhUBp04j73%2BPx2Y2wGqcwb5e6Eic6RZFdw6t9UQ%2FLRUtHAV8CPLPs5n0X4kVdYJt8RH9uYLNivauzQ94v7CdLY%2FQq60FhaLpGAzDYeYu%2B%2FZgPsPXlqJQJqYkVt55rJU7vgvqAXBB5q3kgXw6JPfJU6iDoIS8QYneaL98CxeSXevFVYpvw6KsXsCHyQ0uY%2BbKBw2%2F0whSGQjJ9snlgijTvl%2BMdcvoRUl2OEXDLCVjtiF1PxWcrNiqCoX7mkix01wqqe1RIjwCMqsika%2Bb5Xa07cyKcTqzVBbJVwXh4i9Uhb9pYRsAbQM6ryX0EUd3OQXg8tZyhl%2BZEbggLa01V7fVwwptA%2BlRAwjic8cO7%2F5n%2FJdvXe%2FGkEAQxhutcABuIzW2YEzeO8fAzHsUBVb44oq9nEWFCl4oCuoby%2BjvupEnb7HR9L7s88Af%2BOq4nbaUUMuuWh7ne4ZjWqVDfYuhcWVN%2BAwSdi%2BmEzQW%2BnxcfBjt2KJyQMPiq07rGI%2Bpk27qgI8ZqBBsYG%2B9d7cnBlJZMs27H5A5OcmVGS2CfGU2txU2diWuHzteXhBDCPzf%2B%2BBjqkAcBW1SraZjRbn8Bt6ruriQAQJAMt7mJEjmCIPbrnoTDwRMcfaozDdklw3gKyaEmN5yRMqsbywcbAQW3mteJ5F0ehByM662mQ6jZ73X4MaC5eDGKiF1ZtMQSS3JxTmMTW8xMxNSxmNgGDQ%2FUxLol9cqLVXXPgazMTWH3xSDWJdsuyTcvOxR9rOk%2BDjSUFSiP%2FVfJlTz%2FWoXxAimWYBdIECD4D7WGQ&X-Amz-Signature=5b4fe84e4318bf1b8b5d0372a77b95d732a2c54e186f129c71d554b1f2e943eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ER63Y7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCNZYLZjx3cpUQw7Uy2fdlkioBlBoILybxBjyGE5QgEewIhANEfoOEAY%2B6chNnWLYBz%2BWsxKdzvqm%2Bsjhxxc1ofbwN5KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFa1e92DdYe%2BRdr0sq3APfCq5gwVBOYQAvHKdi47OYwCkOi%2BQP98Zp26bn02bgh%2BUVMF9N32dILv6COLMxveRQAynecpHhUBp04j73%2BPx2Y2wGqcwb5e6Eic6RZFdw6t9UQ%2FLRUtHAV8CPLPs5n0X4kVdYJt8RH9uYLNivauzQ94v7CdLY%2FQq60FhaLpGAzDYeYu%2B%2FZgPsPXlqJQJqYkVt55rJU7vgvqAXBB5q3kgXw6JPfJU6iDoIS8QYneaL98CxeSXevFVYpvw6KsXsCHyQ0uY%2BbKBw2%2F0whSGQjJ9snlgijTvl%2BMdcvoRUl2OEXDLCVjtiF1PxWcrNiqCoX7mkix01wqqe1RIjwCMqsika%2Bb5Xa07cyKcTqzVBbJVwXh4i9Uhb9pYRsAbQM6ryX0EUd3OQXg8tZyhl%2BZEbggLa01V7fVwwptA%2BlRAwjic8cO7%2F5n%2FJdvXe%2FGkEAQxhutcABuIzW2YEzeO8fAzHsUBVb44oq9nEWFCl4oCuoby%2BjvupEnb7HR9L7s88Af%2BOq4nbaUUMuuWh7ne4ZjWqVDfYuhcWVN%2BAwSdi%2BmEzQW%2BnxcfBjt2KJyQMPiq07rGI%2Bpk27qgI8ZqBBsYG%2B9d7cnBlJZMs27H5A5OcmVGS2CfGU2txU2diWuHzteXhBDCPzf%2B%2BBjqkAcBW1SraZjRbn8Bt6ruriQAQJAMt7mJEjmCIPbrnoTDwRMcfaozDdklw3gKyaEmN5yRMqsbywcbAQW3mteJ5F0ehByM662mQ6jZ73X4MaC5eDGKiF1ZtMQSS3JxTmMTW8xMxNSxmNgGDQ%2FUxLol9cqLVXXPgazMTWH3xSDWJdsuyTcvOxR9rOk%2BDjSUFSiP%2FVfJlTz%2FWoXxAimWYBdIECD4D7WGQ&X-Amz-Signature=f160df6a34a9d25900944f5d3bcd6737facdfd0222bf2798abb79e0796dae944&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ER63Y7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCNZYLZjx3cpUQw7Uy2fdlkioBlBoILybxBjyGE5QgEewIhANEfoOEAY%2B6chNnWLYBz%2BWsxKdzvqm%2Bsjhxxc1ofbwN5KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFa1e92DdYe%2BRdr0sq3APfCq5gwVBOYQAvHKdi47OYwCkOi%2BQP98Zp26bn02bgh%2BUVMF9N32dILv6COLMxveRQAynecpHhUBp04j73%2BPx2Y2wGqcwb5e6Eic6RZFdw6t9UQ%2FLRUtHAV8CPLPs5n0X4kVdYJt8RH9uYLNivauzQ94v7CdLY%2FQq60FhaLpGAzDYeYu%2B%2FZgPsPXlqJQJqYkVt55rJU7vgvqAXBB5q3kgXw6JPfJU6iDoIS8QYneaL98CxeSXevFVYpvw6KsXsCHyQ0uY%2BbKBw2%2F0whSGQjJ9snlgijTvl%2BMdcvoRUl2OEXDLCVjtiF1PxWcrNiqCoX7mkix01wqqe1RIjwCMqsika%2Bb5Xa07cyKcTqzVBbJVwXh4i9Uhb9pYRsAbQM6ryX0EUd3OQXg8tZyhl%2BZEbggLa01V7fVwwptA%2BlRAwjic8cO7%2F5n%2FJdvXe%2FGkEAQxhutcABuIzW2YEzeO8fAzHsUBVb44oq9nEWFCl4oCuoby%2BjvupEnb7HR9L7s88Af%2BOq4nbaUUMuuWh7ne4ZjWqVDfYuhcWVN%2BAwSdi%2BmEzQW%2BnxcfBjt2KJyQMPiq07rGI%2Bpk27qgI8ZqBBsYG%2B9d7cnBlJZMs27H5A5OcmVGS2CfGU2txU2diWuHzteXhBDCPzf%2B%2BBjqkAcBW1SraZjRbn8Bt6ruriQAQJAMt7mJEjmCIPbrnoTDwRMcfaozDdklw3gKyaEmN5yRMqsbywcbAQW3mteJ5F0ehByM662mQ6jZ73X4MaC5eDGKiF1ZtMQSS3JxTmMTW8xMxNSxmNgGDQ%2FUxLol9cqLVXXPgazMTWH3xSDWJdsuyTcvOxR9rOk%2BDjSUFSiP%2FVfJlTz%2FWoXxAimWYBdIECD4D7WGQ&X-Amz-Signature=d108f5100e24f6e0788c75941603bdf15b3d50ce1c7645a6415a937d6468e2e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
