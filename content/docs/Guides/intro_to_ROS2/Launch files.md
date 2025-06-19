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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JTKCURQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Fm%2BSTKB0vYNTd2bY5aU7oU5ft3zC%2FmtT13YG6lVGouAiA%2F4JC%2BN9lotKKK05RVeqlKfQCQjqMXPiW9SELFy9TWwSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZUMnCsTAyVW2XY53KtwDBgY7CDgSo4WrVzsbge2%2B%2Fz%2BFXjLMq65HhvzX7G4A9rli6uVJwuX%2FSxCAhDN%2FQor%2BvAOqm7B3XdzW7GF8npufoVfW15G1Q%2B55nqSlpXWyAGDep5UF%2Fceny72R4o0bcEf35GZ%2BAiXDNbFcKY4EweNYV09nuDPy0fA3MyafgGzBZRNTC7vnLvDUeKqDBiRqBnjPjKfXM6%2BRTotAz3jkZg0XyOKUb0d76Zeksu%2Bft7ZTlWoKYPHlDowPY7lDTU8HoLTn4XzMN1qIf9KQOw%2FK0VVlhK2EmTvb2UtqByLF29cjLrwRO7%2BxRz8ctWTpSnA0ieiZmX8dTD7MibFUL3AqkrEJyNq0QQMCLtNnTR1kjgMUKQIKTQCO3R%2F%2F2uEwYwxd3Yip8UMf5VhSXQm3dJoN644XhpI6seGiY5d3nV0uXZNUyjpsmN6PNCW5cLGfaaiTBxMxTzgO%2BclP8IdBrldytYOyiUEpB7TYy%2BUItHVAKHLCi42Let4LKj2ALUZGoV8XpDBHGd1pCDy1g0Me3wpsrbUpPyJgUIAMXaiJhm9ooB207QcSGNCi67Ny%2FOzsilai6A06%2FNMu6XreagXIy0ZwtqZCzwpc3gIF5wVrjJFVz75RhLVH%2BxS80FbW%2BS4WN0gwqN%2FQwgY6pgHR3BRE2n2R8IXTyvT1Ax3fdk3dnly0nKVoYvwAPEfw52nohWDgytwGAK%2F57uhw7Pxh0FdtsRYFiXouIUKK9LLkUWpoa%2F2WIrfhSddYYIeImW8AuSRhH21lkCoLIIW0WrjxKWMihjaYTN3hNSgxGp0V6%2BEdtri95eVGFseY58bb45U7CNxZ468uBXU0d05iuPt5fG0DA4m5IlyOfrgog%2FRsup6cSsrv&X-Amz-Signature=c2a88d10384a1495a925c8736953c5bc197095b40dea9104d673bcac69818efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JTKCURQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Fm%2BSTKB0vYNTd2bY5aU7oU5ft3zC%2FmtT13YG6lVGouAiA%2F4JC%2BN9lotKKK05RVeqlKfQCQjqMXPiW9SELFy9TWwSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZUMnCsTAyVW2XY53KtwDBgY7CDgSo4WrVzsbge2%2B%2Fz%2BFXjLMq65HhvzX7G4A9rli6uVJwuX%2FSxCAhDN%2FQor%2BvAOqm7B3XdzW7GF8npufoVfW15G1Q%2B55nqSlpXWyAGDep5UF%2Fceny72R4o0bcEf35GZ%2BAiXDNbFcKY4EweNYV09nuDPy0fA3MyafgGzBZRNTC7vnLvDUeKqDBiRqBnjPjKfXM6%2BRTotAz3jkZg0XyOKUb0d76Zeksu%2Bft7ZTlWoKYPHlDowPY7lDTU8HoLTn4XzMN1qIf9KQOw%2FK0VVlhK2EmTvb2UtqByLF29cjLrwRO7%2BxRz8ctWTpSnA0ieiZmX8dTD7MibFUL3AqkrEJyNq0QQMCLtNnTR1kjgMUKQIKTQCO3R%2F%2F2uEwYwxd3Yip8UMf5VhSXQm3dJoN644XhpI6seGiY5d3nV0uXZNUyjpsmN6PNCW5cLGfaaiTBxMxTzgO%2BclP8IdBrldytYOyiUEpB7TYy%2BUItHVAKHLCi42Let4LKj2ALUZGoV8XpDBHGd1pCDy1g0Me3wpsrbUpPyJgUIAMXaiJhm9ooB207QcSGNCi67Ny%2FOzsilai6A06%2FNMu6XreagXIy0ZwtqZCzwpc3gIF5wVrjJFVz75RhLVH%2BxS80FbW%2BS4WN0gwqN%2FQwgY6pgHR3BRE2n2R8IXTyvT1Ax3fdk3dnly0nKVoYvwAPEfw52nohWDgytwGAK%2F57uhw7Pxh0FdtsRYFiXouIUKK9LLkUWpoa%2F2WIrfhSddYYIeImW8AuSRhH21lkCoLIIW0WrjxKWMihjaYTN3hNSgxGp0V6%2BEdtri95eVGFseY58bb45U7CNxZ468uBXU0d05iuPt5fG0DA4m5IlyOfrgog%2FRsup6cSsrv&X-Amz-Signature=1f036bfd59c172b03c6e2b11cb9678a48d68539aedba62c8d01d11f283b62f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JTKCURQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Fm%2BSTKB0vYNTd2bY5aU7oU5ft3zC%2FmtT13YG6lVGouAiA%2F4JC%2BN9lotKKK05RVeqlKfQCQjqMXPiW9SELFy9TWwSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZUMnCsTAyVW2XY53KtwDBgY7CDgSo4WrVzsbge2%2B%2Fz%2BFXjLMq65HhvzX7G4A9rli6uVJwuX%2FSxCAhDN%2FQor%2BvAOqm7B3XdzW7GF8npufoVfW15G1Q%2B55nqSlpXWyAGDep5UF%2Fceny72R4o0bcEf35GZ%2BAiXDNbFcKY4EweNYV09nuDPy0fA3MyafgGzBZRNTC7vnLvDUeKqDBiRqBnjPjKfXM6%2BRTotAz3jkZg0XyOKUb0d76Zeksu%2Bft7ZTlWoKYPHlDowPY7lDTU8HoLTn4XzMN1qIf9KQOw%2FK0VVlhK2EmTvb2UtqByLF29cjLrwRO7%2BxRz8ctWTpSnA0ieiZmX8dTD7MibFUL3AqkrEJyNq0QQMCLtNnTR1kjgMUKQIKTQCO3R%2F%2F2uEwYwxd3Yip8UMf5VhSXQm3dJoN644XhpI6seGiY5d3nV0uXZNUyjpsmN6PNCW5cLGfaaiTBxMxTzgO%2BclP8IdBrldytYOyiUEpB7TYy%2BUItHVAKHLCi42Let4LKj2ALUZGoV8XpDBHGd1pCDy1g0Me3wpsrbUpPyJgUIAMXaiJhm9ooB207QcSGNCi67Ny%2FOzsilai6A06%2FNMu6XreagXIy0ZwtqZCzwpc3gIF5wVrjJFVz75RhLVH%2BxS80FbW%2BS4WN0gwqN%2FQwgY6pgHR3BRE2n2R8IXTyvT1Ax3fdk3dnly0nKVoYvwAPEfw52nohWDgytwGAK%2F57uhw7Pxh0FdtsRYFiXouIUKK9LLkUWpoa%2F2WIrfhSddYYIeImW8AuSRhH21lkCoLIIW0WrjxKWMihjaYTN3hNSgxGp0V6%2BEdtri95eVGFseY58bb45U7CNxZ468uBXU0d05iuPt5fG0DA4m5IlyOfrgog%2FRsup6cSsrv&X-Amz-Signature=64c78b4b9c17e900510777448e70f9b296e98355a68dcfc663c5d9f0496cbbff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
