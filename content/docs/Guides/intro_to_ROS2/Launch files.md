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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TY75CCR%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBeowjORQj8DB3jt6F7uzX84HciwLFIfzIyNFSrH3jMPAiEA8miq7%2FBE4eiqlJfStkG1SPzopS%2BaOghXnzH%2Bwkdbf7Aq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMaPZz3UpYynxwoiPCrcAyVA9rods6tTFZf1lZqJuuCT%2BOHNsZ2WSrJN3zVRCYJWwdZlVhFWJfprts5GP%2BSJfATNjnNyH6XhmIPRDlnQQtyW9nwmywC4ZvRrmiaJDzaVBU7wRA8y74XKuYMRk9Ngu7Uz3dbCdEIXV9CoToJl5WS3Eo2fjsTh9Shkkr28LeZkl1fqo0N33Ut4Hl6i3WE%2BeS3%2BRsA8baqQIFUmhsLPviDLQZ7xT4FEF3iE5D2IRLlcatHFTw2LlF2NJBjMJIP1nUPxydJGXxhzH9%2BztU%2BvrBFN8RPFcKyb06pAg6GkBRMC1L7vBK9gababNzl3XPa%2B0F2BF7%2FOL06Ifh%2BKNiJnbx13oSkYHR5F5Ajq3oIi6dXAh7Kfxd4bhWH4oiZL7Z0Nd9Dh56oasPnAltmWRud8H%2BmPXfjLZCpUSOWLnEW%2FpHbomPiM5CqXaxUtqC42lfiFvkjW8kRmcv3K9ssPdOynuEkoZ8Mw6nvVqyiBRT5HlWhfokf9lGnwONtzyyT2jJGOo7vAQ8ajjIR95Lejuq0rc6j%2BVQPLlV4RLVguTV9Yqa0Jnyttn6EcZYtxDTVF%2F%2BenyePNILV55YO%2By5TE9ohhpdWJgWCNT3VksCEFmgE3ls02JBmIWhVh%2BUO1x2utMJu8jr0GOqUBhZ%2BmvYMfB1CAYhZYAfhgkCCRonk2paz5EInes9A7XRfzUTdYI1q2QjPyk7xCV0NQGalSczzGSN%2F5ouYKnzMSWztKgGBwDUC8zzbtfs8wS7JAfb61VGASz%2BndzLauKYIb%2BftGxPOnU0ScgPCOKgpC3enbkLFAmV49reC%2FYx4%2BfOQ7yYDaJBihxkg7zt1WTzff8hKuFrHFntntNtBPmuFgMRAM9v%2FM&X-Amz-Signature=7fff52a228787962ae797bb4a8d84fd9cd777a6cdf181ea30489bfc18d0d118a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TY75CCR%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBeowjORQj8DB3jt6F7uzX84HciwLFIfzIyNFSrH3jMPAiEA8miq7%2FBE4eiqlJfStkG1SPzopS%2BaOghXnzH%2Bwkdbf7Aq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMaPZz3UpYynxwoiPCrcAyVA9rods6tTFZf1lZqJuuCT%2BOHNsZ2WSrJN3zVRCYJWwdZlVhFWJfprts5GP%2BSJfATNjnNyH6XhmIPRDlnQQtyW9nwmywC4ZvRrmiaJDzaVBU7wRA8y74XKuYMRk9Ngu7Uz3dbCdEIXV9CoToJl5WS3Eo2fjsTh9Shkkr28LeZkl1fqo0N33Ut4Hl6i3WE%2BeS3%2BRsA8baqQIFUmhsLPviDLQZ7xT4FEF3iE5D2IRLlcatHFTw2LlF2NJBjMJIP1nUPxydJGXxhzH9%2BztU%2BvrBFN8RPFcKyb06pAg6GkBRMC1L7vBK9gababNzl3XPa%2B0F2BF7%2FOL06Ifh%2BKNiJnbx13oSkYHR5F5Ajq3oIi6dXAh7Kfxd4bhWH4oiZL7Z0Nd9Dh56oasPnAltmWRud8H%2BmPXfjLZCpUSOWLnEW%2FpHbomPiM5CqXaxUtqC42lfiFvkjW8kRmcv3K9ssPdOynuEkoZ8Mw6nvVqyiBRT5HlWhfokf9lGnwONtzyyT2jJGOo7vAQ8ajjIR95Lejuq0rc6j%2BVQPLlV4RLVguTV9Yqa0Jnyttn6EcZYtxDTVF%2F%2BenyePNILV55YO%2By5TE9ohhpdWJgWCNT3VksCEFmgE3ls02JBmIWhVh%2BUO1x2utMJu8jr0GOqUBhZ%2BmvYMfB1CAYhZYAfhgkCCRonk2paz5EInes9A7XRfzUTdYI1q2QjPyk7xCV0NQGalSczzGSN%2F5ouYKnzMSWztKgGBwDUC8zzbtfs8wS7JAfb61VGASz%2BndzLauKYIb%2BftGxPOnU0ScgPCOKgpC3enbkLFAmV49reC%2FYx4%2BfOQ7yYDaJBihxkg7zt1WTzff8hKuFrHFntntNtBPmuFgMRAM9v%2FM&X-Amz-Signature=414b41882b2e4133ad6b43956d992ebe589699af7bfc124814c855920896e1bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TY75CCR%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBeowjORQj8DB3jt6F7uzX84HciwLFIfzIyNFSrH3jMPAiEA8miq7%2FBE4eiqlJfStkG1SPzopS%2BaOghXnzH%2Bwkdbf7Aq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMaPZz3UpYynxwoiPCrcAyVA9rods6tTFZf1lZqJuuCT%2BOHNsZ2WSrJN3zVRCYJWwdZlVhFWJfprts5GP%2BSJfATNjnNyH6XhmIPRDlnQQtyW9nwmywC4ZvRrmiaJDzaVBU7wRA8y74XKuYMRk9Ngu7Uz3dbCdEIXV9CoToJl5WS3Eo2fjsTh9Shkkr28LeZkl1fqo0N33Ut4Hl6i3WE%2BeS3%2BRsA8baqQIFUmhsLPviDLQZ7xT4FEF3iE5D2IRLlcatHFTw2LlF2NJBjMJIP1nUPxydJGXxhzH9%2BztU%2BvrBFN8RPFcKyb06pAg6GkBRMC1L7vBK9gababNzl3XPa%2B0F2BF7%2FOL06Ifh%2BKNiJnbx13oSkYHR5F5Ajq3oIi6dXAh7Kfxd4bhWH4oiZL7Z0Nd9Dh56oasPnAltmWRud8H%2BmPXfjLZCpUSOWLnEW%2FpHbomPiM5CqXaxUtqC42lfiFvkjW8kRmcv3K9ssPdOynuEkoZ8Mw6nvVqyiBRT5HlWhfokf9lGnwONtzyyT2jJGOo7vAQ8ajjIR95Lejuq0rc6j%2BVQPLlV4RLVguTV9Yqa0Jnyttn6EcZYtxDTVF%2F%2BenyePNILV55YO%2By5TE9ohhpdWJgWCNT3VksCEFmgE3ls02JBmIWhVh%2BUO1x2utMJu8jr0GOqUBhZ%2BmvYMfB1CAYhZYAfhgkCCRonk2paz5EInes9A7XRfzUTdYI1q2QjPyk7xCV0NQGalSczzGSN%2F5ouYKnzMSWztKgGBwDUC8zzbtfs8wS7JAfb61VGASz%2BndzLauKYIb%2BftGxPOnU0ScgPCOKgpC3enbkLFAmV49reC%2FYx4%2BfOQ7yYDaJBihxkg7zt1WTzff8hKuFrHFntntNtBPmuFgMRAM9v%2FM&X-Amz-Signature=cc4ac42bd3555d3ca8bd2f63701f944ebbae4644c9a4625f98839f505e3f9e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
