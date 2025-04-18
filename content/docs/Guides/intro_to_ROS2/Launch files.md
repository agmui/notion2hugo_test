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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXTRDPDN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzxcex1pCHzTj2yVavNuXr8BtQlTsskcVi1EVgwDC3lQIgFcF22T%2FZ1TwSP%2BWckY5w8t0sKqAL6MQMMofFdp%2FibLMq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBITAVKEC0ZZUndQxCrcA5JiPM3sn5ItFoXgx4Q5t28irnSTEEwGO8o34cWEvQ7Tx200%2FKNEmwUQgddYEEaxndyMYkopMJ6iEwU8VHzwYVL9PaeR41Ym7WEqu%2BFIkqVfBoK9kalu%2FnChdMiDeygwAyxfcEu3g1DEC1X8vkJW8ZjIaDAwKX8vNRlXutJEQqkKZOQE9XZLEyyYLb02A1zf2ZS5Zy5hhXbQyQN5Q%2BxDmi2lKqdSJ3Y7v75BfU7Mhl%2Bnj22Vsn6aD6jCEW1adi55aWvhCyXhzZq5n90IXnyA1%2Bzc0Bts9BZ6OXRRjwg4cIPFKQskkokTy%2Bf0T4zHPNfwp5O0aeogEUZA6%2BbrjaALlHWRnKM3Ru%2BK3M0O1yf3aeKJr2hZc3hQTohjcykHgXtvsSTHzGeSJlfVVzDoPS64Y0%2F8uFgeqKbdVGn9X%2BITAgDv7SeSzakZcTxvoShGzFFHvVmpJ2nBBIGiefIzDn0%2BHhQGoj%2BaCOn6bsnTlPvNhBp8TduYYRE063oYYp3%2FekyYliiZnOHcUWfxk%2FPraKla971Sl4PEJ%2BNDpjTz0hwZBxhnOtuCF0HcLEoTCqVFn2a%2FWuJXqd2MSdTmkGH1EOXHATeuIQ0vB5a5hHXhMeKPTMNL0%2B3AeAFfccawt6uoML29hsAGOqUBuPw5GpPWRvCyMUYohTLLUmuS65bGsiEv2niwT0bOaXt3G3LklqMv%2BH4znGR%2BDPSFDMT25QSEytiP9ivNNe1wJ%2FkxGubdYYHvJDNWRlC%2FbmAViU3NYFQDy2IR8A3yFXWc%2BKRKkxYEFAVFf3qH1dIyIqv8gbov%2Bveq3WA%2FQ%2FWO%2BI1lDn5n0vIjDnpfrvKjDxtzL5dlNU%2Fc5PnmDxKtJxfscFt2SwdH&X-Amz-Signature=8f4430f9504e1958995dd95bd9f88923e654a92d6b00fe2e47a8a19c888448f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXTRDPDN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzxcex1pCHzTj2yVavNuXr8BtQlTsskcVi1EVgwDC3lQIgFcF22T%2FZ1TwSP%2BWckY5w8t0sKqAL6MQMMofFdp%2FibLMq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBITAVKEC0ZZUndQxCrcA5JiPM3sn5ItFoXgx4Q5t28irnSTEEwGO8o34cWEvQ7Tx200%2FKNEmwUQgddYEEaxndyMYkopMJ6iEwU8VHzwYVL9PaeR41Ym7WEqu%2BFIkqVfBoK9kalu%2FnChdMiDeygwAyxfcEu3g1DEC1X8vkJW8ZjIaDAwKX8vNRlXutJEQqkKZOQE9XZLEyyYLb02A1zf2ZS5Zy5hhXbQyQN5Q%2BxDmi2lKqdSJ3Y7v75BfU7Mhl%2Bnj22Vsn6aD6jCEW1adi55aWvhCyXhzZq5n90IXnyA1%2Bzc0Bts9BZ6OXRRjwg4cIPFKQskkokTy%2Bf0T4zHPNfwp5O0aeogEUZA6%2BbrjaALlHWRnKM3Ru%2BK3M0O1yf3aeKJr2hZc3hQTohjcykHgXtvsSTHzGeSJlfVVzDoPS64Y0%2F8uFgeqKbdVGn9X%2BITAgDv7SeSzakZcTxvoShGzFFHvVmpJ2nBBIGiefIzDn0%2BHhQGoj%2BaCOn6bsnTlPvNhBp8TduYYRE063oYYp3%2FekyYliiZnOHcUWfxk%2FPraKla971Sl4PEJ%2BNDpjTz0hwZBxhnOtuCF0HcLEoTCqVFn2a%2FWuJXqd2MSdTmkGH1EOXHATeuIQ0vB5a5hHXhMeKPTMNL0%2B3AeAFfccawt6uoML29hsAGOqUBuPw5GpPWRvCyMUYohTLLUmuS65bGsiEv2niwT0bOaXt3G3LklqMv%2BH4znGR%2BDPSFDMT25QSEytiP9ivNNe1wJ%2FkxGubdYYHvJDNWRlC%2FbmAViU3NYFQDy2IR8A3yFXWc%2BKRKkxYEFAVFf3qH1dIyIqv8gbov%2Bveq3WA%2FQ%2FWO%2BI1lDn5n0vIjDnpfrvKjDxtzL5dlNU%2Fc5PnmDxKtJxfscFt2SwdH&X-Amz-Signature=76e9ac223ce8fd0b96240546b5140fca666a224bdd1bf2bac12cdac52e12f7ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXTRDPDN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzxcex1pCHzTj2yVavNuXr8BtQlTsskcVi1EVgwDC3lQIgFcF22T%2FZ1TwSP%2BWckY5w8t0sKqAL6MQMMofFdp%2FibLMq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBITAVKEC0ZZUndQxCrcA5JiPM3sn5ItFoXgx4Q5t28irnSTEEwGO8o34cWEvQ7Tx200%2FKNEmwUQgddYEEaxndyMYkopMJ6iEwU8VHzwYVL9PaeR41Ym7WEqu%2BFIkqVfBoK9kalu%2FnChdMiDeygwAyxfcEu3g1DEC1X8vkJW8ZjIaDAwKX8vNRlXutJEQqkKZOQE9XZLEyyYLb02A1zf2ZS5Zy5hhXbQyQN5Q%2BxDmi2lKqdSJ3Y7v75BfU7Mhl%2Bnj22Vsn6aD6jCEW1adi55aWvhCyXhzZq5n90IXnyA1%2Bzc0Bts9BZ6OXRRjwg4cIPFKQskkokTy%2Bf0T4zHPNfwp5O0aeogEUZA6%2BbrjaALlHWRnKM3Ru%2BK3M0O1yf3aeKJr2hZc3hQTohjcykHgXtvsSTHzGeSJlfVVzDoPS64Y0%2F8uFgeqKbdVGn9X%2BITAgDv7SeSzakZcTxvoShGzFFHvVmpJ2nBBIGiefIzDn0%2BHhQGoj%2BaCOn6bsnTlPvNhBp8TduYYRE063oYYp3%2FekyYliiZnOHcUWfxk%2FPraKla971Sl4PEJ%2BNDpjTz0hwZBxhnOtuCF0HcLEoTCqVFn2a%2FWuJXqd2MSdTmkGH1EOXHATeuIQ0vB5a5hHXhMeKPTMNL0%2B3AeAFfccawt6uoML29hsAGOqUBuPw5GpPWRvCyMUYohTLLUmuS65bGsiEv2niwT0bOaXt3G3LklqMv%2BH4znGR%2BDPSFDMT25QSEytiP9ivNNe1wJ%2FkxGubdYYHvJDNWRlC%2FbmAViU3NYFQDy2IR8A3yFXWc%2BKRKkxYEFAVFf3qH1dIyIqv8gbov%2Bveq3WA%2FQ%2FWO%2BI1lDn5n0vIjDnpfrvKjDxtzL5dlNU%2Fc5PnmDxKtJxfscFt2SwdH&X-Amz-Signature=83c9a539f518b5ee86f07e152ba8c53f962c70682efa24b3da43cbf679cec086&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
