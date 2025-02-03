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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7VOPACX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHa34jldL3ItwcjcPBbceeWV%2F4S9Kqo2Ym8MAOrXOodQAiEA7vnaJJiIqB%2F2Yq0EImrdWW%2F6ZVUpnmE4zavG4E0%2FgBEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDE%2F7lhmAm19a0Nn3nyrcA6AK9sQorSGm8BTMJc%2Bpl3Au7yDzHglj6I%2F4W7XHfdRYEH4UG4%2FnuCsArmhhPfo5dhn4yApoDGSQcTH572%2F2NNJzpVFyG9xpMSro68Z7XYltJDFFJlDnBJRfWZ05kIR3fFcgJ0v54bq2bGdXXtuKE3S03QHg9HuTCb9wx5nkDHbZiLzrV78Cgiq%2F6qIyHzsw8MHCCSnBUHkfymQhLs0heZOvQXUMm8r%2FJjfn%2BRhj604Rcw2lJxPhNAqQoPqKMpMFUfjUJ2X4roIjZkDG9o7KmEX2ICbTVkIM6Rzcrmy3OmTe6X7PSqUFCR70yUuMSZIA0%2FdTfQibG%2FjRM88sMko818IT%2Fq74kUHSGPnzYgZks2TTHsBq6gatF5%2FlIGOFzGUkDhYC6X2JWKC214xcCMzkHKy68jbMUgtYuvSE8DHIH3E%2Fgd02pcYSY7gTeF4%2BDgQgHlj%2F50LM3PdKSiqqF9ejXFZ9%2BuH2eD8S7OFpoaYLqpHH8rrmU4HAgjrTCF%2FMEJysLAq5oN7GsfXxKimltV7VrRdmmd09grFtwh07lKiTFL6fgAWaaiOdrc3g3qQgxZ9orQupDKDZ9kgfCYx9QjiIvgB6kyYobfwnRacyFr0%2FnsqxXIU%2BedKg3AKpVhhoMIGPg70GOqUBMhbRA9d1NqUXOPLzbySSielBZj903%2Bu4fgnpt0vbRsKD2jZdn4LCjQ6sQjd3B0z%2FRKTRsQo6pYDlFRD%2BNH2rt6HGgb%2BYPjz84xqPBqK6U7gJZsA8R6RjDSEDajXuNGUSnGBNdy5Me3AGN2LnPhAnov7ZoXJH73d7BlGyKrWPVcCV%2BWT8ZQHCWM%2Fxz0l5OfXn7lrOLdxBdOx32IX99XxRqSwbntOc&X-Amz-Signature=b340c4be74058573a0be054c066986163679a71427b0ddf7825b2cb84af27ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7VOPACX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHa34jldL3ItwcjcPBbceeWV%2F4S9Kqo2Ym8MAOrXOodQAiEA7vnaJJiIqB%2F2Yq0EImrdWW%2F6ZVUpnmE4zavG4E0%2FgBEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDE%2F7lhmAm19a0Nn3nyrcA6AK9sQorSGm8BTMJc%2Bpl3Au7yDzHglj6I%2F4W7XHfdRYEH4UG4%2FnuCsArmhhPfo5dhn4yApoDGSQcTH572%2F2NNJzpVFyG9xpMSro68Z7XYltJDFFJlDnBJRfWZ05kIR3fFcgJ0v54bq2bGdXXtuKE3S03QHg9HuTCb9wx5nkDHbZiLzrV78Cgiq%2F6qIyHzsw8MHCCSnBUHkfymQhLs0heZOvQXUMm8r%2FJjfn%2BRhj604Rcw2lJxPhNAqQoPqKMpMFUfjUJ2X4roIjZkDG9o7KmEX2ICbTVkIM6Rzcrmy3OmTe6X7PSqUFCR70yUuMSZIA0%2FdTfQibG%2FjRM88sMko818IT%2Fq74kUHSGPnzYgZks2TTHsBq6gatF5%2FlIGOFzGUkDhYC6X2JWKC214xcCMzkHKy68jbMUgtYuvSE8DHIH3E%2Fgd02pcYSY7gTeF4%2BDgQgHlj%2F50LM3PdKSiqqF9ejXFZ9%2BuH2eD8S7OFpoaYLqpHH8rrmU4HAgjrTCF%2FMEJysLAq5oN7GsfXxKimltV7VrRdmmd09grFtwh07lKiTFL6fgAWaaiOdrc3g3qQgxZ9orQupDKDZ9kgfCYx9QjiIvgB6kyYobfwnRacyFr0%2FnsqxXIU%2BedKg3AKpVhhoMIGPg70GOqUBMhbRA9d1NqUXOPLzbySSielBZj903%2Bu4fgnpt0vbRsKD2jZdn4LCjQ6sQjd3B0z%2FRKTRsQo6pYDlFRD%2BNH2rt6HGgb%2BYPjz84xqPBqK6U7gJZsA8R6RjDSEDajXuNGUSnGBNdy5Me3AGN2LnPhAnov7ZoXJH73d7BlGyKrWPVcCV%2BWT8ZQHCWM%2Fxz0l5OfXn7lrOLdxBdOx32IX99XxRqSwbntOc&X-Amz-Signature=d4752b8a27990f93fb286f45ad60545d2702ee4fcd2b1170c3db222e97b4502b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7VOPACX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHa34jldL3ItwcjcPBbceeWV%2F4S9Kqo2Ym8MAOrXOodQAiEA7vnaJJiIqB%2F2Yq0EImrdWW%2F6ZVUpnmE4zavG4E0%2FgBEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDE%2F7lhmAm19a0Nn3nyrcA6AK9sQorSGm8BTMJc%2Bpl3Au7yDzHglj6I%2F4W7XHfdRYEH4UG4%2FnuCsArmhhPfo5dhn4yApoDGSQcTH572%2F2NNJzpVFyG9xpMSro68Z7XYltJDFFJlDnBJRfWZ05kIR3fFcgJ0v54bq2bGdXXtuKE3S03QHg9HuTCb9wx5nkDHbZiLzrV78Cgiq%2F6qIyHzsw8MHCCSnBUHkfymQhLs0heZOvQXUMm8r%2FJjfn%2BRhj604Rcw2lJxPhNAqQoPqKMpMFUfjUJ2X4roIjZkDG9o7KmEX2ICbTVkIM6Rzcrmy3OmTe6X7PSqUFCR70yUuMSZIA0%2FdTfQibG%2FjRM88sMko818IT%2Fq74kUHSGPnzYgZks2TTHsBq6gatF5%2FlIGOFzGUkDhYC6X2JWKC214xcCMzkHKy68jbMUgtYuvSE8DHIH3E%2Fgd02pcYSY7gTeF4%2BDgQgHlj%2F50LM3PdKSiqqF9ejXFZ9%2BuH2eD8S7OFpoaYLqpHH8rrmU4HAgjrTCF%2FMEJysLAq5oN7GsfXxKimltV7VrRdmmd09grFtwh07lKiTFL6fgAWaaiOdrc3g3qQgxZ9orQupDKDZ9kgfCYx9QjiIvgB6kyYobfwnRacyFr0%2FnsqxXIU%2BedKg3AKpVhhoMIGPg70GOqUBMhbRA9d1NqUXOPLzbySSielBZj903%2Bu4fgnpt0vbRsKD2jZdn4LCjQ6sQjd3B0z%2FRKTRsQo6pYDlFRD%2BNH2rt6HGgb%2BYPjz84xqPBqK6U7gJZsA8R6RjDSEDajXuNGUSnGBNdy5Me3AGN2LnPhAnov7ZoXJH73d7BlGyKrWPVcCV%2BWT8ZQHCWM%2Fxz0l5OfXn7lrOLdxBdOx32IX99XxRqSwbntOc&X-Amz-Signature=15c6411fc86c9a8bff04fd85a967b8f000fe2bf52e4d1873463940b771808bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
