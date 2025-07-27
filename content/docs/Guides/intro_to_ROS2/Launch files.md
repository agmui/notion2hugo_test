---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSDZQD4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBVgc2nZ65SDy0jJS%2BFz8jqDNJmZbRhsUTxCBD00FlONAiEApeO6FzahD7O192UhI%2BvEd%2FfIkX8wNg%2FlBVylFFOwOtEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN9LiY1ALzQe4FzteCrcA1m%2B9vBg5f5RzJOAeB8zWLvEJJycqUnkwlspggSVTC8gQO6%2F3wH82dG9QTl6I0DeWANi0xj2IUOFpL3dte8XJ%2BIkTE%2BEsk8HEWnxzjx3vMJSrjzvCBDt49cjgadgWQyXRPkb1Nq7CCvOHetFGqmDiQc3%2BY4cWawvfu0oi1rXpNpsdYGHSTpCHUWWpWb5Pr6SAb287YBZrGiQC6OpOkCKVKXMyvn70Ughh3WbAMYqMF5ItecgtwwQmQuwe%2BMb%2F8zLMmo6bKPPhuQZSMHoqanw2hyOYG13VR%2BaFQwwQId9imHwGZ%2FIUCbQQZ188yytXZrpcOkdE8nvix0c1%2FOfzhVbY9Yf7zSTNrzyl5P9N1eC%2FUJZA3f8sx9DNl0yomo%2BKXjNHCi5fbc30hLn0EOI40H6entKSvvZlWTJ0%2BM7hs%2BfSWQdpnwo58BIDcum%2BeQP%2FlWg8%2BvndDZlu6vCwkIUOVX4KbS0Knly482Rm6EvwCEwRwLKreCxeQaGd90Mi7oZwJRnJw4cuqCxuTqY9%2BTtmbaUUdK8c7OT7qROtBh3ELrT5A5tzEe9w4YaY1jTDj15s6e5OEz5MEPHxpmCqT2m5AFir4cMt6uhol%2F%2BBizylGthOFdqzJ2Y9fvCMayV6QCAMIyBmcQGOqUBfnI%2Fyy%2FyLigL59SbwQ7Fs8rnDnY7UMXuVXHN7YxTtVOYqMFemAH%2B7MdQBKsfngmk1vrQI83n8K7EPSFGgvdu6WQXDEHarcPjH8vo8G%2BSZ1pjmZeEZAS1Kak2l8fUNvLNr4gIpqIPVsvQZjr9FZvWSeHLN4yo%2FhTMXFOe9fohWCixn1UhjpEvFdjaWYUFWDC3VWlhURz5wQ3m%2Fwx45u8MGaiiqMxD&X-Amz-Signature=14b9e9c6c3268d2d82cb00e03758bb1221ca5e333c05ae9fa28109d5d7a6d841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSDZQD4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBVgc2nZ65SDy0jJS%2BFz8jqDNJmZbRhsUTxCBD00FlONAiEApeO6FzahD7O192UhI%2BvEd%2FfIkX8wNg%2FlBVylFFOwOtEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN9LiY1ALzQe4FzteCrcA1m%2B9vBg5f5RzJOAeB8zWLvEJJycqUnkwlspggSVTC8gQO6%2F3wH82dG9QTl6I0DeWANi0xj2IUOFpL3dte8XJ%2BIkTE%2BEsk8HEWnxzjx3vMJSrjzvCBDt49cjgadgWQyXRPkb1Nq7CCvOHetFGqmDiQc3%2BY4cWawvfu0oi1rXpNpsdYGHSTpCHUWWpWb5Pr6SAb287YBZrGiQC6OpOkCKVKXMyvn70Ughh3WbAMYqMF5ItecgtwwQmQuwe%2BMb%2F8zLMmo6bKPPhuQZSMHoqanw2hyOYG13VR%2BaFQwwQId9imHwGZ%2FIUCbQQZ188yytXZrpcOkdE8nvix0c1%2FOfzhVbY9Yf7zSTNrzyl5P9N1eC%2FUJZA3f8sx9DNl0yomo%2BKXjNHCi5fbc30hLn0EOI40H6entKSvvZlWTJ0%2BM7hs%2BfSWQdpnwo58BIDcum%2BeQP%2FlWg8%2BvndDZlu6vCwkIUOVX4KbS0Knly482Rm6EvwCEwRwLKreCxeQaGd90Mi7oZwJRnJw4cuqCxuTqY9%2BTtmbaUUdK8c7OT7qROtBh3ELrT5A5tzEe9w4YaY1jTDj15s6e5OEz5MEPHxpmCqT2m5AFir4cMt6uhol%2F%2BBizylGthOFdqzJ2Y9fvCMayV6QCAMIyBmcQGOqUBfnI%2Fyy%2FyLigL59SbwQ7Fs8rnDnY7UMXuVXHN7YxTtVOYqMFemAH%2B7MdQBKsfngmk1vrQI83n8K7EPSFGgvdu6WQXDEHarcPjH8vo8G%2BSZ1pjmZeEZAS1Kak2l8fUNvLNr4gIpqIPVsvQZjr9FZvWSeHLN4yo%2FhTMXFOe9fohWCixn1UhjpEvFdjaWYUFWDC3VWlhURz5wQ3m%2Fwx45u8MGaiiqMxD&X-Amz-Signature=638706ea8ae23da460fad61bc664fc98257d506e50eff47e3e0eb89b6fdd61b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSDZQD4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBVgc2nZ65SDy0jJS%2BFz8jqDNJmZbRhsUTxCBD00FlONAiEApeO6FzahD7O192UhI%2BvEd%2FfIkX8wNg%2FlBVylFFOwOtEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN9LiY1ALzQe4FzteCrcA1m%2B9vBg5f5RzJOAeB8zWLvEJJycqUnkwlspggSVTC8gQO6%2F3wH82dG9QTl6I0DeWANi0xj2IUOFpL3dte8XJ%2BIkTE%2BEsk8HEWnxzjx3vMJSrjzvCBDt49cjgadgWQyXRPkb1Nq7CCvOHetFGqmDiQc3%2BY4cWawvfu0oi1rXpNpsdYGHSTpCHUWWpWb5Pr6SAb287YBZrGiQC6OpOkCKVKXMyvn70Ughh3WbAMYqMF5ItecgtwwQmQuwe%2BMb%2F8zLMmo6bKPPhuQZSMHoqanw2hyOYG13VR%2BaFQwwQId9imHwGZ%2FIUCbQQZ188yytXZrpcOkdE8nvix0c1%2FOfzhVbY9Yf7zSTNrzyl5P9N1eC%2FUJZA3f8sx9DNl0yomo%2BKXjNHCi5fbc30hLn0EOI40H6entKSvvZlWTJ0%2BM7hs%2BfSWQdpnwo58BIDcum%2BeQP%2FlWg8%2BvndDZlu6vCwkIUOVX4KbS0Knly482Rm6EvwCEwRwLKreCxeQaGd90Mi7oZwJRnJw4cuqCxuTqY9%2BTtmbaUUdK8c7OT7qROtBh3ELrT5A5tzEe9w4YaY1jTDj15s6e5OEz5MEPHxpmCqT2m5AFir4cMt6uhol%2F%2BBizylGthOFdqzJ2Y9fvCMayV6QCAMIyBmcQGOqUBfnI%2Fyy%2FyLigL59SbwQ7Fs8rnDnY7UMXuVXHN7YxTtVOYqMFemAH%2B7MdQBKsfngmk1vrQI83n8K7EPSFGgvdu6WQXDEHarcPjH8vo8G%2BSZ1pjmZeEZAS1Kak2l8fUNvLNr4gIpqIPVsvQZjr9FZvWSeHLN4yo%2FhTMXFOe9fohWCixn1UhjpEvFdjaWYUFWDC3VWlhURz5wQ3m%2Fwx45u8MGaiiqMxD&X-Amz-Signature=d56c2dd032d625d02d659768aaf1a9b4108e293d6187c7a38df64fbf1923a3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
